|          |                 |
|----------|----------------:|
| is\_call | R Documentation |

## Predicate for calls

### Description

Predicate for calls

### Usage

    is_call(x, name = NULL, n = NULL, ns = NULL)

### Arguments

<table data-summary="R argblock">
<tbody>
<tr class="odd" data-valign="top">
<td><code>x</code></td>
<td><p>An object to test. If a formula, the right-hand side is extracted.</p></td>
</tr>
<tr class="even" data-valign="top">
<td><code>name</code></td>
<td><p>An optional name that the call should match. It is passed to <code>sym()</code> before matching. This argument is vectorised and you can supply a vector of names to match. In this case, <code>is_call()</code> returns <code>TRUE</code> if at least one name matches.</p></td>
</tr>
<tr class="odd" data-valign="top">
<td><code>n</code></td>
<td><p>An optional number of arguments that the call should match.</p></td>
</tr>
<tr class="even" data-valign="top">
<td><code>ns</code></td>
<td><p>The namespace of the call. If <code>NULL</code>, the namespace doesn't participate in the pattern-matching. If an empty string <code>""</code> and <code>x</code> is a namespaced call, <code>is_call()</code> returns <code>FALSE</code>. If any other string, <code>is_call()</code> checks that <code>x</code> is namespaced within <code>ns</code>.</p>
<p>Can be a character vector of namespaces, in which case the call has to match at least one of them, otherwise <code>is_call()</code> returns <code>FALSE</code>.</p></td>
</tr>
</tbody>
</table>

### Note

This function is imported from 'rlang'.

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>
