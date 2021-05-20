(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(169)),c={title:"Testing sketch application",sidebar_label:"Testing"},s={unversionedId:"testing",id:"testing",isDocsHomePage:!1,title:"Testing sketch application",description:"The function testsketch is provided for testing applications developed using _sketch__ . The function takes two scripts, an app script and a test script. The way it works is that it adds a WebSocket connection to the app (if there isn't one already), runs the test and then reports back the results.",source:"@site/docs/testing.md",slug:"/testing",permalink:"/sketch-website/docs/testing",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/docs/testing.md",version:"current",sidebar_label:"Testing",sidebar:"docs",previous:{title:"WebSocket",permalink:"/sketch-website/docs/websocket"},next:{title:"Customisation",permalink:"/sketch-website/docs/customisation"}},o=[],p={toc:o};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The function ",Object(i.b)("inlineCode",{parentName:"p"},"test_sketch")," is provided for testing applications developed using ",Object(i.b)("strong",{parentName:"p"},"sketch")," . The function takes two scripts, an app script and a test script. The way it works is that it adds a WebSocket connection to the app (if there isn't one already), runs the test and then reports back the results. "),Object(i.b)("h4",{id:"an-example"},"An example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-{r}"},'library(sketch)\n\n# Set up sample app and test scripts\napp_script <- tempfile(fileext = ".R")\ncat("fib <- function(n) {\n        if (n <= 2) return(1)\n        return(fib(n-1) + fib(n-2))\n    }\\n",\n    file = app_script)\n\ntest_script <- tempfile(fileext = ".R")\ncat("testthat::expect_equal(fib(1), 1)  \n    testthat::expect_equal(fib(12), 144)\n    testthat::expect_equal(fib(12), 999)  # intentionally make this fail\n    ",\n    file = test_script)\n\n# Run the test\ncon <- test_sketch(app_script, test_script)\n')),Object(i.b)("h4",{id:"screenshot"},"Screenshot"),Object(i.b)("p",null,Object(i.b)("img",{src:n(223).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Currently, ",Object(i.b)("inlineCode",{parentName:"p"},"testthat")," only supports ",Object(i.b)("inlineCode",{parentName:"p"},"expect_true"),", ",Object(i.b)("inlineCode",{parentName:"p"},"expect_false")," and ",Object(i.b)("inlineCode",{parentName:"p"},"expect_equal"),". Pull requests are warmly welcome."))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||i;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/testthat_report-e892f44675179f774a7e357645e1c7b9.png"}}]);