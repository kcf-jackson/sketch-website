|             |                 |
|-------------|----------------:|
| deparse\_js | R Documentation |

## Expression deparsing for JavaScript

### Description

This is the "master" deparser that dispatches the "worker" deparsers
based on the type of the input.

### Usage

    deparse_js(ast, deparsers)

### Arguments

|             |                              |
|-------------|------------------------------|
| `ast`       | language object.             |
| `deparsers` | A list of "typed" deparsers. |

### Value

A character string.

### Examples

    expr_1 <- parse_expr("R.extract(x, 3, )")
    deparse_js(expr_1, basic_deparsers())
    deparse_js(expr_1, default_deparsers())

    expr_2 <- parse_expr("R.data_frame(x = 1, y = 2)")
    deparse_js(expr_2, basic_deparsers())
    deparse_js(expr_2, default_deparsers())

    expr_3 <- parse_expr("lambda(x, x + 1)")
    deparse_js(expr_3, basic_deparsers())

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
