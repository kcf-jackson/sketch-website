---  
title: Creative coding with p5.js  
slug: /  
keywords:  
- creative coding  
- p5.js  
---

Created: 2021-04-03. Modified: 2021-04-04.

## Introduction

In this article, we will do some basic creative coding together! We will
create the following visualisation:


<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgZHJhd19ncmlkID0gZnVuY3Rpb24oKSB7CiAgICBmb3IgKGxldCB4IG9mIHhfZ3JpZCkgewogICAgICAgIGZvciAobGV0IHkgb2YgeV9ncmlkKSB7CiAgICAgICAgICAgIHZhciByZ2JfY29sb3IgPSBSLnJ1bmlmKDMsIDAsIDI1NSkKICAgICAgICAgICAgZmlsbChyZ2JfY29sb3IpCiAgICAgICAgICAgIHN0cm9rZShyZ2JfY29sb3IpCiAgICAgICAgICAgIHZhciBkID0gUi5tdWx0aXBseShESUFNRVRFUiwgUi5wb3coUi5ybm9ybSgxLCAwLCAwLjQpLCAyKSkKICAgICAgICAgICAgY2lyY2xlKHgsIHksIGQpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0KdmFyIG1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCkgewogICAgY2xlYXIoKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0K&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-420">
</iframe>


The first step to create such visualisation is to describe the
visualisation using primitive operations. In this case, the
visualisation is simply a 2-dimensional array of circles with randomised
size and color. This gives us a 2-step plan for the implementation:

1.  Draw a 2-dimensional grid of circles
2.  Randomise the color and size of the circles

## Step 1 - Draw a 2-dimensional grid of circles

We begin by loading the **p5.js** library, setting up the coordinates
where the circles will locate, then drawing the circles on the screen.

Recall from the [“Getting Started”](/docs/) example that

-   [`setup`](https://p5js.org/reference/#/p5/setup) is a function
    **p5** monitors and calls once when your application launches,
-   [`createCanvas`](https://p5js.org/reference/#/p5/createCanvas) is a
    function to create a canvas on the screen, and
-   [`circle`](https://p5js.org/reference/#/p5/circle) is a function to
    draw a circle on the screen.

``` sketch
#! config(deparsers = default_2_deparsers())
#! load_library("p5")

# Setup
WIDTH <- 400
HEIGHT <- 400
DIAMETER <- 10
GRID_SIZE <- 40

x_grid <- seq(0, WIDTH, step = DIAMETER)
y_grid <- seq(0, HEIGHT, step = DIAMETER)

setup <- function() {
    createCanvas(WIDTH, HEIGHT)
    for (x in x_grid) {
        for (y in y_grid) {
            circle(x, y, DIAMETER)
        }
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
    &lt;script src=&quot;data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgZm9yIChsZXQgeCBvZiB4X2dyaWQpIHsKICAgICAgICBmb3IgKGxldCB5IG9mIHlfZ3JpZCkgewogICAgICAgICAgICBjaXJjbGUoeCwgeSwgRElBTUVURVIpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQo=&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-420">
</iframe>

Note that in the above we returned `NULL` at the end of `setup` because
JavaScript does not allow returning assignments and control-flow
statements (e.g. for-loop and if-statement). If you missed that,
**sketch** would return `NULL` by default, and in this case the
application would run fine; however, you will get a warning from
**sketch**. In general, it is good practice to be explicit about what to
return as there are situations where returning `NULL` may not be the
intention.

## Step 2 - Randomise the color and size of the circles

Next, we randomise the color and size of the circles by

-   using `fill` to change the fill color of the circles,
-   using `stroke` to change the border color of the circles,
-   modifying the diameter to change the size of the circles.

```sketch {17,18,19,20,21,22,23,24} 
#! config(deparsers = default_2_deparsers())
#! load_library("p5")

# Setup
WIDTH <- 400
HEIGHT <- 400
DIAMETER <- 10
GRID_SIZE <- 40

x_grid <- seq(0, WIDTH, step = DIAMETER)
y_grid <- seq(0, HEIGHT, step = DIAMETER)

setup <- function() {
    createCanvas(WIDTH, HEIGHT)
    for (x in x_grid) {
        for (y in y_grid) {
            # Uniform distribution for RGB color
            rgb_color = runif(3, 0, 255)
            fill(rgb_color)    # fill color
            stroke(rgb_color)  # border color
            
            # Square of normal distribution for the diameter
            d <- DIAMETER * rnorm(1, 0, 0.4)^2
            circle(x, y, d)
        }
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
    &lt;script src=&quot;data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgZm9yIChsZXQgeCBvZiB4X2dyaWQpIHsKICAgICAgICBmb3IgKGxldCB5IG9mIHlfZ3JpZCkgewogICAgICAgICAgICB2YXIgcmdiX2NvbG9yID0gUi5ydW5pZigzLCAwLCAyNTUpCiAgICAgICAgICAgIGZpbGwocmdiX2NvbG9yKQogICAgICAgICAgICBzdHJva2UocmdiX2NvbG9yKQogICAgICAgICAgICB2YXIgZCA9IFIubXVsdGlwbHkoRElBTUVURVIsIFIucG93KFIucm5vcm0oMSwgMCwgMC40KSwgMikpCiAgICAgICAgICAgIGNpcmNsZSh4LCB5LCBkKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybiBudWxsCn0K&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-420">
</iframe>

## Extra!

Let’s add an extra feature that when we click on the canvas, it will
regenerate another drawing! To do that, we wrap the drawing code into a
function `draw_grid`, then add it into the
[`mouseClicked`](https://p5js.org/reference/#/p5/mouseClicked) function.

```sketch {13,27,31,34,35,36,37} 
#! config(deparsers = default_2_deparsers())
#! load_library("p5")

# Setup
WIDTH <- 400
HEIGHT <- 400
DIAMETER <- 10
GRID_SIZE <- 40

x_grid <- seq(0, WIDTH, step = DIAMETER)
y_grid <- seq(0, HEIGHT, step = DIAMETER)

draw_grid <- function() {
    for (x in x_grid) {
        for (y in y_grid) {
            # Uniform distribution for RGB color
            rgb_color = runif(3, 0, 255)
            fill(rgb_color)    # fill color
            stroke(rgb_color)  # border color
            
            # Square of normal distribution for the diameter
            d <- DIAMETER * rnorm(1, 0, 0.4)^2
            circle(x, y, d)
        }
    }
    NULL
}

setup <- function() {
    createCanvas(WIDTH, HEIGHT)
    draw_grid()
}

mouseClicked <- function() {
    clear()  # remember to clear the previous drawing
    draw_grid()
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
    &lt;script src=&quot;data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgZHJhd19ncmlkID0gZnVuY3Rpb24oKSB7CiAgICBmb3IgKGxldCB4IG9mIHhfZ3JpZCkgewogICAgICAgIGZvciAobGV0IHkgb2YgeV9ncmlkKSB7CiAgICAgICAgICAgIHZhciByZ2JfY29sb3IgPSBSLnJ1bmlmKDMsIDAsIDI1NSkKICAgICAgICAgICAgZmlsbChyZ2JfY29sb3IpCiAgICAgICAgICAgIHN0cm9rZShyZ2JfY29sb3IpCiAgICAgICAgICAgIHZhciBkID0gUi5tdWx0aXBseShESUFNRVRFUiwgUi5wb3coUi5ybm9ybSgxLCAwLCAwLjQpLCAyKSkKICAgICAgICAgICAgY2lyY2xlKHgsIHksIGQpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0KdmFyIG1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCkgewogICAgY2xlYXIoKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0K&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-420">
</iframe>

Click to update!

## Exercises

Try creating the following visualisation (which updates upon click):


<iframe srcdoc="&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;/&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src=&quot;data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciBNQVJHSU4gPSA4MAp2YXIgeF9ncmlkID0gUi5zZXEoTUFSR0lOLCBSLnN1YnRyYWN0KFdJRFRILCBNQVJHSU4pLCBESUFNRVRFUikKdmFyIHlfZ3JpZCA9IFIuc2VxKE1BUkdJTiwgUi5zdWJ0cmFjdChIRUlHSFQsIE1BUkdJTiksIERJQU1FVEVSKQp2YXIgZHJhd19ncmlkID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKFIucnVuaWYoMywgMCwgMTgwKSkKICAgIGZvciAobGV0IHggb2YgeF9ncmlkKSB7CiAgICAgICAgZm9yIChsZXQgeSBvZiB5X2dyaWQpIHsKICAgICAgICAgICAgdmFyIGQgPSBSLkxUKFIucnVuaWYoMSksIFIucnVuaWYoMSwgMC4zLCAxKSkgPyAwIDogRElBTUVURVIKICAgICAgICAgICAgc3Ryb2tlKDI1NSkKICAgICAgICAgICAgY2lyY2xlKHgsIHksIFIuZGl2aWRlKGQsIDIpKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybiBudWxsCn0KdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICBjcmVhdGVDYW52YXMoV0lEVEgsIEhFSUdIVCkKICAgIHJldHVybiBkcmF3X2dyaWQoKQp9CnZhciBtb3VzZUNsaWNrZWQgPSBmdW5jdGlvbigpIHsKICAgIHJldHVybiBkcmF3X2dyaWQoKQp9Cg==&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;" class="border-none width-420 height-420">
</iframe>


## Credits / Reference

I learned the above visualisations from [Matt
DesLauriers](https://github.com/mattdesl/workshop-generative-art). Visit
the repository for other useful resources!

<link href="../css/docs-styles.css" rel="stylesheet"></link>
