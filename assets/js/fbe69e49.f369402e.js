(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(172)),o={title:"Interact with leaflet map from R",keywords:["map","leaflet.js"]},i={unversionedId:"leaflet_map",id:"leaflet_map",isDocsHomePage:!1,title:"Interact with leaflet map from R",description:"Created 2021-05-22.",source:"@site/tutorial/leaflet_map.md",slug:"/leaflet_map",permalink:"/sketch-website/tutorial/leaflet_map",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/tutorial/tutorial/leaflet_map.md",version:"current",sidebar:"tutorial",previous:{title:"Game of life",permalink:"/sketch-website/tutorial/game_of_life"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Create a page with a leaflet map",id:"create-a-page-with-a-leaflet-map",children:[]},{value:"Control the leaflet map with R",id:"control-the-leaflet-map-with-r",children:[{value:"1. Start a WebSocket connection",id:"1-start-a-websocket-connection",children:[]},{value:"2. Refresh the app",id:"2-refresh-the-app",children:[]},{value:"3. Control the leaflet map",id:"3-control-the-leaflet-map",children:[]},{value:"4. Clean up",id:"4-clean-up",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Created: 2021-05-22. Modified: 2021-05-22."),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"In this article, we will look at how to interact with leaflet map from\nR. This provides a starting point to perform live spatial analysis with\nR. Here is a demo:"),Object(l.b)("video",{width:"596",height:"444",controls:!0},Object(l.b)("source",{src:"../img/leaflet_map_demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),Object(l.b)("h2",{id:"create-a-page-with-a-leaflet-map"},"Create a page with a leaflet map"),Object(l.b)("p",null,"We will use the setting ",Object(l.b)("inlineCode",{parentName:"p"},"default_2_deparsers()")," for this application."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"We start by loading the leaflet.js, ",Object(l.b)("inlineCode",{parentName:"li"},"dom")," and ",Object(l.b)("inlineCode",{parentName:"li"},"websocket")," libraries.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"leaflet.js")," is used to create a map"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dom")," is used to create the container hosting the map, and"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"websocket")," is needed to enable control of the map with R."))),Object(l.b)("li",{parentName:"ol"},"The container is created with the ",Object(l.b)("inlineCode",{parentName:"li"},"div")," command and rendered on the\nscreen using the ",Object(l.b)("inlineCode",{parentName:"li"},"render")," function.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("inlineCode",{parentName:"li"},"id")," is assigned to it for potential future reference."),Object(l.b)("li",{parentName:"ul"},"The height styling is applied; this is mandatory or it may\nassume a height of 0. 100vh refers to \u201c100% viewport height\u201d,\nwhich is the full height of the viewable area."))),Object(l.b)("li",{parentName:"ol"},"The leaflet map and a tile layer are then added following the\nleaflet.js ",Object(l.b)("a",{parentName:"li",href:"https://leafletjs.com/examples/quick-start/"},"quickstart\nguide"),".")),Object(l.b)("h4",{id:"uir"},"ui.R"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},'#! config(deparsers = default_2_deparsers())\n#! load_script("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css")\n#! load_script("https://unpkg.com/leaflet@1.7.1/dist/leaflet.js")\n#! load_library("dom")\n#! load_library("websocket")\n\n# Create a div element to put the map\nrender(div(id = "mapid", style = \'height:100vh;\'))\n\n# Set up a map\nmymap <- L::map(\'mapid\')$\n    setView(latlng = c(-37.8136, 144.9631), zoom = 10)\n\n# Add tile layer to the map\nL::tileLayer(\n    \'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\',\n    list(maxZoom = 18, \n         attribution = \'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\')\n)$addTo(mymap)\n')),Object(l.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <link href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" rel="stylesheet"/> <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"><\/script> <script src="data:text/javascript;base64,ZG9tID0gZnVuY3Rpb24odGFnMCwgYXR0cjAgPSB7ICB9KSB7CiAgICBsZXQgZG9tT2JqCiAgICBkb21PYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZzApCiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoYXR0cjApKSB7CiAgICAgICAgZG9tT2JqW2tleV0gPSBhdHRyMFtrZXldCiAgICB9CiAgICBsZXQgYXJncyA9IEFycmF5KC4uLmFyZ3VtZW50cyksIGFyZ3NfbGVuID0gYXJncy5sZW5ndGgKICAgIGlmIChhcmdzX2xlbiA+PSAzKSB7CiAgICAgICAgZm9yIChsZXQgZWwgb2YgYXJncy5zbGljZSgyKSkgewogICAgICAgICAgICBkb21PYmouYXBwZW5kQ2hpbGQoZWwpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuKGRvbU9iaikKfQpzZWxlY3RfZG9tID0gZnVuY3Rpb24oeCkgewogICAgcmV0dXJuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeCkpCn0Kc2VsZWN0X2RvbXMgPSBmdW5jdGlvbih4KSB7CiAgICByZXR1cm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh4KSkKfQpwcmludF9kb20gPSBmdW5jdGlvbihlbCwgeCA9ICJib2R5IikgewogICAgaWYgKHR5cGVvZiB4ID09ICJzdHJpbmciKSB7CiAgICAgICAgbGV0IHJlcwogICAgICAgIHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeCkKICAgICAgICByZXMuYXBwZW5kQ2hpbGQoZWwpCiAgICAgICAgcmV0dXJuKHJlcykKICAgIH0gZWxzZSB7CiAgICAgICAgeC5hcHBlbmRDaGlsZChlbCkKICAgICAgICByZXR1cm4oeCkKICAgIH0KfQpyZW5kZXIgPSBwcmludF9kb20KYXBwZW5kX2RvbXMgPSBmdW5jdGlvbihwYXJlbnQpIHsKICAgIGxldCBhcmdzID0gQXJyYXkoLi4uYXJndW1lbnRzKSwgYXJnc19sZW4gPSBhcmdzLmxlbmd0aAogICAgaWYgKGFyZ3NfbGVuID09IDEpIHsKICAgICAgICByZXR1cm4ocGFyZW50KQogICAgfQogICAgZm9yIChsZXQgZWwgb2YgYXJncy5zbGljZSgxKSkgewogICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCkKICAgIH0KICAgIHJldHVybihwYXJlbnQpCn0Kc3ZnID0gZnVuY3Rpb24odGFnMCwgYXR0cjApIHsKICAgIGxldCBzdmdPYmoKICAgIHN2Z09iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLCB0YWcwKQogICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGF0dHIwKSkgewogICAgICAgIHN2Z09iai5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyMFtrZXldKQogICAgfQogICAgbGV0IGFyZ3MgPSBBcnJheSguLi5hcmd1bWVudHMpLCBhcmdzX2xlbiA9IGFyZ3MubGVuZ3RoCiAgICBpZiAoYXJnc19sZW4gPj0gMykgewogICAgICAgIGZvciAobGV0IGVsIG9mIGFyZ3Muc2xpY2UoMikpIHsKICAgICAgICAgICAgc3ZnT2JqLmFwcGVuZENoaWxkKGVsKQogICAgICAgIH0KICAgIH0KICAgIHJldHVybihzdmdPYmopCn0K"><\/script> </head> <body> <script src="data:application/javascript;base64,cmVuZGVyKGRvbSgiZGl2IiwgeyAiaWQiOiAibWFwaWQiLCAic3R5bGUiOiAiaGVpZ2h0Ojkwdmg7IiB9KSkKdmFyIG15bWFwID0gTC5tYXAoIm1hcGlkIikuc2V0VmlldyhSLmMoLTM3LjgxMzYsIDE0NC45NjMxKSwgMTApCkwudGlsZUxheWVyKCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZyIsIHsgIm1heFpvb20iOiAxOCwgImF0dHJpYnV0aW9uIjogIiZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzIiB9KS5hZGRUbyhteW1hcCkK"><\/script> </body>\n</html>',class:"border-none width-600 height-600"}),Object(l.b)("h2",{id:"control-the-leaflet-map-with-r"},"Control the leaflet map with R"),Object(l.b)("h3",{id:"1-start-a-websocket-connection"},"1. Start a WebSocket connection"),Object(l.b)("p",null,"We start a WebSocket connection using the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},"library(sketch)\nconn <- websocket$new()\nconn$startServer()\n")),Object(l.b)("h3",{id:"2-refresh-the-app"},"2. Refresh the app"),Object(l.b)("p",null,"After the server is started, refresh / restart the app to establish the\nconnection. If it is successful, a message will display at the R\nconsole."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},'> library(sketch)\n> conn <- websocket$new()\n> conn$startServer()\nServer started.\n$type\n[1] "WebSocket.onopen"\n\n$message\n[1] "App connected."\n')),Object(l.b)("h3",{id:"3-control-the-leaflet-map"},"3. Control the leaflet map"),Object(l.b)("p",null,"Once the connection is started, use ",Object(l.b)("inlineCode",{parentName:"p"},"conn$sketch_mode()")," to enter the\nsketch mode, and from here, you can directly manipulate the map! Here\nare some sample commands."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},"# Zoom in\nmymap$flyTo(latlng = c(-37.8136, 144.9631), zoom = 15)\n\n# Move toward south and zoom in\nmymap$flyTo(latlng = c(-37.8350, 144.9600), zoom = 17)\n\n# Add a marker\nL::marker(c(-37.8350, 144.9600))$addTo(mymap)\n\n# Back to original point and zoom out\nmymap$flyTo(latlng = c(-37.8136, 144.9631), zoom = 13)\n")),Object(l.b)("h4",{id:"result"},"Result"),Object(l.b)("video",{width:"596",height:"444",controls:!0},Object(l.b)("source",{src:"../img/leaflet_map_demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),Object(l.b)("p",null,"Note that all commands from the leaflet.js library are available. See\n",Object(l.b)("a",{parentName:"p",href:"https://leafletjs.com/reference-1.7.1.html"},"here")," for the full list."),Object(l.b)("h3",{id:"4-clean-up"},"4. Clean up"),Object(l.b)("p",null,"Once you are finished with the map, use ",Object(l.b)("inlineCode",{parentName:"p"},"conn$stopServer()")," to close the\nWebSocket connection."),Object(l.b)("link",{href:"../css/docs-styles.css",rel:"stylesheet"}))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,g=b["".concat(o,".").concat(d)]||b[d]||m[d]||l;return n?r.a.createElement(g,i(i({ref:t},s),{},{components:n})):r.a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);