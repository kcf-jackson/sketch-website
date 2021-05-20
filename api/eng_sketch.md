|             |                 |
|-------------|----------------:|
| eng\_sketch | R Documentation |

## A language engine for 'sketch'

### Description

This supports the use of 'sketch' code chunk in an R Markdown document.

### Usage

    eng_sketch(options)

### Arguments

|           |                          |
|-----------|--------------------------|
| `options` | A list of chunk options. |

### Examples

    # The following line makes `sketch::eng_sketch` available to `knitr::knit_engines`.
    # It is usually used in the 'setup' code chunk of an R Markdown document
    knitr::knit_engines$set(sketch = sketch::eng_sketch)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
