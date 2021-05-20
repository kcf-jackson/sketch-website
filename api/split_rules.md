|              |                 |
|--------------|----------------:|
| split\_rules | R Documentation |

## Split rules for customisation

### Description

This function is the left-inverse of 'combine\_rules', i.e.
`split_rules(combine_rules(rs, group)) = rs` for any variable 'group'.
It is created to facilitate the addition or removal of rewriting rules.

### Usage

    split_rules(rs)

### Arguments

|      |                                                                                                                         |
|------|-------------------------------------------------------------------------------------------------------------------------|
| `rs` | A list of (grouped) rewriting rules. Note that a list of n rules without grouping is a list of n groups of single rule. |

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
