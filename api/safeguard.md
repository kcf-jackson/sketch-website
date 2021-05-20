|           |                 |
|-----------|----------------:|
| safeguard | R Documentation |

## Perform pre-transpilation check

### Description

Perform pre-transpilation check

### Usage

    safeguard(ast, rules, deparsers)

### Arguments

|             |                                                                                        |
|-------------|----------------------------------------------------------------------------------------|
| `ast`       | A language object.                                                                     |
| `rules`     | A list of functions; the rewriting rules, each of which is the output from make\_rule. |
| `deparsers` | A list of functions; the deparsers, each of which is the output from make\_deparser.   |

### Value

TRUE when the check is complete.

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
