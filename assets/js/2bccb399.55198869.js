(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console_error-f5ab4ada4287b153d9e638299ac120fb.png"},219:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chrome_console-462272d080ee26f00df4988b9f4004cf.png"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(169)),i={title:"Debugging"},c={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging",description:"Converting R code to JavaScript code is an elaborate process, and things could go wrong in a few different places. We will explain below what some of the common error messages mean and how to debug a sketch application in general.",source:"@site/docs/debugging.md",slug:"/debugging",permalink:"/docs/debugging",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/docs/debugging.md",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Managing assets and Deployment",permalink:"/docs/manage_assets_and_deployment"}},s=[{value:"Pre-transpilation check",id:"pre-transpilation-check",children:[]},{value:"Transpilation warning",id:"transpilation-warning",children:[]},{value:"Debugging console",id:"debugging-console",children:[]},{value:"Browser console",id:"browser-console",children:[]}],l={toc:s};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Converting R code to JavaScript code is an elaborate process, and things could go wrong in a few different places. We will explain below what some of the common error messages mean and how to debug a ",Object(o.b)("strong",{parentName:"p"},"sketch")," application in general."),Object(o.b)("h2",{id:"pre-transpilation-check"},"Pre-transpilation check"),Object(o.b)("p",null,"The transpiler comes with a safeguard which performs some check before the transpilation begins. The safeguard checks whether the reserved words are used as variables. The reserved words referred to here cover more than the standard reserved words (like ",Object(o.b)("inlineCode",{parentName:"p"},"function"),", ",Object(o.b)("inlineCode",{parentName:"p"},"if"),", ",Object(o.b)("inlineCode",{parentName:"p"},"for"),', etc.) and include some of the R functions provided by the "base" package. For example, the word ',Object(o.b)("inlineCode",{parentName:"p"},"max")," refers to the max function, and it cannot be used as variable. When one tries to use the word ",Object(o.b)("inlineCode",{parentName:"p"},"max")," as variable, or function arguments, ",Object(o.b)("strong",{parentName:"p"},"sketch")," would issue warnings like the following:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Warning messages:",Object(o.b)("br",{parentName:"p"}),"\n","In check_assignment(ast, reserved_words) :",Object(o.b)("br",{parentName:"p"}),"\n","You assigned a value to the reserved word 'max' in the following expression:",Object(o.b)("br",{parentName:"p"}),"\n","max <- 10")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Warning message:",Object(o.b)("br",{parentName:"p"}),"\n","In .f(.x[","[i]","], ...) :",Object(o.b)("br",{parentName:"p"}),"\n","You used the reserved word 'max' as the function argument name in the following expression:",Object(o.b)("br",{parentName:"p"}),"\n","function(max) { print(max) }")),Object(o.b)("p",null,"This is a limitation of transpilation via static code analysis. To circumvent the issue, one could either rename the variable to some other names (say ",Object(o.b)("inlineCode",{parentName:"p"},"max0")," or ",Object(o.b)("inlineCode",{parentName:"p"},"max_fun"),") or switch off the rewriting rule for the word ",Object(o.b)("inlineCode",{parentName:"p"},"max"),". The detail of the latter approach is discussed in the ",Object(o.b)("a",{parentName:"p",href:"customisation"},"customisation")," page."),Object(o.b)("h2",{id:"transpilation-warning"},"Transpilation warning"),Object(o.b)("p",null,"There are a couple of rules to follow for a successful transpilation."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Arguments provided to ",Object(o.b)("inlineCode",{parentName:"li"},"list")," must be fully named. An expression like ",Object(o.b)("inlineCode",{parentName:"li"},"list(1, x = 2)")," would trigger a warning:")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In .f(.x[","[i]","], .y[","[i]","], ...) :",Object(o.b)("br",{parentName:"p"}),"\n","All elements in a list must be named to convert into JavaScript properly.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"When ",Object(o.b)("inlineCode",{parentName:"li"},"default_2_deparsers()")," is used, the last expression of the function (i.e. the default return value) must be a value, not a statement. Specifically, it cannot be an assignment-statement, if-statement, or a for/while-loop. The expression ",Object(o.b)("inlineCode",{parentName:"li"},"f <- function() x <- 3")," would trigger:")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Warning in is_valid_add(last_expr, ...) :",Object(o.b)("br",{parentName:"p"}),"\n","You have used an assignment statement as the final expression in:",Object(o.b)("br",{parentName:"p"}),"\n","var x = 3",Object(o.b)("br",{parentName:"p"}),"\n","Note that automatic explicit return only applies to standalone values but not statements.")),Object(o.b)("p",null,"while the expression ",Object(o.b)("inlineCode",{parentName:"p"},"g <- function() if (TRUE) 1 else 2")," would trigger:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Warning in is_valid_add(last_expr, ...) :",Object(o.b)("br",{parentName:"p"}),"\n","You have used a control-flow statement as the final expression in:",Object(o.b)("br",{parentName:"p"}),"\n","if (true) 1 else 2",Object(o.b)("br",{parentName:"p"}),"\n","Note that automatic explicit return only applies to standalone values but not statements.")),Object(o.b)("h2",{id:"debugging-console"},"Debugging console"),Object(o.b)("p",null,"A mini console which mirrors the browser console is provided for the simple kind of debugging. To enable it, use the ",Object(o.b)("inlineCode",{parentName:"p"},"debug = TRUE")," option in ",Object(o.b)("inlineCode",{parentName:"p"},"source_r")," function call. Once enabled, a console will be attached at the top of your ",Object(o.b)("strong",{parentName:"p"},"sketch")," application. Here is a screenshot (when the ",Object(o.b)("inlineCode",{parentName:"p"},"print(x)")," is provided as input):"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Console for debugging",src:n(218).default})),Object(o.b)("h2",{id:"browser-console"},"Browser console"),Object(o.b)("p",null,'The most important tool for general debugging is the browser console. It can be accessed by right clicking on the webpage and choosing the "Inspect" item.'),Object(o.b)("div",{class:"flex height-30vh justify-center"},Object(o.b)("img",{src:"/img/chrome_right_click_menu.png"}),Object(o.b)("img",{src:"/img/firefox_right_click_menu.png"})),Object(o.b)("div",{class:"text-center mb-18"},"Screenshot 1: Right-click menus of the Chrome browser and the Firefox browser"),Object(o.b)("p",null,'Once the console is opened, one can inspect the HTML elements with the "Elements" and "Styles" tabs and the namespace / variables in the "Console".'),Object(o.b)("p",null,Object(o.b)("img",{src:n(219).default})),Object(o.b)("div",{class:"text-center"},"Screenshot 2: the console of the Chrome browser"),Object(o.b)("link",{href:"../css/docs-styles.css",rel:"stylesheet"}))}b.isMDXComponent=!0}}]);