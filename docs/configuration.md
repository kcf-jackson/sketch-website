---  
title: Configuration  
---

## Transpiler configuration
There are two set of rewriting rules, `basic_rules()` and `default_rules()`, and three set of deparsers, `basic_deparsers()`, `default_deparsers()` and `default_2_deparsers()`, to be used with the key function `source_r`.

If you are a new user, it is recommended to use them in pairs, i.e., use

1. `basic_rules()` with `basic_deparsers()`,
2. `default_rules()` with `default_deparsers()` / `default_2_deparsers()`.

When you get more experienced and understand what the rules and deparsers do, you may mix-and-match (and even customise) them to your need.

:::tip

For first-time readers, it is recommeded to use `default_rules()` and `default_2_deparsers()` and head straight to the [tutorial](/tutorial/) to start coding! Come back to this later, after you have played around with the package for a bit.

:::


In more detail, rewriting rules are responsible for replacing R functions and keywords by the JavaScript equivalent, e.g. turning `max` to `Math.max`, and deparsers are for structural transform, e.g. turning a R for-loop into a JavaScript for-loop.

The main difference between the options are that

1. `basic_rule()` and `basic_deparsers()` perform the least transpilation possible to convert R code into JavaScript code, and it does not provide any R function support. It is recommended for users who want

    - maximum compatibility with certain JavaScript libraries,
    - the transpiled code to look more like idiomatic JavaScript, and
    - room for customisation and some extra robustness.
2. 
`default_rules()` and `default_deparsers()` come with the support of R functions / data structure, (see API for the full list), and `default_deparsers_2()` adds some extra features on top of `default_deparsers()`. Specifically, aligned with JavaScript, `default_deparsers()` requires variables to be explicitly declared before use and all returns need to explicitly stated. Here is an example:

```r
# Explicit variable declaration
declare (x, y, z)
x <- 1
y <- 1
z <- x + y

# Alternatively
let (x = 1, y = 1, z)
z <- x + y


# Explicit function return
add_two_numbers <- function(x, y) {
    return(x + y)
}
```


On the other hand, `default_2_deparsers()` handles the variable declaration and function return for you. This is basically the same as the usual R practice, except that JavaScript does not allow returning a control-flow statement (if-statement, for-loop, etc.) in which case one need to create a variable to store the result and return that instead. This point applies to both default deparsers.

The choice between `default_deparsers()` and `default_2_deparsers()` boils down to whether you want to lean toward the JavaScript style or the R style. For users with little background in JavaScript, it is highly recommended to begin with `default_2_deparsers()`.



## Write once and forget

Once you start developing with **sketch**, you may find it rather inconvenient to repeatedly type the full command like

```r
source_r(file_1, rules = default_rules(), deparsers = default_2_deparsers())
```

and it is also easy to forget at a later time which `rules` and `deparsers` were used during development. That is where the `config` header comes in handy. By including the header in your file, like e.g.

```r
#! config(rules = default_rules(), deparsers = default_2_deparsers())
```

you can then call `source_r()` without any additional arguments. **sketch** will look into the `config` header and apply the arguments for you. This is particularly useful if you use RStudio and have binded the `source_active()` function to a hotkey, because with such setup you do not need to switch to the R console at all.

The precedence regarding how the arguments are applied is as follows:

> Default arguments << Configuration arguments << Function call arguments

In words, the setting provided in the configuration overrides the default arguments, and the setting in the function call (if provided) overrides all the others.
