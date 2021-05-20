(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(169)),c={},l={unversionedId:"rewrite",id:"rewrite",isDocsHomePage:!1,title:"rewrite",description:"|         |                 |",source:"@site/api/rewrite.md",slug:"/rewrite",permalink:"/sketch-website/api/rewrite",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/rewrite.md",version:"current",sidebar:"api",previous:{title:"parse_expr",permalink:"/sketch-website/api/parse_expr"},next:{title:"deparse_js",permalink:"/sketch-website/api/deparse_js"}},o=[{value:"Interface for AST rewriting",id:"interface-for-ast-rewriting",children:[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Value",id:"value",children:[]},{value:"Examples",id:"examples",children:[]}]}],b={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:"right"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"rewrite"),Object(i.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(i.b)("h2",{id:"interface-for-ast-rewriting"},"Interface for AST rewriting"),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"Interface for AST rewriting"),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"rewrite(ast, rules)\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ast")),Object(i.b)("td",{parentName:"tr",align:null},"A language object.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"rules")),Object(i.b)("td",{parentName:"tr",align:null},"A list of functions, each of which is the output from 'make","_","rule'.")))),Object(i.b)("h3",{id:"value"},"Value"),Object(i.b)("p",null,"A language object."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'library(sketch)\n\nrewrite(\n  ast = rlang::parse_expr("2 * (3 + pi)"),\n  rules = list(make_rule("pi", "Math.PI"))\n)\n\nrewrite(\n  ast = rlang::parse_expr("2 + pi"),\n  rules = list(\n    make_rule("pi", "Math.PI"),\n    make_rule("+", "Math.add")\n  )\n)\n')),Object(i.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}p.isMDXComponent=!0}}]);