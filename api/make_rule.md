|            |                 |
|------------|----------------:|
| make\_rule | R Documentation |

## Make a AST transformation rule

### Description

Make a AST transformation rule

### Usage

    make_rule(from, to)

### Arguments

|        |                     |
|--------|---------------------|
| `from` | A character string. |
| `to`   | A character string. |

### Value

A function that takes a language object and returns a language object.

### Examples

    library(sketch)

    rule_1 <- make_rule("pi", "Math.PI")
    expr <- rlang::parse_expr("2 * (3 + pi)")

    rule_1(expr)  # this works but is not the preferred usage
    rewrite(expr, list(rule_1))  # this is preferred

    rule_2 <- make_rule("+", "Math.add")
    rewrite(expr, list(rule_1, rule_2))

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
