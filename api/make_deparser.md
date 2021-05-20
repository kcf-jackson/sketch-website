|                |                 |
|----------------|----------------:|
| make\_deparser | R Documentation |

## A constructor for a "typed" deparser

### Description

A constructor for a "typed" deparser

### Usage

    make_deparser(predicate_fun, deparse_fun)

### Arguments

|                 |                                                                      |
|-----------------|----------------------------------------------------------------------|
| `predicate_fun` | A function that takes a "lang" object and return a logical.          |
| `deparse_fun`   | A function that takes a "lang" object and return a character string. |

### Value

A list; a deparser ready to be dispatched by "type".

### Examples

    str(make_deparser(predicate_fun = rlang::is_call, deparse_fun = deparse))

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
