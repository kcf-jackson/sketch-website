(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),s=(r(0),r(169)),p={},o={unversionedId:"deparsers_component",id:"deparsers_component",isDocsHomePage:!1,title:"deparsers_component",description:"|                 |                 |",source:"@site/api/deparsers_component.md",slug:"/deparsers_component",permalink:"/sketch-website/api/deparsers_component",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/deparsers_component.md",version:"current",sidebar:"api",previous:{title:"default_2_deparsers",permalink:"/sketch-website/api/default_2_deparsers"},next:{title:"dp",permalink:"/sketch-website/api/dp"}},l=[{value:"Deparsers (specialised)",id:"deparsers-specialised",children:[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Value",id:"value",children:[]}]}],c={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:"right"}))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"deparse","_","Family"),Object(s.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(s.b)("h2",{id:"deparsers-specialised"},"Deparsers (specialised)"),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"Deparsers (specialised)"),Object(s.b)("p",null,"Deparser for NULL"),Object(s.b)("p",null,"Deparser for NA"),Object(s.b)("p",null,"Deparser for NaN"),Object(s.b)("p",null,"Deparser for calls"),Object(s.b)("p",null,"Deparser for infix operators"),Object(s.b)("p",null,"Deparser for brackets"),Object(s.b)("p",null,"Deparser for the 'for' keyword"),Object(s.b)("p",null,"Deparser for the 'if' keyword"),Object(s.b)("p",null,"Deparser for the 'while' keyword"),Object(s.b)("p",null,'Deparser for the "function" keyword'),Object(s.b)("p",null,'Deparser for the "function" keyword with explicit return'),Object(s.b)("p",null,"Deparser for return"),Object(s.b)("p",null,"Deparser for assignments"),Object(s.b)("p",null,"Deparser for assignments (automatic variable declaration)"),Object(s.b)("p",null,'Deparser for the "next" keyword'),Object(s.b)("p",null,'Deparser for the "try" keyword'),Object(s.b)("p",null,'Deparser for the "tryCatch" keyword'),Object(s.b)("p",null,'Deparser for the "throw" keyword'),Object(s.b)("p",null,'Deparser for the "list" operator'),Object(s.b)("p",null,'Deparser for the "data.frame" operators'),Object(s.b)("p",null,'Deparser for the "summarise" operators'),Object(s.b)("p",null,'Deparser for the "mutate" operators'),Object(s.b)("p",null,'Deparser for the "R6Class" function'),Object(s.b)("p",null,'Deparser for the "new" operator'),Object(s.b)("p",null,'Deparser for the "typeof" operator'),Object(s.b)("p",null,'Deparser for the "export" operator'),Object(s.b)("p",null,'Deparser for the ""async" and "await" operators'),Object(s.b)("p",null,'Deparser for the "let" operator'),Object(s.b)("p",null,'Deparser for the "const" operator'),Object(s.b)("p",null,'Deparser for the "var" operator'),Object(s.b)("p",null,'Deparser for the "dataURI" operator'),Object(s.b)("p",null,'Deparser for the "ifelse" operator'),Object(s.b)("p",null,'Deparser for the "lambda" operator'),Object(s.b)("p",null,'Deparser for the "pipe" operator'),Object(s.b)("p",null,"Deparser for the raw string operator"),Object(s.b)("p",null,"Deparser for formula"),Object(s.b)("p",null,'Deparser for the "add" operator'),Object(s.b)("p",null,'Deparser for the "subtract" operator'),Object(s.b)("p",null,'Deparser for the "extract" operator'),Object(s.b)("p",null,'Deparser for the "extractAssign" operator'),Object(s.b)("p",null,'Deparser for the "extract2" operator'),Object(s.b)("p",null,'Deparser for the "extract2Assign" operator'),Object(s.b)("p",null,"Deparser for the HTML tags"),Object(s.b)("p",null,"Deparser for the d3.js 'attr' function"),Object(s.b)("p",null,"Deparser for the d3.js 'style' function"),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"deparse_sym(ast, ...)\n\ndeparse_NULL(ast, ...)\n\ndeparse_NA(ast, ...)\n\ndeparse_NaN(ast, ...)\n\ndeparse_call(ast, ...)\n\ndeparse_infix(ast, ...)\n\ndeparse_wrap(ast, ...)\n\ndeparse_for(ast, ...)\n\ndeparse_if(ast, ...)\n\ndeparse_while(ast, ...)\n\ndeparse_function(ast, ...)\n\ndeparse_function_with_return(ast, ...)\n\ndeparse_return(ast, ...)\n\ndeparse_assignment(ast, ...)\n\ndeparse_assignment_auto(ast, ...)\n\ndeparse_next(ast, ...)\n\ndeparse_try(ast, ...)\n\ndeparse_tryCatch(ast, ...)\n\ndeparse_throw(ast, ...)\n\ndeparse_list(ast, ...)\n\ndeparse_df(ast, ...)\n\ndeparse_df_summarise(ast, ...)\n\ndeparse_df_mutate(ast, ...)\n\ndeparse_R6Class(ast, ...)\n\ndeparse_new(ast, ...)\n\ndeparse_typeof(ast, ...)\n\ndeparse_export(ast, ...)\n\ndeparse_async_await(ast, ...)\n\ndeparse_let(ast, ...)\n\ndeparse_const(ast, ...)\n\ndeparse_var(ast, ...)\n\ndeparse_dataURI(ast, ...)\n\ndeparse_ifelse(ast, ...)\n\ndeparse_lambda(ast, ...)\n\ndeparse_pipe(ast, ...)\n\ndeparse_raw_string(ast, ...)\n\ndeparse_formula(ast, ...)\n\ndeparse_add(ast, ...)\n\ndeparse_subtract(ast, ...)\n\ndeparse_extract(ast, ...)\n\ndeparse_extractAssign(ast, ...)\n\ndeparse_extract2(ast, ...)\n\ndeparse_extract2Assign(ast, ...)\n\ndeparse_html_tags(ast, ...)\n\ndeparse_d3_attr(ast, ...)\n\ndeparse_d3_style(ast, ...)\n")),Object(s.b)("h3",{id:"arguments"},"Arguments"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null}))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("inlineCode",{parentName:"td"},"ast")),Object(s.b)("td",{parentName:"tr",align:null},"A language object.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("inlineCode",{parentName:"td"},"...")),Object(s.b)("td",{parentName:"tr",align:null},"The contextual information to be passed on to the next call.")))),Object(s.b)("h3",{id:"value"},"Value"),Object(s.b)("p",null,"A character string."),Object(s.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}b.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=b(r),u=a,f=i["".concat(p,".").concat(u)]||i[u]||d[u]||s;return r?n.a.createElement(f,o(o({ref:t},c),{},{components:r})):n.a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,p=new Array(s);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<s;c++)p[c]=r[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);