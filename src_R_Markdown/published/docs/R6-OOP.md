---  
title: Object-Oriented Programming  
---

## Objects as closures

It can be succinct to implement an object using closures. Here is an
excellent example from [Ross and Robert (1996),
p.304](https://www.stat.auckland.ac.nz/~ihaka/downloads/R-paper.pdf):

``` r
#! config(debug = T, deparsers = default_2_deparsers())
account <- function(total) {
    list(balance = function() total,
         deposit = function(amount) total <<- total + amount,
         withdraw = function(amount) total <<- total - amount)
}

Robert <- account(1000)
Ross <- account(500)

Robert$deposit(100)
Ross$withdraw(150)

print(Robert$balance())  # expect 1100
print(Ross$balance())    # expect 350
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch/inst/assets/console-log-div.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIGFjY291bnQgPSBmdW5jdGlvbih0b3RhbCkgewogICAgcmV0dXJuIHsgImJhbGFuY2UiOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRvdGFsIH0sICJkZXBvc2l0IjogZnVuY3Rpb24oYW1vdW50KSB7IHRvdGFsID0gUi5hZGQodG90YWwsIGFtb3VudCkgfSwgIndpdGhkcmF3IjogZnVuY3Rpb24oYW1vdW50KSB7IHRvdGFsID0gUi5zdWJ0cmFjdCh0b3RhbCwgYW1vdW50KSB9IH0KfQp2YXIgUm9iZXJ0ID0gYWNjb3VudCgxMDAwKQp2YXIgUm9zcyA9IGFjY291bnQoNTAwKQpSb2JlcnQuZGVwb3NpdCgxMDApClJvc3Mud2l0aGRyYXcoMTUwKQpSLnByaW50KFJvYmVydC5iYWxhbmNlKCkpClIucHJpbnQoUm9zcy5iYWxhbmNlKCkpCg==&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-full height-110 bg-white rounded-lg">
</iframe>

## R6 style of declaration

The **sketch** package supports object declaration using the R6 OOP
syntax. Here is an example:

``` r
reactive <- R6Class(
    "reactive", 
    public = list(
        value_1 = NULL,
        method_1 = function() {
            print("Method 1 called")
            print("    value_1: " %+% self$value_1)
            print("    value_2: " %+% private$value_2)
        },
        initialize = function(x, y) {
            self$value_1 <- x
            private$value_2 <- y
            return(self)
        }
    ), 
    private = list(
        value_2 = NULL
    )
)

# Usage
x <- reactive$new(1, 999)
print("Fields and methods available to users: " %+% names(x))
x$method_1()
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch/inst/assets/console-log-div.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;data:application/javascript;base64,cmVhY3RpdmUgPSBmdW5jdGlvbih4LCB5KSB7CiAgICAvLyBwdWJsaWMgdmFyaWFibGVzIGFuZCBtZXRob2RzCiAgICBsZXQgc2VsZiA9IHRoaXMKICAgIHNlbGYudmFsdWVfMSA9IG51bGwKICAgIHNlbGYubWV0aG9kXzEgPSBmdW5jdGlvbigpIHsKICAgICAgICBSLnByaW50KCJNZXRob2QgMSBjYWxsZWQiKQogICAgICAgIFIucHJpbnQoIiAgICB2YWx1ZV8xOiAiICsgc2VsZi52YWx1ZV8xKQogICAgICAgIFIucHJpbnQoIiAgICB2YWx1ZV8yOiAiICsgcHJpdmF0ZS52YWx1ZV8yKQogICAgfQogICAgc2VsZi5pbml0aWFsaXplID0gZnVuY3Rpb24oeCwgeSkgewogICAgICAgIHNlbGYudmFsdWVfMSA9IHgKICAgICAgICBwcml2YXRlLnZhbHVlXzIgPSB5CiAgICAgICAgcmV0dXJuKHNlbGYpCiAgICB9CiAgICAvLyBwcml2YXRlIHZhcmlhYmxlcyBhbmQgbWV0aG9kcwogICAgbGV0IHByaXZhdGUgPSB7fQogICAgcHJpdmF0ZS52YWx1ZV8yID0gbnVsbAogICAgaWYgKHNlbGYuaW5pdGlhbGl6ZSkgewogICAgICAgIHNlbGYuaW5pdGlhbGl6ZSh4LCB5KQogICAgfQp9CnggPSBuZXcgcmVhY3RpdmUoMSwgOTk5KQpSLnByaW50KCJGaWVsZHMgYW5kIG1ldGhvZHMgYXZhaWxhYmxlIHRvIHVzZXJzOiAiICsgUi5uYW1lcyh4KSkKeC5tZXRob2RfMSgpCg==&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-full height-130 bg-white rounded-lg">
</iframe>

<link href="../css/docs-styles.css" rel="stylesheet"></link>
