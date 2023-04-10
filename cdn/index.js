function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t={};function r(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}e(t,"filterArray",(()=>S)),e(t,"filter",(()=>T)),e(t,"filterObject",(()=>E));var n={};r(n,"isAsync",(()=>c)),r(n,"describe",(()=>i)),r(n,"isInstanceOf",(()=>y)),r(n,"specificTypeMatch",(()=>p)),r(n,"describeType",(()=>g)),r(n,"typeJSON",(()=>b)),r(n,"typeJS",(()=>$)),r(n,"matchType",(()=>O)),r(n,"exampleAtPath",(()=>j)),r(n,"TypeError",(()=>A)),r(n,"assignReadOnly",(()=>x)),r(n,"matchParamTypes",(()=>N)),r(n,"typeSafe",(()=>P));const s=e=>{try{return JSON.stringify(e)}catch(e){return"{has circular references}"}},o=(...e)=>new Error(e.map(s).join(" ")),a=async()=>{},c=e=>e.constructor===a.constructor,i=e=>null===e?"null":Array.isArray(e)?"array":"number"==typeof e&&isNaN(e)?"NaN":"string"==typeof e&&e.startsWith("#")?e:e instanceof Promise?"promise":"function"==typeof e?e.constructor===(async()=>{}).constructor?"async":"function":"object"==typeof e&&"Object"!==e.constructor.name?e.constructor.name:typeof e,u=e=>"-∞"===e?-1/0:"∞"===e[0]?1/0:parseFloat(e),f=(e,t)=>{let r,n;if(void 0===e)return!0;try{[,r,n]=e.match(/^([[(]-?[\d.\u221E]+)?,?(-?[\d.\u221E]+[\])])?$/)}catch(t){throw new Error(`bad range ${e}`)}if(void 0!==r&&""!==r){const e=u(r.substring(1));if("("===r[0]){if(t<=e)return!1}else if(t<e)return!1}if(void 0!==n&&""!==n){const e=u(n);if(n.endsWith(")")){if(t>=e)return!1}else if(t>e)return!1}return!0},l={},y=(e,t)=>{if("function"==typeof t)return e instanceof Function;{let r=Object.getPrototypeOf(e);for(;void 0!==r.constructor&&r.constructor!==Object;){if(r.constructor.name===t)return!0;r=Object.getPrototypeOf(r)}return!1}},p=(e,t)=>{const[,r,n,,s]=e.match(/^#([?]?)([^\s]+)(\s(.*))?$/)||[];if(""!==r&&null==t)return!0;const a=i(t);switch(n){case"forbidden":return!1;case"any":return null!=t;case"native":return"function"==typeof t&&"function () { [native code] }"===t.toString()&&(null==e||(c(t)?e.match(/^async\b/):e.match(/^function\b/)));case"function":return"function"===a;case"number":return"number"===a&&f(s,t);case"int":return"number"===a&&t===Math.floor(t)&&f(s,t);case"union":return void 0!==s.split("||").find((e=>p(`#${e}`,t)));case"enum":try{return s.split("|").map(JSON.parse).includes(t)}catch(e){throw new Error(`bad enum specification (${s}), expect JSON strings`)}case"void":return"undefined"===a||"null"===a;case"nothing":return"undefined"===a;case"string":return"string"===a;case"regexp":return"string"===a&&((e,t)=>(void 0!==l[e]?l[e]:l[e]=new RegExp(e)).test(t))(s,t);case"array":return Array.isArray(t);case"instance":return y(t,s);case"promise":return t instanceof Promise;case"object":return null!==t&&"object"==typeof t&&!Array.isArray(t);default:if(a!==n)throw o("got",t,`expected "${e}", "${a}" does not match "${n}"`);return!0}},h=/^((async\s+)?function)?\s*\((.*?)\)\s*(=>)?\s*\{/,d=/^((\.\.\.\w+)|(\w+)|\((.*?)\))\s*=>\s*[^\s{]/,m=/\w+\s*=>\s*[^\s{]|\breturn\b/,g=e=>{const t=i(e);switch(t){case"array":return e.map(g);case"object":if(e.constructor===Object){const t={};return Object.keys(e).forEach((r=>{t[r]=g(e[r])})),t}return"#instance x.constructor.name";case"function":case"async":{if(void 0!==e.protoype)return"#class x.name";const r=e.toString();if(r.endsWith("() { [native code] }"))return`#native ${t}`;const n=r.match(h),s=r.match(d),o=null!=r.match(m)||r.match(d);return`${t} ( ${(n&&n[3]||s&&(s[2]||s[3]||s[4])||"").trim().split(",").map((e=>{const[t]=e.split("=");return`${t} #any`})).join(", ")} ) => ${null!=o?"#any":"#nothing"}`}default:return`#${t}`}},b=e=>JSON.stringify(g(e)),$=e=>b(e).replace(/"(\w+)":/g,"$1:");const O=(e,t,r=[],n="")=>{const s=i(e),o=i(t);if(s.startsWith("#")?p(s,t):s===o)if("array"===s){const s=t.length>0&&function*(e){let t=0;const r=Math.ceil(e.length/101);for(;t<e.length;)t<5||t>e.length-5?(yield{sample:e[t],i:t},t++):(yield{sample:e[t],i:t},t=Math.min(t+r,e.length-4))}(t);if(1===e.length&&!1!==s)for(const{sample:t,i:o}of s)O(e[0],t,r,`${n}[${o}]`);else if(e.length>1&&!1!==s)for(const{sample:t,i:o}of s){let s=!1;for(const r of e)if(0===O(r,t,[],"").length){s=!0;break}s||r.push(`${n}[${o}] had no matching type`)}}else"object"===s&&v(e,t,r,n);else r.push(`${""!==n?n+" ":""}was ${a=t,"string"==typeof a?`"${a}"`:"object"==typeof a?i(a):a}, expected ${s}`);var a;return r},j=(e,t)=>{const r=Array.isArray(t)?[...t]:t.replace(/\[[^\]]*\]/g,".*").split(".");if(null==e||0===r.length)return e;{const t=r.shift();return"*"===t?Array.isArray(e)?1===e.length?j(e[0],r):j(Object.assign({},...e),r):void 0:j(e[t],r)}},w=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/,v=(e,t,r=[],n="")=>{const s=new Set;for(const a of Object.keys(e))if(a.startsWith("#")){let c=w;try{"#"!==a&&(c=new RegExp(`^${a.substring(1)}$`))}catch(e){const t=`illegal regular expression in example key '${a}'`;throw r.push(t),o(t)}const i=Object.keys(t).filter((e=>c.test(e)));for(const o of i)s.has(o)||(O(e[a],t[o],r,`${n}./^${a.substring(1)}$/:${o}`),s.add(o))}else if(a.endsWith("?")){const o=a.slice(0,a.length-1);Object.hasOwnProperty.call(t,o)&&(s.has(o)||(O(e[a],t[o],r,n+"."+o),s.add(o)))}else s.has(a)||(O(e[a],t[a],r,n+"."+a),s.add(a));return r};class A{functionName="anonymous";isParamFailure=!1;errors=[];constructor(e){Object.assign(this,e)}toString(){const{functionName:e,isParamFailure:t,errors:r}=this;return`${e}() failed, bad ${t?"parameter":"return"}: ${JSON.stringify(r)}`}}const x=(e,t)=>{t={...t};for(const r of Object.keys(t)){const n=t[r];Object.defineProperty(e,r,{enumerable:!0,get:()=>n,set(e){throw new Error(`${r} is read-only`)}})}return e},N=(e,t)=>{for(let e=0;e<t.length;e++)if(t[e]instanceof A)return t[e];const[r,n]=e.map(((e,r)=>O(e,t[r])));return[...r,...n]},P=(e,t=[],r,n="anonymous")=>{if(N(["#function","#?array","#?any","#?string"],[e,t,r,n])instanceof A)throw new Error("typeSafe was passed bad parameters");""!==e.name&&(n=e.name);let s=0;return x((function(...o){s+=1;const a=N(t,o);if(a instanceof A)return a;if(0===a.length){const t=e(...o),s=O(r,t);return 0===s.length?t:new A({functionName:n,isParamFailure:!1,expected:r,found:t,errors:s})}return new A({functionName:n,isParamFailure:!0,expected:t,found:o,errors:a})}),{paramTypes:t,resultType:r,getCallCount:()=>s})},S=(e,t)=>{if(!Array.isArray(t))return;if(0===e.length)return[...t];const r=[];for(const n of t){const t=e.find((e=>0===O(e,n).length));void 0!==t&&r.push(T(t,n))}return r},E=(e,t)=>{if(O(e,t).length>0)return;const r={};for(const n of Object.keys(e)){const s=T(e[n],t[n]);void 0!==s&&(r[n]=s)}return r},T=(e,t)=>null==t||"object"!=typeof t&&O(e,t).length>0?void 0:Array.isArray(e)?S(e,t):"object"==typeof t?E(e,t):O(e,t).length>0?void 0:t;export{O as matchType,S as filterArray,T as filter,E as filterObject};
//# sourceMappingURL=index.js.map
