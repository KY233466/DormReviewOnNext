exports.id=604,exports.ids=[604],exports.modules={6296:(l,t,a)=>{"use strict";a.d(t,{Z:()=>Map});var e=a(60080),n=a(57114),o=a(57702),i=a(99601),r=a.n(i);let s={width:"100%",height:"100vh",zIndex:0},p={mapId:"c74cb64c84d8e1b2",disableDefaultUI:!0,clickableIcons:!1},c=[{title:"CoHo",path:"/coho",location:{lat:42.410239549677414,lng:-71.12123496015069}},{title:"Harleston Hall",path:"/harleston",location:{lat:42.403637698129884,lng:-71.12040219459307}},{title:"Haskell Hall",path:"/haskell",location:{lat:42.40455656040672,lng:-71.12177003837492}},{title:"Hillside Apartments",path:"/hillside",location:{lat:42.40894509417623,lng:-71.11935062690905}},{title:"Latin Way",path:"/latin-way",location:{lat:42.40394891986206,lng:-71.12119008700702}},{title:"Lewis Hall",path:"/lewis",location:{lat:42.40486195456316,lng:-71.12269480624146}},{title:"Sophia Gordon Hall",path:"/sogo",location:{lat:42.40509748849349,lng:-71.11842243463789}},{title:"Stratton Hall",path:"/stratton",location:{lat:42.405121254856375,lng:-71.11925928377993}},{title:"West Hall",path:"/west",location:{lat:42.408253977552356,lng:-71.12031835750494}},{title:"Wren Hall",path:"/wren",location:{lat:42.40982536583952,lng:-71.12189014665391}},{title:"10 Winthrop Street",path:"/10_winthrop",location:{lat:42.409562415825704,lng:-71.12346426525042}},{title:"9-11 Sunset Road",path:"/9-11_sunset",location:{lat:42.40871799441268,lng:-71.12420763414914}}];function Map({center:l,zoom:t}){let a=(0,n.useRouter)(),getPixelPositionOffset=(l,t)=>({x:-(l/2),y:-(t-15)});return e.jsx(o.b6,{zoom:t,center:l,mapContainerStyle:s,options:p,children:c.map((l,t)=>e.jsx(o.xT,{position:l.location,mapPaneName:o.xT.OVERLAY_MOUSE_TARGET,getPixelPositionOffset:getPixelPositionOffset,children:e.jsx("div",{onClick:()=>a.push(l.path),className:r().bubble,children:l.title})},Math.random()))})}},23903:(l,t,a)=>{"use strict";a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var e=a(60080),n=a(9885),o=a(92870),i=a.n(o),r=a(45003),s=a.n(r),p=a(43872),c=a(72586),h=a(20029),u=a.n(h);let d={"& .MuiInputBase-input.MuiAutocomplete-input":{fontSize:"16px"}},b={width:"90%","& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{background:"white",borderRadius:"25px"}},g={width:"260px","& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{background:"white",borderRadius:"25px"}},__WEBPACK_DEFAULT_EXPORT__=function({setZoom:l,setCenter:t,showGoBtn:a=!0,setSelectedDormName:o}){let[r,h]=(0,n.useState)(""),[m,_]=(0,n.useState)(!1),H=(0,c.Z)("(max-width:860px)"),w=(0,c.Z)("(min-width:460px)"),x={"CoHo (Community Housing)":{mobile:{lat:42.410375193093955,lng:-71.12100260908859},pc:{lat:42.410239549677414,lng:-71.12123496015069}},"Harleston Hall":{mobile:{lat:42.40355311542904,lng:-71.12046098315965},pc:{lat:42.403637698129884,lng:-71.12040219459307}},"Haskell Hall":{mobile:{lat:42.40422369976813,lng:-71.12191802857237},pc:{lat:42.404287303183715,lng:-71.12190497763478}},"Hillside Apartments":{mobile:{lat:42.40874549854822,lng:-71.11926016533442},pc:{lat:42.40894509417623,lng:-71.11935062690905}},"Latin Way":{mobile:{lat:42.40382180736755,lng:-71.12117580391173},pc:{lat:42.40394891986206,lng:-71.12119008700702}},"Lewis Hall":{mobile:{lat:42.40467970327077,lng:-71.12272608853274},pc:{lat:42.40486195456316,lng:-71.12269480624146}},"Sophia Gordon Hall":{mobile:{lat:42.40491730834321,lng:-71.11860337202084},pc:{lat:42.40509748849349,lng:-71.11842243463789}},"Stratton Hall":{mobile:{lat:42.40497519571491,lng:-71.1192545470877},pc:{lat:42.405121254856375,lng:-71.11925928377993}},"West Hall":{mobile:{lat:42.408112383261496,lng:-71.1203523188556},pc:{lat:42.408253977552356,lng:-71.12031835750494}},"Wren Hall":{mobile:{lat:42.40966898842749,lng:-71.1219157982569},pc:{lat:42.40982536583952,lng:-71.12189014665391}},"10 Winthrop Street":{mobile:{lat:42.40952978700597,lng:-71.1234434444138},pc:{lat:42.409562415825704,lng:-71.12346426525042}},"9-11 Sunset Road":{mobile:{lat:42.40873503042124,lng:-71.12420323658068},pc:{lat:42.40871799441268,lng:-71.12420763414914}},default:{mobile:{lat:42.40735001860593,lng:-71.12106588226075},pc:{lat:42.40735001860593,lng:-71.12106588226075}}};return(0,e.jsxs)("div",{className:a?u().container:u().floatContainer,children:[e.jsx(s(),{disablePortal:!0,id:"combo-box-demo",size:"small",options:[{label:"CoHo (Community Housing)"},{label:"Harleston Hall"},{label:"Haskell Hall"},{label:"Hillside Apartments"},{label:"Latin Way"},{label:"Lewis Hall"},{label:"Sophia Gordon Hall"},{label:"Stratton Hall"},{label:"West Hall"},{label:"Wren Hall"},{label:"10 Winthrop Street"},{label:"9-11 Sunset Road"}],isOptionEqualToValue:(l,t)=>l.label===t.label,getOptionLabel:l=>l.label,sx:H&&w?g:b,ListboxProps:{style:H?{maxHeight:"14rem"}:{maxHeight:"9.5rem"}},renderOption:(l,t)=>e.jsx(p.Z,{component:"li",...l,children:t.label}),renderInput:l=>e.jsx(i(),{size:"small",sx:d,...l}),onChange:(a,e)=>(function(a){if(null===a){o(""),t({lat:42.40735001860593,lng:-71.12106588226075}),l(17);return}if(h(a.label),o?.(a.label),l(19),""===a.label||null===a.label||void 0===a.label)t({lat:42.40735001860593,lng:-71.12106588226075}),l(17);else{let l=H?x[a.label].mobile:x[a.label].pc;t(l)}})(e)}),a&&e.jsx("button",{className:u().btn,onClick:()=>(function(l){switch(l){case"CoHo (Community Housing)":window.location.href="/coho",t({lat:42.410239549677414,lng:-71.12123496015069});return;case"Harleston Hall":window.location.href="/harleston";return;case"Haskell Hall":window.location.href="/haskell";return;case"Hillside Apartments":window.location.href="/hillside";return;case"Latin Way":window.location.href="/latin-way";return;case"Lewis Hall":window.location.href="/lewis";return;case"Sophia Gordon Hall":window.location.href="/sogo";return;case"Stratton Hall":window.location.href="/stratton";return;case"West Hall":window.location.href="/west";return;case"Wren Hall":window.location.href="/wren";return;case"10 Winthrop Street":window.location.href="/10_winthrop";return;case"9-11 Sunset Road":window.location.href="/9-11_sunset";return;default:_(!0);return}})(r),children:"Go"})]})}},99601:l=>{l.exports={App:"map_App__wqhSO",bubble:"map_bubble__CKW_O",lol:"map_lol__I73W1",mapContainerL:"map_mapContainerL__iM4bo","App-logo":"map_App-logo__CIMTk","App-logo-spin":"map_App-logo-spin__uQrNi","App-header":"map_App-header__alCo1","App-link":"map_App-link__LtJzh"}},20029:l=>{l.exports={container:"Search_container__IVb1h",floatContainer:"Search_floatContainer__NXSI7",btn:"Search_btn__NX9pq"}}};