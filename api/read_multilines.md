|                  |                 |
|------------------|----------------:|
| read\_multilines | R Documentation |

## Read one or more lines from the Terminal

### Description

`read_multilines` reads one or more lines from the terminal (in
interactive use).

### Usage

    read_multilines(prompt)

### Arguments

|          |                                                                                              |
|----------|----------------------------------------------------------------------------------------------|
| `prompt` | the string printed when prompting the user for input. Should usually end with a space `" "`. |

### Details

This function repeatedly calls `readline` until enough inputs are
provided to reach a successful parse.

This can only be used in an interactive session.

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
