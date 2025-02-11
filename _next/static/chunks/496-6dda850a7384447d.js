(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{6825:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(7677)._(r(6540)).default.createContext({})},8721:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},5946:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},noSSR:function(){return u}});let n=r(7677);r(4848),r(6540);let l=n._(r(5645));function a(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let o=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))}):(delete n.webpack,delete n.modules,u(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6085:(e,t,r)=>{"use strict";var n=r(7836);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return f}});let l=r(7677),a=r(544),u=r(4848),o=a._(r(6540)),d=l._(r(5076)),i=r(6825),s=r(1215),c=r(8721);function f(e){void 0===e&&(e=!1);let t=[(0,u.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7679);let _=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return l=>{let a=!0,u=!1;if(l.key&&"number"!=typeof l.key&&l.key.indexOf("$")>0){u=!0;let t=l.key.slice(l.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(l.type){case"title":case"base":t.has(l.type)?a=!1:t.add(l.type);break;case"meta":for(let e=0,t=_.length;e<t;e++){let t=_[e];if(l.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=l.props[t],r=n[t]||new Set;("name"!==t||!u)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let l=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:l})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(s.HeadManagerContext);return(0,u.jsx)(d.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4319:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(7677)._(r(6540)).default.createContext(null)},5645:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(7677)._(r(6540)),l=r(4319),a=[],u=[],o=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class i{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function s(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function d(){if(!a){let t=new i(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(t.includes(r))return d()})}function s(e,t){!function(){d();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=n.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),n.default.useMemo(()=>{var t;return u.loading||u.error?n.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:a.retry}):u.loaded?n.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return s.preload=()=>d(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(d,e)}function c(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}s.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),s.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(o=!0,t());c(u,e).then(r,r)})),window.__NEXT_PRELOADREADY=s.preloadReady;let f=s},5076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(6540),l=n.useLayoutEffect,a=n.useEffect;function u(e){let{headManager:t,reduceComponentsToState:r}=e;function u(){if(t&&t.mountedInstances){let l=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(l,e))}}return l(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4953:(e,t,r)=>{r(5946)},3368:(e,t,r)=>{e.exports=r(6085)}}]);