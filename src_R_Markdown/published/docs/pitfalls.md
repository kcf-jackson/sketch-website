---  
title: Pitfalls  
---

## Common pitfalls writing JavaScript in R

The examples below use the following options

    debug = TRUE, rules = basic_rules(), deparsers = basic_deparsers(), asset_tags = basic_tags()

in the `source_r` function call. Under this setting, R functions are not
loaded into the environment.

### 1. JavaScript uses 0-based indexing

``` sketch
x <- Array(1, 2, 3)   # Array is a function provided in JavaScript
console::log(x[0])
```

### 2. Undeclared variables are created in the global environment

``` sketch
f <- function() {
    x <- 3      # Variable used without declaration
    return(x)
}
console::log(f())
console::log(x)        # 'x' shows up in the global!
```

While directly accessing and modifying global variables are not uncommon
in JavaScript visualisations - as we will see when we use p5.js in the
other articles - it is best to use it only when it is necessary. Here is
how one declares a variable before using it:

``` sketch
f <- function() {
    declare(x)  # Declare variable. Alternatively, you can combine
    x <- 3      # the two lines using `let(x = 3)`.
    return(x)
}
try(console::log(x))      # This will throw an error.
```

:::note

If you use `default_2_deparsers()` (introduced in version 1.1.0), then
**sketch** will automatically declare the variable for you.

:::

### 3. `return` in JavaScript function must be explicit

``` sketch
add <- function(x, y) { 
    x + y           # returns nothing, i.e. undefined
}  
console::log(add(3, 4))    # expects nothing

add2 <- function(x, y) { 
    return(x + y)   # returns x + y
}
console::log(add2(3, 4))   # expects 7
```

<div class="note">

If you use `default_2_deparsers()` (introduced in version 1.1.0), then
**sketch** will automatically handle `return` for you.

</div>

### 4. JavaScript function reads argument by position / order

``` sketch
first <- function(x, y) { 
    return(x)
}
console::log(first(y = 3, x = 1))   # the result is 3, not 1!
```

Note that since JavaScript does not use named argument, `y = 3` and
`x = 1` are actually interpreted as assignments! Both assignments will
happen before the function `first` is called.

But don’t worry, this won’t be a problem in **sketch** as it will strip
off all the names during the transpilation, i.e. `first(y = 3, x = 1)`
gets transpiled into `first(3, 1)`. The design decision rules out the
use of in-place assignments, but it guards against unintended ones.

### 5. JavaScript passes objects by reference (think of R6 in R)

``` sketch
x = Array(1, 2, 3)
y = x
z = Array(...x)  # make a copy explicitly

y[0] = 999
console::log(x)         # x is modified!
console::log(y)
console::log(z)
```

### 6. A browser session has a pre-populated namespace

For example, the variables `document`, `window`, `location`, `var`,
`stop`, `open`, `focus` are taken already. *Avoid assigning values to
these variables!*

The full list can be found with the following code:

``` sketch
# The object (strictly) named "window" refers to your browser window
for (b in Object::keys(window)) {
    if (window$hasOwnProperty(b)) console::log(b)
}
```

<link href="../css/docs-styles.css" rel="stylesheet"></link>
