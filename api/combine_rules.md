|                |                 |
|----------------|----------------:|
| combine\_rules | R Documentation |

## Combine rules for fast transpilation

### Description

This function turns an n-pass transpilation into k-pass, where n is the
number of rules and k is the number of precedence groups.

### Usage

    combine_rules(rs, group = rep(1, length(rs)))

### Arguments

|         |                                                                                                                                                                                                                                                                                                  |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `rs`    | A list of rewriting rules (each of which is an output from make\_rule).                                                                                                                                                                                                                          |
| `group` | A numeric vector; the precedence group. Rules with a higher precedence come before the the ones with lower precedence, and they are processed by the transpiler first. For rules with the same precedence, the natural order (in which they show up) determines which rules get processed first. |

### Note

The key insight about optimising the transpilation is that rewriting
passes that do not interfere with each other can be combined, and it
saves a full traversal of the parse tree.

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
