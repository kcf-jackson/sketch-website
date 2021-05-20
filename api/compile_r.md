|            |                 |
|------------|----------------:|
| compile\_r | R Documentation |

## Compile an R file into a JavaScript file

### Description

Compile an R file into a JavaScript file

### Usage

    compile_r(
      input,
      output = "",
      rules = default_rules(),
      deparsers = default_deparsers()
    )

### Arguments

|             |                                                                                                           |
|-------------|-----------------------------------------------------------------------------------------------------------|
| `input`     | A character string; the input file.                                                                       |
| `output`    | A character string; the output file. When the output is "", the result is printed to the standard output. |
| `rules`     | A list of rewriting rules. See make\_rule for more detail.                                                |
| `deparsers` | A list of deparsers. See make\_deparser for more detail.                                                  |

### Value

A character string; the output file path.

### Examples

    file <- system.file("test_files/test_source.R", package = "sketch")
    readLines(file)
    compile_r(input = file)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
