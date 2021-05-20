(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(169)),o={title:"Sketch: Interactive Visualisations in R with a JavaScript Twist",author:"Kate Saunders",author_title:"Core Team",author_url:"https://github.com/katerobsau/",author_image_url:"https://avatars.githubusercontent.com/u/11323071?s=400&u=ee5fd7fa95df833d89214c58c9b99af6e51e0942&v=4",tags:["welcome","introduction"]},s={permalink:"/blog/2021/03/28/welcome",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/blog/blog/2021-03-28-welcome.md",source:"@site/blog/2021-03-28-welcome.md",description:"The fourth industrial revolution is digital, and there is now a deluge of data just waiting to be visualised - the question is does the R community have all the necessary tools to create amazing interactive visualisations?",date:"2021-03-28T00:00:00.000Z",formattedDate:"March 28, 2021",tags:[{label:"welcome",permalink:"/blog/tags/welcome"},{label:"introduction",permalink:"/blog/tags/introduction"}],title:"Sketch: Interactive Visualisations in R with a JavaScript Twist",readingTime:1.395,truncated:!1,prevItem:{title:"Release sketch v1.1.0",permalink:"/blog/2021/04/30/release-1.1.0"},nextItem:{title:"Release sketch v1.0.3 (CRAN acceptance)",permalink:"/blog/2020/10/08/release-1.0.3-cran"}},c=[],l={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The fourth industrial revolution is digital, and there is now a deluge of data just waiting to be visualised - the question is does the R community have all the necessary tools to create amazing interactive visualisations?"),Object(r.b)("p",null,"Interactive visualisations help readers to understand the dynamic relationships that lie at the core of many scientific and social research fields. These visualisations intuitively connect readers with data content and make for a highly effective means of communication. For the R community creating these kinds of visualisations can be a challenge, as traditionally they would have been written in JavaScript. We have developed the ",Object(r.b)("strong",{parentName:"p"},"sketch")," package in R to change this. Sketch makes creating JavaScript-based visualisations easy and accessible in R!"),Object(r.b)("p",null,"Sketch allows for real-time, bi-directional communication between R and JavaScript. This changes fundamentally how real-time outputs from a statistical model can be used to inform visualisation and decision making. It also makes possible a range of new ways to perform interactive exploratory analysis in R, such as agent-based modellings, creative coding and simulation-based spatial analysis."),Object(r.b)("p",null,"The real beauty of Sketch though is removing the JavaScript language hurdle for the R community. This allows R users create JavaScript-based visualisations using the R syntax. This has the key advantages that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"There is now a more flexible feedback mechanism in R between statistical models and interactive visualisations."),Object(r.b)("li",{parentName:"ul"},"Users can have greater control over the dynamic aspects of their interactive visualisations.")),Object(r.b)("p",null,"Visualisations produced in Sketch are also compatible with R favourites, such as the R Markdown documents or R6-style Object-Oriented Programming."),Object(r.b)("p",null,"We welcome users to share their applications and creative examples using Sketch on our website. Can't wait to see what you create!"))}u.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(h,s(s({ref:t},l),{},{components:a})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);