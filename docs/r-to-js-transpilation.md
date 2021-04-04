---  
title: Transpiling R to JavaScript  
---

To be productive developing JavaScript application in R, it is helpful to know some of the correspondence between the R and JavaScript syntax. This will not only help you debug your code better, but also make it easier to read the documentation of JavaScript libraries.


## The three most common conversions
1. `list` maps to a JavaScript Object

    - `list(x = 1, y = 1)` becomes `{x: 1, y: 1}`

    Most JavaScript libraries store and manipulate data using JavaScript Object.

2. `c` gives a JavaScript Array with copy-by-value semantics and without nesting

    - `Array(1, 2, Array(3, 4))` becomes `[1, 2, [3, 4]]`;
    - `c(1,2, c(3,4))` gives `[1, 2, 3, 4]`;

    Some JavaScript libraries may expect nested Array as input, in which case one has to use `Array` instead of `c`.

3. `$` and `::` in R maps to `.` in JavaScript

    -  In words, objects and namespaces in R (syntactically) map to objects in JavaScript.
    - It is common to see JavaScript libraries organise their functions with an object. For instance, functions in mathjs are stored in the object called `math` and one calls a function `fun_1` by `math.fun_1`. To do that in R, simply load the library using the [#! header](/manage_assets_and_deployment), then call the function by the name `math::fun_1` or `math$fun_1`.
