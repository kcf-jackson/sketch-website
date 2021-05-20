|        |                 |
|--------|----------------:|
| assets | R Documentation |

## Process assets in headers

### Description

Take a 'sketch' R file as input, extract and process the resources links
as provided by the user with the '\#!' header.

### Usage

    assets(file, ..., trace = FALSE)

### Arguments

|         |                                                                  |
|---------|------------------------------------------------------------------|
| `file`  | Character string; the file path.                                 |
| `...`   | (Optional) List of processors to pass to convert\_src.           |
| `trace` | TRUE or FALSE; if TRUE, assets are extracted, but not processed. |

### Examples

    file <- system.file("test_files/test_RMD.R", package = "sketch")
    assets(file, trace = TRUE)
    assets(file, trace = FALSE)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
