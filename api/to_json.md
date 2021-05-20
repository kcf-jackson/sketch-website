|          |                 |
|----------|----------------:|
| to\_json | R Documentation |

## Convert a file into a JavaScript expression

### Description

It supports csv and json by default and lets users provide custom
handlers if other file formats are used.

### Usage

    to_json(input, as_data_frame, read_fun, ...)

### Arguments

|                 |                                                                                                                                                                                                                                                                        |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `input`         | A character string; the path to the input file.                                                                                                                                                                                                                        |
| `as_data_frame` | TRUE or FALSE; whether the data are loaded as a data-frame.                                                                                                                                                                                                            |
| `read_fun`      | A function to load the input file. Default settings are provided for CSV files and JSON files. The function has to load a data file into an object that can be handled by 'jsonlite::toJSON'. Possible choices include 'utils::read\_delim', 'readr::read\_csv2', etc. |
| `...`           | Extra arguments to be passed to 'read\_fun'.                                                                                                                                                                                                                           |

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
