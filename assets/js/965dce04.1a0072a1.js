(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(g,I,C){"use strict";C.r(I),C.d(I,"frontMatter",(function(){return e})),C.d(I,"metadata",(function(){return i})),C.d(I,"toc",(function(){return o})),C.d(I,"default",(function(){return n}));var l=C(3),c=C(7),s=(C(0),C(170)),e={title:"Creative coding with tiles",keywords:["creative coding","p5.js"]},i={unversionedId:"8_tiles",id:"8_tiles",isDocsHomePage:!1,title:"Creative coding with tiles",description:"Created 2021-05-22.",source:"@site/tutorial/8_tiles.md",slug:"/8_tiles",permalink:"/sketch-website/tutorial/8_tiles",editUrl:"https://github.com/kcf-jackson/sketch-website/edit/master/tutorial/tutorial/8_tiles.md",version:"current",sidebar:"tutorial",previous:{title:"Creative coding with circles",permalink:"/sketch-website/tutorial/"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"1. Set up a grid",id:"1-set-up-a-grid",children:[]},{value:"2. Add tiles",id:"2-add-tiles",children:[]},{value:"Credits / Reference",id:"credits--reference",children:[]}],t={toc:o};function n(g){var I=g.components,C=Object(c.a)(g,["components"]);return Object(s.b)("wrapper",Object(l.a)({},t,C,{components:I,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Created: 2021-05-17. Modified: 2021-05-22."),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"In this article, we will create the following visualisation by ",Object(s.b)("a",{parentName:"p",href:"https://openprocessing.org/sketch/1173537"},"Roni\nKaufman"),"."),Object(s.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIGNvbG9ycyA9IEFycmF5KCIjZmRkMzViIiwgIiMzMzMzMzMiLCAiIzAwYjJiNCIpCnZhciBjdyA9IDUwMAp2YXIgY2ggPSA1MDAKdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICBjcmVhdGVDYW52YXMoY3csIGNoKQogICAgbm9Mb29wKCkKICAgIGltYWdlTW9kZShDRU5URVIpCiAgICByZXR1cm4gcmVjdE1vZGUoQ0VOVEVSKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICB2YXIgbiA9IHJhbmRvbShBcnJheSg4LCAxMCwgMTIsIDE1KSkKICAgIHZhciBzID0gY3cvbgogICAgdmFyIHRpbGUxID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGUxLnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlMS5zdHJva2VXZWlnaHQoMikKICAgIHRpbGUxLmJhY2tncm91bmQoY29sb3JzWzBdKQogICAgdGlsZTEuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlMS5jaXJjbGUoMCwgMCwgNCAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZShzLCAwLCA0ICogcy81KQogICAgdGlsZTEuY2lyY2xlKDAsIHMsIDQgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUocywgcywgNCAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZShzLzIsIHMvMiwgMiAqIHMvNSkKICAgIHRpbGUxLmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTEuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUocywgMCwgMiAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZSgwLCBzLCAyICogcy81KQogICAgdGlsZTEuY2lyY2xlKHMsIHMsIDIgKiBzLzUpCiAgICB2YXIgdGlsZTIgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTIuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGUyLnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTIuYmFja2dyb3VuZChjb2xvcnNbMl0pCiAgICB0aWxlMi5maWxsKGNvbG9yc1swXSkKICAgIHRpbGUyLmNpcmNsZSgwLCAwLCA2ICogcy81KQogICAgdGlsZTIuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlMi5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZShzLCBzLCA2ICogcy81KQogICAgdGlsZTIuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlMi5jaXJjbGUocywgcywgNCAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZSgwLCAwLCA0ICogcy81KQogICAgdGlsZTIuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlMi5jaXJjbGUoMCwgMCwgMiAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZShzLCBzLCAyICogcy81KQogICAgdmFyIHRpbGUzID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGUzLnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlMy5zdHJva2VXZWlnaHQoMikKICAgIHRpbGUzLmJhY2tncm91bmQoY29sb3JzWzBdKQogICAgdGlsZTMuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlMy5jaXJjbGUoMCwgMCwgOCAqIHMvNSkKICAgIHRpbGUzLmNpcmNsZShzLCAzICogcy8xMCwgcy81KQogICAgdGlsZTMuY2lyY2xlKDMgKiBzLzEwLCBzLCBzLzUpCiAgICB0aWxlMy5maWxsKGNvbG9yc1swXSkKICAgIHRpbGUzLmNpcmNsZSgwLCAwLCA2ICogcy81KQogICAgdGlsZTMuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlMy5jaXJjbGUoMCwgMCwgNCAqIHMvNSkKICAgIHRpbGUzLmNpcmNsZShzLCBzLCA0ICogcy81KQogICAgdGlsZTMuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlMy5jaXJjbGUoMCwgMCwgMiAqIHMvNSkKICAgIHRpbGUzLmNpcmNsZShzLCBzLCAyICogcy81KQogICAgdmFyIHRpbGU0ID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGU0LnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlNC5zdHJva2VXZWlnaHQoMikKICAgIHRpbGU0LmJhY2tncm91bmQoY29sb3JzWzBdKQogICAgdGlsZTQuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlNC5jaXJjbGUocy8yLCAwLCAzICogcy81KQogICAgdGlsZTQuY2lyY2xlKHMsIHMvMiwgMyAqIHMvNSkKICAgIHRpbGU0LmNpcmNsZShzLzIsIHMsIDMgKiBzLzUpCiAgICB0aWxlNC5jaXJjbGUoMCwgcy8yLCAzICogcy81KQogICAgdGlsZTQuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlNC5jaXJjbGUocy8yLCAwLCBzLzUpCiAgICB0aWxlNC5jaXJjbGUocywgcy8yLCBzLzUpCiAgICB0aWxlNC5jaXJjbGUocy8yLCBzLCBzLzUpCiAgICB0aWxlNC5jaXJjbGUoMCwgcy8yLCBzLzUpCiAgICB2YXIgdGlsZTUgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTUuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGU1LnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTUuYmFja2dyb3VuZChjb2xvcnNbMF0pCiAgICB0aWxlNS5maWxsKGNvbG9yc1syXSkKICAgIHRpbGU1LmNpcmNsZSgzICogcy8xMCwgMCwgcy81KQogICAgdGlsZTUuY2lyY2xlKDMgKiBzLzEwLCBzLCBzLzUpCiAgICB0aWxlNS5jaXJjbGUoNyAqIHMvMTAsIDAsIHMvNSkKICAgIHRpbGU1LmNpcmNsZSg3ICogcy8xMCwgcywgcy81KQogICAgdGlsZTUucmVjdCgtMSwgcy81LCBzICsgMiwgcy81KQogICAgdGlsZTUucmVjdCgtMSwgMyAqIHMvNSwgcyArIDIsIHMvNSkKICAgIHZhciB0aWxlNiA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlNi5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTYuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlNi5iYWNrZ3JvdW5kKGNvbG9yc1syXSkKICAgIHRpbGU2LmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTYuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlNi5jaXJjbGUocy8yLCAwLCBzLzUpCiAgICB0aWxlNi5jaXJjbGUocywgMCwgMiAqIHMvNSkKICAgIHRpbGU2LmNpcmNsZSgwLCBzLzIsIHMvNSkKICAgIHRpbGU2LmNpcmNsZShzLzIsIHMvMiwgMiAqIHMvNSkKICAgIHRpbGU2LmNpcmNsZShzLCBzLzIsIHMvNSkKICAgIHRpbGU2LmNpcmNsZSgwLCBzLCAyICogcy81KQogICAgdGlsZTYuY2lyY2xlKHMvMiwgcywgcy81KQogICAgdGlsZTYuY2lyY2xlKHMsIHMsIDIgKiBzLzUpCiAgICB2YXIgdGlsZTcgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTcuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGU3LnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTcuYmFja2dyb3VuZChjb2xvcnNbMF0pCiAgICB0aWxlNy5maWxsKGNvbG9yc1syXSkKICAgIHRpbGU3LmNpcmNsZSgzICogcy8xMCwgcywgcy81KQogICAgdGlsZTcuY2lyY2xlKDcgKiBzLzEwLCBzLCBzLzUpCiAgICB0aWxlNy5yZWN0KC0xLCAzICogcy81LCBzICsgMiwgcy81KQogICAgdGlsZTcuY2lyY2xlKDAsIDAsIDQgKiBzLzUpCiAgICB0aWxlNy5jaXJjbGUocywgMCwgNCAqIHMvNSkKICAgIHRpbGU3LmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTcuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlNy5jaXJjbGUocywgMCwgMiAqIHMvNSkKICAgIHZhciB0aWxlOCA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlOC5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTguc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlOC5iYWNrZ3JvdW5kKGNvbG9yc1syXSkKICAgIHRpbGU4LmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTguY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlOC5jaXJjbGUocy8yLCAwLCBzLzUpCiAgICB0aWxlOC5jaXJjbGUocywgMCwgMiAqIHMvNSkKICAgIHRpbGU4LmNpcmNsZSgwLCBzLCAyICogcy81KQogICAgdGlsZTguY2lyY2xlKHMvMiwgcywgcy81KQogICAgdGlsZTguY2lyY2xlKHMsIHMsIDIgKiBzLzUpCiAgICB0aWxlOC5yZWN0KC0xLCAyICogcy81LCBzICsgMiwgcy81KQogICAgdmFyIHRpbGVzID0gQXJyYXkoKQogICAgdmFyIHAgPSAzLzQKICAgIHdoaWxlICh0aWxlcy5sZW5ndGggPT0gMCkgewogICAgICAgIGlmIChyYW5kb20oKSA8IHApIHRpbGVzLnB1c2godGlsZTEpCiAgICAgICAgaWYgKHJhbmRvbSgpIDwgcCkgdGlsZXMucHVzaCh0aWxlMikKICAgICAgICBpZiAocmFuZG9tKCkgPCBwKSB0aWxlcy5wdXNoKHRpbGUzKQogICAgICAgIGlmIChyYW5kb20oKSA8IHApIHRpbGVzLnB1c2godGlsZTQpCiAgICAgICAgaWYgKHJhbmRvbSgpIDwgcCkgdGlsZXMucHVzaCh0aWxlNSkKICAgICAgICBpZiAocmFuZG9tKCkgPCBwKSB0aWxlcy5wdXNoKHRpbGU2KQogICAgICAgIGlmIChyYW5kb20oKSA8IHApIHRpbGVzLnB1c2godGlsZTcpCiAgICAgICAgaWYgKHJhbmRvbSgpIDwgcCkgdGlsZXMucHVzaCh0aWxlOCkKICAgIH0KICAgIGZvciAobGV0IHggb2YgUi5zZXEocy8yLCBjdywgcykpIHsKICAgICAgICBmb3IgKGxldCB5IG9mIFIuc2VxKHMvMiwgY2gsIHMpKSB7CiAgICAgICAgICAgIHB1c2goKQogICAgICAgICAgICB0cmFuc2xhdGUoeCwgeSkKICAgICAgICAgICAgcm90YXRlKHJhbmRvbShBcnJheShIQUxGX1BJLCBQSSwgMyAqIEhBTEZfUEkpKSkKICAgICAgICAgICAgaW1hZ2UocmFuZG9tKHRpbGVzKSwgMCwgMCkKICAgICAgICAgICAgcG9wKCkKICAgICAgICB9CiAgICB9CiAgICByZXR1cm4gbnVsbAp9Cg=="><\/script> </body>\n</html>',class:"border-none width-530 height-530"}),Object(s.b)("p",null,"This visualisation is a combination of 8 different tiles (with random\norientations). The 8 tiles are:"),Object(s.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIGNvbG9ycyA9IEFycmF5KCIjZmRkMzViIiwgIiMzMzMzMzMiLCAiIzAwYjJiNCIpCnZhciBjdyA9IDUwCnZhciBjaCA9IDUwCnZhciBzZXR1cCA9IGZ1bmN0aW9uKCkgewogICAgY3JlYXRlQ2FudmFzKDggKiAoY3cgKyAxMCksIGNoKQogICAgcmV0dXJuIG5vTG9vcCgpCn0KdmFyIGRyYXcgPSBmdW5jdGlvbigpIHsKICAgIHZhciBzID0gY3cKICAgIHZhciB0aWxlMSA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlMS5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTEuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlMS5iYWNrZ3JvdW5kKGNvbG9yc1swXSkKICAgIHRpbGUxLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTEuY2lyY2xlKDAsIDAsIDQgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUocywgMCwgNCAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZSgwLCBzLCA0ICogcy81KQogICAgdGlsZTEuY2lyY2xlKHMsIHMsIDQgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUocy8yLCBzLzIsIDIgKiBzLzUpCiAgICB0aWxlMS5maWxsKGNvbG9yc1swXSkKICAgIHRpbGUxLmNpcmNsZSgwLCAwLCAyICogcy81KQogICAgdGlsZTEuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZShzLCBzLCAyICogcy81KQogICAgaW1hZ2UodGlsZTEsIDAsIDApCiAgICB2YXIgdGlsZTIgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTIuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGUyLnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTIuYmFja2dyb3VuZChjb2xvcnNbMl0pCiAgICB0aWxlMi5maWxsKGNvbG9yc1swXSkKICAgIHRpbGUyLmNpcmNsZSgwLCAwLCA2ICogcy81KQogICAgdGlsZTIuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlMi5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZShzLCBzLCA2ICogcy81KQogICAgdGlsZTIuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlMi5jaXJjbGUocywgcywgNCAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZSgwLCAwLCA0ICogcy81KQogICAgdGlsZTIuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlMi5jaXJjbGUoMCwgMCwgMiAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZShzLCBzLCAyICogcy81KQogICAgaW1hZ2UodGlsZTIsIChjdyArIDEwKSwgMCkKICAgIHZhciB0aWxlMyA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlMy5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTMuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlMy5iYWNrZ3JvdW5kKGNvbG9yc1swXSkKICAgIHRpbGUzLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTMuY2lyY2xlKDAsIDAsIDggKiBzLzUpCiAgICB0aWxlMy5jaXJjbGUocywgMyAqIHMvMTAsIHMvNSkKICAgIHRpbGUzLmNpcmNsZSgzICogcy8xMCwgcywgcy81KQogICAgdGlsZTMuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlMy5jaXJjbGUoMCwgMCwgNiAqIHMvNSkKICAgIHRpbGUzLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTMuY2lyY2xlKDAsIDAsIDQgKiBzLzUpCiAgICB0aWxlMy5jaXJjbGUocywgcywgNCAqIHMvNSkKICAgIHRpbGUzLmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTMuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlMy5jaXJjbGUocywgcywgMiAqIHMvNSkKICAgIGltYWdlKHRpbGUzLCAyICogKGN3ICsgMTApLCAwKQogICAgdmFyIHRpbGU0ID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGU0LnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlNC5zdHJva2VXZWlnaHQoMikKICAgIHRpbGU0LmJhY2tncm91bmQoY29sb3JzWzBdKQogICAgdGlsZTQuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlNC5jaXJjbGUocy8yLCAwLCAzICogcy81KQogICAgdGlsZTQuY2lyY2xlKHMsIHMvMiwgMyAqIHMvNSkKICAgIHRpbGU0LmNpcmNsZShzLzIsIHMsIDMgKiBzLzUpCiAgICB0aWxlNC5jaXJjbGUoMCwgcy8yLCAzICogcy81KQogICAgdGlsZTQuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlNC5jaXJjbGUocy8yLCAwLCBzLzUpCiAgICB0aWxlNC5jaXJjbGUocywgcy8yLCBzLzUpCiAgICB0aWxlNC5jaXJjbGUocy8yLCBzLCBzLzUpCiAgICB0aWxlNC5jaXJjbGUoMCwgcy8yLCBzLzUpCiAgICBpbWFnZSh0aWxlNCwgMyAqIChjdyArIDEwKSwgMCkKICAgIHZhciB0aWxlNSA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlNS5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTUuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlNS5iYWNrZ3JvdW5kKGNvbG9yc1swXSkKICAgIHRpbGU1LmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTUuY2lyY2xlKDMgKiBzLzEwLCAwLCBzLzUpCiAgICB0aWxlNS5jaXJjbGUoMyAqIHMvMTAsIHMsIHMvNSkKICAgIHRpbGU1LmNpcmNsZSg3ICogcy8xMCwgMCwgcy81KQogICAgdGlsZTUuY2lyY2xlKDcgKiBzLzEwLCBzLCBzLzUpCiAgICB0aWxlNS5yZWN0KC0xLCBzLzUsIHMgKyAyLCBzLzUpCiAgICB0aWxlNS5yZWN0KC0xLCAzICogcy81LCBzICsgMiwgcy81KQogICAgaW1hZ2UodGlsZTUsIDQgKiAoY3cgKyAxMCksIDApCiAgICB2YXIgdGlsZTYgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTYuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGU2LnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTYuYmFja2dyb3VuZChjb2xvcnNbMl0pCiAgICB0aWxlNi5maWxsKGNvbG9yc1swXSkKICAgIHRpbGU2LmNpcmNsZSgwLCAwLCAyICogcy81KQogICAgdGlsZTYuY2lyY2xlKHMvMiwgMCwgcy81KQogICAgdGlsZTYuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlNi5jaXJjbGUoMCwgcy8yLCBzLzUpCiAgICB0aWxlNi5jaXJjbGUocy8yLCBzLzIsIDIgKiBzLzUpCiAgICB0aWxlNi5jaXJjbGUocywgcy8yLCBzLzUpCiAgICB0aWxlNi5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGU2LmNpcmNsZShzLzIsIHMsIHMvNSkKICAgIHRpbGU2LmNpcmNsZShzLCBzLCAyICogcy81KQogICAgaW1hZ2UodGlsZTYsIDUgKiAoY3cgKyAxMCksIDApCiAgICB2YXIgdGlsZTcgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTcuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGU3LnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTcuYmFja2dyb3VuZChjb2xvcnNbMF0pCiAgICB0aWxlNy5maWxsKGNvbG9yc1syXSkKICAgIHRpbGU3LmNpcmNsZSgzICogcy8xMCwgcywgcy81KQogICAgdGlsZTcuY2lyY2xlKDcgKiBzLzEwLCBzLCBzLzUpCiAgICB0aWxlNy5yZWN0KC0xLCAzICogcy81LCBzICsgMiwgcy81KQogICAgdGlsZTcuY2lyY2xlKDAsIDAsIDQgKiBzLzUpCiAgICB0aWxlNy5jaXJjbGUocywgMCwgNCAqIHMvNSkKICAgIHRpbGU3LmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTcuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlNy5jaXJjbGUocywgMCwgMiAqIHMvNSkKICAgIGltYWdlKHRpbGU3LCA2ICogKGN3ICsgMTApLCAwKQogICAgdmFyIHRpbGU4ID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGU4LnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlOC5zdHJva2VXZWlnaHQoMikKICAgIHRpbGU4LmJhY2tncm91bmQoY29sb3JzWzJdKQogICAgdGlsZTguZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlOC5jaXJjbGUoMCwgMCwgMiAqIHMvNSkKICAgIHRpbGU4LmNpcmNsZShzLzIsIDAsIHMvNSkKICAgIHRpbGU4LmNpcmNsZShzLCAwLCAyICogcy81KQogICAgdGlsZTguY2lyY2xlKDAsIHMsIDIgKiBzLzUpCiAgICB0aWxlOC5jaXJjbGUocy8yLCBzLCBzLzUpCiAgICB0aWxlOC5jaXJjbGUocywgcywgMiAqIHMvNSkKICAgIHRpbGU4LnJlY3QoLTEsIDIgKiBzLzUsIHMgKyAyLCBzLzUpCiAgICByZXR1cm4gaW1hZ2UodGlsZTgsIDcgKiAoY3cgKyAxMCksIDApCn0K"><\/script> </body>\n</html>',class:"border-none width-530 height-80"}),Object(s.b)("h2",{id:"1-set-up-a-grid"},"1. Set up a grid"),Object(s.b)("p",null,"In the following, we will use the ",Object(s.b)("inlineCode",{parentName:"p"},"basic_rules")," setting which switches\noff the R support. We do that because only one function from R is needed\n(the ",Object(s.b)("inlineCode",{parentName:"p"},"seq")," function). In this case, the prefix ",Object(s.b)("inlineCode",{parentName:"p"},"R::")," is used to call the\nfunction without loading the entire library."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sketch"},'#! config(debug = F, rules = basic_rules(), deparsers = default_2_deparsers())\n#! load_library("p5")\n\ncw <- 600\nch <- 600\n\nsetup <- function() {\n    createCanvas(cw, ch)\n    noLoop()\n    imageMode(CENTER)   # CENTER is a variable from p5.js\n    rectMode(CENTER)\n}\n\ndraw <- function() {\n    s <- cw / 10   # 10 tiles for each direction\n\n    # Make a placeholder tile\n    tile1 <- createGraphics(s, s)\n    tile1$stroke("white")\n    tile1$fill("brown")\n    tile1$circle(s/2, s/2, s/2)\n\n    # Lay tiles on a grid\n    for (x in R::seq(s/2, cw, s)) {\n        for (y in R::seq(s/2, ch, s)) {\n            image(tile1, x, y)\n        }\n    }\n}\n')),Object(s.b)("p",null,"Notes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"CENTER")," is a variable from the p5.js library."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"imageMode")," and ",Object(s.b)("inlineCode",{parentName:"li"},"rectMode")," adjust the coordinates setting such that\nimages and rectangles are drawn centering at the coordinates\nprovided (rather than from the top-left corner)."),Object(s.b)("li",{parentName:"ul"},"Further detail of the commands can be found at the ",Object(s.b)("a",{parentName:"li",href:"https://p5js.org/reference/"},"p5 reference\npage"),".")),Object(s.b)("h4",{id:"result"},"Result"),Object(s.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIGN3ID0gNTAwCnZhciBjaCA9IDUwMAp2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHsKICAgIGNyZWF0ZUNhbnZhcyhjdywgY2gpCiAgICBub0xvb3AoKQogICAgaW1hZ2VNb2RlKENFTlRFUikKICAgIHJldHVybiByZWN0TW9kZShDRU5URVIpCn0KdmFyIGRyYXcgPSBmdW5jdGlvbigpIHsKICAgIHZhciBzID0gY3cvMTAKICAgIHZhciB0aWxlMSA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlMS5zdHJva2UoIndoaXRlIikKICAgIHRpbGUxLmZpbGwoImJyb3duIikKICAgIHRpbGUxLmNpcmNsZShzLzIsIHMvMiwgcy8yKQogICAgZm9yIChsZXQgeCBvZiBSLnNlcShzLzIsIGN3LCBzKSkgewogICAgICAgIGZvciAobGV0IHkgb2YgUi5zZXEocy8yLCBjaCwgcykpIHsKICAgICAgICAgICAgaW1hZ2UodGlsZTEsIHgsIHkpCiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIG51bGwKfQo="><\/script> </body>\n</html>',class:"border-none width-530 height-530"}),Object(s.b)("h2",{id:"2-add-tiles"},"2. Add tiles"),Object(s.b)("p",null,"Once a grid is created, what\u2019s left is to add more tiles and lay them on\nthe grid. The tiles are created using the two primitive functions,\n",Object(s.b)("inlineCode",{parentName:"p"},"circle")," and ",Object(s.b)("inlineCode",{parentName:"p"},"rect")," (and coloured using ",Object(s.b)("inlineCode",{parentName:"p"},"background"),", ",Object(s.b)("inlineCode",{parentName:"p"},"fill")," and\n",Object(s.b)("inlineCode",{parentName:"p"},"stroke"),"). For example, for the first tile, two circles are placed at\neach of the four corners, and a circle is placed in the middle. The\nother tiles can be created in a similar way. Here is the full listing of\nthe code."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sketch",metastring:"{16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,146,149,150,151,152,153,154,155,156,157}","{16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,146,149,150,151,152,153,154,155,156,157}":!0},'#! config(debug = F, rules = basic_rules(), deparsers = default_2_deparsers())\n#! load_library("p5")\n\ncolors <- Array("#fdd35b", "#333333", "#00b2b4")\ncw <- 500\nch <- 500\n\nsetup <- function() {\n    createCanvas(cw, ch)\n    noLoop()\n    imageMode(CENTER)  # CENTER is a variable from p5.js\n    rectMode(CENTER)\n}\n\ndraw <- function() {\n    s <- cw / random(Array(8, 10, 12, 15))  # random number of tiles for each direction\n\n    # ====== Make tiles ===============\n    # Tile 1 ----\n    tile1 <- createGraphics(s, s)\n    tile1$stroke(colors[1])\n    tile1$strokeWeight(2)\n    tile1$background(colors[0])\n    tile1$fill(colors[2])\n    tile1$circle(0, 0, 4 * s / 5)\n    tile1$circle(s, 0, 4 * s / 5)\n    tile1$circle(0, s, 4 * s / 5)\n    tile1$circle(s, s, 4 * s / 5)\n    tile1$circle(s / 2, s / 2, 2 * s / 5)\n    tile1$fill(colors[0])\n    tile1$circle(0, 0, 2 * s / 5)\n    tile1$circle(s, 0, 2 * s / 5)\n    tile1$circle(0, s, 2 * s / 5)\n    tile1$circle(s, s, 2 * s / 5)\n\n    # Tile 2 ----\n    tile2 <- createGraphics(s, s)\n    tile2$stroke(colors[1])\n    tile2$strokeWeight(2)\n    tile2$background(colors[2])\n    tile2$fill(colors[0])\n    tile2$circle(0, 0, 6 * s / 5)\n    tile2$circle(s, 0, 2 * s / 5)\n    tile2$circle(0, s, 2 * s / 5)\n    tile2$circle(s, s, 6 * s / 5)\n    tile2$fill(colors[2])\n    tile2$circle(s, s, 4 * s / 5)\n    tile2$circle(0, 0, 4 * s / 5)\n    tile2$fill(colors[0])\n    tile2$circle(0, 0, 2 * s / 5)\n    tile2$circle(s, s, 2 * s / 5)\n\n    # Tile 3 ----\n    tile3 <- createGraphics(s, s)\n    tile3$stroke(colors[1])\n    tile3$strokeWeight(2)\n    tile3$background(colors[0])\n    tile3$fill(colors[2])\n    tile3$circle(0, 0, 8 * s / 5)\n    tile3$circle(s, 3 * s / 10, s / 5)\n    tile3$circle(3 * s / 10, s, s / 5)\n    tile3$fill(colors[0])\n    tile3$circle(0, 0, 6 * s / 5)\n    tile3$fill(colors[2])\n    tile3$circle(0, 0, 4 * s / 5)\n    tile3$circle(s, s, 4 * s / 5)\n    tile3$fill(colors[0])\n    tile3$circle(0, 0, 2 * s / 5)\n    tile3$circle(s, s, 2 * s / 5)\n\n    # Tile 4 ----\n    tile4 <- createGraphics(s, s)\n    tile4$stroke(colors[1])\n    tile4$strokeWeight(2)\n    tile4$background(colors[0])\n    tile4$fill(colors[2])\n    tile4$circle(s / 2, 0, 3 * s / 5)\n    tile4$circle(s, s / 2, 3 * s / 5)\n    tile4$circle(s / 2, s, 3 * s / 5)\n    tile4$circle(0, s / 2, 3 * s / 5)\n    tile4$fill(colors[0])\n    tile4$circle(s / 2, 0, s / 5)\n    tile4$circle(s, s / 2, s / 5)\n    tile4$circle(s / 2, s, s / 5)\n    tile4$circle(0, s / 2, s / 5)\n\n    # Tile 5 ----\n    tile5 <- createGraphics(s, s)\n    tile5$stroke(colors[1])\n    tile5$strokeWeight(2)\n    tile5$background(colors[0])\n    tile5$fill(colors[2])\n    tile5$circle(3 * s / 10, 0, s / 5)\n    tile5$circle(3 * s / 10, s, s / 5)\n    tile5$circle(7 * s / 10, 0, s / 5)\n    tile5$circle(7 * s / 10, s, s / 5)\n    tile5$rect(-1, s / 5, s + 2, s / 5)\n    tile5$rect(-1, 3 * s / 5, s + 2, s / 5)\n\n    # Tile 6 ----\n    tile6 <- createGraphics(s, s)\n    tile6$stroke(colors[1])\n    tile6$strokeWeight(2)\n    tile6$background(colors[2])\n    tile6$fill(colors[0])\n    tile6$circle(0, 0, 2 * s / 5)\n    tile6$circle(s / 2, 0, s / 5)\n    tile6$circle(s, 0, 2 * s / 5)\n    tile6$circle(0, s / 2, s / 5)\n    tile6$circle(s / 2, s / 2, 2 * s / 5)\n    tile6$circle(s, s / 2, s / 5)\n    tile6$circle(0, s, 2 * s / 5)\n    tile6$circle(s / 2, s, s / 5)\n    tile6$circle(s, s, 2 * s / 5)\n\n    # Tile 7 ----\n    tile7 <- createGraphics(s, s)\n    tile7$stroke(colors[1])\n    tile7$strokeWeight(2)\n    tile7$background(colors[0])\n    tile7$fill(colors[2])\n    tile7$circle(3 * s / 10, s, s / 5)\n    tile7$circle(7 * s / 10, s, s / 5)\n    tile7$rect(-1, 3 * s / 5, s + 2, s / 5)\n    tile7$circle(0, 0, 4 * s / 5)\n    tile7$circle(s, 0, 4 * s / 5)\n    tile7$fill(colors[0])\n    tile7$circle(0, 0, 2 * s / 5)\n    tile7$circle(s, 0, 2 * s / 5)\n\n    # Tile 8 ----\n    tile8 <- createGraphics(s, s)\n    tile8$stroke(colors[1])\n    tile8$strokeWeight(2)\n    tile8$background(colors[2])\n    tile8$fill(colors[0])\n    tile8$circle(0, 0, 2 * s / 5)\n    tile8$circle(s / 2, 0, s / 5)\n    tile8$circle(s, 0, 2 * s / 5)\n    tile8$circle(0, s, 2 * s / 5)\n    tile8$circle(s / 2, s, s / 5)\n    tile8$circle(s, s, 2 * s / 5)\n    tile8$rect(-1, 2 * s / 5, s + 2, s / 5)\n\n    # ====== Lay tiles on a grid ======\n    tiles <- Array(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8)\n    for (x in R::seq(s/2, cw, s)) {\n        for (y in R::seq(s/2, ch, s)) {\n            push()\n            translate(x, y)\n            \n            # Random orientation: HALF_PI and PI are variables from p5.js\n            rotate(random(Array(HALF_PI, PI, 3 * HALF_PI)))  \n            \n            # Randomly draw a tile\n            image(random(tiles), 0, 0)\n            pop()\n        }\n    }\n    NULL\n}\n')),Object(s.b)("p",null,"Notes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"random")," function samples an element from an array of objects."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"HALF_PI")," and ",Object(s.b)("inlineCode",{parentName:"li"},"PI")," are variables from p5.js"),Object(s.b)("li",{parentName:"ul"},"We have converted the call ",Object(s.b)("inlineCode",{parentName:"li"},"image(..., x, y)")," into two calls -\n",Object(s.b)("inlineCode",{parentName:"li"},"translate(x, y)")," followed by ",Object(s.b)("inlineCode",{parentName:"li"},"image(...,  0, 0)")," - to include the\nrandom rotation. The extra work is needed because styling commands\nfrom p5.js affect all subsequent operations, so they must follow a\nstrict order. For the same reason, the functions ",Object(s.b)("inlineCode",{parentName:"li"},"push")," and ",Object(s.b)("inlineCode",{parentName:"li"},"pop"),"\nare used to add a scope to the styling commands."),Object(s.b)("li",{parentName:"ul"},"(If you wonder why the commands for drawing the tiles are not\nabstracted out, it is because these commands must live inside the\n",Object(s.b)("inlineCode",{parentName:"li"},"draw")," and ",Object(s.b)("inlineCode",{parentName:"li"},"setup")," functions to work.)")),Object(s.b)("h4",{id:"result-1"},"Result"),Object(s.b)("iframe",{srcdoc:'<!DOCTYPE html>\n<html> <head> <meta charset="utf-8"/> <script src="https://cdn.jsdelivr.net/gh/kcf-jackson/sketch-js/bin/dist/browser-R_core.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"><\/script> </head> <body> <script src="data:application/javascript;base64,dmFyIGNvbG9ycyA9IEFycmF5KCIjZmRkMzViIiwgIiMzMzMzMzMiLCAiIzAwYjJiNCIpCnZhciBjdyA9IDUwMAp2YXIgY2ggPSA1MDAKdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7CiAgICBjcmVhdGVDYW52YXMoY3csIGNoKQogICAgbm9Mb29wKCkKICAgIGltYWdlTW9kZShDRU5URVIpCiAgICByZXR1cm4gcmVjdE1vZGUoQ0VOVEVSKQp9CnZhciBkcmF3ID0gZnVuY3Rpb24oKSB7CiAgICB2YXIgcyA9IGN3L3JhbmRvbShBcnJheSg4LCAxMCwgMTIsIDE1KSkKICAgIHZhciB0aWxlMSA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlMS5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTEuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlMS5iYWNrZ3JvdW5kKGNvbG9yc1swXSkKICAgIHRpbGUxLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTEuY2lyY2xlKDAsIDAsIDQgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUocywgMCwgNCAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZSgwLCBzLCA0ICogcy81KQogICAgdGlsZTEuY2lyY2xlKHMsIHMsIDQgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUocy8yLCBzLzIsIDIgKiBzLzUpCiAgICB0aWxlMS5maWxsKGNvbG9yc1swXSkKICAgIHRpbGUxLmNpcmNsZSgwLCAwLCAyICogcy81KQogICAgdGlsZTEuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlMS5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGUxLmNpcmNsZShzLCBzLCAyICogcy81KQogICAgdmFyIHRpbGUyID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGUyLnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlMi5zdHJva2VXZWlnaHQoMikKICAgIHRpbGUyLmJhY2tncm91bmQoY29sb3JzWzJdKQogICAgdGlsZTIuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlMi5jaXJjbGUoMCwgMCwgNiAqIHMvNSkKICAgIHRpbGUyLmNpcmNsZShzLCAwLCAyICogcy81KQogICAgdGlsZTIuY2lyY2xlKDAsIHMsIDIgKiBzLzUpCiAgICB0aWxlMi5jaXJjbGUocywgcywgNiAqIHMvNSkKICAgIHRpbGUyLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTIuY2lyY2xlKHMsIHMsIDQgKiBzLzUpCiAgICB0aWxlMi5jaXJjbGUoMCwgMCwgNCAqIHMvNSkKICAgIHRpbGUyLmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTIuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlMi5jaXJjbGUocywgcywgMiAqIHMvNSkKICAgIHZhciB0aWxlMyA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlMy5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTMuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlMy5iYWNrZ3JvdW5kKGNvbG9yc1swXSkKICAgIHRpbGUzLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTMuY2lyY2xlKDAsIDAsIDggKiBzLzUpCiAgICB0aWxlMy5jaXJjbGUocywgMyAqIHMvMTAsIHMvNSkKICAgIHRpbGUzLmNpcmNsZSgzICogcy8xMCwgcywgcy81KQogICAgdGlsZTMuZmlsbChjb2xvcnNbMF0pCiAgICB0aWxlMy5jaXJjbGUoMCwgMCwgNiAqIHMvNSkKICAgIHRpbGUzLmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTMuY2lyY2xlKDAsIDAsIDQgKiBzLzUpCiAgICB0aWxlMy5jaXJjbGUocywgcywgNCAqIHMvNSkKICAgIHRpbGUzLmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTMuY2lyY2xlKDAsIDAsIDIgKiBzLzUpCiAgICB0aWxlMy5jaXJjbGUocywgcywgMiAqIHMvNSkKICAgIHZhciB0aWxlNCA9IGNyZWF0ZUdyYXBoaWNzKHMsIHMpCiAgICB0aWxlNC5zdHJva2UoY29sb3JzWzFdKQogICAgdGlsZTQuc3Ryb2tlV2VpZ2h0KDIpCiAgICB0aWxlNC5iYWNrZ3JvdW5kKGNvbG9yc1swXSkKICAgIHRpbGU0LmZpbGwoY29sb3JzWzJdKQogICAgdGlsZTQuY2lyY2xlKHMvMiwgMCwgMyAqIHMvNSkKICAgIHRpbGU0LmNpcmNsZShzLCBzLzIsIDMgKiBzLzUpCiAgICB0aWxlNC5jaXJjbGUocy8yLCBzLCAzICogcy81KQogICAgdGlsZTQuY2lyY2xlKDAsIHMvMiwgMyAqIHMvNSkKICAgIHRpbGU0LmZpbGwoY29sb3JzWzBdKQogICAgdGlsZTQuY2lyY2xlKHMvMiwgMCwgcy81KQogICAgdGlsZTQuY2lyY2xlKHMsIHMvMiwgcy81KQogICAgdGlsZTQuY2lyY2xlKHMvMiwgcywgcy81KQogICAgdGlsZTQuY2lyY2xlKDAsIHMvMiwgcy81KQogICAgdmFyIHRpbGU1ID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGU1LnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlNS5zdHJva2VXZWlnaHQoMikKICAgIHRpbGU1LmJhY2tncm91bmQoY29sb3JzWzBdKQogICAgdGlsZTUuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlNS5jaXJjbGUoMyAqIHMvMTAsIDAsIHMvNSkKICAgIHRpbGU1LmNpcmNsZSgzICogcy8xMCwgcywgcy81KQogICAgdGlsZTUuY2lyY2xlKDcgKiBzLzEwLCAwLCBzLzUpCiAgICB0aWxlNS5jaXJjbGUoNyAqIHMvMTAsIHMsIHMvNSkKICAgIHRpbGU1LnJlY3QoLTEsIHMvNSwgcyArIDIsIHMvNSkKICAgIHRpbGU1LnJlY3QoLTEsIDMgKiBzLzUsIHMgKyAyLCBzLzUpCiAgICB2YXIgdGlsZTYgPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTYuc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGU2LnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTYuYmFja2dyb3VuZChjb2xvcnNbMl0pCiAgICB0aWxlNi5maWxsKGNvbG9yc1swXSkKICAgIHRpbGU2LmNpcmNsZSgwLCAwLCAyICogcy81KQogICAgdGlsZTYuY2lyY2xlKHMvMiwgMCwgcy81KQogICAgdGlsZTYuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlNi5jaXJjbGUoMCwgcy8yLCBzLzUpCiAgICB0aWxlNi5jaXJjbGUocy8yLCBzLzIsIDIgKiBzLzUpCiAgICB0aWxlNi5jaXJjbGUocywgcy8yLCBzLzUpCiAgICB0aWxlNi5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGU2LmNpcmNsZShzLzIsIHMsIHMvNSkKICAgIHRpbGU2LmNpcmNsZShzLCBzLCAyICogcy81KQogICAgdmFyIHRpbGU3ID0gY3JlYXRlR3JhcGhpY3MocywgcykKICAgIHRpbGU3LnN0cm9rZShjb2xvcnNbMV0pCiAgICB0aWxlNy5zdHJva2VXZWlnaHQoMikKICAgIHRpbGU3LmJhY2tncm91bmQoY29sb3JzWzBdKQogICAgdGlsZTcuZmlsbChjb2xvcnNbMl0pCiAgICB0aWxlNy5jaXJjbGUoMyAqIHMvMTAsIHMsIHMvNSkKICAgIHRpbGU3LmNpcmNsZSg3ICogcy8xMCwgcywgcy81KQogICAgdGlsZTcucmVjdCgtMSwgMyAqIHMvNSwgcyArIDIsIHMvNSkKICAgIHRpbGU3LmNpcmNsZSgwLCAwLCA0ICogcy81KQogICAgdGlsZTcuY2lyY2xlKHMsIDAsIDQgKiBzLzUpCiAgICB0aWxlNy5maWxsKGNvbG9yc1swXSkKICAgIHRpbGU3LmNpcmNsZSgwLCAwLCAyICogcy81KQogICAgdGlsZTcuY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB2YXIgdGlsZTggPSBjcmVhdGVHcmFwaGljcyhzLCBzKQogICAgdGlsZTguc3Ryb2tlKGNvbG9yc1sxXSkKICAgIHRpbGU4LnN0cm9rZVdlaWdodCgyKQogICAgdGlsZTguYmFja2dyb3VuZChjb2xvcnNbMl0pCiAgICB0aWxlOC5maWxsKGNvbG9yc1swXSkKICAgIHRpbGU4LmNpcmNsZSgwLCAwLCAyICogcy81KQogICAgdGlsZTguY2lyY2xlKHMvMiwgMCwgcy81KQogICAgdGlsZTguY2lyY2xlKHMsIDAsIDIgKiBzLzUpCiAgICB0aWxlOC5jaXJjbGUoMCwgcywgMiAqIHMvNSkKICAgIHRpbGU4LmNpcmNsZShzLzIsIHMsIHMvNSkKICAgIHRpbGU4LmNpcmNsZShzLCBzLCAyICogcy81KQogICAgdGlsZTgucmVjdCgtMSwgMiAqIHMvNSwgcyArIDIsIHMvNSkKICAgIHZhciB0aWxlcyA9IEFycmF5KHRpbGUxLCB0aWxlMiwgdGlsZTMsIHRpbGU0LCB0aWxlNSwgdGlsZTYsIHRpbGU3LCB0aWxlOCkKICAgIGZvciAobGV0IHggb2YgUi5zZXEocy8yLCBjdywgcykpIHsKICAgICAgICBmb3IgKGxldCB5IG9mIFIuc2VxKHMvMiwgY2gsIHMpKSB7CiAgICAgICAgICAgIHB1c2goKQogICAgICAgICAgICB0cmFuc2xhdGUoeCwgeSkKICAgICAgICAgICAgcm90YXRlKHJhbmRvbShBcnJheShIQUxGX1BJLCBQSSwgMyAqIEhBTEZfUEkpKSkKICAgICAgICAgICAgaW1hZ2UocmFuZG9tKHRpbGVzKSwgMCwgMCkKICAgICAgICAgICAgcG9wKCkKICAgICAgICB9CiAgICB9CiAgICByZXR1cm4gbnVsbAp9Cg=="><\/script> </body>\n</html>',class:"border-none width-530 height-530"}),Object(s.b)("h2",{id:"credits--reference"},"Credits / Reference"),Object(s.b)("p",null,"All credits go to ",Object(s.b)("a",{parentName:"p",href:"https://openprocessing.org/user/184331?view=sketches"},"Roni\nKaufman"),". The\noriginal visualisation is hosted\n",Object(s.b)("a",{parentName:"p",href:"https://openprocessing.org/sketch/1173537"},"here"),"."),Object(s.b)("link",{href:"../css/docs-styles.css",rel:"stylesheet"}))}n.isMDXComponent=!0},170:function(g,I,C){"use strict";C.d(I,"a",(function(){return a})),C.d(I,"b",(function(){return r}));var l=C(0),c=C.n(l);function s(g,I,C){return I in g?Object.defineProperty(g,I,{value:C,enumerable:!0,configurable:!0,writable:!0}):g[I]=C,g}function e(g,I){var C=Object.keys(g);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(g);I&&(l=l.filter((function(I){return Object.getOwnPropertyDescriptor(g,I).enumerable}))),C.push.apply(C,l)}return C}function i(g){for(var I=1;I<arguments.length;I++){var C=null!=arguments[I]?arguments[I]:{};I%2?e(Object(C),!0).forEach((function(I){s(g,I,C[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(C)):e(Object(C)).forEach((function(I){Object.defineProperty(g,I,Object.getOwnPropertyDescriptor(C,I))}))}return g}function o(g,I){if(null==g)return{};var C,l,c=function(g,I){if(null==g)return{};var C,l,c={},s=Object.keys(g);for(l=0;l<s.length;l++)C=s[l],I.indexOf(C)>=0||(c[C]=g[C]);return c}(g,I);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(g);for(l=0;l<s.length;l++)C=s[l],I.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(g,C)&&(c[C]=g[C])}return c}var t=c.a.createContext({}),n=function(g){var I=c.a.useContext(t),C=I;return g&&(C="function"==typeof g?g(I):i(i({},I),g)),C},a=function(g){var I=n(g.components);return c.a.createElement(t.Provider,{value:I},g.children)},A={inlineCode:"code",wrapper:function(g){var I=g.children;return c.a.createElement(c.a.Fragment,{},I)}},b=c.a.forwardRef((function(g,I){var C=g.components,l=g.mdxType,s=g.originalType,e=g.parentName,t=o(g,["components","mdxType","originalType","parentName"]),a=n(C),b=l,r=a["".concat(e,".").concat(b)]||a[b]||A[b]||s;return C?c.a.createElement(r,i(i({ref:I},t),{},{components:C})):c.a.createElement(r,i({ref:I},t))}));function r(g,I){var C=arguments,l=I&&I.mdxType;if("string"==typeof g||l){var s=C.length,e=new Array(s);e[0]=b;var i={};for(var o in I)hasOwnProperty.call(I,o)&&(i[o]=I[o]);i.originalType=g,i.mdxType="string"==typeof g?g:l,e[1]=i;for(var t=2;t<s;t++)e[t]=C[t];return c.a.createElement.apply(null,e)}return c.a.createElement.apply(null,C)}b.displayName="MDXCreateElement"}}]);