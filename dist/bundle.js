!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("babel-polyfill"),require("bluebird"),require("superagent")):"function"==typeof define&&define.amd?define("redux-api-actions",["babel-polyfill","bluebird","superagent"],n):"object"==typeof exports?exports["redux-api-actions"]=n(require("babel-polyfill"),require("bluebird"),require("superagent")):t["redux-api-actions"]=n(t[void 0],t[void 0],t[void 0])}(this,function(t,n,e){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){e(10),t.exports=e(11)},function(t,n,e){t.exports=!e(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(7),o=e(6);t.exports=function(t){return r(o(t))}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){return{type:h}}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new v.default(function(o,u){var i=p.default.get(t);r&&(i=i.withCredentials()),e=(0,a.default)({},e,{"X-Requested-With":"XMLHttpRequest"}),i.query(n).set(e).end(function(t,n){t?u(t):o(n.body)})})}function i(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=(0,a.default)({},e,{"X-Requested-With":"XMLHttpRequest"}),new v.default(function(r,o){p.default.post(t).send(n).set(e).end(function(t,n){t?o(t):r(n.body)})})}function c(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=(0,a.default)({},e,{"X-Requested-With":"XMLHttpRequest"}),new v.default(function(r,o){p.default.put(t).send(n).set(e).end(function(t,n){t?o(t):r(n.body)})})}function f(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=(0,a.default)({},n,{"X-Requested-With":"XMLHttpRequest"}),new v.default(function(e,r){p.default.del(t).set(n).end(function(t,n){t?r(t):e(n.body)})})}Object.defineProperty(n,"__esModule",{value:!0}),n.ASYNC_CALL_STARTED=void 0;var s=e(12),a=r(s);n.asyncStarted=o,n.asyncRequest=u,n.postRequest=i,n.putRequest=c,n.deleteRequest=f;var l=e(44),p=r(l),d=e(43),v=r(d);e(42);var h=n.ASYNC_CALL_STARTED="ASYNC_CALL_STARTED"},function(t,n,e){(function(n){"use strict";e(40);t.exports={entry:["./src/index.js"],devtool:"source-map",output:{path:n,filename:"dist/bundle.js",library:"redux-api-actions",libraryTarget:"umd",umdNamedDefine:!0},module:{loaders:[{test:/\.jsx$|\.js$/,loader:"babel-loader",exclude:/node_modules/,query:{plugins:["transform-runtime"],presets:["es2015"]}}]},externals:{superagent:{commonjs:"superagent",commonjs2:"superagent",amd:"superagent",umd:"superagent"},"babel-polyfill":{commonjs:"babel-polyfill",commonjs2:"babel-polyfill",amd:"babel-polyfill",umd:"babel-polyfill"},bluebird:{commonjs:"bluebird",commonjs2:"bluebird",amd:"bluebird",umd:"bluebird"}}}}).call(n,"/")},function(t,n,e){t.exports={default:e(13),__esModule:!0}},function(t,n,e){e(39),t.exports=e(5).Object.assign},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(9),o=e(35),u=e(34);t.exports=function(t){return function(n,e,i){var c,f=r(n),s=o(f.length),a=u(i,s);if(t&&e!=e){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(14);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(4),o=e(3).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(3),o=e(5),u=e(18),i=e(23),c="prototype",f=function(t,n,e){var s,a,l,p=t&f.F,d=t&f.G,v=t&f.S,h=t&f.P,b=t&f.B,y=t&f.W,m=d?o:o[n]||(o[n]={}),g=m[c],x=d?r:v?r[n]:(r[n]||{})[c];d&&(e=n);for(s in e)a=!p&&x&&void 0!==x[s],a&&s in m||(l=a?x[s]:e[s],m[s]=d&&"function"!=typeof x[s]?e[s]:b&&a?u(l,r):y&&x[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(l):h&&"function"==typeof l?u(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[s]=l,t&f.R&&g&&!g[s]&&i(g,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(26),o=e(31);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(1)&&!e(2)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(29),o=e(27),u=e(30),i=e(36),c=e(7),f=Object.assign;t.exports=!f||e(2)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=i(t),f=arguments.length,s=1,a=o.f,l=u.f;f>s;)for(var p,d=c(arguments[s++]),v=a?r(d).concat(a(d)):r(d),h=v.length,b=0;h>b;)l.call(d,p=v[b++])&&(e[p]=d[p]);return e}:f},function(t,n,e){var r=e(15),o=e(24),u=e(37),i=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(22),o=e(9),u=e(16)(!1),i=e(32)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=i&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~u(s,e)||s.push(e));return s}},function(t,n,e){var r=e(28),o=e(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(33)("keys"),o=e(38);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(3),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n,e){var r=e(8),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(21);r(r.S+r.F,"Object",{assign:e(25)})},function(t,n,e){(function(t){function e(t,n){for(var e=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(t){return o.exec(t).slice(1)};n.resolve=function(){for(var n="",o=!1,u=arguments.length-1;u>=-1&&!o;u--){var i=u>=0?arguments[u]:t.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(n=i+"/"+n,o="/"===i.charAt(0))}return n=e(r(n.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+n||"."},n.normalize=function(t){var o=n.isAbsolute(t),u="/"===i(t,-1);return t=e(r(t.split("/"),function(t){return!!t}),!o).join("/"),t||o||(t="."),t&&u&&(t+="/"),(o?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(r(t,function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},n.relative=function(t,e){function r(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var o=r(t.split("/")),u=r(e.split("/")),i=Math.min(o.length,u.length),c=i,f=0;f<i;f++)if(o[f]!==u[f]){c=f;break}for(var s=[],f=c;f<o.length;f++)s.push("..");return s=s.concat(u.slice(c)),s.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){var n=u(t),e=n[0],r=n[1];return e||r?(r&&(r=r.substr(0,r.length-1)),e+r):"."},n.basename=function(t,n){var e=u(t)[2];return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){return u(t)[3]};var i="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(n,e(41))},function(t,n){function e(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(a===setTimeout)return setTimeout(t,0);if((a===e||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(n){try{return a.call(null,t,0)}catch(n){return a.call(this,t,0)}}}function u(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(n){try{return l.call(null,t)}catch(n){return l.call(this,t)}}}function i(){h&&d&&(h=!1,d.length?v=d.concat(v):b=-1,v.length&&c())}function c(){if(!h){var t=o(i);h=!0;for(var n=v.length;n;){for(d=v,v=[];++b<n;)d&&d[b].run();b=-1,n=v.length}d=null,h=!1,u(t)}}function f(t,n){this.fun=t,this.array=n}function s(){}var a,l,p=t.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:e}catch(t){a=e}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,v=[],h=!1,b=-1;p.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];v.push(new f(t,n)),1!==v.length||h||o(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(n,e){n.exports=t},function(t,e){t.exports=n},function(t,n){t.exports=e}])});
//# sourceMappingURL=bundle.js.map