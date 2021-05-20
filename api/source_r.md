---
slug: /
---

|           |                 |
|-----------|----------------:|
| source\_r | R Documentation |

## Source a 'sketch' R file

### Description

This function compiles a 'sketch' R file, resolves the dependencies and
serves it in the viewer.

### Usage

    source_r(file, debug = FALSE, launch_browser, asset_tags = default_tags(), ...)

### Arguments

|                  |                                                                                                                                                                                 |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`           | A character string; path to the R file.                                                                                                                                         |
| `debug`          | TRUE or FALSE; if TRUE, a console for debugging is attached to your app.                                                                                                        |
| `launch_browser` | A character string; "viewer" or "browser", which calls 'rstudioapi::viewer' and 'utils::browseURL' respectively; use NULL to suppress display.                                  |
| `asset_tags`     | An optional list of 'shiny.tag' objects to be added to the html template. The list must have signature / structure of a named list: `[head = [shiny.tag], body = [shiny.tag]]`, |
| `...`            | Additional arguments to pass to 'compile\_r'.                                                                                                                                   |

### Examples

    ## Not run: 
    file <- system.file("test_files/test_source.R", package = "sketch")
    # The next line launches the default HTML browser
    source_r(file, debug = TRUE, launch_browser = "browser")

    ## End(Not run)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
