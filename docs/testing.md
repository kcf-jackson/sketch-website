---
title: Testing sketch application
sidebar_label: Testing
---

The function `test_sketch` is provided for testing applications developed using __sketch__ . The function takes two scripts, an app script and a test script. The way it works is that it adds a WebSocket connection to the app (if there isn't one already), runs the test and then reports back the results. 

#### An example

```{r}
library(sketch)

# Set up sample app and test scripts
app_script <- tempfile(fileext = ".R")
cat("fib <- function(n) {
        if (n <= 2) return(1)
        return(fib(n-1) + fib(n-2))
    }\n",
    file = app_script)

test_script <- tempfile(fileext = ".R")
cat("testthat::expect_equal(fib(1), 1)  
    testthat::expect_equal(fib(12), 144)
    testthat::expect_equal(fib(12), 999)  # intentionally make this fail
    ",
    file = test_script)

# Run the test
con <- test_sketch(app_script, test_script)
```

#### Screenshot

![](/img/testthat_report.png)


__Note:__ Currently, `testthat` only supports `expect_true`, `expect_false` and `expect_equal`. Pull requests are warmly welcome.

