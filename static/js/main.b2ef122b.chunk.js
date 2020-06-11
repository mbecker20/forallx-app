(this["webpackJsonpforallx-app"]=this["webpackJsonpforallx-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(23),a(5)),i={grey:"#282c34",background:"white",text:"black",secondary:"#281c34",tertiary:"#182c54"},u="80px",p="280px",s="270px",m=Object(o.a)({TopBar:{backgroundColor:i.grey,width:"100vw",height:u,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"calc(20px + 2vmin)",color:"white",position:"absolute",top:"0px",left:"0px",userSelect:"none",zIndex:"100"},SideBar:{backgroundColor:i.background,borderStyle:"none solid",borderColor:"black",height:"calc(100vh - 100px)",display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"center",justifyContent:"flex-start",padding:"0px",fontSize:"calc(10px + 2vmin)",color:"white",textOrientation:"upright",position:"absolute",top:"80px",left:"0px",userSelect:"none",zIndex:"99",boxSizing:"borderBox",width:p},Router:{backgroundColor:i.tertiary,height:"calc(100vh - ".concat(u,")"),display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white",position:"absolute",top:u,overflow:"hidden"}}),d=a(7),h=(Object(o.a)({Button:{backgroundColor:i.secondary,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","&:hover":{cursor:"pointer"},userSelect:"none",margin:"10px"}}),a(4));Object(o.a)({Bounder:{backgroundColor:i.grey,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",userSelect:"none",margin:"10px","&:hover":{cursor:"pointer"}},Switch:{backgroundColor:i.secondary,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",justifySelf:"flex-end",borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",userSelect:"none",margin:"10px"}});var x=Object(o.a)({Bounder:{backgroundColor:i.background,color:i.text,display:"flex",alignItems:"center",justifyContent:"flex-start",borderRadius:"0px",userSelect:"none",overflow:"hidden",width:s,height:"90%",flexGrow:"3",flexShrink:"3",flexDirection:"column"},CVContainer:{display:"flex",alignItems:"flex-end",justifyContent:"flex-start",borderRadius:"0px",userSelect:"none",overflowY:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:8},"&::-webkit-scrollbar-track":{},"&::-webkit-scrollbar-thumb":{backgroundColor:i.text,borderRadius:5},width:"calc(".concat(s," - 20px)"),height:"50vmin",flexGrow:"3",flexShrink:"3",flexDirection:"column",padding:"10px"},CVInnerContainer:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",borderRadius:"0px",userSelect:"none",width:"calc(".concat(s," - 20px)"),flexDirection:"column",marginLeft:"10px"},CVHeader:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0px",position:"relative",bottom:"2px",userSelect:"none",width:"calc(".concat(s," - 10px)"),flexDirection:"column",fontSize:"calc(20px + 2vmin)",paddingTop:"5px",paddingBottom:"5px",borderStyle:"none none solid none"},Chapter:{padding:"5px",display:"flex",flexDirection:"column",justifyContent:"center",width:"calc(".concat(s," - 20px)")},ChapterName:{padding:"5px",fontSize:"calc(10px + 2vmin)","&:hover":{cursor:"pointer"}},SubChapterBounder:{padding:"0px",margin:"0px",display:"flex",flexDirection:"column",flexGrow:"1",flexShrink:"0",flexBasis:"0",alignItems:"flex-start",position:"relative",left:"20px"},SubChapter:{flexGrow:"1",flexShrink:"1",flexBasis:"0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(5px + 2vmin)","&:hover":{cursor:"pointer"}}});var b=function(e){var t=e.chapterName,a=e.children,l=Object(n.useState)(!1),c=Object(d.a)(l,2),o=c[0],u=c[1],p=x(i),s=n.Children.map(a,(function(e,t){return Object(n.cloneElement)(e,{isOpen:o,key:t})}));return r.a.createElement("div",{className:p.Chapter},r.a.createElement("div",{className:p.ChapterName,onClick:function(){u(!o)}},t),r.a.createElement("div",{className:p.SubChapterBounder},s))};var f=function(e){var t=e.isOpen,a=e.children,n=a.length,l=x(i),c=Object(h.b)({height:t?"".concat(4*Math.floor(n/10),"vmin"):"0vmin",transform:t?"scaleY(1)":"scaleY(0)",opacity:t?1:0,padding:t?"5px":"0px"});return r.a.createElement(h.a.div,{className:l.SubChapter,style:c},a)};var C=function(){var e=x();return r.a.createElement("div",{className:e.CVHeader},"Chapters")};var E=function(){var e=x();return r.a.createElement("div",{className:e.Bounder},r.a.createElement(C,null),r.a.createElement("div",{className:e.CVContainer},r.a.createElement("div",{className:e.CVInnerContainer},r.a.createElement(b,{chapterName:"1. What is logic?"},r.a.createElement(f,null,"Introduction"),r.a.createElement(f,null,"1.1 Arguments"),r.a.createElement(f,null,"1.2 Sentences and propositions"),r.a.createElement(f,null,"1.3 Two ways that arguments can go wrong"),r.a.createElement(f,null,"1.4 Validity"),r.a.createElement(f,null,"1.5 Impossibility"),r.a.createElement(f,null,"1.6 Other logical notions"),r.a.createElement(f,null,"1.7 Formal languages"),r.a.createElement(f,null,"Practice Exercises")),r.a.createElement(b,{chapterName:"2. Sentenial logic"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"3. Truth tables"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"4. Entailment and Models for SL"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"5. SL Trees"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"6. Soundness and Completeness for SL Trees"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"7. Natural Deduction Proofs in SL"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"8. Quantified logic"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"9. A formal semantics for QL"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"10. QL Trees"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"11. Soundness and Completeness for QL Trees"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"12. Identity"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"13. Natural Deduction Proofs in QL"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")),r.a.createElement(b,{chapterName:"reference"},r.a.createElement(f,null,"SubChapter A"),r.a.createElement(f,null,"SubChapter B"),r.a.createElement(f,null,"SubChapter C")))))};var S=function(){var e=m();return r.a.createElement("div",{className:e.SideBar},r.a.createElement(E,null))};var g=function(e){var t=e.text,a=m();return r.a.createElement("div",{className:a.TopBar},t)},v=a(17);var y=function(){var e=m();return r.a.createElement("div",null,r.a.createElement(g,{text:"forall x"}),r.a.createElement(S,null),r.a.createElement(v.a,{className:e.Router}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b2ef122b.chunk.js.map