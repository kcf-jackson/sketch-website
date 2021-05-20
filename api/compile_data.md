|               |                 |
|---------------|----------------:|
| compile\_data | R Documentation |

## Compile a data file into a JavaScript file

### Description

Compile a data file into a JavaScript file

### Usage

    compile_data(input, output = tempfile(), ...)

### Arguments

|          |                                                  |
|----------|--------------------------------------------------|
| `input`  | A character string; the path to the input file.  |
| `output` | A character string; the path to the output file. |
| `...`    | Extra arguments to be passed to to\_json.        |

### Examples

    file <- system.file("test_files/test_csv.csv", package = "sketch")
    readLines(compile_data(file))

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
