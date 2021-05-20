|                |                 |
|----------------|----------------:|
| compile\_exprs | R Documentation |

## Compile R code into JavaScript code

### Description

Compile R code into JavaScript code

### Usage

    compile_exprs(x, rules = default_rules(), deparsers = default_deparsers())

### Arguments

|             |                                                            |
|-------------|------------------------------------------------------------|
| `x`         | A character string; the expression to transpile to JS.     |
| `rules`     | A list of rewriting rules. See make\_rule for more detail. |
| `deparsers` | A list of deparsers. See make\_deparser for more detail.   |

### Value

A character string.

### Examples

    compile_exprs("R + Cpp", list(make_rule('Cpp', 'JS')))
    compile_exprs("math.add(a, b)", list(make_rule('math.add', '+')))

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
