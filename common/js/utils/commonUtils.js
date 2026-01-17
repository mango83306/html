//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();

window.Utils = function () {
};
Utils.g = function () {
};
Utils.U = window.U = _;

// 日期格式化
Date.prototype.format=function(a){a=a||"yyyy-MM-dd hh:mm:ss";var c,b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(c in b){new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)))}return a};
// base64 编码解码
Utils.base64Encode=function(a){var b,c,d,e,f,g,h,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";a=encodeURIComponent(a),b=a.split(""),c=[],g=b.length%3,1==g&&(b.push(null),b.push(null)),2==g&&b.push(null);for(h in b){switch(d=b[h]?b[h].charCodeAt():0,f=h%3){case 0:c.push(i[d>>2]);break;case 1:c.push(i[(3&e)<<4|d>>4]);break;case 2:c.push(i[(15&e)<<2|d>>6]),c.push(i[63&d])}e=d}return 1==g?(c.splice(c.length-2,2),c.push("==")):2==g&&(c.pop(),c.push("=")),c.join("")};
Utils.base64Decode=function(a){var b,c,d,e,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=a.split(""),h=[];for(e in g){switch(d=e%4,c=f.indexOf(g[e]),d){case 0:b=f.indexOf(g[e]);break;case 1:h.push(String.fromCharCode(b<<2|(48&c)>>4));break;case 2:h.push(String.fromCharCode((15&b)<<4|(60&c)>>2));break;case 3:h.push(String.fromCharCode((3&b)<<6|c))}b=c}return decodeURIComponent(h.join(""))};

// MD5
function hex_md5(a){return binl2hex(core_md5(str2binl(a),a.length*chrsz))}function b64_md5(a){return binl2b64(core_md5(str2binl(a),a.length*chrsz))}function str_md5(a){return binl2str(core_md5(str2binl(a),a.length*chrsz))}function hex_hmac_md5(a,b){return binl2hex(core_hmac_md5(a,b))}function b64_hmac_md5(a,b){return binl2b64(core_hmac_md5(a,b))}function str_hmac_md5(a,b){return binl2str(core_hmac_md5(a,b))}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc")}function core_md5(a,b){var c,d,e,f,g,h,i,j,k;for(a[b>>5]|=128<<b%32,a[(b+64>>>9<<4)+14]=b,c=1732584193,d=-271733879,e=-1732584194,f=271733878,g=0;g<a.length;g+=16){h=c,i=d,j=e,k=f,c=md5_ff(c,d,e,f,a[g+0],7,-680876936),f=md5_ff(f,c,d,e,a[g+1],12,-389564586),e=md5_ff(e,f,c,d,a[g+2],17,606105819),d=md5_ff(d,e,f,c,a[g+3],22,-1044525330),c=md5_ff(c,d,e,f,a[g+4],7,-176418897),f=md5_ff(f,c,d,e,a[g+5],12,1200080426),e=md5_ff(e,f,c,d,a[g+6],17,-1473231341),d=md5_ff(d,e,f,c,a[g+7],22,-45705983),c=md5_ff(c,d,e,f,a[g+8],7,1770035416),f=md5_ff(f,c,d,e,a[g+9],12,-1958414417),e=md5_ff(e,f,c,d,a[g+10],17,-42063),d=md5_ff(d,e,f,c,a[g+11],22,-1990404162),c=md5_ff(c,d,e,f,a[g+12],7,1804603682),f=md5_ff(f,c,d,e,a[g+13],12,-40341101),e=md5_ff(e,f,c,d,a[g+14],17,-1502002290),d=md5_ff(d,e,f,c,a[g+15],22,1236535329),c=md5_gg(c,d,e,f,a[g+1],5,-165796510),f=md5_gg(f,c,d,e,a[g+6],9,-1069501632),e=md5_gg(e,f,c,d,a[g+11],14,643717713),d=md5_gg(d,e,f,c,a[g+0],20,-373897302),c=md5_gg(c,d,e,f,a[g+5],5,-701558691),f=md5_gg(f,c,d,e,a[g+10],9,38016083),e=md5_gg(e,f,c,d,a[g+15],14,-660478335),d=md5_gg(d,e,f,c,a[g+4],20,-405537848),c=md5_gg(c,d,e,f,a[g+9],5,568446438),f=md5_gg(f,c,d,e,a[g+14],9,-1019803690),e=md5_gg(e,f,c,d,a[g+3],14,-187363961),d=md5_gg(d,e,f,c,a[g+8],20,1163531501),c=md5_gg(c,d,e,f,a[g+13],5,-1444681467),f=md5_gg(f,c,d,e,a[g+2],9,-51403784),e=md5_gg(e,f,c,d,a[g+7],14,1735328473),d=md5_gg(d,e,f,c,a[g+12],20,-1926607734),c=md5_hh(c,d,e,f,a[g+5],4,-378558),f=md5_hh(f,c,d,e,a[g+8],11,-2022574463),e=md5_hh(e,f,c,d,a[g+11],16,1839030562),d=md5_hh(d,e,f,c,a[g+14],23,-35309556),c=md5_hh(c,d,e,f,a[g+1],4,-1530992060),f=md5_hh(f,c,d,e,a[g+4],11,1272893353),e=md5_hh(e,f,c,d,a[g+7],16,-155497632),d=md5_hh(d,e,f,c,a[g+10],23,-1094730640),c=md5_hh(c,d,e,f,a[g+13],4,681279174),f=md5_hh(f,c,d,e,a[g+0],11,-358537222),e=md5_hh(e,f,c,d,a[g+3],16,-722521979),d=md5_hh(d,e,f,c,a[g+6],23,76029189),c=md5_hh(c,d,e,f,a[g+9],4,-640364487),f=md5_hh(f,c,d,e,a[g+12],11,-421815835),e=md5_hh(e,f,c,d,a[g+15],16,530742520),d=md5_hh(d,e,f,c,a[g+2],23,-995338651),c=md5_ii(c,d,e,f,a[g+0],6,-198630844),f=md5_ii(f,c,d,e,a[g+7],10,1126891415),e=md5_ii(e,f,c,d,a[g+14],15,-1416354905),d=md5_ii(d,e,f,c,a[g+5],21,-57434055),c=md5_ii(c,d,e,f,a[g+12],6,1700485571),f=md5_ii(f,c,d,e,a[g+3],10,-1894986606),e=md5_ii(e,f,c,d,a[g+10],15,-1051523),d=md5_ii(d,e,f,c,a[g+1],21,-2054922799),c=md5_ii(c,d,e,f,a[g+8],6,1873313359),f=md5_ii(f,c,d,e,a[g+15],10,-30611744),e=md5_ii(e,f,c,d,a[g+6],15,-1560198380),d=md5_ii(d,e,f,c,a[g+13],21,1309151649),c=md5_ii(c,d,e,f,a[g+4],6,-145523070),f=md5_ii(f,c,d,e,a[g+11],10,-1120210379),e=md5_ii(e,f,c,d,a[g+2],15,718787259),d=md5_ii(d,e,f,c,a[g+9],21,-343485551),c=safe_add(c,h),d=safe_add(d,i),e=safe_add(e,j),f=safe_add(f,k)}return Array(c,d,e,f)}function md5_cmn(a,b,c,d,e,f){return safe_add(bit_rol(safe_add(safe_add(b,a),safe_add(d,f)),e),c)}function md5_ff(a,b,c,d,e,f,g){return md5_cmn(b&c|~b&d,a,b,e,f,g)}function md5_gg(a,b,c,d,e,f,g){return md5_cmn(b&d|c&~d,a,b,e,f,g)}function md5_hh(a,b,c,d,e,f,g){return md5_cmn(b^c^d,a,b,e,f,g)}function md5_ii(a,b,c,d,e,f,g){return md5_cmn(c^(b|~d),a,b,e,f,g)}function core_hmac_md5(a,b){var d,e,f,g,c=str2binl(a);for(c.length>16&&(c=core_md5(c,a.length*chrsz)),d=Array(16),e=Array(16),f=0;16>f;f++){d[f]=909522486^c[f],e[f]=1549556828^c[f]}return g=core_md5(d.concat(str2binl(b)),512+b.length*chrsz),core_md5(e.concat(g),640)}function safe_add(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function bit_rol(a,b){return a<<b|a>>>32-b}function str2binl(a){var d,b=Array(),c=(1<<chrsz)-1;for(d=0;d<a.length*chrsz;d+=chrsz){b[d>>5]|=(a.charCodeAt(d/chrsz)&c)<<d%32}return b}function binl2str(a){var d,b="",c=(1<<chrsz)-1;for(d=0;d<32*a.length;d+=chrsz){b+=String.fromCharCode(a[d>>5]>>>d%32&c)}return b}function binl2hex(a){var d,b=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="";for(d=0;d<4*a.length;d++){c+=b.charAt(15&a[d>>2]>>8*(d%4)+4)+b.charAt(15&a[d>>2]>>8*(d%4))}return c}function binl2b64(a){var d,e,f,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="";for(d=0;d<4*a.length;d+=3){for(e=(255&a[d>>2]>>8*(d%4))<<16|(255&a[d+1>>2]>>8*((d+1)%4))<<8|255&a[d+2>>2]>>8*((d+2)%4),f=0;4>f;f++){c+=8*d+6*f>32*a.length?b64pad:b.charAt(63&e>>6*(3-f))}}return c}var hexcase=0,b64pad="",chrsz=8;
Utils.md5 = hex_md5;
/**
 * 获取url中的参数,静态页面之间的传值 request.getParameter("dataType");
 */
Utils.getParameter = function (val) {
    var uri = window.location.search;
    var re = new RegExp("" + val + "=([^&?]*)", "ig");
    return ((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
};

/**
 * 在规定时间内,只执行一次代码,避免短时间内重复执行(闭包TimeOut)
 * @return 例: var runTimeOut = Utils.TimeOutOne(500,func);使用 runTimeOut();
 */
Utils.TimeOutOne = function (time, func) {
    var index = null;
    return function () {
        index && clearTimeout(index);
        index = setTimeout(func, time);
    };
};

let onlyIntervalNum = 0;
/**
 * 唯一的计时器, 全局只有一个 (切换页面时关闭)
 * isInitRun : 是否初始化时运行
 */
Utils.onlyInterval = (handler, timeout, isInitRun) => {
    Utils.clearOnlyInterval();
    onlyIntervalNum = setInterval(handler, timeout)
    isInitRun && handler();
};
Utils.clearOnlyInterval = () => clearInterval(onlyIntervalNum);

/****************************** 弹窗 ****************************************/
// 消息层
Utils.msg = function (ctt) {
    // layer.msg(ctt);
    console.log(ctt)
};
// 成功提示
Utils.success = function (ctt) {
    Utils.msg(ctt);
};
// 错误提示
Utils.error = function (ctt) {
    Utils.msg(ctt);
    return false;// 保留false,有用到
};

/**
 * 加载层
 * 打开 : var load = Utils.loading("加载中...");
 * 关闭 : load.close();
 */
Utils.loading = function (ctt) {
    let layIdx = layer.load(1, {shade: [0.02, '#000']});
    return {
        close: function () {
            setTimeout(function () {
                layer.close(layIdx)
            }, 60)
        }
    }; // 延时一点关闭给点数据缓存时间
};

/**
 * 确认层
 */
Utils.confirm = function (title, ctt, callback, confirmBtn, cancelBtn, opt) {
    opt = $.extend({
        title: title ? title : false,
        btn: [confirmBtn || "确定", cancelBtn || '取消']
    }, opt || {});
    var layIdx = layer.confirm(ctt, opt, function () {
        cb(true);
    }, function () {
        cb(false);
    });

    function cb(res) {
        callback && callback(res, {
            close: function () {
                layer.close(layIdx)
            }
        });
    }
};

/**
 * alert 层
 */
Utils.alert = function (ctt, title, callback, confirmBtn) {
    layer.alert(ctt, {
        closeBtn: 0,
        title: title ? title : false,
        btn: [confirmBtn || '确定']
    }, callback);
};


/****************************** ajax,jsonp的一点儿小包装****************************************/
var AJAX_TIMEOUT_TM = 10000;

function ajaxComplete(XMLHttpRequest, status, ajaxLoading) {
    ajaxLoading && ajaxLoading.close();
    if (status != 'success') {
        Utils.msg("网络正在开小差，请稍后再试。");
        console.error(XMLHttpRequest, status)
    }
}


/**
 * jquery ajax的一点儿小包装
 * @param param jquery 一样的 对象参数, 不设置则包装方法默认的参数
 * @param isHideLoad {Boolean} 是否隐藏加载层 默认:不隐藏
 * @param isHideErrMsg {Boolean} 是否隐藏错误消息提示 默认:不隐藏
 * @returns {{state: string}|*}
 */
Utils.ajax = function (param, isHideLoad, isHideErrMsg) {
    var ajaxLoading = null;
    if (!isHideLoad) ajaxLoading = Utils.loading("加载中...");
    $.ajax({
        url: param.url,
        type: param.type || "get",
        timeout: param.timeout || AJAX_TIMEOUT_TM, //超时时间设置，单位毫秒
        complete: param.complete || function (XMLHttpRequest, status) { //请求完成后最终执行参数
            ajaxComplete(XMLHttpRequest, status, ajaxLoading);
        },//请求完成后最终执行参数
        data: param.data,
        contentType: param.contentType, //设置请求头信息
        dataType: param.dataType || "json",
        async: "async" in param ? param.async : true,
        success: function (res) {
            if (!isHideErrMsg && res.code && res.code != "0") {
                Utils.error(res.msg);
            }
            if (param.success) param.success(res);
        },
        error: function (res) {
            Utils.error('操作失败');
            if (param.error) param.error(res);
        },
    });
};



/**
 * jquery jsonp 的一点儿小包装
 *  @param isHideLoad {Boolean} 是否隐藏加载层 默认:不隐藏
 * @param param {Object} {
 * url:"",
 * jsonp:"",
 * jsonpCallback:"", // 回调的方法名
 * success:"", // 响应回调
 * }
 */
Utils.jsonp = function (param, isHideLoad) {
    let jsonpCallback = param.jsonpCallback || "jsonpCallback";

    function respSuccess(res) {
        param.success && param.success(res)
    }

    var jsonpLoading = null;
    if (!isHideLoad) jsonpLoading = Utils.loading("加载中...");
    return $.ajax({
        url: param.url, type: 'get',
        timeout: param.timeout || AJAX_TIMEOUT_TM, //超时时间设置，单位毫秒
        async: false,
        complete(XMLHttpRequest, status) { //请求完成后最终执行参数
            jsonpLoading && jsonpLoading.close();
            param.complete && param.complete(XMLHttpRequest, status);
        },//请求完成后最终执行参数
        dataType: 'jsonp',
        jsonp: param.jsonp || "callback",
        jsonpCallback: jsonpCallback,
        success: respSuccess
    });
};


/**
 * 等待 valFunc() 为true 后,执行回调
 */
Utils.nextTick = function (valFunc, func) {
    if (valFunc()) {
        func();
    } else {
        setTimeout(() => Utils.nextTick(valFunc, func), 50);
    }
};


// *** cookie 操作
//写cookies
Utils.setCookie = function (name, value, maxSec) {
    var exp = new Date();
    exp.setTime(exp.getTime() + (maxSec || 7 * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; Path=/";
};
Utils.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};

/**
 * 带有超时功能的缓存工具  (性能较差,不要用在大数据量和频率高的地方使用)
 * @param {string} key    缓存key [必须], 只传入key一个参数表示 ; 获取缓存,否则表示设置缓存
 * @param {object} value  任意类型 [可选]
 * @param {number} timeoutSec 超时时间[可选] 单位:秒  可为小数,0.5 表示500毫秒
 * 例: Utils.cache('name','123张三',60)
 */
Utils.cache = function (key, value, timeoutSec) {
    let isGet = !timeoutSec, isKey = "cache-mp", now = new Date().getTime();
    let cMap = JSON.parse(localStorage.getItem(isKey) || "{}");
    let syncCache = () => localStorage.setItem(isKey, JSON.stringify(cMap));
    if (isGet) {
        let val = cMap[key];
        if (val && val.t >= now) return val.v;
    } else {
        cMap[key] = {t: now + timeoutSec * 1000, v: value};
        syncCache();
    }
    // 间隔一小时清理超时的缓存
    if (!Utils.isCD("clear-cache", 3600)) {
        for (const k in cMap) {
            if (cMap[k].t < now) delete cMap[k];
        }
        syncCache();
    }
};


/**
 * 是否在CD 冷却时间 的时间里, 控制调用间隔
 *
 * @param key  {String}  CD的key[必须]
 * @param cdSec {number} CD的时间[必须]  单位:秒  可为小数,0.5 表示500毫秒
 * @return {Boolean} 是否在CD
 */
Utils.isCD = function (key, cdSec) {
    let cdMap = JSON.parse(localStorage.getItem("isCDMap") || "{}");
    let overtime = cdMap[key], curTime = new Date().getTime();
    let isCD = overtime && curTime <= overtime;
    // 清除过期的key
    for (let k in cdMap) {
        if (curTime > cdMap[k]) delete cdMap[k];
    }
    if (!cdMap[key]) cdMap[key] = curTime + cdSec * 1000;
    localStorage.setItem("isCDMap", JSON.stringify(cdMap));
    return !!isCD;
};

/**
 * 将以base64的图片url数据转换为Blob 可以直接上传文件
 * @param urlData
 *            用url方式表示的base64图片数据
 */
Utils.convertBase64UrlToBlob = function (urlData) {
    var bytes = window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {type: 'image/png'});
};

// 复制文本到剪切板
Utils.copyToClipboard = function (text) {
    function fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy') ? Utils.msg('复制成功') : Utils.msg('复制失败');
        } catch {
            Utils.msg('复制异常');
        }
        document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => Utils.msg('复制成功')).catch(err => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
};

// 获取 guid
Utils.guid = function () {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};

// 随机数
Utils.randomNum = function (minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};

Utils.now = () => new Date().getTime();
// 获取当前Unix时间戳(秒).
Utils.unixTime = () => parseInt((Utils.now() / 1000) + "");
// 13位时间戳 转 时间字符串 (指定时区偏移)
Utils.dateFormat = (timestamp, utcOffset) => {
    const date = new Date(timestamp), utcDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    return new Date(utcDate.getTime() + (utcOffset * 60 * 60 * 1000)).format();
}

// 判断是否是json字符串
Utils.isJSON = function (str) {
    let resp = false;
    try {
        resp = !!JSON.parse(str);
    } catch (e) {}
    return resp;
};

/**
 * 获得数组第一个元素
 * @param arr 数组
 * @param cond 条件[可空]如果为空,则没有条件
 * @returns {string}
 */
Utils.getFirst = function (arr, cond) {
    if (!arr || arr.length == 0) {
        return null;
    }
    return cond ? arr.filter(cond)[0] : arr[0];
};

// 短时间内连续点击触发事件 num:连续点击次数 cb:回调事件
Utils.continueClick = function (num,cb) {
    let fc = Utils.continueClick;
    if ( !fc.num ) {
        fc.num = 0;
        setTimeout(() => fc.num = 0, 3000);
    }
    fc.num++;
    if (fc.num >= num) {
        cb();
    }
};
// js 深拷贝
Utils.deepCopy = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};
// 保留2位小数
Utils.fixed2 = function(num) {
    return parseFloat(parseFloat(num).toFixed(2));
};
