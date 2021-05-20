|                |                 |
|----------------|----------------:|
| insert\_sketch | R Documentation |

## Insert a 'sketch' app into an R Markdown document

### Description

Insert a 'sketch' app into an R Markdown document

### Usage

    insert_sketch(file, id, output_dir = NULL, render = TRUE, ...)

### Arguments

|              |                                                                                                                                    |
|--------------|------------------------------------------------------------------------------------------------------------------------------------|
| `file`       | A character string; the path to the 'sketch' file.                                                                                 |
| `id`         | A character string; an unique identifier for the 'sketch' file. Needed only when `output_dir` is not `NULL`.                       |
| `output_dir` | A character string; a separate directory to save the 'sketch' app. Default to be NULL, which embeds the app in the Rmd file.       |
| `render`     | TRUE or FALSE; if TRUE, call doRenderTags; if FALSE, return the 'shiny.tag' object.                                                |
| `...`        | (Optional) Other attributes to pass to iframes. Also supports the 'rules', 'deparsers' and 'debug' options to pass to 'source\_r'. |

### Value

An HTML string if `render` is TRUE, or a 'shiny.tag' object if `render`
is FALSE.

### Examples

    # In an R code chunk of an R Markdown document
    file <- system.file("test_files/test_RMD.R", package = "sketch")
    insert_sketch(file, style = "width:500px; height:500px;", render = FALSE)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
