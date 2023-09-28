(function(F,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],d):(F=typeof globalThis<"u"?globalThis:F||self,d(F.MyLib={},F.React))})(this,function(F,d){"use strict";var q={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Me(){if(ve)return V;ve=1;var C=d,x=Symbol.for("react.element"),k=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,E=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function R(S,m,D){var f,_={},T=null,I=null;D!==void 0&&(T=""+D),m.key!==void 0&&(T=""+m.key),m.ref!==void 0&&(I=m.ref);for(f in m)b.call(m,f)&&!A.hasOwnProperty(f)&&(_[f]=m[f]);if(S&&S.defaultProps)for(f in m=S.defaultProps,m)_[f]===void 0&&(_[f]=m[f]);return{$$typeof:x,type:S,key:T,ref:I,props:_,_owner:E.current}}return V.Fragment=k,V.jsx=R,V.jsxs=R,V}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function We(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&function(){var C=d,x=Symbol.for("react.element"),k=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),S=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),$=Symbol.iterator,L="@@iterator";function B(e){if(e===null||typeof e!="object")return null;var r=$&&e[$]||e[L];return typeof r=="function"?r:null}var j=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];re("error",e,t)}}function re(e,r,t){{var a=j.ReactDebugCurrentFrame,s=a.getStackAddendum();s!==""&&(r+="%s",t=t.concat([s]));var l=t.map(function(o){return String(o)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var te=!1,J=!1,ae=!1,c=!1,i=!1,u;u=Symbol.for("react.module.reference");function M(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===A||i||e===E||e===D||e===f||c||e===I||te||J||ae||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===_||e.$$typeof===R||e.$$typeof===S||e.$$typeof===m||e.$$typeof===u||e.getModuleId!==void 0))}function ne(e,r,t){var a=e.displayName;if(a)return a;var s=r.displayName||r.name||"";return s!==""?t+"("+s+")":t}function me(e){return e.displayName||"Context"}function w(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case k:return"Portal";case A:return"Profiler";case E:return"StrictMode";case D:return"Suspense";case f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:var r=e;return me(r)+".Consumer";case R:var t=e;return me(t._context)+".Provider";case m:return ne(e,e.render,"ForwardRef");case _:var a=e.displayName||null;return a!==null?a:w(e.type)||"Memo";case T:{var s=e,l=s._payload,o=s._init;try{return w(o(l))}catch{return null}}}return null}var N=Object.assign,G=0,he,ge,be,_e,ye,Ee,Re;function xe(){}xe.__reactDisabledLog=!0;function Ve(){{if(G===0){he=console.log,ge=console.info,be=console.warn,_e=console.error,ye=console.group,Ee=console.groupCollapsed,Re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:xe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}G++}}function Ue(){{if(G--,G===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},e,{value:he}),info:N({},e,{value:ge}),warn:N({},e,{value:be}),error:N({},e,{value:_e}),group:N({},e,{value:ye}),groupCollapsed:N({},e,{value:Ee}),groupEnd:N({},e,{value:Re})})}G<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=j.ReactCurrentDispatcher,ie;function H(e,r,t){{if(ie===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);ie=a&&a[1]||""}return`
`+ie+e}}var se=!1,K;{var Be=typeof WeakMap=="function"?WeakMap:Map;K=new Be}function Te(e,r){if(!e||se)return"";{var t=K.get(e);if(t!==void 0)return t}var a;se=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=oe.current,oe.current=null,Ve();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(O){a=O}Reflect.construct(e,[],o)}else{try{o.call()}catch(O){a=O}e.call(o.prototype)}}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var n=O.stack.split(`
`),y=a.stack.split(`
`),p=n.length-1,h=y.length-1;p>=1&&h>=0&&n[p]!==y[h];)h--;for(;p>=1&&h>=0;p--,h--)if(n[p]!==y[h]){if(p!==1||h!==1)do if(p--,h--,h<0||n[p]!==y[h]){var P=`
`+n[p].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,P),P}while(p>=1&&h>=0);break}}}finally{se=!1,oe.current=l,Ue(),Error.prepareStackTrace=s}var Y=e?e.displayName||e.name:"",Le=Y?H(Y):"";return typeof e=="function"&&K.set(e,Le),Le}function Je(e,r,t){return Te(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function X(e,r,t){if(e==null)return"";if(typeof e=="function")return Te(e,Ge(e));if(typeof e=="string")return H(e);switch(e){case D:return H("Suspense");case f:return H("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return Je(e.render);case _:return X(e.type,r,t);case T:{var a=e,s=a._payload,l=a._init;try{return X(l(s),r,t)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,Pe={},Ce=j.ReactDebugCurrentFrame;function Q(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(t)}else Ce.setExtraStackFrame(null)}function ze(e,r,t,a,s){{var l=Function.call.bind(Z);for(var o in e)if(l(e,o)){var n=void 0;try{if(typeof e[o]!="function"){var y=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}n=e[o](r,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(p){n=p}n&&!(n instanceof Error)&&(Q(s),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),Q(null)),n instanceof Error&&!(n.message in Pe)&&(Pe[n.message]=!0,Q(s),g("Failed %s type: %s",t,n.message),Q(null))}}}var $e=Array.isArray;function le(e){return $e(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ke(e){try{return je(e),!1}catch{return!0}}function je(e){return""+e}function Se(e){if(Ke(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),je(e)}var z=j.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},we,Oe,ue;ue={};function Ze(e){if(Z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function qe(e,r){if(typeof e.ref=="string"&&z.current&&r&&z.current.stateNode!==r){var t=w(z.current.type);ue[t]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(z.current.type),e.ref),ue[t]=!0)}}function er(e,r){{var t=function(){we||(we=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function rr(e,r){{var t=function(){Oe||(Oe=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var tr=function(e,r,t,a,s,l,o){var n={$$typeof:x,type:e,key:r,ref:t,props:o,_owner:l};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function ar(e,r,t,a,s){{var l,o={},n=null,y=null;t!==void 0&&(Se(t),n=""+t),Qe(r)&&(Se(r.key),n=""+r.key),Ze(r)&&(y=r.ref,qe(r,s));for(l in r)Z.call(r,l)&&!Xe.hasOwnProperty(l)&&(o[l]=r[l]);if(e&&e.defaultProps){var p=e.defaultProps;for(l in p)o[l]===void 0&&(o[l]=p[l])}if(n||y){var h=typeof e=="function"?e.displayName||e.name||"Unknown":e;n&&er(o,h),y&&rr(o,h)}return tr(e,n,y,s,a,z.current,o)}}var ce=j.ReactCurrentOwner,ke=j.ReactDebugCurrentFrame;function W(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(t)}else ke.setExtraStackFrame(null)}var fe;fe=!1;function de(e){return typeof e=="object"&&e!==null&&e.$$typeof===x}function De(){{if(ce.current){var e=w(ce.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Fe={};function or(e){{var r=De();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ne(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=or(r);if(Fe[t])return;Fe[t]=!0;var a="";e&&e._owner&&e._owner!==ce.current&&(a=" It was passed a child from "+w(e._owner.type)+"."),W(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),W(null)}}function Ae(e,r){{if(typeof e!="object")return;if(le(e))for(var t=0;t<e.length;t++){var a=e[t];de(a)&&Ne(a,r)}else if(de(e))e._store&&(e._store.validated=!0);else if(e){var s=B(e);if(typeof s=="function"&&s!==e.entries)for(var l=s.call(e),o;!(o=l.next()).done;)de(o.value)&&Ne(o.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===m||r.$$typeof===_))t=r.propTypes;else return;if(t){var a=w(r);ze(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!fe){fe=!0;var s=w(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",s||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){W(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),W(null);break}}e.ref!==null&&(W(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}function Ie(e,r,t,a,s,l){{var o=M(e);if(!o){var n="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=nr(s);y?n+=y:n+=De();var p;e===null?p="null":le(e)?p="array":e!==void 0&&e.$$typeof===x?(p="<"+(w(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):p=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",p,n)}var h=ar(e,r,t,s,l);if(h==null)return h;if(o){var P=r.children;if(P!==void 0)if(a)if(le(P)){for(var Y=0;Y<P.length;Y++)Ae(P[Y],e);Object.freeze&&Object.freeze(P)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ae(P,e)}return e===b?sr(h):ir(h),h}}function lr(e,r,t){return Ie(e,r,t,!0)}function ur(e,r,t){return Ie(e,r,t,!1)}var cr=ur,fr=lr;U.Fragment=b,U.jsx=cr,U.jsxs=fr}()),U}process.env.NODE_ENV==="production"?q.exports=Me():q.exports=We();var v=q.exports;const dr="",ee=[10,25,50,100],Ye=(C={data:[],columns:[],listNbPerPage:ee})=>{const x=d.useMemo(()=>C.data,[C.data]),k=d.useMemo(()=>C.columns,[C.columns]),b=d.useMemo(()=>C.listNbPerPage.length>0?C.listNbPerPage:ee,[C.listNbPerPage]),[E,A]=d.useState(0),[R,S]=d.useState(k[0].data??""),[m,D]=d.useState(!1),[f,_]=d.useState(0),[T,I]=d.useState(""),$=c=>{T!=c.target.value&&(I(c.target.value),_(0))},L=d.useMemo(()=>{if(T=="")return x;let c=[];for(let i=0;i<x.length;i++){let u=!1;for(const[M,ne]of Object.entries(x[i]))if(!u&&ne.toLowerCase().includes(T.toLowerCase())){c.push(x[i]),u=!0;break}}return c},[x,T]),B=d.useMemo(()=>f>0,[f]),j=d.useMemo(()=>(f+1)*b[E]<L.length,[f,b,E,L.length]),g=d.useCallback(()=>{B&&_(c=>c-1)},[B]),re=d.useCallback(()=>{j&&_(c=>c+1)},[j]),te=d.useMemo(()=>{const c=i=>()=>{document.querySelectorAll(".sorting, .sorting_asc, .sorting_desc").forEach(u=>{u.classList.remove("sorting_asc"),u.classList.remove("sorting_desc"),u.classList.remove("sorting"),u.id!=`col-${i.toLowerCase().split(" ").join("-")}`?u.classList.add("sorting"):u.classList.add(`sorting${m?"_asc":"_desc"}`)}),S(i),D(u=>!u),_(0)};return v.jsx("thead",{children:v.jsx("tr",{children:k.map((i,u)=>v.jsx("th",{scope:"col",id:`col-${i.title.toLowerCase().split(" ").join("")}`,className:`sorting${u==0?"_asc":""}`,onClick:c(i.data),children:i.title},`col-${u}`))})})},[k,R,m]),J=d.useMemo(()=>{let c=L.sort((i,u)=>{if(R in i&&R in u){if(i[R]<u[R])return 1;if(i[R]>u[R])return-1}return 0});return m?c:c.reverse()},[L,R,m]),ae=c=>{A(Number(c.target.value)),_(0)};return v.jsxs("div",{id:"employee-table_wrapper",className:"dataTables_wrapper no-footer",children:[v.jsx("div",{className:"dataTables_length",id:"employee-table_length",children:v.jsxs("label",{htmlFor:"show",children:["Show ",v.jsxs("select",{name:"employee-table_length","aria-controls":"employee-table",onChange:ae,children:[" ",ee.map((c,i)=>v.jsxs("option",{value:i,children:[" ",c," "]},`max-per-page-${i}`))," "]})," entries"]})}),v.jsx("div",{id:"employee-table_filter",className:"dataTables_filter",children:v.jsxs("label",{htmlFor:"search",children:["Search:",v.jsx("input",{type:"text",name:"search",id:"search","aria-controls":"employee-table",onChange:$})]})}),v.jsxs("table",{id:"employee-table",className:"display dataTable",children:[te,v.jsx("tbody",{children:J.filter((c,i)=>{const u=f*b[E],M=u+b[E];return u<=i&&i<M}).map((c,i)=>v.jsx("tr",{role:"row",className:`${i%2==0?"odd":"even"}`,children:k.map((u,M)=>v.jsx("td",{children:c[u.data]},`elem-${i}-to-${M}`))},`data-line-${i}`))})]}),v.jsxs("div",{className:"dataTables_info",id:"employee-table_info",role:"status",children:["Showing ",f*b[E]+1," to ",Math.min(x.length,f*b[E]+b[E])," of ",x.length," entries"]}),v.jsxs("div",{className:"dataTables_paginate paging_simple_numbers",id:"employee-table_paginate",children:[v.jsx("a",{className:`paginate_button previous ${B?"":"disabled"}`,id:"employee-table_previous",onClick:g,"aria-controls":"employee-table","data-dt-idx":0,tabIndex:-1,children:"Previous"}),v.jsx("span",{children:Array.from(Array((J.length-J.length%b[E])/b[E]+1),(c,i)=>v.jsx("a",{className:`paginate_button ${f==i?"current":""}`,"aria-controls":"employee-table","data-dt-idx":i+1,tabIndex:0,onClick:()=>_(i),children:i+1},`pagination-page-${i}`))}),v.jsx("a",{className:`paginate_button next ${j?"":"disabled"}`,"aria-controls":"employee-table","data-dt-idx":"3",tabIndex:0,id:"employee-table_next",onClick:re,children:"Next"})]})]})};F.DataTableComponent=Ye,Object.defineProperty(F,Symbol.toStringTag,{value:"Module"})});
