|              |                 |
|--------------|----------------:|
| test\_sketch | R Documentation |

## Test a sketch application

### Description

Test a sketch application

### Usage

    test_sketch(app_script, test_script, port = 9454, ...)

### Arguments

|               |                                                 |
|---------------|-------------------------------------------------|
| `app_script`  | A character string; the file path to the app.   |
| `test_script` | A character string; the file path to the tests. |
| `port`        | An integer to pass to 'websocket$new()'.        |
| `...`         | Additional arguments to pass to source\_r.      |

### Value

A "websocket" object.

### Examples

    ## Not run: 
    app_file <- system.file("test_files/test_testthat_app.R", package = "sketch")
    test_file <- system.file("test_files/test_testthat_test.R", package = "sketch")
    # This following command will launch the default browser
    res <- test_sketch(app_file, test_file)

    ## End(Not run)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
