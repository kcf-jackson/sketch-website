---  
title: Customisation  
---

A major change that has occurred as the package reaches 1.0.0 is that every part of the transpiler becomes configurable. In this article, we discuss how one could create custom rewriting rules and deparsers for specific use.


## Custom rewriting rules

To create a rewriting rule, we use the `make_rule` function. It takes two strings and returns a function that rewrites the first string into the second string appeared in a language object.

```r
library(sketch)
rule_1 <- make_rule("Cpp", "JS")
rule_1

## Rule: Rewrite 'Cpp' to 'JS'.
## function (x) 
## subst(x, pattern = from, replacement = to)
## <bytecode: 0x7fa185179de8>
## <environment: 0x7fa18517dfa8>

expr <- parse_expr("R + Cpp")
expr

## R + Cpp

rule_1(expr)  # Works, but not preferred

## R + JS

rewrite(expr, list(rule_1))  # preferred

## R + JS

rule_2 <- make_rule("R", "Rust")
rewrite(expr, list(rule_1, rule_2))

## Rust + JS
```

A custom rewriter is usually needed when one wants to do arithmetic of a special class of objects offered by some JavaScript library. For example, in the case of [**math.js**](https://mathjs.org/), addition is expected to be carried out as `math.add(x, y)` to allow for adding together different types of objects (like vectors and matrices). In such case, we would define the rule as follows.

```r
rule_addition <- make_rule("+", "math.add")
rule_addition

## Rule: Rewrite '+' to 'math.add'.
## function (x) 
## subst(x, pattern = from, replacement = to)
## <bytecode: 0x7fa185179de8>
## <environment: 0x7fa18493f3f8>
```

Once the rule is created, it can be passed to the transpiler using the `rules` argument. Specifically,

```r
compile_exprs("1 + 2", rules = list(rule_addition))

## [1] "math.add(1, 2)"
```


Here is an example with [**tensorflow.js**](https://www.tensorflow.org/js/):

```r
tf_rules <- list(
    make_rule("+", "tf.add"),
    make_rule("-", "tf.subtract"),
    make_rule("*", "tf.multiply"),
    make_rule("/", "tf.divide"),
    make_rule("%*%", "tf.matmul")
)

# Now your R expression will transpile to JavaScript using tensorflow's API
compile_exprs("(A + B) %*% C", rules = tf_rules)

## [1] "tf.matmul((tf.add(A, B)), C)"
```

## Custom deparsers

A custom deparser is needed when there is certain construct that cannot be expressed as a simple rewriting rule. For example, consider the for-loop, in R, it looks like:

```r
for (i in x) {...}
```

and the corresponding version in JavaScript is:

```r
for (let i of x) {...}
```

In such case, the transpilation cannot be done with a simple rewriting rule, and a custom deparser is needed. To create a deparser, two functions are needed: a predicate function that recognises the function-call trigger and a deparse function that performs the transpilation.

The predicate function must take an ???expression??? returned by `parse_expr` (imported from `rlang::parse_expr`) and return a logical vector of length one.

```r
is_for <- function(x) {
    rlang::is_call(x, name = "for")
}

# Unit test
expr_1 <- parse_expr("for (i in x) { print(i) }")
is_for(expr_1)

## [1] TRUE

expr_2 <- parse_expr("foo(x, y)")
is_for(expr_2)

## [1] FALSE
```

The deparse function takes the same input as the predicate function and returns a character string. Note that `...` must be provided to stay consistent with other deparsers provided by this package. For illustration purposes, we capitalise ???of??? to distinguish the custom deparser with the one provided by the package.

```r
collapse <- function(x, s = "\n") paste(x, collapse = s)

deparse_for <- function(ast, ...) {
    # Turn the symbol into strings
    symbol_str <- purrr::map_chr(ast, deparse1)    # Note 1
    
    # Rearrange them in the desired form
    sprintf(
        "%s (let %s OF %s) %s", 
        symbol_str[1],  # for
        symbol_str[2],  # i
        symbol_str[3],  # x
        collapse(symbol_str[4])   # body
    )
}

# Unit test
expr_1 <- parse_expr("for (i in x) { print(i) }")
deparse_for(expr_1)

## [1] "for (let i OF x) {     print(i) }"
```


To integrate your custom deparser into the ???master??? deparser provided by this package, `deparse_js`, first replace the `deparse1` call in the line marked ???Note 1??? by `deparse_js`, and combine the predicate function and the deparse function with `make_deparser`, then add your deparser to any of the existing lists of deparsers, i.e. `basic_deparsers()` / `default_deparsers()` (or you can build your list from scratch too). Here is the full listing of the resulting code:


```r
# Step 1 (see updates on line 4)
deparse_for <- function(ast, ...) {
    # Turn the symbol into strings
    symbol_str <- purrr::map_chr(ast, deparse_js, ...)   # **UPDATED**

    # Rearrange them in the desired form
    sprintf(
        "%s (let %s OF %s) %s", 
        symbol_str[1],  # for
        symbol_str[2],  # i
        symbol_str[3],  # x
        collapse(symbol_str[4])   # body
    )
}

# Step 2
my_deparser <- make_deparser(is_for, deparse_for)

# Step 3
customised_deparsers <- c(list(my_deparser), default_deparsers())

# Remark: In most cases, you want your custom deparser to have a higher precedence 
# than the package's ones. So it is added to the front rather than to the end.


# Unit test
cat(compile_exprs(
    "for (i in 1:10) { print(i) }", 
    deparsers = customised_deparsers
))

## for (let i OF R.seq(1, 10)) {
##     R.print(i)
## }
```
