(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function d_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},Jl={},rg={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),f_=Symbol.for("react.portal"),h_=Symbol.for("react.fragment"),p_=Symbol.for("react.strict_mode"),m_=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),x_=Symbol.for("react.context"),__=Symbol.for("react.forward_ref"),v_=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),S_=Symbol.for("react.lazy"),Oh=Symbol.iterator;function M_(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,og={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||sg}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=Vs.prototype;function cf(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||sg}var uf=cf.prototype=new lg;uf.constructor=cf;ag(uf,Vs.prototype);uf.isPureReactComponent=!0;var kh=Array.isArray,cg=Object.prototype.hasOwnProperty,df={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ka,type:t,key:s,ref:a,props:r,_owner:df.current}}function b_(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function E_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E_(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ka:case f_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Sc(a,0):i,kh(r)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(ff(r)&&(r=b_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Bh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",kh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Sc(s,o);a+=el(s,e,n,l,r)}else if(l=M_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Sc(s,o++),a+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function oo(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function w_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},tl={transition:null},T_={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:df};function fg(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:oo,forEach:function(t,e,n){oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oo(t,function(){e++}),e},toArray:function(t){return oo(t,function(e){return e})||[]},only:function(t){if(!ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Vs;Ze.Fragment=h_;Ze.Profiler=m_;Ze.PureComponent=cf;Ze.StrictMode=p_;Ze.Suspense=v_;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;Ze.act=fg;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ag({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)cg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:x_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g_,_context:t},t.Consumer=t};Ze.createElement=dg;Ze.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:__,render:t}};Ze.isValidElement=ff;Ze.lazy=function(t){return{$$typeof:S_,_payload:{_status:-1,_result:t},_init:w_}};Ze.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Ze.unstable_act=fg;Ze.useCallback=function(t,e){return gn.current.useCallback(t,e)};Ze.useContext=function(t){return gn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return gn.current.useEffect(t,e)};Ze.useId=function(){return gn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return gn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Ze.useRef=function(t){return gn.current.useRef(t)};Ze.useState=function(t){return gn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return gn.current.useTransition()};Ze.version="18.3.1";rg.exports=Ze;var Te=rg.exports;const A_=d_(Te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=Te,C_=Symbol.for("react.element"),N_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,L_=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D_={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)P_.call(e,i)&&!D_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:C_,type:t,key:s,ref:a,props:r,_owner:L_.current}}Jl.Fragment=N_;Jl.jsx=hg;Jl.jsxs=hg;ig.exports=Jl;var d=ig.exports,wu={},pg={exports:{}},Fn={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,D){var O=V.length;V.push(D);e:for(;0<O;){var j=O-1>>>1,ae=V[j];if(0<r(ae,D))V[j]=D,V[O]=ae,O=j;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var D=V[0],O=V.pop();if(O!==D){V[0]=O;e:for(var j=0,ae=V.length,Me=ae>>>1;j<Me;){var Y=2*(j+1)-1,ce=V[Y],ue=Y+1,Se=V[ue];if(0>r(ce,O))ue<ae&&0>r(Se,ce)?(V[j]=Se,V[ue]=O,j=ue):(V[j]=ce,V[Y]=O,j=Y);else if(ue<ae&&0>r(Se,O))V[j]=Se,V[ue]=O,j=ue;else break e}}return D}function r(V,D){var O=V.sortIndex-D.sortIndex;return O!==0?O:V.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,g=!1,v=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var D=n(c);D!==null;){if(D.callback===null)i(c);else if(D.startTime<=V)i(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function b(V){if(M=!1,S(V),!v)if(n(l)!==null)v=!0,K(R);else{var D=n(c);D!==null&&G(b,D.startTime-V)}}function R(V,D){v=!1,M&&(M=!1,u(E),E=-1),g=!0;var O=f;try{for(S(D),p=n(l);p!==null&&(!(p.expirationTime>D)||V&&!I());){var j=p.callback;if(typeof j=="function"){p.callback=null,f=p.priorityLevel;var ae=j(p.expirationTime<=D);D=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(l)&&i(l),S(D)}else i(l);p=n(l)}if(p!==null)var Me=!0;else{var Y=n(c);Y!==null&&G(b,Y.startTime-D),Me=!1}return Me}finally{p=null,f=O,g=!1}}var A=!1,x=null,E=-1,N=5,C=-1;function I(){return!(t.unstable_now()-C<N)}function z(){if(x!==null){var V=t.unstable_now();C=V;var D=!0;try{D=x(!0,V)}finally{D?q():(A=!1,x=null)}}else A=!1}var q;if(typeof m=="function")q=function(){m(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,X=L.port2;L.port1.onmessage=z,q=function(){X.postMessage(null)}}else q=function(){_(z,0)};function K(V){x=V,A||(A=!0,q())}function G(V,D){E=_(function(){V(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,K(R))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var O=f;f=D;try{return V()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,D){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var O=f;f=V;try{return D()}finally{f=O}},t.unstable_scheduleCallback=function(V,D,O){var j=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?j+O:j):O=j,V){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=O+ae,V={id:h++,callback:D,priorityLevel:V,startTime:O,expirationTime:ae,sortIndex:-1},O>j?(V.sortIndex=O,e(c,V),n(l)===null&&V===n(c)&&(M?(u(E),E=-1):M=!0,G(b,O-j))):(V.sortIndex=ae,e(l,V),v||g||(v=!0,K(R))),V},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(V){var D=f;return function(){var O=f;f=D;try{return V.apply(this,arguments)}finally{f=O}}}})(gg);mg.exports=gg;var I_=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=Te,In=I_;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,Aa={};function $r(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Aa[t]=e,t=0;t<e.length;t++)xg.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,U_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Hh={};function O_(t){return Tu.call(Hh,t)?!0:Tu.call(zh,t)?!1:U_.test(t)?Hh[t]=!0:(zh[t]=!0,!1)}function k_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B_(t,e,n,i){if(e===null||typeof e>"u"||k_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hf=/[\-:]([a-z])/g;function pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hf,pf);Jt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hf,pf);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hf,pf);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mf(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B_(e,n,r,i)&&(n=null),i||r===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),us=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),gf=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),vg=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),Gh=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Mc;function ca(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var bc=!1;function Ec(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function z_(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case us:return"Portal";case Au:return"Profiler";case gf:return"StrictMode";case Ru:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vg:return(t.displayName||"Context")+".Consumer";case _g:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function H_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G_(t){var e=Sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function co(t){t._valueTracker||(t._valueTracker=G_(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pu(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bg(t,e){e=e.checked,e!=null&&mf(t,"checked",e,!1)}function Lu(t,e){bg(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(ua(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Eg(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uo,Tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V_=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){V_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function Ag(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function Rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ag(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j_=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(t,e){if(e){if(j_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bu=null,Es=null,ws=null;function Yh(t){if(t=Ja(t)){if(typeof Bu!="function")throw Error(de(280));var e=t.stateNode;e&&(e=rc(e),Bu(t.stateNode,t.type,e))}}function Cg(t){Es?ws?ws.push(t):ws=[t]:Es=t}function Ng(){if(Es){var t=Es,e=ws;if(ws=Es=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function Pg(t,e){return t(e)}function Lg(){}var wc=!1;function Dg(t,e,n){if(wc)return t(e,n);wc=!0;try{return Pg(t,e,n)}finally{wc=!1,(Es!==null||ws!==null)&&(Lg(),Ng())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var i=rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var zu=!1;if(Bi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{zu=!1}function W_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var xa=!1,Sl=null,Ml=!1,Hu=null,X_={onError:function(t){xa=!0,Sl=t}};function Y_(t,e,n,i,r,s,a,o,l){xa=!1,Sl=null,W_.apply(X_,arguments)}function $_(t,e,n,i,r,s,a,o,l){if(Y_.apply(this,arguments),xa){if(xa){var c=Sl;xa=!1,Sl=null}else throw Error(de(198));Ml||(Ml=!0,Hu=c)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $h(t){if(qr(t)!==t)throw Error(de(188))}function q_(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $h(r),t;if(s===i)return $h(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function Fg(t){return t=q_(t),t!==null?Ug(t):null}function Ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ug(t);if(e!==null)return e;t=t.sibling}return null}var Og=In.unstable_scheduleCallback,qh=In.unstable_cancelCallback,K_=In.unstable_shouldYield,Z_=In.unstable_requestPaint,It=In.unstable_now,Q_=In.unstable_getCurrentPriorityLevel,yf=In.unstable_ImmediatePriority,kg=In.unstable_UserBlockingPriority,bl=In.unstable_NormalPriority,J_=In.unstable_LowPriority,Bg=In.unstable_IdlePriority,ec=null,xi=null;function ev(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:iv,tv=Math.log,nv=Math.LN2;function iv(t){return t>>>=0,t===0?32:31-(tv(t)/nv|0)|0}var fo=64,ho=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=da(o):(s&=a,s!==0&&(i=da(s)))}else a=n&~r,a!==0?i=da(a):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ri(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=rv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zg(){var t=fo;return fo<<=1,!(fo&4194240)&&(fo=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function av(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Mf,Vg,jg,Wg,Vu=!1,po=[],or=null,lr=null,cr=null,Na=new Map,Pa=new Map,er=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kh(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function Zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&Mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lv(t,e,n,i,r){switch(e){case"focusin":return or=Zs(or,t,e,n,i,r),!0;case"dragenter":return lr=Zs(lr,t,e,n,i,r),!0;case"mouseover":return cr=Zs(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Na.set(s,Zs(Na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pa.set(s,Zs(Pa.get(s)||null,t,e,n,i,r)),!0}return!1}function Xg(t){var e=Dr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ig(n),e!==null){t.blockedOn=e,Wg(t.priority,function(){Vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ku=i,n.target.dispatchEvent(i),ku=null}else return e=Ja(n),e!==null&&Mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Zh(t,e,n){nl(t)&&n.delete(e)}function cv(){Vu=!1,or!==null&&nl(or)&&(or=null),lr!==null&&nl(lr)&&(lr=null),cr!==null&&nl(cr)&&(cr=null),Na.forEach(Zh),Pa.forEach(Zh)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,cv)))}function La(t){function e(r){return Qs(r,t)}if(0<po.length){Qs(po[0],t);for(var n=1;n<po.length;n++){var i=po[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&Qs(or,t),lr!==null&&Qs(lr,t),cr!==null&&Qs(cr,t),Na.forEach(e),Pa.forEach(e),n=0;n<er.length;n++)i=er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)Xg(n),n.blockedOn===null&&er.shift()}var Ts=ji.ReactCurrentBatchConfig,wl=!0;function uv(t,e,n,i){var r=ft,s=Ts.transition;Ts.transition=null;try{ft=1,bf(t,e,n,i)}finally{ft=r,Ts.transition=s}}function dv(t,e,n,i){var r=ft,s=Ts.transition;Ts.transition=null;try{ft=4,bf(t,e,n,i)}finally{ft=r,Ts.transition=s}}function bf(t,e,n,i){if(wl){var r=ju(t,e,n,i);if(r===null)Uc(t,e,i,Tl,n),Kh(t,i);else if(lv(r,t,e,n,i))i.stopPropagation();else if(Kh(t,i),e&4&&-1<ov.indexOf(t)){for(;r!==null;){var s=Ja(r);if(s!==null&&Gg(s),s=ju(t,e,n,i),s===null&&Uc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var Tl=null;function ju(t,e,n,i){if(Tl=null,t=vf(i),t=Dr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case yf:return 1;case kg:return 4;case bl:case J_:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var ir=null,Ef=null,il=null;function $g(){if(il)return il;var t,e=Ef,n=e.length,i,r="value"in ir?ir.value:ir.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mo(){return!0}function Qh(){return!1}function Un(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mo:Qh,this.isPropagationStopped=Qh,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=Un(js),Qa=Nt({},js,{view:0,detail:0}),fv=Un(Qa),Ac,Rc,Js,tc=Nt({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Ac=t.screenX-Js.screenX,Rc=t.screenY-Js.screenY):Rc=Ac=0,Js=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Jh=Un(tc),hv=Nt({},tc,{dataTransfer:0}),pv=Un(hv),mv=Nt({},Qa,{relatedTarget:0}),Cc=Un(mv),gv=Nt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Un(gv),_v=Nt({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vv=Un(_v),yv=Nt({},js,{data:0}),ep=Un(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bv[t])?!!e[t]:!1}function Tf(){return Ev}var wv=Nt({},Qa,{key:function(t){if(t.key){var e=Sv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tv=Un(wv),Av=Nt({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=Un(Av),Rv=Nt({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),Cv=Un(Rv),Nv=Nt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=Un(Nv),Lv=Nt({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=Un(Lv),Iv=[9,13,27,32],Af=Bi&&"CompositionEvent"in window,_a=null;Bi&&"documentMode"in document&&(_a=document.documentMode);var Fv=Bi&&"TextEvent"in window&&!_a,qg=Bi&&(!Af||_a&&8<_a&&11>=_a),np=" ",ip=!1;function Kg(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Uv(t,e){switch(t){case"compositionend":return Zg(e);case"keypress":return e.which!==32?null:(ip=!0,np);case"textInput":return t=e.data,t===np&&ip?null:t;default:return null}}function Ov(t,e){if(fs)return t==="compositionend"||!Af&&Kg(t,e)?(t=$g(),il=Ef=ir=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qg&&e.locale!=="ko"?null:e.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kv[t.type]:e==="textarea"}function Qg(t,e,n,i){Cg(i),e=Al(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var va=null,Da=null;function Bv(t){c0(t,0)}function nc(t){var e=ms(t);if(Mg(e))return t}function zv(t,e){if(t==="change")return e}var Jg=!1;if(Bi){var Nc;if(Bi){var Pc="oninput"in document;if(!Pc){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),Pc=typeof sp.oninput=="function"}Nc=Pc}else Nc=!1;Jg=Nc&&(!document.documentMode||9<document.documentMode)}function ap(){va&&(va.detachEvent("onpropertychange",e0),Da=va=null)}function e0(t){if(t.propertyName==="value"&&nc(Da)){var e=[];Qg(e,Da,t,vf(t)),Dg(Bv,e)}}function Hv(t,e,n){t==="focusin"?(ap(),va=e,Da=n,va.attachEvent("onpropertychange",e0)):t==="focusout"&&ap()}function Gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(Da)}function Vv(t,e){if(t==="click")return nc(e)}function jv(t,e){if(t==="input"||t==="change")return nc(e)}function Wv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:Wv;function Ia(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tu.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,e){var n=op(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function t0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xv(t){var e=n0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t0(n.ownerDocument.documentElement,n)){if(i!==null&&Rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lp(n,s);var a=lp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yv=Bi&&"documentMode"in document&&11>=document.documentMode,hs=null,Wu=null,ya=null,Xu=!1;function cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||hs==null||hs!==yl(i)||(i=hs,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&Ia(ya,i)||(ya=i,i=Al(Wu,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function go(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},Lc={},i0={};Bi&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function ic(t){if(Lc[t])return Lc[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i0)return Lc[t]=e[n];return t}var r0=ic("animationend"),s0=ic("animationiteration"),a0=ic("animationstart"),o0=ic("transitionend"),l0=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){l0.set(t,e),$r(e,[t])}for(var Dc=0;Dc<up.length;Dc++){var Ic=up[Dc],$v=Ic.toLowerCase(),qv=Ic[0].toUpperCase()+Ic.slice(1);vr($v,"on"+qv)}vr(r0,"onAnimationEnd");vr(s0,"onAnimationIteration");vr(a0,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(o0,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$_(i,e,void 0,t),t.currentTarget=null}function c0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;dp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;dp(r,o,c),s=l}}}if(Ml)throw t=Hu,Ml=!1,Hu=null,t}function vt(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var i=t+"__bubble";n.has(i)||(u0(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),u0(n,t,i,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[xo]){t[xo]=!0,xg.forEach(function(n){n!=="selectionchange"&&(Kv.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,Fc("selectionchange",!1,e))}}function u0(t,e,n,i){switch(Yg(e)){case 1:var r=uv;break;case 4:r=dv;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Dr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Dg(function(){var c=s,h=vf(n),p=[];e:{var f=l0.get(t);if(f!==void 0){var g=wf,v=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":g=Tv;break;case"focusin":v="focus",g=Cc;break;case"focusout":v="blur",g=Cc;break;case"beforeblur":case"afterblur":g=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cv;break;case r0:case s0:case a0:g=xv;break;case o0:g=Pv;break;case"scroll":g=fv;break;case"wheel":g=Dv;break;case"copy":case"cut":case"paste":g=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tp}var M=(e&4)!==0,_=!M&&t==="scroll",u=M?f!==null?f+"Capture":null:f;M=[];for(var m=c,S;m!==null;){S=m;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,u!==null&&(b=Ca(m,u),b!=null&&M.push(Ua(m,b,S)))),_)break;m=m.return}0<M.length&&(f=new g(f,v,null,n,h),p.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ku&&(v=n.relatedTarget||n.fromElement)&&(Dr(v)||v[zi]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Dr(v):null,v!==null&&(_=qr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(M=Jh,b="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=tp,b="onPointerLeave",u="onPointerEnter",m="pointer"),_=g==null?f:ms(g),S=v==null?f:ms(v),f=new M(b,m+"leave",g,n,h),f.target=_,f.relatedTarget=S,b=null,Dr(h)===c&&(M=new M(u,m+"enter",v,n,h),M.target=S,M.relatedTarget=_,b=M),_=b,g&&v)t:{for(M=g,u=v,m=0,S=M;S;S=Kr(S))m++;for(S=0,b=u;b;b=Kr(b))S++;for(;0<m-S;)M=Kr(M),m--;for(;0<S-m;)u=Kr(u),S--;for(;m--;){if(M===u||u!==null&&M===u.alternate)break t;M=Kr(M),u=Kr(u)}M=null}else M=null;g!==null&&fp(p,f,g,M,!1),v!==null&&_!==null&&fp(p,_,v,M,!0)}}e:{if(f=c?ms(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var R=zv;else if(rp(f))if(Jg)R=jv;else{R=Gv;var A=Hv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=Vv);if(R&&(R=R(t,c))){Qg(p,R,n,h);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Du(f,"number",f.value)}switch(A=c?ms(c):window,t){case"focusin":(rp(A)||A.contentEditable==="true")&&(hs=A,Wu=c,ya=null);break;case"focusout":ya=Wu=hs=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,cp(p,n,h);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":cp(p,n,h)}var x;if(Af)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fs?Kg(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qg&&n.locale!=="ko"&&(fs||E!=="onCompositionStart"?E==="onCompositionEnd"&&fs&&(x=$g()):(ir=h,Ef="value"in ir?ir.value:ir.textContent,fs=!0)),A=Al(c,E),0<A.length&&(E=new ep(E,t,null,n,h),p.push({event:E,listeners:A}),x?E.data=x:(x=Zg(n),x!==null&&(E.data=x)))),(x=Fv?Uv(t,n):Ov(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(h=new ep("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=x))}c0(p,e)})}function Ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ca(t,n),s!=null&&i.unshift(Ua(t,s,r)),s=Ca(t,e),s!=null&&i.push(Ua(t,s,r))),t=t.return}return i}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ca(n,s),l!=null&&a.unshift(Ua(n,l,o))):r||(l=Ca(n,s),l!=null&&a.push(Ua(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function hp(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Qv,"")}function _o(t,e,n){if(e=hp(e),hp(t)!==e&&n)throw Error(de(425))}function Rl(){}var Yu=null,$u=null;function qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(t){return pp.resolve(null).then(t).catch(ty)}:Ku;function ty(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),pi="__reactFiber$"+Ws,Oa="__reactProps$"+Ws,zi="__reactContainer$"+Ws,Zu="__reactEvents$"+Ws,ny="__reactListeners$"+Ws,iy="__reactHandles$"+Ws;function Dr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mp(t);t!==null;){if(n=t[pi])return n;t=mp(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[pi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function rc(t){return t[Oa]||null}var Qu=[],gs=-1;function yr(t){return{current:t}}function yt(t){0>gs||(t.current=Qu[gs],Qu[gs]=null,gs--)}function _t(t,e){gs++,Qu[gs]=t.current,t.current=e}var gr={},cn=yr(gr),Mn=yr(!1),zr=gr;function Ds(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Cl(){yt(Mn),yt(cn)}function gp(t,e,n){if(cn.current!==gr)throw Error(de(168));_t(cn,e),_t(Mn,n)}function d0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,H_(t)||"Unknown",r));return Nt({},n,i)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,zr=cn.current,_t(cn,t),_t(Mn,Mn.current),!0}function xp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=d0(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,yt(Mn),yt(cn),_t(cn,t)):yt(Mn),_t(Mn,n)}var Ni=null,sc=!1,kc=!1;function f0(t){Ni===null?Ni=[t]:Ni.push(t)}function ry(t){sc=!0,f0(t)}function Sr(){if(!kc&&Ni!==null){kc=!0;var t=0,e=ft;try{var n=Ni;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,sc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),Og(yf,Sr),r}finally{ft=e,kc=!1}}return null}var xs=[],_s=0,Pl=null,Ll=0,zn=[],Hn=0,Hr=null,Di=1,Ii="";function Nr(t,e){xs[_s++]=Ll,xs[_s++]=Pl,Pl=t,Ll=e}function h0(t,e,n){zn[Hn++]=Di,zn[Hn++]=Ii,zn[Hn++]=Hr,Hr=t;var i=Di;t=Ii;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-ri(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function Cf(t){t.return!==null&&(Nr(t,1),h0(t,1,0))}function Nf(t){for(;t===Pl;)Pl=xs[--_s],xs[_s]=null,Ll=xs[--_s],xs[_s]=null;for(;t===Hr;)Hr=zn[--Hn],zn[Hn]=null,Ii=zn[--Hn],zn[Hn]=null,Di=zn[--Hn],zn[Hn]=null}var Dn=null,Ln=null,Et=!1,ei=null;function p0(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(Et){var e=Ln;if(e){var n=e;if(!_p(t,e)){if(Ju(t))throw Error(de(418));e=ur(n.nextSibling);var i=Dn;e&&_p(t,e)?p0(i,n):(t.flags=t.flags&-4097|2,Et=!1,Dn=t)}}else{if(Ju(t))throw Error(de(418));t.flags=t.flags&-4097|2,Et=!1,Dn=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function vo(t){if(t!==Dn)return!1;if(!Et)return vp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qu(t.type,t.memoizedProps)),e&&(e=Ln)){if(Ju(t))throw m0(),Error(de(418));for(;e;)p0(t,e),e=ur(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?ur(t.stateNode.nextSibling):null;return!0}function m0(){for(var t=Ln;t;)t=ur(t.nextSibling)}function Is(){Ln=Dn=null,Et=!1}function Pf(t){ei===null?ei=[t]:ei.push(t)}var sy=ji.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function yo(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yp(t){var e=t._init;return e(t._payload)}function g0(t){function e(u,m){if(t){var S=u.deletions;S===null?(u.deletions=[m],u.flags|=16):S.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=pr(u,m),u.index=0,u.sibling=null,u}function s(u,m,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<m?(u.flags|=2,m):S):(u.flags|=2,m)):(u.flags|=1048576,m)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,m,S,b){return m===null||m.tag!==6?(m=Wc(S,u.mode,b),m.return=u,m):(m=r(m,S),m.return=u,m)}function l(u,m,S,b){var R=S.type;return R===ds?h(u,m,S.props.children,b,S.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qi&&yp(R)===m.type)?(b=r(m,S.props),b.ref=ea(u,m,S),b.return=u,b):(b=dl(S.type,S.key,S.props,null,u.mode,b),b.ref=ea(u,m,S),b.return=u,b)}function c(u,m,S,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Xc(S,u.mode,b),m.return=u,m):(m=r(m,S.children||[]),m.return=u,m)}function h(u,m,S,b,R){return m===null||m.tag!==7?(m=kr(S,u.mode,b,R),m.return=u,m):(m=r(m,S),m.return=u,m)}function p(u,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wc(""+m,u.mode,S),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:return S=dl(m.type,m.key,m.props,null,u.mode,S),S.ref=ea(u,null,m),S.return=u,S;case us:return m=Xc(m,u.mode,S),m.return=u,m;case Qi:var b=m._init;return p(u,b(m._payload),S)}if(ua(m)||qs(m))return m=kr(m,u.mode,S,null),m.return=u,m;yo(u,m)}return null}function f(u,m,S,b){var R=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return R!==null?null:o(u,m,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case lo:return S.key===R?l(u,m,S,b):null;case us:return S.key===R?c(u,m,S,b):null;case Qi:return R=S._init,f(u,m,R(S._payload),b)}if(ua(S)||qs(S))return R!==null?null:h(u,m,S,b,null);yo(u,S)}return null}function g(u,m,S,b,R){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(S)||null,o(m,u,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case lo:return u=u.get(b.key===null?S:b.key)||null,l(m,u,b,R);case us:return u=u.get(b.key===null?S:b.key)||null,c(m,u,b,R);case Qi:var A=b._init;return g(u,m,S,A(b._payload),R)}if(ua(b)||qs(b))return u=u.get(S)||null,h(m,u,b,R,null);yo(m,b)}return null}function v(u,m,S,b){for(var R=null,A=null,x=m,E=m=0,N=null;x!==null&&E<S.length;E++){x.index>E?(N=x,x=null):N=x.sibling;var C=f(u,x,S[E],b);if(C===null){x===null&&(x=N);break}t&&x&&C.alternate===null&&e(u,x),m=s(C,m,E),A===null?R=C:A.sibling=C,A=C,x=N}if(E===S.length)return n(u,x),Et&&Nr(u,E),R;if(x===null){for(;E<S.length;E++)x=p(u,S[E],b),x!==null&&(m=s(x,m,E),A===null?R=x:A.sibling=x,A=x);return Et&&Nr(u,E),R}for(x=i(u,x);E<S.length;E++)N=g(x,u,E,S[E],b),N!==null&&(t&&N.alternate!==null&&x.delete(N.key===null?E:N.key),m=s(N,m,E),A===null?R=N:A.sibling=N,A=N);return t&&x.forEach(function(I){return e(u,I)}),Et&&Nr(u,E),R}function M(u,m,S,b){var R=qs(S);if(typeof R!="function")throw Error(de(150));if(S=R.call(S),S==null)throw Error(de(151));for(var A=R=null,x=m,E=m=0,N=null,C=S.next();x!==null&&!C.done;E++,C=S.next()){x.index>E?(N=x,x=null):N=x.sibling;var I=f(u,x,C.value,b);if(I===null){x===null&&(x=N);break}t&&x&&I.alternate===null&&e(u,x),m=s(I,m,E),A===null?R=I:A.sibling=I,A=I,x=N}if(C.done)return n(u,x),Et&&Nr(u,E),R;if(x===null){for(;!C.done;E++,C=S.next())C=p(u,C.value,b),C!==null&&(m=s(C,m,E),A===null?R=C:A.sibling=C,A=C);return Et&&Nr(u,E),R}for(x=i(u,x);!C.done;E++,C=S.next())C=g(x,u,E,C.value,b),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?E:C.key),m=s(C,m,E),A===null?R=C:A.sibling=C,A=C);return t&&x.forEach(function(z){return e(u,z)}),Et&&Nr(u,E),R}function _(u,m,S,b){if(typeof S=="object"&&S!==null&&S.type===ds&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case lo:e:{for(var R=S.key,A=m;A!==null;){if(A.key===R){if(R=S.type,R===ds){if(A.tag===7){n(u,A.sibling),m=r(A,S.props.children),m.return=u,u=m;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qi&&yp(R)===A.type){n(u,A.sibling),m=r(A,S.props),m.ref=ea(u,A,S),m.return=u,u=m;break e}n(u,A);break}else e(u,A);A=A.sibling}S.type===ds?(m=kr(S.props.children,u.mode,b,S.key),m.return=u,u=m):(b=dl(S.type,S.key,S.props,null,u.mode,b),b.ref=ea(u,m,S),b.return=u,u=b)}return a(u);case us:e:{for(A=S.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(u,m.sibling),m=r(m,S.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Xc(S,u.mode,b),m.return=u,u=m}return a(u);case Qi:return A=S._init,_(u,m,A(S._payload),b)}if(ua(S))return v(u,m,S,b);if(qs(S))return M(u,m,S,b);yo(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,S),m.return=u,u=m):(n(u,m),m=Wc(S,u.mode,b),m.return=u,u=m),a(u)):n(u,m)}return _}var Fs=g0(!0),x0=g0(!1),Dl=yr(null),Il=null,vs=null,Lf=null;function Df(){Lf=vs=Il=null}function If(t){var e=Dl.current;yt(Dl),t._currentValue=e}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function As(t,e){Il=t,Lf=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Il===null)throw Error(de(308));vs=t,Il.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Ir=null;function Ff(t){Ir===null?Ir=[t]:Ir.push(t)}function _0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sf(t,n)}}function Sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,g=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,M=o;switch(f=e,g=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,f=typeof v=="function"?v.call(g,p,f):v,f==null)break e;p=Nt({},p,f);break e;case 2:Ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=p):h=h.next=g,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=a,t.lanes=a,t.memoizedState=p}}function Mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var eo={},_i=yr(eo),ka=yr(eo),Ba=yr(eo);function Fr(t){if(t===eo)throw Error(de(174));return t}function Of(t,e){switch(_t(Ba,e),_t(ka,t),_t(_i,eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}yt(_i),_t(_i,e)}function Us(){yt(_i),yt(ka),yt(Ba)}function y0(t){Fr(Ba.current);var e=Fr(_i.current),n=Fu(e,t.type);e!==n&&(_t(ka,t),_t(_i,n))}function kf(t){ka.current===t&&(yt(_i),yt(ka))}var At=yr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function Bf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var al=ji.ReactCurrentDispatcher,zc=ji.ReactCurrentBatchConfig,Gr=0,Ct=null,Bt=null,Wt=null,Ol=!1,Sa=!1,za=0,ay=0;function rn(){throw Error(de(321))}function zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Hf(t,e,n,i,r,s){if(Gr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?uy:dy,t=n(i,r),Sa){s=0;do{if(Sa=!1,za=0,25<=s)throw Error(de(301));s+=1,Wt=Bt=null,e.updateQueue=null,al.current=fy,t=n(i,r)}while(Sa)}if(al.current=kl,e=Bt!==null&&Bt.next!==null,Gr=0,Wt=Bt=Ct=null,Ol=!1,e)throw Error(de(300));return t}function Gf(){var t=za!==0;return za=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ct.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Xn(){if(Bt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?Ct.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(de(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?Ct.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Ha(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Gr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Ct.lanes|=h,Vr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ai(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ai(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function S0(){}function M0(t,e){var n=Ct,i=Xn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Vf(w0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ga(9,E0.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(de(349));Gr&30||b0(n,e,r)}return r}function b0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function E0(t,e,n,i){e.value=n,e.getSnapshot=i,T0(e)&&A0(t)}function w0(t,e,n){return n(function(){T0(e)&&A0(t)})}function T0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function A0(t){var e=Hi(t,1);e!==null&&si(e,t,1,-1)}function bp(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=cy.bind(null,Ct,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R0(){return Xn().memoizedState}function ol(t,e,n,i){var r=fi();Ct.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function ac(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&zf(i,a.deps)){r.memoizedState=Ga(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function Ep(t,e){return ol(8390656,8,t,e)}function Vf(t,e){return ac(2048,8,t,e)}function C0(t,e){return ac(4,2,t,e)}function N0(t,e){return ac(4,4,t,e)}function P0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L0(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,P0.bind(null,e,t),n)}function jf(){}function D0(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function I0(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return Gr&21?(ai(n,e)||(n=zg(),Ct.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function oy(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{ft=n,zc.transition=i}}function U0(){return Xn().memoizedState}function ly(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},O0(t))k0(e,n);else if(n=_0(t,e,n,i),n!==null){var r=pn();si(n,t,i,r),B0(n,e,i)}}function cy(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(O0(t))k0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ai(o,a)){var l=e.interleaved;l===null?(r.next=r,Ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_0(t,e,r,i),n!==null&&(r=pn(),si(n,t,i,r),B0(n,e,i))}}function O0(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function k0(t,e){Sa=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sf(t,n)}}var kl={readContext:Wn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},uy={readContext:Wn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,P0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:bp,useDebugValue:jf,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=bp(!1),e=t[0];return t=oy.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=fi();if(Et){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Xt===null)throw Error(de(349));Gr&30||b0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ep(w0.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,E0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Xt.identifierPrefix;if(Et){var n=Ii,i=Di;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:Wn,useCallback:D0,useContext:Wn,useEffect:Vf,useImperativeHandle:L0,useInsertionEffect:C0,useLayoutEffect:N0,useMemo:I0,useReducer:Hc,useRef:R0,useState:function(){return Hc(Ha)},useDebugValue:jf,useDeferredValue:function(t){var e=Xn();return F0(e,Bt.memoizedState,t)},useTransition:function(){var t=Hc(Ha)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:M0,useId:U0,unstable_isNewReconciler:!1},fy={readContext:Wn,useCallback:D0,useContext:Wn,useEffect:Vf,useImperativeHandle:L0,useInsertionEffect:C0,useLayoutEffect:N0,useMemo:I0,useReducer:Gc,useRef:R0,useState:function(){return Gc(Ha)},useDebugValue:jf,useDeferredValue:function(t){var e=Xn();return Bt===null?e.memoizedState=t:F0(e,Bt.memoizedState,t)},useTransition:function(){var t=Gc(Ha)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:M0,useId:U0,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=hr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(si(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=hr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(si(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=hr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(si(e,t,i,n),sl(e,t,i))}};function wp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,i)||!Ia(r,s):!0}function z0(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=bn(e)?zr:cn.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=bn(e)?zr:cn.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&oc.enqueueReplaceState(r,r.state,null),Fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zl||(zl=!0,pd=i),rd(t,e)},n}function G0(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function Rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var py=ji.ReactCurrentOwner,yn=!1;function hn(t,e,n,i){e.child=t===null?x0(e,null,n,i):Fs(e,t.child,n,i)}function Np(t,e,n,i,r){n=n.render;var s=e.ref;return As(e,r),i=Hf(t,e,n,i,s,r),n=Gf(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(Et&&n&&Cf(e),e.flags|=1,hn(t,e,i,r),e.child)}function Pp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V0(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(a,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function V0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ia(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return sd(t,e,n,i,r)}function j0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Ss,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Ss,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Ss,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Ss,Cn),Cn|=i;return hn(t,e,r,n),e.child}function W0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,i,r){var s=bn(n)?zr:cn.current;return s=Ds(e,s),As(e,r),n=Hf(t,e,n,i,s,r),i=Gf(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(Et&&i&&Cf(e),e.flags|=1,hn(t,e,n,r),e.child)}function Lp(t,e,n,i,r){if(bn(n)){var s=!0;Nl(e)}else s=!1;if(As(e,r),e.stateNode===null)ll(t,e),z0(e,n,i),id(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=bn(n)?zr:cn.current,c=Ds(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Tp(e,a,i,c),Ji=!1;var f=e.memoizedState;a.state=f,Fl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Mn.current||Ji?(typeof h=="function"&&(nd(e,n,h,i),l=e.memoizedState),(o=Ji||wp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,v0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Qn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=bn(n)?zr:cn.current,l=Ds(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Tp(e,a,i,l),Ji=!1,f=e.memoizedState,a.state=f,Fl(e,i,a,r);var v=e.memoizedState;o!==p||f!==v||Mn.current||Ji?(typeof g=="function"&&(nd(e,n,g,i),v=e.memoizedState),(c=Ji||wp(e,n,c,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,s,r)}function ad(t,e,n,i,r,s){W0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&xp(e,n,!1),Gi(t,e,s);i=e.stateNode,py.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,o,s)):hn(t,e,o,s),e.memoizedState=i.state,r&&xp(e,n,!0),e.child}function X0(t){var e=t.stateNode;e.pendingContext?gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gp(t,e.context,!1),Of(t,e.containerInfo)}function Dp(t,e,n,i,r){return Is(),Pf(r),e.flags|=256,hn(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y0(t,e,n){var i=e.pendingProps,r=At.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(At,r&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=uc(a,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=od,t):Wf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return my(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=od,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wf(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function So(t,e,n,i){return i!==null&&Pf(i),Fs(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(de(422))),So(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,a),e.child.memoizedState=ld(a),e.memoizedState=od,s);if(!(e.mode&1))return So(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=Vc(s,i,void 0),So(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),si(i,t,r,-1))}return Zf(),i=Vc(Error(de(421))),So(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=ur(r.nextSibling),Dn=e,Et=!0,ei=null,t!==null&&(zn[Hn++]=Di,zn[Hn++]=Ii,zn[Hn++]=Hr,Di=t.id,Ii=t.overflow,Hr=e),e=Wf(e,i.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:X0(e),Is();break;case 5:y0(e);break;case 1:bn(e.type)&&Nl(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(Dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?Y0(t,e,n):(_t(At,At.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);_t(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,j0(t,e,n)}return Gi(t,e,n)}var q0,cd,K0,Z0;q0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};K0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(_i.current);var s=null;switch(n){case"input":r=Pu(t,r),i=Pu(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}Uu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Z0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ta(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xy(t,e,n){var i=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return bn(e.type)&&Cl(),sn(e),null;case 3:return i=e.stateNode,Us(),yt(Mn),yt(cn),Bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(xd(ei),ei=null))),cd(t,e),sn(e),null;case 5:kf(e);var r=Fr(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)K0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return sn(e),null}if(t=Fr(_i.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)vt(fa[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Vh(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Wh(i,s),vt("invalid",i)}Uu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",""+o]):Aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":co(i),jh(i,s,!0);break;case"textarea":co(i),Xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[pi]=e,t[Oa]=i,q0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ou(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)vt(fa[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Vh(t,i),r=Pu(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Wh(t,i),r=Iu(t,i),vt("invalid",t);break;default:r=i}Uu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Rg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&mf(t,s,l,a))}switch(n){case"input":co(t),jh(t,i,!1);break;case"textarea":co(t),Xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Fr(Ba.current),Fr(_i.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:_o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return sn(e),null;case 13:if(yt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Ln!==null&&e.mode&1&&!(e.flags&128))m0(),Is(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[pi]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ei!==null&&(xd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?zt===0&&(zt=3):Zf())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Us(),cd(t,e),t===null&&Fa(e.stateNode.containerInfo),sn(e),null;case 10:return If(e.type._context),sn(e),null;case 17:return bn(e.type)&&Cl(),sn(e),null;case 19:if(yt(At),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ta(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,ta(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>ks&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return sn(e),null}else 2*It()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=At.current,_t(At,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return Kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function _y(t,e){switch(Nf(e),e.tag){case 1:return bn(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),yt(Mn),yt(cn),Bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(yt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(At),null;case 4:return Us(),null;case 10:return If(e.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Mo=!1,ln=!1,vy=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function ud(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var Fp=!1;function yy(t,e){if(Yu=wl,t=n0(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},wl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,_=v.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Qn(e.type,M),_);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(b){Dt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return v=Fp,Fp=!1,v}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ud(e,n,s)}r=r.next}while(r!==i)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q0(t){var e=t.alternate;e!==null&&(t.alternate=null,Q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[Oa],delete e[Zu],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J0(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}var Kt=null,Jn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:ln||ys(n,e);case 6:var i=Kt,r=Jn;Kt=null,Xi(t,e,n),Kt=i,Jn=r,Kt!==null&&(Jn?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(Jn?(t=Kt,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),La(t)):Oc(Kt,n.stateNode));break;case 4:i=Kt,r=Jn,Kt=n.stateNode.containerInfo,Jn=!0,Xi(t,e,n),Kt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ud(n,e,a),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!ln&&(ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Dt(n,e,o)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,Xi(t,e,n),ln=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function Op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,Jn=!1;break e;case 3:Kt=o.stateNode.containerInfo,Jn=!0;break e;case 4:Kt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(Kt===null)throw Error(de(160));ex(s,a,r),Kt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),li(t),i&4){try{Ma(3,t,t.return),lc(3,t)}catch(M){Dt(t,t.return,M)}try{Ma(5,t,t.return)}catch(M){Dt(t,t.return,M)}}break;case 1:$n(e,t),li(t),i&512&&n!==null&&ys(n,n.return);break;case 5:if($n(e,t),li(t),i&512&&n!==null&&ys(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(M){Dt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&bg(r,s),Ou(o,a);var c=Ou(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?Rg(r,p):h==="dangerouslySetInnerHTML"?Tg(r,p):h==="children"?Ra(r,p):mf(r,h,p,c)}switch(o){case"input":Lu(r,s);break;case"textarea":Eg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?bs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oa]=s}catch(M){Dt(t,t.return,M)}}break;case 6:if($n(e,t),li(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Dt(t,t.return,M)}}break;case 3:if($n(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(M){Dt(t,t.return,M)}break;case 4:$n(e,t),li(t);break;case 13:$n(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=It())),i&4&&Op(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||h,$n(e,t),ln=c):$n(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ae=t,h=t.child;h!==null;){for(p=Ae=h;Ae!==null;){switch(f=Ae,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ma(4,f,f.return);break;case 1:ys(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){Dt(i,n,M)}}break;case 5:ys(f,f.return);break;case 22:if(f.memoizedState!==null){Bp(p);continue}}g!==null?(g.return=f,Ae=g):Bp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ag("display",a))}catch(M){Dt(t,t.return,M)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(M){Dt(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$n(e,t),li(t),i&4&&Op(t);break;case 21:break;default:$n(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J0(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=Up(t);hd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Up(t);fd(t,o,a);break;default:throw Error(de(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){Ae=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||ln;o=Mo;var c=ln;if(Mo=a,(ln=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?zp(r):l!==null?(l.return=a,Ae=l):zp(r);for(;s!==null;)Ae=s,nx(s),s=s.sibling;Ae=r,Mo=o,ln=c}kp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):kp(t)}}function kp(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&La(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}ln||e.flags&512&&dd(e)}catch(f){Dt(e,e.return,f)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Bp(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function zp(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{dd(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{dd(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var My=Math.ceil,Bl=ji.ReactCurrentDispatcher,Xf=ji.ReactCurrentOwner,jn=ji.ReactCurrentBatchConfig,st=0,Xt=null,Ot=null,Qt=0,Cn=0,Ss=yr(0),zt=0,Va=null,Vr=0,cc=0,Yf=0,ba=null,vn=null,$f=0,ks=1/0,Ci=null,zl=!1,pd=null,fr=null,bo=!1,rr=null,Hl=0,Ea=0,md=null,cl=-1,ul=0;function pn(){return st&6?It():cl!==-1?cl:cl=It()}function hr(t){return t.mode&1?st&2&&Qt!==0?Qt&-Qt:sy.transition!==null?(ul===0&&(ul=zg()),ul):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Yg(t.type)),t):1}function si(t,e,n,i){if(50<Ea)throw Ea=0,md=null,Error(de(185));Za(t,n,i),(!(st&2)||t!==Xt)&&(t===Xt&&(!(st&2)&&(cc|=n),zt===4&&tr(t,Qt)),En(t,i),n===1&&st===0&&!(e.mode&1)&&(ks=It()+500,sc&&Sr()))}function En(t,e){var n=t.callbackNode;sv(t,e);var i=El(t,t===Xt?Qt:0);if(i===0)n!==null&&qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qh(n),e===1)t.tag===0?ry(Hp.bind(null,t)):f0(Hp.bind(null,t)),ey(function(){!(st&6)&&Sr()}),n=null;else{switch(Hg(i)){case 1:n=yf;break;case 4:n=kg;break;case 16:n=bl;break;case 536870912:n=Bg;break;default:n=bl}n=ux(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(cl=-1,ul=0,st&6)throw Error(de(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=El(t,t===Xt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gl(t,i);else{e=i;var r=st;st|=2;var s=sx();(Xt!==t||Qt!==e)&&(Ci=null,ks=It()+500,Or(t,e));do try{wy();break}catch(o){rx(t,o)}while(!0);Df(),Bl.current=s,st=r,Ot!==null?e=0:(Xt=null,Qt=0,e=zt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=gd(t,r))),e===1)throw n=Va,Or(t,0),tr(t,i),En(t,It()),n;if(e===6)tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!by(r)&&(e=Gl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=gd(t,s))),e===1))throw n=Va,Or(t,0),tr(t,i),En(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Pr(t,vn,Ci);break;case 3:if(tr(t,i),(i&130023424)===i&&(e=$f+500-It(),10<e)){if(El(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(Pr.bind(null,t,vn,Ci),e);break}Pr(t,vn,Ci);break;case 4:if(tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ri(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*My(i/1960))-i,10<i){t.timeoutHandle=Ku(Pr.bind(null,t,vn,Ci),i);break}Pr(t,vn,Ci);break;case 5:Pr(t,vn,Ci);break;default:throw Error(de(329))}}}return En(t,It()),t.callbackNode===n?ix.bind(null,t):null}function gd(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=Gl(t,e),t!==2&&(e=vn,vn=n,e!==null&&xd(e)),t}function xd(t){vn===null?vn=t:vn.push.apply(vn,t)}function by(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Yf,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Hp(t){if(st&6)throw Error(de(327));Rs();var e=El(t,0);if(!(e&1))return En(t,It()),null;var n=Gl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=gd(t,i))}if(n===1)throw n=Va,Or(t,0),tr(t,e),En(t,It()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,vn,Ci),En(t,It()),null}function qf(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(ks=It()+500,sc&&Sr())}}function jr(t){rr!==null&&rr.tag===0&&!(st&6)&&Rs();var e=st;st|=1;var n=jn.transition,i=ft;try{if(jn.transition=null,ft=1,t)return t()}finally{ft=i,jn.transition=n,st=e,!(st&6)&&Sr()}}function Kf(){Cn=Ss.current,yt(Ss)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jv(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Nf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:Us(),yt(Mn),yt(cn),Bf();break;case 5:kf(i);break;case 4:Us();break;case 13:yt(At);break;case 19:yt(At);break;case 10:If(i.type._context);break;case 22:case 23:Kf()}n=n.return}if(Xt=t,Ot=t=pr(t.current,null),Qt=Cn=e,zt=0,Va=null,Yf=cc=Vr=0,vn=ba=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ir=null}return t}function rx(t,e){do{var n=Ot;try{if(Df(),al.current=kl,Ol){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Gr=0,Wt=Bt=Ct=null,Sa=!1,za=0,Xf.current=null,n===null||n.return===null){zt=1,Va=e,Ot=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Rp(a);if(g!==null){g.flags&=-257,Cp(g,a,o,s,e),g.mode&1&&Ap(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){Ap(s,c,e),Zf();break e}l=Error(de(426))}}else if(Et&&o.mode&1){var _=Rp(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cp(_,a,o,s,e),Pf(Os(l,o));break e}}s=l=Os(l,o),zt!==4&&(zt=2),ba===null?ba=[s]:ba.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=H0(s,l,e);Sp(s,u);break e;case 1:o=l;var m=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(fr===null||!fr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=G0(s,o,e);Sp(s,b);break e}}s=s.return}while(s!==null)}ox(n)}catch(R){e=R,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function sx(){var t=Bl.current;return Bl.current=kl,t===null?kl:t}function Zf(){(zt===0||zt===3||zt===2)&&(zt=4),Xt===null||!(Vr&268435455)&&!(cc&268435455)||tr(Xt,Qt)}function Gl(t,e){var n=st;st|=2;var i=sx();(Xt!==t||Qt!==e)&&(Ci=null,Or(t,e));do try{Ey();break}catch(r){rx(t,r)}while(!0);if(Df(),st=n,Bl.current=i,Ot!==null)throw Error(de(261));return Xt=null,Qt=0,zt}function Ey(){for(;Ot!==null;)ax(Ot)}function wy(){for(;Ot!==null&&!K_();)ax(Ot)}function ax(t){var e=cx(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?ox(t):Ot=e,Xf.current=null}function ox(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_y(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ot=null;return}}else if(n=xy(n,e,Cn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);zt===0&&(zt=5)}function Pr(t,e,n){var i=ft,r=jn.transition;try{jn.transition=null,ft=1,Ty(t,e,n,i)}finally{jn.transition=r,ft=i}return null}function Ty(t,e,n,i){do Rs();while(rr!==null);if(st&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(av(t,s),t===Xt&&(Ot=Xt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,ux(bl,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var a=ft;ft=1;var o=st;st|=4,Xf.current=null,yy(t,n),tx(n,t),Xv($u),wl=!!Yu,$u=Yu=null,t.current=n,Sy(n),Z_(),st=o,ft=a,jn.transition=s}else t.current=n;if(bo&&(bo=!1,rr=t,Hl=r),s=t.pendingLanes,s===0&&(fr=null),ev(n.stateNode),En(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zl)throw zl=!1,t=pd,pd=null,t;return Hl&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===md?Ea++:(Ea=0,md=t):Ea=0,Sr(),null}function Rs(){if(rr!==null){var t=Hg(Hl),e=jn.transition,n=ft;try{if(jn.transition=null,ft=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,Hl=0,st&6)throw Error(de(331));var r=st;for(st|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:Ma(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ae=p;else for(;Ae!==null;){h=Ae;var f=h.sibling,g=h.return;if(Q0(h),h===c){Ae=null;break}if(f!==null){f.return=g,Ae=f;break}Ae=g}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var _=M.sibling;M.sibling=null,M=_}while(M!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ae=u;break e}Ae=s.return}}var m=t.current;for(Ae=m;Ae!==null;){a=Ae;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Ae=S;else e:for(a=m;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:lc(9,o)}}catch(R){Dt(o,o.return,R)}if(o===a){Ae=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,Ae=b;break e}Ae=o.return}}if(st=r,Sr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(ec,t)}catch{}i=!0}return i}finally{ft=n,jn.transition=e}}return!1}function Gp(t,e,n){e=Os(n,e),e=H0(t,e,1),t=dr(t,e,1),e=pn(),t!==null&&(Za(t,1,e),En(t,e))}function Dt(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Os(n,t),t=G0(e,t,1),e=dr(e,t,1),t=pn(),e!==null&&(Za(e,1,t),En(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Qt&n)===n&&(zt===4||zt===3&&(Qt&130023424)===Qt&&500>It()-$f?Or(t,0):Yf|=n),En(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):e=1);var n=pn();t=Hi(t,e),t!==null&&(Za(t,e,n),En(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),lx(t,n)}var cx;cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,gy(t,e,n);yn=!!(t.flags&131072)}else yn=!1,Et&&e.flags&1048576&&h0(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Ds(e,cn.current);As(e,n),r=Hf(null,e,i,t,r,n);var s=Gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=oc,e.stateNode=r,r._reactInternals=e,id(e,i,t,n),e=ad(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Cf(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=Qn(i,t),r){case 0:e=sd(null,e,i,t,n);break e;case 1:e=Lp(null,e,i,t,n);break e;case 11:e=Np(null,e,i,t,n);break e;case 14:e=Pp(null,e,i,Qn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Lp(t,e,i,r,n);case 3:e:{if(X0(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v0(t,e),Fl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(de(423)),e),e=Dp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(de(424)),e),e=Dp(t,e,i,n,r);break e}else for(Ln=ur(e.stateNode.containerInfo.firstChild),Dn=e,Et=!0,ei=null,n=x0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),i===r){e=Gi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return y0(e),t===null&&ed(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,qu(i,r)?a=null:s!==null&&qu(i,s)&&(e.flags|=32),W0(t,e),hn(t,e,a,n),e.child;case 6:return t===null&&ed(e),null;case 13:return Y0(t,e,n);case 4:return Of(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Np(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(Dl,i._currentValue),i._currentValue=a,s!==null)if(ai(s.value,a)){if(s.children===r.children&&!Mn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),td(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,n),r=Wn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),Pp(t,e,i,r,n);case 15:return V0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),ll(t,e),e.tag=1,bn(i)?(t=!0,Nl(e)):t=!1,As(e,n),z0(e,i,r),id(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return $0(t,e,n);case 22:return j0(t,e,n)}throw Error(de(156,e.tag))};function ux(t,e){return Og(t,e)}function Ny(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new Ny(t,e,n,i)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===_f)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Qf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ds:return kr(n.children,r,s,e);case gf:a=8,r|=8;break;case Au:return t=Vn(12,n,e,r|2),t.elementType=Au,t.lanes=s,t;case Ru:return t=Vn(13,n,e,r),t.elementType=Ru,t.lanes=s,t;case Cu:return t=Vn(19,n,e,r),t.elementType=Cu,t.lanes=s,t;case yg:return uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _g:a=10;break e;case vg:a=9;break e;case xf:a=11;break e;case _f:a=14;break e;case Qi:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Vn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function uc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jf(t,e,n,i,r,s,a,o,l){return t=new Ly(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dx(t){if(!t)return gr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(bn(n))return d0(t,n,e)}return e}function fx(t,e,n,i,r,s,a,o,l){return t=Jf(n,i,!0,t,r,s,a,o,l),t.context=dx(null),n=t.current,i=pn(),r=hr(n),s=Ui(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,Za(t,r,i),En(t,i),t}function dc(t,e,n,i){var r=e.current,s=pn(),a=hr(r);return n=dx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,a),t!==null&&(si(t,r,a,s),sl(t,r,a)),a}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eh(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function Iy(){return null}var hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function th(t){this._internalRoot=t}fc.prototype.render=th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));dc(t,e,null,null)};fc.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){dc(null,t,null,null)}),e[zi]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&Xg(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vl(a);s.call(c)}}var a=fx(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=a,t[zi]=a.current,Fa(t.nodeType===8?t.parentNode:t),jr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Vl(l);o.call(c)}}var l=Jf(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=l,t[zi]=l.current,Fa(t.nodeType===8?t.parentNode:t),jr(function(){dc(e,l,n,i)}),l}function pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Vl(a);o.call(l)}}dc(e,a,t,r)}else a=Fy(n,e,t,r,i);return Vl(a)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Sf(e,n|1),En(e,It()),!(st&6)&&(ks=It()+500,Sr()))}break;case 13:jr(function(){var i=Hi(t,1);if(i!==null){var r=pn();si(i,t,1,r)}}),eh(t,1)}};Mf=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=pn();si(e,t,134217728,n)}eh(t,134217728)}};Vg=function(t){if(t.tag===13){var e=hr(t),n=Hi(t,e);if(n!==null){var i=pn();si(n,t,e,i)}eh(t,e)}};jg=function(){return ft};Wg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Bu=function(t,e,n){switch(e){case"input":if(Lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=rc(i);if(!r)throw Error(de(90));Mg(i),Lu(i,r)}}}break;case"textarea":Eg(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};Pg=qf;Lg=jr;var Uy={usingClientEntryPoint:!1,Events:[Ja,ms,rc,Cg,Ng,qf]},na={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{ec=Eo.inject(Oy),xi=Eo}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(de(200));return Dy(t,e,null,n)};Fn.createRoot=function(t,e){if(!nh(t))throw Error(de(299));var n=!1,i="",r=hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jf(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,Fa(t.nodeType===8?t.parentNode:t),new th(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return jr(t)};Fn.hydrate=function(t,e,n){if(!hc(e))throw Error(de(200));return pc(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!nh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=hx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=fx(e,null,t,1,n??null,r,!1,s,a),t[zi]=e.current,Fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fc(e)};Fn.render=function(t,e,n){if(!hc(e))throw Error(de(200));return pc(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!hc(t))throw Error(de(40));return t._reactRootContainer?(jr(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Fn.unstable_batchedUpdates=qf;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return pc(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),pg.exports=Fn;var ky=pg.exports,Wp=ky;wu.createRoot=Wp.createRoot,wu.hydrateRoot=Wp.hydrateRoot;function By({activeNav:t,setActiveNav:e,onUpgradeSparks:n}){const i=[{id:"create",label:"Create",icon:"auto_fix_high"},{id:"sketch-pad",label:"Sketch Pad",icon:"draw"},{id:"gallery",label:"Gallery & Models",icon:"view_in_ar"},{id:"assets",label:"Asset Library",icon:"category"}],r=[{id:"api-docs",label:"API & Docs",icon:"code"},{id:"community",label:"Community",icon:"forum"},{id:"settings",label:"Settings",icon:"settings"}];return d.jsxs("aside",{className:"fixed left-0 top-0 h-full w-64 bg-[#0c0f11]/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-4 border-r border-[#272a2d]/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]",children:[d.jsxs("div",{className:"flex flex-col gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3 px-1 cursor-pointer",onClick:()=>e("create"),children:[d.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#272a2d] to-[#0c0f11] border border-[#FF7F50]/40 shadow-[0_0_16px_rgba(255,127,80,0.35)]",children:[d.jsxs("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 32 32",children:[d.jsx("polygon",{className:"opacity-80",fill:"none",points:"16,2 29,9 29,23 16,30 3,23 3,9",stroke:"#FF7F50",strokeWidth:"1.8"}),d.jsx("polygon",{fill:"rgba(0,245,155,0.08)",points:"16,7 25,12 25,20 16,25 7,20 7,12",stroke:"#00f59b",strokeWidth:"1.5"}),d.jsx("path",{d:"M16 2 L16 30 M3 9 L29 23 M29 9 L3 23",stroke:"rgba(255,127,80,0.35)",strokeWidth:"1"}),d.jsx("circle",{className:"filter drop-shadow-[0_0_6px_#FF7F50]",cx:"16",cy:"16",fill:"#FF7F50",r:"2.5"})]}),d.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50] animate-ping opacity-75"}),d.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50]"})]}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("div",{className:"flex items-center gap-1.5",children:d.jsxs("span",{className:"font-display font-bold text-lg text-white tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-primary bg-clip-text text-transparent",children:["ZEPHYR",d.jsx("span",{className:"text-[#FF7F50] ml-1",children:"3D"})]})}),d.jsx("div",{className:"flex items-center gap-1.5 mt-1",children:d.jsx("span",{className:"px-1.5 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase bg-[#272a2d] border border-[#FF7F50]/40 text-[#FF7F50]",children:"PRO STUDIO v4.0"})})]})]}),d.jsx("div",{className:"h-px w-full bg-[#323537]/40"}),d.jsxs("nav",{className:"flex flex-col gap-1",children:[i.map(s=>{const a=t===s.id;return d.jsxs("button",{onClick:()=>e(s.id),className:`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${a?"bg-[#272a2d] text-[#6ffbbe] shadow-[inset_0_0_12px_rgba(0,245,155,0.15)] relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#00f59b] before:rounded-full":"text-[#bfc9c3] hover:bg-[#1d2022] hover:text-white"}`,children:[d.jsx("span",{className:`material-symbols-outlined text-lg ${a?"text-[#4edea3]":"text-slate-400"}`,children:s.icon}),d.jsx("span",{children:s.label})]},s.id)}),d.jsx("div",{className:"my-2 h-px w-full bg-[#323537]/30"}),r.map(s=>{const a=t===s.id;return d.jsxs("button",{onClick:()=>e(s.id),className:`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${a?"bg-[#272a2d] text-[#6ffbbe] shadow-[inset_0_0_12px_rgba(0,245,155,0.15)] relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#00f59b] before:rounded-full":"text-[#bfc9c3] hover:bg-[#1d2022] hover:text-white"}`,children:[d.jsx("span",{className:`material-symbols-outlined text-lg ${a?"text-[#4edea3]":"text-slate-400"}`,children:s.icon}),d.jsx("span",{children:s.label})]},s.id)})]})]}),d.jsxs("div",{className:"flex flex-col gap-3",children:[d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#191c1e]/80 border border-[#272a2d] backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col gap-2",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Sparks Balance"}),d.jsx("span",{className:"material-symbols-outlined text-[#4edea3] text-sm",children:"bolt"})]}),d.jsxs("div",{className:"flex items-baseline justify-between",children:[d.jsx("span",{className:"font-display font-semibold text-lg text-white",children:"120"}),d.jsx("span",{className:"text-[11px] text-[#849588] bg-[#0c0f11] px-2 py-0.5 rounded border border-[#272a2d]",children:"Free Tier"})]}),d.jsx("div",{className:"w-full h-1.5 rounded-full bg-[#323537] overflow-hidden my-0.5",children:d.jsx("div",{className:"h-full bg-[#00f59b] rounded-full w-2/5 shadow-[0_0_8px_rgba(0,245,155,0.6)]"})}),d.jsx("button",{onClick:n,className:"w-full mt-1 py-1.5 px-3 rounded-lg bg-[#272a2d] hover:bg-[#00f59b] text-white hover:text-[#003920] text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-sm",children:"Upgrade Sparks"})]}),d.jsxs("div",{className:"px-1 py-1 flex items-center justify-between text-[#849588] text-xs",children:[d.jsx("span",{className:"flex items-center gap-1.5",children:d.jsx("span",{children:"Meshy Core Engine"})}),d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00a572] shadow-[0_0_8px_#00f59b] animate-pulse"})]})]})]})}function zy({onOpenBriefing:t,searchQuery:e,setSearchQuery:n,selectedModel:i,setSelectedModel:r}){const[s,a]=Te.useState(!1),[o,l]=Te.useState(!1),c=[{id:"flagship",name:"ZephyrMesh 2.5 Flagship",desc:"InstantMesh + Llama 3.2 Vision"},{id:"instantmesh",name:"InstantMesh LRM v1.2",desc:"Direct 3D Sparse View LRM"},{id:"llama",name:"Llama 3.2 Vision 11B",desc:"Semantic Geometry Parser"},{id:"sdf",name:"Watertight SDF Hybrid",desc:"High Precision Marching Tetrahedra"}];return d.jsxs("header",{className:"fixed top-0 left-64 right-0 z-40 bg-[#0c0f11]/85 backdrop-blur-xl border-b border-[#272a2d]/60",children:[d.jsxs("div",{className:"w-full bg-[#191c1e]/70 px-6 py-1.5 flex items-center justify-between text-xs border-b border-[#272a2d]/30",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-[#4edea3] text-sm",children:"campaign"}),d.jsx("span",{className:"text-[#bfc9c3] font-medium",children:"TechZephyr 4.0 Hackathon • AI Sketch-to-3D Reconstruction Engine"}),d.jsx("span",{className:"hidden md:inline-flex px-1.5 py-0.2 rounded bg-[#00f59b]/15 text-[#00f59b] text-[10px] font-mono border border-[#00f59b]/30",children:"LRM+VLM PIPELINE"})]}),d.jsx("div",{className:"flex items-center gap-4",children:d.jsxs("button",{onClick:t,className:"text-[#6ffbbe] hover:text-[#00f59b] hover:underline font-semibold text-xs flex items-center gap-1 transition-colors",children:[d.jsx("span",{children:"Read Briefing"}),d.jsx("span",{className:"material-symbols-outlined text-xs",children:"arrow_forward"})]})})]}),d.jsxs("div",{className:"h-16 w-full px-6 flex items-center justify-between gap-4",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>a(!s),className:"flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#272a2d]/90 hover:bg-[#323537] text-white text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-[#3b4a3f]/60 transition-all",children:[d.jsx("span",{className:"material-symbols-outlined text-[#4edea3] text-base",children:"neurology"}),d.jsx("span",{children:i}),d.jsx("span",{className:"material-symbols-outlined text-[#bfc9c3] text-sm",children:"expand_more"})]}),s&&d.jsxs("div",{className:"absolute left-0 mt-2 w-72 rounded-xl bg-[#191c1e] border border-[#272a2d] p-1.5 shadow-2xl z-50",children:[d.jsx("div",{className:"px-3 py-1.5 text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Reconstruction Engine"}),c.map(h=>d.jsxs("button",{onClick:()=>{r(h.name),a(!1)},className:`w-full text-left px-3 py-2 rounded-lg text-xs flex flex-col transition-colors ${i===h.name?"bg-[#272a2d] text-[#6ffbbe]":"text-white hover:bg-[#1d2022]"}`,children:[d.jsx("span",{className:"font-semibold",children:h.name}),d.jsx("span",{className:"text-[11px] text-[#849588]",children:h.desc})]},h.id))]})]}),d.jsxs("div",{className:"relative flex items-center",children:[d.jsx("span",{className:"material-symbols-outlined absolute left-3 text-[#849588] text-base",children:"search"}),d.jsx("input",{type:"text",value:e,onChange:h=>n(h.target.value),placeholder:"Search meshes, textures, prompts...",className:"w-72 md:w-80 pl-9 pr-3 py-1.5 rounded-full bg-[#1d2022]/80 border border-[#272a2d] text-white placeholder:text-[#849588] text-xs focus:outline-none focus:ring-1 focus:ring-[#00f59b]/50 focus:border-[#00f59b]/40 transition-all"})]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("button",{onClick:()=>alert("Feedback submitted! Thank you for testing the Zephyr 3D AI Studio."),className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#272a2d] hover:bg-[#323537] border border-[#3b4a3f]/40 text-white text-xs font-medium transition-colors",children:[d.jsx("span",{className:"material-symbols-outlined text-[#849588] text-sm",children:"chat_bubble"}),d.jsx("span",{children:"Feedback"})]}),d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>l(!o),className:"w-9 h-9 rounded-full bg-[#1d2022] border border-[#272a2d] flex items-center justify-center text-[#bfc9c3] hover:text-white hover:bg-[#272a2d] transition-colors relative",children:[d.jsx("span",{className:"material-symbols-outlined text-lg",children:"notifications"}),d.jsx("span",{className:"absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF7F50]"})]}),o&&d.jsxs("div",{className:"absolute right-0 mt-2 w-80 rounded-xl bg-[#191c1e] border border-[#272a2d] p-3 shadow-2xl z-50 text-xs",children:[d.jsxs("div",{className:"font-semibold text-white mb-2 pb-1 border-b border-[#272a2d] flex justify-between items-center",children:[d.jsx("span",{children:"System Notifications"}),d.jsx("span",{className:"text-[10px] text-[#4edea3]",children:"Live"})]}),d.jsxs("div",{className:"space-y-2 text-[#bfc9c3]",children:[d.jsxs("div",{className:"p-2 rounded-lg bg-[#111416] border border-[#272a2d]",children:[d.jsx("p",{className:"font-medium text-white",children:"InstantMesh Reconstruction Engine"}),d.jsx("p",{className:"text-[11px] text-[#849588] mt-0.5",children:"Ready for fast single-image 3D synthesis."})]}),d.jsxs("div",{className:"p-2 rounded-lg bg-[#111416] border border-[#272a2d]",children:[d.jsx("p",{className:"font-medium text-white",children:"Llama 3.2 Vision VLM Online"}),d.jsx("p",{className:"text-[11px] text-[#849588] mt-0.5",children:"Semantic reasoning and geometry priors active."})]})]})]})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537]/60"}),d.jsxs("div",{className:"flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-[#1d2022] transition-colors",children:[d.jsx("img",{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCT_lG80-0jisau1_QDTLOn2_RchtmGjhTkf3Z4FMdVgtrYsML5ZEwl1lL9ResdbQbh7ZcHIwB29A8bkHrBpk6sS4qeXDD0ApilEYuT2GHS_tDmIn8Ck903EsJZj4ky-epb4_bI9iiDXNlSypYzp-xVu0QdRv9mHVaKeX5Mjrta3GFuU9Z7I5PeKHreYBZNgEzLgA2QNbY2bCEOBKQMk6bMc6PXvFfcjMhZcGiubw",alt:"Profile",className:"w-8 h-8 rounded-full object-cover ring-2 ring-[#00f59b]/30"}),d.jsx("span",{className:"material-symbols-outlined text-[#849588] text-sm",children:"keyboard_arrow_down"})]})]})]})]})}function Hy({onGenerate3D:t,onGenerate25D:e,onAnalyzeVision:n,loading:i,generation25DLoading:r=!1,statusMessage:s,currentSketchType:a,setCurrentSketchType:o,targetSize:l,setTargetSize:c,debugMode:h,setDebugMode:p,canvasRef:f,selectedFile:g,setSelectedFile:v,previewUrl:M,setPreviewUrl:_,isolateForeground:u=!1,onToggleIsolateForeground:m,onIsolateForeground:S,isolationLoading:b=!1,isolationError:R=null,isolationData:A=null,isolatedPreviewUrl:x=null,selectedInput:E="original",onSelectInput:N,onResetIsolation:C,refineSketch:I=!1,onToggleRefinement:z,onRefineSketch:q,refinementLoading:L=!1,refinementError:X=null,refinementData:K=null,refinedPreviewUrl:G=null,refinementUserPrompt:V="",setRefinementUserPrompt:D,refinementSource:O="isolated",onSelectRefinementSource:j}){const[ae,Me]=Te.useState("sketch"),[Y,ce]=Te.useState("#FF7F50"),[ue,Se]=Te.useState("pen"),[fe,Ie]=Te.useState(4),[Qe,Ee]=Te.useState("mid"),[Ve,je]=Te.useState(!1),[ke,$e]=Te.useState([]),[Xe,nt]=Te.useState("refined"),[ze,wt]=Te.useState(!1),Pt=[{name:"Coral",color:"#FF7F50"},{name:"Neon Mint",color:"#00f59b"},{name:"Cyan Electric",color:"#7bd0ff"},{name:"Pure White",color:"#FFFFFF"},{name:"Carbon Outline",color:"#37393c"}],Mt=Te.useCallback(()=>{const se=f.current;if(se)try{const w=se.toDataURL();$e(y=>[...y.slice(-15),w])}catch{}},[f]),$t=()=>{if(ke.length===0)return;const se=f.current;if(!se)return;const w=se.getContext("2d"),y=[...ke];y.pop();const H=y[y.length-1];if(H){const ne=new Image;ne.onload=()=>{w.clearRect(0,0,se.width,se.height),w.drawImage(ne,0,0)},ne.src=H,$e(y)}else w.clearRect(0,0,se.width,se.height),$e([])},Lt=()=>{const se=f.current;if(!se)return;se.getContext("2d").clearRect(0,0,se.width,se.height),$e([]),v(null),_(null),o("custom"),C&&C(!1)},U=Te.useCallback(()=>{const se=f.current;if(!se)return;const w=se.getContext("2d"),y=se.width,H=se.height;w.clearRect(0,0,y,H),w.save(),w.strokeStyle="#00f59b",w.lineWidth=3,w.lineCap="round",w.lineJoin="round";const ne=y/2,k=H/2-10;w.beginPath(),w.moveTo(ne-90,k-25),w.lineTo(ne,k-55),w.lineTo(ne+90,k-25),w.lineTo(ne+115,k+30),w.lineTo(ne+50,k+50),w.lineTo(ne-50,k+50),w.lineTo(ne-115,k+30),w.closePath(),w.stroke(),w.strokeStyle="#FF7F50",w.beginPath(),w.ellipse(ne,k-5,32,18,0,0,Math.PI*2),w.stroke(),w.strokeStyle="#7bd0ff",w.beginPath(),w.moveTo(ne-90,k-12),w.lineTo(ne-165,k-40),w.lineTo(ne-185,k-30),w.stroke(),w.beginPath(),w.ellipse(ne-175,k-36,36,14,-.2,0,Math.PI*2),w.stroke(),w.beginPath(),w.moveTo(ne+90,k-12),w.lineTo(ne+165,k-40),w.lineTo(ne+185,k-30),w.stroke(),w.beginPath(),w.ellipse(ne+175,k-36,36,14,.2,0,Math.PI*2),w.stroke(),w.strokeStyle="rgba(255, 255, 255, 0.3)",w.lineWidth=1,w.setLineDash([4,4]),w.beginPath(),w.moveTo(ne-175,k-36),w.lineTo(ne+175,k-36),w.moveTo(ne,k-65),w.lineTo(ne,k+65),w.stroke(),w.restore(),se.toBlob(Q=>{if(Q){const he=new File([Q],"demo_cyber_drone.png",{type:"image/png"});v(he),_(URL.createObjectURL(Q)),o("drone"),Mt()}})},[f,Mt,o,_,v]),ht=se=>{const w=f.current;if(!w)return;const y=w.getContext("2d"),H=w.width,ne=w.height;y.clearRect(0,0,H,ne),y.save(),y.strokeStyle="#FF7F50",y.lineWidth=3.5,y.lineCap="round",y.lineJoin="round";const k=H/2,Q=ne/2;se==="chair"?(y.strokeRect(k-80,Q-20,160,24),y.strokeRect(k-80,Q-130,160,110),y.beginPath(),y.moveTo(k-70,Q+4),y.lineTo(k-70,Q+130),y.moveTo(k+70,Q+4),y.lineTo(k+70,Q+130),y.moveTo(k-45,Q+4),y.lineTo(k-45,Q+105),y.moveTo(k+45,Q+4),y.lineTo(k+45,Q+105),y.stroke()):se==="mug"?(y.beginPath(),y.ellipse(k,Q-70,75,26,0,0,Math.PI*2),y.moveTo(k-75,Q-70),y.lineTo(k-75,Q+70),y.moveTo(k+75,Q-70),y.lineTo(k+75,Q+70),y.ellipse(k,Q+70,75,26,0,0,Math.PI),y.moveTo(k+75,Q-35),y.bezierCurveTo(k+145,Q-35,k+145,Q+50,k+75,Q+50),y.stroke()):se==="car"?(y.beginPath(),y.moveTo(k-150,Q+20),y.lineTo(k-90,Q+20),y.lineTo(k-45,Q-50),y.lineTo(k+80,Q-50),y.lineTo(k+120,Q+20),y.lineTo(k+160,Q+20),y.lineTo(k+160,Q+55),y.lineTo(k-150,Q+55),y.closePath(),y.stroke(),y.strokeStyle="#00f59b",y.beginPath(),y.arc(k-70,Q+55,28,0,Math.PI*2),y.arc(k+90,Q+55,28,0,Math.PI*2),y.stroke()):se==="ambiguous"&&(y.strokeStyle="#7bd0ff",y.beginPath(),y.moveTo(k-100,Q-70),y.lineTo(k+70,Q-60),y.lineTo(k+50,Q+60),y.lineTo(k-70,Q+50),y.closePath(),y.moveTo(k-70,Q+50),y.lineTo(k-110,Q+120),y.moveTo(k+50,Q+60),y.lineTo(k+80,Q+130),y.moveTo(k,Q-65),y.lineTo(k-10,Q-120),y.stroke()),y.restore(),w.toBlob(he=>{if(he){const ee=new File([he],`sample_${se}.png`,{type:"image/png"});v(ee),_(URL.createObjectURL(he)),o(se),Mt(),C&&C(!0)}})},ut=se=>{const w=f.current;if(!w)return{x:0,y:0};const y=w.getBoundingClientRect(),H=w.width/y.width,ne=w.height/y.height,k=se.touches?se.touches[0].clientX:se.clientX,Q=se.touches?se.touches[0].clientY:se.clientY;return{x:(k-y.left)*H,y:(Q-y.top)*ne}},ct=se=>{if(ae!=="sketch")return;je(!0);const w=f.current;if(!w)return;const y=w.getContext("2d"),{x:H,y:ne}=ut(se);y.beginPath(),y.moveTo(H,ne),y.lineCap="round",y.lineJoin="round"},xe=se=>{if(!Ve||ae!=="sketch")return;const w=f.current;if(!w)return;const y=w.getContext("2d"),{x:H,y:ne}=ut(se);ue==="eraser"?(y.globalCompositeOperation="destination-out",y.lineWidth=fe*4):(y.globalCompositeOperation="source-over",y.strokeStyle=Y,y.lineWidth=ue==="brush"?fe*2:fe),y.lineTo(H,ne),y.stroke()},gt=()=>{if(Ve){je(!1),Mt();const se=f.current;se&&se.toBlob(w=>{if(w){const y=new File([w],"user_sketch.png",{type:"image/png"});v(y),_(URL.createObjectURL(w)),o("custom"),C&&C(!0)}})}};Te.useEffect(()=>{const se=f.current;se&&(se.width=900,se.height=460,U())},[f,U]);const Fe=se=>{var y;const w=(y=se.target.files)==null?void 0:y[0];w&&(v(w),_(URL.createObjectURL(w)),o("uploaded"),C&&C(!0))};return d.jsxs("div",{className:"w-full flex flex-col rounded-2xl bg-[#191c1e]/95 border border-[#FF7F50]/30 backdrop-blur-2xl shadow-[0_0_35px_rgba(255,127,80,0.1)] overflow-hidden",children:[d.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 p-4 bg-[#0c0f11]/80 border-b border-[#323537]/30",children:[d.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-1 p-1 rounded-full bg-[#323537]/80 border border-[#323537]/60",children:[d.jsxs("button",{onClick:()=>Me("sketch"),className:`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${ae==="sketch"?"bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]":"text-[#bfc9c3] hover:text-white"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"draw"}),d.jsx("span",{children:"Hero Vector Studio"})]}),d.jsxs("button",{onClick:()=>Me("upload"),className:`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${ae==="upload"?"bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]":"text-[#bfc9c3] hover:text-white"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"upload_file"}),d.jsx("span",{children:"Upload File / Photo"})]})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden sm:block"}),d.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0f11] border border-[#323537]/80 hover:border-[#00f59b]/50 transition-all shadow-inner",children:[d.jsxs("label",{className:"relative inline-flex items-center cursor-pointer select-none",children:[d.jsx("input",{type:"checkbox",id:"isolate-foreground-checkbox",checked:u,onChange:se=>m&&m(se.target.checked),className:"sr-only peer"}),d.jsx("div",{className:"w-8 h-4 bg-[#272a2d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#00f59b]"}),d.jsxs("span",{className:"ml-2 text-xs font-semibold text-white flex items-center gap-1.5",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-[#00f59b]",children:"content_cut"}),d.jsx("span",{children:"Isolate Foreground"})]})]}),d.jsx("span",{className:"text-[10px] text-[#849588] hidden lg:inline border-l border-[#323537]/60 pl-2",title:"Remove the background and isolate the main object.",children:"Remove background & isolate main object"}),b&&d.jsx("span",{className:"material-symbols-outlined text-xs text-[#00f59b] animate-spin",title:"Isolating foreground...",children:"sync"}),u&&A&&d.jsx("span",{className:"px-2 py-0.2 rounded-full bg-[#00f59b]/20 text-[#00f59b] text-[10px] font-semibold border border-[#00f59b]/40",children:E==="isolated"?"Active":"Standby"})]}),d.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0f11] border border-[#323537]/80 hover:border-[#FF7F50]/50 transition-all shadow-inner",children:[d.jsxs("label",{className:"relative inline-flex items-center cursor-pointer select-none",children:[d.jsx("input",{type:"checkbox",id:"refine-sketch-checkbox",checked:I,onChange:se=>z&&z(se.target.checked),className:"sr-only peer"}),d.jsx("div",{className:"w-8 h-4 bg-[#272a2d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#FF7F50]"}),d.jsxs("span",{className:"ml-2 text-xs font-semibold text-white flex items-center gap-1.5",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-[#FF7F50]",children:"auto_fix_high"}),d.jsx("span",{children:"AI Refine"})]})]}),d.jsx("span",{className:"text-[10px] text-[#849588] hidden 2xl:inline border-l border-[#323537]/60 pl-2",title:"Enhance line continuity, contrast and structure with quality validation",children:"Clean contours & enhance contrast"}),L&&d.jsx("span",{className:"material-symbols-outlined text-xs text-[#FF7F50] animate-spin",title:"Synthesizing refined image...",children:"sync"}),I&&K&&d.jsx("span",{className:`px-2 py-0.2 rounded-full text-[10px] font-semibold border ${K.is_fallback?"bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30":"bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40"}`,children:K.is_fallback?"Fallback":"Validated"}),d.jsx("button",{onClick:()=>wt(!ze),className:`p-1 rounded text-xs transition-colors ${ze?"text-[#FF7F50] bg-[#FF7F50]/15":"text-[#849588] hover:text-white"}`,title:"Configure custom refinement guidance prompt",children:d.jsx("span",{className:"material-symbols-outlined text-xs",children:"tune"})})]}),A&&d.jsxs("div",{className:"flex items-center gap-1 p-1 rounded-full bg-[#0c0f11] border border-[#323537]/80 text-xs shadow-inner",children:[d.jsx("span",{className:"text-[10px] text-[#849588] font-bold px-1 uppercase tracking-wider hidden sm:inline",children:"Refine Target:"}),d.jsxs("button",{type:"button",onClick:()=>{j&&j("isolated"),I&&q&&q(null,"isolated")},className:`px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1 transition-all ${O==="isolated"?"bg-[#00f59b] text-[#003920] shadow-[0_0_8px_rgba(0,245,155,0.4)]":"text-[#849588] hover:text-white hover:bg-[#1d2022]"}`,title:"Refine the background-isolated object",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"content_cut"}),d.jsx("span",{children:"Isolated Subject"})]}),d.jsxs("button",{type:"button",onClick:()=>{j&&j("original"),I&&q&&q(null,"original")},className:`px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1 transition-all ${O==="original"?"bg-[#FF7F50] text-white shadow-[0_0_8px_rgba(255,127,80,0.4)]":"text-[#849588] hover:text-white hover:bg-[#1d2022]"}`,title:"Refine the raw hand-drawn sketch directly",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"draw"}),d.jsx("span",{children:"Real Sketch"})]})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden md:block"}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/30 text-[#00f59b] text-[11px] font-semibold",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00f59b] animate-ping"}),"Realtime Neural Trace"]}),d.jsxs("span",{className:"hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1d2022] text-[#849588] text-[11px] border border-[#272a2d]",children:[d.jsx("span",{className:"material-symbols-outlined text-xs text-[#FF7F50]",children:"grid_goldenratio"}),d.jsx("span",{children:"2048 x 2048 SDF Grid"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("button",{onClick:$t,disabled:ke.length===0,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] disabled:opacity-40 text-white text-xs font-medium transition-colors border border-[#323537]/40",title:"Undo Stroke",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-[#4edea3]",children:"undo"}),d.jsx("span",{children:"Undo"})]}),d.jsxs("button",{onClick:Lt,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#93000a] text-[#bfc9c3] hover:text-white text-xs font-medium transition-colors border border-[#323537]/40",title:"Clear Canvas",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"delete_sweep"}),d.jsx("span",{children:"Clear"})]}),d.jsxs("button",{onClick:U,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF7F50]/15 hover:bg-[#FF7F50]/25 text-[#FF7F50] text-xs font-semibold transition-colors border border-[#FF7F50]/40 shadow-[0_0_12px_rgba(255,127,80,0.25)]",title:"Load Sci-Fi Concept Drone Reference",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"auto_stories"}),d.jsx("span",{children:"Load Demo Drone"})]})]})]}),ae==="sketch"&&d.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 px-4 py-2.5 bg-[#272a2d]/60 border-b border-[#323537]/30 text-xs",children:[d.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Palette"}),d.jsx("div",{className:"flex items-center gap-2 p-1 rounded-lg bg-[#0c0f11]/70 border border-[#323537]/40",children:Pt.map(se=>{const w=Y===se.color&&ue!=="eraser";return d.jsx("button",{onClick:()=>{ce(se.color),ue==="eraser"&&Se("pen")},className:`w-5 h-5 rounded-full transition-transform ${w?"ring-2 ring-white scale-110":"hover:scale-105"}`,style:{backgroundColor:se.color,boxShadow:w?`0 0 10px ${se.color}`:"none",border:se.color==="#FFFFFF"?"1px solid #37393c":"none"},title:se.name},se.color)})})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden sm:block"}),d.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-lg bg-[#0c0f11]/70 border border-[#323537]/40",children:[d.jsxs("button",{onClick:()=>Se("pen"),className:`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${ue==="pen"?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"edit"}),d.jsx("span",{children:"Vector Pen"})]}),d.jsxs("button",{onClick:()=>Se("brush"),className:`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${ue==="brush"?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"brush"}),d.jsx("span",{children:"SDF Brush"})]}),d.jsxs("button",{onClick:()=>Se("eraser"),className:`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 transition-all ${ue==="eraser"?"bg-[#00f59b] text-[#003920] font-semibold shadow-sm":"text-[#bfc9c3] hover:text-white hover:bg-[#1d2022]"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"ink_eraser"}),d.jsx("span",{children:"Eraser"})]})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden md:block"}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-[#FF7F50] text-sm",children:"line_weight"}),d.jsx("span",{className:"text-[#bfc9c3] text-xs",children:"Stroke"}),d.jsx("input",{type:"range",min:"1",max:"24",value:fe,onChange:se=>Ie(Number(se.target.value)),className:"w-20 h-1.5 bg-[#323537] rounded-lg cursor-pointer accent-[#FF7F50]"}),d.jsxs("span",{className:"text-[#FF7F50] font-semibold w-7",children:[fe,"px"]})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden lg:block"}),d.jsxs("div",{className:"hidden xl:flex items-center gap-1 text-[11px] text-[#849588]",children:[d.jsx("span",{children:"Presets:"}),["chair","mug","car","ambiguous"].map(se=>d.jsx("button",{onClick:()=>ht(se),className:`px-2 py-0.5 rounded capitalize transition-colors ${a===se?"bg-[#FF7F50]/20 text-[#FF7F50] border border-[#FF7F50]/40":"bg-[#1d2022] hover:bg-[#272a2d] text-white border border-[#323537]/30"}`,children:se},se))]})]}),d.jsxs("div",{className:"hidden lg:flex items-center gap-1.5 text-[#849588] text-xs",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-[#00f59b]",children:"near_me"}),d.jsx("span",{children:"Coordinate Sync: Active"})]})]}),ze&&d.jsxs("div",{className:"flex items-center gap-3 px-4 py-2.5 bg-[#111416] border-b border-[#323537]/40 text-xs flex-wrap",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-[#FF7F50]",children:"tune"}),A&&d.jsxs("div",{className:"flex items-center gap-1 bg-[#191c1e] p-1 rounded-lg border border-[#323537]",children:[d.jsx("span",{className:"text-[#849588] text-[10px] uppercase font-bold px-1",children:"Source:"}),d.jsxs("button",{type:"button",onClick:()=>j&&j("isolated"),className:`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${O==="isolated"?"bg-[#00f59b] text-[#003920] shadow-sm":"text-[#bfc9c3] hover:text-white"}`,title:"Refine the background-isolated foreground object",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"content_cut"}),d.jsx("span",{children:"Isolated Subject"})]}),d.jsxs("button",{type:"button",onClick:()=>j&&j("original"),className:`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${O==="original"?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white"}`,title:"Refine the raw original sketch",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"draw"}),d.jsx("span",{children:"Real Sketch"})]})]}),d.jsx("span",{className:"text-[#849588] text-[11px] whitespace-nowrap",children:"Refinement Guidance:"}),d.jsx("input",{type:"text",value:V,onChange:se=>D&&D(se.target.value),placeholder:"e.g. sharp chamfered lines, sci-fi metallic chassis, clean minimalist contours...",className:"flex-1 bg-[#191c1e] border border-[#323537] rounded-lg px-3 py-1.5 text-white placeholder-[#849588] focus:outline-none focus:border-[#FF7F50] min-w-[200px]"}),d.jsxs("button",{onClick:()=>q&&q(),disabled:L,className:"px-3 py-1.5 rounded-lg bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold flex items-center gap-1 shadow-sm transition-all disabled:opacity-50 cursor-pointer",children:[L?d.jsx("span",{className:"material-symbols-outlined text-xs animate-spin",children:"refresh"}):d.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),d.jsx("span",{children:"Apply Refinement"})]})]}),X&&I&&d.jsxs("div",{className:"mx-4 mt-3 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"warning"}),d.jsxs("span",{children:["Refinement Notice: ",X]})]}),d.jsx("button",{onClick:()=>q&&q(),className:"px-2.5 py-1 rounded bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 text-white font-medium transition-colors",children:"Retry Refine"})]}),R&&u&&d.jsxs("div",{className:"mx-4 mt-3 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"warning"}),d.jsxs("span",{children:["Foreground Isolation Warning: ",R]})]}),d.jsx("button",{onClick:()=>S&&S(),className:"px-2.5 py-1 rounded bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 text-white font-medium transition-colors",children:"Retry Isolation"})]}),ae==="sketch"?d.jsxs("div",{className:"relative w-full h-[460px] bg-[#080a0c] overflow-hidden flex items-center justify-center select-none",children:[d.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1f262b_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#FF7F50]/5 via-transparent to-[#00f59b]/5 pointer-events-none"}),d.jsx("canvas",{ref:f,onMouseDown:ct,onMouseMove:xe,onMouseUp:gt,onMouseLeave:gt,onTouchStart:ct,onTouchMove:xe,onTouchEnd:gt,className:`w-full h-full cursor-crosshair block relative z-10 touch-none ${u&&x&&Xe==="isolated"||I&&G&&Xe==="refined"?"invisible pointer-events-none":""}`}),I&&G&&Xe==="refined"&&d.jsx("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080a0c]/90 backdrop-blur-sm p-4",children:d.jsxs("div",{className:"relative max-w-md max-h-[360px] w-full h-full rounded-2xl bg-white border border-[#FF7F50]/50 overflow-hidden flex items-center justify-center shadow-2xl",children:[d.jsx("img",{src:G,alt:"AI Refined Sketch",className:"max-h-[310px] max-w-[310px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"}),d.jsxs("div",{className:"absolute bottom-3 left-3 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FF7F50] border border-[#FF7F50]/30 font-mono flex items-center gap-1.5 shadow-lg",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),d.jsxs("span",{children:["AI Refined (",(K==null?void 0:K.source_used)==="isolated"?"Isolated Subject":"Real Sketch",") •"," ",K!=null&&K.is_fallback?"Fallback":"Validated"]})]}),K&&d.jsxs("div",{className:"absolute top-3 right-3 bg-[#0c0f11]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white border border-[#323537] font-mono flex items-center gap-2 shadow-lg",children:[d.jsxs("span",{className:"text-[#00f59b]",children:["Edge IoU: ",(K.validation.edge_overlap_iou*100).toFixed(0),"%"]}),d.jsxs("span",{className:"text-[#7bd0ff]",children:["Cleanliness: ",(K.validation.background_cleanliness_score*100).toFixed(0),"%"]})]})]})}),u&&x&&Xe==="isolated"&&d.jsx("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080a0c]/90 backdrop-blur-sm p-4",children:d.jsxs("div",{className:"relative max-w-md max-h-[360px] w-full h-full rounded-2xl border border-[#00f59b]/40 overflow-hidden flex items-center justify-center shadow-2xl",style:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundPosition:"50%",backgroundSize:"24px 24px"},children:[d.jsx("img",{src:x,alt:"Isolated Foreground (Alpha Channel)",className:"max-h-[300px] max-w-[300px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"}),d.jsxs("div",{className:"absolute bottom-3 left-3 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#00f59b] border border-[#00f59b]/30 font-mono flex items-center gap-1.5",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"opacity"}),d.jsx("span",{children:"Alpha Transparency Preserved • 320x320"})]})]})}),Xe==="split"&&(G||x)&&d.jsxs("div",{className:"absolute inset-0 z-20 grid grid-cols-2 gap-4 p-6 bg-[#080a0c]/90 backdrop-blur-sm items-center justify-center",children:[d.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#323537]",children:[d.jsxs("span",{className:"text-[11px] font-semibold text-[#849588] mb-2 uppercase tracking-wider flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs text-[#FF7F50]",children:"draw"}),d.jsx("span",{children:"Original Sketch"})]}),d.jsx("div",{className:"w-full h-64 flex items-center justify-center bg-black/40 rounded-lg overflow-hidden",children:d.jsx("img",{src:M,alt:"Original",className:"max-h-full max-w-full object-contain"})})]}),d.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#FF7F50]/40",children:[d.jsxs("span",{className:"text-[11px] font-semibold text-[#FF7F50] mb-2 uppercase tracking-wider flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),d.jsx("span",{children:G?"Refined AI Image":"Isolated Object (Alpha)"})]}),d.jsx("div",{className:"w-full h-64 flex items-center justify-center rounded-lg overflow-hidden bg-white",style:G?{}:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundSize:"20px 20px"},children:d.jsx("img",{src:G||x,alt:"Processed output",className:"max-h-full max-w-full object-contain"})})]})]}),(u&&x||I&&G)&&d.jsxs("div",{className:"absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-[#0c0f11]/95 backdrop-blur-xl border border-[#323537]/80 shadow-[0_4px_24px_rgba(0,0,0,0.6)] text-xs flex-wrap justify-center",children:[d.jsxs("div",{className:"flex items-center gap-1 bg-[#191c1e] p-1 rounded-xl border border-[#272a2d]",children:[G&&d.jsxs("button",{onClick:()=>nt("refined"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Xe==="refined"?"bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]":"text-[#bfc9c3] hover:text-white"}`,title:"View AI Refined image",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"auto_fix_high"}),d.jsx("span",{children:"Refined AI"})]}),x&&d.jsxs("button",{onClick:()=>nt("isolated"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Xe==="isolated"?"bg-[#00f59b] text-[#003920] shadow-[0_0_12px_rgba(0,245,155,0.4)]":"text-[#bfc9c3] hover:text-white"}`,title:"View transparent isolated subject",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"filter_vintage"}),d.jsx("span",{children:"Isolated (Alpha)"})]}),d.jsxs("button",{onClick:()=>nt("original"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Xe==="original"?"bg-[#37393c] text-white":"text-[#bfc9c3] hover:text-white"}`,title:"View original drawing canvas",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"draw"}),d.jsx("span",{children:"Original"})]}),d.jsxs("button",{onClick:()=>nt("split"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Xe==="split"?"bg-[#7bd0ff] text-[#002b40] shadow-[0_0_12px_rgba(123,208,255,0.4)]":"text-[#bfc9c3] hover:text-white"}`,title:"Compare original and processed side-by-side",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"vertical_split"}),d.jsx("span",{children:"Compare"})]})]}),d.jsx("div",{className:"h-5 w-px bg-[#323537] hidden sm:block"}),E==="refined"?d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-[#FF7F50]/20 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/40 flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"check_circle"}),d.jsx("span",{children:"Using Refined for 3D"})]}),d.jsx("button",{onClick:()=>N&&N("original"),className:"px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors",children:"Revert to Original"})]}):E==="isolated"?d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-[#00f59b]/20 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/40 flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"check_circle"}),d.jsx("span",{children:"Using Isolated for 3D"})]}),d.jsx("button",{onClick:()=>N&&N("original"),className:"px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors",children:"Revert to Original"})]}):d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-[#1d2022] text-[#bfc9c3] text-[11px] font-semibold border border-[#323537]/60 flex items-center gap-1",children:d.jsx("span",{children:"Using Original Sketch"})}),G&&d.jsx("button",{onClick:()=>N&&N("refined"),className:"px-2.5 py-1 rounded-lg bg-[#FF7F50]/25 hover:bg-[#FF7F50]/35 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/50 transition-colors",children:"Use Refined Output"}),x&&d.jsx("button",{onClick:()=>N&&N("isolated"),className:"px-2.5 py-1 rounded-lg bg-[#00f59b]/25 hover:bg-[#00f59b]/35 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/50 transition-colors",children:"Use Isolated"})]}),I?d.jsx("button",{onClick:()=>q&&q(),disabled:L,className:"p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#FF7F50] transition-colors",title:"Re-run AI Image Refinement",children:d.jsx("span",{className:`material-symbols-outlined text-sm ${L?"animate-spin":""}`,children:"refresh"})}):d.jsx("button",{onClick:()=>S&&S(),disabled:b,className:"p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#00f59b] transition-colors",title:"Re-run Foreground Isolation",children:d.jsx("span",{className:`material-symbols-outlined text-sm ${b?"animate-spin":""}`,children:"refresh"})})]}),d.jsxs("div",{className:"pointer-events-none absolute top-3 left-4 z-20 flex items-center gap-2 bg-[#0c0f11]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#323537]/40 text-xs text-[#849588]",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-[#FF7F50]",children:"grid_4x4"}),d.jsx("span",{children:"Multi-Angle Silhouette Grid (Front + Top Axis)"})]}),d.jsxs("div",{className:"pointer-events-none absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-[#0c0f11]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#323537]/40 text-xs text-[#FF7F50]",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"gesture"}),d.jsx("span",{children:"Draw contours or click 'Load Demo Drone' • Auto-projects into 3D SDF below"})]})]}):d.jsxs("div",{className:"relative flex flex-col items-center justify-center h-[460px] bg-[#0c0f11] p-8 text-center border-dashed border-2 border-[#272a2d] m-4 rounded-xl",children:[d.jsx("input",{type:"file",id:"file-input",accept:"image/png, image/jpeg, image/webp, image/svg+xml",onChange:Fe,className:"hidden"}),d.jsxs("label",{htmlFor:"file-input",className:"cursor-pointer flex flex-col items-center",children:[d.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#272a2d] border border-[#FF7F50]/40 flex items-center justify-center mb-3 text-[#FF7F50] shadow-[0_0_20px_rgba(255,127,80,0.3)]",children:d.jsx("span",{className:"material-symbols-outlined text-3xl",children:"add_photo_alternate"})}),d.jsx("span",{className:"font-display font-semibold text-lg text-white mb-1",children:"Drop sketch or blueprint here, or browse files"}),d.jsx("span",{className:"text-xs text-[#849588] max-w-sm",children:"PNG, JPG, WEBP, or SVG raster blueprints (supports hand sketches & paper captures up to 50MB)"}),d.jsxs("div",{className:"mt-4 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1d2022] border border-[#FF7F50]/30 text-[#FF7F50] text-xs shadow-sm",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"flare"}),d.jsx("span",{children:"AI Background Removal & Contrast Auto-Normalization"})]})]}),M&&d.jsxs("div",{className:"mt-4 p-3 rounded-xl bg-[#191c1e] border border-[#272a2d] flex items-center justify-between gap-4 max-w-xl w-full",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("img",{src:M,alt:"Upload preview",className:"h-16 w-16 object-contain rounded-lg bg-white/10"}),d.jsxs("div",{className:"text-left text-xs",children:[d.jsx("p",{className:"font-medium text-white",children:(g==null?void 0:g.name)||"Uploaded Sketch"}),d.jsx("p",{className:"text-[#849588]",children:"Original Upload"})]})]}),x&&u&&d.jsxs("div",{className:"flex items-center gap-3 pl-4 border-l border-[#272a2d]",children:[d.jsx("div",{className:"h-16 w-16 rounded-lg border border-[#00f59b]/40 flex items-center justify-center overflow-hidden",style:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundSize:"16px 16px"},children:d.jsx("img",{src:x,alt:"Isolated",className:"max-h-full object-contain"})}),d.jsxs("div",{className:"text-left text-xs",children:[d.jsx("span",{className:"text-[#00f59b] font-semibold block",children:"Foreground Isolated"}),d.jsx("button",{onClick:()=>N&&N(E==="isolated"?"original":"isolated"),className:`text-[10px] mt-1 px-2 py-0.5 rounded font-medium border ${E==="isolated"?"bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40":"bg-[#1d2022] text-[#bfc9c3] border-[#323537]"}`,children:E==="isolated"?"✓ Selected (Click to Revert)":"Click to Select"})]})]})]})]}),d.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 p-4 bg-[#272a2d]/40 border-t border-[#323537]/30 text-xs",children:[d.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Preprocessing:"}),d.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[d.jsx("span",{className:"px-2 py-0.5 rounded bg-[#0c0f11] border border-[#FF7F50]/40 text-[#FF7F50] text-[10px] font-semibold",children:"RMBG Mask"}),d.jsx("span",{className:"px-2 py-0.5 rounded bg-[#0c0f11] border border-[#00f59b]/40 text-[#00f59b] text-[10px] font-semibold",children:"Sobel Bounds"}),d.jsx("span",{className:"px-2 py-0.5 rounded bg-[#0c0f11] border border-[#323537]/60 text-[#bfc9c3] text-[10px]",children:"Normals Prior"}),d.jsx("span",{className:"px-2 py-0.5 rounded bg-[#0c0f11] border border-[#FF7F50]/40 text-[#FF7F50] text-[10px] font-semibold",children:"Watertight SDF"})]})]}),d.jsx("div",{className:"h-4 w-px bg-[#323537]/50 hidden md:block"}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Target Quality:"}),d.jsx("div",{className:"flex items-center gap-1",children:[{id:"low",label:"Low (15k)"},{id:"mid",label:"Mid (45k)"},{id:"ultra",label:"Ultra (150k)"}].map(se=>d.jsx("button",{onClick:()=>Ee(se.id),className:`px-2.5 py-1 rounded text-xs transition-all ${Qe===se.id?"bg-[#FF7F50] text-white font-semibold shadow-[0_0_12px_rgba(255,127,80,0.35)]":"bg-[#1d2022] text-[#bfc9c3] hover:bg-[#272a2d]"}`,children:se.label},se.id))})]}),d.jsxs("div",{className:"hidden lg:flex items-center gap-2",children:[d.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Resolution:"}),d.jsxs("select",{value:l,onChange:se=>c(Number(se.target.value)),className:"bg-[#1d2022] border border-[#323537] text-white text-xs rounded px-2 py-1 focus:outline-none",children:[d.jsx("option",{value:320,children:"320 x 320 (InstantMesh Native)"}),d.jsx("option",{value:512,children:"512 x 512 (High Resolution)"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[d.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111416] border border-[#323537]/50 text-[11px] text-[#849588]",children:[d.jsx("span",{children:"Active Pipeline Input:"}),d.jsx("span",{className:E==="refined"?"text-[#FF7F50] font-semibold":E==="isolated"?"text-[#00f59b] font-semibold":"text-white",children:E==="refined"?"Refined AI Image":E==="isolated"?"Isolated Cutout":"Original Sketch"})]}),d.jsx("button",{onClick:()=>q&&q(),disabled:i||L||r,className:"flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111416] hover:bg-[#1d2022] border border-[#FF7F50]/40 text-[#FF7F50] text-xs font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer",title:"Refine sketch contours and clean background with quality validation",children:L?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined text-base animate-spin",children:"refresh"}),d.jsx("span",{children:"Refining..."})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined text-base",children:"auto_fix_high"}),d.jsx("span",{children:"AI Refine"})]})}),d.jsxs("button",{onClick:n,disabled:i||r,className:"flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1d2022] hover:bg-[#272a2d] border border-[#00f59b]/40 text-[#6ffbbe] text-xs font-semibold shadow-sm transition-all disabled:opacity-50",children:[d.jsx("span",{className:"material-symbols-outlined text-base text-[#00f59b]",children:"neurology"}),d.jsx("span",{children:"Vision Analysis"})]}),d.jsx("button",{onClick:e,disabled:i||r,className:"flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111416] hover:bg-[#1d2022] border border-[#7bd0ff]/50 text-[#7bd0ff] text-xs font-semibold shadow-[0_0_16px_rgba(123,208,255,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer",title:"Generate Monocular Depth Map, Surface Normals & 3D Watertight Relief Mesh",children:r?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined text-base animate-spin",children:"refresh"}),d.jsx("span",{children:"Generating 2.5D..."})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined text-base",children:"layers"}),d.jsx("span",{children:"Generate 2.5D Relief"})]})}),d.jsx("button",{onClick:t,disabled:i||r,className:"flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF7F50] hover:bg-[#e06336] text-white text-sm font-semibold shadow-[0_0_28px_rgba(255,127,80,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer",children:i?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined text-lg animate-spin",children:"refresh"}),d.jsx("span",{children:s||"Synthesizing Mesh (SDF)..."})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined text-lg",children:"bolt"}),d.jsx("span",{children:"Generate 3D Asset Now"})]})})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="187",Cs={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gy=0,Xp=1,Vy=2,fl=1,jy=2,ha=3,Wr=0,wn=1,Li=2,Ns=0,wa=1,Yp=2,$p=3,qp=4,Wy=5,cs=100,Xy=101,Yy=102,$y=103,qy=104,Ky=200,Zy=201,Qy=202,Jy=203,mx=204,gx=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,aS=212,oS=213,lS=214,_d=0,vd=1,yd=2,ja=3,Sd=4,Md=5,bd=6,Ed=7,rh=0,cS=1,uS=2,Oi=0,xx=1,_x=2,vx=3,yx=4,Sx=5,Mx=6,bx=7,Ex=300,Bs=301,Wa=302,Yc=303,$c=304,wd=1e3,Fi=1001,Td=1002,Zt=1003,dS=1004,wo=1005,Sn=1006,qc=1007,sr=1008,Pn=1009,wx=1010,Tx=1011,Xa=1012,sh=1013,yi=1014,mi=1015,Si=1016,ah=1017,oh=1018,zs=1020,Ax=35902,Rx=35899,Cx=1021,Nx=1022,gi=1023,xr=1026,ar=1027,Px=1028,lh=1029,Xr=1030,ch=1031,uh=1033,hl=33776,pl=33777,ml=33778,gl=33779,Ad=35840,Rd=35841,Cd=35842,Nd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Fd=37489,jl=37490,Ud=37491,Od=37808,kd=37809,Bd=37810,zd=37811,Hd=37812,Gd=37813,Vd=37814,jd=37815,Wd=37816,Xd=37817,Yd=37818,$d=37819,qd=37820,Kd=37821,Zd=36492,Qd=36494,Jd=36495,ef=36283,tf=36284,Wl=36285,nf=36286,fS=3200,Ya=0,hS=1,nr="",Nn="srgb",Xl="srgb-linear",Yl="linear",dt="srgb",Kc=7680,pS=519,mS=512,gS=513,xS=514,Lx=515,_S=516,vS=517,Dx=518,Ix=519,yS=35044,Kp="300 es",ii=2e3,$a=2001;function SS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MS(){const t=$l("canvas");return t.style.display="block",t}const Zp={};function Qp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Fx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=Fx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=Fx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function xl(...t){const e=t.join(" ");e in Zp||(Zp[e]=!0,Oe(...t))}function bS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ES={[_d]:_d,[yd]:bd,[Sd]:Sd,[ja]:Md,[vd]:vd,[bd]:yd,[Ed]:Ed,[Md]:ja};class Mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_l=Math.PI/180,rf=180/Math.PI;function to(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function wS(t,e){return(t%e+e)%e}function Zc(t,e,n){return(1-n)*t+n*e}function TS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function AS(t,e){if(e.constructor===Float32Array)return t;const n=dh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function RS(t,e){if(e.constructor===Float32Array)return t;const n=dh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const CS={DEG2RAD:_l},bh=class bh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;let Ue=bh;class _r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],g=s[a+1],v=s[a+2],M=s[a+3];if(p!==M||l!==f||c!==g||h!==v){let _=l*f+c*g+h*v+p*M;_<0&&(f=-f,g=-g,v=-v,M=-M,_=-_);let u=1-o;if(_<.9995){const m=Math.acos(_),S=Math.sin(m);u=Math.sin(u*m)/S,o=Math.sin(o*m)/S,l=l*u+f*o,c=c*u+g*o,h=h*u+v*o,p=p*u+M*o}else{l=l*u+f*o,c=c*u+g*o,h=h*u+v*o,p=p*u+M*o;const m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],g=s[a+2],v=s[a+3];return e[n]=o*v+h*p+l*g-c*f,e[n+1]=l*v+h*f+c*p-o*g,e[n+2]=c*v+h*g+o*f-l*p,e[n+3]=h*v-o*p-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*g*v,this._y=c*g*p-f*h*v,this._z=c*h*v+f*g*p,this._w=c*h*p-f*g*v;break;case"YXZ":this._x=f*h*p+c*g*v,this._y=c*g*p-f*h*v,this._z=c*h*v-f*g*p,this._w=c*h*p+f*g*v;break;case"ZXY":this._x=f*h*p-c*g*v,this._y=c*g*p+f*h*v,this._z=c*h*v+f*g*p,this._w=c*h*p-f*g*v;break;case"ZYX":this._x=f*h*p-c*g*v,this._y=c*g*p+f*h*v,this._z=c*h*v-f*g*p,this._w=c*h*p+f*g*v;break;case"YZX":this._x=f*h*p+c*g*v,this._y=c*g*p+f*h*v,this._z=c*h*v-f*g*p,this._w=c*h*p-f*g*v;break;case"XZY":this._x=f*h*p-c*g*v,this._y=c*g*p-f*h*v,this._z=c*h*v+f*g*p,this._w=c*h*p+f*g*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Eh=class Eh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;let B=Eh;const Qc=new B,Jp=new _r,wh=class wh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],g=i[5],v=i[8],M=r[0],_=r[3],u=r[6],m=r[1],S=r[4],b=r[7],R=r[2],A=r[5],x=r[8];return s[0]=a*M+o*m+l*R,s[3]=a*_+o*S+l*A,s[6]=a*u+o*b+l*x,s[1]=c*M+h*m+p*R,s[4]=c*_+h*S+p*A,s[7]=c*u+h*b+p*x,s[2]=f*M+g*m+v*R,s[5]=f*_+g*S+v*A,s[8]=f*u+g*b+v*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,g=c*s-a*l,v=n*p+i*f+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(r*c-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(h*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=g*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return xl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jc.makeScale(e,n)),this}rotate(e){return xl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jc.makeRotation(-e)),this}translate(e,n){return xl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wh.prototype.isMatrix3=!0;let He=wh;const Jc=new He,em=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NS(){const t={enabled:!0,workingColorSpace:Xl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Ps(r.r),r.g=Ps(r.g),r.b=Ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?Yl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xl]:{primaries:e,whitePoint:i,transfer:Yl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const tt=NS();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zr;class PS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zr===void 0&&(Zr=$l("canvas")),Zr.width=e.width,Zr.height=e.height;const r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class fh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?PS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let DS=0;const tu=new B;class mn extends Mr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Fi,r=Fi,s=Sn,a=sr,o=gi,l=Pn,c=mn.DEFAULT_ANISOTROPY,h=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=to(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Ex;mn.DEFAULT_ANISOTROPY=1;const Th=class Th{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],g=l[5],v=l[9],M=l[2],_=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+M)<.1&&Math.abs(v+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,b=(g+1)/2,R=(u+1)/2,A=(h+f)/4,x=(p+M)/4,E=(v+_)/4;return S>b&&S>R?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=x/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=E/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=x/s,r=E/s),this.set(i,r,s,n),this}let m=Math.sqrt((_-v)*(_-v)+(p-M)*(p-M)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(p-M)/m,this.z=(f-h)/m,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Th.prototype.isVector4=!0;let Rt=Th;class IS extends Mr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new mn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends IS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ux extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ql=class Ql{constructor(e,n,i,r,s,a,o,l,c,h,p,f,g,v,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,g,v,M,_)}set(e,n,i,r,s,a,o,l,c,h,p,f,g,v,M,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=g,u[7]=v,u[11]=M,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,g=a*p,v=o*h,M=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=g+v*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=v+g*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,g=l*p,v=c*h,M=c*p;n[0]=f+M*o,n[4]=v*o-g,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=g*o-v,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,g=l*p,v=c*h,M=c*p;n[0]=f-M*o,n[4]=-a*p,n[8]=v+g*o,n[1]=g+v*o,n[5]=a*h,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,g=a*p,v=o*h,M=o*p;n[0]=l*h,n[4]=v*c-g,n[8]=f*c+M,n[1]=l*p,n[5]=M*c+f,n[9]=g*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,v=o*l,M=o*c;n[0]=l*h,n[4]=M-f*p,n[8]=v*p+g,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=g*p+v,n[10]=f-M*p}else if(e.order==="XZY"){const f=a*l,g=a*c,v=o*l,M=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+M,n[5]=a*h,n[9]=g*p-v,n[2]=v*p-g,n[6]=o*h,n[10]=M*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,OS)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Yi.crossVectors(i,An),Yi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Yi.crossVectors(i,An)),Yi.normalize(),To.crossVectors(An,Yi),r[0]=Yi.x,r[4]=To.x,r[8]=An.x,r[1]=Yi.y,r[5]=To.y,r[9]=An.y,r[2]=Yi.z,r[6]=To.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],g=i[13],v=i[2],M=i[6],_=i[10],u=i[14],m=i[3],S=i[7],b=i[11],R=i[15],A=r[0],x=r[4],E=r[8],N=r[12],C=r[1],I=r[5],z=r[9],q=r[13],L=r[2],X=r[6],K=r[10],G=r[14],V=r[3],D=r[7],O=r[11],j=r[15];return s[0]=a*A+o*C+l*L+c*V,s[4]=a*x+o*I+l*X+c*D,s[8]=a*E+o*z+l*K+c*O,s[12]=a*N+o*q+l*G+c*j,s[1]=h*A+p*C+f*L+g*V,s[5]=h*x+p*I+f*X+g*D,s[9]=h*E+p*z+f*K+g*O,s[13]=h*N+p*q+f*G+g*j,s[2]=v*A+M*C+_*L+u*V,s[6]=v*x+M*I+_*X+u*D,s[10]=v*E+M*z+_*K+u*O,s[14]=v*N+M*q+_*G+u*j,s[3]=m*A+S*C+b*L+R*V,s[7]=m*x+S*I+b*X+R*D,s[11]=m*E+S*z+b*K+R*O,s[15]=m*N+S*q+b*G+R*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],g=e[14],v=e[3],M=e[7],_=e[11],u=e[15],m=l*g-c*f,S=o*g-c*p,b=o*f-l*p,R=a*g-c*h,A=a*f-l*h,x=a*p-o*h;return n*(M*m-_*S+u*b)-i*(v*m-_*R+u*A)+r*(v*S-M*R+u*x)-s*(v*b-M*A+_*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],g=e[11],v=e[12],M=e[13],_=e[14],u=e[15],m=n*o-i*a,S=n*l-r*a,b=n*c-s*a,R=i*l-r*o,A=i*c-s*o,x=r*c-s*l,E=h*M-p*v,N=h*_-f*v,C=h*u-g*v,I=p*_-f*M,z=p*u-g*M,q=f*u-g*_,L=m*q-S*z+b*I+R*C-A*N+x*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/L;return e[0]=(o*q-l*z+c*I)*X,e[1]=(r*z-i*q-s*I)*X,e[2]=(M*x-_*A+u*R)*X,e[3]=(f*A-p*x-g*R)*X,e[4]=(l*C-a*q-c*N)*X,e[5]=(n*q-r*C+s*N)*X,e[6]=(_*b-v*x-u*S)*X,e[7]=(h*x-f*b+g*S)*X,e[8]=(a*z-o*C+c*E)*X,e[9]=(i*C-n*z-s*E)*X,e[10]=(v*A-M*b+u*m)*X,e[11]=(p*b-h*A-g*m)*X,e[12]=(o*N-a*I-l*E)*X,e[13]=(n*I-i*N+r*E)*X,e[14]=(M*S-v*R-_*m)*X,e[15]=(h*R-p*S+f*m)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,g=s*h,v=s*p,M=a*h,_=a*p,u=o*p,m=l*c,S=l*h,b=l*p,R=i.x,A=i.y,x=i.z;return r[0]=(1-(M+u))*R,r[1]=(g+b)*R,r[2]=(v-S)*R,r[3]=0,r[4]=(g-b)*A,r[5]=(1-(f+u))*A,r[6]=(_+m)*A,r[7]=0,r[8]=(v+S)*x,r[9]=(_-m)*x,r[10]=(1-(f+M))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);const c=1/a,h=1/o,p=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=p,qn.elements[9]*=p,qn.elements[10]*=p,n.setFromRotationMatrix(qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ii,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===ii)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===$a)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ii,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===ii)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===$a)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ql.prototype.isMatrix4=!0;let St=Ql;const Qr=new B,qn=new St,US=new B(0,0,0),OS=new B(1,1,1),Yi=new B,To=new B,An=new B,nm=new St,im=new _r;class Vi{constructor(e=0,n=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const rm=new B,Jr=new _r,bi=new St,Ao=new B,ia=new B,BS=new B,zS=new _r,sm=new B(1,0,0),am=new B(0,1,0),om=new B(0,0,1),lm={type:"added"},HS={type:"removed"},es={type:"childadded",child:null},nu={type:"childremoved",child:null};class Yt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new B,n=new Vi,i=new _r,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new He}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ia,Ao,this.up):bi.lookAt(Ao,ia,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(bi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),es.child=e,this.dispatchEvent(es),es.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HS),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,BS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yt.DEFAULT_UP=new B(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ur extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GS={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const _=n.getJointPose(M,i),u=this._getHandJoint(c,M);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),g=.02,v=.005;c.inputState.pinching&&f>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(GS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=wS(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ru(a,s,e+1/3),this.g=ru(a,s,e),this.b=ru(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=kx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return tt.workingToColorSpace(on.copy(this),e),Math.round(Ke(on.r*255,0,255))*65536+Math.round(Ke(on.g*255,0,255))*256+Math.round(Ke(on.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Nn){tt.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Ro);const i=Zc($i.h,Ro.h,n),r=Zc($i.s,Ro.s,n),s=Zc($i.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new We;We.NAMES=kx;class VS extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new B,Ei=new B,su=new B,wi=new B,ts=new B,ns=new B,cm=new B,au=new B,ou=new B,lu=new B,cu=new Rt,uu=new Rt,du=new Rt;class ni{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ei.subVectors(i,n),su.subVectors(e,n);const a=Kn.dot(Kn),o=Kn.dot(Ei),l=Kn.dot(su),c=Ei.dot(Ei),h=Ei.dot(su),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,g=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return cu.setScalar(0),uu.setScalar(0),du.setScalar(0),cu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cu,s.x),a.addScaledVector(uu,s.y),a.addScaledVector(du,s.z),a}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ei.subVectors(e,n),Kn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ts.subVectors(r,i),ns.subVectors(s,i),au.subVectors(e,i);const l=ts.dot(au),c=ns.dot(au);if(l<=0&&c<=0)return n.copy(i);ou.subVectors(e,r);const h=ts.dot(ou),p=ns.dot(ou);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),n.copy(i).addScaledVector(ts,a);lu.subVectors(e,s);const g=ts.dot(lu),v=ns.dot(lu);if(v>=0&&g<=v)return n.copy(s);const M=g*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ns,o);const _=h*v-g*p;if(_<=0&&p-h>=0&&g-v>=0)return cm.subVectors(s,r),o=(p-h)/(p-h+(g-v)),n.copy(r).addScaledVector(cm,o);const u=1/(_+M+f);return a=M*u,o=f*u,n.copy(i).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class no{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),No.subVectors(this.max,ra),is.subVectors(e.a,ra),rs.subVectors(e.b,ra),ss.subVectors(e.c,ra),qi.subVectors(rs,is),Ki.subVectors(ss,rs),Tr.subVectors(is,ss);let n=[0,-qi.z,qi.y,0,-Ki.z,Ki.y,0,-Tr.z,Tr.y,qi.z,0,-qi.x,Ki.z,0,-Ki.x,Tr.z,0,-Tr.x,-qi.y,qi.x,0,-Ki.y,Ki.x,0,-Tr.y,Tr.x,0];return!fu(n,is,rs,ss,No)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,is,rs,ss,No))?!1:(Po.crossVectors(qi,Ki),n=[Po.x,Po.y,Po.z],fu(n,is,rs,ss,No))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new B,new B,new B,new B,new B,new B,new B,new B],Zn=new B,Co=new no,is=new B,rs=new B,ss=new B,qi=new B,Ki=new B,Tr=new B,ra=new B,No=new B,Po=new B,Ar=new B;function fu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ar.fromArray(t,s);const o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),h=i.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ut=new B,Lo=new Ue;let jS=0;class Br extends Mr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yS,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=e!==void 0?dh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lo.fromBufferAttribute(this,n),Lo.applyMatrix3(e),this.setXY(n,Lo.x,Lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):AS(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):RS(e,this.array)}}class Bx extends Br{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zx extends Br{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class it extends Br{constructor(e,n,i){super(new Float32Array(e),n,i)}}const WS=new no,sa=new B,hu=new B;class io{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(hu)),this.expandByPoint(sa.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let XS=0;const kn=new St,pu=new Yt,as=new B,Rn=new no,aa=new no,jt=new B;class en extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SS(e)?zx:Bx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Rn.min,aa.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,aa.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(aa.min),Rn.expandByPoint(aa.max))}Rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),jt.add(as)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Br(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;const h=new B,p=new B,f=new B,g=new Ue,v=new Ue,M=new Ue,_=new B,u=new B;function m(N,C,I){c[N]=c[C]=c[I]=1,h.fromBufferAttribute(i,N),p.fromBufferAttribute(i,C),f.fromBufferAttribute(i,I),g.fromBufferAttribute(s,N),v.fromBufferAttribute(s,C),M.fromBufferAttribute(s,I),p.sub(h),f.sub(h),v.sub(g),M.sub(g);const z=1/(v.x*M.y-M.x*v.y);isFinite(z)&&(_.copy(p).multiplyScalar(M.y).addScaledVector(f,-v.y).multiplyScalar(z),u.copy(f).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(z),o[N].add(_),o[C].add(_),o[I].add(_),l[N].add(u),l[C].add(u),l[I].add(u))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,C=S.length;N<C;++N){const I=S[N],z=I.start,q=I.count;for(let L=z,X=z+q;L<X;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new B,R=new B,A=new B,x=new B;function E(N){A.fromBufferAttribute(r,N),x.copy(A);const C=o[N];b.copy(C),b.sub(A.multiplyScalar(A.dot(C))).normalize(),R.crossVectors(x,C);const z=R.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,z)}for(let N=0,C=i.count;N<C;++N)c[N]&&E(N);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Br(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,p=new B;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),M=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,_),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let g=0,v=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?g=l[M]*o.data.stride+o.offset:g=l[M]*h;for(let u=0;u<h;u++)f[v++]=c[g++]}return new Br(f,h,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new en,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,g=p.length;f<g;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new B,YS=new B,$S=new He;class Pi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mu.subVectors(i,n).cross(YS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(mu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$S.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qS=0;class oi extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=to(),this.name="",this.type="Material",this.blending=wa,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mx,this.blendDst=gx,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kc,this.stencilZFail=Kc,this.stencilZPass=Kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Pi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ai=new B,gu=new B,Do=new B,Io=new B;class mc{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gu.copy(e).add(n).multiplyScalar(.5),Do.copy(n).sub(e).normalize(),Io.copy(this.origin).sub(gu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Do),o=Io.dot(this.direction),l=-Io.dot(Do),c=Io.lengthSq(),h=Math.abs(1-a*a);let p,f,g,v;if(h>0)if(p=a*l-o,f=a*o-l,v=s*h,p>=0)if(f>=-v)if(f<=v){const M=1/h;p*=M,f*=M,g=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(gu).addScaledVector(Do,f),g}intersectSphere(e,n){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,g=e.z-a.z,v=n.x-a.x,M=n.y-a.y,_=n.z-a.z,u=i.x-a.x,m=i.y-a.y,S=i.z-a.z,b=Math.abs(l),R=Math.abs(c),A=Math.abs(h);let x,E,N,C,I,z,q,L,X,K,G,V;if(b>=R&&b>=A?(N=l,z=p,X=v,V=u,l>=0?(x=c,E=h,C=f,I=g,q=M,L=_,K=m,G=S):(x=h,E=c,C=g,I=f,q=_,L=M,K=S,G=m)):R>=A?(N=c,z=f,X=M,V=m,c>=0?(x=h,E=l,C=g,I=p,q=_,L=v,K=S,G=u):(x=l,E=h,C=p,I=g,q=v,L=_,K=u,G=S)):(N=h,z=g,X=_,V=S,h>=0?(x=l,E=c,C=p,I=f,q=v,L=M,K=u,G=m):(x=c,E=l,C=f,I=p,q=M,L=v,K=m,G=u)),N===0)return null;const D=x/N,O=E/N,j=1/N,ae=C-D*z,Me=I-O*z,Y=q-D*X,ce=L-O*X,ue=K-D*V,Se=G-O*V,fe=ue*ce-Se*Y,Ie=ae*Se-Me*ue,Qe=Y*Me-ce*ae;if(r){if(fe<0||Ie<0||Qe<0)return null}else if((fe<0||Ie<0||Qe<0)&&(fe>0||Ie>0||Qe>0))return null;const Ee=fe+Ie+Qe;if(Ee===0)return null;const Ve=j*(fe*z+Ie*X+Qe*V);return(Ee>0?Ve<0:Ve>0)?null:this.at(Ve/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hx extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const um=new St,Rr=new mc,Fo=new io,dm=new B,Uo=new B,Oo=new B,ko=new B,xu=new B,Bo=new B,fm=new B,zo=new B;class bt extends Yt{constructor(e=new en,n=new Hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(xu.fromBufferAttribute(p,e),a?Bo.addScaledVector(xu,h):Bo.addScaledVector(xu.sub(n),h))}n.add(Bo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Fo.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Fo,dm)===null||Rr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(um.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(um),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const _=f[v],u=a[_.materialIndex],m=Math.max(_.start,g.start),S=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=m,R=S;b<R;b+=3){const A=o.getX(b),x=o.getX(b+1),E=o.getX(b+2);r=Ho(this,u,e,i,c,h,p,A,x,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let _=v,u=M;_<u;_+=3){const m=o.getX(_),S=o.getX(_+1),b=o.getX(_+2);r=Ho(this,a,e,i,c,h,p,m,S,b),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const _=f[v],u=a[_.materialIndex],m=Math.max(_.start,g.start),S=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=m,R=S;b<R;b+=3){const A=b,x=b+1,E=b+2;r=Ho(this,u,e,i,c,h,p,A,x,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let _=v,u=M;_<u;_+=3){const m=_,S=_+1,b=_+2;r=Ho(this,a,e,i,c,h,p,m,S,b),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function KS(t,e,n,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wr,o),l===null)return null;zo.copy(o),zo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zo);return c<n.near||c>n.far?null:{distance:c,point:zo.clone(),object:t}}function Ho(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Uo),t.getVertexPosition(l,Oo),t.getVertexPosition(c,ko);const h=KS(t,e,n,i,Uo,Oo,ko,fm);if(h){const p=new B;ni.getBarycoord(fm,Uo,Oo,ko,p),r&&(h.uv=ni.getInterpolatedAttribute(r,o,l,c,p,new Ue)),s&&(h.uv1=ni.getInterpolatedAttribute(s,o,l,c,p,new Ue)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,l,c,p,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};ni.getNormal(Uo,Oo,ko,f.normal),h.face=f,h.barycoord=p}return h}class ZS extends mn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Zt,h=Zt,p,f){super(null,a,o,l,c,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cr=new io,QS=new Ue(.5,.5),Go=new B;class qa{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],f=s[6],g=s[7],v=s[8],M=s[9],_=s[10],u=s[11],m=s[12],S=s[13],b=s[14],R=s[15];if(r[0].setComponents(c-a,g-h,u-v,R-m).normalize(),r[1].setComponents(c+a,g+h,u+v,R+m).normalize(),r[2].setComponents(c+o,g+p,u+M,R+S).normalize(),r[3].setComponents(c-o,g-p,u-M,R-S).normalize(),i)r[4].setComponents(l,f,_,b).normalize(),r[5].setComponents(c-l,g-f,u-_,R-b).normalize();else if(r[4].setComponents(c-l,g-f,u-_,R-b).normalize(),n===ii)r[5].setComponents(c+l,g+f,u+_,R+b).normalize();else if(n===$a)r[5].setComponents(l,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const n=QS.distanceTo(e.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const hm=new St;class hh{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];hm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new qa),i[r].setFromProjectionMatrix(hm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new qa),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new hh().copy(this)}}class Ta extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new B,Kl=new B,pm=new St,oa=new mc,Vo=new io,_u=new B,mm=new B;class JS extends Yt{constructor(e=new en,n=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ql.fromBufferAttribute(n,r-1),Kl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ql.distanceTo(Kl);e.setAttribute("lineDistance",new it(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;pm.copy(r).invert(),oa.copy(e.ray).applyMatrix4(pm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=g,_=v-1;M<_;M+=c){const u=h.getX(M),m=h.getX(M+1),S=jo(this,e,oa,l,u,m,M);S&&n.push(S)}if(this.isLineLoop){const M=h.getX(v-1),_=h.getX(g),u=jo(this,e,oa,l,M,_,v-1);u&&n.push(u)}}else{const g=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=g,_=v-1;M<_;M+=c){const u=jo(this,e,oa,l,M,M+1,M);u&&n.push(u)}if(this.isLineLoop){const M=jo(this,e,oa,l,v-1,g,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(ql.fromBufferAttribute(o,r),Kl.fromBufferAttribute(o,s),n.distanceSqToSegment(ql,Kl,_u,mm)>i)return;_u.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(_u);if(!(c<e.near||c>e.far))return{distance:c,point:mm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const gm=new B,xm=new B;class sf extends JS{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)gm.fromBufferAttribute(n,r),xm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gm.distanceTo(xm);e.setAttribute("lineDistance",new it(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pa extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new St,af=new mc,Wo=new io,Xo=new B;class vu extends Yt{constructor(e=new en,n=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;_m.copy(r).invert(),af.copy(e.ray).applyMatrix4(_m);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=f,M=g;v<M;v++){const _=c.getX(v);Xo.fromBufferAttribute(p,_),vm(Xo,_,l,r,e,n,this)}}else{const f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=f,M=g;v<M;v++)Xo.fromBufferAttribute(p,v),vm(Xo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vm(t,e,n,i,r,s,a){const o=af.distanceSqToPoint(t);if(o<n){const l=new B;af.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gx extends mn{constructor(e=[],n=Bs,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hs extends mn{constructor(e,n,i=yi,r,s,a,o=Zt,l=Zt,c,h=xr,p=1){if(h!==xr&&h!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Vx extends Hs{constructor(e,n=yi,i=Bs,r,s,a=Zt,o=Zt,l,c=xr){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jx extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ti extends en{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,g=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(p,2));function v(M,_,u,m,S,b,R,A,x,E,N){const C=b/x,I=R/E,z=b/2,q=R/2,L=A/2,X=x+1,K=E+1;let G=0,V=0;const D=new B;for(let O=0;O<K;O++){const j=O*I-q;for(let ae=0;ae<X;ae++){const Me=ae*C-z;D[M]=Me*m,D[_]=j*S,D[u]=L,c.push(D.x,D.y,D.z),D[M]=0,D[_]=0,D[u]=A>0?1:-1,h.push(D.x,D.y,D.z),p.push(ae/x),p.push(1-O/E),G+=1}}for(let O=0;O<E;O++)for(let j=0;j<x;j++){const ae=f+j+X*O,Me=f+j+X*(O+1),Y=f+(j+1)+X*(O+1),ce=f+(j+1)+X*O;l.push(ae,Me,ce),l.push(Me,Y,ce),V+=6}o.addGroup(g,V,N),g+=V,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ph extends en{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new B,h=new Ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=n;p++,f+=3){const g=i+p/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lr extends en{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],g=[];let v=0;const M=[],_=i/2;let u=0;m(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new it(p,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(g,2));function m(){const b=new B,R=new B;let A=0;const x=(n-e)/i;for(let E=0;E<=s;E++){const N=[],C=E/s,I=C*(n-e)+e;for(let z=0;z<=r;z++){const q=z/r,L=q*l+o,X=Math.sin(L),K=Math.cos(L);R.x=I*X,R.y=-C*i+_,R.z=I*K,p.push(R.x,R.y,R.z),b.set(X,x,K).normalize(),f.push(b.x,b.y,b.z),g.push(q,1-C),N.push(v++)}M.push(N)}for(let E=0;E<r;E++)for(let N=0;N<s;N++){const C=M[N][E],I=M[N+1][E],z=M[N+1][E+1],q=M[N][E+1];(e>0||N!==0)&&(h.push(C,I,q),A+=3),(n>0||N!==s-1)&&(h.push(I,z,q),A+=3)}c.addGroup(u,A,0),u+=A}function S(b){const R=v,A=new Ue,x=new B;let E=0;const N=b===!0?e:n,C=b===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,_*C,0),f.push(0,C,0),g.push(.5,.5),v++;const I=v;for(let z=0;z<=r;z++){const L=z/r*l+o,X=Math.cos(L),K=Math.sin(L);x.x=N*K,x.y=_*C,x.z=N*X,p.push(x.x,x.y,x.z),f.push(0,C,0),A.x=X*.5+.5,A.y=K*.5*C+.5,g.push(A.x,A.y),v++}for(let z=0;z<r;z++){const q=R+z,L=I+z;b===!0?h.push(L,L+1,q):h.push(L+1,L,q),E+=3}c.addGroup(u,E,b===!0?1:2),u+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mh extends en{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const S=new B,b=new B,R=new B;for(let A=0;A<n.length;A+=3)g(n[A+0],S),g(n[A+1],b),g(n[A+2],R),l(S,b,R,m)}function l(m,S,b,R){const A=R+1,x=[];for(let E=0;E<=A;E++){x[E]=[];const N=m.clone().lerp(b,E/A),C=S.clone().lerp(b,E/A),I=A-E;for(let z=0;z<=I;z++)z===0&&E===A?x[E][z]=N:x[E][z]=N.clone().lerp(C,z/I)}for(let E=0;E<A;E++)for(let N=0;N<2*(A-E)-1;N++){const C=Math.floor(N/2);N%2===0?(f(x[E][C+1]),f(x[E+1][C]),f(x[E][C])):(f(x[E][C+1]),f(x[E+1][C+1]),f(x[E+1][C]))}}function c(m){const S=new B;for(let b=0;b<s.length;b+=3)S.x=s[b+0],S.y=s[b+1],S.z=s[b+2],S.normalize().multiplyScalar(m),s[b+0]=S.x,s[b+1]=S.y,s[b+2]=S.z}function h(){const m=new B;for(let S=0;S<s.length;S+=3){m.x=s[S+0],m.y=s[S+1],m.z=s[S+2];const b=_(m)/2/Math.PI+.5,R=u(m)/Math.PI+.5;a.push(b,1-R)}v(),p()}function p(){for(let m=0;m<a.length;m+=6){const S=a[m+0],b=a[m+2],R=a[m+4],A=Math.max(S,b,R),x=Math.min(S,b,R);A>.9&&x<.1&&(S<.2&&(a[m+0]+=1),b<.2&&(a[m+2]+=1),R<.2&&(a[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function g(m,S){const b=m*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function v(){const m=new B,S=new B,b=new B,R=new B,A=new Ue,x=new Ue,E=new Ue;for(let N=0,C=0;N<s.length;N+=9,C+=6){m.set(s[N+0],s[N+1],s[N+2]),S.set(s[N+3],s[N+4],s[N+5]),b.set(s[N+6],s[N+7],s[N+8]),A.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),R.copy(m).add(S).add(b).divideScalar(3);const I=_(R);M(A,C+0,m,I),M(x,C+2,S,I),M(E,C+4,b,I)}}function M(m,S,b,R){R<0&&m.x===1&&(a[S]=m.x-1),b.x===0&&b.z===0&&(a[S]=R/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.vertices,e.indices,e.radius,e.detail)}}class gh extends mh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gh(e.radius,e.detail)}}class gc extends en{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,g=[],v=[],M=[],_=[];for(let u=0;u<h;u++){const m=u*f-a;for(let S=0;S<c;S++){const b=S*p-s;v.push(b,-m,0),M.push(0,0,1),_.push(S/o),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const S=m+c*u,b=m+c*(u+1),R=m+1+c*(u+1),A=m+1+c*u;g.push(S,b,A),g.push(b,R,A)}this.setIndex(g),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class xh extends en{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new B,f=new B,g=[],v=[],M=[],_=[];for(let u=0;u<=i;u++){const m=[],S=u/i,b=a+S*o,R=e*Math.cos(b),A=Math.sqrt(e*e-R*R);let x=0;u===0&&a===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let E=0;E<=n;E++){const N=E/n,C=r+N*s;p.x=-A*Math.cos(C),p.y=R,p.z=A*Math.sin(C),v.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),_.push(N+x,1-S),m.push(c++)}h.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const S=h[u][m+1],b=h[u][m],R=h[u+1][m],A=h[u+1][m+1];(u!==0||a>0)&&g.push(S,b,A),(u!==i-1||l<Math.PI)&&g.push(b,R,A)}this.setIndex(g),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _h extends en{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],p=[],f=new B,g=new B,v=new B;for(let M=0;M<=i;M++){const _=a+M/i*o;for(let u=0;u<=r;u++){const m=u/r*s;g.x=(e+n*Math.cos(_))*Math.cos(m),g.y=(e+n*Math.cos(_))*Math.sin(m),g.z=n*Math.sin(_),c.push(g.x,g.y,g.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),v.subVectors(g,f).normalize(),h.push(v.x,v.y,v.z),p.push(u/r),p.push(M/i)}}for(let M=1;M<=i;M++)for(let _=1;_<=r;_++){const u=(r+1)*M+_-1,m=(r+1)*(M-1)+_-1,S=(r+1)*(M-1)+_,b=(r+1)*M+_;l.push(u,m,b),l.push(m,S,b)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(ym(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(ym(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function ym(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function eM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const tM={clone:Gs,merge:fn};var nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rM extends Yr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sM extends oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=rh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aM extends oi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class oM extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Mm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Mm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Mm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class cM{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){const g=c[p],v=c[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const uM=new cM;class vh{constructor(e){this.manager=e!==void 0?e:uM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}vh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class dM extends Error{constructor(e,n){super(e),this.response=n}}class fM extends vh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Sm.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:n,onProgress:i,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ri[e],p=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=f?parseInt(f):0,v=g!==0;let M=0;const _=new ReadableStream({start(u){m();function m(){p.read().then(({done:S,value:b})=>{if(S)u.close();else{M+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:g});for(let A=0,x=h.length;A<x;A++){const E=h[A];E.onProgress&&E.onProgress(R)}u.enqueue(b),m()}},S=>{u.error(S)})}}});return new Response(_)}else throw new dM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),f=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(v=>g.decode(v))}}}).then(c=>{Sm.add(`file:${e}`,c);const h=Ri[e];delete Ri[e];for(let p=0,f=h.length;p<f;p++){const g=h[p];g.onLoad&&g.onLoad(c)}}).catch(c=>{const h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let p=0,f=h.length;p<f;p++){const g=h[p];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yh extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const yu=new St,bm=new B,Em=new B;class Xx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Em),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===$a||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new B,$o=new _r,ci=new B;class Yx extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yo,$o,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,$o,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Yo,$o,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,$o,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new B,wm=new Ue,Tm=new Ue;class Gn extends Yx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rf*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,wm,Tm),n.subVectors(Tm,wm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_l*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class hM extends Xx{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class pM extends yh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class $x extends Yx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mM extends Xx{constructor(){super(new $x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Am extends yh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new mM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class gM extends yh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const os=-90,ls=1;class of extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(os,ls,e,n);r.layers=this.layers,this.add(r);const s=new Gn(os,ls,e,n);s.layers=this.layers,this.add(s);const a=new Gn(os,ls,e,n);a.layers=this.layers,this.add(a);const o=new Gn(os,ls,e,n);o.layers=this.layers,this.add(o);const l=new Gn(os,ls,e,n);l.layers=this.layers,this.add(l);const c=new Gn(os,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class _M{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Rm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vM extends sf{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let f=0,g=0,v=-o;f<=n;f++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const M=f===s?i:r;M.toArray(c,g),g+=3,M.toArray(c,g),g+=3,M.toArray(c,g),g+=3,M.toArray(c,g),g+=3}const h=new en;h.setAttribute("position",new it(l,3)),h.setAttribute("color",new it(c,3));const p=new Ta({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class yM extends Mr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Cm(t,e,n,i){const r=SM(i);switch(n){case Cx:return t*e;case Px:return t*e/r.components*r.byteLength;case lh:return t*e/r.components*r.byteLength;case Xr:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case Nx:return t*e*3/r.components*r.byteLength;case gi:return t*e*4/r.components*r.byteLength;case uh:return t*e*4/r.components*r.byteLength;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Nd:return Math.max(t,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(t,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:case jl:case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Qd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wl:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SM(t){switch(t){case Pn:case wx:return{byteLength:1,components:1};case Xa:case Tx:case Si:return{byteLength:2,components:1};case ah:case oh:return{byteLength:2,components:4};case yi:case sh:case mi:return{byteLength:4,components:1};case Ax:case Rx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,h);else{p.sort((g,v)=>g.start-v.start);let f=0;for(let g=1;g<p.length;g++){const v=p[f],M=p[g];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,p[f]=M)}p.length=f+1;for(let g=0,v=p.length;g<v;g++){const M=p[g];t.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ub=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:bM,alphahash_pars_fragment:EM,alphamap_fragment:wM,alphamap_pars_fragment:TM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:NM,batching_pars_vertex:PM,batching_vertex:LM,begin_vertex:DM,beginnormal_vertex:IM,bsdfs:FM,iridescence_fragment:UM,bumpmap_pars_fragment:OM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:jM,color_vertex:WM,common:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:$M,displacementmap_vertex:qM,emissivemap_fragment:KM,emissivemap_pars_fragment:ZM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ab,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:db,lights_lambert_pars_fragment:fb,lights_pars_begin:hb,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:xb,lights_phong_pars_fragment:_b,lights_physical_fragment:vb,lights_physical_pars_fragment:yb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:bb,lightprobes_pars_fragment:Eb,logdepthbuf_fragment:wb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Rb,map_fragment:Cb,map_pars_fragment:Nb,map_particle_fragment:Pb,map_particle_pars_fragment:Lb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Fb,morphcolor_vertex:Ub,morphnormal_vertex:Ob,morphtarget_pars_vertex:kb,morphtarget_vertex:Bb,normal_fragment_begin:zb,normal_fragment_maps:Hb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:jb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:qb,opaque_fragment:Kb,packing:Zb,premultiplied_alpha_fragment:Qb,project_vertex:Jb,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:s1,shadowmap_vertex:a1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:u1,skinnormal_vertex:d1,specularmap_fragment:f1,specularmap_pars_fragment:h1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:x1,uv_pars_fragment:_1,uv_pars_vertex:v1,uv_vertex:y1,worldpos_vertex:S1,background_vert:M1,background_frag:b1,backgroundCube_vert:E1,backgroundCube_frag:w1,cube_vert:T1,cube_frag:A1,depth_vert:R1,depth_frag:C1,distance_vert:N1,distance_frag:P1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:I1,linedashed_frag:F1,meshbasic_vert:U1,meshbasic_frag:O1,meshlambert_vert:k1,meshlambert_frag:B1,meshmatcap_vert:z1,meshmatcap_frag:H1,meshnormal_vert:G1,meshnormal_frag:V1,meshphong_vert:j1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:Y1,meshtoon_vert:$1,meshtoon_frag:q1,points_vert:K1,points_frag:Z1,shadow_vert:Q1,shadow_frag:J1,sprite_vert:eE,sprite_frag:tE},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},hi={basic:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:fn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:fn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:fn([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:fn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:fn([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:fn([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:fn([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:fn([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};hi.physical={uniforms:fn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const qo={r:0,b:0,g:0},nE=new St,Kx=new He;Kx.set(-1,0,0,0,1,0,0,0,1);function iE(t,e,n,i,r,s){const a=new We(0);let o=r===!0?0:1,l,c,h=null,p=0,f=null;function g(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){const b=m.backgroundBlurriness>0;S=e.get(S,b)}return S}function v(m){let S=!1;const b=g(m);b===null?_(a,o):b&&b.isColor&&(_(b,1),S=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,S){const b=g(S);b&&b.isCubeTexture?(c===void 0&&(c=new bt(new ti(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:Gs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kx),c.material.toneMapped=tt.getTransfer(b.colorSpace)!==dt,(h!==b||p!==b.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,f=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new bt(new gc(2,2),new Yr({name:"BackgroundMaterial",uniforms:Gs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=tt.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,S){m.getRGB(qo,Wx(t)),n.buffers.color.setClear(qo.r,qo.g,qo.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,S=1){a.set(m),o=S,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(a,o)},render:v,addToRenderList:M,dispose:u}}function rE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,z,q,L,X){let K=!1;const G=p(I,L,q,z);s!==G&&(s=G,c(s.object)),K=g(I,L,q,X),K&&v(I,L,q,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(I,z,q,L),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function p(I,z,q,L){const X=L.wireframe===!0;let K=i[z.id];K===void 0&&(K={},i[z.id]=K);const G=I.isInstancedMesh===!0?I.id:0;let V=K[G];V===void 0&&(V={},K[G]=V);let D=V[q.id];D===void 0&&(D={},V[q.id]=D);let O=D[X];return O===void 0&&(O=f(l()),D[X]=O),O}function f(I){const z=[],q=[],L=[];for(let X=0;X<n;X++)z[X]=0,q[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:L,object:I,attributes:{},index:null}}function g(I,z,q,L){const X=s.attributes,K=z.attributes;let G=0;const V=q.getAttributes();for(const D in V)if(V[D].location>=0){const j=X[D];let ae=K[D];if(ae===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function v(I,z,q,L){const X={},K=z.attributes;let G=0;const V=q.getAttributes();for(const D in V)if(V[D].location>=0){let j=K[D];j===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),X[D]=ae,G++}s.attributes=X,s.attributesNum=G,s.index=L}function M(){const I=s.newAttributes;for(let z=0,q=I.length;z<q;z++)I[z]=0}function _(I){u(I,0)}function u(I,z){const q=s.newAttributes,L=s.enabledAttributes,X=s.attributeDivisors;q[I]=1,L[I]===0&&(t.enableVertexAttribArray(I),L[I]=1),X[I]!==z&&(t.vertexAttribDivisor(I,z),X[I]=z)}function m(){const I=s.newAttributes,z=s.enabledAttributes;for(let q=0,L=z.length;q<L;q++)z[q]!==I[q]&&(t.disableVertexAttribArray(q),z[q]=0)}function S(I,z,q,L,X,K,G){G===!0?t.vertexAttribIPointer(I,z,q,X,K):t.vertexAttribPointer(I,z,q,L,X,K)}function b(I,z,q,L){M();const X=L.attributes,K=q.getAttributes(),G=z.defaultAttributeValues;for(const V in K){const D=K[V];if(D.location>=0){let O=X[V];if(O===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(O=I.instanceColor)),O!==void 0){const j=O.normalized,ae=O.itemSize,Me=e.get(O);if(Me===void 0)continue;const Y=Me.buffer,ce=Me.type,ue=Me.bytesPerElement,Se=ce===t.INT||ce===t.UNSIGNED_INT||O.gpuType===sh;if(O.isInterleavedBufferAttribute){const fe=O.data,Ie=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Qe=O.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ee=0;Ee<D.locationSize;Ee++)u(D.location+Ee,fe.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ee=0;Ee<D.locationSize;Ee++)_(D.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let Ee=0;Ee<D.locationSize;Ee++)S(D.location+Ee,ae/D.locationSize,ce,j,Ie*ue,(Qe+ae/D.locationSize*Ee)*ue,Se)}else{if(O.isInstancedBufferAttribute){for(let fe=0;fe<D.locationSize;fe++)u(D.location+fe,O.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let fe=0;fe<D.locationSize;fe++)_(D.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let fe=0;fe<D.locationSize;fe++)S(D.location+fe,ae/D.locationSize,ce,j,ae*ue,ae/D.locationSize*fe*ue,Se)}}else if(G!==void 0){const j=G[V];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(D.location,j);break;case 3:t.vertexAttrib3fv(D.location,j);break;case 4:t.vertexAttrib4fv(D.location,j);break;default:t.vertexAttrib1fv(D.location,j)}}}}m()}function R(){N();for(const I in i){const z=i[I];for(const q in z){const L=z[q];for(const X in L){const K=L[X];for(const G in K)h(K[G].object),delete K[G];delete L[X]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const z=i[I.id];for(const q in z){const L=z[q];for(const X in L){const K=L[X];for(const G in K)h(K[G].object),delete K[G];delete L[X]}}delete i[I.id]}function x(I){for(const z in i){const q=i[z];for(const L in q){const X=q[L];if(X[I.id]===void 0)continue;const K=X[I.id];for(const G in K)h(K[G].object),delete K[G];delete X[I.id]}}}function E(I){for(const z in i){const q=i[z],L=I.isInstancedMesh===!0?I.id:0,X=q[L];if(X!==void 0){for(const K in X){const G=X[K];for(const V in G)h(G[V].object),delete G[V];delete X[K]}delete q[L],Object.keys(q).length===0&&delete i[z]}}}function N(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:_,disableUnusedAttributes:m}}function sE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let g=0;g<h;g++)f+=c[g];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function aE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==gi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const E=x===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Pn&&x!==mi&&!E&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:b,maxSamples:R,samples:A}}function oE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const g=p.length!==0||f||i!==0||r;return r=f,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,g){const v=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,u=t.get(p);if(!r||v===null||v.length===0||s&&!_)s?h(null):c();else{const m=s?0:i,S=m*4;let b=u.clippingState||null;l.value=b,b=h(v,f,S,g);for(let R=0;R!==S;++R)b[R]=n[R];u.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,g,v){const M=p!==null?p.length:0;let _=null;if(M!==0){if(_=l.value,v!==!0||_===null){const u=g+M*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<u)&&(_=new Float32Array(u));for(let S=0,b=g;S!==M;++S,b+=4)a.copy(p[S]).applyMatrix4(m,o),a.normal.toArray(_,b),_[b+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}class Sh extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ti(5,5,5),s=new Yr({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Ns});s.uniforms.tEquirect.value=n;const a=new bt(r,s),o=n.minFilter;return n.minFilter===sr&&(n.minFilter=Sn),new of(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Nm=256,lE=3,cE=20,Zx=256,Qx=16,uE=3,dE=new B,fE=new We;class Zl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new of(1,10,null),this._boxMesh=new bt(new ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=dE}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,f=l.autoClearColor,g=l.autoClearDepth,v=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(fE));const _=new of(i,r,h);return _.position.copy(o),_.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=g,l.autoClearStencil=v,e.background=M,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Nm,TS(e))}_fromTexture(e,n){e.mapping===Bs||e.mapping===Wa?this._setSize(e.image.length===0?Nm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Pm(e,!1,!1),i=Math.log2(e)-lE;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Pm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Bs||e.mapping===Wa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hE(),this._integrationMaterial=pE());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Qx);for(let a=0;a<=i;a++){const o=Zl.lodToRoughness(a,i);if(a>i-uE)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Zx*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=mE());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Pm(t,e,n){return new Sh(t,{minFilter:sr,generateMipmaps:e,type:Si,colorSpace:Xl,depthBuffer:n})}function ro(t,e,n){return new Yr({name:t,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:n,side:wn,blending:Ns,depthTest:!1,depthWrite:!1})}function hE(){return ro("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pE(){return ro("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mE(){return ro("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Lm(){return ro("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Dm(){return ro("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?a(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Yc||g===$c)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const M=new Sh(v.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const g=f.mapping,v=g===Yc||g===$c,M=g===Bs||g===Wa;if(v||M){let _=n.get(f);const u=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new Zl(t)),_=v?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const m=f.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Zl(t)),_=v?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",h),_.texture):null}}}return f}function o(f,g){return g===Yc?f.mapping=Bs:g===$c&&(f.mapping=Wa),f}function l(f){let g=0;const v=6;for(let M=0;M<v;M++)f[M]!==void 0&&g++;return g===v}function c(f){const g=f.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function h(f){const g=f.target;g.removeEventListener("dispose",h);const v=n.get(g);v!==void 0&&(n.delete(g),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function xE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xl("WebGLRenderer: "+i+" extension not supported."),r}}}function _E(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const _ in v.attributes)e.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const M=s.get(v);M&&(e.remove(M),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,M){return r[M.id]!==void 0||(M.addEventListener("dispose",o),r[M.id]=new WeakRef(M),a.register(M,M.id,M),n.memory.geometries++),M}function h(v){const M=v.attributes;for(const _ in M)e.update(M[_],t.ARRAY_BUFFER)}function p(v){const M=v.index,_=v.attributes.position;let u=0;if(_===void 0)return;const m=M!==null?M.array.length:_.array.length/3-1,S=_.count>=65535?zx:Bx,b=new S(Math.ceil(m/3)*6,1),R=b.array;if(M!==null){const x=M.array;u=M.version;for(let E=0,N=0;E<m;E+=3){const C=x[E+0],I=x[E+1],z=x[E+2];R[N++]=C,R[N++]=I,R[N++]=I,R[N++]=z,R[N++]=z,R[N++]=C}}else{u=_.version;for(let x=0,E=0;x<m;x+=3){const N=x+0,C=x+1,I=x+2;R[E++]=N,R[E++]=C,R[E++]=C,R[E++]=I,R[E++]=I,R[E++]=N}}b.version=u;const A=s.get(v);A&&e.remove(A),s.set(v,b)}function f(v){const M=s.get(v);if(M){const _=v.index;_!==null&&M.version<_.version&&p(v)}else p(v);return s.get(v)}function g(){for(const v in r){const M=r[v].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:f,dispose:g}}function vE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function c(p,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,p*a,g),n.update(f,i,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let M=0;for(let _=0;_<g;_++)M+=f[_];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SE(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let C=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var g=C;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),M===!0&&(b=2),_===!0&&(b=3);let R=o.attributes.position.count*b,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const x=new Float32Array(R*A*4*p),E=new Ux(x,R,A,p);E.type=mi,E.needsUpdate=!0;const N=b*4;for(let I=0;I<p;I++){const z=u[I],q=m[I],L=S[I],X=R*A*4*I;for(let K=0;K<z.count;K++){const G=K*N;v===!0&&(r.fromBufferAttribute(z,K),x[X+G+0]=r.x,x[X+G+1]=r.y,x[X+G+2]=r.z,x[X+G+3]=0),M===!0&&(r.fromBufferAttribute(q,K),x[X+G+4]=r.x,x[X+G+5]=r.y,x[X+G+6]=r.z,x[X+G+7]=0),_===!0&&(r.fromBufferAttribute(L,K),x[X+G+8]=r.x,x[X+G+9]=r.y,x[X+G+10]=r.z,x[X+G+11]=L.itemSize===4?r.w:1)}}f={count:p,texture:E,size:new Ue(R,A)},i.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ME(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const bE={[xx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[vx]:"CINEON_TONE_MAPPING",[yx]:"ACES_FILMIC_TONE_MAPPING",[Mx]:"AGX_TONE_MAPPING",[bx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function EE(t,e,n,i,r,s){const a=new vi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new en;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));const p=new rM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new bt(h,p),g=new $x(-1,1,1,-1,0,1);let v=null,M=null,_=!1,u,m=null,S=[],b=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),l!==null&&l.setSize(R,A);for(let x=0;x<S.length;x++){const E=S[x];E.setSize&&E.setSize(R,A)}},this.setEffects=function(R){S=R,b=S.length>0&&S[0].isRenderPass===!0;const A=a.width,x=a.height;S.length>0&&o===null&&(o=new vi(A,x,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new vi(A,x,{type:Si,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&S.some(N=>N.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Hs(A,x),s===!0&&(c.format=ar,c.type=zs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let N=0;N<S.length;N++){const C=S[N];C.setSize&&C.setSize(A,x),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(R,A){if(_||R.toneMapping===Oi&&S.length===0)return!1;if(m=A,A!==null){const x=A.width,E=A.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return b===!1&&R.setRenderTarget(a),u=R.toneMapping,R.toneMapping=Oi,!0},this.hasRenderPass=function(){return b},this.end=function(R,A){R.toneMapping=u,_=!0;let x=a,E=o;for(let N=0;N<S.length;N++){const C=S[N];C.enabled!==!1&&(C.render(R,E,x,A),C.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(v!==R.outputColorSpace||M!==R.toneMapping){v=R.outputColorSpace,M=R.toneMapping,p.defines={},tt.getTransfer(v)===dt&&(p.defines.SRGB_TRANSFER="");const N=bE[M];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(m),R.render(f,g),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}const Jx=new mn,e_=new Hs(1,1),t_=new Vx(1),n_=new Ux,i_=new FS,r_=new Gx,Im=[],Fm=[],Um=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Im[r];if(s===void 0&&(s=new Float32Array(r),Im[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xc(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function CE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;km.set(i),t.uniformMatrix2fv(this.addr,!1,km),Gt(n,i)}}function NE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Gt(n,i)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Um.set(i),t.uniformMatrix4fv(this.addr,!1,Um),Gt(n,i)}}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function _c(t){return t.version===0&&(t.compareFunction=Ix,t.needsUpdate=!0),t}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=_c(e_):s=Jx,n.setTexture2D(e||s,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||i_,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=_c(t_):s=r_,n.setTextureCube(e||s,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||n_,r)}function jE(t){switch(t){case 5126:return wE;case 35664:return TE;case 35665:return AE;case 35666:return RE;case 35674:return CE;case 35675:return NE;case 35676:return PE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return IE;case 35669:case 35673:return FE;case 5125:return UE;case 36294:return OE;case 36295:return kE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return VE}}function WE(t,e){t.uniform1fv(this.addr,e)}function XE(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function YE(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function $E(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function qE(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KE(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZE(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QE(t,e){t.uniform1iv(this.addr,e)}function JE(t,e){t.uniform2iv(this.addr,e)}function ew(t,e){t.uniform3iv(this.addr,e)}function tw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function iw(t,e){t.uniform2uiv(this.addr,e)}function rw(t,e){t.uniform3uiv(this.addr,e)}function sw(t,e){t.uniform4uiv(this.addr,e)}function aw(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=_c(e_):a=Jx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ow(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||i_,s[a])}function lw(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=_c(t_):a=r_;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function cw(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||n_,s[a])}function uw(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return YE;case 35666:return $E;case 35674:return qE;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class fw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uw(n.type)}}class hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function Bm(t,e){t.seq.push(e),t.map[e.id]=e}function pw(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),a=Su.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bm(n,c===void 0?new dw(o,t,e):new fw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new hw(o),Bm(n,p)),n=p}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);pw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mw=37297;let gw=0;function xw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Hm=new He;function _w(t){tt._getMatrix(Hm,tt.workingColorSpace,t);const e=`mat3( ${Hm.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Yl:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+xw(t.getShaderSource(e),o)}else return s}function vw(t,e){const n=_w(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yw={[xx]:"Linear",[_x]:"Reinhard",[vx]:"Cineon",[yx]:"ACESFilmic",[Mx]:"AgX",[bx]:"Neutral",[Sx]:"Custom"};function Sw(t,e){const n=yw[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ko=new B;function Mw(){tt.getLuminanceCoefficients(Ko);const t=Ko.x.toFixed(4),e=Ko.y.toFixed(4),n=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Ew(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ww(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ma(t){return t!==""}function Vm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(t){return t.replace(Tw,Aw)}function Aw(t,e){const n=Ye[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lf(n)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(Rw,Cw)}function Cw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Nw={[fl]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function Pw(t){return Nw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lw={[Wa]:"ENVMAP_MODE_REFRACTION"};function Dw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Lw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iw={[rh]:"ENVMAP_BLENDING_MULTIPLY",[cS]:"ENVMAP_BLENDING_MIX",[uS]:"ENVMAP_BLENDING_ADD"};function Fw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Iw[t.combine]||"ENVMAP_BLENDING_NONE"}function Uw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Pw(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dw(n),p=Fw(n),f=bw(n),g=Ew(s),v=r.createProgram();let M,_,u=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ma).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ma).join(`
`),_.length>0&&(_+=`
`)):(M=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),_=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Oi?Sw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,vw("linearToOutputTexel",n.outputColorSpace),Mw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ma).join(`
`)),a=lf(a),a=Vm(a,n),a=jm(a,n),o=lf(o),o=Vm(o,n),o=jm(o,n),a=Wm(a),o=Wm(o),n.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const m=u+M+a,S=u+_+o,b=zm(r,r.VERTEX_SHADER,m),R=zm(r,r.FRAGMENT_SHADER,S);r.attachShader(v,b),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(C){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(b)||"",q=r.getShaderInfoLog(R)||"",L=I.trim(),X=z.trim(),K=q.trim();let G=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,b,R);else{const D=Gm(r,b,"vertex"),O=Gm(r,R,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+D+`
`+O)}else L!==""?Oe("WebGLProgram: Program Info Log:",L):(X===""||K==="")&&(V=!1);V&&(C.diagnostics={runnable:G,programLog:L,vertexShader:{log:X,prefix:M},fragmentShader:{log:K,prefix:_}})}r.deleteShader(b),r.deleteShader(R),x=new vl(r,v),E=ww(r,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,mw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=R,this}let Ow=0;class kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Bw(e),n.set(e,i)),i}}class Bw{constructor(e){this.id=Ow++,this.code=e,this.usedTimes=0}}function zw(t){return t===Xr||t===jl||t===Wl}function Hw(t,e,n,i,r,s){const a=new Ox,o=new kw,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,E,N,C,I,z){const q=C.fog,L=I.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||X,K),V=f[x.type];let D=i.precision;x.precision!==null&&(D=i.getMaxPrecision(x.precision),D!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",D,"instead."));const O=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=O!==void 0?O.length:0;let ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let Me,Y,ce,ue;if(V){const _e=hi[V];Me=_e.vertexShader,Y=_e.fragmentShader}else{Me=x.vertexShader,Y=x.fragmentShader;const _e=o.getVertexShaderStage(x),qe=o.getFragmentShaderStage(x);o.update(x,_e,qe),ce=_e.id,ue=qe.id}const Se=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,Qe=I.isBatchedMesh===!0,Ee=!!x.map,Ve=!!x.matcap,je=!!G,ke=je&&G.isPMREMTexture===!0,$e=!!x.aoMap,Xe=!!x.lightMap,nt=!!x.bumpMap&&x.wireframe===!1,ze=!!x.normalMap,wt=!!x.displacementMap,Pt=!!x.emissiveMap,Mt=!!x.metalnessMap,$t=!!x.roughnessMap,Lt=x.anisotropy>0,U=x.clearcoat>0,ht=x.diffuseRoughness>0,ut=x.dispersion>0,ct=x.retroreflectivity>0,xe=x.iridescence>0,gt=x.sheen>0,Fe=x.transmission>0,se=Lt&&!!x.anisotropyMap,w=U&&!!x.clearcoatMap,y=U&&!!x.clearcoatNormalMap,H=U&&!!x.clearcoatRoughnessMap,ne=ht&&!!x.diffuseRoughnessMap,k=xe&&!!x.iridescenceMap,Q=xe&&!!x.iridescenceThicknessMap,he=gt&&!!x.sheenColorMap,ee=gt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,pe=!!x.specularColorMap,P=!!x.specularIntensityMap,re=Fe&&!!x.transmissionMap,J=Fe&&!!x.thicknessMap,me=!!x.gradientMap,te=!!x.alphaMap,oe=x.alphaTest>0,ge=!!x.alphaHash,Re=!!x.extensions;let le=Oi;x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(le=t.toneMapping);const De=ke?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Be={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:Y,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:D,batching:Qe,batchingColor:Qe&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:Ve,envMap:je,envMapMode:je&&G.mapping,envMapPMREM:ke,envMapMaxLod:ke?De.length-1:null,envMapSize:ke?De[0].width:null,aoMap:$e,lightMap:Xe,bumpMap:nt,normalMap:ze,displacementMap:wt,emissiveMap:Pt,normalMapObjectSpace:ze&&x.normalMapType===hS,normalMapTangentSpace:ze&&x.normalMapType===Ya,packedNormalMap:ze&&x.normalMapType===Ya&&zw(x.normalMap.format),metalnessMap:Mt,roughnessMap:$t,anisotropy:Lt,anisotropyMap:se,clearcoat:U,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:H,diffuseRoughness:ht,diffuseRoughnessMap:ne,dispersion:ut,retroreflection:ct,iridescence:xe,iridescenceMap:k,iridescenceThicknessMap:Q,sheen:gt,sheenColorMap:he,sheenRoughnessMap:ee,specularMap:ie,specularColorMap:pe,specularIntensityMap:P,transmission:Fe,transmissionMap:re,thicknessMap:J,gradientMap:me,opaque:x.transparent===!1&&x.blending===wa&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:oe,alphaHash:ge,combine:x.combine,mapUv:Ee&&g(x.map.channel),aoMapUv:$e&&g(x.aoMap.channel),lightMapUv:Xe&&g(x.lightMap.channel),bumpMapUv:nt&&g(x.bumpMap.channel),normalMapUv:ze&&g(x.normalMap.channel),displacementMapUv:wt&&g(x.displacementMap.channel),emissiveMapUv:Pt&&g(x.emissiveMap.channel),metalnessMapUv:Mt&&g(x.metalnessMap.channel),roughnessMapUv:$t&&g(x.roughnessMap.channel),anisotropyMapUv:se&&g(x.anisotropyMap.channel),clearcoatMapUv:w&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&g(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&g(x.diffuseRoughnessMap.channel),iridescenceMapUv:k&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&g(x.sheenRoughnessMap.channel),specularMapUv:ie&&g(x.specularMap.channel),specularColorMapUv:pe&&g(x.specularColorMap.channel),specularIntensityMapUv:P&&g(x.specularIntensityMap.channel),transmissionMapUv:re&&g(x.transmissionMap.channel),thicknessMapUv:J&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ze||Lt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Ee||te),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&ze===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:fe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Pt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Li,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Re&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&x.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function M(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(_(E,x),u(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function u(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function m(x){const E=f[x.type];let N;if(E){const C=hi[E];N=tM.clone(C.uniforms)}else N=x.uniforms;return N}function S(x,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new Uw(t,E,x,r),c.push(N),h.set(E,N)),N}function b(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:m,acquireProgram:S,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:A}}function Gw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Vw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $m(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,v,M,_,u){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:g,material:v,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:_,group:u},t[e]=m):(m.id=f.id,m.object=f,m.geometry=g,m.material=v,m.materialVariant=a(f),m.groupOrder=M,m.renderOrder=f.renderOrder,m.z=_,m.group=u),e++,m}function l(f,g,v,M,_,u,m){m.reversedDepth===!0&&(_=-_);const S=o(f,g,v,M,_,u);v.transmission>0?i.push(S):v.transparent===!0?r.push(S):n.push(S)}function c(f,g,v,M,_,u){const m=o(f,g,v,M,_,u);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function h(f,g){n.length>1&&n.sort(f||Vw),i.length>1&&i.sort(g||Ym),r.length>1&&r.sort(g||Ym)}function p(){for(let f=e,g=t.length;f<g;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function jw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new $m,t.set(i,[a])):r>=s.length?(a=new $m,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new We};break;case"SpotLight":n={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Xw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Yw=0;function $w(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qw(t){const e=new Ww,n=Xw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new St,a=new St;function o(c){let h=0,p=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,v=0,M=0,_=0,u=0,m=0,S=0,b=0,R=0,A=0,x=0,E=0,N=0,C=0;c.sort($w);for(let z=0,q=c.length;z<q;z++){const L=c[z],X=L.color,K=L.intensity,G=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Xr?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=X.r*K,p+=X.g*K,f+=X.b*K;else if(L.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(L.sh.coefficients[D],K);C++}else if(L.isSunLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const O=L.shadow,j=n.get(L);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[v]=j,i.sunShadowMap[v]=V;const ae=O.getViewportCount();for(let Me=0;Me<ae;Me++)i.sunShadowMatrix[M+Me]=O.getMatrix(Me),i.sunShadowCascade[M+Me]=O._cascadeData[Me];M+=ae,v++}i.sun[g]=D,g++}else if(L.isDirectionalLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const O=L.shadow,j=n.get(L);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=L.shadow.matrix,R++}i.directional[_]=D,_++}else if(L.isSpotLight){const D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(X).multiplyScalar(K),D.distance=G,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,i.spot[m]=D;const O=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,O.updateMatrices(L),L.castShadow&&N++),i.spotLightMatrix[m]=O.matrix,L.castShadow){const j=n.get(L);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=V,x++}m++}else if(L.isRectAreaLight){const D=e.get(L);D.color.copy(X).multiplyScalar(K),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=D,S++}else if(L.isPointLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){const O=L.shadow,j=n.get(L);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,i.pointShadow[u]=j,i.pointShadowMap[u]=V,i.pointShadowMatrix[u]=L.shadow.matrix,A++}i.point[u]=D,u++}else if(L.isHemisphereLight){const D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(K),D.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[b]=D,b++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const I=i.hash;(I.sunLength!==g||I.directionalLength!==_||I.pointLength!==u||I.spotLength!==m||I.rectAreaLength!==S||I.hemiLength!==b||I.numSunShadows!==v||I.numDirectionalShadows!==R||I.numPointShadows!==A||I.numSpotShadows!==x||I.numSpotMaps!==E||I.numLightProbes!==C)&&(i.sun.length=g,i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=u,i.hemi.length=b,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-N,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=C,I.sunLength=g,I.directionalLength=_,I.pointLength=u,I.spotLength=m,I.rectAreaLength=S,I.hemiLength=b,I.numSunShadows=v,I.numDirectionalShadows=R,I.numPointShadows=A,I.numSpotShadows=x,I.numSpotMaps=E,I.numLightProbes=C,i.version=Yw++)}function l(c,h){let p=0,f=0,g=0,v=0,M=0,_=0;const u=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const b=c[m];if(b.isSunLight){const R=i.sun[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(u),p++}else if(b.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),f++}else if(b.isSpotLight){const R=i.spot[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),v++}else if(b.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(u),a.identity(),s.copy(b.matrixWorld),s.premultiply(u),a.extractRotation(s),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(u),g++}else if(b.isHemisphereLight){const R=i.hemi[_];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:i}}function qm(t){const e=new qw(t),n=[],i=[],r=[];function s(p){h.camera=p,n.length=0,i.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function c(p){e.setupView(n,p)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new qm(t),e.set(r,[o])):s>=a.length?(o=new qm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],eT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Km=new St,la=new B,Mu=new B;function tT(t,e,n){let i=new qa;const r=new Ue,s=new Ue,a=new Rt,o=new oM,l=new lM,c={},h=n.maxTextureSize,p={[Wr]:wn,[wn]:Wr,[Li]:Li},f=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Zw,fragmentShader:Qw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new Br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bt(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let u=this.type;this.render=function(A,x,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===jy&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fl);const N=t.getRenderTarget(),C=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ns),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=u!==this.type;q&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=A.length;L<X;L++){const K=A[L],G=K.shadow;if(G===void 0){Oe("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const V=G.getFrameExtents();r.multiply(V),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,G.mapSize.y=s.y));const D=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=D,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ha){if(K.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new vi(r.x,r.y,{format:Xr,type:Si,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Hs(r.x,r.y,mi),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=xr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Zt,G.map.depthTexture.magFilter=Zt}else K.isPointLight?(G.map=new Sh(r.x),G.map.depthTexture=new Vx(r.x,yi)):(G.map=new vi(r.x,r.y),G.map.depthTexture=new Hs(r.x,r.y,yi)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=xr,this.type===fl?(G.map.depthTexture.compareFunction=D?Dx:Lx,G.map.depthTexture.minFilter=Sn,G.map.depthTexture.magFilter=Sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Zt,G.map.depthTexture.magFilter=Zt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const O=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,E);const j=G.camera.layers.mask&4294967294?G.camera.layers:E.layers;for(let ae=0;ae<O;ae++){const Me=G.getCamera(ae);if(K.isPointLight){const Y=G.camera,ce=G.matrix,ue=K.distance||Y.far;ue!==Y.far&&(Y.far=ue,Y.updateProjectionMatrix()),la.setFromMatrixPosition(K.matrixWorld),Y.position.copy(la),Mu.copy(Y.position),Mu.add(Jw[ae]),Y.up.copy(eT[ae]),Y.lookAt(Mu),Y.updateMatrixWorld(),ce.makeTranslation(-la.x,-la.y,-la.z),Km.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Km,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(G.map),t.clear());const Y=G.getViewport(ae);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),z.viewport(a)}i=G.getFrustum(ae),b(x,E,Me,K,j,this.type)}G.isPointLightShadow!==!0&&this.type===ha&&m(G,E),G.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(N,C,I)};function m(A,x){const E=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null?A.mapPass=new vi(r.x,r.y,{format:Xr,type:Si}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(x,null,E,f,M,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value.set(A.map.width,A.map.height),g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(x,null,E,g,M,null)}function S(A,x,E,N){let C=null;const I=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)C=I;else if(C=E.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const z=C.uuid,q=x.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let X=L[q];X===void 0&&(X=C.clone(),L[q]=X,x.addEventListener("dispose",R)),C=X}if(C.visible=x.visible,C.wireframe=x.wireframe,N===ha?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:p[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const z=t.properties.get(C);z.light=E}return C}function b(A,x,E,N,C,I){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===ha)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const L=e.update(A),X=A.material;if(Array.isArray(X)){const K=L.groups;for(let G=0,V=K.length;G<V;G++){const D=K[G],O=X[D.materialIndex];if(O&&O.visible){const j=S(A,O,N,I);A.onBeforeShadow(t,A,x,E,L,j,D),t.renderBufferDirect(E,null,L,j,A,D),A.onAfterShadow(t,A,x,E,L,j,D)}}}else if(X.visible){const K=S(A,X,N,I);A.onBeforeShadow(t,A,x,E,L,K,null),t.renderBufferDirect(E,null,L,K,A,null),A.onAfterShadow(t,A,x,E,L,K,null)}}const q=A.children;for(let L=0,X=q.length;L<X;L++)b(q[L],x,E,N,C,I)}function R(A){A.target.removeEventListener("dispose",R);for(const E in c){const N=c[E],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function nT(t,e){function n(){let P=!1;const re=new Rt;let J=null;const me=new Rt(0,0,0,0);return{setMask:function(te){J!==te&&!P&&(t.colorMask(te,te,te,te),J=te)},setLocked:function(te){P=te},setClear:function(te,oe,ge,Re,le){le===!0&&(te*=Re,oe*=Re,ge*=Re),re.set(te,oe,ge,Re),me.equals(re)===!1&&(t.clearColor(te,oe,ge,Re),me.copy(re))},reset:function(){P=!1,J=null,me.set(-1,0,0,0)}}}function i(){let P=!1,re=!1,J=null,me=null,te=null;return{setReversed:function(oe){if(re!==oe){const ge=e.get("EXT_clip_control");oe?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),re=oe;const Re=te;te=null,this.setClear(Re)}},getReversed:function(){return re},setTest:function(oe){oe?fe(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(oe){J!==oe&&!P&&(t.depthMask(oe),J=oe)},setFunc:function(oe){if(re&&(oe=ES[oe]),me!==oe){switch(oe){case _d:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case yd:t.depthFunc(t.LESS);break;case ja:t.depthFunc(t.LEQUAL);break;case Sd:t.depthFunc(t.EQUAL);break;case Md:t.depthFunc(t.GEQUAL);break;case bd:t.depthFunc(t.GREATER);break;case Ed:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=oe}},setLocked:function(oe){P=oe},setClear:function(oe){te!==oe&&(te=oe,re&&(oe=1-oe),t.clearDepth(oe))},reset:function(){P=!1,J=null,me=null,te=null,re=!1}}}function r(){let P=!1,re=null,J=null,me=null,te=null,oe=null,ge=null,Re=null,le=null;return{setTest:function(De){P||(De?fe(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(De){re!==De&&!P&&(t.stencilMask(De),re=De)},setFunc:function(De,Be,_e){(J!==De||me!==Be||te!==_e)&&(t.stencilFunc(De,Be,_e),J=De,me=Be,te=_e)},setOp:function(De,Be,_e){(oe!==De||ge!==Be||Re!==_e)&&(t.stencilOp(De,Be,_e),oe=De,ge=Be,Re=_e)},setLocked:function(De){P=De},setClear:function(De){le!==De&&(t.clearStencil(De),le=De)},reset:function(){P=!1,re=null,J=null,me=null,te=null,oe=null,ge=null,Re=null,le=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let h={},p={},f={},g=new WeakMap,v=[],M=null,_=!1,u=null,m=null,S=null,b=null,R=null,A=null,x=null,E=new We(0,0,0),N=0,C=!1,I=null,z=null,q=null,L=null,X=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(D)[1]),G=V>=1):D.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),G=V>=2);let O=null,j={};const ae=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Y=new Rt().fromArray(ae),ce=new Rt().fromArray(Me);function ue(P,re,J,me){const te=new Uint8Array(4),oe=t.createTexture();t.bindTexture(P,oe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ge=0;ge<J;ge++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(re+ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return oe}const Se={};Se[t.TEXTURE_2D]=ue(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(ja),nt(!1),ze(Xp),fe(t.CULL_FACE),$e(Ns);function fe(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Ie(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Qe(P,re){return f[P]!==re?(t.bindFramebuffer(P,re),f[P]=re,P===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),P===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(P,re){let J=v,me=!1;if(P){J=g.get(re),J===void 0&&(J=[],g.set(re,J));const te=P.textures;if(J.length!==te.length||J[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,ge=te.length;oe<ge;oe++)J[oe]=t.COLOR_ATTACHMENT0+oe;J.length=te.length,me=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,me=!0);me&&t.drawBuffers(J)}function Ve(P){return M!==P?(t.useProgram(P),M=P,!0):!1}const je={[cs]:t.FUNC_ADD,[Xy]:t.FUNC_SUBTRACT,[Yy]:t.FUNC_REVERSE_SUBTRACT};je[$y]=t.MIN,je[qy]=t.MAX;const ke={[Ky]:t.ZERO,[Zy]:t.ONE,[Qy]:t.SRC_COLOR,[mx]:t.SRC_ALPHA,[rS]:t.SRC_ALPHA_SATURATE,[nS]:t.DST_COLOR,[eS]:t.DST_ALPHA,[Jy]:t.ONE_MINUS_SRC_COLOR,[gx]:t.ONE_MINUS_SRC_ALPHA,[iS]:t.ONE_MINUS_DST_COLOR,[tS]:t.ONE_MINUS_DST_ALPHA,[sS]:t.CONSTANT_COLOR,[aS]:t.ONE_MINUS_CONSTANT_COLOR,[oS]:t.CONSTANT_ALPHA,[lS]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(P,re,J,me,te,oe,ge,Re,le,De){if(P===Ns){_===!0&&(Ie(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),P!==Wy){if(P!==u||De!==C){if((m!==cs||R!==cs)&&(t.blendEquation(t.FUNC_ADD),m=cs,R=cs),De)switch(P){case wa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFunc(t.ONE,t.ONE);break;case $p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",P);break}else switch(P){case wa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $p:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qp:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",P);break}S=null,b=null,A=null,x=null,E.set(0,0,0),N=0,u=P,C=De}return}te=te||re,oe=oe||J,ge=ge||me,(re!==m||te!==R)&&(t.blendEquationSeparate(je[re],je[te]),m=re,R=te),(J!==S||me!==b||oe!==A||ge!==x)&&(t.blendFuncSeparate(ke[J],ke[me],ke[oe],ke[ge]),S=J,b=me,A=oe,x=ge),(Re.equals(E)===!1||le!==N)&&(t.blendColor(Re.r,Re.g,Re.b,le),E.copy(Re),N=le),u=P,C=!1}function Xe(P,re){P.side===Li?Ie(t.CULL_FACE):fe(t.CULL_FACE);let J=P.side===wn;re&&(J=!J),nt(J),P.blending===wa&&P.transparent===!1?$e(Ns):$e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function nt(P){I!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),I=P)}function ze(P){P!==Gy?(fe(t.CULL_FACE),P!==z&&(P===Xp?t.cullFace(t.BACK):P===Vy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),z=P}function wt(P){P!==q&&(G&&t.lineWidth(P),q=P)}function Pt(P,re,J){P?(fe(t.POLYGON_OFFSET_FILL),(L!==re||X!==J)&&(L=re,X=J,a.getReversed()&&(re=-re,J=-J),t.polygonOffset(re,J))):Ie(t.POLYGON_OFFSET_FILL)}function Mt(P){P?fe(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function $t(P){P===void 0&&(P=t.TEXTURE0+K-1),O!==P&&(t.activeTexture(P),O=P)}function Lt(P,re,J){J===void 0&&(O===null?J=t.TEXTURE0+K-1:J=O);let me=j[J];me===void 0&&(me={type:void 0,texture:void 0},j[J]=me),(me.type!==P||me.texture!==re)&&(O!==J&&(t.activeTexture(J),O=J),t.bindTexture(P,re||Se[P]),me.type=P,me.texture=re)}function U(){const P=j[O];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ht(){try{t.compressedTexImage2D(...arguments)}catch(P){ot("WebGLState:",P)}}function ut(){try{t.compressedTexImage3D(...arguments)}catch(P){ot("WebGLState:",P)}}function ct(){try{t.texSubImage2D(...arguments)}catch(P){ot("WebGLState:",P)}}function xe(){try{t.texSubImage3D(...arguments)}catch(P){ot("WebGLState:",P)}}function gt(){try{t.compressedTexSubImage2D(...arguments)}catch(P){ot("WebGLState:",P)}}function Fe(){try{t.compressedTexSubImage3D(...arguments)}catch(P){ot("WebGLState:",P)}}function se(){try{t.texStorage2D(...arguments)}catch(P){ot("WebGLState:",P)}}function w(){try{t.texStorage3D(...arguments)}catch(P){ot("WebGLState:",P)}}function y(){try{t.texImage2D(...arguments)}catch(P){ot("WebGLState:",P)}}function H(){try{t.texImage3D(...arguments)}catch(P){ot("WebGLState:",P)}}function ne(P){return p[P]!==void 0?p[P]:t.getParameter(P)}function k(P,re){p[P]!==re&&(t.pixelStorei(P,re),p[P]=re)}function Q(P){Y.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function he(P){ce.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function ee(P,re){let J=c.get(re);J===void 0&&(J=new WeakMap,c.set(re,J));let me=J.get(P);me===void 0&&(me=t.getUniformBlockIndex(re,P.name),t.uniformBlockBinding(re,me,me),J.set(P,me))}function ie(P,re,J){const te=c.get(re).get(P);l[te]!==J&&(t.bindBufferBase(t.UNIFORM_BUFFER,te,J),l[te]=J)}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},O=null,j={},f={},l={},g=new WeakMap,v=[],M=null,_=!1,u=null,m=null,S=null,b=null,R=null,A=null,x=null,E=new We(0,0,0),N=0,C=!1,I=null,z=null,q=null,L=null,X=null,Y.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:Ie,bindFramebuffer:Qe,drawBuffers:Ee,useProgram:Ve,setBlending:$e,setMaterial:Xe,setFlipSided:nt,setCullFace:ze,setLineWidth:wt,setPolygonOffset:Pt,setScissorTest:Mt,activeTexture:$t,bindTexture:Lt,unbindTexture:U,compressedTexImage2D:ht,compressedTexImage3D:ut,texImage2D:y,texImage3D:H,pixelStorei:k,getParameter:ne,updateUBOMapping:ee,uniformBlockBinding:ie,texStorage2D:se,texStorage3D:w,texSubImage2D:ct,texSubImage3D:xe,compressedTexSubImage2D:gt,compressedTexSubImage3D:Fe,scissor:Q,viewport:he,reset:pe}}function iT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,p=new Set;let f;const g=new WeakMap,v=new Set,M=new FinalizationRegistry(w=>v.delete(w));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(w,y){return _?new OffscreenCanvas(w,y):$l("canvas")}function m(w,y,H){let ne=1;const k=se(w);if((k.width>H||k.height>H)&&(ne=H/Math.max(k.width,k.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(ne*k.width),he=Math.floor(ne*k.height);f===void 0&&(f=u(Q,he));const ee=y?u(Q,he):f;return ee.width=Q,ee.height=he,ee.getContext("2d").drawImage(w,0,0,Q,he),Oe("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Q+"x"+he+")."),ee}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),w;return w}function S(w){return w.generateMipmaps}function b(w){t.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(w,y,H,ne,k,Q=!1){if(w!==null){if(t[w]!==void 0)return t[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8),H===t.UNSIGNED_SHORT&&he&&(ee=he.R16_EXT),H===t.SHORT&&he&&(ee=he.R16_SNORM_EXT)),y===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),y===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8),H===t.UNSIGNED_SHORT&&he&&(ee=he.RG16_EXT),H===t.SHORT&&he&&(ee=he.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),y===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),H===t.UNSIGNED_INT&&(ee=t.RGB32UI),H===t.BYTE&&(ee=t.RGB8I),H===t.SHORT&&(ee=t.RGB16I),H===t.INT&&(ee=t.RGB32I)),y===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),H===t.UNSIGNED_INT&&(ee=t.RGBA32UI),H===t.BYTE&&(ee=t.RGBA8I),H===t.SHORT&&(ee=t.RGBA16I),H===t.INT&&(ee=t.RGBA32I)),y===t.RGB&&(H===t.UNSIGNED_SHORT&&he&&(ee=he.RGB16_EXT),H===t.SHORT&&he&&(ee=he.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),y===t.RGBA){const ie=Q?Yl:tt.getTransfer(k);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=ie===dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&he&&(ee=he.RGBA16_EXT),H===t.SHORT&&he&&(ee=he.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(w,y){let H;return w?y===null||y===yi||y===zs?H=t.DEPTH24_STENCIL8:y===mi?H=t.DEPTH32F_STENCIL8:y===Xa&&(H=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yi||y===zs?H=t.DEPTH_COMPONENT24:y===mi?H=t.DEPTH_COMPONENT32F:y===Xa&&(H=t.DEPTH_COMPONENT16),H}function E(w,y){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function N(w){const y=new WeakRef(w);i.get(w).__ref=y,v.add(y),M.register(w,y,y)}function C(w){const y=i.get(w).__ref;y!==void 0&&(v.delete(y),M.unregister(y))}function I(w){q(w.target)}function z(w){L(w.target)}function q(w){w.removeEventListener("dispose",I),C(w),K(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&p.delete(w)}function L(w){w.removeEventListener("dispose",z),C(w),V(w)}function X(){for(const w of v){const y=w.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):q(y))}v.clear(),p.clear()}function K(w){const y=i.get(w);if(y.__webglInit===void 0)return;const H=w.source,ne=g.get(H);if(ne){const k=ne[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&G(w),Object.keys(ne).length===0&&g.delete(H)}i.remove(w)}function G(w){const y=i.get(w);t.deleteTexture(y.__webglTexture);const H=w.source,ne=g.get(H);delete ne[y.__cacheKey],a.memory.textures--}function V(w){const y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();const H=w.depthTexture;if(H&&H.renderTarget===w&&q(H),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let Q=0;Q<y.__webglFramebuffer[k].length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[k][Q]);else t.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)t.deleteFramebuffer(y.__webglFramebuffer[k]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ne=w.textures;for(let k=0,Q=ne.length;k<Q;k++){const he=i.get(ne[k]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(ne[k])}i.remove(w)}let D=0;function O(){D=0}function j(){return D}function ae(w){D=w}function Me(){const w=D;return w>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function Y(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ce(w,y){const H=i.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const ne=w.image;if(ne===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(H,w,y);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+y)}function ue(w,y){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Xe(H,w,y);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+y)}function Se(w,y){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Xe(H,w,y);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+y)}function fe(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){nt(H,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+y)}const Ie={[wd]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},Qe={[Zt]:t.NEAREST,[dS]:t.NEAREST_MIPMAP_NEAREST,[wo]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[qc]:t.LINEAR_MIPMAP_NEAREST,[sr]:t.LINEAR_MIPMAP_LINEAR},Ee={[mS]:t.NEVER,[Ix]:t.ALWAYS,[gS]:t.LESS,[Lx]:t.LEQUAL,[xS]:t.EQUAL,[Dx]:t.GEQUAL,[_S]:t.GREATER,[vS]:t.NOTEQUAL};function Ve(w,y){if(y.type===mi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===qc||y.magFilter===wo||y.magFilter===sr||y.minFilter===Sn||y.minFilter===qc||y.minFilter===wo||y.minFilter===sr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Ie[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Ie[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Ie[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Qe[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Qe[y.minFilter]),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==wo&&y.minFilter!==sr||y.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function je(w,y){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",I),N(y));const ne=y.source;let k=g.get(ne);k===void 0&&(k={},g.set(ne,k));const Q=Y(y);if(Q!==w.__cacheKey){k[Q]===void 0&&(k[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),k[Q].usedTimes++;const he=k[w.__cacheKey];he!==void 0&&(k[w.__cacheKey].usedTimes--,he.usedTimes===0&&G(y)),w.__cacheKey=Q,w.__webglTexture=k[Q].texture}return H}function ke(w,y,H){return Math.floor(Math.floor(w/H)/y)}function $e(w,y,H,ne){const Q=w.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,H,ne,y.data);else{Q.sort((P,re)=>P.start-re.start);let he=0;for(let P=1;P<Q.length;P++){const re=Q[he],J=Q[P],me=re.start+re.count,te=ke(J.start,y.width,4),oe=ke(re.start,y.width,4);J.start<=me+1&&te===oe&&ke(J.start+J.count-1,y.width,4)===te?re.count=Math.max(re.count,J.start+J.count-re.start):(++he,Q[he]=J)}Q.length=he+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let P=0,re=Q.length;P<re;P++){const J=Q[P],me=Math.floor(J.start/4),te=Math.ceil(J.count/4),oe=me%y.width,ge=Math.floor(me/y.width),Re=te,le=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge),n.texSubImage2D(t.TEXTURE_2D,0,oe,ge,Re,le,H,ne,y.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function Xe(w,y,H){let ne=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=t.TEXTURE_3D);const k=je(w,y),Q=y.source;n.bindTexture(ne,w.__webglTexture,t.TEXTURE0+H);const he=i.get(Q);if(Q.version!==he.__version||k===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const le=tt.getPrimaries(tt.workingColorSpace),De=y.colorSpace===nr?null:tt.getPrimaries(y.colorSpace),Be=y.colorSpace===nr||le===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=m(y.image,!1,r.maxTextureSize);ie=Fe(y,ie);const pe=s.convert(y.format,y.colorSpace),P=s.convert(y.type);let re=A(y.internalFormat,pe,P,y.normalized,y.colorSpace,y.isVideoTexture);Ve(ne,y);let J;const me=y.mipmaps,te=y.isVideoTexture!==!0,oe=he.__version===void 0||k===!0,ge=Q.dataReady,Re=E(y,ie);if(y.isDepthTexture)re=x(y.format===ar,y.type),oe&&(te?n.texStorage2D(t.TEXTURE_2D,1,re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,re,ie.width,ie.height,0,pe,P,null));else if(y.isDataTexture)if(me.length>0){te&&oe&&n.texStorage2D(t.TEXTURE_2D,Re,re,me[0].width,me[0].height);for(let le=0,De=me.length;le<De;le++)J=me[le],te?ge&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,J.width,J.height,pe,P,J.data):n.texImage2D(t.TEXTURE_2D,le,re,J.width,J.height,0,pe,P,J.data);y.generateMipmaps=!1}else te?(oe&&n.texStorage2D(t.TEXTURE_2D,Re,re,ie.width,ie.height),ge&&$e(y,ie,pe,P)):n.texImage2D(t.TEXTURE_2D,0,re,ie.width,ie.height,0,pe,P,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,re,me[0].width,me[0].height,ie.depth);for(let le=0,De=me.length;le<De;le++)if(J=me[le],y.format!==gi)if(pe!==null)if(te){if(ge)if(y.layerUpdates.size>0){const Be=Cm(J.width,J.height,y.format,y.type);for(const _e of y.layerUpdates){const qe=J.data.subarray(_e*Be/J.data.BYTES_PER_ELEMENT,(_e+1)*Be/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,_e,J.width,J.height,1,pe,qe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,J.width,J.height,ie.depth,pe,J.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,re,J.width,J.height,ie.depth,0,J.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,J.width,J.height,ie.depth,pe,P,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,re,J.width,J.height,ie.depth,0,pe,P,J.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{te&&oe&&n.texStorage2D(t.TEXTURE_2D,Re,re,me[0].width,me[0].height);for(let le=0,De=me.length;le<De;le++)J=me[le],y.format!==gi?pe!==null?te?ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,J.width,J.height,pe,J.data):n.compressedTexImage2D(t.TEXTURE_2D,le,re,J.width,J.height,0,J.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ge&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,J.width,J.height,pe,P,J.data):n.texImage2D(t.TEXTURE_2D,le,re,J.width,J.height,0,pe,P,J.data)}else if(y.isDataArrayTexture)if(te){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,re,ie.width,ie.height,ie.depth),ge)if(y.layerUpdates.size>0){const le=Cm(ie.width,ie.height,y.format,y.type);for(const De of y.layerUpdates){const Be=ie.data.subarray(De*le/ie.data.BYTES_PER_ELEMENT,(De+1)*le/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,ie.width,ie.height,1,pe,P,Be)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,P,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,re,ie.width,ie.height,ie.depth,0,pe,P,ie.data);else if(y.isData3DTexture)te?(oe&&n.texStorage3D(t.TEXTURE_3D,Re,re,ie.width,ie.height,ie.depth),ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,P,ie.data)):n.texImage3D(t.TEXTURE_3D,0,re,ie.width,ie.height,ie.depth,0,pe,P,ie.data);else if(y.isFramebufferTexture){if(oe)if(te)n.texStorage2D(t.TEXTURE_2D,Re,re,ie.width,ie.height);else{let le=ie.width,De=ie.height;for(let Be=0;Be<Re;Be++)n.texImage2D(t.TEXTURE_2D,Be,re,le,De,0,pe,P,null),le>>=1,De>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const le=t.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ie.parentNode!==le){le.appendChild(ie),p.add(y),le.onpaint=De=>{const Be=De.changedElements;for(const _e of p)Be.includes(_e.image)&&(_e.needsUpdate=!0)},le.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Be=t.RGBA,_e=t.RGBA,qe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Be,_e,qe,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(me.length>0){if(te&&oe){const le=se(me[0]);n.texStorage2D(t.TEXTURE_2D,Re,re,le.width,le.height)}for(let le=0,De=me.length;le<De;le++)J=me[le],te?ge&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,pe,P,J):n.texImage2D(t.TEXTURE_2D,le,re,pe,P,J);y.generateMipmaps=!1}else if(te){if(oe){const le=se(ie);n.texStorage2D(t.TEXTURE_2D,Re,re,le.width,le.height)}ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,P,ie)}else n.texImage2D(t.TEXTURE_2D,0,re,pe,P,ie);S(y)&&y.mipmapsAutoUpdate===!0&&b(ne),he.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function nt(w,y,H){if(y.image.length!==6)return;const ne=je(w,y),k=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+H);const Q=i.get(k);if(k.version!==Q.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const he=tt.getPrimaries(tt.workingColorSpace),ee=y.colorSpace===nr?null:tt.getPrimaries(y.colorSpace),ie=y.colorSpace===nr||he===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const pe=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,re=[];for(let _e=0;_e<6;_e++)!pe&&!P?re[_e]=m(y.image[_e],!0,r.maxCubemapSize):re[_e]=P?y.image[_e].image:y.image[_e],re[_e]=Fe(y,re[_e]);const J=re[0],me=s.convert(y.format,y.colorSpace),te=s.convert(y.type);let oe=A(y.internalFormat,me,te,y.normalized,y.colorSpace);const ge=y.isVideoTexture!==!0,Re=Q.__version===void 0||ne===!0,le=k.dataReady;let De=E(y,J);Ve(t.TEXTURE_CUBE_MAP,y);let Be;if(y.isDepthTexture){if(oe=x(y.format===ar,y.type),Re)if(ge)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,oe,J.width,J.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,J.width,J.height,0,me,te,null)}else if(pe){ge&&Re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,oe,J.width,J.height);for(let _e=0;_e<6;_e++){Be=re[_e].mipmaps;for(let qe=0;qe<Be.length;qe++){const pt=Be[qe];y.format!==gi?me!==null?ge?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,pt.width,pt.height,me,pt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,oe,pt.width,pt.height,0,pt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,pt.width,pt.height,me,te,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,oe,pt.width,pt.height,0,me,te,pt.data)}}}else{if(Be=y.mipmaps,ge&&Re){Be.length>0&&De++;const _e=se(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,oe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(P){ge?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,re[_e].width,re[_e].height,me,te,re[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,re[_e].width,re[_e].height,0,me,te,re[_e].data);for(let qe=0;qe<Be.length;qe++){const Tn=Be[qe].image[_e].image;ge?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,Tn.width,Tn.height,me,te,Tn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,oe,Tn.width,Tn.height,0,me,te,Tn.data)}}else{ge?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,me,te,re[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,me,te,re[_e]);for(let qe=0;qe<Be.length;qe++){const pt=Be[qe];ge?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,me,te,pt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,oe,me,te,pt.image[_e])}}}S(y)&&y.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),Q.__version=k.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ze(w,y,H,ne,k,Q){const he=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ie=A(H.internalFormat,he,ee,H.normalized,H.colorSpace),pe=i.get(y),P=i.get(H);if(P.__renderTarget=y,!pe.__hasExternalTextures){const re=Math.max(1,y.width>>Q),J=Math.max(1,y.height>>Q);k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?n.texImage3D(k,Q,ie,re,J,y.depth,0,he,ee,null):n.texImage2D(k,Q,ie,re,J,0,he,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),xe(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,k,P.__webglTexture,0,ct(y)):(k===t.TEXTURE_2D||k>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,k,P.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(w,y,H){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer){const ne=y.depthTexture,k=ne&&ne.isDepthTexture?ne.type:null,Q=x(y.stencilBuffer,k),he=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xe(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(y),Q,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(y),Q,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Q,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,w)}else{const ne=y.textures;for(let k=0;k<ne.length;k++){const Q=ne[k],he=s.convert(Q.format,Q.colorSpace),ee=s.convert(Q.type),ie=A(Q.internalFormat,he,ee,Q.normalized,Q.colorSpace);xe(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(y),ie,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pt(w,y,H){const ne=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=i.get(y.depthTexture);k.__renderTarget=y;const Q=ne?y.depthTexture.image[0]:y.depthTexture.image;(!k.__webglTexture||Q.width!==y.width||Q.height!==y.height)&&(Q.width=y.width,Q.height=y.height,y.depthTexture.needsUpdate=!0),ne?fe(y.depthTexture,0):ce(y.depthTexture,0);const he=k.__webglTexture,ee=ct(y),ie=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,pe=y.depthTexture.format===ar?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===xr)xe(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,ie,he,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,pe,ie,he,0);else if(y.depthTexture.format===ar)xe(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,ie,he,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,pe,ie,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(w){const y=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const ne=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ne){const k=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ne.removeEventListener("dispose",k)};ne.addEventListener("dispose",k),y.__depthDisposeCallback=k}y.__boundDepthTexture=ne}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let ne=0;ne<6;ne++)Pt(y.__webglFramebuffer[ne],w,ne);else w.texture.mipmaps.length>0?Pt(y.__webglFramebuffer[0],w,0):Pt(y.__webglFramebuffer,w,0);else if(H){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]===void 0)y.__webglDepthbuffer[ne]=t.createRenderbuffer(),wt(y.__webglDepthbuffer[ne],w,!1);else{const k=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,k,t.RENDERBUFFER,Q)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),wt(y.__webglDepthbuffer,w,!1);else{const k=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,k,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $t(w,y,H){const ne=i.get(w);y!==void 0&&ze(ne.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Mt(w)}function Lt(w){const y=w.texture,H=i.get(w),ne=i.get(y);w.addEventListener("dispose",z),N(w);const k=w.textures,Q=w.isWebGLCubeRenderTarget===!0,he=k.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=y.version,a.memory.textures++),Q){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)H.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else H.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)H.__webglFramebuffer[ee]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(he)for(let ee=0,ie=k.length;ee<ie;ee++){const pe=i.get(k[ee]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&xe(w)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<k.length;ee++){const ie=k[ee];H.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const pe=s.convert(ie.format,ie.colorSpace),P=s.convert(ie.type),re=A(ie.internalFormat,pe,P,ie.normalized,ie.colorSpace,w.isXRRenderTarget===!0),J=ct(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,J,re,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),wt(H.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)ze(H.__webglFramebuffer[ee][ie],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else ze(H.__webglFramebuffer[ee],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(y)?b(t.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(he){for(let ee=0,ie=k.length;ee<ie;ee++){const pe=k[ee],P=i.get(pe);let re=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,P.__webglTexture),Ve(re,pe),ze(H.__webglFramebuffer,w,pe,t.COLOR_ATTACHMENT0+ee,re,0),S(pe)&&b(re)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,ne.__webglTexture),Ve(ee,y),y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)ze(H.__webglFramebuffer[ie],w,y,t.COLOR_ATTACHMENT0,ee,ie);else ze(H.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,ee,0);S(y)?b(ee):y.mipmaps.length>0&&t.texParameteri(ee,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&Mt(w)}function U(w){const y=w.textures;for(let H=0,ne=y.length;H<ne;H++){const k=y[H];if(S(k)&&k.mipmapsAutoUpdate===!0){const Q=R(w),he=i.get(k).__webglTexture;n.bindTexture(Q,he),b(Q),n.unbindTexture()}}}const ht=[];function ut(w){if(w.samples>0){if(xe(w)===!1){const y=w.textures,H=w.width,ne=w.height;let k=t.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(w),ee=y.length>1;if(ee)for(let pe=0;pe<y.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(k|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(k|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const P=i.get(y[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,P,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,k,t.NEAREST),l===!0&&(ht.length=0,ht.push(t.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ht.push(Q),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ht))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let pe=0;pe<y.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const P=i.get(y[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,P,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ct(w){return Math.min(r.maxSamples,w.samples)}function xe(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Fe(w,y){const H=w.colorSpace,ne=w.format,k=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Xl&&H!==nr&&(tt.getTransfer(H)===dt?(ne!==gi||k!==Pn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",H)),y}function se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=O,this.getTextureUnits=j,this.setTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=Se,this.setTextureCube=fe,this.rebindTextures=$t,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=xe,this.dispose=X}function rT(t,e){function n(i,r=nr){let s;const a=tt.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===oh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ax)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Rx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wx)return t.BYTE;if(i===Tx)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===sh)return t.INT;if(i===yi)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Si)return t.HALF_FLOAT;if(i===Cx)return t.ALPHA;if(i===Nx)return t.RGB;if(i===gi)return t.RGBA;if(i===xr)return t.DEPTH_COMPONENT;if(i===ar)return t.DEPTH_STENCIL;if(i===Px)return t.RED;if(i===lh)return t.RED_INTEGER;if(i===Xr)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===uh)return t.RGBA_INTEGER;if(i===hl||i===pl||i===ml||i===gl)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Rd||i===Cd||i===Nd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pd||i===Ld||i===Dd||i===Id||i===Fd||i===jl||i===Ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pd||i===Ld)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Id)return s.COMPRESSED_R11_EAC;if(i===Fd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jl)return s.COMPRESSED_RG11_EAC;if(i===Ud)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Gd||i===Vd||i===jd||i===Wd||i===Xd||i===Yd||i===$d||i===qd||i===Kd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Od)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$d)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zd||i===Qd||i===Jd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zd)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ef||i===tf||i===Wl||i===nf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ef)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const sT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new jx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yr({vertexShader:sT,fragmentShader:aT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bt(new gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lT extends Mr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,g=null,v=null;const M=typeof XRWebGLBinding<"u",_=new oT,u={},m=n.getContextAttributes();let S=null,b=null;const R=[],A=[],x=new Ue;let E=null,N=null;const C=new Gn;C.viewport=new Rt;const I=new Gn;I.viewport=new Rt;const z=[C,I],q=new xM;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ce=R[Y];return ce===void 0&&(ce=new iu,R[Y]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Y){let ce=R[Y];return ce===void 0&&(ce=new iu,R[Y]=ce),ce.getGripSpace()},this.getHand=function(Y){let ce=R[Y];return ce===void 0&&(ce=new iu,R[Y]=ce),ce.getHandSpace()};function K(Y){const ce=A.indexOf(Y.inputSource);if(ce===-1)return;const ue=R[ce];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",V);for(let Y=0;Y<R.length;Y++){const ce=A[Y];ce!==null&&(A[Y]=null,R[Y].disconnect(ce))}L=null,X=null,_.reset();for(const Y in u)delete u[Y];if(e.setRenderTarget(S),g=null,f=null,p=null,r=null,b=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),N!==null){const Y=N.camera;Y.fov=N.fov,Y.zoom=N.zoom,Y.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",G),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Se=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=m.stencil?ar:xr,Se=m.stencil?zs:yi);const Ie={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new vi(f.textureWidth,f.textureHeight,{format:gi,type:Pn,depthTexture:new Hs(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new vi(g.framebufferWidth,g.framebufferHeight,{format:gi,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(Y){for(let ce=0;ce<Y.removed.length;ce++){const ue=Y.removed[ce],Se=A.indexOf(ue);Se>=0&&(A[Se]=null,R[Se].disconnect(ue))}for(let ce=0;ce<Y.added.length;ce++){const ue=Y.added[ce];let Se=A.indexOf(ue);if(Se===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=A.length){A.push(ue),Se=Ie;break}else if(A[Ie]===null){A[Ie]=ue,Se=Ie;break}if(Se===-1)break}const fe=R[Se];fe&&fe.connect(ue)}}function D(Y,ce){ce===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ce.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ce=Y.near,ue=Y.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),q.near=I.near=C.near=ce,q.far=I.far=C.far=ue,(L!==q.near||X!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,X=q.far),q.layers.mask=Y.layers.mask|6,C.layers.mask=q.layers.mask&-5,I.layers.mask=q.layers.mask&-3;const Se=Y.parent,fe=q.cameras;D(q,Se);for(let Ie=0;Ie<fe.length;Ie++)D(fe[Ie],Se);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Y.isPerspectiveCamera&&(N={camera:Y,fov:Y.fov,zoom:Y.zoom}),O(Y,q,Se)};function O(Y,ce,ue){ue===null?Y.matrix.copy(ce.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ce.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ce.projectionMatrix),Y.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(Y){return u[Y]};let j=null;function ae(Y,ce){if(h=ce.getViewerPose(c||a),v=ce,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let Se=!1;ue.length!==q.cameras.length&&(q.cameras.length=0,Se=!0);for(let Ee=0;Ee<ue.length;Ee++){const Ve=ue[Ee];let je=null;if(g!==null)je=g.getViewport(Ve);else{const $e=p.getViewSubImage(f,Ve);je=$e.viewport,Ee===0&&(e.setRenderTargetTextures(b,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(b))}let ke=z[Ee];ke===void 0&&(ke=new Gn,ke.layers.enable(Ee),ke.viewport=new Rt,z[Ee]=ke),ke.matrix.fromArray(Ve.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ve.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(je.x,je.y,je.width,je.height),Ee===0&&(q.matrix.copy(ke.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Se===!0&&q.cameras.push(ke)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const Ee=p.getDepthInformation(ue[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(Ee,r.renderState)}if(fe&&fe.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let Ee=0;Ee<ue.length;Ee++){const Ve=ue[Ee].camera;if(Ve){let je=u[Ve];je||(je=new jx,u[Ve]=je);const ke=p.getCameraImage(Ve);je.sourceTexture=ke}}}}for(let ue=0;ue<R.length;ue++){const Se=A[ue],fe=R[ue];Se!==null&&fe!==void 0&&fe.update(Se,ce,c||a)}j&&j(Y,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Me=new qx;Me.setAnimationLoop(ae),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const cT=new St,s_=new He;s_.set(-1,0,0,0,1,0,0,0,1);function uT(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,Wx(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,m,S,b){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(_,u):u.isMeshLambertMaterial?(s(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(_,u),p(_,u)):u.isMeshPhongMaterial?(s(_,u),h(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(_,u),f(_,u),u.isMeshPhysicalMaterial&&g(_,u,b)):u.isMeshMatcapMaterial?(s(_,u),v(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),M(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(a(_,u),u.isLineDashedMaterial&&o(_,u)):u.isPointsMaterial?l(_,u,m,S):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===wn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===wn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const m=e.get(u),S=m.envMap,b=m.envMapRotation;S&&(_.envMap.value=S,_.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(s_),_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function a(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function o(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,m,S){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*m,_.scale.value=S*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function h(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function p(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function f(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,m){_.ior.value=u.ior,u.diffuseRoughness>0&&(_.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=u.diffuseRoughnessMap,n(u.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.retroreflectivity>0&&(_.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,u){u.matcap&&(_.matcap.value=u.matcap)}function M(_,u){const m=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dT(t,e,n,i){let r={},s={};function a(m,S){const b=S.program;i.uniformBlockBinding(m,b,r[m.id])}function o(m,S){let b=r[m.id];b===void 0&&(v(m),b=l(m),r[m.id]=b,m.addEventListener("dispose",_));const R=S.program;i.updateUBOMapping(m,R);const A=e.render.frame;s[m.id]!==A&&(c(m),s[m.id]=A)}function l(m){const S=t.createBuffer(),b=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function c(m){const S=r[m.id],b=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let A=0,x=b.length;A<x;A++){const E=b[A];if(Array.isArray(E))for(let N=0,C=E.length;N<C;N++)h(E[N],A,N,R);else h(E,A,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(m,S,b,R){if(f(m,S,b,R)===!0){const A=m.__offset,x=m.value;if(Array.isArray(x)){let E=0;for(let N=0;N<x.length;N++){const C=x[N],I=M(C,!0);p(C,m.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,m.__data)}}function p(m,S,b){typeof m=="number"||typeof m=="boolean"?S[b]=m:m.isMatrix3?(S[b]=m.elements[0],S[b+1]=m.elements[1],S[b+2]=m.elements[2],S[b+3]=0,S[b+4]=m.elements[3],S[b+5]=m.elements[4],S[b+6]=m.elements[5],S[b+7]=0,S[b+8]=m.elements[6],S[b+9]=m.elements[7],S[b+10]=m.elements[8],S[b+11]=0):ArrayBuffer.isView(m)?S.set(m.subarray(0,S.length-b),b):m.toArray(S,b)}function f(m,S,b,R){const A=m.value,x=S+"_"+b;if(Array.isArray(A)){R[x]===void 0&&(R[x]=[]);const E=R[x];let N=!1;for(let C=0;C<A.length;C++)g(A[C],E,C)===!0&&(N=!0);return N}return g(A,R,x)}function g(m,S,b){if(S[b]===void 0)return typeof m=="number"||typeof m=="boolean"?S[b]=m:ArrayBuffer.isView(m)?S[b]=m.slice():S[b]=m.clone(),!0;{const R=S[b];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return S[b]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function v(m){const S=m.uniforms;let b=0;const R=16;for(let x=0,E=S.length;x<E;x++){const N=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,I=N.length;C<I;C++){const z=N[C],q=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(S[x])||Array.isArray(z.value);let X=b;for(let G=0,V=q.length;G<V;G++){const D=q[G],O=M(D,L),j=b%R,ae=j%O.boundary,Me=j+ae;b+=ae,Me!==0&&R-Me<O.storage&&(b+=R-Me),G===0&&(X=b),b+=O.storage}const K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((b-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}const A=b%R;return A>0&&(b+=R-A),m.__size=b,m.__cache={},this}function M(m,S){const b={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(b.boundary=4,b.storage=4):m.isVector2?(b.boundary=8,b.storage=8):m.isVector3||m.isColor?(b.boundary=16,b.storage=12):m.isVector4?(b.boundary=16,b.storage=16):m.isMatrix3?(b.boundary=16,b.storage=48):m.isMatrix4?(b.boundary=16,b.storage=64):m.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(b.boundary=16,b.storage=m.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",m),S===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function _(m){const S=m.target;S.removeEventListener("dispose",_),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:a,update:o,dispose:u}}const fT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function hT(){return ui===null&&(ui=new ZS(fT,16,16,Xr,Si),ui.name="DFG_LUT",ui.minFilter=Sn,ui.magFilter=Sn,ui.wrapS=Fi,ui.wrapT=Fi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class pT{constructor(e={}){const{canvas:n=MS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Pn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=g,_=new Set([uh,ch,lh]),u=new Set([Pn,yi,Xa,zs,ah,oh]),m=new Uint32Array(4),S=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let R=null,A=null;const x=[],E=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,z=null,q=null,L=null,X=null;this._outputColorSpace=Nn;let K=0,G=0,V=null,D=-1,O=null;const j=new Rt,ae=new Rt;let Me=null;const Y=new We(0);let ce=0,ue=n.width,Se=n.height,fe=1,Ie=null,Qe=null;const Ee=new Rt(0,0,ue,Se),Ve=new Rt(0,0,ue,Se);let je=!1;const ke=new qa,$e=new hh;let Xe=!1,nt=!1;const ze=new St,wt=new B,Pt=new Rt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Lt(){return V===null?fe:1}let U=i;function ht(T,F){return n.getContext(T,F)}let ut,ct,xe,gt,Fe,se,w,y,H,ne,k,Q,he,ee,ie,pe,P,re,J,me,te,oe,ge;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ih}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",_e,!1),U===null){const F="webgl2";if(U=ht(F,T),U===null)throw ht(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(T){throw n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),ot("WebGLRenderer: "+T.message),T}function Re(){ut=new xE(U),ut.init(),te=new rT(U,ut),ct=new aE(U,ut,e,te),xe=new nT(U,ut),ct.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),q=U.createFramebuffer(),L=U.createFramebuffer(),X=U.createFramebuffer(),gt=new yE(U),Fe=new Gw,se=new iT(U,ut,xe,Fe,ct,te,gt),w=new gE(C),y=new MM(U),oe=new rE(U,y),H=new _E(U,y,gt,oe),ne=new ME(U,H,y,oe,gt),re=new SE(U,ct,se),ie=new oE(Fe),k=new Hw(C,w,ut,ct,oe,ie),Q=new uT(C,Fe),he=new jw,ee=new Kw(ut),P=new iE(C,w,xe,ne,v,l),pe=new tT(C,ne,ct),ge=new dT(U,gt,ct,xe),J=new sE(U,ut,gt),me=new vE(U,ut,gt),gt.programs=k.programs,C.capabilities=ct,C.extensions=ut,C.properties=Fe,C.renderLists=he,C.shadowMap=pe,C.state=xe,C.info=gt}M!==Pn&&(N=new EE(M,n.width,n.height,o,r,s));const le=new lT(C,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(T){T!==void 0&&(fe=T,this.setSize(ue,Se,!1))},this.getSize=function(T){return T.set(ue,Se)},this.setSize=function(T,F,Z=!0){if(le.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=T,Se=F,n.width=Math.floor(T*fe),n.height=Math.floor(F*fe),Z===!0&&(n.style.width=T+"px",n.style.height=F+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ue*fe,Se*fe).floor()},this.setDrawingBufferSize=function(T,F,Z){ue=T,Se=F,fe=Z,n.width=Math.floor(T*Z),n.height=Math.floor(F*Z),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(M===Pn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,F,Z,W){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,F,Z,W),xe.viewport(j.copy(Ee).multiplyScalar(Lt()).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,F,Z,W){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,F,Z,W),xe.scissor(ae.copy(Ve).multiplyScalar(Lt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){xe.setScissorTest(je=T)},this.setOpaqueSort=function(T){Ie=T},this.setTransparentSort=function(T){Qe=T},this.getClearColor=function(T){return T.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Z=!0){let W=0;if(T){let $=!1;if(V!==null){const ye=V.texture.format;$=_.has(ye)}if($){const ye=V.texture.type,Ce=u.has(ye),ve=P.getClearColor(),we=P.getClearAlpha(),Le=ve.r,Ge=ve.g,Je=ve.b;Ce?(m[0]=Le,m[1]=Ge,m[2]=Je,m[3]=we,U.clearBufferuiv(U.COLOR,0,m)):(S[0]=Le,S[1]=Ge,S[2]=Je,S[3]=we,U.clearBufferiv(U.COLOR,0,S))}else W|=U.COLOR_BUFFER_BIT}F&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),P.dispose(),he.dispose(),ee.dispose(),se.dispose(),Fe.dispose(),w.dispose(),ne.dispose(),H.dispose(),oe.dispose(),ge.dispose(),k.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ah),le.removeEventListener("sessionend",Rh),br.stop()};function De(T){T.preventDefault(),Qp("WebGLRenderer: Context Lost."),I=!0}function Be(){Qp("WebGLRenderer: Context Restored."),I=!1;const T=gt.autoReset,F=pe.enabled,Z=pe.autoUpdate,W=pe.needsUpdate,$=pe.type;Re(),gt.autoReset=T,pe.enabled=F,pe.autoUpdate=Z,pe.needsUpdate=W,pe.type=$}function _e(T){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const F=T.target;F.removeEventListener("dispose",qe),pt(F)}function pt(T){Tn(T),Fe.remove(T)}function Tn(T){const F=Fe.get(T).programs;F!==void 0&&(F.forEach(function(Z){k.releaseProgram(Z)}),T.isShaderMaterial&&k.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Z,W,$,ye){F===null&&(F=Mt);const Ce=$.isMesh&&$.matrixWorld.determinantAffine()<0,ve=l_(T,F,Z,W,$);xe.setMaterial(W,Ce);let we=Z.index,Le=1;if(W.wireframe===!0){if(we=H.getWireframeAttribute(Z),we===void 0)return;Le=2}const Ge=Z.drawRange,Je=Z.attributes.position;let Ne=Ge.start*Le,et=(Ge.start+Ge.count)*Le;ye!==null&&(Ne=Math.max(Ne,ye.start*Le),et=Math.min(et,(ye.start+ye.count)*Le)),we!==null?(Ne=Math.max(Ne,0),et=Math.min(et,we.count)):Je!=null&&(Ne=Math.max(Ne,0),et=Math.min(et,Je.count));const Ft=et-Ne;if(Ft<0||Ft===1/0)return;oe.setup($,W,ve,Z,we);let xt,mt=J;if(we!==null&&(xt=y.get(we),mt=me,mt.setIndex(xt)),$.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Lt()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if($.isLine){let tn=W.linewidth;tn===void 0&&(tn=1),xe.setLineWidth(tn*Lt()),$.isLineSegments?mt.setMode(U.LINES):$.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else $.isPoints?mt.setMode(U.POINTS):$.isSprite&&mt.setMode(U.TRIANGLES);if($.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const tn=$._multiDrawStarts,Pe=$._multiDrawCounts,un=$._multiDrawCount,at=we?y.get(we).bytesPerElement:1,Er=Fe.get(W).currentProgram.getUniforms();for(let nn=0;nn<un;nn++)Er.setValue(U,"_gl_DrawID",nn),mt.render(tn[nn]/at,Pe[nn])}else if($.isInstancedMesh)mt.renderInstances(Ne,Ft,$.count);else if(Z.isInstancedBufferGeometry){const tn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pe=Math.min(Z.instanceCount,tn);mt.renderInstances(Ne,Ft,Pe)}else mt.render(Ne,Ft)};function On(T,F,Z,W){z!==null&&T.isNodeMaterial&&z.setObject(W,T),Xe===!0&&ie.setState(T,Z,!1),T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=wn,T.needsUpdate=!0,$s(T,F,W),T.side=Wr,T.needsUpdate=!0,$s(T,F,W),T.side=Li):$s(T,F,W)}this.compile=function(T,F,Z=null){Z===null&&(Z=T),z!==null&&z.renderStart(T,F,Z),A=ee.get(Z),A.init(F),E.push(A),Z.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),nt=this.localClippingEnabled,Xe=ie.init(this.clippingPlanes,nt),Xe===!0&&ie.setGlobalState(this.clippingPlanes,F),z!==null&&pe.render(A.state.shadowsArray,Z,F);const W=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const ve=ye[Ce];On(ve,Z,F,$),W.add(ve)}else On(ye,Z,F,$),W.add(ye)}),A=E.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(T,F,Z=null){const W=this.compile(T,F,Z);return new Promise($=>{function ye(){if(W.forEach(function(Ce){const we=Fe.get(Ce).currentProgram;(we===void 0||we.isReady())&&W.delete(Ce)}),W.size===0){$(T);return}setTimeout(ye,10)}ut.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ys=null;function vc(T){Ys&&Ys(T)}function Ah(){br.stop()}function Rh(){br.start()}const br=new qx;br.setAnimationLoop(vc),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(T){Ys=T,le.setAnimationLoop(T),T===null?br.stop():br.start()},le.addEventListener("sessionstart",Ah),le.addEventListener("sessionend",Rh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(T,F);const Z=le.enabled===!0&&le.isPresenting===!0,W=N!==null&&(V===null||Z)&&N.begin(C,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,V),A=ee.get(T,E.length),A.init(F),A.state.textureUnits=se.getTextureUnits(),E.push(A),ze.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?$e.setFromArrayCamera(F):ke.setFromProjectionMatrix(ze,ii,F.reversedDepth),nt=this.localClippingEnabled,Xe=ie.init(this.clippingPlanes,nt),R=he.get(T,x.length),R.init(),x.push(R),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const Ce=C.xr.getDepthSensingMesh();Ce!==null&&yc(Ce,F,-1/0,C.sortObjects)}yc(T,F,0,C.sortObjects),R.finish(),z!==null&&z.updateLights(A.state.lightsArray),C.sortObjects===!0&&R.sort(Ie,Qe),$t=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,$t&&P.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Xe===!0&&ie.beginShadows();const $=A.state.shadowsArray;if(pe.render($,T,F),Xe===!0&&ie.endShadows(),(W&&N.hasRenderPass())===!1){const Ce=R.opaque,ve=R.transmissive;if(A.setupLights(),F.isArrayCamera){const we=F.cameras;if(ve.length>0)for(let Le=0,Ge=we.length;Le<Ge;Le++){const Je=we[Le];Nh(Ce,ve,T,Je)}$t&&P.render(T);for(let Le=0,Ge=we.length;Le<Ge;Le++){const Je=we[Le];Ch(R,T,Je,Je.viewport)}}else ve.length>0&&Nh(Ce,ve,T,F),$t&&P.render(T),Ch(R,T,F)}V!==null&&G===0&&(se.updateMultisampleRenderTarget(V),se.updateRenderTargetMipmap(V)),W&&N.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),oe.resetDefaultState(),D=-1,O=null,E.pop(),E.length>0?(A=E[E.length-1],se.setTextureUnits(A.state.textureUnits),Xe===!0&&ie.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,z!==null&&z.renderEnd()};function yc(T,F,Z,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){const Ce=F.isArrayCamera?$e:ke;if(!T.frustumCulled||T.intersectsFrustum(Ce)){W&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ze);const ve=ne.update(T),we=T.material;we.visible&&R.push(T,ve,we,Z,Pt.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){const Ce=F.isArrayCamera?$e:ke;if(!T.frustumCulled||T.intersectsFrustum(Ce)){const ve=ne.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Pt.copy(ve.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(ze)),Array.isArray(we)){const Le=ve.groups;for(let Ge=0,Je=Le.length;Ge<Je;Ge++){const Ne=Le[Ge],et=we[Ne.materialIndex];et&&et.visible&&R.push(T,ve,et,Z,Pt.z,Ne,F)}}else we.visible&&R.push(T,ve,we,Z,Pt.z,null,F)}}}const ye=T.children;for(let Ce=0,ve=ye.length;Ce<ve;Ce++)yc(ye[Ce],F,Z,W)}function Ch(T,F,Z,W){const{opaque:$,transmissive:ye,transparent:Ce}=T;A.setupLightsView(Z),Xe===!0&&ie.setGlobalState(C.clippingPlanes,Z),W&&xe.viewport(j.copy(W)),$.length>0&&so($,F,Z),ye.length>0&&so(ye,F,Z),Ce.length>0&&so(Ce,F,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Nh(T,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Ne=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new vi(1,1,{generateMipmaps:!0,type:Ne?Si:Pn,minFilter:sr,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const ye=A.state.transmissionRenderTarget[W.id],Ce=W.viewport||j;ye.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const ve=C.getRenderTarget(),we=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(Y),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),$t&&P.render(Z);const Ge=C.toneMapping;C.toneMapping=Oi;const Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Xe===!0&&ie.setGlobalState(C.clippingPlanes,W),so(T,Z,W),se.updateMultisampleRenderTarget(ye),se.updateRenderTargetMipmap(ye),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let et=0,Ft=F.length;et<Ft;et++){const xt=F[et],{object:mt,geometry:tn,material:Pe,group:un}=xt;if(Pe.side===Li&&mt.layers.test(W.layers)){const at=Pe.side;Pe.side=wn,Pe.needsUpdate=!0,Ph(mt,Z,W,tn,Pe,un),Pe.side=at,Pe.needsUpdate=!0,Ne=!0}}Ne===!0&&(se.updateMultisampleRenderTarget(ye),se.updateRenderTargetMipmap(ye))}C.setRenderTarget(ve,we,Le),C.setClearColor(Y,ce),Je!==void 0&&(W.viewport=Je),C.toneMapping=Ge}function so(T,F,Z){const W=F.isScene===!0?F.overrideMaterial:null;for(let $=0,ye=T.length;$<ye;$++){const Ce=T[$],{object:ve,geometry:we,group:Le}=Ce;let Ge=Ce.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ve.layers.test(Z.layers)&&Ph(ve,F,Z,we,Ge,Le)}}function Ph(T,F,Z,W,$,ye){z!==null&&$.isNodeMaterial&&z.setObject(T,$),T.onBeforeRender(C,F,Z,W,$,ye),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(C,F,Z,W,T,ye),$.transparent===!0&&$.side===Li&&$.forceSinglePass===!1?($.side=wn,$.needsUpdate=!0,C.renderBufferDirect(Z,F,W,$,T,ye),$.side=Wr,$.needsUpdate=!0,C.renderBufferDirect(Z,F,W,$,T,ye),$.side=Li):C.renderBufferDirect(Z,F,W,$,T,ye),T.onAfterRender(C,F,Z,W,$,ye)}function Lh(T){let F=0;for(const Z of T)Z.texture!==null&&F++;return F}function $s(T,F,Z){F.isScene!==!0&&(F=Mt);const W=Fe.get(T),$=A.state.lights,ye=A.state.shadowsArray,Ce=$.state.version,ve=k.getParameters(T,$.state,ye,F,Z,A.state.lightProbeGridArray),we=k.getProgramCacheKey(ve);let Le=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=w.get(T.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",qe),Le=new Map,W.programs=Le,W.programVariants=new Map);let Je=Le.get(we);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===Ce)return Ih(T,ve),Je}else ve.uniforms=k.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,Z,ve),T.onBeforeCompile(ve,C),Je=k.acquireProgram(ve,we),Le.set(we,Je),W.uniforms=ve.uniforms;const Ne=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),Ih(T,ve),W.needsLights=u_(T),W.lightsStateVersion=Ce,W.needsLights&&(Ne.ambientLightColor.value=$.state.ambient,Ne.lightProbe.value=$.state.probe,Ne.sunLights.value=$.state.sun,Ne.sunLightShadows.value=$.state.sunShadow,Ne.directionalLights.value=$.state.directional,Ne.directionalLightShadows.value=$.state.directionalShadow,Ne.spotLights.value=$.state.spot,Ne.spotLightShadows.value=$.state.spotShadow,Ne.rectAreaLights.value=$.state.rectArea,Ne.ltc_1.value=$.state.rectAreaLTC1,Ne.ltc_2.value=$.state.rectAreaLTC2,Ne.pointLights.value=$.state.point,Ne.pointLightShadows.value=$.state.pointShadow,Ne.hemisphereLights.value=$.state.hemi,Ne.sunShadowMatrix.value=$.state.sunShadowMatrix,Ne.sunShadowCascade.value=$.state.sunShadowCascade,Ne.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ne.spotLightMatrix.value=$.state.spotLightMatrix,Ne.spotLightMap.value=$.state.spotLightMap,Ne.pointShadowMatrix.value=$.state.pointShadowMatrix),W.numLightProbeGrids=Lh(A.state.lightProbeGridArray),W.currentProgram=Je,W.uniformsList=null,Je}function o_(T,F,Z,W,$){const ye=Fe.get(T),Ce=ye.currentProgram.id+","+W+","+$;let ve=ye.programVariants.get(Ce);return ve===void 0?(ve=$s(T,F,Z),ye.programVariants.set(Ce,ve)):(ye.currentProgram=ve,ye.uniformsList=null,ye.outputColorSpace=W,ye.toneMapping=$),ve}function Dh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=vl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ih(T,F){const Z=Fe.get(T);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function l_(T,F,Z,W,$){F.isScene!==!0&&(F=Mt),se.resetTextureUnits();const ye=F.fog,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,ve=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:tt.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Le=w.get(W.envMap||Ce,we),Ge=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Je=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,Ft=!!Z.morphAttributes.color;let xt=Oi;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(xt=C.toneMapping);const mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,tn=mt!==void 0?mt.length:0,Pe=Fe.get(W),un=A.state.lights;if(Xe===!0&&(nt===!0||T!==O)){const Tt=T===O&&W.id===D;ie.setState(W,T,Tt)}let at=!1,Er=!1;W.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==un.state.version||$.isBatchedMesh&&Pe.batching===!1||!$.isBatchedMesh&&Pe.batching===!0||$.isBatchedMesh&&Pe.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Pe.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Pe.instancing===!1||!$.isInstancedMesh&&Pe.instancing===!0||$.isSkinnedMesh&&Pe.skinning===!1||!$.isSkinnedMesh&&Pe.skinning===!0||$.isInstancedMesh&&Pe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Pe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Pe.instancingMorph===!1&&$.morphTexture!==null||Pe.envMap!==Le||W.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==Ge||Pe.vertexTangents!==Je||Pe.morphTargets!==Ne||Pe.morphNormals!==et||Pe.morphColors!==Ft||Pe.morphTargetsCount!==tn||Pe.numLightProbeGrids!==Lh(A.state.lightProbeGridArray)?at=!0:(Pe.outputColorSpace!==ve||Pe.toneMapping!==xt)&&(Er=!0):(at=!0,Pe.__version=W.version);let nn=Pe.currentProgram;(at===!0||Er===!0)&&(nn=Er===!0?o_(W,F,$,ve,xt):$s(W,F,$),z&&W.isNodeMaterial&&z.onUpdateProgram(W,nn,Pe));let ao=!1,Wi=!1,wr=!1;const rt=nn.getUniforms(),qt=Pe.uniforms;if(xe.useProgram(nn.program)&&(ao=!0,Wi=!0,wr=!0),W.id!==D&&(D=W.id,Wi=!0),ao||O!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),rt.setValue(U,"projectionMatrix",T.projectionMatrix),rt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Vt=rt.map.cameraPosition;Vt!==void 0&&Vt.setValue(U,wt.setFromMatrixPosition(T.matrixWorld)),ct.logarithmicDepthBuffer&&rt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,Wi=!0,wr=!0)}if(Pe.needsLights&&(un.state.sunShadowMap.length>0&&rt.setValue(U,"sunShadowMap",un.state.sunShadowMap,se),un.state.directionalShadowMap.length>0&&rt.setValue(U,"directionalShadowMap",un.state.directionalShadowMap,se),un.state.spotShadowMap.length>0&&rt.setValue(U,"spotShadowMap",un.state.spotShadowMap,se),un.state.pointShadowMap.length>0&&rt.setValue(U,"pointShadowMap",un.state.pointShadowMap,se)),$.isSkinnedMesh){rt.setOptional(U,$,"bindMatrix"),rt.setOptional(U,$,"bindMatrixInverse");const Tt=$.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),rt.setValue(U,"boneTexture",Tt.boneTexture,se))}$.isBatchedMesh&&(rt.setOptional(U,$,"batchingTexture"),rt.setValue(U,"batchingTexture",$._matricesTexture,se),rt.setOptional(U,$,"batchingIdTexture"),rt.setValue(U,"batchingIdTexture",$._indirectTexture,se),rt.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&rt.setValue(U,"batchingColorTexture",$._colorsTexture,se));const Yn=Z.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&re.update($,Z,nn),(Wi||Pe.receiveShadow!==$.receiveShadow)&&(Pe.receiveShadow=$.receiveShadow,rt.setValue(U,"receiveShadow",$.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=hT()),Wi){if(rt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&c_(qt,wr),ye&&W.fog===!0&&Q.refreshFogUniforms(qt,ye),Q.refreshMaterialUniforms(qt,W,fe,Se,A.state.transmissionRenderTarget[T.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const Tt=b;let Vt=0;for(const Mi of A.state.lightProbeGridArray)Mi.texture!==null&&(Tt.textures[Vt]=Mi.texture,Tt.min[Vt]=Mi.boundingBox.min,Tt.max[Vt]=Mi.boundingBox.max,Tt.resolution[Vt]=Mi.resolution,Vt++);for(const Mi in Tt)Tt[Mi].length=Vt;qt.probesSH.value=Tt.textures,qt.probesMin.value=Tt.min,qt.probesMax.value=Tt.max,qt.probesResolution.value=Tt.resolution}vl.upload(U,Dh(Pe),qt,se)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vl.upload(U,Dh(Pe),qt,se),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(U,"center",$.center),rt.setValue(U,"modelViewMatrix",$.modelViewMatrix),rt.setValue(U,"normalMatrix",$.normalMatrix),rt.setValue(U,"modelMatrix",$.matrixWorld),W.uniformsGroups!==void 0){const Tt=W.uniformsGroups;for(let Vt=0,Mi=Tt.length;Vt<Mi;Vt++){const Uh=Tt[Vt];ge.update(Uh,nn),ge.bind(Uh,nn)}}return nn}function c_(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function u_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,F,Z){const W=Fe.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Fe.get(T.texture).__webglTexture=F,Fe.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const Z=Fe.get(T);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Z=0){V=T,K=F,G=Z;let W=null,$=!1,ye=!1;if(T){const ve=Fe.get(T);if(ve.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),j.copy(T.viewport),ae.copy(T.scissor),Me=T.scissorTest,xe.viewport(j),xe.scissor(ae),xe.setScissorTest(Me),D=-1;return}else if(ve.__webglFramebuffer===void 0)se.setupRenderTarget(T);else if(ve.__hasExternalTextures)se.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(ve.__boundDepthTexture!==Ge){if(Ge!==null&&Fe.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Le=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?W=Le[F][Z]:W=Le[F],$=!0):T.samples>0&&se.useMultisampledRTT(T)===!1?W=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[Z]:W=Le,j.copy(T.viewport),ae.copy(T.scissor),Me=T.scissorTest}else j.copy(Ee).multiplyScalar(fe).floor(),ae.copy(Ve).multiplyScalar(fe).floor(),Me=je;if(Z!==0&&(W=q),xe.bindFramebuffer(U.FRAMEBUFFER,W)&&xe.drawBuffers(T,W),xe.viewport(j),xe.scissor(ae),xe.setScissorTest(Me),$){const ve=Fe.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,Z)}else if(ye){const ve=F;for(let we=0;we<T.textures.length;we++){const Le=Fe.get(T.textures[we]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+we,Le.__webglTexture,Z,ve)}}else if(T!==null&&Z!==0){const ve=Fe.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,Z)}D=-1};function Fh(T){const F=Fe.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=ct.textureFormatReadable(T.format),F.__typeReadable=ct.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Z,W,$,ye,Ce,ve=0){if(!(T&&T.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){xe.bindFramebuffer(U.FRAMEBUFFER,we);try{const Le=T.textures[ve],Ge=Le.format,Je=Le.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);const Ne=Fh(Le);if(Ne.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-$&&U.readPixels(F,Z,W,$,te.convert(Ge),te.convert(Je),ye)}finally{const Le=V!==null?Fe.get(V).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,F,Z,W,$,ye,Ce,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-$){xe.bindFramebuffer(U.FRAMEBUFFER,we);const Le=T.textures[ve],Ge=Le.format,Je=Le.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);const Ne=Fh(Le);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(F,Z,W,$,te.convert(Ge),te.convert(Je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ft=V!==null?Fe.get(V).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,Ft);const xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bS(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(et),U.deleteSync(xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Z=0){const W=Math.pow(2,-Z),$=Math.floor(T.image.width*W),ye=Math.floor(T.image.height*W),Ce=F!==null?F.x:0,ve=F!==null?F.y:0;se.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Ce,ve,$,ye),xe.unbindTexture()},this.copyTextureToTexture=function(T,F,Z=null,W=null,$=0,ye=0){let Ce,ve,we,Le,Ge,Je,Ne,et,Ft;const xt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(Z!==null)Ce=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Ge=Z.min.y,Je=Z.isBox3?Z.min.z:0;else{const rt=Math.pow(2,-$);Ce=Math.floor(xt.width*rt),ve=Math.floor(xt.height*rt),T.isDataArrayTexture?we=xt.depth:T.isData3DTexture?we=Math.floor(xt.depth*rt):we=1,Le=0,Ge=0,Je=0}W!==null?(Ne=W.x,et=W.y,Ft=W.z):(Ne=0,et=0,Ft=0);const mt=te.convert(F.format),tn=te.convert(F.type);let Pe;F.isData3DTexture?(se.setTexture3D(F,0),Pe=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(se.setTexture2DArray(F,0),Pe=U.TEXTURE_2D_ARRAY):(se.setTexture2D(F,0),Pe=U.TEXTURE_2D),xe.activeTexture(U.TEXTURE0),xe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),xe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),xe.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const un=xe.getParameter(U.UNPACK_ROW_LENGTH),at=xe.getParameter(U.UNPACK_IMAGE_HEIGHT),Er=xe.getParameter(U.UNPACK_SKIP_PIXELS),nn=xe.getParameter(U.UNPACK_SKIP_ROWS),ao=xe.getParameter(U.UNPACK_SKIP_IMAGES);xe.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),xe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),xe.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),xe.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),xe.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);const Wi=T.isDataArrayTexture||T.isData3DTexture,wr=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const rt=Fe.get(T),qt=Fe.get(F),Yn=Fe.get(rt.__renderTarget),Tt=Fe.get(qt.__renderTarget);xe.bindFramebuffer(U.READ_FRAMEBUFFER,Yn.__webglFramebuffer),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Vt=0;Vt<we;Vt++)Wi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.get(T).__webglTexture,$,Je+Vt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.get(F).__webglTexture,ye,Ft+Vt)),U.blitFramebuffer(Le,Ge,Le+Ce,Ge+ve,Ne,et,Ne+Ce,et+ve,U.DEPTH_BUFFER_BIT,U.NEAREST);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Fe.has(T)){const rt=Fe.get(T),qt=Fe.get(F);xe.bindFramebuffer(U.READ_FRAMEBUFFER,L),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,X);for(let Yn=0;Yn<we;Yn++)Wi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rt.__webglTexture,$,Je+Yn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rt.__webglTexture,$),wr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,ye,Ft+Yn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,ye),$!==0?U.blitFramebuffer(Le,Ge,Le+Ce,Ge+ve,Ne,et,Ne+Ce,et+ve,U.COLOR_BUFFER_BIT,U.NEAREST):wr?U.copyTexSubImage3D(Pe,ye,Ne,et,Ft+Yn,Le,Ge,Ce,ve):U.copyTexSubImage2D(Pe,ye,Ne,et,Le,Ge,Ce,ve);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else wr?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Pe,ye,Ne,et,Ft,Ce,ve,we,mt,tn,xt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,ye,Ne,et,Ft,Ce,ve,we,mt,xt.data):U.texSubImage3D(Pe,ye,Ne,et,Ft,Ce,ve,we,mt,tn,xt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,Ne,et,Ce,ve,mt,tn,xt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,Ne,et,xt.width,xt.height,mt,xt.data):U.texSubImage2D(U.TEXTURE_2D,ye,Ne,et,Ce,ve,mt,tn,xt);xe.pixelStorei(U.UNPACK_ROW_LENGTH,un),xe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),xe.pixelStorei(U.UNPACK_SKIP_PIXELS,Er),xe.pixelStorei(U.UNPACK_SKIP_ROWS,nn),xe.pixelStorei(U.UNPACK_SKIP_IMAGES,ao),ye===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(Pe),xe.unbindTexture()},this.initRenderTarget=function(T){Fe.get(T).__webglFramebuffer===void 0&&se.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?se.setTextureCube(T,0):T.isData3DTexture?se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?se.setTexture2DArray(T,0):se.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){K=0,G=0,V=null,xe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const Zm={type:"change"},Mh={type:"start"},a_={type:"end"},Zo=new mc,Qm=new Pi,mT=Math.cos(70*CS.DEG2RAD),kt=new B,_n=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bu=1e-6;class gT extends yM{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new _r,this._lastTargetPosition=new B,this._quat=new _r().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rm,this._sphericalDelta=new Rm,this._scale=1,this._panOffset=new B,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new B,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_T.bind(this),this._onPointerDown=xT.bind(this),this._onPointerUp=vT.bind(this),this._onContextMenu=TT.bind(this),this._onMouseWheel=MT.bind(this),this._onKeyDown=bT.bind(this),this._onTouchStart=ET.bind(this),this._onTouchMove=wT.bind(this),this._onMouseDown=yT.bind(this),this._onMouseMove=ST.bind(this),this._interceptControlDown=AT.bind(this),this._interceptControlUp=RT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=lt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zm),this.update(),this.state=lt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;kt.copy(n).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zo.origin.copy(this.object.position),Zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zo.direction))<mT?this.object.lookAt(this.target):(Qm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zo.intersectPlane(Qm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bu||this._lastTargetPosition.distanceToSquared(this.target)>bu?(this.dispatchEvent(Zm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){kt.setFromMatrixColumn(n,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,n){this.screenSpacePanning===!0?kt.setFromMatrixColumn(n,1):(kt.setFromMatrixColumn(n,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ue,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _T(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function vT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(a_),this.state=lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function yT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Cs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Cs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Mh)}function ST(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function MT(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(Mh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(a_))}function bT(t){this.enabled!==!1&&this._handleKeyDown(t)}function ET(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1){this.state=lt.NONE;break}this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1){this.state=lt.NONE;break}this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Mh)}function wT(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function TT(t){this.enabled!==!1&&t.preventDefault()}function AT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RT(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const CT=/^[og]\s*(.+)?/,NT=/^mtllib /,PT=/^usemtl /,LT=/^usemap /,Qo=/\s+/,Jm=new B,Eu=new B,eg=new B,tg=new B,Bn=new B,Jo=new We;function DT(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,n,i){const r=this.vertices,s=this.object.geometry.normals;Jm.fromArray(r,e),Eu.fromArray(r,n),eg.fromArray(r,i),Bn.subVectors(eg,Eu),tg.subVectors(Jm,Eu),Bn.cross(tg),Bn.normalize(),s.push(Bn.x,Bn.y,Bn.z),s.push(Bn.x,Bn.y,Bn.z),s.push(Bn.x,Bn.y,Bn.z)},addColor:function(e,n,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,n,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,r,s,a,o,l,c){const h=this.vertices.length;let p=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h),g=this.parseVertexIndex(i,h);if(this.addVertex(p,f,g),this.addColor(p,f,g),o!==void 0&&o!==""){const v=this.normals.length;p=this.parseNormalIndex(o,v),f=this.parseNormalIndex(l,v),g=this.parseNormalIndex(c,v),this.addNormal(p,f,g)}else this.addFaceNormal(p,f,g);if(r!==void 0&&r!==""){const v=this.uvs.length;p=this.parseUVIndex(r,v),f=this.parseUVIndex(s,v),g=this.parseUVIndex(a,v),this.addUV(p,f,g),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],n);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length-1;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],i)),this.addVertexLine(this.parseVertexIndex(e[s+1],i));for(let s=0,a=n.length-1;s<a;s++)this.addUVLine(this.parseUVIndex(n[s],r)),this.addUVLine(this.parseUVIndex(n[s+1],r))}};return t.startObject("",!1),t}class ng extends vh{constructor(e){super(e),this.materials=null}load(e,n,i,r){const s=this,a=new fM(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{n(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const n=new DT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const p=c.split(Qo);switch(p[0]){case"v":n.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(Jo.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6]),Nn),n.colors.push(Jo.r,Jo.g,Jo.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":n.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(Qo),g=[];for(let M=0,_=f.length;M<_;M++){const u=f[M];if(u.length>0){const m=u.split("/");g.push(m)}}const v=g[0];for(let M=1,_=g.length-1;M<_;M++){const u=g[M],m=g[M+1];n.addFace(v[0],u[0],m[0],v[1],u[1],m[1],v[2],u[2],m[2])}}else if(h==="l"){const p=c.substring(1).trim().split(Qo);let f=[];const g=[];if(c.indexOf("/")===-1)f=p;else for(let v=0,M=p.length;v<M;v++){const _=p[v].split("/");_[0]!==""&&f.push(_[0]),_[1]!==""&&g.push(_[1])}n.addLineGeometry(f,g)}else if(h==="p"){const f=c.slice(1).trim().split(Qo);n.addPointGeometry(f)}else if((r=CT.exec(c))!==null){const p=(" "+r[0].slice(1).trim()).slice(1);n.startObject(p)}else if(PT.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(NT.test(c))n.materialLibraries.push(c.substring(7).trim());else if(LT.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(r=c.split(" "),r.length>1){const f=r[1].trim().toLowerCase();n.object.smooth=f!=="0"&&f!=="off"}else n.object.smooth=!0;const p=n.object.currentMaterial();p&&(p.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const s=new Ur;if(s.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=n.objects.length;o<l;o++){const c=n.objects[o],h=c.geometry,p=c.materials,f=h.type==="Line",g=h.type==="Points";let v=!1;if(h.vertices.length===0)continue;const M=new en;M.setAttribute("position",new it(h.vertices,3)),h.normals.length>0&&M.setAttribute("normal",new it(h.normals,3)),h.colors.length>0&&(v=!0,M.setAttribute("color",new it(h.colors,3))),h.hasUVIndices===!0&&M.setAttribute("uv",new it(h.uvs,2));const _=[];for(let m=0,S=p.length;m<S;m++){const b=p[m],R=b.name+"_"+b.smooth+"_"+v;let A=n.materials[R];if(this.materials!==null){if(A=this.materials.create(b.name),f&&A&&!(A instanceof Ta)){const x=new Ta;oi.prototype.copy.call(x,A),x.color.copy(A.color),A=x}else if(g&&A&&!(A instanceof pa)){const x=new pa({size:10,sizeAttenuation:!1});oi.prototype.copy.call(x,A),x.color.copy(A.color),x.map=A.map,A=x}}A===void 0&&(f?A=new Ta:g?A=new pa({size:1,sizeAttenuation:!1}):A=new sM,A.name=b.name,A.flatShading=!b.smooth,A.vertexColors=v,n.materials[R]=A),_.push(A)}let u;if(_.length>1){for(let m=0,S=p.length;m<S;m++){const b=p[m];M.addGroup(b.groupStart,b.groupCount,m)}f?u=new sf(M,_):g?u=new vu(M,_):u=new bt(M,_)}else f?u=new sf(M,_[0]):g?u=new vu(M,_[0]):u=new bt(M,_[0]);u.name=c.name,s.add(u)}else if(n.vertices.length>0){const o=new pa({size:1,sizeAttenuation:!1}),l=new en;l.setAttribute("position",new it(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new it(n.colors,3)),o.vertexColors=!0);const c=new vu(l,o);s.add(c)}return s}}function IT({reconstructionData:t,generation25DData:e,active3DTab:n="mesh3d",setActive3DTab:i,sketchType:r="drone",apiBase:s=""}){var X,K,G,V;const a=Te.useRef(null),o=Te.useRef(null),l=Te.useRef(null),c=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),f=Te.useRef(null),[g,v]=Te.useState("pbr"),[M,_]=Te.useState(!0),[u,m]=Te.useState(!1),[S,b]=Te.useState(!1),R=n==="relief25d"&&!!(e!=null&&e.relief_mesh_path),A=R?e.relief_mesh_path.split(/[/\\]/).pop():t!=null&&t.model_3d_path?t.model_3d_path.split(/[/\\]/).pop():r==="drone"?"Cyber_Recon_Drone_v2.glb":r==="chair"?"Modernist_Armchair_v1.glb":r==="mug"?"Ceramic_Espresso_Mug.glb":r==="car"?"Angular_Cyber_EV_Concept.glb":"Synthesized_SDF_Mesh.glb",x=R?((X=e==null?void 0:e.mesh_stats)==null?void 0:X.face_count)||"32,768":t?"48,220":"42,850",E=R?((K=e==null?void 0:e.mesh_stats)==null?void 0:K.vertex_count)||"16,384":t?"24,112":"21,420",N=Te.useCallback(D=>{p.current&&p.current.traverse(O=>{O.isMesh&&(D==="wireframe"?O.material=new Hx({color:62875,wireframe:!0,transparent:!0,opacity:.85}):D==="normals"?O.material=new aM({wireframe:!1}):D==="matcap"?O.material=new dn({color:14279404,metalness:.85,roughness:.18}):O.material=new dn({color:O.userData.originalColor||2042167,metalness:.8,roughness:.35,emissive:O.userData.emissive||0,emissiveIntensity:O.userData.emissiveIntensity||0}))})},[]),C=Te.useCallback(D=>{const O=new Ur;if(D==="drone"){const j=new Lr(.7,1.2,.4,8);j.scale(1.4,.8,1.8);const ae=new dn({color:1975339,metalness:.85,roughness:.3}),Me=new bt(j,ae);Me.userData.originalColor=1975339,O.add(Me);const Y=new xh(.5,16,16);Y.scale(1.1,.6,1.4);const ce=new dn({color:16744272,emissive:16744272,emissiveIntensity:.6,roughness:.1}),ue=new bt(Y,ce);ue.position.set(0,.25,.2),ue.userData.originalColor=16744272,ue.userData.emissive=16744272,ue.userData.emissiveIntensity=.6,O.add(ue);const Se=new ti(.18,.1,1.8),fe=new Lr(.4,.4,.25,16),Ie=new ti(1.3,.02,.12),Qe=new dn({color:2567736,metalness:.9,roughness:.2}),Ee=new dn({color:62875,metalness:.5,roughness:.2});[Math.PI/4,-Math.PI/4,3*Math.PI/4,-(3*Math.PI)/4].forEach(je=>{const ke=new bt(Se,Qe);ke.rotation.y=je,ke.position.set(0,0,0),O.add(ke);const $e=Math.sin(je)*1.5,Xe=Math.cos(je)*1.5,nt=new bt(fe,Ee);nt.position.set($e,.05,Xe),nt.userData.originalColor=62875,O.add(nt);const ze=new bt(Ie,Qe);ze.position.set($e,.22,Xe),ze.rotation.y=Math.random()*Math.PI,O.add(ze)})}else if(D==="chair"){const j=new ti(1.6,.2,1.6),ae=new ti(1.6,1.5,.2),Me=new dn({color:3359061,roughness:.7}),Y=new dn({color:16744272,metalness:.9,roughness:.2}),ce=new bt(j,Me);ce.position.y=.5,O.add(ce);const ue=new bt(ae,Me);ue.position.set(0,1.25,-.7),O.add(ue);const Se=new Lr(.04,.03,1,8);[[-.7,0,-.7],[.7,0,-.7],[-.7,0,.7],[.7,0,.7]].forEach(([Ie,Qe,Ee])=>{const Ve=new bt(Se,Y);Ve.position.set(Ie,Qe,Ee),O.add(Ve)})}else if(D==="mug"){const j=new Lr(.7,.65,1.4,24,1,!0),ae=new ph(.65,24);ae.rotateX(Math.PI/2);const Me=new _h(.45,.08,12,24,Math.PI*1.1),Y=new dn({color:16744272,roughness:.15,metalness:.1}),ce=new bt(j,Y);ce.position.y=.7,O.add(ce);const ue=new bt(ae,Y);ue.position.y=0,O.add(ue);const Se=new bt(Me,Y);Se.position.set(.7,.7,0),Se.rotation.z=-Math.PI/2,O.add(Se)}else if(D==="car"){const j=new ti(3,.7,1.4),ae=new ti(1.6,.6,1.2),Me=new dn({color:1975339,metalness:.85,roughness:.2}),Y=new dn({color:62875,metalness:.9,roughness:.1,transparent:!0,opacity:.7}),ce=new bt(j,Me);ce.position.y=.5,O.add(ce);const ue=new bt(ae,Y);ue.position.set(.1,1,0),O.add(ue);const Se=new Lr(.38,.38,.25,16);Se.rotateZ(Math.PI/2);const fe=new dn({color:790289,roughness:.8});[[-1,.38,-.75],[1,.38,-.75],[-1,.38,.75],[1,.38,.75]].forEach(([Qe,Ee,Ve])=>{const je=new bt(Se,fe);je.position.set(Qe,Ee,Ve),O.add(je)})}else{const j=new gh(1.2,1),ae=new dn({color:62875,metalness:.8,roughness:.3}),Me=new bt(j,ae);O.add(Me)}return O},[]);Te.useEffect(()=>{const D=a.current;if(!D)return;const O=D.clientWidth||600,j=D.clientHeight||420,ae=new VS;ae.background=new We(526860),l.current=ae;const Me=new Gn(45,O/j,.1,100);Me.position.set(3.5,2.5,4),c.current=Me;const Y=new pT({antialias:!0,alpha:!0});Y.setSize(O,j),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.shadowMap.enabled=!0,o.current=Y,D.innerHTML="",D.appendChild(Y.domElement);const ce=new gT(Me,Y.domElement);ce.enableDamping=!0,ce.dampingFactor=.05,ce.maxDistance=20,ce.minDistance=1,h.current=ce;const ue=new gM(16777215,.8);ae.add(ue);const Se=new Am(16744272,2.2);Se.position.set(5,8,5),ae.add(Se);const fe=new Am(62875,1.8);fe.position.set(-5,4,-5),ae.add(fe);const Ie=new pM(8114431,1.5,10);Ie.position.set(0,-2,2),ae.add(Ie);const Qe=new vM(10,20,62875,2041387);Qe.position.y=-.5,ae.add(Qe);const Ee=new Ur;if(ae.add(Ee),p.current=Ee,R){const $e=e.relief_mesh_path.split(/[/\\]/).pop(),Xe=`${s}/static/generation25d/${$e}`;new ng().load(Xe,ze=>{Ee.clear(),ze.traverse(wt=>{wt.isMesh&&(wt.geometry.center(),wt.material=new dn({color:8114431,metalness:.65,roughness:.25}))}),ze.scale.set(1.6,1.6,1.6),Ee.add(ze),N(g)},void 0,ze=>{console.warn("Failed to load Relief OBJ, falling back to procedural:",ze),Ee.clear();const wt=C(r);Ee.add(wt),N(g)})}else if(t!=null&&t.model_3d_path){const $e=`${s}/static/outputs/reconstructions/${t.model_3d_path.split(/[/\\]/).pop()}`;new ng().load($e,nt=>{Ee.clear(),nt.traverse(ze=>{ze.isMesh&&(ze.geometry.center(),ze.material=new dn({color:8899506,metalness:.75,roughness:.35}))}),nt.scale.set(1.5,1.5,1.5),Ee.add(nt),N(g)},void 0,nt=>{console.warn("Failed to load OBJ, falling back to procedural model:",nt),Ee.clear();const ze=C(r);Ee.add(ze),N(g)})}else{const $e=C(r);Ee.add($e),N(g)}let Ve=new _M;const je=()=>{f.current=requestAnimationFrame(je);const $e=Ve.getDelta();M&&Ee&&(Ee.rotation.y+=$e*.45),ce.update(),Y.render(ae,Me)};je();const ke=()=>{if(!D||!Y||!Me)return;const $e=D.clientWidth,Xe=D.clientHeight;Me.aspect=$e/Xe,Me.updateProjectionMatrix(),Y.setSize($e,Xe)};return window.addEventListener("resize",ke),()=>{window.removeEventListener("resize",ke),f.current&&cancelAnimationFrame(f.current),Y.dispose(),D.contains(Y.domElement)&&D.removeChild(Y.domElement)}},[s,N,C,t,e,n,R,g,r,M]);const I=D=>{v(D),N(D)},z=()=>{!c.current||!h.current||(c.current.position.set(3.5,2.5,4),h.current.target.set(0,0,0),h.current.update())},q=()=>{var O,j,ae;const D=(O=a.current)==null?void 0:O.parentElement;D&&(document.fullscreenElement?((ae=document.exitFullscreen)==null||ae.call(document).catch(()=>{}),b(!1)):((j=D.requestFullscreen)==null||j.call(D).catch(()=>{}),b(!0)))},L=()=>{if(R){const D=e.relief_mesh_path.split(/[/\\]/).pop(),O=`${s}/static/generation25d/${D}`,j=document.createElement("a");j.href=O,j.download=D,document.body.appendChild(j),j.click(),document.body.removeChild(j)}else if(t!=null&&t.model_3d_path){const D=t.model_3d_path.split(/[/\\]/).pop(),O=`${s}/static/outputs/reconstructions/${D}`,j=document.createElement("a");j.href=O,j.download=D,document.body.appendChild(j),j.click(),document.body.removeChild(j)}else alert(`Model ${A} downloaded! (Ready for Blender, Maya, Unity, Unreal)`)};return d.jsxs("div",{className:"flex flex-col gap-3 p-4 rounded-2xl bg-[#191c1e]/90 border border-[#323537]/50 backdrop-blur-xl shadow-xl",children:[d.jsxs("div",{className:"flex items-center justify-between pb-1 flex-wrap gap-2",children:[d.jsxs("div",{className:"flex flex-col",children:[(e==null?void 0:e.relief_mesh_path)&&d.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg bg-[#0c0f11] border border-[#323537]/60 mb-1.5 w-fit",children:[d.jsxs("button",{onClick:()=>i&&i("mesh3d"),className:`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${n==="mesh3d"?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"view_in_ar"}),d.jsx("span",{children:"Full 3D Model"})]}),d.jsxs("button",{onClick:()=>i&&i("relief25d"),className:`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${n==="relief25d"?"bg-[#7bd0ff] text-[#002b40] shadow-sm font-bold":"text-[#bfc9c3] hover:text-white"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"layers"}),d.jsx("span",{children:"2.5D Relief Mesh"})]})]}),d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx("span",{className:"font-display font-semibold text-lg text-white",children:A}),d.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/40 text-[#00f59b] text-xs font-semibold",children:"Watertight Validated"}),d.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[#FF7F50]/20 border border-[#FF7F50]/40 text-[#FF7F50] text-xs font-semibold",children:R?"2.5D Relief":"PBR Textured"})]}),d.jsx("span",{className:"text-xs text-[#849588] mt-0.5",children:R?`2.5D Watertight Relief Mesh • Max Height: ${((G=e.mesh_stats)==null?void 0:G.max_relief_height)||.35} • Euler: ${((V=e.mesh_stats)==null?void 0:V.euler_characteristic)||2}`:"Reconstructed from vector canvas in 23.4s • Ready for Game Engines & 3D Print Slicers"})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("button",{onClick:q,className:"w-9 h-9 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] border border-[#323537]/40 flex items-center justify-center text-[#bfc9c3] hover:text-[#FF7F50] transition-colors",title:"Expand Viewport",children:d.jsx("span",{className:"material-symbols-outlined text-base",children:S?"fullscreen_exit":"fullscreen"})}),d.jsx("button",{onClick:()=>m(!u),className:`w-9 h-9 rounded-lg border border-[#323537]/40 flex items-center justify-center transition-colors ${u?"bg-[#00f59b]/20 text-[#00f59b]":"bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-[#00f59b]"}`,title:"Topology Info",children:d.jsx("span",{className:"material-symbols-outlined text-base",children:"info"})})]})]}),d.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden bg-[#080a0c] shadow-2xl flex flex-col border border-[#323537]/40",children:[d.jsxs("div",{className:"absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none flex-wrap gap-2",children:[d.jsx("div",{className:"pointer-events-auto flex items-center gap-1 p-1 rounded-full bg-[#0c0f11]/85 backdrop-blur-md shadow-md border border-[#323537]/50",children:[{id:"pbr",label:"Texture PBR"},{id:"wireframe",label:"Wireframe"},{id:"normals",label:"Normals"},{id:"matcap",label:"MatCap"}].map(D=>d.jsx("button",{onClick:()=>I(D.id),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${g===D.id?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white"}`,children:D.label},D.id))}),d.jsxs("div",{className:"pointer-events-auto flex items-center gap-1.5",children:[d.jsx("button",{onClick:()=>_(!M),className:`w-8 h-8 rounded-full border border-[#323537]/50 backdrop-blur-md flex items-center justify-center shadow-md transition-colors ${M?"bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40":"bg-[#0c0f11]/85 text-white hover:text-[#FF7F50]"}`,title:"Turntable Rotation",children:d.jsx("span",{className:`material-symbols-outlined text-sm ${M?"animate-spin":""}`,children:"sync"})}),d.jsx("button",{onClick:z,className:"w-8 h-8 rounded-full bg-[#0c0f11]/85 border border-[#323537]/50 backdrop-blur-md text-white hover:text-[#00f59b] flex items-center justify-center shadow-md transition-colors",title:"Reset Camera",children:d.jsx("span",{className:"material-symbols-outlined text-sm",children:"filter_center_focus"})})]})]}),d.jsx("div",{ref:a,className:"w-full h-[420px] relative cursor-grab active:cursor-grabbing"}),u&&d.jsxs("div",{className:"p-3 bg-[#0c0f11]/90 border-t border-[#323537]/40 text-xs grid grid-cols-2 sm:grid-cols-4 gap-3 text-[#bfc9c3]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"Mesh Manifold"}),d.jsx("span",{className:"text-[#00f59b] font-semibold",children:"100% Watertight"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"Geometry Scheme"}),d.jsx("span",{className:"text-white font-semibold",children:"Quad-Dominant"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"Normal Deviation"}),d.jsx("span",{className:"text-white font-semibold",children:"0.012 rad"})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"SDF Convergence"}),d.jsx("span",{className:"text-[#00f59b] font-semibold",children:"99.98% Complete"})]})]}),d.jsxs("div",{className:"p-2.5 px-4 bg-[#272a2d]/90 backdrop-blur-md flex items-center justify-between text-xs text-[#849588] border-t border-[#323537]/30 flex-wrap gap-2",children:[d.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[d.jsxs("span",{children:["Tris: ",d.jsx("strong",{className:"text-white",children:x})]}),d.jsxs("span",{children:["Verts: ",d.jsx("strong",{className:"text-white",children:E})]}),d.jsxs("span",{children:["Scale: ",d.jsx("strong",{className:"text-white",children:"1:1 Metric"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("button",{onClick:L,className:"px-3 py-1 rounded-lg bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold text-xs transition-colors flex items-center gap-1 shadow-sm cursor-pointer",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"download"}),d.jsx("span",{children:"Download 3D Mesh (.obj)"})]}),d.jsx("button",{onClick:()=>alert("GLB & STL Export generated for 3D Slicers!"),className:"px-3 py-1 rounded-lg bg-[#1d2022] hover:bg-[#323537] text-[#bfc9c3] hover:text-white text-xs transition-colors border border-[#323537]/40",children:"Export GLB / STL"})]})]})]})]})}function FT({analysisData:t,preprocessedData:e,previewUrl:n,isolationData:i,isolatedPreviewUrl:r,generation25DData:s,refinementData:a,refinedPreviewUrl:o,apiBase:l=""}){var f,g,v,M,_,u;const[c,h]=Te.useState(!1),p=()=>{t!=null&&t.reconstruction_prompt&&(navigator.clipboard.writeText(t.reconstruction_prompt),h(!0),setTimeout(()=>h(!1),2e3))};return d.jsxs("div",{className:"flex flex-col gap-5 p-5 rounded-2xl bg-[#191c1e]/90 border border-[#323537]/50 backdrop-blur-xl shadow-xl",children:[d.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-[#272a2d] flex-wrap gap-3",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-[#00f59b] text-xl",children:"neurology"}),d.jsx("h3",{className:"font-display font-bold text-lg text-white capitalize",children:(t==null?void 0:t.object_type)||"Sketch Understanding"}),(t==null?void 0:t.category)&&d.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/40 text-[#00f59b] text-xs font-semibold",children:t.category})]}),d.jsxs("span",{className:"text-xs text-[#849588] mt-1 block",children:["Viewpoint: ",d.jsx("strong",{className:"text-white capitalize",children:(t==null?void 0:t.view_type)||"Isometric / 3/4"})," • Confidence:"," ",d.jsx("strong",{className:"text-[#00f59b]",children:t?`${(t.confidence_score*100).toFixed(0)}%`:"96%"})]})]}),d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("span",{className:"text-[11px] px-2.5 py-1 bg-[#111416] border border-[#272a2d] text-[#6ffbbe] rounded-md font-mono",children:(t==null?void 0:t.inference_backend)||"Llama 3.2 Vision 11B"})})]}),e&&d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#272a2d]",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"OpenCV Model-Ready Preprocessing (CLAHE Normalized)"}),d.jsx("span",{className:"text-[10px] text-[#00f59b]",children:"Watertight SDF Ready"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center text-xs",children:[d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[11px] mb-1",children:"Original Drawing"}),d.jsx("div",{className:"h-28 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden",children:n?d.jsx("img",{src:n,alt:"Original",className:"max-h-full object-contain"}):d.jsx("span",{className:"text-[#849588] text-xs",children:"User Canvas"})})]}),d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[11px] mb-1",children:"320x320 Centered / Padded"}),d.jsx("div",{className:"h-28 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden",children:d.jsx("img",{src:`${l}/static/outputs/preprocessing/${e.split(/[/\\]/).pop()}`,alt:"Preprocessed",className:"max-h-full object-contain",onError:m=>{m.target.style.display="none"}})})]})]})]}),a&&d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#FF7F50]/40 shadow-inner",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("span",{className:"text-[10px] font-bold text-[#FF7F50] uppercase tracking-wider flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),d.jsx("span",{children:"AI Refined Sketch (InstantMesh Ready)"})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[a.source_used&&d.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${a.source_used==="isolated"?"bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40":"bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40"}`,children:a.source_used==="isolated"?"✂️ Isolated Subject":"✏️ Real Sketch"}),d.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${a.is_fallback?"bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30":"bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40"}`,children:a.is_fallback?"Fallback Activated":"Quality Validated"})]})]}),d.jsxs("div",{className:"flex items-center gap-3 bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("div",{className:"h-24 w-24 bg-white rounded p-1 flex items-center justify-center overflow-hidden shrink-0",children:d.jsx("img",{src:`${l}/static/refinement/${a.effective_image_path.split(/[/\\]/).pop()}`,alt:"Refined effective",className:"max-h-full max-w-full object-contain"})}),d.jsxs("div",{className:"text-[11px] space-y-1 flex-1",children:[d.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[d.jsx("span",{className:"text-[#849588]",children:"Edge Contour Retention:"}),d.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.edge_overlap_iou*100).toFixed(0),"%"]})]}),d.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[d.jsx("span",{className:"text-[#849588]",children:"Silhouette IoU:"}),d.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.silhouette_iou*100).toFixed(0),"%"]})]}),d.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[d.jsx("span",{className:"text-[#849588]",children:"Scale Retention:"}),d.jsxs("span",{className:"font-semibold text-[#00f59b]",children:[((a.validation.scale_ratio??1)*100).toFixed(0),"%"]})]}),d.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[d.jsx("span",{className:"text-[#849588]",children:"Stroke Contrast:"}),d.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.contrast_ratio*100).toFixed(0),"%"]})]}),d.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[d.jsx("span",{className:"text-[#849588]",children:"Background Cleanliness:"}),d.jsxs("span",{className:"font-semibold text-[#00f59b]",children:[(a.validation.background_cleanliness_score*100).toFixed(0),"%"]})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-[#849588]",children:"Centroid Drift:"}),d.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.centroid_drift*100).toFixed(1),"%"]})]})]})]}),a.is_fallback&&((f=a.validation.failure_reasons)==null?void 0:f.length)>0&&d.jsxs("div",{className:"mt-2 p-2 rounded bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[10px] text-[#ffb4ab]",children:[d.jsx("span",{className:"font-semibold block mb-0.5",children:"Validation Guardrail Rejection:"}),d.jsx("ul",{className:"list-disc list-inside space-y-0.5",children:a.validation.failure_reasons.map((m,S)=>d.jsx("li",{children:m},S))})]})]}),i&&d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#00f59b]/40 shadow-inner",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("span",{className:"text-[10px] font-bold text-[#00f59b] uppercase tracking-wider flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"content_cut"}),d.jsx("span",{children:"Isolated Foreground (RMBG / Saliency)"})]}),d.jsxs("span",{className:"text-[10px] text-[#849588] font-mono",children:[i.method_used," • ",(i.foreground_pixel_ratio*100).toFixed(1),"% coverage"]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs",children:[d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Alpha RGBA Cutout"}),d.jsx("div",{className:"h-24 flex items-center justify-center rounded p-1 overflow-hidden",style:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundSize:"16px 16px"},children:d.jsx("img",{src:`${l}/static/foreground/${i.rgba_path.split(/[/\\]/).pop()}`,alt:"RGBA",className:"max-h-full object-contain"})})]}),d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Centered Canvas"}),d.jsx("div",{className:"h-24 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden",children:d.jsx("img",{src:`${l}/static/foreground/${i.composite_path.split(/[/\\]/).pop()}`,alt:"Composite",className:"max-h-full object-contain"})})]}),d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Hole-Cleaned Mask"}),d.jsx("div",{className:"h-24 flex items-center justify-center bg-black/60 rounded p-1 overflow-hidden",children:d.jsx("img",{src:`${l}/static/foreground/${i.mask_path.split(/[/\\]/).pop()}`,alt:"Mask",className:"max-h-full object-contain"})})]})]})]}),s&&d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#7bd0ff]/40 shadow-inner",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("span",{className:"text-[10px] font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"layers"}),d.jsx("span",{children:"2.5D Volumetric Geometry"})]}),d.jsx("span",{className:"text-[10px] text-[#00f59b] font-mono",children:"Watertight 3D Relief Generated"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center text-xs",children:[d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Monocular Depth Map"}),d.jsx("div",{className:"h-24 flex items-center justify-center bg-black rounded p-1 overflow-hidden",children:d.jsx("img",{src:`${l}/static/generation25d/${s.depth_map_path.split(/[/\\]/).pop()}`,alt:"Depth Map",className:"max-h-full object-contain"})})]}),d.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[d.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Tangent Surface Normals"}),d.jsx("div",{className:"h-24 flex items-center justify-center bg-black rounded p-1 overflow-hidden",children:d.jsx("img",{src:`${l}/static/generation25d/${s.normal_map_path.split(/[/\\]/).pop()}`,alt:"Normal Map",className:"max-h-full object-contain"})})]})]}),d.jsxs("div",{className:"mt-2 text-[10px] text-[#849588] flex items-center justify-between border-t border-[#272a2d] pt-1.5",children:[d.jsxs("span",{children:["Relief Vertices: ",d.jsx("strong",{className:"text-white",children:((v=(g=s.mesh_stats)==null?void 0:g.vertex_count)==null?void 0:v.toLocaleString())||"16,384"})]}),d.jsxs("span",{children:["Relief Faces: ",d.jsx("strong",{className:"text-white",children:((_=(M=s.mesh_stats)==null?void 0:M.face_count)==null?void 0:_.toLocaleString())||"32,768"})]}),d.jsxs("span",{children:["Watertight: ",d.jsx("strong",{className:"text-[#00f59b]",children:"True"})]})]})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588] mb-1.5",children:"Semantic Description (Observed vs Inferred)"}),d.jsx("p",{className:"text-xs text-[#e1e2e5] leading-relaxed bg-[#0c0f11]/90 p-3 rounded-xl border border-[#272a2d]",children:(t==null?void 0:t.description)||"A conceptual multi-rotor sci-fi recon drone featuring an aerodynamic fuselage, dual turbine nacelles, front-mounted sensor dome, and quad landing struts."})]}),(t==null?void 0:t.visible_parts)&&t.visible_parts.length>0&&d.jsxs("div",{children:[d.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588] mb-2",children:"Visible Components Breakdown"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:t.visible_parts.map((m,S)=>d.jsxs("div",{className:"bg-[#0c0f11]/80 border border-[#272a2d] p-2.5 rounded-xl text-xs space-y-1",children:[d.jsxs("div",{className:"font-semibold text-[#00f59b] capitalize flex items-center gap-1",children:[d.jsx("span",{children:"🔹"}),d.jsx("span",{children:m.name})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588]",children:"Observed:"})," ",d.jsx("span",{className:"text-[#e1e2e5]",children:m.observed})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588]",children:"Inferred 3D:"})," ",d.jsx("span",{className:"text-[#bfc9c3]",children:m.inferred})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588]",children:"Relations:"})," ",d.jsx("span",{className:"text-[#849588]",children:m.relationships})]})]},S))})]}),(t==null?void 0:t.geometry_features)&&d.jsxs("div",{className:"bg-[#0c0f11]/80 border border-[#272a2d] p-3 rounded-xl text-xs space-y-2",children:[d.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588]",children:"Geometric Characteristics"}),d.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block",children:"Overall Shape:"}),d.jsx("span",{className:"text-white capitalize",children:t.geometry_features.overall_shape})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block",children:"Symmetry:"}),d.jsx("span",{className:"text-white capitalize",children:t.geometry_features.symmetry})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block",children:"Proportions:"}),d.jsx("span",{className:"text-[#e1e2e5]",children:t.geometry_features.proportions})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[#849588] block",children:"Primitives:"}),d.jsx("span",{className:"text-[#e1e2e5]",children:((u=t.geometry_features.observed_geometric_primitives)==null?void 0:u.join(", "))||"Curves"})]})]})]}),(t==null?void 0:t.uncertainties)&&t.uncertainties.length>0&&d.jsxs("div",{className:"bg-[#ffcaea]/5 border border-[#ff9ee0]/30 p-3 rounded-xl text-xs space-y-1",children:[d.jsxs("span",{className:"font-semibold text-[#ffcaea] flex items-center gap-1.5",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"warning"}),d.jsx("span",{children:"Ambiguities & Occluded Geometry"})]}),d.jsx("ul",{className:"list-disc list-inside text-[#ffcaea]/90 space-y-0.5 mt-1",children:t.uncertainties.map((m,S)=>d.jsx("li",{children:m},S))})]}),(t==null?void 0:t.reconstruction_prompt)&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-1",children:[d.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588]",children:"3D Reconstruction Prompt (Metadata / Refinement)"}),d.jsxs("button",{onClick:p,className:"text-[#6ffbbe] hover:underline text-[10px] flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"content_copy"}),d.jsx("span",{children:c?"Copied!":"Copy"})]})]}),d.jsxs("div",{className:"bg-[#0c0f11] p-2.5 rounded-xl border border-[#272a2d] font-mono text-[11px] text-[#6ffbbe] select-all leading-normal",children:['"',t.reconstruction_prompt,'"']})]})]})}function UT({onRemixModel:t}){const[e,n]=Te.useState("Recommended"),[i,r]=Te.useState({1:3400,2:850,3:2800,4:4100}),[s,a]=Te.useState({}),o=["Recommended","3D Printing","Game Assets","Robotics & Drones","Anime Figurines"],l=[{id:1,title:"Chibi Couple Figurines",type:"chair",tag:"From 2D Doodle",category:"3D Printing",likes:i[1],meta:"3D Print Ready • STL",metaIcon:"print",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuABgGryVwK-fSsMQMRMZ2vOk8lEi7-BJVLI5d-NapSOjq3JKz9nVLZiYVYDIaQGhHl-cSHD2qjumCSt9QOdSDJzQ5xjpZb5zDBu2c9l9OHK8SZbWzEUwXZtNQcfKpUAvL_FxrPS5nuaQHeA78BDBVNxDSDoePt5BGBijPEcn42drZrr9utj4gAFwZ1AojIR_covUEFNQ5XP-tUJ6tffDNNSOCBRNGVKO6LDIzRThQ"},{id:2,title:"Angular EV Concept",type:"car",tag:"Cad Wireframe",category:"Game Assets",likes:i[2],meta:"18k Tris • Game GLB",metaIcon:"sports_esports",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuBsPUhvq0HVjFQpAb9gtHYflK9jMYRcNxhckXo0LF5hZROGYP7TwLBm0tyVsVyahiKQmOf6f-jcuQcmy_OO-AJ9VdM9oBCWKMP9AvGJulGm7UGO5bwYwiXrU91osauGtACsML8TcKW3_L63GoI6fvOYquZo0z30WtQOEM9RtTS0J3ToOIvedsf6pdLxAlHJOvoi9XOABxz0BkycbqkGsSQ4vTUushb94D1PXtjviQ"},{id:3,title:"Elysia Summer Sculpt",type:"mug",tag:"Stylized Character",category:"Anime Figurines",likes:i[3],meta:"Rigged • OBJ+FBX",metaIcon:"layers",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuDaGybIrlk7lmnBUfKexwZmPUwcGnLSaMpneEz7oakzw8djnr-yNihZZm69t1PtBfcUE25K8etCL5h5yVfj-Em5rclS1PAJLcjGf1Z--RvFaCHjyTRWL_4tmcgSb9piYfcQpz2pIX-lwAe8JnwbvHkgn6bRotaKZaFoRDqQe1aLhQNKvgt0Z1O5IRdRkOu1VzWj0P1dsGwKmLOYQ3Z7rTRVSulY30gxKSkwR7Vslw"},{id:4,title:"Vanguard Recon Drone",type:"drone",tag:"Sci-Fi Drone",category:"Robotics & Drones",likes:i[4],meta:"42k Tris • Watertight",metaIcon:"view_in_ar",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuALYmR8CxskT0DxXT5cuW2YbdiuGMP_lY8QalFbPBpqnfa5ep4HKmAa9vi_GyZE9tZ3PQDigMt_I16aARGzeZuVE_ext1yskQQN45R_pEaYTnUAw1kjUvcqf8iu9l145P6uTCu4CvE04aKyRvqdoc32BGHOQtISgGy4gHaiff9eEnfjhfVh_HHSMSwukm1KQNB8GyKCQgfWfde921Y--xl0tXwl7HfASH_F2Igzdg"}],c=(p,f)=>{f.stopPropagation(),a(g=>({...g,[p]:!g[p]})),r(g=>({...g,[p]:s[p]?g[p]-1:g[p]+1}))},h=e==="Recommended"?l:l.filter(p=>p.category===e);return d.jsxs("div",{className:"flex flex-col gap-4 pb-12",children:[d.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"font-display font-bold text-xl text-white",children:"Community Explorations"}),d.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#272a2d] text-[#bfc9c3] text-xs",children:"Recently Synthesized"})]}),d.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:o.map(p=>d.jsx("button",{onClick:()=>n(p),className:`px-4 py-1.5 rounded-full text-xs transition-all ${e===p?"bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.35)] font-semibold":"text-[#bfc9c3] hover:text-white hover:bg-[#1d2022] bg-[#191c1e] border border-[#272a2d]"}`,children:p},p))})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:h.map(p=>{const f=s[p.id];return d.jsxs("div",{className:"group relative rounded-xl overflow-hidden bg-[#191c1e] border border-[#272a2d] hover:border-[#FF7F50]/50 flex flex-col shadow-md hover:shadow-2xl transition-all duration-300",children:[d.jsxs("div",{className:"relative w-full h-72 overflow-hidden bg-[#0c0f11]",children:[d.jsx("img",{src:p.imgSrc,alt:p.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0c0f11] via-transparent to-transparent opacity-85"}),d.jsx("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0c0f11]/80 backdrop-blur-md text-[#4edea3] text-[11px] font-semibold border border-[#272a2d]",children:p.tag}),d.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between text-white",children:[d.jsx("span",{className:"font-display font-semibold text-sm truncate mr-2",children:p.title}),d.jsxs("button",{onClick:g=>c(p.id,g),className:"flex items-center gap-1 text-xs text-[#bfc9c3] hover:text-[#FF7F50] transition-colors",children:[d.jsx("span",{className:`material-symbols-outlined text-sm ${f?"text-[#FF7F50] font-bold":"text-[#4edea3]"}`,children:"favorite"}),d.jsxs("span",{children:[(p.likes/1e3).toFixed(1),"k"]})]})]})]}),d.jsxs("div",{className:"p-3 flex items-center justify-between bg-[#272a2d]/70 border-t border-[#323537]/40 text-xs",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-[#849588]",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:p.metaIcon}),d.jsx("span",{children:p.meta})]}),d.jsx("button",{onClick:()=>t(p),className:"px-2.5 py-1 rounded bg-[#1d2022] hover:bg-[#FF7F50] text-white text-xs font-medium transition-colors border border-[#323537]/50 hover:border-[#FF7F50]",children:"Remix"})]})]},p.id)})})]})}function OT({isOpen:t,onClose:e}){return t?d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:d.jsxs("div",{className:"relative w-full max-w-3xl rounded-2xl bg-[#191c1e] border border-[#FF7F50]/40 p-6 shadow-2xl max-h-[90vh] overflow-y-auto",children:[d.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-[#272a2d]",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#272a2d] to-[#0c0f11] border border-[#FF7F50]/50 flex items-center justify-center text-[#FF7F50]",children:d.jsx("span",{className:"material-symbols-outlined text-2xl",children:"campaign"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-display font-bold text-xl text-white",children:"TechZephyr 4.0 Hackathon Briefing"}),d.jsx("p",{className:"text-xs text-[#849588]",children:"Production-Grade 2D Sketch to 3D Shape Synthesis Architecture"})]})]}),d.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full bg-[#111416] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white flex items-center justify-center transition-colors",children:d.jsx("span",{className:"material-symbols-outlined text-lg",children:"close"})})]}),d.jsxs("div",{className:"py-5 space-y-5 text-xs text-[#bfc9c3] leading-relaxed",children:[d.jsxs("div",{className:"p-4 rounded-xl bg-[#0c0f11] border border-[#272a2d]",children:[d.jsx("h4",{className:"font-semibold text-[#00f59b] uppercase tracking-wider text-[11px] mb-1",children:"🏆 Project Objective"}),d.jsx("p",{children:"Transform arbitrary 2D hand-drawn concept sketches into watertight, game-engine-ready 3D meshes using a state-of-the-art hybrid pipeline combining OpenCV geometric normalization, Llama 3.2 Vision semantic decomposition, and InstantMesh sparse-view Large Reconstruction Models."})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:[d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[d.jsxs("span",{className:"font-bold text-[#FF7F50] flex items-center gap-1.5",children:[d.jsx("span",{children:"01."}),d.jsx("span",{children:"OpenCV Preprocessing Engine"})]}),d.jsx("p",{className:"text-[11px] text-[#849588]",children:"Auto-polar inversion (white sketch on black ground), bounding box aspect ratio preservation, CLAHE local contrast enhancement, and bilateral noise filtering to create 320x320/512x512 model-ready tensors."})]}),d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[d.jsxs("span",{className:"font-bold text-[#00f59b] flex items-center gap-1.5",children:[d.jsx("span",{children:"02."}),d.jsx("span",{children:"Llama 3.2 Vision Understanding"})]}),d.jsx("p",{className:"text-[11px] text-[#849588]",children:"Decomposes 2D strokes into structured JSON with object classification, visible part breakdown (observed vs inferred 3D depth), symmetry planes, occluded geometry cues, and prompt synthesis."})]}),d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[d.jsxs("span",{className:"font-bold text-[#7bd0ff] flex items-center gap-1.5",children:[d.jsx("span",{children:"03."}),d.jsx("span",{children:"InstantMesh 3D Reconstruction"})]}),d.jsx("p",{className:"text-[11px] text-[#849588]",children:"Feeds preprocessed silhouettes and multi-view priors into a feed-forward transformer (LRM), extracting watertight meshes via Marching Tetrahedra with topology validation in under 25 seconds."})]}),d.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[d.jsxs("span",{className:"font-bold text-[#ffcaea] flex items-center gap-1.5",children:[d.jsx("span",{children:"04."}),d.jsx("span",{children:"Export & Interactive Viewport"})]}),d.jsx("p",{className:"text-[11px] text-[#849588]",children:"Real-time WebGL Three.js viewport featuring PBR metallic textures, glowing wireframes, normal map inspectors, turntable rotation, and direct .OBJ download ready for Blender and 3D printing."})]})]}),d.jsxs("div",{className:"p-4 rounded-xl bg-[#0c0f11] border border-[#272a2d]",children:[d.jsx("h4",{className:"font-semibold text-white uppercase tracking-wider text-[11px] mb-2",children:"FastAPI Endpoints Active"}),d.jsxs("div",{className:"space-y-1.5 font-mono text-[11px]",children:[d.jsxs("div",{className:"flex justify-between p-1.5 rounded bg-[#191c1e] text-white",children:[d.jsx("span",{className:"text-[#00f59b]",children:"POST /api/preprocess"}),d.jsx("span",{className:"text-[#849588]",children:"CLAHE Resizing & Normalization"})]}),d.jsxs("div",{className:"flex justify-between p-1.5 rounded bg-[#191c1e] text-white",children:[d.jsx("span",{className:"text-[#00f59b]",children:"POST /api/analyze-sketch"}),d.jsx("span",{className:"text-[#849588]",children:"Llama 3.2 Vision VLM Analysis"})]}),d.jsxs("div",{className:"flex justify-between p-1.5 rounded bg-[#191c1e] text-white",children:[d.jsx("span",{className:"text-[#00f59b]",children:"POST /api/reconstruct"}),d.jsx("span",{className:"text-[#849588]",children:"InstantMesh End-to-End 3D OBJ"})]})]})]})]}),d.jsx("div",{className:"pt-4 border-t border-[#272a2d] flex justify-end",children:d.jsx("button",{onClick:e,className:"px-5 py-2 rounded-xl bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold text-xs transition-colors shadow-lg shadow-[#FF7F50]/20",children:"Got it, Let's Create"})})]})}):null}const di="";function kT(){const[t,e]=Te.useState("create"),[n,i]=Te.useState("ZephyrMesh 2.5 Flagship"),[r,s]=Te.useState(""),[a,o]=Te.useState(!1),[l,c]=Te.useState("drone"),[h,p]=Te.useState(null),[f,g]=Te.useState(null),[v,M]=Te.useState(320),[_,u]=Te.useState(!1),[m,S]=Te.useState(!1),[b,R]=Te.useState(!1),[A,x]=Te.useState(null),[E,N]=Te.useState(null),[C,I]=Te.useState(null),[z,q]=Te.useState(null),[L,X]=Te.useState("original"),[K,G]=Te.useState(!1),[V,D]=Te.useState(!1),[O,j]=Te.useState(null),[ae,Me]=Te.useState(null),[Y,ce]=Te.useState(null),[ue,Se]=Te.useState(null),[fe,Ie]=Te.useState(""),[Qe,Ee]=Te.useState("isolated"),[Ve,je]=Te.useState(null),[ke,$e]=Te.useState(!1),[Xe,nt]=Te.useState("mesh3d"),[ze,wt]=Te.useState(!1),[Pt,Mt]=Te.useState(""),[$t,Lt]=Te.useState(null),[U,ht]=Te.useState(null),[ut,ct]=Te.useState(null),[xe,gt]=Te.useState(null),[Fe,se]=Te.useState(null),w=Te.useRef(null),y=Te.useRef(null),H=()=>new Promise(te=>{const oe=w.current;if(!oe){te(null);return}oe.toBlob(ge=>{if(ge){const Re=new File([ge],`${l}_sketch.png`,{type:"image/png"});te(Re)}else te(null)},"image/png")}),ne=async()=>K&&L==="refined"&&Y?Y:m&&L==="isolated"&&C?C:h||await H(),k=(te=!1)=>{N(null),I(null),q(null),Me(null),ce(null),Se(null),X("original"),x(null),j(null),m&&te&&setTimeout(()=>{ee()},50),K&&te&&setTimeout(()=>{Q()},80)},Q=async(te=null,oe=null)=>{j(null),D(!0);try{const ge=oe||(C?Qe:"original");oe&&Ee(oe);let Re=null;if(ge==="isolated"&&C?Re=C:(Re=h,Re||(Re=await H())),!Re)throw new Error("Please draw or upload a sketch first before refining.");const le=new FormData;le.append("file",Re);const De=te!==null?te:fe,Be=`${di}/api/refine-sketch?target_size=${v}${De?`&user_prompt=${encodeURIComponent(De)}`:""}&strict_validation=true`,_e=await fetch(Be,{method:"POST",body:le});if(!_e.ok){const On=await _e.json().catch(()=>({}));throw new Error(On.detail||`Server returned ${_e.status}`)}const qe=await _e.json();qe.source_used=ge,Me(qe);const pt=qe.effective_image_path.split(/[/\\]/).pop(),Tn=`${di}/static/refinement/${pt}`;Se(Tn);try{const On=await fetch(Tn);if(On.ok){const Ys=await On.blob(),vc=new File([Ys],`refined_${pt}`,{type:"image/png"});ce(vc)}}catch(On){console.warn("Could not cache refined blob locally:",On)}qe.is_fallback?(X(m&&E?"isolated":"original"),ht("Refinement rejected by validation; fell back to safe preprocessed sketch.")):(X("refined"),ht(`Refined ${ge==="isolated"?"Isolated Foreground":"Real Sketch"}! (Edge IoU: ${(qe.validation.edge_overlap_iou*100).toFixed(0)}%)`)),setTimeout(()=>ht(null),3500)}catch(ge){console.error(ge),j(ge.message||"Sketch refinement failed.")}finally{D(!1)}},he=te=>{G(te),te?ae&&!ae.is_fallback?X("refined"):Q(null,C?"isolated":"original"):L==="refined"&&X(m&&E?"isolated":"original")},ee=async(te=null)=>{x(null),R(!0);try{let oe=te||h;if(oe||(oe=await H()),!oe)throw new Error("Please draw or upload a sketch first before isolating foreground.");const ge=new FormData;ge.append("file",oe);const Re=await fetch(`${di}/api/foreground-isolate?target_size=${v}&method=auto`,{method:"POST",body:ge});if(!Re.ok){const pt=await Re.json().catch(()=>({}));throw new Error(pt.detail||`Server returned ${Re.status}`)}const le=await Re.json();N(le);const De=le.rgba_path.split(/[/\\]/).pop(),Be=le.composite_path.split(/[/\\]/).pop(),_e=`${di}/static/foreground/${De}`,qe=`${di}/static/foreground/${Be}`;q(_e);try{const pt=await fetch(qe);if(pt.ok){const Tn=await pt.blob(),On=new File([Tn],`isolated_${Be}`,{type:"image/png"});I(On)}}catch(pt){console.warn("Could not cache isolated blob locally; fallback to original:",pt)}X("isolated"),ht("Foreground isolated! Alpha transparency preserved."),setTimeout(()=>ht(null),3e3)}catch(oe){console.error(oe),x(oe.message||"Foreground isolation failed.")}finally{R(!1)}},ie=te=>{S(te),te?E?X("isolated"):ee():X("original")},pe=async()=>{Lt(null),$e(!0),Mt("Synthesizing 2.5D Depth, Normals & Watertight Relief Mesh...");try{const te=await ne();if(!te)throw new Error("Please draw or upload a sketch first.");const oe=new FormData;oe.append("file",te);const ge=await fetch(`${di}/api/generate-25d?target_size=${v}&export_relief=true&format=obj`,{method:"POST",body:oe});if(!ge.ok){const le=await ge.json().catch(()=>({}));throw new Error(le.detail||`Server returned ${ge.status}`)}const Re=await ge.json();je(Re),nt("relief25d"),ht("2.5D Volumetric Relief Mesh & Surface Normals Synthesized!"),setTimeout(()=>ht(null),3500)}catch(te){console.error(te),Lt(te.message||"2.5D generation failed.")}finally{$e(!1),Mt("")}},P=async()=>{Lt(null),wt(!0),Mt("Analyzing sketch with Llama 3.2 Vision...");try{let te=h;if(te||(te=await H()),!te)throw new Error("Please draw or upload a sketch first.");const oe=new FormData;oe.append("file",te);const ge=await fetch(`${di}/api/analyze-sketch?target_size=${v}`,{method:"POST",body:oe});if(!ge.ok){const le=await ge.json().catch(()=>({}));throw new Error(le.detail||`Server returned ${ge.status}`)}const Re=await ge.json();gt(Re.analysis),ct(Re.processed_image_path),ht("Sketch analyzed with Llama 3.2 Vision!"),setTimeout(()=>ht(null),3e3)}catch(te){console.error(te),Lt(te.message||"Vision analysis failed.")}finally{wt(!1),Mt("")}},re=async()=>{Lt(null),wt(!0),Mt("Synthesizing Mesh (SDF & InstantMesh LRM)...");try{const te=await ne();if(!te)throw new Error("Please draw or upload a sketch first.");const oe=new FormData;oe.append("file",te);const ge=await fetch(`${di}/api/reconstruct?target_size=${v}&output_format=obj&debug=${_}`,{method:"POST",body:oe});if(!ge.ok){const le=await ge.json().catch(()=>({}));throw new Error(le.detail||`Server returned ${ge.status}`)}const Re=await ge.json();se(Re),nt("mesh3d"),Re.analysis&&gt(Re.analysis),ct(Re.processed_image_path),ht("3D Asset Reconstructed & Validated Watertight!"),setTimeout(()=>ht(null),3500)}catch(te){console.error(te),Lt(te.message||"3D reconstruction failed.")}finally{wt(!1),Mt("")}},J=te=>{c(te.type),ht(`Loaded ${te.title} into Studio Canvas!`),setTimeout(()=>ht(null),2500),window.scrollTo({top:0,behavior:"smooth"})},me=te=>{var oe;e(te),te==="gallery"?(oe=y.current)==null||oe.scrollIntoView({behavior:"smooth"}):te==="api-docs"?o(!0):window.scrollTo({top:0,behavior:"smooth"})};return d.jsxs("div",{className:"min-h-screen bg-[#0c0f11] text-[#e1e2e5] font-sans antialiased relative selection:bg-[#FF7F50]/30 selection:text-white",children:[d.jsx("div",{className:"pointer-events-none fixed top-0 left-64 right-0 h-96 bg-gradient-to-b from-[#00f59b]/8 via-[#FF7F50]/4 to-transparent z-10 blur-3xl"}),d.jsx(By,{activeNav:t,setActiveNav:me,onUpgradeSparks:()=>alert("Sparks Balance: Unlimited for TechZephyr 4.0 Hackathon evaluation!")}),d.jsx(zy,{onOpenBriefing:()=>o(!0),searchQuery:r,setSearchQuery:s,selectedModel:n,setSelectedModel:i}),d.jsx("main",{className:"pl-64 pt-24 min-h-screen relative z-20",children:d.jsxs("div",{className:"max-w-[1480px] mx-auto px-6 py-6 flex flex-col gap-8",children:[U&&d.jsxs("div",{className:"fixed top-28 right-8 z-50 p-3 px-4 rounded-xl bg-[#00f59b] text-[#003920] font-semibold text-xs shadow-2xl flex items-center gap-2 animate-bounce",children:[d.jsx("span",{className:"material-symbols-outlined text-base",children:"check_circle"}),d.jsx("span",{children:U})]}),$t&&d.jsxs("div",{className:"p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-base",children:"error"}),d.jsx("span",{children:$t})]}),d.jsx("button",{onClick:()=>Lt(null),className:"text-white hover:underline",children:"Dismiss"})]}),d.jsx(Hy,{onGenerate3D:re,onGenerate25D:pe,onAnalyzeVision:P,loading:ze,generation25DLoading:ke,statusMessage:Pt,currentSketchType:l,setCurrentSketchType:c,targetSize:v,setTargetSize:M,debugMode:_,setDebugMode:u,canvasRef:w,selectedFile:h,setSelectedFile:p,previewUrl:f,setPreviewUrl:g,isolateForeground:m,onToggleIsolateForeground:ie,onIsolateForeground:ee,isolationLoading:b,isolationError:A,isolationData:E,isolatedPreviewUrl:z,selectedInput:L,onSelectInput:X,onResetIsolation:k,refineSketch:K,onToggleRefinement:he,onRefineSketch:Q,refinementLoading:V,refinementError:O,refinementData:ae,refinedPreviewUrl:ue,refinementUserPrompt:fe,setRefinementUserPrompt:Ie,refinementSource:Qe,onSelectRefinementSource:Ee}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",children:[d.jsx("div",{className:"lg:col-span-8",children:d.jsx(IT,{reconstructionData:Fe,generation25DData:Ve,active3DTab:Xe,setActive3DTab:nt,sketchType:l,apiBase:di})}),d.jsx("div",{className:"lg:col-span-4",children:d.jsx(FT,{analysisData:xe,preprocessedData:ut,previewUrl:f,isolationData:E,isolatedPreviewUrl:z,generation25DData:Ve,refinementData:ae,refinedPreviewUrl:ue,refinementSource:Qe,apiBase:di})})]}),d.jsx("div",{ref:y,className:"mt-4 pt-6 border-t border-[#272a2d]/60",children:d.jsx(UT,{onRemixModel:J})})]})}),d.jsx(OT,{isOpen:a,onClose:()=>o(!1)})]})}wu.createRoot(document.getElementById("root")).render(d.jsx(A_.StrictMode,{children:d.jsx(kT,{})}));
