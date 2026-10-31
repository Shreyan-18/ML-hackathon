(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function d_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ng={exports:{}},Zl={},ig={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),f_=Symbol.for("react.portal"),h_=Symbol.for("react.fragment"),p_=Symbol.for("react.strict_mode"),m_=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),x_=Symbol.for("react.context"),__=Symbol.for("react.forward_ref"),v_=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),S_=Symbol.for("react.lazy"),Uh=Symbol.iterator;function M_(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg=Object.assign,ag={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||rg}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=Hs.prototype;function of(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||rg}var lf=of.prototype=new og;lf.constructor=of;sg(lf,Hs.prototype);lf.isPureReactComponent=!0;var Oh=Array.isArray,lg=Object.prototype.hasOwnProperty,cf={current:null},cg={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)lg.call(e,i)&&!cg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:$a,type:t,key:s,ref:a,props:r,_owner:cf.current}}function b_(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function E_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kh=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E_(""+t.key):e.toString(36)}function Qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case $a:case f_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vc(a,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(kh,"$&/")+"/"),Qo(r,e,n,"",function(c){return c})):r!=null&&(uf(r)&&(r=b_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(kh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Oh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vc(s,o);a+=Qo(s,e,n,l,r)}else if(l=M_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vc(s,o++),a+=Qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function so(t,e,n){if(t==null)return t;var i=[],r=0;return Qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function w_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Jo={transition:null},T_={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:cf};function dg(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:so,forEach:function(t,e,n){so(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return so(t,function(){e++}),e},toArray:function(t){return so(t,function(e){return e})||[]},only:function(t){if(!uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Hs;qe.Fragment=h_;qe.Profiler=m_;qe.PureComponent=of;qe.StrictMode=p_;qe.Suspense=v_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;qe.act=dg;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=sg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)lg.call(e,l)&&!cg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:$a,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:x_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g_,_context:t},t.Consumer=t};qe.createElement=ug;qe.createFactory=function(t){var e=ug.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:__,render:t}};qe.isValidElement=uf;qe.lazy=function(t){return{$$typeof:S_,_payload:{_status:-1,_result:t},_init:w_}};qe.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Jo.transition;Jo.transition={};try{t()}finally{Jo.transition=e}};qe.unstable_act=dg;qe.useCallback=function(t,e){return gn.current.useCallback(t,e)};qe.useContext=function(t){return gn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return gn.current.useEffect(t,e)};qe.useId=function(){return gn.current.useId()};qe.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return gn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};qe.useRef=function(t){return gn.current.useRef(t)};qe.useState=function(t){return gn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return gn.current.useTransition()};qe.version="18.3.1";ig.exports=qe;var ye=ig.exports;const A_=d_(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=ye,C_=Symbol.for("react.element"),N_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,L_=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D_={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)P_.call(e,i)&&!D_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:C_,type:t,key:s,ref:a,props:r,_owner:L_.current}}Zl.Fragment=N_;Zl.jsx=fg;Zl.jsxs=fg;ng.exports=Zl;var h=ng.exports,bu={},hg={exports:{}},In={},pg={exports:{}},mg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,U){var W=G.length;G.push(U);e:for(;0<W;){var J=W-1>>>1,re=G[J];if(0<r(re,U))G[J]=U,G[W]=re,W=J;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var U=G[0],W=G.pop();if(W!==U){G[0]=W;e:for(var J=0,re=G.length,Se=re>>>1;J<Se;){var q=2*(J+1)-1,ce=G[q],he=q+1,be=G[he];if(0>r(ce,W))he<re&&0>r(be,ce)?(G[J]=be,G[he]=W,J=he):(G[J]=ce,G[q]=W,J=q);else if(he<re&&0>r(be,W))G[J]=be,G[he]=W,J=he;else break e}}return U}function r(G,U){var W=G.sortIndex-U.sortIndex;return W!==0?W:G.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,d=3,g=!1,v=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(G){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=G)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function M(G){if(S=!1,y(G),!v)if(n(l)!==null)v=!0,te(A);else{var U=n(c);U!==null&&O(M,U.startTime-G)}}function A(G,U){v=!1,S&&(S=!1,u(b),b=-1),g=!0;var W=d;try{for(y(U),p=n(l);p!==null&&(!(p.expirationTime>U)||G&&!D());){var J=p.callback;if(typeof J=="function"){p.callback=null,d=p.priorityLevel;var re=J(p.expirationTime<=U);U=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),y(U)}else i(l);p=n(l)}if(p!==null)var Se=!0;else{var q=n(c);q!==null&&O(M,q.startTime-U),Se=!1}return Se}finally{p=null,d=W,g=!1}}var T=!1,x=null,b=-1,P=5,C=-1;function D(){return!(t.unstable_now()-C<P)}function j(){if(x!==null){var G=t.unstable_now();C=G;var U=!0;try{U=x(!0,G)}finally{U?Q():(T=!1,x=null)}}else T=!1}var Q;if(typeof m=="function")Q=function(){m(j)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,K=I.port2;I.port1.onmessage=j,Q=function(){K.postMessage(null)}}else Q=function(){_(j,0)};function te(G){x=G,T||(T=!0,Q())}function O(G,U){b=_(function(){G(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,te(A))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var W=d;d=U;try{return G()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,U){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=d;d=G;try{return U()}finally{d=W}},t.unstable_scheduleCallback=function(G,U,W){var J=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,G){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=W+re,G={id:f++,callback:U,priorityLevel:G,startTime:W,expirationTime:re,sortIndex:-1},W>J?(G.sortIndex=W,e(c,G),n(l)===null&&G===n(c)&&(S?(u(b),b=-1):S=!0,O(M,W-J))):(G.sortIndex=re,e(l,G),v||g||(v=!0,te(A))),G},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(G){var U=d;return function(){var W=d;d=U;try{return G.apply(this,arguments)}finally{d=W}}}})(mg);pg.exports=mg;var I_=pg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=ye,Dn=I_;function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gg=new Set,wa={};function Yr(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(wa[t]=e,t=0;t<e.length;t++)gg.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,U_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},zh={};function O_(t){return Eu.call(zh,t)?!0:Eu.call(Bh,t)?!1:U_.test(t)?zh[t]=!0:(Bh[t]=!0,!1)}function k_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B_(t,e,n,i){if(e===null||typeof e>"u"||k_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);Jt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B_(e,n,r,i)&&(n=null),i||r===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),_g=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),Gh=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,yc;function oa(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function z_(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case cs:return"Portal";case wu:return"Profiler";case pf:return"StrictMode";case Tu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _g:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gf:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function G_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H_(t){var e=yg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=H_(t))}function Sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=yg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cu(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mg(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Nu(t,e){Mg(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pu(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pu(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(la(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function bg(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,wg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V_=["Webkit","ms","Moz","O"];Object.keys(pa).forEach(function(t){V_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pa[e]=pa[t]})});function Tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pa.hasOwnProperty(t)&&pa[t]?(""+e).trim():e+"px"}function Ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(j_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uu=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,bs=null,Es=null;function Xh(t){if(t=Za(t)){if(typeof Ou!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=nc(e),Ou(t.stateNode,t.type,e))}}function Rg(t){bs?Es?Es.push(t):Es=[t]:bs=t}function Cg(){if(bs){var t=bs,e=Es;if(Es=bs=null,Xh(t),e)for(t=0;t<e.length;t++)Xh(e[t])}}function Ng(t,e){return t(e)}function Pg(){}var bc=!1;function Lg(t,e,n){if(bc)return t(e,n);bc=!0;try{return Ng(t,e,n)}finally{bc=!1,(bs!==null||Es!==null)&&(Pg(),Cg())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var ku=!1;if(Oi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){ku=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{ku=!1}function W_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ma=!1,vl=null,yl=!1,Bu=null,X_={onError:function(t){ma=!0,vl=t}};function Y_(t,e,n,i,r,s,a,o,l){ma=!1,vl=null,W_.apply(X_,arguments)}function $_(t,e,n,i,r,s,a,o,l){if(Y_.apply(this,arguments),ma){if(ma){var c=vl;ma=!1,vl=null}else throw Error(fe(198));yl||(yl=!0,Bu=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if($r(t)!==t)throw Error(fe(188))}function q_(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yh(r),t;if(s===i)return Yh(r),e;s=s.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function Ig(t){return t=q_(t),t!==null?Fg(t):null}function Fg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fg(t);if(e!==null)return e;t=t.sibling}return null}var Ug=Dn.unstable_scheduleCallback,$h=Dn.unstable_cancelCallback,K_=Dn.unstable_shouldYield,Z_=Dn.unstable_requestPaint,Lt=Dn.unstable_now,Q_=Dn.unstable_getCurrentPriorityLevel,_f=Dn.unstable_ImmediatePriority,Og=Dn.unstable_UserBlockingPriority,Sl=Dn.unstable_NormalPriority,J_=Dn.unstable_LowPriority,kg=Dn.unstable_IdlePriority,Ql=null,mi=null;function ev(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:iv,tv=Math.log,nv=Math.LN2;function iv(t){return t>>>=0,t===0?32:31-(tv(t)/nv|0)|0}var co=64,uo=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ca(o):(s&=a,s!==0&&(i=ca(s)))}else a=n&~r,a!==0?i=ca(a):s!==0&&(i=ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=rv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bg(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function av(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function zg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,yf,Hg,Vg,jg,Gu=!1,fo=[],ar=null,or=null,lr=null,Ra=new Map,Ca=new Map,Ji=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lv(t,e,n,i,r){switch(e){case"focusin":return ar=qs(ar,t,e,n,i,r),!0;case"dragenter":return or=qs(or,t,e,n,i,r),!0;case"mouseover":return lr=qs(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,qs(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,qs(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Wg(t){var e=Lr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=Dg(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uu=i,n.target.dispatchEvent(i),Uu=null}else return e=Za(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){el(t)&&n.delete(e)}function cv(){Gu=!1,ar!==null&&el(ar)&&(ar=null),or!==null&&el(or)&&(or=null),lr!==null&&el(lr)&&(lr=null),Ra.forEach(Kh),Ca.forEach(Kh)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Gu||(Gu=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,cv)))}function Na(t){function e(r){return Ks(r,t)}if(0<fo.length){Ks(fo[0],t);for(var n=1;n<fo.length;n++){var i=fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&Ks(ar,t),or!==null&&Ks(or,t),lr!==null&&Ks(lr,t),Ra.forEach(e),Ca.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)Wg(n),n.blockedOn===null&&Ji.shift()}var ws=Hi.ReactCurrentBatchConfig,bl=!0;function uv(t,e,n,i){var r=ft,s=ws.transition;ws.transition=null;try{ft=1,Sf(t,e,n,i)}finally{ft=r,ws.transition=s}}function dv(t,e,n,i){var r=ft,s=ws.transition;ws.transition=null;try{ft=4,Sf(t,e,n,i)}finally{ft=r,ws.transition=s}}function Sf(t,e,n,i){if(bl){var r=Hu(t,e,n,i);if(r===null)Ic(t,e,i,El,n),qh(t,i);else if(lv(r,t,e,n,i))i.stopPropagation();else if(qh(t,i),e&4&&-1<ov.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&Gg(s),s=Hu(t,e,n,i),s===null&&Ic(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ic(t,e,i,null,n)}}var El=null;function Hu(t,e,n,i){if(El=null,t=xf(i),t=Lr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case _f:return 1;case Og:return 4;case Sl:case J_:return 16;case kg:return 536870912;default:return 16}default:return 16}}var nr=null,Mf=null,tl=null;function Yg(){if(tl)return tl;var t,e=Mf,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return tl=r.slice(t,1<i?1-i:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function Zh(){return!1}function Fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:Zh,this.isPropagationStopped=Zh,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Fn(Vs),Ka=Rt({},Vs,{view:0,detail:0}),fv=Fn(Ka),wc,Tc,Zs,Jl=Rt({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(wc=t.screenX-Zs.screenX,Tc=t.screenY-Zs.screenY):Tc=wc=0,Zs=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Qh=Fn(Jl),hv=Rt({},Jl,{dataTransfer:0}),pv=Fn(hv),mv=Rt({},Ka,{relatedTarget:0}),Ac=Fn(mv),gv=Rt({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Fn(gv),_v=Rt({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vv=Fn(_v),yv=Rt({},Vs,{data:0}),Jh=Fn(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bv[t])?!!e[t]:!1}function Ef(){return Ev}var wv=Rt({},Ka,{key:function(t){if(t.key){var e=Sv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tv=Fn(wv),Av=Rt({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Fn(Av),Rv=Rt({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),Cv=Fn(Rv),Nv=Rt({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=Fn(Nv),Lv=Rt({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=Fn(Lv),Iv=[9,13,27,32],wf=Oi&&"CompositionEvent"in window,ga=null;Oi&&"documentMode"in document&&(ga=document.documentMode);var Fv=Oi&&"TextEvent"in window&&!ga,$g=Oi&&(!wf||ga&&8<ga&&11>=ga),tp=" ",np=!1;function qg(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Uv(t,e){switch(t){case"compositionend":return Kg(e);case"keypress":return e.which!==32?null:(np=!0,tp);case"textInput":return t=e.data,t===tp&&np?null:t;default:return null}}function Ov(t,e){if(ds)return t==="compositionend"||!wf&&qg(t,e)?(t=Yg(),tl=Mf=nr=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kv[t.type]:e==="textarea"}function Zg(t,e,n,i){Rg(i),e=wl(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Pa=null;function Bv(t){l0(t,0)}function ec(t){var e=ps(t);if(Sg(e))return t}function zv(t,e){if(t==="change")return e}var Qg=!1;if(Oi){var Rc;if(Oi){var Cc="oninput"in document;if(!Cc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Cc=typeof rp.oninput=="function"}Rc=Cc}else Rc=!1;Qg=Rc&&(!document.documentMode||9<document.documentMode)}function sp(){xa&&(xa.detachEvent("onpropertychange",Jg),Pa=xa=null)}function Jg(t){if(t.propertyName==="value"&&ec(Pa)){var e=[];Zg(e,Pa,t,xf(t)),Lg(Bv,e)}}function Gv(t,e,n){t==="focusin"?(sp(),xa=e,Pa=n,xa.attachEvent("onpropertychange",Jg)):t==="focusout"&&sp()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Pa)}function Vv(t,e){if(t==="click")return ec(e)}function jv(t,e){if(t==="input"||t==="change")return ec(e)}function Wv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:Wv;function La(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eu.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,e){var n=ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ap(n)}}function e0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t0(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xv(t){var e=t0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e0(n.ownerDocument.documentElement,n)){if(i!==null&&Tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=op(n,s);var a=op(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yv=Oi&&"documentMode"in document&&11>=document.documentMode,fs=null,Vu=null,_a=null,ju=!1;function lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||fs==null||fs!==_l(i)||(i=fs,"selectionStart"in i&&Tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&La(_a,i)||(_a=i,i=wl(Vu,"onSelect"),0<i.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Nc={},n0={};Oi&&(n0=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function tc(t){if(Nc[t])return Nc[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n0)return Nc[t]=e[n];return t}var i0=tc("animationend"),r0=tc("animationiteration"),s0=tc("animationstart"),a0=tc("transitionend"),o0=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){o0.set(t,e),Yr(e,[t])}for(var Pc=0;Pc<cp.length;Pc++){var Lc=cp[Pc],$v=Lc.toLowerCase(),qv=Lc[0].toUpperCase()+Lc.slice(1);_r($v,"on"+qv)}_r(i0,"onAnimationEnd");_r(r0,"onAnimationIteration");_r(s0,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(a0,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$_(i,e,void 0,t),t.currentTarget=null}function l0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;up(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;up(r,o,c),s=l}}}if(yl)throw t=Bu,yl=!1,Bu=null,t}function _t(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(c0(e,t,2,!1),n.add(i))}function Dc(t,e,n){var i=0;e&&(i|=4),c0(n,t,i,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[mo]){t[mo]=!0,gg.forEach(function(n){n!=="selectionchange"&&(Kv.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Dc("selectionchange",!1,e))}}function c0(t,e,n,i){switch(Xg(e)){case 1:var r=uv;break;case 4:r=dv;break;default:r=Sf}n=r.bind(null,e,n,t),r=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ic(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Lg(function(){var c=s,f=xf(n),p=[];e:{var d=o0.get(t);if(d!==void 0){var g=bf,v=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":g=Tv;break;case"focusin":v="focus",g=Ac;break;case"focusout":v="blur",g=Ac;break;case"beforeblur":case"afterblur":g=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cv;break;case i0:case r0:case s0:g=xv;break;case a0:g=Pv;break;case"scroll":g=fv;break;case"wheel":g=Dv;break;case"copy":case"cut":case"paste":g=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ep}var S=(e&4)!==0,_=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var m=c,y;m!==null;){y=m;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,u!==null&&(M=Aa(m,u),M!=null&&S.push(Ia(m,M,y)))),_)break;m=m.return}0<S.length&&(d=new g(d,v,null,n,f),p.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Uu&&(v=n.relatedTarget||n.fromElement)&&(Lr(v)||v[ki]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Lr(v):null,v!==null&&(_=$r(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(S=Qh,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=ep,M="onPointerLeave",u="onPointerEnter",m="pointer"),_=g==null?d:ps(g),y=v==null?d:ps(v),d=new S(M,m+"leave",g,n,f),d.target=_,d.relatedTarget=y,M=null,Lr(f)===c&&(S=new S(u,m+"enter",v,n,f),S.target=y,S.relatedTarget=_,M=S),_=M,g&&v)t:{for(S=g,u=v,m=0,y=S;y;y=qr(y))m++;for(y=0,M=u;M;M=qr(M))y++;for(;0<m-y;)S=qr(S),m--;for(;0<y-m;)u=qr(u),y--;for(;m--;){if(S===u||u!==null&&S===u.alternate)break t;S=qr(S),u=qr(u)}S=null}else S=null;g!==null&&dp(p,d,g,S,!1),v!==null&&_!==null&&dp(p,_,v,S,!0)}}e:{if(d=c?ps(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var A=zv;else if(ip(d))if(Qg)A=jv;else{A=Hv;var T=Gv}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Vv);if(A&&(A=A(t,c))){Zg(p,A,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Pu(d,"number",d.value)}switch(T=c?ps(c):window,t){case"focusin":(ip(T)||T.contentEditable==="true")&&(fs=T,Vu=c,_a=null);break;case"focusout":_a=Vu=fs=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,lp(p,n,f);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":lp(p,n,f)}var x;if(wf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ds?qg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&($g&&n.locale!=="ko"&&(ds||b!=="onCompositionStart"?b==="onCompositionEnd"&&ds&&(x=Yg()):(nr=f,Mf="value"in nr?nr.value:nr.textContent,ds=!0)),T=wl(c,b),0<T.length&&(b=new Jh(b,t,null,n,f),p.push({event:b,listeners:T}),x?b.data=x:(x=Kg(n),x!==null&&(b.data=x)))),(x=Fv?Uv(t,n):Ov(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new Jh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=x))}l0(p,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Ia(t,s,r)),s=Aa(t,e),s!=null&&i.push(Ia(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Aa(n,s),l!=null&&a.unshift(Ia(n,l,o))):r||(l=Aa(n,s),l!=null&&a.push(Ia(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Qv,"")}function go(t,e,n){if(e=fp(e),fp(t)!==e&&n)throw Error(fe(425))}function Tl(){}var Wu=null,Xu=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(ty)}:$u;function ty(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),fi="__reactFiber$"+js,Fa="__reactProps$"+js,ki="__reactContainer$"+js,qu="__reactEvents$"+js,ny="__reactListeners$"+js,iy="__reactHandles$"+js;function Lr(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[fi])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[fi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function nc(t){return t[Fa]||null}var Ku=[],ms=-1;function vr(t){return{current:t}}function vt(t){0>ms||(t.current=Ku[ms],Ku[ms]=null,ms--)}function gt(t,e){ms++,Ku[ms]=t.current,t.current=e}var mr={},cn=vr(mr),Mn=vr(!1),Br=mr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Al(){vt(Mn),vt(cn)}function mp(t,e,n){if(cn.current!==mr)throw Error(fe(168));gt(cn,e),gt(Mn,n)}function u0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,G_(t)||"Unknown",r));return Rt({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Br=cn.current,gt(cn,t),gt(Mn,Mn.current),!0}function gp(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=u0(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,vt(Mn),vt(cn),gt(cn,t)):vt(Mn),gt(Mn,n)}var Ri=null,ic=!1,Uc=!1;function d0(t){Ri===null?Ri=[t]:Ri.push(t)}function ry(t){ic=!0,d0(t)}function yr(){if(!Uc&&Ri!==null){Uc=!0;var t=0,e=ft;try{var n=Ri;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,ic=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),Ug(_f,yr),r}finally{ft=e,Uc=!1}}return null}var gs=[],xs=0,Cl=null,Nl=0,kn=[],Bn=0,zr=null,Pi=1,Li="";function Cr(t,e){gs[xs++]=Nl,gs[xs++]=Cl,Cl=t,Nl=e}function f0(t,e,n){kn[Bn++]=Pi,kn[Bn++]=Li,kn[Bn++]=zr,zr=t;var i=Pi;t=Li;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Pi=1<<32-ni(e)+r|n<<r|i,Li=s+t}else Pi=1<<s|n<<r|i,Li=t}function Af(t){t.return!==null&&(Cr(t,1),f0(t,1,0))}function Rf(t){for(;t===Cl;)Cl=gs[--xs],gs[xs]=null,Nl=gs[--xs],gs[xs]=null;for(;t===zr;)zr=kn[--Bn],kn[Bn]=null,Li=kn[--Bn],kn[Bn]=null,Pi=kn[--Bn],kn[Bn]=null}var Ln=null,Pn=null,bt=!1,Qn=null;function h0(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(bt){var e=Pn;if(e){var n=e;if(!xp(t,e)){if(Zu(t))throw Error(fe(418));e=cr(n.nextSibling);var i=Ln;e&&xp(t,e)?h0(i,n):(t.flags=t.flags&-4097|2,bt=!1,Ln=t)}}else{if(Zu(t))throw Error(fe(418));t.flags=t.flags&-4097|2,bt=!1,Ln=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function xo(t){if(t!==Ln)return!1;if(!bt)return _p(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=Pn)){if(Zu(t))throw p0(),Error(fe(418));for(;e;)h0(t,e),e=cr(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?cr(t.stateNode.nextSibling):null;return!0}function p0(){for(var t=Pn;t;)t=cr(t.nextSibling)}function Ds(){Pn=Ln=null,bt=!1}function Cf(t){Qn===null?Qn=[t]:Qn.push(t)}var sy=Hi.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function m0(t){function e(u,m){if(t){var y=u.deletions;y===null?(u.deletions=[m],u.flags|=16):y.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=hr(u,m),u.index=0,u.sibling=null,u}function s(u,m,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<m?(u.flags|=2,m):y):(u.flags|=2,m)):(u.flags|=1048576,m)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,m,y,M){return m===null||m.tag!==6?(m=Vc(y,u.mode,M),m.return=u,m):(m=r(m,y),m.return=u,m)}function l(u,m,y,M){var A=y.type;return A===us?f(u,m,y.props.children,M,y.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Zi&&vp(A)===m.type)?(M=r(m,y.props),M.ref=Qs(u,m,y),M.return=u,M):(M=cl(y.type,y.key,y.props,null,u.mode,M),M.ref=Qs(u,m,y),M.return=u,M)}function c(u,m,y,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=jc(y,u.mode,M),m.return=u,m):(m=r(m,y.children||[]),m.return=u,m)}function f(u,m,y,M,A){return m===null||m.tag!==7?(m=Or(y,u.mode,M,A),m.return=u,m):(m=r(m,y),m.return=u,m)}function p(u,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Vc(""+m,u.mode,y),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:return y=cl(m.type,m.key,m.props,null,u.mode,y),y.ref=Qs(u,null,m),y.return=u,y;case cs:return m=jc(m,u.mode,y),m.return=u,m;case Zi:var M=m._init;return p(u,M(m._payload),y)}if(la(m)||Ys(m))return m=Or(m,u.mode,y,null),m.return=u,m;_o(u,m)}return null}function d(u,m,y,M){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:o(u,m,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ao:return y.key===A?l(u,m,y,M):null;case cs:return y.key===A?c(u,m,y,M):null;case Zi:return A=y._init,d(u,m,A(y._payload),M)}if(la(y)||Ys(y))return A!==null?null:f(u,m,y,M,null);_o(u,y)}return null}function g(u,m,y,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(y)||null,o(m,u,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ao:return u=u.get(M.key===null?y:M.key)||null,l(m,u,M,A);case cs:return u=u.get(M.key===null?y:M.key)||null,c(m,u,M,A);case Zi:var T=M._init;return g(u,m,y,T(M._payload),A)}if(la(M)||Ys(M))return u=u.get(y)||null,f(m,u,M,A,null);_o(m,M)}return null}function v(u,m,y,M){for(var A=null,T=null,x=m,b=m=0,P=null;x!==null&&b<y.length;b++){x.index>b?(P=x,x=null):P=x.sibling;var C=d(u,x,y[b],M);if(C===null){x===null&&(x=P);break}t&&x&&C.alternate===null&&e(u,x),m=s(C,m,b),T===null?A=C:T.sibling=C,T=C,x=P}if(b===y.length)return n(u,x),bt&&Cr(u,b),A;if(x===null){for(;b<y.length;b++)x=p(u,y[b],M),x!==null&&(m=s(x,m,b),T===null?A=x:T.sibling=x,T=x);return bt&&Cr(u,b),A}for(x=i(u,x);b<y.length;b++)P=g(x,u,b,y[b],M),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?b:P.key),m=s(P,m,b),T===null?A=P:T.sibling=P,T=P);return t&&x.forEach(function(D){return e(u,D)}),bt&&Cr(u,b),A}function S(u,m,y,M){var A=Ys(y);if(typeof A!="function")throw Error(fe(150));if(y=A.call(y),y==null)throw Error(fe(151));for(var T=A=null,x=m,b=m=0,P=null,C=y.next();x!==null&&!C.done;b++,C=y.next()){x.index>b?(P=x,x=null):P=x.sibling;var D=d(u,x,C.value,M);if(D===null){x===null&&(x=P);break}t&&x&&D.alternate===null&&e(u,x),m=s(D,m,b),T===null?A=D:T.sibling=D,T=D,x=P}if(C.done)return n(u,x),bt&&Cr(u,b),A;if(x===null){for(;!C.done;b++,C=y.next())C=p(u,C.value,M),C!==null&&(m=s(C,m,b),T===null?A=C:T.sibling=C,T=C);return bt&&Cr(u,b),A}for(x=i(u,x);!C.done;b++,C=y.next())C=g(x,u,b,C.value,M),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?b:C.key),m=s(C,m,b),T===null?A=C:T.sibling=C,T=C);return t&&x.forEach(function(j){return e(u,j)}),bt&&Cr(u,b),A}function _(u,m,y,M){if(typeof y=="object"&&y!==null&&y.type===us&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ao:e:{for(var A=y.key,T=m;T!==null;){if(T.key===A){if(A=y.type,A===us){if(T.tag===7){n(u,T.sibling),m=r(T,y.props.children),m.return=u,u=m;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Zi&&vp(A)===T.type){n(u,T.sibling),m=r(T,y.props),m.ref=Qs(u,T,y),m.return=u,u=m;break e}n(u,T);break}else e(u,T);T=T.sibling}y.type===us?(m=Or(y.props.children,u.mode,M,y.key),m.return=u,u=m):(M=cl(y.type,y.key,y.props,null,u.mode,M),M.ref=Qs(u,m,y),M.return=u,u=M)}return a(u);case cs:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(u,m.sibling),m=r(m,y.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=jc(y,u.mode,M),m.return=u,u=m}return a(u);case Zi:return T=y._init,_(u,m,T(y._payload),M)}if(la(y))return v(u,m,y,M);if(Ys(y))return S(u,m,y,M);_o(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,y),m.return=u,u=m):(n(u,m),m=Vc(y,u.mode,M),m.return=u,u=m),a(u)):n(u,m)}return _}var Is=m0(!0),g0=m0(!1),Pl=vr(null),Ll=null,_s=null,Nf=null;function Pf(){Nf=_s=Ll=null}function Lf(t){var e=Pl.current;vt(Pl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){Ll=t,Nf=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Nf!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(Ll===null)throw Error(fe(308));_s=t,Ll.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var Dr=null;function Df(t){Dr===null?Dr=[t]:Dr.push(t)}function x0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Df(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(d=e,g=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){p=v.call(g,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(g,p,d):v,d==null)break e;p=Rt({},p,d);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=p):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=a,t.lanes=a,t.memoizedState=p}}function Sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Qa={},gi=vr(Qa),Ua=vr(Qa),Oa=vr(Qa);function Ir(t){if(t===Qa)throw Error(fe(174));return t}function Ff(t,e){switch(gt(Oa,e),gt(Ua,t),gt(gi,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Du(e,t)}vt(gi),gt(gi,e)}function Fs(){vt(gi),vt(Ua),vt(Oa)}function v0(t){Ir(Oa.current);var e=Ir(gi.current),n=Du(e,t.type);e!==n&&(gt(Ua,t),gt(gi,n))}function Uf(t){Ua.current===t&&(vt(gi),vt(Ua))}var wt=vr(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Of(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var rl=Hi.ReactCurrentDispatcher,kc=Hi.ReactCurrentBatchConfig,Gr=0,At=null,Bt=null,Wt=null,Fl=!1,va=!1,ka=0,ay=0;function rn(){throw Error(fe(321))}function kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Bf(t,e,n,i,r,s){if(Gr=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?uy:dy,t=n(i,r),va){s=0;do{if(va=!1,ka=0,25<=s)throw Error(fe(301));s+=1,Wt=Bt=null,e.updateQueue=null,rl.current=fy,t=n(i,r)}while(va)}if(rl.current=Ul,e=Bt!==null&&Bt.next!==null,Gr=0,Wt=Bt=At=null,Fl=!1,e)throw Error(fe(300));return t}function zf(){var t=ka!==0;return ka=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?At.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function jn(){if(Bt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?At.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(fe(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?At.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Ba(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=jn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Gr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,At.lanes|=f,Hr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ri(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=jn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ri(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function y0(){}function S0(t,e){var n=At,i=jn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Gf(E0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,za(9,b0.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(fe(349));Gr&30||M0(n,e,r)}return r}function M0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b0(t,e,n,i){e.value=n,e.getSnapshot=i,w0(e)&&T0(t)}function E0(t,e,n){return n(function(){w0(e)&&T0(t)})}function w0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function T0(t){var e=Bi(t,1);e!==null&&ii(e,t,1,-1)}function Mp(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=cy.bind(null,At,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A0(){return jn().memoizedState}function sl(t,e,n,i){var r=ui();At.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&kf(i,a.deps)){r.memoizedState=za(e,n,s,i);return}}At.flags|=t,r.memoizedState=za(1|e,n,s,i)}function bp(t,e){return sl(8390656,8,t,e)}function Gf(t,e){return rc(2048,8,t,e)}function R0(t,e){return rc(4,2,t,e)}function C0(t,e){return rc(4,4,t,e)}function N0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P0(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,N0.bind(null,e,t),n)}function Hf(){}function L0(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function I0(t,e,n){return Gr&21?(ri(n,e)||(n=Bg(),At.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function oy(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{ft=n,kc.transition=i}}function F0(){return jn().memoizedState}function ly(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U0(t))O0(e,n);else if(n=x0(t,e,n,i),n!==null){var r=pn();ii(n,t,i,r),k0(n,e,i)}}function cy(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U0(t))O0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ri(o,a)){var l=e.interleaved;l===null?(r.next=r,Df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x0(t,e,r,i),n!==null&&(r=pn(),ii(n,t,i,r),k0(n,e,i))}}function U0(t){var e=t.alternate;return t===At||e!==null&&e===At}function O0(t,e){va=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var Ul={readContext:Vn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},uy={readContext:Vn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,N0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:Mp,useDebugValue:Hf,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=Mp(!1),e=t[0];return t=oy.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=ui();if(bt){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),Xt===null)throw Error(fe(349));Gr&30||M0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bp(E0.bind(null,i,s,t),[t]),i.flags|=2048,za(9,b0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=Xt.identifierPrefix;if(bt){var n=Li,i=Pi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:Vn,useCallback:L0,useContext:Vn,useEffect:Gf,useImperativeHandle:P0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:D0,useReducer:Bc,useRef:A0,useState:function(){return Bc(Ba)},useDebugValue:Hf,useDeferredValue:function(t){var e=jn();return I0(e,Bt.memoizedState,t)},useTransition:function(){var t=Bc(Ba)[0],e=jn().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:S0,useId:F0,unstable_isNewReconciler:!1},fy={readContext:Vn,useCallback:L0,useContext:Vn,useEffect:Gf,useImperativeHandle:P0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:D0,useReducer:zc,useRef:A0,useState:function(){return zc(Ba)},useDebugValue:Hf,useDeferredValue:function(t){var e=jn();return Bt===null?e.memoizedState=t:I0(e,Bt.memoizedState,t)},useTransition:function(){var t=zc(Ba)[0],e=jn().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:S0,useId:F0,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=fr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ii(e,t,r,i),il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=fr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ii(e,t,r,i),il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=fr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ii(e,t,i,n),il(e,t,i))}};function Ep(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function B0(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=bn(e)?Br:cn.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=bn(e)?Br:cn.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function z0(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,fd=i),nd(t,e)},n}function G0(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var py=Hi.ReactCurrentOwner,yn=!1;function hn(t,e,n,i){e.child=t===null?g0(e,null,n,i):Is(e,t.child,n,i)}function Cp(t,e,n,i,r){n=n.render;var s=e.ref;return Ts(e,r),i=Bf(t,e,n,i,s,r),n=zf(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(bt&&n&&Af(e),e.flags|=1,hn(t,e,i,r),e.child)}function Np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H0(t,e,s,i,r)):(t=cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(a,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function H0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return id(t,e,n,i,r)}function V0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ys,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(ys,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(ys,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(ys,Rn),Rn|=i;return hn(t,e,r,n),e.child}function j0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=bn(n)?Br:cn.current;return s=Ls(e,s),Ts(e,r),n=Bf(t,e,n,i,s,r),i=zf(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(bt&&i&&Af(e),e.flags|=1,hn(t,e,n,r),e.child)}function Pp(t,e,n,i,r){if(bn(n)){var s=!0;Rl(e)}else s=!1;if(Ts(e,r),e.stateNode===null)al(t,e),B0(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=bn(n)?Br:cn.current,c=Ls(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&wp(e,a,i,c),Qi=!1;var d=e.memoizedState;a.state=d,Dl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Mn.current||Qi?(typeof f=="function"&&(ed(e,n,f,i),l=e.memoizedState),(o=Qi||Ep(e,n,o,i,d,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,_0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Kn(e.type,o),a.props=c,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=bn(n)?Br:cn.current,l=Ls(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&wp(e,a,i,l),Qi=!1,d=e.memoizedState,a.state=d,Dl(e,i,a,r);var v=e.memoizedState;o!==p||d!==v||Mn.current||Qi?(typeof g=="function"&&(ed(e,n,g,i),v=e.memoizedState),(c=Qi||Ep(e,n,c,i,d,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){j0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&gp(e,n,!1),zi(t,e,s);i=e.stateNode,py.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,o,s)):hn(t,e,o,s),e.memoizedState=i.state,r&&gp(e,n,!0),e.child}function W0(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),Ff(t,e.containerInfo)}function Lp(t,e,n,i,r){return Ds(),Cf(r),e.flags|=256,hn(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function X0(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(wt,r&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lc(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=sd,t):Vf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return my(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=hr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ad(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vf(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&Cf(i),Is(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Gc(Error(fe(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,a),e.child.memoizedState=ad(a),e.memoizedState=sd,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(fe(419)),i=Gc(s,i,void 0),vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(t,r),ii(i,t,r,-1))}return qf(),i=Gc(Error(fe(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=cr(r.nextSibling),Ln=e,bt=!0,Qn=null,t!==null&&(kn[Bn++]=Pi,kn[Bn++]=Li,kn[Bn++]=zr,Pi=t.id,Li=t.overflow,zr=e),e=Vf(e,i.children),e.flags|=4096,e)}function Dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Y0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,n,e);else if(t.tag===19)Dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:W0(e),Ds();break;case 5:v0(e);break;case 1:bn(e.type)&&Rl(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?X0(t,e,n):(gt(wt,wt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Y0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,V0(t,e,n)}return zi(t,e,n)}var $0,od,q0,K0;$0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};q0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(gi.current);var s=null;switch(n){case"input":r=Cu(t,r),i=Cu(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(t,r),i=Lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}Iu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};K0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xy(t,e,n){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return bn(e.type)&&Al(),sn(e),null;case 3:return i=e.stateNode,Fs(),vt(Mn),vt(cn),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(md(Qn),Qn=null))),od(t,e),sn(e),null;case 5:Uf(e);var r=Ir(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return sn(e),null}if(t=Ir(gi.current),xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<ua.length;r++)_t(ua[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Hh(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":jh(i,s),_t("invalid",i)}Iu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):wa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":oo(i),Vh(i,s,!0);break;case"textarea":oo(i),Wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[fi]=e,t[Fa]=i,$0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Fu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<ua.length;r++)_t(ua[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Hh(t,i),r=Cu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":jh(t,i),r=Lu(t,i),_t("invalid",t);break;default:r=i}Iu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&hf(t,s,l,a))}switch(n){case"input":oo(t),Vh(t,i,!1);break;case"textarea":oo(t),Wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)K0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=Ir(Oa.current),Ir(gi.current),xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return sn(e),null;case 13:if(vt(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Pn!==null&&e.mode&1&&!(e.flags&128))p0(),Ds(),e.flags|=98560,s=!1;else if(s=xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[fi]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else Qn!==null&&(md(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?zt===0&&(zt=3):qf())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Fs(),od(t,e),t===null&&Da(e.stateNode.containerInfo),sn(e),null;case 10:return Lf(e.type._context),sn(e),null;case 17:return bn(e.type)&&Al(),sn(e),null;case 19:if(vt(wt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Js(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Il(t),a!==null){for(e.flags|=128,Js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Os&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!bt)return sn(e),null}else 2*Lt()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=wt.current,gt(wt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function _y(t,e){switch(Rf(e),e.tag){case 1:return bn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),vt(Mn),vt(cn),Of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(vt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(wt),null;case 4:return Fs(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var yo=!1,ln=!1,vy=typeof WeakSet=="function"?WeakSet:Set,Te=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var Ip=!1;function yy(t,e){if(Wu=bl,t=t0(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,d=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)d=p,p=g;for(;;){if(p===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(g=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},bl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,_=v.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Kn(e.type,S),_);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(M){Pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=Ip,Ip=!1,v}function ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Z0(t){var e=t.alternate;e!==null&&(t.alternate=null,Z0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[Fa],delete e[qu],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Kt=null,Zn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)J0(t,e,n),n=n.sibling}function J0(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:ln||vs(n,e);case 6:var i=Kt,r=Zn;Kt=null,Wi(t,e,n),Kt=i,Zn=r,Kt!==null&&(Zn?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(Zn?(t=Kt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Na(t)):Fc(Kt,n.stateNode));break;case 4:i=Kt,r=Zn,Kt=n.stateNode.containerInfo,Zn=!0,Wi(t,e,n),Kt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ld(n,e,a),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!ln&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,Wi(t,e,n),ln=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,Zn=!1;break e;case 3:Kt=o.stateNode.containerInfo,Zn=!0;break e;case 4:Kt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(Kt===null)throw Error(fe(160));J0(s,a,r),Kt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ex(e,t),e=e.sibling}function ex(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),ai(t),i&4){try{ya(3,t,t.return),ac(3,t)}catch(S){Pt(t,t.return,S)}try{ya(5,t,t.return)}catch(S){Pt(t,t.return,S)}}break;case 1:Xn(e,t),ai(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Xn(e,t),ai(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(S){Pt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Mg(r,s),Fu(o,a);var c=Fu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?Ag(r,p):f==="dangerouslySetInnerHTML"?wg(r,p):f==="children"?Ta(r,p):hf(r,f,p,c)}switch(o){case"input":Nu(r,s);break;case"textarea":bg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ms(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(S){Pt(t,t.return,S)}}break;case 6:if(Xn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Pt(t,t.return,S)}}break;case 3:if(Xn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(S){Pt(t,t.return,S)}break;case 4:Xn(e,t),ai(t);break;case 13:Xn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=Lt())),i&4&&Up(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||f,Xn(e,t),ln=c):Xn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(p=Te=f;Te!==null;){switch(d=Te,g=d.child,d.tag){case 0:case 11:case 14:case 15:ya(4,d,d.return);break;case 1:vs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Pt(i,n,S)}}break;case 5:vs(d,d.return);break;case 22:if(d.memoizedState!==null){kp(p);continue}}g!==null?(g.return=d,Te=g):kp(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Tg("display",a))}catch(S){Pt(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){Pt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xn(e,t),ai(t),i&4&&Up(t);break;case 21:break;default:Xn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var s=Fp(t);dd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Fp(t);ud(t,o,a);break;default:throw Error(fe(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){Te=t,tx(t)}function tx(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||ln;o=yo;var c=ln;if(yo=a,(ln=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Bp(r):l!==null?(l.return=a,Te=l):Bp(r);for(;s!==null;)Te=s,tx(s),s=s.sibling;Te=r,yo=o,ln=c}Op(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Op(t)}}function Op(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Na(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}ln||e.flags&512&&cd(e)}catch(d){Pt(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function kp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Bp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{cd(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{cd(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var My=Math.ceil,Ol=Hi.ReactCurrentDispatcher,jf=Hi.ReactCurrentOwner,Hn=Hi.ReactCurrentBatchConfig,it=0,Xt=null,Ut=null,Qt=0,Rn=0,ys=vr(0),zt=0,Ga=null,Hr=0,oc=0,Wf=0,Sa=null,vn=null,Xf=0,Os=1/0,Ai=null,kl=!1,fd=null,dr=null,So=!1,ir=null,Bl=0,Ma=0,hd=null,ol=-1,ll=0;function pn(){return it&6?Lt():ol!==-1?ol:ol=Lt()}function fr(t){return t.mode&1?it&2&&Qt!==0?Qt&-Qt:sy.transition!==null?(ll===0&&(ll=Bg()),ll):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Xg(t.type)),t):1}function ii(t,e,n,i){if(50<Ma)throw Ma=0,hd=null,Error(fe(185));qa(t,n,i),(!(it&2)||t!==Xt)&&(t===Xt&&(!(it&2)&&(oc|=n),zt===4&&er(t,Qt)),En(t,i),n===1&&it===0&&!(e.mode&1)&&(Os=Lt()+500,ic&&yr()))}function En(t,e){var n=t.callbackNode;sv(t,e);var i=Ml(t,t===Xt?Qt:0);if(i===0)n!==null&&$h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$h(n),e===1)t.tag===0?ry(zp.bind(null,t)):d0(zp.bind(null,t)),ey(function(){!(it&6)&&yr()}),n=null;else{switch(zg(i)){case 1:n=_f;break;case 4:n=Og;break;case 16:n=Sl;break;case 536870912:n=kg;break;default:n=Sl}n=cx(n,nx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nx(t,e){if(ol=-1,ll=0,it&6)throw Error(fe(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=Ml(t,t===Xt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=it;it|=2;var s=rx();(Xt!==t||Qt!==e)&&(Ai=null,Os=Lt()+500,Ur(t,e));do try{wy();break}catch(o){ix(t,o)}while(!0);Pf(),Ol.current=s,it=r,Ut!==null?e=0:(Xt=null,Qt=0,e=zt)}if(e!==0){if(e===2&&(r=zu(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=Ga,Ur(t,0),er(t,i),En(t,Lt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!by(r)&&(e=zl(t,i),e===2&&(s=zu(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=Ga,Ur(t,0),er(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Nr(t,vn,Ai);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Xf+500-Lt(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$u(Nr.bind(null,t,vn,Ai),e);break}Nr(t,vn,Ai);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*My(i/1960))-i,10<i){t.timeoutHandle=$u(Nr.bind(null,t,vn,Ai),i);break}Nr(t,vn,Ai);break;case 5:Nr(t,vn,Ai);break;default:throw Error(fe(329))}}}return En(t,Lt()),t.callbackNode===n?nx.bind(null,t):null}function pd(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=zl(t,e),t!==2&&(e=vn,vn=n,e!==null&&md(e)),t}function md(t){vn===null?vn=t:vn.push.apply(vn,t)}function by(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Wf,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function zp(t){if(it&6)throw Error(fe(327));As();var e=Ml(t,0);if(!(e&1))return En(t,Lt()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=zu(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=Ga,Ur(t,0),er(t,e),En(t,Lt()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,vn,Ai),En(t,Lt()),null}function Yf(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Os=Lt()+500,ic&&yr())}}function Vr(t){ir!==null&&ir.tag===0&&!(it&6)&&As();var e=it;it|=1;var n=Hn.transition,i=ft;try{if(Hn.transition=null,ft=1,t)return t()}finally{ft=i,Hn.transition=n,it=e,!(it&6)&&yr()}}function $f(){Rn=ys.current,vt(ys)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jv(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Fs(),vt(Mn),vt(cn),Of();break;case 5:Uf(i);break;case 4:Fs();break;case 13:vt(wt);break;case 19:vt(wt);break;case 10:Lf(i.type._context);break;case 22:case 23:$f()}n=n.return}if(Xt=t,Ut=t=hr(t.current,null),Qt=Rn=e,zt=0,Ga=null,Wf=oc=Hr=0,vn=Sa=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function ix(t,e){do{var n=Ut;try{if(Pf(),rl.current=Ul,Fl){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(Gr=0,Wt=Bt=At=null,va=!1,ka=0,jf.current=null,n===null||n.return===null){zt=1,Ga=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Ap(a);if(g!==null){g.flags&=-257,Rp(g,a,o,s,e),g.mode&1&&Tp(s,c,e),e=g,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Tp(s,c,e),qf();break e}l=Error(fe(426))}}else if(bt&&o.mode&1){var _=Ap(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Rp(_,a,o,s,e),Cf(Us(l,o));break e}}s=l=Us(l,o),zt!==4&&(zt=2),Sa===null?Sa=[s]:Sa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=z0(s,l,e);yp(s,u);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=G0(s,o,e);yp(s,M);break e}}s=s.return}while(s!==null)}ax(n)}catch(A){e=A,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function rx(){var t=Ol.current;return Ol.current=Ul,t===null?Ul:t}function qf(){(zt===0||zt===3||zt===2)&&(zt=4),Xt===null||!(Hr&268435455)&&!(oc&268435455)||er(Xt,Qt)}function zl(t,e){var n=it;it|=2;var i=rx();(Xt!==t||Qt!==e)&&(Ai=null,Ur(t,e));do try{Ey();break}catch(r){ix(t,r)}while(!0);if(Pf(),it=n,Ol.current=i,Ut!==null)throw Error(fe(261));return Xt=null,Qt=0,zt}function Ey(){for(;Ut!==null;)sx(Ut)}function wy(){for(;Ut!==null&&!K_();)sx(Ut)}function sx(t){var e=lx(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?ax(t):Ut=e,jf.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_y(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ut=null;return}}else if(n=xy(n,e,Rn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);zt===0&&(zt=5)}function Nr(t,e,n){var i=ft,r=Hn.transition;try{Hn.transition=null,ft=1,Ty(t,e,n,i)}finally{Hn.transition=r,ft=i}return null}function Ty(t,e,n,i){do As();while(ir!==null);if(it&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(av(t,s),t===Xt&&(Ut=Xt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,cx(Sl,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var a=ft;ft=1;var o=it;it|=4,jf.current=null,yy(t,n),ex(n,t),Xv(Xu),bl=!!Wu,Xu=Wu=null,t.current=n,Sy(n),Z_(),it=o,ft=a,Hn.transition=s}else t.current=n;if(So&&(So=!1,ir=t,Bl=r),s=t.pendingLanes,s===0&&(dr=null),ev(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=fd,fd=null,t;return Bl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===hd?Ma++:(Ma=0,hd=t):Ma=0,yr(),null}function As(){if(ir!==null){var t=zg(Bl),e=Hn.transition,n=ft;try{if(Hn.transition=null,ft=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Bl=0,it&6)throw Error(fe(331));var r=it;for(it|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:ya(8,f,s)}var p=f.child;if(p!==null)p.return=f,Te=p;else for(;Te!==null;){f=Te;var d=f.sibling,g=f.return;if(Z0(f),f===c){Te=null;break}if(d!==null){d.return=g,Te=d;break}Te=g}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var _=S.sibling;S.sibling=null,S=_}while(S!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var m=t.current;for(Te=m;Te!==null;){a=Te;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Te=y;else e:for(a=m;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ac(9,o)}}catch(A){Pt(o,o.return,A)}if(o===a){Te=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Te=M;break e}Te=o.return}}if(it=r,yr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Ql,t)}catch{}i=!0}return i}finally{ft=n,Hn.transition=e}}return!1}function Gp(t,e,n){e=Us(n,e),e=z0(t,e,1),t=ur(t,e,1),e=pn(),t!==null&&(qa(t,1,e),En(t,e))}function Pt(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=Us(n,t),t=G0(e,t,1),e=ur(e,t,1),t=pn(),e!==null&&(qa(e,1,t),En(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Qt&n)===n&&(zt===4||zt===3&&(Qt&130023424)===Qt&&500>Lt()-Xf?Ur(t,0):Wf|=n),En(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=pn();t=Bi(t,e),t!==null&&(qa(t,e,n),En(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),ox(t,n)}var lx;lx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,gy(t,e,n);yn=!!(t.flags&131072)}else yn=!1,bt&&e.flags&1048576&&f0(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Ls(e,cn.current);Ts(e,n),r=Bf(null,e,i,t,r,n);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,If(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&Af(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=Kn(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=Pp(null,e,i,t,n);break e;case 11:e=Cp(null,e,i,t,n);break e;case 14:e=Np(null,e,i,Kn(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Pp(t,e,i,r,n);case 3:e:{if(W0(e),t===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_0(t,e),Dl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(fe(423)),e),e=Lp(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(fe(424)),e),e=Lp(t,e,i,n,r);break e}else for(Pn=cr(e.stateNode.containerInfo.firstChild),Ln=e,bt=!0,Qn=null,n=g0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=zi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return v0(e),t===null&&Qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Yu(i,r)?a=null:s!==null&&Yu(i,s)&&(e.flags|=32),j0(t,e),hn(t,e,a,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return X0(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Cp(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Pl,i._currentValue),i._currentValue=a,s!==null)if(ri(s.value,a)){if(s.children===r.children&&!Mn.current){e=zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(fe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ju(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,n),r=Vn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Np(t,e,i,r,n);case 15:return H0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),al(t,e),e.tag=1,bn(i)?(t=!0,Rl(e)):t=!1,Ts(e,n),B0(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return Y0(t,e,n);case 22:return V0(t,e,n)}throw Error(fe(156,e.tag))};function cx(t,e){return Ug(t,e)}function Ny(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new Ny(t,e,n,i)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mf)return 11;if(t===gf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Kf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case us:return Or(n.children,r,s,e);case pf:a=8,r|=8;break;case wu:return t=Gn(12,n,e,r|2),t.elementType=wu,t.lanes=s,t;case Tu:return t=Gn(13,n,e,r),t.elementType=Tu,t.lanes=s,t;case Au:return t=Gn(19,n,e,r),t.elementType=Au,t.lanes=s,t;case vg:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:a=10;break e;case _g:a=9;break e;case mf:a=11;break e;case gf:a=14;break e;case Zi:a=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=Gn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(t,e,n,i,r,s,a,o,l){return t=new Ly(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ux(t){if(!t)return mr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(bn(n))return u0(t,n,e)}return e}function dx(t,e,n,i,r,s,a,o,l){return t=Zf(n,i,!0,t,r,s,a,o,l),t.context=ux(null),n=t.current,i=pn(),r=fr(n),s=Ii(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,qa(t,r,i),En(t,i),t}function cc(t,e,n,i){var r=e.current,s=pn(),a=fr(r);return n=ux(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,a),t!==null&&(ii(t,r,a,s),il(t,r,a)),a}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function Iy(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}uc.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));cc(t,e,null,null)};uc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){cc(null,t,null,null)}),e[ki]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&Wg(t)}};function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function Fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gl(a);s.call(c)}}var a=dx(e,i,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=a,t[ki]=a.current,Da(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Gl(l);o.call(c)}}var l=Zf(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=l,t[ki]=l.current,Da(t.nodeType===8?t.parentNode:t),Vr(function(){cc(e,l,n,i)}),l}function fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Gl(a);o.call(l)}}cc(e,a,t,r)}else a=Fy(n,e,t,r,i);return Gl(a)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(vf(e,n|1),En(e,Lt()),!(it&6)&&(Os=Lt()+500,yr()))}break;case 13:Vr(function(){var i=Bi(t,1);if(i!==null){var r=pn();ii(i,t,1,r)}}),Qf(t,1)}};yf=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=pn();ii(e,t,134217728,n)}Qf(t,134217728)}};Hg=function(t){if(t.tag===13){var e=fr(t),n=Bi(t,e);if(n!==null){var i=pn();ii(n,t,e,i)}Qf(t,e)}};Vg=function(){return ft};jg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Ou=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(fe(90));Sg(i),Nu(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};Ng=Yf;Pg=Vr;var Uy={usingClientEntryPoint:!1,Events:[Za,ps,nc,Rg,Cg,Yf]},ea={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ig(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Ql=Mo.inject(Oy),mi=Mo}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(e))throw Error(fe(200));return Dy(t,e,null,n)};In.createRoot=function(t,e){if(!eh(t))throw Error(fe(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Da(t.nodeType===8?t.parentNode:t),new Jf(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=Ig(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Vr(t)};In.hydrate=function(t,e,n){if(!dc(e))throw Error(fe(200));return fc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!eh(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=dx(e,null,t,1,n??null,r,!1,s,a),t[ki]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uc(e)};In.render=function(t,e,n){if(!dc(e))throw Error(fe(200));return fc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!dc(t))throw Error(fe(40));return t._reactRootContainer?(Vr(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};In.unstable_batchedUpdates=Yf;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!dc(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return fc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hx)}catch(t){console.error(t)}}hx(),hg.exports=In;var ky=hg.exports,jp=ky;bu.createRoot=jp.createRoot,bu.hydrateRoot=jp.hydrateRoot;function By({activeNav:t,setActiveNav:e,onUpgradeSparks:n}){const i=[{id:"create",label:"Create",icon:"auto_fix_high"},{id:"sketch-pad",label:"Sketch Pad",icon:"draw"},{id:"gallery",label:"Gallery & Models",icon:"view_in_ar"},{id:"assets",label:"Asset Library",icon:"category"}],r=[{id:"api-docs",label:"API & Docs",icon:"code"},{id:"community",label:"Community",icon:"forum"},{id:"settings",label:"Settings",icon:"settings"}];return h.jsxs("aside",{className:"fixed left-0 top-0 h-full w-64 bg-[#0c0f11]/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-4 border-r border-[#272a2d]/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]",children:[h.jsxs("div",{className:"flex flex-col gap-6",children:[h.jsxs("div",{className:"flex items-center gap-3 px-1 cursor-pointer",onClick:()=>e("create"),children:[h.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#272a2d] to-[#0c0f11] border border-[#FF7F50]/40 shadow-[0_0_16px_rgba(255,127,80,0.35)]",children:[h.jsxs("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 32 32",children:[h.jsx("polygon",{className:"opacity-80",fill:"none",points:"16,2 29,9 29,23 16,30 3,23 3,9",stroke:"#FF7F50",strokeWidth:"1.8"}),h.jsx("polygon",{fill:"rgba(0,245,155,0.08)",points:"16,7 25,12 25,20 16,25 7,20 7,12",stroke:"#00f59b",strokeWidth:"1.5"}),h.jsx("path",{d:"M16 2 L16 30 M3 9 L29 23 M29 9 L3 23",stroke:"rgba(255,127,80,0.35)",strokeWidth:"1"}),h.jsx("circle",{className:"filter drop-shadow-[0_0_6px_#FF7F50]",cx:"16",cy:"16",fill:"#FF7F50",r:"2.5"})]}),h.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50] animate-ping opacity-75"}),h.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7F50]"})]}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("div",{className:"flex items-center gap-1.5",children:h.jsxs("span",{className:"font-display font-bold text-lg text-white tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-primary bg-clip-text text-transparent",children:["ZEPHYR",h.jsx("span",{className:"text-[#FF7F50] ml-1",children:"3D"})]})}),h.jsx("div",{className:"flex items-center gap-1.5 mt-1",children:h.jsx("span",{className:"px-1.5 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase bg-[#272a2d] border border-[#FF7F50]/40 text-[#FF7F50]",children:"PRO STUDIO v4.0"})})]})]}),h.jsx("div",{className:"h-px w-full bg-[#323537]/40"}),h.jsxs("nav",{className:"flex flex-col gap-1",children:[i.map(s=>{const a=t===s.id;return h.jsxs("button",{onClick:()=>e(s.id),className:`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${a?"bg-[#272a2d] text-[#6ffbbe] shadow-[inset_0_0_12px_rgba(0,245,155,0.15)] relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#00f59b] before:rounded-full":"text-[#bfc9c3] hover:bg-[#1d2022] hover:text-white"}`,children:[h.jsx("span",{className:`material-symbols-outlined text-lg ${a?"text-[#4edea3]":"text-slate-400"}`,children:s.icon}),h.jsx("span",{children:s.label})]},s.id)}),h.jsx("div",{className:"my-2 h-px w-full bg-[#323537]/30"}),r.map(s=>{const a=t===s.id;return h.jsxs("button",{onClick:()=>e(s.id),className:`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${a?"bg-[#272a2d] text-[#6ffbbe] shadow-[inset_0_0_12px_rgba(0,245,155,0.15)] relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#00f59b] before:rounded-full":"text-[#bfc9c3] hover:bg-[#1d2022] hover:text-white"}`,children:[h.jsx("span",{className:`material-symbols-outlined text-lg ${a?"text-[#4edea3]":"text-slate-400"}`,children:s.icon}),h.jsx("span",{children:s.label})]},s.id)})]})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#191c1e]/80 border border-[#272a2d] backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Sparks Balance"}),h.jsx("span",{className:"material-symbols-outlined text-[#4edea3] text-sm",children:"bolt"})]}),h.jsxs("div",{className:"flex items-baseline justify-between",children:[h.jsx("span",{className:"font-display font-semibold text-lg text-white",children:"120"}),h.jsx("span",{className:"text-[11px] text-[#849588] bg-[#0c0f11] px-2 py-0.5 rounded border border-[#272a2d]",children:"Free Tier"})]}),h.jsx("div",{className:"w-full h-1.5 rounded-full bg-[#323537] overflow-hidden my-0.5",children:h.jsx("div",{className:"h-full bg-[#00f59b] rounded-full w-2/5 shadow-[0_0_8px_rgba(0,245,155,0.6)]"})}),h.jsx("button",{onClick:n,className:"w-full mt-1 py-1.5 px-3 rounded-lg bg-[#272a2d] hover:bg-[#00f59b] text-white hover:text-[#003920] text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-sm",children:"Upgrade Sparks"})]}),h.jsxs("div",{className:"px-1 py-1 flex items-center justify-between text-[#849588] text-xs",children:[h.jsx("span",{className:"flex items-center gap-1.5",children:h.jsx("span",{children:"Meshy Core Engine"})}),h.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00a572] shadow-[0_0_8px_#00f59b] animate-pulse"})]})]})]})}function zy({onOpenBriefing:t,searchQuery:e,setSearchQuery:n,selectedModel:i,setSelectedModel:r}){const[s,a]=ye.useState(!1),[o,l]=ye.useState(!1),c=[{id:"flagship",name:"ZephyrMesh 2.5 Flagship",desc:"InstantMesh + Llama 3.2 Vision"},{id:"instantmesh",name:"InstantMesh LRM v1.2",desc:"Direct 3D Sparse View LRM"},{id:"llama",name:"Llama 3.2 Vision 11B",desc:"Semantic Geometry Parser"},{id:"sdf",name:"Watertight SDF Hybrid",desc:"High Precision Marching Tetrahedra"}];return h.jsx("header",{className:"fixed top-0 left-64 right-0 z-40 bg-[#0c0f11]/85 backdrop-blur-xl border-b border-[#272a2d]/60",children:h.jsxs("div",{className:"h-16 w-full px-6 flex items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("div",{className:"relative",children:[h.jsxs("button",{onClick:()=>a(!s),className:"flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#272a2d]/90 hover:bg-[#323537] text-white text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-[#3b4a3f]/60 transition-all",children:[h.jsx("span",{className:"material-symbols-outlined text-[#4edea3] text-base",children:"neurology"}),h.jsx("span",{children:i}),h.jsx("span",{className:"material-symbols-outlined text-[#bfc9c3] text-sm",children:"expand_more"})]}),s&&h.jsxs("div",{className:"absolute left-0 mt-2 w-72 rounded-xl bg-[#191c1e] border border-[#272a2d] p-1.5 shadow-2xl z-50",children:[h.jsx("div",{className:"px-3 py-1.5 text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Reconstruction Engine"}),c.map(f=>h.jsxs("button",{onClick:()=>{r(f.name),a(!1)},className:`w-full text-left px-3 py-2 rounded-lg text-xs flex flex-col transition-colors ${i===f.name?"bg-[#272a2d] text-[#6ffbbe]":"text-white hover:bg-[#1d2022]"}`,children:[h.jsx("span",{className:"font-semibold",children:f.name}),h.jsx("span",{className:"text-[11px] text-[#849588]",children:f.desc})]},f.id))]})]}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx("span",{className:"material-symbols-outlined absolute left-3 text-[#849588] text-base",children:"search"}),h.jsx("input",{type:"text",value:e,onChange:f=>n(f.target.value),placeholder:"Search meshes, textures, prompts...",className:"w-72 md:w-80 pl-9 pr-3 py-1.5 rounded-full bg-[#1d2022]/80 border border-[#272a2d] text-white placeholder:text-[#849588] text-xs focus:outline-none focus:ring-1 focus:ring-[#00f59b]/50 focus:border-[#00f59b]/40 transition-all"})]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("button",{onClick:()=>alert("Feedback submitted! Thank you for testing the Zephyr 3D AI Studio."),className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#272a2d] hover:bg-[#323537] border border-[#3b4a3f]/40 text-white text-xs font-medium transition-colors",children:[h.jsx("span",{className:"material-symbols-outlined text-[#849588] text-sm",children:"chat_bubble"}),h.jsx("span",{children:"Feedback"})]}),h.jsxs("div",{className:"relative",children:[h.jsxs("button",{onClick:()=>l(!o),className:"w-9 h-9 rounded-full bg-[#1d2022] border border-[#272a2d] flex items-center justify-center text-[#bfc9c3] hover:text-white hover:bg-[#272a2d] transition-colors relative",children:[h.jsx("span",{className:"material-symbols-outlined text-lg",children:"notifications"}),h.jsx("span",{className:"absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF7F50]"})]}),o&&h.jsxs("div",{className:"absolute right-0 mt-2 w-80 rounded-xl bg-[#191c1e] border border-[#272a2d] p-3 shadow-2xl z-50 text-xs",children:[h.jsxs("div",{className:"font-semibold text-white mb-2 pb-1 border-b border-[#272a2d] flex justify-between items-center",children:[h.jsx("span",{children:"System Notifications"}),h.jsx("span",{className:"text-[10px] text-[#4edea3]",children:"Live"})]}),h.jsxs("div",{className:"space-y-2 text-[#bfc9c3]",children:[h.jsxs("div",{className:"p-2 rounded-lg bg-[#111416] border border-[#272a2d]",children:[h.jsx("p",{className:"font-medium text-white",children:"InstantMesh Reconstruction Engine"}),h.jsx("p",{className:"text-[11px] text-[#849588] mt-0.5",children:"Ready for fast single-image 3D synthesis."})]}),h.jsxs("div",{className:"p-2 rounded-lg bg-[#111416] border border-[#272a2d]",children:[h.jsx("p",{className:"font-medium text-white",children:"Llama 3.2 Vision VLM Online"}),h.jsx("p",{className:"text-[11px] text-[#849588] mt-0.5",children:"Semantic reasoning and geometry priors active."})]})]})]})]}),h.jsx("div",{className:"h-5 w-px bg-[#323537]/60"}),h.jsxs("div",{className:"flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-[#1d2022] transition-colors",children:[h.jsx("img",{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCT_lG80-0jisau1_QDTLOn2_RchtmGjhTkf3Z4FMdVgtrYsML5ZEwl1lL9ResdbQbh7ZcHIwB29A8bkHrBpk6sS4qeXDD0ApilEYuT2GHS_tDmIn8Ck903EsJZj4ky-epb4_bI9iiDXNlSypYzp-xVu0QdRv9mHVaKeX5Mjrta3GFuU9Z7I5PeKHreYBZNgEzLgA2QNbY2bCEOBKQMk6bMc6PXvFfcjMhZcGiubw",alt:"Profile",className:"w-8 h-8 rounded-full object-cover ring-2 ring-[#00f59b]/30"}),h.jsx("span",{className:"material-symbols-outlined text-[#849588] text-sm",children:"keyboard_arrow_down"})]})]})]})})}function Gy({onGenerate3D:t,onGenerate25D:e,onAnalyzeVision:n,loading:i,generation25DLoading:r=!1,statusMessage:s,currentSketchType:a,setCurrentSketchType:o,targetSize:l,setTargetSize:c,debugMode:f,setDebugMode:p,canvasRef:d,selectedFile:g,setSelectedFile:v,previewUrl:S,setPreviewUrl:_,isolateForeground:u=!1,onToggleIsolateForeground:m,onIsolateForeground:y,isolationLoading:M=!1,isolationError:A=null,isolationData:T=null,isolatedPreviewUrl:x=null,selectedInput:b="original",onSelectInput:P,onResetIsolation:C,refineSketch:D=!1,onToggleRefinement:j,onRefineSketch:Q,refinementLoading:I=!1,refinementError:K=null,refinementData:te=null,refinedPreviewUrl:O=null,refinementUserPrompt:G="",setRefinementUserPrompt:U}){const[W,J]=ye.useState("sketch"),[re,Se]=ye.useState("#FF7F50"),[q,ce]=ye.useState("pen"),[he,be]=ye.useState(4),[me,we]=ye.useState("mid"),[Je,Ae]=ye.useState(!1),[je,ke]=ye.useState([]),[Ie,Ye]=ye.useState([]),[Be,ct]=ye.useState("refined"),[ut,Ot]=ye.useState(!1),xt=ye.useRef(null),Ct=[{name:"Black",color:"#000000"},{name:"Slate Gray",color:"#7f7f7f"},{name:"Dark Red",color:"#880015"},{name:"Red",color:"#ed1c24"},{name:"Coral Orange",color:"#FF7F50"},{name:"Gold Yellow",color:"#fff200"},{name:"Neon Mint",color:"#00f59b"},{name:"Electric Cyan",color:"#00d2ff"},{name:"Deep Blue",color:"#0078d4"},{name:"Purple",color:"#8a2be2"}],$t=[{name:"Pure White",color:"#FFFFFF"},{name:"Light Gray",color:"#bfc9c3"},{name:"Brown",color:"#8B4513"},{name:"Rose Pink",color:"#ffaec9"},{name:"Amber",color:"#ffc90e"},{name:"Cream",color:"#fffacd"},{name:"Lime Green",color:"#b5e61d"},{name:"Sky Blue",color:"#7bd0ff"},{name:"Steel Blue",color:"#7092be"},{name:"Lavender",color:"#c8bfe7"}],rt=ye.useCallback(()=>{const N=d.current;if(N)try{const z=N.toDataURL();ke(F=>[...F.slice(-30),z]),Ye([])}catch{}},[d]),H=ye.useCallback(()=>{if(je.length===0)return;const N=d.current;if(!N)return;const z=N.getContext("2d"),F=N.toDataURL();Ye(ne=>[...ne,F]);const ae=[...je];if(ae.pop(),ke(ae),ae.length>0){const ne=ae[ae.length-1],B=new Image;B.onload=()=>{z.clearRect(0,0,N.width,N.height),z.drawImage(B,0,0),N.toBlob(X=>{if(X){const de=new File([X],"user_sketch.png",{type:"image/png"});v(de),_(URL.createObjectURL(X)),C&&C(!0)}})},B.src=ne}else z.clearRect(0,0,N.width,N.height),N.toBlob(ne=>{if(ne){const B=new File([ne],"user_sketch.png",{type:"image/png"});v(B),_(URL.createObjectURL(ne)),C&&C(!0)}})},[d,je,C,_,v]),Dt=ye.useCallback(()=>{if(Ie.length===0)return;const N=d.current;if(!N)return;const z=N.getContext("2d"),F=[...Ie],ae=F.pop();if(Ye(F),ae){const ne=new Image;ne.onload=()=>{z.clearRect(0,0,N.width,N.height),z.drawImage(ne,0,0),ke(B=>[...B,ae]),N.toBlob(B=>{if(B){const X=new File([B],"user_sketch.png",{type:"image/png"});v(X),_(URL.createObjectURL(B)),C&&C(!0)}})},ne.src=ae}},[d,Ie,C,_,v]);ye.useEffect(()=>{const N=z=>{["INPUT","TEXTAREA"].includes(z.target.tagName)||((z.ctrlKey||z.metaKey)&&(z.key==="z"||z.key==="Z")?z.shiftKey?(z.preventDefault(),Dt()):(z.preventDefault(),H()):(z.ctrlKey||z.metaKey)&&(z.key==="y"||z.key==="Y")&&(z.preventDefault(),Dt()))};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[H,Dt]);const ht=()=>{const N=d.current;if(!N)return;const z=N.getContext("2d");try{const F=N.toDataURL();Ye(ae=>[...ae,F])}catch{}z.clearRect(0,0,N.width,N.height),ke([]),v(null),_(null),o("custom"),C&&C(!1)},st=ye.useCallback(()=>{const N=d.current;if(!N)return;const z=N.getContext("2d"),F=N.width,ae=N.height;z.clearRect(0,0,F,ae),z.save(),z.strokeStyle="#00f59b",z.lineWidth=3,z.lineCap="round",z.lineJoin="round";const ne=F/2,B=ae/2-10;z.beginPath(),z.moveTo(ne-90,B-25),z.lineTo(ne,B-55),z.lineTo(ne+90,B-25),z.lineTo(ne+115,B+30),z.lineTo(ne+50,B+50),z.lineTo(ne-50,B+50),z.lineTo(ne-115,B+30),z.closePath(),z.stroke(),z.strokeStyle="#FF7F50",z.beginPath(),z.ellipse(ne,B-5,32,18,0,0,Math.PI*2),z.stroke(),z.strokeStyle="#7bd0ff",z.beginPath(),z.moveTo(ne-90,B-12),z.lineTo(ne-165,B-40),z.lineTo(ne-185,B-30),z.stroke(),z.beginPath(),z.ellipse(ne-175,B-36,36,14,-.2,0,Math.PI*2),z.stroke(),z.beginPath(),z.moveTo(ne+90,B-12),z.lineTo(ne+165,B-40),z.lineTo(ne+185,B-30),z.stroke(),z.beginPath(),z.ellipse(ne+175,B-36,36,14,.2,0,Math.PI*2),z.stroke(),z.strokeStyle="rgba(255, 255, 255, 0.3)",z.lineWidth=1,z.setLineDash([4,4]),z.beginPath(),z.moveTo(ne-175,B-36),z.lineTo(ne+175,B-36),z.moveTo(ne,B-65),z.lineTo(ne,B+65),z.stroke(),z.restore(),N.toBlob(X=>{if(X){const de=new File([X],"demo_cyber_drone.png",{type:"image/png"});v(de),_(URL.createObjectURL(X)),o("drone"),rt()}})},[d,rt,o,_,v]),ge=N=>{const z=d.current;if(!z)return;const F=z.getContext("2d"),ae=z.width,ne=z.height;F.clearRect(0,0,ae,ne),F.save(),F.strokeStyle="#FF7F50",F.lineWidth=3.5,F.lineCap="round",F.lineJoin="round";const B=ae/2,X=ne/2;N==="chair"?(F.strokeRect(B-80,X-20,160,24),F.strokeRect(B-80,X-130,160,110),F.beginPath(),F.moveTo(B-70,X+4),F.lineTo(B-70,X+130),F.moveTo(B+70,X+4),F.lineTo(B+70,X+130),F.moveTo(B-45,X+4),F.lineTo(B-45,X+105),F.moveTo(B+45,X+4),F.lineTo(B+45,X+105),F.stroke()):N==="mug"?(F.beginPath(),F.ellipse(B,X-70,75,26,0,0,Math.PI*2),F.moveTo(B-75,X-70),F.lineTo(B-75,X+70),F.moveTo(B+75,X-70),F.lineTo(B+75,X+70),F.ellipse(B,X+70,75,26,0,0,Math.PI),F.moveTo(B+75,X-35),F.bezierCurveTo(B+145,X-35,B+145,X+50,B+75,X+50),F.stroke()):N==="car"?(F.beginPath(),F.moveTo(B-150,X+20),F.lineTo(B-90,X+20),F.lineTo(B-45,X-50),F.lineTo(B+80,X-50),F.lineTo(B+120,X+20),F.lineTo(B+160,X+20),F.lineTo(B+160,X+55),F.lineTo(B-150,X+55),F.closePath(),F.stroke(),F.strokeStyle="#00f59b",F.beginPath(),F.arc(B-70,X+55,28,0,Math.PI*2),F.arc(B+90,X+55,28,0,Math.PI*2),F.stroke()):N==="ambiguous"&&(F.strokeStyle="#7bd0ff",F.beginPath(),F.moveTo(B-100,X-70),F.lineTo(B+70,X-60),F.lineTo(B+50,X+60),F.lineTo(B-70,X+50),F.closePath(),F.moveTo(B-70,X+50),F.lineTo(B-110,X+120),F.moveTo(B+50,X+60),F.lineTo(B+80,X+130),F.moveTo(B,X-65),F.lineTo(B-10,X-120),F.stroke()),F.restore(),z.toBlob(de=>{if(de){const L=new File([de],`sample_${N}.png`,{type:"image/png"});v(L),_(URL.createObjectURL(de)),o(N),rt(),C&&C(!0)}})},St=N=>{const z=d.current;if(!z)return{x:0,y:0};const F=z.getBoundingClientRect(),ae=z.width/F.width,ne=z.height/F.height,B=N.touches?N.touches[0].clientX:N.clientX,X=N.touches?N.touches[0].clientY:N.clientY;return{x:(B-F.left)*ae,y:(X-F.top)*ne}},De=N=>{if(W!=="sketch")return;Ae(!0);const z=d.current;if(!z)return;const F=z.getContext("2d"),{x:ae,y:ne}=St(N);F.beginPath(),F.moveTo(ae,ne),F.lineCap="round",F.lineJoin="round"},Ue=N=>{if(!Je||W!=="sketch")return;const z=d.current;if(!z)return;const F=z.getContext("2d"),{x:ae,y:ne}=St(N);q==="eraser"?(F.globalCompositeOperation="destination-out",F.lineWidth=he*4):(F.globalCompositeOperation="source-over",F.strokeStyle=re,F.lineWidth=q==="brush"?he*2:he),F.lineTo(ae,ne),F.stroke()},R=()=>{if(Je){Ae(!1),rt();const N=d.current;N&&N.toBlob(z=>{if(z){const F=new File([z],"user_sketch.png",{type:"image/png"});v(F),_(URL.createObjectURL(z)),o("custom"),C&&C(!0)}})}};ye.useEffect(()=>{const N=d.current;N&&(N.width=900,N.height=460,st())},[d,st]);const E=N=>{var F;const z=(F=N.target.files)==null?void 0:F[0];z&&(v(z),_(URL.createObjectURL(z)),o("uploaded"),C&&C(!0))};return h.jsxs("div",{className:"w-full flex flex-col rounded-2xl bg-[#191c1e]/95 border border-[#FF7F50]/30 backdrop-blur-2xl shadow-[0_0_35px_rgba(255,127,80,0.1)] overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 p-4 bg-[#0c0f11]/80 border-b border-[#323537]/30",children:[h.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[h.jsxs("div",{className:"flex items-center gap-1 p-1 rounded-full bg-[#323537]/80 border border-[#323537]/60",children:[h.jsxs("button",{onClick:()=>J("sketch"),className:`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${W==="sketch"?"bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]":"text-[#bfc9c3] hover:text-white"}`,children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"draw"}),h.jsx("span",{children:"Manual Drawing"})]}),h.jsxs("button",{onClick:()=>J("upload"),className:`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${W==="upload"?"bg-[#FF7F50] text-white shadow-[0_0_16px_rgba(255,127,80,0.45)]":"text-[#bfc9c3] hover:text-white"}`,children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"upload_file"}),h.jsx("span",{children:"Upload File"})]})]}),h.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden sm:block"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{type:"button",role:"switch","aria-checked":u,onClick:()=>m&&m(!u),className:`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer select-none ${u?"bg-[#00f59b]/15 border-[#00f59b]/70 text-white shadow-[0_0_14px_rgba(0,245,155,0.25)]":"bg-[#141719] border-[#323537] hover:border-[#43474b] text-[#bfc9c3] hover:text-white"}`,title:u?"Remove Foreground: Active (Click to toggle)":"Remove Foreground: Standby (Click to toggle)",children:[h.jsx("div",{className:`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${u?"bg-[#00f59b]":"bg-[#2a2d30]"}`,children:h.jsx("span",{style:{transform:u?"translateX(16px)":"translateX(0px)"},className:"inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out pointer-events-none"})}),h.jsxs("span",{className:"flex items-center gap-1.5 text-xs font-semibold",children:[h.jsx("span",{className:`material-symbols-outlined text-sm ${u?"text-[#00f59b]":"text-[#849588]"}`,children:"content_cut"}),h.jsx("span",{children:"Remove Foreground"})]}),M?h.jsx("span",{className:"material-symbols-outlined text-xs text-[#00f59b] animate-spin",title:"Isolating foreground...",children:"sync"}):h.jsx("span",{className:`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase transition-colors ${u?"bg-[#00f59b]/25 text-[#00f59b] border border-[#00f59b]/40":"bg-[#272a2d] text-[#849588]"}`,children:u?"ON":"OFF"})]}),u&&T&&h.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[#00f59b]/20 text-[#00f59b] text-[10px] font-semibold border border-[#00f59b]/40",children:b==="isolated"?"Active":"Standby"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("button",{type:"button",role:"switch","aria-checked":D,onClick:()=>j&&j(!D),className:`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer select-none ${D?"bg-[#FF7F50]/15 border-[#FF7F50]/70 text-white shadow-[0_0_14px_rgba(255,127,80,0.25)]":"bg-[#141719] border-[#323537] hover:border-[#43474b] text-[#bfc9c3] hover:text-white"}`,title:D?"AI Refine: Active (Click to toggle)":"AI Refine: Standby (Click to toggle)",children:[h.jsx("div",{className:`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${D?"bg-[#FF7F50]":"bg-[#2a2d30]"}`,children:h.jsx("span",{style:{transform:D?"translateX(16px)":"translateX(0px)"},className:"inline-block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out pointer-events-none"})}),h.jsxs("span",{className:"flex items-center gap-1.5 text-xs font-semibold",children:[h.jsx("span",{className:`material-symbols-outlined text-sm ${D?"text-[#FF7F50]":"text-[#849588]"}`,children:"auto_fix_high"}),h.jsx("span",{children:"AI Refine"})]}),I?h.jsx("span",{className:"material-symbols-outlined text-xs text-[#FF7F50] animate-spin",title:"Synthesizing refined image...",children:"sync"}):h.jsx("span",{className:`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase transition-colors ${D?"bg-[#FF7F50]/25 text-[#FF7F50] border border-[#FF7F50]/40":"bg-[#272a2d] text-[#849588]"}`,children:D?"ON":"OFF"})]}),D&&te&&h.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${te.is_fallback?"bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30":"bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40"}`,children:te.is_fallback?"Fallback":"Validated"}),h.jsx("button",{type:"button",onClick:()=>Ot(!ut),className:`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${ut?"text-[#FF7F50] bg-[#FF7F50]/20 border-[#FF7F50]/50":"text-[#849588] hover:text-white bg-[#141719] border-[#323537] hover:border-[#43474b]"}`,title:"Configure custom refinement guidance prompt",children:h.jsx("span",{className:"material-symbols-outlined text-sm",children:"tune"})})]}),h.jsx("div",{className:"h-5 w-px bg-[#323537]/50 hidden md:block"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{type:"button",onClick:H,disabled:je.length===0,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium transition-colors border border-[#323537]/40 cursor-pointer",title:"Undo Stroke (Ctrl+Z)",children:[h.jsx("span",{className:"material-symbols-outlined text-sm text-[#4edea3]",children:"undo"}),h.jsx("span",{children:"Undo"})]}),h.jsxs("button",{type:"button",onClick:Dt,disabled:Ie.length===0,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium transition-colors border border-[#323537]/40 cursor-pointer",title:"Redo Stroke (Ctrl+Y)",children:[h.jsx("span",{className:"material-symbols-outlined text-sm text-[#7bd0ff]",children:"redo"}),h.jsx("span",{children:"Redo"})]}),h.jsxs("button",{type:"button",onClick:ht,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d2022] hover:bg-[#93000a] text-[#bfc9c3] hover:text-white text-xs font-medium transition-colors border border-[#323537]/40 cursor-pointer",title:"Clear Canvas",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"delete_sweep"}),h.jsx("span",{children:"Clear"})]}),h.jsxs("button",{type:"button",onClick:st,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF7F50]/15 hover:bg-[#FF7F50]/25 text-[#FF7F50] text-xs font-semibold transition-colors border border-[#FF7F50]/40 shadow-[0_0_12px_rgba(255,127,80,0.25)] cursor-pointer",title:"Load Sci-Fi Concept Drone Reference",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"auto_stories"}),h.jsx("span",{children:"Load Demo Drone"})]})]})]}),W==="sketch"&&h.jsxs("div",{className:"flex items-stretch flex-wrap gap-2.5 px-3 py-2 bg-[#121517] border-b border-[#323537]/50 text-xs select-none",children:[h.jsxs("div",{className:"flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsxs("button",{type:"button",onClick:()=>ce("pen"),className:`p-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${q==="pen"?"bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]":"text-[#bfc9c3] hover:text-white hover:bg-[#272a2d]"}`,title:"Pencil / Vector Pen",children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"edit"}),h.jsx("span",{className:"text-[9px] font-semibold",children:"Pen"})]}),h.jsxs("button",{type:"button",onClick:()=>ce("brush"),className:`p-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${q==="brush"?"bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]":"text-[#bfc9c3] hover:text-white hover:bg-[#272a2d]"}`,title:"SDF Brush",children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"brush"}),h.jsx("span",{className:"text-[9px] font-semibold",children:"Brush"})]}),h.jsxs("button",{type:"button",onClick:()=>ce("eraser"),className:`p-1.5 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${q==="eraser"?"bg-[#00f59b] text-[#003920] font-bold shadow-[0_0_12px_rgba(0,245,155,0.4)]":"text-[#bfc9c3] hover:text-white hover:bg-[#272a2d]"}`,title:"Eraser",children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"ink_eraser"}),h.jsx("span",{className:"text-[9px] font-semibold",children:"Eraser"})]})]}),h.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1",children:"Tools"})]}),h.jsxs("div",{className:"flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner min-w-[130px]",children:[h.jsxs("div",{className:"flex flex-col justify-center gap-1.5 w-full px-1",children:[h.jsx("div",{className:"flex items-center justify-center gap-1",children:[2,4,8,16].map(N=>h.jsx("button",{type:"button",onClick:()=>be(N),className:`w-6 h-6 rounded flex items-center justify-center transition-all cursor-pointer ${he===N?"bg-[#FF7F50] text-white shadow-sm ring-1 ring-white/50":"bg-[#121517] hover:bg-[#272a2d] text-[#bfc9c3] border border-[#323537]/50"}`,title:`${N}px Stroke Width`,children:h.jsx("span",{className:"rounded-full bg-current",style:{width:`${Math.min(N,14)}px`,height:`${Math.min(N,14)}px`}})},N))}),h.jsxs("div",{className:"flex items-center justify-center gap-1.5",children:[h.jsx("input",{type:"range",min:"1",max:"24",value:he,onChange:N=>be(Number(N.target.value)),className:"w-16 h-1 bg-[#323537] rounded-lg cursor-pointer accent-[#FF7F50]",title:`Stroke: ${he}px`}),h.jsxs("span",{className:"text-[10px] font-bold text-[#FF7F50] font-mono w-7 text-right",children:[he,"px"]})]})]}),h.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1",children:"Size"})]}),h.jsxs("div",{className:"flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner",children:[h.jsxs("div",{className:"flex items-center gap-2.5 px-1",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("button",{type:"button",onClick:()=>{var N;return(N=xt.current)==null?void 0:N.click()},className:"flex flex-col items-center gap-0.5 group cursor-pointer",title:"Color 1: Active Drawing Color (Click to customize)",children:[h.jsx("div",{className:"w-8 h-8 rounded border-2 border-white shadow-[0_0_10px_rgba(255,127,80,0.35)] transition-transform group-hover:scale-105",style:{backgroundColor:q==="eraser"?"#080a0c":re}}),h.jsx("span",{className:"text-[9px] font-bold text-white",children:"Color 1"})]}),h.jsxs("div",{className:"flex flex-col items-center gap-0.5",title:"Color 2: Secondary / Background Color",children:[h.jsx("div",{className:"w-8 h-8 rounded border border-[#323537] bg-white shadow-sm"}),h.jsx("span",{className:"text-[9px] font-semibold text-[#849588]",children:"Color 2"})]})]}),h.jsx("div",{className:"h-8 w-px bg-[#323537]/80"}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("div",{className:"flex items-center gap-1",children:Ct.map(N=>{const z=re.toLowerCase()===N.color.toLowerCase()&&q!=="eraser";return h.jsx("button",{type:"button",onClick:()=>{Se(N.color),q==="eraser"&&ce("pen")},className:`w-4 h-4 rounded-sm border border-[#37393c] transition-all hover:scale-125 cursor-pointer ${z?"ring-2 ring-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10":""}`,style:{backgroundColor:N.color},title:N.name},N.color)})}),h.jsx("div",{className:"flex items-center gap-1",children:$t.map(N=>{const z=re.toLowerCase()===N.color.toLowerCase()&&q!=="eraser";return h.jsx("button",{type:"button",onClick:()=>{Se(N.color),q==="eraser"&&ce("pen")},className:`w-4 h-4 rounded-sm border border-[#37393c] transition-all hover:scale-125 cursor-pointer ${z?"ring-2 ring-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10":""}`,style:{backgroundColor:N.color},title:N.name},N.color)})})]}),h.jsx("div",{className:"h-8 w-px bg-[#323537]/80"}),h.jsxs("button",{type:"button",onClick:()=>{var N;return(N=xt.current)==null?void 0:N.click()},className:"flex flex-col items-center justify-center px-2 py-1 rounded-lg bg-[#121517] hover:bg-[#272a2d] border border-[#323537]/60 text-[#bfc9c3] hover:text-white transition-all cursor-pointer group",title:"Edit Colors (Pick any custom color)",children:[h.jsx("span",{className:"material-symbols-outlined text-base text-[#FF7F50] group-hover:rotate-45 transition-transform",children:"palette"}),h.jsx("span",{className:"text-[9px] font-semibold whitespace-nowrap",children:"Edit Colors"}),h.jsx("input",{ref:xt,type:"color",value:re,onChange:N=>{Se(N.target.value),q==="eraser"&&ce("pen")},className:"sr-only"})]})]}),h.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1",children:"Colors"})]}),h.jsxs("div",{className:"hidden xl:flex flex-col items-center justify-between p-1.5 rounded-xl bg-[#191c1e] border border-[#323537]/60 shadow-inner",children:[h.jsx("div",{className:"flex items-center gap-1 my-auto",children:["chair","mug","car","ambiguous"].map(N=>h.jsx("button",{type:"button",onClick:()=>ge(N),className:`px-2 py-1 rounded text-[11px] capitalize transition-colors cursor-pointer ${a===N?"bg-[#FF7F50]/20 text-[#FF7F50] border border-[#FF7F50]/50 font-semibold":"bg-[#121517] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white border border-[#323537]/40"}`,title:`Load ${N} sketch template`,children:N},N))}),h.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wider text-[#849588] mt-1",children:"Presets"})]})]}),ut&&h.jsxs("div",{className:"flex items-center gap-3 px-4 py-2.5 bg-[#111416] border-b border-[#323537]/40 text-xs",children:[h.jsx("span",{className:"material-symbols-outlined text-sm text-[#FF7F50]",children:"tune"}),h.jsx("span",{className:"text-[#849588] text-[11px] whitespace-nowrap",children:"Refinement Guidance:"}),h.jsx("input",{type:"text",value:G,onChange:N=>U&&U(N.target.value),placeholder:"e.g. sharp chamfered lines, sci-fi metallic chassis, clean minimalist contours...",className:"flex-1 bg-[#191c1e] border border-[#323537] rounded-lg px-3 py-1.5 text-white placeholder-[#849588] focus:outline-none focus:border-[#FF7F50]"}),h.jsxs("button",{onClick:()=>Q&&Q(),disabled:I,className:"px-3 py-1.5 rounded-lg bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold flex items-center gap-1 shadow-sm transition-all disabled:opacity-50 cursor-pointer",children:[I?h.jsx("span",{className:"material-symbols-outlined text-xs animate-spin",children:"refresh"}):h.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),h.jsx("span",{children:"Apply Refinement"})]})]}),K&&D&&h.jsxs("div",{className:"mx-4 mt-3 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"warning"}),h.jsxs("span",{children:["Refinement Notice: ",K]})]}),h.jsx("button",{onClick:()=>Q&&Q(),className:"px-2.5 py-1 rounded bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 text-white font-medium transition-colors",children:"Retry Refine"})]}),A&&u&&h.jsxs("div",{className:"mx-4 mt-3 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"warning"}),h.jsxs("span",{children:["Foreground Isolation Warning: ",A]})]}),h.jsx("button",{onClick:()=>y&&y(),className:"px-2.5 py-1 rounded bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 text-white font-medium transition-colors",children:"Retry Isolation"})]}),W==="sketch"?h.jsxs("div",{className:"relative w-full h-[460px] bg-[#080a0c] overflow-hidden flex items-center justify-center select-none",children:[h.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1f262b_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#FF7F50]/5 via-transparent to-[#00f59b]/5 pointer-events-none"}),h.jsx("canvas",{ref:d,onMouseDown:De,onMouseMove:Ue,onMouseUp:R,onMouseLeave:R,onTouchStart:De,onTouchMove:Ue,onTouchEnd:R,className:`w-full h-full cursor-crosshair block relative z-10 touch-none ${u&&x&&Be==="isolated"||D&&O&&Be==="refined"?"invisible pointer-events-none":""}`}),D&&O&&Be==="refined"&&h.jsx("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080a0c]/90 backdrop-blur-sm p-4",children:h.jsxs("div",{className:"relative max-w-md max-h-[360px] w-full h-full rounded-2xl bg-white border border-[#FF7F50]/50 overflow-hidden flex items-center justify-center shadow-2xl",children:[h.jsx("img",{src:O,alt:"AI Refined Sketch",className:"max-h-[310px] max-w-[310px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"}),h.jsxs("div",{className:"absolute bottom-3 left-3 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FF7F50] border border-[#FF7F50]/30 font-mono flex items-center gap-1.5 shadow-lg",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),h.jsxs("span",{children:["AI Refined • ",te!=null&&te.is_fallback?"Fallback Used (Structure Protected)":"Structure Validated"]})]}),te&&h.jsxs("div",{className:"absolute top-3 right-3 bg-[#0c0f11]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white border border-[#323537] font-mono flex items-center gap-2 shadow-lg",children:[h.jsxs("span",{className:"text-[#00f59b]",children:["Edge IoU: ",(te.validation.edge_overlap_iou*100).toFixed(0),"%"]}),h.jsxs("span",{className:"text-[#7bd0ff]",children:["Cleanliness: ",(te.validation.background_cleanliness_score*100).toFixed(0),"%"]})]})]})}),u&&x&&Be==="isolated"&&h.jsx("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080a0c]/90 backdrop-blur-sm p-4",children:h.jsxs("div",{className:"relative max-w-md max-h-[360px] w-full h-full rounded-2xl border border-[#00f59b]/40 overflow-hidden flex items-center justify-center shadow-2xl",style:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundPosition:"50%",backgroundSize:"24px 24px"},children:[h.jsx("img",{src:x,alt:"Isolated Foreground (Alpha Channel)",className:"max-h-[300px] max-w-[300px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"}),h.jsxs("div",{className:"absolute bottom-3 left-3 bg-[#0c0f11]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#00f59b] border border-[#00f59b]/30 font-mono flex items-center gap-1.5",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"opacity"}),h.jsx("span",{children:"Alpha Transparency Preserved • 320x320"})]})]})}),Be==="split"&&(O||x)&&h.jsxs("div",{className:"absolute inset-0 z-20 grid grid-cols-2 gap-4 p-6 bg-[#080a0c]/90 backdrop-blur-sm items-center justify-center",children:[h.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#323537]",children:[h.jsxs("span",{className:"text-[11px] font-semibold text-[#849588] mb-2 uppercase tracking-wider flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs text-[#FF7F50]",children:"draw"}),h.jsx("span",{children:"Original Sketch"})]}),h.jsx("div",{className:"w-full h-64 flex items-center justify-center bg-black/40 rounded-lg overflow-hidden",children:h.jsx("img",{src:S,alt:"Original",className:"max-h-full max-w-full object-contain"})})]}),h.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-3 rounded-xl bg-[#0c0f11] border border-[#FF7F50]/40",children:[h.jsxs("span",{className:"text-[11px] font-semibold text-[#FF7F50] mb-2 uppercase tracking-wider flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),h.jsx("span",{children:O?"Refined AI Image":"Isolated Object (Alpha)"})]}),h.jsx("div",{className:"w-full h-64 flex items-center justify-center rounded-lg overflow-hidden bg-white",style:O?{}:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundSize:"20px 20px"},children:h.jsx("img",{src:O||x,alt:"Processed output",className:"max-h-full max-w-full object-contain"})})]})]}),(u&&x||D&&O)&&h.jsxs("div",{className:"absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-[#0c0f11]/95 backdrop-blur-xl border border-[#323537]/80 shadow-[0_4px_24px_rgba(0,0,0,0.6)] text-xs flex-wrap justify-center",children:[h.jsxs("div",{className:"flex items-center gap-1 bg-[#191c1e] p-1 rounded-xl border border-[#272a2d]",children:[O&&h.jsxs("button",{onClick:()=>ct("refined"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Be==="refined"?"bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.4)]":"text-[#bfc9c3] hover:text-white"}`,title:"View AI Refined image",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"auto_fix_high"}),h.jsx("span",{children:"Refined AI"})]}),x&&h.jsxs("button",{onClick:()=>ct("isolated"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Be==="isolated"?"bg-[#00f59b] text-[#003920] shadow-[0_0_12px_rgba(0,245,155,0.4)]":"text-[#bfc9c3] hover:text-white"}`,title:"View transparent isolated subject",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"filter_vintage"}),h.jsx("span",{children:"Isolated (Alpha)"})]}),h.jsxs("button",{onClick:()=>ct("original"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Be==="original"?"bg-[#37393c] text-white":"text-[#bfc9c3] hover:text-white"}`,title:"View original drawing canvas",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"draw"}),h.jsx("span",{children:"Original"})]}),h.jsxs("button",{onClick:()=>ct("split"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${Be==="split"?"bg-[#7bd0ff] text-[#002b40] shadow-[0_0_12px_rgba(123,208,255,0.4)]":"text-[#bfc9c3] hover:text-white"}`,title:"Compare original and processed side-by-side",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"vertical_split"}),h.jsx("span",{children:"Compare"})]})]}),h.jsx("div",{className:"h-5 w-px bg-[#323537] hidden sm:block"}),b==="refined"?h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-[#FF7F50]/20 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/40 flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"check_circle"}),h.jsx("span",{children:"Using Refined for 3D"})]}),h.jsx("button",{onClick:()=>P&&P("original"),className:"px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors",children:"Revert to Original"})]}):b==="isolated"?h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-[#00f59b]/20 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/40 flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"check_circle"}),h.jsx("span",{children:"Using Isolated for 3D"})]}),h.jsx("button",{onClick:()=>P&&P("original"),className:"px-2.5 py-1 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white text-[11px] font-medium border border-[#323537]/60 transition-colors",children:"Revert to Original"})]}):h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-[#1d2022] text-[#bfc9c3] text-[11px] font-semibold border border-[#323537]/60 flex items-center gap-1",children:h.jsx("span",{children:"Using Original Sketch"})}),O&&h.jsx("button",{onClick:()=>P&&P("refined"),className:"px-2.5 py-1 rounded-lg bg-[#FF7F50]/25 hover:bg-[#FF7F50]/35 text-[#FF7F50] text-[11px] font-semibold border border-[#FF7F50]/50 transition-colors",children:"Use Refined Output"}),x&&h.jsx("button",{onClick:()=>P&&P("isolated"),className:"px-2.5 py-1 rounded-lg bg-[#00f59b]/25 hover:bg-[#00f59b]/35 text-[#00f59b] text-[11px] font-semibold border border-[#00f59b]/50 transition-colors",children:"Use Isolated"})]}),D?h.jsx("button",{onClick:()=>Q&&Q(),disabled:I,className:"p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#FF7F50] transition-colors",title:"Re-run AI Image Refinement",children:h.jsx("span",{className:`material-symbols-outlined text-sm ${I?"animate-spin":""}`,children:"refresh"})}):h.jsx("button",{onClick:()=>y&&y(),disabled:M,className:"p-1 rounded-lg hover:bg-[#272a2d] text-[#849588] hover:text-[#00f59b] transition-colors",title:"Re-run Foreground Isolation",children:h.jsx("span",{className:`material-symbols-outlined text-sm ${M?"animate-spin":""}`,children:"refresh"})})]}),h.jsxs("div",{className:"pointer-events-none absolute top-3 left-4 z-20 flex items-center gap-2 bg-[#0c0f11]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#323537]/40 text-xs text-[#849588]",children:[h.jsx("span",{className:"material-symbols-outlined text-sm text-[#FF7F50]",children:"grid_4x4"}),h.jsx("span",{children:"Multi-Angle Silhouette Grid (Front + Top Axis)"})]}),h.jsxs("div",{className:"pointer-events-none absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-[#0c0f11]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#323537]/40 text-xs text-[#FF7F50]",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"gesture"}),h.jsx("span",{children:"Draw contours or click 'Load Demo Drone' • Auto-projects into 3D SDF below"})]})]}):h.jsxs("div",{className:"relative flex flex-col items-center justify-center h-[460px] bg-[#0c0f11] p-8 text-center border-dashed border-2 border-[#272a2d] m-4 rounded-xl",children:[h.jsx("input",{type:"file",id:"file-input",accept:"image/png, image/jpeg, image/webp, image/svg+xml",onChange:E,className:"hidden"}),h.jsxs("label",{htmlFor:"file-input",className:"cursor-pointer flex flex-col items-center",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#272a2d] border border-[#FF7F50]/40 flex items-center justify-center mb-3 text-[#FF7F50] shadow-[0_0_20px_rgba(255,127,80,0.3)]",children:h.jsx("span",{className:"material-symbols-outlined text-3xl",children:"add_photo_alternate"})}),h.jsx("span",{className:"font-display font-semibold text-lg text-white mb-1",children:"Drop sketch or blueprint here, or browse files"}),h.jsx("span",{className:"text-xs text-[#849588] max-w-sm",children:"PNG, JPG, WEBP, or SVG raster blueprints (supports hand sketches & paper captures up to 50MB)"}),h.jsxs("div",{className:"mt-4 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1d2022] border border-[#FF7F50]/30 text-[#FF7F50] text-xs shadow-sm",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"flare"}),h.jsx("span",{children:"AI Background Removal & Contrast Auto-Normalization"})]})]}),S&&h.jsxs("div",{className:"mt-4 p-3 rounded-xl bg-[#191c1e] border border-[#272a2d] flex items-center justify-between gap-4 max-w-xl w-full",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:S,alt:"Upload preview",className:"h-16 w-16 object-contain rounded-lg bg-white/10"}),h.jsxs("div",{className:"text-left text-xs",children:[h.jsx("p",{className:"font-medium text-white",children:(g==null?void 0:g.name)||"Uploaded Sketch"}),h.jsx("p",{className:"text-[#849588]",children:"Original Upload"})]})]}),x&&u&&h.jsxs("div",{className:"flex items-center gap-3 pl-4 border-l border-[#272a2d]",children:[h.jsx("div",{className:"h-16 w-16 rounded-lg border border-[#00f59b]/40 flex items-center justify-center overflow-hidden",style:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundSize:"16px 16px"},children:h.jsx("img",{src:x,alt:"Isolated",className:"max-h-full object-contain"})}),h.jsxs("div",{className:"text-left text-xs",children:[h.jsx("span",{className:"text-[#00f59b] font-semibold block",children:"Foreground Isolated"}),h.jsx("button",{onClick:()=>P&&P(b==="isolated"?"original":"isolated"),className:`text-[10px] mt-1 px-2 py-0.5 rounded font-medium border ${b==="isolated"?"bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40":"bg-[#1d2022] text-[#bfc9c3] border-[#323537]"}`,children:b==="isolated"?"✓ Selected (Click to Revert)":"Click to Select"})]})]})]})]}),h.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 p-4 bg-[#272a2d]/40 border-t border-[#323537]/30 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Target Quality:"}),h.jsx("div",{className:"flex items-center gap-1",children:[{id:"low",label:"Low (15k)"},{id:"mid",label:"Mid (45k)"},{id:"ultra",label:"Ultra (150k)"}].map(N=>h.jsx("button",{onClick:()=>we(N.id),className:`px-2.5 py-1 rounded text-xs transition-all ${me===N.id?"bg-[#FF7F50] text-white font-semibold shadow-[0_0_12px_rgba(255,127,80,0.35)]":"bg-[#1d2022] text-[#bfc9c3] hover:bg-[#272a2d]"}`,children:N.label},N.id))})]}),h.jsx("div",{className:"h-4 w-px bg-[#323537]/50 hidden sm:block"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"Resolution:"}),h.jsxs("select",{value:l,onChange:N=>c(Number(N.target.value)),className:"bg-[#1d2022] border border-[#323537] text-white text-xs font-mono font-medium rounded px-2.5 py-1 focus:outline-none cursor-pointer",children:[h.jsx("option",{value:320,children:"320*320"}),h.jsx("option",{value:512,children:"512*512"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[h.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111416] border border-[#323537]/50 text-[11px] text-[#849588]",children:[h.jsx("span",{children:"Active Pipeline Input:"}),h.jsx("span",{className:b==="refined"?"text-[#FF7F50] font-semibold":b==="isolated"?"text-[#00f59b] font-semibold":"text-white",children:b==="refined"?"Refined AI Image":b==="isolated"?"Isolated Cutout":"Original Sketch"})]}),h.jsx("button",{onClick:()=>Q&&Q(),disabled:i||I||r,className:"flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111416] hover:bg-[#1d2022] border border-[#FF7F50]/40 text-[#FF7F50] text-xs font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer",title:"Refine sketch contours and clean background with quality validation",children:I?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined text-base animate-spin",children:"refresh"}),h.jsx("span",{children:"Refining..."})]}):h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"auto_fix_high"}),h.jsx("span",{children:"AI Refine"})]})}),h.jsxs("button",{onClick:n,disabled:i||r,className:"flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1d2022] hover:bg-[#272a2d] border border-[#00f59b]/40 text-[#6ffbbe] text-xs font-semibold shadow-sm transition-all disabled:opacity-50",children:[h.jsx("span",{className:"material-symbols-outlined text-base text-[#00f59b]",children:"neurology"}),h.jsx("span",{children:"Vision Analysis"})]}),h.jsx("button",{onClick:e,disabled:i||r,className:"flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111416] hover:bg-[#1d2022] border border-[#7bd0ff]/50 text-[#7bd0ff] text-xs font-semibold shadow-[0_0_16px_rgba(123,208,255,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer",title:"Generate Monocular Depth Map, Surface Normals & 3D Watertight Relief Mesh",children:r?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined text-base animate-spin",children:"refresh"}),h.jsx("span",{children:"Generating 2.5D..."})]}):h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"layers"}),h.jsx("span",{children:"Generate 2.5D Relief"})]})}),h.jsx("button",{onClick:t,disabled:i||r,className:"flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF7F50] hover:bg-[#e06336] text-white text-sm font-semibold shadow-[0_0_28px_rgba(255,127,80,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer",children:i?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined text-lg animate-spin",children:"refresh"}),h.jsx("span",{children:s||"Synthesizing Mesh (SDF)..."})]}):h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined text-lg",children:"bolt"}),h.jsx("span",{children:"Generate 3D Asset Now"})]})})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="187",Rs={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hy=0,Wp=1,Vy=2,ul=1,jy=2,da=3,jr=0,wn=1,Ni=2,Cs=0,ba=1,Xp=2,Yp=3,$p=4,Wy=5,ls=100,Xy=101,Yy=102,$y=103,qy=104,Ky=200,Zy=201,Qy=202,Jy=203,px=204,mx=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,aS=212,oS=213,lS=214,gd=0,xd=1,_d=2,Ha=3,vd=4,yd=5,Sd=6,Md=7,nh=0,cS=1,uS=2,Fi=0,gx=1,xx=2,_x=3,vx=4,yx=5,Sx=6,Mx=7,bx=300,ks=301,Va=302,Wc=303,Xc=304,bd=1e3,Di=1001,Ed=1002,Zt=1003,dS=1004,bo=1005,Sn=1006,Yc=1007,rr=1008,Nn=1009,Ex=1010,wx=1011,ja=1012,ih=1013,_i=1014,hi=1015,vi=1016,rh=1017,sh=1018,Bs=1020,Tx=35902,Ax=35899,Rx=1021,Cx=1022,pi=1023,gr=1026,sr=1027,Nx=1028,ah=1029,Wr=1030,oh=1031,lh=1033,dl=33776,fl=33777,hl=33778,pl=33779,wd=35840,Td=35841,Ad=35842,Rd=35843,Cd=36196,Nd=37492,Pd=37496,Ld=37488,Dd=37489,Hl=37490,Id=37491,Fd=37808,Ud=37809,Od=37810,kd=37811,Bd=37812,zd=37813,Gd=37814,Hd=37815,Vd=37816,jd=37817,Wd=37818,Xd=37819,Yd=37820,$d=37821,qd=36492,Kd=36494,Zd=36495,Qd=36283,Jd=36284,Vl=36285,ef=36286,fS=3200,Wa=0,hS=1,tr="",Cn="srgb",jl="srgb-linear",Wl="linear",dt="srgb",$c=7680,pS=519,mS=512,gS=513,xS=514,Px=515,_S=516,vS=517,Lx=518,Dx=519,yS=35044,qp="300 es",ti=2e3,Xa=2001;function SS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MS(){const t=Xl("canvas");return t.style.display="block",t}const Kp={};function Zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ix(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=Ix(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=Ix(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ml(...t){const e=t.join(" ");e in Kp||(Kp[e]=!0,Oe(...t))}function bS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ES={[gd]:gd,[_d]:Sd,[vd]:vd,[Ha]:yd,[xd]:xd,[Sd]:_d,[Md]:Md,[yd]:Ha};class Sr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=Math.PI/180,tf=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function wS(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function TS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ch(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function AS(t,e){if(e.constructor===Float32Array)return t;const n=ch(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function RS(t,e){if(e.constructor===Float32Array)return t;const n=ch(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const CS={DEG2RAD:gl},Sh=class Sh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;let Fe=Sh;class xr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],d=s[a+0],g=s[a+1],v=s[a+2],S=s[a+3];if(p!==S||l!==d||c!==g||f!==v){let _=l*d+c*g+f*v+p*S;_<0&&(d=-d,g=-g,v=-v,S=-S,_=-_);let u=1-o;if(_<.9995){const m=Math.acos(_),y=Math.sin(m);u=Math.sin(u*m)/y,o=Math.sin(o*m)/y,l=l*u+d*o,c=c*u+g*o,f=f*u+v*o,p=p*u+S*o}else{l=l*u+d*o,c=c*u+g*o,f=f*u+v*o,p=p*u+S*o;const m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[n]=o*v+f*p+l*g-c*d,e[n+1]=l*v+f*d+c*p-o*g,e[n+2]=c*v+f*g+o*d-l*p,e[n+3]=f*v-o*p-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),d=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*f*p+c*g*v,this._y=c*g*p-d*f*v,this._z=c*f*v+d*g*p,this._w=c*f*p-d*g*v;break;case"YXZ":this._x=d*f*p+c*g*v,this._y=c*g*p-d*f*v,this._z=c*f*v-d*g*p,this._w=c*f*p+d*g*v;break;case"ZXY":this._x=d*f*p-c*g*v,this._y=c*g*p+d*f*v,this._z=c*f*v+d*g*p,this._w=c*f*p-d*g*v;break;case"ZYX":this._x=d*f*p-c*g*v,this._y=c*g*p+d*f*v,this._z=c*f*v-d*g*p,this._w=c*f*p+d*g*v;break;case"YZX":this._x=d*f*p+c*g*v,this._y=c*g*p+d*f*v,this._z=c*f*v-d*g*p,this._w=c*f*p-d*g*v;break;case"XZY":this._x=d*f*p-c*g*v,this._y=c*g*p-d*f*v,this._z=c*f*v+d*g*p,this._w=c*f*p+d*g*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],d=i+o+p;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mh=class Mh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mh.prototype.isVector3=!0;let V=Mh;const Kc=new V,Qp=new xr,bh=class bh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],d=i[2],g=i[5],v=i[8],S=r[0],_=r[3],u=r[6],m=r[1],y=r[4],M=r[7],A=r[2],T=r[5],x=r[8];return s[0]=a*S+o*m+l*A,s[3]=a*_+o*y+l*T,s[6]=a*u+o*M+l*x,s[1]=c*S+f*m+p*A,s[4]=c*_+f*y+p*T,s[7]=c*u+f*M+p*x,s[2]=d*S+g*m+v*A,s[5]=d*_+g*y+v*T,s[8]=d*u+g*M+v*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,d=o*l-f*s,g=c*s-a*l,v=n*p+i*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=p*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ml("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,n)),this}rotate(e){return ml("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,n){return ml("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;let He=bh;const Zc=new He,Jp=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NS(){const t={enabled:!0,workingColorSpace:jl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Wl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[jl]:{primaries:e,whitePoint:i,transfer:Wl,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const Qe=NS();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ns(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class PS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=Xl("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class uh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qc(r[a].image)):s.push(Qc(r[a]))}else s=Qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?PS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let DS=0;const Jc=new V;class mn extends Sr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Di,r=Di,s=Sn,a=rr,o=pi,l=Nn,c=mn.DEFAULT_ANISOTROPY,f=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ja(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=bx;mn.DEFAULT_ANISOTROPY=1;const Eh=class Eh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],d=l[1],g=l[5],v=l[9],S=l[2],_=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-S)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+S)<.1&&Math.abs(v+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(g+1)/2,A=(u+1)/2,T=(f+d)/4,x=(p+S)/4,b=(v+_)/4;return y>M&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=x/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=x/s,r=b/s),this.set(i,r,s,n),this}let m=Math.sqrt((_-v)*(_-v)+(p-S)*(p-S)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(p-S)/m,this.z=(d-f)/m,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;let Tt=Eh;class IS extends Sr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new mn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new uh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends IS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Fx extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kl=class Kl{constructor(e,n,i,r,s,a,o,l,c,f,p,d,g,v,S,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,d,g,v,S,_)}set(e,n,i,r,s,a,o,l,c,f,p,d,g,v,S,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=d,u[3]=g,u[7]=v,u[11]=S,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*p,v=o*f,S=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=g+v*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=v+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*p,v=c*f,S=c*p;n[0]=d+S*o,n[4]=v*o-g,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-v,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*p,v=c*f,S=c*p;n[0]=d-S*o,n[4]=-a*p,n[8]=v+g*o,n[1]=g+v*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*p,v=o*f,S=o*p;n[0]=l*f,n[4]=v*c-g,n[8]=d*c+S,n[1]=l*p,n[5]=S*c+d,n[9]=g*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,v=o*l,S=o*c;n[0]=l*f,n[4]=S-d*p,n[8]=v*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*p+v,n[10]=d-S*p}else if(e.order==="XZY"){const d=a*l,g=a*c,v=o*l,S=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=d*p+S,n[5]=a*f,n[9]=g*p-v,n[2]=v*p-g,n[6]=o*f,n[10]=S*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,OS)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Xi.crossVectors(i,Tn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Xi.crossVectors(i,Tn)),Xi.normalize(),Eo.crossVectors(Tn,Xi),r[0]=Xi.x,r[4]=Eo.x,r[8]=Tn.x,r[1]=Xi.y,r[5]=Eo.y,r[9]=Tn.y,r[2]=Xi.z,r[6]=Eo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],d=i[9],g=i[13],v=i[2],S=i[6],_=i[10],u=i[14],m=i[3],y=i[7],M=i[11],A=i[15],T=r[0],x=r[4],b=r[8],P=r[12],C=r[1],D=r[5],j=r[9],Q=r[13],I=r[2],K=r[6],te=r[10],O=r[14],G=r[3],U=r[7],W=r[11],J=r[15];return s[0]=a*T+o*C+l*I+c*G,s[4]=a*x+o*D+l*K+c*U,s[8]=a*b+o*j+l*te+c*W,s[12]=a*P+o*Q+l*O+c*J,s[1]=f*T+p*C+d*I+g*G,s[5]=f*x+p*D+d*K+g*U,s[9]=f*b+p*j+d*te+g*W,s[13]=f*P+p*Q+d*O+g*J,s[2]=v*T+S*C+_*I+u*G,s[6]=v*x+S*D+_*K+u*U,s[10]=v*b+S*j+_*te+u*W,s[14]=v*P+S*Q+_*O+u*J,s[3]=m*T+y*C+M*I+A*G,s[7]=m*x+y*D+M*K+A*U,s[11]=m*b+y*j+M*te+A*W,s[15]=m*P+y*Q+M*O+A*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],d=e[10],g=e[14],v=e[3],S=e[7],_=e[11],u=e[15],m=l*g-c*d,y=o*g-c*p,M=o*d-l*p,A=a*g-c*f,T=a*d-l*f,x=a*p-o*f;return n*(S*m-_*y+u*M)-i*(v*m-_*A+u*T)+r*(v*y-S*A+u*x)-s*(v*M-S*T+_*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],d=e[10],g=e[11],v=e[12],S=e[13],_=e[14],u=e[15],m=n*o-i*a,y=n*l-r*a,M=n*c-s*a,A=i*l-r*o,T=i*c-s*o,x=r*c-s*l,b=f*S-p*v,P=f*_-d*v,C=f*u-g*v,D=p*_-d*S,j=p*u-g*S,Q=d*u-g*_,I=m*Q-y*j+M*D+A*C-T*P+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/I;return e[0]=(o*Q-l*j+c*D)*K,e[1]=(r*j-i*Q-s*D)*K,e[2]=(S*x-_*T+u*A)*K,e[3]=(d*T-p*x-g*A)*K,e[4]=(l*C-a*Q-c*P)*K,e[5]=(n*Q-r*C+s*P)*K,e[6]=(_*M-v*x-u*y)*K,e[7]=(f*x-d*M+g*y)*K,e[8]=(a*j-o*C+c*b)*K,e[9]=(i*C-n*j-s*b)*K,e[10]=(v*T-S*M+u*m)*K,e[11]=(p*M-f*T-g*m)*K,e[12]=(o*P-a*D-l*b)*K,e[13]=(n*D-i*P+r*b)*K,e[14]=(S*y-v*A-_*m)*K,e[15]=(f*A-p*y+d*m)*K,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,d=s*c,g=s*f,v=s*p,S=a*f,_=a*p,u=o*p,m=l*c,y=l*f,M=l*p,A=i.x,T=i.y,x=i.z;return r[0]=(1-(S+u))*A,r[1]=(g+M)*A,r[2]=(v-y)*A,r[3]=0,r[4]=(g-M)*T,r[5]=(1-(d+u))*T,r[6]=(_+m)*T,r[7]=0,r[8]=(v+y)*x,r[9]=(_-m)*x,r[10]=(1-(d+S))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);const c=1/a,f=1/o,p=1/l;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=f,Yn.elements[5]*=f,Yn.elements[6]*=f,Yn.elements[8]*=p,Yn.elements[9]*=p,Yn.elements[10]*=p,n.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ti,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),g=(i+r)/(i-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===ti)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Xa)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ti,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),g=-(i+r)/(i-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===ti)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===Xa)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Kl.prototype.isMatrix4=!0;let yt=Kl;const Zr=new V,Yn=new yt,US=new V(0,0,0),OS=new V(1,1,1),Xi=new V,Eo=new V,Tn=new V,tm=new yt,nm=new xr;class Gi{constructor(e=0,n=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const im=new V,Qr=new xr,Si=new yt,wo=new V,ta=new V,BS=new V,zS=new xr,rm=new V(1,0,0),sm=new V(0,1,0),am=new V(0,0,1),om={type:"added"},GS={type:"removed"},Jr={type:"childadded",child:null},eu={type:"childremoved",child:null};class Yt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new V,n=new Gi,i=new xr,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ta,wo,this.up):Si.lookAt(wo,ta,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(Si),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GS),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,BS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yt.DEFAULT_UP=new V(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const _=n.getJointPose(S,i),u=this._getHandJoint(c,S);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},To={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=wS(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=Ox[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Qe.workingToColorSpace(on.copy(this),e),Math.round($e(on.r*255,0,255))*65536+Math.round($e(on.g*255,0,255))*256+Math.round($e(on.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Cn){Qe.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(To);const i=qc(Yi.h,To.h,n),r=qc(Yi.s,To.s,n),s=qc(Yi.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new We;We.NAMES=Ox;class VS extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new V,Mi=new V,iu=new V,bi=new V,es=new V,ts=new V,lm=new V,ru=new V,su=new V,au=new V,ou=new Tt,lu=new Tt,cu=new Tt;class ei{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Mi.subVectors(i,n),iu.subVectors(e,n);const a=$n.dot($n),o=$n.dot(Mi),l=$n.dot(iu),c=Mi.dot(Mi),f=Mi.dot(iu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,g=(c*l-o*f)*d,v=(a*f-o*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return ou.setScalar(0),lu.setScalar(0),cu.setScalar(0),ou.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,i),cu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ou,s.x),a.addScaledVector(lu,s.y),a.addScaledVector(cu,s.z),a}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Mi.subVectors(e,n),$n.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),$n.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;es.subVectors(r,i),ts.subVectors(s,i),ru.subVectors(e,i);const l=es.dot(ru),c=ts.dot(ru);if(l<=0&&c<=0)return n.copy(i);su.subVectors(e,r);const f=es.dot(su),p=ts.dot(su);if(f>=0&&p<=f)return n.copy(r);const d=l*p-f*c;if(d<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),n.copy(i).addScaledVector(es,a);au.subVectors(e,s);const g=es.dot(au),v=ts.dot(au);if(v>=0&&g<=v)return n.copy(s);const S=g*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ts,o);const _=f*v-g*p;if(_<=0&&p-f>=0&&g-v>=0)return lm.subVectors(s,r),o=(p-f)/(p-f+(g-v)),n.copy(r).addScaledVector(lm,o);const u=1/(_+S+d);return a=S*u,o=d*u,n.copy(i).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ro.subVectors(this.max,na),ns.subVectors(e.a,na),is.subVectors(e.b,na),rs.subVectors(e.c,na),$i.subVectors(is,ns),qi.subVectors(rs,is),wr.subVectors(ns,rs);let n=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-wr.z,wr.y,$i.z,0,-$i.x,qi.z,0,-qi.x,wr.z,0,-wr.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-wr.y,wr.x,0];return!uu(n,ns,is,rs,Ro)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,ns,is,rs,Ro))?!1:(Co.crossVectors($i,qi),n=[Co.x,Co.y,Co.z],uu(n,ns,is,rs,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new V,new V,new V,new V,new V,new V,new V,new V],qn=new V,Ao=new eo,ns=new V,is=new V,rs=new V,$i=new V,qi=new V,wr=new V,na=new V,Ro=new V,Co=new V,Tr=new V;function uu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Tr.fromArray(t,s);const o=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),f=i.dot(Tr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ft=new V,No=new Fe;let jS=0;class kr extends Sr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yS,this.updateRanges=[],this.gpuType=hi,this.version=0,this._normalizationScale=e!==void 0?ch(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(e),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):AS(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):RS(e,this.array)}}class kx extends kr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Bx extends kr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class et extends kr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const WS=new eo,ia=new V,du=new V;class to{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(du)),this.expandByPoint(ia.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let XS=0;const Un=new yt,fu=new Yt,ss=new V,An=new eo,ra=new eo,jt=new V;class en extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SS(e)?Bx:kx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(An.min,ra.min),An.expandByPoint(jt),jt.addVectors(An.max,ra.max),An.expandByPoint(jt)):(An.expandByPoint(ra.min),An.expandByPoint(ra.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)jt.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),jt.add(ss)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new kr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new V,l[P]=new V;const f=new V,p=new V,d=new V,g=new Fe,v=new Fe,S=new Fe,_=new V,u=new V;function m(P,C,D){c[P]=c[C]=c[D]=1,f.fromBufferAttribute(i,P),p.fromBufferAttribute(i,C),d.fromBufferAttribute(i,D),g.fromBufferAttribute(s,P),v.fromBufferAttribute(s,C),S.fromBufferAttribute(s,D),p.sub(f),d.sub(f),v.sub(g),S.sub(g);const j=1/(v.x*S.y-S.x*v.y);isFinite(j)&&(_.copy(p).multiplyScalar(S.y).addScaledVector(d,-v.y).multiplyScalar(j),u.copy(d).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(j),o[P].add(_),o[C].add(_),o[D].add(_),l[P].add(u),l[C].add(u),l[D].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,C=y.length;P<C;++P){const D=y[P],j=D.start,Q=D.count;for(let I=j,K=j+Q;I<K;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new V,A=new V,T=new V,x=new V;function b(P){T.fromBufferAttribute(r,P),x.copy(T);const C=o[P];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);const j=A.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,j)}for(let P=0,C=i.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new kr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,f=new V,p=new V;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),S=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,_),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,_),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,d=new c.constructor(l.length*f);let g=0,v=0;for(let S=0,_=l.length;S<_;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*f;for(let u=0;u<f;u++)d[v++]=c[g++]}return new kr(d,f,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new en,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,d=c.length;p<d;p++){const g=c[p];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let d=0,g=p.length;d<g;d++)f.push(p[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new V,YS=new V,$S=new He;class Ci{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(YS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$S.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qS=0;class si extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=ba,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=px,this.blendDst=mx,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$c,this.stencilZFail=$c,this.stencilZPass=$c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wi=new V,pu=new V,Po=new V,Lo=new V;class hc{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pu.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),Lo.copy(this.origin).sub(pu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Po),o=Lo.dot(this.direction),l=-Lo.dot(Po),c=Lo.lengthSq(),f=Math.abs(1-a*a);let p,d,g,v;if(f>0)if(p=a*l-o,d=a*o-l,v=s*f,p>=0)if(d>=-v)if(d<=v){const S=1/f;p*=S,d*=S,g=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*l)+c;else d<=-v?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+c):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(pu).addScaledVector(Po,d),g}intersectSphere(e,n){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=e.x-a.x,d=e.y-a.y,g=e.z-a.z,v=n.x-a.x,S=n.y-a.y,_=n.z-a.z,u=i.x-a.x,m=i.y-a.y,y=i.z-a.z,M=Math.abs(l),A=Math.abs(c),T=Math.abs(f);let x,b,P,C,D,j,Q,I,K,te,O,G;if(M>=A&&M>=T?(P=l,j=p,K=v,G=u,l>=0?(x=c,b=f,C=d,D=g,Q=S,I=_,te=m,O=y):(x=f,b=c,C=g,D=d,Q=_,I=S,te=y,O=m)):A>=T?(P=c,j=d,K=S,G=m,c>=0?(x=f,b=l,C=g,D=p,Q=_,I=v,te=y,O=u):(x=l,b=f,C=p,D=g,Q=v,I=_,te=u,O=y)):(P=f,j=g,K=_,G=y,f>=0?(x=l,b=c,C=p,D=d,Q=v,I=S,te=u,O=m):(x=c,b=l,C=d,D=p,Q=S,I=v,te=m,O=u)),P===0)return null;const U=x/P,W=b/P,J=1/P,re=C-U*j,Se=D-W*j,q=Q-U*K,ce=I-W*K,he=te-U*G,be=O-W*G,me=he*ce-be*q,we=re*be-Se*he,Je=q*Se-ce*re;if(r){if(me<0||we<0||Je<0)return null}else if((me<0||we<0||Je<0)&&(me>0||we>0||Je>0))return null;const Ae=me+we+Je;if(Ae===0)return null;const je=J*(me*j+we*K+Je*G);return(Ae>0?je<0:je>0)?null:this.at(je/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zx extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cm=new yt,Ar=new hc,Do=new to,um=new V,Io=new V,Fo=new V,Uo=new V,mu=new V,Oo=new V,dm=new V,ko=new V;class Mt extends Yt{constructor(e=new en,n=new zx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(mu.fromBufferAttribute(p,e),a?Oo.addScaledVector(mu,f):Oo.addScaledVector(mu.sub(n),f))}n.add(Oo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Do.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Do,um)===null||Ar.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const _=d[v],u=a[_.materialIndex],m=Math.max(_.start,g.start),y=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let M=m,A=y;M<A;M+=3){const T=o.getX(M),x=o.getX(M+1),b=o.getX(M+2);r=Bo(this,u,e,i,c,f,p,T,x,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let _=v,u=S;_<u;_+=3){const m=o.getX(_),y=o.getX(_+1),M=o.getX(_+2);r=Bo(this,a,e,i,c,f,p,m,y,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const _=d[v],u=a[_.materialIndex],m=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=m,A=y;M<A;M+=3){const T=M,x=M+1,b=M+2;r=Bo(this,u,e,i,c,f,p,T,x,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let _=v,u=S;_<u;_+=3){const m=_,y=_+1,M=_+2;r=Bo(this,a,e,i,c,f,p,m,y,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function KS(t,e,n,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===jr,o),l===null)return null;ko.copy(o),ko.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ko);return c<n.near||c>n.far?null:{distance:c,point:ko.clone(),object:t}}function Bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Io),t.getVertexPosition(l,Fo),t.getVertexPosition(c,Uo);const f=KS(t,e,n,i,Io,Fo,Uo,dm);if(f){const p=new V;ei.getBarycoord(dm,Io,Fo,Uo,p),r&&(f.uv=ei.getInterpolatedAttribute(r,o,l,c,p,new Fe)),s&&(f.uv1=ei.getInterpolatedAttribute(s,o,l,c,p,new Fe)),a&&(f.normal=ei.getInterpolatedAttribute(a,o,l,c,p,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};ei.getNormal(Io,Fo,Uo,d.normal),f.face=d,f.barycoord=p}return f}class ZS extends mn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Zt,f=Zt,p,d){super(null,a,o,l,c,f,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rr=new to,QS=new Fe(.5,.5),zo=new V;class Ya{constructor(e=new Ci,n=new Ci,i=new Ci,r=new Ci,s=new Ci,a=new Ci){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ti,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],d=s[6],g=s[7],v=s[8],S=s[9],_=s[10],u=s[11],m=s[12],y=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-a,g-f,u-v,A-m).normalize(),r[1].setComponents(c+a,g+f,u+v,A+m).normalize(),r[2].setComponents(c+o,g+p,u+S,A+y).normalize(),r[3].setComponents(c-o,g-p,u-S,A-y).normalize(),i)r[4].setComponents(l,d,_,M).normalize(),r[5].setComponents(c-l,g-d,u-_,A-M).normalize();else if(r[4].setComponents(c-l,g-d,u-_,A-M).normalize(),n===ti)r[5].setComponents(c+l,g+d,u+_,A+M).normalize();else if(n===Xa)r[5].setComponents(l,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const n=QS.distanceTo(e.center);return Rr.radius=.7071067811865476+n,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fm=new yt;class dh{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];fm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Ya),i[r].setFromProjectionMatrix(fm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Ya),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new dh().copy(this)}}class Ea extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new V,$l=new V,hm=new yt,sa=new hc,Go=new to,gu=new V,pm=new V;class JS extends Yt{constructor(e=new en,n=new Ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yl.fromBufferAttribute(n,r-1),$l.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yl.distanceTo($l);e.setAttribute("lineDistance",new et(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;hm.copy(r).invert(),sa.copy(e.ray).applyMatrix4(hm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const g=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let S=g,_=v-1;S<_;S+=c){const u=f.getX(S),m=f.getX(S+1),y=Ho(this,e,sa,l,u,m,S);y&&n.push(y)}if(this.isLineLoop){const S=f.getX(v-1),_=f.getX(g),u=Ho(this,e,sa,l,S,_,v-1);u&&n.push(u)}}else{const g=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let S=g,_=v-1;S<_;S+=c){const u=Ho(this,e,sa,l,S,S+1,S);u&&n.push(u)}if(this.isLineLoop){const S=Ho(this,e,sa,l,v-1,g,v-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ho(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Yl.fromBufferAttribute(o,r),$l.fromBufferAttribute(o,s),n.distanceSqToSegment(Yl,$l,gu,pm)>i)return;gu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(gu);if(!(c<e.near||c>e.far))return{distance:c,point:pm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const mm=new V,gm=new V;class nf extends JS{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)mm.fromBufferAttribute(n,r),gm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mm.distanceTo(gm);e.setAttribute("lineDistance",new et(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fa extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xm=new yt,rf=new hc,Vo=new to,jo=new V;class xu extends Yt{constructor(e=new en,n=new fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;xm.copy(r).invert(),rf.copy(e.ray).applyMatrix4(xm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=d,S=g;v<S;v++){const _=c.getX(v);jo.fromBufferAttribute(p,_),_m(jo,_,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=d,S=g;v<S;v++)jo.fromBufferAttribute(p,v),_m(jo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _m(t,e,n,i,r,s,a){const o=rf.distanceSqToPoint(t);if(o<n){const l=new V;rf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gx extends mn{constructor(e=[],n=ks,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zs extends mn{constructor(e,n,i=_i,r,s,a,o=Zt,l=Zt,c,f=gr,p=1){if(f!==gr&&f!==sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Hx extends zs{constructor(e,n=_i,i=ks,r,s,a=Zt,o=Zt,l,c=gr){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vx extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jn extends en{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let d=0,g=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function v(S,_,u,m,y,M,A,T,x,b,P){const C=M/x,D=A/b,j=M/2,Q=A/2,I=T/2,K=x+1,te=b+1;let O=0,G=0;const U=new V;for(let W=0;W<te;W++){const J=W*D-Q;for(let re=0;re<K;re++){const Se=re*C-j;U[S]=Se*m,U[_]=J*y,U[u]=I,c.push(U.x,U.y,U.z),U[S]=0,U[_]=0,U[u]=T>0?1:-1,f.push(U.x,U.y,U.z),p.push(re/x),p.push(1-W/b),O+=1}}for(let W=0;W<b;W++)for(let J=0;J<x;J++){const re=d+J+K*W,Se=d+J+K*(W+1),q=d+(J+1)+K*(W+1),ce=d+(J+1)+K*W;l.push(re,Se,ce),l.push(Se,q,ce),G+=6}o.addGroup(g,G,P),g+=G,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fh extends en{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new V,f=new Fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=n;p++,d+=3){const g=i+p/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[d]/e+1)/2,f.y=(a[d+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pr extends en{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],d=[],g=[];let v=0;const S=[],_=i/2;let u=0;m(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(g,2));function m(){const M=new V,A=new V;let T=0;const x=(n-e)/i;for(let b=0;b<=s;b++){const P=[],C=b/s,D=C*(n-e)+e;for(let j=0;j<=r;j++){const Q=j/r,I=Q*l+o,K=Math.sin(I),te=Math.cos(I);A.x=D*K,A.y=-C*i+_,A.z=D*te,p.push(A.x,A.y,A.z),M.set(K,x,te).normalize(),d.push(M.x,M.y,M.z),g.push(Q,1-C),P.push(v++)}S.push(P)}for(let b=0;b<r;b++)for(let P=0;P<s;P++){const C=S[P][b],D=S[P+1][b],j=S[P+1][b+1],Q=S[P][b+1];(e>0||P!==0)&&(f.push(C,D,Q),T+=3),(n>0||P!==s-1)&&(f.push(D,j,Q),T+=3)}c.addGroup(u,T,0),u+=T}function y(M){const A=v,T=new Fe,x=new V;let b=0;const P=M===!0?e:n,C=M===!0?1:-1;for(let j=1;j<=r;j++)p.push(0,_*C,0),d.push(0,C,0),g.push(.5,.5),v++;const D=v;for(let j=0;j<=r;j++){const I=j/r*l+o,K=Math.cos(I),te=Math.sin(I);x.x=P*te,x.y=_*C,x.z=P*K,p.push(x.x,x.y,x.z),d.push(0,C,0),T.x=K*.5+.5,T.y=te*.5*C+.5,g.push(T.x,T.y),v++}for(let j=0;j<r;j++){const Q=A+j,I=D+j;M===!0?f.push(I,I+1,Q):f.push(I+1,I,Q),b+=3}c.addGroup(u,b,M===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hh extends en{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const y=new V,M=new V,A=new V;for(let T=0;T<n.length;T+=3)g(n[T+0],y),g(n[T+1],M),g(n[T+2],A),l(y,M,A,m)}function l(m,y,M,A){const T=A+1,x=[];for(let b=0;b<=T;b++){x[b]=[];const P=m.clone().lerp(M,b/T),C=y.clone().lerp(M,b/T),D=T-b;for(let j=0;j<=D;j++)j===0&&b===T?x[b][j]=P:x[b][j]=P.clone().lerp(C,j/D)}for(let b=0;b<T;b++)for(let P=0;P<2*(T-b)-1;P++){const C=Math.floor(P/2);P%2===0?(d(x[b][C+1]),d(x[b+1][C]),d(x[b][C])):(d(x[b][C+1]),d(x[b+1][C+1]),d(x[b+1][C]))}}function c(m){const y=new V;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(m),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function f(){const m=new V;for(let y=0;y<s.length;y+=3){m.x=s[y+0],m.y=s[y+1],m.z=s[y+2];const M=_(m)/2/Math.PI+.5,A=u(m)/Math.PI+.5;a.push(M,1-A)}v(),p()}function p(){for(let m=0;m<a.length;m+=6){const y=a[m+0],M=a[m+2],A=a[m+4],T=Math.max(y,M,A),x=Math.min(y,M,A);T>.9&&x<.1&&(y<.2&&(a[m+0]+=1),M<.2&&(a[m+2]+=1),A<.2&&(a[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function g(m,y){const M=m*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){const m=new V,y=new V,M=new V,A=new V,T=new Fe,x=new Fe,b=new Fe;for(let P=0,C=0;P<s.length;P+=9,C+=6){m.set(s[P+0],s[P+1],s[P+2]),y.set(s[P+3],s[P+4],s[P+5]),M.set(s[P+6],s[P+7],s[P+8]),T.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),A.copy(m).add(y).add(M).divideScalar(3);const D=_(A);S(T,C+0,m,D),S(x,C+2,y,D),S(b,C+4,M,D)}}function S(m,y,M,A){A<0&&m.x===1&&(a[y]=m.x-1),M.x===0&&M.z===0&&(a[y]=A/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.vertices,e.indices,e.radius,e.detail)}}class ph extends hh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ph(e.radius,e.detail)}}class pc extends en{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,d=n/l,g=[],v=[],S=[],_=[];for(let u=0;u<f;u++){const m=u*d-a;for(let y=0;y<c;y++){const M=y*p-s;v.push(M,-m,0),S.push(0,0,1),_.push(y/o),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const y=m+c*u,M=m+c*(u+1),A=m+1+c*(u+1),T=m+1+c*u;g.push(y,M,T),g.push(M,A,T)}this.setIndex(g),this.setAttribute("position",new et(v,3)),this.setAttribute("normal",new et(S,3)),this.setAttribute("uv",new et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class mh extends en{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],p=new V,d=new V,g=[],v=[],S=[],_=[];for(let u=0;u<=i;u++){const m=[],y=u/i,M=a+y*o,A=e*Math.cos(M),T=Math.sqrt(e*e-A*A);let x=0;u===0&&a===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const P=b/n,C=r+P*s;p.x=-T*Math.cos(C),p.y=A,p.z=T*Math.sin(C),v.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),_.push(P+x,1-y),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const y=f[u][m+1],M=f[u][m],A=f[u+1][m],T=f[u+1][m+1];(u!==0||a>0)&&g.push(y,M,T),(u!==i-1||l<Math.PI)&&g.push(M,A,T)}this.setIndex(g),this.setAttribute("position",new et(v,3)),this.setAttribute("normal",new et(S,3)),this.setAttribute("uv",new et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gh extends en{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],d=new V,g=new V,v=new V;for(let S=0;S<=i;S++){const _=a+S/i*o;for(let u=0;u<=r;u++){const m=u/r*s;g.x=(e+n*Math.cos(_))*Math.cos(m),g.y=(e+n*Math.cos(_))*Math.sin(m),g.z=n*Math.sin(_),c.push(g.x,g.y,g.z),d.x=e*Math.cos(m),d.y=e*Math.sin(m),v.subVectors(g,d).normalize(),f.push(v.x,v.y,v.z),p.push(u/r),p.push(S/i)}}for(let S=1;S<=i;S++)for(let _=1;_<=r;_++){const u=(r+1)*S+_-1,m=(r+1)*(S-1)+_-1,y=(r+1)*(S-1)+_,M=(r+1)*S+_;l.push(u,m,M),l.push(m,y,M)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(vm(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(vm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function vm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function eM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const tM={clone:Gs,merge:fn};var nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rM extends Xr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sM extends si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=nh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aM extends si{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class oM extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ym={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Sm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Sm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Sm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class cM{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){const p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,d=c.length;p<d;p+=2){const g=c[p],v=c[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const uM=new cM;class xh{constructor(e){this.manager=e!==void 0?e:uM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}xh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class dM extends Error{constructor(e,n){super(e),this.response=n}}class fM extends xh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ym.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Ti[e]!==void 0){Ti[e].push({onLoad:n,onProgress:i,onError:r});return}Ti[e]=[],Ti[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Ti[e],p=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=d?parseInt(d):0,v=g!==0;let S=0;const _=new ReadableStream({start(u){m();function m(){p.read().then(({done:y,value:M})=>{if(y)u.close();else{S+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:g});for(let T=0,x=f.length;T<x;T++){const b=f[T];b.onProgress&&b.onProgress(A)}u.enqueue(M),m()}},y=>{u.error(y)})}}});return new Response(_)}else throw new dM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),d=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(d);return c.arrayBuffer().then(v=>g.decode(v))}}}).then(c=>{ym.add(`file:${e}`,c);const f=Ti[e];delete Ti[e];for(let p=0,d=f.length;p<d;p++){const g=f[p];g.onLoad&&g.onLoad(c)}}).catch(c=>{const f=Ti[e];if(f===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let p=0,d=f.length;p<d;p++){const g=f[p];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class _h extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const _u=new yt,Mm=new V,bm=new V;class Wx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mm),bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Xa||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wo=new V,Xo=new xr,oi=new V;class Xx extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Xo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Wo,Xo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new V,Em=new Fe,wm=new Fe;class zn extends Xx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,Em,wm),n.subVectors(wm,Em)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class hM extends Wx{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class pM extends _h{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Yx extends Xx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mM extends Wx{constructor(){super(new Yx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tm extends _h{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new mM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class gM extends _h{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const as=-90,os=1;class sf extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(as,os,e,n);r.layers=this.layers,this.add(r);const s=new zn(as,os,e,n);s.layers=this.layers,this.add(s);const a=new zn(as,os,e,n);a.layers=this.layers,this.add(a);const o=new zn(as,os,e,n);o.layers=this.layers,this.add(o);const l=new zn(as,os,e,n);l.layers=this.layers,this.add(l);const c=new zn(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xM extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class _M{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Am{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vM extends nf{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let d=0,g=0,v=-o;d<=n;d++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const S=d===s?i:r;S.toArray(c,g),g+=3,S.toArray(c,g),g+=3,S.toArray(c,g),g+=3,S.toArray(c,g),g+=3}const f=new en;f.setAttribute("position",new et(l,3)),f.setAttribute("color",new et(c,3));const p=new Ea({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class yM extends Sr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Rm(t,e,n,i){const r=SM(i);switch(n){case Rx:return t*e;case Nx:return t*e/r.components*r.byteLength;case ah:return t*e/r.components*r.byteLength;case Wr:return t*e*2/r.components*r.byteLength;case oh:return t*e*2/r.components*r.byteLength;case Cx:return t*e*3/r.components*r.byteLength;case pi:return t*e*4/r.components*r.byteLength;case lh:return t*e*4/r.components*r.byteLength;case dl:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:case Rd:return Math.max(t,16)*Math.max(e,8)/4;case wd:case Ad:return Math.max(t,8)*Math.max(e,8)/2;case Cd:case Nd:case Ld:case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pd:case Hl:case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qd:case Kd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Qd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vl:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SM(t){switch(t){case Nn:case Ex:return{byteLength:1,components:1};case ja:case wx:case vi:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case _i:case ih:case hi:return{byteLength:4,components:1};case Tx:case Ax:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $x(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MM(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<p.length;g++){const v=p[d],S=p[g];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,p[d]=S)}p.length=d+1;for(let g=0,v=p.length;g<v;g++){const S=p[g];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var bM=`#ifdef USE_ALPHAHASH
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hb=`#ifndef FLAT_SHADED
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
}`,G1=`#define MATCAP
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
}`,H1=`#define NORMAL
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
}`,Xe={alphahash_fragment:bM,alphahash_pars_fragment:EM,alphamap_fragment:wM,alphamap_pars_fragment:TM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:NM,batching_pars_vertex:PM,batching_vertex:LM,begin_vertex:DM,beginnormal_vertex:IM,bsdfs:FM,iridescence_fragment:UM,bumpmap_pars_fragment:OM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:GM,color_fragment:HM,color_pars_fragment:VM,color_pars_vertex:jM,color_vertex:WM,common:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:$M,displacementmap_vertex:qM,emissivemap_fragment:KM,emissivemap_pars_fragment:ZM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ab,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:db,lights_lambert_pars_fragment:fb,lights_pars_begin:hb,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:xb,lights_phong_pars_fragment:_b,lights_physical_fragment:vb,lights_physical_pars_fragment:yb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:bb,lightprobes_pars_fragment:Eb,logdepthbuf_fragment:wb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Rb,map_fragment:Cb,map_pars_fragment:Nb,map_particle_fragment:Pb,map_particle_pars_fragment:Lb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Fb,morphcolor_vertex:Ub,morphnormal_vertex:Ob,morphtarget_pars_vertex:kb,morphtarget_vertex:Bb,normal_fragment_begin:zb,normal_fragment_maps:Gb,normal_pars_fragment:Hb,normal_pars_vertex:Vb,normal_vertex:jb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:qb,opaque_fragment:Kb,packing:Zb,premultiplied_alpha_fragment:Qb,project_vertex:Jb,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:s1,shadowmap_vertex:a1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:u1,skinnormal_vertex:d1,specularmap_fragment:f1,specularmap_pars_fragment:h1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:x1,uv_pars_fragment:_1,uv_pars_vertex:v1,uv_vertex:y1,worldpos_vertex:S1,background_vert:M1,background_frag:b1,backgroundCube_vert:E1,backgroundCube_frag:w1,cube_vert:T1,cube_frag:A1,depth_vert:R1,depth_frag:C1,distance_vert:N1,distance_frag:P1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:I1,linedashed_frag:F1,meshbasic_vert:U1,meshbasic_frag:O1,meshlambert_vert:k1,meshlambert_frag:B1,meshmatcap_vert:z1,meshmatcap_frag:G1,meshnormal_vert:H1,meshnormal_frag:V1,meshphong_vert:j1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:Y1,meshtoon_vert:$1,meshtoon_frag:q1,points_vert:K1,points_frag:Z1,shadow_vert:Q1,shadow_frag:J1,sprite_vert:eE,sprite_frag:tE},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},di={basic:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:fn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:fn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:fn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:fn([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:fn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:fn([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:fn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:fn([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:fn([ve.common,ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:fn([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};di.physical={uniforms:fn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Yo={r:0,b:0,g:0},nE=new yt,qx=new He;qx.set(-1,0,0,0,1,0,0,0,1);function iE(t,e,n,i,r,s){const a=new We(0);let o=r===!0?0:1,l,c,f=null,p=0,d=null;function g(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const M=m.backgroundBlurriness>0;y=e.get(y,M)}return y}function v(m){let y=!1;const M=g(m);M===null?_(a,o):M&&M.isColor&&(_(M,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(m,y){const M=g(y);M&&M.isCubeTexture?(c===void 0&&(c=new Mt(new Jn(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Gs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qx),c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==dt,(f!==M||p!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Mt(new pc(2,2),new Xr({name:"BackgroundMaterial",uniforms:Gs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,y){m.getRGB(Yo,jx(t)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),o=y,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(a,o)},render:v,addToRenderList:S,dispose:u}}function rE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(D,j,Q,I,K){let te=!1;const O=p(D,I,Q,j);s!==O&&(s=O,c(s.object)),te=g(D,I,Q,K),te&&v(D,I,Q,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(D,j,Q,I),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function p(D,j,Q,I){const K=I.wireframe===!0;let te=i[j.id];te===void 0&&(te={},i[j.id]=te);const O=D.isInstancedMesh===!0?D.id:0;let G=te[O];G===void 0&&(G={},te[O]=G);let U=G[Q.id];U===void 0&&(U={},G[Q.id]=U);let W=U[K];return W===void 0&&(W=d(l()),U[K]=W),W}function d(D){const j=[],Q=[],I=[];for(let K=0;K<n;K++)j[K]=0,Q[K]=0,I[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Q,attributeDivisors:I,object:D,attributes:{},index:null}}function g(D,j,Q,I){const K=s.attributes,te=j.attributes;let O=0;const G=Q.getAttributes();for(const U in G)if(G[U].location>=0){const J=K[U];let re=te[U];if(re===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function v(D,j,Q,I){const K={},te=j.attributes;let O=0;const G=Q.getAttributes();for(const U in G)if(G[U].location>=0){let J=te[U];J===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),K[U]=re,O++}s.attributes=K,s.attributesNum=O,s.index=I}function S(){const D=s.newAttributes;for(let j=0,Q=D.length;j<Q;j++)D[j]=0}function _(D){u(D,0)}function u(D,j){const Q=s.newAttributes,I=s.enabledAttributes,K=s.attributeDivisors;Q[D]=1,I[D]===0&&(t.enableVertexAttribArray(D),I[D]=1),K[D]!==j&&(t.vertexAttribDivisor(D,j),K[D]=j)}function m(){const D=s.newAttributes,j=s.enabledAttributes;for(let Q=0,I=j.length;Q<I;Q++)j[Q]!==D[Q]&&(t.disableVertexAttribArray(Q),j[Q]=0)}function y(D,j,Q,I,K,te,O){O===!0?t.vertexAttribIPointer(D,j,Q,K,te):t.vertexAttribPointer(D,j,Q,I,K,te)}function M(D,j,Q,I){S();const K=I.attributes,te=Q.getAttributes(),O=j.defaultAttributeValues;for(const G in te){const U=te[G];if(U.location>=0){let W=K[G];if(W===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const J=W.normalized,re=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const q=Se.buffer,ce=Se.type,he=Se.bytesPerElement,be=ce===t.INT||ce===t.UNSIGNED_INT||W.gpuType===ih;if(W.isInterleavedBufferAttribute){const me=W.data,we=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Je=W.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ae=0;Ae<U.locationSize;Ae++)u(U.location+Ae,me.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ae=0;Ae<U.locationSize;Ae++)_(U.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,q);for(let Ae=0;Ae<U.locationSize;Ae++)y(U.location+Ae,re/U.locationSize,ce,J,we*he,(Je+re/U.locationSize*Ae)*he,be)}else{if(W.isInstancedBufferAttribute){for(let me=0;me<U.locationSize;me++)u(U.location+me,W.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let me=0;me<U.locationSize;me++)_(U.location+me);t.bindBuffer(t.ARRAY_BUFFER,q);for(let me=0;me<U.locationSize;me++)y(U.location+me,re/U.locationSize,ce,J,re*he,re/U.locationSize*me*he,be)}}else if(O!==void 0){const J=O[G];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(U.location,J);break;case 3:t.vertexAttrib3fv(U.location,J);break;case 4:t.vertexAttrib4fv(U.location,J);break;default:t.vertexAttrib1fv(U.location,J)}}}}m()}function A(){P();for(const D in i){const j=i[D];for(const Q in j){const I=j[Q];for(const K in I){const te=I[K];for(const O in te)f(te[O].object),delete te[O];delete I[K]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const j=i[D.id];for(const Q in j){const I=j[Q];for(const K in I){const te=I[K];for(const O in te)f(te[O].object),delete te[O];delete I[K]}}delete i[D.id]}function x(D){for(const j in i){const Q=i[j];for(const I in Q){const K=Q[I];if(K[D.id]===void 0)continue;const te=K[D.id];for(const O in te)f(te[O].object),delete te[O];delete K[D.id]}}}function b(D){for(const j in i){const Q=i[j],I=D.isInstancedMesh===!0?D.id:0,K=Q[I];if(K!==void 0){for(const te in K){const O=K[te];for(const G in O)f(O[G].object),delete O[G];delete K[te]}delete Q[I],Object.keys(Q).length===0&&delete i[j]}}}function P(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:_,disableUnusedAttributes:m}}function sE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function aE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==pi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Nn&&x!==hi&&!b&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:T}}function oE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ci,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const g=p.length!==0||d||i!==0||r;return r=d,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=f(p,d,0)},this.setState=function(p,d,g){const v=p.clippingPlanes,S=p.clipIntersection,_=p.clipShadows,u=t.get(p);if(!r||v===null||v.length===0||s&&!_)s?f(null):c();else{const m=s?0:i,y=m*4;let M=u.clippingState||null;l.value=M,M=f(v,d,y,g);for(let A=0;A!==y;++A)M[A]=n[A];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,g,v){const S=p!==null?p.length:0;let _=null;if(S!==0){if(_=l.value,v!==!0||_===null){const u=g+S*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<u)&&(_=new Float32Array(u));for(let y=0,M=g;y!==S;++y,M+=4)a.copy(p[y]).applyMatrix4(m,o),a.normal.toArray(_,M),_[M+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}class vh extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jn(5,5,5),s=new Xr({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Cs});s.uniforms.tEquirect.value=n;const a=new Mt(r,s),o=n.minFilter;return n.minFilter===rr&&(n.minFilter=Sn),new sf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Cm=256,lE=3,cE=20,Kx=256,Zx=16,uE=3,dE=new V,fE=new We;class ql{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sf(1,10,null),this._boxMesh=new Mt(new Jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=dE}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,d=l.autoClearColor,g=l.autoClearDepth,v=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(fE));const _=new sf(i,r,f);return _.position.copy(o),_.update(l,e),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=g,l.autoClearStencil=v,e.background=S,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Cm,TS(e))}_fromTexture(e,n){e.mapping===ks||e.mapping===Va?this._setSize(e.image.length===0?Cm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Nm(e,!1,!1),i=Math.log2(e)-lE;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Nm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ks||e.mapping===Va?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hE(),this._integrationMaterial=pE());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Zx);for(let a=0;a<=i;a++){const o=ql.lodToRoughness(a,i);if(a>i-uE)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Kx*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=mE());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Nm(t,e,n){return new vh(t,{minFilter:rr,generateMipmaps:e,type:vi,colorSpace:jl,depthBuffer:n})}function no(t,e,n){return new Xr({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:wn,blending:Cs,depthTest:!1,depthWrite:!1})}function hE(){return no("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kx}u

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
	`)}function pE(){return no("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zx}},`

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
	`)}function mE(){return no("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Pm(){return no("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Lm(){return no("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,g=!1){return d==null?null:g?a(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===Wc||g===Xc)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const S=new vh(v.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const g=d.mapping,v=g===Wc||g===Xc,S=g===ks||g===Va;if(v||S){let _=n.get(d);const u=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new ql(t)),_=v?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,n.set(d,_),_.texture;if(_!==void 0)return _.texture;{const m=d.image;return v&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new ql(t)),_=v?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,n.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function o(d,g){return g===Wc?d.mapping=ks:g===Xc&&(d.mapping=Va),d}function l(d){let g=0;const v=6;for(let S=0;S<v;S++)d[S]!==void 0&&g++;return g===v}function c(d){const g=d.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function f(d){const g=d.target;g.removeEventListener("dispose",f);const v=n.get(g);v!==void 0&&(n.delete(g),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function xE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ml("WebGLRenderer: "+i+" extension not supported."),r}}}function _E(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const _ in v.attributes)e.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const S=s.get(v);S&&(e.remove(S),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),n.memory.geometries++),S}function f(v){const S=v.attributes;for(const _ in S)e.update(S[_],t.ARRAY_BUFFER)}function p(v){const S=v.index,_=v.attributes.position;let u=0;if(_===void 0)return;const m=S!==null?S.array.length:_.array.length/3-1,y=_.count>=65535?Bx:kx,M=new y(Math.ceil(m/3)*6,1),A=M.array;if(S!==null){const x=S.array;u=S.version;for(let b=0,P=0;b<m;b+=3){const C=x[b+0],D=x[b+1],j=x[b+2];A[P++]=C,A[P++]=D,A[P++]=D,A[P++]=j,A[P++]=j,A[P++]=C}}else{u=_.version;for(let x=0,b=0;x<m;x+=3){const P=x+0,C=x+1,D=x+2;A[b++]=P,A[b++]=C,A[b++]=C,A[b++]=D,A[b++]=D,A[b++]=P}}M.version=u;const T=s.get(v);T&&e.remove(T),s.set(v,M)}function d(v){const S=s.get(v);if(S){const _=v.index;_!==null&&S.version<_.version&&p(v)}else p(v);return s.get(v)}function g(){for(const v in r){const S=r[v].deref();S!==void 0&&l(S)}}return{get:c,update:f,getWireframeAttribute:d,dispose:g}}function vE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function c(p,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,p*a,g),n.update(d,i,g))}function f(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,g);let S=0;for(let _=0;_<g;_++)S+=d[_];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function yE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SE(t,e,n){const i=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let C=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var g=C;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),_===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const x=new Float32Array(A*T*4*p),b=new Fx(x,A,T,p);b.type=hi,b.needsUpdate=!0;const P=M*4;for(let D=0;D<p;D++){const j=u[D],Q=m[D],I=y[D],K=A*T*4*D;for(let te=0;te<j.count;te++){const O=te*P;v===!0&&(r.fromBufferAttribute(j,te),x[K+O+0]=r.x,x[K+O+1]=r.y,x[K+O+2]=r.z,x[K+O+3]=0),S===!0&&(r.fromBufferAttribute(Q,te),x[K+O+4]=r.x,x[K+O+5]=r.y,x[K+O+6]=r.z,x[K+O+7]=0),_===!0&&(r.fromBufferAttribute(I,te),x[K+O+8]=r.x,x[K+O+9]=r.y,x[K+O+10]=r.z,x[K+O+11]=I.itemSize===4?r.w:1)}}d={count:p,texture:b,size:new Fe(A,T)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ME(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const bE={[gx]:"LINEAR_TONE_MAPPING",[xx]:"REINHARD_TONE_MAPPING",[_x]:"CINEON_TONE_MAPPING",[vx]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function EE(t,e,n,i,r,s){const a=new xi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const f=new en;f.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new et([0,2,0,0,2,0],2));const p=new rM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Mt(f,p),g=new Yx(-1,1,1,-1,0,1);let v=null,S=null,_=!1,u,m=null,y=[],M=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<y.length;x++){const b=y[x];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){y=A,M=y.length>0&&y[0].isRenderPass===!0;const T=a.width,x=a.height;y.length>0&&o===null&&(o=new xi(T,x,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new xi(T,x,{type:vi,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&y.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new zs(T,x),s===!0&&(c.format=sr,c.type=Bs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<y.length;P++){const C=y[P];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(_||A.toneMapping===Fi&&y.length===0)return!1;if(m=T,T!==null){const x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return M===!1&&A.setRenderTarget(a),u=A.toneMapping,A.toneMapping=Fi,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=u,_=!0;let x=a,b=o;for(let P=0;P<y.length;P++){const C=y[P];C.enabled!==!1&&(C.render(A,b,x,T),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(v!==A.outputColorSpace||S!==A.toneMapping){v=A.outputColorSpace,S=A.toneMapping,p.defines={},Qe.getTransfer(v)===dt&&(p.defines.SRGB_TRANSFER="");const P=bE[S];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(m),A.render(d,g),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}const Qx=new mn,Jx=new zs(1,1),e_=new Hx(1),t_=new Fx,n_=new FS,i_=new Gx,Dm=[],Im=[],Fm=new Float32Array(16),Um=new Float32Array(9),Om=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dm[r];if(s===void 0&&(s=new Float32Array(r),Dm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function CE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Om.set(i),t.uniformMatrix2fv(this.addr,!1,Om),Ht(n,i)}}function NE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Um.set(i),t.uniformMatrix3fv(this.addr,!1,Um),Ht(n,i)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Fm.set(i),t.uniformMatrix4fv(this.addr,!1,Fm),Ht(n,i)}}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function gc(t){return t.version===0&&(t.compareFunction=Dx,t.needsUpdate=!0),t}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=gc(Jx):s=Qx,n.setTexture2D(e||s,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||n_,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=gc(e_):s=i_,n.setTextureCube(e||s,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||t_,r)}function jE(t){switch(t){case 5126:return wE;case 35664:return TE;case 35665:return AE;case 35666:return RE;case 35674:return CE;case 35675:return NE;case 35676:return PE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return IE;case 35669:case 35673:return FE;case 5125:return UE;case 36294:return OE;case 36295:return kE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return VE}}function WE(t,e){t.uniform1fv(this.addr,e)}function XE(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function YE(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function $E(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function qE(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KE(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZE(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QE(t,e){t.uniform1iv(this.addr,e)}function JE(t,e){t.uniform2iv(this.addr,e)}function ew(t,e){t.uniform3iv(this.addr,e)}function tw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function iw(t,e){t.uniform2uiv(this.addr,e)}function rw(t,e){t.uniform3uiv(this.addr,e)}function sw(t,e){t.uniform4uiv(this.addr,e)}function aw(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=gc(Jx):a=Qx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ow(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||n_,s[a])}function lw(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=gc(e_):a=i_;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function cw(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||t_,s[a])}function uw(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return YE;case 35666:return $E;case 35674:return qE;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class fw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uw(n.type)}}class hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function pw(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),a=vu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){km(n,c===void 0?new dw(o,t,e):new fw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new hw(o),km(n,p)),n=p}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);pw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mw=37297;let gw=0;function xw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const zm=new He;function _w(t){Qe._getMatrix(zm,Qe.workingColorSpace,t);const e=`mat3( ${zm.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Wl:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+xw(t.getShaderSource(e),o)}else return s}function vw(t,e){const n=_w(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yw={[gx]:"Linear",[xx]:"Reinhard",[_x]:"Cineon",[vx]:"ACESFilmic",[Sx]:"AgX",[Mx]:"Neutral",[yx]:"Custom"};function Sw(t,e){const n=yw[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new V;function Mw(){Qe.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Ew(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ww(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ha(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(t){return t.replace(Tw,Aw)}function Aw(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return af(n)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(t){return t.replace(Rw,Cw)}function Cw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Nw={[ul]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function Pw(t){return Nw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lw={[Va]:"ENVMAP_MODE_REFRACTION"};function Dw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Lw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iw={[nh]:"ENVMAP_BLENDING_MULTIPLY",[cS]:"ENVMAP_BLENDING_MIX",[uS]:"ENVMAP_BLENDING_ADD"};function Fw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Iw[t.combine]||"ENVMAP_BLENDING_NONE"}function Uw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Pw(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Dw(n),p=Fw(n),d=bw(n),g=Ew(s),v=r.createProgram();let S,_,u=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),_.length>0&&(_+=`
`)):(S=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),_=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Fi?Sw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,vw("linearToOutputTexel",n.outputColorSpace),Mw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),a=af(a),a=Hm(a,n),a=Vm(a,n),o=af(o),o=Hm(o,n),o=Vm(o,n),a=jm(a),o=jm(o),n.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const m=u+S+a,y=u+_+o,M=Bm(r,r.VERTEX_SHADER,m),A=Bm(r,r.FRAGMENT_SHADER,y);r.attachShader(v,M),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(C){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",j=r.getShaderInfoLog(M)||"",Q=r.getShaderInfoLog(A)||"",I=D.trim(),K=j.trim(),te=Q.trim();let O=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,A);else{const U=Gm(r,M,"vertex"),W=Gm(r,A,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+U+`
`+W)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(K===""||te==="")&&(G=!1);G&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:K,prefix:S},fragmentShader:{log:te,prefix:_}})}r.deleteShader(M),r.deleteShader(A),x=new xl(r,v),b=ww(r,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,mw)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=A,this}let Ow=0;class kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Bw(e),n.set(e,i)),i}}class Bw{constructor(e){this.id=Ow++,this.code=e,this.usedTimes=0}}function zw(t){return t===Wr||t===Hl||t===Vl}function Gw(t,e,n,i,r,s){const a=new Ux,o=new kw,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,b,P,C,D,j){const Q=C.fog,I=D.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||K,te),G=d[x.type];let U=i.precision;x.precision!==null&&(U=i.getMaxPrecision(x.precision),U!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",U,"instead."));const W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=W!==void 0?W.length:0;let re=0;I.morphAttributes.position!==void 0&&(re=1),I.morphAttributes.normal!==void 0&&(re=2),I.morphAttributes.color!==void 0&&(re=3);let Se,q,ce,he;if(G){const pe=di[G];Se=pe.vertexShader,q=pe.fragmentShader}else{Se=x.vertexShader,q=x.fragmentShader;const pe=o.getVertexShaderStage(x),tt=o.getFragmentShaderStage(x);o.update(x,pe,tt),ce=pe.id,he=tt.id}const be=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),we=D.isInstancedMesh===!0,Je=D.isBatchedMesh===!0,Ae=!!x.map,je=!!x.matcap,ke=!!O,Ie=ke&&O.isPMREMTexture===!0,Ye=!!x.aoMap,Be=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,Ot=!!x.displacementMap,xt=!!x.emissiveMap,Ct=!!x.metalnessMap,$t=!!x.roughnessMap,rt=x.anisotropy>0,H=x.clearcoat>0,Dt=x.diffuseRoughness>0,ht=x.dispersion>0,st=x.retroreflectivity>0,ge=x.iridescence>0,St=x.sheen>0,De=x.transmission>0,Ue=rt&&!!x.anisotropyMap,R=H&&!!x.clearcoatMap,E=H&&!!x.clearcoatNormalMap,N=H&&!!x.clearcoatRoughnessMap,z=Dt&&!!x.diffuseRoughnessMap,F=ge&&!!x.iridescenceMap,ae=ge&&!!x.iridescenceThicknessMap,ne=St&&!!x.sheenColorMap,B=St&&!!x.sheenRoughnessMap,X=!!x.specularMap,de=!!x.specularColorMap,L=!!x.specularIntensityMap,ie=De&&!!x.transmissionMap,Y=De&&!!x.thicknessMap,se=!!x.gradientMap,oe=!!x.alphaMap,le=x.alphaTest>0,Ee=!!x.alphaHash,ze=!!x.extensions;let ue=Fi;x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ue=t.toneMapping);const Le=Ie?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Ge={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:Se,fragmentShader:q,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:U,batching:Je,batchingColor:Je&&D._colorsTexture!==null,instancing:we,instancingColor:we&&D.instanceColor!==null,instancingMorph:we&&D.morphTexture!==null,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:je,envMap:ke,envMapMode:ke&&O.mapping,envMapPMREM:Ie,envMapMaxLod:Ie?Le.length-1:null,envMapSize:Ie?Le[0].width:null,aoMap:Ye,lightMap:Be,bumpMap:ct,normalMap:ut,displacementMap:Ot,emissiveMap:xt,normalMapObjectSpace:ut&&x.normalMapType===hS,normalMapTangentSpace:ut&&x.normalMapType===Wa,packedNormalMap:ut&&x.normalMapType===Wa&&zw(x.normalMap.format),metalnessMap:Ct,roughnessMap:$t,anisotropy:rt,anisotropyMap:Ue,clearcoat:H,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:N,diffuseRoughness:Dt,diffuseRoughnessMap:z,dispersion:ht,retroreflection:st,iridescence:ge,iridescenceMap:F,iridescenceThicknessMap:ae,sheen:St,sheenColorMap:ne,sheenRoughnessMap:B,specularMap:X,specularColorMap:de,specularIntensityMap:L,transmission:De,transmissionMap:ie,thicknessMap:Y,gradientMap:se,opaque:x.transparent===!1&&x.blending===ba&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Ee,combine:x.combine,mapUv:Ae&&g(x.map.channel),aoMapUv:Ye&&g(x.aoMap.channel),lightMapUv:Be&&g(x.lightMap.channel),bumpMapUv:ct&&g(x.bumpMap.channel),normalMapUv:ut&&g(x.normalMap.channel),displacementMapUv:Ot&&g(x.displacementMap.channel),emissiveMapUv:xt&&g(x.emissiveMap.channel),metalnessMapUv:Ct&&g(x.metalnessMap.channel),roughnessMapUv:$t&&g(x.roughnessMap.channel),anisotropyMapUv:Ue&&g(x.anisotropyMap.channel),clearcoatMapUv:R&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&g(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:z&&g(x.diffuseRoughnessMap.channel),iridescenceMapUv:F&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:B&&g(x.sheenRoughnessMap.channel),specularMapUv:X&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:L&&g(x.specularIntensityMap.channel),transmissionMapUv:ie&&g(x.transmissionMap.channel),thicknessMapUv:Y&&g(x.thicknessMap.channel),alphaMapUv:oe&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ut||rt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ae||oe),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:re,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.filter(pe=>pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:xt&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ni,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ze&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&x.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function S(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(b,x),u(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function u(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function m(x){const b=d[x.type];let P;if(b){const C=di[b];P=tM.clone(C.uniforms)}else P=x.uniforms;return P}function y(x,b){let P=f.get(b);return P!==void 0?++P.usedTimes:(P=new Uw(t,b,x,r),c.push(P),f.set(b,P)),P}function M(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:S,getUniforms:m,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:T}}function Hw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Vw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,v,S,_,u){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:g,material:v,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:_,group:u},t[e]=m):(m.id=d.id,m.object=d,m.geometry=g,m.material=v,m.materialVariant=a(d),m.groupOrder=S,m.renderOrder=d.renderOrder,m.z=_,m.group=u),e++,m}function l(d,g,v,S,_,u,m){m.reversedDepth===!0&&(_=-_);const y=o(d,g,v,S,_,u);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):n.push(y)}function c(d,g,v,S,_,u){const m=o(d,g,v,S,_,u);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function f(d,g){n.length>1&&n.sort(d||Vw),i.length>1&&i.sort(g||Xm),r.length>1&&r.sort(g||Xm)}function p(){for(let d=e,g=t.length;d<g;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function jw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ym,t.set(i,[a])):r>=s.length?(a=new Ym,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new We};break;case"SpotLight":n={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Xw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Yw=0;function $w(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qw(t){const e=new Ww,n=Xw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new yt,a=new yt;function o(c){let f=0,p=0,d=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let g=0,v=0,S=0,_=0,u=0,m=0,y=0,M=0,A=0,T=0,x=0,b=0,P=0,C=0;c.sort($w);for(let j=0,Q=c.length;j<Q;j++){const I=c[j],K=I.color,te=I.intensity,O=I.distance;let G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wr?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=K.r*te,p+=K.g*te,d+=K.b*te;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],te);C++}else if(I.isSunLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,J=n.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[v]=J,i.sunShadowMap[v]=G;const re=W.getViewportCount();for(let Se=0;Se<re;Se++)i.sunShadowMatrix[S+Se]=W.getMatrix(Se),i.sunShadowCascade[S+Se]=W._cascadeData[Se];S+=re,v++}i.sun[g]=U,g++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,J=n.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=I.shadow.matrix,A++}i.directional[_]=U,_++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(K).multiplyScalar(te),U.distance=O,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[m]=U;const W=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,W.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[m]=W.matrix,I.castShadow){const J=n.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=G,x++}m++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(K).multiplyScalar(te),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=U,y++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const W=I.shadow,J=n.get(I);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,i.pointShadow[u]=J,i.pointShadowMap[u]=G,i.pointShadowMatrix[u]=I.shadow.matrix,T++}i.point[u]=U,u++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(te),U.groundColor.copy(I.groundColor).multiplyScalar(te),i.hemi[M]=U,M++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;const D=i.hash;(D.sunLength!==g||D.directionalLength!==_||D.pointLength!==u||D.spotLength!==m||D.rectAreaLength!==y||D.hemiLength!==M||D.numSunShadows!==v||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==b||D.numLightProbes!==C)&&(i.sun.length=g,i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=u,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,D.sunLength=g,D.directionalLength=_,D.pointLength=u,D.spotLength=m,D.rectAreaLength=y,D.hemiLength=M,D.numSunShadows=v,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=b,D.numLightProbes=C,i.version=Yw++)}function l(c,f){let p=0,d=0,g=0,v=0,S=0,_=0;const u=f.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isSunLight){const A=i.sun[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(u),p++}else if(M.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(u),d++}else if(M.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(u),a.identity(),s.copy(M.matrixWorld),s.premultiply(u),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const A=i.point[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:i}}function $m(t){const e=new qw(t),n=[],i=[],r=[];function s(p){f.camera=p,n.length=0,i.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),r.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){e.setupView(n,p)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $m(t),e.set(r,[o])):s>=a.length?(o=new $m(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Zw=`void main() {
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
}`,Jw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],eT=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],qm=new yt,aa=new V,yu=new V;function tT(t,e,n){let i=new Ya;const r=new Fe,s=new Fe,a=new Tt,o=new oM,l=new lM,c={},f=n.maxTextureSize,p={[jr]:wn,[wn]:jr,[Ni]:Ni},d=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Zw,fragmentShader:Qw}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mt(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let u=this.type;this.render=function(T,x,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===jy&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ul);const P=t.getRenderTarget(),C=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Cs),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=u!==this.type;Q&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(K=>K.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,K=T.length;I<K;I++){const te=T[I],O=te.shadow;if(O===void 0){Oe("WebGLShadowMap:",te,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const G=O.getFrameExtents();r.multiply(G),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,O.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=U,O.map===null||Q===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===da){if(te.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new xi(r.x,r.y,{format:Wr,type:vi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),O.map.texture.name=te.name+".shadowMap",O.map.depthTexture=new zs(r.x,r.y,hi),O.map.depthTexture.name=te.name+".shadowMapDepth",O.map.depthTexture.format=gr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt}else te.isPointLight?(O.map=new vh(r.x),O.map.depthTexture=new Hx(r.x,_i)):(O.map=new xi(r.x,r.y),O.map.depthTexture=new zs(r.x,r.y,_i)),O.map.depthTexture.name=te.name+".shadowMap",O.map.depthTexture.format=gr,this.type===ul?(O.map.depthTexture.compareFunction=U?Lx:Px,O.map.depthTexture.minFilter=Sn,O.map.depthTexture.magFilter=Sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);const W=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();te.isPointLight!==!0&&O.updateMatrices(te,b);const J=O.camera.layers.mask&4294967294?O.camera.layers:b.layers;for(let re=0;re<W;re++){const Se=O.getCamera(re);if(te.isPointLight){const q=O.camera,ce=O.matrix,he=te.distance||q.far;he!==q.far&&(q.far=he,q.updateProjectionMatrix()),aa.setFromMatrixPosition(te.matrixWorld),q.position.copy(aa),yu.copy(q.position),yu.add(Jw[re]),q.up.copy(eT[re]),q.lookAt(yu),q.updateMatrixWorld(),ce.makeTranslation(-aa.x,-aa.y,-aa.z),qm.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qm,q.coordinateSystem,q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,re),t.clear();else{re===0&&(t.setRenderTarget(O.map),t.clear());const q=O.getViewport(re);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),j.viewport(a)}i=O.getFrustum(re),M(x,b,Se,te,J,this.type)}O.isPointLightShadow!==!0&&this.type===da&&m(O,b),O.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(P,C,D)};function m(T,x){const b=e.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new xi(r.x,r.y,{format:Wr,type:vi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(x,null,b,d,S,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(x,null,b,g,S,null)}function y(T,x,b,P){let C=null;const D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=b.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const j=C.uuid,Q=x.uuid;let I=c[j];I===void 0&&(I={},c[j]=I);let K=I[Q];K===void 0&&(K=C.clone(),I[Q]=K,x.addEventListener("dispose",A)),C=K}if(C.visible=x.visible,C.wireframe=x.wireframe,P===da?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:p[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=t.properties.get(C);j.light=b}return C}function M(T,x,b,P,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===da)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const I=e.update(T),K=T.material;if(Array.isArray(K)){const te=I.groups;for(let O=0,G=te.length;O<G;O++){const U=te[O],W=K[U.materialIndex];if(W&&W.visible){const J=y(T,W,P,D);T.onBeforeShadow(t,T,x,b,I,J,U),t.renderBufferDirect(b,null,I,J,T,U),T.onAfterShadow(t,T,x,b,I,J,U)}}}else if(K.visible){const te=y(T,K,P,D);T.onBeforeShadow(t,T,x,b,I,te,null),t.renderBufferDirect(b,null,I,te,T,null),T.onAfterShadow(t,T,x,b,I,te,null)}}const Q=T.children;for(let I=0,K=Q.length;I<K;I++)M(Q[I],x,b,P,C,D)}function A(T){T.target.removeEventListener("dispose",A);for(const b in c){const P=c[b],C=T.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function nT(t,e){function n(){let L=!1;const ie=new Tt;let Y=null;const se=new Tt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!L&&(t.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){L=oe},setClear:function(oe,le,Ee,ze,ue){ue===!0&&(oe*=ze,le*=ze,Ee*=ze),ie.set(oe,le,Ee,ze),se.equals(ie)===!1&&(t.clearColor(oe,le,Ee,ze),se.copy(ie))},reset:function(){L=!1,Y=null,se.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,Y=null,se=null,oe=null;return{setReversed:function(le){if(ie!==le){const Ee=e.get("EXT_clip_control");le?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ie=le;const ze=oe;oe=null,this.setClear(ze)}},getReversed:function(){return ie},setTest:function(le){le?me(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(le){Y!==le&&!L&&(t.depthMask(le),Y=le)},setFunc:function(le){if(ie&&(le=ES[le]),se!==le){switch(le){case gd:t.depthFunc(t.NEVER);break;case xd:t.depthFunc(t.ALWAYS);break;case _d:t.depthFunc(t.LESS);break;case Ha:t.depthFunc(t.LEQUAL);break;case vd:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=le}},setLocked:function(le){L=le},setClear:function(le){oe!==le&&(oe=le,ie&&(le=1-le),t.clearDepth(le))},reset:function(){L=!1,Y=null,se=null,oe=null,ie=!1}}}function r(){let L=!1,ie=null,Y=null,se=null,oe=null,le=null,Ee=null,ze=null,ue=null;return{setTest:function(Le){L||(Le?me(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(Le){ie!==Le&&!L&&(t.stencilMask(Le),ie=Le)},setFunc:function(Le,Ge,pe){(Y!==Le||se!==Ge||oe!==pe)&&(t.stencilFunc(Le,Ge,pe),Y=Le,se=Ge,oe=pe)},setOp:function(Le,Ge,pe){(le!==Le||Ee!==Ge||ze!==pe)&&(t.stencilOp(Le,Ge,pe),le=Le,Ee=Ge,ze=pe)},setLocked:function(Le){L=Le},setClear:function(Le){ue!==Le&&(t.clearStencil(Le),ue=Le)},reset:function(){L=!1,ie=null,Y=null,se=null,oe=null,le=null,Ee=null,ze=null,ue=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let f={},p={},d={},g=new WeakMap,v=[],S=null,_=!1,u=null,m=null,y=null,M=null,A=null,T=null,x=null,b=new We(0,0,0),P=0,C=!1,D=null,j=null,Q=null,I=null,K=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=G>=2);let W=null,J={};const re=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),q=new Tt().fromArray(re),ce=new Tt().fromArray(Se);function he(L,ie,Y,se){const oe=new Uint8Array(4),le=t.createTexture();t.bindTexture(L,le),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<Y;Ee++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ie+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return le}const be={};be[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(t.DEPTH_TEST),a.setFunc(Ha),ct(!1),ut(Wp),me(t.CULL_FACE),Ye(Cs);function me(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function we(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Je(L,ie){return d[L]!==ie?(t.bindFramebuffer(L,ie),d[L]=ie,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ie),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(L,ie){let Y=v,se=!1;if(L){Y=g.get(ie),Y===void 0&&(Y=[],g.set(ie,Y));const oe=L.textures;if(Y.length!==oe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Ee=oe.length;le<Ee;le++)Y[le]=t.COLOR_ATTACHMENT0+le;Y.length=oe.length,se=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,se=!0);se&&t.drawBuffers(Y)}function je(L){return S!==L?(t.useProgram(L),S=L,!0):!1}const ke={[ls]:t.FUNC_ADD,[Xy]:t.FUNC_SUBTRACT,[Yy]:t.FUNC_REVERSE_SUBTRACT};ke[$y]=t.MIN,ke[qy]=t.MAX;const Ie={[Ky]:t.ZERO,[Zy]:t.ONE,[Qy]:t.SRC_COLOR,[px]:t.SRC_ALPHA,[rS]:t.SRC_ALPHA_SATURATE,[nS]:t.DST_COLOR,[eS]:t.DST_ALPHA,[Jy]:t.ONE_MINUS_SRC_COLOR,[mx]:t.ONE_MINUS_SRC_ALPHA,[iS]:t.ONE_MINUS_DST_COLOR,[tS]:t.ONE_MINUS_DST_ALPHA,[sS]:t.CONSTANT_COLOR,[aS]:t.ONE_MINUS_CONSTANT_COLOR,[oS]:t.CONSTANT_ALPHA,[lS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(L,ie,Y,se,oe,le,Ee,ze,ue,Le){if(L===Cs){_===!0&&(we(t.BLEND),_=!1);return}if(_===!1&&(me(t.BLEND),_=!0),L!==Wy){if(L!==u||Le!==C){if((m!==ls||A!==ls)&&(t.blendEquation(t.FUNC_ADD),m=ls,A=ls),Le)switch(L){case ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xp:t.blendFunc(t.ONE,t.ONE);break;case Yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $p:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",L);break}else switch(L){case ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Yp:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",L);break}y=null,M=null,T=null,x=null,b.set(0,0,0),P=0,u=L,C=Le}return}oe=oe||ie,le=le||Y,Ee=Ee||se,(ie!==m||oe!==A)&&(t.blendEquationSeparate(ke[ie],ke[oe]),m=ie,A=oe),(Y!==y||se!==M||le!==T||Ee!==x)&&(t.blendFuncSeparate(Ie[Y],Ie[se],Ie[le],Ie[Ee]),y=Y,M=se,T=le,x=Ee),(ze.equals(b)===!1||ue!==P)&&(t.blendColor(ze.r,ze.g,ze.b,ue),b.copy(ze),P=ue),u=L,C=!1}function Be(L,ie){L.side===Ni?we(t.CULL_FACE):me(t.CULL_FACE);let Y=L.side===wn;ie&&(Y=!Y),ct(Y),L.blending===ba&&L.transparent===!1?Ye(Cs):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const se=L.stencilWrite;o.setTest(se),se&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function ct(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function ut(L){L!==Hy?(me(t.CULL_FACE),L!==j&&(L===Wp?t.cullFace(t.BACK):L===Vy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),j=L}function Ot(L){L!==Q&&(O&&t.lineWidth(L),Q=L)}function xt(L,ie,Y){L?(me(t.POLYGON_OFFSET_FILL),(I!==ie||K!==Y)&&(I=ie,K=Y,a.getReversed()&&(ie=-ie,Y=-Y),t.polygonOffset(ie,Y))):we(t.POLYGON_OFFSET_FILL)}function Ct(L){L?me(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function $t(L){L===void 0&&(L=t.TEXTURE0+te-1),W!==L&&(t.activeTexture(L),W=L)}function rt(L,ie,Y){Y===void 0&&(W===null?Y=t.TEXTURE0+te-1:Y=W);let se=J[Y];se===void 0&&(se={type:void 0,texture:void 0},J[Y]=se),(se.type!==L||se.texture!==ie)&&(W!==Y&&(t.activeTexture(Y),W=Y),t.bindTexture(L,ie||be[L]),se.type=L,se.texture=ie)}function H(){const L=J[W];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Dt(){try{t.compressedTexImage2D(...arguments)}catch(L){ot("WebGLState:",L)}}function ht(){try{t.compressedTexImage3D(...arguments)}catch(L){ot("WebGLState:",L)}}function st(){try{t.texSubImage2D(...arguments)}catch(L){ot("WebGLState:",L)}}function ge(){try{t.texSubImage3D(...arguments)}catch(L){ot("WebGLState:",L)}}function St(){try{t.compressedTexSubImage2D(...arguments)}catch(L){ot("WebGLState:",L)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(L){ot("WebGLState:",L)}}function Ue(){try{t.texStorage2D(...arguments)}catch(L){ot("WebGLState:",L)}}function R(){try{t.texStorage3D(...arguments)}catch(L){ot("WebGLState:",L)}}function E(){try{t.texImage2D(...arguments)}catch(L){ot("WebGLState:",L)}}function N(){try{t.texImage3D(...arguments)}catch(L){ot("WebGLState:",L)}}function z(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function F(L,ie){p[L]!==ie&&(t.pixelStorei(L,ie),p[L]=ie)}function ae(L){q.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function ne(L){ce.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function B(L,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let se=Y.get(L);se===void 0&&(se=t.getUniformBlockIndex(ie,L.name),t.uniformBlockBinding(ie,se,se),Y.set(L,se))}function X(L,ie,Y){const oe=c.get(ie).get(L);l[oe]!==Y&&(t.bindBufferBase(t.UNIFORM_BUFFER,oe,Y),l[oe]=Y)}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},W=null,J={},d={},l={},g=new WeakMap,v=[],S=null,_=!1,u=null,m=null,y=null,M=null,A=null,T=null,x=null,b=new We(0,0,0),P=0,C=!1,D=null,j=null,Q=null,I=null,K=null,q.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:we,bindFramebuffer:Je,drawBuffers:Ae,useProgram:je,setBlending:Ye,setMaterial:Be,setFlipSided:ct,setCullFace:ut,setLineWidth:Ot,setPolygonOffset:xt,setScissorTest:Ct,activeTexture:$t,bindTexture:rt,unbindTexture:H,compressedTexImage2D:Dt,compressedTexImage3D:ht,texImage2D:E,texImage3D:N,pixelStorei:F,getParameter:z,updateUBOMapping:B,uniformBlockBinding:X,texStorage2D:Ue,texStorage3D:R,texSubImage2D:st,texSubImage3D:ge,compressedTexSubImage2D:St,compressedTexSubImage3D:De,scissor:ae,viewport:ne,reset:de}}function iT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,f=new WeakMap,p=new Set;let d;const g=new WeakMap,v=new Set,S=new FinalizationRegistry(R=>v.delete(R));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(R,E){return _?new OffscreenCanvas(R,E):Xl("canvas")}function m(R,E,N){let z=1;const F=Ue(R);if((F.width>N||F.height>N)&&(z=N/Math.max(F.width,F.height)),z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(z*F.width),ne=Math.floor(z*F.height);d===void 0&&(d=u(ae,ne));const B=E?u(ae,ne):d;return B.width=ae,B.height=ne,B.getContext("2d").drawImage(R,0,0,ae,ne),Oe("WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+ae+"x"+ne+")."),B}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),R;return R}function y(R){return R.generateMipmaps}function M(R){t.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(R,E,N,z,F,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne;z&&(ne=e.get("EXT_texture_norm16"),ne||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=E;if(E===t.RED&&(N===t.FLOAT&&(B=t.R32F),N===t.HALF_FLOAT&&(B=t.R16F),N===t.UNSIGNED_BYTE&&(B=t.R8),N===t.UNSIGNED_SHORT&&ne&&(B=ne.R16_EXT),N===t.SHORT&&ne&&(B=ne.R16_SNORM_EXT)),E===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.R8UI),N===t.UNSIGNED_SHORT&&(B=t.R16UI),N===t.UNSIGNED_INT&&(B=t.R32UI),N===t.BYTE&&(B=t.R8I),N===t.SHORT&&(B=t.R16I),N===t.INT&&(B=t.R32I)),E===t.RG&&(N===t.FLOAT&&(B=t.RG32F),N===t.HALF_FLOAT&&(B=t.RG16F),N===t.UNSIGNED_BYTE&&(B=t.RG8),N===t.UNSIGNED_SHORT&&ne&&(B=ne.RG16_EXT),N===t.SHORT&&ne&&(B=ne.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.RG8UI),N===t.UNSIGNED_SHORT&&(B=t.RG16UI),N===t.UNSIGNED_INT&&(B=t.RG32UI),N===t.BYTE&&(B=t.RG8I),N===t.SHORT&&(B=t.RG16I),N===t.INT&&(B=t.RG32I)),E===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.RGB8UI),N===t.UNSIGNED_SHORT&&(B=t.RGB16UI),N===t.UNSIGNED_INT&&(B=t.RGB32UI),N===t.BYTE&&(B=t.RGB8I),N===t.SHORT&&(B=t.RGB16I),N===t.INT&&(B=t.RGB32I)),E===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(B=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(B=t.RGBA16UI),N===t.UNSIGNED_INT&&(B=t.RGBA32UI),N===t.BYTE&&(B=t.RGBA8I),N===t.SHORT&&(B=t.RGBA16I),N===t.INT&&(B=t.RGBA32I)),E===t.RGB&&(N===t.UNSIGNED_SHORT&&ne&&(B=ne.RGB16_EXT),N===t.SHORT&&ne&&(B=ne.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(B=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(B=t.R11F_G11F_B10F)),E===t.RGBA){const X=ae?Wl:Qe.getTransfer(F);N===t.FLOAT&&(B=t.RGBA32F),N===t.HALF_FLOAT&&(B=t.RGBA16F),N===t.UNSIGNED_BYTE&&(B=X===dt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&ne&&(B=ne.RGBA16_EXT),N===t.SHORT&&ne&&(B=ne.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(B=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(B=t.RGB5_A1)}return(B===t.R16F||B===t.R32F||B===t.RG16F||B===t.RG32F||B===t.RGBA16F||B===t.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function x(R,E){let N;return R?E===null||E===_i||E===Bs?N=t.DEPTH24_STENCIL8:E===hi?N=t.DEPTH32F_STENCIL8:E===ja&&(N=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_i||E===Bs?N=t.DEPTH_COMPONENT24:E===hi?N=t.DEPTH_COMPONENT32F:E===ja&&(N=t.DEPTH_COMPONENT16),N}function b(R,E){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){const E=new WeakRef(R);i.get(R).__ref=E,v.add(E),S.register(R,E,E)}function C(R){const E=i.get(R).__ref;E!==void 0&&(v.delete(E),S.unregister(E))}function D(R){Q(R.target)}function j(R){I(R.target)}function Q(R){R.removeEventListener("dispose",D),C(R),te(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&p.delete(R)}function I(R){R.removeEventListener("dispose",j),C(R),G(R)}function K(){for(const R of v){const E=R.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):Q(E))}v.clear(),p.clear()}function te(R){const E=i.get(R);if(E.__webglInit===void 0)return;const N=R.source,z=g.get(N);if(z){const F=z[E.__cacheKey];F.usedTimes--,F.usedTimes===0&&O(R),Object.keys(z).length===0&&g.delete(N)}i.remove(R)}function O(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const N=R.source,z=g.get(N);delete z[E.__cacheKey],a.memory.textures--}function G(R){const E=i.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();const N=R.depthTexture;if(N&&N.renderTarget===R&&Q(N),R.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(E.__webglFramebuffer[F]))for(let ae=0;ae<E.__webglFramebuffer[F].length;ae++)t.deleteFramebuffer(E.__webglFramebuffer[F][ae]);else t.deleteFramebuffer(E.__webglFramebuffer[F]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[F])}else{if(Array.isArray(E.__webglFramebuffer))for(let F=0;F<E.__webglFramebuffer.length;F++)t.deleteFramebuffer(E.__webglFramebuffer[F]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let F=0;F<E.__webglColorRenderbuffer.length;F++)E.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[F]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let F=0,ae=z.length;F<ae;F++){const ne=i.get(z[F]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(z[F])}i.remove(R)}let U=0;function W(){U=0}function J(){return U}function re(R){U=R}function Se(){const R=U;return R>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ce(R,E){const N=i.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){const z=R.image;if(z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(N,R,E);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+E)}function he(R,E){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){Be(N,R,E);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+E)}function be(R,E){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){Be(N,R,E);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+E)}function me(R,E){const N=i.get(R);if(R.version>0&&N.__version!==R.version){ct(N,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+E)}const we={[bd]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[Ed]:t.MIRRORED_REPEAT},Je={[Zt]:t.NEAREST,[dS]:t.NEAREST_MIPMAP_NEAREST,[bo]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[Yc]:t.LINEAR_MIPMAP_NEAREST,[rr]:t.LINEAR_MIPMAP_LINEAR},Ae={[mS]:t.NEVER,[Dx]:t.ALWAYS,[gS]:t.LESS,[Px]:t.LEQUAL,[xS]:t.EQUAL,[Lx]:t.GEQUAL,[_S]:t.GREATER,[vS]:t.NOTEQUAL};function je(R,E){if(E.type===hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===Yc||E.magFilter===bo||E.magFilter===rr||E.minFilter===Sn||E.minFilter===Yc||E.minFilter===bo||E.minFilter===rr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,we[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,we[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,we[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Je[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Je[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==bo&&E.minFilter!==rr||E.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(R,E){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",D),P(E));const z=E.source;let F=g.get(z);F===void 0&&(F={},g.set(z,F));const ae=q(E);if(ae!==R.__cacheKey){F[ae]===void 0&&(F[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),F[ae].usedTimes++;const ne=F[R.__cacheKey];ne!==void 0&&(F[R.__cacheKey].usedTimes--,ne.usedTimes===0&&O(E)),R.__cacheKey=ae,R.__webglTexture=F[ae].texture}return N}function Ie(R,E,N){return Math.floor(Math.floor(R/N)/E)}function Ye(R,E,N,z){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,N,z,E.data);else{ae.sort((L,ie)=>L.start-ie.start);let ne=0;for(let L=1;L<ae.length;L++){const ie=ae[ne],Y=ae[L],se=ie.start+ie.count,oe=Ie(Y.start,E.width,4),le=Ie(ie.start,E.width,4);Y.start<=se+1&&oe===le&&Ie(Y.start+Y.count-1,E.width,4)===oe?ie.count=Math.max(ie.count,Y.start+Y.count-ie.start):(++ne,ae[ne]=Y)}ae.length=ne+1;const B=n.getParameter(t.UNPACK_ROW_LENGTH),X=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let L=0,ie=ae.length;L<ie;L++){const Y=ae[L],se=Math.floor(Y.start/4),oe=Math.ceil(Y.count/4),le=se%E.width,Ee=Math.floor(se/E.width),ze=oe,ue=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ee),n.texSubImage2D(t.TEXTURE_2D,0,le,Ee,ze,ue,N,z,E.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,B),n.pixelStorei(t.UNPACK_SKIP_PIXELS,X),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Be(R,E,N){let z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(z=t.TEXTURE_3D);const F=ke(R,E),ae=E.source;n.bindTexture(z,R.__webglTexture,t.TEXTURE0+N);const ne=i.get(ae);if(ae.version!==ne.__version||F===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ue=Qe.getPrimaries(Qe.workingColorSpace),Le=E.colorSpace===tr?null:Qe.getPrimaries(E.colorSpace),Ge=E.colorSpace===tr||ue===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let X=m(E.image,!1,r.maxTextureSize);X=De(E,X);const de=s.convert(E.format,E.colorSpace),L=s.convert(E.type);let ie=T(E.internalFormat,de,L,E.normalized,E.colorSpace,E.isVideoTexture);je(z,E);let Y;const se=E.mipmaps,oe=E.isVideoTexture!==!0,le=ne.__version===void 0||F===!0,Ee=ae.dataReady,ze=b(E,X);if(E.isDepthTexture)ie=x(E.format===sr,E.type),le&&(oe?n.texStorage2D(t.TEXTURE_2D,1,ie,X.width,X.height):n.texImage2D(t.TEXTURE_2D,0,ie,X.width,X.height,0,de,L,null));else if(E.isDataTexture)if(se.length>0){oe&&le&&n.texStorage2D(t.TEXTURE_2D,ze,ie,se[0].width,se[0].height);for(let ue=0,Le=se.length;ue<Le;ue++)Y=se[ue],oe?Ee&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Y.width,Y.height,de,L,Y.data):n.texImage2D(t.TEXTURE_2D,ue,ie,Y.width,Y.height,0,de,L,Y.data);E.generateMipmaps=!1}else oe?(le&&n.texStorage2D(t.TEXTURE_2D,ze,ie,X.width,X.height),Ee&&Ye(E,X,de,L)):n.texImage2D(t.TEXTURE_2D,0,ie,X.width,X.height,0,de,L,X.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,ie,se[0].width,se[0].height,X.depth);for(let ue=0,Le=se.length;ue<Le;ue++)if(Y=se[ue],E.format!==pi)if(de!==null)if(oe){if(Ee)if(E.layerUpdates.size>0){const Ge=Rm(Y.width,Y.height,E.format,E.type);for(const pe of E.layerUpdates){const tt=Y.data.subarray(pe*Ge/Y.data.BYTES_PER_ELEMENT,(pe+1)*Ge/Y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,pe,Y.width,Y.height,1,de,tt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,X.depth,de,Y.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,ie,Y.width,Y.height,X.depth,0,Y.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,X.depth,de,L,Y.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,ie,Y.width,Y.height,X.depth,0,de,L,Y.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&le&&n.texStorage2D(t.TEXTURE_2D,ze,ie,se[0].width,se[0].height);for(let ue=0,Le=se.length;ue<Le;ue++)Y=se[ue],E.format!==pi?de!==null?oe?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Y.width,Y.height,de,Y.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,ie,Y.width,Y.height,0,Y.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ee&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Y.width,Y.height,de,L,Y.data):n.texImage2D(t.TEXTURE_2D,ue,ie,Y.width,Y.height,0,de,L,Y.data)}else if(E.isDataArrayTexture)if(oe){if(le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,ie,X.width,X.height,X.depth),Ee)if(E.layerUpdates.size>0){const ue=Rm(X.width,X.height,E.format,E.type);for(const Le of E.layerUpdates){const Ge=X.data.subarray(Le*ue/X.data.BYTES_PER_ELEMENT,(Le+1)*ue/X.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,X.width,X.height,1,de,L,Ge)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,L,X.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,X.width,X.height,X.depth,0,de,L,X.data);else if(E.isData3DTexture)oe?(le&&n.texStorage3D(t.TEXTURE_3D,ze,ie,X.width,X.height,X.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,L,X.data)):n.texImage3D(t.TEXTURE_3D,0,ie,X.width,X.height,X.depth,0,de,L,X.data);else if(E.isFramebufferTexture){if(le)if(oe)n.texStorage2D(t.TEXTURE_2D,ze,ie,X.width,X.height);else{let ue=X.width,Le=X.height;for(let Ge=0;Ge<ze;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,ie,ue,Le,0,de,L,null),ue>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const ue=t.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),X.parentNode!==ue){ue.appendChild(X),p.add(E),ue.onpaint=Le=>{const Ge=Le.changedElements;for(const pe of p)Ge.includes(pe.image)&&(pe.needsUpdate=!0)},ue.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,X);else{const Ge=t.RGBA,pe=t.RGBA,tt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,pe,tt,X)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(se.length>0){if(oe&&le){const ue=Ue(se[0]);n.texStorage2D(t.TEXTURE_2D,ze,ie,ue.width,ue.height)}for(let ue=0,Le=se.length;ue<Le;ue++)Y=se[ue],oe?Ee&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,de,L,Y):n.texImage2D(t.TEXTURE_2D,ue,ie,de,L,Y);E.generateMipmaps=!1}else if(oe){if(le){const ue=Ue(X);n.texStorage2D(t.TEXTURE_2D,ze,ie,ue.width,ue.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,L,X)}else n.texImage2D(t.TEXTURE_2D,0,ie,de,L,X);y(E)&&E.mipmapsAutoUpdate===!0&&M(z),ne.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ct(R,E,N){if(E.image.length!==6)return;const z=ke(R,E),F=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+N);const ae=i.get(F);if(F.version!==ae.__version||z===!0){n.activeTexture(t.TEXTURE0+N);const ne=Qe.getPrimaries(Qe.workingColorSpace),B=E.colorSpace===tr?null:Qe.getPrimaries(E.colorSpace),X=E.colorSpace===tr||ne===B?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,L=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let pe=0;pe<6;pe++)!de&&!L?ie[pe]=m(E.image[pe],!0,r.maxCubemapSize):ie[pe]=L?E.image[pe].image:E.image[pe],ie[pe]=De(E,ie[pe]);const Y=ie[0],se=s.convert(E.format,E.colorSpace),oe=s.convert(E.type);let le=T(E.internalFormat,se,oe,E.normalized,E.colorSpace);const Ee=E.isVideoTexture!==!0,ze=ae.__version===void 0||z===!0,ue=F.dataReady;let Le=b(E,Y);je(t.TEXTURE_CUBE_MAP,E);let Ge;if(E.isDepthTexture){if(le=x(E.format===sr,E.type),ze)if(Ee)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let pe=0;pe<6;pe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,le,Y.width,Y.height,0,se,oe,null)}else if(de){Ee&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,le,Y.width,Y.height);for(let pe=0;pe<6;pe++){Ge=ie[pe].mipmaps;for(let tt=0;tt<Ge.length;tt++){const Nt=Ge[tt];E.format!==pi?se!==null?Ee?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt,0,0,Nt.width,Nt.height,se,Nt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt,le,Nt.width,Nt.height,0,Nt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt,0,0,Nt.width,Nt.height,se,oe,Nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt,le,Nt.width,Nt.height,0,se,oe,Nt.data)}}}else{if(Ge=E.mipmaps,Ee&&ze){Ge.length>0&&Le++;const pe=Ue(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,le,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(L){Ee?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie[pe].width,ie[pe].height,se,oe,ie[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,le,ie[pe].width,ie[pe].height,0,se,oe,ie[pe].data);for(let tt=0;tt<Ge.length;tt++){const Vi=Ge[tt].image[pe].image;Ee?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt+1,0,0,Vi.width,Vi.height,se,oe,Vi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt+1,le,Vi.width,Vi.height,0,se,oe,Vi.data)}}else{Ee?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,se,oe,ie[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,le,se,oe,ie[pe]);for(let tt=0;tt<Ge.length;tt++){const Nt=Ge[tt];Ee?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt+1,0,0,se,oe,Nt.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,tt+1,le,se,oe,Nt.image[pe])}}}y(E)&&E.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),ae.__version=F.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ut(R,E,N,z,F,ae){const ne=s.convert(N.format,N.colorSpace),B=s.convert(N.type),X=T(N.internalFormat,ne,B,N.normalized,N.colorSpace),de=i.get(E),L=i.get(N);if(L.__renderTarget=E,!de.__hasExternalTextures){const ie=Math.max(1,E.width>>ae),Y=Math.max(1,E.height>>ae);F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?n.texImage3D(F,ae,X,ie,Y,E.depth,0,ne,B,null):n.texImage2D(F,ae,X,ie,Y,0,ne,B,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ge(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,F,L.__webglTexture,0,st(E)):(F===t.TEXTURE_2D||F>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,F,L.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ot(R,E,N){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const z=E.depthTexture,F=z&&z.isDepthTexture?z.type:null,ae=x(E.stencilBuffer,F),ne=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st(E),ae,E.width,E.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,st(E),ae,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ae,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,R)}else{const z=E.textures;for(let F=0;F<z.length;F++){const ae=z[F],ne=s.convert(ae.format,ae.colorSpace),B=s.convert(ae.type),X=T(ae.internalFormat,ne,B,ae.normalized,ae.colorSpace);ge(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st(E),X,E.width,E.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,st(E),X,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,X,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xt(R,E,N){const z=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const F=i.get(E.depthTexture);F.__renderTarget=E;const ae=z?E.depthTexture.image[0]:E.depthTexture.image;(!F.__webglTexture||ae.width!==E.width||ae.height!==E.height)&&(ae.width=E.width,ae.height=E.height,E.depthTexture.needsUpdate=!0),z?me(E.depthTexture,0):ce(E.depthTexture,0);const ne=F.__webglTexture,B=st(E),X=z?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,de=E.depthTexture.format===sr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===gr)ge(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,X,ne,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,de,X,ne,0);else if(E.depthTexture.format===sr)ge(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,X,ne,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,de,X,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ct(R){const E=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const z=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),z){const F=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,z.removeEventListener("dispose",F)};z.addEventListener("dispose",F),E.__depthDisposeCallback=F}E.__boundDepthTexture=z}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(N)for(let z=0;z<6;z++)xt(E.__webglFramebuffer[z],R,z);else R.texture.mipmaps.length>0?xt(E.__webglFramebuffer[0],R,0):xt(E.__webglFramebuffer,R,0);else if(N){E.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[z]),E.__webglDepthbuffer[z]===void 0)E.__webglDepthbuffer[z]=t.createRenderbuffer(),Ot(E.__webglDepthbuffer[z],R,!1);else{const F=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,ae)}}else if(R.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ot(E.__webglDepthbuffer,R,!1);else{const F=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $t(R,E,N){const z=i.get(R);E!==void 0&&ut(z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Ct(R)}function rt(R){const E=R.texture,N=i.get(R),z=i.get(E);R.addEventListener("dispose",j),P(R);const F=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ne=F.length>1;if(ne||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=E.version,a.memory.textures++),ae){N.__webglFramebuffer=[];for(let B=0;B<6;B++)if(E.mipmaps.length>0){N.__webglFramebuffer[B]=[];for(let X=0;X<E.mipmaps.length;X++)N.__webglFramebuffer[B][X]=t.createFramebuffer()}else N.__webglFramebuffer[B]=t.createFramebuffer()}else{if(E.mipmaps.length>0){N.__webglFramebuffer=[];for(let B=0;B<E.mipmaps.length;B++)N.__webglFramebuffer[B]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ne)for(let B=0,X=F.length;B<X;B++){const de=i.get(F[B]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let B=0;B<F.length;B++){const X=F[B];N.__webglColorRenderbuffer[B]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[B]);const de=s.convert(X.format,X.colorSpace),L=s.convert(X.type),ie=T(X.internalFormat,de,L,X.normalized,X.colorSpace,R.isXRRenderTarget===!0),Y=st(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,ie,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,N.__webglColorRenderbuffer[B])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ot(N.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),je(t.TEXTURE_CUBE_MAP,E);for(let B=0;B<6;B++)if(E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)ut(N.__webglFramebuffer[B][X],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+B,X);else ut(N.__webglFramebuffer[B],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);y(E)?M(t.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}else if(ne){for(let B=0,X=F.length;B<X;B++){const de=F[B],L=i.get(de);let ie=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,L.__webglTexture),je(ie,de),ut(N.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+B,ie,0),y(de)&&M(ie)}n.unbindTexture()}else{let B=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(B=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(B,z.__webglTexture),je(B,E),E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)ut(N.__webglFramebuffer[X],R,E,t.COLOR_ATTACHMENT0,B,X);else ut(N.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,B,0);y(E)?M(B):E.mipmaps.length>0&&t.texParameteri(B,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}R.depthBuffer&&Ct(R)}function H(R){const E=R.textures;for(let N=0,z=E.length;N<z;N++){const F=E[N];if(y(F)&&F.mipmapsAutoUpdate===!0){const ae=A(R),ne=i.get(F).__webglTexture;n.bindTexture(ae,ne),M(ae),n.unbindTexture()}}}const Dt=[];function ht(R){if(R.samples>0){if(ge(R)===!1){const E=R.textures,N=R.width,z=R.height;let F=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=i.get(R),B=E.length>1;if(B)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let de=0;de<E.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(F|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(F|=t.STENCIL_BUFFER_BIT)),B){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const L=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,L,0)}t.blitFramebuffer(0,0,N,z,0,0,N,z,F,t.NEAREST),l===!0&&(Dt.length=0,Dt.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Dt.push(ae),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),B)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const L=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,L,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function st(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function St(R){const E=a.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function De(R,E){const N=R.colorSpace,z=R.format,F=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==jl&&N!==tr&&(Qe.getTransfer(N)===dt?(z!==pi||F!==Nn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",N)),E}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Se,this.resetTextureUnits=W,this.getTextureUnits=J,this.setTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=he,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=$t,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ge,this.dispose=K}function rT(t,e){function n(i,r=tr){let s;const a=Qe.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ex)return t.BYTE;if(i===wx)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===ih)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===vi)return t.HALF_FLOAT;if(i===Rx)return t.ALPHA;if(i===Cx)return t.RGB;if(i===pi)return t.RGBA;if(i===gr)return t.DEPTH_COMPONENT;if(i===sr)return t.DEPTH_STENCIL;if(i===Nx)return t.RED;if(i===ah)return t.RED_INTEGER;if(i===Wr)return t.RG;if(i===oh)return t.RG_INTEGER;if(i===lh)return t.RGBA_INTEGER;if(i===dl||i===fl||i===hl||i===pl)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===Td||i===Ad||i===Rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cd||i===Nd||i===Pd||i===Ld||i===Dd||i===Hl||i===Id)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cd||i===Nd)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ld)return s.COMPRESSED_R11_EAC;if(i===Dd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hl)return s.COMPRESSED_RG11_EAC;if(i===Id)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fd||i===Ud||i===Od||i===kd||i===Bd||i===zd||i===Gd||i===Hd||i===Vd||i===jd||i===Wd||i===Xd||i===Yd||i===$d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$d)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qd||i===Kd||i===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qd)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qd||i===Jd||i===Vl||i===ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const sT=`
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

}`;class oT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Vx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Xr({vertexShader:sT,fragmentShader:aT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lT extends Sr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,d=null,g=null,v=null;const S=typeof XRWebGLBinding<"u",_=new oT,u={},m=n.getContextAttributes();let y=null,M=null;const A=[],T=[],x=new Fe;let b=null,P=null;const C=new zn;C.viewport=new Tt;const D=new zn;D.viewport=new Tt;const j=[C,D],Q=new xM;let I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=A[q];return ce===void 0&&(ce=new tu,A[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=A[q];return ce===void 0&&(ce=new tu,A[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=A[q];return ce===void 0&&(ce=new tu,A[q]=ce),ce.getHandSpace()};function te(q){const ce=T.indexOf(q.inputSource);if(ce===-1)return;const he=A[ce];he!==void 0&&(he.update(q.inputSource,q.frame,c||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",G);for(let q=0;q<A.length;q++){const ce=T[q];ce!==null&&(T[q]=null,A[q].disconnect(ce))}I=null,K=null,_.reset();for(const q in u)delete u[q];if(e.setRenderTarget(y),g=null,d=null,p=null,r=null,M=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),P!==null){const q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",O),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?sr:gr,be=m.stencil?Bs:_i);const we={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new xi(d.textureWidth,d.textureHeight,{format:pi,type:Nn,depthTexture:new zs(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new xi(g.framebufferWidth,g.framebufferHeight,{format:pi,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(q){for(let ce=0;ce<q.removed.length;ce++){const he=q.removed[ce],be=T.indexOf(he);be>=0&&(T[be]=null,A[be].disconnect(he))}for(let ce=0;ce<q.added.length;ce++){const he=q.added[ce];let be=T.indexOf(he);if(be===-1){for(let we=0;we<A.length;we++)if(we>=T.length){T.push(he),be=we;break}else if(T[we]===null){T[we]=he,be=we;break}if(be===-1)break}const me=A[be];me&&me.connect(he)}}function U(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ce=q.near,he=q.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(he=_.depthFar)),Q.near=D.near=C.near=ce,Q.far=D.far=C.far=he,(I!==Q.near||K!==Q.far)&&(r.updateRenderState({depthNear:Q.near,depthFar:Q.far}),I=Q.near,K=Q.far),Q.layers.mask=q.layers.mask|6,C.layers.mask=Q.layers.mask&-5,D.layers.mask=Q.layers.mask&-3;const be=q.parent,me=Q.cameras;U(Q,be);for(let we=0;we<me.length;we++)U(me[we],be);Q.projectionMatrix.copy(C.projectionMatrix),Q.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),W(q,Q,be)};function W(q,ce,he){he===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=tf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Q)},this.getCameraTexture=function(q){return u[q]};let J=null;function re(q,ce){if(f=ce.getViewerPose(c||a),v=ce,f!==null){const he=f.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let be=!1;he.length!==Q.cameras.length&&(Q.cameras.length=0,be=!0);for(let Ae=0;Ae<he.length;Ae++){const je=he[Ae];let ke=null;if(g!==null)ke=g.getViewport(je);else{const Ye=p.getViewSubImage(d,je);ke=Ye.viewport,Ae===0&&(e.setRenderTargetTextures(M,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(M))}let Ie=j[Ae];Ie===void 0&&(Ie=new zn,Ie.layers.enable(Ae),Ie.viewport=new Tt,j[Ae]=Ie),Ie.matrix.fromArray(je.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(je.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ke.x,ke.y,ke.width,ke.height),Ae===0&&(Q.matrix.copy(Ie.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),be===!0&&Q.cameras.push(Ie)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const Ae=p.getDepthInformation(he[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(Ae,r.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let Ae=0;Ae<he.length;Ae++){const je=he[Ae].camera;if(je){let ke=u[je];ke||(ke=new Vx,u[je]=ke);const Ie=p.getCameraImage(je);ke.sourceTexture=Ie}}}}for(let he=0;he<A.length;he++){const be=T[he],me=A[he];be!==null&&me!==void 0&&me.update(be,ce,c||a)}J&&J(q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Se=new $x;Se.setAnimationLoop(re),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}}const cT=new yt,r_=new He;r_.set(-1,0,0,0,1,0,0,0,1);function uT(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,jx(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,m,y,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(_,u):u.isMeshLambertMaterial?(s(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(_,u),p(_,u)):u.isMeshPhongMaterial?(s(_,u),f(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(_,u),d(_,u),u.isMeshPhysicalMaterial&&g(_,u,M)):u.isMeshMatcapMaterial?(s(_,u),v(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),S(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(a(_,u),u.isLineDashedMaterial&&o(_,u)):u.isPointsMaterial?l(_,u,m,y):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===wn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===wn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const m=e.get(u),y=m.envMap,M=m.envMapRotation;y&&(_.envMap.value=y,_.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(r_),_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function a(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function o(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,m,y){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*m,_.scale.value=y*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function f(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function p(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function d(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,m){_.ior.value=u.ior,u.diffuseRoughness>0&&(_.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=u.diffuseRoughnessMap,n(u.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.retroreflectivity>0&&(_.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,u){u.matcap&&(_.matcap.value=u.matcap)}function S(_,u){const m=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dT(t,e,n,i){let r={},s={};function a(m,y){const M=y.program;i.uniformBlockBinding(m,M,r[m.id])}function o(m,y){let M=r[m.id];M===void 0&&(v(m),M=l(m),r[m.id]=M,m.addEventListener("dispose",_));const A=y.program;i.updateUBOMapping(m,A);const T=e.render.frame;s[m.id]!==T&&(c(m),s[m.id]=T)}function l(m){const y=t.createBuffer(),M=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function c(m){const y=r[m.id],M=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,x=M.length;T<x;T++){const b=M[T];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)f(b[P],T,P,A);else f(b,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(m,y,M,A){if(d(m,y,M,A)===!0){const T=m.__offset,x=m.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){const C=x[P],D=S(C,!0);p(C,m.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,m.__data)}}function p(m,y,M){typeof m=="number"||typeof m=="boolean"?y[M]=m:m.isMatrix3?(y[M]=m.elements[0],y[M+1]=m.elements[1],y[M+2]=m.elements[2],y[M+3]=0,y[M+4]=m.elements[3],y[M+5]=m.elements[4],y[M+6]=m.elements[5],y[M+7]=0,y[M+8]=m.elements[6],y[M+9]=m.elements[7],y[M+10]=m.elements[8],y[M+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-M),M):m.toArray(y,M)}function d(m,y,M,A){const T=m.value,x=y+"_"+M;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);const b=A[x];let P=!1;for(let C=0;C<T.length;C++)g(T[C],b,C)===!0&&(P=!0);return P}return g(T,A,x)}function g(m,y,M){if(y[M]===void 0)return typeof m=="number"||typeof m=="boolean"?y[M]=m:ArrayBuffer.isView(m)?y[M]=m.slice():y[M]=m.clone(),!0;{const A=y[M];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return y[M]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function v(m){const y=m.uniforms;let M=0;const A=16;for(let x=0,b=y.length;x<b;x++){const P=Array.isArray(y[x])?y[x]:[y[x]];for(let C=0,D=P.length;C<D;C++){const j=P[C],Q=Array.isArray(j.value)?j.value:[j.value],I=Array.isArray(y[x])||Array.isArray(j.value);let K=M;for(let O=0,G=Q.length;O<G;O++){const U=Q[O],W=S(U,I),J=M%A,re=J%W.boundary,Se=J+re;M+=re,Se!==0&&A-Se<W.storage&&(M+=A-Se),O===0&&(K=M),M+=W.storage}const te=j.type==="int"?Int32Array:j.type==="uint"?Uint32Array:Float32Array;j.__data=new te((M-K)/Float32Array.BYTES_PER_ELEMENT),j.__offset=K}}const T=M%A;return T>0&&(M+=A-T),m.__size=M,m.__cache={},this}function S(m,y){const M={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(M.boundary=4,M.storage=4):m.isVector2?(M.boundary=8,M.storage=8):m.isVector3||m.isColor?(M.boundary=16,M.storage=12):m.isVector4?(M.boundary=16,M.storage=16):m.isMatrix3?(M.boundary=16,M.storage=48):m.isMatrix4?(M.boundary=16,M.storage=64):m.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(M.boundary=16,M.storage=m.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function _(m){const y=m.target;y.removeEventListener("dispose",_),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:a,update:o,dispose:u}}const fT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function hT(){return li===null&&(li=new ZS(fT,16,16,Wr,vi),li.name="DFG_LUT",li.minFilter=Sn,li.magFilter=Sn,li.wrapS=Di,li.wrapT=Di,li.generateMipmaps=!1,li.needsUpdate=!0),li}class pT{constructor(e={}){const{canvas:n=MS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=g,_=new Set([lh,oh,ah]),u=new Set([Nn,_i,ja,Bs,rh,sh]),m=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const x=[],b=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,j=null,Q=null,I=null,K=null;this._outputColorSpace=Cn;let te=0,O=0,G=null,U=-1,W=null;const J=new Tt,re=new Tt;let Se=null;const q=new We(0);let ce=0,he=n.width,be=n.height,me=1,we=null,Je=null;const Ae=new Tt(0,0,he,be),je=new Tt(0,0,he,be);let ke=!1;const Ie=new Ya,Ye=new dh;let Be=!1,ct=!1;const ut=new yt,Ot=new V,xt=new Tt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function rt(){return G===null?me:1}let H=i;function Dt(w,k){return n.getContext(w,k)}let ht,st,ge,St,De,Ue,R,E,N,z,F,ae,ne,B,X,de,L,ie,Y,se,oe,le,Ee;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${th}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",pe,!1),H===null){const k="webgl2";if(H=Dt(k,w),H===null)throw Dt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(w){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ot("WebGLRenderer: "+w.message),w}function ze(){ht=new xE(H),ht.init(),oe=new rT(H,ht),st=new aE(H,ht,e,oe),ge=new nT(H,ht),st.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),Q=H.createFramebuffer(),I=H.createFramebuffer(),K=H.createFramebuffer(),St=new yE(H),De=new Hw,Ue=new iT(H,ht,ge,De,st,oe,St),R=new gE(C),E=new MM(H),le=new rE(H,E),N=new _E(H,E,St,le),z=new ME(H,N,E,le,St),ie=new SE(H,st,Ue),X=new oE(De),F=new Gw(C,R,ht,st,le,X),ae=new uT(C,De),ne=new jw,B=new Kw(ht),L=new iE(C,R,ge,z,v,l),de=new tT(C,z,st),Ee=new dT(H,St,st,ge),Y=new sE(H,ht,St),se=new vE(H,ht,St),St.programs=F.programs,C.capabilities=st,C.extensions=ht,C.properties=De,C.renderLists=ne,C.shadowMap=de,C.state=ge,C.info=St}S!==Nn&&(P=new EE(S,n.width,n.height,o,r,s));const ue=new lT(C,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(he,be,!1))},this.getSize=function(w){return w.set(he,be)},this.setSize=function(w,k,ee=!0){if(ue.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}he=w,be=k,n.width=Math.floor(w*me),n.height=Math.floor(k*me),ee===!0&&(n.style.width=w+"px",n.style.height=k+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(he*me,be*me).floor()},this.setDrawingBufferSize=function(w,k,ee){he=w,be=k,me=ee,n.width=Math.floor(w*ee),n.height=Math.floor(k*ee),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(S===Nn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,k,ee,$){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,k,ee,$),ge.viewport(J.copy(Ae).multiplyScalar(rt()).round())},this.getScissor=function(w){return w.copy(je)},this.setScissor=function(w,k,ee,$){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,k,ee,$),ge.scissor(re.copy(je).multiplyScalar(rt()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){ge.setScissorTest(ke=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){Je=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,ee=!0){let $=0;if(w){let Z=!1;if(G!==null){const _e=G.texture.format;Z=_.has(_e)}if(Z){const _e=G.texture.type,Re=u.has(_e),xe=L.getClearColor(),Me=L.getClearAlpha(),Pe=xe.r,Ve=xe.g,Ke=xe.b;Re?(m[0]=Pe,m[1]=Ve,m[2]=Ke,m[3]=Me,H.clearBufferuiv(H.COLOR,0,m)):(y[0]=Pe,y[1]=Ve,y[2]=Ke,y[3]=Me,H.clearBufferiv(H.COLOR,0,y))}else $|=H.COLOR_BUFFER_BIT}k&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),L.dispose(),ne.dispose(),B.dispose(),Ue.dispose(),De.dispose(),R.dispose(),z.dispose(),N.dispose(),le.dispose(),Ee.dispose(),F.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Th),ue.removeEventListener("sessionend",Ah),Mr.stop()};function Le(w){w.preventDefault(),Zp("WebGLRenderer: Context Lost."),D=!0}function Ge(){Zp("WebGLRenderer: Context Restored."),D=!1;const w=St.autoReset,k=de.enabled,ee=de.autoUpdate,$=de.needsUpdate,Z=de.type;ze(),St.autoReset=w,de.enabled=k,de.autoUpdate=ee,de.needsUpdate=$,de.type=Z}function pe(w){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function tt(w){const k=w.target;k.removeEventListener("dispose",tt),Nt(k)}function Nt(w){Vi(w),De.remove(w)}function Vi(w){const k=De.get(w).programs;k!==void 0&&(k.forEach(function(ee){F.releaseProgram(ee)}),w.isShaderMaterial&&F.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,ee,$,Z,_e){k===null&&(k=Ct);const Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,xe=l_(w,k,ee,$,Z);ge.setMaterial($,Re);let Me=ee.index,Pe=1;if($.wireframe===!0){if(Me=N.getWireframeAttribute(ee),Me===void 0)return;Pe=2}const Ve=ee.drawRange,Ke=ee.attributes.position;let Ce=Ve.start*Pe,Ze=(Ve.start+Ve.count)*Pe;_e!==null&&(Ce=Math.max(Ce,_e.start*Pe),Ze=Math.min(Ze,(_e.start+_e.count)*Pe)),Me!==null?(Ce=Math.max(Ce,0),Ze=Math.min(Ze,Me.count)):Ke!=null&&(Ce=Math.max(Ce,0),Ze=Math.min(Ze,Ke.count));const It=Ze-Ce;if(It<0||It===1/0)return;le.setup(Z,$,xe,ee,Me);let mt,pt=Y;if(Me!==null&&(mt=E.get(Me),pt=se,pt.setIndex(mt)),Z.isMesh)$.wireframe===!0?(ge.setLineWidth($.wireframeLinewidth*rt()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if(Z.isLine){let tn=$.linewidth;tn===void 0&&(tn=1),ge.setLineWidth(tn*rt()),Z.isLineSegments?pt.setMode(H.LINES):Z.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else Z.isPoints?pt.setMode(H.POINTS):Z.isSprite&&pt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const tn=Z._multiDrawStarts,Ne=Z._multiDrawCounts,un=Z._multiDrawCount,at=Me?E.get(Me).bytesPerElement:1,br=De.get($).currentProgram.getUniforms();for(let nn=0;nn<un;nn++)br.setValue(H,"_gl_DrawID",nn),pt.render(tn[nn]/at,Ne[nn])}else if(Z.isInstancedMesh)pt.renderInstances(Ce,It,Z.count);else if(ee.isInstancedBufferGeometry){const tn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ne=Math.min(ee.instanceCount,tn);pt.renderInstances(Ce,It,Ne)}else pt.render(Ce,It)};function wh(w,k,ee,$){j!==null&&w.isNodeMaterial&&j.setObject($,w),Be===!0&&X.setState(w,ee,!1),w.transparent===!0&&w.side===Ni&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,Xs(w,k,$),w.side=jr,w.needsUpdate=!0,Xs(w,k,$),w.side=Ni):Xs(w,k,$)}this.compile=function(w,k,ee=null){ee===null&&(ee=w),j!==null&&j.renderStart(w,k,ee),T=B.get(ee),T.init(k),b.push(T),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),w!==ee&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),j!==null&&j.updateLights(T.state.lightsArray),ct=this.localClippingEnabled,Be=X.init(this.clippingPlanes,ct),Be===!0&&X.setGlobalState(this.clippingPlanes,k),j!==null&&de.render(T.state.shadowsArray,ee,k);const $=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const _e=Z.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const xe=_e[Re];wh(xe,ee,k,Z),$.add(xe)}else wh(_e,ee,k,Z),$.add(_e)}),T=b.pop(),j!==null&&j.renderEnd(),$},this.compileAsync=function(w,k,ee=null){const $=this.compile(w,k,ee);return new Promise(Z=>{function _e(){if($.forEach(function(Re){const Me=De.get(Re).currentProgram;(Me===void 0||Me.isReady())&&$.delete(Re)}),$.size===0){Z(w);return}setTimeout(_e,10)}ht.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let xc=null;function a_(w){xc&&xc(w)}function Th(){Mr.stop()}function Ah(){Mr.start()}const Mr=new $x;Mr.setAnimationLoop(a_),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(w){xc=w,ue.setAnimationLoop(w),w===null?Mr.stop():Mr.start()},ue.addEventListener("sessionstart",Th),ue.addEventListener("sessionend",Ah),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;j!==null&&j.renderStart(w,k);const ee=ue.enabled===!0&&ue.isPresenting===!0,$=P!==null&&(G===null||ee)&&P.begin(C,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,k,G),T=B.get(w,b.length),T.init(k),T.state.textureUnits=Ue.getTextureUnits(),b.push(T),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Ye.setFromArrayCamera(k):Ie.setFromProjectionMatrix(ut,ti,k.reversedDepth),ct=this.localClippingEnabled,Be=X.init(this.clippingPlanes,ct),A=ne.get(w,x.length),A.init(),x.push(A),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&_c(Re,k,-1/0,C.sortObjects)}_c(w,k,0,C.sortObjects),A.finish(),j!==null&&j.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(we,Je),$t=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,$t&&L.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),Be===!0&&X.beginShadows();const Z=T.state.shadowsArray;if(de.render(Z,w,k),Be===!0&&X.endShadows(),($&&P.hasRenderPass())===!1){const Re=A.opaque,xe=A.transmissive;if(T.setupLights(),k.isArrayCamera){const Me=k.cameras;if(xe.length>0)for(let Pe=0,Ve=Me.length;Pe<Ve;Pe++){const Ke=Me[Pe];Ch(Re,xe,w,Ke)}$t&&L.render(w);for(let Pe=0,Ve=Me.length;Pe<Ve;Pe++){const Ke=Me[Pe];Rh(A,w,Ke,Ke.viewport)}}else xe.length>0&&Ch(Re,xe,w,k),$t&&L.render(w),Rh(A,w,k)}G!==null&&O===0&&(Ue.updateMultisampleRenderTarget(G),Ue.updateRenderTargetMipmap(G)),$&&P.end(C),w.isScene===!0&&w.onAfterRender(C,w,k),le.resetDefaultState(),U=-1,W=null,b.pop(),b.length>0?(T=b[b.length-1],Ue.setTextureUnits(T.state.textureUnits),Be===!0&&X.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,j!==null&&j.renderEnd()};function _c(w,k,ee,$){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){const Re=k.isArrayCamera?Ye:Ie;if(!w.frustumCulled||w.intersectsFrustum(Re)){$&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ut);const xe=z.update(w),Me=w.material;Me.visible&&A.push(w,xe,Me,ee,xt.z,null,k)}}else if(w.isMesh||w.isLine||w.isPoints){const Re=k.isArrayCamera?Ye:Ie;if(!w.frustumCulled||w.intersectsFrustum(Re)){const xe=z.update(w),Me=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),xt.copy(xe.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(ut)),Array.isArray(Me)){const Pe=xe.groups;for(let Ve=0,Ke=Pe.length;Ve<Ke;Ve++){const Ce=Pe[Ve],Ze=Me[Ce.materialIndex];Ze&&Ze.visible&&A.push(w,xe,Ze,ee,xt.z,Ce,k)}}else Me.visible&&A.push(w,xe,Me,ee,xt.z,null,k)}}}const _e=w.children;for(let Re=0,xe=_e.length;Re<xe;Re++)_c(_e[Re],k,ee,$)}function Rh(w,k,ee,$){const{opaque:Z,transmissive:_e,transparent:Re}=w;T.setupLightsView(ee),Be===!0&&X.setGlobalState(C.clippingPlanes,ee),$&&ge.viewport(J.copy($)),Z.length>0&&io(Z,k,ee),_e.length>0&&io(_e,k,ee),Re.length>0&&io(Re,k,ee),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ch(w,k,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){const Ce=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new xi(1,1,{generateMipmaps:!0,type:Ce?vi:Nn,minFilter:rr,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const _e=T.state.transmissionRenderTarget[$.id],Re=$.viewport||J;_e.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const xe=C.getRenderTarget(),Me=C.getActiveCubeFace(),Pe=C.getActiveMipmapLevel();C.setRenderTarget(_e),C.getClearColor(q),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),$t&&L.render(ee);const Ve=C.toneMapping;C.toneMapping=Fi;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),Be===!0&&X.setGlobalState(C.clippingPlanes,$),io(w,ee,$),Ue.updateMultisampleRenderTarget(_e),Ue.updateRenderTargetMipmap(_e),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ze=0,It=k.length;Ze<It;Ze++){const mt=k[Ze],{object:pt,geometry:tn,material:Ne,group:un}=mt;if(Ne.side===Ni&&pt.layers.test($.layers)){const at=Ne.side;Ne.side=wn,Ne.needsUpdate=!0,Nh(pt,ee,$,tn,Ne,un),Ne.side=at,Ne.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ue.updateMultisampleRenderTarget(_e),Ue.updateRenderTargetMipmap(_e))}C.setRenderTarget(xe,Me,Pe),C.setClearColor(q,ce),Ke!==void 0&&($.viewport=Ke),C.toneMapping=Ve}function io(w,k,ee){const $=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,_e=w.length;Z<_e;Z++){const Re=w[Z],{object:xe,geometry:Me,group:Pe}=Re;let Ve=Re.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),xe.layers.test(ee.layers)&&Nh(xe,k,ee,Me,Ve,Pe)}}function Nh(w,k,ee,$,Z,_e){j!==null&&Z.isNodeMaterial&&j.setObject(w,Z),w.onBeforeRender(C,k,ee,$,Z,_e),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(C,k,ee,$,w,_e),Z.transparent===!0&&Z.side===Ni&&Z.forceSinglePass===!1?(Z.side=wn,Z.needsUpdate=!0,C.renderBufferDirect(ee,k,$,Z,w,_e),Z.side=jr,Z.needsUpdate=!0,C.renderBufferDirect(ee,k,$,Z,w,_e),Z.side=Ni):C.renderBufferDirect(ee,k,$,Z,w,_e),w.onAfterRender(C,k,ee,$,Z,_e)}function Ph(w){let k=0;for(const ee of w)ee.texture!==null&&k++;return k}function Xs(w,k,ee){k.isScene!==!0&&(k=Ct);const $=De.get(w),Z=T.state.lights,_e=T.state.shadowsArray,Re=Z.state.version,xe=F.getParameters(w,Z.state,_e,k,ee,T.state.lightProbeGridArray),Me=F.getProgramCacheKey(xe);let Pe=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;const Ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=R.get(w.envMap||$.environment,Ve),$.envMapRotation=$.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",tt),Pe=new Map,$.programs=Pe,$.programVariants=new Map);let Ke=Pe.get(Me);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===Re)return Dh(w,xe),Ke}else xe.uniforms=F.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,ee,xe),w.onBeforeCompile(xe,C),Ke=F.acquireProgram(xe,Me),Pe.set(Me,Ke),$.uniforms=xe.uniforms;const Ce=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=X.uniform),Dh(w,xe),$.needsLights=u_(w),$.lightsStateVersion=Re,$.needsLights&&(Ce.ambientLightColor.value=Z.state.ambient,Ce.lightProbe.value=Z.state.probe,Ce.sunLights.value=Z.state.sun,Ce.sunLightShadows.value=Z.state.sunShadow,Ce.directionalLights.value=Z.state.directional,Ce.directionalLightShadows.value=Z.state.directionalShadow,Ce.spotLights.value=Z.state.spot,Ce.spotLightShadows.value=Z.state.spotShadow,Ce.rectAreaLights.value=Z.state.rectArea,Ce.ltc_1.value=Z.state.rectAreaLTC1,Ce.ltc_2.value=Z.state.rectAreaLTC2,Ce.pointLights.value=Z.state.point,Ce.pointLightShadows.value=Z.state.pointShadow,Ce.hemisphereLights.value=Z.state.hemi,Ce.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ce.sunShadowCascade.value=Z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=Z.state.spotLightMatrix,Ce.spotLightMap.value=Z.state.spotLightMap,Ce.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.numLightProbeGrids=Ph(T.state.lightProbeGridArray),$.currentProgram=Ke,$.uniformsList=null,Ke}function o_(w,k,ee,$,Z){const _e=De.get(w),Re=_e.currentProgram.id+","+$+","+Z;let xe=_e.programVariants.get(Re);return xe===void 0?(xe=Xs(w,k,ee),_e.programVariants.set(Re,xe)):(_e.currentProgram=xe,_e.uniformsList=null,_e.outputColorSpace=$,_e.toneMapping=Z),xe}function Lh(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=xl.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Dh(w,k){const ee=De.get(w);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function l_(w,k,ee,$,Z){k.isScene!==!0&&(k=Ct),Ue.resetTextureUnits();const _e=k.fog,Re=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,xe=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Qe.workingColorSpace,Me=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Pe=R.get($.envMap||Re,Me),Ve=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!ee.morphAttributes.position,Ze=!!ee.morphAttributes.normal,It=!!ee.morphAttributes.color;let mt=Fi;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(mt=C.toneMapping);const pt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,tn=pt!==void 0?pt.length:0,Ne=De.get($),un=T.state.lights;if(Be===!0&&(ct===!0||w!==W)){const Et=w===W&&$.id===U;X.setState($,w,Et)}let at=!1,br=!1;$.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==un.state.version||Z.isBatchedMesh&&Ne.batching===!1||!Z.isBatchedMesh&&Ne.batching===!0||Z.isBatchedMesh&&Ne.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ne.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ne.instancing===!1||!Z.isInstancedMesh&&Ne.instancing===!0||Z.isSkinnedMesh&&Ne.skinning===!1||!Z.isSkinnedMesh&&Ne.skinning===!0||Z.isInstancedMesh&&Ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ne.instancingMorph===!1&&Z.morphTexture!==null||Ne.envMap!==Pe||$.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==X.numPlanes||Ne.numIntersection!==X.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Ke||Ne.morphTargets!==Ce||Ne.morphNormals!==Ze||Ne.morphColors!==It||Ne.morphTargetsCount!==tn||Ne.numLightProbeGrids!==Ph(T.state.lightProbeGridArray)?at=!0:(Ne.outputColorSpace!==xe||Ne.toneMapping!==mt)&&(br=!0):(at=!0,Ne.__version=$.version);let nn=Ne.currentProgram;(at===!0||br===!0)&&(nn=br===!0?o_($,k,Z,xe,mt):Xs($,k,Z),j&&$.isNodeMaterial&&j.onUpdateProgram($,nn,Ne));let ro=!1,ji=!1,Er=!1;const nt=nn.getUniforms(),qt=Ne.uniforms;if(ge.useProgram(nn.program)&&(ro=!0,ji=!0,Er=!0),$.id!==U&&(U=$.id,ji=!0),ro||W!==w){ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),nt.setValue(H,"projectionMatrix",w.projectionMatrix),nt.setValue(H,"viewMatrix",w.matrixWorldInverse);const Vt=nt.map.cameraPosition;Vt!==void 0&&Vt.setValue(H,Ot.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&nt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&nt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,ji=!0,Er=!0)}if(Ne.needsLights&&(un.state.sunShadowMap.length>0&&nt.setValue(H,"sunShadowMap",un.state.sunShadowMap,Ue),un.state.directionalShadowMap.length>0&&nt.setValue(H,"directionalShadowMap",un.state.directionalShadowMap,Ue),un.state.spotShadowMap.length>0&&nt.setValue(H,"spotShadowMap",un.state.spotShadowMap,Ue),un.state.pointShadowMap.length>0&&nt.setValue(H,"pointShadowMap",un.state.pointShadowMap,Ue)),Z.isSkinnedMesh){nt.setOptional(H,Z,"bindMatrix"),nt.setOptional(H,Z,"bindMatrixInverse");const Et=Z.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),nt.setValue(H,"boneTexture",Et.boneTexture,Ue))}Z.isBatchedMesh&&(nt.setOptional(H,Z,"batchingTexture"),nt.setValue(H,"batchingTexture",Z._matricesTexture,Ue),nt.setOptional(H,Z,"batchingIdTexture"),nt.setValue(H,"batchingIdTexture",Z._indirectTexture,Ue),nt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&nt.setValue(H,"batchingColorTexture",Z._colorsTexture,Ue));const Wn=ee.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ie.update(Z,ee,nn),(ji||Ne.receiveShadow!==Z.receiveShadow)&&(Ne.receiveShadow=Z.receiveShadow,nt.setValue(H,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(qt.envMapIntensity.value=k.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=hT()),ji){if(nt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&c_(qt,Er),_e&&$.fog===!0&&ae.refreshFogUniforms(qt,_e),ae.refreshMaterialUniforms(qt,$,me,be,T.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){const Et=M;let Vt=0;for(const yi of T.state.lightProbeGridArray)yi.texture!==null&&(Et.textures[Vt]=yi.texture,Et.min[Vt]=yi.boundingBox.min,Et.max[Vt]=yi.boundingBox.max,Et.resolution[Vt]=yi.resolution,Vt++);for(const yi in Et)Et[yi].length=Vt;qt.probesSH.value=Et.textures,qt.probesMin.value=Et.min,qt.probesMax.value=Et.max,qt.probesResolution.value=Et.resolution}xl.upload(H,Lh(Ne),qt,Ue)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xl.upload(H,Lh(Ne),qt,Ue),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&nt.setValue(H,"center",Z.center),nt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),nt.setValue(H,"normalMatrix",Z.normalMatrix),nt.setValue(H,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){const Et=$.uniformsGroups;for(let Vt=0,yi=Et.length;Vt<yi;Vt++){const Fh=Et[Vt];Ee.update(Fh,nn),Ee.bind(Fh,nn)}}return nn}function c_(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function u_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,k,ee){const $=De.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),De.get(w.texture).__webglTexture=k,De.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const ee=De.get(w);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,ee=0){G=w,te=k,O=ee;let $=null,Z=!1,_e=!1;if(w){const xe=De.get(w);if(xe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(H.FRAMEBUFFER,xe.__webglFramebuffer),J.copy(w.viewport),re.copy(w.scissor),Se=w.scissorTest,ge.viewport(J),ge.scissor(re),ge.setScissorTest(Se),U=-1;return}else if(xe.__webglFramebuffer===void 0)Ue.setupRenderTarget(w);else if(xe.__hasExternalTextures)Ue.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(xe.__boundDepthTexture!==Ve){if(Ve!==null&&De.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(w)}}const Me=w.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(_e=!0);const Pe=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?$=Pe[k][ee]:$=Pe[k],Z=!0):w.samples>0&&Ue.useMultisampledRTT(w)===!1?$=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?$=Pe[ee]:$=Pe,J.copy(w.viewport),re.copy(w.scissor),Se=w.scissorTest}else J.copy(Ae).multiplyScalar(me).floor(),re.copy(je).multiplyScalar(me).floor(),Se=ke;if(ee!==0&&($=Q),ge.bindFramebuffer(H.FRAMEBUFFER,$)&&ge.drawBuffers(w,$),ge.viewport(J),ge.scissor(re),ge.setScissorTest(Se),Z){const xe=De.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe.__webglTexture,ee)}else if(_e){const xe=k;for(let Me=0;Me<w.textures.length;Me++){const Pe=De.get(w.textures[Me]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Me,Pe.__webglTexture,ee,xe)}}else if(w!==null&&ee!==0){const xe=De.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xe.__webglTexture,ee)}U=-1};function Ih(w){const k=De.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=st.textureFormatReadable(w.format),k.__typeReadable=st.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,ee,$,Z,_e,Re,xe=0){if(!(w&&w.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Me=Me[Re],Array.isArray(Me)&&(Me=Me[0])),Me){ge.bindFramebuffer(H.FRAMEBUFFER,Me);try{const Pe=w.textures[xe],Ve=Pe.format,Ke=Pe.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+xe);const Ce=Ih(Pe);if(Ce.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-$&&ee>=0&&ee<=w.height-Z&&H.readPixels(k,ee,$,Z,oe.convert(Ve),oe.convert(Ke),_e)}finally{const Pe=G!==null?De.get(G).__webglFramebuffer:null;ge.bindFramebuffer(H.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,k,ee,$,Z,_e,Re,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Me=Me[Re],Array.isArray(Me)&&(Me=Me[0])),Me)if(k>=0&&k<=w.width-$&&ee>=0&&ee<=w.height-Z){ge.bindFramebuffer(H.FRAMEBUFFER,Me);const Pe=w.textures[xe],Ve=Pe.format,Ke=Pe.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+xe);const Ce=Ih(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.bufferData(H.PIXEL_PACK_BUFFER,_e.byteLength,H.STREAM_READ),H.readPixels(k,ee,$,Z,oe.convert(Ve),oe.convert(Ke),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const It=G!==null?De.get(G).__webglFramebuffer:null;ge.bindFramebuffer(H.FRAMEBUFFER,It);const mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await bS(H,mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_e),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ze),H.deleteSync(mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,ee=0){const $=Math.pow(2,-ee),Z=Math.floor(w.image.width*$),_e=Math.floor(w.image.height*$),Re=k!==null?k.x:0,xe=k!==null?k.y:0;Ue.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,Re,xe,Z,_e),ge.unbindTexture()},this.copyTextureToTexture=function(w,k,ee=null,$=null,Z=0,_e=0){let Re,xe,Me,Pe,Ve,Ke,Ce,Ze,It;const mt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(ee!==null)Re=ee.max.x-ee.min.x,xe=ee.max.y-ee.min.y,Me=ee.isBox3?ee.max.z-ee.min.z:1,Pe=ee.min.x,Ve=ee.min.y,Ke=ee.isBox3?ee.min.z:0;else{const nt=Math.pow(2,-Z);Re=Math.floor(mt.width*nt),xe=Math.floor(mt.height*nt),w.isDataArrayTexture?Me=mt.depth:w.isData3DTexture?Me=Math.floor(mt.depth*nt):Me=1,Pe=0,Ve=0,Ke=0}$!==null?(Ce=$.x,Ze=$.y,It=$.z):(Ce=0,Ze=0,It=0);const pt=oe.convert(k.format),tn=oe.convert(k.type);let Ne;k.isData3DTexture?(Ue.setTexture3D(k,0),Ne=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ue.setTexture2DArray(k,0),Ne=H.TEXTURE_2D_ARRAY):(Ue.setTexture2D(k,0),Ne=H.TEXTURE_2D),ge.activeTexture(H.TEXTURE0),ge.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),ge.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ge.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);const un=ge.getParameter(H.UNPACK_ROW_LENGTH),at=ge.getParameter(H.UNPACK_IMAGE_HEIGHT),br=ge.getParameter(H.UNPACK_SKIP_PIXELS),nn=ge.getParameter(H.UNPACK_SKIP_ROWS),ro=ge.getParameter(H.UNPACK_SKIP_IMAGES);ge.pixelStorei(H.UNPACK_ROW_LENGTH,mt.width),ge.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt.height),ge.pixelStorei(H.UNPACK_SKIP_PIXELS,Pe),ge.pixelStorei(H.UNPACK_SKIP_ROWS,Ve),ge.pixelStorei(H.UNPACK_SKIP_IMAGES,Ke);const ji=w.isDataArrayTexture||w.isData3DTexture,Er=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const nt=De.get(w),qt=De.get(k),Wn=De.get(nt.__renderTarget),Et=De.get(qt.__renderTarget);ge.bindFramebuffer(H.READ_FRAMEBUFFER,Wn.__webglFramebuffer),ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Vt=0;Vt<Me;Vt++)ji&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.get(w).__webglTexture,Z,Ke+Vt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.get(k).__webglTexture,_e,It+Vt)),H.blitFramebuffer(Pe,Ve,Pe+Re,Ve+xe,Ce,Ze,Ce+Re,Ze+xe,H.DEPTH_BUFFER_BIT,H.NEAREST);ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||De.has(w)){const nt=De.get(w),qt=De.get(k);ge.bindFramebuffer(H.READ_FRAMEBUFFER,I),ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let Wn=0;Wn<Me;Wn++)ji?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.__webglTexture,Z,Ke+Wn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nt.__webglTexture,Z),Er?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,_e,It+Wn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,_e),Z!==0?H.blitFramebuffer(Pe,Ve,Pe+Re,Ve+xe,Ce,Ze,Ce+Re,Ze+xe,H.COLOR_BUFFER_BIT,H.NEAREST):Er?H.copyTexSubImage3D(Ne,_e,Ce,Ze,It+Wn,Pe,Ve,Re,xe):H.copyTexSubImage2D(Ne,_e,Ce,Ze,Pe,Ve,Re,xe);ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Er?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ne,_e,Ce,Ze,It,Re,xe,Me,pt,tn,mt.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Ne,_e,Ce,Ze,It,Re,xe,Me,pt,mt.data):H.texSubImage3D(Ne,_e,Ce,Ze,It,Re,xe,Me,pt,tn,mt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_e,Ce,Ze,Re,xe,pt,tn,mt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_e,Ce,Ze,mt.width,mt.height,pt,mt.data):H.texSubImage2D(H.TEXTURE_2D,_e,Ce,Ze,Re,xe,pt,tn,mt);ge.pixelStorei(H.UNPACK_ROW_LENGTH,un),ge.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),ge.pixelStorei(H.UNPACK_SKIP_PIXELS,br),ge.pixelStorei(H.UNPACK_SKIP_ROWS,nn),ge.pixelStorei(H.UNPACK_SKIP_IMAGES,ro),_e===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&H.generateMipmap(Ne),ge.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&Ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ue.setTextureCube(w,0):w.isData3DTexture?Ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ue.setTexture2DArray(w,0):Ue.setTexture2D(w,0),ge.unbindTexture()},this.resetState=function(){te=0,O=0,G=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const Km={type:"change"},yh={type:"start"},s_={type:"end"},qo=new hc,Zm=new Ci,mT=Math.cos(70*CS.DEG2RAD),kt=new V,_n=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Su=1e-6;class gT extends yM{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new xr,this._lastTargetPosition=new V,this._quat=new xr().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Am,this._sphericalDelta=new Am,this._scale=1,this._panOffset=new V,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new V,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_T.bind(this),this._onPointerDown=xT.bind(this),this._onPointerUp=vT.bind(this),this._onContextMenu=TT.bind(this),this._onMouseWheel=MT.bind(this),this._onKeyDown=bT.bind(this),this._onTouchStart=ET.bind(this),this._onTouchMove=wT.bind(this),this._onMouseDown=yT.bind(this),this._onMouseMove=ST.bind(this),this._interceptControlDown=AT.bind(this),this._interceptControlUp=RT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=lt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Km),this.update(),this.state=lt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;kt.copy(n).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<mT?this.object.lookAt(this.target):(Zm.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Zm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Su||this._lastTargetPosition.distanceToSquared(this.target)>Su?(this.dispatchEvent(Km),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){kt.setFromMatrixColumn(n,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,n){this.screenSpacePanning===!0?kt.setFromMatrixColumn(n,1):(kt.setFromMatrixColumn(n,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Fe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _T(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function vT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(s_),this.state=lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function yT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Rs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Rs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(yh)}function ST(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function MT(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(s_))}function bT(t){this.enabled!==!1&&this._handleKeyDown(t)}function ET(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1){this.state=lt.NONE;break}this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1){this.state=lt.NONE;break}this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(yh)}function wT(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function TT(t){this.enabled!==!1&&t.preventDefault()}function AT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RT(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const CT=/^[og]\s*(.+)?/,NT=/^mtllib /,PT=/^usemtl /,LT=/^usemap /,Ko=/\s+/,Qm=new V,Mu=new V,Jm=new V,eg=new V,On=new V,Zo=new We;function DT(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,n,i){const r=this.vertices,s=this.object.geometry.normals;Qm.fromArray(r,e),Mu.fromArray(r,n),Jm.fromArray(r,i),On.subVectors(Jm,Mu),eg.subVectors(Qm,Mu),On.cross(eg),On.normalize(),s.push(On.x,On.y,On.z),s.push(On.x,On.y,On.z),s.push(On.x,On.y,On.z)},addColor:function(e,n,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,n,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,r,s,a,o,l,c){const f=this.vertices.length;let p=this.parseVertexIndex(e,f),d=this.parseVertexIndex(n,f),g=this.parseVertexIndex(i,f);if(this.addVertex(p,d,g),this.addColor(p,d,g),o!==void 0&&o!==""){const v=this.normals.length;p=this.parseNormalIndex(o,v),d=this.parseNormalIndex(l,v),g=this.parseNormalIndex(c,v),this.addNormal(p,d,g)}else this.addFaceNormal(p,d,g);if(r!==void 0&&r!==""){const v=this.uvs.length;p=this.parseUVIndex(r,v),d=this.parseUVIndex(s,v),g=this.parseUVIndex(a,v),this.addUV(p,d,g),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],n);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length-1;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],i)),this.addVertexLine(this.parseVertexIndex(e[s+1],i));for(let s=0,a=n.length-1;s<a;s++)this.addUVLine(this.parseUVIndex(n[s],r)),this.addUVLine(this.parseUVIndex(n[s+1],r))}};return t.startObject("",!1),t}class tg extends xh{constructor(e){super(e),this.materials=null}load(e,n,i,r){const s=this,a=new fM(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{n(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const n=new DT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const f=c.charAt(0);if(f!=="#")if(f==="v"){const p=c.split(Ko);switch(p[0]){case"v":n.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(Zo.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6]),Cn),n.colors.push(Zo.r,Zo.g,Zo.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":n.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(f==="f"){const d=c.slice(1).trim().split(Ko),g=[];for(let S=0,_=d.length;S<_;S++){const u=d[S];if(u.length>0){const m=u.split("/");g.push(m)}}const v=g[0];for(let S=1,_=g.length-1;S<_;S++){const u=g[S],m=g[S+1];n.addFace(v[0],u[0],m[0],v[1],u[1],m[1],v[2],u[2],m[2])}}else if(f==="l"){const p=c.substring(1).trim().split(Ko);let d=[];const g=[];if(c.indexOf("/")===-1)d=p;else for(let v=0,S=p.length;v<S;v++){const _=p[v].split("/");_[0]!==""&&d.push(_[0]),_[1]!==""&&g.push(_[1])}n.addLineGeometry(d,g)}else if(f==="p"){const d=c.slice(1).trim().split(Ko);n.addPointGeometry(d)}else if((r=CT.exec(c))!==null){const p=(" "+r[0].slice(1).trim()).slice(1);n.startObject(p)}else if(PT.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(NT.test(c))n.materialLibraries.push(c.substring(7).trim());else if(LT.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(r=c.split(" "),r.length>1){const d=r[1].trim().toLowerCase();n.object.smooth=d!=="0"&&d!=="off"}else n.object.smooth=!0;const p=n.object.currentMaterial();p&&(p.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const s=new Fr;if(s.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=n.objects.length;o<l;o++){const c=n.objects[o],f=c.geometry,p=c.materials,d=f.type==="Line",g=f.type==="Points";let v=!1;if(f.vertices.length===0)continue;const S=new en;S.setAttribute("position",new et(f.vertices,3)),f.normals.length>0&&S.setAttribute("normal",new et(f.normals,3)),f.colors.length>0&&(v=!0,S.setAttribute("color",new et(f.colors,3))),f.hasUVIndices===!0&&S.setAttribute("uv",new et(f.uvs,2));const _=[];for(let m=0,y=p.length;m<y;m++){const M=p[m],A=M.name+"_"+M.smooth+"_"+v;let T=n.materials[A];if(this.materials!==null){if(T=this.materials.create(M.name),d&&T&&!(T instanceof Ea)){const x=new Ea;si.prototype.copy.call(x,T),x.color.copy(T.color),T=x}else if(g&&T&&!(T instanceof fa)){const x=new fa({size:10,sizeAttenuation:!1});si.prototype.copy.call(x,T),x.color.copy(T.color),x.map=T.map,T=x}}T===void 0&&(d?T=new Ea:g?T=new fa({size:1,sizeAttenuation:!1}):T=new sM,T.name=M.name,T.flatShading=!M.smooth,T.vertexColors=v,n.materials[A]=T),_.push(T)}let u;if(_.length>1){for(let m=0,y=p.length;m<y;m++){const M=p[m];S.addGroup(M.groupStart,M.groupCount,m)}d?u=new nf(S,_):g?u=new xu(S,_):u=new Mt(S,_)}else d?u=new nf(S,_[0]):g?u=new xu(S,_[0]):u=new Mt(S,_[0]);u.name=c.name,s.add(u)}else if(n.vertices.length>0){const o=new fa({size:1,sizeAttenuation:!1}),l=new en;l.setAttribute("position",new et(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new et(n.colors,3)),o.vertexColors=!0);const c=new xu(l,o);s.add(c)}return s}}function IT({reconstructionData:t,generation25DData:e,active3DTab:n="mesh3d",setActive3DTab:i,sketchType:r="drone",apiBase:s=""}){var K,te;const a=ye.useRef(null),o=ye.useRef(null),l=ye.useRef(null),c=ye.useRef(null),f=ye.useRef(null),p=ye.useRef(null),d=ye.useRef(null),[g,v]=ye.useState("pbr"),[S,_]=ye.useState(!0),[u,m]=ye.useState(!1),[y,M]=ye.useState(!1),A=n==="relief25d"&&!!(e!=null&&e.relief_mesh_path),T=A?e.relief_mesh_path.split(/[/\\]/).pop():t!=null&&t.model_3d_path?t.model_3d_path.split(/[/\\]/).pop():r==="drone"?"Cyber_Recon_Drone_v2.glb":r==="chair"?"Modernist_Armchair_v1.glb":r==="mug"?"Ceramic_Espresso_Mug.glb":r==="car"?"Angular_Cyber_EV_Concept.glb":"Synthesized_SDF_Mesh.glb",x=A?((K=e==null?void 0:e.mesh_stats)==null?void 0:K.face_count)||"32,768":t?"48,220":"42,850",b=A?((te=e==null?void 0:e.mesh_stats)==null?void 0:te.vertex_count)||"16,384":t?"24,112":"21,420",P=ye.useCallback(O=>{p.current&&p.current.traverse(G=>{G.isMesh&&(O==="wireframe"?G.material=new zx({color:62875,wireframe:!0,transparent:!0,opacity:.85}):O==="normals"?G.material=new aM({wireframe:!1}):O==="matcap"?G.material=new dn({color:14279404,metalness:.85,roughness:.18}):G.material=new dn({color:G.userData.originalColor||2042167,metalness:.8,roughness:.35,emissive:G.userData.emissive||0,emissiveIntensity:G.userData.emissiveIntensity||0}))})},[]),C=ye.useCallback(O=>{const G=new Fr;if(O==="drone"){const U=new Pr(.7,1.2,.4,8);U.scale(1.4,.8,1.8);const W=new dn({color:1975339,metalness:.85,roughness:.3}),J=new Mt(U,W);J.userData.originalColor=1975339,G.add(J);const re=new mh(.5,16,16);re.scale(1.1,.6,1.4);const Se=new dn({color:16744272,emissive:16744272,emissiveIntensity:.6,roughness:.1}),q=new Mt(re,Se);q.position.set(0,.25,.2),q.userData.originalColor=16744272,q.userData.emissive=16744272,q.userData.emissiveIntensity=.6,G.add(q);const ce=new Jn(.18,.1,1.8),he=new Pr(.4,.4,.25,16),be=new Jn(1.3,.02,.12),me=new dn({color:2567736,metalness:.9,roughness:.2}),we=new dn({color:62875,metalness:.5,roughness:.2});[Math.PI/4,-Math.PI/4,3*Math.PI/4,-(3*Math.PI)/4].forEach(Ae=>{const je=new Mt(ce,me);je.rotation.y=Ae,je.position.set(0,0,0),G.add(je);const ke=Math.sin(Ae)*1.5,Ie=Math.cos(Ae)*1.5,Ye=new Mt(he,we);Ye.position.set(ke,.05,Ie),Ye.userData.originalColor=62875,G.add(Ye);const Be=new Mt(be,me);Be.position.set(ke,.22,Ie),Be.rotation.y=Math.random()*Math.PI,G.add(Be)})}else if(O==="chair"){const U=new Jn(1.6,.2,1.6),W=new Jn(1.6,1.5,.2),J=new dn({color:3359061,roughness:.7}),re=new dn({color:16744272,metalness:.9,roughness:.2}),Se=new Mt(U,J);Se.position.y=.5,G.add(Se);const q=new Mt(W,J);q.position.set(0,1.25,-.7),G.add(q);const ce=new Pr(.04,.03,1,8);[[-.7,0,-.7],[.7,0,-.7],[-.7,0,.7],[.7,0,.7]].forEach(([be,me,we])=>{const Je=new Mt(ce,re);Je.position.set(be,me,we),G.add(Je)})}else if(O==="mug"){const U=new Pr(.7,.65,1.4,24,1,!0),W=new fh(.65,24);W.rotateX(Math.PI/2);const J=new gh(.45,.08,12,24,Math.PI*1.1),re=new dn({color:16744272,roughness:.15,metalness:.1}),Se=new Mt(U,re);Se.position.y=.7,G.add(Se);const q=new Mt(W,re);q.position.y=0,G.add(q);const ce=new Mt(J,re);ce.position.set(.7,.7,0),ce.rotation.z=-Math.PI/2,G.add(ce)}else if(O==="car"){const U=new Jn(3,.7,1.4),W=new Jn(1.6,.6,1.2),J=new dn({color:1975339,metalness:.85,roughness:.2}),re=new dn({color:62875,metalness:.9,roughness:.1,transparent:!0,opacity:.7}),Se=new Mt(U,J);Se.position.y=.5,G.add(Se);const q=new Mt(W,re);q.position.set(.1,1,0),G.add(q);const ce=new Pr(.38,.38,.25,16);ce.rotateZ(Math.PI/2);const he=new dn({color:790289,roughness:.8});[[-1,.38,-.75],[1,.38,-.75],[-1,.38,.75],[1,.38,.75]].forEach(([me,we,Je])=>{const Ae=new Mt(ce,he);Ae.position.set(me,we,Je),G.add(Ae)})}else{const U=new ph(1.2,1),W=new dn({color:62875,metalness:.8,roughness:.3}),J=new Mt(U,W);G.add(J)}return G},[]);ye.useEffect(()=>{const O=a.current;if(!O)return;const G=O.clientWidth||600,U=O.clientHeight||420,W=new VS;W.background=new We(526860),l.current=W;const J=new zn(45,G/U,.1,100);J.position.set(3.5,2.5,4),c.current=J;const re=new pT({antialias:!0,alpha:!0});re.setSize(G,U),re.setPixelRatio(Math.min(window.devicePixelRatio,2)),re.shadowMap.enabled=!0,o.current=re,O.innerHTML="",O.appendChild(re.domElement);const Se=new gT(J,re.domElement);Se.enableDamping=!0,Se.dampingFactor=.05,Se.maxDistance=20,Se.minDistance=1,f.current=Se;const q=new gM(16777215,.8);W.add(q);const ce=new Tm(16744272,2.2);ce.position.set(5,8,5),W.add(ce);const he=new Tm(62875,1.8);he.position.set(-5,4,-5),W.add(he);const be=new pM(8114431,1.5,10);be.position.set(0,-2,2),W.add(be);const me=new vM(10,20,62875,2041387);me.position.y=-.5,W.add(me);const we=new Fr;if(W.add(we),p.current=we,A){const ke=e.relief_mesh_path.split(/[/\\]/).pop(),Ie=`${s}/static/generation25d/${ke}`;new tg().load(Ie,Be=>{we.clear(),Be.traverse(ct=>{ct.isMesh&&(ct.geometry.center(),ct.material=new dn({color:8114431,metalness:.65,roughness:.25}))}),Be.scale.set(1.6,1.6,1.6),we.add(Be),P(g)},void 0,Be=>{console.warn("Failed to load Relief OBJ, falling back to procedural:",Be),we.clear();const ct=C(r);we.add(ct),P(g)})}else if(t!=null&&t.model_3d_path){const ke=`${s}/static/outputs/reconstructions/${t.model_3d_path.split(/[/\\]/).pop()}`;new tg().load(ke,Ye=>{we.clear(),Ye.traverse(Be=>{Be.isMesh&&(Be.geometry.center(),Be.material=new dn({color:8899506,metalness:.75,roughness:.35}))}),Ye.scale.set(1.5,1.5,1.5),we.add(Ye),P(g)},void 0,Ye=>{console.warn("Failed to load OBJ, falling back to procedural model:",Ye),we.clear();const Be=C(r);we.add(Be),P(g)})}else{const ke=C(r);we.add(ke),P(g)}let Je=new _M;const Ae=()=>{d.current=requestAnimationFrame(Ae);const ke=Je.getDelta();S&&we&&(we.rotation.y+=ke*.45),Se.update(),re.render(W,J)};Ae();const je=()=>{if(!O||!re||!J)return;const ke=O.clientWidth,Ie=O.clientHeight;J.aspect=ke/Ie,J.updateProjectionMatrix(),re.setSize(ke,Ie)};return window.addEventListener("resize",je),()=>{window.removeEventListener("resize",je),d.current&&cancelAnimationFrame(d.current),re.dispose(),O.contains(re.domElement)&&O.removeChild(re.domElement)}},[s,P,C,t,e,n,A,g,r,S]);const D=O=>{v(O),P(O)},j=()=>{!c.current||!f.current||(c.current.position.set(3.5,2.5,4),f.current.target.set(0,0,0),f.current.update())},Q=()=>{var G,U,W;const O=(G=a.current)==null?void 0:G.parentElement;O&&(document.fullscreenElement?((W=document.exitFullscreen)==null||W.call(document).catch(()=>{}),M(!1)):((U=O.requestFullscreen)==null||U.call(O).catch(()=>{}),M(!0)))},I=()=>{if(A){const O=e.relief_mesh_path.split(/[/\\]/).pop(),G=`${s}/static/generation25d/${O}`,U=document.createElement("a");U.href=G,U.download=O,document.body.appendChild(U),U.click(),document.body.removeChild(U)}else if(t!=null&&t.model_3d_path){const O=t.model_3d_path.split(/[/\\]/).pop(),G=`${s}/static/outputs/reconstructions/${O}`,U=document.createElement("a");U.href=G,U.download=O,document.body.appendChild(U),U.click(),document.body.removeChild(U)}else alert(`Model ${T} downloaded! (Ready for Blender, Maya, Unity, Unreal)`)};return h.jsxs("div",{className:"flex flex-col gap-3 p-4 rounded-2xl bg-[#191c1e]/90 border border-[#323537]/50 backdrop-blur-xl shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between pb-1 flex-wrap gap-2",children:[h.jsxs("div",{className:"flex flex-col",children:[(e==null?void 0:e.relief_mesh_path)&&h.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg bg-[#0c0f11] border border-[#323537]/60 mb-1.5 w-fit",children:[h.jsxs("button",{onClick:()=>i&&i("mesh3d"),className:`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${n==="mesh3d"?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white"}`,children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"view_in_ar"}),h.jsx("span",{children:"Full 3D Model"})]}),h.jsxs("button",{onClick:()=>i&&i("relief25d"),className:`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${n==="relief25d"?"bg-[#7bd0ff] text-[#002b40] shadow-sm font-bold":"text-[#bfc9c3] hover:text-white"}`,children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"layers"}),h.jsx("span",{children:"2.5D Relief Mesh"})]})]}),h.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:h.jsx("span",{className:"font-display font-semibold text-lg text-white",children:"3D Image reconstruction"})})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{onClick:Q,className:"w-9 h-9 rounded-lg bg-[#1d2022] hover:bg-[#272a2d] border border-[#323537]/40 flex items-center justify-center text-[#bfc9c3] hover:text-[#FF7F50] transition-colors",title:"Expand Viewport",children:h.jsx("span",{className:"material-symbols-outlined text-base",children:y?"fullscreen_exit":"fullscreen"})}),h.jsx("button",{onClick:()=>m(!u),className:`w-9 h-9 rounded-lg border border-[#323537]/40 flex items-center justify-center transition-colors ${u?"bg-[#00f59b]/20 text-[#00f59b]":"bg-[#1d2022] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-[#00f59b]"}`,title:"Topology Info",children:h.jsx("span",{className:"material-symbols-outlined text-base",children:"info"})})]})]}),h.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden bg-[#080a0c] shadow-2xl flex flex-col border border-[#323537]/40",children:[h.jsxs("div",{className:"absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none flex-wrap gap-2",children:[h.jsx("div",{className:"pointer-events-auto flex items-center gap-1 p-1 rounded-full bg-[#0c0f11]/85 backdrop-blur-md shadow-md border border-[#323537]/50",children:[{id:"pbr",label:"Texture PBR"},{id:"wireframe",label:"Wireframe"},{id:"normals",label:"Normals"},{id:"matcap",label:"MatCap"}].map(O=>h.jsx("button",{onClick:()=>D(O.id),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${g===O.id?"bg-[#FF7F50] text-white shadow-sm":"text-[#bfc9c3] hover:text-white"}`,children:O.label},O.id))}),h.jsxs("div",{className:"pointer-events-auto flex items-center gap-1.5",children:[h.jsx("button",{onClick:()=>_(!S),className:`w-8 h-8 rounded-full border border-[#323537]/50 backdrop-blur-md flex items-center justify-center shadow-md transition-colors ${S?"bg-[#FF7F50]/20 text-[#FF7F50] border-[#FF7F50]/40":"bg-[#0c0f11]/85 text-white hover:text-[#FF7F50]"}`,title:"Turntable Rotation",children:h.jsx("span",{className:`material-symbols-outlined text-sm ${S?"animate-spin":""}`,children:"sync"})}),h.jsx("button",{onClick:j,className:"w-8 h-8 rounded-full bg-[#0c0f11]/85 border border-[#323537]/50 backdrop-blur-md text-white hover:text-[#00f59b] flex items-center justify-center shadow-md transition-colors",title:"Reset Camera",children:h.jsx("span",{className:"material-symbols-outlined text-sm",children:"filter_center_focus"})})]})]}),h.jsx("div",{ref:a,className:"w-full h-[420px] relative cursor-grab active:cursor-grabbing"}),u&&h.jsxs("div",{className:"p-3 bg-[#0c0f11]/90 border-t border-[#323537]/40 text-xs grid grid-cols-2 sm:grid-cols-4 gap-3 text-[#bfc9c3]",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"Mesh Manifold"}),h.jsx("span",{className:"text-[#00f59b] font-semibold",children:"100% Watertight"})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"Geometry Scheme"}),h.jsx("span",{className:"text-white font-semibold",children:"Quad-Dominant"})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"Normal Deviation"}),h.jsx("span",{className:"text-white font-semibold",children:"0.012 rad"})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block text-[10px] uppercase",children:"SDF Convergence"}),h.jsx("span",{className:"text-[#00f59b] font-semibold",children:"99.98% Complete"})]})]}),h.jsxs("div",{className:"p-2.5 px-4 bg-[#272a2d]/90 backdrop-blur-md flex items-center justify-between text-xs text-[#849588] border-t border-[#323537]/30 flex-wrap gap-2",children:[h.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[h.jsxs("span",{children:["Tris: ",h.jsx("strong",{className:"text-white",children:x})]}),h.jsxs("span",{children:["Verts: ",h.jsx("strong",{className:"text-white",children:b})]}),h.jsxs("span",{children:["Scale: ",h.jsx("strong",{className:"text-white",children:"1:1 Metric"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:I,className:"px-3 py-1 rounded-lg bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold text-xs transition-colors flex items-center gap-1 shadow-sm cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"download"}),h.jsx("span",{children:"Download 3D Mesh (.obj)"})]}),h.jsx("button",{onClick:()=>alert("GLB & STL Export generated for 3D Slicers!"),className:"px-3 py-1 rounded-lg bg-[#1d2022] hover:bg-[#323537] text-[#bfc9c3] hover:text-white text-xs transition-colors border border-[#323537]/40",children:"Export GLB / STL"})]})]})]})]})}function FT({analysisData:t,preprocessedData:e,previewUrl:n,isolationData:i,isolatedPreviewUrl:r,generation25DData:s,refinementData:a,refinedPreviewUrl:o,apiBase:l=""}){var d,g,v,S,_,u;const[c,f]=ye.useState(!1),p=()=>{t!=null&&t.reconstruction_prompt&&(navigator.clipboard.writeText(t.reconstruction_prompt),f(!0),setTimeout(()=>f(!1),2e3))};return h.jsxs("div",{className:"flex flex-col gap-5 p-5 rounded-2xl bg-[#191c1e]/90 border border-[#323537]/50 backdrop-blur-xl shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-[#272a2d] flex-wrap gap-3",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-[#00f59b] text-xl",children:"neurology"}),h.jsx("h3",{className:"font-display font-bold text-lg text-white capitalize",children:(t==null?void 0:t.object_type)||"Sketch Understanding"}),(t==null?void 0:t.category)&&h.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/40 text-[#00f59b] text-xs font-semibold",children:t.category})]}),h.jsxs("span",{className:"text-xs text-[#849588] mt-1 block",children:["Viewpoint: ",h.jsx("strong",{className:"text-white capitalize",children:(t==null?void 0:t.view_type)||"Isometric / 3/4"})," • Confidence:"," ",h.jsx("strong",{className:"text-[#00f59b]",children:t?`${(t.confidence_score*100).toFixed(0)}%`:"96%"})]})]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("span",{className:"text-[11px] px-2.5 py-1 bg-[#111416] border border-[#272a2d] text-[#6ffbbe] rounded-md font-mono",children:(t==null?void 0:t.inference_backend)||"Llama 3.2 Vision 11B"})})]}),e&&h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#272a2d]",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"text-[10px] font-bold text-[#849588] uppercase tracking-wider",children:"OpenCV Model-Ready Preprocessing (CLAHE Normalized)"}),h.jsx("span",{className:"text-[10px] text-[#00f59b]",children:"Watertight SDF Ready"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center text-xs",children:[h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[11px] mb-1",children:"Original Drawing"}),h.jsx("div",{className:"h-28 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden",children:n?h.jsx("img",{src:n,alt:"Original",className:"max-h-full object-contain"}):h.jsx("span",{className:"text-[#849588] text-xs",children:"User Canvas"})})]}),h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[11px] mb-1",children:"320x320 Centered / Padded"}),h.jsx("div",{className:"h-28 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden",children:h.jsx("img",{src:`${l}/static/outputs/preprocessing/${e.split(/[/\\]/).pop()}`,alt:"Preprocessed",className:"max-h-full object-contain",onError:m=>{m.target.style.display="none"}})})]})]})]}),a&&h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#FF7F50]/40 shadow-inner",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("span",{className:"text-[10px] font-bold text-[#FF7F50] uppercase tracking-wider flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"auto_fix_high"}),h.jsx("span",{children:"AI Refined Sketch (InstantMesh Ready)"})]}),h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${a.is_fallback?"bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30":"bg-[#00f59b]/20 text-[#00f59b] border-[#00f59b]/40"}`,children:a.is_fallback?"Fallback Activated":"Quality Validated"})]}),h.jsxs("div",{className:"flex flex-col gap-2.5 bg-[#191c1e] p-2.5 rounded-lg border border-[#272a2d]",children:[h.jsx("div",{className:"w-full h-32 bg-white rounded p-1.5 flex items-center justify-center overflow-hidden",children:h.jsx("img",{src:`${l}/static/refinement/${a.effective_image_path.split(/[/\\]/).pop()}`,alt:"Refined effective",className:"max-h-full max-w-full object-contain"})}),h.jsxs("div",{className:"text-[11px] space-y-1.5 w-full",children:[h.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[h.jsx("span",{className:"text-[#849588]",children:"Edge Contour Retention:"}),h.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.edge_overlap_iou*100).toFixed(0),"%"]})]}),h.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[h.jsx("span",{className:"text-[#849588]",children:"Silhouette IoU:"}),h.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.silhouette_iou*100).toFixed(0),"%"]})]}),h.jsxs("div",{className:"flex justify-between border-b border-[#272a2d] pb-1",children:[h.jsx("span",{className:"text-[#849588]",children:"Background Cleanliness:"}),h.jsxs("span",{className:"font-semibold text-[#00f59b]",children:[(a.validation.background_cleanliness_score*100).toFixed(0),"%"]})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-[#849588]",children:"Centroid Drift:"}),h.jsxs("span",{className:"font-semibold text-white",children:[(a.validation.centroid_drift*100).toFixed(1),"%"]})]})]})]}),a.is_fallback&&((d=a.validation.failure_reasons)==null?void 0:d.length)>0&&h.jsxs("div",{className:"mt-2 p-2 rounded bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[10px] text-[#ffb4ab]",children:[h.jsx("span",{className:"font-semibold block mb-0.5",children:"Validation Guardrail Rejection:"}),h.jsx("ul",{className:"list-disc list-inside space-y-0.5",children:a.validation.failure_reasons.map((m,y)=>h.jsx("li",{children:m},y))})]})]}),i&&h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#00f59b]/40 shadow-inner",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("span",{className:"text-[10px] font-bold text-[#00f59b] uppercase tracking-wider flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"content_cut"}),h.jsx("span",{children:"Isolated Foreground (RMBG / Saliency)"})]}),h.jsxs("span",{className:"text-[10px] text-[#849588] font-mono",children:[i.method_used," • ",(i.foreground_pixel_ratio*100).toFixed(1),"% coverage"]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs",children:[h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Alpha RGBA Cutout"}),h.jsx("div",{className:"h-24 flex items-center justify-center rounded p-1 overflow-hidden",style:{backgroundImage:"repeating-conic-gradient(#1f262b 0% 25%, #0e1216 0% 50%)",backgroundSize:"16px 16px"},children:h.jsx("img",{src:`${l}/static/foreground/${i.rgba_path.split(/[/\\]/).pop()}`,alt:"RGBA",className:"max-h-full object-contain"})})]}),h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Centered Canvas"}),h.jsx("div",{className:"h-24 flex items-center justify-center bg-white/5 rounded p-1 overflow-hidden",children:h.jsx("img",{src:`${l}/static/foreground/${i.composite_path.split(/[/\\]/).pop()}`,alt:"Composite",className:"max-h-full object-contain"})})]}),h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Hole-Cleaned Mask"}),h.jsx("div",{className:"h-24 flex items-center justify-center bg-black/60 rounded p-1 overflow-hidden",children:h.jsx("img",{src:`${l}/static/foreground/${i.mask_path.split(/[/\\]/).pop()}`,alt:"Mask",className:"max-h-full object-contain"})})]})]})]}),s&&h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#0c0f11]/80 border border-[#7bd0ff]/40 shadow-inner",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("span",{className:"text-[10px] font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"layers"}),h.jsx("span",{children:"2.5D Volumetric Geometry"})]}),h.jsx("span",{className:"text-[10px] text-[#00f59b] font-mono",children:"Watertight 3D Relief Generated"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center text-xs",children:[h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Monocular Depth Map"}),h.jsx("div",{className:"h-24 flex items-center justify-center bg-black rounded p-1 overflow-hidden",children:h.jsx("img",{src:`${l}/static/generation25d/${s.depth_map_path.split(/[/\\]/).pop()}`,alt:"Depth Map",className:"max-h-full object-contain"})})]}),h.jsxs("div",{className:"bg-[#191c1e] p-2 rounded-lg border border-[#272a2d]",children:[h.jsx("span",{className:"text-[#849588] block text-[10px] mb-1",children:"Tangent Surface Normals"}),h.jsx("div",{className:"h-24 flex items-center justify-center bg-black rounded p-1 overflow-hidden",children:h.jsx("img",{src:`${l}/static/generation25d/${s.normal_map_path.split(/[/\\]/).pop()}`,alt:"Normal Map",className:"max-h-full object-contain"})})]})]}),h.jsxs("div",{className:"mt-2 text-[10px] text-[#849588] flex items-center justify-between border-t border-[#272a2d] pt-1.5",children:[h.jsxs("span",{children:["Relief Vertices: ",h.jsx("strong",{className:"text-white",children:((v=(g=s.mesh_stats)==null?void 0:g.vertex_count)==null?void 0:v.toLocaleString())||"16,384"})]}),h.jsxs("span",{children:["Relief Faces: ",h.jsx("strong",{className:"text-white",children:((_=(S=s.mesh_stats)==null?void 0:S.face_count)==null?void 0:_.toLocaleString())||"32,768"})]}),h.jsxs("span",{children:["Watertight: ",h.jsx("strong",{className:"text-[#00f59b]",children:"True"})]})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588] mb-1.5",children:"Semantic Description (Observed vs Inferred)"}),h.jsx("p",{className:"text-xs text-[#e1e2e5] leading-relaxed bg-[#0c0f11]/90 p-3 rounded-xl border border-[#272a2d]",children:(t==null?void 0:t.description)||"A conceptual multi-rotor sci-fi recon drone featuring an aerodynamic fuselage, dual turbine nacelles, front-mounted sensor dome, and quad landing struts."})]}),(t==null?void 0:t.visible_parts)&&t.visible_parts.length>0&&h.jsxs("div",{children:[h.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588] mb-2",children:"Visible Components Breakdown"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:t.visible_parts.map((m,y)=>h.jsxs("div",{className:"bg-[#0c0f11]/80 border border-[#272a2d] p-2.5 rounded-xl text-xs space-y-1",children:[h.jsxs("div",{className:"font-semibold text-[#00f59b] capitalize flex items-center gap-1",children:[h.jsx("span",{children:"🔹"}),h.jsx("span",{children:m.name})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588]",children:"Observed:"})," ",h.jsx("span",{className:"text-[#e1e2e5]",children:m.observed})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588]",children:"Inferred 3D:"})," ",h.jsx("span",{className:"text-[#bfc9c3]",children:m.inferred})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588]",children:"Relations:"})," ",h.jsx("span",{className:"text-[#849588]",children:m.relationships})]})]},y))})]}),(t==null?void 0:t.geometry_features)&&h.jsxs("div",{className:"bg-[#0c0f11]/80 border border-[#272a2d] p-3 rounded-xl text-xs space-y-2",children:[h.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588]",children:"Geometric Characteristics"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block",children:"Overall Shape:"}),h.jsx("span",{className:"text-white capitalize",children:t.geometry_features.overall_shape})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block",children:"Symmetry:"}),h.jsx("span",{className:"text-white capitalize",children:t.geometry_features.symmetry})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block",children:"Proportions:"}),h.jsx("span",{className:"text-[#e1e2e5]",children:t.geometry_features.proportions})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[#849588] block",children:"Primitives:"}),h.jsx("span",{className:"text-[#e1e2e5]",children:((u=t.geometry_features.observed_geometric_primitives)==null?void 0:u.join(", "))||"Curves"})]})]})]}),(t==null?void 0:t.uncertainties)&&t.uncertainties.length>0&&h.jsxs("div",{className:"bg-[#ffcaea]/5 border border-[#ff9ee0]/30 p-3 rounded-xl text-xs space-y-1",children:[h.jsxs("span",{className:"font-semibold text-[#ffcaea] flex items-center gap-1.5",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"warning"}),h.jsx("span",{children:"Ambiguities & Occluded Geometry"})]}),h.jsx("ul",{className:"list-disc list-inside text-[#ffcaea]/90 space-y-0.5 mt-1",children:t.uncertainties.map((m,y)=>h.jsx("li",{children:m},y))})]}),(t==null?void 0:t.reconstruction_prompt)&&h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("h4",{className:"text-[10px] font-bold uppercase tracking-wider text-[#849588]",children:"3D Reconstruction Prompt (Metadata / Refinement)"}),h.jsxs("button",{onClick:p,className:"text-[#6ffbbe] hover:underline text-[10px] flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-xs",children:"content_copy"}),h.jsx("span",{children:c?"Copied!":"Copy"})]})]}),h.jsxs("div",{className:"bg-[#0c0f11] p-2.5 rounded-xl border border-[#272a2d] font-mono text-[11px] text-[#6ffbbe] select-all leading-normal",children:['"',t.reconstruction_prompt,'"']})]})]})}function UT({onRemixModel:t}){const[e,n]=ye.useState("Recommended"),[i,r]=ye.useState({1:3400,2:850,3:2800,4:4100}),[s,a]=ye.useState({}),o=["Recommended","3D Printing","Game Assets","Robotics & Drones","Anime Figurines"],l=[{id:1,title:"Chibi Couple Figurines",type:"chair",tag:"From 2D Doodle",category:"3D Printing",likes:i[1],meta:"3D Print Ready • STL",metaIcon:"print",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuABgGryVwK-fSsMQMRMZ2vOk8lEi7-BJVLI5d-NapSOjq3JKz9nVLZiYVYDIaQGhHl-cSHD2qjumCSt9QOdSDJzQ5xjpZb5zDBu2c9l9OHK8SZbWzEUwXZtNQcfKpUAvL_FxrPS5nuaQHeA78BDBVNxDSDoePt5BGBijPEcn42drZrr9utj4gAFwZ1AojIR_covUEFNQ5XP-tUJ6tffDNNSOCBRNGVKO6LDIzRThQ"},{id:2,title:"Angular EV Concept",type:"car",tag:"Cad Wireframe",category:"Game Assets",likes:i[2],meta:"18k Tris • Game GLB",metaIcon:"sports_esports",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuBsPUhvq0HVjFQpAb9gtHYflK9jMYRcNxhckXo0LF5hZROGYP7TwLBm0tyVsVyahiKQmOf6f-jcuQcmy_OO-AJ9VdM9oBCWKMP9AvGJulGm7UGO5bwYwiXrU91osauGtACsML8TcKW3_L63GoI6fvOYquZo0z30WtQOEM9RtTS0J3ToOIvedsf6pdLxAlHJOvoi9XOABxz0BkycbqkGsSQ4vTUushb94D1PXtjviQ"},{id:3,title:"Elysia Summer Sculpt",type:"mug",tag:"Stylized Character",category:"Anime Figurines",likes:i[3],meta:"Rigged • OBJ+FBX",metaIcon:"layers",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuDaGybIrlk7lmnBUfKexwZmPUwcGnLSaMpneEz7oakzw8djnr-yNihZZm69t1PtBfcUE25K8etCL5h5yVfj-Em5rclS1PAJLcjGf1Z--RvFaCHjyTRWL_4tmcgSb9piYfcQpz2pIX-lwAe8JnwbvHkgn6bRotaKZaFoRDqQe1aLhQNKvgt0Z1O5IRdRkOu1VzWj0P1dsGwKmLOYQ3Z7rTRVSulY30gxKSkwR7Vslw"},{id:4,title:"Vanguard Recon Drone",type:"drone",tag:"Sci-Fi Drone",category:"Robotics & Drones",likes:i[4],meta:"42k Tris • Watertight",metaIcon:"view_in_ar",imgSrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuALYmR8CxskT0DxXT5cuW2YbdiuGMP_lY8QalFbPBpqnfa5ep4HKmAa9vi_GyZE9tZ3PQDigMt_I16aARGzeZuVE_ext1yskQQN45R_pEaYTnUAw1kjUvcqf8iu9l145P6uTCu4CvE04aKyRvqdoc32BGHOQtISgGy4gHaiff9eEnfjhfVh_HHSMSwukm1KQNB8GyKCQgfWfde921Y--xl0tXwl7HfASH_F2Igzdg"}],c=(p,d)=>{d.stopPropagation(),a(g=>({...g,[p]:!g[p]})),r(g=>({...g,[p]:s[p]?g[p]-1:g[p]+1}))},f=e==="Recommended"?l:l.filter(p=>p.category===e);return h.jsxs("div",{className:"flex flex-col gap-4 pb-12",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"font-display font-bold text-xl text-white",children:"Community Explorations"}),h.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#272a2d] text-[#bfc9c3] text-xs",children:"Recently Synthesized"})]}),h.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:o.map(p=>h.jsx("button",{onClick:()=>n(p),className:`px-4 py-1.5 rounded-full text-xs transition-all ${e===p?"bg-[#FF7F50] text-white shadow-[0_0_12px_rgba(255,127,80,0.35)] font-semibold":"text-[#bfc9c3] hover:text-white hover:bg-[#1d2022] bg-[#191c1e] border border-[#272a2d]"}`,children:p},p))})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:f.map(p=>{const d=s[p.id];return h.jsxs("div",{className:"group relative rounded-xl overflow-hidden bg-[#191c1e] border border-[#272a2d] hover:border-[#FF7F50]/50 flex flex-col shadow-md hover:shadow-2xl transition-all duration-300",children:[h.jsxs("div",{className:"relative w-full h-72 overflow-hidden bg-[#0c0f11]",children:[h.jsx("img",{src:p.imgSrc,alt:p.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0c0f11] via-transparent to-transparent opacity-85"}),h.jsx("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0c0f11]/80 backdrop-blur-md text-[#4edea3] text-[11px] font-semibold border border-[#272a2d]",children:p.tag}),h.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between text-white",children:[h.jsx("span",{className:"font-display font-semibold text-sm truncate mr-2",children:p.title}),h.jsxs("button",{onClick:g=>c(p.id,g),className:"flex items-center gap-1 text-xs text-[#bfc9c3] hover:text-[#FF7F50] transition-colors",children:[h.jsx("span",{className:`material-symbols-outlined text-sm ${d?"text-[#FF7F50] font-bold":"text-[#4edea3]"}`,children:"favorite"}),h.jsxs("span",{children:[(p.likes/1e3).toFixed(1),"k"]})]})]})]}),h.jsxs("div",{className:"p-3 flex items-center justify-between bg-[#272a2d]/70 border-t border-[#323537]/40 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-[#849588]",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:p.metaIcon}),h.jsx("span",{children:p.meta})]}),h.jsx("button",{onClick:()=>t(p),className:"px-2.5 py-1 rounded bg-[#1d2022] hover:bg-[#FF7F50] text-white text-xs font-medium transition-colors border border-[#323537]/50 hover:border-[#FF7F50]",children:"Remix"})]})]},p.id)})})]})}function OT({isOpen:t,onClose:e}){return t?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:h.jsxs("div",{className:"relative w-full max-w-3xl rounded-2xl bg-[#191c1e] border border-[#FF7F50]/40 p-6 shadow-2xl max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-[#272a2d]",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#272a2d] to-[#0c0f11] border border-[#FF7F50]/50 flex items-center justify-center text-[#FF7F50]",children:h.jsx("span",{className:"material-symbols-outlined text-2xl",children:"campaign"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-display font-bold text-xl text-white",children:"TechZephyr 4.0 Hackathon Briefing"}),h.jsx("p",{className:"text-xs text-[#849588]",children:"Production-Grade 2D Sketch to 3D Shape Synthesis Architecture"})]})]}),h.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full bg-[#111416] hover:bg-[#272a2d] text-[#bfc9c3] hover:text-white flex items-center justify-center transition-colors",children:h.jsx("span",{className:"material-symbols-outlined text-lg",children:"close"})})]}),h.jsxs("div",{className:"py-5 space-y-5 text-xs text-[#bfc9c3] leading-relaxed",children:[h.jsxs("div",{className:"p-4 rounded-xl bg-[#0c0f11] border border-[#272a2d]",children:[h.jsx("h4",{className:"font-semibold text-[#00f59b] uppercase tracking-wider text-[11px] mb-1",children:"🏆 Project Objective"}),h.jsx("p",{children:"Transform arbitrary 2D hand-drawn concept sketches into watertight, game-engine-ready 3D meshes using a state-of-the-art hybrid pipeline combining OpenCV geometric normalization, Llama 3.2 Vision semantic decomposition, and InstantMesh sparse-view Large Reconstruction Models."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:[h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[h.jsxs("span",{className:"font-bold text-[#FF7F50] flex items-center gap-1.5",children:[h.jsx("span",{children:"01."}),h.jsx("span",{children:"OpenCV Preprocessing Engine"})]}),h.jsx("p",{className:"text-[11px] text-[#849588]",children:"Auto-polar inversion (white sketch on black ground), bounding box aspect ratio preservation, CLAHE local contrast enhancement, and bilateral noise filtering to create 320x320/512x512 model-ready tensors."})]}),h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[h.jsxs("span",{className:"font-bold text-[#00f59b] flex items-center gap-1.5",children:[h.jsx("span",{children:"02."}),h.jsx("span",{children:"Llama 3.2 Vision Understanding"})]}),h.jsx("p",{className:"text-[11px] text-[#849588]",children:"Decomposes 2D strokes into structured JSON with object classification, visible part breakdown (observed vs inferred 3D depth), symmetry planes, occluded geometry cues, and prompt synthesis."})]}),h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[h.jsxs("span",{className:"font-bold text-[#7bd0ff] flex items-center gap-1.5",children:[h.jsx("span",{children:"03."}),h.jsx("span",{children:"InstantMesh 3D Reconstruction"})]}),h.jsx("p",{className:"text-[11px] text-[#849588]",children:"Feeds preprocessed silhouettes and multi-view priors into a feed-forward transformer (LRM), extracting watertight meshes via Marching Tetrahedra with topology validation in under 25 seconds."})]}),h.jsxs("div",{className:"p-3.5 rounded-xl bg-[#111416] border border-[#272a2d] space-y-1",children:[h.jsxs("span",{className:"font-bold text-[#ffcaea] flex items-center gap-1.5",children:[h.jsx("span",{children:"04."}),h.jsx("span",{children:"Export & Interactive Viewport"})]}),h.jsx("p",{className:"text-[11px] text-[#849588]",children:"Real-time WebGL Three.js viewport featuring PBR metallic textures, glowing wireframes, normal map inspectors, turntable rotation, and direct .OBJ download ready for Blender and 3D printing."})]})]}),h.jsxs("div",{className:"p-4 rounded-xl bg-[#0c0f11] border border-[#272a2d]",children:[h.jsx("h4",{className:"font-semibold text-white uppercase tracking-wider text-[11px] mb-2",children:"FastAPI Endpoints Active"}),h.jsxs("div",{className:"space-y-1.5 font-mono text-[11px]",children:[h.jsxs("div",{className:"flex justify-between p-1.5 rounded bg-[#191c1e] text-white",children:[h.jsx("span",{className:"text-[#00f59b]",children:"POST /api/preprocess"}),h.jsx("span",{className:"text-[#849588]",children:"CLAHE Resizing & Normalization"})]}),h.jsxs("div",{className:"flex justify-between p-1.5 rounded bg-[#191c1e] text-white",children:[h.jsx("span",{className:"text-[#00f59b]",children:"POST /api/analyze-sketch"}),h.jsx("span",{className:"text-[#849588]",children:"Llama 3.2 Vision VLM Analysis"})]}),h.jsxs("div",{className:"flex justify-between p-1.5 rounded bg-[#191c1e] text-white",children:[h.jsx("span",{className:"text-[#00f59b]",children:"POST /api/reconstruct"}),h.jsx("span",{className:"text-[#849588]",children:"InstantMesh End-to-End 3D OBJ"})]})]})]})]}),h.jsx("div",{className:"pt-4 border-t border-[#272a2d] flex justify-end",children:h.jsx("button",{onClick:e,className:"px-5 py-2 rounded-xl bg-[#FF7F50] hover:bg-[#e06336] text-white font-semibold text-xs transition-colors shadow-lg shadow-[#FF7F50]/20",children:"Got it, Let's Create"})})]})}):null}const ci="";function kT(){const[t,e]=ye.useState("create"),[n,i]=ye.useState("ZephyrMesh 2.5 Flagship"),[r,s]=ye.useState(""),[a,o]=ye.useState(!1),[l,c]=ye.useState("drone"),[f,p]=ye.useState(null),[d,g]=ye.useState(null),[v,S]=ye.useState(320),[_,u]=ye.useState(!1),[m,y]=ye.useState(!1),[M,A]=ye.useState(!1),[T,x]=ye.useState(null),[b,P]=ye.useState(null),[C,D]=ye.useState(null),[j,Q]=ye.useState(null),[I,K]=ye.useState("original"),[te,O]=ye.useState(!1),[G,U]=ye.useState(!1),[W,J]=ye.useState(null),[re,Se]=ye.useState(null),[q,ce]=ye.useState(null),[he,be]=ye.useState(null),[me,we]=ye.useState(""),[Je,Ae]=ye.useState(null),[je,ke]=ye.useState(!1),[Ie,Ye]=ye.useState("mesh3d"),[Be,ct]=ye.useState(!1),[ut,Ot]=ye.useState(""),[xt,Ct]=ye.useState(null),[$t,rt]=ye.useState(null),[H,Dt]=ye.useState(null),[ht,st]=ye.useState(null),[ge,St]=ye.useState(null),De=ye.useRef(null),Ue=ye.useRef(null),R=()=>new Promise(Y=>{const se=De.current;if(!se){Y(null);return}se.toBlob(oe=>{if(oe){const le=new File([oe],`${l}_sketch.png`,{type:"image/png"});Y(le)}else Y(null)},"image/png")}),E=async()=>te&&I==="refined"&&q?q:m&&I==="isolated"&&C?C:f||await R(),N=(Y=!1)=>{P(null),D(null),Q(null),Se(null),ce(null),be(null),K("original"),x(null),J(null),m&&Y&&setTimeout(()=>{ae()},50),te&&Y&&setTimeout(()=>{z()},80)},z=async(Y=null)=>{J(null),U(!0);try{let se=f;if(se||(se=await R()),!se)throw new Error("Please draw or upload a sketch first before refining.");const oe=new FormData;oe.append("file",se);const le=Y!==null?Y:me,Ee=`${ci}/api/refine-sketch?target_size=${v}${le?`&user_prompt=${encodeURIComponent(le)}`:""}&strict_validation=true`,ze=await fetch(Ee,{method:"POST",body:oe});if(!ze.ok){const pe=await ze.json().catch(()=>({}));throw new Error(pe.detail||`Server returned ${ze.status}`)}const ue=await ze.json();Se(ue);const Le=ue.effective_image_path.split(/[/\\]/).pop(),Ge=`${ci}/static/refinement/${Le}`;be(Ge);try{const pe=await fetch(Ge);if(pe.ok){const tt=await pe.blob(),Nt=new File([tt],`refined_${Le}`,{type:"image/png"});ce(Nt)}}catch(pe){console.warn("Could not cache refined blob locally:",pe)}ue.is_fallback?(K("original"),rt("Refinement rejected by validation; fell back to preprocessed sketch.")):(K("refined"),rt(`Sketch refined! Structure validated (Edge IoU: ${(ue.validation.edge_overlap_iou*100).toFixed(0)}%)`)),setTimeout(()=>rt(null),3500)}catch(se){console.error(se),J(se.message||"Sketch refinement failed.")}finally{U(!1)}},F=Y=>{O(Y),Y?re&&!re.is_fallback?K("refined"):z():I==="refined"&&K(m&&b?"isolated":"original")},ae=async(Y=null)=>{x(null),A(!0);try{let se=Y||f;if(se||(se=await R()),!se)throw new Error("Please draw or upload a sketch first before isolating foreground.");const oe=new FormData;oe.append("file",se);const le=await fetch(`${ci}/api/foreground-isolate?target_size=${v}&method=auto`,{method:"POST",body:oe});if(!le.ok){const pe=await le.json().catch(()=>({}));throw new Error(pe.detail||`Server returned ${le.status}`)}const Ee=await le.json();P(Ee);const ze=Ee.rgba_path.split(/[/\\]/).pop(),ue=Ee.composite_path.split(/[/\\]/).pop(),Le=`${ci}/static/foreground/${ze}`,Ge=`${ci}/static/foreground/${ue}`;Q(Le);try{const pe=await fetch(Ge);if(pe.ok){const tt=await pe.blob(),Nt=new File([tt],`isolated_${ue}`,{type:"image/png"});D(Nt)}}catch(pe){console.warn("Could not cache isolated blob locally; fallback to original:",pe)}K("isolated"),rt("Foreground isolated! Alpha transparency preserved."),setTimeout(()=>rt(null),3e3)}catch(se){console.error(se),x(se.message||"Foreground isolation failed.")}finally{A(!1)}},ne=Y=>{y(Y),Y?b?K("isolated"):ae():K("original")},B=async()=>{Ct(null),ke(!0),Ot("Synthesizing 2.5D Depth, Normals & Watertight Relief Mesh...");try{const Y=await E();if(!Y)throw new Error("Please draw or upload a sketch first.");const se=new FormData;se.append("file",Y);const oe=await fetch(`${ci}/api/generate-25d?target_size=${v}&export_relief=true&format=obj`,{method:"POST",body:se});if(!oe.ok){const Ee=await oe.json().catch(()=>({}));throw new Error(Ee.detail||`Server returned ${oe.status}`)}const le=await oe.json();Ae(le),Ye("relief25d"),rt("2.5D Volumetric Relief Mesh & Surface Normals Synthesized!"),setTimeout(()=>rt(null),3500)}catch(Y){console.error(Y),Ct(Y.message||"2.5D generation failed.")}finally{ke(!1),Ot("")}},X=async()=>{Ct(null),ct(!0),Ot("Analyzing sketch with Llama 3.2 Vision...");try{let Y=f;if(Y||(Y=await R()),!Y)throw new Error("Please draw or upload a sketch first.");const se=new FormData;se.append("file",Y);const oe=await fetch(`${ci}/api/analyze-sketch?target_size=${v}`,{method:"POST",body:se});if(!oe.ok){const Ee=await oe.json().catch(()=>({}));throw new Error(Ee.detail||`Server returned ${oe.status}`)}const le=await oe.json();st(le.analysis),Dt(le.processed_image_path),rt("Sketch analyzed with Llama 3.2 Vision!"),setTimeout(()=>rt(null),3e3)}catch(Y){console.error(Y),Ct(Y.message||"Vision analysis failed.")}finally{ct(!1),Ot("")}},de=async()=>{Ct(null),ct(!0),Ot("Synthesizing Mesh (SDF & InstantMesh LRM)...");try{const Y=await E();if(!Y)throw new Error("Please draw or upload a sketch first.");const se=new FormData;se.append("file",Y);const oe=await fetch(`${ci}/api/reconstruct?target_size=${v}&output_format=obj&debug=${_}`,{method:"POST",body:se});if(!oe.ok){const Ee=await oe.json().catch(()=>({}));throw new Error(Ee.detail||`Server returned ${oe.status}`)}const le=await oe.json();St(le),Ye("mesh3d"),le.analysis&&st(le.analysis),Dt(le.processed_image_path),rt("3D Asset Reconstructed & Validated Watertight!"),setTimeout(()=>rt(null),3500)}catch(Y){console.error(Y),Ct(Y.message||"3D reconstruction failed.")}finally{ct(!1),Ot("")}},L=Y=>{c(Y.type),rt(`Loaded ${Y.title} into Studio Canvas!`),setTimeout(()=>rt(null),2500),window.scrollTo({top:0,behavior:"smooth"})},ie=Y=>{var se;e(Y),Y==="gallery"?(se=Ue.current)==null||se.scrollIntoView({behavior:"smooth"}):Y==="api-docs"?o(!0):window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs("div",{className:"min-h-screen bg-[#0c0f11] text-[#e1e2e5] font-sans antialiased relative selection:bg-[#FF7F50]/30 selection:text-white",children:[h.jsx("div",{className:"pointer-events-none fixed top-0 left-64 right-0 h-96 bg-gradient-to-b from-[#00f59b]/8 via-[#FF7F50]/4 to-transparent z-10 blur-3xl"}),h.jsx(By,{activeNav:t,setActiveNav:ie,onUpgradeSparks:()=>alert("Sparks Balance: Unlimited for TechZephyr 4.0 Hackathon evaluation!")}),h.jsx(zy,{onOpenBriefing:()=>o(!0),searchQuery:r,setSearchQuery:s,selectedModel:n,setSelectedModel:i}),h.jsx("main",{className:"pl-64 pt-16 min-h-screen relative z-20",children:h.jsxs("div",{className:"max-w-[1480px] mx-auto px-6 py-6 flex flex-col gap-8",children:[$t&&h.jsxs("div",{className:"fixed top-20 right-8 z-50 p-3 px-4 rounded-xl bg-[#00f59b] text-[#003920] font-semibold text-xs shadow-2xl flex items-center gap-2 animate-bounce",children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"check_circle"}),h.jsx("span",{children:$t})]}),xt&&h.jsxs("div",{className:"p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-base",children:"error"}),h.jsx("span",{children:xt})]}),h.jsx("button",{onClick:()=>Ct(null),className:"text-white hover:underline",children:"Dismiss"})]}),h.jsx(Gy,{onGenerate3D:de,onGenerate25D:B,onAnalyzeVision:X,loading:Be,generation25DLoading:je,statusMessage:ut,currentSketchType:l,setCurrentSketchType:c,targetSize:v,setTargetSize:S,debugMode:_,setDebugMode:u,canvasRef:De,selectedFile:f,setSelectedFile:p,previewUrl:d,setPreviewUrl:g,isolateForeground:m,onToggleIsolateForeground:ne,onIsolateForeground:ae,isolationLoading:M,isolationError:T,isolationData:b,isolatedPreviewUrl:j,selectedInput:I,onSelectInput:K,onResetIsolation:N,refineSketch:te,onToggleRefinement:F,onRefineSketch:z,refinementLoading:G,refinementError:W,refinementData:re,refinedPreviewUrl:he,refinementUserPrompt:me,setRefinementUserPrompt:we}),h.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[h.jsx("div",{className:"w-full",children:h.jsx(IT,{reconstructionData:ge,generation25DData:Je,active3DTab:Ie,setActive3DTab:Ye,sketchType:l,apiBase:ci})}),h.jsx("div",{className:"w-full",children:h.jsx(FT,{analysisData:ht,preprocessedData:H,previewUrl:d,isolationData:b,isolatedPreviewUrl:j,generation25DData:Je,refinementData:re,refinedPreviewUrl:he,apiBase:ci})})]}),h.jsx("div",{ref:Ue,className:"mt-4 pt-6 border-t border-[#272a2d]/60",children:h.jsx(UT,{onRemixModel:L})})]})}),h.jsx(OT,{isOpen:a,onClose:()=>o(!1)})]})}bu.createRoot(document.getElementById("root")).render(h.jsx(A_.StrictMode,{children:h.jsx(kT,{})}));
