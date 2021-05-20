|             |                 |
|-------------|----------------:|
| parse\_expr | R Documentation |

## Parse R code

### Description

Parse R code

### Usage

    parse_expr(x)

### Arguments

|     |                                                                                                                                                                                                                                |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `x` | Text containing expressions to parse\_expr for `parse_expr()` and `parse_exprs()`. Can also be an R connection, for instance to a file. If the supplied connection is not open, it will be automatically closed and destroyed. |

### Note

This function is imported from 'rlang'.

### Examples

    parse_expr("x <- 1 + 1")

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
