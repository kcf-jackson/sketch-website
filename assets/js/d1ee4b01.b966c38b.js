(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),s=(r(0),r(169)),o={title:"Customisation"},i={unversionedId:"customisation",id:"customisation",isDocsHomePage:!1,title:"Customisation",description:"A major change that has occurred as the package reaches 1.0.0 is that every part of the transpiler becomes configurable. In this article, we discuss how one could create custom rewriting rules and deparsers for specific use.",source:"@site/docs/customisation.md",slug:"/customisation",permalink:"/sketch-website/docs/customisation",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/docs/customisation.md",version:"current",sidebar:"docs",previous:{title:"Testing sketch application",permalink:"/sketch-website/docs/testing"},next:{title:"Usage with R Markdown documents",permalink:"/sketch-website/docs/usage_with_Rmarkdown"}},c=[{value:"Custom rewriting rules",id:"custom-rewriting-rules",children:[]},{value:"Custom deparsers",id:"custom-deparsers",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A major change that has occurred as the package reaches 1.0.0 is that every part of the transpiler becomes configurable. In this article, we discuss how one could create custom rewriting rules and deparsers for specific use."),Object(s.b)("h2",{id:"custom-rewriting-rules"},"Custom rewriting rules"),Object(s.b)("p",null,"To create a rewriting rule, we use the ",Object(s.b)("inlineCode",{parentName:"p"},"make_rule")," function. It takes two strings and returns a function that rewrites the first string into the second string appeared in a language object."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},'library(sketch)\nrule_1 <- make_rule("Cpp", "JS")\nrule_1\n\n## Rule: Rewrite \'Cpp\' to \'JS\'.\n## function (x) \n## subst(x, pattern = from, replacement = to)\n## <bytecode: 0x7fa185179de8>\n## <environment: 0x7fa18517dfa8>\n\nexpr <- parse_expr("R + Cpp")\nexpr\n\n## R + Cpp\n\nrule_1(expr)  # Works, but not preferred\n\n## R + JS\n\nrewrite(expr, list(rule_1))  # preferred\n\n## R + JS\n\nrule_2 <- make_rule("R", "Rust")\nrewrite(expr, list(rule_1, rule_2))\n\n## Rust + JS\n')),Object(s.b)("p",null,"A custom rewriter is usually needed when one wants to do arithmetic of a special class of objects offered by some JavaScript library. For example, in the case of ",Object(s.b)("a",{parentName:"p",href:"https://mathjs.org/"},Object(s.b)("strong",{parentName:"a"},"math.js")),", addition is expected to be carried out as ",Object(s.b)("inlineCode",{parentName:"p"},"math.add(x, y)")," to allow for adding together different types of objects (like vectors and matrices). In such case, we would define the rule as follows."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},"rule_addition <- make_rule(\"+\", \"math.add\")\nrule_addition\n\n## Rule: Rewrite '+' to 'math.add'.\n## function (x) \n## subst(x, pattern = from, replacement = to)\n## <bytecode: 0x7fa185179de8>\n## <environment: 0x7fa18493f3f8>\n")),Object(s.b)("p",null,"Once the rule is created, it can be passed to the transpiler using the ",Object(s.b)("inlineCode",{parentName:"p"},"rules")," argument. Specifically,"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},'compile_exprs("1 + 2", rules = list(rule_addition))\n\n## [1] "math.add(1, 2)"\n')),Object(s.b)("p",null,"Here is an example with ",Object(s.b)("a",{parentName:"p",href:"https://www.tensorflow.org/js/"},Object(s.b)("strong",{parentName:"a"},"tensorflow.js")),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},'tf_rules <- list(\n    make_rule("+", "tf.add"),\n    make_rule("-", "tf.subtract"),\n    make_rule("*", "tf.multiply"),\n    make_rule("/", "tf.divide"),\n    make_rule("%*%", "tf.matmul")\n)\n\n# Now your R expression will transpile to JavaScript using tensorflow\'s API\ncompile_exprs("(A + B) %*% C", rules = tf_rules)\n\n## [1] "tf.matmul((tf.add(A, B)), C)"\n')),Object(s.b)("h2",{id:"custom-deparsers"},"Custom deparsers"),Object(s.b)("p",null,"A custom deparser is needed when there is certain construct that cannot be expressed as a simple rewriting rule. For example, consider the for-loop, in R, it looks like:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},"for (i in x) {...}\n")),Object(s.b)("p",null,"and the corresponding version in JavaScript is:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},"for (let i of x) {...}\n")),Object(s.b)("p",null,"In such case, the transpilation cannot be done with a simple rewriting rule, and a custom deparser is needed. To create a deparser, two functions are needed: a predicate function that recognises the function-call trigger and a deparse function that performs the transpilation."),Object(s.b)("p",null,"The predicate function must take an \u201cexpression\u201d returned by ",Object(s.b)("inlineCode",{parentName:"p"},"parse_expr")," (imported from ",Object(s.b)("inlineCode",{parentName:"p"},"rlang::parse_expr"),") and return a logical vector of length one."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},'is_for <- function(x) {\n    rlang::is_call(x, name = "for")\n}\n\n# Unit test\nexpr_1 <- parse_expr("for (i in x) { print(i) }")\nis_for(expr_1)\n\n## [1] TRUE\n\nexpr_2 <- parse_expr("foo(x, y)")\nis_for(expr_2)\n\n## [1] FALSE\n')),Object(s.b)("p",null,"The deparse function takes the same input as the predicate function and returns a character string. Note that ",Object(s.b)("inlineCode",{parentName:"p"},"...")," must be provided to stay consistent with other deparsers provided by this package. For illustration purposes, we capitalise \u201cof\u201d to distinguish the custom deparser with the one provided by the package."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},'collapse <- function(x, s = "\\n") paste(x, collapse = s)\n\ndeparse_for <- function(ast, ...) {\n    # Turn the symbol into strings\n    symbol_str <- purrr::map_chr(ast, deparse1)    # Note 1\n    \n    # Rearrange them in the desired form\n    sprintf(\n        "%s (let %s OF %s) %s", \n        symbol_str[1],  # for\n        symbol_str[2],  # i\n        symbol_str[3],  # x\n        collapse(symbol_str[4])   # body\n    )\n}\n\n# Unit test\nexpr_1 <- parse_expr("for (i in x) { print(i) }")\ndeparse_for(expr_1)\n\n## [1] "for (let i OF x) {     print(i) }"\n')),Object(s.b)("p",null,"To integrate your custom deparser into the \u201cmaster\u201d deparser provided by this package, ",Object(s.b)("inlineCode",{parentName:"p"},"deparse_js"),", first replace the ",Object(s.b)("inlineCode",{parentName:"p"},"deparse1")," call in the line marked \u201cNote 1\u201d by ",Object(s.b)("inlineCode",{parentName:"p"},"deparse_js"),", and combine the predicate function and the deparse function with ",Object(s.b)("inlineCode",{parentName:"p"},"make_deparser"),", then add your deparser to any of the existing lists of deparsers, i.e. ",Object(s.b)("inlineCode",{parentName:"p"},"basic_deparsers()")," / ",Object(s.b)("inlineCode",{parentName:"p"},"default_deparsers()")," (or you can build your list from scratch too). Here is the full listing of the resulting code:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-r"},'# Step 1 (see updates on line 4)\ndeparse_for <- function(ast, ...) {\n    # Turn the symbol into strings\n    symbol_str <- purrr::map_chr(ast, deparse_js, ...)   # **UPDATED**\n\n    # Rearrange them in the desired form\n    sprintf(\n        "%s (let %s OF %s) %s", \n        symbol_str[1],  # for\n        symbol_str[2],  # i\n        symbol_str[3],  # x\n        collapse(symbol_str[4])   # body\n    )\n}\n\n# Step 2\nmy_deparser <- make_deparser(is_for, deparse_for)\n\n# Step 3\ncustomised_deparsers <- c(list(my_deparser), default_deparsers())\n\n# Remark: In most cases, you want your custom deparser to have a higher precedence \n# than the package\'s ones. So it is added to the front rather than to the end.\n\n\n# Unit test\ncat(compile_exprs(\n    "for (i in 1:10) { print(i) }", \n    deparsers = customised_deparsers\n))\n\n## for (let i OF R.seq(1, 10)) {\n##     R.print(i)\n## }\n')))}l.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return r?a.a.createElement(b,i(i({ref:t},p),{},{components:r})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);