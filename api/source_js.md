|            |                 |
|------------|----------------:|
| source\_js | R Documentation |

## Serve a compiled 'sketch' JavaScript file

### Description

Serve a compiled 'sketch' JavaScript file

### Usage

    source_js(file, debug = FALSE, asset_tags = default_tags(), launch_browser)

### Arguments

|                  |                                                                                                                                                                                                                                                                           |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`           | A character string; path to the compiled JS file.                                                                                                                                                                                                                         |
| `debug`          | TRUE or FALSE; if TRUE, a console for debugging is attached to your app.                                                                                                                                                                                                  |
| `asset_tags`     | An optional list of 'shiny.tag' objects to be added to the html template. The list must have signature / structure of a named list: `[head = [shiny.tag], body = [shiny.tag]]`, containing the `head` and `body` elements, each of which is a list of `shiny.tag` object. |
| `launch_browser` | A character string; "viewer" or "browser", which calls 'rstudioapi::viewer' and 'utils::browseURL' respectively; use NULL to suppress display.                                                                                                                            |

### Examples

    ## Not run: 
    file <- system.file("test_files/test_source.js", package = "sketch")
    # The next line launches the default HTML browser
    source_js(file, debug = TRUE, launch_browser = "browser")

    ## End(Not run)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
