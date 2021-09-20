(this["webpackJsonpreact-three-fiber-practice"]=this["webpackJsonpreact-three-fiber-practice"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(35),a=n.n(i),o=(n(44),n(45),n(12)),s=n(51),j=n(36),b=n(6);Object(o.b)({OrbitControls:j.a});var l=function(){var e=Object(o.e)(),t=e.camera,n=e.gl;return Object(b.jsx)("orbitControls",{attach:"orbitControls",args:[t,n.domElement]})},h=n(0),d=function(e){var t=Object(o.d)(h.TextureLoader,"/react-three-fiber-practice/riverbank.jpeg"),n=Object(o.e)().gl,r=Object(c.useMemo)((function(){return new h.WebGLCubeRenderTarget(t.image.height).fromEquirectangularTexture(n,t)}),[]);return Object(b.jsx)("primitive",{attach:"background",object:r})},u=n(7),O=n(10),f=function(e){var t=Object(s.c)((function(){return Object(u.a)({args:[20,1,10]},e)})),n=Object(O.a)(t,2),c=n[0];n[1];return Object(b.jsxs)("mesh",Object(u.a)(Object(u.a)({ref:c},e),{},{receiveShadow:!0,children:[Object(b.jsx)("boxBufferGeometry",{args:[200,1,200]}),Object(b.jsx)("meshPhysicalMaterial",{transparent:!0,opacity:.2})]}))},p={activeMesh:{},cameraPos:new h.Vector3(9,2,4),target:new h.Vector3(4,0,0),shouldUpdate:!0},g=function(e){var t=function(e){p.activeMesh&&(p.activeMesh.material.color=new h.Color(e.target.style.background))};return Object(b.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px"},children:["\ud83c\udde8",Object(b.jsx)("div",{onClick:t,style:{background:"blue",height:50,width:50}}),Object(b.jsx)("div",{onClick:t,style:{background:"green",height:50,width:50}}),Object(b.jsx)("div",{onClick:t,style:{background:"coral",height:50,width:50}})]})},m=n(18),x=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,c=e.offset,r=void 0===c?[0,0,0]:c,i=e.dims,a=void 0===i?[1,1,1]:i,o=e.visible,j=void 0!==o&&o,l=e.children,h=Object(s.c)((function(){return{mass:1,args:a,position:n}})),d=Object(O.a)(h,2),u=d[0],f=d[1];return Object(b.jsxs)("group",{ref:u,api:f,children:[Object(b.jsxs)("mesh",{scale:a,visible:j,children:[Object(b.jsx)("boxBufferGeometry",{}),Object(b.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(b.jsx)("group",{position:r,children:l})]})},v=n(39),w=function(e){var t,n=Object(o.d)(v.a,"/react-three-fiber-practice"+e.path);return console.log(e.path,n),n.animations.length>0&&(t=new h.AnimationMixer(n.scene),n.animations.forEach((function(e){t.clipAction(e).play()}))),Object(o.c)((function(e,n){var c;null===(c=t)||void 0===c||c.update(n)})),n.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=h.FrontSide)})),Object(b.jsx)("primitive",{object:n.scene,scale:e.scale})},y=n(40);Object(o.b)({DragControls:y.a});var C=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)([]),i=Object(O.a)(r,2),a=i[0],s=i[1],j=Object(o.e)(),l=j.camera,h=j.gl,d=j.scene;return Object(c.useEffect)((function(){s(t.current.children)}),[]),Object(c.useEffect)((function(){n.current.addEventListener("hoveron",(function(e){return d.orbitControls.enabled=!1})),n.current.addEventListener("hoveroff",(function(e){return d.orbitControls.enabled=!0})),n.current.addEventListener("dragstart",(function(e){var t;null===(t=e.object.api)||void 0===t||t.mass.set(0)})),n.current.addEventListener("dragend",(function(e){var t;return null===(t=e.object.api)||void 0===t?void 0:t.mass.set(1)})),n.current.addEventListener("drag",(function(e){var t,n;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(n=e.object.api)||void 0===n||n.velocity.set(0,0,0)}))}),[a]),Object(b.jsxs)("group",{ref:t,children:[Object(b.jsx)("dragControls",{transformGroup:e.transformGroup,ref:n,args:[a,l,h.domElement]}),e.children]})},M=function(e){return Object(m.a)(e),Object(b.jsxs)(c.Suspense,{fallback:null,children:[Object(b.jsx)(C,{transformGroup:!0,children:Object(b.jsx)(x,{position:[4,4,0],dims:[3,2,6],offset:[0,-.4,.8],children:Object(b.jsx)(w,{path:"/tesla_model_3/scene.gltf",scale:new Array(3).fill(.01)})})}),Object(b.jsx)(C,{transformGroup:!0,children:Object(b.jsx)(x,{position:[-4,4,0],dims:[3,2,7],offset:[0,-.8,.2],children:Object(b.jsx)(w,{path:"/tesla_model_s/scene.gltf",scale:new Array(3).fill(.013)})})}),Object(b.jsx)("group",{rotation:[0,Math.PI,0],children:Object(b.jsx)(w,{path:"/mech_drone/scene.gltf",scale:new Array(3).fill(.01)})})]})},k=function(e){return Object(m.a)(e),Object(o.c)((function(e){var t=e.camera,n=e.scene;(p.activeMesh.name!==p.activeMeshName&&(p.activeMesh=n.getObjectByName(p.activeMeshName)||{}),p.shouldUpdate)&&(t.position.lerp(p.cameraPos,.1),n.orbitControls.target.lerp(p.target,.1),n.orbitControls.update(),t.position.clone().sub(p.cameraPos).length()<.1&&(p.shouldUpdate=!1))})),null},S=n(14),P={zIndex:1,position:"absolute",bottom:"30vh",height:"30px",width:"30px",background:"white",textAlign:"center",borderRadius:"100%",fontSize:20,fontWeight:"bold",opacity:.7,border:"1px solid black",cursor:"pointer"},L=function(e){Object(m.a)(e);var t={1:{cameraPos:[9,2,4],target:[4,0,0],name:"Capot001_CAR_PAINT_0"},2:{cameraPos:[1,2,5],target:[-4,0,0],name:"object005_bod_0"}},n=function(e){var n,c;(n=p.cameraPos).set.apply(n,Object(S.a)(t[e].cameraPos)),(c=p.target).set.apply(c,Object(S.a)(t[e].target)),p.activeMeshName=t[e].name,p.shouldUpdate=!0};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(e){return n(2)},style:Object(u.a)({left:"40vw"},P),children:"<"}),Object(b.jsx)("button",{onClick:function(e){return n(1)},style:Object(u.a)({right:"40vw"},P),children:">"})]})},E=function(e){return Object(b.jsxs)("mesh",Object(u.a)(Object(u.a)({},e),{},{children:[Object(b.jsx)("pointLight",{castShadow:!0,"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10}),Object(b.jsx)("sphereBufferGeometry",{args:[.2,20,20]}),Object(b.jsx)("meshPhongMaterial",{emissive:"white"})]}))},_=function(e){return Object(m.a)(e),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{intensity:.2}),Object(b.jsx)("directionalLight",{"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10,position:[6,3,0],intensity:2,castShadow:!0}),Object(b.jsx)(E,{position:[-6,3,0]}),Object(b.jsx)(E,{position:[0,3,0]}),Object(b.jsx)(E,{position:[6,3,0]})]})},A=n(31);var G=function(){return Object(b.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(b.jsx)(g,{}),Object(b.jsx)(L,{}),Object(b.jsxs)(o.a,{gl:{powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},shadowMap:!0,style:{background:"black"},camera:{position:[7,7,7]},children:[" ",Object(b.jsx)(k,{state:p}),Object(b.jsx)(_,{}),Object(b.jsx)(l,{}),Object(b.jsx)("axesHelper",{args:[5]}),Object(b.jsx)(c.Suspense,{fallback:null,children:Object(b.jsx)(d,{})}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(M,{}),Object(b.jsx)(f,{position:[0,-.5,0]})]}),Object(b.jsxs)(A.c,{children:[Object(b.jsx)(A.b,{focusDistance:0,focalLength:.02,bokehScale:2,height:480}),Object(b.jsx)(A.a,{luminanceThreshold:1,luminanceSmoothing:.9,height:300})]})]})]})},z=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),z()}},[[50,1,2]]]);
//# sourceMappingURL=main.548f7110.chunk.js.map