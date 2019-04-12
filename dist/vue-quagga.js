module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(e.toString()).default:undefined}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=166)}([function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){"use strict";function r(t,e){return this._row=[],this.config=t||{},this.supplements=e,this}var o=n(3);r.prototype._nextUnset=function(t,e){var n;for(void 0===e&&(e=0),n=e;n<t.length;n++)if(!t[n])return n;return t.length},r.prototype._matchPattern=function(t,e,n){var r,o,i,a,u=0,c=0,s=0,f=0;for(n=n||this.SINGLE_CODE_ERROR||1,r=0;r<t.length;r++)s+=t[r],f+=e[r];if(s<f)return Number.MAX_VALUE;for(o=s/f,n*=o,r=0;r<t.length;r++){if(i=t[r],a=e[r]*o,(c=Math.abs(i-a)/a)>n)return Number.MAX_VALUE;u+=c}return u/f},r.prototype._nextSet=function(t,e){var n;for(e=e||0,n=e;n<t.length;n++)if(t[n])return n;return t.length},r.prototype._correctBars=function(t,e,n){for(var r=n.length,o=0;r--;)(o=t[n[r]]*(1-(1-e)/2))>1&&(t[n[r]]=o)},r.prototype._matchTrace=function(t,e){var n,r,o=[],i=this,a=i._nextSet(i._row),u=!i._row[a],c=0,s={error:Number.MAX_VALUE,code:-1,start:0};if(t){for(n=0;n<t.length;n++)o.push(0);for(n=a;n<i._row.length;n++)if(i._row[n]^u)o[c]++;else{if(c===o.length-1)return r=i._matchPattern(o,t),r<e?(s.start=n-a,s.end=n,s.counter=o,s):null;c++,o[c]=1,u=!u}}else for(o.push(0),n=a;n<i._row.length;n++)i._row[n]^u?o[c]++:(c++,o.push(0),o[c]=1,u=!u);return s.start=a,s.end=i._row.length-1,s.counter=o,s},r.prototype.decodePattern=function(t){var e,n=this;return n._row=t,e=n._decode(),null===e?(n._row.reverse(),(e=n._decode())&&(e.direction=r.DIRECTION.REVERSE,e.start=n._row.length-e.start,e.end=n._row.length-e.end)):e.direction=r.DIRECTION.FORWARD,e&&(e.format=n.FORMAT),e},r.prototype._matchRange=function(t,e,n){var r;for(t=t<0?0:t,r=t;r<e;r++)if(this._row[r]!==n)return!1;return!0},r.prototype._fillCounters=function(t,e,n){var r,o=this,i=0,a=[];for(n=void 0===n||n,t=void 0!==t?t:o._nextUnset(o._row),e=e||o._row.length,a[i]=0,r=t;r<e;r++)o._row[r]^n?a[i]++:(i++,a[i]=1,n=!n);return a},r.prototype._toCounters=function(t,e){var n,r=this,i=e.length,a=r._row.length,u=!r._row[t],c=0;for(o.a.init(e,0),n=t;n<a;n++)if(r._row[n]^u)e[c]++;else{if(++c===i)break;e[c]=1,u=!u}return e},Object.defineProperty(r.prototype,"FORMAT",{value:"unknown",writeable:!1}),r.DIRECTION={FORWARD:1,REVERSE:-1},r.Exception={StartNotFoundException:"Start-Info was not found!",CodeNotFoundException:"Code could not be found!",PatternNotFoundException:"Pattern could not be found!"},r.CONFIG_KEYS={},e.a=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){"use strict";e.a={init:function(t,e){for(var n=t.length;n--;)t[n]=e},shuffle:function(t){var e,n,r=t.length-1;for(r;r>=0;r--)e=Math.floor(Math.random()*r),n=t[r],t[r]=t[e],t[e]=n;return t},toPointList:function(t){var e,n,r=[],o=[];for(e=0;e<t.length;e++){for(r=[],n=0;n<t[e].length;n++)r[n]=t[e][n];o[e]="["+r.join(",")+"]"}return"["+o.join(",\r\n")+"]"},threshold:function(t,e,n){var r,o=[];for(r=0;r<t.length;r++)n.apply(t,[t[r]])>=e&&o.push(t[r]);return o},maxIndex:function(t){var e,n=0;for(e=0;e<t.length;e++)t[e]>t[n]&&(n=e);return n},max:function t(e){var n,t=0;for(n=0;n<e.length;n++)e[n]>t&&(t=e[n]);return t},sum:function t(e){for(var n=e.length,t=0;n--;)t+=e[n];return t}}},function(t,e,n){"use strict";function r(t,e){t=a()(o(),t),u.a.call(this,t,e)}function o(){var t={};return Object.keys(r.CONFIG_KEYS).forEach(function(e){t[e]=r.CONFIG_KEYS[e].default}),t}var i=n(28),a=n.n(i),u=n(1),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s={CODE_L_START:{value:0},CODE_G_START:{value:10},START_PATTERN:{value:[1,1,1]},STOP_PATTERN:{value:[1,1,1]},MIDDLE_PATTERN:{value:[1,1,1,1,1]},EXTENSION_START_PATTERN:{value:[1,1,2]},CODE_PATTERN:{value:[[3,2,1,1],[2,2,2,1],[2,1,2,2],[1,4,1,1],[1,1,3,2],[1,2,3,1],[1,1,1,4],[1,3,1,2],[1,2,1,3],[3,1,1,2],[1,1,2,3],[1,2,2,2],[2,2,1,2],[1,1,4,1],[2,3,1,1],[1,3,2,1],[4,1,1,1],[2,1,3,1],[3,1,2,1],[2,1,1,3]]},CODE_FREQUENCY:{value:[0,11,13,14,19,25,28,21,22,26]},SINGLE_CODE_ERROR:{value:.7},AVG_CODE_ERROR:{value:.48},FORMAT:{value:"ean_13",writeable:!1}};r.prototype=Object.create(u.a.prototype,s),r.prototype.constructor=r,r.prototype._decodeCode=function(t,e){var n,r,o,i=[0,0,0,0],a=this,u=t,c=!a._row[u],s=0,f={error:Number.MAX_VALUE,code:-1,start:t,end:t};for(e||(e=a.CODE_PATTERN.length),n=u;n<a._row.length;n++)if(a._row[n]^c)i[s]++;else{if(s===i.length-1){for(r=0;r<e;r++)(o=a._matchPattern(i,a.CODE_PATTERN[r]))<f.error&&(f.code=r,f.error=o);return f.end=n,f.error>a.AVG_CODE_ERROR?null:f}s++,i[s]=1,c=!c}return null},r.prototype._findPattern=function(t,e,n,r,o){var i,a,u,c,s=[],f=this,l=0,d={error:Number.MAX_VALUE,code:-1,start:0,end:0};for(e||(e=f._nextSet(f._row)),void 0===n&&(n=!1),void 0===r&&(r=!0),void 0===o&&(o=f.AVG_CODE_ERROR),i=0;i<t.length;i++)s[i]=0;for(i=e;i<f._row.length;i++)if(f._row[i]^n)s[l]++;else{if(l===s.length-1){for(c=0,u=0;u<s.length;u++)c+=s[u];if((a=f._matchPattern(s,t))<o)return d.error=a,d.start=i-c,d.end=i,d;if(!r)return null;for(u=0;u<s.length-2;u++)s[u]=s[u+2];s[s.length-2]=0,s[s.length-1]=0,l--}else l++;s[l]=1,n=!n}return null},r.prototype._findStart=function(){for(var t,e,n=this,r=n._nextSet(n._row);!e;){if(!(e=n._findPattern(n.START_PATTERN,r)))return null;if((t=e.start-(e.end-e.start))>=0&&n._matchRange(t,e.start,0))return e;r=e.end,e=null}},r.prototype._verifyTrailingWhitespace=function(t){var e,n=this;return e=t.end+(t.end-t.start),e<n._row.length&&n._matchRange(t.end,e,0)?t:null},r.prototype._findEnd=function(t,e){var n=this,r=n._findPattern(n.STOP_PATTERN,t,e,!1);return null!==r?n._verifyTrailingWhitespace(r):null},r.prototype._calculateFirstDigit=function(t){var e,n=this;for(e=0;e<n.CODE_FREQUENCY.length;e++)if(t===n.CODE_FREQUENCY[e])return e;return null},r.prototype._decodePayload=function(t,e,n){var r,o,i=this,a=0;for(r=0;r<6;r++){if(!(t=i._decodeCode(t.end)))return null;t.code>=i.CODE_G_START?(t.code=t.code-i.CODE_G_START,a|=1<<5-r):a|=0<<5-r,e.push(t.code),n.push(t)}if(null===(o=i._calculateFirstDigit(a)))return null;if(e.unshift(o),null===(t=i._findPattern(i.MIDDLE_PATTERN,t.end,!0,!1)))return null;for(n.push(t),r=0;r<6;r++){if(!(t=i._decodeCode(t.end,i.CODE_G_START)))return null;n.push(t),e.push(t.code)}return t},r.prototype._decode=function(){var t,e,n=this,r=[],o=[],i={};if(!(t=n._findStart()))return null;if(e={code:t.code,start:t.start,end:t.end},o.push(e),!(e=n._decodePayload(e,r,o)))return null;if(!(e=n._findEnd(e.end,!1)))return null;if(o.push(e),!n._checksum(r))return null;if(this.supplements.length>0){var a=this._decodeExtensions(e.end);if(!a)return null;var u=a.decodedCodes[a.decodedCodes.length-1],s={start:u.start+((u.end-u.start)/2|0),end:u.end};if(!n._verifyTrailingWhitespace(s))return null;i={supplement:a,code:r.join("")+a.code}}return c({code:r.join(""),start:t.start,end:e.end,codeset:"",startInfo:t,decodedCodes:o},i)},r.prototype._decodeExtensions=function(t){var e,n,r=this._nextSet(this._row,t),o=this._findPattern(this.EXTENSION_START_PATTERN,r,!1,!1);if(null===o)return null;for(e=0;e<this.supplements.length;e++)if(null!==(n=this.supplements[e].decode(this._row,o.end)))return{code:n.code,start:r,startInfo:o,end:n.end,codeset:"",decodedCodes:n.decodedCodes};return null},r.prototype._checksum=function(t){var e,n=0;for(e=t.length-2;e>=0;e-=2)n+=t[e];for(n*=3,e=t.length-1;e>=0;e-=2)n+=t[e];return n%10==0},r.CONFIG_KEYS={supplements:{type:"arrayOf(string)",default:[],description:"Allowed extensions to be decoded (2 and/or 5)"}},e.a=r},function(t,e,n){var r=n(38),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e){function n(t){var e=new Float32Array(2);return e[0]=t[0],e[1]=t[1],e}t.exports=n},function(t,e,n){function r(t){return null==t?void 0===t?c:u:s&&s in Object(t)?i(t):a(t)}var o=n(11),i=n(119),a=n(146),u="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){"use strict";e.a={drawRect:function(t,e,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=1,n.beginPath(),n.strokeRect(t.x,t.y,e.x,e.y)},drawPath:function(t,e,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=r.lineWidth,n.beginPath(),n.moveTo(t[0][e.x],t[0][e.y]);for(var o=1;o<t.length;o++)n.lineTo(t[o][e.x],t[o][e.y]);n.closePath(),n.stroke()},drawImage:function(t,e,n){var r,o=n.getImageData(0,0,e.x,e.y),i=o.data,a=t.length,u=i.length;if(u/a!=4)return!1;for(;a--;)r=t[a],i[--u]=255,i[--u]=r,i[--u]=r,i[--u]=r;return n.putImageData(o,0,0),!0}}},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(133),i=n(134),a=n(135),u=n(136),c=n(137);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,e,n){var r=n(5),o=r.Symbol;t.exports=o},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(17);t.exports=r},function(t,e,n){function r(t,e){return o(t)?t:i(t,e)?[t]:a(u(t))}var o=n(2),i=n(130),a=n(154),u=n(165);t.exports=r},function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(131);t.exports=r},function(t,e){function n(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e,n){var r=n(22),o=r(Object,"create");t.exports=o},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){var r=n(96),o=n(6),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,n){"use strict";function r(t,e){return{x:t,y:e,toVec2:function(){return b.clone([this.x,this.y])},toVec3:function(){return E.clone([this.x,this.y,1])},round:function(){return this.x=this.x>0?Math.floor(this.x+.5):Math.floor(this.x-.5),this.y=this.y>0?Math.floor(this.y+.5):Math.floor(this.y-.5),this}}}function o(t,e,n){n||(n=t);for(var r=t.data,o=r.length,i=n.data;o--;)i[o]=r[o]<e?1:0}function i(t,e){e||(e=8);for(var n=t.data,r=n.length,o=8-e,i=1<<e,a=new Int32Array(i);r--;)a[n[r]>>o]++;return a}function a(t,e){function n(t,e){var n,r=0;for(n=t;n<=e;n++)r+=a[n];return r}function r(t,e){var n,r=0;for(n=t;n<=e;n++)r+=n*a[n];return r}function o(){var o,u,c,s,f,l,d,h=[0],p=(1<<e)-1;for(a=i(t,e),s=1;s<p;s++)o=n(0,s),u=n(s+1,p),c=o*u,0===c&&(c=1),f=r(0,s)*u,l=r(s+1,p)*o,d=f-l,h[s]=d*d/c;return x.a.maxIndex(h)}e||(e=8);var a,u=8-e;return o()<<u}function u(t,e){var n=a(t);return o(t,n,e),n}function c(t,e,n){function r(t){var e=!1;for(i=0;i<c.length;i++)a=c[i],a.fits(t)&&(a.add(t),e=!0);return e}var o,i,a,u,c=[];for(n||(n="rad"),o=0;o<t.length;o++)u=m.a.createPoint(t[o],o,n),r(u)||c.push(m.a.create(u,e));return c}function s(t,e,n){var r,o,i,a,u=0,c=0,s=[];for(r=0;r<e;r++)s[r]={score:0,item:null};for(r=0;r<t.length;r++)if((o=n.apply(this,[t[r]]))>c)for(i=s[u],i.score=o,i.item=t[r],c=Number.MAX_VALUE,a=0;a<e;a++)s[a].score<c&&(c=s[a].score,u=a);return s}function f(t,e,n){for(var r,o=0,i=e.x,a=Math.floor(t.length/4),u=e.x/2,c=0,s=e.x;i<a;){for(r=0;r<u;r++)n[c]=(.299*t[4*o+0]+.587*t[4*o+1]+.114*t[4*o+2]+(.299*t[4*(o+1)+0]+.587*t[4*(o+1)+1]+.114*t[4*(o+1)+2])+(.299*t[4*i+0]+.587*t[4*i+1]+.114*t[4*i+2])+(.299*t[4*(i+1)+0]+.587*t[4*(i+1)+1]+.114*t[4*(i+1)+2]))/4,c++,o+=2,i+=2;o+=s,i+=s}}function l(t,e,n){var r,o=t.length/4|0;if(n&&n.singleChannel===!0)for(r=0;r<o;r++)e[r]=t[4*r+0];else for(r=0;r<o;r++)e[r]=.299*t[4*r+0]+.587*t[4*r+1]+.114*t[4*r+2]}function d(t,e){for(var n=t.data,r=t.size.x,o=e.data,i=0,a=r,u=n.length,c=r/2,s=0;a<u;){for(var f=0;f<c;f++)o[s]=Math.floor((n[i]+n[i+1]+n[a]+n[a+1])/4),s++,i+=2,a+=2;i+=r,a+=r}}function h(t,e){var n=t[0],r=t[1],o=t[2],i=o*r,a=i*(1-Math.abs(n/60%2-1)),u=o-i,c=0,s=0,f=0;return e=e||[0,0,0],n<60?(c=i,s=a):n<120?(c=a,s=i):n<180?(s=i,f=a):n<240?(s=a,f=i):n<300?(c=a,f=i):n<360&&(c=i,f=a),e[0]=255*(c+u)|0,e[1]=255*(s+u)|0,e[2]=255*(f+u)|0,e}function p(t){var e,n=[],r=[];for(e=1;e<Math.sqrt(t)+1;e++)t%e==0&&(r.push(e),e!==t/e&&n.unshift(Math.floor(t/e)));return r.concat(n)}function v(t,e){for(var n=0,r=0,o=[];n<t.length&&r<e.length;)t[n]===e[r]?(o.push(t[n]),n++,r++):t[n]>e[r]?r++:n++;return o}function _(t,e){function n(t){for(var e=0,n=t[Math.floor(t.length/2)];e<t.length-1&&t[e]<d;)e++;return e>0&&(n=Math.abs(t[e]-d)>Math.abs(t[e-1]-d)?t[e-1]:t[e]),d/n<c[f+1]/c[f]&&d/n>c[f-1]/c[f]?{x:n,y:n}:null}var r,o=p(e.x),i=p(e.y),a=Math.max(e.x,e.y),u=v(o,i),c=[8,10,15,20,32,60,80],s={"x-small":5,small:4,medium:3,large:2,"x-large":1},f=s[t]||s.medium,l=c[f],d=Math.floor(a/l);return r=n(u),r||(r=n(p(a)))||(r=n(p(d*l))),r}function g(t){return{value:parseFloat(t),unit:(t.indexOf("%"),t.length,"%")}}function y(t,e,n){var r={width:t,height:e},o=Object.keys(n).reduce(function(t,e){var o=n[e],i=g(o),a=C[e](i,r);return t[e]=a,t},{});return{sx:o.left,sy:o.top,sw:o.right-o.left,sh:o.bottom-o.top}}var m=n(50),x=n(3);e.b=r,e.f=u,e.g=c,e.h=s,e.c=f,e.d=l,e.i=d,e.a=h,e.e=_,e.j=y;var b={clone:n(7)},E={clone:n(83)},C={top:function(t,e){if("%"===t.unit)return Math.floor(e.height*(t.value/100))},right:function(t,e){if("%"===t.unit)return Math.floor(e.width-e.width*(t.value/100))},bottom:function(t,e){if("%"===t.unit)return Math.floor(e.height-e.height*(t.value/100))},left:function(t,e){if("%"===t.unit)return Math.floor(e.width*(t.value/100))}}},function(t,e,n){"use strict";function r(t,e,n,r){e?this.data=e:n?(this.data=new n(t.x*t.y),n===Array&&r&&a.a.init(this.data,0)):(this.data=new Uint8Array(t.x*t.y),Uint8Array===Array&&r&&a.a.init(this.data,0)),this.size=t}var o=n(53),i=n(19),a=n(3),u={clone:n(7)};r.prototype.inImageWithBorder=function(t,e){return t.x>=e&&t.y>=e&&t.x<this.size.x-e&&t.y<this.size.y-e},r.sample=function(t,e,n){var r=Math.floor(e),o=Math.floor(n),i=t.size.x,a=o*t.size.x+r,u=t.data[a+0],c=t.data[a+1],s=t.data[a+i],f=t.data[a+i+1],l=u-c;return e-=r,n-=o,Math.floor(e*(n*(l-s+f)-l)+n*(s-u)+u)},r.clearArray=function(t){for(var e=t.length;e--;)t[e]=0},r.prototype.subImage=function(t,e){return new o.a(t,e,this)},r.prototype.subImageAsCopy=function(t,e){var n,r,o=t.size.y,i=t.size.x;for(n=0;n<i;n++)for(r=0;r<o;r++)t.data[r*i+n]=this.data[(e.y+r)*this.size.x+e.x+n]},r.prototype.copyTo=function(t){for(var e=this.data.length,n=this.data,r=t.data;e--;)r[e]=n[e]},r.prototype.get=function(t,e){return this.data[e*this.size.x+t]},r.prototype.getSafe=function(t,e){var n;if(!this.indexMapping){for(this.indexMapping={x:[],y:[]},n=0;n<this.size.x;n++)this.indexMapping.x[n]=n,this.indexMapping.x[n+this.size.x]=n;for(n=0;n<this.size.y;n++)this.indexMapping.y[n]=n,this.indexMapping.y[n+this.size.y]=n}return this.data[this.indexMapping.y[e+this.size.y]*this.size.x+this.indexMapping.x[t+this.size.x]]},r.prototype.set=function(t,e,n){return this.data[e*this.size.x+t]=n,this},r.prototype.zeroBorder=function(){var t,e=this.size.x,n=this.size.y,r=this.data;for(t=0;t<e;t++)r[t]=r[(n-1)*e+t]=0;for(t=1;t<n-1;t++)r[t*e]=r[t*e+(e-1)]=0},r.prototype.invert=function(){for(var t=this.data,e=t.length;e--;)t[e]=t[e]?0:1},r.prototype.convolve=function(t){var e,n,r,o,i=t.length/2|0,a=0;for(n=0;n<this.size.y;n++)for(e=0;e<this.size.x;e++){for(a=0,o=-i;o<=i;o++)for(r=-i;r<=i;r++)a+=t[o+i][r+i]*this.getSafe(e+r,n+o);this.data[n*this.size.x+e]=a}},r.prototype.moments=function(t){var e,n,r,o,i,a,c,s,f,l,d,h,p=this.data,v=this.size.y,_=this.size.x,g=[],y=[],m=Math.PI,x=m/4;if(t<=0)return y;for(i=0;i<t;i++)g[i]={m00:0,m01:0,m10:0,m11:0,m02:0,m20:0,theta:0,rad:0};for(n=0;n<v;n++)for(o=n*n,e=0;e<_;e++)(r=p[n*_+e])>0&&(a=g[r-1],a.m00+=1,a.m01+=n,a.m10+=e,a.m11+=e*n,a.m02+=o,a.m20+=e*e);for(i=0;i<t;i++)a=g[i],isNaN(a.m00)||0===a.m00||(l=a.m10/a.m00,d=a.m01/a.m00,c=a.m11/a.m00-l*d,s=a.m02/a.m00-d*d,f=a.m20/a.m00-l*l,h=(s-f)/(2*c),h=.5*Math.atan(h)+(c>=0?x:-x)+m,a.theta=(180*h/m+90)%180-90,a.theta<0&&(a.theta+=180),a.rad=h>m?h-m:h,a.vec=u.clone([Math.cos(h),Math.sin(h)]),y.push(a));return y},r.prototype.show=function(t,e){var n,r,o,i,a,u,c;for(e||(e=1),n=t.getContext("2d"),t.width=this.size.x,t.height=this.size.y,r=n.getImageData(0,0,t.width,t.height),o=r.data,i=0,c=0;c<this.size.y;c++)for(u=0;u<this.size.x;u++)a=c*this.size.x+u,i=this.get(u,c)*e,o[4*a+0]=i,o[4*a+1]=i,o[4*a+2]=i,o[4*a+3]=255;n.putImageData(r,0,0)},r.prototype.overlay=function(t,e,r){(!e||e<0||e>360)&&(e=360);for(var o=[0,1,1],a=[0,0,0],u=[255,255,255],c=[0,0,0],s=[],f=t.getContext("2d"),l=f.getImageData(r.x,r.y,this.size.x,this.size.y),d=l.data,h=this.data.length;h--;)o[0]=this.data[h]*e,s=o[0]<=0?u:o[0]>=360?c:n.i(i.a)(o,a),d[4*h+0]=s[0],d[4*h+1]=s[1],d[4*h+2]=s[2],d[4*h+3]=255;f.putImageData(l,r.x,r.y)},e.a=r},function(t,e,n){function r(t,e,n){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var o=n(37);t.exports=r},function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(97),i=n(120);t.exports=r},function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(27),i=1/0;t.exports=r},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(25),i=n(26);t.exports=r},function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==u||e==c||e==a||e==s}var o=n(8),i=n(0),a="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=n(8),i=n(6),a="[object Symbol]";t.exports=r},function(t,e,n){var r=n(100),o=n(116),i=o(function(t,e,n){r(t,e,n)});t.exports=i},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r={searchDirections:[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],create:function(t,e){function n(t,e,n,r){var o,f,l;for(o=0;o<7;o++){if(f=t.cy+c[t.dir][0],l=t.cx+c[t.dir][1],i=f*s+l,a[i]===e&&(0===u[i]||u[i]===n))return u[i]=n,t.cy=f,t.cx=l,!0;0===u[i]&&(u[i]=r),t.dir=(t.dir+1)%8}return!1}function r(t,e,n){return{dir:n,x:t,y:e,next:null,prev:null}}function o(t,e,o,i,a){var u,c,s,f=null,l={cx:e,cy:t,dir:0};if(n(l,i,o,a)){f=r(e,t,l.dir),u=f,s=l.dir,c=r(l.cx,l.cy,0),c.prev=u,u.next=c,c.next=null,u=c;do l.dir=(l.dir+6)%8,n(l,i,o,a),s!==l.dir?(u.dir=l.dir,c=r(l.cx,l.cy,0),c.prev=u,u.next=c,c.next=null,u=c):(u.dir=s,u.x=l.cx,u.y=l.cy),s=l.dir;while(l.cx!==e||l.cy!==t);f.prev=u.prev,u.prev.next=f}return f}var i,a=t.data,u=e.data,c=this.searchDirections,s=t.size.x;return{trace:function(t,e,r,o){return n(t,e,r,o)},contourTracing:function(t,e,n,r,i){return o(t,e,n,r,i)}}}};e.a=r},function(t,e,n){"use strict";function r(){o.a.call(this)}var o=n(1),i=n(3),a={ALPHABETH_STRING:{value:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%"},ALPHABET:{value:[48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,45,46,32,42,36,47,43,37]},CHARACTER_ENCODINGS:{value:[52,289,97,352,49,304,112,37,292,100,265,73,328,25,280,88,13,268,76,28,259,67,322,19,274,82,7,262,70,22,385,193,448,145,400,208,133,388,196,148,168,162,138,42]},ASTERISK:{value:148},FORMAT:{value:"code_39",writeable:!1}};r.prototype=Object.create(o.a.prototype,a),r.prototype.constructor=r,r.prototype._decode=function(){var t,e,n,r,o=this,a=[0,0,0,0,0,0,0,0,0],u=[],c=o._findStart();if(!c)return null;r=o._nextSet(o._row,c.end);do{if(a=o._toCounters(r,a),(n=o._toPattern(a))<0)return null;if((t=o._patternToChar(n))<0)return null;u.push(t),e=r,r+=i.a.sum(a),r=o._nextSet(o._row,r)}while("*"!==t);return u.pop(),u.length&&o._verifyTrailingWhitespace(e,r,a)?{code:u.join(""),start:c.start,end:r,startInfo:c,decodedCodes:u}:null},r.prototype._verifyTrailingWhitespace=function(t,e,n){var r=i.a.sum(n);return 3*(e-t-r)>=r},r.prototype._patternToChar=function(t){var e,n=this;for(e=0;e<n.CHARACTER_ENCODINGS.length;e++)if(n.CHARACTER_ENCODINGS[e]===t)return String.fromCharCode(n.ALPHABET[e]);return-1},r.prototype._findNextWidth=function(t,e){var n,r=Number.MAX_VALUE;for(n=0;n<t.length;n++)t[n]<r&&t[n]>e&&(r=t[n]);return r},r.prototype._toPattern=function(t){for(var e,n,r=t.length,o=0,i=r,a=0,u=this;i>3;){for(o=u._findNextWidth(t,o),i=0,e=0,n=0;n<r;n++)t[n]>o&&(e|=1<<r-1-n,i++,a+=t[n]);if(3===i){for(n=0;n<r&&i>0;n++)if(t[n]>o&&(i--,2*t[n]>=a))return-1;return e}}return-1},r.prototype._findStart=function(){var t,e,n,r=this,o=r._nextSet(r._row),i=o,a=[0,0,0,0,0,0,0,0,0],u=0,c=!1;for(t=o;t<r._row.length;t++)if(r._row[t]^c)a[u]++;else{if(u===a.length-1){if(r._toPattern(a)===r.ASTERISK&&(n=Math.floor(Math.max(0,i-(t-i)/4)),r._matchRange(n,i,0)))return{start:i,end:t};for(i+=a[0]+a[1],e=0;e<7;e++)a[e]=a[e+2];a[7]=0,a[8]=0,u--}else u++;a[u]=1,c=!c}return null},e.a=r},function(t,e){function n(t,e){return t[0]*e[0]+t[1]*e[1]}t.exports=n},function(t,e,n){var r=n(22),o=n(5),i=r(o,"Map");t.exports=i},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(138),i=n(139),a=n(140),u=n(141),c=n(142);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e,n){(void 0===n||i(t[e],n))&&(void 0!==n||e in t)||o(t,e,n)}var o=n(21),i=n(17);t.exports=r},function(t,e,n){function r(t,e,n){var r=t[e];u.call(t,e)&&i(r,n)&&(void 0!==n||e in t)||o(t,e,n)}var o=n(21),i=n(17),a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(22),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(47))},function(t,e,n){var r=n(147),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}var r=Object.prototype;t.exports=n},function(t,e,n){function r(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,a=-1,u=i(r.length-e,0),c=Array(u);++a<u;)c[a]=r[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=r[a];return s[e]=n(c),o(t,this,s)}}var o=n(87),i=Math.max;t.exports=r},function(t,e,n){var r=n(106),o=n(148),i=o(r);t.exports=i},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){(function(t){var r=n(5),o=n(163),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i,c=u?r.Buffer:void 0,s=c?c.isBuffer:void 0,f=s||o;t.exports=f}).call(e,n(29)(t))},function(t,e,n){var r=n(98),o=n(109),i=n(145),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},function(t,e,n){function r(t){return a(t)?o(t,!0):i(t)}var o=n(88),i=n(99),a=n(24);t.exports=r},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(e,n,r){"use strict";function o(t){f(t),P=k.a.create($.decoder,S)}function i(t){var e;if("VideoStream"===$.inputStream.type)e=document.createElement("video"),R=H.a.createVideoStream(e);else if("ImageStream"===$.inputStream.type)R=H.a.createImageStream();else if("LiveStream"===$.inputStream.type){var n=a();n&&((e=n.querySelector("video"))||(e=document.createElement("video"),n.appendChild(e))),R=H.a.createLiveStream(e),F.a.request(e,$.inputStream.constraints).then(function(){R.trigger("canrecord")}).catch(function(e){return t(e)})}R.setAttribute("preload","auto"),R.setInputStream($.inputStream),R.addEventListener("canrecord",u.bind(void 0,t))}function a(){var t=$.inputStream.target;if(t&&t.nodeName&&1===t.nodeType)return t;var e="string"==typeof t?t:"#interactive.viewport";return document.querySelector(e)}function u(t){U.a.checkImageConstraints(R,$.locator),s($),w=V.a.create(R,K.dom.image),A($.numOfWorkers,function(){0===$.numOfWorkers&&o(),c(t)})}function c(t){R.play(),t()}function s(){if("undefined"!=typeof document){var t=a();if(K.dom.image=document.querySelector("canvas.imgBuffer"),K.dom.image||(K.dom.image=document.createElement("canvas"),K.dom.image.className="imgBuffer",t&&"ImageStream"===$.inputStream.type&&t.appendChild(K.dom.image)),K.ctx.image=K.dom.image.getContext("2d"),K.dom.image.width=R.getCanvasSize().x,K.dom.image.height=R.getCanvasSize().y,K.dom.overlay=document.querySelector("canvas.drawingBuffer"),!K.dom.overlay){K.dom.overlay=document.createElement("canvas"),K.dom.overlay.className="drawingBuffer",t&&t.appendChild(K.dom.overlay);var e=document.createElement("br");e.setAttribute("clear","all"),t&&t.appendChild(e)}K.ctx.overlay=K.dom.overlay.getContext("2d"),K.dom.overlay.width=R.getCanvasSize().x,K.dom.overlay.height=R.getCanvasSize().y}}function f(t){S=t?t:new j.a({x:R.getWidth(),y:R.getHeight()}),D=[q.clone([0,0]),q.clone([0,S.size.y]),q.clone([S.size.x,S.size.y]),q.clone([S.size.x,0])],U.a.init(S,$.locator)}function l(){return $.locate?U.a.locate():[[q.clone(D[0]),q.clone(D[1]),q.clone(D[2]),q.clone(D[3])]]}function d(t){function e(t){for(var e=t.length;e--;)t[e][0]+=i,t[e][1]+=a}function n(t){t[0].x+=i,t[0].y+=a,t[1].x+=i,t[1].y+=a}var r,o=R.getTopRight(),i=o.x,a=o.y;if(0!==i||0!==a){if(t.barcodes)for(r=0;r<t.barcodes.length;r++)d(t.barcodes[r]);if(t.line&&2===t.line.length&&n(t.line),t.box&&e(t.box),t.boxes&&t.boxes.length>0)for(r=0;r<t.boxes.length;r++)e(t.boxes[r])}}function h(t,e){e&&I&&(t.barcodes?t.barcodes.filter(function(t){return t.codeResult}).forEach(function(t){return h(t,e)}):t.codeResult&&I.addResult(e,R.getCanvasSize(),t.codeResult))}function p(t){return t&&(t.barcodes?t.barcodes.some(function(t){return t.codeResult}):t.codeResult)}function v(t,e){var n=t;t&&Q&&(d(t),h(t,e),n=t.barcodes||t),L.a.publish("processed",n),p(t)&&L.a.publish("detected",n)}function _(){var t,e;e=l(),e?(t=P.decodeFromBoundingBoxes(e),t=t||{},t.boxes=e,v(t,S.data)):v()}function g(){var t;if(Q){if(Y.length>0){if(!(t=Y.filter(function(t){return!t.busy})[0]))return;w.attachData(t.imageData)}else w.attachData(S.data);w.grab()&&(t?(t.busy=!0,t.worker.postMessage({cmd:"process",imageData:t.imageData},[t.imageData.buffer])):_())}else _()}function y(){var t=null,e=1e3/($.frequency||60);T=!1,function n(r){t=t||r,T||(r>=t&&(t+=e,g()),window.requestAnimFrame(n))}(performance.now())}function m(){Q&&"LiveStream"===$.inputStream.type?y():g()}function x(t){var e,n={worker:void 0,imageData:new Uint8Array(R.getWidth()*R.getHeight()),busy:!0};e=C(),n.worker=new Worker(e),n.worker.onmessage=function(r){if("initialized"===r.data.event)return URL.revokeObjectURL(e),n.busy=!1,n.imageData=new Uint8Array(r.data.imageData),t(n);"processed"===r.data.event?(n.imageData=new Uint8Array(r.data.imageData),n.busy=!1,v(r.data.result,n.imageData)):r.data.event},n.worker.postMessage({cmd:"init",size:{x:R.getWidth(),y:R.getHeight()},imageData:n.imageData,config:b($)},[n.imageData.buffer])}function b(t){return X({},t,{inputStream:X({},t.inputStream,{target:null})})}function E(t){function e(t){self.postMessage({event:"processed",imageData:o.data,result:t},[o.data.buffer])}function n(){self.postMessage({event:"initialized",imageData:o.data},[o.data.buffer])}if(t){var r=t().default;if(!r)return void self.postMessage({event:"error",message:"Quagga could not be created"})}var o;self.onmessage=function(t){if("init"===t.data.cmd){var i=t.data.config;i.numOfWorkers=0,o=new r.ImageWrapper({x:t.data.size.x,y:t.data.size.y},new Uint8Array(t.data.imageData)),r.init(i,n,o),r.onProcessed(e)}else"process"===t.data.cmd?(o.data=new Uint8Array(t.data.imageData),r.start()):"setReaders"===t.data.cmd&&r.setReaders(t.data.readers)}}function C(){var e,n;return void 0!==t&&(n=t),e=new Blob(["("+E.toString()+")("+n+");"],{type:"text/javascript"}),window.URL.createObjectURL(e)}function O(t){P?P.setReaders(t):Q&&Y.length>0&&Y.forEach(function(e){e.worker.postMessage({cmd:"setReaders",readers:t})})}function A(t,e){var n=t-Y.length;if(0===n)return e&&e();if(n<0){return Y.slice(n).forEach(function(t){t.worker.terminate()}),Y=Y.slice(0,n),e&&e()}for(var r=function(n){Y.push(n),Y.length>=t&&e&&e()},o=0;o<n;o++)x(r)}Object.defineProperty(n,"__esModule",{value:!0});var R,w,T,S,D,P,I,M=r(28),N=r.n(M),z=r(54),j=(r.n(z),r(20)),U=r(64),k=r(57),L=r(51),F=r(59),W=r(9),B=r(49),G=r(55),H=r(63),V=r(61),X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},q={clone:r(7)},K={ctx:{image:null,overlay:null},dom:{image:null,overlay:null}},Y=[],Q=!0,$={};n.default={init:function(t,e,n){if($=N()({},G.a,t),n)return Q=!1,o(n),e();i(e)},start:function(){m()},stop:function(){T=!0,A(0),"LiveStream"===$.inputStream.type&&(F.a.release(),R.clearEventHandlers())},pause:function(){T=!0},onDetected:function(t){L.a.subscribe("detected",t)},offDetected:function(t){L.a.unsubscribe("detected",t)},onProcessed:function(t){L.a.subscribe("processed",t)},offProcessed:function(t){L.a.unsubscribe("processed",t)},setReaders:function(t){O(t)},registerResultCollector:function(t){t&&"function"==typeof t.addResult&&(I=t)},canvas:K,decodeSingle:function(t,e){var n=this;t=N()({inputStream:{type:"ImageStream",sequence:!1,size:800,src:t.src},numOfWorkers:1,locator:{halfSample:!1}},t),this.init(t,function(){L.a.once("processed",function(t){n.stop(),e.call(null,t)},!0),m()})},ImageWrapper:j.a,ImageDebug:W.a,ResultCollector:B.a,CameraAccess:F.a}},function(t,e,n){"use strict";function r(t,e){return!!e&&e.some(function(e){return Object.keys(e).every(function(n){return e[n]===t[n]})})}function o(t,e){return"function"!=typeof e||e(t)}var i=n(9);e.a={create:function(t){function e(e){return c&&e&&!r(e,t.blacklist)&&o(e,t.filter)}var n=document.createElement("canvas"),a=n.getContext("2d"),u=[],c=t.capacity||20,s=t.capture===!0;return{addResult:function(t,r,o){var f={};e(o)&&(c--,f.codeResult=o,s&&(n.width=r.x,n.height=r.y,i.a.drawImage(t,r,a),f.frame=n.toDataURL()),u.push(f))},getResults:function(){return u}}}}},function(t,e,n){"use strict";var r={clone:n(7),dot:n(32)};e.a={create:function(t,e){function n(){o(t),i()}function o(t){c[t.id]=t,a.push(t)}function i(){var t,e=0;for(t=0;t<a.length;t++)e+=a[t].rad;u.rad=e/a.length,u.vec=r.clone([Math.cos(u.rad),Math.sin(u.rad)])}var a=[],u={rad:0,vec:r.clone([0,0])},c={};return n(),{add:function(t){c[t.id]||(o(t),i())},fits:function(t){return Math.abs(r.dot(t.point.vec,u.vec))>e},getPoints:function(){return a},getCenter:function(){return u}}},createPoint:function(t,e,n){return{rad:t[n],point:t,id:e}}}},function(t,e,n){"use strict";e.a=function(){function t(t){return o[t]||(o[t]={subscribers:[]}),o[t]}function e(){o={}}function n(t,e){t.async?setTimeout(function(){t.callback(e)},4):t.callback(e)}function r(e,n,r){var o;if("function"==typeof n)o={callback:n,async:r};else if(o=n,!o.callback)throw"Callback was not specified on options";t(e).subscribers.push(o)}var o={};return{subscribe:function(t,e,n){return r(t,e,n)},publish:function(e,r){var o=t(e),i=o.subscribers;i.filter(function(t){return!!t.once}).forEach(function(t){n(t,r)}),o.subscribers=i.filter(function(t){return!t.once}),o.subscribers.forEach(function(t){n(t,r)})},once:function(t,e,n){r(t,{callback:e,async:n,once:!0})},unsubscribe:function(n,r){var o;n?(o=t(n),o.subscribers=o&&r?o.subscribers.filter(function(t){return t.callback!==r}):[]):e()}}}()},function(t,e,n){"use strict";function r(){return navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices?navigator.mediaDevices.enumerateDevices():Promise.reject(new Error("enumerateDevices is not defined"))}function o(t){return navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t):Promise.reject(new Error("getUserMedia is not defined"))}e.b=r,e.a=o},function(t,e,n){"use strict";function r(t,e,n){n||(n={data:null,size:e}),this.data=n.data,this.originalSize=n.size,this.I=n,this.from=t,this.size=e}r.prototype.show=function(t,e){var n,r,o,i,a,u,c;for(e||(e=1),n=t.getContext("2d"),t.width=this.size.x,t.height=this.size.y,r=n.getImageData(0,0,t.width,t.height),o=r.data,i=0,a=0;a<this.size.y;a++)for(u=0;u<this.size.x;u++)c=a*this.size.x+u,i=this.get(u,a)*e,o[4*c+0]=i,o[4*c+1]=i,o[4*c+2]=i,o[4*c+3]=255;r.data=o,n.putImageData(r,0,0)},r.prototype.get=function(t,e){return this.data[(this.from.y+e)*this.originalSize.x+this.from.x+t]},r.prototype.updateData=function(t){this.originalSize=t.size,this.data=t.data},r.prototype.updateFrom=function(t){return this.from=t,this},e.a=r},function(t,e){"undefined"!=typeof window&&(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()),Math.imul=Math.imul||function(t,e){var n=t>>>16&65535,r=65535&t,o=e>>>16&65535,i=65535&e;return r*i+(n*i+r*o<<16>>>0)|0},"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e})},function(t,e,n){"use strict";var r=void 0;r=n(56),e.a=r},function(t,e){t.exports={inputStream:{name:"Live",type:"LiveStream",constraints:{width:640,height:480,facingMode:"environment"},area:{top:"0%",right:"0%",left:"0%",bottom:"0%"},singleChannel:!1},locate:!0,numOfWorkers:4,decoder:{readers:["code_128_reader"]},locator:{halfSample:!0,patchSize:"medium"}}},function(t,e,n){"use strict";var r=n(58),o=(n(9),n(69)),i=n(4),a=n(31),u=n(70),c=n(68),s=n(77),f=n(74),l=n(72),d=n(73),h=n(76),p=n(75),v=n(67),_=n(71),g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y={code_128_reader:o.a,ean_reader:i.a,ean_5_reader:d.a,ean_2_reader:l.a,ean_8_reader:f.a,code_39_reader:a.a,code_39_vin_reader:u.a,codabar_reader:c.a,upc_reader:s.a,upc_e_reader:h.a,i2of5_reader:p.a,"2of5_reader":v.a,code_93_reader:_.a};e.a={create:function(t,e){function n(){}function o(){t.readers.forEach(function(t){var e,n={},r=[];"object"===(void 0===t?"undefined":g(t))?(e=t.format,n=t.config):"string"==typeof t&&(e=t),n.supplements&&(r=n.supplements.map(function(t){return new y[t]})),h.push(new y[e](n,r))})}function i(){}function a(t,n,r){function o(e){var r={y:e*Math.sin(n),x:e*Math.cos(n)};t[0].y-=r.y,t[0].x-=r.x,t[1].y+=r.y,t[1].x+=r.x}for(o(r);r>1&&(!e.inImageWithBorder(t[0],0)||!e.inImageWithBorder(t[1],0));)r-=Math.ceil(r/2),o(-r);return t}function u(t){return[{x:(t[1][0]-t[0][0])/2+t[0][0],y:(t[1][1]-t[0][1])/2+t[0][1]},{x:(t[3][0]-t[2][0])/2+t[2][0],y:(t[3][1]-t[2][1])/2+t[2][1]}]}function c(t){var n,o=null,i=r.a.getBarcodeLine(e,t[0],t[1]);for(r.a.toBinaryLine(i),n=0;n<h.length&&null===o;n++)o=h[n].decodePattern(i.line);return null===o?null:{codeResult:o,barcodeLine:i}}function s(t,e,n){var r,o,i,a=Math.sqrt(Math.pow(t[1][0]-t[0][0],2)+Math.pow(t[1][1]-t[0][1],2)),u=16,s=null,f=Math.sin(n),l=Math.cos(n);for(r=1;r<u&&null===s;r++)o=a/u*r*(r%2==0?-1:1),i={y:o*f,x:o*l},e[0].y+=i.x,e[0].x-=i.y,e[1].y+=i.x,e[1].x-=i.y,s=c(e);return s}function f(t){return Math.sqrt(Math.pow(Math.abs(t[1].y-t[0].y),2)+Math.pow(Math.abs(t[1].x-t[0].x),2))}function l(t){var e,n,r,o;d.ctx.overlay;return e=u(t),o=f(e),n=Math.atan2(e[1].y-e[0].y,e[1].x-e[0].x),null===(e=a(e,n,Math.floor(.1*o)))?null:(r=c(e),null===r&&(r=s(t,e,n)),null===r?null:{codeResult:r.codeResult,line:e,angle:n,pattern:r.barcodeLine.line,threshold:r.barcodeLine.threshold})}var d={ctx:{frequency:null,pattern:null,overlay:null},dom:{frequency:null,pattern:null,overlay:null}},h=[];return n(),o(),i(),{decodeFromBoundingBox:function(t){return l(t)},decodeFromBoundingBoxes:function(e){var n,r,o=[],i=t.multiple;for(n=0;n<e.length;n++){var a=e[n];if(r=l(a)||{},r.box=a,i)o.push(r);else if(r.codeResult)return r}if(i)return{barcodes:o}},setReaders:function(e){t.readers=e,h.length=0,o()}}}}},function(t,e,n){"use strict";var r=(n(20),{}),o={DIR:{UP:1,DOWN:-1}};r.getBarcodeLine=function(t,e,n){function r(t,e){l=y[e*m+t],x+=l,b=l<b?l:b,E=l>E?l:E,g.push(l)}var o,i,a,u,c,s,f,l,d=0|e.x,h=0|e.y,p=0|n.x,v=0|n.y,_=Math.abs(v-h)>Math.abs(p-d),g=[],y=t.data,m=t.size.x,x=0,b=255,E=0;for(_&&(s=d,d=h,h=s,s=p,p=v,v=s),d>p&&(s=d,d=p,p=s,s=h,h=v,v=s),o=p-d,i=Math.abs(v-h),a=o/2|0,c=h,u=h<v?1:-1,f=d;f<p;f++)_?r(c,f):r(f,c),(a-=i)<0&&(c+=u,a+=o);return{line:g,min:b,max:E}},r.toBinaryLine=function(t){var e,n,r,i,a,u,c=t.min,s=t.max,f=t.line,l=c+(s-c)/2,d=[],h=(s-c)/12,p=-h;for(r=f[0]>l?o.DIR.UP:o.DIR.DOWN,d.push({pos:0,val:f[0]}),a=0;a<f.length-2;a++)e=f[a+1]-f[a],n=f[a+2]-f[a+1],i=e+n<p&&f[a+1]<1.5*l?o.DIR.DOWN:e+n>h&&f[a+1]>.5*l?o.DIR.UP:r,r!==i&&(d.push({pos:a,val:f[a]}),r=i);for(d.push({pos:f.length,val:f[f.length-1]}),u=d[0].pos;u<d[1].pos;u++)f[u]=f[u]>l?0:1;for(a=1;a<d.length-1;a++)for(h=d[a+1].val>d[a].val?d[a].val+(d[a+1].val-d[a].val)/3*2|0:d[a+1].val+(d[a].val-d[a+1].val)/3|0,u=d[a].pos;u<d[a+1].pos;u++)f[u]=f[u]>h?0:1;return{line:f,threshold:h}},r.debug={printFrequency:function(t,e){var n,r=e.getContext("2d");for(e.width=t.length,e.height=256,r.beginPath(),r.strokeStyle="blue",n=0;n<t.length;n++)r.moveTo(n,255),r.lineTo(n,255-t[n]);r.stroke(),r.closePath()},printPattern:function(t,e){var n,r=e.getContext("2d");for(e.width=t.length,r.fillColor="black",n=0;n<t.length;n++)1===t[n]&&r.fillRect(n,0,1,100)}},e.a=r},function(t,e,n){"use strict";function r(t){return new Promise(function(e,n){function r(){o>0?t.videoWidth>10&&t.videoHeight>10?e():window.setTimeout(r,500):n("Unable to play video stream. Is webcam working?"),o--}var o=10;r()})}function o(t,e){return n.i(d.a)(e).then(function(e){return new Promise(function(n){s=e,t.setAttribute("autoplay",!0),t.setAttribute("muted",!0),t.setAttribute("playsinline",!0),t.srcObject=e,t.addEventListener("loadedmetadata",function(){t.play(),n()})})}).then(r.bind(null,t))}function i(t){var e=l()(t,["width","height","facingMode","aspectRatio","deviceId"]);return void 0!==t.minAspectRatio&&t.minAspectRatio>0&&(e.aspectRatio=t.minAspectRatio,console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")),void 0!==t.facing&&(e.facingMode=t.facing,console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")),e}function a(t){var e={audio:!1,video:i(t)};return e.video.deviceId&&e.video.facingMode&&delete e.video.facingMode,Promise.resolve(e)}function u(){return n.i(d.b)().then(function(t){return t.filter(function(t){return"videoinput"===t.kind})})}function c(){if(s){var t=s.getVideoTracks();if(t&&t.length)return t[0]}}var s,f=n(162),l=n.n(f),d=n(52);e.a={request:function(t,e){return a(e).then(o.bind(null,t))},release:function(){var t=s&&s.getVideoTracks();t&&t.length&&t[0].stop(),s=null},enumerateVideoDevices:u,getActiveStreamLabel:function(){var t=c();return t?t.label:""},getActiveTrack:c}},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;return/^blob\:/i.test(t)?i(t).then(o).then(function(t){return a(t,e)}):Promise.resolve(null)}function o(t){return new Promise(function(e){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.readAsArrayBuffer(t)})}function i(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onreadystatechange=function(){r.readyState!==XMLHttpRequest.DONE||200!==r.status&&0!==r.status||e(this.response)},r.onerror=n,r.send()})}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=new DataView(t),r=t.byteLength,o=e.reduce(function(t,e){var n=Object.keys(l).filter(function(t){return l[t]===e})[0];return n&&(t[n]=e),t},{}),i=2;if(255!==n.getUint8(0)||216!==n.getUint8(1))return!1;for(;i<r;){if(255!==n.getUint8(i))return!1;if(225===n.getUint8(i+1))return u(n,i+4,o);i+=2+n.getUint16(i+2)}}function u(t,e,n){if("Exif"!==f(t,e,4))return!1;var r=e+6,o=void 0;if(18761===t.getUint16(r))o=!1;else{if(19789!==t.getUint16(r))return!1;o=!0}if(42!==t.getUint16(r+2,!o))return!1;var i=t.getUint32(r+4,!o);return!(i<8)&&c(t,r,r+i,n,o)}function c(t,e,n,r,o){for(var i=t.getUint16(n,!o),a={},u=0;u<i;u++){var c=n+12*u+2,f=r[t.getUint16(c,!o)];f&&(a[f]=s(t,c,e,n,o))}return a}function s(t,e,n,r,o){var i=t.getUint16(e+2,!o),a=t.getUint32(e+4,!o);switch(i){case 3:if(1===a)return t.getUint16(e+8,!o)}}function f(t,e,n){for(var r="",o=e;o<e+n;o++)r+=String.fromCharCode(t.getUint8(o));return r}e.a=r;var l={274:"orientation"},d=Object.keys(l).map(function(t){return l[t]})},function(t,e,n){"use strict";function r(t,e){t.width!==e.x&&(t.width=e.x),t.height!==e.y&&(t.height=e.y)}var o=n(19),i=Math.PI/180,a={};a.create=function(t,e){var a,u={},c=t.getConfig(),s=(n.i(o.b)(t.getRealWidth(),t.getRealHeight()),t.getCanvasSize()),f=n.i(o.b)(t.getWidth(),t.getHeight()),l=t.getTopRight(),d=l.x,h=l.y,p=null,v=null;return a=e?e:document.createElement("canvas"),a.width=s.x,a.height=s.y,p=a.getContext("2d"),v=new Uint8Array(f.x*f.y),u.attachData=function(t){v=t},u.getData=function(){return v},u.grab=function(){var e,u=c.halfSample,l=t.getFrame(),_=l,g=0;if(_){if(r(a,s),"ImageStream"===c.type&&(_=l.img,l.tags&&l.tags.orientation))switch(l.tags.orientation){case 6:g=90*i;break;case 8:g=-90*i}return 0!==g?(p.translate(s.x/2,s.y/2),p.rotate(g),p.drawImage(_,-s.y/2,-s.x/2,s.y,s.x),p.rotate(-g),p.translate(-s.x/2,-s.y/2)):p.drawImage(_,0,0,s.x,s.y),e=p.getImageData(d,h,f.x,f.y).data,u?n.i(o.c)(e,f,v):n.i(o.d)(e,v,c),!0}return!1},u.getSize=function(){return f},u},e.a=a},function(t,e,n){"use strict";function r(t,e){t.onload=function(){e.loaded(this)}}var o=n(60),i={};i.load=function(t,e,i,a,u){var c,s,f,l=new Array(a),d=new Array(l.length);if(u===!1)l[0]=t;else for(c=0;c<l.length;c++)f=i+c,l[c]=t+"image-"+("00"+f).slice(-3)+".jpg";for(d.notLoaded=[],d.addImage=function(t){d.notLoaded.push(t)},d.loaded=function(r){for(var i=d.notLoaded,a=0;a<i.length;a++)if(i[a]===r){i.splice(a,1);for(var c=0;c<l.length;c++){var s=l[c].substr(l[c].lastIndexOf("/"));if(r.src.lastIndexOf(s)!==-1){d[c]={img:r};break}}break}0===i.length&&(u===!1?n.i(o.a)(t,["orientation"]).then(function(t){d[0].tags=t,e(d)}).catch(function(t){console.log(t),e(d)}):e(d))},c=0;c<l.length;c++)s=new Image,d.addImage(s),r(s,d),s.src=l[c]},e.a=i},function(t,e,n){"use strict";var r=n(62),o={};o.createVideoStream=function(t){function e(){var e=t.videoWidth,o=t.videoHeight;n=i.size?e/o>1?i.size:Math.floor(e/o*i.size):e,r=i.size?e/o>1?Math.floor(o/e*i.size):i.size:o,s.x=n,s.y=r}var n,r,o={},i=null,a=["canrecord","ended"],u={},c={x:0,y:0},s={x:0,y:0};return o.getRealWidth=function(){return t.videoWidth},o.getRealHeight=function(){return t.videoHeight},o.getWidth=function(){return n},o.getHeight=function(){return r},o.setWidth=function(t){n=t},o.setHeight=function(t){r=t},o.setInputStream=function(e){i=e,t.src=void 0!==e.src?e.src:""},o.ended=function(){return t.ended},o.getConfig=function(){return i},o.setAttribute=function(e,n){t.setAttribute(e,n)},o.pause=function(){t.pause()},o.play=function(){t.play()},o.setCurrentTime=function(e){"LiveStream"!==i.type&&(t.currentTime=e)},o.addEventListener=function(e,n,r){a.indexOf(e)!==-1?(u[e]||(u[e]=[]),u[e].push(n)):t.addEventListener(e,n,r)},o.clearEventHandlers=function(){a.forEach(function(e){var n=u[e];n&&n.length>0&&n.forEach(function(n){t.removeEventListener(e,n)})})},o.trigger=function(t,n){var r,i=u[t];if("canrecord"===t&&e(),i&&i.length>0)for(r=0;r<i.length;r++)i[r].apply(o,n)},o.setTopRight=function(t){c.x=t.x,c.y=t.y},o.getTopRight=function(){return c},o.setCanvasSize=function(t){s.x=t.x,s.y=t.y},o.getCanvasSize=function(){return s},o.getFrame=function(){return t},o},o.createLiveStream=function(t){t.setAttribute("autoplay",!0);var e=o.createVideoStream(t);return e.ended=function(){return!1},e},o.createImageStream=function(){function t(){l=!1,r.a.load(v,function(t){if(d=t,t[0].tags&&t[0].tags.orientation)switch(t[0].tags.orientation){case 6:case 8:u=t[0].img.height,c=t[0].img.width;break;default:u=t[0].img.width,c=t[0].img.height}else u=t[0].img.width,c=t[0].img.height;n=a.size?u/c>1?a.size:Math.floor(u/c*a.size):u,o=a.size?u/c>1?Math.floor(c/u*a.size):a.size:c,x.x=n,x.y=o,l=!0,s=0,setTimeout(function(){e("canrecord",[])},0)},p,h,a.sequence)}function e(t,e){var n,r=y[t];if(r&&r.length>0)for(n=0;n<r.length;n++)r[n].apply(i,e)}var n,o,i={},a=null,u=0,c=0,s=0,f=!0,l=!1,d=null,h=0,p=1,v=null,_=!1,g=["canrecord","ended"],y={},m={x:0,y:0},x={x:0,y:0};return i.trigger=e,i.getWidth=function(){return n},i.getHeight=function(){return o},i.setWidth=function(t){n=t},i.setHeight=function(t){o=t},i.getRealWidth=function(){return u},i.getRealHeight=function(){return c},i.setInputStream=function(e){a=e,e.sequence===!1?(v=e.src,h=1):(v=e.src,h=e.length),t()},i.ended=function(){return _},i.setAttribute=function(){},i.getConfig=function(){return a},i.pause=function(){f=!0},i.play=function(){f=!1},i.setCurrentTime=function(t){s=t},i.addEventListener=function(t,e){g.indexOf(t)!==-1&&(y[t]||(y[t]=[]),y[t].push(e))},i.setTopRight=function(t){m.x=t.x,m.y=t.y},i.getTopRight=function(){return m},i.setCanvasSize=function(t){x.x=t.x,x.y=t.y},i.getCanvasSize=function(){return x},i.getFrame=function(){var t;return l?(f||(t=d[s],s<h-1?s++:setTimeout(function(){_=!0,e("ended",[])},0)),t):null},i},e.a=o},function(t,e,n){"use strict";(function(t){function r(){var e;v=p.halfSample?new R.a({x:O.size.x/2|0,y:O.size.y/2|0}):O,C=n.i(w.e)(p.patchSize,v.size),z.x=v.size.x/C.x|0,z.y=v.size.y/C.y|0,E=new R.a(v.size,void 0,Uint8Array,!1),y=new R.a(C,void 0,Array,!0),e=new ArrayBuffer(65536),g=new R.a(C,new Uint8Array(e,0,C.x*C.y)),_=new R.a(C,new Uint8Array(e,C.x*C.y*3,C.x*C.y),void 0,!0),A=n.i(P.a)("undefined"!=typeof window?window:"undefined"!=typeof self?self:t,{size:C.x},e),b=new R.a({x:v.size.x/g.size.x|0,y:v.size.y/g.size.y|0},void 0,Array,!0),m=new R.a(b.size,void 0,void 0,!0),x=new R.a(b.size,void 0,Int32Array,!0)}function o(){p.useWorker||"undefined"==typeof document||(N.dom.binary=document.createElement("canvas"),N.dom.binary.className="binaryBuffer",N.ctx.binary=N.dom.binary.getContext("2d"),N.dom.binary.width=E.size.x,N.dom.binary.height=E.size.y)}function i(t){var e,n,r,o,i,a,u,c=E.size.x,s=E.size.y,f=-E.size.x,l=-E.size.y;for(e=0,n=0;n<t.length;n++)o=t[n],e+=o.rad;for(e/=t.length,e=(180*e/Math.PI+90)%180-90,e<0&&(e+=180),e=(180-e)*Math.PI/180,i=M.copy(M.create(),[Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e)]),n=0;n<t.length;n++)for(o=t[n],r=0;r<4;r++)I.transformMat2(o.box[r],o.box[r],i);for(n=0;n<t.length;n++)for(o=t[n],r=0;r<4;r++)o.box[r][0]<c&&(c=o.box[r][0]),o.box[r][0]>f&&(f=o.box[r][0]),o.box[r][1]<s&&(s=o.box[r][1]),o.box[r][1]>l&&(l=o.box[r][1]);for(a=[[c,s],[f,s],[f,l],[c,l]],u=p.halfSample?2:1,i=M.invert(i,i),r=0;r<4;r++)I.transformMat2(a[r],a[r],i);for(r=0;r<4;r++)I.scale(a[r],a[r],u);return a}function a(){n.i(w.f)(v,E),E.zeroBorder()}function u(){var t,e,n,r,o,i,a,u=[];for(t=0;t<z.x;t++)for(e=0;e<z.y;e++)n=g.size.x*t,r=g.size.y*e,l(n,r),_.zeroBorder(),T.a.init(y.data,0),i=S.a.create(_,y),a=i.rasterize(0),o=y.moments(a.count),u=u.concat(d(o,[t,e],n,r));return u}function c(t){var e,n,r=[];for(e=0;e<t;e++)r.push(0);for(n=x.data.length;n--;)x.data[n]>0&&r[x.data[n]-1]++;return r=r.map(function(t,e){return{val:t,label:e+1}}),r.sort(function(t,e){return e.val-t.val}),r.filter(function(t){return t.val>=5})}function s(t,e){var n,r,o,a,u=[],c=[];for(n=0;n<t.length;n++){for(r=x.data.length,u.length=0;r--;)x.data[r]===t[n].label&&(o=b.data[r],u.push(o));a=i(u),a&&c.push(a)}return c}function f(t){var e=n.i(w.g)(t,.9),r=n.i(w.h)(e,1,function(t){return t.getPoints().length}),o=[],i=[];if(1===r.length){o=r[0].item.getPoints();for(var a=0;a<o.length;a++)i.push(o[a].point)}return i}function l(t,e){E.subImageAsCopy(g,n.i(w.b)(t,e)),A.skeletonize()}function d(t,e,n,r){var o,i,a,u,c=[],s=[],l=Math.ceil(C.x/3);if(t.length>=2){for(o=0;o<t.length;o++)t[o].m00>l&&c.push(t[o]);if(c.length>=2){for(a=f(c),i=0,o=0;o<a.length;o++)i+=a[o].rad;a.length>1&&a.length>=c.length/4*3&&a.length>t.length/4&&(i/=a.length,u={index:e[1]*z.x+e[0],pos:{x:n,y:r},box:[I.clone([n,r]),I.clone([n+g.size.x,r]),I.clone([n+g.size.x,r+g.size.y]),I.clone([n,r+g.size.y])],moments:a,rad:i,vec:I.clone([Math.cos(i),Math.sin(i)])},s.push(u))}}return s}function h(t){function e(){var t;for(t=0;t<x.data.length;t++)if(0===x.data[t]&&1===m.data[t])return t;return x.length}function n(t){var e,r,o,u,c,s={x:t%x.size.x,y:t/x.size.x|0};if(t<x.data.length)for(o=b.data[t],x.data[t]=i,c=0;c<D.a.searchDirections.length;c++)r=s.y+D.a.searchDirections[c][0],e=s.x+D.a.searchDirections[c][1],u=r*x.size.x+e,0!==m.data[u]?0===x.data[u]&&Math.abs(I.dot(b.data[u].vec,o.vec))>a&&n(u):x.data[u]=Number.MAX_VALUE}var r,o,i=0,a=.95,u=0;for(T.a.init(m.data,0),T.a.init(x.data,0),T.a.init(b.data,null),r=0;r<t.length;r++)o=t[r],b.data[o.index]=o,m.data[o.index]=1;for(m.zeroBorder();(u=e())<x.data.length;)i++,n(u);return i}var p,v,_,g,y,m,x,b,E,C,O,A,R=n(20),w=n(19),T=n(3),S=(n(9),n(65)),D=n(30),P=n(66),I={clone:n(7),dot:n(32),scale:n(81),transformMat2:n(82)},M={copy:n(78),create:n(79),invert:n(80)},N={ctx:{binary:null},dom:{binary:null}},z={x:0,y:0};e.a={init:function(t,e){p=e,O=t,r(),o()},locate:function(){var t,e;if(p.halfSample&&n.i(w.i)(O,v),a(),t=u(),t.length<z.x*z.y*.05)return null;var r=h(t);return r<1?null:(e=c(r),0===e.length?null:s(e,r))},checkImageConstraints:function(t,e){var r,o,i,a=t.getWidth(),u=t.getHeight(),c=e.halfSample?.5:1;if(t.getConfig().area&&(i=n.i(w.j)(a,u,t.getConfig().area),t.setTopRight({x:i.sx,y:i.sy}),t.setCanvasSize({x:a,y:u}),a=i.sw,u=i.sh),o={x:Math.floor(a*c),y:Math.floor(u*c)},r=n.i(w.e)(e.patchSize,o),t.setWidth(Math.floor(Math.floor(o.x/r.x)*(1/c)*r.x)),t.setHeight(Math.floor(Math.floor(o.y/r.y)*(1/c)*r.y)),t.getWidth()%r.x==0&&t.getHeight()%r.y==0)return!0;throw new Error("Image dimensions do not comply with the current settings: Width ("+a+" )and height ("+u+") must a multiple of "+r.x)}}}).call(e,n(47))},function(t,e,n){"use strict";var r=n(30),o={createContour2D:function(){return{dir:null,index:null,firstVertex:null,insideContours:null,nextpeer:null,prevpeer:null}},CONTOUR_DIR:{CW_DIR:0,CCW_DIR:1,UNKNOWN_DIR:2},DIR:{OUTSIDE_EDGE:-32767,INSIDE_EDGE:-32766},create:function(t,e){var n=t.data,i=e.data,a=t.size.x,u=t.size.y,c=r.a.create(t,e);return{rasterize:function(t){var e,r,s,f,l,d,h,p,v,_,g,y,m=[],x=0;for(y=0;y<400;y++)m[y]=0;for(m[0]=n[0],v=null,d=1;d<u-1;d++)for(f=0,r=m[0],l=1;l<a-1;l++)if(g=d*a+l,0===i[g])if((e=n[g])!==r){if(0===f)s=x+1,m[s]=e,r=e,null!==(h=c.contourTracing(d,l,s,e,o.DIR.OUTSIDE_EDGE))&&(x++,f=s,p=o.createContour2D(),p.dir=o.CONTOUR_DIR.CW_DIR,p.index=f,p.firstVertex=h,p.nextpeer=v,p.insideContours=null,null!==v&&(v.prevpeer=p),v=p);else if(null!==(h=c.contourTracing(d,l,o.DIR.INSIDE_EDGE,e,f))){for(p=o.createContour2D(),p.firstVertex=h,p.insideContours=null,p.dir=0===t?o.CONTOUR_DIR.CCW_DIR:o.CONTOUR_DIR.CW_DIR,p.index=t,_=v;null!==_&&_.index!==f;)_=_.nextpeer;null!==_&&(p.nextpeer=_.insideContours,null!==_.insideContours&&(_.insideContours.prevpeer=p),_.insideContours=p)}}else i[g]=f;else i[g]===o.DIR.OUTSIDE_EDGE||i[g]===o.DIR.INSIDE_EDGE?(f=0,r=i[g]===o.DIR.INSIDE_EDGE?n[g]:m[0]):(f=i[g],r=m[f]);for(_=v;null!==_;)_.index=t,_=_.nextpeer;return{cc:v,count:x}},debug:{drawContour:function(t,e){var n,r,i,a=t.getContext("2d"),u=e;for(a.strokeStyle="red",a.fillStyle="red",a.lineWidth=1,n=null!==u?u.insideContours:null;null!==u;){switch(null!==n?(r=n,n=n.nextpeer):(r=u,u=u.nextpeer,n=null!==u?u.insideContours:null),r.dir){case o.CONTOUR_DIR.CW_DIR:a.strokeStyle="red";break;case o.CONTOUR_DIR.CCW_DIR:a.strokeStyle="blue";break;case o.CONTOUR_DIR.UNKNOWN_DIR:a.strokeStyle="green"}i=r.firstVertex,a.beginPath(),a.moveTo(i.x,i.y);do i=i.next,a.lineTo(i.x,i.y);while(i!==r.firstVertex);a.stroke()}}}}}};e.a=o},function(module, __webpack_exports__, __webpack_require__) {"use strict";function Skeletonizer(stdlib, foreign, buffer) {"use asm";var images=new stdlib.Uint8Array(buffer),size=foreign.size|0,imul=stdlib.Math.imul;function erode(inImagePtr, outImagePtr) {inImagePtr=inImagePtr|0;outImagePtr=outImagePtr|0;var v=0,u=0,sum=0,yStart1=0,yStart2=0,xStart1=0,xStart2=0,offset=0;for (v=1; (v|0)<(size - 1|0); v=v+1|0) {offset=offset+size|0;for (u=1; (u|0)<(size - 1|0); u=u+1|0) {yStart1=offset - size|0;yStart2=offset+size|0;xStart1=u - 1|0;xStart2=u+1|0;sum=(images[inImagePtr+yStart1+xStart1|0]|0)+(images[inImagePtr+yStart1+xStart2|0]|0)+(images[inImagePtr+offset+u|0]|0)+(images[inImagePtr+yStart2+xStart1|0]|0)+(images[inImagePtr+yStart2+xStart2|0]|0)|0;if ((sum|0) == (5|0)) {images[outImagePtr+offset+u|0]=1;} else {images[outImagePtr+offset+u|0]=0;}}}return;}function subtract(aImagePtr, bImagePtr, outImagePtr) {aImagePtr=aImagePtr|0;bImagePtr=bImagePtr|0;outImagePtr=outImagePtr|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[outImagePtr+length|0]=(images[aImagePtr+length|0]|0) - (images[bImagePtr+length|0]|0)|0;}}function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {aImagePtr=aImagePtr|0;bImagePtr=bImagePtr|0;outImagePtr=outImagePtr|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[outImagePtr+length|0]=images[aImagePtr+length|0]|0|(images[bImagePtr+length|0]|0)|0;}}function countNonZero(imagePtr) {imagePtr=imagePtr|0;var sum=0,length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;sum=(sum|0)+(images[imagePtr+length|0]|0)|0;}return sum|0;}function init(imagePtr, value) {imagePtr=imagePtr|0;value=value|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[imagePtr+length|0]=value;}}function dilate(inImagePtr, outImagePtr) {inImagePtr=inImagePtr|0;outImagePtr=outImagePtr|0;var v=0,u=0,sum=0,yStart1=0,yStart2=0,xStart1=0,xStart2=0,offset=0;for (v=1; (v|0)<(size - 1|0); v=v+1|0) {offset=offset+size|0;for (u=1; (u|0)<(size - 1|0); u=u+1|0) {yStart1=offset - size|0;yStart2=offset+size|0;xStart1=u - 1|0;xStart2=u+1|0;sum=(images[inImagePtr+yStart1+xStart1|0]|0)+(images[inImagePtr+yStart1+xStart2|0]|0)+(images[inImagePtr+offset+u|0]|0)+(images[inImagePtr+yStart2+xStart1|0]|0)+(images[inImagePtr+yStart2+xStart2|0]|0)|0;if ((sum|0)>(0|0)) {images[outImagePtr+offset+u|0]=1;} else {images[outImagePtr+offset+u|0]=0;}}}return;}function memcpy(srcImagePtr, dstImagePtr) {srcImagePtr=srcImagePtr|0;dstImagePtr=dstImagePtr|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[dstImagePtr+length|0]=images[srcImagePtr+length|0]|0;}}function zeroBorder(imagePtr) {imagePtr=imagePtr|0;var x=0,y=0;for (x=0; (x|0)<(size - 1|0); x=x+1|0) {images[imagePtr+x|0]=0;images[imagePtr+y|0]=0;y=y+size - 1|0;images[imagePtr+y|0]=0;y=y+1|0;}for (x=0; (x|0)<(size|0); x=x+1|0) {images[imagePtr+y|0]=0;y=y+1|0;}}function skeletonize() {var subImagePtr=0,erodedImagePtr=0,tempImagePtr=0,skelImagePtr=0,sum=0,done=0;erodedImagePtr=imul(size, size)|0;tempImagePtr=erodedImagePtr+erodedImagePtr|0;skelImagePtr=tempImagePtr+erodedImagePtr|0;init(skelImagePtr, 0);zeroBorder(subImagePtr);do {erode(subImagePtr, erodedImagePtr);dilate(erodedImagePtr, tempImagePtr);subtract(subImagePtr, tempImagePtr, tempImagePtr);bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);memcpy(erodedImagePtr, subImagePtr);sum=countNonZero(subImagePtr)|0;done=(sum|0) == 0|0;} while (!done);}return {skeletonize: skeletonize};} __webpack_exports__["a"]=Skeletonizer; },function(t,e,n){"use strict";function r(t){o.a.call(this,t),this.barSpaceRatio=[1,1]}var o=n(1),i=1,a=3,u={START_PATTERN:{value:[a,i,a,i,i,i]},STOP_PATTERN:{value:[a,i,i,i,a]},CODE_PATTERN:{value:[[i,i,a,a,i],[a,i,i,i,a],[i,a,i,i,a],[a,a,i,i,i],[i,i,a,i,a],[a,i,a,i,i],[i,a,a,i,i],[i,i,i,a,a],[a,i,i,a,i],[i,a,i,a,i]]},SINGLE_CODE_ERROR:{value:.78,writable:!0},AVG_CODE_ERROR:{value:.3,writable:!0},FORMAT:{value:"2of5"}},c=u.START_PATTERN.value.reduce(function(t,e){return t+e},0);r.prototype=Object.create(o.a.prototype,u),r.prototype.constructor=r,r.prototype._findPattern=function(t,e,n,r){var o,i,a,u,c=[],s=this,f=0,l={error:Number.MAX_VALUE,code:-1,start:0,end:0},d=s.AVG_CODE_ERROR;for(n=n||!1,r=r||!1,e||(e=s._nextSet(s._row)),o=0;o<t.length;o++)c[o]=0;for(o=e;o<s._row.length;o++)if(s._row[o]^n)c[f]++;else{if(f===c.length-1){for(u=0,a=0;a<c.length;a++)u+=c[a];if((i=s._matchPattern(c,t))<d)return l.error=i,l.start=o-u,l.end=o,l;if(!r)return null;for(a=0;a<c.length-2;a++)c[a]=c[a+2];c[c.length-2]=0,c[c.length-1]=0,f--}else f++;c[f]=1,n=!n}return null},r.prototype._findStart=function(){for(var t,e,n=this,r=n._nextSet(n._row),o=1;!e;){if(!(e=n._findPattern(n.START_PATTERN,r,!1,!0)))return null;if(o=Math.floor((e.end-e.start)/c),(t=e.start-5*o)>=0&&n._matchRange(t,e.start,0))return e;r=e.end,e=null}},r.prototype._verifyTrailingWhitespace=function(t){var e,n=this;return e=t.end+(t.end-t.start)/2,e<n._row.length&&n._matchRange(t.end,e,0)?t:null},r.prototype._findEnd=function(){var t,e,n,r=this;return r._row.reverse(),n=r._nextSet(r._row),t=r._findPattern(r.STOP_PATTERN,n,!1,!0),r._row.reverse(),null===t?null:(e=t.start,t.start=r._row.length-t.end,t.end=r._row.length-e,null!==t?r._verifyTrailingWhitespace(t):null)},r.prototype._decodeCode=function(t){var e,n,r,o=this,i=0,a=o.AVG_CODE_ERROR,u={error:Number.MAX_VALUE,code:-1,start:0,end:0};for(e=0;e<t.length;e++)i+=t[e];for(r=0;r<o.CODE_PATTERN.length;r++)(n=o._matchPattern(t,o.CODE_PATTERN[r]))<u.error&&(u.code=r,u.error=n);if(u.error<a)return u},r.prototype._decodePayload=function(t,e,n){for(var r,o,i=this,a=0,u=t.length,c=[0,0,0,0,0];a<u;){for(r=0;r<5;r++)c[r]=t[a]*this.barSpaceRatio[0],a+=2;if(!(o=i._decodeCode(c)))return null;e.push(o.code+""),n.push(o)}return o},r.prototype._verifyCounterLength=function(t){return t.length%10==0},r.prototype._decode=function(){var t,e,n,r=this,o=[],i=[];return(t=r._findStart())?(i.push(t),(e=r._findEnd())?(n=r._fillCounters(t.end,e.start,!1),r._verifyCounterLength(n)&&r._decodePayload(n,o,i)?o.length<5?null:(i.push(e),{code:o.join(""),start:t.start,end:e.end,startInfo:t,decodedCodes:i}):null):null):null},e.a=r},function(t,e,n){"use strict";function r(){o.a.call(this),this._counters=[]}var o=n(1),i={ALPHABETH_STRING:{value:"0123456789-$:/.+ABCD"},ALPHABET:{value:[48,49,50,51,52,53,54,55,56,57,45,36,58,47,46,43,65,66,67,68]},CHARACTER_ENCODINGS:{value:[3,6,9,96,18,66,33,36,48,72,12,24,69,81,84,21,26,41,11,14]},START_END:{value:[26,41,11,14]},MIN_ENCODED_CHARS:{value:4},MAX_ACCEPTABLE:{value:2},PADDING:{value:1.5},FORMAT:{value:"codabar",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decode=function(){var t,e,n,r,o,i=this,a=[];if(this._counters=i._fillCounters(),!(t=i._findStart()))return null;r=t.startCounter;do{if((n=i._toPattern(r))<0)return null;if((e=i._patternToChar(n))<0)return null;if(a.push(e),r+=8,a.length>1&&i._isStartEnd(n))break}while(r<i._counters.length);return a.length-2<i.MIN_ENCODED_CHARS||!i._isStartEnd(n)?null:i._verifyWhitespace(t.startCounter,r-8)&&i._validateResult(a,t.startCounter)?(r=r>i._counters.length?i._counters.length:r,o=t.start+i._sumCounters(t.startCounter,r-8),{code:a.join(""),start:t.start,end:o,startInfo:t,decodedCodes:a}):null},r.prototype._verifyWhitespace=function(t,e){return(t-1<=0||this._counters[t-1]>=this._calculatePatternLength(t)/2)&&(e+8>=this._counters.length||this._counters[e+7]>=this._calculatePatternLength(e)/2)},r.prototype._calculatePatternLength=function(t){var e,n=0;for(e=t;e<t+7;e++)n+=this._counters[e];return n},r.prototype._thresholdResultPattern=function(t,e){var n,r,o,i,a,u=this,c={space:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}},bar:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}}},s=e;for(o=0;o<t.length;o++){for(a=u._charToPattern(t[o]),i=6;i>=0;i--)n=2==(1&i)?c.bar:c.space,r=1==(1&a)?n.wide:n.narrow,r.size+=u._counters[s+i],r.counts++,a>>=1;s+=8}return["space","bar"].forEach(function(t){var e=c[t];e.wide.min=Math.floor((e.narrow.size/e.narrow.counts+e.wide.size/e.wide.counts)/2),e.narrow.max=Math.ceil(e.wide.min),e.wide.max=Math.ceil((e.wide.size*u.MAX_ACCEPTABLE+u.PADDING)/e.wide.counts)}),c},r.prototype._charToPattern=function(t){var e,n=this,r=t.charCodeAt(0);for(e=0;e<n.ALPHABET.length;e++)if(n.ALPHABET[e]===r)return n.CHARACTER_ENCODINGS[e];return 0},r.prototype._validateResult=function(t,e){var n,r,o,i,a,u,c=this,s=c._thresholdResultPattern(t,e),f=e;for(n=0;n<t.length;n++){for(u=c._charToPattern(t[n]),r=6;r>=0;r--){if(o=0==(1&r)?s.bar:s.space,i=1==(1&u)?o.wide:o.narrow,(a=c._counters[f+r])<i.min||a>i.max)return!1;u>>=1}f+=8}return!0},r.prototype._patternToChar=function(t){var e,n=this;for(e=0;e<n.CHARACTER_ENCODINGS.length;e++)if(n.CHARACTER_ENCODINGS[e]===t)return String.fromCharCode(n.ALPHABET[e]);return-1},r.prototype._computeAlternatingThreshold=function(t,e){var n,r,o=Number.MAX_VALUE,i=0;for(n=t;n<e;n+=2)r=this._counters[n],r>i&&(i=r),r<o&&(o=r);return(o+i)/2|0},r.prototype._toPattern=function(t){var e,n,r,o,i=7,a=t+i,u=1<<i-1,c=0;if(a>this._counters.length)return-1;for(e=this._computeAlternatingThreshold(t,a),n=this._computeAlternatingThreshold(t+1,a),r=0;r<i;r++)o=0==(1&r)?e:n,this._counters[t+r]>o&&(c|=u),u>>=1;return c},r.prototype._isStartEnd=function(t){var e;for(e=0;e<this.START_END.length;e++)if(this.START_END[e]===t)return!0;return!1},r.prototype._sumCounters=function(t,e){var n,r=0;for(n=t;n<e;n++)r+=this._counters[n];return r},r.prototype._findStart=function(){var t,e,n,r=this,o=r._nextUnset(r._row);for(t=1;t<this._counters.length;t++)if((e=r._toPattern(t))!==-1&&r._isStartEnd(e))return o+=r._sumCounters(0,t),n=o+r._sumCounters(t,t+8),{start:o,end:n,startCounter:t,endCounter:t+8}},e.a=r},function(t,e,n){"use strict";function r(){i.a.call(this)}function o(t,e,n){for(var r=n.length,o=0,i=0;r--;)i+=t[n[r]],o+=e[n[r]];return i/o}var i=n(1),a={CODE_SHIFT:{value:98},CODE_C:{value:99},CODE_B:{value:100},CODE_A:{value:101},START_CODE_A:{value:103},START_CODE_B:{value:104},START_CODE_C:{value:105},STOP_CODE:{value:106},CODE_PATTERN:{value:[[2,1,2,2,2,2],[2,2,2,1,2,2],[2,2,2,2,2,1],[1,2,1,2,2,3],[1,2,1,3,2,2],[1,3,1,2,2,2],[1,2,2,2,1,3],[1,2,2,3,1,2],[1,3,2,2,1,2],[2,2,1,2,1,3],[2,2,1,3,1,2],[2,3,1,2,1,2],[1,1,2,2,3,2],[1,2,2,1,3,2],[1,2,2,2,3,1],[1,1,3,2,2,2],[1,2,3,1,2,2],[1,2,3,2,2,1],[2,2,3,2,1,1],[2,2,1,1,3,2],[2,2,1,2,3,1],[2,1,3,2,1,2],[2,2,3,1,1,2],[3,1,2,1,3,1],[3,1,1,2,2,2],[3,2,1,1,2,2],[3,2,1,2,2,1],[3,1,2,2,1,2],[3,2,2,1,1,2],[3,2,2,2,1,1],[2,1,2,1,2,3],[2,1,2,3,2,1],[2,3,2,1,2,1],[1,1,1,3,2,3],[1,3,1,1,2,3],[1,3,1,3,2,1],[1,1,2,3,1,3],[1,3,2,1,1,3],[1,3,2,3,1,1],[2,1,1,3,1,3],[2,3,1,1,1,3],[2,3,1,3,1,1],[1,1,2,1,3,3],[1,1,2,3,3,1],[1,3,2,1,3,1],[1,1,3,1,2,3],[1,1,3,3,2,1],[1,3,3,1,2,1],[3,1,3,1,2,1],[2,1,1,3,3,1],[2,3,1,1,3,1],[2,1,3,1,1,3],[2,1,3,3,1,1],[2,1,3,1,3,1],[3,1,1,1,2,3],[3,1,1,3,2,1],[3,3,1,1,2,1],[3,1,2,1,1,3],[3,1,2,3,1,1],[3,3,2,1,1,1],[3,1,4,1,1,1],[2,2,1,4,1,1],[4,3,1,1,1,1],[1,1,1,2,2,4],[1,1,1,4,2,2],[1,2,1,1,2,4],[1,2,1,4,2,1],[1,4,1,1,2,2],[1,4,1,2,2,1],[1,1,2,2,1,4],[1,1,2,4,1,2],[1,2,2,1,1,4],[1,2,2,4,1,1],[1,4,2,1,1,2],[1,4,2,2,1,1],[2,4,1,2,1,1],[2,2,1,1,1,4],[4,1,3,1,1,1],[2,4,1,1,1,2],[1,3,4,1,1,1],[1,1,1,2,4,2],[1,2,1,1,4,2],[1,2,1,2,4,1],[1,1,4,2,1,2],[1,2,4,1,1,2],[1,2,4,2,1,1],[4,1,1,2,1,2],[4,2,1,1,1,2],[4,2,1,2,1,1],[2,1,2,1,4,1],[2,1,4,1,2,1],[4,1,2,1,2,1],[1,1,1,1,4,3],[1,1,1,3,4,1],[1,3,1,1,4,1],[1,1,4,1,1,3],[1,1,4,3,1,1],[4,1,1,1,1,3],[4,1,1,3,1,1],[1,1,3,1,4,1],[1,1,4,1,3,1],[3,1,1,1,4,1],[4,1,1,1,3,1],[2,1,1,4,1,2],[2,1,1,2,1,4],[2,1,1,2,3,2],[2,3,3,1,1,1,2]]},SINGLE_CODE_ERROR:{value:.64},AVG_CODE_ERROR:{value:.3},FORMAT:{value:"code_128",writeable:!1},MODULE_INDICES:{value:{bar:[0,2,4],space:[1,3,5]}}};r.prototype=Object.create(i.a.prototype,a),r.prototype.constructor=r,r.prototype._decodeCode=function(t,e){var n,r,i,a=[0,0,0,0,0,0],u=this,c=t,s=!u._row[c],f=0,l={error:Number.MAX_VALUE,code:-1,start:t,end:t,correction:{bar:1,space:1}};for(n=c;n<u._row.length;n++)if(u._row[n]^s)a[f]++;else{if(f===a.length-1){for(e&&u._correct(a,e),r=0;r<u.CODE_PATTERN.length;r++)(i=u._matchPattern(a,u.CODE_PATTERN[r]))<l.error&&(l.code=r,l.error=i);return l.end=n,l.code===-1||l.error>u.AVG_CODE_ERROR?null:(u.CODE_PATTERN[l.code]&&(l.correction.bar=o(u.CODE_PATTERN[l.code],a,this.MODULE_INDICES.bar),l.correction.space=o(u.CODE_PATTERN[l.code],a,this.MODULE_INDICES.space)),l)}f++,a[f]=1,s=!s}return null},r.prototype._correct=function(t,e){this._correctBars(t,e.bar,this.MODULE_INDICES.bar),this._correctBars(t,e.space,this.MODULE_INDICES.space)},r.prototype._findStart=function(){var t,e,n,r,i,a=[0,0,0,0,0,0],u=this,c=u._nextSet(u._row),s=!1,f=0,l={error:Number.MAX_VALUE,code:-1,start:0,end:0,correction:{bar:1,space:1}};for(t=c;t<u._row.length;t++)if(u._row[t]^s)a[f]++;else{if(f===a.length-1){for(i=0,r=0;r<a.length;r++)i+=a[r];for(e=u.START_CODE_A;e<=u.START_CODE_C;e++)(n=u._matchPattern(a,u.CODE_PATTERN[e]))<l.error&&(l.code=e,l.error=n);if(l.error<u.AVG_CODE_ERROR)return l.start=t-i,l.end=t,l.correction.bar=o(u.CODE_PATTERN[l.code],a,this.MODULE_INDICES.bar),l.correction.space=o(u.CODE_PATTERN[l.code],a,this.MODULE_INDICES.space),l;for(r=0;r<4;r++)a[r]=a[r+2];a[4]=0,a[5]=0,f--}else f++;a[f]=1,s=!s}return null},r.prototype._decode=function(){var t,e,n=this,r=n._findStart(),o=null,i=!1,a=[],u=0,c=0,s=[],f=[],l=!1,d=!0;if(null===r)return null;switch(o={code:r.code,start:r.start,end:r.end,correction:{bar:r.correction.bar,space:r.correction.space}},f.push(o),c=o.code,o.code){case n.START_CODE_A:t=n.CODE_A;break;case n.START_CODE_B:t=n.CODE_B;break;case n.START_CODE_C:t=n.CODE_C;break;default:return null}for(;!i;){if(e=l,l=!1,null!==(o=n._decodeCode(o.end,o.correction)))switch(o.code!==n.STOP_CODE&&(d=!0),o.code!==n.STOP_CODE&&(s.push(o.code),u++,c+=u*o.code),f.push(o),t){case n.CODE_A:if(o.code<64)a.push(String.fromCharCode(32+o.code));else if(o.code<96)a.push(String.fromCharCode(o.code-64));else switch(o.code!==n.STOP_CODE&&(d=!1),o.code){case n.CODE_SHIFT:l=!0,t=n.CODE_B;break;case n.CODE_B:t=n.CODE_B;break;case n.CODE_C:t=n.CODE_C;break;case n.STOP_CODE:i=!0}break;case n.CODE_B:if(o.code<96)a.push(String.fromCharCode(32+o.code));else switch(o.code!==n.STOP_CODE&&(d=!1),o.code){case n.CODE_SHIFT:l=!0,t=n.CODE_A;break;case n.CODE_A:t=n.CODE_A;break;case n.CODE_C:t=n.CODE_C;break;case n.STOP_CODE:i=!0}break;case n.CODE_C:if(o.code<100)a.push(o.code<10?"0"+o.code:o.code);else switch(o.code!==n.STOP_CODE&&(d=!1),o.code){case n.CODE_A:t=n.CODE_A;break;case n.CODE_B:t=n.CODE_B;break;case n.STOP_CODE:i=!0}}else i=!0;e&&(t=t===n.CODE_A?n.CODE_B:n.CODE_A)}return null===o?null:(o.end=n._nextUnset(n._row,o.end),n._verifyTrailingWhitespace(o)?(c-=u*s[s.length-1])%103!==s[s.length-1]?null:a.length?(d&&a.splice(a.length-1,1),{code:a.join(""),start:r.start,end:o.end,codeset:t,startInfo:r,decodedCodes:f,endInfo:o}):null:null)},i.a.prototype._verifyTrailingWhitespace=function(t){var e,n=this;return e=t.end+(t.end-t.start)/2,e<n._row.length&&n._matchRange(t.end,e,0)?t:null},e.a=r},function(t,e,n){"use strict";function r(){o.a.call(this)}var o=n(31),i={IOQ:/[IOQ]/g,AZ09:/[A-Z0-9]{17}/};r.prototype=Object.create(o.a.prototype),r.prototype.constructor=r,r.prototype._decode=function(){var t=o.a.prototype._decode.apply(this);if(!t)return null;var e=t.code;return e?(e=e.replace(i.IOQ,""),e.match(i.AZ09)&&this._checkChecksum(e)?(t.code=e,t):null):null},r.prototype._checkChecksum=function(t){return!!t},e.a=r},function(t,e,n){"use strict";function r(){o.a.call(this)}var o=n(1),i=n(3),a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*",u={ALPHABETH_STRING:{value:a},ALPHABET:{value:a.split("").map(function(t){return t.charCodeAt(0)})},CHARACTER_ENCODINGS:{value:[276,328,324,322,296,292,290,336,274,266,424,420,418,404,402,394,360,356,354,308,282,344,332,326,300,278,436,434,428,422,406,410,364,358,310,314,302,468,466,458,366,374,430,294,474,470,306,350]},ASTERISK:{value:350},FORMAT:{value:"code_93",writeable:!1}};r.prototype=Object.create(o.a.prototype,u),r.prototype.constructor=r,r.prototype._decode=function(){var t,e,n,r,o=this,a=[0,0,0,0,0,0],u=[],c=o._findStart();if(!c)return null;r=o._nextSet(o._row,c.end);do{if(a=o._toCounters(r,a),(n=o._toPattern(a))<0)return null;if((t=o._patternToChar(n))<0)return null;u.push(t),e=r,r+=i.a.sum(a),r=o._nextSet(o._row,r)}while("*"!==t);return u.pop(),u.length&&o._verifyEnd(e,r,a)&&o._verifyChecksums(u)?(u=u.slice(0,u.length-2),null===(u=o._decodeExtended(u))?null:{code:u.join(""),start:c.start,end:r,startInfo:c,decodedCodes:u}):null},r.prototype._verifyEnd=function(t,e){return!(t===e||!this._row[e])},r.prototype._patternToChar=function(t){var e,n=this;for(e=0;e<n.CHARACTER_ENCODINGS.length;e++)if(n.CHARACTER_ENCODINGS[e]===t)return String.fromCharCode(n.ALPHABET[e]);return-1},r.prototype._toPattern=function(t){for(var e=t.length,n=0,r=0,o=0;o<e;o++)r+=t[o];for(var i=0;i<e;i++){var a=Math.round(9*t[i]/r);if(a<1||a>4)return-1;if(0==(1&i))for(var u=0;u<a;u++)n=n<<1|1;else n<<=a}return n},r.prototype._findStart=function(){var t,e,n,r=this,o=r._nextSet(r._row),i=o,a=[0,0,0,0,0,0],u=0,c=!1;for(t=o;t<r._row.length;t++)if(r._row[t]^c)a[u]++;else{if(u===a.length-1){if(r._toPattern(a)===r.ASTERISK&&(n=Math.floor(Math.max(0,i-(t-i)/4)),r._matchRange(n,i,0)))return{start:i,end:t};for(i+=a[0]+a[1],e=0;e<4;e++)a[e]=a[e+2];a[4]=0,a[5]=0,u--}else u++;a[u]=1,c=!c}return null},r.prototype._decodeExtended=function(t){for(var e=t.length,n=[],r=0;r<e;r++){var o=t[r];if(o>="a"&&o<="d"){if(r>e-2)return null;var i=t[++r],a=i.charCodeAt(0),u=void 0;switch(o){case"a":if(!(i>="A"&&i<="Z"))return null;u=String.fromCharCode(a-64);break;case"b":if(i>="A"&&i<="E")u=String.fromCharCode(a-38);else if(i>="F"&&i<="J")u=String.fromCharCode(a-11);else if(i>="K"&&i<="O")u=String.fromCharCode(a+16);else if(i>="P"&&i<="S")u=String.fromCharCode(a+43);else{if(!(i>="T"&&i<="Z"))return null;u=String.fromCharCode(127)}break;case"c":if(i>="A"&&i<="O")u=String.fromCharCode(a-32);else{if("Z"!==i)return null;u=":"}break;case"d":if(!(i>="A"&&i<="Z"))return null;u=String.fromCharCode(a+32)}n.push(u)}else n.push(o)}return n},r.prototype._verifyChecksums=function(t){return this._matchCheckChar(t,t.length-2,20)&&this._matchCheckChar(t,t.length-1,15)},r.prototype._matchCheckChar=function(t,e,n){var r=this,o=t.slice(0,e),i=o.length,a=o.reduce(function(t,e,o){return t+((o*-1+(i-1))%n+1)*r.ALPHABET.indexOf(e.charCodeAt(0))},0);return this.ALPHABET[a%47]===t[e].charCodeAt(0)},e.a=r},function(t,e,n){"use strict";function r(){o.a.call(this)}var o=n(4),i={FORMAT:{value:"ean_2",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype.decode=function(t,e){this._row=t;var n,r=0,o=0,i=e,a=this._row.length,u=[],c=[];for(o=0;o<2&&i<a;o++){if(!(n=this._decodeCode(i)))return null;c.push(n),u.push(n.code%10),n.code>=this.CODE_G_START&&(r|=1<<1-o),1!=o&&(i=this._nextSet(this._row,n.end),i=this._nextUnset(this._row,i))}return 2!=u.length||parseInt(u.join(""))%4!==r?null:{code:u.join(""),decodedCodes:c,end:n.end}},e.a=r},function(t,e,n){"use strict";function r(){a.a.call(this)}function o(t){var e;for(e=0;e<10;e++)if(t===c[e])return e;return null}function i(t){var e,n=t.length,r=0;for(e=n-2;e>=0;e-=2)r+=t[e];for(r*=3,e=n-1;e>=0;e-=2)r+=t[e];return(r*=3)%10}var a=n(4),u={FORMAT:{value:"ean_5",writeable:!1}},c=[24,20,18,17,12,6,3,10,9,5];r.prototype=Object.create(a.a.prototype,u),r.prototype.constructor=r,r.prototype.decode=function(t,e){this._row=t;var n,r=0,a=0,u=e,c=this._row.length,s=[],f=[];for(a=0;a<5&&u<c;a++){if(!(n=this._decodeCode(u)))return null;f.push(n),s.push(n.code%10),n.code>=this.CODE_G_START&&(r|=1<<4-a),4!=a&&(u=this._nextSet(this._row,n.end),u=this._nextUnset(this._row,u))}return 5!=s.length?null:i(s)!==o(r)?null:{code:s.join(""),decodedCodes:f,end:n.end}},e.a=r},function(t,e,n){"use strict";function r(t,e){o.a.call(this,t,e)}var o=n(4),i={FORMAT:{value:"ean_8",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decodePayload=function(t,e,n){var r,o=this;for(r=0;r<4;r++){if(!(t=o._decodeCode(t.end,o.CODE_G_START)))return null;e.push(t.code),n.push(t)}if(null===(t=o._findPattern(o.MIDDLE_PATTERN,t.end,!0,!1)))return null;for(n.push(t),r=0;r<4;r++){if(!(t=o._decodeCode(t.end,o.CODE_G_START)))return null;n.push(t),e.push(t.code)}return t},e.a=r},function(t,e,n){"use strict";function r(t){t=a()(o(),t),u.a.call(this,t),this.barSpaceRatio=[1,1],t.normalizeBarSpaceWidth&&(this.SINGLE_CODE_ERROR=.38,this.AVG_CODE_ERROR=.09)}function o(){var t={};return Object.keys(r.CONFIG_KEYS).forEach(function(e){t[e]=r.CONFIG_KEYS[e].default}),t}var i=n(28),a=n.n(i),u=n(1),c=1,s=3,f={START_PATTERN:{value:[c,c,c,c]},STOP_PATTERN:{value:[c,c,s]},CODE_PATTERN:{value:[[c,c,s,s,c],[s,c,c,c,s],[c,s,c,c,s],[s,s,c,c,c],[c,c,s,c,s],[s,c,s,c,c],[c,s,s,c,c],[c,c,c,s,s],[s,c,c,s,c],[c,s,c,s,c]]},SINGLE_CODE_ERROR:{value:.78,writable:!0},AVG_CODE_ERROR:{value:.38,writable:!0},MAX_CORRECTION_FACTOR:{value:5},FORMAT:{value:"i2of5"}};r.prototype=Object.create(u.a.prototype,f),r.prototype.constructor=r,r.prototype._matchPattern=function(t,e){if(this.config.normalizeBarSpaceWidth){var n,r=[0,0],o=[0,0],i=[0,0],a=this.MAX_CORRECTION_FACTOR,c=1/a;for(n=0;n<t.length;n++)r[n%2]+=t[n],o[n%2]+=e[n];for(i[0]=o[0]/r[0],i[1]=o[1]/r[1],i[0]=Math.max(Math.min(i[0],a),c),i[1]=Math.max(Math.min(i[1],a),c),this.barSpaceRatio=i,n=0;n<t.length;n++)t[n]*=this.barSpaceRatio[n%2]}return u.a.prototype._matchPattern.call(this,t,e)},r.prototype._findPattern=function(t,e,n,r){var o,i,a,u,c=[],s=this,f=0,l={error:Number.MAX_VALUE,code:-1,start:0,end:0},d=s.AVG_CODE_ERROR;for(n=n||!1,r=r||!1,e||(e=s._nextSet(s._row)),o=0;o<t.length;o++)c[o]=0;for(o=e;o<s._row.length;o++)if(s._row[o]^n)c[f]++;else{if(f===c.length-1){for(u=0,a=0;a<c.length;a++)u+=c[a];if((i=s._matchPattern(c,t))<d)return l.error=i,l.start=o-u,l.end=o,l;if(!r)return null;for(a=0;a<c.length-2;a++)c[a]=c[a+2];c[c.length-2]=0,c[c.length-1]=0,f--}else f++;c[f]=1,n=!n}return null},r.prototype._findStart=function(){for(var t,e,n=this,r=n._nextSet(n._row),o=1;!e;){if(!(e=n._findPattern(n.START_PATTERN,r,!1,!0)))return null;if(o=Math.floor((e.end-e.start)/4),(t=e.start-10*o)>=0&&n._matchRange(t,e.start,0))return e;r=e.end,e=null}},r.prototype._verifyTrailingWhitespace=function(t){var e,n=this;return e=t.end+(t.end-t.start)/2,e<n._row.length&&n._matchRange(t.end,e,0)?t:null},r.prototype._findEnd=function(){var t,e,n=this;return n._row.reverse(),t=n._findPattern(n.STOP_PATTERN),n._row.reverse(),null===t?null:(e=t.start,t.start=n._row.length-t.end,t.end=n._row.length-e,null!==t?n._verifyTrailingWhitespace(t):null)},r.prototype._decodePair=function(t){var e,n,r=[],o=this;for(e=0;e<t.length;e++){if(!(n=o._decodeCode(t[e])))return null;r.push(n)}return r},r.prototype._decodeCode=function(t){var e,n,r,o=this,i=0,a=o.AVG_CODE_ERROR,u={error:Number.MAX_VALUE,code:-1,start:0,end:0};for(e=0;e<t.length;e++)i+=t[e];for(r=0;r<o.CODE_PATTERN.length;r++)(n=o._matchPattern(t,o.CODE_PATTERN[r]))<u.error&&(u.code=r,u.error=n);if(u.error<a)return u},r.prototype._decodePayload=function(t,e,n){for(var r,o,i=this,a=0,u=t.length,c=[[0,0,0,0,0],[0,0,0,0,0]];a<u;){for(r=0;r<5;r++)c[0][r]=t[a]*this.barSpaceRatio[0],c[1][r]=t[a+1]*this.barSpaceRatio[1],a+=2;if(!(o=i._decodePair(c)))return null;for(r=0;r<o.length;r++)e.push(o[r].code+""),n.push(o[r])}return o},r.prototype._verifyCounterLength=function(t){return t.length%10==0},r.prototype._decode=function(){var t,e,n,r=this,o=[],i=[];return(t=r._findStart())?(i.push(t),(e=r._findEnd())?(n=r._fillCounters(t.end,e.start,!1),r._verifyCounterLength(n)&&r._decodePayload(n,o,i)?o.length%2!=0||o.length<6?null:(i.push(e),{code:o.join(""),start:t.start,end:e.end,startInfo:t,decodedCodes:i}):null):null):null},r.CONFIG_KEYS={normalizeBarSpaceWidth:{type:"boolean",default:!1,description:"If true, the reader tries to normalize thewidth-difference between bars and spaces"}},e.a=r},function(t,e,n){"use strict";function r(t,e){o.a.call(this,t,e)}var o=n(4),i={CODE_FREQUENCY:{value:[[56,52,50,49,44,38,35,42,41,37],[7,11,13,14,19,25,28,21,22,26]]},STOP_PATTERN:{value:[1/6*7,1/6*7,1/6*7,1/6*7,1/6*7,1/6*7]},FORMAT:{value:"upc_e",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decodePayload=function(t,e,n){var r,o=this,i=0;for(r=0;r<6;r++){if(!(t=o._decodeCode(t.end)))return null;t.code>=o.CODE_G_START&&(t.code=t.code-o.CODE_G_START,i|=1<<5-r),e.push(t.code),n.push(t)}return o._determineParity(i,e)?t:null},r.prototype._determineParity=function(t,e){var n,r;for(r=0;r<this.CODE_FREQUENCY.length;r++)for(n=0;n<this.CODE_FREQUENCY[r].length;n++)if(t===this.CODE_FREQUENCY[r][n])return e.unshift(r),e.push(n),!0;return!1},r.prototype._convertToUPCA=function(t){var e=[t[0]],n=t[t.length-2];return e=n<=2?e.concat(t.slice(1,3)).concat([n,0,0,0,0]).concat(t.slice(3,6)):3===n?e.concat(t.slice(1,4)).concat([0,0,0,0,0]).concat(t.slice(4,6)):4===n?e.concat(t.slice(1,5)).concat([0,0,0,0,0,t[5]]):e.concat(t.slice(1,6)).concat([0,0,0,0,n]),e.push(t[t.length-1]),e},r.prototype._checksum=function(t){return o.a.prototype._checksum.call(this,this._convertToUPCA(t))},r.prototype._findEnd=function(t,e){return e=!0,o.a.prototype._findEnd.call(this,t,e)},r.prototype._verifyTrailingWhitespace=function(t){var e,n=this;if((e=t.end+(t.end-t.start)/2)<n._row.length&&n._matchRange(t.end,e,0))return t},e.a=r},function(t,e,n){"use strict";function r(t,e){o.a.call(this,t,e)}var o=n(4),i={FORMAT:{value:"upc_a",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decode=function(){var t=o.a.prototype._decode.call(this);return t&&t.code&&13===t.code.length&&"0"===t.code.charAt(0)?(t.code=t.code.substring(1),t):null},e.a=r},function(t,e){function n(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}t.exports=n},function(t,e){function n(){var t=new Float32Array(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}t.exports=n},function(t,e){function n(t,e){var n=e[0],r=e[1],o=e[2],i=e[3],a=n*i-o*r;return a?(a=1/a,t[0]=i*a,t[1]=-r*a,t[2]=-o*a,t[3]=n*a,t):null}t.exports=n},function(t,e){function n(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}t.exports=n},function(t,e){function n(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[2]*o,t[1]=n[1]*r+n[3]*o,t}t.exports=n},function(t,e){function n(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}t.exports=n},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(122),i=n(123),a=n(124),u=n(125),c=n(126);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(10),i=n(149),a=n(150),u=n(151),c=n(152),s=n(153);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=c,r.prototype.set=s,t.exports=r},function(t,e,n){var r=n(5),o=r.Uint8Array;t.exports=o},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){function r(t,e){var n=a(t),r=!n&&i(t),f=!n&&!r&&u(t),d=!n&&!r&&!f&&s(t),h=n||r||f||d,p=h?o(t.length,String):[],v=p.length;for(var _ in t)!e&&!l.call(t,_)||h&&("length"==_||f&&("offset"==_||"parent"==_)||d&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||c(_,v))||p.push(_);return p}var o=n(107),i=n(18),a=n(2),u=n(44),c=n(15),s=n(45),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}t.exports=n},function(t,e,n){var r=n(0),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){function r(t,e,n,a,u){var c=-1,s=t.length;for(n||(n=i),u||(u=[]);++c<s;){var f=t[c];e>0&&n(f)?e>1?r(f,e-1,n,a,u):o(u,f):a||(u[u.length]=f)}return u}var o=n(90),i=n(128);t.exports=r},function(t,e,n){var r=n(117),o=r();t.exports=o},function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var o=n(13),i=n(23);t.exports=r},function(t,e){function n(t,e){return null!=t&&e in Object(t)}t.exports=n},function(t,e,n){function r(t){return i(t)&&o(t)==a}var o=n(8),i=n(6),a="[object Arguments]";t.exports=r},function(t,e,n){function r(t){return!(!a(t)||i(t))&&(o(t)?p:s).test(u(t))}var o=n(25),i=n(132),a=n(0),u=n(155),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,d=f.toString,h=l.hasOwnProperty,p=RegExp("^"+d.call(h).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return a(t)&&i(t.length)&&!!u[o(t)]}var o=n(8),i=n(26),a=n(6),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=r},function(t,e,n){function r(t){if(!o(t))return a(t);var e=i(t),n=[];for(var r in t)("constructor"!=r||!e&&c.call(t,r))&&n.push(r);return n}var o=n(0),i=n(40),a=n(144),u=Object.prototype,c=u.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,f,l){t!==e&&a(e,function(a,s){if(c(a))l||(l=new o),u(t,e,s,n,r,f,l);else{var d=f?f(t[s],a,s+"",t,e,l):void 0;void 0===d&&(d=a),i(t,s,d)}},s)}var o=n(85),i=n(35),a=n(93),u=n(101),c=n(0),s=n(46);t.exports=r},function(t,e,n){function r(t,e,n,r,y,m,x){var b=t[n],E=e[n],C=x.get(E);if(C)return void o(t,n,C);var O=m?m(b,E,n+"",t,e,x):void 0,A=void 0===O;if(A){var R=f(E),w=!R&&d(E),T=!R&&!w&&_(E);O=E,R||w||T?f(b)?O=b:l(b)?O=u(b):w?(A=!1,O=i(E,!0)):T?(A=!1,O=a(E,!0)):O=[]:v(E)||s(E)?(O=b,s(b)?O=g(b):(!p(b)||r&&h(b))&&(O=c(E))):A=!1}A&&(x.set(E,O),y(O,E,r,m,x),x.delete(E)),o(t,n,O)}var o=n(35),i=n(111),a=n(112),u=n(113),c=n(127),s=n(18),f=n(2),l=n(159),d=n(44),h=n(25),p=n(0),v=n(160),_=n(45),g=n(164);t.exports=r},function(t,e,n){function r(t,e){return o(t,e,function(e,n){return i(t,n)})}var o=n(103),i=n(158);t.exports=r},function(t,e,n){function r(t,e,n){for(var r=-1,u=e.length,c={};++r<u;){var s=e[r],f=o(t,s);n(f,s)&&i(c,a(s,t),f)}return c}var o=n(94),i=n(105),a=n(13);t.exports=r},function(t,e,n){function r(t,e){return a(i(t,e,o),t+"")}var o=n(43),i=n(41),a=n(42);t.exports=r},function(t,e,n){function r(t,e,n,r){if(!u(t))return t;e=i(e,t);for(var s=-1,f=e.length,l=f-1,d=t;null!=d&&++s<f;){var h=c(e[s]),p=n;if(s!=l){var v=d[h];p=r?r(v,h,d):void 0,void 0===p&&(p=u(v)?v:a(e[s+1])?[]:{})}o(d,h,p),d=d[h]}return t}var o=n(36),i=n(13),a=n(15),u=n(0),c=n(23);t.exports=r},function(t,e,n){var r=n(156),o=n(37),i=n(43),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e,n){function r(t){if("string"==typeof t)return t;if(a(t))return i(t,r)+"";if(u(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}var o=n(11),i=n(89),a=n(2),u=n(27),c=1/0,s=o?o.prototype:void 0,f=s?s.toString:void 0;t.exports=r},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){function r(t){var e=new t.constructor(t.byteLength);return new o(e).set(new o(t)),e}var o=n(86);t.exports=r},function(t,e,n){(function(t){function r(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}var o=n(5),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i,c=u?o.Buffer:void 0,s=c?c.allocUnsafe:void 0;t.exports=r}).call(e,n(29)(t))},function(t,e,n){function r(t,e){var n=e?o(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var o=n(110);t.exports=r},function(t,e){function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},function(t,e,n){function r(t,e,n,r){var a=!n;n||(n={});for(var u=-1,c=e.length;++u<c;){var s=e[u],f=r?r(n[s],t[s],s,n,t):void 0;void 0===f&&(f=t[s]),a?i(n,s,f):o(n,s,f)}return n}var o=n(36),i=n(21);t.exports=r},function(t,e,n){var r=n(5),o=r["__core-js_shared__"];t.exports=o},function(t,e,n){function r(t){return o(function(e,n){var r=-1,o=n.length,a=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(o--,a):void 0,u&&i(n[0],n[1],u)&&(a=o<3?void 0:a,o=1),e=Object(e);++r<o;){var c=n[r];c&&t(e,c,r,a)}return e})}var o=n(104),i=n(129);t.exports=r},function(t,e){function n(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(n(i[c],c,i)===!1)break}return e}}t.exports=n},function(t,e,n){function r(t){return a(i(t,void 0,o),t+"")}var o=n(157),i=n(41),a=n(42);t.exports=r},function(t,e,n){function r(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}var o=n(11),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function r(t,e,n){e=o(e,t);for(var r=-1,f=e.length,l=!1;++r<f;){var d=s(e[r]);if(!(l=null!=t&&n(t,d)))break;t=t[d]}return l||++r!=f?l:!!(f=null==t?0:t.length)&&c(f)&&u(d,f)&&(a(t)||i(t))}var o=n(13),i=n(18),a=n(2),u=n(15),c=n(26),s=n(23);t.exports=r},function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(16);t.exports=r},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(16),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:a.call(e,t)}var o=n(16),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(16),i="__lodash_hash_undefined__";t.exports=r},function(t,e,n){function r(t){return"function"!=typeof t.constructor||a(t)?{}:o(i(t))}var o=n(91),i=n(39),a=n(40);t.exports=r},function(t,e,n){function r(t){return a(t)||i(t)||!!(u&&t&&t[u])}var o=n(11),i=n(18),a=n(2),u=o?o.isConcatSpreadable:void 0;t.exports=r},function(t,e,n){function r(t,e,n){if(!u(n))return!1;var r=typeof e;return!!("number"==r?i(n)&&a(e,n.length):"string"==r&&e in n)&&o(n[e],t)}var o=n(17),i=n(24),a=n(15),u=n(0);t.exports=r},function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(u.test(t)||!a.test(t)||null!=e&&t in Object(e))}var o=n(2),i=n(27),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function r(t){return!!i&&i in t}var o=n(115),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}var o=n(12),i=Array.prototype,a=i.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(12);t.exports=r},function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(12);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(12);t.exports=r},function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(84),i=n(10),a=n(33);t.exports=r},function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(14);t.exports=r},function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(14);t.exports=r},function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(14);t.exports=r},function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(14);t.exports=r},function(t,e,n){function r(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}var o=n(161),i=500;t.exports=r},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e,n){(function(t){var r=n(38),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o,u=a&&r.process,c=function(){try{return u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(e,n(29)(t))},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){var e=0,n=0;return function(){var a=i(),u=o-(a-n);if(n=a,u>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;t.exports=n},function(t,e,n){function r(){this.__data__=new o,this.size=0}var o=n(10);t.exports=r},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<u-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(r)}return n.set(t,e),this.size=n.size,this}var o=n(10),i=n(33),a=n(34),u=200;t.exports=r},function(t,e,n){var r=n(143),o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r(function(t){var e=[];return o.test(t)&&e.push(""),t.replace(i,function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)}),e});t.exports=u},function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},function(t,e){function n(t){return function(){return t}}t.exports=n},function(t,e,n){function r(t){return(null==t?0:t.length)?o(t,1):[]}var o=n(92);t.exports=r},function(t,e,n){function r(t,e){return null!=t&&i(t,e,o)}var o=n(95),i=n(121);t.exports=r},function(t,e,n){function r(t){return i(t)&&o(t)}var o=n(24),i=n(6);t.exports=r},function(t,e,n){function r(t){if(!a(t)||o(t)!=u)return!1;var e=i(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==d}var o=n(8),i=n(39),a=n(6),u="[object Object]",c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,d=f.call(Object);t.exports=r},function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(34),i="Expected a function";r.Cache=o,t.exports=r},function(t,e,n){var r=n(102),o=n(118),i=o(function(t,e){return null==t?{}:r(t,e)});t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){return o(t,i(t))}var o=n(114),i=n(46);t.exports=r},function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(108);t.exports=r},function(t,e,n){t.exports=n(48)}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /* eslint-env node */


// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(8).default
var update = add("b437ebe2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var SDPUtils = __webpack_require__(1);

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Scanner_vue_vue_type_style_index_0_id_4ebacf15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Scanner_vue_vue_type_style_index_0_id_4ebacf15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Scanner_vue_vue_type_style_index_0_id_4ebacf15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Scanner_vue_vue_type_style_index_0_id_4ebacf15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "\n.viewport[data-v-4ebacf15] {\n  position: relative;\n}\n.viewport canvas[data-v-4ebacf15],\n.viewport video[data-v-4ebacf15] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n", ""]);



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var chrome_shim_namespaceObject = {};
__webpack_require__.r(chrome_shim_namespaceObject);
__webpack_require__.d(chrome_shim_namespaceObject, "shimGetUserMedia", function() { return shimGetUserMedia; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimMediaStream", function() { return shimMediaStream; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimOnTrack", function() { return shimOnTrack; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimGetSendersWithDtmf", function() { return shimGetSendersWithDtmf; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimSenderReceiverGetStats", function() { return shimSenderReceiverGetStats; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimAddTrackRemoveTrackWithNative", function() { return shimAddTrackRemoveTrackWithNative; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimAddTrackRemoveTrack", function() { return shimAddTrackRemoveTrack; });
__webpack_require__.d(chrome_shim_namespaceObject, "shimPeerConnection", function() { return shimPeerConnection; });
__webpack_require__.d(chrome_shim_namespaceObject, "fixNegotiationNeeded", function() { return fixNegotiationNeeded; });
var edge_shim_namespaceObject = {};
__webpack_require__.r(edge_shim_namespaceObject);
__webpack_require__.d(edge_shim_namespaceObject, "shimGetUserMedia", function() { return getusermedia_shimGetUserMedia; });
__webpack_require__.d(edge_shim_namespaceObject, "shimGetDisplayMedia", function() { return getdisplaymedia_shimGetDisplayMedia; });
__webpack_require__.d(edge_shim_namespaceObject, "shimPeerConnection", function() { return edge_shim_shimPeerConnection; });
__webpack_require__.d(edge_shim_namespaceObject, "shimReplaceTrack", function() { return shimReplaceTrack; });
var firefox_shim_namespaceObject = {};
__webpack_require__.r(firefox_shim_namespaceObject);
__webpack_require__.d(firefox_shim_namespaceObject, "shimGetUserMedia", function() { return firefox_getusermedia_shimGetUserMedia; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimGetDisplayMedia", function() { return firefox_getdisplaymedia_shimGetDisplayMedia; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimOnTrack", function() { return firefox_shim_shimOnTrack; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimPeerConnection", function() { return firefox_shim_shimPeerConnection; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimSenderGetStats", function() { return shimSenderGetStats; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimReceiverGetStats", function() { return shimReceiverGetStats; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimRemoveStream", function() { return shimRemoveStream; });
__webpack_require__.d(firefox_shim_namespaceObject, "shimRTCDataChannel", function() { return shimRTCDataChannel; });
var safari_shim_namespaceObject = {};
__webpack_require__.r(safari_shim_namespaceObject);
__webpack_require__.d(safari_shim_namespaceObject, "shimLocalStreamsAPI", function() { return shimLocalStreamsAPI; });
__webpack_require__.d(safari_shim_namespaceObject, "shimRemoteStreamsAPI", function() { return shimRemoteStreamsAPI; });
__webpack_require__.d(safari_shim_namespaceObject, "shimCallbacksAPI", function() { return shimCallbacksAPI; });
__webpack_require__.d(safari_shim_namespaceObject, "shimGetUserMedia", function() { return safari_shim_shimGetUserMedia; });
__webpack_require__.d(safari_shim_namespaceObject, "shimConstraints", function() { return shimConstraints; });
__webpack_require__.d(safari_shim_namespaceObject, "shimRTCIceServerUrls", function() { return shimRTCIceServerUrls; });
__webpack_require__.d(safari_shim_namespaceObject, "shimTrackEventTransceiver", function() { return shimTrackEventTransceiver; });
__webpack_require__.d(safari_shim_namespaceObject, "shimCreateOfferLegacy", function() { return shimCreateOfferLegacy; });
var common_shim_namespaceObject = {};
__webpack_require__.r(common_shim_namespaceObject);
__webpack_require__.d(common_shim_namespaceObject, "shimRTCIceCandidate", function() { return shimRTCIceCandidate; });
__webpack_require__.d(common_shim_namespaceObject, "shimMaxMessageSize", function() { return shimMaxMessageSize; });
__webpack_require__.d(common_shim_namespaceObject, "shimSendThrowTypeError", function() { return shimSendThrowTypeError; });
__webpack_require__.d(common_shim_namespaceObject, "shimConnectionState", function() { return shimConnectionState; });
__webpack_require__.d(common_shim_namespaceObject, "removeAllowExtmapMixed", function() { return removeAllowExtmapMixed; });

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/utils.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


let logDisabled_ = true;
let deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },
    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return (bool) ? 'adapter.js logging disabled' :
      'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
      ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  const {navigator} = window;

  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
        /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
        /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices &&
      navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent,
        /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
        /AppleWebKit\/(\d+)\./, 1);
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (typeof data !== 'object') {
    return data;
  }

  return Object.keys(data).reduce(function(accumulator, key) {
    const isObject = typeof data[key] === 'object';
    const value = isObject ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObject && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, {[key]: value});
  }, {});
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


const getusermedia_logging = log;

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const browserDetails = detectBrowser(window);

  const constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      const oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  const shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(devices => {
            devices = devices.filter(d => d.kind === 'videoinput');
            let dev = devices.find(d => matches.some(match =>
              d.label.toLowerCase().includes(match)));
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            getusermedia_logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    getusermedia_logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  const getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(cs) {
    return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
      if (c.audio && !stream.getAudioTracks().length ||
          c.video && !stream.getVideoTracks().length) {
        stream.getTracks().forEach(track => {
          track.stop();
        });
        throw new DOMException('', 'NotFoundError');
      }
      return stream;
    }, e => Promise.reject(shimError_(e))));
  };
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' +
        'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
    return getSourceId(constraints)
      .then(sourceId => {
        const widthSpecified = constraints.video && constraints.video.width;
        const heightSpecified = constraints.video && constraints.video.height;
        const frameRateSpecified = constraints.video &&
          constraints.video.frameRate;
        constraints.video = {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sourceId,
            maxFrameRate: frameRateSpecified || 3
          }
        };
        if (widthSpecified) {
          constraints.video.mandatory.maxWidth = widthSpecified;
        }
        if (heightSpecified) {
          constraints.video.mandatory.maxHeight = heightSpecified;
        }
        return window.navigator.mediaDevices.getUserMedia(constraints);
      });
  };
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */



/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}




function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
      window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
      if (!this._ontrackpoly) {
        this._ontrackpoly = (e) => {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', te => {
            let receiver;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers()
                .find(r => r.track && r.track.id === te.track.id);
            } else {
              receiver = {track: te.track};
            }

            const event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = {receiver};
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(track => {
            let receiver;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers()
                .find(r => r.track && r.track.id === track.id);
            } else {
              receiver = {track};
            }
            const event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = {receiver};
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    wrapPeerConnectionEvent(window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver',
          {value: {receiver: e.receiver}});
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection &&
      !('getSenders' in window.RTCPeerConnection.prototype) &&
      'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function(pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        let sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function(sender) {
        origRemoveTrack.apply(this, arguments);
        const idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(track => {
        const sender = this._senders.find(s => s.track === track);
        if (sender) { // remove sender
          this._senders.splice(this._senders.indexOf(sender), 1);
        }
      });
    };
  } else if (typeof window === 'object' && window.RTCPeerConnection &&
             'getSenders' in window.RTCPeerConnection.prototype &&
             'createDTMFSender' in window.RTCPeerConnection.prototype &&
             window.RTCRtpSender &&
             !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function() {
      const sender = this;
      return this._pc.getStats().then(result =>
        /* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */
        filterStats(result, sender.track, true));
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach(receiver => receiver._pc = this);
        return receivers;
      };
    }
    wrapPeerConnectionEvent(window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function() {
      const receiver = this;
      return this._pc.getStats().then(result =>
        filterStats(result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype &&
      'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function() {
    if (arguments.length > 0 &&
        arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || (sender && receiver)) {
        return Promise.reject(new DOMException(
          'There are more than one sender or receiver for the track.',
          'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        'There is no sender or receiver for the track.',
        'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function() {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams)
      .map(streamId => this._shimmedLocalStreams[streamId][0]);
  };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    const sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders()
      .filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function(sender) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(streamId => {
        const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          this._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (this._shimmedLocalStreams[streamId].length === 1) {
          delete this._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const browserDetails = detectBrowser(window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack &&
      browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  const origGetLocalStreams = window.RTCPeerConnection.prototype
      .getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function() {
    const nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(stream => this._reverseStreams[stream.id]);
  };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
    delete this._reverseStreams[(this._streams[stream.id] ?
        this._streams[stream.id].id : stream.id)];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this.signalingState === 'closed') {
      throw new DOMException(
        'The RTCPeerConnection\'s signalingState is \'closed\'.',
        'InvalidStateError');
    }
    const streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 ||
        !streams[0].getTracks().find(t => t === track)) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException(
        'The adapter.js addTrack polyfill only supports a single ' +
        ' stream which is associated with the specified track.',
        'NotSupportedError');
    }

    const alreadyExists = this.getSenders().find(s => s.track === track);
    if (alreadyExists) {
      throw new DOMException('Track already exists.',
          'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    const oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(() => {
        this.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      const newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(s => s.track === track);
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
          externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
          internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function(method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function() {
      const args = arguments;
      const isLegacyCall = arguments.length &&
          typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [
          (description) => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          },
          (err) => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]
        ]);
      }
      return nativeMethod.apply(this, arguments)
      .then(description => replaceInternalStreamId(this, description));
    };
  });

  const origSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  const origLocalDescription = Object.getOwnPropertyDescriptor(
      window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype,
      'localDescription', {
        get() {
          const description = origLocalDescription.get.apply(this);
          if (description.type === '') {
            return description;
          }
          return replaceInternalStreamId(this, description);
        }
      });

  window.RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this.signalingState === 'closed') {
      throw new DOMException(
        'The RTCPeerConnection\'s signalingState is \'closed\'.',
        'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.', 'TypeError');
    }
    const isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.',
          'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    let stream;
    Object.keys(this._streams).forEach(streamid => {
      const hasTrack = this._streams[streamid].getTracks()
        .find(track => sender.track === track);
      if (hasTrack) {
        stream = this._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function(selector,
      successCallback, errorCallback) {
    const args = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 ||
        typeof arguments[0] !== 'function')) {
      return origGetStats.apply(this, []);
    }

    const fixChromeStats_ = function(response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach(report => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(name => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    const makeMapStats = function(stats) {
      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
    };

    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function(response) {
        args[1](makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_,
        arguments[0]]);
    }

    // promise-support
    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [
        function(response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
    }).then(successCallback, errorCallback);
  };

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
      .forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          arguments[0] = new ((method === 'addIceCandidate') ?
              window.RTCIceCandidate :
              window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        };
      });

  // support for addIceCandidate(null or undefined)
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

function fixNegotiationNeeded(window) {
  wrapPeerConnectionEvent(window, 'negotiationneeded', e => {
    const pc = e.target;
    if (pc.signalingState !== 'stable') {
      return;
    }
    return e;
  });
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */



// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  let hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(server => {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }
      const isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(url => {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        const validTurn = url.startsWith('turn') &&
            !url.startsWith('turn:[') &&
            url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// EXTERNAL MODULE: ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js
var rtcpeerconnection = __webpack_require__(3);
var rtcpeerconnection_default = /*#__PURE__*/__webpack_require__.n(rtcpeerconnection);

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function getusermedia_shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  const shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(e => Promise.reject(shimError_(e)));
  };
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function getdisplaymedia_shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    window.navigator.getDisplayMedia.bind(window.navigator.mediaDevices);
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */









function edge_shim_shimPeerConnection(window) {
  const browserDetails = detectBrowser(window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function(args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function(args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      const origMSTEnabled = Object.getOwnPropertyDescriptor(
          window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set(value) {
          origMSTEnabled.set.call(this, value);
          const ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  const RTCPeerConnectionShim = rtcpeerconnection_default()(window,
      browserDetails.version);
  window.RTCPeerConnection = function(config) {
    if (config && config.iceServers) {
      config.iceServers = filterIceServers(config.iceServers,
        browserDetails.version);
      log('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender &&
      !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack =
        window.RTCRtpSender.prototype.setTrack;
  }
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */




function firefox_getusermedia_shimGetUserMedia(window) {
  const browserDetails = detectBrowser(window);
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints =
        MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


function firefox_getdisplaymedia_shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
    if (!(constraints && constraints.video)) {
      const err = new DOMException('getDisplayMedia without video ' +
          'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = {mediaSource: preferredMediaSource};
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */






function firefox_shim_shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function firefox_shim_shimPeerConnection(window) {
  const browserDetails = detectBrowser(window);

  if (typeof window !== 'object' ||
      !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
      .forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          arguments[0] = new ((method === 'addIceCandidate') ?
              window.RTCIceCandidate :
              window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        };
      });

  // support for addIceCandidate(null or undefined)
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };

  const modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function(
    selector,
    onSucc,
    onErr
  ) {
    return nativeGetStats.apply(this, [selector || null])
      .then(stats => {
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(stat => {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach((stat, i) => {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      })
      .then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };
  }

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function() {
    return this.track ? this._pc.getStats(this.track) :
        Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach(receiver => receiver._pc = this);
      return receivers;
    };
  }
  wrapPeerConnectionEvent(window, 'track', e => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection ||
      'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function(stream) {
    deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(sender => {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        this.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      stream.getTracks().forEach(track => _addTrack.call(this, track, stream));
    };

    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      if (stream) {
        if (!this._localStreams) {
          this._localStreams = [stream];
        } else if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
      }
      return _addTrack.call(this, track, stream);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      const index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      const tracks = stream.getTracks();
      this.getSenders().forEach(sender => {
        if (tracks.includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = (e) => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
      const pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function(e) {
          e.streams.forEach(stream => {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  const prototype = window.RTCPeerConnection.prototype;
  const createOffer = prototype.createOffer;
  const createAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function(successCallback, failureCallback) {
    const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
    const promise = createOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function(successCallback, failureCallback) {
    const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
    const promise = createAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  let withCallback = function(description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function(description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function(candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function safari_shim_shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    const mediaDevices = navigator.mediaDevices;
    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = (constraints) => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints)
      .then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({},
      constraints,
      {video: compactObject(constraints.video)}
    );
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  const OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      const newIceServers = [];
      for (let i = 0; i < pcConfig.iceServers.length; i++) {
        let server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') &&
            server.hasOwnProperty('url')) {
          deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in window.RTCPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCPeerConnection &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
      // defined for some reason even when window.RTCTransceiver is not.
      !window.RTCTransceiver) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      const audioTransceiver = this.getTransceivers().find(transceiver =>
        transceiver.sender.track &&
        transceiver.sender.track.kind === 'audio');
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true &&
          !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      const videoTransceiver = this.getTransceivers().find(transceiver =>
        transceiver.sender.track &&
        transceiver.sender.track.kind === 'video');
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true &&
          !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}

// EXTERNAL MODULE: ./node_modules/sdp/sdp.js
var sdp = __webpack_require__(1);
var sdp_default = /*#__PURE__*/__webpack_require__.n(sdp);

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/common_shim.js
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate &&
        args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = sdp_default.a.parseCandidate(args.candidate);
      const augmentedCandidate = Object.assign(nativeCandidate,
          parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment,
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  wrapPeerConnectionEvent(window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (window.RTCSctpTransport || !window.RTCPeerConnection) {
    return;
  }
  const browserDetails = detectBrowser(window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  const sctpInDescription = function(description) {
    const sections = sdp_default.a.splitSections(description.sdp);
    sections.shift();
    return sections.some(mediaSection => {
      const mLine = sdp_default.a.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application'
          && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function(description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize =
          browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox'
         && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = sdp_default.a.matchPrefix(description.sdp,
      'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' &&
                remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function() {
    this._sctp = null;

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      const isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      const canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      let maxMessageSize;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }

      // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.
      const sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection &&
      'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' &&
          pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' +
          pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel =
    window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function() {
    const dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  wrapPeerConnectionEvent(window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}


/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection ||
      'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange',
            this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange',
            this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function() {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange',
          this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for Chrome < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  const browserDetails = detectBrowser(window);
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter((line) => {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }
    return nativeSRD.apply(this, arguments);
  };
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/adapter_factory.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


  // Browser shims.






// Shimming starts here.
function adapterFactory({window} = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimEdge: true,
  shimSafari: true,
}) {
  // Utils.
  const logging = log;
  const browserDetails = detectBrowser(window);

  const adapter = {
    browserDetails,
    commonShim: common_shim_namespaceObject,
    extractVersion: extractVersion,
    disableLog: disableLog,
    disableWarnings: disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chrome_shim_namespaceObject || !shimPeerConnection ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chrome_shim_namespaceObject;

      shimGetUserMedia(window);
      shimMediaStream(window);
      shimPeerConnection(window);
      shimOnTrack(window);
      shimAddTrackRemoveTrack(window);
      shimGetSendersWithDtmf(window);
      shimSenderReceiverGetStats(window);
      fixNegotiationNeeded(window);

      shimRTCIceCandidate(window);
      shimConnectionState(window);
      shimMaxMessageSize(window);
      shimSendThrowTypeError(window);
      removeAllowExtmapMixed(window);
      break;
    case 'firefox':
      if (!firefox_shim_namespaceObject || !firefox_shim_shimPeerConnection ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefox_shim_namespaceObject;

      firefox_getusermedia_shimGetUserMedia(window);
      firefox_shim_shimPeerConnection(window);
      firefox_shim_shimOnTrack(window);
      shimRemoveStream(window);
      shimSenderGetStats(window);
      shimReceiverGetStats(window);
      shimRTCDataChannel(window);

      shimRTCIceCandidate(window);
      shimConnectionState(window);
      shimMaxMessageSize(window);
      shimSendThrowTypeError(window);
      break;
    case 'edge':
      if (!edge_shim_namespaceObject || !edge_shim_shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edge_shim_namespaceObject;

      getusermedia_shimGetUserMedia(window);
      getdisplaymedia_shimGetDisplayMedia(window);
      edge_shim_shimPeerConnection(window);
      shimReplaceTrack(window);

      // the edge shim implements the full RTCIceCandidate object.

      shimMaxMessageSize(window);
      shimSendThrowTypeError(window);
      break;
    case 'safari':
      if (!safari_shim_namespaceObject || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safari_shim_namespaceObject;

      shimRTCIceServerUrls(window);
      shimCreateOfferLegacy(window);
      shimCallbacksAPI(window);
      shimLocalStreamsAPI(window);
      shimRemoteStreamsAPI(window);
      shimTrackEventTransceiver(window);
      safari_shim_shimGetUserMedia(window);

      shimRTCIceCandidate(window);
      shimMaxMessageSize(window);
      shimSendThrowTypeError(window);
      removeAllowExtmapMixed(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/adapter_core.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





const adapter_core_adapter = adapterFactory({window});
/* harmony default export */ var adapter_core = (adapter_core_adapter);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Scanner.vue?vue&type=template&id=4ebacf15&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "viewport scanner", attrs: { id: "interactive" } },
      [_c("video"), _vm._v(" "), _c("canvas", { staticClass: "drawingBuffer" })]
    )
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/Scanner.vue?vue&type=template&id=4ebacf15&scoped=true&

// EXTERNAL MODULE: ./node_modules/quagga/dist/quagga.min.js
var quagga_min = __webpack_require__(0);
var quagga_min_default = /*#__PURE__*/__webpack_require__.n(quagga_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Scanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Scannervue_type_script_lang_js_ = ({
  name: 'QuaggaScanner',
  props: {
    onDetected: {
      type: Function,
      default: function _default(result) {
        console.log('detected: ', result);
      }
    },
    onProcessed: {
      type: Function,
      default: function _default(result) {
        var drawingCtx = quagga_min_default.a.canvas.ctx.overlay;
        var drawingCanvas = quagga_min_default.a.canvas.dom.overlay;

        if (result) {
          if (result.boxes) {
            drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
            result.boxes.filter(function (box) {
              return box !== result.box;
            }).forEach(function (box) {
              quagga_min_default.a.ImageDebug.drawPath(box, {
                x: 0,
                y: 1
              }, drawingCtx, {
                color: 'green',
                lineWidth: 2
              });
            });
          }

          if (result.box) {
            quagga_min_default.a.ImageDebug.drawPath(result.box, {
              x: 0,
              y: 1
            }, drawingCtx, {
              color: '#00F',
              lineWidth: 2
            });
          }

          if (result.codeResult && result.codeResult.code) {
            quagga_min_default.a.ImageDebug.drawPath(result.line, {
              x: 'x',
              y: 'y'
            }, drawingCtx, {
              color: 'red',
              lineWidth: 3
            });
          }
        }
      }
    },
    readerTypes: {
      type: Array,
      default: function _default() {
        return ['code_128_reader'];
      }
    },
    readerSize: {
      type: Object,
      default: function _default() {
        return {
          width: 640,
          height: 480
        };
      },
      validator: function validator(o) {
        return typeof o.width === 'number' && typeof o.height === 'number';
      }
    },
    aspectRatio: {
      type: Object,
      default: function _default() {
        return {
          min: 1,
          max: 2
        };
      },
      validator: function validator(o) {
        return typeof o.min === 'number' && typeof o.max === 'number';
      }
    }
  },
  data: function data() {
    return {
      quaggaState: {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: {
              min: this.readerSize.width
            },
            height: {
              min: this.readerSize.height
            },
            facingMode: 'environment',
            aspectRatio: {
              min: 1,
              max: 2
            }
          }
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: 2,
        frequency: 10,
        decoder: {
          readers: this.readerTypes
        },
        locate: true
      }
    };
  },
  mounted: function mounted() {
    quagga_min_default.a.init(this.quaggaState, function (err) {
      if (err) {
        return console.error(err);
      }

      quagga_min_default.a.start();
    });
    quagga_min_default.a.onDetected(this.onDetected);
    quagga_min_default.a.onProcessed(this.onProcessed);
  },
  destroyed: function destroyed() {
    quagga_min_default.a.stop();
  }
});
// CONCATENATED MODULE: ./src/Scanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Scannervue_type_script_lang_js_ = (Scannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Scanner.vue?vue&type=style&index=0&id=4ebacf15&scoped=true&lang=css&
var Scannervue_type_style_index_0_id_4ebacf15_scoped_true_lang_css_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Scanner.vue






/* normalize component */

var component = normalizeComponent(
  src_Scannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4ebacf15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Scanner.vue"
/* harmony default export */ var Scanner = (component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = __webpack_exports__["default"] = ({
  install: function install(Vue, options) {
    Vue.component('v-quagga', Scanner);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=vue-quagga.js.map