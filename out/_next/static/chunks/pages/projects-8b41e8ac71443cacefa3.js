(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6255:function(e,t,i){"use strict";var n=i(3848),r=i(3115),a=i(2426);t.default=function(e){var t=e.src,i=e.sizes,r=e.unoptimized,a=void 0!==r&&r,u=e.priority,h=void 0!==u&&u,m=e.loading,g=e.className,p=e.quality,b=e.width,v=e.height,w=e.objectFit,A=e.objectPosition,S=e.loader,_=void 0===S?z:S,N=e.placeholder,j=void 0===N?"empty":N,E=e.blurDataURL,Z=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),q=i?"responsive":"intrinsic",B=!1;"unsized"in Z?(B=Boolean(Z.unsized),delete Z.unsized):"layout"in Z&&(Z.layout&&(q=Z.layout),delete Z.layout);y||(j="empty");0;var L=!h&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(a=!0,L=!1);var I,D,P,O=(0,f.useIntersection)({rootMargin:"200px",disabled:!L}),R=n(O,2),W=R[0],X=R[1],C=!L||X,M=k(b),F=k(v),H=k(p),U=M&&F&&M*F<5e3,T="blur"===j&&!U,V=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:A},T?{backgroundSize:"cover",backgroundImage:'url("'.concat(E,'")')}:void 0);if("undefined"!==typeof M&&"undefined"!==typeof F&&"fill"!==q){var G=F/M,Q=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===q?(I={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},D={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===q?(I={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},D={boxSizing:"border-box",display:"block",maxWidth:"100%"},P='<svg width="'.concat(M,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(I={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:F})}else"undefined"===typeof M&&"undefined"===typeof F&&"fill"===q&&(I={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Y={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};C&&(Y=x({src:t,unoptimized:a,layout:q,width:M,quality:H,sizes:i,loader:_}));B&&(I=void 0,D=void 0,V=void 0);return d.default.createElement("div",{style:I},D?d.default.createElement("div",{style:D},P?d.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,s.toBase64)(P))}):null):null,!C&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},Z,x({src:t,unoptimized:a,layout:q,width:M,quality:H,sizes:i,loader:_}),{src:t,decoding:"async",sizes:i,style:V,className:g}))),d.default.createElement("img",Object.assign({},Z,Y,{decoding:"async",className:g,ref:function(e){W(e),function(e,t){"blur"===t&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,j)},style:V})),h?d.default.createElement(l.default,null,d.default.createElement("link",{key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src,imagesrcset:Y.srcSet,imagesizes:Y.sizes})):null)};var o=a(i(6169)),c=a(i(9566)),d=a(i(9748)),l=a(i(7947)),s=i(7239),u=i(5655),f=i(5749);var h=new Map([["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=["auto=format","fit=max","w="+n],o="";r&&a.push("q="+r);a.length&&(o="?"+a.join("&"));return"".concat(t).concat(A(i)).concat(o)}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(A(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(A(i),"?imwidth=").concat(n)}],["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||u.imageConfigDefault,g=m.deviceSizes,p=m.imageSizes,b=m.loader,v=m.path,y=(m.domains,m.enableBlurryPlaceholder),w=[].concat(r(g),r(p));function x(e){var t=e.src,i=e.unoptimized,n=e.layout,a=e.width,o=e.quality,c=e.sizes,d=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,a=/(^|\s)(1?\d?\d)vw/g,o=[];n=a.exec(i);n)o.push(parseInt(n[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:w.filter((function(e){return e>=g[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:g,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(a,n,c),s=l.widths,u=l.kind,f=s.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:s.map((function(e,i){return"".concat(d({src:t,quality:o,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:d({src:t,quality:o,width:s[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=h.get(b);if(t)return t((0,c.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(b))}function A(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},1209:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(7146),r=i(5675),a=i(7300),o=[{title:"Squad server",description:"We want support the growing Squad community! For that matter we have created our own gameserver.",imgSrc:"/static/images/squad_grass.jpg",href:"/blog"}],c=i(9192),d=function(e){var t=e.title,i=e.description,a=e.imgSrc,o=e.href;return(0,n.tZ)("div",{className:"p-4 md:w-1/2 md",style:{maxWidth:"544px"},children:(0,n.BX)("div",{className:"h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden",children:[o?(0,n.tZ)(c.Z,{href:o,"aria-label":"Link to ".concat(t),children:(0,n.tZ)(r.default,{alt:t,src:a,className:"lg:h-48 md:h-36 object-cover object-center",width:544,height:306})}):(0,n.tZ)(r.default,{alt:t,src:a,className:"lg:h-48 md:h-36 object-cover object-center",width:544,height:306}),(0,n.BX)("div",{className:"p-6",children:[(0,n.tZ)("h2",{className:"text-2xl font-bold leading-8 tracking-tight mb-3",children:o?(0,n.tZ)(c.Z,{href:o,"aria-label":"Link to ".concat(t),children:t}):t}),(0,n.tZ)("p",{className:"prose text-gray-500 max-w-none dark:text-gray-400 mb-3",children:i}),o&&(0,n.tZ)(c.Z,{href:o,className:"text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400","aria-label":"Link to ".concat(t),children:"Learn more \u2192"})]})]})})},l=i(2496);function s(){return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.Is,{title:"Projects - ".concat(a.v),description:a.WL,url:"".concat(a.or,"/projects")}),(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Projects"}),(0,n.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Stay up-to-date with an overview of our current projects"})]}),(0,n.tZ)("div",{className:"container py-12",children:(0,n.tZ)("div",{className:"flex flex-wrap -m-4",children:o.map((function(e){return(0,n.tZ)(d,{title:e.title,description:e.description,imgSrc:e.imgSrc,href:e.href},e.title)}))})})]})]})}},8947:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(1209)}])},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,t,i){e.exports=i(6255)},6169:function(e){e.exports=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}}},function(e){e.O(0,[888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);