|            |                 |
|------------|----------------:|
| html\_tags | R Documentation |

## HTML templates

### Description

A list of 'shiny.tag' objects describing a HTML template. The list must
have signature / structure of a named list:
`[head = [shiny.tag], body = [shiny.tag]]`

### Usage

    default_tags(local = TRUE)

    basic_tags()

### Arguments

|         |                                                                                                                                                                     |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `local` | TRUE / FALSE. If TRUE, the R base module is loaded from the local file stored in the package, otherwise, the module is served via a content delivery network (CDN). |

### Examples

    str(default_tags())

    str(basic_tags())

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
