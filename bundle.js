!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===C.call(e)}function f(e){return"[object File]"===C.call(e)}function p(e){return"[object Blob]"===C.call(e)}function m(e){return"[object Function]"===C.call(e)}function h(e){return l(e)&&m(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function w(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function E(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=E(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function b(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?x(t,n):t}),e}var x=n(3),T=n(11),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:T,isFormData:i,isArrayBufferView:u,isString:s,isNumber:a,isObject:l,isUndefined:c,isDate:d,isFile:f,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:w,merge:E,extend:b,trim:v}},function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),i=n(14),u={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(4):void 0!==t&&(e=n(4)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(u)}),e.exports=s}).call(t,n(13))},function(e,t,n){"use strict";function r(e){return console.log(e),(0,a.default)({method:"GET",url:e})}function o(e,t){return(0,a.default)({method:"POST",url:e,data:t})}function i(e,t,n){return(0,a.default)({method:"PUT",url:e+"/"+n,data:t})}function u(e,t){return(0,a.default)({method:"DELETE",url:e+"/"+t})}Object.defineProperty(t,"__esModule",{value:!0}),t.get=r,t.post=o,t.put=i,t.remove=u;var s=n(9),a=function(e){return e&&e.__esModule?e:{default:e}}(s)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(15),i=n(17),u=n(18),s=n(19),a=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(20);e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;r.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(e.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var y=e.auth.username||"",v=e.auth.password||"";f.Authorization="Basic "+c(y+":"+v)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,l,i),p=null}},p.onerror=function(){l(a("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(21),w=(e.withCredentials||s(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(f[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(e,t,n){"use strict";var r=n(16);e.exports=function(e,t,n,o,i){var u=new Error(e);return r(u,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";function r(e,t,n){u.remove(c,t).then(function(e){document.getElementById("wrapper").removeChild(document.getElementById(n))})}function o(e,t){d.element1.value=t.title,d.element3.value=t.description,d.element2.style.display="none",d.element5.style.display="inline",d.element6.value=t.id}var i=n(2),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),s=n(29),a=function(e){return e&&e.__esModule?e:{default:e}}(s),c="https://todo-simple-api.herokuapp.com/todos",l=document.createElement("div");l.setAttribute("id","wrapper");var d=new a.default;d.create(),u.get(c).then(function(e){var t=0;e.data.data.forEach(function(e){var n=document.createElement("div");n.setAttribute("id","main-div"+e.id),n.style.clear="both";var i=document.createElement("div");i.innerHTML=e.id,i.style.float="left",i.style.width="50px",i.setAttribute("id","id"+e.id);var u=document.createElement("div");u.innerHTML=e.description,u.setAttribute("id","description"+e.id),u.style.float="left",u.style.width="100px";var s=document.createElement("div");s.style.width="400px",s.innerHTML=e.title,s.setAttribute("id","title"+e.id),s.style.float="left";var a=document.createElement("button");a.innerHTML="X",a.addEventListener("click",function(t){r(t,e.id,n.id)});var c=document.createElement("button");c.innerHTML="Update",c.addEventListener("click",function(t){o(t,e)}),document.getElementsByTagName("body")[0].appendChild(l),document.getElementById(l.id).appendChild(n),document.getElementById(n.id).appendChild(i),document.getElementById(n.id).appendChild(s),document.getElementById(n.id).appendChild(u),document.getElementById(n.id).appendChild(a),document.getElementById(n.id).appendChild(c),t++})}),l.appendChild(d.form)},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";function r(e){var t=new u(e),n=i(u.prototype.request,t);return o.extend(n,u.prototype,t),o.extend(n,t),n}var o=n(0),i=n(3),u=n(12),s=n(1),a=r(s);a.Axios=u,a.create=function(e){return r(o.merge(s,e))},a.Cancel=n(7),a.CancelToken=n(27),a.isCancel=n(6),a.all=function(e){return Promise.all(e)},a.spread=n(28),e.exports=a,e.exports.default=a},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new u,response:new u}}var o=n(1),i=n(0),u=n(22),s=n(23),a=n(25),c=n(26);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function u(){h&&p&&(h=!1,p.length?m=p.concat(m):y=-1,m.length&&s())}function s(){if(!h){var e=o(u);h=!0;for(var t=m.length;t;){for(p=m,m=[];++y<t;)p&&p[y].run();y=-1,t=m.length}p=null,h=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,m=[],h=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new a(e,t)),1!==m.length||h||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var u=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),u.push(r(t)+"="+r(e))}))}),i=u.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),u="",s=0,a=i;o.charAt(0|s)||(a="=",s%1);u+=a.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return u}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,u){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),i=n(24),u=n(6),s=n(1);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return u(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),s=function(){function e(){r(this,e),this.form=document.createElement("form"),this.element1,this.element3,this.element2,this.element4,this.element5,this.element6}return o(e,[{key:"create",value:function(){var e=this;this.element1=document.createElement("input"),this.element1.setAttribute("id","inputId"),this.element3=document.createElement("input"),this.element3.setAttribute("id","description"),this.element2=document.createElement("button"),this.element2.innerHTML="submit",this.element5=document.createElement("button"),this.element5.innerHTML="update",this.element5.style.display="none",this.element6=document.createElement("input"),this.element6.setAttribute("id","hiddenId"),this.element6.type="hidden",this.form.method="POST",this.element1.name="userName",this.form.appendChild(this.element1),this.element3.name="description",this.form.appendChild(this.element3),this.element2.type="text",this.element2.name="btnSubmit",this.element2.value="Add New",this.element2.style.width=100,this.element2.style.height=30,this.element2.addEventListener("click",function(t){e.testFunction(t)}),this.element5.addEventListener("click",function(t){e.putFunction(t)}),this.form.appendChild(this.element2),this.form.appendChild(this.element5),this.form.appendChild(this.element6)}},{key:"testFunction",value:function(e){e.preventDefault(),this.postForm()}},{key:"putFunction",value:function(e){e.preventDefault(),this.putForm()}},{key:"postForm",value:function(){var e=this,t=document.getElementById("inputId").value,n=document.getElementById("description").value,r={title:t,description:n};u.post("https://todo-simple-api.herokuapp.com/todos",r).then(function(t){var n=t.data.data,r=document.createElement("div");r.style.clear="both",r.id=n.id;var o=document.createElement("div");o.innerHTML=n.id,o.style.float="left",o.style.width="50px";var i=document.createElement("div");i.innerHTML=n.description,i.style.float="left",i.style.width="100px";var u=document.createElement("div");u.style.width="400px",u.innerHTML=n.title,u.style.float="left";var s=document.createElement("button");s.innerHTML="X",s.addEventListener("click",function(e){deleteDate(e,n.id)});var a=document.createElement("button");a.innerHTML="Update",a.addEventListener("click",function(e){updateButton(e,n)}),document.getElementById(wrapper.id).appendChild(r),document.getElementById(r.id).appendChild(o),document.getElementById(r.id).appendChild(u),document.getElementById(r.id).appendChild(i),document.getElementById(r.id).appendChild(s),document.getElementById(r.id).appendChild(a),e.element1.value="",e.element3.value="",console.log("something posted")})}},{key:"putForm",value:function(){var e=this,t=document.getElementById("inputId").value,n=document.getElementById("description").value,r=document.getElementById("hiddenId").value,o={title:t,description:n};u.put("https://todo-simple-api.herokuapp.com/todos",o,r).then(function(t){var n=t.data.data,r=t.data.data.id;document.getElementById("id"+r).innerHTML=n.id,document.getElementById("description"+r).innerHTML=n.description,document.getElementById("title"+r).innerHTML=n.title,e.element5.style.display="none",e.element2.style.display="inline",e.element1.value="",e.element3.value=""})}}]),e}();t.default=s}]);