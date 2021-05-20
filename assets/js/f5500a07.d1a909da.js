(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(169)),i={},l={unversionedId:"src",id:"src",isDocsHomePage:!1,title:"src",description:"|     |                 |",source:"@site/api/src.md",slug:"/src",permalink:"/sketch-website/api/src",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/src.md",version:"current",sidebar:"api",previous:{title:"safeguard",permalink:"/sketch-website/api/safeguard"},next:{title:"license_info",permalink:"/sketch-website/api/license_info"}},o=[{value:"Get the source link of a JavaScript library",id:"get-the-source-link-of-a-javascript-library",children:[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Value",id:"value",children:[]},{value:"Examples",id:"examples",children:[]}]}],b={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:"right"}))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"src"),Object(c.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(c.b)("h2",{id:"get-the-source-link-of-a-javascript-library"},"Get the source link of a JavaScript library"),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"Get the source link of a JavaScript library"),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"src(x)\n")),Object(c.b)("h3",{id:"arguments"},"Arguments"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:null}))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"x")),Object(c.b)("td",{parentName:"tr",align:null},"A character string; name of the JavaScript library")))),Object(c.b)("h3",{id:"value"},"Value"),Object(c.b)("p",null,"A character string; the path to the library."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'src("mathjs")\nsrc("p5")\n')),Object(c.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}p.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);