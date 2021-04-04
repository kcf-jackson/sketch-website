---  
title: Debugging  
---

Converting R code to JavaScript code is an elaborate process, and things could go wrong in a few different places. We will explain below what some of the common error messages mean and how to debug a **sketch** application in general.

## Pre-transpilation check

The transpiler comes with a safeguard which performs some check before the transpilation begins. The safeguard checks whether the reserved words are used as variables. The reserved words referred to here cover more than the standard reserved words (like `function`, `if`, `for`, etc.) and include some of the R functions provided by the "base" package. For example, the word `max` refers to the max function, and it cannot be used as variable. When one tries to use the word `max` as variable, or function arguments, **sketch** would issue warnings like the following:

>
Warning messages:  
In check_assignment(ast, reserved_words) :  
You assigned a value to the reserved word 'max' in the following expression:  
max <- 10

>
Warning message:  
In .f(.x[[i]], ...) :  
You used the reserved word 'max' as the function argument name in the following expression:  
function(max) { print(max) }

This is a limitation of transpilation via static code analysis. To circumvent the issue, one could either rename the variable to some other names (say `max0` or `max_fun`) or switch off the rewriting rule for the word `max`. The detail of the latter approach is discussed in the [customisation](/customisation) page.



## Transpilation warning
There are a couple of rules to follow for a successful transpilation.

1. Arguments provided to `list` must be fully named. An expression like `list(1, x = 2)` would trigger a warning:

>
In .f(.x[[i]], .y[[i]], ...) :  
All elements in a list must be named to convert into JavaScript properly.

2. When `default_2_deparsers()` is used, the last expression of the function (i.e. the default return value) must be a value, not a statement. Specifically, it cannot be an assignment-statement, if-statement, or a for/while-loop. The expression `f <- function() x <- 3` would trigger:

>
Warning in is_valid_add(last_expr, ...) :  
You have used an assignment statement as the final expression in:  
var x = 3  
Note that automatic explicit return only applies to standalone values but not statements.

while the expression `g <- function() if (TRUE) 1 else 2` would trigger:

>
Warning in is_valid_add(last_expr, ...) :  
You have used a control-flow statement as the final expression in:  
if (true) 1 else 2  
Note that automatic explicit return only applies to standalone values but not statements.


## Debugging console

A mini console which mirrors the browser console is provided for the simple kind of debugging. To enable it, use the `debug = TRUE` option in `source_r` function call. Once enabled, a console will be attached at the top of your **sketch** application. Here is a screenshot (when the `print(x)` is provided as input):

![Console for debugging](/img/console_error.png)




## Browser console

The most important tool for general debugging is the browser console. It can be accessed by right clicking on the webpage and choosing the "Inspect" item.

<div class="flex height-30vh justify-center">
<img src="/img/chrome_right_click_menu.png"></img>
<img src="/img/firefox_right_click_menu.png"></img>
</div>

<div class="text-center mb-18">
Screenshot 1: Right-click menus of the Chrome browser and the Firefox browser
</div>

Once the console is opened, one can inspect the HTML elements with the "Elements" and "Styles" tabs and the namespace / variables in the "Console".

![](/img/chrome_console.png)
<div class="text-center">
Screenshot 2: the console of the Chrome browser
</div>


<link href="../css/docs-styles.css" rel="stylesheet"></link>
