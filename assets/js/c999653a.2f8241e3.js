(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(172)),i={},o={unversionedId:"parse_expr",id:"parse_expr",isDocsHomePage:!1,title:"parse_expr",description:"|             |                 |",source:"@site/api/parse_expr.md",slug:"/parse_expr",permalink:"/sketch-website/api/parse_expr",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/parse_expr.md",version:"current",sidebar:"api",previous:{title:"make_processor",permalink:"/sketch-website/api/make_processor"},next:{title:"rewrite",permalink:"/sketch-website/api/rewrite"}},p=[{value:"Parse R code",id:"parse-r-code",children:[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Note",id:"note",children:[]},{value:"Examples",id:"examples",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:"right"}))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"parse","_","expr"),Object(c.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(c.b)("h2",{id:"parse-r-code"},"Parse R code"),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"Parse R code"),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"parse_expr(x)\n")),Object(c.b)("h3",{id:"arguments"},"Arguments"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:null}))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"x")),Object(c.b)("td",{parentName:"tr",align:null},"Text containing expressions to parse","_","expr for ",Object(c.b)("inlineCode",{parentName:"td"},"parse_expr()")," and ",Object(c.b)("inlineCode",{parentName:"td"},"parse_exprs()"),". Can also be an R connection, for instance to a file. If the supplied connection is not open, it will be automatically closed and destroyed.")))),Object(c.b)("h3",{id:"note"},"Note"),Object(c.b)("p",null,"This function is imported from 'rlang'."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'parse_expr("x <- 1 + 1")\n')),Object(c.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}b.isMDXComponent=!0},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);