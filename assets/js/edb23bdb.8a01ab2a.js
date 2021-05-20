(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(169)),i={title:"Release sketch v1.1.0",author:"Jackson Kwok",author_title:"Core Team",author_url:"https://github.com/kcf-jackson",author_image_url:"https://avatars.githubusercontent.com/u/12783172?s=400&v=4",tags:["release","features"]},l={permalink:"/blog/2021/04/30/release-1.1.0",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/blog/blog/2021-04-30-release-1.1.0.md",source:"@site/blog/2021-04-30-release-1.1.0.md",description:"This is a major release. Here is a list of major improvements (from v1.0.3):",date:"2021-04-30T00:00:00.000Z",formattedDate:"April 30, 2021",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"features",permalink:"/blog/tags/features"}],title:"Release sketch v1.1.0",readingTime:.46,truncated:!1,nextItem:{title:"Sketch: Interactive Visualisations in R with a JavaScript Twist",permalink:"/blog/2021/03/28/welcome"}},c=[],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a major release. Here is a list of major improvements (from v1.0.3):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add WebSocket for R-JavaScript interop (i.e. R functions and packages can be used)"),Object(o.b)("li",{parentName:"ul"},"Add support to transpiling error handling keywords"),Object(o.b)("li",{parentName:"ul"},"Switch from a mixed S3-R6 OOP to pure R6 OOP"),Object(o.b)("li",{parentName:"ul"},"Add safeguard to perform pre-transpilation check automatically"),Object(o.b)("li",{parentName:"ul"},"Support per-file transpiler configuration"),Object(o.b)("li",{parentName:"ul"},"Optimise transpiler performance (>100X faster for large files)"),Object(o.b)("li",{parentName:"ul"},'Add "testthat" module for testing sketch applications'),Object(o.b)("li",{parentName:"ul"},"Add support to loading resources from Content Delivery Network (CDN) (10~100X smaller file size)")))}u.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);