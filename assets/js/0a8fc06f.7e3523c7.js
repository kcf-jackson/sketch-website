(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,p(p({ref:t},s),{},{components:r})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(169)),c={},p={unversionedId:"r-to-js-rules",id:"r-to-js-rules",isDocsHomePage:!1,title:"r-to-js-rules",description:"|               |                 |",source:"@site/api/r-to-js-rules.md",slug:"/r-to-js-rules",permalink:"/sketch-website/api/r-to-js-rules",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/r-to-js-rules.md",version:"current",sidebar:"api",previous:{title:"compile_data",permalink:"/sketch-website/api/compile_data"},next:{title:"combine_rules",permalink:"/sketch-website/api/combine_rules"}},i=[{value:"Mapping R operators into JavaScript operators",id:"mapping-r-operators-into-javascript-operators",children:[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Note",id:"note",children:[]},{value:"References",id:"references",children:[]},{value:"Examples",id:"examples",children:[]}]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:"right"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"r-to-js-rules"),Object(o.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(o.b)("h2",{id:"mapping-r-operators-into-javascript-operators"},"Mapping R operators into JavaScript operators"),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"Mapping R operators into JavaScript operators"),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"basic_rules()\n\ndefault_rules()\n")),Object(o.b)("h3",{id:"note"},"Note"),Object(o.b)("p",null,"These functions are used as inputs to compile","_","r and compile","_","exprs."),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("p",null,"R operators:\n",Object(o.b)("a",{parentName:"p",href:"https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Operators"},"https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Operators")),Object(o.b)("p",null,"R infix and prefix operators:\n",Object(o.b)("a",{parentName:"p",href:"https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Infix-and-prefix-operators"},"https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Infix-and-prefix-operators")),Object(o.b)("p",null,"JavaScript operators: ",Object(o.b)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_operators.asp"},"https://www.w3schools.com/js/js_operators.asp")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"basic_rules()\n\ndefault_rules()\n")),Object(o.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}l.isMDXComponent=!0}}]);