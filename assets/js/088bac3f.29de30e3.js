(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||b;return n?a.a.createElement(h,s(s({ref:t},i),{},{components:n})):a.a.createElement(h,s({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<b;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),b=(n(0),n(169)),c={},s={unversionedId:"websocket",id:"websocket",isDocsHomePage:!1,title:"websocket",description:"|           |                 |",source:"@site/api/websocket.md",slug:"/websocket",permalink:"/sketch-website/api/websocket",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/api/api/websocket.md",version:"current",sidebar:"api",previous:{title:"test_sketch",permalink:"/sketch-website/api/test_sketch"},next:{title:"safeguard",permalink:"/sketch-website/api/safeguard"}},o=[{value:"Websocket for &#39;sketch&#39; applications",id:"websocket-for-sketch-applications",children:[{value:"Description",id:"description",children:[]},{value:"Public fields",id:"public-fields",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Examples",id:"examples-1",children:[]}]}],i={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null}),Object(b.b)("th",{parentName:"tr",align:"right"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"websocket"),Object(b.b)("td",{parentName:"tr",align:"right"},"R Documentation")))),Object(b.b)("h2",{id:"websocket-for-sketch-applications"},"Websocket for 'sketch' applications"),Object(b.b)("h3",{id:"description"},"Description"),Object(b.b)("p",null,"This combines the ","*","-Server family of functions in 'httpuv' with the\ntranspilation functionality provided by 'sketch'."),Object(b.b)("h3",{id:"public-fields"},"Public fields"),Object(b.b)("div",{class:"r6-fields"},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"app"),Object(b.b)("br",{parentName:"p"}),"\n","A list of functions that define the application."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"server"),Object(b.b)("br",{parentName:"p"}),"\n","A server handle to be used by 'stopServer'."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"log"),Object(b.b)("br",{parentName:"p"}),"\n","A character vector that keep tracks of all the commands sent to the\nbrowser session."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"ws"),Object(b.b)("br",{parentName:"p"}),"\n","A WebSocket channel to handle the communication between the R session\nand the browser session."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"in_handler"),Object(b.b)("br",{parentName:"p"}),"\n","A function to handle instructions sent by the browser session."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"out_handler"),Object(b.b)("br",{parentName:"p"}),"\n","A function to handle instruction sent to the browser session."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"env"),Object(b.b)("br",{parentName:"p"}),"\n","An environment to store variables temporarily."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"port"),Object(b.b)("br",{parentName:"p"}),"\n","An integer; the TCP port number."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"message"),Object(b.b)("br",{parentName:"p"}),"\n","TRUE or FALSE; whether to display a prompt when a server is started and\nwhen it is stopped."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"connected"),Object(b.b)("br",{parentName:"p"}),"\n","TRUE or FALSE; whether a connection has been established. One should\nways start the WebSocket server before visiting the web page that\nconnects to the server."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"started"),Object(b.b)("br",{parentName:"p"}),"\n","TRUE or FALSE; whether a server has been started. Use the ",Object(b.b)("inlineCode",{parentName:"p"},"startServer"),"\nmethod to start a server.")),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("h4",{id:"public-methods"},"Public methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-startServer"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$startServer()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-stopServer"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$stopServer()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-listServers"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$listServers()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-stopAllServers"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$stopAllServers()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-sketch_mode"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$sketch_mode()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-new_app"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$new_app()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-new"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$new()")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"#method-clone"},Object(b.b)("inlineCode",{parentName:"a"},"websocket$clone()"))))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-startServer"}),Object(b.b)("h4",{id:"method-startserver"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"startServer()")),Object(b.b)("p",null,"Start a WebSocket server"),Object(b.b)("h5",{id:"usage"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$startServer()\n"))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-stopServer"}),Object(b.b)("h4",{id:"method-stopserver"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"stopServer()")),Object(b.b)("p",null,"Stop a WebSocket server"),Object(b.b)("h5",{id:"usage-1"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$stopServer()\n"))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-listServers"}),Object(b.b)("h4",{id:"method-listservers"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"listServers()")),Object(b.b)("p",null,"List all running WebSocket servers"),Object(b.b)("h5",{id:"usage-2"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$listServers()\n"))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-stopAllServers"}),Object(b.b)("h4",{id:"method-stopallservers"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"stopAllServers()")),Object(b.b)("p",null,"Stop all running WebSocket servers"),Object(b.b)("h5",{id:"usage-3"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$stopAllServers()\n"))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-sketch_mode"}),Object(b.b)("h4",{id:"method-sketch_mode"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"sketch_mode()")),Object(b.b)("p",null,"Enter sketch mode, in which all commands go through the transpiler\nbefore reaching the browser session."),Object(b.b)("h5",{id:"usage-4"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$sketch_mode()\n"))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-new_app"}),Object(b.b)("h4",{id:"method-new_app"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"new_app()")),Object(b.b)("p",null,"Create a blank HTML page with interactive access. This function is\ndesigned for newcomers."),Object(b.b)("h5",{id:"usage-5"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$new_app(\n  preamble = list(library = c(), script = c(), data = c()),\n  ...\n)\n"))),Object(b.b)("h5",{id:"arguments"},"Arguments"),Object(b.b)("div",{class:"arguments"},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"preamble"),Object(b.b)("br",{parentName:"p"}),"\n","(Optional) A named list; the preamble to include. Use the name 'lib' for\narguments to ",Object(b.b)("inlineCode",{parentName:"p"},"load_library"),", 'script' for arguments to ",Object(b.b)("inlineCode",{parentName:"p"},"load_script")," and\n'data' for arguments to ",Object(b.b)("inlineCode",{parentName:"p"},"load_data"),'. Note that the "dom" and "websocket"\nmodules are required and loaded by default.'),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"..."),Object(b.b)("br",{parentName:"p"}),"\n","Extra parameters to pass to source","_","r.")),Object(b.b)("h5",{id:"returns"},"Returns"),Object(b.b)("p",null,"The (invisible) temporary file path to the app."),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-new"}),Object(b.b)("h4",{id:"method-new"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"new()")),Object(b.b)("p",null,"Initialise a WebSocket connection"),Object(b.b)("h5",{id:"usage-6"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$new(in_handler, out_handler, message = TRUE, port = 9454)\n"))),Object(b.b)("h5",{id:"arguments-1"},"Arguments"),Object(b.b)("div",{class:"arguments"},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"in_handler"),Object(b.b)("br",{parentName:"p"}),"\n","A function to handle incoming message, default to be print which only\ndisplays the message without any processing."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"out_handler"),Object(b.b)("br",{parentName:"p"}),"\n","A function to handle outgoing message, default to be compile","_","exprs\nwhich transpiles R commands into JavaScript commands."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"message"),Object(b.b)("br",{parentName:"p"}),"\n","TRUE or FALSE; whether to display a prompt when a server is started and\nwhen it is stopped."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"port"),Object(b.b)("br",{parentName:"p"}),"\n","An integer; the TCP port number.")),Object(b.b)("h5",{id:"returns-1"},"Returns"),Object(b.b)("p",null,"A 'websocket' object."),Object(b.b)("h5",{id:"examples"},"Examples"),Object(b.b)("div",{class:"r example copy"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'\\dontrun{\n# Launch a WebSocket server\nws <- websocket$new()\nws$startServer()\nws$listServers()    # Check that a server is running\n\n# Launch a \'sketch\' application with WebSocket functionality\nfile <- system.file("test_files/test_websocket.R", package = "sketch")\nsource_r(file, debug = TRUE)   # Launch the default browser\n\n# Enter sketch mode to send commands to the application\nws$sketch_mode()\n# Within sketch mode\nprint("1234")\nx <- 10\nprint(x + 1)\nq()\n\n# Back to normal mode, inspect the log and stop the server\nws$log\nws$stopServer()\nws$listServers()    # Confirm no server is running\n}\n'))),Object(b.b)("hr",null),Object(b.b)("span",{id:"method-clone"}),Object(b.b)("h4",{id:"method-clone"},"Method ",Object(b.b)("inlineCode",{parentName:"h4"},"clone()")),Object(b.b)("p",null,"The objects of this class are cloneable with this method."),Object(b.b)("h5",{id:"usage-7"},"Usage"),Object(b.b)("div",{class:"r"},Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"websocket$clone(deep = FALSE)\n"))),Object(b.b)("h5",{id:"arguments-2"},"Arguments"),Object(b.b)("div",{class:"arguments"},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"deep"),Object(b.b)("br",{parentName:"p"}),"\n","Whether to make a deep clone.")),Object(b.b)("h3",{id:"examples-1"},"Examples"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'## ------------------------------------------------\n## Method `websocket$new`\n## ------------------------------------------------\n\n## Not run: \n# Launch a WebSocket server\nws <- websocket$new()\nws$startServer()\nws$listServers()    # Check that a server is running\n\n# Launch a \'sketch\' application with WebSocket functionality\nfile <- system.file("test_files/test_websocket.R", package = "sketch")\nsource_r(file, debug = TRUE)   # Launch the default browser\n\n# Enter sketch mode to send commands to the application\nws$sketch_mode()\n# Within sketch mode\nprint("1234")\nx <- 10\nprint(x + 1)\nq()\n\n# Back to normal mode, inspect the log and stop the server\nws$log\nws$stopServer()\nws$listServers()    # Confirm no server is running\n\n## End(Not run)\n')),Object(b.b)("link",{rel:"stylesheet",type:"text/css",href:"../css/md-styles.css"}))}p.isMDXComponent=!0}}]);