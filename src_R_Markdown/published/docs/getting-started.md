---  
title: Introduction  
slug: /  
---

## Overview

`sketch` is an R package for creating animated and interactive
visualisations. It lets users develop JavaScript-style visualisations
using the R syntax, and it is designed to help

-   researchers create domain specific visualisation to support
    development and sharing of research,
-   journalists and science communicators publish high-quality and
    engaging interactive graphics,
-   business users make customised in-house reports, and
-   general users learn generative arts and interactive data
    visualisation.

In the core, the package is a transpiler which converts R code into
JavaScript code. It does so by rewriting an R parse tree into a
JavaScript one. Here is an illustration.

<img src="../img/ast_transform.png"></img>

### Installation

``` r
install.packages("sketch")

# For the development version
# install.packages("remotes")
remotes::install_github("kcf-jackson/sketch", "develop")
```

### Running a sketch R file

There are two ways to run a sketch R file.

1.  Save the sketch R file (with the usual .R extension), then call
    `sketch::source_r` with it.

2.  If you use RStudio, there is an add-in “source a sketch R file”
    listed under this package (consider binding that to the key
    combination alt-shift-s), and that sources the active tab in the
    editor. Alternatively, you can call the `source_active()` function.

------------------------------------------------------------------------

## First example with sketch

(In the following example, please use `source_r` with the option
`deparsers = default_2_deparsers()`.)

As the first example with **sketch**, we will use
[p5.js](https://p5js.org/) to make this animated visualisation:


<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIHBlcnNvbiA9IGZ1bmN0aW9uKGlkKSB7CiAgICByZXR1cm4geyAiaWQiOiBpZCwgIngiOiBSLnJ1bmlmKDEsIDAsIDQwMCksICJ5IjogUi5ydW5pZigxLCAwLCAzMDApLCAidngiOiBSLnJ1bmlmKDEsIC0yLCAyKSwgInZ5IjogUi5ydW5pZigxLCAtMiwgMikgfQp9CnZhciBtb3ZlID0gZnVuY3Rpb24ocGVyc29uKSB7CiAgICB2YXIgbmV3X3ggPSBSLmFkZChwZXJzb24ueCwgcGVyc29uLnZ4KQogICAgdmFyIG5ld195ID0gUi5hZGQocGVyc29uLnksIHBlcnNvbi52eSkKICAgIGlmIChSLm9yKFIuTFQobmV3X3gsIDApLCBSLkdUKG5ld194LCA0MDApKSkgewogICAgICAgIHBlcnNvbi52eCA9IFIubXVsdGlwbHkocGVyc29uLnZ4LCAtMSkKICAgIH0gZWxzZSB7CiAgICAgICAgcGVyc29uLnggPSBuZXdfeAogICAgfQogICAgaWYgKFIub3IoUi5MVChuZXdfeSwgMCksIFIuR1QobmV3X3ksIDMwMCkpKSB7CiAgICAgICAgcGVyc29uLnZ5ID0gUi5tdWx0aXBseShwZXJzb24udnksIC0xKQogICAgfSBlbHNlIHsKICAgICAgICBwZXJzb24ueSA9IG5ld195CiAgICB9CiAgICByZXR1cm4gbnVsbAp9CnZhciByYWRpdXMgPSA1CnZhciBwZW9wbGUgPSBSLm1hcChSLnNlcSgxLCA1MCksIHBlcnNvbikKdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICByZXR1cm4gY3JlYXRlQ2FudmFzKDQwMCwgMzAwKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKDAsIDAsIDMzKQogICAgZm9yIChsZXQgcGVyc29uIG9mIHBlb3BsZSkgewogICAgICAgIGZpbGwoMTkwLCAxMjgsIDApCiAgICAgICAgY2lyY2xlKHBlcnNvbi54LCBwZXJzb24ueSwgUi5tdWx0aXBseSgyLCByYWRpdXMpKQogICAgICAgIG1vdmUocGVyc29uKQogICAgfQogICAgcmV0dXJuIG51bGwKfQo=&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-330">
</iframe>


-   An important aspect of this package is that “Apps” produced by
    sketch run in the browser natively without an R back-end. The App is
    live, and it supports interactivity.

-   In fact, you can write sketch code directly in R Markdown documents,
    generate an HTML file, and share it online easily (just like this
    page you are reading right now!).

-   p5.js is chosen here because it has an user-friendly API and many
    good learning resources online.

### i. Basic structure

The structure of a p5 application looks like this:

#### main.R

``` sketch
#! load_library("p5")

setup <- function() {       
    createCanvas(400, 300)  # create a canvas of size 400 x 300 (w x h)
}

draw <- function() {        
    background(0, 0, 33)    # paint the background with the RGB colour
    fill("red")             # change fill colour to "red"
    circle(200, 150, 50)    # draw a circle (x, y, diameter)
}
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICByZXR1cm4gY3JlYXRlQ2FudmFzKDQwMCwgMzAwKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKDAsIDAsIDMzKQogICAgZmlsbCgicmVkIikKICAgIHJldHVybiBjaXJjbGUoMjAwLCAxNTAsIDUwKQp9Cg==&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-330">
</iframe>

-   `#! load_library` is used to load the p5 library. Despite being
    commented out, lines starting with `#!` are actually processed by
    the **sketch** package.

-   p5.js looks for functions named (specifically) `setup` and `draw`,
    and it runs

    -   `setup` once at the start of the App, and
    -   `draw` iteratively 60 times per second after the App starts.

-   `createCanvas`, `background`, `fill` and `circle` are functions
    provided by p5.js for drawing on the screen.

### ii. Add more circles

Let’s create a `person` object, and draw 50 of them on the screen. We
need an `id` to identify the person and its coordinates `x` and `y` at
which a circle will be drawn.

```sketch {3,4,5,6,7,8,9,10,18,19,20,21} 
#! load_library("p5")

# Make a "person" object
person <- function(id) {
    list(id = id, x = runif(1, 0, 400), y = runif(1, 0, 300))
}

# Set up variables
radius <- 5
people <- map(1:50, person)

setup <- function() {
    createCanvas(400, 300)  
}

draw <- function() {
    background(0, 0, 33)    
    for (person in people) {   # Use a for loop to draw one person at a time
        fill(190, 128, 0)                
        circle(person$x, person$y, 2*radius)   
    }
    NULL
}
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIHBlcnNvbiA9IGZ1bmN0aW9uKGlkKSB7CiAgICByZXR1cm4geyAiaWQiOiBpZCwgIngiOiBSLnJ1bmlmKDEsIDAsIDQwMCksICJ5IjogUi5ydW5pZigxLCAwLCAzMDApIH0KfQp2YXIgcmFkaXVzID0gNQp2YXIgcGVvcGxlID0gUi5tYXAoUi5zZXEoMSwgNTApLCBwZXJzb24pCnZhciBzZXR1cCA9IGZ1bmN0aW9uKCkgewogICAgcmV0dXJuIGNyZWF0ZUNhbnZhcyg0MDAsIDMwMCkKfQp2YXIgZHJhdyA9IGZ1bmN0aW9uKCkgewogICAgYmFja2dyb3VuZCgwLCAwLCAzMykKICAgIGZvciAobGV0IHBlcnNvbiBvZiBwZW9wbGUpIHsKICAgICAgICBmaWxsKDE5MCwgMTI4LCAwKQogICAgICAgIGNpcmNsZShwZXJzb24ueCwgcGVyc29uLnksIFIubXVsdGlwbHkoMiwgcmFkaXVzKSkKICAgIH0KICAgIHJldHVybiBudWxsCn0K&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-330">
</iframe>

### iii. Add movements

To make the people move, we add two velocity states `vx` and `vy` to the
“person” object and a function that changes a person’s position based on
its velocity.

An important point to notice is that JavaScript\* passes object by
reference, so when you pass an object to a function and make changes to
it, the changes applies to the object directly and no copying occurs. To
clarify this point, the super-assign symbol `<<-` is used below to
indicate where one should expect object modification.

(\*Did you notice you have been writing JavaScript?)

```sketch {6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,43} 
#! load_library("p5")

# Make a "person" object
person <- function(id) {
    list(id = id, x = runif(1, 0, 400), y = runif(1, 0, 300),
         vx = runif(1, -2, 2), vy = runif(1, -2, 2))  # Add velocity
}

move <- function(person) {
    new_x <- person$x + person$vx     # Update position
    new_y <- person$y + person$vy
    
    # If the new position is out of the screen, the person should turn back!
    # Otherwise, move to the new position
    if (new_x < 0 || new_x > 400) { 
        person$vx <<- person$vx * -1  # Turn back!
    } else {
        person$x <<- new_x            # Move to the new position
    }
    
    # Do the same for y
    if (new_y < 0 || new_y > 300) { 
        person$vy <<- person$vy * -1  # Turn back!
    } else {
        person$y <<- new_y            # Move to the new position
    }
    NULL
}

# Set up variables
radius <- 5
people <- map(1:50, person)

setup <- function() {
    createCanvas(400, 300)  
}

draw <- function() {
    background(0, 0, 33)    
    for (person in people) {
        fill(190, 128, 0)                
        circle(person$x, person$y, 2*radius)
        move(person)                  # Call `move` here
    }
    NULL
}
```

<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIHBlcnNvbiA9IGZ1bmN0aW9uKGlkKSB7CiAgICByZXR1cm4geyAiaWQiOiBpZCwgIngiOiBSLnJ1bmlmKDEsIDAsIDQwMCksICJ5IjogUi5ydW5pZigxLCAwLCAzMDApLCAidngiOiBSLnJ1bmlmKDEsIC0yLCAyKSwgInZ5IjogUi5ydW5pZigxLCAtMiwgMikgfQp9CnZhciBtb3ZlID0gZnVuY3Rpb24ocGVyc29uKSB7CiAgICB2YXIgbmV3X3ggPSBSLmFkZChwZXJzb24ueCwgcGVyc29uLnZ4KQogICAgdmFyIG5ld195ID0gUi5hZGQocGVyc29uLnksIHBlcnNvbi52eSkKICAgIGlmIChSLm9yKFIuTFQobmV3X3gsIDApLCBSLkdUKG5ld194LCA0MDApKSkgewogICAgICAgIHBlcnNvbi52eCA9IFIubXVsdGlwbHkocGVyc29uLnZ4LCAtMSkKICAgIH0gZWxzZSB7CiAgICAgICAgcGVyc29uLnggPSBuZXdfeAogICAgfQogICAgaWYgKFIub3IoUi5MVChuZXdfeSwgMCksIFIuR1QobmV3X3ksIDMwMCkpKSB7CiAgICAgICAgcGVyc29uLnZ5ID0gUi5tdWx0aXBseShwZXJzb24udnksIC0xKQogICAgfSBlbHNlIHsKICAgICAgICBwZXJzb24ueSA9IG5ld195CiAgICB9CiAgICByZXR1cm4gbnVsbAp9CnZhciByYWRpdXMgPSA1CnZhciBwZW9wbGUgPSBSLm1hcChSLnNlcSgxLCA1MCksIHBlcnNvbikKdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICByZXR1cm4gY3JlYXRlQ2FudmFzKDQwMCwgMzAwKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKDAsIDAsIDMzKQogICAgZm9yIChsZXQgcGVyc29uIG9mIHBlb3BsZSkgewogICAgICAgIGZpbGwoMTkwLCAxMjgsIDApCiAgICAgICAgY2lyY2xlKHBlcnNvbi54LCBwZXJzb24ueSwgUi5tdWx0aXBseSgyLCByYWRpdXMpKQogICAgICAgIG1vdmUocGVyc29uKQogICAgfQogICAgcmV0dXJuIG51bGwKfQo=&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-330">
</iframe>

### Summary

We have learnt that

-   `#! load_library("p5")` is used to load the
    [p5.js](http://p5js.org/) library,
-   `setup` and `draw` form the basic structure of a p5 canvas,
-   `background`, `fill` and `circle` are drawing functions from p5.js,
    and
-   JavaScript passes object by reference.

## Next step

That’s it! You have successfully created a JavaScript visualisation
without actually writing any JavaScript! I hope you find the examples
easy to follow and are convinced that using JavaScript - even to a great
extent - does not need to be hard. Leveraging the existing JavaScript
libraries, **sketch** opens up many new possibilities with
visualisations. For the next step,

-   see [Showcase](/showcase/) for some use cases,

-   see [Tutorial](/tutorial/) to explore other visualisations - this is
    the main avenue to learn how to use the package,

-   see [API](/api/) for full API documentation, or

-   continue to the next section to learn more about the details of the
    package (it is recommeded to visit this after one has followed
    through a couple of the tutorials).

<link href="../css/docs-styles.css" rel="stylesheet"></link>
