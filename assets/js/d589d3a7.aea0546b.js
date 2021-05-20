(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(169)),c={title:"Introduction",slug:"/"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Introduction",description:"Overview",source:"@site/docs/getting-started.md",slug:"/",permalink:"/sketch-website/docs/",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/docs/getting-started.md",version:"current",sidebar:"docs",next:{title:"Configuration",permalink:"/sketch-website/docs/configuration"}},o=[{value:"Overview",id:"overview",children:[{value:"Installation",id:"installation",children:[]},{value:"Running a sketch R file",id:"running-a-sketch-r-file",children:[]}]},{value:"First example with sketch",id:"first-example-with-sketch",children:[{value:"i. Basic structure",id:"i-basic-structure",children:[]},{value:"ii. Add more circles",id:"ii-add-more-circles",children:[]},{value:"iii. Add movements",id:"iii-add-movements",children:[]},{value:"Summary",id:"summary",children:[]}]},{value:"Next step",id:"next-step",children:[]}],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sketch")," is an R package for creating animated and interactive\nvisualisations. It lets users develop JavaScript-style visualisations\nusing the R syntax, and it is designed to help"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"researchers create domain specific visualisation to support\ndevelopment and sharing of research,"),Object(r.b)("li",{parentName:"ul"},"journalists and science communicators publish high-quality and\nengaging interactive graphics,"),Object(r.b)("li",{parentName:"ul"},"business users make customised in-house reports, and"),Object(r.b)("li",{parentName:"ul"},"general users learn generative arts and interactive data\nvisualisation.")),Object(r.b)("p",null,"In the core, the package is a transpiler which converts R code into\nJavaScript code. It does so by rewriting an R parse tree into a\nJavaScript one. Here is an illustration."),Object(r.b)("img",{src:"../img/ast_transform.png"}),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-r"},'install.packages("sketch")\n\n# For the development version\n# install.packages("remotes")\nremotes::install_github("kcf-jackson/sketch", "develop")\n')),Object(r.b)("h3",{id:"running-a-sketch-r-file"},"Running a sketch R file"),Object(r.b)("p",null,"There are two ways to run a sketch R file."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Save the sketch R file (with the usual .R extension), then call\n",Object(r.b)("inlineCode",{parentName:"p"},"sketch::source_r")," with it.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you use RStudio, there is an add-in \u201csource a sketch R file\u201d\nlisted under this package (consider binding that to the key\ncombination alt-shift-s), and that sources the active tab in the\neditor. Alternatively, you can call the ",Object(r.b)("inlineCode",{parentName:"p"},"source_active()")," function."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"first-example-with-sketch"},"First example with sketch"),Object(r.b)("p",null,"(In the following example, please use ",Object(r.b)("inlineCode",{parentName:"p"},"source_r")," with the option\n",Object(r.b)("inlineCode",{parentName:"p"},"deparsers = default_2_deparsers()"),".)"),Object(r.b)("p",null,"As the first example with ",Object(r.b)("strong",{parentName:"p"},"sketch"),", we will use\n",Object(r.b)("a",{parentName:"p",href:"https://p5js.org/"},"p5.js")," to make this animated visualisation:"),Object(r.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIHBlcnNvbiA9IGZ1bmN0aW9uKGlkKSB7CiAgICByZXR1cm4geyAiaWQiOiBpZCwgIngiOiBSLnJ1bmlmKDEsIDAsIDQwMCksICJ5IjogUi5ydW5pZigxLCAwLCAzMDApLCAidngiOiBSLnJ1bmlmKDEsIC0yLCAyKSwgInZ5IjogUi5ydW5pZigxLCAtMiwgMikgfQp9CnZhciBtb3ZlID0gZnVuY3Rpb24ocGVyc29uKSB7CiAgICB2YXIgbmV3X3ggPSBSLmFkZChwZXJzb24ueCwgcGVyc29uLnZ4KQogICAgdmFyIG5ld195ID0gUi5hZGQocGVyc29uLnksIHBlcnNvbi52eSkKICAgIGlmIChSLm9yKFIuTFQobmV3X3gsIDApLCBSLkdUKG5ld194LCA0MDApKSkgewogICAgICAgIHBlcnNvbi52eCA9IFIubXVsdGlwbHkocGVyc29uLnZ4LCAtMSkKICAgIH0gZWxzZSB7CiAgICAgICAgcGVyc29uLnggPSBuZXdfeAogICAgfQogICAgaWYgKFIub3IoUi5MVChuZXdfeSwgMCksIFIuR1QobmV3X3ksIDMwMCkpKSB7CiAgICAgICAgcGVyc29uLnZ5ID0gUi5tdWx0aXBseShwZXJzb24udnksIC0xKQogICAgfSBlbHNlIHsKICAgICAgICBwZXJzb24ueSA9IG5ld195CiAgICB9CiAgICByZXR1cm4gbnVsbAp9CnZhciByYWRpdXMgPSA1CnZhciBwZW9wbGUgPSBSLm1hcChSLnNlcSgxLCA1MCksIHBlcnNvbikKdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICByZXR1cm4gY3JlYXRlQ2FudmFzKDQwMCwgMzAwKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKDAsIDAsIDMzKQogICAgZm9yIChsZXQgcGVyc29uIG9mIHBlb3BsZSkgewogICAgICAgIGZpbGwoMTkwLCAxMjgsIDApCiAgICAgICAgY2lyY2xlKHBlcnNvbi54LCBwZXJzb24ueSwgUi5tdWx0aXBseSgyLCByYWRpdXMpKQogICAgICAgIG1vdmUocGVyc29uKQogICAgfQogICAgcmV0dXJuIG51bGwKfQo="><\/script> </body>\n</html>',class:"border-none width-420 height-330"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"An important aspect of this package is that \u201cApps\u201d produced by\nsketch run in the browser natively without an R back-end. The App is\nlive, and it supports interactivity.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In fact, you can write sketch code directly in R Markdown documents,\ngenerate an HTML file, and share it online easily (just like this\npage you are reading right now!).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"p5.js is chosen here because it has an user-friendly API and many\ngood learning resources online."))),Object(r.b)("h3",{id:"i-basic-structure"},"i. Basic structure"),Object(r.b)("p",null,"The structure of a p5 application looks like this:"),Object(r.b)("h4",{id:"mainr"},"main.R"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sketch"},'#! load_library("p5")\n\nsetup <- function() {       \n    createCanvas(400, 300)  # create a canvas of size 400 x 300 (w x h)\n}\n\ndraw <- function() {        \n    background(0, 0, 33)    # paint the background with the RGB colour\n    fill("red")             # change fill colour to "red"\n    circle(200, 150, 50)    # draw a circle (x, y, diameter)\n}\n')),Object(r.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICByZXR1cm4gY3JlYXRlQ2FudmFzKDQwMCwgMzAwKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKDAsIDAsIDMzKQogICAgZmlsbCgicmVkIikKICAgIHJldHVybiBjaXJjbGUoMjAwLCAxNTAsIDUwKQp9Cg=="><\/script> </body>\n</html>',class:"border-none width-420 height-330"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"#! load_library")," is used to load the p5 library. Despite being\ncommented out, lines starting with ",Object(r.b)("inlineCode",{parentName:"p"},"#!")," are actually processed by\nthe ",Object(r.b)("strong",{parentName:"p"},"sketch")," package.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"p5.js looks for functions named (specifically) ",Object(r.b)("inlineCode",{parentName:"p"},"setup")," and ",Object(r.b)("inlineCode",{parentName:"p"},"draw"),",\nand it runs"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setup")," once at the start of the App, and"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"draw")," iteratively 60 times per second after the App starts."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"createCanvas"),", ",Object(r.b)("inlineCode",{parentName:"p"},"background"),", ",Object(r.b)("inlineCode",{parentName:"p"},"fill")," and ",Object(r.b)("inlineCode",{parentName:"p"},"circle")," are functions\nprovided by p5.js for drawing on the screen."))),Object(r.b)("h3",{id:"ii-add-more-circles"},"ii. Add more circles"),Object(r.b)("p",null,"Let\u2019s create a ",Object(r.b)("inlineCode",{parentName:"p"},"person")," object, and draw 50 of them on the screen. We\nneed an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," to identify the person and its coordinates ",Object(r.b)("inlineCode",{parentName:"p"},"x")," and ",Object(r.b)("inlineCode",{parentName:"p"},"y")," at\nwhich a circle will be drawn."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sketch",metastring:"{3,4,5,6,7,8,9,10,18,19,20,21}","{3,4,5,6,7,8,9,10,18,19,20,21}":!0},'#! load_library("p5")\n\n# Make a "person" object\nperson <- function(id) {\n    list(id = id, x = runif(1, 0, 400), y = runif(1, 0, 300))\n}\n\n# Set up variables\nradius <- 5\npeople <- map(1:50, person)\n\nsetup <- function() {\n    createCanvas(400, 300)  \n}\n\ndraw <- function() {\n    background(0, 0, 33)    \n    for (person in people) {   # Use a for loop to draw one person at a time\n        fill(190, 128, 0)                \n        circle(person$x, person$y, 2*radius)   \n    }\n    NULL\n}\n')),Object(r.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIHBlcnNvbiA9IGZ1bmN0aW9uKGlkKSB7CiAgICByZXR1cm4geyAiaWQiOiBpZCwgIngiOiBSLnJ1bmlmKDEsIDAsIDQwMCksICJ5IjogUi5ydW5pZigxLCAwLCAzMDApIH0KfQp2YXIgcmFkaXVzID0gNQp2YXIgcGVvcGxlID0gUi5tYXAoUi5zZXEoMSwgNTApLCBwZXJzb24pCnZhciBzZXR1cCA9IGZ1bmN0aW9uKCkgewogICAgcmV0dXJuIGNyZWF0ZUNhbnZhcyg0MDAsIDMwMCkKfQp2YXIgZHJhdyA9IGZ1bmN0aW9uKCkgewogICAgYmFja2dyb3VuZCgwLCAwLCAzMykKICAgIGZvciAobGV0IHBlcnNvbiBvZiBwZW9wbGUpIHsKICAgICAgICBmaWxsKDE5MCwgMTI4LCAwKQogICAgICAgIGNpcmNsZShwZXJzb24ueCwgcGVyc29uLnksIFIubXVsdGlwbHkoMiwgcmFkaXVzKSkKICAgIH0KICAgIHJldHVybiBudWxsCn0K"><\/script> </body>\n</html>',class:"border-none width-420 height-330"}),Object(r.b)("h3",{id:"iii-add-movements"},"iii. Add movements"),Object(r.b)("p",null,"To make the people move, we add two velocity states ",Object(r.b)("inlineCode",{parentName:"p"},"vx")," and ",Object(r.b)("inlineCode",{parentName:"p"},"vy")," to the\n\u201cperson\u201d object and a function that changes a person\u2019s position based on\nits velocity."),Object(r.b)("p",null,"An important point to notice is that JavaScript","*"," passes object by\nreference, so when you pass an object to a function and make changes to\nit, the changes applies to the object directly and no copying occurs. To\nclarify this point, the super-assign symbol ",Object(r.b)("inlineCode",{parentName:"p"},"<<-")," is used below to\nindicate where one should expect object modification."),Object(r.b)("p",null,"(","*","Did you notice you have been writing JavaScript?)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sketch",metastring:"{6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,43}","{6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,43}":!0},'#! load_library("p5")\n\n# Make a "person" object\nperson <- function(id) {\n    list(id = id, x = runif(1, 0, 400), y = runif(1, 0, 300),\n         vx = runif(1, -2, 2), vy = runif(1, -2, 2))  # Add velocity\n}\n\nmove <- function(person) {\n    new_x <- person$x + person$vx     # Update position\n    new_y <- person$y + person$vy\n    \n    # If the new position is out of the screen, the person should turn back!\n    # Otherwise, move to the new position\n    if (new_x < 0 || new_x > 400) { \n        person$vx <<- person$vx * -1  # Turn back!\n    } else {\n        person$x <<- new_x            # Move to the new position\n    }\n    \n    # Do the same for y\n    if (new_y < 0 || new_y > 300) { \n        person$vy <<- person$vy * -1  # Turn back!\n    } else {\n        person$y <<- new_y            # Move to the new position\n    }\n    NULL\n}\n\n# Set up variables\nradius <- 5\npeople <- map(1:50, person)\n\nsetup <- function() {\n    createCanvas(400, 300)  \n}\n\ndraw <- function() {\n    background(0, 0, 33)    \n    for (person in people) {\n        fill(190, 128, 0)                \n        circle(person$x, person$y, 2*radius)\n        move(person)                  # Call `move` here\n    }\n    NULL\n}\n')),Object(r.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIHBlcnNvbiA9IGZ1bmN0aW9uKGlkKSB7CiAgICByZXR1cm4geyAiaWQiOiBpZCwgIngiOiBSLnJ1bmlmKDEsIDAsIDQwMCksICJ5IjogUi5ydW5pZigxLCAwLCAzMDApLCAidngiOiBSLnJ1bmlmKDEsIC0yLCAyKSwgInZ5IjogUi5ydW5pZigxLCAtMiwgMikgfQp9CnZhciBtb3ZlID0gZnVuY3Rpb24ocGVyc29uKSB7CiAgICB2YXIgbmV3X3ggPSBSLmFkZChwZXJzb24ueCwgcGVyc29uLnZ4KQogICAgdmFyIG5ld195ID0gUi5hZGQocGVyc29uLnksIHBlcnNvbi52eSkKICAgIGlmIChSLm9yKFIuTFQobmV3X3gsIDApLCBSLkdUKG5ld194LCA0MDApKSkgewogICAgICAgIHBlcnNvbi52eCA9IFIubXVsdGlwbHkocGVyc29uLnZ4LCAtMSkKICAgIH0gZWxzZSB7CiAgICAgICAgcGVyc29uLnggPSBuZXdfeAogICAgfQogICAgaWYgKFIub3IoUi5MVChuZXdfeSwgMCksIFIuR1QobmV3X3ksIDMwMCkpKSB7CiAgICAgICAgcGVyc29uLnZ5ID0gUi5tdWx0aXBseShwZXJzb24udnksIC0xKQogICAgfSBlbHNlIHsKICAgICAgICBwZXJzb24ueSA9IG5ld195CiAgICB9CiAgICByZXR1cm4gbnVsbAp9CnZhciByYWRpdXMgPSA1CnZhciBwZW9wbGUgPSBSLm1hcChSLnNlcSgxLCA1MCksIHBlcnNvbikKdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICByZXR1cm4gY3JlYXRlQ2FudmFzKDQwMCwgMzAwKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICBiYWNrZ3JvdW5kKDAsIDAsIDMzKQogICAgZm9yIChsZXQgcGVyc29uIG9mIHBlb3BsZSkgewogICAgICAgIGZpbGwoMTkwLCAxMjgsIDApCiAgICAgICAgY2lyY2xlKHBlcnNvbi54LCBwZXJzb24ueSwgUi5tdWx0aXBseSgyLCByYWRpdXMpKQogICAgICAgIG1vdmUocGVyc29uKQogICAgfQogICAgcmV0dXJuIG51bGwKfQo="><\/script> </body>\n</html>',class:"border-none width-420 height-330"}),Object(r.b)("h3",{id:"summary"},"Summary"),Object(r.b)("p",null,"We have learnt that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'#! load_library("p5")')," is used to load the\n",Object(r.b)("a",{parentName:"li",href:"http://p5js.org/"},"p5.js")," library,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setup")," and ",Object(r.b)("inlineCode",{parentName:"li"},"draw")," form the basic structure of a p5 canvas,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"background"),", ",Object(r.b)("inlineCode",{parentName:"li"},"fill")," and ",Object(r.b)("inlineCode",{parentName:"li"},"circle")," are drawing functions from p5.js,\nand"),Object(r.b)("li",{parentName:"ul"},"JavaScript passes object by reference.")),Object(r.b)("h2",{id:"next-step"},"Next step"),Object(r.b)("p",null,"That\u2019s it! You have successfully created a JavaScript visualisation\nwithout actually writing any JavaScript! I hope you find the examples\neasy to follow and are convinced that using JavaScript - even to a great\nextent - does not need to be hard. Leveraging the existing JavaScript\nlibraries, ",Object(r.b)("strong",{parentName:"p"},"sketch")," opens up many new possibilities with\nvisualisations. For the next step,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"see ",Object(r.b)("a",{parentName:"p",href:"/showcase/"},"Showcase")," for some use cases,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"see ",Object(r.b)("a",{parentName:"p",href:"/tutorial/"},"Tutorial")," to explore other visualisations - this is\nthe main avenue to learn how to use the package,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"see ",Object(r.b)("a",{parentName:"p",href:"/api/"},"API")," for full API documentation, or")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"continue to the next section to learn more about the details of the\npackage (it is recommeded to visit this after one has followed\nthrough a couple of the tutorials)."))),Object(r.b)("link",{href:"../css/docs-styles.css",rel:"stylesheet"}))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,g=b["".concat(c,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(g,s(s({ref:t},l),{},{components:n})):a.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);