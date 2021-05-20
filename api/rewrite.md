|         |                 |
|---------|----------------:|
| rewrite | R Documentation |

## Interface for AST rewriting

### Description

Interface for AST rewriting

### Usage

    rewrite(ast, rules)

### Arguments

|         |                                                                     |
|---------|---------------------------------------------------------------------|
| `ast`   | A language object.                                                  |
| `rules` | A list of functions, each of which is the output from 'make\_rule'. |

### Value

A language object.

### Examples

    library(sketch)

    rewrite(
      ast = rlang::parse_expr("2 * (3 + pi)"),
      rules = list(make_rule("pi", "Math.PI"))
    )

    rewrite(
      ast = rlang::parse_expr("2 + pi"),
      rules = list(
        make_rule("pi", "Math.PI"),
        make_rule("+", "Math.add")
      )
    )

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
