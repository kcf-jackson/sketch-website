(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return o}));var n=r(3),a=r(7),p=(r(0),r(172)),s={},i={unversionedId:"deparse_js",id:"deparse_js",isDocsHomePage:!1,title:"deparse_js",description:"|             |                 |",source:"@site/api/deparse_js.md",slug:"/deparse_js",permalink:"/sketch-website/api/deparse_js",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/deparse_js.md",version:"current",sidebar:"api",previous:{title:"rewrite",permalink:"/sketch-website/api/rewrite"},next:{title:"insert_sketch",permalink:"/sketch-website/api/insert_sketch"}},c=[{value:"Expression deparsing for JavaScript",id:"expression-deparsing-for-javascript",children:[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Value",id:"value",children:[]},{value:"Examples",id:"examples",children:[]}]}],l={toc:c};function o(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null}),Object(p.b)("th",{parentName:"tr",align:"right"}))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"deparse","_","js"),Object(p.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(p.b)("h2",{id:"expression-deparsing-for-javascript"},"Expression deparsing for JavaScript"),Object(p.b)("h3",{id:"description"},"Description"),Object(p.b)("p",null,'This is the "master" deparser that dispatches the "worker" deparsers\nbased on the type of the input.'),Object(p.b)("h3",{id:"usage"},"Usage"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"deparse_js(ast, deparsers)\n")),Object(p.b)("h3",{id:"arguments"},"Arguments"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null}),Object(p.b)("th",{parentName:"tr",align:null}))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"ast")),Object(p.b)("td",{parentName:"tr",align:null},"language object.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"deparsers")),Object(p.b)("td",{parentName:"tr",align:null},'A list of "typed" deparsers.')))),Object(p.b)("h3",{id:"value"},"Value"),Object(p.b)("p",null,"A character string."),Object(p.b)("h3",{id:"examples"},"Examples"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},'expr_1 <- parse_expr("R.extract(x, 3, )")\ndeparse_js(expr_1, basic_deparsers())\ndeparse_js(expr_1, default_deparsers())\n\nexpr_2 <- parse_expr("R.data_frame(x = 1, y = 2)")\ndeparse_js(expr_2, basic_deparsers())\ndeparse_js(expr_2, default_deparsers())\n\nexpr_3 <- parse_expr("lambda(x, x + 1)")\ndeparse_js(expr_3, basic_deparsers())\n')),Object(p.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}o.isMDXComponent=!0},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=o(r),u=n,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||p;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<p;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);