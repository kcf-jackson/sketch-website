---  
title: The DOM module  
---

The [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) module is
there to help user create HTML files and build interfaces.

## Creation and Rendering

The two functions for creating and rendering DOM elements are `dom` and
`print_dom` (with alias `render`). The function signature of `dom` is
`dom(tag, attr, ...)`, where

-   `tag` (character) is the name of a HTML tag,
-   `attr` (a named list) is the attributes of the tag, and
-   `...` may include additional tags that are inserted into the current
    tag.

Here is an example:

``` sketch
#! load_library("dom")
x <- dom("div", list(innerText = "Hello World!"))
print_dom(x)

y <- dom("div", list(innerText = "Full-width color", style = "background: yellow;"))
print_dom(y)

z <- dom("div", list(),
        dom("span", list(innerText = "Wrap-around color", style = "background: Gold;")))
print_dom(z)
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;data:text/javascript;base64,ZG9tID0gZnVuY3Rpb24odGFnMCwgYXR0cjAgPSB7ICB9KSB7CiAgICBsZXQgZG9tT2JqCiAgICBkb21PYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZzApCiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoYXR0cjApKSB7CiAgICAgICAgZG9tT2JqW2tleV0gPSBhdHRyMFtrZXldCiAgICB9CiAgICBsZXQgYXJncyA9IEFycmF5KC4uLmFyZ3VtZW50cyksIGFyZ3NfbGVuID0gYXJncy5sZW5ndGgKICAgIGlmIChhcmdzX2xlbiA+PSAzKSB7CiAgICAgICAgZm9yIChsZXQgZWwgb2YgYXJncy5zbGljZSgyKSkgewogICAgICAgICAgICBkb21PYmouYXBwZW5kQ2hpbGQoZWwpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuKGRvbU9iaikKfQpzZWxlY3RfZG9tID0gZnVuY3Rpb24oeCkgewogICAgcmV0dXJuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeCkpCn0Kc2VsZWN0X2RvbXMgPSBmdW5jdGlvbih4KSB7CiAgICByZXR1cm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh4KSkKfQpwcmludF9kb20gPSBmdW5jdGlvbihlbCwgeCA9ICJib2R5IikgewogICAgaWYgKHR5cGVvZiB4ID09ICJzdHJpbmciKSB7CiAgICAgICAgbGV0IHJlcwogICAgICAgIHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeCkKICAgICAgICByZXMuYXBwZW5kQ2hpbGQoZWwpCiAgICAgICAgcmV0dXJuKHJlcykKICAgIH0gZWxzZSB7CiAgICAgICAgeC5hcHBlbmRDaGlsZChlbCkKICAgICAgICByZXR1cm4oeCkKICAgIH0KfQpyZW5kZXIgPSBwcmludF9kb20KYXBwZW5kX2RvbXMgPSBmdW5jdGlvbihwYXJlbnQpIHsKICAgIGxldCBhcmdzID0gQXJyYXkoLi4uYXJndW1lbnRzKSwgYXJnc19sZW4gPSBhcmdzLmxlbmd0aAogICAgaWYgKGFyZ3NfbGVuID09IDEpIHsKICAgICAgICByZXR1cm4ocGFyZW50KQogICAgfQogICAgZm9yIChsZXQgZWwgb2YgYXJncy5zbGljZSgxKSkgewogICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCkKICAgIH0KICAgIHJldHVybihwYXJlbnQpCn0Kc3ZnID0gZnVuY3Rpb24odGFnMCwgYXR0cjApIHsKICAgIGxldCBzdmdPYmoKICAgIHN2Z09iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLCB0YWcwKQogICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGF0dHIwKSkgewogICAgICAgIHN2Z09iai5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyMFtrZXldKQogICAgfQogICAgbGV0IGFyZ3MgPSBBcnJheSguLi5hcmd1bWVudHMpLCBhcmdzX2xlbiA9IGFyZ3MubGVuZ3RoCiAgICBpZiAoYXJnc19sZW4gPj0gMykgewogICAgICAgIGZvciAobGV0IGVsIG9mIGFyZ3Muc2xpY2UoMikpIHsKICAgICAgICAgICAgc3ZnT2JqLmFwcGVuZENoaWxkKGVsKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybihzdmdPYmopCn0K&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIHggPSBkb20oImRpdiIsIHsgImlubmVyVGV4dCI6ICJIZWxsbyBXb3JsZCEiIH0pCnByaW50X2RvbSh4KQp2YXIgeSA9IGRvbSgiZGl2IiwgeyAiaW5uZXJUZXh0IjogIkZ1bGwtd2lkdGggY29sb3IiLCAic3R5bGUiOiAiYmFja2dyb3VuZDogeWVsbG93OyIgfSkKcHJpbnRfZG9tKHkpCnZhciB6ID0gZG9tKCJkaXYiLCB7ICB9LCBkb20oInNwYW4iLCB7ICJpbm5lclRleHQiOiAiV3JhcC1hcm91bmQgY29sb3IiLCAic3R5bGUiOiAiYmFja2dyb3VuZDogR29sZDsiIH0pKQpwcmludF9kb20oeikK&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-90">
</iframe>

## Shorthand notation

A shorthand notation has been included in `default_2_deparsers()`, and
it resembles the syntax used by **shiny**. The tag name becomes a
function call; all named arguments will be passed to `dom` as
attributes, and the unnamed ones are passed as the additional tags to be
included.

``` sketch
#! load_library("dom")
x <- div(innerText = "Hello World")
print_dom(x)

y <- div(innerText = "Full-width color", style = "background: yellow;")
print_dom(y)

z <- div(span(innerText = "Wrap-around color", style = "background: Gold;"))
print_dom(z)
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;data:text/javascript;base64,ZG9tID0gZnVuY3Rpb24odGFnMCwgYXR0cjAgPSB7ICB9KSB7CiAgICBsZXQgZG9tT2JqCiAgICBkb21PYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZzApCiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoYXR0cjApKSB7CiAgICAgICAgZG9tT2JqW2tleV0gPSBhdHRyMFtrZXldCiAgICB9CiAgICBsZXQgYXJncyA9IEFycmF5KC4uLmFyZ3VtZW50cyksIGFyZ3NfbGVuID0gYXJncy5sZW5ndGgKICAgIGlmIChhcmdzX2xlbiA+PSAzKSB7CiAgICAgICAgZm9yIChsZXQgZWwgb2YgYXJncy5zbGljZSgyKSkgewogICAgICAgICAgICBkb21PYmouYXBwZW5kQ2hpbGQoZWwpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuKGRvbU9iaikKfQpzZWxlY3RfZG9tID0gZnVuY3Rpb24oeCkgewogICAgcmV0dXJuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeCkpCn0Kc2VsZWN0X2RvbXMgPSBmdW5jdGlvbih4KSB7CiAgICByZXR1cm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh4KSkKfQpwcmludF9kb20gPSBmdW5jdGlvbihlbCwgeCA9ICJib2R5IikgewogICAgaWYgKHR5cGVvZiB4ID09ICJzdHJpbmciKSB7CiAgICAgICAgbGV0IHJlcwogICAgICAgIHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeCkKICAgICAgICByZXMuYXBwZW5kQ2hpbGQoZWwpCiAgICAgICAgcmV0dXJuKHJlcykKICAgIH0gZWxzZSB7CiAgICAgICAgeC5hcHBlbmRDaGlsZChlbCkKICAgICAgICByZXR1cm4oeCkKICAgIH0KfQpyZW5kZXIgPSBwcmludF9kb20KYXBwZW5kX2RvbXMgPSBmdW5jdGlvbihwYXJlbnQpIHsKICAgIGxldCBhcmdzID0gQXJyYXkoLi4uYXJndW1lbnRzKSwgYXJnc19sZW4gPSBhcmdzLmxlbmd0aAogICAgaWYgKGFyZ3NfbGVuID09IDEpIHsKICAgICAgICByZXR1cm4ocGFyZW50KQogICAgfQogICAgZm9yIChsZXQgZWwgb2YgYXJncy5zbGljZSgxKSkgewogICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCkKICAgIH0KICAgIHJldHVybihwYXJlbnQpCn0Kc3ZnID0gZnVuY3Rpb24odGFnMCwgYXR0cjApIHsKICAgIGxldCBzdmdPYmoKICAgIHN2Z09iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLCB0YWcwKQogICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGF0dHIwKSkgewogICAgICAgIHN2Z09iai5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyMFtrZXldKQogICAgfQogICAgbGV0IGFyZ3MgPSBBcnJheSguLi5hcmd1bWVudHMpLCBhcmdzX2xlbiA9IGFyZ3MubGVuZ3RoCiAgICBpZiAoYXJnc19sZW4gPj0gMykgewogICAgICAgIGZvciAobGV0IGVsIG9mIGFyZ3Muc2xpY2UoMikpIHsKICAgICAgICAgICAgc3ZnT2JqLmFwcGVuZENoaWxkKGVsKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybihzdmdPYmopCn0K&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIHggPSBkb20oImRpdiIsIHsgImlubmVyVGV4dCI6ICJIZWxsbyBXb3JsZCIgfSkKcHJpbnRfZG9tKHgpCnZhciB5ID0gZG9tKCJkaXYiLCB7ICJpbm5lclRleHQiOiAiRnVsbC13aWR0aCBjb2xvciIsICJzdHlsZSI6ICJiYWNrZ3JvdW5kOiB5ZWxsb3c7IiB9KQpwcmludF9kb20oeSkKdmFyIHogPSBkb20oImRpdiIsIHt9LCBkb20oInNwYW4iLCB7ICJpbm5lclRleHQiOiAiV3JhcC1hcm91bmQgY29sb3IiLCAic3R5bGUiOiAiYmFja2dyb3VuZDogR29sZDsiIH0pKQpwcmludF9kb20oeikK&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-90">
</iframe>

By the way, here is a reference for [HTML color
names](https://www.w3schools.com/colors/colors_names.asp).

<link href="../css/docs-styles.css" rel="stylesheet"></link>
