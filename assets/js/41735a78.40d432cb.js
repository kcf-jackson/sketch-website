(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),g=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=g(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},I={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=g(n),p=r,b=d["".concat(a,".").concat(p)]||d[p]||I[p]||c;return n?i.a.createElement(b,o(o({ref:t},l),{},{components:n})):i.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<c;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return g}));var r=n(3),i=n(7),c=(n(0),n(169)),a={title:"Creative coding with p5.js",slug:"/",keywords:["creative coding","p5.js"]},o={unversionedId:"creative_coding",id:"creative_coding",isDocsHomePage:!1,title:"Creative coding with p5.js",description:"Created 2021-04-04.",source:"@site/tutorial/creative_coding.md",slug:"/",permalink:"/sketch-website/tutorial/",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/tutorial/tutorial/creative_coding.md",version:"current",sidebar:"tutorial"},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 1 - Draw a 2-dimensional grid of circles",id:"step-1---draw-a-2-dimensional-grid-of-circles",children:[]},{value:"Step 2 - Randomise the color and size of the circles",id:"step-2---randomise-the-color-and-size-of-the-circles",children:[]},{value:"Extra!",id:"extra",children:[]},{value:"Exercises",id:"exercises",children:[]},{value:"Credits / Reference",id:"credits--reference",children:[]}],l={toc:s};function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Created: 2021-04-03. Modified: 2021-04-04."),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"In this article, we will do some basic creative coding together! We will\ncreate the following visualisation:"),Object(c.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgZHJhd19ncmlkID0gZnVuY3Rpb24oKSB7CiAgICBmb3IgKGxldCB4IG9mIHhfZ3JpZCkgewogICAgICAgIGZvciAobGV0IHkgb2YgeV9ncmlkKSB7CiAgICAgICAgICAgIHZhciByZ2JfY29sb3IgPSBSLnJ1bmlmKDMsIDAsIDI1NSkKICAgICAgICAgICAgZmlsbChyZ2JfY29sb3IpCiAgICAgICAgICAgIHN0cm9rZShyZ2JfY29sb3IpCiAgICAgICAgICAgIHZhciBkID0gUi5tdWx0aXBseShESUFNRVRFUiwgUi5wb3coUi5ybm9ybSgxLCAwLCAwLjQpLCAyKSkKICAgICAgICAgICAgY2lyY2xlKHgsIHksIGQpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0KdmFyIG1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCkgewogICAgY2xlYXIoKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0K"><\/script> </body>\n</html>',class:"border-none width-420 height-420"}),Object(c.b)("p",null,"The first step to create such visualisation is to describe the\nvisualisation using primitive operations. In this case, the\nvisualisation is simply a 2-dimensional array of circles with randomised\nsize and color. This gives us a 2-step plan for the implementation:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Draw a 2-dimensional grid of circles"),Object(c.b)("li",{parentName:"ol"},"Randomise the color and size of the circles")),Object(c.b)("h2",{id:"step-1---draw-a-2-dimensional-grid-of-circles"},"Step 1 - Draw a 2-dimensional grid of circles"),Object(c.b)("p",null,"We begin by loading the ",Object(c.b)("strong",{parentName:"p"},"p5.js")," library, setting up the coordinates\nwhere the circles will locate, then drawing the circles on the screen."),Object(c.b)("p",null,"Recall from the ",Object(c.b)("a",{parentName:"p",href:"/docs/"},"\u201cGetting Started\u201d")," example that"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://p5js.org/reference/#/p5/setup"},Object(c.b)("inlineCode",{parentName:"a"},"setup"))," is a function\n",Object(c.b)("strong",{parentName:"li"},"p5")," monitors and calls once when your application launches,"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://p5js.org/reference/#/p5/createCanvas"},Object(c.b)("inlineCode",{parentName:"a"},"createCanvas"))," is a\nfunction to create a canvas on the screen, and"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://p5js.org/reference/#/p5/circle"},Object(c.b)("inlineCode",{parentName:"a"},"circle"))," is a function to\ndraw a circle on the screen.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sketch"},'#! config(deparsers = default_2_deparsers())\n#! load_library("p5")\n\n# Setup\nWIDTH <- 400\nHEIGHT <- 400\nDIAMETER <- 10\nGRID_SIZE <- 40\n\nx_grid <- seq(0, WIDTH, step = DIAMETER)\ny_grid <- seq(0, HEIGHT, step = DIAMETER)\n\nsetup <- function() {\n    createCanvas(WIDTH, HEIGHT)\n    for (x in x_grid) {\n        for (y in y_grid) {\n            circle(x, y, DIAMETER)\n        }\n    }\n    NULL\n}\n')),Object(c.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgZm9yIChsZXQgeCBvZiB4X2dyaWQpIHsKICAgICAgICBmb3IgKGxldCB5IG9mIHlfZ3JpZCkgewogICAgICAgICAgICBjaXJjbGUoeCwgeSwgRElBTUVURVIpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQo="><\/script> </body>\n</html>',class:"border-none width-420 height-420"}),Object(c.b)("p",null,"Note that in the above we returned ",Object(c.b)("inlineCode",{parentName:"p"},"NULL")," at the end of ",Object(c.b)("inlineCode",{parentName:"p"},"setup")," because\nJavaScript does not allow returning assignments and control-flow\nstatements (e.g.\xa0for-loop and if-statement). If you missed that,\n",Object(c.b)("strong",{parentName:"p"},"sketch")," would return ",Object(c.b)("inlineCode",{parentName:"p"},"NULL")," by default, and in this case the\napplication would run fine; however, you will get a warning from\n",Object(c.b)("strong",{parentName:"p"},"sketch"),". In general, it is good practice to be explicit about what to\nreturn as there are situations where returning ",Object(c.b)("inlineCode",{parentName:"p"},"NULL")," may not be the\nintention."),Object(c.b)("h2",{id:"step-2---randomise-the-color-and-size-of-the-circles"},"Step 2 - Randomise the color and size of the circles"),Object(c.b)("p",null,"Next, we randomise the color and size of the circles by"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"using ",Object(c.b)("inlineCode",{parentName:"li"},"fill")," to change the fill color of the circles,"),Object(c.b)("li",{parentName:"ul"},"using ",Object(c.b)("inlineCode",{parentName:"li"},"stroke")," to change the border color of the circles,"),Object(c.b)("li",{parentName:"ul"},"modifying the diameter to change the size of the circles.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sketch",metastring:"{17,18,19,20,21,22,23,24}","{17,18,19,20,21,22,23,24}":!0},'#! config(deparsers = default_2_deparsers())\n#! load_library("p5")\n\n# Setup\nWIDTH <- 400\nHEIGHT <- 400\nDIAMETER <- 10\nGRID_SIZE <- 40\n\nx_grid <- seq(0, WIDTH, step = DIAMETER)\ny_grid <- seq(0, HEIGHT, step = DIAMETER)\n\nsetup <- function() {\n    createCanvas(WIDTH, HEIGHT)\n    for (x in x_grid) {\n        for (y in y_grid) {\n            # Uniform distribution for RGB color\n            rgb_color = runif(3, 0, 255)\n            fill(rgb_color)    # fill color\n            stroke(rgb_color)  # border color\n            \n            # Square of normal distribution for the diameter\n            d <- DIAMETER * rnorm(1, 0, 0.4)^2\n            circle(x, y, d)\n        }\n    }\n    NULL\n}\n')),Object(c.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgZm9yIChsZXQgeCBvZiB4X2dyaWQpIHsKICAgICAgICBmb3IgKGxldCB5IG9mIHlfZ3JpZCkgewogICAgICAgICAgICB2YXIgcmdiX2NvbG9yID0gUi5ydW5pZigzLCAwLCAyNTUpCiAgICAgICAgICAgIGZpbGwocmdiX2NvbG9yKQogICAgICAgICAgICBzdHJva2UocmdiX2NvbG9yKQogICAgICAgICAgICB2YXIgZCA9IFIubXVsdGlwbHkoRElBTUVURVIsIFIucG93KFIucm5vcm0oMSwgMCwgMC40KSwgMikpCiAgICAgICAgICAgIGNpcmNsZSh4LCB5LCBkKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybiBudWxsCn0K"><\/script> </body>\n</html>',class:"border-none width-420 height-420"}),Object(c.b)("h2",{id:"extra"},"Extra!"),Object(c.b)("p",null,"Let\u2019s add an extra feature that when we click on the canvas, it will\nregenerate another drawing! To do that, we wrap the drawing code into a\nfunction ",Object(c.b)("inlineCode",{parentName:"p"},"draw_grid"),", then add it into the\n",Object(c.b)("a",{parentName:"p",href:"https://p5js.org/reference/#/p5/mouseClicked"},Object(c.b)("inlineCode",{parentName:"a"},"mouseClicked"))," function."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sketch",metastring:"{13,27,31,34,35,36,37}","{13,27,31,34,35,36,37}":!0},'#! config(deparsers = default_2_deparsers())\n#! load_library("p5")\n\n# Setup\nWIDTH <- 400\nHEIGHT <- 400\nDIAMETER <- 10\nGRID_SIZE <- 40\n\nx_grid <- seq(0, WIDTH, step = DIAMETER)\ny_grid <- seq(0, HEIGHT, step = DIAMETER)\n\ndraw_grid <- function() {\n    for (x in x_grid) {\n        for (y in y_grid) {\n            # Uniform distribution for RGB color\n            rgb_color = runif(3, 0, 255)\n            fill(rgb_color)    # fill color\n            stroke(rgb_color)  # border color\n            \n            # Square of normal distribution for the diameter\n            d <- DIAMETER * rnorm(1, 0, 0.4)^2\n            circle(x, y, d)\n        }\n    }\n    NULL\n}\n\nsetup <- function() {\n    createCanvas(WIDTH, HEIGHT)\n    draw_grid()\n}\n\nmouseClicked <- function() {\n    clear()  # remember to clear the previous drawing\n    draw_grid()\n}\n')),Object(c.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciB4X2dyaWQgPSBSLnNlcSgwLCBXSURUSCwgRElBTUVURVIpCnZhciB5X2dyaWQgPSBSLnNlcSgwLCBIRUlHSFQsIERJQU1FVEVSKQp2YXIgZHJhd19ncmlkID0gZnVuY3Rpb24oKSB7CiAgICBmb3IgKGxldCB4IG9mIHhfZ3JpZCkgewogICAgICAgIGZvciAobGV0IHkgb2YgeV9ncmlkKSB7CiAgICAgICAgICAgIHZhciByZ2JfY29sb3IgPSBSLnJ1bmlmKDMsIDAsIDI1NSkKICAgICAgICAgICAgZmlsbChyZ2JfY29sb3IpCiAgICAgICAgICAgIHN0cm9rZShyZ2JfY29sb3IpCiAgICAgICAgICAgIHZhciBkID0gUi5tdWx0aXBseShESUFNRVRFUiwgUi5wb3coUi5ybm9ybSgxLCAwLCAwLjQpLCAyKSkKICAgICAgICAgICAgY2lyY2xlKHgsIHksIGQpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhXSURUSCwgSEVJR0hUKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0KdmFyIG1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCkgewogICAgY2xlYXIoKQogICAgcmV0dXJuIGRyYXdfZ3JpZCgpCn0K"><\/script> </body>\n</html>',class:"border-none width-420 height-420"}),Object(c.b)("p",null,"Click to update!"),Object(c.b)("h2",{id:"exercises"},"Exercises"),Object(c.b)("p",null,"Try creating the following visualisation (which updates upon click):"),Object(c.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIFdJRFRIID0gNDAwCnZhciBIRUlHSFQgPSA0MDAKdmFyIERJQU1FVEVSID0gMTAKdmFyIEdSSURfU0laRSA9IDQwCnZhciBNQVJHSU4gPSA4MAp2YXIgeF9ncmlkID0gUi5zZXEoTUFSR0lOLCBSLnN1YnRyYWN0KFdJRFRILCBNQVJHSU4pLCBESUFNRVRFUikKdmFyIHlfZ3JpZCA9IFIuc2VxKE1BUkdJTiwgUi5zdWJ0cmFjdChIRUlHSFQsIE1BUkdJTiksIERJQU1FVEVSKQp2YXIgZHJhd19ncmlkID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKFIucnVuaWYoMywgMCwgMTgwKSkKICAgIGZvciAobGV0IHggb2YgeF9ncmlkKSB7CiAgICAgICAgZm9yIChsZXQgeSBvZiB5X2dyaWQpIHsKICAgICAgICAgICAgdmFyIGQgPSBSLkxUKFIucnVuaWYoMSksIFIucnVuaWYoMSwgMC4zLCAxKSkgPyAwIDogRElBTUVURVIKICAgICAgICAgICAgc3Ryb2tlKDI1NSkKICAgICAgICAgICAgY2lyY2xlKHgsIHksIFIuZGl2aWRlKGQsIDIpKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybiBudWxsCn0KdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICBjcmVhdGVDYW52YXMoV0lEVEgsIEhFSUdIVCkKICAgIHJldHVybiBkcmF3X2dyaWQoKQp9CnZhciBtb3VzZUNsaWNrZWQgPSBmdW5jdGlvbigpIHsKICAgIHJldHVybiBkcmF3X2dyaWQoKQp9Cg=="><\/script> </body>\n</html>',class:"border-none width-420 height-420"}),Object(c.b)("h2",{id:"credits--reference"},"Credits / Reference"),Object(c.b)("p",null,"I learned the above visualisations from ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mattdesl/workshop-generative-art"},"Matt\nDesLauriers"),". Visit\nthe repository for other useful resources!"),Object(c.b)("link",{href:"../css/docs-styles.css",rel:"stylesheet"}))}g.isMDXComponent=!0}}]);