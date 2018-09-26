webpackJsonp([0],[/* 0 */
/***/
function(t,e,n){var r=n(3),i=n(31),a=n(21),o=n(22),s=n(32),u=function(t,e,n){var l,d,c,f,h=t&u.F,m=t&u.G,_=t&u.S,p=t&u.P,g=t&u.B,y=m?r:_?r[e]||(r[e]={}):(r[e]||{}).prototype,v=m?i:i[e]||(i[e]={}),M=v.prototype||(v.prototype={});m&&(n=e);for(l in n)
// contains in native
d=!h&&y&&void 0!==y[l],
// export native or passed
c=(d?y:n)[l],
// bind timers to global for call from export context
f=g&&d?s(c,r):p&&"function"==typeof c?s(Function.call,c):c,
// extend global
y&&o(y,l,c,t&u.U),
// export
v[l]!=c&&a(v,l,f),p&&M[l]!=c&&(M[l]=c)};r.core=i,
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library`
t.exports=u},/* 1 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(t){!function(e,n){t.exports=n()}(0,function(){"use strict";function e(){return Sr.apply(null,arguments)}function r(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function i(t){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function a(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}function o(t){return void 0===t}function s(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function u(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function l(t,e){var n,r=[];for(n=0;n<t.length;++n)r.push(e(t[n],n));return r}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function c(t,e){for(var n in e)d(e,n)&&(t[n]=e[n]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function f(t,e,n,r){return Ye(t,e,n,r,!0).utc()}function h(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function m(t){return null==t._pf&&(t._pf=h()),t._pf}function _(t){if(null==t._isValid){var e=m(t),n=Tr.call(e.parsedDateParts,function(t){return null!=t}),r=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(r=r&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return r;t._isValid=r}return t._isValid}function p(t){var e=f(NaN);return null!=t?c(m(e),t):m(e).userInvalidated=!0,e}function g(t,e){var n,r,i;if(o(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),o(e._i)||(t._i=e._i),o(e._f)||(t._f=e._f),o(e._l)||(t._l=e._l),o(e._strict)||(t._strict=e._strict),o(e._tzm)||(t._tzm=e._tzm),o(e._isUTC)||(t._isUTC=e._isUTC),o(e._offset)||(t._offset=e._offset),o(e._pf)||(t._pf=m(e)),o(e._locale)||(t._locale=e._locale),jr.length>0)for(n=0;n<jr.length;n++)r=jr[n],i=e[r],o(i)||(t[r]=i);return t}
// Moment prototype object
function y(t){g(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
!1===Er&&(Er=!0,e.updateOffset(this),Er=!1)}function v(t){return t instanceof y||null!=t&&null!=t._isAMomentObject}function M(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function b(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=M(e)),n}
// compare two arrays, return the number of differences
function L(t,e,n){var r,i=Math.min(t.length,e.length),a=Math.abs(t.length-e.length),o=0;for(r=0;r<i;r++)(n&&t[r]!==e[r]||!n&&b(t[r])!==b(e[r]))&&o++;return o+a}function k(t){!1===e.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function w(t,n){var r=!0;return c(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),r){for(var i,a=[],o=0;o<arguments.length;o++){if(i="","object"==typeof arguments[o]){i+="\n["+o+"] ";for(var s in arguments[0])i+=s+": "+arguments[0][s]+", ";i=i.slice(0,-2)}else i=arguments[o];a.push(i)}k(t+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+(new Error).stack),r=!1}return n.apply(this,arguments)},n)}function Y(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),Or[t]||(k(n),Or[t]=!0)}function x(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function D(t){var e,n;for(n in t)e=t[n],x(e)?this[n]=e:this["_"+n]=e;this._config=t,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
// TODO: Remove "ordinalParse" fallback in next major release.
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function S(t,e){var n,r=c({},t);for(n in e)d(e,n)&&(i(t[n])&&i(e[n])?(r[n]={},c(r[n],t[n]),c(r[n],e[n])):null!=e[n]?r[n]=e[n]:delete r[n]);for(n in t)d(t,n)&&!d(e,n)&&i(t[n])&&(
// make sure changes to properties don't modify parent config
r[n]=c({},r[n]));return r}function T(t){null!=t&&this.set(t)}function j(t,e,n){var r=this._calendar[t]||this._calendar.sameElse;return x(r)?r.call(e,n):r}function E(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function O(){return this._invalidDate}function H(t){return this._ordinal.replace("%d",t)}function P(t,e,n,r){var i=this._relativeTime[n];return x(i)?i(t,e,n,r):i.replace(/%d/i,t)}function A(t,e){var n=this._relativeTime[t>0?"future":"past"];return x(n)?n(e):n.replace(/%s/i,e)}function C(t,e){var n=t.toLowerCase();Ir[n]=Ir[n+"s"]=Ir[e]=t}function F(t){return"string"==typeof t?Ir[t]||Ir[t.toLowerCase()]:void 0}function I(t){var e,n,r={};for(n in t)d(t,n)&&(e=F(n))&&(r[e]=t[n]);return r}function W(t,e){Wr[t]=e}function N(t){var e=[];for(var n in t)e.push({unit:n,priority:Wr[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}function z(t,e,n){var r=""+Math.abs(t),i=e-r.length;return(t>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function R(t,e,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),t&&(Br[t]=i),e&&(Br[e[0]]=function(){return z(i.apply(this,arguments),e[1],e[2])}),n&&(Br[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),t)})}function B(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function V(t){var e,n,r=t.match(Nr);for(e=0,n=r.length;e<n;e++)Br[r[e]]?r[e]=Br[r[e]]:r[e]=B(r[e]);return function(e){var i,a="";for(i=0;i<n;i++)a+=x(r[i])?r[i].call(e,t):r[i];return a}}
// format date using native date object
function U(t,e){return t.isValid()?(e=J(e,t.localeData()),Rr[e]=Rr[e]||V(e),Rr[e](t)):t.localeData().invalidDate()}function J(t,e){function n(t){return e.longDateFormat(t)||t}var r=5;for(zr.lastIndex=0;r>=0&&zr.test(t);)t=t.replace(zr,n),zr.lastIndex=0,r-=1;return t}function q(t,e,n){si[t]=x(e)?e:function(t,r){return t&&n?n:e}}function G(t,e){return d(si,t)?si[t](e._strict,e._locale):new RegExp(K(t))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function K(t){return $(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,r,i){return e||n||r||i}))}function $(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(t,e){var n,r=e;for("string"==typeof t&&(t=[t]),s(e)&&(r=function(t,n){n[e]=b(t)}),n=0;n<t.length;n++)ui[t[n]]=r}function Q(t,e){Z(t,function(t,n,r,i){r._w=r._w||{},e(t,r._w,r,i)})}function X(t,e,n){null!=e&&d(ui,t)&&ui[t](e,n._a,n,t)}
// HELPERS
function tt(t){return et(t)?366:365}function et(t){return t%4==0&&t%100!=0||t%400==0}function nt(){return et(this.year())}function rt(t,n){return function(r){return null!=r?(at(this,t,r),e.updateOffset(this,n),this):it(this,t)}}function it(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function at(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&et(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),lt(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}
// MOMENTS
function ot(t){return t=F(t),x(this[t])?this[t]():this}function st(t,e){if("object"==typeof t){t=I(t);for(var n=N(t),r=0;r<n.length;r++)this[n[r].unit](t[n[r].unit])}else if(t=F(t),x(this[t]))return this[t](e);return this}function ut(t,e){return(t%e+e)%e}function lt(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=ut(e,12);return t+=(e-n)/12,1===n?et(t)?29:28:31-n%7%2}function dt(t,e){return t?r(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Mi).test(e)?"format":"standalone"][t.month()]:r(this._months)?this._months:this._months.standalone}function ct(t,e){return t?r(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Mi.test(e)?"format":"standalone"][t.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ft(t,e,n){var r,i,a,o=t.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)a=f([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(a,"").toLocaleLowerCase();return n?"MMM"===e?(i=yi.call(this._shortMonthsParse,o),-1!==i?i:null):(i=yi.call(this._longMonthsParse,o),-1!==i?i:null):"MMM"===e?-1!==(i=yi.call(this._shortMonthsParse,o))?i:(i=yi.call(this._longMonthsParse,o),-1!==i?i:null):-1!==(i=yi.call(this._longMonthsParse,o))?i:(i=yi.call(this._shortMonthsParse,o),-1!==i?i:null)}function ht(t,e,n){var r,i,a;if(this._monthsParseExact)return ft.call(this,t,e,n);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){
// test the regex
if(
// make the regex if we don't have it already
i=f([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(a="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(a.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[r].test(t))return r;if(n&&"MMM"===e&&this._shortMonthsParse[r].test(t))return r;if(!n&&this._monthsParse[r].test(t))return r}}
// MOMENTS
function mt(t,e){var n;if(!t.isValid())
// No op
return t;if("string"==typeof e)if(/^\d+$/.test(e))e=b(e);else
// TODO: Another silent failure?
if(e=t.localeData().monthsParse(e),!s(e))return t;return n=Math.min(t.date(),lt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function _t(t){return null!=t?(mt(this,t),e.updateOffset(this,!0),this):it(this,"Month")}function pt(){return lt(this.year(),this.month())}function gt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||vt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=ki),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function yt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||vt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=wi),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function vt(){function t(t,e){return e.length-t.length}var e,n,r=[],i=[],a=[];for(e=0;e<12;e++)
// make the regex if we don't have it already
n=f([2e3,e]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),a.push(this.months(n,"")),a.push(this.monthsShort(n,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
r.sort(t),i.sort(t),a.sort(t),e=0;e<12;e++)r[e]=$(r[e]),i[e]=$(i[e]);for(e=0;e<24;e++)a[e]=$(a[e]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Mt(t,e,n,r,i,a,o){
// can't just apply() to create a date:
// https://stackoverflow.com/q/181348
var s=new Date(t,e,n,r,i,a,o);
// the date constructor remaps years 0-99 to 1900-1999
return t<100&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function bt(t){var e=new Date(Date.UTC.apply(null,arguments));
// the Date.UTC function remaps years 0-99 to 1900-1999
return t<100&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}
// start-of-first-week - start-of-year
function Lt(t,e,n){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
r=7+e-n;return-(7+bt(t,0,r).getUTCDay()-e)%7+r-1}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function kt(t,e,n,r,i){var a,o,s=(7+n-r)%7,u=Lt(t,r,i),l=1+7*(e-1)+s+u;return l<=0?(a=t-1,o=tt(a)+l):l>tt(t)?(a=t+1,o=l-tt(t)):(a=t,o=l),{year:a,dayOfYear:o}}function wt(t,e,n){var r,i,a=Lt(t.year(),e,n),o=Math.floor((t.dayOfYear()-a-1)/7)+1;return o<1?(i=t.year()-1,r=o+Yt(i,e,n)):o>Yt(t.year(),e,n)?(r=o-Yt(t.year(),e,n),i=t.year()+1):(i=t.year(),r=o),{week:r,year:i}}function Yt(t,e,n){var r=Lt(t,e,n),i=Lt(t+1,e,n);return(tt(t)-r+i)/7}
// HELPERS
// LOCALES
function xt(t){return wt(t,this._week.dow,this._week.doy).week}function Dt(){return this._week.dow}function St(){return this._week.doy}
// MOMENTS
function Tt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function jt(t){var e=wt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}
// HELPERS
function Et(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Ot(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Ht(t,e){return t?r(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:r(this._weekdays)?this._weekdays:this._weekdays.standalone}function Pt(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function At(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Ct(t,e,n){var r,i,a,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)a=f([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(a,"").toLocaleLowerCase();return n?"dddd"===e?(i=yi.call(this._weekdaysParse,o),-1!==i?i:null):"ddd"===e?(i=yi.call(this._shortWeekdaysParse,o),-1!==i?i:null):(i=yi.call(this._minWeekdaysParse,o),-1!==i?i:null):"dddd"===e?-1!==(i=yi.call(this._weekdaysParse,o))?i:-1!==(i=yi.call(this._shortWeekdaysParse,o))?i:(i=yi.call(this._minWeekdaysParse,o),-1!==i?i:null):"ddd"===e?-1!==(i=yi.call(this._shortWeekdaysParse,o))?i:-1!==(i=yi.call(this._weekdaysParse,o))?i:(i=yi.call(this._minWeekdaysParse,o),-1!==i?i:null):-1!==(i=yi.call(this._minWeekdaysParse,o))?i:-1!==(i=yi.call(this._weekdaysParse,o))?i:(i=yi.call(this._shortWeekdaysParse,o),-1!==i?i:null)}function Ft(t,e,n){var r,i,a;if(this._weekdaysParseExact)return Ct.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){
// test the regex
if(
// make the regex if we don't have it already
i=f([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(a="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(a.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[r].test(t))return r;if(n&&"ddd"===e&&this._shortWeekdaysParse[r].test(t))return r;if(n&&"dd"===e&&this._minWeekdaysParse[r].test(t))return r;if(!n&&this._weekdaysParse[r].test(t))return r}}
// MOMENTS
function It(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Et(t,this.localeData()),this.add(t-e,"d")):e}function Wt(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Nt(t){if(!this.isValid())return null!=t?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=t){var e=Ot(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function zt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Vt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=Ti),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Rt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Vt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ji),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Bt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Vt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ei),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vt(){function t(t,e){return e.length-t.length}var e,n,r,i,a,o=[],s=[],u=[],l=[];for(e=0;e<7;e++)
// make the regex if we don't have it already
n=f([2e3,1]).day(e),r=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),a=this.weekdays(n,""),o.push(r),s.push(i),u.push(a),l.push(r),l.push(i),l.push(a);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
o.sort(t),s.sort(t),u.sort(t),l.sort(t),e=0;e<7;e++)s[e]=$(s[e]),u[e]=$(u[e]),l[e]=$(l[e]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}
// FORMATTING
function Ut(){return this.hours()%12||12}function Jt(){return this.hours()||24}function qt(t,e){R(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}
// PARSING
function Gt(t,e){return e._meridiemParse}
// LOCALES
function Kt(t){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(t+"").toLowerCase().charAt(0)}function $t(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function Zt(t){return t?t.toLowerCase().replace("_","-"):t}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Qt(t){for(var e,n,r,i,a=0;a<t.length;){for(i=Zt(t[a]).split("-"),e=i.length,n=Zt(t[a+1]),n=n?n.split("-"):null;e>0;){if(r=Xt(i.slice(0,e).join("-")))return r;if(n&&n.length>=e&&L(i,n,!0)>=e-1)
//the next array item is better than a shallower substring of this one
break;e--}a++}return Oi}function Xt(e){var r=null;
// TODO: Find a better way to register and load all the locales in Node
if(!Ci[e]&&void 0!==t&&t&&t.exports)try{r=Oi._abbr;n(609)("./"+e),te(r)}catch(t){}return Ci[e]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function te(t,e){var n;
// moment.duration._locale = moment._locale = data;
//warn user if arguments are passed but the locale could not be set
return t&&(n=o(e)?re(t):ee(t,e),n?Oi=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Oi._abbr}function ee(t,e){if(null!==e){var n,r=Ai;if(e.abbr=t,null!=Ci[t])Y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Ci[t]._config;else if(null!=e.parentLocale)if(null!=Ci[e.parentLocale])r=Ci[e.parentLocale]._config;else{if(null==(n=Xt(e.parentLocale)))return Fi[e.parentLocale]||(Fi[e.parentLocale]=[]),Fi[e.parentLocale].push({name:t,config:e}),null;r=n._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return Ci[t]=new T(S(r,e)),Fi[t]&&Fi[t].forEach(function(t){ee(t.name,t.config)}),te(t),Ci[t]}
// useful for testing
return delete Ci[t],null}function ne(t,e){if(null!=e){var n,r,i=Ai;
// MERGE
r=Xt(t),null!=r&&(i=r._config),e=S(i,e),n=new T(e),n.parentLocale=Ci[t],Ci[t]=n,
// backwards compat for now: also set the locale
te(t)}else
// pass null for config to unupdate, useful for tests
null!=Ci[t]&&(null!=Ci[t].parentLocale?Ci[t]=Ci[t].parentLocale:null!=Ci[t]&&delete Ci[t]);return Ci[t]}
// returns locale data
function re(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Oi;if(!r(t)){if(
//short-circuit everything else
e=Xt(t))return e;t=[t]}return Qt(t)}function ie(){return Hr(Ci)}function ae(t){var e,n=t._a;return n&&-2===m(t).overflow&&(e=n[di]<0||n[di]>11?di:n[ci]<1||n[ci]>lt(n[li],n[di])?ci:n[fi]<0||n[fi]>24||24===n[fi]&&(0!==n[hi]||0!==n[mi]||0!==n[_i])?fi:n[hi]<0||n[hi]>59?hi:n[mi]<0||n[mi]>59?mi:n[_i]<0||n[_i]>999?_i:-1,m(t)._overflowDayOfYear&&(e<li||e>ci)&&(e=ci),m(t)._overflowWeeks&&-1===e&&(e=pi),m(t)._overflowWeekday&&-1===e&&(e=gi),m(t).overflow=e),t}
// Pick the first defined of two or three arguments.
function oe(t,e,n){return null!=t?t:null!=e?e:n}function se(t){
// hooks is actually the exported moment object
var n=new Date(e.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function ue(t){var e,n,r,i,a,o=[];if(!t._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(r=se(t),
//compute day of the year from weeks and weekdays
t._w&&null==t._a[ci]&&null==t._a[di]&&le(t),
//if the day of the year is set, figure out what it is
null!=t._dayOfYear&&(a=oe(t._a[li],r[li]),(t._dayOfYear>tt(a)||0===t._dayOfYear)&&(m(t)._overflowDayOfYear=!0),n=bt(a,0,t._dayOfYear),t._a[di]=n.getUTCMonth(),t._a[ci]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=o[e]=r[e];
// Zero out whatever was not defaulted, including time
for(;e<7;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];
// Check for 24:00:00.000
24===t._a[fi]&&0===t._a[hi]&&0===t._a[mi]&&0===t._a[_i]&&(t._nextDay=!0,t._a[fi]=0),t._d=(t._useUTC?bt:Mt).apply(null,o),i=t._useUTC?t._d.getUTCDay():t._d.getDay(),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[fi]=24),
// check for mismatching day of week
t._w&&void 0!==t._w.d&&t._w.d!==i&&(m(t).weekdayMismatch=!0)}}function le(t){var e,n,r,i,a,o,s,u;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)a=1,o=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
n=oe(e.GG,t._a[li],wt(xe(),1,4).year),r=oe(e.W,1),((i=oe(e.E,1))<1||i>7)&&(u=!0);else{a=t._locale._week.dow,o=t._locale._week.doy;var l=wt(xe(),a,o);n=oe(e.gg,t._a[li],l.year),
// Default to current week.
r=oe(e.w,l.week),null!=e.d?((
// weekday -- low day numbers are considered next week
i=e.d)<0||i>6)&&(u=!0):null!=e.e?(
// local weekday -- counting starts from begining of week
i=e.e+a,(e.e<0||e.e>6)&&(u=!0)):
// default to begining of week
i=a}r<1||r>Yt(n,a,o)?m(t)._overflowWeeks=!0:null!=u?m(t)._overflowWeekday=!0:(s=kt(n,r,i,a,o),t._a[li]=s.year,t._dayOfYear=s.dayOfYear)}
// date from iso format
function de(t){var e,n,r,i,a,o,s=t._i,u=Ii.exec(s)||Wi.exec(s);if(u){for(m(t).iso=!0,e=0,n=zi.length;e<n;e++)if(zi[e][1].exec(u[1])){i=zi[e][0],r=!1!==zi[e][2];break}if(null==i)return void(t._isValid=!1);if(u[3]){for(e=0,n=Ri.length;e<n;e++)if(Ri[e][1].exec(u[3])){
// match[2] should be 'T' or space
a=(u[2]||" ")+Ri[e][0];break}if(null==a)return void(t._isValid=!1)}if(!r&&null!=a)return void(t._isValid=!1);if(u[4]){if(!Ni.exec(u[4]))return void(t._isValid=!1);o="Z"}t._f=i+(a||"")+(o||""),ye(t)}else t._isValid=!1}function ce(t,e,n,r,i,a){var o=[fe(t),Li.indexOf(e),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return a&&o.push(parseInt(a,10)),o}function fe(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function he(t){
// Remove comments and folding whitespace and replace multiple-spaces with a single space
return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function me(t,e,n){if(t){if(Di.indexOf(t)!==new Date(e[0],e[1],e[2]).getDay())return m(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function _e(t,e,n){if(t)return Ui[t];if(e)
// the only allowed military tz is Z
return 0;var r=parseInt(n,10),i=r%100;return(r-i)/100*60+i}
// date and time from ref 2822 format
function pe(t){var e=Vi.exec(he(t._i));if(e){var n=ce(e[4],e[3],e[2],e[5],e[6],e[7]);if(!me(e[1],n,t))return;t._a=n,t._tzm=_e(e[8],e[9],e[10]),t._d=bt.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),m(t).rfc2822=!0}else t._isValid=!1}
// date from iso format or fallback
function ge(t){var n=Bi.exec(t._i);if(null!==n)return void(t._d=new Date(+n[1]));de(t),!1===t._isValid&&(delete t._isValid,pe(t),!1===t._isValid&&(delete t._isValid,
// Final attempt, use Input Fallback
e.createFromInputFallback(t)))}
// date from string and format string
function ye(t){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(t._f===e.ISO_8601)return void de(t);if(t._f===e.RFC_2822)return void pe(t);t._a=[],m(t).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var n,r,i,a,o,s=""+t._i,u=s.length,l=0;for(i=J(t._f,t._locale).match(Nr)||[],n=0;n<i.length;n++)a=i[n],r=(s.match(G(a,t))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
r&&(o=s.substr(0,s.indexOf(r)),o.length>0&&m(t).unusedInput.push(o),s=s.slice(s.indexOf(r)+r.length),l+=r.length),
// don't parse if it's not a known token
Br[a]?(r?m(t).empty=!1:m(t).unusedTokens.push(a),X(a,r,t)):t._strict&&!r&&m(t).unusedTokens.push(a);
// add remaining unparsed input length to the string
m(t).charsLeftOver=u-l,s.length>0&&m(t).unusedInput.push(s),
// clear _12h flag if hour is <= 12
t._a[fi]<=12&&!0===m(t).bigHour&&t._a[fi]>0&&(m(t).bigHour=void 0),m(t).parsedDateParts=t._a.slice(0),m(t).meridiem=t._meridiem,
// handle meridiem
t._a[fi]=ve(t._locale,t._a[fi],t._meridiem),ue(t),ae(t)}function ve(t,e,n){var r;
// Fallback
return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(r=t.isPM(n),r&&e<12&&(e+=12),r||12!==e||(e=0),e):e}
// date from string and array of format strings
function Me(t){var e,n,r,i,a;if(0===t._f.length)return m(t).invalidFormat=!0,void(t._d=new Date(NaN));for(i=0;i<t._f.length;i++)a=0,e=g({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[i],ye(e),_(e)&&(
// if there is any input that was not parsed add a penalty for that format
a+=m(e).charsLeftOver,
//or tokens
a+=10*m(e).unusedTokens.length,m(e).score=a,(null==r||a<r)&&(r=a,n=e));c(t,n||e)}function be(t){if(!t._d){var e=I(t._i);t._a=l([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),ue(t)}}function Le(t){var e=new y(ae(ke(t)));
// Adding is smart enough around DST
return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function ke(t){var e=t._i,n=t._f;return t._locale=t._locale||re(t._l),null===e||void 0===n&&""===e?p({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),v(e)?new y(ae(e)):(u(e)?t._d=e:r(n)?Me(t):n?ye(t):we(t),_(t)||(t._d=null),t))}function we(t){var n=t._i;o(n)?t._d=new Date(e.now()):u(n)?t._d=new Date(n.valueOf()):"string"==typeof n?ge(t):r(n)?(t._a=l(n.slice(0),function(t){return parseInt(t,10)}),ue(t)):i(n)?be(t):s(n)?
// from milliseconds
t._d=new Date(n):e.createFromInputFallback(t)}function Ye(t,e,n,o,s){var u={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return!0!==n&&!1!==n||(o=n,n=void 0),(i(t)&&a(t)||r(t)&&0===t.length)&&(t=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=n,u._i=t,u._f=e,u._strict=o,Le(u)}function xe(t,e,n,r){return Ye(t,e,n,r,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function De(t,e){var n,i;if(1===e.length&&r(e[0])&&(e=e[0]),!e.length)return xe();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}
// TODO: Use [].sort instead?
function Se(){return De("isBefore",[].slice.call(arguments,0))}function Te(){return De("isAfter",[].slice.call(arguments,0))}function je(t){for(var e in t)if(-1===yi.call(Ki,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,r=0;r<Ki.length;++r)if(t[Ki[r]]){if(n)return!1;parseFloat(t[Ki[r]])!==b(t[Ki[r]])&&(n=!0)}return!0}function Ee(){return this._isValid}function Oe(){return Ze(NaN)}function He(t){var e=I(t),n=e.year||0,r=e.quarter||0,i=e.month||0,a=e.week||0,o=e.day||0,s=e.hour||0,u=e.minute||0,l=e.second||0,d=e.millisecond||0;this._isValid=je(e),
// representation for dateAddRemove
this._milliseconds=+d+1e3*l+// 1000
6e4*u+// 1000 * 60
1e3*s*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+o+7*a,
// It is impossible to translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+i+3*r+12*n,this._data={},this._locale=re(),this._bubble()}function Pe(t){return t instanceof He}function Ae(t){return t<0?-1*Math.round(-1*t):Math.round(t)}
// FORMATTING
function Ce(t,e){R(t,0,0,function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+z(~~(t/60),2)+e+z(~~t%60,2)})}function Fe(t,e){var n=(e||"").match(t);if(null===n)return null;var r=n[n.length-1]||[],i=(r+"").match($i)||["-",0,0],a=60*i[1]+b(i[2]);return 0===a?0:"+"===i[0]?a:-a}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Ie(t,n){var r,i;
// Use low-level api, because this fn is low-level api.
return n._isUTC?(r=n.clone(),i=(v(t)||u(t)?t.valueOf():xe(t).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+i),e.updateOffset(r,!1),r):xe(t).local()}function We(t){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(t._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Ne(t,n,r){var i,a=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=Fe(ii,t)))return this}else Math.abs(t)<16&&!r&&(t*=60);return!this._isUTC&&n&&(i=We(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==t&&(!n||this._changeInProgress?nn(this,Ze(t-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?a:We(this)}function ze(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Re(t){return this.utcOffset(0,t)}function Be(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(We(this),"m")),this}function Ve(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=Fe(ri,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Ue(t){return!!this.isValid()&&(t=t?xe(t).utcOffset():0,(this.utcOffset()-t)%60==0)}function Je(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function qe(){if(!o(this._isDSTShifted))return this._isDSTShifted;var t={};if(g(t,this),t=ke(t),t._a){var e=t._isUTC?f(t._a):xe(t._a);this._isDSTShifted=this.isValid()&&L(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Ge(){return!!this.isValid()&&!this._isUTC}function Ke(){return!!this.isValid()&&this._isUTC}function $e(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ze(t,e){var n,r,i,a=t,
// matching against regexp is expensive, do it on demand
o=null;// checks for null or undefined
return Pe(t)?a={ms:t._milliseconds,d:t._days,M:t._months}:s(t)?(a={},e?a[e]=t:a.milliseconds=t):(o=Zi.exec(t))?(n="-"===o[1]?-1:1,a={y:0,d:b(o[ci])*n,h:b(o[fi])*n,m:b(o[hi])*n,s:b(o[mi])*n,ms:b(Ae(1e3*o[_i]))*n}):(o=Qi.exec(t))?(n="-"===o[1]?-1:(o[1],1),a={y:Qe(o[2],n),M:Qe(o[3],n),w:Qe(o[4],n),d:Qe(o[5],n),h:Qe(o[6],n),m:Qe(o[7],n),s:Qe(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=tn(xe(a.from),xe(a.to)),a={},a.ms=i.milliseconds,a.M=i.months),r=new He(a),Pe(t)&&d(t,"_locale")&&(r._locale=t._locale),r}function Qe(t,e){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var n=t&&parseFloat(t.replace(",","."));
// apply sign while we're at it
return(isNaN(n)?0:n)*e}function Xe(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function tn(t,e){var n;return t.isValid()&&e.isValid()?(e=Ie(e,t),t.isBefore(e)?n=Xe(t,e):(n=Xe(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function en(t,e){return function(n,r){var i,a;
//invert the arguments, but complain about it
return null===r||isNaN(+r)||(Y(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=r,r=a),n="string"==typeof n?+n:n,i=Ze(n,r),nn(this,i,t),this}}function nn(t,n,r,i){var a=n._milliseconds,o=Ae(n._days),s=Ae(n._months);t.isValid()&&(i=null==i||i,s&&mt(t,it(t,"Month")+s*r),o&&at(t,"Date",it(t,"Date")+o*r),a&&t._d.setTime(t._d.valueOf()+a*r),i&&e.updateOffset(t,o||s))}function rn(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function an(t,n){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var r=t||xe(),i=Ie(r,this).startOf("day"),a=e.calendarFormat(this,i)||"sameElse",o=n&&(x(n[a])?n[a].call(this,r):n[a]);return this.format(o||this.localeData().calendar(a,this,xe(r)))}function on(){return new y(this)}function sn(t,e){var n=v(t)?t:xe(t);return!(!this.isValid()||!n.isValid())&&(e=F(o(e)?"millisecond":e),"millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())}function un(t,e){var n=v(t)?t:xe(t);return!(!this.isValid()||!n.isValid())&&(e=F(o(e)?"millisecond":e),"millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())}function ln(t,e,n,r){return r=r||"()",("("===r[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===r[1]?this.isBefore(e,n):!this.isAfter(e,n))}function dn(t,e){var n,r=v(t)?t:xe(t);return!(!this.isValid()||!r.isValid())&&(e=F(e||"millisecond"),"millisecond"===e?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))}function cn(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function fn(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function hn(t,e,n){var r,i,a;if(!this.isValid())return NaN;if(r=Ie(t,this),!r.isValid())return NaN;switch(i=6e4*(r.utcOffset()-this.utcOffset()),e=F(e)){case"year":a=mn(this,r)/12;break;case"month":a=mn(this,r);break;case"quarter":a=mn(this,r)/3;break;case"second":a=(this-r)/1e3;break;// 1000
case"minute":a=(this-r)/6e4;break;// 1000 * 60
case"hour":a=(this-r)/36e5;break;// 1000 * 60 * 60
case"day":a=(this-r-i)/864e5;break;// 1000 * 60 * 60 * 24, negate dst
case"week":a=(this-r-i)/6048e5;break;// 1000 * 60 * 60 * 24 * 7, negate dst
default:a=this-r}return n?a:M(a)}function mn(t,e){
// difference in months
var n,r,i=12*(e.year()-t.year())+(e.month()-t.month()),
// b is in (anchor - 1 month, anchor + 1 month)
a=t.clone().add(i,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return e-a<0?(n=t.clone().add(i-1,"months"),r=(e-a)/(a-n)):(n=t.clone().add(i+1,"months"),r=(e-a)/(n-a)),-(i+r)||0}function _n(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function pn(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;
// native implementation is ~50x faster, use it when we can
return n.year()<0||n.year()>9999?U(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}/**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
function gn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=e+'[")]';return this.format(n+r+"-MM-DD[T]HH:mm:ss.SSS"+i)}function yn(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var n=U(this,t);return this.localeData().postformat(n)}function vn(t,e){return this.isValid()&&(v(t)&&t.isValid()||xe(t).isValid())?Ze({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Mn(t){return this.from(xe(),t)}function bn(t,e){return this.isValid()&&(v(t)&&t.isValid()||xe(t).isValid())?Ze({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Ln(t){return this.to(xe(),t)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function kn(t){var e;return void 0===t?this._locale._abbr:(e=re(t),null!=e&&(this._locale=e),this)}function wn(){return this._locale}function Yn(t){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(t=F(t)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function xn(t){
// 'date' is an alias for 'day', so it should be considered as such.
return void 0===(t=F(t))||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function Dn(){return this._d.valueOf()-6e4*(this._offset||0)}function Sn(){return Math.floor(this.valueOf()/1e3)}function Tn(){return new Date(this.valueOf())}function jn(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function En(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function On(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function Hn(){return _(this)}function Pn(){return c({},m(this))}function An(){return m(this).overflow}function Cn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Fn(t,e){R(0,[t,t.length],0,e)}
// MOMENTS
function In(t){return Rn.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Wn(t){return Rn.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Nn(){return Yt(this.year(),1,4)}function zn(){var t=this.localeData()._week;return Yt(this.year(),t.dow,t.doy)}function Rn(t,e,n,r,i){var a;return null==t?wt(this,r,i).year:(a=Yt(t,r,i),e>a&&(e=a),Bn.call(this,t,e,n,r,i))}function Bn(t,e,n,r,i){var a=kt(t,e,n,r,i),o=bt(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}
// MOMENTS
function Vn(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Un(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Jn(t,e){e[_i]=b(1e3*("0."+t))}
// MOMENTS
function qn(){return this._isUTC?"UTC":""}function Gn(){return this._isUTC?"Coordinated Universal Time":""}function Kn(t){return xe(1e3*t)}function $n(){return xe.apply(null,arguments).parseZone()}function Zn(t){return t}function Qn(t,e,n,r){var i=re(),a=f().set(r,e);return i[n](a,t)}function Xn(t,e,n){if(s(t)&&(e=t,t=void 0),t=t||"",null!=e)return Qn(t,e,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Qn(t,r,n,"month");return i}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function tr(t,e,n,r){"boolean"==typeof t?(s(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,s(e)&&(n=e,e=void 0),e=e||"");var i=re(),a=t?i._week.dow:0;if(null!=n)return Qn(e,(n+a)%7,r,"day");var o,u=[];for(o=0;o<7;o++)u[o]=Qn(e,(o+a)%7,r,"day");return u}function er(t,e){return Xn(t,e,"months")}function nr(t,e){return Xn(t,e,"monthsShort")}function rr(t,e,n){return tr(t,e,n,"weekdays")}function ir(t,e,n){return tr(t,e,n,"weekdaysShort")}function ar(t,e,n){return tr(t,e,n,"weekdaysMin")}function or(){var t=this._data;return this._milliseconds=la(this._milliseconds),this._days=la(this._days),this._months=la(this._months),t.milliseconds=la(t.milliseconds),t.seconds=la(t.seconds),t.minutes=la(t.minutes),t.hours=la(t.hours),t.months=la(t.months),t.years=la(t.years),this}function sr(t,e,n,r){var i=Ze(e,n);return t._milliseconds+=r*i._milliseconds,t._days+=r*i._days,t._months+=r*i._months,t._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function ur(t,e){return sr(this,t,e,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function lr(t,e){return sr(this,t,e,-1)}function dr(t){return t<0?Math.floor(t):Math.ceil(t)}function cr(){var t,e,n,r,i,a=this._milliseconds,o=this._days,s=this._months,u=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return a>=0&&o>=0&&s>=0||a<=0&&o<=0&&s<=0||(a+=864e5*dr(hr(s)+o),o=0,s=0),u.milliseconds=a%1e3,t=M(a/1e3),u.seconds=t%60,e=M(t/60),u.minutes=e%60,n=M(e/60),u.hours=n%24,o+=M(n/24),i=M(fr(o)),s+=i,o-=dr(hr(i)),r=M(s/12),s%=12,u.days=o,u.months=s,u.years=r,this}function fr(t){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*t/146097}function hr(t){
// the reverse of daysToMonths
return 146097*t/4800}function mr(t){if(!this.isValid())return NaN;var e,n,r=this._milliseconds;if("month"===(t=F(t))||"year"===t)return e=this._days+r/864e5,n=this._months+fr(e),"month"===t?n:n/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
e=this._days+Math.round(hr(this._months)),t){case"week":return e/7+r/6048e5;case"day":return e+r/864e5;case"hour":return 24*e+r/36e5;case"minute":return 1440*e+r/6e4;case"second":return 86400*e+r/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*e)+r;default:throw new Error("Unknown unit "+t)}}
// TODO: Use this.as('ms')?
function _r(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*b(this._months/12):NaN}function pr(t){return function(){return this.as(t)}}function gr(){return Ze(this)}function yr(t){return t=F(t),this.isValid()?this[t+"s"]():NaN}function vr(t){return function(){return this.isValid()?this._data[t]:NaN}}function Mr(){return M(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function br(t,e,n,r,i){return i.relativeTime(e||1,!!n,t,r)}function Lr(t,e,n){var r=Ze(t).abs(),i=Ya(r.as("s")),a=Ya(r.as("m")),o=Ya(r.as("h")),s=Ya(r.as("d")),u=Ya(r.as("M")),l=Ya(r.as("y")),d=i<=xa.ss&&["s",i]||i<xa.s&&["ss",i]||a<=1&&["m"]||a<xa.m&&["mm",a]||o<=1&&["h"]||o<xa.h&&["hh",o]||s<=1&&["d"]||s<xa.d&&["dd",s]||u<=1&&["M"]||u<xa.M&&["MM",u]||l<=1&&["y"]||["yy",l];return d[2]=e,d[3]=+t>0,d[4]=n,br.apply(null,d)}
// This function allows you to set the rounding function for relative time strings
function kr(t){return void 0===t?Ya:"function"==typeof t&&(Ya=t,!0)}
// This function allows you to set a threshold for relative time strings
function wr(t,e){return void 0!==xa[t]&&(void 0===e?xa[t]:(xa[t]=e,"s"===t&&(xa.ss=e-1),!0))}function Yr(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),n=Lr(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function xr(t){return(t>0)-(t<0)||+t}function Dr(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
if(!this.isValid())return this.localeData().invalidDate();var t,e,n,r=Da(this._milliseconds)/1e3,i=Da(this._days),a=Da(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
t=M(r/60),e=M(t/60),r%=60,t%=60,
// 12 months -> 1 year
n=M(a/12),a%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var o=n,s=a,u=i,l=e,d=t,c=r?r.toFixed(3).replace(/\.?0+$/,""):"",f=this.asSeconds();if(!f)
// this is the same as C#'s (Noda) and python (isodate)...
// but not other JS (goog.date)
return"P0D";var h=f<0?"-":"",m=xr(this._months)!==xr(f)?"-":"",_=xr(this._days)!==xr(f)?"-":"",p=xr(this._milliseconds)!==xr(f)?"-":"";return h+"P"+(o?m+o+"Y":"")+(s?m+s+"M":"")+(u?_+u+"D":"")+(l||d||c?"T":"")+(l?p+l+"H":"")+(d?p+d+"M":"")+(c?p+c+"S":"")}var Sr,Tr;Tr=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,r=0;r<n;r++)if(r in e&&t.call(this,e[r],r,e))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var jr=e.momentProperties=[],Er=!1,Or={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Hr;Hr=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)d(t,e)&&n.push(e);return n};var Pr={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ar={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Cr=/\d{1,2}/,Fr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ir={},Wr={},Nr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,zr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rr={},Br={},Vr=/\d/,Ur=/\d\d/,Jr=/\d{3}/,qr=/\d{4}/,Gr=/[+-]?\d{6}/,Kr=/\d\d?/,$r=/\d\d\d\d?/,Zr=/\d\d\d\d\d\d?/,Qr=/\d{1,3}/,Xr=/\d{1,4}/,ti=/[+-]?\d{1,6}/,ei=/\d+/,ni=/[+-]?\d+/,ri=/Z|[+-]\d\d:?\d\d/gi,ii=/Z|[+-]\d\d(?::?\d\d)?/gi,ai=/[+-]?\d+(\.\d{1,3})?/,oi=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,si={},ui={},li=0,di=1,ci=2,fi=3,hi=4,mi=5,_i=6,pi=7,gi=8;
// FORMATTING
R("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
C("year","y"),
// PRIORITIES
W("year",1),
// PARSING
q("Y",ni),q("YY",Kr,Ur),q("YYYY",Xr,qr),q("YYYYY",ti,Gr),q("YYYYYY",ti,Gr),Z(["YYYYY","YYYYYY"],li),Z("YYYY",function(t,n){n[li]=2===t.length?e.parseTwoDigitYear(t):b(t)}),Z("YY",function(t,n){n[li]=e.parseTwoDigitYear(t)}),Z("Y",function(t,e){e[li]=parseInt(t,10)}),
// HOOKS
e.parseTwoDigitYear=function(t){return b(t)+(b(t)>68?1900:2e3)};
// MOMENTS
var yi,vi=rt("FullYear",!0);yi=Array.prototype.indexOf?Array.prototype.indexOf:function(t){
// I know
var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},
// FORMATTING
R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),R("MMMM",0,0,function(t){return this.localeData().months(this,t)}),
// ALIASES
C("month","M"),
// PRIORITY
W("month",8),
// PARSING
q("M",Kr),q("MM",Kr,Ur),q("MMM",function(t,e){return e.monthsShortRegex(t)}),q("MMMM",function(t,e){return e.monthsRegex(t)}),Z(["M","MM"],function(t,e){e[di]=b(t)-1}),Z(["MMM","MMMM"],function(t,e,n,r){var i=n._locale.monthsParse(t,r,n._strict);
// if we didn't find a month name, mark the date as invalid.
null!=i?e[di]=i:m(n).invalidMonth=t});
// LOCALES
var Mi=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,bi="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Li="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ki=oi,wi=oi;
// FORMATTING
R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),
// ALIASES
C("week","w"),C("isoWeek","W"),
// PRIORITIES
W("week",5),W("isoWeek",5),
// PARSING
q("w",Kr),q("ww",Kr,Ur),q("W",Kr),q("WW",Kr,Ur),Q(["w","ww","W","WW"],function(t,e,n,r){e[r.substr(0,1)]=b(t)});var Yi={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
R("d",0,"do","day"),R("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),R("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),R("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),
// ALIASES
C("day","d"),C("weekday","e"),C("isoWeekday","E"),
// PRIORITY
W("day",11),W("weekday",11),W("isoWeekday",11),
// PARSING
q("d",Kr),q("e",Kr),q("E",Kr),q("dd",function(t,e){return e.weekdaysMinRegex(t)}),q("ddd",function(t,e){return e.weekdaysShortRegex(t)}),q("dddd",function(t,e){return e.weekdaysRegex(t)}),Q(["dd","ddd","dddd"],function(t,e,n,r){var i=n._locale.weekdaysParse(t,r,n._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=i?e.d=i:m(n).invalidWeekday=t}),Q(["d","e","E"],function(t,e,n,r){e[r]=b(t)});
// LOCALES
var xi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Di="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Si="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ti=oi,ji=oi,Ei=oi;R("H",["HH",2],0,"hour"),R("h",["hh",2],0,Ut),R("k",["kk",2],0,Jt),R("hmm",0,0,function(){return""+Ut.apply(this)+z(this.minutes(),2)}),R("hmmss",0,0,function(){return""+Ut.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+z(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)}),qt("a",!0),qt("A",!1),
// ALIASES
C("hour","h"),
// PRIORITY
W("hour",13),q("a",Gt),q("A",Gt),q("H",Kr),q("h",Kr),q("k",Kr),q("HH",Kr,Ur),q("hh",Kr,Ur),q("kk",Kr,Ur),q("hmm",$r),q("hmmss",Zr),q("Hmm",$r),q("Hmmss",Zr),Z(["H","HH"],fi),Z(["k","kk"],function(t,e,n){var r=b(t);e[fi]=24===r?0:r}),Z(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),Z(["h","hh"],function(t,e,n){e[fi]=b(t),m(n).bigHour=!0}),Z("hmm",function(t,e,n){var r=t.length-2;e[fi]=b(t.substr(0,r)),e[hi]=b(t.substr(r)),m(n).bigHour=!0}),Z("hmmss",function(t,e,n){var r=t.length-4,i=t.length-2;e[fi]=b(t.substr(0,r)),e[hi]=b(t.substr(r,2)),e[mi]=b(t.substr(i)),m(n).bigHour=!0}),Z("Hmm",function(t,e,n){var r=t.length-2;e[fi]=b(t.substr(0,r)),e[hi]=b(t.substr(r))}),Z("Hmmss",function(t,e,n){var r=t.length-4,i=t.length-2;e[fi]=b(t.substr(0,r)),e[hi]=b(t.substr(r,2)),e[mi]=b(t.substr(i))});var Oi,Hi=/[ap]\.?m?\.?/i,Pi=rt("Hours",!0),Ai={calendar:Pr,longDateFormat:Ar,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:Cr,relativeTime:Fr,months:bi,monthsShort:Li,week:Yi,weekdays:xi,weekdaysMin:Si,weekdaysShort:Di,meridiemParse:Hi},Ci={},Fi={},Ii=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Wi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ni=/Z|[+-]\d\d(?::?\d\d)?/,zi=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ri=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Bi=/^\/?Date\((\-?\d+)/i,Vi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Ui={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};e.createFromInputFallback=w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
e.ISO_8601=function(){},
// constant that refers to the RFC 2822 form
e.RFC_2822=function(){};var Ji=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:p()}),qi=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:p()}),Gi=function(){return Date.now?Date.now():+new Date},Ki=["year","quarter","month","week","day","hour","minute","second","millisecond"];Ce("Z",":"),Ce("ZZ",""),
// PARSING
q("Z",ii),q("ZZ",ii),Z(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Fe(ii,t)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var $i=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
e.updateOffset=function(){};
// ASP.NET json date format regex
var Zi=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Qi=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Ze.fn=He.prototype,Ze.invalid=Oe;var Xi=en(1,"add"),ta=en(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ea=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});
// FORMATTING
R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Fn("gggg","weekYear"),Fn("ggggg","weekYear"),Fn("GGGG","isoWeekYear"),Fn("GGGGG","isoWeekYear"),
// ALIASES
C("weekYear","gg"),C("isoWeekYear","GG"),
// PRIORITY
W("weekYear",1),W("isoWeekYear",1),
// PARSING
q("G",ni),q("g",ni),q("GG",Kr,Ur),q("gg",Kr,Ur),q("GGGG",Xr,qr),q("gggg",Xr,qr),q("GGGGG",ti,Gr),q("ggggg",ti,Gr),Q(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,r){e[r.substr(0,2)]=b(t)}),Q(["gg","GG"],function(t,n,r,i){n[i]=e.parseTwoDigitYear(t)}),
// FORMATTING
R("Q",0,"Qo","quarter"),
// ALIASES
C("quarter","Q"),
// PRIORITY
W("quarter",7),
// PARSING
q("Q",Vr),Z("Q",function(t,e){e[di]=3*(b(t)-1)}),
// FORMATTING
R("D",["DD",2],"Do","date"),
// ALIASES
C("date","D"),
// PRIORITY
W("date",9),
// PARSING
q("D",Kr),q("DD",Kr,Ur),q("Do",function(t,e){
// TODO: Remove "ordinalParse" fallback in next major release.
return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),Z(["D","DD"],ci),Z("Do",function(t,e){e[ci]=b(t.match(Kr)[0])});
// MOMENTS
var na=rt("Date",!0);
// FORMATTING
R("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
C("dayOfYear","DDD"),
// PRIORITY
W("dayOfYear",4),
// PARSING
q("DDD",Qr),q("DDDD",Jr),Z(["DDD","DDDD"],function(t,e,n){n._dayOfYear=b(t)}),
// FORMATTING
R("m",["mm",2],0,"minute"),
// ALIASES
C("minute","m"),
// PRIORITY
W("minute",14),
// PARSING
q("m",Kr),q("mm",Kr,Ur),Z(["m","mm"],hi);
// MOMENTS
var ra=rt("Minutes",!1);
// FORMATTING
R("s",["ss",2],0,"second"),
// ALIASES
C("second","s"),
// PRIORITY
W("second",15),
// PARSING
q("s",Kr),q("ss",Kr,Ur),Z(["s","ss"],mi);
// MOMENTS
var ia=rt("Seconds",!1);
// FORMATTING
R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
C("millisecond","ms"),
// PRIORITY
W("millisecond",16),
// PARSING
q("S",Qr,Vr),q("SS",Qr,Ur),q("SSS",Qr,Jr);var aa;for(aa="SSSS";aa.length<=9;aa+="S")q(aa,ei);for(aa="S";aa.length<=9;aa+="S")Z(aa,Jn);
// MOMENTS
var oa=rt("Milliseconds",!1);
// FORMATTING
R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var sa=y.prototype;sa.add=Xi,sa.calendar=an,sa.clone=on,sa.diff=hn,sa.endOf=xn,sa.format=yn,sa.from=vn,sa.fromNow=Mn,sa.to=bn,sa.toNow=Ln,sa.get=ot,sa.invalidAt=An,sa.isAfter=sn,sa.isBefore=un,sa.isBetween=ln,sa.isSame=dn,sa.isSameOrAfter=cn,sa.isSameOrBefore=fn,sa.isValid=Hn,sa.lang=ea,sa.locale=kn,sa.localeData=wn,sa.max=qi,sa.min=Ji,sa.parsingFlags=Pn,sa.set=st,sa.startOf=Yn,sa.subtract=ta,sa.toArray=jn,sa.toObject=En,sa.toDate=Tn,sa.toISOString=pn,sa.inspect=gn,sa.toJSON=On,sa.toString=_n,sa.unix=Sn,sa.valueOf=Dn,sa.creationData=Cn,sa.year=vi,sa.isLeapYear=nt,sa.weekYear=In,sa.isoWeekYear=Wn,sa.quarter=sa.quarters=Vn,sa.month=_t,sa.daysInMonth=pt,sa.week=sa.weeks=Tt,sa.isoWeek=sa.isoWeeks=jt,sa.weeksInYear=zn,sa.isoWeeksInYear=Nn,sa.date=na,sa.day=sa.days=It,sa.weekday=Wt,sa.isoWeekday=Nt,sa.dayOfYear=Un,sa.hour=sa.hours=Pi,sa.minute=sa.minutes=ra,sa.second=sa.seconds=ia,sa.millisecond=sa.milliseconds=oa,sa.utcOffset=Ne,sa.utc=Re,sa.local=Be,sa.parseZone=Ve,sa.hasAlignedHourOffset=Ue,sa.isDST=Je,sa.isLocal=Ge,sa.isUtcOffset=Ke,sa.isUtc=$e,sa.isUTC=$e,sa.zoneAbbr=qn,sa.zoneName=Gn,sa.dates=w("dates accessor is deprecated. Use date instead.",na),sa.months=w("months accessor is deprecated. Use month instead",_t),sa.years=w("years accessor is deprecated. Use year instead",vi),sa.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ze),sa.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",qe);var ua=T.prototype;ua.calendar=j,ua.longDateFormat=E,ua.invalidDate=O,ua.ordinal=H,ua.preparse=Zn,ua.postformat=Zn,ua.relativeTime=P,ua.pastFuture=A,ua.set=D,ua.months=dt,ua.monthsShort=ct,ua.monthsParse=ht,ua.monthsRegex=yt,ua.monthsShortRegex=gt,ua.week=xt,ua.firstDayOfYear=St,ua.firstDayOfWeek=Dt,ua.weekdays=Ht,ua.weekdaysMin=At,ua.weekdaysShort=Pt,ua.weekdaysParse=Ft,ua.weekdaysRegex=zt,ua.weekdaysShortRegex=Rt,ua.weekdaysMinRegex=Bt,ua.isPM=Kt,ua.meridiem=$t,te("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===b(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),
// Side effect imports
e.lang=w("moment.lang is deprecated. Use moment.locale instead.",te),e.langData=w("moment.langData is deprecated. Use moment.localeData instead.",re);var la=Math.abs,da=pr("ms"),ca=pr("s"),fa=pr("m"),ha=pr("h"),ma=pr("d"),_a=pr("w"),pa=pr("M"),ga=pr("y"),ya=vr("milliseconds"),va=vr("seconds"),Ma=vr("minutes"),ba=vr("hours"),La=vr("days"),ka=vr("months"),wa=vr("years"),Ya=Math.round,xa={ss:44,// a few seconds to seconds
s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},Da=Math.abs,Sa=He.prototype;
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
// This is done to register the method called with moment()
// without creating circular dependencies.
// currently HTML5 input type only supports 24-hour formats
return Sa.isValid=Ee,Sa.abs=or,Sa.add=ur,Sa.subtract=lr,Sa.as=mr,Sa.asMilliseconds=da,Sa.asSeconds=ca,Sa.asMinutes=fa,Sa.asHours=ha,Sa.asDays=ma,Sa.asWeeks=_a,Sa.asMonths=pa,Sa.asYears=ga,Sa.valueOf=_r,Sa._bubble=cr,Sa.clone=gr,Sa.get=yr,Sa.milliseconds=ya,Sa.seconds=va,Sa.minutes=Ma,Sa.hours=ba,Sa.days=La,Sa.weeks=Mr,Sa.months=ka,Sa.years=wa,Sa.humanize=Yr,Sa.toISOString=Dr,Sa.toString=Dr,Sa.toJSON=Dr,Sa.locale=kn,Sa.localeData=wn,Sa.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Dr),Sa.lang=ea,R("X",0,0,"unix"),R("x",0,0,"valueOf"),q("x",ni),q("X",ai),Z("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),Z("x",function(t,e,n){n._d=new Date(b(t))}),e.version="2.22.2",function(t){Sr=t}(xe),e.fn=sa,e.min=Se,e.max=Te,e.now=Gi,e.utc=f,e.unix=Kn,e.months=er,e.isDate=u,e.locale=te,e.invalid=p,e.duration=Ze,e.isMoment=v,e.weekdays=rr,e.parseZone=$n,e.localeData=re,e.isDuration=Pe,e.monthsShort=nr,e.weekdaysMin=ar,e.defineLocale=ee,e.updateLocale=ne,e.locales=ie,e.weekdaysShort=ir,e.normalizeUnits=F,e.relativeTimeRounding=kr,e.relativeTimeThreshold=wr,e.calendarFormat=rn,e.prototype=sa,e.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",// <input type="datetime-local" />
DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",// <input type="datetime-local" step="1" />
DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",// <input type="datetime-local" step="0.001" />
DATE:"YYYY-MM-DD",// <input type="date" />
TIME:"HH:mm",// <input type="time" />
TIME_SECONDS:"HH:mm:ss",// <input type="time" step="1" />
TIME_MS:"HH:mm:ss.SSS",// <input type="time" step="0.001" />
WEEK:"YYYY-[W]WW",// <input type="week" />
MONTH:"YYYY-MM"},e})}).call(e,n(101)(t))},/* 2 */
/***/
function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},/* 3 */
/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 4 */
,/* 5 */
/***/
function(t,e,n){"use strict";t.exports=n(107),t.exports.easing=n(583),t.exports.canvas=n(584),t.exports.options=n(585)},/* 6 */
,/* 7 */
/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/* 8 */
/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/* 9 */
/***/
function(t,e,n){"use strict";var r=n(5);t.exports={/**
	 * @private
	 */
_set:function(t,e){return r.merge(this[t]||(this[t]={}),e)}}},/* 10 */
/***/
function(t,e,n){var r=n(108)("wks"),i=n(60),a=n(3).Symbol,o="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=o&&a[t]||(o?a:i)("Symbol."+t))}).store=r},/* 11 */
/***/
function(t,e,n){
// Thank's IE8 for his funny defineProperty
t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 12 */
/***/
function(t,e,n){var r=n(2),i=n(351),a=n(36),o=Object.defineProperty;e.f=n(11)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},/* 13 */
/***/
function(t,e,n){
// 7.1.15 ToLength
var r=n(38),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},/* 14 */
/***/
function(t,e,n){
// 7.1.13 ToObject(argument)
var r=n(37);t.exports=function(t){return Object(r(t))}},/* 15 */
/***/
function(t,e,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){
// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,i=0,a=Math.min(n,r);i<a;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function a(t){return Object.prototype.toString.call(t)}function o(t){return!i(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function s(t){if(M.isFunction(t)){if(k)return t.name;var e=t.toString(),n=e.match(Y);return n&&n[1]}}function u(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function l(t){if(k||!M.isFunction(t))return M.inspect(t);var e=s(t);return"[Function"+(e?": "+e:"")+"]"}function d(t){return u(l(t.actual),128)+" "+t.operator+" "+u(l(t.expected),128)}
// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function c(t,e,n,r,i){throw new w.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:i})}
// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.
function f(t,e){t||c(t,!0,e,"==",w.ok)}function h(t,e,n,s){
// 7.1. All identical values are equivalent, as determined by ===.
if(t===e)return!0;if(i(t)&&i(e))return 0===r(t,e);if(M.isDate(t)&&M.isDate(e))return t.getTime()===e.getTime();if(M.isRegExp(t)&&M.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(o(t)&&o(e)&&a(t)===a(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;s=s||{actual:[],expected:[]};var u=s.actual.indexOf(t);return-1!==u&&u===s.expected.indexOf(e)||(s.actual.push(t),s.expected.push(e),_(t,e,n,s))}return n?t===e:t==e}function m(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function _(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;
// if one is a primitive, the other must be same
if(M.isPrimitive(t)||M.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=m(t),a=m(e);if(i&&!a||!i&&a)return!1;if(i)return t=L.call(t),e=L.call(e),h(t,e,n);var o,s,u=x(t),l=x(e);
// having the same number of owned properties (keys incorporates
// hasOwnProperty)
if(u.length!==l.length)return!1;
//~~~cheap key test
for(
//the same set of keys (although not necessarily the same order),
u.sort(),l.sort(),s=u.length-1;s>=0;s--)if(u[s]!==l[s])return!1;
//equivalent values for every corresponding key, and
//~~~possibly expensive deep test
for(s=u.length-1;s>=0;s--)if(o=u[s],!h(t[o],e[o],n,r))return!1;return!0}function p(t,e,n){h(t,e,!0)&&c(t,e,n,"notDeepStrictEqual",p)}function g(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function y(t){var e;try{t()}catch(t){e=t}return e}function v(t,e,n,r){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=y(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!i&&c(i,n,"Missing expected exception"+r);var a="string"==typeof r,o=!t&&M.isError(i),s=!t&&i&&!n;if((o&&a&&g(i,n)||s)&&c(i,n,"Got unwanted exception"+r),t&&i&&n&&!g(i,n)||!t&&i)throw i}
// based on node assert, original notice:
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var M=n(452),b=Object.prototype.hasOwnProperty,L=Array.prototype.slice,k=function(){return"foo"===function(){}.name}(),w=t.exports=f,Y=/\s*function\s+([^\(\s]*)\s*/;w.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=d(this),this.generatedMessage=!0);var e=t.stackStartFunction||c;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{
// non v8 browsers so we can have a stacktrace
var n=new Error;if(n.stack){var r=n.stack,i=s(e),a=r.indexOf("\n"+i);if(a>=0){
// once we have located the function frame
// we need to strip out everything before it (and its line)
var o=r.indexOf("\n",a+1);r=r.substring(o+1)}this.stack=r}}},
// assert.AssertionError instanceof Error
M.inherits(w.AssertionError,Error),
// EXTENSION! allows for well behaved errors defined elsewhere.
w.fail=c,w.ok=f,
// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);
w.equal=function(t,e,n){t!=e&&c(t,e,n,"==",w.equal)},
// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);
w.notEqual=function(t,e,n){t==e&&c(t,e,n,"!=",w.notEqual)},
// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);
w.deepEqual=function(t,e,n){h(t,e,!1)||c(t,e,n,"deepEqual",w.deepEqual)},w.deepStrictEqual=function(t,e,n){h(t,e,!0)||c(t,e,n,"deepStrictEqual",w.deepStrictEqual)},
// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);
w.notDeepEqual=function(t,e,n){h(t,e,!1)&&c(t,e,n,"notDeepEqual",w.notDeepEqual)},w.notDeepStrictEqual=p,
// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);
w.strictEqual=function(t,e,n){t!==e&&c(t,e,n,"===",w.strictEqual)},
// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
w.notStrictEqual=function(t,e,n){t===e&&c(t,e,n,"!==",w.notStrictEqual)},
// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);
w.throws=function(t,/*optional*/e,/*optional*/n){v(!0,t,e,n)},
// EXTENSION! This is annoying to write outside this module.
w.doesNotThrow=function(t,/*optional*/e,/*optional*/n){v(!1,t,e,n)},w.ifError=function(t){if(t)throw t};var x=Object.keys||function(t){var e=[];for(var n in t)b.call(t,n)&&e.push(n);return e}}).call(e,n(84))},/* 16 */
/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/* 17 */
/***/
function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},/* 18 */
/***/
function(t,e,n){"use strict";e.__esModule=!0;var r=n(400),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},/* 19 */
/***/
function(t,e,n){"use strict";e.__esModule=!0;var r=n(126),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},/* 20 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(428),a=r(i),o=n(432),s=r(o),u=n(126),l=r(u);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,l.default)(e)));t.prototype=(0,s.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(t,e):t.__proto__=e)}},/* 21 */
/***/
function(t,e,n){var r=n(12),i=n(59);t.exports=n(11)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},/* 22 */
/***/
function(t,e,n){var r=n(3),i=n(21),a=n(25),o=n(60)("src"),s=Function.toString,u=(""+s).split("toString");n(31).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(a(n,"name")||i(n,"name",e)),t[e]!==n&&(l&&(a(n,o)||i(n,o,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},/* 23 */
/***/
function(t,e,n){var r=n(0),i=n(7),a=n(37),o=/"/g,s=function(t,e,n,r){var i=String(a(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},/* 24 */
/***/
function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},/* 25 */
/***/
function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},/* 26 */
/***/
function(t,e,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(88),i=n(37);t.exports=function(t){return r(i(t))}},/* 27 */
/***/
function(t,e,n){var r=n(89),i=n(59),a=n(26),o=n(36),s=n(25),u=n(351),l=Object.getOwnPropertyDescriptor;e.f=n(11)?l:function(t,e){if(t=a(t),e=o(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},/* 28 */
/***/
function(t,e,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(25),i=n(14),a=n(154)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},/* 29 */
,/* 30 */
/***/
function(t,e,n){var r=n(202),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},/* 31 */
/***/
function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},/* 32 */
/***/
function(t,e,n){
// optional / simple context binding
var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},/* 33 */
/***/
function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},/* 34 */
/***/
function(t,e,n){"use strict";var r=n(7);t.exports=function(t,e){return!!t&&r(function(){
// eslint-disable-next-line no-useless-call
e?t.call(null,function(){},1):t.call(null)})}},/* 35 */
/***/
function(t,e,n){"use strict";function r(t,e,n,r){var a,o,s,u,l,d,c,f,h,m=Object.keys(n);for(a=0,o=m.length;a<o;++a)if(s=m[a],d=n[s],
// if a value is added to the model after pivot() has been called, the view
// doesn't contain it, so let's initialize the view to the target value.
e.hasOwnProperty(s)||(e[s]=d),(u=e[s])!==d&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=u),l=t[s],(c=typeof d)===typeof l)if("string"===c){if(f=i(l),f.valid&&(h=i(d),h.valid)){e[s]=h.mix(f,r).rgbString();continue}}else if("number"===c&&isFinite(l)&&isFinite(d)){e[s]=l+(d-l)*r;continue}e[s]=d}}var i=n(224),a=n(5),o=function(t){a.extend(this,t),this.initialize.apply(this,arguments)};a.extend(o.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=a.clone(t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;
// No animation -> No Transition
// No animation -> No Transition
return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),r(i,a,n,t),e):(e._view=n,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return a.isNumber(this._model.x)&&a.isNumber(this._model.y)}}),o.extend=a.inherits,t.exports=o},/* 36 */
/***/
function(t,e,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},/* 37 */
/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/* 38 */
/***/
function(t,e){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},/* 39 */
/***/
function(t,e,n){
// most Object methods by ES6 should accept primitives
var r=n(0),i=n(31),a=n(7);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",o)}},/* 40 */
/***/
function(t,e,n){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var r=n(32),i=n(88),a=n(14),o=n(13),s=n(171);t.exports=function(t,e){var n=1==t,u=2==t,l=3==t,d=4==t,c=6==t,f=5==t||c,h=e||s;return function(e,s,m){for(var _,p,g=a(e),y=i(g),v=r(s,m,3),M=o(y.length),b=0,L=n?h(e,M):u?h(e,0):void 0;M>b;b++)if((f||b in y)&&(_=y[b],p=v(_,b,g),t))if(n)L[b]=p;else if(p)switch(t){case 3:return!0;// some
case 5:return _;// find
case 6:return b;// findIndex
case 2:L.push(_)}else if(d)return!1;return c?-1:l||d?d:L}}},/* 41 */
,/* 42 */
/***/
function(t,e,n){"use strict";if(n(11)){var r=n(49),i=n(3),a=n(7),o=n(0),s=n(119),u=n(177),l=n(32),d=n(66),c=n(59),f=n(21),h=n(68),m=n(38),_=n(13),p=n(377),g=n(62),y=n(36),v=n(25),M=n(90),b=n(8),L=n(14),k=n(168),w=n(63),Y=n(28),x=n(64).f,D=n(170),S=n(60),T=n(10),j=n(40),E=n(109),O=n(116),H=n(173),P=n(79),A=n(113),C=n(65),F=n(172),I=n(367),W=n(12),N=n(27),z=W.f,R=N.f,B=i.RangeError,V=i.TypeError,U=i.Uint8Array,J=Array.prototype,q=u.ArrayBuffer,G=u.DataView,K=j(0),$=j(2),Z=j(3),Q=j(4),X=j(5),tt=j(6),et=E(!0),nt=E(!1),rt=H.values,it=H.keys,at=H.entries,ot=J.lastIndexOf,st=J.reduce,ut=J.reduceRight,lt=J.join,dt=J.sort,ct=J.slice,ft=J.toString,ht=J.toLocaleString,mt=T("iterator"),_t=T("toStringTag"),pt=S("typed_constructor"),gt=S("def_constructor"),yt=s.CONSTR,vt=s.TYPED,Mt=s.VIEW,bt=j(1,function(t,e){return xt(O(t,t[gt]),e)}),Lt=a(function(){
// eslint-disable-next-line no-undef
return 1===new U(new Uint16Array([1]).buffer)[0]}),kt=!!U&&!!U.prototype.set&&a(function(){new U(1).set({})}),wt=function(t,e){var n=m(t);if(n<0||n%e)throw B("Wrong offset!");return n},Yt=function(t){if(b(t)&&vt in t)return t;throw V(t+" is not a typed array!")},xt=function(t,e){if(!(b(t)&&pt in t))throw V("It is not a typed array constructor!");return new t(e)},Dt=function(t,e){return St(O(t,t[gt]),e)},St=function(t,e){for(var n=0,r=e.length,i=xt(t,r);r>n;)i[n]=e[n++];return i},Tt=function(t,e,n){z(t,e,{get:function(){return this._d[n]}})},jt=function(t){var e,n,r,i,a,o,s=L(t),u=arguments.length,d=u>1?arguments[1]:void 0,c=void 0!==d,f=D(s);if(void 0!=f&&!k(f)){for(o=f.call(s),r=[],e=0;!(a=o.next()).done;e++)r.push(a.value);s=r}for(c&&u>2&&(d=l(d,arguments[2],2)),e=0,n=_(s.length),i=xt(this,n);n>e;e++)i[e]=c?d(s[e],e):s[e];return i},Et=function(){for(var t=0,e=arguments.length,n=xt(this,e);e>t;)n[t]=arguments[t++];return n},Ot=!!U&&a(function(){ht.call(new U(1))}),Ht=function(){return ht.apply(Ot?ct.call(Yt(this)):Yt(this),arguments)},Pt={copyWithin:function(t,e){return I.call(Yt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return Q(Yt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){// eslint-disable-line no-unused-vars
return F.apply(Yt(this),arguments)},filter:function(t){return Dt(this,$(Yt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return X(Yt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Yt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){K(Yt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Yt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Yt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){// eslint-disable-line no-unused-vars
return lt.apply(Yt(this),arguments)},lastIndexOf:function(t){// eslint-disable-line no-unused-vars
return ot.apply(Yt(this),arguments)},map:function(t){return bt(Yt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){// eslint-disable-line no-unused-vars
return st.apply(Yt(this),arguments)},reduceRight:function(t){// eslint-disable-line no-unused-vars
return ut.apply(Yt(this),arguments)},reverse:function(){for(var t,e=this,n=Yt(e).length,r=Math.floor(n/2),i=0;i<r;)t=e[i],e[i++]=e[--n],e[n]=t;return e},some:function(t){return Z(Yt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return dt.call(Yt(this),t)},subarray:function(t,e){var n=Yt(this),r=n.length,i=g(t,r);return new(O(n,n[gt]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,_((void 0===e?r:g(e,r))-i))}},At=function(t,e){return Dt(this,ct.call(Yt(this),t,e))},Ct=function(t){Yt(this);var e=wt(arguments[1],1),n=this.length,r=L(t),i=_(r.length),a=0;if(i+e>n)throw B("Wrong length!");for(;a<i;)this[e+a]=r[a++]},Ft={entries:function(){return at.call(Yt(this))},keys:function(){return it.call(Yt(this))},values:function(){return rt.call(Yt(this))}},It=function(t,e){return b(t)&&t[vt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Wt=function(t,e){return It(t,e=y(e,!0))?c(2,t[e]):R(t,e)},Nt=function(t,e,n){return!(It(t,e=y(e,!0))&&b(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?z(t,e,n):(t[e]=n.value,t)};yt||(N.f=Wt,W.f=Nt),o(o.S+o.F*!yt,"Object",{getOwnPropertyDescriptor:Wt,defineProperty:Nt}),a(function(){ft.call({})})&&(ft=ht=function(){return lt.call(this)});var zt=h({},Pt);h(zt,Ft),f(zt,mt,Ft.values),h(zt,{slice:At,set:Ct,constructor:function(){},toString:ft,toLocaleString:Ht}),Tt(zt,"buffer","b"),Tt(zt,"byteOffset","o"),Tt(zt,"byteLength","l"),Tt(zt,"length","e"),z(zt,_t,{get:function(){return this[vt]}}),
// eslint-disable-next-line max-statements
t.exports=function(t,e,n,u){u=!!u;var l=t+(u?"Clamped":"")+"Array",c="get"+t,h="set"+t,m=i[l],g=m||{},y=m&&Y(m),v=!m||!s.ABV,L={},k=m&&m.prototype,D=function(t,n){var r=t._d;return r.v[c](n*e+r.o,Lt)},S=function(t,n,r){var i=t._d;u&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[h](n*e+i.o,r,Lt)},T=function(t,e){z(t,e,{get:function(){return D(this,e)},set:function(t){return S(this,e,t)},enumerable:!0})};v?(m=n(function(t,n,r,i){d(t,m,l,"_d");var a,o,s,u,c=0,h=0;if(b(n)){if(!(n instanceof q||"ArrayBuffer"==(u=M(n))||"SharedArrayBuffer"==u))return vt in n?St(m,n):jt.call(m,n);a=n,h=wt(r,e);var g=n.byteLength;if(void 0===i){if(g%e)throw B("Wrong length!");if((o=g-h)<0)throw B("Wrong length!")}else if((o=_(i)*e)+h>g)throw B("Wrong length!");s=o/e}else s=p(n),o=s*e,a=new q(o);for(f(t,"_d",{b:a,o:h,l:o,e:s,v:new G(a)});c<s;)T(t,c++)}),k=m.prototype=w(zt),f(k,"constructor",m)):a(function(){m(1)})&&a(function(){new m(-1)})&&A(function(t){new m,// eslint-disable-line no-new
new m(null),// eslint-disable-line no-new
new m(1.5),// eslint-disable-line no-new
new m(t)},!0)||(m=n(function(t,n,r,i){d(t,m,l);var a;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return b(n)?n instanceof q||"ArrayBuffer"==(a=M(n))||"SharedArrayBuffer"==a?void 0!==i?new g(n,wt(r,e),i):void 0!==r?new g(n,wt(r,e)):new g(n):vt in n?St(m,n):jt.call(m,n):new g(p(n))}),K(y!==Function.prototype?x(g).concat(x(y)):x(g),function(t){t in m||f(m,t,g[t])}),m.prototype=k,r||(k.constructor=m));var j=k[mt],E=!!j&&("values"==j.name||void 0==j.name),O=Ft.values;f(m,pt,!0),f(k,vt,l),f(k,Mt,!0),f(k,gt,m),(u?new m(1)[_t]==l:_t in k)||z(k,_t,{get:function(){return l}}),L[l]=m,o(o.G+o.W+o.F*(m!=g),L),o(o.S,l,{BYTES_PER_ELEMENT:e}),o(o.S+o.F*a(function(){g.of.call(m,1)}),l,{from:jt,of:Et}),"BYTES_PER_ELEMENT"in k||f(k,"BYTES_PER_ELEMENT",e),o(o.P,l,Pt),C(l),o(o.P+o.F*kt,l,{set:Ct}),o(o.P+o.F*!E,l,Ft),r||k.toString==ft||(k.toString=ft),o(o.P+o.F*a(function(){new m(1).slice()}),l,{slice:At}),o(o.P+o.F*(a(function(){return[1,2].toLocaleString()!=new m([1,2]).toLocaleString()})||!a(function(){k.toLocaleString.call([1,2])})),l,{toLocaleString:Ht}),P[l]=E?j:O,r||E||f(k,mt,O)}}else t.exports=function(){}},/* 43 */
/***/
function(t,e,n){var r=n(372),i=n(0),a=n(108)("metadata"),o=a.store||(a.store=new(n(375))),s=function(t,e,n){var i=o.get(t);if(!i){if(!n)return;o.set(t,i=new r)}var a=i.get(e);if(!a){if(!n)return;i.set(e,a=new r)}return a},u=function(t,e,n){var r=s(e,n,!1);return void 0!==r&&r.has(t)},l=function(t,e,n){var r=s(e,n,!1);return void 0===r?void 0:r.get(t)},d=function(t,e,n,r){s(n,r,!0).set(t,e)},c=function(t,e){var n=s(t,e,!1),r=[];return n&&n.forEach(function(t,e){r.push(e)}),r},f=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},h=function(t){i(i.S,"Reflect",t)};t.exports={store:o,map:s,has:u,get:l,set:d,keys:c,key:f,exp:h}},/* 44 */
,/* 45 */
/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 46 */
/***/
function(t,e){/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},/* 47 */
/***/
function(t,e,n){"use strict";t.exports={},t.exports.Arc=n(591),t.exports.Line=n(592),t.exports.Point=n(593),t.exports.Rectangle=n(594)},/* 48 */
/***/
function(t,e,n){var r=n(60)("meta"),i=n(8),a=n(25),o=n(12).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(7)(function(){return u(Object.preventExtensions({}))}),d=function(t){o(t,r,{value:{i:"O"+ ++s,// object ID
w:{}}})},c=function(t,e){
// return primitive with prefix
if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){
// can't set metadata to uncaught frozen object
if(!u(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
d(t)}return t[r].i},f=function(t,e){if(!a(t,r)){
// can't set metadata to uncaught frozen object
if(!u(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
d(t)}return t[r].w},h=function(t){return l&&m.NEED&&u(t)&&!a(t,r)&&d(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:c,getWeak:f,onFreeze:h}},/* 49 */
/***/
function(t,e){t.exports=!1},/* 50 */
/***/
function(t,e,n){
// 22.1.3.31 Array.prototype[@@unscopables]
var r=n(10)("unscopables"),i=Array.prototype;void 0==i[r]&&n(21)(i,r,{}),t.exports=function(t){i[r][t]=!0}},/* 51 */
/***/
function(t,e,n){var r=n(45),i=n(24),a=n(182),o=n(70),s=n(54),u=function(t,e,n){var l,d,c,f=t&u.F,h=t&u.G,m=t&u.S,_=t&u.P,p=t&u.B,g=t&u.W,y=h?i:i[e]||(i[e]={}),v=y.prototype,M=h?r:m?r[e]:(r[e]||{}).prototype;h&&(n=e);for(l in n)
// contains in native
(d=!f&&M&&void 0!==M[l])&&s(y,l)||(
// export native or passed
c=d?M[l]:n[l],
// prevent global pollution for namespaces
y[l]=h&&"function"!=typeof M[l]?n[l]:p&&d?a(c,r):g&&M[l]==c?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):_&&"function"==typeof c?a(Function.call,c):c,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
_&&((y.virtual||(y.virtual={}))[l]=c,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
t&u.R&&v&&!v[l]&&o(v,l,c)))};
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library`
t.exports=u},/* 52 */
/***/
function(t,e,n){var r=n(81),i=n(183),a=n(125),o=Object.defineProperty;e.f=n(53)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},/* 53 */
/***/
function(t,e,n){
// Thank's IE8 for his funny defineProperty
t.exports=!n(72)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 54 */
/***/
function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},/* 55 */
/***/
function(t,e,n){/**
 * Noop function.
 */
function r(){}/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */
function i(t,e,n){function i(){u.parentNode&&u.parentNode.removeChild(u),window[c]=r,l&&clearTimeout(l)}function s(){window[c]&&i()}"function"==typeof e&&(n=e,e={}),e||(e={});var u,l,d=e.prefix||"__jp",c=e.name||d+o++,f=e.param||"callback",h=null!=e.timeout?e.timeout:6e4,m=encodeURIComponent,_=document.getElementsByTagName("script")[0]||document.head;
// add qs component
// create script
return h&&(l=setTimeout(function(){i(),n&&n(new Error("Timeout"))},h)),window[c]=function(t){a("jsonp got",t),i(),n&&n(null,t)},t+=(~t.indexOf("?")?"&":"?")+f+"="+m(c),t=t.replace("?&","?"),a('jsonp req "%s"',t),u=document.createElement("script"),u.src=t,_.parentNode.insertBefore(u,_),s}/**
 * Module dependencies
 */
var a=n(439)("jsonp");/**
 * Module exports.
 */
t.exports=i;/**
 * Callback index.
 */
var o=0},/* 56 */
/***/
function(t,e,n){/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function r(t,e){var n=a(t,e);return i(n)?n:void 0}var i=n(464),a=n(469);t.exports=r},/* 57 */
/***/
function(t,e){/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function n(t){return null!=t&&"object"==typeof t}t.exports=n},/* 58 */
/***/
function(t,e){/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var n=Array.isArray;t.exports=n},/* 59 */
/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/* 60 */
/***/
function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},/* 61 */
/***/
function(t,e,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(353),i=n(155);t.exports=Object.keys||function(t){return r(t,i)}},/* 62 */
/***/
function(t,e,n){var r=n(38),i=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):a(t,e)}},/* 63 */
/***/
function(t,e,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(2),i=n(354),a=n(155),o=n(154)("IE_PROTO"),s=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=n(152)("iframe"),r=a.length;for(e.style.display="none",n(156).appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[a[r]];return u()};t.exports=Object.create||function(t,e){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},/* 64 */
/***/
function(t,e,n){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var r=n(353),i=n(155).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},/* 65 */
/***/
function(t,e,n){"use strict";var r=n(3),i=n(12),a=n(11),o=n(10)("species");t.exports=function(t){var e=r[t];a&&e&&!e[o]&&i.f(e,o,{configurable:!0,get:function(){return this}})}},/* 66 */
/***/
function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},/* 67 */
/***/
function(t,e,n){var r=n(32),i=n(365),a=n(168),o=n(2),s=n(13),u=n(170),l={},d={},e=t.exports=function(t,e,n,c,f){var h,m,_,p,g=f?function(){return t}:u(t),y=r(n,c,e?2:1),v=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");
// fast case for arrays with default iterator
if(a(g)){for(h=s(t.length);h>v;v++)if((p=e?y(o(m=t[v])[0],m[1]):y(t[v]))===l||p===d)return p}else for(_=g.call(t);!(m=_.next()).done;)if((p=i(_,y,m.value,e))===l||p===d)return p};e.BREAK=l,e.RETURN=d},/* 68 */
/***/
function(t,e,n){var r=n(22);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},/* 69 */
,/* 70 */
/***/
function(t,e,n){var r=n(52),i=n(92);t.exports=n(53)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},/* 71 */
/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/* 72 */
/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/* 73 */
/***/
function(t,e,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(188),i=n(128);t.exports=function(t){return r(i(t))}},/* 74 */
/***/
function(t,e,n){var r=n(132)("wks"),i=n(94),a=n(45).Symbol,o="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=o&&a[t]||(o?a:i)("Symbol."+t))}).store=r},/* 75 */
/***/
function(t,e,n){/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function r(t){return null==t?void 0===t?u:s:l&&l in Object(t)?a(t):o(t)}var i=n(85),a=n(465),o=n(466),s="[object Null]",u="[object Undefined]",l=i?i.toStringTag:void 0;t.exports=r},/* 76 */
/***/
function(t,e,n){/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function r(t,e,n,r){var o=!n;n||(n={});for(var s=-1,u=e.length;++s<u;){var l=e[s],d=r?r(n[l],t[l],l,n,t):void 0;void 0===d&&(d=t[l]),o?a(n,l,d):i(n,l,d)}return n}var i=n(141),a=n(199);t.exports=r},/* 77 */
/***/
function(t,e,n){var r=n(12).f,i=n(25),a=n(10)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},/* 78 */
/***/
function(t,e,n){var r=n(0),i=n(37),a=n(7),o=n(158),s="["+o+"]",u="​",l=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),c=function(t,e,n){var i={},s=a(function(){return!!o[t]()||u[t]()!=u}),l=i[t]=s?e(f):o[t];n&&(i[n]=l),r(r.P+r.F*s,"String",i)},f=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=c},/* 79 */
/***/
function(t,e){t.exports={}},/* 80 */
/***/
function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},/* 81 */
/***/
function(t,e,n){var r=n(71);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},/* 82 */
/***/
function(t,e,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(187),i=n(133);t.exports=Object.keys||function(t){return r(t,i)}},/* 83 */
/***/
function(t,e,n){"use strict";e.__esModule=!0;var r=n(442),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},/* 84 */
/***/
function(t,e){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(t){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
t.exports=n},/* 85 */
/***/
function(t,e,n){var r=n(30),i=r.Symbol;t.exports=i},/* 86 */
/***/
function(t,e,n){"use strict";function r(t,e){return a.where(t,function(t){return t.position===e})}function i(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,n){var r=e?n:t,i=e?t:n;return r.weight===i.weight?r._tmpIndex_-i._tmpIndex_:r.weight-i.weight}),t.forEach(function(t){delete t._tmpIndex_})}var a=n(5);/**
 * @interface ILayoutItem
 * @prop {String} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {Function} update - Takes two parameters: width and height. Returns size of item
 * @prop {Function} getPadding -  Returns an object with padding on the edges
 * @prop {Number} width - Width of item. Must be valid after update()
 * @prop {Number} height - Height of item. Must be valid after update()
 * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */
// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
t.exports={defaults:{},/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */
addBox:function(t,e){t.boxes||(t.boxes=[]),
// initialize item with default values
e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {Object} layoutItem - the item to remove from the layout
	 */
removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {Object} item - the item to configure with the given options
	 * @param {Object} options - the new item options.
	 */
configure:function(t,e,n){for(var r,i=["fullWidth","position","weight"],a=i.length,o=0;o<a;++o)r=i[o],n.hasOwnProperty(r)&&(e[r]=n[r])},/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {Number} width - the width to fit into
	 * @param {Number} height - the height to fit into
	 */
update:function(t,e,n){function o(t){var e,n=t.isHorizontal();n?(e=t.update(t.fullWidth?b:D,x),S-=e.height):(e=t.update(Y,S),D-=e.width),T.push({horizontal:n,minSize:e,box:t})}
// Function to fit a box
function s(t){var e=a.findNextWhere(T,function(e){return e.box===t});if(e)if(t.isHorizontal()){var n={left:Math.max(P,j),right:Math.max(A,E),top:0,bottom:0};
// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
// on the margin. Sometimes they need to increase in size slightly
t.update(t.fullWidth?b:D,L/2,n)}else t.update(e.minSize.width,S)}function u(t){var e=a.findNextWhere(T,function(e){return e.box===t}),n={left:0,right:0,top:C,bottom:F};e&&t.update(e.minSize.width,S,n)}function l(t){t.isHorizontal()?(t.left=t.fullWidth?f:P,t.right=t.fullWidth?e-h:P+D,t.top=B,t.bottom=B+t.height,
// Move to next point
B=t.bottom):(t.left=R,t.right=R+t.width,t.top=C,t.bottom=C+S,
// Move to next point
R=t.right)}if(t){var d=t.options.layout||{},c=a.options.toPadding(d.padding),f=c.left,h=c.right,m=c.top,_=c.bottom,p=r(t.boxes,"left"),g=r(t.boxes,"right"),y=r(t.boxes,"top"),v=r(t.boxes,"bottom"),M=r(t.boxes,"chartArea");
// Sort boxes by weight. A higher weight is further away from the chart area
i(p,!0),i(g,!1),i(y,!0),i(v,!1);
// Essentially we now have any number of boxes on each of the 4 sides.
// Our canvas looks like the following.
// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
// B1 is the bottom axis
// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
// an error will be thrown.
//
// |----------------------------------------------------|
// |                  T1 (Full Width)                   |
// |----------------------------------------------------|
// |    |    |                 T2                  |    |
// |    |----|-------------------------------------|----|
// |    |    | C1 |                           | C2 |    |
// |    |    |----|                           |----|    |
// |    |    |                                     |    |
// | L1 | L2 |           ChartArea (C0)            | R1 |
// |    |    |                                     |    |
// |    |    |----|                           |----|    |
// |    |    | C3 |                           | C4 |    |
// |    |----|-------------------------------------|----|
// |    |    |                 B1                  |    |
// |----------------------------------------------------|
// |                  B2 (Full Width)                   |
// |----------------------------------------------------|
//
// What we do to find the best sizing, we do the following
// 1. Determine the minimum size of the chart area.
// 2. Split the remaining width equally between each vertical axis
// 3. Split the remaining height equally between each horizontal axis
// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
// 5. Adjust the sizes of each axis based on it's minimum reported size.
// 6. Refit each axis
// 7. Position each axis in the final location
// 8. Tell the chart the final location of the chart area
// 9. Tell any axes that overlay the chart area the positions of the chart area
// Step 1
var b=e-f-h,L=n-m-_,k=b/2,w=L/2,Y=(e-k)/(p.length+g.length),x=(n-w)/(y.length+v.length),D=b,S=L,T=[];a.each(p.concat(g,y,v),o);
// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
var j=0,E=0,O=0,H=0;a.each(y.concat(v),function(t){if(t.getPadding){var e=t.getPadding();j=Math.max(j,e.left),E=Math.max(E,e.right)}}),a.each(p.concat(g),function(t){if(t.getPadding){var e=t.getPadding();O=Math.max(O,e.top),H=Math.max(H,e.bottom)}});
// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
// be if the axes are drawn at their minimum sizes.
// Steps 5 & 6
var P=f,A=h,C=m,F=_;
// Update, and calculate the left and right margins for the horizontal boxes
a.each(p.concat(g),s),a.each(p,function(t){P+=t.width}),a.each(g,function(t){A+=t.width}),
// Set the Left and Right margins for the horizontal boxes
a.each(y.concat(v),s),
// Figure out how much margin is on the top and bottom of the vertical boxes
a.each(y,function(t){C+=t.height}),a.each(v,function(t){F+=t.height}),
// Let the left layout know the final margin
a.each(p.concat(g),u),
// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
P=f,A=h,C=m,F=_,a.each(p,function(t){P+=t.width}),a.each(g,function(t){A+=t.width}),a.each(y,function(t){C+=t.height}),a.each(v,function(t){F+=t.height});
// We may be adding some padding to account for rotated x axis labels
var I=Math.max(j-P,0);P+=I,A+=Math.max(E-A,0);var W=Math.max(O-C,0);C+=W,F+=Math.max(H-F,0);
// Figure out if our chart area changed. This would occur if the dataset layout label rotation
// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
// without calling `fit` again
var N=n-C-F,z=e-P-A;z===D&&N===S||(a.each(p,function(t){t.height=N}),a.each(g,function(t){t.height=N}),a.each(y,function(t){t.fullWidth||(t.width=z)}),a.each(v,function(t){t.fullWidth||(t.width=z)}),S=N,D=z);
// Step 7 - Position the boxes
var R=f+I,B=m+W;a.each(p.concat(y),l),
// Account for chart width and height
R+=D,B+=S,a.each(g,l),a.each(v,l),
// Step 8
t.chartArea={left:P,top:C,right:P+D,bottom:C+S},
// Step 9
a.each(M,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(D,S)})}}}},/* 87 */
/***/
function(t,e,n){"use strict";var r=n(5);/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
t.exports={/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
formatters:{/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {String|Array} the label to display
		 */
values:function(t){return r.isArray(t)?t:""+t},/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {Number} the value to be formatted
		 * @param index {Number} the position of the tickValue parameter in the ticks array
		 * @param ticks {Array<Number>} the list of ticks being converted
		 * @return {String} string representation of the tickValue parameter
		 */
linear:function(t,e,n){
// If we have lots of ticks, don't use the ones
var i=n.length>3?n[2]-n[1]:n[1]-n[0];
// If we have a number like 2.5 as the delta, figure out how many decimal places we need
Math.abs(i)>1&&t!==Math.floor(t)&&(
// not an integer
i=t-Math.floor(t));var a=r.log10(Math.abs(i)),o="";if(0!==t){var s=-1*Math.floor(a);s=Math.max(Math.min(s,20),0),// toFixed has a max of 20 decimal places
o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(r.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}}},/* 88 */
/***/
function(t,e,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(33);
// eslint-disable-next-line no-prototype-builtins
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},/* 89 */
/***/
function(t,e){e.f={}.propertyIsEnumerable},/* 90 */
/***/
function(t,e,n){
// getting tag from 19.1.3.6 Object.prototype.toString()
var r=n(33),i=n(10)("toStringTag"),a="Arguments"==r(function(){return arguments}()),o=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=o(e=Object(t),i))?n:a?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},/* 91 */
,/* 92 */
/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/* 93 */
/***/
function(t,e){t.exports=!0},/* 94 */
/***/
function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},/* 95 */
/***/
function(t,e,n){
// 7.1.13 ToObject(argument)
var r=n(128);t.exports=function(t){return Object(r(t))}},/* 96 */
/***/
function(t,e){e.f={}.propertyIsEnumerable},/* 97 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f),m=n(29),_=n(193),p=function(t){function e(t){return(0,a.default)(this,e),(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return(0,c.default)(e,t),(0,s.default)(e,[{key:"logoutHandler",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"mainmenu-wrapper"},h.default.createElement("div",{className:"container"},h.default.createElement("nav",{id:"mainmenu",className:"mainmenu"},h.default.createElement("ul",null,h.default.createElement("li",{className:"logo-wrapper"},h.default.createElement(m.Link,{to:"/",className:"dropdown-toggle","data-toggle":"dropdown"},h.default.createElement("img",{src:"/img/web-logo.png",alt:"AGARTHA"})))))),function(){if(null!==window.localStorage.getItem("referralcode"))return h.default.createElement("div",{className:"overpop"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-12 col-sm-6"},h.default.createElement("div",{className:"alert code"},h.default.createElement("img",{src:"/img/share-small.png"}),"  ",window.localStorage.getItem("referralcode")," ")),h.default.createElement("div",{className:"col-md-12 col-sm-6"},h.default.createElement(_.WhatsappShareButton,{url:"Referral Code: "+window.localStorage.getItem("referralcode")+"  url: "+location.origin+"/home/"+window.localStorage.getItem("referralcode")}," ",h.default.createElement(_.WhatsappIcon,{size:28,round:!0})),"      ",h.default.createElement("a",{href:"mailto:?subject=Referral Code "+window.localStorage.getItem("referralcode")+"&body= url :"+location.origin+"/home/"+window.localStorage.getItem("referralcode")}," ",h.default.createElement("span",{style:{fontSize:"20px",color:"green",top:"4px"},className:"glyphicon glyphicon-envelope"})),"      ",h.default.createElement("a",{className:"hidden-md",style:{fontSize:"15px",color:"green",top:"9px"},href:"sms://?&body="+window.localStorage.getItem("referralcode")},"SMS"))))}())}}]),e}(f.Component);e.default=(0,m.withRouter)(p)},/* 98 */
/***/
function(t,e,n){/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function r(t){return null!=t&&a(t.length)&&!i(t)}var i=n(201),a=n(207);t.exports=r},/* 99 */
/***/
function(t,e){/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}/** Used for built-in method references. */
var r=Object.prototype;t.exports=n},/* 100 */
/***/
function(t,e,n){/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function r(t){return o(t)?i(t):a(t)}var i=n(209),a=n(482),o=n(98);t.exports=r},/* 101 */
/***/
function(t,e){t.exports=function(t){
// module.parent = undefined by default
return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},/* 102 */
/***/
function(t,e,n){/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function r(t){return"symbol"==typeof t||a(t)&&i(t)==o}var i=n(75),a=n(57),o="[object Symbol]";t.exports=r},/* 103 */
/***/
function(t,e,n){/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var i=n(501),a=n(502),o=n(503),s=n(504),u=n(505);
// Add methods to `ListCache`.
r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,t.exports=r},/* 104 */
/***/
function(t,e,n){/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function r(t,e){for(var n=t.length;n--;)if(i(t[n][0],e))return n;return-1}var i=n(142);t.exports=r},/* 105 */
/***/
function(t,e,n){var r=n(56),i=r(Object,"create");t.exports=i},/* 106 */
/***/
function(t,e,n){/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function r(t,e){var n=t.__data__;return i(e)?n["string"==typeof e?"string":"hash"]:n.map}var i=n(519);t.exports=r},/* 107 */
/***/
function(t,e,n){"use strict";/**
 * @namespace Chart.helpers
 */
var r={/**
	 * An empty function that can be used, for example, for optional callback.
	 */
noop:function(){},/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {Number}
	 * @function
	 */
uid:function(){var t=0;return function(){return t++}}(),/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
isNullOrUndef:function(t){return null===t||void 0===t},/**
	 * Returns true if `value` is an array, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @function
	 */
isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
valueOrDefault:function(t,e){return void 0===t?e:t},/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {Number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
valueAtIndexOrDefault:function(t,e,n){return r.valueOrDefault(r.isArray(t)?t[e]:t,n)},/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {Function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {Object|Array} loopable - The object or array to be iterated.
	 * @param {Function} fn - The function to call for each item.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
	 */
each:function(t,e,n,i){var a,o,s;if(r.isArray(t))if(o=t.length,i)for(a=o-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<o;a++)e.call(n,t[a],a);else if(r.isObject(t))for(s=Object.keys(t),o=s.length,a=0;a<o;a++)e.call(n,t[s[a]],s[a])},/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see http://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {Boolean}
	 */
arrayEquals:function(t,e){var n,i,a,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],o=e[n],a instanceof Array&&o instanceof Array){if(!r.arrayEquals(a,o))return!1}else if(a!==o)
// NOTE: two different object instances will never be equal: {x:20} != {x:20}
return!1;return!0},/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
clone:function(t){if(r.isArray(t))return t.map(r.clone);if(r.isObject(t)){for(var e={},n=Object.keys(t),i=n.length,a=0;a<i;++a)e[n[a]]=r.clone(t[n[a]]);return e}return t},/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
	 * @private
	 */
_merger:function(t,e,n,i){var a=e[t],o=n[t];r.isObject(a)&&r.isObject(o)?r.merge(a,o,i):e[t]=r.clone(o)},/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
_mergerIf:function(t,e,n){var i=e[t],a=n[t];r.isObject(i)&&r.isObject(a)?r.mergeIf(i,a):e.hasOwnProperty(t)||(e[t]=r.clone(a))},/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @param {Object} [options] - Merging options:
	 * @param {Function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {Object} The `target` object.
	 */
merge:function(t,e,n){var i,a,o,s,u,l=r.isArray(e)?e:[e],d=l.length;if(!r.isObject(t))return t;for(n=n||{},i=n.merger||r._merger,a=0;a<d;++a)if(e=l[a],r.isObject(e))for(o=Object.keys(e),u=0,s=o.length;u<s;++u)i(o[u],t,e,n);return t},/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @returns {Object} The `target` object.
	 */
mergeIf:function(t,e){return r.merge(t,e,{merger:r._mergerIf})},/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {Object} target - The target object in which all objects are merged into.
	 * @param {Object} arg1 - Object containing additional properties to merge in target.
	 * @param {Object} argN - Additional objects containing properties to merge in target.
	 * @returns {Object} The `target` object.
	 */
extend:function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;n<i;++n)r.each(arguments[n],e);return t},/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=r.inherits,t&&r.extend(n.prototype,t),n.__super__=e.prototype,n}};t.exports=r,
// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
r.callCallback=r.callback,/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.getValueOrDefault=r.valueOrDefault,/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.getValueAtIndexOrDefault=r.valueAtIndexOrDefault},/* 108 */
/***/
function(t,e,n){var r=n(31),i=n(3),a=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(49)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},/* 109 */
/***/
function(t,e,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(26),i=n(13),a=n(62);t.exports=function(t){return function(e,n,o){var s,u=r(e),l=i(u.length),d=a(o,l);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(t&&n!=n){for(;l>d;)
// eslint-disable-next-line no-self-compare
if((s=u[d++])!=s)return!0}else for(;l>d;d++)if((t||d in u)&&u[d]===n)return t||d||0;return!t&&-1}}},/* 110 */
/***/
function(t,e){e.f=Object.getOwnPropertySymbols},/* 111 */
/***/
function(t,e,n){
// 7.2.2 IsArray(argument)
var r=n(33);t.exports=Array.isArray||function(t){return"Array"==r(t)}},/* 112 */
/***/
function(t,e,n){
// 7.2.8 IsRegExp(argument)
var r=n(8),i=n(33),a=n(10)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},/* 113 */
/***/
function(t,e,n){var r=n(10)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},
// eslint-disable-next-line no-throw-literal
Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:n=!0}},a[r]=function(){return o},t(a)}catch(t){}return n}},/* 114 */
/***/
function(t,e,n){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var r=n(2);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},/* 115 */
/***/
function(t,e,n){"use strict";var r=n(21),i=n(22),a=n(7),o=n(37),s=n(10);t.exports=function(t,e,n){var u=s(t),l=n(o,u,""[t]),d=l[0],c=l[1];a(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,d),r(RegExp.prototype,u,2==e?function(t,e){return c.call(t,this,e)}:function(t){return c.call(t,this)}))}},/* 116 */
/***/
function(t,e,n){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var r=n(2),i=n(16),a=n(10)("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[a])?e:i(n)}},/* 117 */
/***/
function(t,e,n){var r=n(3),i=r.navigator;t.exports=i&&i.userAgent||""},/* 118 */
/***/
function(t,e,n){"use strict";var r=n(3),i=n(0),a=n(22),o=n(68),s=n(48),u=n(67),l=n(66),d=n(8),c=n(7),f=n(113),h=n(77),m=n(159);t.exports=function(t,e,n,_,p,g){var y=r[t],v=y,M=p?"set":"add",b=v&&v.prototype,L={},k=function(t){var e=b[t];a(b,t,"delete"==t?function(t){return!(g&&!d(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!d(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof v&&(g||b.forEach&&!c(function(){(new v).entries().next()}))){var w=new v,Y=w[M](g?{}:-0,1)!=w,x=c(function(){w.has(1)}),D=f(function(t){new v(t)}),S=!g&&c(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var t=new v,e=5;e--;)t[M](e,e);return!t.has(-0)});D||(v=e(function(e,n){l(e,v,t);var r=m(new y,e,v);return void 0!=n&&u(n,p,r[M],r),r}),v.prototype=b,b.constructor=v),(x||S)&&(k("delete"),k("has"),p&&k("get")),(S||Y)&&k(M),
// weak collections should not contains .clear method
g&&b.clear&&delete b.clear}else
// create collection constructor
v=_.getConstructor(e,t,p,M),o(v.prototype,n),s.NEED=!0;return h(v,t),L[t]=v,i(i.G+i.W+i.F*(v!=y),L),g||_.setStrong(v,t,p),v}},/* 119 */
/***/
function(t,e,n){for(var r,i=n(3),a=n(21),o=n(60),s=o("typed_array"),u=o("view"),l=!(!i.ArrayBuffer||!i.DataView),d=l,c=0,f="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");c<9;)(r=i[f[c++]])?(a(r.prototype,s,!0),a(r.prototype,u,!0)):d=!1;t.exports={ABV:l,CONSTR:d,TYPED:s,VIEW:u}},/* 120 */
/***/
function(t,e,n){"use strict";
// Forced replacement prototype accessors methods
t.exports=n(49)||!n(7)(function(){var t=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,t,function(){}),delete n(3)[t]})},/* 121 */
/***/
function(t,e,n){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var r=n(0);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},/* 122 */
/***/
function(t,e,n){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var r=n(0),i=n(16),a=n(32),o=n(67);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,s,u=arguments[1];return i(this),e=void 0!==u,e&&i(u),void 0==t?new this:(n=[],e?(r=0,s=a(u,arguments[2],2),o(t,!1,function(t){n.push(s(t,r++))})):o(t,!1,n.push,n),new this(n))}})}},/* 123 */
,/* 124 */
,/* 125 */
/***/
function(t,e,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(71);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},/* 126 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(404),a=r(i),o=n(418),s=r(o),u="function"==typeof s.default&&"symbol"==typeof a.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===u(a.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":u(t)}},/* 127 */
/***/
function(t,e){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},/* 128 */
/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/* 129 */
/***/
function(t,e){t.exports={}},/* 130 */
/***/
function(t,e,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(81),i=n(409),a=n(133),o=n(131)("IE_PROTO"),s=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=n(184)("iframe"),r=a.length;for(e.style.display="none",n(413).appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[a[r]];return u()};t.exports=Object.create||function(t,e){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},/* 131 */
/***/
function(t,e,n){var r=n(132)("keys"),i=n(94);t.exports=function(t){return r[t]||(r[t]=i(t))}},/* 132 */
/***/
function(t,e,n){var r=n(24),i=n(45),a=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(93)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},/* 133 */
/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 134 */
/***/
function(t,e,n){var r=n(52).f,i=n(54),a=n(74)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},/* 135 */
/***/
function(t,e,n){e.f=n(74)},/* 136 */
/***/
function(t,e,n){var r=n(45),i=n(24),a=n(93),o=n(135),s=n(52).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},/* 137 */
/***/
function(t,e){e.f=Object.getOwnPropertySymbols},/* 138 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f),m=n(29),_=function(t){function e(t){return(0,a.default)(this,e),(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return(0,c.default)(e,t),(0,s.default)(e,[{key:"logoutHandler",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",null)}}]),e}(f.Component);e.default=(0,m.withRouter)(_)},/* 139 */
/***/
function(t,e,n){var r,i;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */
/* jshint unused: true, undef: true, strict: true */
!function(a,o){
// AMD - RequireJS
r=o,void 0!==(i="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=i)}("undefined"!=typeof window&&window,function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){
// set events hash
var n=this._events=this._events||{},r=n[t]=n[t]||[];
// only add once
return-1==r.indexOf(e)&&r.push(e),this}},e.once=function(t,e){if(t&&e){
// add event
this.on(t,e);
// set once flag
// set onceEvents hash
var n=this._onceEvents=this._onceEvents||{};
// set flag
return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=n.indexOf(e);return-1!=r&&n.splice(r,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){
// copy over to avoid interference if .off() in listener
n=n.slice(0),e=e||[];for(var r=this._onceEvents&&this._onceEvents[t],i=0;i<n.length;i++){var a=n[i];r&&r[a]&&(
// remove listener
// remove before trigger to prevent recursion
this.off(t,a),
// unset once flag
delete r[a]),
// trigger listener
a.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})},/* 140 */
/***/
function(t,e,n){var r,i;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */
!function(a,o){
// AMD
r=o,void 0!==(i="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=i)}(window,function(){"use strict";
// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(){}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<l;e++){t[u[e]]=0}return t}
// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function r(t){var e=getComputedStyle(t);return e||s("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function i(){
// setup once
if(!d){d=!0;
// -------------------------- box sizing -------------------------- //
/**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(e);var i=r(e);
// round value for browser zoom. desandro/masonry#928
o=200==Math.round(t(i.width)),a.isBoxSizeOuter=o,n.removeChild(e)}}
// -------------------------- getSize -------------------------- //
function a(e){
// do not proceed on non-objects
if(i(),
// use querySeletor if elem is string
"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var a=r(e);
// if hidden, everything is 0
if("none"==a.display)return n();var s={};s.width=e.offsetWidth,s.height=e.offsetHeight;
// get all measurements
for(var d=s.isBorderBox="border-box"==a.boxSizing,c=0;c<l;c++){var f=u[c],h=a[f],m=parseFloat(h);
// any 'auto', 'medium' value will be 0
s[f]=isNaN(m)?0:m}var _=s.paddingLeft+s.paddingRight,p=s.paddingTop+s.paddingBottom,g=s.marginLeft+s.marginRight,y=s.marginTop+s.marginBottom,v=s.borderLeftWidth+s.borderRightWidth,M=s.borderTopWidth+s.borderBottomWidth,b=d&&o,L=t(a.width);!1!==L&&(s.width=L+(
// add padding and border unless it's already including it
b?0:_+v));var k=t(a.height);
// add padding and border unless it's already including it
return!1!==k&&(s.height=k+(b?0:p+M)),s.innerWidth=s.width-(_+v),s.innerHeight=s.height-(p+M),s.outerWidth=s.width+g,s.outerHeight=s.height+y,s}}var o,s="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],l=u.length,d=!1;return a})},/* 141 */
/***/
function(t,e,n){/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function r(t,e,n){var r=t[e];s.call(t,e)&&a(r,n)&&(void 0!==n||e in t)||i(t,e,n)}var i=n(199),a=n(142),o=Object.prototype,s=o.hasOwnProperty;t.exports=r},/* 142 */
/***/
function(t,e){/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},/* 143 */
/***/
function(t,e){/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function n(t){return function(e){return t(e)}}t.exports=n},/* 144 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(t){var r=n(202),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===i,s=o&&r.process,u=function(){try{
// Use `util.types` for Node.js 10+.
var t=a&&a.require&&a.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=u}).call(e,n(101)(t))},/* 145 */
/***/
function(t,e,n){var r=n(56),i=n(30),a=r(i,"Map");t.exports=a},/* 146 */
/***/
function(t,e,n){var r=n(531),i=n(218),a=Object.prototype,o=a.propertyIsEnumerable,s=Object.getOwnPropertySymbols,u=s?function(t){return null==t?[]:(t=Object(t),r(s(t),function(e){return o.call(t,e)}))}:i;t.exports=u},/* 147 */
/***/
function(t,e){/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function n(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}t.exports=n},/* 148 */
/***/
function(t,e,n){var r=n(212),i=r(Object.getPrototypeOf,Object);t.exports=i},/* 149 */
/***/
function(t,e,n){var r=n(534),i=n(145),a=n(535),o=n(536),s=n(537),u=n(75),l=n(203),d=l(r),c=l(i),f=l(a),h=l(o),m=l(s),_=u;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
(r&&"[object DataView]"!=_(new r(new ArrayBuffer(1)))||i&&"[object Map]"!=_(new i)||a&&"[object Promise]"!=_(a.resolve())||o&&"[object Set]"!=_(new o)||s&&"[object WeakMap]"!=_(new s))&&(_=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?l(n):"";if(r)switch(r){case d:return"[object DataView]";case c:return"[object Map]";case f:return"[object Promise]";case h:return"[object Set]";case m:return"[object WeakMap]"}return e}),t.exports=_},/* 150 */
/***/
function(t,e,n){/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function r(t){var e=new t.constructor(t.byteLength);return new i(e).set(new i(t)),e}var i=n(540);t.exports=r},/* 151 */
/***/
function(t,e,n){/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function r(t,e){return i(t)?t:a(t,e)?[t]:o(s(t))}var i=n(58),a=n(552),o=n(553),s=n(556);t.exports=r},/* 152 */
/***/
function(t,e,n){var r=n(8),i=n(3).document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},/* 153 */
/***/
function(t,e,n){var r=n(3),i=n(31),a=n(49),o=n(352),s=n(12).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},/* 154 */
/***/
function(t,e,n){var r=n(108)("keys"),i=n(60);t.exports=function(t){return r[t]||(r[t]=i(t))}},/* 155 */
/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 156 */
/***/
function(t,e,n){var r=n(3).document;t.exports=r&&r.documentElement},/* 157 */
/***/
function(t,e,n){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var r=n(8),i=n(2),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(t,e,r){try{r=n(32)(Function.call,n(27).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},/* 158 */
/***/
function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 159 */
/***/
function(t,e,n){var r=n(8),i=n(157).set;t.exports=function(t,e,n){var a,o=e.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},/* 160 */
/***/
function(t,e,n){"use strict";var r=n(38),i=n(37);t.exports=function(t){var e=String(i(this)),n="",a=r(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},/* 161 */
/***/
function(t,e){
// 20.2.2.28 Math.sign(x)
t.exports=Math.sign||function(t){
// eslint-disable-next-line no-self-compare
return 0==(t=+t)||t!=t?t:t<0?-1:1}},/* 162 */
/***/
function(t,e){
// 20.2.2.14 Math.expm1(x)
var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},/* 163 */
/***/
function(t,e,n){var r=n(38),i=n(37);
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,n){var a,o,s=String(i(e)),u=r(n),l=s.length;return u<0||u>=l?t?"":void 0:(a=s.charCodeAt(u),a<55296||a>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?t?s.charAt(u):a:t?s.slice(u,u+2):o-56320+(a-55296<<10)+65536)}}},/* 164 */
/***/
function(t,e,n){"use strict";var r=n(49),i=n(0),a=n(22),o=n(21),s=n(79),u=n(165),l=n(77),d=n(28),c=n(10)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,m,_,p,g){u(n,e,m);var y,v,M,b=function(t){if(!f&&t in Y)return Y[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},L=e+" Iterator",k="values"==_,w=!1,Y=t.prototype,x=Y[c]||Y["@@iterator"]||_&&Y[_],D=x||b(_),S=_?k?b("entries"):D:void 0,T="Array"==e?Y.entries||x:x;if(
// Fix native
T&&(M=d(T.call(new t)))!==Object.prototype&&M.next&&(
// Set @@toStringTag to native iterators
l(M,L,!0),
// fix for some old engines
r||"function"==typeof M[c]||o(M,c,h)),
// fix Array#{values, @@iterator}.name in V8 / FF
k&&x&&"values"!==x.name&&(w=!0,D=function(){return x.call(this)}),
// Define iterator
r&&!g||!f&&!w&&Y[c]||o(Y,c,D),
// Plug for library
s[e]=D,s[L]=h,_)if(y={values:k?D:b("values"),keys:p?D:b("keys"),entries:S},g)for(v in y)v in Y||a(Y,v,y[v]);else i(i.P+i.F*(f||w),e,y);return y}},/* 165 */
/***/
function(t,e,n){"use strict";var r=n(63),i=n(59),a=n(77),o={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n(21)(o,n(10)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),a(t,e+" Iterator")}},/* 166 */
/***/
function(t,e,n){
// helper for String#{startsWith, endsWith, includes}
var r=n(112),i=n(37);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},/* 167 */
/***/
function(t,e,n){var r=n(10)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},/* 168 */
/***/
function(t,e,n){
// check on default Array iterator
var r=n(79),i=n(10)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},/* 169 */
/***/
function(t,e,n){"use strict";var r=n(12),i=n(59);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},/* 170 */
/***/
function(t,e,n){var r=n(90),i=n(10)("iterator"),a=n(79);t.exports=n(31).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||a[r(t)]}},/* 171 */
/***/
function(t,e,n){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var r=n(721);t.exports=function(t,e){return new(r(t))(e)}},/* 172 */
/***/
function(t,e,n){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var r=n(14),i=n(62),a=n(13);t.exports=function(t){for(var e=r(this),n=a(e.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,l=void 0===u?n:i(u,n);l>s;)e[s++]=t;return e}},/* 173 */
/***/
function(t,e,n){"use strict";var r=n(50),i=n(368),a=n(79),o=n(26);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=n(164)(Array,"Array",function(t,e){this._t=o(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
a.Arguments=a.Array,r("keys"),r("values"),r("entries")},/* 174 */
/***/
function(t,e,n){var r,i,a,o=n(32),s=n(358),u=n(156),l=n(152),d=n(3),c=d.process,f=d.setImmediate,h=d.clearImmediate,m=d.MessageChannel,_=d.Dispatch,p=0,g={},y=function(){var t=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},v=function(t){y.call(t.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
f&&h||(f=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++p]=function(){
// eslint-disable-next-line no-new-func
s("function"==typeof t?t:Function(t),e)},r(p),p},h=function(t){delete g[t]},
// Node.js 0.8-
"process"==n(33)(c)?r=function(t){c.nextTick(o(y,t,1))}:_&&_.now?r=function(t){_.now(o(y,t,1))}:m?(i=new m,a=i.port2,i.port1.onmessage=v,r=o(a.postMessage,a,1)):d.addEventListener&&"function"==typeof postMessage&&!d.importScripts?(r=function(t){d.postMessage(t+"","*")},d.addEventListener("message",v,!1)):r="onreadystatechange"in l("script")?function(t){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(o(y,t,1),0)}),t.exports={set:f,clear:h}},/* 175 */
/***/
function(t,e,n){var r=n(3),i=n(174).set,a=r.MutationObserver||r.WebKitMutationObserver,o=r.process,s=r.Promise,u="process"==n(33)(o);t.exports=function(){var t,e,n,l=function(){var r,i;for(u&&(r=o.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};
// Node.js
if(u)n=function(){o.nextTick(l)};else if(!a||r.navigator&&r.navigator.standalone)if(s&&s.resolve){
// Promise.resolve without an argument throws an error in LG WebOS 2
var d=s.resolve(void 0);n=function(){d.then(l)}}else n=function(){
// strange IE + webpack dev server bug - use .call(global)
i.call(r,l)};else{var c=!0,f=document.createTextNode("");new a(l).observe(f,{characterData:!0}),// eslint-disable-line no-new
n=function(){f.data=c=!c}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},/* 176 */
/***/
function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=i(e),this.reject=i(n)}
// 25.4.1.5 NewPromiseCapability(C)
var i=n(16);t.exports.f=function(t){return new r(t)}},/* 177 */
/***/
function(t,e,n){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function r(t,e,n){var r,i,a,o=new Array(n),s=8*n-e-1,u=(1<<s)-1,l=u>>1,d=23===e?I(2,-24)-I(2,-77):0,c=0,f=t<0||0===t&&1/t<0?1:0;for(t=F(t),
// eslint-disable-next-line no-self-compare
t!=t||t===A?(
// eslint-disable-next-line no-self-compare
i=t!=t?1:0,r=u):(r=W(N(t)/z),t*(a=I(2,-r))<1&&(r--,a*=2),t+=r+l>=1?d/a:d*I(2,1-l),t*a>=2&&(r++,a/=2),r+l>=u?(i=0,r=u):r+l>=1?(i=(t*a-1)*I(2,e),r+=l):(i=t*I(2,l-1)*I(2,e),r=0));e>=8;o[c++]=255&i,i/=256,e-=8);for(r=r<<e|i,s+=e;s>0;o[c++]=255&r,r/=256,s-=8);return o[--c]|=128*f,o}function i(t,e,n){var r,i=8*n-e-1,a=(1<<i)-1,o=a>>1,s=i-7,u=n-1,l=t[u--],d=127&l;for(l>>=7;s>0;d=256*d+t[u],u--,s-=8);for(r=d&(1<<-s)-1,d>>=-s,s+=e;s>0;r=256*r+t[u],u--,s-=8);if(0===d)d=1-o;else{if(d===a)return r?NaN:l?-A:A;r+=I(2,e),d-=o}return(l?-1:1)*r*I(2,d-e)}function a(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function o(t){return[255&t]}function s(t){return[255&t,t>>8&255]}function u(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function l(t){return r(t,52,8)}function d(t){return r(t,23,4)}function c(t,e,n){x(t[T],e,{get:function(){return this[n]}})}function f(t,e,n,r){var i=+n,a=w(i);if(a+e>t[B])throw P(j);var o=t[R]._b,s=a+t[V],u=o.slice(s,s+e);return r?u:u.reverse()}function h(t,e,n,r,i,a){var o=+n,s=w(o);if(s+e>t[B])throw P(j);for(var u=t[R]._b,l=s+t[V],d=r(+i),c=0;c<e;c++)u[l+c]=d[a?c:e-c-1]}var m=n(3),_=n(11),p=n(49),g=n(119),y=n(21),v=n(68),M=n(7),b=n(66),L=n(38),k=n(13),w=n(377),Y=n(64).f,x=n(12).f,D=n(172),S=n(77),T="prototype",j="Wrong index!",E=m.ArrayBuffer,O=m.DataView,H=m.Math,P=m.RangeError,A=m.Infinity,C=E,F=H.abs,I=H.pow,W=H.floor,N=H.log,z=H.LN2,R=_?"_b":"buffer",B=_?"_l":"byteLength",V=_?"_o":"byteOffset";if(g.ABV){if(!M(function(){E(1)})||!M(function(){new E(-1)})||M(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new E,new E(1.5),new E(NaN),"ArrayBuffer"!=E.name})){E=function(t){return b(this,E),new C(w(t))};for(var U,J=E[T]=C[T],q=Y(C),G=0;q.length>G;)(U=q[G++])in E||y(E,U,C[U]);p||(J.constructor=E)}
// iOS Safari 7.x bug
var K=new O(new E(2)),$=O[T].setInt8;K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||v(O[T],{setInt8:function(t,e){$.call(this,t,e<<24>>24)},setUint8:function(t,e){$.call(this,t,e<<24>>24)}},!0)}else E=function(t){b(this,E,"ArrayBuffer");var e=w(t);this._b=D.call(new Array(e),0),this[B]=e},O=function(t,e,n){b(this,O,"DataView"),b(t,E,"DataView");var r=t[B],i=L(e);if(i<0||i>r)throw P("Wrong offset!");if(n=void 0===n?r-i:k(n),i+n>r)throw P("Wrong length!");this[R]=t,this[V]=i,this[B]=n},_&&(c(E,"byteLength","_l"),c(O,"buffer","_b"),c(O,"byteLength","_l"),c(O,"byteOffset","_o")),v(O[T],{getInt8:function(t){return f(this,1,t)[0]<<24>>24},getUint8:function(t){return f(this,1,t)[0]},getInt16:function(t){var e=f(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=f(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return a(f(this,4,t,arguments[1]))},getUint32:function(t){return a(f(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return i(f(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return i(f(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){h(this,1,t,o,e)},setUint8:function(t,e){h(this,1,t,o,e)},setInt16:function(t,e){h(this,2,t,s,e,arguments[2])},setUint16:function(t,e){h(this,2,t,s,e,arguments[2])},setInt32:function(t,e){h(this,4,t,u,e,arguments[2])},setUint32:function(t,e){h(this,4,t,u,e,arguments[2])},setFloat32:function(t,e){h(this,4,t,d,e,arguments[2])},setFloat64:function(t,e){h(this,8,t,l,e,arguments[2])}});S(E,"ArrayBuffer"),S(O,"DataView"),y(O[T],g.VIEW,!0),e.ArrayBuffer=E,e.DataView=O},/* 178 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(4),a=r(i),o=n(179),s=r(o),u=n(29),l=n(399),d=r(l);s.default.render(a.default.createElement(u.BrowserRouter,null,a.default.createElement(d.default,null)),document.getElementById("app-wrapper"));/**
 * 
 * Firebase Setup
 */
var c={apiKey:"AIzaSyAkBtJl8rWxCKHHQqrdgIA9FTrdp8S8rMI",authDomain:"fir-97b6e.firebaseapp.com",databaseURL:"https://fir-97b6e.firebaseio.com",projectId:"fir-97b6e",storageBucket:"",messagingSenderId:"1071020519889"};if("serviceWorker"in navigator){firebase.initializeApp(c);var f=firebase.messaging();f.requestPermission().then(function(){return f.getToken()}).then(function(t){console.log(t),window.localStorage.setItem("deviceToken",t)}).catch(function(t){console.log("No Permission!! ",t),alert("You have blocked notifications. Please unblock them to get our notifications So that you can win many Prizes!!")}),f.onMessage(function(t){console.log("Message received. ",t)}),navigator.serviceWorker.register("firebase-messaging-sw.js").then(function(t){"sync"in t&&console.log("Set reg in store !!!"),console.log("Registration successful, scope is:",t.scope)}).catch(function(t){console.log("Service worker registration failed, error:",t)})}},/* 179 */
,/* 180 */
,/* 181 */
,/* 182 */
/***/
function(t,e,n){
// optional / simple context binding
var r=n(403);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},/* 183 */
/***/
function(t,e,n){t.exports=!n(53)&&!n(72)(function(){return 7!=Object.defineProperty(n(184)("div"),"a",{get:function(){return 7}}).a})},/* 184 */
/***/
function(t,e,n){var r=n(71),i=n(45).document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},/* 185 */
/***/
function(t,e,n){"use strict";var r=n(93),i=n(51),a=n(186),o=n(70),s=n(129),u=n(408),l=n(134),d=n(190),c=n(74)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,m,_,p,g){u(n,e,m);var y,v,M,b=function(t){if(!f&&t in Y)return Y[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},L=e+" Iterator",k="values"==_,w=!1,Y=t.prototype,x=Y[c]||Y["@@iterator"]||_&&Y[_],D=x||b(_),S=_?k?b("entries"):D:void 0,T="Array"==e?Y.entries||x:x;if(
// Fix native
T&&(M=d(T.call(new t)))!==Object.prototype&&M.next&&(
// Set @@toStringTag to native iterators
l(M,L,!0),
// fix for some old engines
r||"function"==typeof M[c]||o(M,c,h)),
// fix Array#{values, @@iterator}.name in V8 / FF
k&&x&&"values"!==x.name&&(w=!0,D=function(){return x.call(this)}),
// Define iterator
r&&!g||!f&&!w&&Y[c]||o(Y,c,D),
// Plug for library
s[e]=D,s[L]=h,_)if(y={values:k?D:b("values"),keys:p?D:b("keys"),entries:S},g)for(v in y)v in Y||a(Y,v,y[v]);else i(i.P+i.F*(f||w),e,y);return y}},/* 186 */
/***/
function(t,e,n){t.exports=n(70)},/* 187 */
/***/
function(t,e,n){var r=n(54),i=n(73),a=n(410)(!1),o=n(131)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,l=[];for(n in s)n!=o&&r(s,n)&&l.push(n);
// Don't enum bug & hidden keys
for(;e.length>u;)r(s,n=e[u++])&&(~a(l,n)||l.push(n));return l}},/* 188 */
/***/
function(t,e,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(189);
// eslint-disable-next-line no-prototype-builtins
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},/* 189 */
/***/
function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},/* 190 */
/***/
function(t,e,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(54),i=n(95),a=n(131)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},/* 191 */
/***/
function(t,e,n){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var r=n(187),i=n(133).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},/* 192 */
/***/
function(t,e,n){var r=n(96),i=n(92),a=n(73),o=n(125),s=n(54),u=n(183),l=Object.getOwnPropertyDescriptor;e.f=n(53)?l:function(t,e){if(t=a(t),e=o(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},/* 193 */
/***/
function(t,e,n){"use strict";function r(t){return function(e){return G.a.createElement(X,C()({getCount:t},e))}}
// CONCATENATED MODULE: ./node_modules/react-share/es/FacebookShareCount.js
function i(t,e){var n="https://graph.facebook.com/?id="+t;P()(n,function(t,n){e(!t&&n&&n.share&&n.share.share_count?n.share.share_count:void 0)})}
// CONCATENATED MODULE: ./node_modules/react-share/es/utils/ieDetection.js
/*
 * This detection method identifies Internet Explorers up until version 11.
 *
 * Reference: https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
 */
function a(t){var e=/MSIE ([0-9]+)/g.exec(window.navigator.userAgent);return!!e&&+e[1]<t}
// CONCATENATED MODULE: ./node_modules/react-share/es/GooglePlusShareCount.js
function o(t,e){if(a(11))/* eslint-enable no-console */
/* eslint-disable no-console */
return void console.error("Google plus share count is not supported in <=IE10!");var n=new XMLHttpRequest;n.open("POST","https://clients6.google.com/rpc"),n.setRequestHeader("Accept","application/json"),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.send(nt()({method:"pos.plusones.get",id:"p",params:{nolog:!0,id:t,source:"widget",userId:"@viewer",groupId:"@self"},jsonrpc:"2.0",key:"p",apiVersion:"v1"})),n.onload=function(){var t=JSON.parse(this.responseText);e(t?t.result.metadata.globalCounts.count:void 0)},n.onerror=function(){}}
// CONCATENATED MODULE: ./node_modules/react-share/es/utils/objectToGetParams.js
/* eslint-disable prefer-template */
function s(t){return"?"+at()(t).filter(function(e){return!!t[e]}).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&")}/* eslint-enable prefer-template */
// CONCATENATED MODULE: ./node_modules/react-share/es/LinkedinShareCount.js
function u(t,e){return P()("https://www.linkedin.com/countserv/count/share"+s({url:t,format:"jsonp"}),function(t,n){e(n?n.count:void 0)})}
// CONCATENATED MODULE: ./node_modules/react-share/es/PinterestShareCount.js
function l(t,e){return P()("https://api.pinterest.com/v1/urls/count.json"+s({url:t}),function(t,n){e(n?n.count:void 0)})}
// CONCATENATED MODULE: ./node_modules/react-share/es/VKShareCount.js
function d(t,e){window.VK||(window.VK={Share:{count:function(t,e){return window.VK.callbacks[t](e)}},callbacks:[]});var n=window.VK.callbacks.length;return window.VK.callbacks.push(e),P()("https://vk.com/share.php"+s({act:"count",index:n,url:t}))}
// CONCATENATED MODULE: ./node_modules/react-share/es/OKShareCount.js
function c(t,e){window.OK||(window.OK={Share:{count:function(t,e){return window.OK.callbacks[t](e)}},callbacks:[]});var n=window.OK.callbacks.length;return window.ODKL={updateCount:function(t,e){window.OK.callbacks[n](e)}},window.OK.callbacks.push(e),P()("https://connect.ok.ru/dk"+s({"st.cmd":"extLike",uid:"odklcnt0",ref:t}))}
// CONCATENATED MODULE: ./node_modules/react-share/es/RedditShareCount.js
function f(t,e){var n="https://www.reddit.com/api/info.json?limit=1&url="+t;P()(n,{param:"jsonp"},function(t,n){e(!t&&n&&n.data&&n.data.children.length>0&&n.data.children[0].data.score?n.data.children[0].data.score:void 0)})}
// CONCATENATED MODULE: ./node_modules/react-share/es/TumblrShareCount.js
function h(t,e){return P()("https://api.tumblr.com/v2/share/stats"+s({url:t}),function(t,n){e(n?n.note_count:void 0)})}function m(t,e,n){var r=e.name,i=e.height,o=void 0===i?400:i,s=e.width,u=void 0===s?550:s,l=window.outerWidth/2+(window.screenX||window.screenLeft||0)-u/2,d=window.outerHeight/2+(window.screenY||window.screenTop||0)-o/2,c={height:o,width:u,left:l,top:d,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},f=window.open(t,a(10)?"":r,at()(c).map(function(t){return t+"="+c[t]}).join(", "));if(n)var h=window.setInterval(function(){try{(null===f||f.closed)&&(window.clearInterval(h),n(f))}catch(t){/* eslint-disable no-console */
console.error(t)}},1e3);return f}function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return{}},r=arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=function(r){return G.a.createElement(gt,C()({},r,{network:t,networkLink:e,opts:n(r)}))};return a.propTypes=r,a.defaultProps=i,a}
// CONCATENATED MODULE: ./node_modules/react-share/es/FacebookShareButton.js
function p(t,e){var n=e.quote,r=e.hashtag;return ht()(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+s({u:t,quote:n,hashtag:r})}
// CONCATENATED MODULE: ./node_modules/react-share/es/GooglePlusShareButton.js
function g(t){return ht()(t,"googlePlus.url"),"https://plus.google.com/share"+s({url:t})}
// CONCATENATED MODULE: ./node_modules/react-share/es/LinkedinShareButton.js
function y(t,e){var n=e.title,r=e.description;return ht()(t,"linkedin.url"),"https://linkedin.com/shareArticle"+s({url:t,title:n,summary:r})}
// CONCATENATED MODULE: ./node_modules/react-share/es/TwitterShareButton.js
function v(t,e){var n=e.title,r=e.via,i=e.hashtags,a=void 0===i?[]:i;return ht()(t,"twitter.url"),ht()(Array.isArray(a),"twitter.hashtags is not an array"),"https://twitter.com/share"+s({url:t,text:n,via:r,hashtags:a.join(",")})}
// CONCATENATED MODULE: ./node_modules/react-share/es/PinterestShareButton.js
function M(t,e){var n=e.media,r=e.description;return ht()(t,"pinterest.url"),ht()(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+s({url:t,media:n,description:r})}
// CONCATENATED MODULE: ./node_modules/react-share/es/VKShareButton.js
function b(t,e){var n=e.title,r=e.description,i=e.image;return ht()(t,"vk.url"),"https://vk.com/share.php"+s({url:t,title:n,description:r,image:i})}
// CONCATENATED MODULE: ./node_modules/react-share/es/OKShareButton.js
function L(t,e){var n=e.title,r=e.description,i=e.image;return ht()(t,"ok.url"),"https://connect.ok.ru/offer"+s({url:t,title:n,description:r,imageUrl:i})}
// CONCATENATED MODULE: ./node_modules/react-share/es/TelegramShareButton.js
function k(t,e){var n=e.title;return ht()(t,"telegram.url"),"https://telegram.me/share/"+s({url:t,text:n})}
// CONCATENATED MODULE: ./node_modules/react-share/es/WhatsappShareButton.js
function w(t,e){var n=e.title,r=e.separator;return ht()(t,"whatsapp.url"),"https://api.whatsapp.com/send"+s({text:n?n+r+t:t})}
// CONCATENATED MODULE: ./node_modules/react-share/es/RedditShareButton.js
function Y(t,e){var n=e.title;return ht()(t,"reddit.url"),"https://www.reddit.com/submit"+s({url:t,title:n})}
// CONCATENATED MODULE: ./node_modules/react-share/es/EmailShareButton.js
function x(t,e){return"mailto:"+s({subject:e.subject,body:e.body||t})}
// CONCATENATED MODULE: ./node_modules/react-share/es/TumblrShareButton.js
function D(t,e){var n=e.title,r=e.caption,i=e.tags,a=e.posttype;return ht()(t,"tumblr.url"),"https://www.tumblr.com/widgets/share/tool"+s({canonicalUrl:t,title:n,caption:r,tags:i,posttype:a})}
// CONCATENATED MODULE: ./node_modules/react-share/es/LivejournalShareButton.js
function S(t,e){var n=e.title,r=e.description;return ht()(t,"livejournal.url"),"https://www.livejournal.com/update.bml"+s({subject:n,event:r})}
// CONCATENATED MODULE: ./node_modules/react-share/es/MailruShareButton.js
function T(t,e){var n=e.title,r=e.description,i=e.image;return ht()(t,"mailru.url"),"https://connect.mail.ru/share"+s({url:t,title:n,description:r,imageurl:i})}
// CONCATENATED MODULE: ./node_modules/react-share/es/ViberShareButton.js
function j(t,e){var n=e.title;return ht()(t,"viber.url"),"viber://forward"+s({text:(n||"")+" "+t})}
// CONCATENATED MODULE: ./node_modules/react-share/es/WorkplaceShareButton.js
function E(t,e){var n=e.quote,r=e.hashtag;return ht()(t,"workplace.url"),"https://work.facebook.com/sharer.php"+s({u:t,quote:n,hashtag:r})}
// CONCATENATED MODULE: ./node_modules/react-share/es/utils/iconFactory.js
function O(t,e){var n=function(n){var r=n.className,i=n.iconBgStyle,a=n.logoFillColor,o=n.round,s=n.size,u={width:s,height:s},l="social-icon social-icon--"+t+" "+r;return G.a.createElement("div",{style:u},G.a.createElement("svg",{viewBox:"0 0 64 64",width:s,height:s,className:l},G.a.createElement("g",null,o?G.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:i}):G.a.createElement("rect",{width:"64",height:"64",fill:e.color,style:i})),G.a.createElement("g",null,G.a.createElement("path",{d:e.icon,fill:a}))))};return n.propTypes={className:$.a.string,iconBgStyle:$.a.object,logoFillColor:$.a.string,round:$.a.bool,size:$.a.number},n.defaultProps={className:"",iconBgStyle:{},logoFillColor:"white",size:64},n}Object.defineProperty(e,"__esModule",{value:!0});
// EXTERNAL MODULE: ./node_modules/jsonp/index.js
var H=n(55),P=/*#__PURE__*/n.n(H),A=n(83),C=/*#__PURE__*/n.n(A),F=n(195),I=/*#__PURE__*/n.n(F),W=n(17),N=/*#__PURE__*/n.n(W),z=n(18),R=/*#__PURE__*/n.n(z),B=n(19),V=/*#__PURE__*/n.n(B),U=n(20),J=/*#__PURE__*/n.n(U),q=n(4),G=/*#__PURE__*/n.n(q),K=n(6),$=/*#__PURE__*/n.n(K),Z=n(197),Q=/*#__PURE__*/n.n(Z),X=function(t){function e(t){N()(this,e);var n=V()(this,(e.__proto__||I()(e)).call(this,t));return n._isMounted=!1,n.state={count:0},n}return J()(e,t),R()(e,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateCount(this.props.url)}},{key:"componentWillReceiveProps",value:function(t){t.url!==this.props.url&&this.updateCount(t.url)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"updateCount",value:function(t){var e=this;this.props.getCount&&(this.setState({isLoading:!0}),this.props.getCount(t,function(t){e._isMounted&&e.setState({count:t,isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.count,n=t.isLoading,r=this.props,i=r.children,a=r.className;return G.a.createElement("div",{className:Q()("SocialMediaShareCount",a)},!n&&i(e||0))}}]),e}(q.Component);X.propTypes={children:$.a.func,className:$.a.string,getCount:$.a.func,url:$.a.string.isRequired},X.defaultProps={children:function(t){return t}};/* harmony default export */
var tt=r(i),et=n(448),nt=/*#__PURE__*/n.n(et),rt=r(o),it=n(198),at=/*#__PURE__*/n.n(it),ot=r(u),st=r(l),ut=r(d),lt=r(c),dt=r(f),ct=r(h),ft=n(15),ht=/*#__PURE__*/n.n(ft),mt=n(126),_t=/*#__PURE__*/n.n(mt),pt=function(t){return!!t&&("object"===(void 0===t?"undefined":_t()(t))||"function"==typeof t)&&"function"==typeof t.then},gt=function(t){function e(){var t,n,r,i;N()(this,e);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r=V()(this,(t=e.__proto__||I()(e)).call.apply(t,[this].concat(o))),r.onClick=function(t){var e=r.props,n=e.disabled,i=e.onClick,a=e.openWindow,o=e.beforeOnClick;if(!n){t.preventDefault();var s=r.link(),u=a?function(){return r.openWindow(s)}:function(){return i(s)};if(o){var l=o();pt(l)?l.then(u):u()}else u()}},r.onKeyPress=function(t){"Enter"!==t.key&&13!==t.key&&" "!==t.key&&32!==t.key||r.onClick(t)},r.openWindow=function(t){var e=r.props,n=e.onShareWindowClose,i=e.windowWidth;m(t,{height:e.windowHeight,width:i},n)},i=n,V()(r,i)}return J()(e,t),R()(e,[{key:"link",value:function(){var t=this.props,e=t.url,n=t.opts;return(0,t.networkLink)(e,n)}},{key:"render",value:function(){var t=this.props,e=t.additionalProps,n=t.children,r=t.className,i=t.disabled,a=t.disabledStyle,o=t.name,s=t.network,u=t.role,l=t.style,d=t.tabIndex,c=Q()("SocialMediaShareButton","SocialMediaShareButton--"+s,{"SocialMediaShareButton--disabled":!!i,disabled:!!i},r);return G.a.createElement("div",C()({name:o},e,{role:u,tabIndex:d,onClick:this.onClick,onKeyPress:this.onKeyPress,className:c,style:C()({},l,i?a:{})}),n)}}]),e}(q.PureComponent);gt.propTypes={additionalProps:$.a.object,children:$.a.node,className:$.a.string,disabled:$.a.bool,disabledStyle:$.a.object,name:$.a.string,network:$.a.string.isRequired,networkLink:$.a.func.isRequired,onClick:$.a.func,opts:$.a.object,openWindow:$.a.bool,url:$.a.string.isRequired,role:$.a.string,style:$.a.object,windowWidth:$.a.number,windowHeight:$.a.number,beforeOnClick:$.a.func,onShareWindowClose:$.a.func,tabIndex:$.a.oneOfType([$.a.string,$.a.number])},gt.defaultProps={disabledStyle:{opacity:.6},openWindow:!0,role:"button",tabIndex:"0"};/* harmony default export */
var yt=_,vt=yt("facebook",p,function(t){/* eslint-enable no-console */
/* eslint-disable no-console */
return t.picture&&console.warn("FacebookShareButton warning: picture is a deprecated prop."),t.title&&console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.'),t.description&&console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.'),{quote:t.quote,hashtag:t.hashtag}},{quote:$.a.string,hashtag:$.a.string},{windowWidth:550,windowHeight:400}),Mt=vt,bt=yt("googlePlus",g,void 0,void 0,{windowWidth:550,windowHeight:400}),Lt=bt,kt=yt("linkedin",y,function(t){return{title:t.title,description:t.description}},{title:$.a.string,description:$.a.string},{windowWidth:750,windowHeight:600}),wt=kt,Yt=yt("twitter",v,function(t){return{hashtags:t.hashtags,title:t.title,via:t.via}},{hashtags:$.a.arrayOf($.a.string),title:$.a.string,via:$.a.string},{windowWidth:550,windowHeight:400}),xt=Yt,Dt=yt("pinterest",M,function(t){return{media:t.media,description:t.description}},{media:$.a.string.isRequired,description:$.a.string},{windowWidth:1e3,windowHeight:730}),St=Dt,Tt=yt("vk",b,function(t){return{title:t.title,description:t.description,image:t.image}},{title:$.a.string,description:$.a.string,image:$.a.string},{windowWidth:660,windowHeight:460}),jt=Tt,Et=yt("ok",L,function(t){return{title:t.title,description:t.description,image:t.image}},{title:$.a.string,description:$.a.string,image:$.a.string},{windowWidth:660,windowHeight:460}),Ot=Et,Ht=yt("telegram",k,function(t){return{title:t.title,via:t.via}},{title:$.a.string,via:$.a.string},{windowWidth:550,windowHeight:400}),Pt=Ht,At=yt("whatsapp",w,function(t){return{title:t.title,separator:t.separator}},{title:$.a.string,separator:$.a.string},{separator:" ",windowWidth:550,windowHeight:400}),Ct=At,Ft=yt("reddit",Y,function(t){return{title:t.title}},{title:$.a.string},{windowWidth:660,windowHeight:460}),It=Ft,Wt=yt("email",x,function(t){return{subject:t.subject,body:t.body}},{subject:$.a.string,body:$.a.string},{openWindow:!1,onClick:function(t){window.location.href=t}}),Nt=Wt,zt=yt("tumblr",D,function(t){return{title:t.title,tags:t.tags.join(","),caption:t.caption,posttype:t.posttype}},{title:$.a.string,caption:$.a.string,posttype:$.a.string,tags:$.a.arrayOf($.a.string)},{tags:[],posttype:"link",windowWidth:660,windowHeight:460}),Rt=zt,Bt=yt("livejournal",S,function(t){return{title:t.title,description:t.description}},{title:$.a.string,description:$.a.string},{windowWidth:660,windowHeight:460}),Vt=Bt,Ut=yt("mailru",T,function(t){return{title:t.title,description:t.description,image:t.image}},{title:$.a.string,description:$.a.string,image:$.a.string},{windowWidth:660,windowHeight:460}),Jt=Ut,qt=yt("viber",j,function(t){return{title:t.title}},{title:$.a.string},{windowWidth:660,windowHeight:460}),Gt=qt,Kt=yt("workplace",E,function(t){return{quote:t.quote,hashtag:t.hashtag}},{quote:$.a.string,hashtag:$.a.string},{windowWidth:550,windowHeight:400}),$t=Kt,Zt=O("facebook",{icon:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",mask:"M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",color:"#3b5998"}),Qt=Zt,Xt=O("twitter",{icon:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",mask:"M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",color:"#00aced"}),te=Xt,ee=O("google",{icon:"M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2",mask:"M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",color:"#dd4b39"}),ne=ee,re=O("linkedin",{icon:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",mask:"M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",color:"#007fb1"}),ie=re,ae=O("pinterest",{icon:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",color:"#cb2128"}),oe=ae,se=O("vk",{icon:"M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",mask:"M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",color:"#45668e"}),ue=se,le=O("ok",{icon:"M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ",mask:"M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z",color:"#f2720c"}),de=le,ce=O("telegram",{icon:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957",mask:"M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",color:"#37aee2"}),fe=ce,he=O("whatsapp",{icon:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915",mask:"M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",color:"#2cb742"}),me=he,_e=O("reddit",{icon:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z",color:"#5f99cf"}),pe=_e,ge=O("tumblr",{icon:"M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",mask:"M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",color:"#2c4762"}),ye=ge,ve=O("mailru",{icon:"M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z",mask:"M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",color:"#168DE2"}),Me=ve,be=O("email",{icon:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",mask:"M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",color:"#7f7f7f"}),Le=be,ke=O("livejournal",{icon:"M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z",mask:"M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",color:"#21A5D8"}),we=ke,Ye=O("viber",{icon:"m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z",mask:"",color:"#7C529E"}),xe=Ye,De=O("workplace",{icon:"M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z",color:"#3b3d4a"}),Se=De;
// CONCATENATED MODULE: ./node_modules/react-share/es/index.js
/* concated harmony reexport */
n.d(e,"FacebookShareCount",function(){return tt}),/* concated harmony reexport */
n.d(e,"GooglePlusShareCount",function(){return rt}),/* concated harmony reexport */
n.d(e,"LinkedinShareCount",function(){return ot}),/* concated harmony reexport */
n.d(e,"PinterestShareCount",function(){return st}),/* concated harmony reexport */
n.d(e,"VKShareCount",function(){return ut}),/* concated harmony reexport */
n.d(e,"OKShareCount",function(){return lt}),/* concated harmony reexport */
n.d(e,"RedditShareCount",function(){return dt}),/* concated harmony reexport */
n.d(e,"TumblrShareCount",function(){return ct}),/* concated harmony reexport */
n.d(e,"FacebookShareButton",function(){return Mt}),/* concated harmony reexport */
n.d(e,"GooglePlusShareButton",function(){return Lt}),/* concated harmony reexport */
n.d(e,"LinkedinShareButton",function(){return wt}),/* concated harmony reexport */
n.d(e,"TwitterShareButton",function(){return xt}),/* concated harmony reexport */
n.d(e,"PinterestShareButton",function(){return St}),/* concated harmony reexport */
n.d(e,"VKShareButton",function(){return jt}),/* concated harmony reexport */
n.d(e,"OKShareButton",function(){return Ot}),/* concated harmony reexport */
n.d(e,"TelegramShareButton",function(){return Pt}),/* concated harmony reexport */
n.d(e,"WhatsappShareButton",function(){return Ct}),/* concated harmony reexport */
n.d(e,"RedditShareButton",function(){return It}),/* concated harmony reexport */
n.d(e,"EmailShareButton",function(){return Nt}),/* concated harmony reexport */
n.d(e,"TumblrShareButton",function(){return Rt}),/* concated harmony reexport */
n.d(e,"LivejournalShareButton",function(){return Vt}),/* concated harmony reexport */
n.d(e,"MailruShareButton",function(){return Jt}),/* concated harmony reexport */
n.d(e,"ViberShareButton",function(){return Gt}),/* concated harmony reexport */
n.d(e,"WorkplaceShareButton",function(){return $t}),/* concated harmony reexport */
n.d(e,"FacebookIcon",function(){return Qt}),/* concated harmony reexport */
n.d(e,"TwitterIcon",function(){return te}),/* concated harmony reexport */
n.d(e,"GooglePlusIcon",function(){return ne}),/* concated harmony reexport */
n.d(e,"LinkedinIcon",function(){return ie}),/* concated harmony reexport */
n.d(e,"PinterestIcon",function(){return oe}),/* concated harmony reexport */
n.d(e,"VKIcon",function(){return ue}),/* concated harmony reexport */
n.d(e,"OKIcon",function(){return de}),/* concated harmony reexport */
n.d(e,"TelegramIcon",function(){return fe}),/* concated harmony reexport */
n.d(e,"WhatsappIcon",function(){return me}),/* concated harmony reexport */
n.d(e,"RedditIcon",function(){return pe}),/* concated harmony reexport */
n.d(e,"TumblrIcon",function(){return ye}),/* concated harmony reexport */
n.d(e,"MailruIcon",function(){return Me}),/* concated harmony reexport */
n.d(e,"EmailIcon",function(){return Le}),/* concated harmony reexport */
n.d(e,"LivejournalIcon",function(){return we}),/* concated harmony reexport */
n.d(e,"ViberIcon",function(){return xe}),/* concated harmony reexport */
n.d(e,"WorkplaceIcon",function(){return Se})},/* 194 */
/***/
function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(d===setTimeout)
//normal enviroments in sane situations
return setTimeout(t,0);
// if setTimeout wasn't available but was latter defined
if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(t,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return d(t,0)}catch(e){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return d.call(null,t,0)}catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return d.call(this,t,0)}}}function a(t){if(c===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(t);
// if clearTimeout wasn't available but was latter defined
if((c===r||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return c(t)}catch(e){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return c.call(null,t)}catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return c.call(this,t)}}}function o(){_&&h&&(_=!1,h.length?m=h.concat(m):p=-1,m.length&&s())}function s(){if(!_){var t=i(o);_=!0;for(var e=m.length;e;){for(h=m,m=[];++p<e;)h&&h[p].run();p=-1,e=m.length}h=null,_=!1,a(t)}}
// v8 likes predictible objects
function u(t,e){this.fun=t,this.array=e}function l(){}
// shim for using process in browser
var d,c,f=t.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(t){d=n}try{c="function"==typeof clearTimeout?clearTimeout:r}catch(t){c=r}}();var h,m=[],_=!1,p=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new u(t,e)),1!==m.length||_||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",// empty string to avoid regexp issues
f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},/* 195 */
/***/
function(t,e,n){t.exports={default:n(446),__esModule:!0}},/* 196 */
/***/
function(t,e,n){
// most Object methods by ES6 should accept primitives
var r=n(51),i=n(24),a=n(72);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",o)}},/* 197 */
/***/
function(t,e,n){var r,i;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&t.push(o)}else if("object"===i)for(var s in r)a.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}var a={}.hasOwnProperty;void 0!==t&&t.exports?(n.default=n,t.exports=n):(r=[],void 0!==(i=function(){return n}.apply(e,r))&&(t.exports=i))}()},/* 198 */
/***/
function(t,e,n){t.exports={default:n(450),__esModule:!0}},/* 199 */
/***/
function(t,e,n){/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function r(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var i=n(200);t.exports=r},/* 200 */
/***/
function(t,e,n){var r=n(56),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},/* 201 */
/***/
function(t,e,n){/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function r(t){if(!a(t))return!1;
// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var e=i(t);return e==s||e==u||e==o||e==l}var i=n(75),a=n(46),o="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";t.exports=r},/* 202 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(e){/** Detect free variable `global` from Node.js. */
var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(84))},/* 203 */
/***/
function(t,e){/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function n(t){if(null!=t){try{return i.call(t)}catch(t){}try{return t+""}catch(t){}}return""}/** Used for built-in method references. */
var r=Function.prototype,i=r.toString;t.exports=n},/* 204 */
/***/
function(t,e){/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function n(t){return t}t.exports=n},/* 205 */
/***/
function(t,e,n){/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function r(t,e,n){return e=a(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,s=a(r.length-e,0),u=Array(s);++o<s;)u[o]=r[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=r[o];return l[e]=n(u),i(t,this,l)}}var i=n(472),a=Math.max;t.exports=r},/* 206 */
/***/
function(t,e,n){var r=n(473),i=n(475),a=i(r);t.exports=a},/* 207 */
/***/
function(t,e){/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}/** Used as references for various `Number` constants. */
var r=9007199254740991;t.exports=n},/* 208 */
/***/
function(t,e){/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function n(t,e){var n=typeof t;return!!(e=null==e?r:e)&&("number"==n||"symbol"!=n&&i.test(t))&&t>-1&&t%1==0&&t<e}/** Used as references for various `Number` constants. */
var r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;t.exports=n},/* 209 */
/***/
function(t,e,n){/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function r(t,e){var n=o(t),r=!n&&a(t),d=!n&&!r&&s(t),f=!n&&!r&&!d&&l(t),h=n||r||d||f,m=h?i(t.length,String):[],_=m.length;for(var p in t)!e&&!c.call(t,p)||h&&(
// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==p||
// Node.js 0.10 has enumerable non-index properties on buffers.
d&&("offset"==p||"parent"==p)||
// PhantomJS 2 has enumerable non-index properties on typed arrays.
f&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||
// Skip index properties.
u(p,_))||m.push(p);return m}var i=n(477),a=n(210),o=n(58),s=n(211),u=n(208),l=n(480),d=Object.prototype,c=d.hasOwnProperty;t.exports=r},/* 210 */
/***/
function(t,e,n){var r=n(478),i=n(57),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return i(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},/* 211 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(t){var r=n(30),i=n(479),a="object"==typeof e&&e&&!e.nodeType&&e,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===a,u=s?r.Buffer:void 0,l=u?u.isBuffer:void 0,d=l||i;t.exports=d}).call(e,n(101)(t))},/* 212 */
/***/
function(t,e){/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function n(t,e){return function(n){return t(e(n))}}t.exports=n},/* 213 */
/***/
function(t,e,n){"use strict";/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
(t.exports={}).forEach=function(t,e){for(var n=0;n<t.length;n++){var r=e(t[n]);if(r)return r}}},/* 214 */
/***/
function(t,e,n){"use strict";var r=t.exports={};r.isIE=function(t){return!!function(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/")}()&&(!t||t===function(){var t=3,e=document.createElement("div"),n=e.getElementsByTagName("i");do{e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(n[0]);return t>4?t:void 0}())},r.isLegacyOpera=function(){return!!window.opera}},/* 215 */
/***/
function(t,e){/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function n(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}t.exports=n},/* 216 */
/***/
function(t,e,n){/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var i=n(511),a=n(518),o=n(520),s=n(521),u=n(522);
// Add methods to `MapCache`.
r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,t.exports=r},/* 217 */
/***/
function(t,e,n){/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function r(t){return o(t)?i(t,!0):a(t)}var i=n(209),a=n(526),o=n(98);t.exports=r},/* 218 */
/***/
function(t,e){/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function n(){return[]}t.exports=n},/* 219 */
/***/
function(t,e,n){var r=n(147),i=n(148),a=n(146),o=n(218),s=Object.getOwnPropertySymbols,u=s?function(t){for(var e=[];t;)r(e,a(t)),t=i(t);return e}:o;t.exports=u},/* 220 */
/***/
function(t,e,n){/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function r(t,e,n){var r=e(t);return a(t)?r:i(r,n(t))}var i=n(147),a=n(58);t.exports=r},/* 221 */
/***/
function(t,e,n){/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function r(t){return i(t,o,a)}var i=n(220),a=n(219),o=n(217);t.exports=r},/* 222 */
/***/
function(t,e,n){/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function r(t){if("string"==typeof t||i(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}var i=n(102),a=1/0;t.exports=r},/* 223 */
/***/
function(t,e){},/* 224 */
/***/
function(t,e,n){/* MIT license */
var r=n(587),i=n(589),a=function(t){if(t instanceof a)return t;if(!(this instanceof a))return new a(t);this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};
// parse Color() argument
var e;"string"==typeof t?(e=i.getRgba(t),e?this.setValues("rgb",e):(e=i.getHsla(t))?this.setValues("hsl",e):(e=i.getHwb(t))&&this.setValues("hwb",e)):"object"==typeof t&&(e=t,void 0!==e.r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e))};a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=t<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return i.hexString(this.values.rgb)},rgbString:function(){return i.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return i.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return i.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return i.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return i.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return i.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return i.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var r=t[n]/255;e[n]=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){
// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){
// YIQ equation from http://24ways.org/2010/calculating-color-contrast
var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
mix:function(t,e){var n=this,r=t,i=void 0===e?.5:e,a=2*i-1,o=n.alpha()-r.alpha(),s=((a*o==-1?a:(a+o)/(1+a*o))+1)/2,u=1-s;return this.rgb(s*n.red()+u*r.red(),s*n.green()+u*r.green(),s*n.blue()+u*r.blue()).alpha(n.alpha()*i+r.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){
// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
// making the final build way to big to embed in Chart.js. So let's do it manually,
// assuming that values to clone are 1 dimension arrays containing only numbers,
// except 'alpha' which is a number.
var t,e,n=new a,r=this.values,i=n.values;for(var o in r)r.hasOwnProperty(o)&&(t=r[o],e={}.toString.call(t),"[object Array]"===e?i[o]=t.slice(0):"[object Number]"===e?i[o]=t:console.error("unexpected color value:",t));return n}},a.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(t){for(var e=this.values,n={},r=0;r<t.length;r++)n[t.charAt(r)]=e[t][r];
// {r: 255, g: 255, b: 255, a: 0.4}
return 1!==e.alpha&&(n.a=e.alpha),n},a.prototype.setValues=function(t,e){var n,i=this.values,a=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)
// [10, 10, 10]
i[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){
// {r: 10, g: 10, b: 10}
for(n=0;n<t.length;n++)i[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[a[t][0]]){
// {red: 10, green: 10, blue: 10}
var u=a[t];for(n=0;n<t.length;n++)i[t][n]=e[u[n]];s=e.alpha}if(i.alpha=Math.max(0,Math.min(1,void 0===s?i.alpha:s)),"alpha"===t)return!1;var l;
// cap values of the space prior converting all values
for(n=0;n<t.length;n++)l=Math.max(0,Math.min(o[t][n],i[t][n])),i[t][n]=Math.round(l);
// convert to all the other color spaces
for(var d in a)d!==t&&(i[d]=r[t][d](i[t]));return!0},a.prototype.setSpace=function(t,e){var n=e[0];
// color.rgb(10, 10, 10)
return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},a.prototype.setChannel=function(t,e,n){var r=this.values[t];
// color.red(100)
return void 0===n?r[e]:n===r[e]?this:(r[e]=n,this.setValues(t,r),this)},"undefined"!=typeof window&&(window.Color=a),t.exports=a},/* 225 */
/***/
function(t,e,n){"use strict";/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {Point} the event position
 */
function r(t,e){return t.native?{x:t.x,y:t.y}:l.getRelativePosition(t,e)}/**
 * Helper function to traverse all of the visible elements in the chart
 * @param chart {chart} the chart
 * @param handler {Function} the callback to execute for each visible item
 */
function i(t,e){var n,r,i,a,o,s=t.data.datasets;for(r=0,a=s.length;r<a;++r)if(t.isDatasetVisible(r))for(n=t.getDatasetMeta(r),i=0,o=n.data.length;i<o;++i){var u=n.data[i];u._view.skip||e(u)}}/**
 * Helper function to get the items that intersect the event position
 * @param items {ChartElement[]} elements to filter
 * @param position {Point} the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function a(t,e){var n=[];return i(t,function(t){t.inRange(e.x,e.y)&&n.push(t)}),n}/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param chart {Chart} the chart to look at elements from
 * @param position {Point} the point to be nearest to
 * @param intersect {Boolean} if true, only consider items that intersect the position
 * @param distanceMetric {Function} function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function o(t,e,n,r){var a=Number.POSITIVE_INFINITY,o=[];return i(t,function(t){if(!n||t.inRange(e.x,e.y)){var i=t.getCenterPoint(),s=r(e,i);s<a?(o=[t],a=s):s===a&&
// Can have multiple items at the same distance in which case we sort by size
o.push(t)}}),o}/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {String} axis the axis mode. x|y|xy
 */
function s(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,r){var i=e?Math.abs(t.x-r.x):0,a=n?Math.abs(t.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(a,2))}}function u(t,e,n){var i=r(e,t);
// Default axis for index mode is 'x' to match old behaviour
n.axis=n.axis||"x";var u=s(n.axis),l=n.intersect?a(t,i):o(t,i,!1,u),d=[];return l.length?(t.data.datasets.forEach(function(e,n){if(t.isDatasetVisible(n)){var r=t.getDatasetMeta(n),i=r.data[l[0]._index];
// don't count items that are skipped (null data)
i&&!i._view.skip&&d.push(i)}}),d):[]}var l=n(5);/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */
/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
t.exports={
// Helper function for different modes
modes:{single:function(t,e){var n=r(e,t),a=[];return i(t,function(t){if(t.inRange(n.x,n.y))return a.push(t),a}),a.slice(0,1)},/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
label:u,/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
index:u,/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
dataset:function(t,e,n){var i=r(e,t);n.axis=n.axis||"xy";var u=s(n.axis),l=n.intersect?a(t,i):o(t,i,!1,u);return l.length>0&&(l=t.getDatasetMeta(l[0]._datasetIndex).data),l},/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
"x-axis":function(t,e){return u(t,e,{intersect:!1})},/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
point:function(t,e){return a(t,r(e,t))},/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
nearest:function(t,e,n){var i=r(e,t);n.axis=n.axis||"xy";var a=s(n.axis),u=o(t,i,n.intersect,a);
// Return only 1 item
// We have multiple items at the same distance from the event. Now sort by smallest
return u.length>1&&u.sort(function(t,e){var n=t.getArea(),r=e.getArea(),i=n-r;
// if equal sort by dataset index
return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),u.slice(0,1)},/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
x:function(t,e,n){var a=r(e,t),o=[],s=!1;
// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
return i(t,function(t){t.inXRange(a.x)&&o.push(t),t.inRange(a.x,a.y)&&(s=!0)}),n.intersect&&!s&&(o=[]),o},/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
y:function(t,e,n){var a=r(e,t),o=[],s=!1;
// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
return i(t,function(t){t.inYRange(a.y)&&o.push(t),t.inRange(a.x,a.y)&&(s=!0)}),n.intersect&&!s&&(o=[]),o}}}},/* 226 */
/***/
function(t,e,n){"use strict";var r=n(5),i=n(595),a=n(596),o=a._enabled?a:i;/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
t.exports=r.extend({/**
	 * @since 2.7.0
	 */
initialize:function(){},/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {Object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
acquireContext:function(){},/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {Boolean} true if the method succeeded, else false
	 */
releaseContext:function(){},/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {String} type - The ({@link IEvent}) type to listen for
	 * @param {Function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
addEventListener:function(){},/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart -Chart from which to remove the listener
	 * @param {String} type - The ({@link IEvent}) type to remove
	 * @param {Function} listener - The listener function to remove from the event target.
	 */
removeEventListener:function(){}},o)},/* 227 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(5);r._set("global",{plugins:{}}),/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */
t.exports={/**
	 * Globally registered plugins.
	 * @private
	 */
_plugins:[],/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */
_cacheId:0,/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {Array|Object} plugins plugin instance(s).
	 */
register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {Array|Object} plugins plugin instance(s).
	 */
unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}),this._cacheId++},/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */
clear:function(){this._plugins=[],this._cacheId++},/**
	 * Returns the number of registered plugins?
	 * @returns {Number}
	 * @since 2.1.5
	 */
count:function(){return this._plugins.length},/**
	 * Returns all registered plugin instances.
	 * @returns {Array} array of plugin objects.
	 * @since 2.1.5
	 */
getAll:function(){return this._plugins},/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Object} chart - The chart instance for which plugins should be called.
	 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {Boolean} false if any of the plugins return false, else returns true.
	 */
notify:function(t,e,n){var r,i,a,o,s,u=this.descriptors(t),l=u.length;for(r=0;r<l;++r)if(i=u[r],a=i.plugin,"function"==typeof(s=a[e])&&(o=[t].concat(n||[]),o.push(i.options),!1===s.apply(a,o)))return!1;return!0},/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {Array} [{ plugin, options }]
	 * @private
	 */
descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],a=[],o=t&&t.config||{},s=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(t){if(-1===n.indexOf(t)){var e=t.id,o=s[e];!1!==o&&(!0===o&&(o=i.clone(r.global.plugins[e])),n.push(t),a.push({plugin:t,options:o||{}}))}}),e.descriptors=a,e.id=this._cacheId,a},/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */
_invalidate:function(t){delete t.$plugins}}},/* 228 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(t){return/^nm$/i.test(t)},meridiem:function(t,e,n){return t<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,// Maandag is die eerste dag van die week.
doy:4}})})},/* 229 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=function(t){return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},i={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function(t){return function(e,n,a,o){var s=r(e),u=i[t][r(e)];return 2===s&&(u=u[n?0:1]),u.replace(/%d/i,e)}},o=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return t.defineLocale("ar",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),ss:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(t){return n[t]}).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]}).replace(/,/g,"،")},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 230 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,// Sunday is the first day of the week.
doy:4}})})},/* 231 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,// Sunday is the first day of the week.
doy:12}})})},/* 232 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(t){return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(t){return function(e,i,a,o){var s=n(e),u=r[t][n(e)];return 2===s&&(u=u[i?0:1]),u.replace(/%d/i,e)}},a=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return t.defineLocale("ar-ly",{months:a,monthsShort:a,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),ss:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]}).replace(/,/g,"،")},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 233 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 234 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};return t.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(t){return"م"===t},meridiem:function(t,e,n){return t<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(t){return n[t]}).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]}).replace(/,/g,"،")},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 235 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 236 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};return t.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyə",ss:"%d saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(t){return/^(gündüz|axşam)$/.test(t)},meridiem:function(t,e,n){return t<4?"gecə":t<12?"səhər":t<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(t){if(0===t)// special case for zero
return t+"-ıncı";var n=t%10,r=t%100-n,i=t>=100?100:null;return t+(e[n]||e[r]||e[i])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 237 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e){var n=t.split("_");return e%10==1&&e%100!=11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,r){var i={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:n?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===r?n?"хвіліна":"хвіліну":"h"===r?n?"гадзіна":"гадзіну":t+" "+e(i[r],+t)}return t.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:n,mm:n,h:n,hh:n,d:"дзень",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(t){return/^(дня|вечара)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночы":t<12?"раніцы":t<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return t%10!=2&&t%10!=3||t%100==12||t%100==13?t+"-ы":t+"-і";case"D":return t+"-га";default:return t}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 238 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(t){var e=t%10,n=t%100;return 0===t?t+"-ев":0===n?t+"-ен":n>10&&n<20?t+"-ти":1===e?t+"-ви":2===e?t+"-ри":7===e||8===e?t+"-ми":t+"-ти"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 239 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 240 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};return t.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(t){return t.replace(/[১২৩৪৫৬৭৮৯০]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(t,e){return 12===t&&(t=0),"রাত"===e&&t>=4||"দুপুর"===e&&t<5||"বিকাল"===e?t+12:t},meridiem:function(t,e,n){return t<4?"রাত":t<10?"সকাল":t<17?"দুপুর":t<20?"বিকাল":"রাত"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 241 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};return t.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",ss:"%d སྐར་ཆ།",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(t){return t.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(t,e){return 12===t&&(t=0),"མཚན་མོ"===e&&t>=4||"ཉིན་གུང"===e&&t<5||"དགོང་དག"===e?t+12:t},meridiem:function(t,e,n){return t<4?"མཚན་མོ":t<10?"ཞོགས་ཀས":t<17?"ཉིན་གུང":t<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 242 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n){return t+" "+i({mm:"munutenn",MM:"miz",dd:"devezh"}[n],t)}function n(t){switch(r(t)){case 1:case 3:case 4:case 5:case 9:return t+" bloaz";default:return t+" vloaz"}}function r(t){return t>9?r(t%10):t}function i(t,e){return 2===e?a(t):t}function a(t){var e={m:"v",b:"v",d:"z"};return void 0===e[t.charAt(0)]?t:e[t.charAt(0)]+t.substring(1)}return t.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:e,h:"un eur",hh:"%d eur",d:"un devezh",dd:e,M:"ur miz",MM:e,y:"ur bloaz",yy:n},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(t){return t+(1===t?"añ":"vet")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 243 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n){var r=t+" ";switch(n){case"ss":return r+=1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi";case"m":return e?"jedna minuta":"jedne minute";case"mm":return r+=1===t?"minuta":2===t||3===t||4===t?"minute":"minuta";case"h":return e?"jedan sat":"jednog sata";case"hh":return r+=1===t?"sat":2===t||3===t||4===t?"sata":"sati";case"dd":return r+=1===t?"dan":"dana";case"MM":return r+=1===t?"mjesec":2===t||3===t||4===t?"mjeseca":"mjeseci";case"yy":return r+=1===t?"godina":2===t||3===t||4===t?"godine":"godina"}}return t.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:e,m:e,mm:e,h:e,hh:e,d:"dan",dd:e,M:"mjesec",MM:e,y:"godinu",yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 244 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(t,e){var n=1===t?"r":2===t?"n":3===t?"r":4===t?"t":"è";return"w"!==e&&"W"!==e||(n="a"),t+n},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 245 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t){return t>1&&t<5&&1!=~~(t/10)}function n(t,n,r,i){var a=t+" ";switch(r){case"s":// a few seconds / in a few seconds / a few seconds ago
return n||i?"pár sekund":"pár sekundami";case"ss":// 9 seconds / in 9 seconds / 9 seconds ago
// 9 seconds / in 9 seconds / 9 seconds ago
return n||i?a+(e(t)?"sekundy":"sekund"):a+"sekundami";case"m":// a minute / in a minute / a minute ago
return n?"minuta":i?"minutu":"minutou";case"mm":// 9 minutes / in 9 minutes / 9 minutes ago
// 9 minutes / in 9 minutes / 9 minutes ago
return n||i?a+(e(t)?"minuty":"minut"):a+"minutami";case"h":// an hour / in an hour / an hour ago
return n?"hodina":i?"hodinu":"hodinou";case"hh":// 9 hours / in 9 hours / 9 hours ago
// 9 hours / in 9 hours / 9 hours ago
return n||i?a+(e(t)?"hodiny":"hodin"):a+"hodinami";case"d":// a day / in a day / a day ago
return n||i?"den":"dnem";case"dd":// 9 days / in 9 days / 9 days ago
// 9 days / in 9 days / 9 days ago
return n||i?a+(e(t)?"dny":"dní"):a+"dny";case"M":// a month / in a month / a month ago
return n||i?"měsíc":"měsícem";case"MM":// 9 months / in 9 months / 9 months ago
// 9 months / in 9 months / 9 months ago
return n||i?a+(e(t)?"měsíce":"měsíců"):a+"měsíci";case"y":// a year / in a year / a year ago
return n||i?"rok":"rokem";case"yy":// 9 years / in 9 years / 9 years ago
// 9 years / in 9 years / 9 years ago
return n||i?a+(e(t)?"roky":"let"):a+"lety"}}var r="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),i="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return t.defineLocale("cs",{months:r,monthsShort:i,monthsParse:function(t,e){var n,r=[];for(n=0;n<12;n++)
// use custom parser to solve problem with July (červenec)
r[n]=new RegExp("^"+t[n]+"$|^"+e[n]+"$","i");return r}(r,i),shortMonthsParse:function(t){var e,n=[];for(e=0;e<12;e++)n[e]=new RegExp("^"+t[e]+"$","i");return n}(i),longMonthsParse:function(t){var e,n=[];for(e=0;e<12;e++)n[e]=new RegExp("^"+t[e]+"$","i");return n}(r),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 246 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(t){return t+(/сехет$/i.exec(t)?"рен":/ҫул$/i.exec(t)?"тан":"ран")},past:"%s каялла",s:"пӗр-ик ҫеккунт",ss:"%d ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 247 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,
// time formats are the same as en-gb
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
// traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
ordinal:function(t){var e=t,n="",r=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed",// 1af to 10fed
"eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return e>20?n=40===e||50===e||60===e||80===e||100===e?"fed":"ain":e>0&&(n=r[e]),t+n},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 248 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 249 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?i[n][0]:i[n][1]}return t.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 250 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?i[n][0]:i[n][1]}return t.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 251 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?i[n][0]:i[n][1]}return t.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 252 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];return t.defineLocale("dv",{months:e,monthsShort:e,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(t){return"މފ"===t},meridiem:function(t,e,n){return t<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",ss:"d% ސިކުންތު",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:7,// Sunday is the first day of the week.
doy:12}})})},/* 253 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}return t.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(t,e){return t?"string"==typeof e&&/D/.test(e.substring(0,e.indexOf("MMMM")))?this._monthsGenitiveEl[t.month()]:this._monthsNominativeEl[t.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(t,e,n){return t>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(t){return"μ"===(t+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(t,n){var r=this._calendarEl[t],i=n&&n.hours();return e(r)&&(r=r.apply(n)),r.replace("{}",i%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 254 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 255 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}})})},/* 256 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 257 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 258 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}})})},/* 259 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 260 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(t){return"p"===t.charAt(0).toLowerCase()},meridiem:function(t,e,n){return t>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",ss:"%d sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",//ne 'diurno', ĉar estas uzita por proksimumo
dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 261 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],i=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return t.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,r){return t?/-MMM-/.test(r)?n[t.month()]:e[t.month()]:e},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 262 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],i=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return t.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,r){return t?/-MMM-/.test(r)?n[t.month()]:e[t.month()]:e},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 263 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return t.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,r){return t?/-MMM-/.test(r)?n[t.month()]:e[t.month()]:e},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 264 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[t+"sekundi",t+"sekundit"],m:["ühe minuti","üks minut"],mm:[t+" minuti",t+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[t+" tunni",t+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[t+" kuu",t+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[t+" aasta",t+" aastat"]};return e?i[n][2]?i[n][2]:i[n][1]:r?i[n][0]:i[n][1]}return t.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:"%d päeva",M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 265 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 266 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};return t.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(t){return/بعد از ظهر/.test(t)},meridiem:function(t,e,n){return t<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"ثانیه d%",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(t){return t.replace(/[۰-۹]/g,function(t){return n[t]}).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]}).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 267 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,r,i){var a="";switch(r){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"ss":return i?"sekunnin":"sekuntia";case"m":return i?"minuutin":"minuutti";case"mm":a=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":a=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":a=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":a=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":a=i?"vuoden":"vuotta"}return a=n(t,i)+" "+a}function n(t,e){return t<10?e?i[t]:r[t]:t}var r="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),i=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",r[7],r[8],r[9]];return t.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 268 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",ss:"%d sekundir",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 269 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(t,e){switch(e){
// TODO: Return 'e' when day of month > 1. Move this case inside
// block for masculine words below.
// See https://github.com/moment/moment/issues/3375
case"D":return t+(1===t?"er":"");
// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"DDD":case"d":return t+(1===t?"er":"e");
// Words with feminine grammatical gender: semaine
case"w":case"W":return t+(1===t?"re":"e")}},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 270 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(t,e){switch(e){
// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"D":case"DDD":case"d":return t+(1===t?"er":"e");
// Words with feminine grammatical gender: semaine
case"w":case"W":return t+(1===t?"re":"e")}}})})},/* 271 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(t,e){switch(e){
// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"D":case"DDD":case"d":return t+(1===t?"er":"e");
// Words with feminine grammatical gender: semaine
case"w":case"W":return t+(1===t?"re":"e")}},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 272 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");return t.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(t,r){return t?/-MMM-/.test(r)?n[t.month()]:e[t.month()]:e},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 273 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],n=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],r=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],i=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],a=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"];return t.defineLocale("gd",{months:e,monthsShort:n,monthsParseExact:!0,weekdays:r,weekdaysShort:i,weekdaysMin:a,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(t){return t+(1===t?"d":t%10==2?"na":"mh")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 274 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(t){return 0===t.indexOf("un")?"n"+t:"en "+t},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 275 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={s:["thodde secondanim","thodde second"],ss:[t+" secondanim",t+" second"],m:["eka mintan","ek minute"],mm:[t+" mintanim",t+" mintam"],h:["eka horan","ek hor"],hh:[t+" horanim",t+" horam"],d:["eka disan","ek dis"],dd:[t+" disanim",t+" dis"],M:["eka mhoinean","ek mhoino"],MM:[t+" mhoineanim",t+" mhoine"],y:["eka vorsan","ek voros"],yy:[t+" vorsanim",t+" vorsam"]};return e?i[n][0]:i[n][1]}return t.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(t,e){switch(e){
// the ordinal 'er' only applies to day of the month
case"D":return t+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return t}},week:{dow:1,// Monday is the first day of the week.
doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(t,e){return 12===t&&(t=0),"rati"===e?t<4?t:t+12:"sokalli"===e?t:"donparam"===e?t>12?t:t+12:"sanje"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"rati":t<12?"sokalli":t<16?"donparam":t<20?"sanje":"rati"}})})},/* 276 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"};return t.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પેહલા",s:"અમુક પળો",ss:"%d સેકંડ",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function(t){return t.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},
// Gujarati notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function(t,e){return 12===t&&(t=0),"રાત"===e?t<4?t:t+12:"સવાર"===e?t:"બપોર"===e?t>=10?t:t+12:"સાંજ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"રાત":t<10?"સવાર":t<17?"બપોર":t<20?"સાંજ":"રાત"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 277 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(t){return 2===t?"שעתיים":t+" שעות"},d:"יום",dd:function(t){return 2===t?"יומיים":t+" ימים"},M:"חודש",MM:function(t){return 2===t?"חודשיים":t+" חודשים"},y:"שנה",yy:function(t){return 2===t?"שנתיים":t%10==0&&10!==t?t+" שנה":t+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(t){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(t)},meridiem:function(t,e,n){return t<5?"לפנות בוקר":t<10?"בבוקר":t<12?n?'לפנה"צ':"לפני הצהריים":t<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}})})},/* 278 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return t.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(t){return t.replace(/[१२३४५६७८९०]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},
// Hindi notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(t,e){return 12===t&&(t=0),"रात"===e?t<4?t:t+12:"सुबह"===e?t:"दोपहर"===e?t>=10?t:t+12:"शाम"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"रात":t<10?"सुबह":t<17?"दोपहर":t<20?"शाम":"रात"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 279 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n){var r=t+" ";switch(n){case"ss":return r+=1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi";case"m":return e?"jedna minuta":"jedne minute";case"mm":return r+=1===t?"minuta":2===t||3===t||4===t?"minute":"minuta";case"h":return e?"jedan sat":"jednog sata";case"hh":return r+=1===t?"sat":2===t||3===t||4===t?"sata":"sati";case"dd":return r+=1===t?"dan":"dana";case"MM":return r+=1===t?"mjesec":2===t||3===t||4===t?"mjeseca":"mjeseci";case"yy":return r+=1===t?"godina":2===t||3===t||4===t?"godine":"godina"}}return t.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:e,m:e,mm:e,h:e,hh:e,d:"dan",dd:e,M:"mjesec",MM:e,y:"godinu",yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 280 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i=t;switch(n){case"s":return r||e?"néhány másodperc":"néhány másodperce";case"ss":return i+(r||e)?" másodperc":" másodperce";case"m":return"egy"+(r||e?" perc":" perce");case"mm":return i+(r||e?" perc":" perce");case"h":return"egy"+(r||e?" óra":" órája");case"hh":return i+(r||e?" óra":" órája");case"d":return"egy"+(r||e?" nap":" napja");case"dd":return i+(r||e?" nap":" napja");case"M":return"egy"+(r||e?" hónap":" hónapja");case"MM":return i+(r||e?" hónap":" hónapja");case"y":return"egy"+(r||e?" év":" éve");case"yy":return i+(r||e?" év":" éve")}return""}function n(t){return(t?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return t.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(t){return"u"===t.charAt(1).toLowerCase()},meridiem:function(t,e,n){return t<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 281 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",ss:"%d վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(t){return/^(ցերեկվա|երեկոյան)$/.test(t)},meridiem:function(t){return t<4?"գիշերվա":t<12?"առավոտվա":t<17?"ցերեկվա":"երեկոյան"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(t,e){switch(e){case"DDD":case"w":case"W":case"DDDo":return 1===t?t+"-ին":t+"-րդ";default:return t}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 282 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(t,e){return 12===t&&(t=0),"pagi"===e?t:"siang"===e?t>=11?t:t+12:"sore"===e||"malam"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"pagi":t<15?"siang":t<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 283 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t){return t%100==11||t%10!=1}function n(t,n,r,i){var a=t+" ";switch(r){case"s":return n||i?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return e(t)?a+(n||i?"sekúndur":"sekúndum"):a+"sekúnda";case"m":return n?"mínúta":"mínútu";case"mm":return e(t)?a+(n||i?"mínútur":"mínútum"):n?a+"mínúta":a+"mínútu";case"hh":return e(t)?a+(n||i?"klukkustundir":"klukkustundum"):a+"klukkustund";case"d":return n?"dagur":i?"dag":"degi";case"dd":return e(t)?n?a+"dagar":a+(i?"daga":"dögum"):n?a+"dagur":a+(i?"dag":"degi");case"M":return n?"mánuður":i?"mánuð":"mánuði";case"MM":return e(t)?n?a+"mánuðir":a+(i?"mánuði":"mánuðum"):n?a+"mánuður":a+(i?"mánuð":"mánuði");case"y":return n||i?"ár":"ári";case"yy":return e(t)?a+(n||i?"ár":"árum"):a+(n||i?"ár":"ári")}}return t.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 284 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(t){return(/^[0-9].+$/.test(t)?"tra":"in")+" "+t},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 285 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function(t){return"午後"===t},meridiem:function(t,e,n){return t<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function(t){return t.week()<this.week()?"[来週]dddd LT":"dddd LT"},lastDay:"[昨日] LT",lastWeek:function(t){return this.week()<t.week()?"[先週]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";default:return t}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})})},/* 286 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(t,e){return 12===t&&(t=0),"enjing"===e?t:"siyang"===e?t>=11?t:t+12:"sonten"===e||"ndalu"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"enjing":t<15?"siyang":t<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 287 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(t){return/(წამი|წუთი|საათი|წელი)/.test(t)?t.replace(/ი$/,"ში"):t+"ში"},past:function(t){return/(წამი|წუთი|საათი|დღე|თვე)/.test(t)?t.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(t)?t.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(t){return 0===t?t:1===t?t+"-ლი":t<20||t<=100&&t%20==0||t%100==0?"მე-"+t:t+"-ე"},week:{dow:1,doy:7}})})},/* 288 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};return t.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(t){var n=t%10,r=t>=100?100:null;return t+(e[t]||e[n]||e[r])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 289 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩",0:"០"},n={"១":"1","២":"2","៣":"3","៤":"4","៥":"5","៦":"6","៧":"7","៨":"8","៩":"9","០":"0"};return t.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ព្រឹក|ល្ងាច/,isPM:function(t){return"ល្ងាច"===t},meridiem:function(t,e,n){return t<12?"ព្រឹក":"ល្ងាច"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",ss:"%d វិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},dayOfMonthOrdinalParse:/ទី\d{1,2}/,ordinal:"ទី%d",preparse:function(t){return t.replace(/[១២៣៤៥៦៧៨៩០]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 290 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"};return t.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",ss:"%d ಸೆಕೆಂಡುಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function(t){return t.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function(t,e){return 12===t&&(t=0),"ರಾತ್ರಿ"===e?t<4?t:t+12:"ಬೆಳಿಗ್ಗೆ"===e?t:"ಮಧ್ಯಾಹ್ನ"===e?t>=10?t:t+12:"ಸಂಜೆ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"ರಾತ್ರಿ":t<10?"ಬೆಳಿಗ್ಗೆ":t<17?"ಮಧ್ಯಾಹ್ನ":t<20?"ಸಂಜೆ":"ರಾತ್ರಿ"},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function(t){return t+"ನೇ"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 291 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"일";case"M":return t+"월";case"w":case"W":return t+"주";default:return t}},meridiemParse:/오전|오후/,isPM:function(t){return"오후"===t},meridiem:function(t,e,n){return t<12?"오전":"오후"}})})},/* 292 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};return t.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",ss:"%d секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(t){var n=t%10,r=t>=100?100:null;return t+(e[t]||e[n]||e[r])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 293 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return e?i[n][0]:i[n][1]}function n(t){return i(t.substr(0,t.indexOf(" ")))?"a "+t:"an "+t}function r(t){return i(t.substr(0,t.indexOf(" ")))?"viru "+t:"virun "+t}/**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
function i(t){if(t=parseInt(t,10),isNaN(t))return!1;if(t<0)
// Negative Number --> always true
return!0;if(t<10)
// Only 1 digit
return 4<=t&&t<=7;if(t<100){
// 2 digits
var e=t%10,n=t/10;return i(0===e?n:e)}if(t<1e4){
// 3 or 4 digits --> recursively check first digit
for(;t>=10;)t/=10;return i(t)}
// Anything larger than 4 digits: recursively check first n-3 digits
return t/=1e3,i(t)}return t.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){
// Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:n,past:r,s:"e puer Sekonnen",ss:"%d Sekonnen",m:e,mm:"%d Minutten",h:e,hh:"%d Stonnen",d:e,dd:"%d Deeg",M:e,MM:"%d Méint",y:e,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 294 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(t){return"ຕອນແລງ"===t},meridiem:function(t,e,n){return t<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",ss:"%d ວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function(t){return"ທີ່"+t}})})},/* 295 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){return e?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"}function n(t,e,n,r){return e?i(n)[0]:r?i(n)[1]:i(n)[2]}function r(t){return t%10==0||t>10&&t<20}function i(t){return o[t].split("_")}function a(t,e,a,o){var s=t+" ";return 1===t?s+n(t,e,a[0],o):e?s+(r(t)?i(a)[1]:i(a)[0]):o?s+i(a)[1]:s+(r(t)?i(a)[1]:i(a)[2])}var o={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};return t.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:e,ss:a,m:n,mm:a,h:n,hh:a,d:n,dd:a,M:n,MM:a,y:n,yy:a},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(t){return t+"-oji"},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 296 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";/**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
function e(t,e,n){return n?e%10==1&&e%100!=11?t[2]:t[3]:e%10==1&&e%100!=11?t[0]:t[1]}function n(t,n,r){return t+" "+e(a[r],t,n)}function r(t,n,r){return e(a[r],t,n)}function i(t,e){return e?"dažas sekundes":"dažām sekundēm"}var a={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};return t.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:i,ss:n,m:r,mm:n,h:r,hh:n,d:r,dd:n,M:r,MM:n,y:r,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 297 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={words:{//Different grammatical cases
ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(t,e){return 1===t?e[0]:t>=2&&t<=4?e[1]:e[2]},translate:function(t,n,r){var i=e.words[r];return 1===r.length?n?i[0]:i[1]:t+" "+e.correctGrammaticalCase(t,i)}};return t.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:e.translate,m:e.translate,mm:e.translate,h:e.translate,hh:e.translate,d:"dan",dd:e.translate,M:"mjesec",MM:e.translate,y:"godinu",yy:e.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 298 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",ss:"%d hēkona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 299 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(t){var e=t%10,n=t%100;return 0===t?t+"-ев":0===n?t+"-ен":n>10&&n<20?t+"-ти":1===e?t+"-ви":2===e?t+"-ри":7===e||8===e?t+"-ми":t+"-ти"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 300 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",ss:"%d സെക്കൻഡ്",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(t,e){return 12===t&&(t=0),"രാത്രി"===e&&t>=4||"ഉച്ച കഴിഞ്ഞ്"===e||"വൈകുന്നേരം"===e?t+12:t},meridiem:function(t,e,n){return t<4?"രാത്രി":t<12?"രാവിലെ":t<17?"ഉച്ച കഴിഞ്ഞ്":t<20?"വൈകുന്നേരം":"രാത്രി"}})})},/* 301 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){switch(n){case"s":return e?"хэдхэн секунд":"хэдхэн секундын";case"ss":return t+(e?" секунд":" секундын");case"m":case"mm":return t+(e?" минут":" минутын");case"h":case"hh":return t+(e?" цаг":" цагийн");case"d":case"dd":return t+(e?" өдөр":" өдрийн");case"M":case"MM":return t+(e?" сар":" сарын");case"y":case"yy":return t+(e?" жил":" жилийн");default:return t}}return t.defineLocale("mn",{months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),monthsParseExact:!0,weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:function(t){return"ҮХ"===t},meridiem:function(t,e,n){return t<12?"ҮӨ":"ҮХ"},calendar:{sameDay:"[Өнөөдөр] LT",nextDay:"[Маргааш] LT",nextWeek:"[Ирэх] dddd LT",lastDay:"[Өчигдөр] LT",lastWeek:"[Өнгөрсөн] dddd LT",sameElse:"L"},relativeTime:{future:"%s дараа",past:"%s өмнө",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+" өдөр";default:return t}}})})},/* 302 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i="";if(e)switch(n){case"s":i="काही सेकंद";break;case"ss":i="%d सेकंद";break;case"m":i="एक मिनिट";break;case"mm":i="%d मिनिटे";break;case"h":i="एक तास";break;case"hh":i="%d तास";break;case"d":i="एक दिवस";break;case"dd":i="%d दिवस";break;case"M":i="एक महिना";break;case"MM":i="%d महिने";break;case"y":i="एक वर्ष";break;case"yy":i="%d वर्षे"}else switch(n){case"s":i="काही सेकंदां";break;case"ss":i="%d सेकंदां";break;case"m":i="एका मिनिटा";break;case"mm":i="%d मिनिटां";break;case"h":i="एका तासा";break;case"hh":i="%d तासां";break;case"d":i="एका दिवसा";break;case"dd":i="%d दिवसां";break;case"M":i="एका महिन्या";break;case"MM":i="%d महिन्यां";break;case"y":i="एका वर्षा";break;case"yy":i="%d वर्षां"}return i.replace(/%d/i,t)}var n={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},r={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return t.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},preparse:function(t){return t.replace(/[१२३४५६७८९०]/g,function(t){return r[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return n[t]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(t,e){return 12===t&&(t=0),"रात्री"===e?t<4?t:t+12:"सकाळी"===e?t:"दुपारी"===e?t>=10?t:t+12:"सायंकाळी"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"रात्री":t<10?"सकाळी":t<17?"दुपारी":t<20?"सायंकाळी":"रात्री"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 303 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(t,e){return 12===t&&(t=0),"pagi"===e?t:"tengahari"===e?t>=11?t:t+12:"petang"===e||"malam"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"pagi":t<15?"tengahari":t<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 304 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(t,e){return 12===t&&(t=0),"pagi"===e?t:"tengahari"===e?t>=11?t:t+12:"petang"===e||"malam"===e?t+12:void 0},meridiem:function(t,e,n){return t<11?"pagi":t<15?"tengahari":t<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 305 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[Għada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-bieraħ fil-]LT",lastWeek:"dddd [li għadda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 306 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};return t.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",ss:"%d စက္ကန့်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(t){return t.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 307 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 308 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return t.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(t){return t.replace(/[१२३४५६७८९०]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(t,e){return 12===t&&(t=0),"राति"===e?t<4?t:t+12:"बिहान"===e?t:"दिउँसो"===e?t>=10?t:t+12:"साँझ"===e?t+12:void 0},meridiem:function(t,e,n){return t<3?"राति":t<12?"बिहान":t<16?"दिउँसो":t<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",ss:"%d सेकेण्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 309 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],i=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return t.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(t,r){return t?/-MMM-/.test(r)?n[t.month()]:e[t.month()]:e},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 310 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],i=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return t.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(t,r){return t?/-MMM-/.test(r)?n[t.month()]:e[t.month()]:e},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(t){return t+(1===t||8===t||t>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 311 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 312 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};return t.defineLocale("pa-in",{
// There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"[ਅਗਲਾ] dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",ss:"%d ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(t){return t.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},
// Punjabi notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(t,e){return 12===t&&(t=0),"ਰਾਤ"===e?t<4?t:t+12:"ਸਵੇਰ"===e?t:"ਦੁਪਹਿਰ"===e?t>=10?t:t+12:"ਸ਼ਾਮ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"ਰਾਤ":t<10?"ਸਵੇਰ":t<17?"ਦੁਪਹਿਰ":t<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 313 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t){return t%10<5&&t%10>1&&~~(t/10)%10!=1}function n(t,n,r){var i=t+" ";switch(r){case"ss":return i+(e(t)?"sekundy":"sekund");case"m":return n?"minuta":"minutę";case"mm":return i+(e(t)?"minuty":"minut");case"h":return n?"godzina":"godzinę";case"hh":return i+(e(t)?"godziny":"godzin");case"MM":return i+(e(t)?"miesiące":"miesięcy");case"yy":return i+(e(t)?"lata":"lat")}}var r="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return t.defineLocale("pl",{months:function(t,e){return t?""===e?"("+i[t.month()]+"|"+r[t.month()]+")":/D MMMM/.test(e)?i[t.month()]:r[t.month()]:r},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:n,m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 314 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){// Saturday + Sunday
return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 315 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){// Saturday + Sunday
return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"})})},/* 316 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n){var r={ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},i=" ";return(t%100>=20||t>=100&&t%100==0)&&(i=" de "),t+i+r[n]}return t.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:e,m:"un minut",mm:e,h:"o oră",hh:e,d:"o zi",dd:e,M:"o lună",MM:e,y:"un an",yy:e},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 317 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e){var n=t.split("_");return e%10==1&&e%100!=11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,r){var i={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===r?n?"минута":"минуту":t+" "+e(i[r],+t)}var r=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return t.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{
// по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:r,longMonthsParse:r,shortMonthsParse:r,
// полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
// копия предыдущего
monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
// полные названия с падежами
monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
// Выражение, которое соотвествует только сокращённым формам
monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:n,m:n,mm:n,h:"час",hh:n,d:"день",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(t){return/^(дня|вечера)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":return t+"-й";case"D":return t+"-го";case"w":case"W":return t+"-я";default:return t}},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 318 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"];return t.defineLocale("sd",{months:e,monthsShort:e,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(t){return"شام"===t},meridiem:function(t,e,n){return t<12?"صبح":"شام"},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",ss:"%d سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 319 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 320 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",ss:"තත්පර %d",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function(t){return t+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(t){return"ප.ව."===t||"පස් වරු"===t},meridiem:function(t,e,n){return t>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}})})},/* 321 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t){return t>1&&t<5}function n(t,n,r,i){var a=t+" ";switch(r){case"s":// a few seconds / in a few seconds / a few seconds ago
return n||i?"pár sekúnd":"pár sekundami";case"ss":// 9 seconds / in 9 seconds / 9 seconds ago
// 9 seconds / in 9 seconds / 9 seconds ago
return n||i?a+(e(t)?"sekundy":"sekúnd"):a+"sekundami";case"m":// a minute / in a minute / a minute ago
return n?"minúta":i?"minútu":"minútou";case"mm":// 9 minutes / in 9 minutes / 9 minutes ago
// 9 minutes / in 9 minutes / 9 minutes ago
return n||i?a+(e(t)?"minúty":"minút"):a+"minútami";case"h":// an hour / in an hour / an hour ago
return n?"hodina":i?"hodinu":"hodinou";case"hh":// 9 hours / in 9 hours / 9 hours ago
// 9 hours / in 9 hours / 9 hours ago
return n||i?a+(e(t)?"hodiny":"hodín"):a+"hodinami";case"d":// a day / in a day / a day ago
return n||i?"deň":"dňom";case"dd":// 9 days / in 9 days / 9 days ago
// 9 days / in 9 days / 9 days ago
return n||i?a+(e(t)?"dni":"dní"):a+"dňami";case"M":// a month / in a month / a month ago
return n||i?"mesiac":"mesiacom";case"MM":// 9 months / in 9 months / 9 months ago
// 9 months / in 9 months / 9 months ago
return n||i?a+(e(t)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":// a year / in a year / a year ago
return n||i?"rok":"rokom";case"yy":// 9 years / in 9 years / 9 years ago
// 9 years / in 9 years / 9 years ago
return n||i?a+(e(t)?"roky":"rokov"):a+"rokmi"}}var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),i="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return t.defineLocale("sk",{months:r,monthsShort:i,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 322 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i=t+" ";switch(n){case"s":return e||r?"nekaj sekund":"nekaj sekundami";case"ss":return i+=1===t?e?"sekundo":"sekundi":2===t?e||r?"sekundi":"sekundah":t<5?e||r?"sekunde":"sekundah":"sekund";case"m":return e?"ena minuta":"eno minuto";case"mm":return i+=1===t?e?"minuta":"minuto":2===t?e||r?"minuti":"minutama":t<5?e||r?"minute":"minutami":e||r?"minut":"minutami";case"h":return e?"ena ura":"eno uro";case"hh":return i+=1===t?e?"ura":"uro":2===t?e||r?"uri":"urama":t<5?e||r?"ure":"urami":e||r?"ur":"urami";case"d":return e||r?"en dan":"enim dnem";case"dd":return i+=1===t?e||r?"dan":"dnem":2===t?e||r?"dni":"dnevoma":e||r?"dni":"dnevi";case"M":return e||r?"en mesec":"enim mesecem";case"MM":return i+=1===t?e||r?"mesec":"mesecem":2===t?e||r?"meseca":"mesecema":t<5?e||r?"mesece":"meseci":e||r?"mesecev":"meseci";case"y":return e||r?"eno leto":"enim letom";case"yy":return i+=1===t?e||r?"leto":"letom":2===t?e||r?"leti":"letoma":t<5?e||r?"leta":"leti":e||r?"let":"leti"}}return t.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 323 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(t){return"M"===t.charAt(0)},meridiem:function(t,e,n){return t<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 324 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={words:{//Different grammatical cases
ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(t,e){return 1===t?e[0]:t>=2&&t<=4?e[1]:e[2]},translate:function(t,n,r){var i=e.words[r];return 1===r.length?n?i[0]:i[1]:t+" "+e.correctGrammaticalCase(t,i)}};return t.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:e.translate,m:e.translate,mm:e.translate,h:e.translate,hh:e.translate,d:"dan",dd:e.translate,M:"mesec",MM:e.translate,y:"godinu",yy:e.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 325 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={words:{//Different grammatical cases
ss:["секунда","секунде","секунди"],m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(t,e){return 1===t?e[0]:t>=2&&t<=4?e[1]:e[2]},translate:function(t,n,r){var i=e.words[r];return 1===r.length?n?i[0]:i[1]:t+" "+e.correctGrammaticalCase(t,i)}};return t.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:e.translate,m:e.translate,mm:e.translate,h:e.translate,hh:e.translate,d:"дан",dd:e.translate,M:"месец",MM:e.translate,y:"годину",yy:e.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 326 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(t,e,n){return t<11?"ekuseni":t<15?"emini":t<19?"entsambama":"ebusuku"},meridiemHour:function(t,e){return 12===t&&(t=0),"ekuseni"===e?t:"emini"===e?t>=11?t:t+12:"entsambama"===e||"ebusuku"===e?0===t?0:t+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 327 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"e":1===e?"a":2===e?"a":"e")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 328 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 329 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};return t.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",ss:"%d விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function(t){return t+"வது"},preparse:function(t){return t.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(t){return n[t]})},postformat:function(t){return t.replace(/\d/g,function(t){return e[t]})},
// refer http://ta.wikipedia.org/s/1er1
meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(t,e,n){return t<2?" யாமம்":t<6?" வைகறை":t<10?" காலை":t<14?" நண்பகல்":t<18?" எற்பாடு":t<22?" மாலை":" யாமம்"},meridiemHour:function(t,e){return 12===t&&(t=0),"யாமம்"===e?t<2?t:t+12:"வைகறை"===e||"காலை"===e?t:"நண்பகல்"===e&&t>=10?t:t+12},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 330 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",ss:"%d సెకన్లు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(t,e){return 12===t&&(t=0),"రాత్రి"===e?t<4?t:t+12:"ఉదయం"===e?t:"మధ్యాహ్నం"===e?t>=10?t:t+12:"సాయంత్రం"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"రాత్రి":t<10?"ఉదయం":t<17?"మధ్యాహ్నం":t<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,// Sunday is the first day of the week.
doy:6}})})},/* 331 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",ss:"minutu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 332 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={0:"-ум",1:"-ум",2:"-юм",3:"-юм",4:"-ум",5:"-ум",6:"-ум",7:"-ум",8:"-ум",9:"-ум",10:"-ум",12:"-ум",13:"-ум",20:"-ум",30:"-юм",40:"-ум",50:"-ум",60:"-ум",70:"-ум",80:"-ум",90:"-ум",100:"-ум"};return t.defineLocale("tg",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Имрӯз соати] LT",nextDay:"[Пагоҳ соати] LT",lastDay:"[Дирӯз соати] LT",nextWeek:"dddd[и] [ҳафтаи оянда соати] LT",lastWeek:"dddd[и] [ҳафтаи гузашта соати] LT",sameElse:"L"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"},meridiemParse:/шаб|субҳ|рӯз|бегоҳ/,meridiemHour:function(t,e){return 12===t&&(t=0),"шаб"===e?t<4?t:t+12:"субҳ"===e?t:"рӯз"===e?t>=11?t:t+12:"бегоҳ"===e?t+12:void 0},meridiem:function(t,e,n){return t<4?"шаб":t<11?"субҳ":t<16?"рӯз":t<19?"бегоҳ":"шаб"},dayOfMonthOrdinalParse:/\d{1,2}-(ум|юм)/,ordinal:function(t){var n=t%10,r=t>=100?100:null;return t+(e[t]||e[n]||e[r])},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 333 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),// yes, three characters difference
weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(t){return"หลังเที่ยง"===t},meridiem:function(t,e,n){return t<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})})},/* 334 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(t){return t},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 335 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t){var e=t;return e=-1!==t.indexOf("jaj")?e.slice(0,-3)+"leS":-1!==t.indexOf("jar")?e.slice(0,-3)+"waQ":-1!==t.indexOf("DIS")?e.slice(0,-3)+"nem":e+" pIq"}function n(t){var e=t;return e=-1!==t.indexOf("jaj")?e.slice(0,-3)+"Hu’":-1!==t.indexOf("jar")?e.slice(0,-3)+"wen":-1!==t.indexOf("DIS")?e.slice(0,-3)+"ben":e+" ret"}function r(t,e,n,r){var a=i(t);switch(n){case"ss":return a+" lup";case"mm":return a+" tup";case"hh":return a+" rep";case"dd":return a+" jaj";case"MM":return a+" jar";case"yy":return a+" DIS"}}function i(t){var e=Math.floor(t%1e3/100),n=Math.floor(t%100/10),r=t%10,i="";return e>0&&(i+=a[e]+"vatlh"),n>0&&(i+=(""!==i?" ":"")+a[n]+"maH"),r>0&&(i+=(""!==i?" ":"")+a[r]),""===i?"pagh":i}var a="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");return t.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:e,past:n,s:"puS lup",ss:r,m:"wa’ tup",mm:r,h:"wa’ rep",hh:r,d:"wa’ jaj",dd:r,M:"wa’ jar",MM:r,y:"wa’ DIS",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 336 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return t.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(t,n){switch(n){case"d":case"D":case"Do":case"DD":return t;default:if(0===t)// special case for zero
return t+"'ıncı";var r=t%10,i=t%100-r,a=t>=100?100:null;return t+(e[r]||e[i]||e[a])}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 337 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e,n,r){var i={s:["viensas secunds","'iensas secunds"],ss:[t+" secunds",t+" secunds"],m:["'n míut","'iens míut"],mm:[t+" míuts",t+" míuts"],h:["'n þora","'iensa þora"],hh:[t+" þoras",t+" þoras"],d:["'n ziua","'iensa ziua"],dd:[t+" ziuas",t+" ziuas"],M:["'n mes","'iens mes"],MM:[t+" mesen",t+" mesen"],y:["'n ar","'iens ar"],yy:[t+" ars",t+" ars"]};return r?i[n][0]:e?i[n][0]:i[n][1]}return t.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(t){return"d'o"===t.toLowerCase()},meridiem:function(t,e,n){return t>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 338 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",ss:"%d ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 339 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,// Saturday is the first day of the week.
doy:12}})})},/* 340 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("ug-cn",{months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},meridiemParse:/يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,meridiemHour:function(t,e){return 12===t&&(t=0),"يېرىم كېچە"===e||"سەھەر"===e||"چۈشتىن بۇرۇن"===e?t:"چۈشتىن كېيىن"===e||"كەچ"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var r=100*t+e;return r<600?"يېرىم كېچە":r<900?"سەھەر":r<1130?"چۈشتىن بۇرۇن":r<1230?"چۈش":r<1800?"چۈشتىن كېيىن":"كەچ"},calendar:{sameDay:"[بۈگۈن سائەت] LT",nextDay:"[ئەتە سائەت] LT",nextWeek:"[كېلەركى] dddd [سائەت] LT",lastDay:"[تۆنۈگۈن] LT",lastWeek:"[ئالدىنقى] dddd [سائەت] LT",sameElse:"L"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",ss:"%d سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"},dayOfMonthOrdinalParse:/\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"-كۈنى";case"w":case"W":return t+"-ھەپتە";default:return t}},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{
// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
dow:1,// Monday is the first day of the week.
doy:7}})})},/* 341 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";function e(t,e){var n=t.split("_");return e%10==1&&e%100!=11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,r){var i={ss:n?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:n?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:n?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===r?n?"хвилина":"хвилину":"h"===r?n?"година":"годину":t+" "+e(i[r],+t)}function r(t,e){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return t?n[/(\[[ВвУу]\]) ?dddd/.test(e)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(e)?"genitive":"nominative"][t.day()]:n.nominative}function i(t){return function(){return t+"о"+(11===this.hours()?"б":"")+"] LT"}}return t.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:r,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:i("[Сьогодні "),nextDay:i("[Завтра "),lastDay:i("[Вчора "),nextWeek:i("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return i("[Минулої] dddd [").call(this);case 1:case 2:case 4:return i("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:n,m:n,mm:n,h:"годину",hh:n,d:"день",dd:n,M:"місяць",MM:n,y:"рік",yy:n},
// M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(t){return/^(дня|вечора)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночі":t<12?"ранку":t<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return t+"-й";case"D":return t+"-го";default:return t}},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 342 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";var e=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];return t.defineLocale("ur",{months:e,monthsShort:e,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(t){return"شام"===t},meridiem:function(t,e,n){return t<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",ss:"%d سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(t){return t.replace(/،/g,",")},postformat:function(t){return t.replace(/,/g,"،")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 343 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",ss:"%d фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 344 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,// Monday is the first day of the week.
doy:7}})})},/* 345 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(t){return/^ch$/i.test(t)},meridiem:function(t,e,n){return t<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(t){return t},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 346 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 347 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",ss:"aayá %d",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,// Monday is the first day of the week.
doy:4}})})},/* 348 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"下午"===e||"晚上"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var r=100*t+e;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"周";default:return t}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{
// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
dow:1,// Monday is the first day of the week.
doy:4}})})},/* 349 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"中午"===e?t>=11?t:t+12:"下午"===e||"晚上"===e?t+12:void 0},meridiem:function(t,e,n){var r=100*t+e;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"週";default:return t}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},/* 350 */
/***/
function(t,e,n){!function(t,e){e(n(1))}(0,function(t){"use strict";return t.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"中午"===e?t>=11?t:t+12:"下午"===e||"晚上"===e?t+12:void 0},meridiem:function(t,e,n){var r=100*t+e;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"週";default:return t}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},/* 351 */
/***/
function(t,e,n){t.exports=!n(11)&&!n(7)(function(){return 7!=Object.defineProperty(n(152)("div"),"a",{get:function(){return 7}}).a})},/* 352 */
/***/
function(t,e,n){e.f=n(10)},/* 353 */
/***/
function(t,e,n){var r=n(25),i=n(26),a=n(109)(!1),o=n(154)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,l=[];for(n in s)n!=o&&r(s,n)&&l.push(n);
// Don't enum bug & hidden keys
for(;e.length>u;)r(s,n=e[u++])&&(~a(l,n)||l.push(n));return l}},/* 354 */
/***/
function(t,e,n){var r=n(12),i=n(2),a=n(61);t.exports=n(11)?Object.defineProperties:function(t,e){i(t);for(var n,o=a(e),s=o.length,u=0;s>u;)r.f(t,n=o[u++],e[n]);return t}},/* 355 */
/***/
function(t,e,n){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var r=n(26),i=n(64).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(r(t))}},/* 356 */
/***/
function(t,e,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(61),i=n(110),a=n(89),o=n(14),s=n(88),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!u||n(7)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(// eslint-disable-line no-unused-vars
var n=o(t),u=arguments.length,l=1,d=i.f,c=a.f;u>l;)for(var f,h=s(arguments[l++]),m=d?r(h).concat(d(h)):r(h),_=m.length,p=0;_>p;)c.call(h,f=m[p++])&&(n[f]=h[f]);return n}:u},/* 357 */
/***/
function(t,e,n){"use strict";var r=n(16),i=n(8),a=n(358),o=[].slice,s={},u=function(t,e,n){if(!(e in s)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";
// eslint-disable-next-line no-new-func
s[e]=Function("F,a","return new F("+r.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=o.call(arguments,1),s=function(){var r=n.concat(o.call(arguments));return this instanceof s?u(e,r.length,r):a(e,r,t)};return i(e.prototype)&&(s.prototype=e.prototype),s}},/* 358 */
/***/
function(t,e){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},/* 359 */
/***/
function(t,e,n){var r=n(3).parseInt,i=n(78).trim,a=n(158),o=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(o.test(n)?16:10))}:r},/* 360 */
/***/
function(t,e,n){var r=n(3).parseFloat,i=n(78).trim;t.exports=1/r(n(158)+"-0")!=-1/0?function(t){var e=i(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},/* 361 */
/***/
function(t,e,n){var r=n(33);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},/* 362 */
/***/
function(t,e,n){
// 20.1.2.3 Number.isInteger(number)
var r=n(8),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},/* 363 */
/***/
function(t,e){
// 20.2.2.20 Math.log1p(x)
t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},/* 364 */
/***/
function(t,e,n){
// 20.2.2.16 Math.fround(x)
var r=n(161),i=Math.pow,a=i(2,-52),o=i(2,-23),s=i(2,127)*(2-o),u=i(2,-126),l=function(t){return t+1/a-1/a};t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),d=r(t);
// eslint-disable-next-line no-self-compare
return i<u?d*l(i/u/o)*u*o:(e=(1+o/a)*i,n=e-(e-i),n>s||n!=n?d*(1/0):d*n)}},/* 365 */
/***/
function(t,e,n){
// call something on iterator step with safe closing on error
var r=n(2);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},/* 366 */
/***/
function(t,e,n){var r=n(16),i=n(14),a=n(88),o=n(13);t.exports=function(t,e,n,s,u){r(e);var l=i(t),d=a(l),c=o(l.length),f=u?c-1:0,h=u?-1:1;if(n<2)for(;;){if(f in d){s=d[f],f+=h;break}if(f+=h,u?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;u?f>=0:c>f;f+=h)f in d&&(s=e(s,d[f],f,l));return s}},/* 367 */
/***/
function(t,e,n){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var r=n(14),i=n(62),a=n(13);t.exports=[].copyWithin||function(t,e){var n=r(this),o=a(n.length),s=i(t,o),u=i(e,o),l=arguments.length>2?arguments[2]:void 0,d=Math.min((void 0===l?o:i(l,o))-u,o-s),c=1;for(u<s&&s<u+d&&(c=-1,u+=d-1,s+=d-1);d-- >0;)u in n?n[s]=n[u]:delete n[s],s+=c,u+=c;return n}},/* 368 */
/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/* 369 */
/***/
function(t,e,n){
// 21.2.5.3 get RegExp.prototype.flags()
n(11)&&"g"!=/./g.flags&&n(12).f(RegExp.prototype,"flags",{configurable:!0,get:n(114)})},/* 370 */
/***/
function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},/* 371 */
/***/
function(t,e,n){var r=n(2),i=n(8),a=n(176);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=a.f(t);return(0,n.resolve)(e),n.promise}},/* 372 */
/***/
function(t,e,n){"use strict";var r=n(373),i=n(80);
// 23.1 Map Objects
t.exports=n(118)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},/* 373 */
/***/
function(t,e,n){"use strict";var r=n(12).f,i=n(63),a=n(68),o=n(32),s=n(66),u=n(67),l=n(164),d=n(368),c=n(65),f=n(11),h=n(48).fastKey,m=n(80),_=f?"_s":"size",p=function(t,e){
// fast case
var n,r=h(e);if("F"!==r)return t._i[r];
// frozen object case
for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var d=t(function(t,r){s(t,d,e,"_i"),t._t=e,// collection type
t._i=i(null),// index
t._f=void 0,// first entry
t._l=void 0,// last entry
t[_]=0,// size
void 0!=r&&u(r,n,t[l],t)});return a(d.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var t=m(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[_]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(t){var n=m(this,e),r=p(n,t);if(r){var i=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=i),i&&(i.p=a),n._f==r&&(n._f=i),n._l==r&&(n._l=a),n[_]--}return!!r},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(t){m(this,e);for(var n,r=o(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)
// revert to the last existing entry
for(r(n.v,n.k,this);n&&n.r;)n=n.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(t){return!!p(m(this,e),t)}}),f&&r(d.prototype,"size",{get:function(){return m(this,e)[_]}}),d},def:function(t,e,n){var r,i,a=p(t,e);
// change existing entry
// add to index
return a?a.v=n:(t._l=a={i:i=h(e,!0),// <- index
k:e,// <- key
v:n,// <- value
p:r=t._l,// <- previous entry
n:void 0,// <- next entry
r:!1},t._f||(t._f=a),r&&(r.n=a),t[_]++,"F"!==i&&(t._i[i]=a)),t},getEntry:p,setStrong:function(t,e,n){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
l(t,e,function(t,n){this._t=m(t,e),// target
this._k=n,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?d(0,n.k):"values"==e?d(0,n.v):d(0,[n.k,n.v]):(t._t=void 0,d(1))},n?"entries":"values",!n,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
c(e)}}},/* 374 */
/***/
function(t,e,n){"use strict";var r=n(373),i=n(80);
// 23.2 Set Objects
t.exports=n(118)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},/* 375 */
/***/
function(t,e,n){"use strict";var r,i=n(40)(0),a=n(22),o=n(48),s=n(356),u=n(376),l=n(8),d=n(7),c=n(80),f=o.getWeak,h=Object.isExtensible,m=u.ufstore,_={},p=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(t){if(l(t)){var e=f(t);return!0===e?m(c(this,"WeakMap")).get(t):e?e[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(t,e){return u.def(c(this,"WeakMap"),t,e)}},y=t.exports=n(118)("WeakMap",p,g,u,!0,!0);
// IE11 WeakMap frozen keys fix
d(function(){return 7!=(new y).set((Object.freeze||Object)(_),7).get(_)})&&(r=u.getConstructor(p,"WeakMap"),s(r.prototype,g),o.NEED=!0,i(["delete","has","get","set"],function(t){var e=y.prototype,n=e[t];a(e,t,function(e,i){
// store frozen objects on internal weakmap shim
if(l(e)&&!h(e)){this._f||(this._f=new r);var a=this._f[t](e,i);return"set"==t?this:a}return n.call(this,e,i)})}))},/* 376 */
/***/
function(t,e,n){"use strict";var r=n(68),i=n(48).getWeak,a=n(2),o=n(8),s=n(66),u=n(67),l=n(40),d=n(25),c=n(80),f=l(5),h=l(6),m=0,_=function(t){return t._l||(t._l=new p)},p=function(){this.a=[]},g=function(t,e){return f(t.a,function(t){return t[0]===e})};p.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var n=g(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=h(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,a){var l=t(function(t,r){s(t,l,e,"_i"),t._t=e,// collection type
t._i=m++,// collection id
t._l=void 0,// leak store for uncaught frozen objects
void 0!=r&&u(r,n,t[a],t)});return r(l.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(t){if(!o(t))return!1;var n=i(t);return!0===n?_(c(this,e)).delete(t):n&&d(n,this._i)&&delete n[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(t){if(!o(t))return!1;var n=i(t);return!0===n?_(c(this,e)).has(t):n&&d(n,this._i)}}),l},def:function(t,e,n){var r=i(a(e),!0);return!0===r?_(t).set(e,n):r[t._i]=n,t},ufstore:_}},/* 377 */
/***/
function(t,e,n){
// https://tc39.github.io/ecma262/#sec-toindex
var r=n(38),i=n(13);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},/* 378 */
/***/
function(t,e,n){
// all object keys, includes non-enumerable and symbols
var r=n(64),i=n(110),a=n(2),o=n(3).Reflect;t.exports=o&&o.ownKeys||function(t){var e=r.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},/* 379 */
/***/
function(t,e,n){"use strict";function r(t,e,n,l,d,c,f,h){for(var m,_,p=d,g=0,y=!!f&&s(f,h,3);g<l;){if(g in n){if(m=y?y(n[g],g,e):n[g],_=!1,a(m)&&(_=m[u],_=void 0!==_?!!_:i(m)),_&&c>0)p=r(t,e,m,o(m.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError();t[p]=m}p++}g++}return p}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var i=n(111),a=n(8),o=n(13),s=n(32),u=n(10)("isConcatSpreadable");t.exports=r},/* 380 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-string-pad-start-end
var r=n(13),i=n(160),a=n(37);t.exports=function(t,e,n,o){var s=String(a(t)),u=s.length,l=void 0===n?" ":String(n),d=r(e);if(d<=u||""==l)return s;var c=d-u,f=i.call(l,Math.ceil(c/l.length));return f.length>c&&(f=f.slice(0,c)),o?f+s:s+f}},/* 381 */
/***/
function(t,e,n){var r=n(61),i=n(26),a=n(89).f;t.exports=function(t){return function(e){for(var n,o=i(e),s=r(o),u=s.length,l=0,d=[];u>l;)a.call(o,n=s[l++])&&d.push(t?[n,o[n]]:o[n]);return d}}},/* 382 */
/***/
function(t,e,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(90),i=n(383);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},/* 383 */
/***/
function(t,e,n){var r=n(67);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},/* 384 */
/***/
function(t,e){
// https://rwaldron.github.io/proposal-math-extensions/
t.exports=Math.scale||function(t,e,n,r,i){return 0===arguments.length||t!=t||e!=e||n!=n||r!=r||i!=i?NaN:t===1/0||t===-1/0?t:(t-e)*(i-r)/(n-e)+r}},/* 385 */
/***/
function(t,e,n){n(178),n(629),t.exports=n(178)},/* 386 */
,/* 387 */
,/* 388 */
,/* 389 */
,/* 390 */
,/* 391 */
,/* 392 */
,/* 393 */
,/* 394 */
,/* 395 */
,/* 396 */
,/* 397 */
,/* 398 */
,/* 399 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f),m=n(29);n(435);var _=n(436),p=r(_),g=function(t){function e(t){(0,a.default)(this,e);var n=(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={},n}return(0,c.default)(e,t),(0,s.default)(e,[{key:"render",value:function(){return h.default.createElement(p.default,null)}}]),e}(f.Component);e.default=(0,m.withRouter)(g)},/* 400 */
/***/
function(t,e,n){t.exports={default:n(401),__esModule:!0}},/* 401 */
/***/
function(t,e,n){n(402);var r=n(24).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},/* 402 */
/***/
function(t,e,n){var r=n(51);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(53),"Object",{defineProperty:n(52).f})},/* 403 */
/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/* 404 */
/***/
function(t,e,n){t.exports={default:n(405),__esModule:!0}},/* 405 */
/***/
function(t,e,n){n(406),n(414),t.exports=n(135).f("iterator")},/* 406 */
/***/
function(t,e,n){"use strict";var r=n(407)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n(185)(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},/* 407 */
/***/
function(t,e,n){var r=n(127),i=n(128);
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,n){var a,o,s=String(i(e)),u=r(n),l=s.length;return u<0||u>=l?t?"":void 0:(a=s.charCodeAt(u),a<55296||a>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?t?s.charAt(u):a:t?s.slice(u,u+2):o-56320+(a-55296<<10)+65536)}}},/* 408 */
/***/
function(t,e,n){"use strict";var r=n(130),i=n(92),a=n(134),o={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n(70)(o,n(74)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),a(t,e+" Iterator")}},/* 409 */
/***/
function(t,e,n){var r=n(52),i=n(81),a=n(82);t.exports=n(53)?Object.defineProperties:function(t,e){i(t);for(var n,o=a(e),s=o.length,u=0;s>u;)r.f(t,n=o[u++],e[n]);return t}},/* 410 */
/***/
function(t,e,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(73),i=n(411),a=n(412);t.exports=function(t){return function(e,n,o){var s,u=r(e),l=i(u.length),d=a(o,l);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(t&&n!=n){for(;l>d;)
// eslint-disable-next-line no-self-compare
if((s=u[d++])!=s)return!0}else for(;l>d;d++)if((t||d in u)&&u[d]===n)return t||d||0;return!t&&-1}}},/* 411 */
/***/
function(t,e,n){
// 7.1.15 ToLength
var r=n(127),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},/* 412 */
/***/
function(t,e,n){var r=n(127),i=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):a(t,e)}},/* 413 */
/***/
function(t,e,n){var r=n(45).document;t.exports=r&&r.documentElement},/* 414 */
/***/
function(t,e,n){n(415);for(var r=n(45),i=n(70),a=n(129),o=n(74)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var l=s[u],d=r[l],c=d&&d.prototype;c&&!c[o]&&i(c,o,l),a[l]=a.Array}},/* 415 */
/***/
function(t,e,n){"use strict";var r=n(416),i=n(417),a=n(129),o=n(73);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=n(185)(Array,"Array",function(t,e){this._t=o(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
a.Arguments=a.Array,r("keys"),r("values"),r("entries")},/* 416 */
/***/
function(t,e){t.exports=function(){}},/* 417 */
/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/* 418 */
/***/
function(t,e,n){t.exports={default:n(419),__esModule:!0}},/* 419 */
/***/
function(t,e,n){n(420),n(425),n(426),n(427),t.exports=n(24).Symbol},/* 420 */
/***/
function(t,e,n){"use strict";
// ECMAScript 6 symbols shim
var r=n(45),i=n(54),a=n(53),o=n(51),s=n(186),u=n(421).KEY,l=n(72),d=n(132),c=n(134),f=n(94),h=n(74),m=n(135),_=n(136),p=n(422),g=n(423),y=n(81),v=n(71),M=n(73),b=n(125),L=n(92),k=n(130),w=n(424),Y=n(192),x=n(52),D=n(82),S=Y.f,T=x.f,j=w.f,E=r.Symbol,O=r.JSON,H=O&&O.stringify,P=h("_hidden"),A=h("toPrimitive"),C={}.propertyIsEnumerable,F=d("symbol-registry"),I=d("symbols"),W=d("op-symbols"),N=Object.prototype,z="function"==typeof E,R=r.QObject,B=!R||!R.prototype||!R.prototype.findChild,V=a&&l(function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=S(N,e);r&&delete N[e],T(t,e,n),r&&t!==N&&T(N,e,r)}:T,U=function(t){var e=I[t]=k(E.prototype);return e._k=t,e},J=z&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},q=function(t,e,n){return t===N&&q(W,e,n),y(t),e=b(e,!0),y(n),i(I,e)?(n.enumerable?(i(t,P)&&t[P][e]&&(t[P][e]=!1),n=k(n,{enumerable:L(0,!1)})):(i(t,P)||T(t,P,L(1,{})),t[P][e]=!0),V(t,e,n)):T(t,e,n)},G=function(t,e){y(t);for(var n,r=p(e=M(e)),i=0,a=r.length;a>i;)q(t,n=r[i++],e[n]);return t},K=function(t,e){return void 0===e?k(t):G(k(t),e)},$=function(t){var e=C.call(this,t=b(t,!0));return!(this===N&&i(I,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(I,t)||i(this,P)&&this[P][t])||e)},Z=function(t,e){if(t=M(t),e=b(e,!0),t!==N||!i(I,e)||i(W,e)){var n=S(t,e);return!n||!i(I,e)||i(t,P)&&t[P][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=j(M(t)),r=[],a=0;n.length>a;)i(I,e=n[a++])||e==P||e==u||r.push(e);return r},X=function(t){for(var e,n=t===N,r=j(n?W:M(t)),a=[],o=0;r.length>o;)!i(I,e=r[o++])||n&&!i(N,e)||a.push(I[e]);return a};
// 19.4.1.1 Symbol([description])
z||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(n){this===N&&e.call(W,n),i(this,P)&&i(this[P],t)&&(this[P][t]=!1),V(this,t,L(1,n))};return a&&B&&V(N,t,{configurable:!0,set:e}),U(t)},s(E.prototype,"toString",function(){return this._k}),Y.f=Z,x.f=q,n(191).f=w.f=Q,n(96).f=$,n(137).f=X,a&&!n(93)&&s(N,"propertyIsEnumerable",$,!0),m.f=function(t){return U(h(t))}),o(o.G+o.W+o.F*!z,{Symbol:E});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var nt=D(h.store),rt=0;nt.length>rt;)_(nt[rt++]);o(o.S+o.F*!z,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(t){return i(F,t+="")?F[t]:F[t]=E(t)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),o(o.S+o.F*!z,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:K,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:q,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:G,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Z,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Q,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:X}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
O&&o(o.S+o.F*(!z||l(function(){var t=E();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(v(e)||void 0!==t)&&!J(t))// IE8 returns string on undefined
return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,H.apply(O,r)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
E.prototype[A]||n(70)(E.prototype,A,E.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
c(E,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
c(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
c(r.JSON,"JSON",!0)},/* 421 */
/***/
function(t,e,n){var r=n(94)("meta"),i=n(71),a=n(54),o=n(52).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(72)(function(){return u(Object.preventExtensions({}))}),d=function(t){o(t,r,{value:{i:"O"+ ++s,// object ID
w:{}}})},c=function(t,e){
// return primitive with prefix
if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){
// can't set metadata to uncaught frozen object
if(!u(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
d(t)}return t[r].i},f=function(t,e){if(!a(t,r)){
// can't set metadata to uncaught frozen object
if(!u(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
d(t)}return t[r].w},h=function(t){return l&&m.NEED&&u(t)&&!a(t,r)&&d(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:c,getWeak:f,onFreeze:h}},/* 422 */
/***/
function(t,e,n){
// all enumerable object keys, includes symbols
var r=n(82),i=n(137),a=n(96);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var o,s=n(t),u=a.f,l=0;s.length>l;)u.call(t,o=s[l++])&&e.push(o);return e}},/* 423 */
/***/
function(t,e,n){
// 7.2.2 IsArray(argument)
var r=n(189);t.exports=Array.isArray||function(t){return"Array"==r(t)}},/* 424 */
/***/
function(t,e,n){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var r=n(73),i=n(191).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(r(t))}},/* 425 */
/***/
function(t,e){},/* 426 */
/***/
function(t,e,n){n(136)("asyncIterator")},/* 427 */
/***/
function(t,e,n){n(136)("observable")},/* 428 */
/***/
function(t,e,n){t.exports={default:n(429),__esModule:!0}},/* 429 */
/***/
function(t,e,n){n(430),t.exports=n(24).Object.setPrototypeOf},/* 430 */
/***/
function(t,e,n){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var r=n(51);r(r.S,"Object",{setPrototypeOf:n(431).set})},/* 431 */
/***/
function(t,e,n){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var r=n(71),i=n(81),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(t,e,r){try{r=n(182)(Function.call,n(192).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},/* 432 */
/***/
function(t,e,n){t.exports={default:n(433),__esModule:!0}},/* 433 */
/***/
function(t,e,n){n(434);var r=n(24).Object;t.exports=function(t,e){return r.create(t,e)}},/* 434 */
/***/
function(t,e,n){var r=n(51);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
r(r.S,"Object",{create:n(130)})},/* 435 */
/***/
function(t,e){},/* 436 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f),m=n(29),_=n(437),p=r(_),g=n(574),y=r(g),v=n(577),M=r(v),b=n(579),L=r(b),k=function(t){function e(t){return(0,a.default)(this,e),(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return(0,c.default)(e,t),(0,s.default)(e,[{key:"render",value:function(){return h.default.createElement(m.BrowserRouter,null,h.default.createElement("div",null,h.default.createElement(m.Route,{path:"/",exact:!0,component:y.default}),h.default.createElement(m.Route,{path:"/home/:id",exact:!0,component:y.default}),h.default.createElement(m.Route,{path:"/mainpage",exact:!0,component:p.default}),h.default.createElement(m.Route,{path:"/footfall",exact:!0,component:M.default}),h.default.createElement(m.Route,{path:"/question/:id/:type",exact:!0,component:L.default})))}}]),e}(f.Component);e.default=k},/* 437 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f);n(438);var m=n(97),_=r(m),p=n(138),g=r(p),y=n(455),v=r(y),M=function(t){function e(t){return(0,a.default)(this,e),(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return(0,c.default)(e,t),(0,s.default)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"application landing"},h.default.createElement(_.default,null),h.default.createElement(v.default,null),h.default.createElement(g.default,null))}}]),e}(f.Component);e.default=M},/* 438 */
/***/
function(t,e){},/* 439 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(r){/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
function i(){
// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
// is firebug? http://stackoverflow.com/a/398120/376773
// is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
// double check webkit in userAgent just in case we are in a worker
return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */
function a(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");
// the final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var i=0,a=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(i++,"%c"===t&&(
// we only are interested in the *last* %c
// (the user may have provided their own)
a=i))}),t.splice(a,0,r)}}/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function o(){
// this hackery is required for IE8/9, where
// the `console.log` function doesn't have 'apply'
return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function u(){var t;try{t=e.storage.debug}catch(t){}
// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
return!t&&void 0!==r&&"env"in r&&(t=Object({NODE_ENV:void 0}).DEBUG),t}/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
e=t.exports=n(440),e.log=o,e.formatArgs=a,e.save=s,e.load=u,e.useColors=i,e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */
function(){try{return window.localStorage}catch(t){}}(),/**
 * Colors.
 */
e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */
e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */
e.enable(u())}).call(e,n(194))},/* 440 */
/***/
function(t,e,n){/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */
function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */
function i(t){function n(){
// disabled?
if(n.enabled){var t=n,r=+new Date,i=r-(l||r);t.diff=i,t.prev=l,t.curr=r,l=r;for(var a=new Array(arguments.length),o=0;o<a.length;o++)a[o]=arguments[o];a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&
// anything else let's inspect with %O
a.unshift("%O");
// apply any `formatters` transformations
var s=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,r){
// if we encounter an escaped % then don't increase the array index
if("%%"===n)return n;s++;var i=e.formatters[r];if("function"==typeof i){var o=a[s];n=i.call(t,o),
// now we need to remove `args[index]` since it's inlined in the `format`
a.splice(s,1),s--}return n}),
// apply env-specific formatting (colors, etc.)
e.formatArgs.call(t,a);(n.log||e.log||console.log.bind(console)).apply(t,a)}}
// env-specific initialization logic for debug instances
return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),"function"==typeof e.init&&e.init(n),n}/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */
function a(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length,i=0;i<r;i++)n[i]&&(// ignore empty strings
t=n[i].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}/**
 * Disable debug output.
 *
 * @api public
 */
function o(){e.enable("")}/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */
function s(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */
function u(t){return t instanceof Error?t.stack||t.message:t}/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
e=t.exports=i.debug=i.default=i,e.coerce=u,e.disable=o,e.enable=a,e.enabled=s,e.humanize=n(441),/**
 * The currently active debug mode names, and names to skip.
 */
e.names=[],e.skips=[],/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */
e.formatters={};/**
 * Previous log timestamp.
 */
var l},/* 441 */
/***/
function(t,e){/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */
function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*d;case"days":case"day":case"d":return n*l;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*s;case"seconds":case"second":case"secs":case"sec":case"s":return n*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
function r(t){return t>=l?Math.round(t/l)+"d":t>=u?Math.round(t/u)+"h":t>=s?Math.round(t/s)+"m":t>=o?Math.round(t/o)+"s":t+"ms"}/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
function i(t){return a(t,l,"day")||a(t,u,"hour")||a(t,s,"minute")||a(t,o,"second")||t+" ms"}/**
 * Pluralization helper.
 */
function a(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}/**
 * Helpers.
 */
var o=1e3,s=60*o,u=60*s,l=24*u,d=365.25*l;/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */
t.exports=function(t,e){e=e||{};var a=typeof t;if("string"===a&&t.length>0)return n(t);if("number"===a&&!1===isNaN(t))return e.long?i(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},/* 442 */
/***/
function(t,e,n){t.exports={default:n(443),__esModule:!0}},/* 443 */
/***/
function(t,e,n){n(444),t.exports=n(24).Object.assign},/* 444 */
/***/
function(t,e,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(51);r(r.S+r.F,"Object",{assign:n(445)})},/* 445 */
/***/
function(t,e,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(82),i=n(137),a=n(96),o=n(95),s=n(188),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!u||n(72)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(// eslint-disable-line no-unused-vars
var n=o(t),u=arguments.length,l=1,d=i.f,c=a.f;u>l;)for(var f,h=s(arguments[l++]),m=d?r(h).concat(d(h)):r(h),_=m.length,p=0;_>p;)c.call(h,f=m[p++])&&(n[f]=h[f]);return n}:u},/* 446 */
/***/
function(t,e,n){n(447),t.exports=n(24).Object.getPrototypeOf},/* 447 */
/***/
function(t,e,n){
// 19.1.2.9 Object.getPrototypeOf(O)
var r=n(95),i=n(190);n(196)("getPrototypeOf",function(){return function(t){return i(r(t))}})},/* 448 */
/***/
function(t,e,n){t.exports={default:n(449),__esModule:!0}},/* 449 */
/***/
function(t,e,n){var r=n(24),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){// eslint-disable-line no-unused-vars
return i.stringify.apply(i,arguments)}},/* 450 */
/***/
function(t,e,n){n(451),t.exports=n(24).Object.keys},/* 451 */
/***/
function(t,e,n){
// 19.1.2.14 Object.keys(O)
var r=n(95),i=n(82);n(196)("keys",function(){return function(t){return i(r(t))}})},/* 452 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(t,r){/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function i(t,n){
// default options
var r={seen:[],stylize:o};
// legacy...
// legacy...
// got an "options" object
// set default options
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),_(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),u(r,t,r.depth)}function a(t,e){var n=i.styles[e];return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function o(t,e){return t}function s(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function u(t,n,r){
// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(t.customInspect&&n&&x(n.inspect)&&
// Filter out the util module, it's inspect function is special
n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return v(i)||(i=u(t,i,r)),i}
// Primitive types cannot have properties
var a=l(t,n);if(a)return a;
// Look up the keys of the object.
var o=Object.keys(n),_=s(o);
// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(t.showHidden&&(o=Object.getOwnPropertyNames(n)),Y(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return d(n);
// Some type of object without properties can be shortcutted.
if(0===o.length){if(x(n)){var p=n.name?": "+n.name:"";return t.stylize("[Function"+p+"]","special")}if(L(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(Y(n))return d(n)}var g="",y=!1,M=["{","}"];
// Make functions say that they are functions
if(
// Make Array say that they are Array
m(n)&&(y=!0,M=["[","]"]),x(n)){g=" [Function"+(n.name?": "+n.name:"")+"]"}if(
// Make RegExps say that they are RegExps
L(n)&&(g=" "+RegExp.prototype.toString.call(n)),
// Make dates with properties first say the date
w(n)&&(g=" "+Date.prototype.toUTCString.call(n)),
// Make error with message first say the error
Y(n)&&(g=" "+d(n)),0===o.length&&(!y||0==n.length))return M[0]+g+M[1];if(r<0)return L(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var b;return b=y?c(t,n,r,_,o):o.map(function(e){return f(t,n,r,_,e,y)}),t.seen.pop(),h(b,g,M)}function l(t,e){if(b(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}
// For some reason typeof null is "object", so special case here.
return y(e)?t.stylize(""+e,"number"):_(e)?t.stylize(""+e,"boolean"):p(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function c(t,e,n,r,i){for(var a=[],o=0,s=e.length;o<s;++o)E(e,String(o))?a.push(f(t,e,n,r,String(o),!0)):a.push("");return i.forEach(function(i){i.match(/^\d+$/)||a.push(f(t,e,n,r,i,!0))}),a}function f(t,e,n,r,i,a){var o,s,l;if(l=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},l.get?s=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(s=t.stylize("[Setter]","special")),E(r,i)||(o="["+i+"]"),s||(t.seen.indexOf(l.value)<0?(s=p(n)?u(t,l.value,null):u(t,l.value,n-1),s.indexOf("\n")>-1&&(s=a?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n"))):s=t.stylize("[Circular]","special")),b(o)){if(a&&i.match(/^\d+$/))return s;o=JSON.stringify(""+i),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=t.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=t.stylize(o,"string"))}return o+": "+s}function h(t,e,n){var r=0;return t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function m(t){return Array.isArray(t)}function _(t){return"boolean"==typeof t}function p(t){return null===t}function g(t){return null==t}function y(t){return"number"==typeof t}function v(t){return"string"==typeof t}function M(t){return"symbol"==typeof t}function b(t){return void 0===t}function L(t){return k(t)&&"[object RegExp]"===S(t)}function k(t){return"object"==typeof t&&null!==t}function w(t){return k(t)&&"[object Date]"===S(t)}function Y(t){return k(t)&&("[object Error]"===S(t)||t instanceof Error)}function x(t){return"function"==typeof t}function D(t){// ES6 symbol
return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t}function S(t){return Object.prototype.toString.call(t)}function T(t){return t<10?"0"+t.toString(10):t.toString(10)}
// 26 Feb 16:19:34
function j(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":");return[t.getDate(),A[t.getMonth()],e].join(" ")}function E(t,e){return Object.prototype.hasOwnProperty.call(t,e)}// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var O=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,a=r.length,o=String(t).replace(O,function(t){if("%%"===t)return"%";if(n>=a)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),s=r[n];n<a;s=r[++n])p(s)||!k(s)?o+=" "+s:o+=" "+i(s);return o},
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
e.deprecate=function(n,i){function a(){if(!o){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),o=!0}return n.apply(this,arguments)}
// Allow for deprecating things in the process of starting up.
if(b(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var o=!1;return a};var H,P={};e.debuglog=function(t){if(b(H)&&(H=Object({NODE_ENV:void 0}).NODE_DEBUG||""),t=t.toUpperCase(),!P[t])if(new RegExp("\\b"+t+"\\b","i").test(H)){var n=r.pid;P[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else P[t]=function(){};return P[t]},e.inspect=i,
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},
// Don't use 'blue' not visible on cmd.exe
i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",
// "name": intentionally not styling
regexp:"red"},e.isArray=m,e.isBoolean=_,e.isNull=p,e.isNullOrUndefined=g,e.isNumber=y,e.isString=v,e.isSymbol=M,e.isUndefined=b,e.isRegExp=L,e.isObject=k,e.isDate=w,e.isError=Y,e.isFunction=x,e.isPrimitive=D,e.isBuffer=n(453);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// log is just a thin wrapper to console.log that prepends a timestamp
e.log=function(){console.log("%s - %s",j(),e.format.apply(e,arguments))},/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
e.inherits=n(454),e._extend=function(t,e){
// Don't do anything if add isn't an object
if(!e||!k(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,n(84),n(194))},/* 453 */
/***/
function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},/* 454 */
/***/
function(t,e){"function"==typeof Object.create?
// implementation from standard node.js 'util' module
t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:
// old school shim for old browsers
t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},/* 455 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f),m=n(29),_=n(456),p=r(_),g={transitionDuration:6},y={background:".my-bg-image-el"},v=function(t){function e(t){(0,a.default)(this,e);var n=(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.state={list:[]};var r=window.localStorage.getItem("deviceToken");return null===window.localStorage.getItem("subscriber")&&null==r&&n.props.history.push("/"),n}return(0,c.default)(e,t),(0,s.default)(e,[{key:"componentWillMount",value:function(){var t=this;fetch("/api/pollquizlist",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}).then(function(t){return t.json()}).then(function(e){t.setState({list:e.pollList.concat(e.quizList)})})}},{key:"render",value:function(){/*
             <div className="col-md-3 col-sm-6">
             <div className="service-wrapper">
             <img src="img/service-icon/diamond.png" alt="Service Name"/>
             <h3>Brilliant Look</h3>
             <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames. <a href="#">Read more...</a></p>
             </div>
             </div> */
var t=this.state.list.map(function(t,e){return h.default.createElement("div",{className:"image-element-class col-md-3 col-sm-6",key:t.id},h.default.createElement("div",{className:"service-wrapper"},h.default.createElement("div",{className:"ribbon-wrapper"},h.default.createElement("div",{className:"price-ribbon ribbon-green"}," ",t.type," ")),h.default.createElement("h2",{className:"pricing-plan-title"},e+1,") Question"),h.default.createElement("div",{className:"content"},h.default.createElement("h3",{className:"title"},t.detail.qus),h.default.createElement(m.Link,{className:"btn",to:"/question/"+t.id+"/"+t.type.toLocaleLowerCase()},"See ",t.type,"  "))))});return h.default.createElement("div",null,h.default.createElement("div",{className:"section section-breadcrumbs"},h.default.createElement("div",{className:"container"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-6"},h.default.createElement("h1",null,"DashBoard"))))),h.default.createElement("div",{className:"listing"},h.default.createElement("div",{className:"section"},h.default.createElement("div",{className:"container"},h.default.createElement("div",{className:"row"},h.default.createElement(p.default,{className:"my-gallery-class",options:g,updateOnEachImageLoad:!1,imagesLoadedOptions:y},t))))))}}]),e}(f.Component);e.default=(0,m.withRouter)(v)},/* 456 */
/***/
function(t,e,n){var r="undefined"!=typeof window,i=r?window.Masonry||n(457):null,a=r?n(462):null,o=n(463),s=n(484),u=n(495),l=n(498),d=n(6),c=n(4),f=n(568),h={enableResizableChildren:d.bool,disableImagesLoaded:d.bool,onImagesLoaded:d.func,updateOnEachImageLoad:d.bool,options:d.object,imagesLoadedOptions:d.object,elementType:d.string,onLayoutComplete:d.func,onRemoveComplete:d.func},m=f({masonry:!1,erd:void 0,latestKnownDomChildren:[],displayName:"MasonryComponent",imagesLoadedCancelRef:void 0,propTypes:h,getDefaultProps:function(){return{enableResizableChildren:!1,disableImagesLoaded:!1,updateOnEachImageLoad:!1,options:{},imagesLoadedOptions:{},className:"",elementType:"div",onLayoutComplete:function(){},onRemoveComplete:function(){}}},initializeMasonry:function(t){this.masonry&&!t||(this.masonry=new i(this.masonryContainer,this.props.options),this.props.onLayoutComplete&&this.masonry.on("layoutComplete",this.props.onLayoutComplete),this.props.onRemoveComplete&&this.masonry.on("removeComplete",this.props.onRemoveComplete),this.latestKnownDomChildren=this.getCurrentDomChildren())},getCurrentDomChildren:function(){var t=this.masonryContainer,e=this.props.options.itemSelector?t.querySelectorAll(this.props.options.itemSelector):t.children;return Array.prototype.slice.call(e)},diffDomChildren:function(){var t=!1,e=this.latestKnownDomChildren.filter(function(t){/*
       * take only elements attached to DOM
       * (aka the parent is the masonry container, not null)
       * otherwise masonry would try to "remove it" again from the DOM
       */
return!!t.parentNode});/*
     * If not all known children are attached to the dom - we have no other way of notifying
     * masonry to remove the ones not still attached besides invoking a complete item reload.
     * basically all the rest of the code below does not matter in that case.
     */
e.length!==this.latestKnownDomChildren.length&&(t=!0);var n=this.getCurrentDomChildren(),r=e.filter(function(t){return!~n.indexOf(t)}),i=n.filter(function(t){return!~e.indexOf(t)}),a=0,o=i.filter(function(t){var e=a===n.indexOf(t);
// increase the index
return e&&a++,e}),s=i.filter(function(t){return-1===o.indexOf(t)}),u=[];/*
     * This would always be true (see above about the lofic for "removed")
     */
/*
       * 'moved' will contain some random elements (if any) since the "knownChildrenStillAttached" is a filter
       * of the "known" children which are still attached - All indexes could basically change. (for example
       * if the first element is not attached)
       * Don't trust this array.
       */
return 0===r.length&&(u=e.filter(function(t,e){return e!==n.indexOf(t)})),this.latestKnownDomChildren=n,{old:e,// Not used
new:n,// Not used
removed:r,appended:s,prepended:o,moved:u,forceItemReload:t}},performLayout:function(){var t=this.diffDomChildren(),e=t.forceItemReload||t.moved.length>0;
// Would never be true. (see comments of 'diffDomChildren' about 'removed')
t.removed.length>0&&(this.props.enableResizableChildren&&t.removed.forEach(this.erd.removeAllListeners,this.erd),this.masonry.remove(t.removed),e=!0),t.appended.length>0&&(this.masonry.appended(t.appended),0===t.prepended.length&&(e=!0),this.props.enableResizableChildren&&t.appended.forEach(this.listenToElementResize,this)),t.prepended.length>0&&(this.masonry.prepended(t.prepended),this.props.enableResizableChildren&&t.prepended.forEach(this.listenToElementResize,this)),e&&this.masonry.reloadItems(),this.masonry.layout()},derefImagesLoaded:function(){this.imagesLoadedCancelRef(),this.imagesLoadedCancelRef=void 0},imagesLoaded:function(){if(!this.props.disableImagesLoaded){this.imagesLoadedCancelRef&&this.derefImagesLoaded();var t=this.props.updateOnEachImageLoad?"progress":"always",e=u(function(t){this.props.onImagesLoaded&&this.props.onImagesLoaded(t),this.masonry.layout()}.bind(this),100),n=a(this.masonryContainer,this.props.imagesLoadedOptions).on(t,e);this.imagesLoadedCancelRef=function(){n.off(t,e),e.cancel()}}},initializeResizableChildren:function(){this.props.enableResizableChildren&&(this.erd=s({strategy:"scroll"}),this.latestKnownDomChildren.forEach(this.listenToElementResize,this))},listenToElementResize:function(t){this.erd.listenTo(t,function(){this.masonry.layout()}.bind(this))},destroyErd:function(){this.erd&&this.latestKnownDomChildren.forEach(this.erd.uninstall,this.erd)},componentDidMount:function(){this.initializeMasonry(),this.initializeResizableChildren(),this.imagesLoaded()},componentDidUpdate:function(){this.performLayout(),this.imagesLoaded()},componentWillUnmount:function(){this.destroyErd(),
// unregister events
this.props.onLayoutComplete&&this.masonry.off("layoutComplete",this.props.onLayoutComplete),this.props.onRemoveComplete&&this.masonry.off("removeComplete",this.props.onRemoveComplete),this.imagesLoadedCancelRef&&this.derefImagesLoaded(),this.masonry.destroy()},setRef:function(t){this.masonryContainer=t},render:function(){var t=l(this.props,Object.keys(h));return c.createElement(this.props.elementType,o({},t,{ref:this.setRef}),this.props.children)}});t.exports=m,t.exports.default=m},/* 457 */
/***/
function(t,e,n){var r,i,a;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(o,s){
// AMD
i=[n(458),n(140)],r=s,void 0!==(a="function"==typeof r?r.apply(e,i):r)&&(t.exports=a)}(window,function(t,e){"use strict";
// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var n=t.create("masonry");
// isFitWidth -> fitWidth
n.compatOptions.fitWidth="isFitWidth";var r=n.prototype;/**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
// get column position based on horizontal index. #873
return r._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),
// reset column Y
this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},r.measureColumns=function(){
// if columnWidth is 0, default to outerWidth of first item
if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],n=t&&t.element;
// columnWidth fall back to item of first element
this.columnWidth=n&&e(n).outerWidth||
// if first elem has no width, default to size of container
this.containerWidth}var r=this.columnWidth+=this.gutter,i=this.containerWidth+this.gutter,a=i/r,o=r-i%r,s=o&&o<1?"round":"floor";a=Math[s](a),this.cols=Math.max(a,1)},r.getContainerWidth=function(){
// container is parent if fit width
var t=this._getOption("fitWidth"),n=t?this.element.parentNode:this.element,r=e(n);this.containerWidth=r&&r.innerWidth},r._getItemLayoutPosition=function(t){t.getSize();
// how many columns does this brick span
var e=t.size.outerWidth%this.columnWidth,n=e&&e<1?"round":"ceil",r=Math[n](t.size.outerWidth/this.columnWidth);r=Math.min(r,this.cols);for(var i=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",a=this[i](r,t),o={x:this.columnWidth*a.col,y:a.y},s=a.y+t.size.outerHeight,u=r+a.col,l=a.col;l<u;l++)this.colYs[l]=s;return o},r._getTopColPosition=function(t){var e=this._getTopColGroup(t),n=Math.min.apply(Math,e);return{col:e.indexOf(n),y:n}},r._getTopColGroup=function(t){if(t<2)
// if brick spans only one column, use all the column Ys
return this.colYs;
// for each group potential horizontal position
for(var e=[],n=this.cols+1-t,r=0;r<n;r++)e[r]=this._getColGroupY(r,t);return e},r._getColGroupY=function(t,e){if(e<2)return this.colYs[t];
// make an array of colY values for that one group
var n=this.colYs.slice(t,t+e);
// and get the max value of the array
return Math.max.apply(Math,n)},r._getHorizontalColPosition=function(t,e){var n=this.horizontalColIndex%this.cols;
// shift to next row if item can't fit on current row
n=t>1&&n+t>this.cols?0:n;
// don't let zero-size items take up space
var r=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=r?n+t:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,t)}},r._manageStamp=function(t){var n=e(t),r=this._getElementOffset(t),i=this._getOption("originLeft"),a=i?r.left:r.right,o=a+n.outerWidth,s=Math.floor(a/this.columnWidth);s=Math.max(0,s);var u=Math.floor(o/this.columnWidth);
// lastCol should not go over if multiple of columnWidth #425
u-=o%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var l=this._getOption("originTop"),d=(l?r.top:r.bottom)+n.outerHeight,c=s;c<=u;c++)this.colYs[c]=Math.max(d,this.colYs[c])},r._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},r._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;
// fit container to columns that have been used
return(this.cols-t)*this.columnWidth-this.gutter},r.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},n})},/* 458 */
/***/
function(t,e,n){var r,i;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
!function(a,o){"use strict";r=[n(139),n(140),n(459),n(461)],void 0!==(i=function(t,e,n,r){return o(a,t,e,n,r)}.apply(e,r))&&(t.exports=i)}(window,function(t,e,n,r,i){"use strict";/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function a(t,e){var n=r.getQueryElement(t);if(!n)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(n||t)));this.element=n,
// add jQuery
l&&(this.$element=l(this.element)),
// options
this.options=r.extend({},this.constructor.defaults),this.option(e);
// add id for Outlayer.getFromElement
var i=++c;this.element.outlayerGUID=i,// expando
f[i]=this,// associate via id
// kick it off
this._create(),this._getOption("initLayout")&&this.layout()}function o(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}
// munge time-like parameter into millisecond number
// '0.4s' -> 40
function s(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),n=e&&e[1],r=e&&e[2];return n.length?(n=parseFloat(n))*(m[r]||1):0}
// ----- vars ----- //
var u=t.console,l=t.jQuery,d=function(){},c=0,f={};
// settings are for internal use only
a.namespace="outlayer",a.Item=i,
// default options
a.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,
// item options
transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var h=a.prototype;
// inherit EvEmitter
r.extend(h,e.prototype),/**
 * set options
 * @param {Object} opts
 */
h.option=function(t){r.extend(this.options,t)},/**
 * get backwards compatible option value, check old name
 */
h._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},a.compatOptions={
// currentName: oldName
initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},h._create=function(){
// get items from children
this.reloadItems(),
// elements that affect layout, but are not laid out
this.stamps=[],this.stamp(this.options.stamp),
// set container style
r.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},
// goes through all children again and gets bricks in proper order
h.reloadItems=function(){
// collection of item elements
this.items=this._itemize(this.element.children)},/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
h._itemize=function(t){for(var e=this._filterFindItemElements(t),n=this.constructor.Item,r=[],i=0;i<e.length;i++){var a=e[i],o=new n(a,this);r.push(o)}return r},/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
h._filterFindItemElements=function(t){return r.filterFindElements(t,this.options.itemSelector)},/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
h.getItemElements=function(){return this.items.map(function(t){return t.element})},
// ----- init & layout ----- //
/**
 * lays out all items
 */
h.layout=function(){this._resetLayout(),this._manageStamps();
// don't animate first layout
var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),
// flag for initalized
this._isLayoutInited=!0},
// _init is alias for layout
h._init=h.layout,/**
 * logic before any new layout
 */
h._resetLayout=function(){this.getSize()},h.getSize=function(){this.size=n(this.element)},/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
h._getMeasurement=function(t,e){var r,i=this.options[t];i?(
// use option as an element
"string"==typeof i?r=this.element.querySelector(i):i instanceof HTMLElement&&(r=i),
// use size of element, if element
this[t]=r?n(r)[e]:i):
// default to 0
this[t]=0},/**
 * layout a collection of item elements
 * @api public
 */
h.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
h._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
h._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var n=[];t.forEach(function(t){
// get x/y object from method
var r=this._getItemLayoutPosition(t);
// enqueue
r.item=t,r.isInstant=e||t.isLayoutInstant,n.push(r)},this),this._processLayoutQueue(n)}},/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
h._getItemLayoutPosition=function(){return{x:0,y:0}},/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
h._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},
// set stagger from option in milliseconds number
h.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=s(t),this.stagger)},/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
h._positionItem=function(t,e,n,r,i){r?
// if not transition, just set CSS
t.goTo(e,n):(t.stagger(i*this.stagger),t.moveTo(e,n))},/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
h._postLayout=function(){this.resizeContainer()},h.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
h._getContainerSize=d,/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
h._setContainerMeasure=function(t,e){if(void 0!==t){var n=this.size;
// add padding and border width if border box
n.isBorderBox&&(t+=e?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
h._emitCompleteOnItems=function(t,e){function n(){i.dispatchEvent(t+"Complete",null,[e])}function r(){++o==a&&n()}var i=this,a=e.length;if(!e||!a)return void n();var o=0;
// bind callback
e.forEach(function(e){e.once(t,r)})},/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
h.dispatchEvent=function(t,e,n){
// add original event to arguments
var r=e?[e].concat(n):n;if(this.emitEvent(t,r),l)if(
// set this.$element
this.$element=this.$element||l(this.element),e){
// create jQuery event
var i=l.Event(e);i.type=t,this.$element.trigger(i,n)}else
// just trigger with type if no event available
this.$element.trigger(t,n)},
// -------------------------- ignore & stamps -------------------------- //
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
h.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},/**
 * return item to layout collection
 * @param {Element} elem
 */
h.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
h.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),
// ignore
t.forEach(this.ignore,this))},/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
h.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){
// filter out removed stamp elements
r.removeFrom(this.stamps,t),this.unignore(t)},this)},/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
h._find=function(t){if(t)
// if string, use argument as selector string
return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=r.makeArray(t)},h._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},
// update boundingLeft / Top
h._getBoundingRect=function(){
// get bounding rect for container element
var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},/**
 * @param {Element} stamp
**/
h._manageStamp=d,/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
h._getElementOffset=function(t){var e=t.getBoundingClientRect(),r=this._boundingRect,i=n(t);return{left:e.left-r.left-i.marginLeft,top:e.top-r.top-i.marginTop,right:r.right-e.right-i.marginRight,bottom:r.bottom-e.bottom-i.marginBottom}},
// -------------------------- resize -------------------------- //
// enable event handlers for listeners
// i.e. resize -> onresize
h.handleEvent=r.handleEvent,/**
 * Bind layout to window resizing
 */
h.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},/**
 * Unbind layout to window resizing
 */
h.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},h.onresize=function(){this.resize()},r.debounceMethod(a,"onresize",100),h.resize=function(){
// don't trigger if size did not change
// or if resize was unbound. See #9
this.isResizeBound&&this.needsResizeLayout()&&this.layout()},/**
 * check if layout is needed post layout
 * @returns Boolean
 */
h.needsResizeLayout=function(){var t=n(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},
// -------------------------- methods -------------------------- //
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
h.addItems=function(t){var e=this._itemize(t);
// add items to collection
return e.length&&(this.items=this.items.concat(e)),e},/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
h.appended=function(t){var e=this.addItems(t);e.length&&(
// layout and reveal just the new items
this.layoutItems(e,!0),this.reveal(e))},/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
h.prepended=function(t){var e=this._itemize(t);if(e.length){
// add items to beginning of collection
var n=this.items.slice(0);this.items=e.concat(n),
// start new layout
this._resetLayout(),this._manageStamps(),
// layout new stuff without transition
this.layoutItems(e,!0),this.reveal(e),
// layout previous items
this.layoutItems(n)}},/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
h.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,n){t.stagger(n*e),t.reveal()})}},/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
h.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,n){t.stagger(n*e),t.hide()})}},/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
h.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
h.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
h.getItem=function(t){
// loop through items to get the one that matches
for(var e=0;e<this.items.length;e++){var n=this.items[e];if(n.element==t)
// return item
return n}},/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
h.getItems=function(t){t=r.makeArray(t);var e=[];return t.forEach(function(t){var n=this.getItem(t);n&&e.push(n)},this),e},/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
h.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),
// bail if no items to remove
e&&e.length&&e.forEach(function(t){t.remove(),
// remove item from collection
r.removeFrom(this.items,t)},this)},
// ----- destroy ----- //
// remove and disable Outlayer instance
h.destroy=function(){
// clean up dynamic styles
var t=this.element.style;t.height="",t.position="",t.width="",
// destroy items
this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],// remove reference to instance by id
delete this.element.outlayerGUID,
// remove data for jQuery
l&&l.removeData(this.element,this.constructor.namespace)},
// -------------------------- data -------------------------- //
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
a.data=function(t){t=r.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},
// -------------------------- create Outlayer class -------------------------- //
/**
 * create a layout class
 * @param {String} namespace
 */
a.create=function(t,e){
// sub-class Outlayer
var n=o(a);
// apply new options and compatOptions
// sub-class Item
// -------------------------- declarative -------------------------- //
// -------------------------- jQuery bridge -------------------------- //
// make into jQuery plugin
return n.defaults=r.extend({},a.defaults),r.extend(n.defaults,e),n.compatOptions=r.extend({},a.compatOptions),n.namespace=t,n.data=a.data,n.Item=o(i),r.htmlInit(n,t),l&&l.bridget&&l.bridget(t,n),n};
// ----- helpers ----- //
// how many milliseconds are in each unit
var m={ms:1,s:1e3};
// ----- fin ----- //
// back in global
return a.Item=i,a})},/* 459 */
/***/
function(t,e,n){var r,i;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
!function(a,o){
// AMD
r=[n(460)],void 0!==(i=function(t){return o(a,t)}.apply(e,r))&&(t.exports=i)}(window,function(t,e){"use strict";var n={};
// ----- extend ----- //
// extends objects
n.extend=function(t,e){for(var n in e)t[n]=e[n];return t},
// ----- modulo ----- //
n.modulo=function(t,e){return(t%e+e)%e};
// ----- makeArray ----- //
var r=Array.prototype.slice;
// turn element or nodeList into an array
n.makeArray=function(t){
// return empty array if undefined or null. #6
return Array.isArray(t)?t:null===t||void 0===t?[]:"object"==typeof t&&"number"==typeof t.length?r.call(t):[t]},
// ----- removeFrom ----- //
n.removeFrom=function(t,e){var n=t.indexOf(e);-1!=n&&t.splice(n,1)},
// ----- getParent ----- //
n.getParent=function(t,n){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,n))return t},
// ----- getQueryElement ----- //
// use element as selector string
n.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},
// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},
// ----- filterFindElements ----- //
n.filterFindElements=function(t,r){
// make array of elems
t=n.makeArray(t);var i=[];return t.forEach(function(t){
// check that elem is an actual element
if(t instanceof HTMLElement){
// add elem if no selector
if(!r)return void i.push(t);
// filter & find items if we have a selector
// filter
e(t,r)&&i.push(t);
// concat childElems to filterFound array
for(var n=t.querySelectorAll(r),a=0;a<n.length;a++)i.push(n[a])}}),i},
// ----- debounceMethod ----- //
n.debounceMethod=function(t,e,n){n=n||100;
// original method
var r=t.prototype[e],i=e+"Timeout";t.prototype[e]=function(){var t=this[i];clearTimeout(t);var e=arguments,a=this;this[i]=setTimeout(function(){r.apply(a,e),delete a[i]},n)}},
// ----- docReady ----- //
n.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?
// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(t):document.addEventListener("DOMContentLoaded",t)},
// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
n.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,n){return e+"-"+n}).toLowerCase()};var i=t.console;
// -----  ----- //
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
return n.htmlInit=function(e,r){n.docReady(function(){var a=n.toDashed(r),o="data-"+a,s=document.querySelectorAll("["+o+"]"),u=document.querySelectorAll(".js-"+a),l=n.makeArray(s).concat(n.makeArray(u)),d=o+"-options",c=t.jQuery;l.forEach(function(t){var n,a=t.getAttribute(o)||t.getAttribute(d);try{n=a&&JSON.parse(a)}catch(e){
// log error, do not initialize
return void(i&&i.error("Error parsing "+o+" on "+t.className+": "+e))}
// initialize
var s=new e(t,n);
// make available via $().data('namespace')
c&&c.data(t,r,s)})})},n})},/* 460 */
/***/
function(t,e,n){var r,i;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
!function(a,o){/*global define: false, module: false */
"use strict";r=o,void 0!==(i="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=i)}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;
// check for the standard method name first
if(t.matches)return"matches";
// check un-prefixed
if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],n=0;n<e.length;n++){var r=e[n],i=r+"MatchesSelector";if(t[i])return i}}();return function(e,n){return e[t](n)}})},/* 461 */
/***/
function(t,e,n){var r,i,a;/**
 * Outlayer Item
 */
!function(o,s){
// AMD - RequireJS
i=[n(139),n(140)],r=s,void 0!==(a="function"==typeof r?r.apply(e,i):r)&&(t.exports=a)}(window,function(t,e){"use strict";
// ----- helpers ----- //
function n(t){for(var e in t)return!1;return null,!0}
// -------------------------- Item -------------------------- //
function r(t,e){t&&(this.element=t,
// parent layout class, i.e. Masonry, Isotope, or Packery
this.layout=e,this.position={x:0,y:0},this._create())}
// -------------------------- CSS3 support -------------------------- //
var i=document.documentElement.style,a="string"==typeof i.transition?"transition":"WebkitTransition",o="string"==typeof i.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],u={transform:o,transition:a,transitionDuration:a+"Duration",transitionProperty:a+"Property",transitionDelay:a+"Delay"},l=r.prototype=Object.create(t.prototype);l.constructor=r,l._create=function(){
// transition objects
this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},
// trigger specified handler for event type
l.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.getSize=function(){this.size=e(this.element)},/**
 * apply CSS styles to element
 * @param {Object} style
 */
l.css=function(t){var e=this.element.style;for(var n in t){e[u[n]||n]=t[n]}},
// measure position, and sets it
l.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),r=t[e?"left":"right"],i=t[n?"top":"bottom"],a=parseFloat(r),o=parseFloat(i),s=this.layout.size;-1!=r.indexOf("%")&&(a=a/100*s.width),-1!=i.indexOf("%")&&(o=o/100*s.height),
// clean up 'auto' or other non-integer values
a=isNaN(a)?0:a,o=isNaN(o)?0:o,
// remove padding from measurement
a-=e?s.paddingLeft:s.paddingRight,o-=n?s.paddingTop:s.paddingBottom,this.position.x=a,this.position.y=o},
// set settled position, apply padding
l.layoutPosition=function(){var t=this.layout.size,e={},n=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop"),i=n?"paddingLeft":"paddingRight",a=n?"left":"right",o=n?"right":"left",s=this.position.x+t[i];
// set in percentage or pixels
e[a]=this.getXValue(s),
// reset other property
e[o]="";
// y
var u=r?"paddingTop":"paddingBottom",l=r?"top":"bottom",d=r?"bottom":"top",c=this.position.y+t[u];
// set in percentage or pixels
e[l]=this.getYValue(c),
// reset other property
e[d]="",this.css(e),this.emitEvent("layout",[this])},l.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},l.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},l._transitionTo=function(t,e){this.getPosition();
// get current x & y from top/left
var n=this.position.x,r=this.position.y,i=t==this.position.x&&e==this.position.y;
// if did not move and not transitioning, just go to layout
if(
// save end position
this.setPosition(t,e),i&&!this.isTransitioning)return void this.layoutPosition();var a=t-n,o=e-r,s={};s.transform=this.getTranslate(a,o),this.transition({to:s,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},l.getTranslate=function(t,e){
// flip cooridinates if origin on right or bottom
var n=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop");return t=n?t:-t,e=r?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},
// non transition + transform support
l.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},l.moveTo=l._transitionTo,l.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},
// ----- transition ----- //
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */
// non transition, just trigger callback
l._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
l.transition=function(t){
// redirect to nonTransition if no transition duration
if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;
// keep track of onTransitionEnd callback by css property
for(var n in t.onTransitionEnd)e.onEnd[n]=t.onTransitionEnd[n];
// keep track of properties that are transitioning
for(n in t.to)e.ingProperties[n]=!0,
// keep track of properties to clean up when transition is done
t.isCleaning&&(e.clean[n]=!0);
// set from styles
if(t.from){this.css(t.from);
// force redraw. http://blog.alexmaccaw.com/css-transitions
this.element.offsetHeight;
// hack for JSHint to hush about unused var
null}
// enable transition
this.enableTransition(t.to),
// set styles that are transitioning
this.css(t.to),this.isTransitioning=!0};var d="opacity,"+
// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(o);l.enableTransition=function(){
// HACK changing transitionProperty during a transition
// will cause transition to jump
if(!this.isTransitioning){
// make `transition: foo, bar, baz` from style object
// HACK un-comment this when enableTransition can work
// while a transition is happening
// var transitionValues = [];
// for ( var prop in style ) {
//   // dash-ify camelCased properties like WebkitTransition
//   prop = vendorProperties[ prop ] || prop;
//   transitionValues.push( toDashedAll( prop ) );
// }
// munge number to millisecond, to match stagger
var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,
// enable transition styles
this.css({transitionProperty:d,transitionDuration:t,transitionDelay:this.staggerDelay||0}),
// listen for transition end event
this.element.addEventListener(s,this,!1)}},
// ----- events ----- //
l.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},l.onotransitionend=function(t){this.ontransitionend(t)};
// properties that I munge to make my life easier
var c={"-webkit-transform":"transform"};l.ontransitionend=function(t){
// disregard bubbled events from children
if(t.target===this.element){var e=this._transn,r=c[t.propertyName]||t.propertyName;
// trigger onTransitionEnd callback
if(
// remove property that has completed transitioning
delete e.ingProperties[r],
// check if any properties are still transitioning
n(e.ingProperties)&&
// all properties have completed transitioning
this.disableTransition(),
// clean style
r in e.clean&&(
// clean up style
this.element.style[t.propertyName]="",delete e.clean[r]),r in e.onEnd){e.onEnd[r].call(this),delete e.onEnd[r]}this.emitEvent("transitionEnd",[this])}},l.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},/**
 * removes style property from element
 * @param {Object} style
**/
l._removeStyles=function(t){
// clean up transition styles
var e={};for(var n in t)e[n]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};
// ----- stagger ----- //
// ----- show/hide/remove ----- //
// remove element from DOM
/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
return l.removeTransitionStyles=function(){
// remove transition
this.css(f)},l.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},l.removeElem=function(){this.element.parentNode.removeChild(this.element),
// remove display: none
this.css({display:""}),this.emitEvent("remove",[this])},l.remove=function(){
// just remove element if no transition support or no transition
if(!a||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
// start transition
this.once("transitionEnd",function(){this.removeElem()}),this.hide()},l.reveal=function(){delete this.isHidden,
// remove display: none
this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},l.onRevealTransitionEnd=function(){
// check if still visible
// during transition, item may have been hidden
this.isHidden||this.emitEvent("reveal")},l.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];
// use opacity
if(e.opacity)return"opacity";
// get first property
for(var n in e)return n},l.hide=function(){
// set flag
this.isHidden=!0,
// remove display: none
this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,
// keep hidden stuff hidden
isCleaning:!0,onTransitionEnd:e})},l.onHideTransitionEnd=function(){
// check if still hidden
// during transition, item may have been un-hidden
this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},l.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},r})},/* 462 */
/***/
function(t,e,n){var r,i;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(a,o){"use strict";r=[n(139)],void 0!==(i=function(t){return o(a,t)}.apply(e,r))&&(t.exports=i)}("undefined"!=typeof window?window:this,
// --------------------------  factory -------------------------- //
function(t,e){"use strict";
// -------------------------- helpers -------------------------- //
// extend objects
function n(t,e){for(var n in e)t[n]=e[n];return t}
// turn element or nodeList into an array
function r(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?l.call(t):[t]}
// -------------------------- imagesLoaded -------------------------- //
/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function i(t,e,a){
// coerce ImagesLoaded() without new, to be new ImagesLoaded()
if(!(this instanceof i))return new i(t,e,a);
// use elem as selector string
var o=t;
// bail if bad element
if("string"==typeof t&&(o=document.querySelectorAll(t)),!o)return void u.error("Bad element for imagesLoaded "+(o||t));this.elements=r(o),this.options=n({},this.options),
// shift arguments if no options set
"function"==typeof e?a=e:n(this.options,e),a&&this.on("always",a),this.getImages(),s&&(
// add jQuery Deferred object
this.jqDeferred=new s.Deferred),
// HACK check async to allow time to bind listeners
setTimeout(this.check.bind(this))}
// --------------------------  -------------------------- //
function a(t){this.img=t}
// -------------------------- Background -------------------------- //
function o(t,e){this.url=t,this.element=e,this.img=new Image}var s=t.jQuery,u=t.console,l=Array.prototype.slice;i.prototype=Object.create(e.prototype),i.prototype.options={},i.prototype.getImages=function(){this.images=[],
// filter & find items if we have an item selector
this.elements.forEach(this.addElementImages,this)},/**
 * @param {Node} element
 */
i.prototype.addElementImages=function(t){
// filter siblings
"IMG"==t.nodeName&&this.addImage(t),
// get background image on element
!0===this.options.background&&this.addElementBackgroundImages(t);
// find children
// no non-element nodes, #143
var e=t.nodeType;if(e&&d[e]){
// concat childElems to filterFound array
for(var n=t.querySelectorAll("img"),r=0;r<n.length;r++){var i=n[r];this.addImage(i)}
// get child background images
if("string"==typeof this.options.background){var a=t.querySelectorAll(this.options.background);for(r=0;r<a.length;r++){var o=a[r];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};
// --------------------------  -------------------------- //
/**
 * @param {Image} img
 */
// ----- events ----- //
// trigger specified handler for event type
// inherit LoadingImage prototype
// -------------------------- jQuery -------------------------- //
// try making plugin
return i.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(
// get url inside url("...")
var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(e.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,t),r=n.exec(e.backgroundImage)}},i.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},i.prototype.addBackground=function(t,e){var n=new o(t,e);this.images.push(n)},i.prototype.check=function(){function t(t,n,r){
// HACK - Chrome triggers event before object properties have changed. #83
setTimeout(function(){e.progress(t,n,r)})}var e=this;
// complete if no images
if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();this.images.forEach(function(e){e.once("progress",t),e.check()})},i.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,
// progress event
this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),
// check if completed
this.progressedCount==this.images.length&&this.complete(),this.options.debug&&u&&u.log("progress: "+n,t,e)},i.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},a.prototype=Object.create(e.prototype),a.prototype.check=function(){if(this.getIsImageComplete())
// report based on naturalWidth
return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");
// If none of the checks above matched, simulate loading on detached element.
this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),
// bind to image as well for Firefox. #191
this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},a.prototype.getIsImageComplete=function(){
// check for non-zero, non-undefined naturalWidth
// fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
return this.img.complete&&this.img.naturalWidth},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},a.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype=Object.create(a.prototype),o.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},o.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},i.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(
// set local variable
s=e,
// $().imagesLoaded()
s.fn.imagesLoaded=function(t,e){return new i(this,t,e).jqDeferred.promise(s(this))})},i.makeJQueryPlugin(),i})},/* 463 */
/***/
function(t,e,n){var r=n(141),i=n(76),a=n(470),o=n(98),s=n(99),u=n(100),l=Object.prototype,d=l.hasOwnProperty,c=a(function(t,e){if(s(e)||o(e))return void i(e,u(e),t);for(var n in e)d.call(e,n)&&r(t,n,e[n])});t.exports=c},/* 464 */
/***/
function(t,e,n){/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function r(t){return!(!o(t)||a(t))&&(i(t)?m:l).test(s(t))}var i=n(201),a=n(467),o=n(46),s=n(203),u=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,d=Function.prototype,c=Object.prototype,f=d.toString,h=c.hasOwnProperty,m=RegExp("^"+f.call(h).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},/* 465 */
/***/
function(t,e,n){/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function r(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=s.call(t);return r&&(e?t[u]=n:delete t[u]),i}var i=n(85),a=Object.prototype,o=a.hasOwnProperty,s=a.toString,u=i?i.toStringTag:void 0;t.exports=r},/* 466 */
/***/
function(t,e){/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function n(t){return i.call(t)}/** Used for built-in method references. */
var r=Object.prototype,i=r.toString;t.exports=n},/* 467 */
/***/
function(t,e,n){/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function r(t){return!!a&&a in t}var i=n(468),a=function(){var t=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},/* 468 */
/***/
function(t,e,n){var r=n(30),i=r["__core-js_shared__"];t.exports=i},/* 469 */
/***/
function(t,e){/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function n(t,e){return null==t?void 0:t[e]}t.exports=n},/* 470 */
/***/
function(t,e,n){/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function r(t){return i(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(o=t.length>3&&"function"==typeof o?(i--,o):void 0,s&&a(n[0],n[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++r<i;){var u=n[r];u&&t(e,u,r,o)}return e})}var i=n(471),a=n(476);t.exports=r},/* 471 */
/***/
function(t,e,n){/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function r(t,e){return o(a(t,e,i),t+"")}var i=n(204),a=n(205),o=n(206);t.exports=r},/* 472 */
/***/
function(t,e){/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},/* 473 */
/***/
function(t,e,n){var r=n(474),i=n(200),a=n(204),o=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:a;t.exports=o},/* 474 */
/***/
function(t,e){/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function n(t){return function(){return t}}t.exports=n},/* 475 */
/***/
function(t,e){/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function n(t){var e=0,n=0;return function(){var o=a(),s=i-(o-n);if(n=o,s>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}/** Used to detect hot functions by number of calls within a span of milliseconds. */
var r=800,i=16,a=Date.now;t.exports=n},/* 476 */
/***/
function(t,e,n){/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function r(t,e,n){if(!s(n))return!1;var r=typeof e;return!!("number"==r?a(n)&&o(e,n.length):"string"==r&&e in n)&&i(n[e],t)}var i=n(142),a=n(98),o=n(208),s=n(46);t.exports=r},/* 477 */
/***/
function(t,e){/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},/* 478 */
/***/
function(t,e,n){/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function r(t){return a(t)&&i(t)==o}var i=n(75),a=n(57),o="[object Arguments]";t.exports=r},/* 479 */
/***/
function(t,e){/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function n(){return!1}t.exports=n},/* 480 */
/***/
function(t,e,n){var r=n(481),i=n(143),a=n(144),o=a&&a.isTypedArray,s=o?i(o):r;t.exports=s},/* 481 */
/***/
function(t,e,n){/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function r(t){return o(t)&&a(t.length)&&!!s[i(t)]}var i=n(75),a=n(207),o=n(57),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=r},/* 482 */
/***/
function(t,e,n){/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function r(t){if(!i(t))return a(t);var e=[];for(var n in Object(t))s.call(t,n)&&"constructor"!=n&&e.push(n);return e}var i=n(99),a=n(483),o=Object.prototype,s=o.hasOwnProperty;t.exports=r},/* 483 */
/***/
function(t,e,n){var r=n(212),i=r(Object.keys,Object);t.exports=i},/* 484 */
/***/
function(t,e,n){"use strict";function r(t){return Array.isArray(t)||void 0!==t.length}function i(t){if(Array.isArray(t))return t;var e=[];return s(t,function(t){e.push(t)}),e}function a(t){return t&&1===t.nodeType}function o(t,e,n){var r=t[e];return void 0!==r&&null!==r||void 0===n?r:n}var s=n(213).forEach,u=n(485),l=n(486),d=n(487),c=n(488),f=n(489),h=n(214),m=n(490),_=n(492),p=n(493),g=n(494);/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */
/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */
/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
t.exports=function(t){/**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
function e(t,e,n){function u(t){var e=Y.get(t);s(e,function(e){e(t)})}function l(t,e,n){Y.add(e,n),t&&n(e)}if(
//Options object may be omitted.
n||(n=e,e=t,t={}),!e)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(a(e))
// A single element has been passed in.
e=[e];else{if(!r(e))return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
// Convert collection to array for plugins.
// TODO: May want to check so that all the elements in the collection are valid elements.
e=i(e)}var d=0,c=o(t,"callOnAdd",k.callOnAdd),f=o(t,"onReady",function(){}),h=o(t,"debug",k.debug);s(e,function(t){_.getState(t)||(_.initState(t),y.set(t));var r=y.get(t);if(h&&b.log("Attaching listener to element",r,t),!x.isDetectable(t))
//The element is being prepared to be detectable. Do not make it detectable.
//Just add the listener, because the element will soon be detectable.
//The element is not prepared to be detectable, so do prepare it and add a listener to it.
return h&&b.log(r,"Not detectable."),x.isBusy(t)?(h&&b.log(r,"System busy making it detectable"),l(c,t,n),T[r]=T[r]||[],void T[r].push(function(){++d===e.length&&f()})):(h&&b.log(r,"Making detectable..."),x.markBusy(t,!0),w.makeDetectable({debug:h},t,function(t){if(h&&b.log(r,"onElementDetectable"),_.getState(t)){x.markAsDetectable(t),x.markBusy(t,!1),w.addListener(t,u),l(c,t,n);
// Since the element size might have changed since the call to "listenTo", we need to check for this change,
// so that a resize event may be emitted.
// Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
// Also, check the state existance before since the element may have been uninstalled in the installation process.
var i=_.getState(t);if(i&&i.startSize){var a=t.offsetWidth,o=t.offsetHeight;i.startSize.width===a&&i.startSize.height===o||u(t)}T[r]&&s(T[r],function(t){t()})}else
// The element has been unisntalled before being detectable.
h&&b.log(r,"Element uninstalled before being detectable.");delete T[r],++d===e.length&&f()}));h&&b.log(r,"Already detecable, adding listener."),
//The element has been prepared to be detectable and is ready to be listened to.
l(c,t,n),d++}),d===e.length&&f()}function n(t){if(!t)return b.error("At least one element is required.");if(a(t))
// A single element has been passed in.
t=[t];else{if(!r(t))return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
// Convert collection to array for plugins.
// TODO: May want to check so that all the elements in the collection are valid elements.
t=i(t)}s(t,function(t){Y.removeAllListeners(t),w.uninstall(t),_.cleanState(t)})}t=t||{};
//idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
var y;if(t.idHandler)
// To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
// so that readonly flag always is true when it's used here. This may be removed next major version bump.
y={get:function(e){return t.idHandler.get(e,!0)},set:t.idHandler.set};else{var v=d(),M=c({idGenerator:v,stateHandler:_});y=M}
//reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
var b=t.reporter;if(!b){b=f(!1===b)}
//batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
var L=o(t,"batchProcessor",m({reporter:b})),k={};k.callOnAdd=!!o(t,"callOnAdd",!0),k.debug=!!o(t,"debug",!1);var w,Y=l(y),x=u({stateHandler:_}),D=o(t,"strategy","object"),S={reporter:b,batchProcessor:L,stateHandler:_,idHandler:y};if("scroll"===D&&(h.isLegacyOpera()?(b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),D="object"):h.isIE(9)&&(b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),D="object")),"scroll"===D)w=g(S);else{if("object"!==D)throw new Error("Invalid strategy name: "+D);w=p(S)}
//Calls can be made to listenTo with elements that are still being installed.
//Also, same elements can occur in the elements list in the listenTo function.
//With this map, the ready callbacks can be synchronized between the calls
//so that the ready callback can always be called when an element is ready - even if
//it wasn't installed from the function itself.
var T={};return{listenTo:e,removeListener:Y.removeListener,removeAllListeners:Y.removeAllListeners,uninstall:n}}},/* 485 */
/***/
function(t,e,n){"use strict";t.exports=function(t){/**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
function e(t){var e=a(t);return e&&!!e.isDetectable}/**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
function n(t){a(t).isDetectable=!0}/**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
function r(t){return!!a(t).busy}/**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
function i(t,e){a(t).busy=!!e}var a=t.stateHandler.getState;return{isDetectable:e,markAsDetectable:n,isBusy:r,markBusy:i}}},/* 486 */
/***/
function(t,e,n){"use strict";t.exports=function(t){/**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
function e(e){var n=t.get(e);return void 0===n?[]:a[n]||[]}/**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
function n(e,n){var r=t.get(e);a[r]||(a[r]=[]),a[r].push(n)}function r(t,n){for(var r=e(t),i=0,a=r.length;i<a;++i)if(r[i]===n){r.splice(i,1);break}}function i(t){var n=e(t);n&&(n.length=0)}var a={};return{get:e,add:n,removeListener:r,removeAllListeners:i}}},/* 487 */
/***/
function(t,e,n){"use strict";t.exports=function(){/**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
function t(){return e++}var e=1;return{generate:t}}},/* 488 */
/***/
function(t,e,n){"use strict";t.exports=function(t){/**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
function e(t){var e=i(t);return e&&void 0!==e.id?e.id:null}/**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
function n(t){var e=i(t);if(!e)throw new Error("setId required the element to have a resize detection state.");var n=r.generate();return e.id=n,n}var r=t.idGenerator,i=t.stateHandler.getState;return{get:e,set:n}}},/* 489 */
/***/
function(t,e,n){"use strict";/* global console: false */
/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
t.exports=function(t){function e(){}var n={log:e,warn:e,error:e};if(!t&&window.console){var r=function(t,e){
//The proxy is needed to be able to call the method with the console context,
//since we cannot use bind.
t[e]=function(){var t=console[e];if(t.apply)//IE9 does not support console.log.apply :)
t.apply(console,arguments);else for(var n=0;n<arguments.length;n++)t(arguments[n])}};r(n,"log"),r(n,"warn"),r(n,"error")}return n}},/* 490 */
/***/
function(t,e,n){"use strict";function r(){function t(t,e){e||(e=t,t=0),t>a?a=t:t<o&&(o=t),r[t]||(r[t]=[]),r[t].push(e),i++}function e(){for(var t=o;t<=a;t++)for(var e=r[t],n=0;n<e.length;n++){var i=e[n];i()}}function n(){return i}var r={},i=0,a=0,o=0;return{add:t,process:e,size:n}}var i=n(491);t.exports=function(t){function e(t,e){!m&&c&&d&&0===h.size()&&
// Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
// This needs to be done before, since we're checking the size of the batch to be 0.
o(),h.add(t,e)}function n(){for(
// Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
// Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
m=!0;h.size();){var t=h;h=r(),t.process()}m=!1}function a(t){m||(void 0===t&&(t=d),f&&(s(f),f=null),t?o():n())}function o(){f=u(n)}function s(t){return clearTimeout(t)}function u(t){return function(t){return setTimeout(t,0)}(t)}t=t||{};var l=t.reporter,d=i.getOption(t,"async",!0),c=i.getOption(t,"auto",!0);c&&!d&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),d=!0);var f,h=r(),m=!1;return{add:e,force:a}}},/* 491 */
/***/
function(t,e,n){"use strict";function r(t,e,n){var r=t[e];return void 0!==r&&null!==r||void 0===n?r:n}(t.exports={}).getOption=r},/* 492 */
/***/
function(t,e,n){"use strict";function r(t){return t[o]={},i(t)}function i(t){return t[o]}function a(t){delete t[o]}var o="_erd";t.exports={initState:r,getState:i,cleanState:a}},/* 493 */
/***/
function(t,e,n){"use strict";/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */
var r=n(214);t.exports=function(t){/**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
function e(t,e){function n(){e(t)}if(!i(t))throw new Error("Element is not detectable by this strategy.");if(r.isIE(8))
//IE 8 does not support object, but supports the resize event directly on elements.
u(t).object={proxy:n},t.attachEvent("onresize",n);else{i(t).contentDocument.defaultView.addEventListener("resize",n)}}/**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
function n(t,e,n){n||(n=e,e=t,t=null),t=t||{};t.debug;r.isIE(8)?
//IE 8 does not support objects properly. Luckily they do support the resize event.
//So do not inject the object and notify that the element is already ready to be listened to.
//The event handler for the resize event is attached in the utils.addListener instead.
n(e):function(t,e){function n(){function n(){if("static"===l.position){t.style.position="relative";var e=function(t,e,n,r){var i=n[r];"auto"!==i&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(i)&&(t.warn("An element that is positioned static has style."+r+"="+i+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",e),e.style[r]=0)};
//Check so that there are no accidental styles that will make the element styled differently now that is is relative.
//If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
e(o,t,l,"top"),e(o,t,l,"right"),e(o,t,l,"bottom"),e(o,t,l,"left")}}function s(){/*jshint validthis: true */
function r(t,e){
//Opera 12 seem to call the object.onload before the actual document has been created.
//So if it is not present, poll it with an timeout until it is present.
//TODO: Could maybe be handled better with object.onreadystatechange or similar.
if(!t.contentDocument)return void setTimeout(function(){r(t,e)},100);e(t.contentDocument)}
// The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
a||n(),
//Create the style element to be added to the object.
r(this,function(n){
//Notify that the element is ready to be listened to.
e(t)})}
// The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
// The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
""!==l.position&&(n(l),a=!0);
//Add an object element as a child to the target element that will be listened to for resize events.
var d=document.createElement("object");d.style.cssText=i,d.tabIndex=-1,d.type="text/html",d.onload=s,
//Safari: This must occur before adding the object to the DOM.
//IE: Does not like that this happens before, even if it is also added after.
r.isIE()||(d.data="about:blank"),t.appendChild(d),u(t).object=d,
//IE: This must occur after adding the object to the DOM.
r.isIE()&&(d.data="about:blank")}var i="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",a=!1,l=window.getComputedStyle(t),d=t.offsetWidth,c=t.offsetHeight;u(t).startSize={width:d,height:c},s?s.add(n):n()}(e,n)}/**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
function i(t){return u(t).object}function a(t){r.isIE(8)?t.detachEvent("onresize",u(t).object.proxy):t.removeChild(i(t)),delete u(t).object}t=t||{};var o=t.reporter,s=t.batchProcessor,u=t.stateHandler.getState;if(!o)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:e,uninstall:a}}},/* 494 */
/***/
function(t,e,n){"use strict";/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */
var r=n(213).forEach;t.exports=function(t){function e(t){t.className+=" "+_+"_animation_active"}function n(t,e,n){if(t.addEventListener)t.addEventListener(e,n);else{if(!t.attachEvent)return d.error("[scroll] Don't know how to add event listeners.");t.attachEvent("on"+e,n)}}function i(t,e,n){if(t.removeEventListener)t.removeEventListener(e,n);else{if(!t.detachEvent)return d.error("[scroll] Don't know how to remove event listeners.");t.detachEvent("on"+e,n)}}function a(t){return f(t).container.childNodes[0].childNodes[0].childNodes[0]}function o(t){return f(t).container.childNodes[0].childNodes[0].childNodes[1]}/**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
function s(t,e){if(!f(t).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");f(t).listeners.push(e)}/**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
function u(t,i,s){function u(){if(t.debug){var e=Array.prototype.slice.call(arguments);if(e.unshift(h.get(i),"Scroll: "),d.log.apply)d.log.apply(null,e);else for(var n=0;n<e.length;n++)d.log(e[n])}}function l(t){
// Check the absolute positioned container since the top level container is display: inline.
var e=f(t).container.childNodes[0],n=window.getComputedStyle(e);return!n.width||-1===n.width.indexOf("px")}function p(){
// Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
// so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
var t=window.getComputedStyle(i),e={};return e.position=t.position,e.width=i.offsetWidth,e.height=i.offsetHeight,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.widthCSS=t.width,e.heightCSS=t.height,e}function g(){var t=p();f(i).startSize={width:t.width,height:t.height},u("Element start size",f(i).startSize)}function y(){f(i).listeners=[]}function v(){if(u("storeStyle invoked."),!f(i))return void u("Aborting because element has been uninstalled");var t=p();f(i).style=t}function M(t,e,n){f(t).lastWidth=e,f(t).lastHeight=n}function b(t){return a(t).childNodes[0]}function L(){return 2*m.width+1}function k(){return 2*m.height+1}function w(t){return t+10+L()}function Y(t){return t+10+k()}function x(t){return 2*t+L()}function D(t){return 2*t+k()}function S(t,e,n){var r=a(t),i=o(t),s=w(e),u=Y(n),l=x(e),d=D(n);r.scrollLeft=s,r.scrollTop=u,i.scrollLeft=l,i.scrollTop=d}function T(){var t=f(i).container;if(!t){t=document.createElement("div"),t.className=_,t.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",f(i).container=t,e(t),i.appendChild(t);var r=function(){f(i).onRendered&&f(i).onRendered()};n(t,"animationstart",r),
// Store the event handler here so that they may be removed when uninstall is called.
// See uninstall function for an explanation why it is needed.
f(i).onAnimationStart=r}return t}function j(){function t(){f(i).onExpand&&f(i).onExpand()}function e(){f(i).onShrink&&f(i).onShrink()}if(u("Injecting elements"),!f(i))return void u("Aborting because element has been uninstalled");!function(){var t=f(i).style;if("static"===t.position){i.style.position="relative";var e=function(t,e,n,r){var i=n[r];"auto"!==i&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(i)&&(t.warn("An element that is positioned static has style."+r+"="+i+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",e),e.style[r]=0)};
//Check so that there are no accidental styles that will make the element styled differently now that is is relative.
//If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
e(d,i,t,"top"),e(d,i,t,"right"),e(d,i,t,"bottom"),e(d,i,t,"left")}}();var r=f(i).container;r||(r=T());
// Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
// we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
// the targeted element.
// When the bug is resolved, "containerContainer" may be removed.
// The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
// This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.
var a=m.width,o=m.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(t,e,n,r){return t=t?t+"px":"0",e=e?e+"px":"0",n=n?n+"px":"0",r=r?r+"px":"0","left: "+t+"; top: "+e+"; right: "+r+"; bottom: "+n+";"}(-(1+a),-(1+o),-o,-a),l=document.createElement("div"),c=document.createElement("div"),h=document.createElement("div"),p=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div");
// Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
// However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
l.dir="ltr",l.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",l.className=_,c.className=_,c.style.cssText=s,h.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",p.style.cssText="position: absolute; left: 0; top: 0;",g.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",y.style.cssText="position: absolute; width: 200%; height: 200%;",h.appendChild(p),g.appendChild(y),c.appendChild(h),c.appendChild(g),l.appendChild(c),r.appendChild(l),n(h,"scroll",t),n(g,"scroll",e),
// Store the event handlers here so that they may be removed when uninstall is called.
// See uninstall function for an explanation why it is needed.
f(i).onExpandScroll=t,f(i).onShrinkScroll=e}function E(){function e(t,e,n){var r=b(t),i=w(e),a=Y(n);r.style.width=i+"px",r.style.height=a+"px"}function n(n){var r=i.offsetWidth,a=i.offsetHeight;u("Storing current size",r,a),
// Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
// Otherwise the if-check in handleScroll is useless.
M(i,r,a),
// Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
// Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.
c.add(0,function(){if(!f(i))return void u("Aborting because element has been uninstalled");if(!s())return void u("Aborting because element container has not been initialized");if(t.debug){var n=i.offsetWidth,o=i.offsetHeight;n===r&&o===a||d.warn(h.get(i),"Scroll: Size changed before updating detector elements.")}e(i,r,a)}),c.add(1,function(){return f(i)?s()?void S(i,r,a):void u("Aborting because element container has not been initialized"):void u("Aborting because element has been uninstalled")}),n&&c.add(2,function(){return f(i)?s()?void n():void u("Aborting because element container has not been initialized"):void u("Aborting because element has been uninstalled")})}function s(){return!!f(i).container}function m(){u("notifyListenersIfNeeded invoked");var t=f(i);
// Don't notify the if the current size is the start size, and this is the first notification.
// Don't notify the if the current size is the start size, and this is the first notification.
// Don't notify if the size already has been notified.
return function(){return void 0===f(i).lastNotifiedWidth}()&&t.lastWidth===t.startSize.width&&t.lastHeight===t.startSize.height?u("Not notifying: Size is the same as the start size, and there has been no notification yet."):t.lastWidth===t.lastNotifiedWidth&&t.lastHeight===t.lastNotifiedHeight?u("Not notifying: Size already notified"):(u("Current size not notified, notifying..."),t.lastNotifiedWidth=t.lastWidth,t.lastNotifiedHeight=t.lastHeight,void r(f(i).listeners,function(t){t(i)}))}function _(){if(u("startanimation triggered."),l(i))return void u("Ignoring since element is still unrendered...");u("Element rendered.");var t=a(i),e=o(i);0!==t.scrollLeft&&0!==t.scrollTop&&0!==e.scrollLeft&&0!==e.scrollTop||(u("Scrollbars out of sync. Updating detector elements..."),n(m))}function p(){if(u("Scroll detected."),l(i))
// Element is still unrendered. Skip this scroll event.
return void u("Scroll event fired while unrendered. Ignoring...");var t=i.offsetWidth,e=i.offsetHeight;t!==f(i).lastWidth||e!==f(i).lastHeight?(u("Element size changed."),n(m)):u("Element size has not changed ("+t+"x"+e+").")}if(u("registerListenersAndPositionElements invoked."),!f(i))return void u("Aborting because element has been uninstalled");f(i).onRendered=_,f(i).onExpand=p,f(i).onShrink=p;var g=f(i).style;e(i,g.width,g.height)}function O(){if(u("finalizeDomMutation invoked."),!f(i))return void u("Aborting because element has been uninstalled");var t=f(i).style;M(i,t.width,t.height),S(i,t.width,t.height)}function H(){s(i)}function P(){u("Installing..."),y(),g(),c.add(0,v),c.add(1,j),c.add(2,E),c.add(3,O),c.add(4,H)}s||(s=i,i=t,t=null),t=t||{},u("Making detectable..."),!function(t){return!function(t){return t===t.ownerDocument.body||t.ownerDocument.body.contains(t)}(t)||null===window.getComputedStyle(t)}(i)?P():(u("Element is detached"),T(),u("Waiting until element is attached..."),f(i).onRendered=function(){u("Element is now attached"),P()})}function l(t){var e=f(t);e&&(
// Uninstall may have been called in the following scenarios:
// (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
// (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
// (3) After the installation process (here, state.busy = false and all the stuff has been injected).
// So to be on the safe side, let's check for each thing before removing.
// We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
e.onExpandScroll&&i(a(t),"scroll",e.onExpandScroll),e.onShrinkScroll&&i(o(t),"scroll",e.onShrinkScroll),e.onAnimationStart&&i(e.container,"animationstart",e.onAnimationStart),e.container&&t.removeChild(e.container))}t=t||{};var d=t.reporter,c=t.batchProcessor,f=t.stateHandler.getState,h=(t.stateHandler.hasState,t.idHandler);if(!c)throw new Error("Missing required dependency: batchProcessor");if(!d)throw new Error("Missing required dependency: reporter.");
//TODO: Could this perhaps be done at installation time?
var m=function(){var t=document.createElement("div");t.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var e=document.createElement("div");e.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",e.appendChild(t),document.body.insertBefore(e,document.body.firstChild);var n=500-e.clientWidth,r=500-e.clientHeight;return document.body.removeChild(e),{width:n,height:r}}(),_="erd_scroll_detection_container";return function(t,e){if(!document.getElementById(t)){var n=e+"_animation",r=e+"_animation_active",i="/* Created by the element-resize-detector library. */\n";i+="."+e+" > div::-webkit-scrollbar { display: none; }\n\n",i+="."+r+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",i+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",i+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(e,n){n=n||function(t){document.head.appendChild(t)};var r=document.createElement("style");r.innerHTML=e,r.id=t,n(r)}(i)}}("erd_scroll_detection_scrollbar_style",_),{makeDetectable:u,addListener:s,uninstall:l}}},/* 495 */
/***/
function(t,e,n){/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function r(t,e,n){function r(e){var n=y,r=v;return y=v=void 0,w=e,b=t.apply(r,n)}function d(t){
// Invoke the leading edge.
// Reset any `maxWait` timer.
// Start the timer for the trailing edge.
return w=t,L=setTimeout(h,e),Y?r(t):b}function c(t){var n=t-k,r=t-w,i=e-n;return x?l(i,M-r):i}function f(t){var n=t-k,r=t-w;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===k||n>=e||n<0||x&&r>=M}function h(){var t=a();if(f(t))return m(t);
// Restart the timer.
L=setTimeout(h,c(t))}function m(t){
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return L=void 0,D&&y?r(t):(y=v=void 0,b)}function _(){void 0!==L&&clearTimeout(L),w=0,y=k=v=L=void 0}function p(){return void 0===L?b:m(a())}function g(){var t=a(),n=f(t);if(y=arguments,v=this,k=t,n){if(void 0===L)return d(k);if(x)
// Handle invocations in a tight loop.
return L=setTimeout(h,e),r(k)}return void 0===L&&(L=setTimeout(h,e)),b}var y,v,M,b,L,k,w=0,Y=!1,x=!1,D=!0;if("function"!=typeof t)throw new TypeError(s);return e=o(e)||0,i(n)&&(Y=!!n.leading,x="maxWait"in n,M=x?u(o(n.maxWait)||0,e):M,D="trailing"in n?!!n.trailing:D),g.cancel=_,g.flush=p,g}var i=n(46),a=n(496),o=n(497),s="Expected a function",u=Math.max,l=Math.min;t.exports=r},/* 496 */
/***/
function(t,e,n){var r=n(30),i=function(){return r.Date.now()};t.exports=i},/* 497 */
/***/
function(t,e,n){/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function r(t){if("number"==typeof t)return t;if(a(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=l.test(t);return n||d.test(t)?c(t.slice(2),n?2:8):u.test(t)?o:+t}var i=n(46),a=n(102),o=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt;t.exports=r},/* 498 */
/***/
function(t,e,n){var r=n(215),i=n(499),a=n(551),o=n(151),s=n(76),u=n(562),l=n(564),d=n(221),c=l(function(t,e){var n={};if(null==t)return n;var l=!1;e=r(e,function(e){return e=o(e,t),l||(l=e.length>1),e}),s(t,d(t),n),l&&(n=i(n,7,u));for(var c=e.length;c--;)a(n,e[c]);return n});t.exports=c},/* 499 */
/***/
function(t,e,n){/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function r(t,e,n,H,P,A){var C,F=e&Y,I=e&x,W=e&D;if(n&&(C=P?n(t,H,P,A):n(t)),void 0!==C)return C;if(!L(t))return t;var N=v(t);if(N){if(C=p(t),!F)return d(t,C)}else{var z=_(t),R=z==T||z==j;if(M(t))return l(t,F);if(z==E||z==S||R&&!P){if(C=I||R?{}:y(t),!F)return I?f(t,u(C,t)):c(t,s(C,t))}else{if(!O[z])return P?t:{};C=g(t,z,F)}}
// Check for circular references and return its corresponding clone.
A||(A=new i);var B=A.get(t);if(B)return B;if(A.set(t,C),k(t))return t.forEach(function(i){C.add(r(i,e,n,i,t,A))}),C;if(b(t))return t.forEach(function(i,a){C.set(a,r(i,e,n,a,t,A))}),C;var V=W?I?m:h:I?keysIn:w,U=N?void 0:V(t);return a(U||t,function(i,a){U&&(a=i,i=t[a]),
// Recursively populate clone (susceptible to call stack limits).
o(C,a,r(i,e,n,a,t,A))}),C}var i=n(500),a=n(523),o=n(141),s=n(524),u=n(525),l=n(528),d=n(529),c=n(530),f=n(532),h=n(533),m=n(221),_=n(149),p=n(538),g=n(539),y=n(545),v=n(58),M=n(211),b=n(547),L=n(46),k=n(549),w=n(100),Y=1,x=2,D=4,S="[object Arguments]",T="[object Function]",j="[object GeneratorFunction]",E="[object Object]",O={};O[S]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O[E]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O[T]=O["[object WeakMap]"]=!1,t.exports=r},/* 500 */
/***/
function(t,e,n){/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(t){var e=this.__data__=new i(t);this.size=e.size}var i=n(103),a=n(506),o=n(507),s=n(508),u=n(509),l=n(510);
// Add methods to `Stack`.
r.prototype.clear=a,r.prototype.delete=o,r.prototype.get=s,r.prototype.has=u,r.prototype.set=l,t.exports=r},/* 501 */
/***/
function(t,e){/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function n(){this.__data__=[],this.size=0}t.exports=n},/* 502 */
/***/
function(t,e,n){/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function r(t){var e=this.__data__,n=i(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}var i=n(104),a=Array.prototype,o=a.splice;t.exports=r},/* 503 */
/***/
function(t,e,n){/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function r(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]}var i=n(104);t.exports=r},/* 504 */
/***/
function(t,e,n){/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function r(t){return i(this.__data__,t)>-1}var i=n(104);t.exports=r},/* 505 */
/***/
function(t,e,n){/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function r(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var i=n(104);t.exports=r},/* 506 */
/***/
function(t,e,n){/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function r(){this.__data__=new i,this.size=0}var i=n(103);t.exports=r},/* 507 */
/***/
function(t,e){/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},/* 508 */
/***/
function(t,e){/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function n(t){return this.__data__.get(t)}t.exports=n},/* 509 */
/***/
function(t,e){/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function n(t){return this.__data__.has(t)}t.exports=n},/* 510 */
/***/
function(t,e,n){/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function r(t,e){var n=this.__data__;if(n instanceof i){var r=n.__data__;if(!a||r.length<s-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new o(r)}return n.set(t,e),this.size=n.size,this}var i=n(103),a=n(145),o=n(216),s=200;t.exports=r},/* 511 */
/***/
function(t,e,n){/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function r(){this.size=0,this.__data__={hash:new i,map:new(o||a),string:new i}}var i=n(512),a=n(103),o=n(145);t.exports=r},/* 512 */
/***/
function(t,e,n){/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var i=n(513),a=n(514),o=n(515),s=n(516),u=n(517);
// Add methods to `Hash`.
r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,t.exports=r},/* 513 */
/***/
function(t,e,n){/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function r(){this.__data__=i?i(null):{},this.size=0}var i=n(105);t.exports=r},/* 514 */
/***/
function(t,e){/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},/* 515 */
/***/
function(t,e,n){/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function r(t){var e=this.__data__;if(i){var n=e[t];return n===a?void 0:n}return s.call(e,t)?e[t]:void 0}var i=n(105),a="__lodash_hash_undefined__",o=Object.prototype,s=o.hasOwnProperty;t.exports=r},/* 516 */
/***/
function(t,e,n){/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function r(t){var e=this.__data__;return i?void 0!==e[t]:o.call(e,t)}var i=n(105),a=Object.prototype,o=a.hasOwnProperty;t.exports=r},/* 517 */
/***/
function(t,e,n){/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=i&&void 0===e?a:e,this}var i=n(105),a="__lodash_hash_undefined__";t.exports=r},/* 518 */
/***/
function(t,e,n){/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function r(t){var e=i(this,t).delete(t);return this.size-=e?1:0,e}var i=n(106);t.exports=r},/* 519 */
/***/
function(t,e){/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},/* 520 */
/***/
function(t,e,n){/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function r(t){return i(this,t).get(t)}var i=n(106);t.exports=r},/* 521 */
/***/
function(t,e,n){/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function r(t){return i(this,t).has(t)}var i=n(106);t.exports=r},/* 522 */
/***/
function(t,e,n){/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function r(t,e){var n=i(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var i=n(106);t.exports=r},/* 523 */
/***/
function(t,e){/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}t.exports=n},/* 524 */
/***/
function(t,e,n){/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function r(t,e){return t&&i(e,a(e),t)}var i=n(76),a=n(100);t.exports=r},/* 525 */
/***/
function(t,e,n){/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function r(t,e){return t&&i(e,a(e),t)}var i=n(76),a=n(217);t.exports=r},/* 526 */
/***/
function(t,e,n){/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function r(t){if(!i(t))return o(t);var e=a(t),n=[];for(var r in t)("constructor"!=r||!e&&u.call(t,r))&&n.push(r);return n}var i=n(46),a=n(99),o=n(527),s=Object.prototype,u=s.hasOwnProperty;t.exports=r},/* 527 */
/***/
function(t,e){/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},/* 528 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(t){/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function r(t,e){if(e)return t.slice();var n=t.length,r=l?l(n):new t.constructor(n);return t.copy(r),r}var i=n(30),a="object"==typeof e&&e&&!e.nodeType&&e,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===a,u=s?i.Buffer:void 0,l=u?u.allocUnsafe:void 0;t.exports=r}).call(e,n(101)(t))},/* 529 */
/***/
function(t,e){/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},/* 530 */
/***/
function(t,e,n){/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function r(t,e){return i(t,a(t),e)}var i=n(76),a=n(146);t.exports=r},/* 531 */
/***/
function(t,e){/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function n(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var o=t[n];e(o,n,t)&&(a[i++]=o)}return a}t.exports=n},/* 532 */
/***/
function(t,e,n){/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function r(t,e){return i(t,a(t),e)}var i=n(76),a=n(219);t.exports=r},/* 533 */
/***/
function(t,e,n){/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function r(t){return i(t,o,a)}var i=n(220),a=n(146),o=n(100);t.exports=r},/* 534 */
/***/
function(t,e,n){var r=n(56),i=n(30),a=r(i,"DataView");t.exports=a},/* 535 */
/***/
function(t,e,n){var r=n(56),i=n(30),a=r(i,"Promise");t.exports=a},/* 536 */
/***/
function(t,e,n){var r=n(56),i=n(30),a=r(i,"Set");t.exports=a},/* 537 */
/***/
function(t,e,n){var r=n(56),i=n(30),a=r(i,"WeakMap");t.exports=a},/* 538 */
/***/
function(t,e){/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function n(t){var e=t.length,n=new t.constructor(e);
// Add properties assigned by `RegExp#exec`.
return e&&"string"==typeof t[0]&&i.call(t,"index")&&(n.index=t.index,n.input=t.input),n}/** Used for built-in method references. */
var r=Object.prototype,i=r.hasOwnProperty;t.exports=n},/* 539 */
/***/
function(t,e,n){/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function r(t,e,n){var r=t.constructor;switch(e){case g:return i(t);case l:case d:return new r(+t);case y:return a(t,n);case v:case M:case b:case L:case k:case w:case Y:case x:case D:return u(t,n);case c:return new r;case f:case _:return new r(t);case h:return o(t);case m:return new r;case p:return s(t)}}var i=n(150),a=n(541),o=n(542),s=n(543),u=n(544),l="[object Boolean]",d="[object Date]",c="[object Map]",f="[object Number]",h="[object RegExp]",m="[object Set]",_="[object String]",p="[object Symbol]",g="[object ArrayBuffer]",y="[object DataView]",v="[object Float32Array]",M="[object Float64Array]",b="[object Int8Array]",L="[object Int16Array]",k="[object Int32Array]",w="[object Uint8Array]",Y="[object Uint8ClampedArray]",x="[object Uint16Array]",D="[object Uint32Array]";t.exports=r},/* 540 */
/***/
function(t,e,n){var r=n(30),i=r.Uint8Array;t.exports=i},/* 541 */
/***/
function(t,e,n){/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function r(t,e){var n=e?i(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var i=n(150);t.exports=r},/* 542 */
/***/
function(t,e){/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function n(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}/** Used to match `RegExp` flags from their coerced string values. */
var r=/\w*$/;t.exports=n},/* 543 */
/***/
function(t,e,n){/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function r(t){return o?Object(o.call(t)):{}}var i=n(85),a=i?i.prototype:void 0,o=a?a.valueOf:void 0;t.exports=r},/* 544 */
/***/
function(t,e,n){/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function r(t,e){var n=e?i(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var i=n(150);t.exports=r},/* 545 */
/***/
function(t,e,n){/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function r(t){return"function"!=typeof t.constructor||o(t)?{}:i(a(t))}var i=n(546),a=n(148),o=n(99);t.exports=r},/* 546 */
/***/
function(t,e,n){var r=n(46),i=Object.create,a=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=a},/* 547 */
/***/
function(t,e,n){var r=n(548),i=n(143),a=n(144),o=a&&a.isMap,s=o?i(o):r;t.exports=s},/* 548 */
/***/
function(t,e,n){/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function r(t){return a(t)&&i(t)==o}var i=n(149),a=n(57),o="[object Map]";t.exports=r},/* 549 */
/***/
function(t,e,n){var r=n(550),i=n(143),a=n(144),o=a&&a.isSet,s=o?i(o):r;t.exports=s},/* 550 */
/***/
function(t,e,n){/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function r(t){return a(t)&&i(t)==o}var i=n(149),a=n(57),o="[object Set]";t.exports=r},/* 551 */
/***/
function(t,e,n){/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function r(t,e){return e=i(e,t),null==(t=o(t,e))||delete t[s(a(e))]}var i=n(151),a=n(558),o=n(559),s=n(222);t.exports=r},/* 552 */
/***/
function(t,e,n){/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function r(t,e){if(i(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(s.test(t)||!o.test(t)||null!=e&&t in Object(e))}var i=n(58),a=n(102),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=r},/* 553 */
/***/
function(t,e,n){var r=n(554),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,function(t,n,r,i){e.push(r?i.replace(a,"$1"):n||t)}),e});t.exports=o},/* 554 */
/***/
function(t,e,n){/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function r(t){var e=i(t,function(t){return n.size===a&&n.clear(),t}),n=e.cache;return e}var i=n(555),a=500;t.exports=r},/* 555 */
/***/
function(t,e,n){/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(a);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(r.Cache||i),n}var i=n(216),a="Expected a function";
// Expose `MapCache`.
r.Cache=i,t.exports=r},/* 556 */
/***/
function(t,e,n){/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function r(t){return null==t?"":i(t)}var i=n(557);t.exports=r},/* 557 */
/***/
function(t,e,n){/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function r(t){
// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(o(t))
// Recursively convert values (susceptible to call stack limits).
return a(t,r)+"";if(s(t))return d?d.call(t):"";var e=t+"";return"0"==e&&1/t==-u?"-0":e}var i=n(85),a=n(215),o=n(58),s=n(102),u=1/0,l=i?i.prototype:void 0,d=l?l.toString:void 0;t.exports=r},/* 558 */
/***/
function(t,e){/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function n(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}t.exports=n},/* 559 */
/***/
function(t,e,n){/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function r(t,e){return e.length<2?t:i(t,a(e,0,-1))}var i=n(560),a=n(561);t.exports=r},/* 560 */
/***/
function(t,e,n){/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function r(t,e){e=i(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[a(e[n++])];return n&&n==r?t:void 0}var i=n(151),a=n(222);t.exports=r},/* 561 */
/***/
function(t,e){/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function n(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(i);++r<i;)a[r]=t[r+e];return a}t.exports=n},/* 562 */
/***/
function(t,e,n){/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function r(t){return i(t)?void 0:t}var i=n(563);t.exports=r},/* 563 */
/***/
function(t,e,n){/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function r(t){if(!o(t)||i(t)!=s)return!1;var e=a(t);if(null===e)return!0;var n=c.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&d.call(n)==f}var i=n(75),a=n(148),o=n(57),s="[object Object]",u=Function.prototype,l=Object.prototype,d=u.toString,c=l.hasOwnProperty,f=d.call(Object);t.exports=r},/* 564 */
/***/
function(t,e,n){/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function r(t){return o(a(t,void 0,i),t+"")}var i=n(565),a=n(205),o=n(206);t.exports=r},/* 565 */
/***/
function(t,e,n){/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function r(t){return(null==t?0:t.length)?i(t,1):[]}var i=n(566);t.exports=r},/* 566 */
/***/
function(t,e,n){/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function r(t,e,n,o,s){var u=-1,l=t.length;for(n||(n=a),s||(s=[]);++u<l;){var d=t[u];e>0&&n(d)?e>1?
// Recursively flatten arrays (susceptible to call stack limits).
r(d,e-1,n,o,s):i(s,d):o||(s[s.length]=d)}return s}var i=n(147),a=n(567);t.exports=r},/* 567 */
/***/
function(t,e,n){/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function r(t){return o(t)||a(t)||!!(s&&t&&t[s])}var i=n(85),a=n(210),o=n(58),s=i?i.isConcatSpreadable:void 0;t.exports=r},/* 568 */
/***/
function(t,e,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r=n(4),i=n(569);if(void 0===r)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
// Hack to grab NoopUpdateQueue from isomorphic React
var a=(new r.Component).updater;t.exports=i(r.Component,r.isValidElement,a)},/* 569 */
/***/
function(t,e,n){"use strict";
// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function r(t){return t}function i(t,e,n){function i(t,e,n){for(var r in e)e.hasOwnProperty(r)&&l("function"==typeof e[r],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",t.displayName||"ReactClass",a[n],r)}function c(t,e){var n=b.hasOwnProperty(e)?b[e]:null;
// Disallow overriding of base class methods unless explicitly allowed.
x.hasOwnProperty(e)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),
// Disallow defining methods more than once unless explicitly allowed.
t&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}/**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
function f(t,n){if(!n){var r=typeof n;return void l("object"===r&&null!==n,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",t.displayName||"ReactClass",null===n?null:r)}u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var i=t.prototype,a=i.__reactAutoBindPairs;
// By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
n.hasOwnProperty(d)&&k.mixins(t,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==d){var s=n[o],f=i.hasOwnProperty(o);if(c(f,o),k.hasOwnProperty(o))k[o](t,s);else{
// Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var h=b.hasOwnProperty(o),m="function"==typeof s,g=m&&!h&&!f&&!1!==n.autobind;if(g)a.push(o,s),i[o]=s;else if(f){var y=b[o];
// These cases should already be caught by validateMethodOverride.
u(h&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,o),
// For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
"DEFINE_MANY_MERGED"===y?i[o]=_(i[o],s):"DEFINE_MANY"===y&&(i[o]=p(i[o],s))}else i[o]=s,
// Add verbose displayName to the function, which helps when looking
// at profiling tools.
"function"==typeof s&&n.displayName&&(i[o].displayName=n.displayName+"_"+o)}}}function h(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var i=n in k;u(!i,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var o=L.hasOwnProperty(n)?L[n]:null;return u("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=_(t[n],r))}t[n]=r}}}/**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
function m(t,e){u(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(u(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}/**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
function _(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var i={};return m(i,n),m(i,r),i}}/**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
function p(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}/**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
function g(t,e){var n=e.bind(t);n.__reactBoundContext=t,n.__reactBoundMethod=e,n.__reactBoundArguments=null;var r=t.constructor.displayName,i=n.bind;return n.bind=function(a){for(var o=arguments.length,s=Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=arguments[u];
// User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(a!==t&&null!==a)l(!1,"bind(): React component methods may only be bound to the component instance. See %s",r);else if(!s.length)return l(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",r),n;var d=i.apply(n,arguments);return d.__reactBoundContext=t,d.__reactBoundMethod=e,d.__reactBoundArguments=s,d},n}/**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
function y(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];t[r]=g(t,i)}}/**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
function v(t){
// To keep our warnings more understandable, we'll use a little hack here to
// ensure that Constructor.name !== 'Constructor'. This makes sure we don't
// unnecessarily identify a class without displayName as 'Constructor'.
var e=r(function(t,r,i){l(this instanceof e,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"),
// Wire up auto-binding
this.__reactAutoBindPairs.length&&y(this),this.props=t,this.context=r,this.refs=s,this.updater=i||n,this.state=null;
// ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var a=this.getInitialState?this.getInitialState():null;
// We allow auto-mocks to proceed as if they're returning null.
void 0===a&&this.getInitialState._isMockFunction&&(
// This is probably bad practice. Consider warning here and
// deprecating this convenience.
a=null),u("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new D,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],M.forEach(f.bind(null,e)),f(e,w),f(e,t),f(e,Y),
// Initialize the defaultProps property after all mixins have been merged.
e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),
// This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
e.getDefaultProps&&(e.getDefaultProps.isReactClassApproved={}),e.prototype.getInitialState&&(e.prototype.getInitialState.isReactClassApproved={}),u(e.prototype.render,"createClass(...): Class specification must implement a `render` method."),l(!e.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",t.displayName||"A component"),l(!e.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",t.displayName||"A component"),l(!e.prototype.UNSAFE_componentWillRecieveProps,"%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",t.displayName||"A component");
// Reduce time spent doing lookups by setting these on the prototype.
for(var i in b)e.prototype[i]||(e.prototype[i]=null);return e}/**
   * Policies that describe methods in `ReactClassInterface`.
   */
var M=[],b={/**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
mixins:"DEFINE_MANY",/**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
statics:"DEFINE_MANY",/**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
propTypes:"DEFINE_MANY",/**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
contextTypes:"DEFINE_MANY",/**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
childContextTypes:"DEFINE_MANY",
// ==== Definition methods ====
/**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
getDefaultProps:"DEFINE_MANY_MERGED",/**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
getInitialState:"DEFINE_MANY_MERGED",/**
     * @return {object}
     * @optional
     */
getChildContext:"DEFINE_MANY_MERGED",/**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
render:"DEFINE_ONCE",
// ==== Delegate methods ====
/**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
componentWillMount:"DEFINE_MANY",/**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
componentDidMount:"DEFINE_MANY",/**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
componentWillReceiveProps:"DEFINE_MANY",/**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
shouldComponentUpdate:"DEFINE_ONCE",/**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
componentWillUpdate:"DEFINE_MANY",/**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
componentDidUpdate:"DEFINE_MANY",/**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
componentWillUnmount:"DEFINE_MANY",/**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
UNSAFE_componentWillMount:"DEFINE_MANY",/**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
UNSAFE_componentWillReceiveProps:"DEFINE_MANY",/**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
UNSAFE_componentWillUpdate:"DEFINE_MANY",
// ==== Advanced methods ====
/**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
updateComponent:"OVERRIDE_BASE"},L={/**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
getDerivedStateFromProps:"DEFINE_MANY_MERGED"},k={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)f(t,e[n])},childContextTypes:function(t,e){i(t,e,"childContext"),t.childContextTypes=o({},t.childContextTypes,e)},contextTypes:function(t,e){i(t,e,"context"),t.contextTypes=o({},t.contextTypes,e)},/**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=_(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){i(t,e,"prop"),t.propTypes=o({},t.propTypes,e)},statics:function(t,e){h(t,e)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},Y={componentWillUnmount:function(){this.__isMounted=!1}},x={/**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},/**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
isMounted:function(){return l(this.__didWarnIsMounted,"%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",this.constructor&&this.constructor.displayName||this.name||"Component"),this.__didWarnIsMounted=!0,!!this.__isMounted}},D=function(){};return o(D.prototype,t.prototype,x),v}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var a,o=n(69),s=n(570),u=n(571),l=n(572),d="mixins";a={prop:"prop",context:"context",childContext:"child context"},t.exports=i},/* 570 */
/***/
function(t,e,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r={};Object.freeze(r),t.exports=r},/* 571 */
/***/
function(t,e,n){"use strict";function r(t,e,n,r,a,o,s,u){if(i(e),!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,a,o,s,u],c=0;l=new Error(e.replace(/%s/g,function(){return d[c++]})),l.name="Invariant Violation"}// we don't care about invariant's own frame
throw l.framesToPop=1,l}}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var i=function(t){};i=function(t){if(void 0===t)throw new Error("invariant requires an error message argument")},t.exports=r},/* 572 */
/***/
function(t,e,n){"use strict";/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r=n(573),i=r,a=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=0,a="Warning: "+t.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(a);try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(a)}catch(t){}};i=function(t,e){if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==e.indexOf("Failed Composite propType: ")&&!t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];a.apply(void 0,[e].concat(r))}},t.exports=i},/* 573 */
/***/
function(t,e,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function r(t){return function(){return t}}/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t},t.exports=i},/* 574 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f);n(223);var m=n(97),_=r(m),p=n(138),g=r(p),y=n(575),v=r(y),M=function(t){function e(t){return(0,a.default)(this,e),(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return(0,c.default)(e,t),(0,s.default)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"application landing"},h.default.createElement(_.default,null),h.default.createElement(v.default,null),h.default.createElement(g.default,null))}}]),e}(f.Component);e.default=M},/* 575 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(83),a=r(i),o=n(17),s=r(o),u=n(18),l=r(u),d=n(19),c=r(d),f=n(20),h=r(f),m=n(4),_=r(m),p=n(29),g=n(576),y=r(g),v=n(193),M=function(t){function e(t){(0,s.default)(this,e);var n=(0,c.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),r="";return console.log(">>>>>",n.props),n.props.match.hasOwnProperty("params")&&n.props.match.params.id&&(r=n.props.match.params.id),n.state={projectname:"",showform:"db",navigation:"dn",showgrid:"dn",floorno:10,name:"",selectedBlock:"",lid:"",deviceid:window.localStorage.getItem("deviceToken"),matrix:[],referralcode:"",referredby:r},n}return(0,h.default)(e,t),(0,l.default)(e,[{key:"generateSquareMatrix",value:function(t,e,n,r,i){var a,o,s=[],u=e,l=u+r;for(a=0;a<t;a++)for(s[a]=[],o=0;o<t;o++)s[a][o]=i+"F-"+u+" to "+i+"F-"+l,u=l+1,l=u+r;return s}},{key:"componentWillMount",value:function(){var t=window.localStorage.getItem("deviceToken");null!==window.localStorage.getItem("subscriber")&&null!==t&&this.props.history.push("/mainpage")}},{key:"componentDidMount",value:function(){this.refs.referredby.value=this.state.referredby}},{key:"gridClickHandler",value:function(t){this.setState((0,a.default)({},this.state,{selectedBlock:t.currentTarget.getAttribute("blockid"),projectname:t.currentTarget.getAttribute("blockid"),lid:t.currentTarget.id}))}},{key:"registerUser",value:function(){var t=this;if(""!==this.refs.mobileno.value&&""!==this.refs.name.value&&""!==this.state.lid&&""!==this.state.projectname){var e=new y.default(this.refs.name.value),n=e.encode(1,2,3),r={lid:this.state.lid,projectname:this.state.projectname,deviceid:window.localStorage.getItem("deviceToken"),floorno:this.state.floorno,mobileno:this.refs.mobileno.value,name:this.refs.name.value,referralcode:n,referredby:this.refs.referredby.value};fetch("/api/userregistration",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then(function(t){return t.json()}).then(function(e){e.data.length>0?(window.localStorage.setItem("subscriber",e.data[0].id),window.localStorage.setItem("mno",t.refs.mobileno.value),window.localStorage.setItem("referralcode",n),t.setState((0,a.default)({},t.state,{navigation:"db",showform:"dn",name:t.refs.name.value}))):alert("Please use Valid Referral code!!")})}else alert("Please fill all mandatory Fields !!!")}},{key:"checkstatus",value:function(t){return"Block-"+t===this.state.selectedBlock?"recall-grid-tile is-selected":"recall-grid-tile"}},{key:"drawgrid",value:function(){var t=this,e=0;return this.state.matrix.map(function(n,r){return _.default.createElement("div",{key:r,className:"recall-grid-row"},n.map(function(n,i){return e++,_.default.createElement("div",{key:i,id:t.state.floorno+"F-"+(r+1)+"B-"+(i+1)+"R",blockid:"Block-"+e,className:t.checkstatus(e),onClick:function(e){t.gridClickHandler(e,i)}},_.default.createElement("div",null," Seat No",_.default.createElement("br",null),n))}))})}},{key:"render",value:function(){var t=this;return _.default.createElement("div",null,_.default.createElement("div",{className:"section section-breadcrumbs"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-md-12"},_.default.createElement("h1",null,"Register for Inter-Galactic VISA"))))),_.default.createElement("div",{className:"section galaxy-container"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-sm-7"},_.default.createElement("div",{className:"basic-login "+this.state.showform},_.default.createElement("form",{role:"form"},_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-user"})," ",_.default.createElement("b",null,"Nick Name",_.default.createElement("sup",null,"*"))),_.default.createElement("input",{minLength:"3",maxLength:"20",type:"text",name:"first_name",id:"first_name",className:"form-control input-sm",placeholder:"Nick Name",required:"required",ref:"name"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-phone"})," ",_.default.createElement("b",null,"Mobile Number",_.default.createElement("sup",null,"*"))),_.default.createElement("input",{id:"mobileno",name:"Mobile No.",ref:"mobileno",placeholder:"10 Digit Mobile No.",className:"form-control input-sm",required:"required",type:"text",size:"20",minLength:"9",maxLength:"10"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"glyphicon glyphicon-gift"})," ",_.default.createElement("b",null,"Refferal Code")),_.default.createElement("input",{name:"referredby",ref:"referredby",autoComplete:"",size:"20",minLength:"0",maxLength:"6",placeholder:"Use refferal Code if any !!",className:"form-control input-sm",onChange:function(e){t.setState((0,a.default)({},t.state,{referredby:e.target.value}))},type:"text"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-building"})," ",_.default.createElement("b",null,"Select Floor ",_.default.createElement("sup",null,"*"))),_.default.createElement("select",{onChange:function(e){""!==e.target.value?t.setState((0,a.default)({},t.state,{floorno:e.target.value,showgrid:"db",matrix:t.generateSquareMatrix(4,1,600,39,e.target.value)})):t.setState((0,a.default)({},t.state,{showgrid:"dn"}))},id:"inputState",className:"form-control input-sm"},_.default.createElement("option",{value:""},"Floor No ..."),_.default.createElement("option",{value:"4"},"Floor-4"),_.default.createElement("option",{value:"5"},"Floor-5"),_.default.createElement("option",{value:"6"},"Floor-6"),_.default.createElement("option",{value:"7"},"Floor-7"),_.default.createElement("option",{value:"8"},"Floor-8"),_.default.createElement("option",{value:"9"},"Floor-9"),_.default.createElement("option",{value:"10"},"Floor-10"))),_.default.createElement("div",{className:"form-group "+this.state.showgrid},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-building"})," ",_.default.createElement("b",null,"Select Your Area ",_.default.createElement("sup",null,"*")," ")),_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"form-group canvas-container col-md-12"},_.default.createElement("div",{className:"recall-grid"},this.drawgrid())))),_.default.createElement("div",{className:"form-group"},_.default.createElement("p",{style:{fontSize:"10px"}},_.default.createElement("i",null,"By registering, you are providing consent for sending Quiz/prize notifications to your mobile. ")),_.default.createElement("button",{type:"button",onClick:function(){t.registerUser()},className:"btn pull-right"},"Register"),_.default.createElement("div",{className:"clearfix"})))),_.default.createElement("div",{className:"row "+this.state.navigation},_.default.createElement("div",{className:"col-md-6 col-sm-6"},_.default.createElement("div",{className:"service-wrapper",style:{padding:"0 18px 20px 18px"}},_.default.createElement("img",{src:"/img/tick1.png",style:{height:"93px"},alt:"Service 1"}),_.default.createElement("h3",null," Thank you for registration"),_.default.createElement("div",{className:"progress xs green",style:{height:"5px",backgroundColor:"rgb(0, 150, 136)"}}),_.default.createElement("h3",null,"  Hi ",this.state.name,"!"),_.default.createElement("p",null,"Congratulations!! Your Inter-Galactic VISA has been approved and we are waiting to host you on Agartha. "),_.default.createElement(p.Link,{className:"btn",to:"/mainpage"},"   Go to Dashboard "))),_.default.createElement("div",{className:"col-md-6 col-sm-6"},_.default.createElement("div",{className:"service-wrapper",style:{padding:"20px 18px 24px"}},_.default.createElement("img",{src:"/img/share.png",style:{height:"70px"},alt:"Service 1"}),_.default.createElement("h3",null,"Share your Refferal Code"),_.default.createElement("div",{className:"progress xs green",style:{height:"5px",backgroundColor:"rgb(0, 150, 136)"}}),_.default.createElement("p",null," Forward or share your refferal code with your friends to get chance to win Prize."),_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-md-6 col-sm-6"},_.default.createElement("div",{className:"alert code "}," ",window.localStorage.getItem("referralcode")," ")),_.default.createElement("div",{className:"col-md-6 col-sm-6"},_.default.createElement(v.WhatsappShareButton,{url:"Referral Code: "+window.localStorage.getItem("referralcode")+"  url: "+location.origin+"/home/"+window.localStorage.getItem("referralcode")}," ",_.default.createElement(v.WhatsappIcon,{size:32,round:!0})),_.default.createElement("a",{href:"mailto:?subject=Referral Code "+window.localStorage.getItem("referralcode")+"&body= url :"+location.origin+"/home/"+window.localStorage.getItem("referralcode")}," ",_.default.createElement("span",{style:{fontSize:"20px",color:"green",top:"4px"},className:"glyphicon glyphicon-envelope"})),"  ",_.default.createElement("a",{className:"hidden-md",style:{fontSize:"20px",color:"green",top:"9px"},href:"sms://?&body="+window.localStorage.getItem("referralcode")},"SMS"))))))),_.default.createElement("div",{className:"col-sm-4 col-sm-offset-1 social-login"},_.default.createElement("div",{className:"basic-login"},_.default.createElement("div",{className:"text-center"},_.default.createElement("img",{src:"/img/Icon-100.png",alt:"AGARTHA"})),_.default.createElement("div",{className:"in-press press-wired text-center"},_.default.createElement("h4",null," THE FUTURE IS HISTORY")),_.default.createElement("div",{className:"panel-group"},_.default.createElement("div",{className:"panel panel-default"}),_.default.createElement("div",{className:"panel panel-default"},_.default.createElement("div",{className:"panel-heading"},_.default.createElement("p",null,'"Space-ship" bound to Agartha will be taking off on  ',_.default.createElement("b",null,"4-Oct-2018. "),"Make the most of this once in a lifetime opportunity to travel the cosmos."),"  ")))))))))}}]),e}(m.Component);e.default=(0,p.withRouter)(M)},/* 576 */
/***/
function(t,e,n){var r,i,a;!function(n,o){i=[e],r=o,void 0!==(a="function"==typeof r?r.apply(e,i):r)&&(t.exports=a)}(0,function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i,a,o="";this.escapeRegExp=function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},this.parseInt=function(t,e){return/^(-|\+)?([0-9]+|Infinity)$/.test(t)?parseInt(t,e):NaN},this.seps="cfhistuCFHISTU",this.minLength=0<parseInt(n,10)?n:0,this.salt="string"==typeof e?e:"","string"==typeof r&&(this.alphabet=r);for(var s=0;s!==this.alphabet.length;s++)-1===o.indexOf(this.alphabet.charAt(s))&&(o+=this.alphabet.charAt(s));if(this.alphabet=o,this.alphabet.length<16)throw"error: alphabet must contain at least X unique characters".replace("X",16);if(-1!==this.alphabet.search(" "))throw"error: alphabet cannot contain spaces";for(var u=0;u!==this.seps.length;u++){var l=this.alphabet.indexOf(this.seps.charAt(u));-1===l?this.seps=this.seps.substr(0,u)+" "+this.seps.substr(u+1):this.alphabet=this.alphabet.substr(0,l)+" "+this.alphabet.substr(l+1)}this.alphabet=this.alphabet.replace(/ /g,""),this.seps=this.seps.replace(/ /g,""),this.seps=this._shuffle(this.seps,this.salt),(!this.seps.length||3.5<this.alphabet.length/this.seps.length)&&(i=Math.ceil(this.alphabet.length/3.5))>this.seps.length&&(a=i-this.seps.length,this.seps+=this.alphabet.substr(0,a),this.alphabet=this.alphabet.substr(a)),this.alphabet=this._shuffle(this.alphabet,this.salt);var d=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.substr(0,d),this.seps=this.seps.substr(d)):(this.guards=this.alphabet.substr(0,d),this.alphabet=this.alphabet.substr(d))}var n,r;return n=t,(r=[{key:"encode",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!e.length)return"";if(e[0]&&e[0].constructor===Array&&!(e=e[0]).length)return"";for(var r=0;r!==e.length;r++)if(e[r]=this.parseInt(e[r],10),!(0<=e[r]))return"";return this._encode(e)}},{key:"decode",value:function(t){return t&&t.length&&"string"==typeof t?this._decode(t,this.alphabet):[]}},{key:"encodeHex",value:function(t){if(t=t.toString(),!/^[0-9a-fA-F]+$/.test(t))return"";for(var e=t.match(/[\w\W]{1,12}/g),n=0;n!==e.length;n++)e[n]=parseInt("1"+e[n],16);return this.encode.apply(this,e)}},{key:"decodeHex",value:function(t){for(var e=[],n=this.decode(t),r=0;r!==n.length;r++)e+=n[r].toString(16).substr(1);return e}},{key:"_encode",value:function(t){for(var e,n=this.alphabet,r=0,i=0;i!==t.length;i++)r+=t[i]%(i+100);for(var a=e=n.charAt(r%n.length),o=0;o!==t.length;o++){var s=t[o],u=a+this.salt+n;n=this._shuffle(n,u.substr(0,n.length));var l=this._toAlphabet(s,n);if(e+=l,o+1<t.length){var d=(s%=l.charCodeAt(0)+o)%this.seps.length;e+=this.seps.charAt(d)}}if(e.length<this.minLength){var c=(r+e[0].charCodeAt(0))%this.guards.length,f=this.guards[c];(e=f+e).length<this.minLength&&(c=(r+e[2].charCodeAt(0))%this.guards.length,e+=f=this.guards[c])}for(var h=parseInt(n.length/2,10);e.length<this.minLength;){var m=(e=(n=this._shuffle(n,n)).substr(h)+e+n.substr(0,h)).length-this.minLength;0<m&&(e=e.substr(m/2,this.minLength))}return e}},{key:"_decode",value:function(t,e){var n=[],r=0,i=new RegExp("[".concat(this.escapeRegExp(this.guards),"]"),"g"),a=t.replace(i," "),o=a.split(" ");if(3!==o.length&&2!==o.length||(r=1),void 0!==(a=o[r])[0]){var s=a[0];a=a.substr(1),i=new RegExp("[".concat(this.escapeRegExp(this.seps),"]"),"g"),o=(a=a.replace(i," ")).split(" ");for(var u=0;u!==o.length;u++){var l=o[u],d=s+this.salt+e;e=this._shuffle(e,d.substr(0,e.length)),n.push(this._fromAlphabet(l,e))}this.encode(n)!==t&&(n=[])}return n}},{key:"_shuffle",value:function(t,e){var n;if(!e.length)return t;for(var r=(t=t.split("")).length-1,i=0,a=0,o=0;0<r;r--,i++){i%=e.length,a+=n=e.charCodeAt(i);var s=t[o=(n+i+a)%r];t[o]=t[r],t[r]=s}return t=t.join("")}},{key:"_toAlphabet",value:function(t,e){for(var n="";n=e.charAt(t%e.length)+n,t=parseInt(t/e.length,10););return n}},{key:"_fromAlphabet",value:function(t,e){return t.split("").map(function(t){return e.indexOf(t)}).reduce(function(t,n){return t*e.length+n},0)}}])&&e(n.prototype,r),t}();t.default=n})},/* 577 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f);n(223);var m=n(97),_=r(m),p=n(578),g=r(p),y=function(t){function e(t){return(0,a.default)(this,e),(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return(0,c.default)(e,t),(0,s.default)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return h.default.createElement("div",{className:"application landing"},h.default.createElement(_.default,null),h.default.createElement(g.default,null))}}]),e}(f.Component);e.default=y},/* 578 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(83),a=r(i),o=n(17),s=r(o),u=n(18),l=r(u),d=n(19),c=r(d),f=n(20),h=r(f),m=n(4),_=r(m),p=n(29),g=function(t){function e(t){(0,s.default)(this,e);var n=(0,c.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={projectname:"",showform:"db",navigation:"dn",showgrid:"dn",floorno:10,name:"",selectedBlock:"",lid:"",deviceid:"",matrix:[]},n}return(0,h.default)(e,t),(0,l.default)(e,[{key:"generateSquareMatrix",value:function(t,e,n,r,i){var a,o,s=[],u=e,l=u+r;for(a=0;a<t;a++)for(s[a]=[],o=0;o<t;o++)s[a][o]=i+"F-"+u+" to "+i+"F-"+l,u=l+1,l=u+r;return s}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"gridClickHandler",value:function(t){this.setState((0,a.default)({},this.state,{selectedBlock:t.currentTarget.getAttribute("blockid"),projectname:t.currentTarget.getAttribute("blockid"),lid:t.currentTarget.id}))}},{key:"registerUser",value:function(){var t=this;if(""!==this.refs.mobileno.value&&""!==this.refs.name.value&&""!==this.state.lid&&""!==this.state.projectname){var e={lid:this.state.lid,projectname:this.state.projectname,deviceid:"-",floorno:this.state.floorno,mobileno:this.refs.mobileno.value,name:this.refs.name.value};fetch("/api/spotreg",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(e){t.setState((0,a.default)({},t.state,{navigation:"db",showform:"dn",name:t.refs.name.value}))})}else alert("Fill all the form !!!")}},{key:"checkstatus",value:function(t){return"Block-"+t===this.state.selectedBlock?"recall-grid-tile is-selected":"recall-grid-tile"}},{key:"drawgrid",value:function(){var t=this,e=0;return this.state.matrix.map(function(n,r){return _.default.createElement("div",{key:r,className:"recall-grid-row"},n.map(function(n,i){return e++,_.default.createElement("div",{key:i,id:t.state.floorno+"F-"+(r+1)+"B-"+(i+1)+"R",blockid:"Block-"+e,className:t.checkstatus(e),onClick:function(e){t.gridClickHandler(e,i)}},_.default.createElement("div",null," Seat No",_.default.createElement("br",null),n))}))})}},{key:"render",value:function(){var t=this;return _.default.createElement("div",null,_.default.createElement("div",{className:"section section-breadcrumbs"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-md-12"},_.default.createElement("h1",null,"Footfall Registration"))))),_.default.createElement("div",{className:"section"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-sm-7"},_.default.createElement("div",{className:"basic-login "+this.state.showform},_.default.createElement("form",{role:"form"},_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-user"})," ",_.default.createElement("b",null,"Nick Name")),_.default.createElement("input",{type:"text",name:"first_name",id:"first_name",className:"form-control input-sm",placeholder:"Nick Name",required:"required",ref:"name"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-phone"})," ",_.default.createElement("b",null,"Mobile Number")),_.default.createElement("input",{id:"mobileno",name:"Mobile No.",ref:"mobileno",placeholder:"Mobile No.",className:"form-control input-sm",required:"required",type:"number"})),_.default.createElement("div",{className:"form-group"},_.default.createElement("label",null,_.default.createElement("i",{className:"icon-building"})," ",_.default.createElement("b",null,"Select Floor")),_.default.createElement("select",{onChange:function(e){""!==e.target.value?t.setState((0,a.default)({},t.state,{floorno:e.target.value,showgrid:"db",matrix:t.generateSquareMatrix(4,1,600,39,e.target.value)})):t.setState((0,a.default)({},t.state,{showgrid:"dn"}))},id:"inputState",className:"form-control input-sm"},_.default.createElement("option",{value:""},"Floor No ..."),_.default.createElement("option",{value:"4"},"Floor-4"),_.default.createElement("option",{value:"5"},"Floor-5"),_.default.createElement("option",{value:"6"},"Floor-6"),_.default.createElement("option",{value:"7"},"Floor-7"),_.default.createElement("option",{value:"8"},"Floor-8"),_.default.createElement("option",{value:"9"},"Floor-9"),_.default.createElement("option",{value:"10"},"Floor-10"))),_.default.createElement("div",{className:"form-group"},_.default.createElement("div",{className:"row "+this.state.showgrid},_.default.createElement("p",null," ",this.state.projectname," "),_.default.createElement("div",{className:"form-group canvas-container col-md-12"},_.default.createElement("div",{className:"recall-grid"},this.drawgrid())))),_.default.createElement("div",{className:"form-group"},_.default.createElement("button",{type:"button",onClick:function(){t.registerUser()},className:"btn pull-right"},"Register"),_.default.createElement("div",{className:"clearfix"})))),_.default.createElement("div",{className:"row "+this.state.navigation},_.default.createElement("div",{className:"col-sm-12 col-md-12"},_.default.createElement("div",{className:"well panel-heading service-wrapper alignheading"},_.default.createElement("div",{className:"widget-tile"},_.default.createElement("section",null,_.default.createElement("h3",null," Thank you for registration"),_.default.createElement("div",{className:"progress xs green"}),_.default.createElement("div",{className:"thanku-template"},_.default.createElement("h3",null," Thanks for registration")))))))),_.default.createElement("div",{className:"col-sm-4 col-sm-offset-1 social-login"},_.default.createElement("p",null,"dummy text"),_.default.createElement("div",{className:"social-login-buttons"}))))))}}]),e}(m.Component);e.default=(0,p.withRouter)(g)},/* 579 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=r(i),o=n(18),s=r(o),u=n(19),l=r(u),d=n(20),c=r(d),f=n(4),h=r(f),m=n(580),_=r(m),p=n(138),g=r(p);n(628);var y=n(97),v=r(y),M=n(29),b=function(t){function e(t){(0,a.default)(this,e);var n=(0,l.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={question:[],already:!1},n}return(0,c.default)(e,t),(0,s.default)(e,[{key:"componentWillMount",value:function(){var t=this;if("poll"===this.props.match.params.type||"quiz"===this.props.match.params.type){var e=this.props.match.params.type,n=this.props.match.params.id,r=window.localStorage.getItem("subscriber");fetch("/api/getque/"+n+"/"+e+"/"+r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.setState({question:e.que,already:e.already})})}}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return h.default.createElement("div",{className:"application landing"},h.default.createElement(v.default,null),function(){return t.state.already?h.default.createElement("div",null,h.default.createElement("div",{className:"section section-breadcrumbs"},h.default.createElement("div",{className:"container"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-6"},h.default.createElement("h1",null," You have already Applied for this Question Earlier  !!",h.default.createElement("br",null)," ",h.default.createElement("br",null),h.default.createElement(M.Link,{className:"btn ",to:"/"},"  Back To Dashboard  "))))))):t.state.question.length>0?h.default.createElement(_.default,{id:t.props.match.params.id,quedata:t.state.question}):void 0}(),h.default.createElement(g.default,null))}}]),e}(f.Component);e.default=b},/* 580 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(83),a=r(i),o=n(17),s=r(o),u=n(18),l=r(u),d=n(19),c=r(d),f=n(20),h=r(f),m=n(4),_=r(m),p=n(29),g=n(581),y=r(g),v=function(t){function e(t){(0,s.default)(this,e);var n=(0,c.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={detail:t.quedata,submitPoll:!1,id:t.id,questionshow:"db",slectedOption:"",disabled:!1,ca:"",attempt:"",isCorrect:""},n}return(0,h.default)(e,t),(0,l.default)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"showGraph",value:function(t,e){var n=document.getElementById("chart"),r=n.getContext("2d");new y.default(r,{type:"pie",data:{datasets:[{data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}],labels:e},options:{legend:{position:"bottom",display:!0,responsive:!1,maintainAspectRatio:!0,labels:{fontFamily:"Helvetica",fontSize:12}}}})}},{key:"selectedOptionHandler",value:function(t){this.setState((0,a.default)({},this.state,{slectedOption:t.target.value}))}},{key:"submitHandler",value:function(t){var e=this,n=this.state.id,r=this.state.slectedOption,i=window.localStorage.getItem("subscriber");""!==this.state.slectedOption&&fetch("/api/submitquestion",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({type:t,id:n,selected:r,userid:i})}).then(function(t){return t.json()}).then(function(t){if("poll"===t.type){var n=[],r=[];t.result.map(function(t){r.push(t[t.rans]),n.push(t.ansCount)}),e.showGraph(n,r),e.setState((0,a.default)({},e.state,{disabled:!0}))}else e.setState((0,a.default)({},e.state,{isCorrect:t.result[0].iscorrect,ca:t.result[0].ca[0],attempt:t.result[0].attempt[0],disabled:!0,questionshow:"dn"}))})}},{key:"render",value:function(){var t=this;if(this.state.detail.length>0){var e=0,n=this.state.detail[0].options.map(function(n,r){if(""!==n)return e++,_.default.createElement("div",{className:"funkyradio",key:r},_.default.createElement("div",{className:"funkyradio-success"},_.default.createElement("input",{type:"radio",disabled:t.state.disabled,name:"radio",onClick:function(e){t.selectedOptionHandler(e)},id:"radio"+r,value:"op"+e}),_.default.createElement("label",{htmlFor:"radio"+r},_.default.createElement("strong",null,n))))});return _.default.createElement("div",null,_.default.createElement("div",{className:"section section-breadcrumbs"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"col-md-6"},_.default.createElement("h1",null,"  ",_.default.createElement("span",{className:"text-uppercase"},this.state.detail[0].type)," : ",this.state.detail[0].que))))),_.default.createElement("div",{className:"detailPage"},_.default.createElement("div",{className:"section"},_.default.createElement("div",{className:"container"},_.default.createElement("div",{className:"row",style:{borderRadius:"6px",paddingTop:"17px",backgroundImage:"url(/img/bg-dash.png)"}},_.default.createElement("div",{className:"col-sm-6 col-xs-12 "+this.state.questionshow},_.default.createElement("div",{className:"form-group"},n,_.default.createElement("br",null),function(){if(!t.state.disabled)return _.default.createElement("div",null,_.default.createElement(p.Link,{style:{width:"123px"},className:"btn  btn-primary pull-right",to:"/mainpage"},"  Back "),_.default.createElement("button",{type:"button",style:{width:"123px"},onClick:function(){t.submitHandler(t.state.detail[0].type)},className:"btn"}," Submit"))}())),function(){if("dn"===t.state.questionshow)return t.state.isCorrect?_.default.createElement("div",{className:"col-sm-6 col-xs-12 "},_.default.createElement("div",{className:"alert alert-success",role:"alert"},_.default.createElement("strong",null," Congratulations!!!")," You made it .")):_.default.createElement("div",{className:"col-sm-6 col-xs-12 "},_.default.createElement("div",{className:"alert alert-danger",role:"alert"},_.default.createElement("strong",null," Sorry !!!  "),"  Better Luck next time."))}(),_.default.createElement("div",{className:"col-sm-6 col-xs-12"},_.default.createElement("div",{className:"chart-container"},_.default.createElement("canvas",{id:"chart"}))))))))}}}]),e}(m.Component);e.default=v},/* 581 */
/***/
function(t,e,n){/**
 * @namespace Chart
 */
var r=n(582)();r.helpers=n(5),
// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
n(586)(r),r.defaults=n(9),r.Element=n(35),r.elements=n(47),r.Interaction=n(225),r.layouts=n(86),r.platform=n(226),r.plugins=n(227),r.Ticks=n(87),n(597)(r),n(598)(r),n(599)(r),n(600)(r),n(601)(r),n(602)(r),n(603)(r),n(604)(r),n(605)(r),n(606)(r),n(607)(r),n(608)(r),
// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
n(610)(r),n(611)(r),n(612)(r),n(613)(r),n(614)(r),n(615)(r),n(616)(r),n(617)(r),n(618)(r),n(619)(r),n(620)(r),n(621)(r),n(622)(r),n(623)(r);
// Loading built-it plugins
var i=n(624);for(var a in i)i.hasOwnProperty(a)&&r.plugins.register(i[a]);r.platform.initialize(),t.exports=r,"undefined"!=typeof window&&(window.Chart=r),
// DEPRECATIONS
/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
r.Legend=i.legend._element,/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
r.Title=i.title._element,/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
r.pluginService=r.plugins,/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
r.PluginBase=r.Element.extend({}),/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
r.canvasHelpers=r.helpers.canvas,/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
r.layoutService=r.layouts},/* 582 */
/***/
function(t,e,n){"use strict";n(9)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,
// Element defaults defined in element extensions
elements:{},
// Layout options such as padding
layout:{padding:{top:0,right:0,bottom:0,left:0}}}),t.exports=function(){
// Occupy the global variable of Chart, and create a simple base class
var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},/* 583 */
/***/
function(t,e,n){"use strict";var r=n(107),i={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-i.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*i.easeInBounce(2*t):.5*i.easeOutBounce(2*t-1)+.5}};t.exports={effects:i},
// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.easingEffects=i},/* 584 */
/***/
function(t,e,n){"use strict";var r=n(107),e=t.exports={/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {Number} width - The rectangle's width.
	 * @param {Number} height - The rectangle's height.
	 * @param {Number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
roundedRect:function(t,e,n,r,i,a){if(a){var o=Math.min(a,r/2),s=Math.min(a,i/2);t.moveTo(e+o,n),t.lineTo(e+r-o,n),t.quadraticCurveTo(e+r,n,e+r,n+s),t.lineTo(e+r,n+i-s),t.quadraticCurveTo(e+r,n+i,e+r-o,n+i),t.lineTo(e+o,n+i),t.quadraticCurveTo(e,n+i,e,n+i-s),t.lineTo(e,n+s),t.quadraticCurveTo(e,n,e+o,n)}else t.rect(e,n,r,i)},drawPoint:function(t,e,n,r,i){var a,o,s,u,l,d;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(a=e.toString())||"[object HTMLCanvasElement]"===a))return void t.drawImage(e,r-e.width/2,i-e.height/2,e.width,e.height);if(!(isNaN(n)||n<=0)){switch(e){
// Default includes circle
default:t.beginPath(),t.arc(r,i,n,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),o=3*n/Math.sqrt(3),l=o*Math.sqrt(3)/2,t.moveTo(r-o/2,i+l/3),t.lineTo(r+o/2,i+l/3),t.lineTo(r,i-2*l/3),t.closePath(),t.fill();break;case"rect":d=1/Math.SQRT2*n,t.beginPath(),t.fillRect(r-d,i-d,2*d,2*d),t.strokeRect(r-d,i-d,2*d,2*d);break;case"rectRounded":var c=n/Math.SQRT2,f=r-c,h=i-c,m=Math.SQRT2*n;t.beginPath(),this.roundedRect(t,f,h,m,m,n/2),t.closePath(),t.fill();break;case"rectRot":d=1/Math.SQRT2*n,t.beginPath(),t.moveTo(r-d,i),t.lineTo(r,i+d),t.lineTo(r+d,i),t.lineTo(r,i-d),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(r,i+n),t.lineTo(r,i-n),t.moveTo(r-n,i),t.lineTo(r+n,i),t.closePath();break;case"crossRot":t.beginPath(),s=Math.cos(Math.PI/4)*n,u=Math.sin(Math.PI/4)*n,t.moveTo(r-s,i-u),t.lineTo(r+s,i+u),t.moveTo(r-s,i+u),t.lineTo(r+s,i-u),t.closePath();break;case"star":t.beginPath(),t.moveTo(r,i+n),t.lineTo(r,i-n),t.moveTo(r-n,i),t.lineTo(r+n,i),s=Math.cos(Math.PI/4)*n,u=Math.sin(Math.PI/4)*n,t.moveTo(r-s,i-u),t.lineTo(r+s,i+u),t.moveTo(r-s,i+u),t.lineTo(r+s,i-u),t.closePath();break;case"line":t.beginPath(),t.moveTo(r-n,i),t.lineTo(r+n,i),t.closePath();break;case"dash":t.beginPath(),t.moveTo(r,i),t.lineTo(r+n,i),t.closePath()}t.stroke()}},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,r){return n.steppedLine?("after"===n.steppedLine&&!r||"after"!==n.steppedLine&&r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y),void t.lineTo(n.x,n.y)):n.tension?void t.bezierCurveTo(r?e.controlPointPreviousX:e.controlPointNextX,r?e.controlPointPreviousY:e.controlPointNextY,r?n.controlPointNextX:n.controlPointPreviousX,r?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):void t.lineTo(n.x,n.y)}};
// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.clear=e.clear,/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
r.drawRoundedRectangle=function(t){t.beginPath(),e.roundedRect.apply(e,arguments),t.closePath()}},/* 585 */
/***/
function(t,e,n){"use strict";var r=n(107);/**
 * @alias Chart.helpers.options
 * @namespace
 */
t.exports={/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {Number|Object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {Object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
toPadding:function(t){var e,n,i,a;return r.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,a=+t.left||0):e=n=i=a=+t||0,{top:e,right:n,bottom:i,left:a,height:e+i,width:a+n}},/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array[]} inputs - An array of values, falling back to the last value.
	 * @param {Object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {Number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */
resolve:function(t,e,n){var i,a,o;for(i=0,a=t.length;i<a;++i)if(void 0!==(o=t[i])&&(void 0!==e&&"function"==typeof o&&(o=o(e)),void 0!==n&&r.isArray(o)&&(o=o[n]),void 0!==o))return o}}},/* 586 */
/***/
function(t,e,n){"use strict";/* global window: false */
/* global document: false */
var r=n(224),i=n(9),a=n(5);t.exports=function(t){
// Private helper function to convert max-width/max-height values that may be percentages into a number
function e(t,e,n){var r;
// percentage * size in dimension
return"string"==typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
function n(t){return void 0!==t&&null!==t&&"none"!==t}
// Private helper to get a constraint dimension
// @param domNode : the node to check the constraint on
// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
// @param percentageProperty : property of parent to use when calculating width as a percentage
// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
function o(t,r,i){var a=document.defaultView,o=t.parentNode,s=a.getComputedStyle(t)[r],u=a.getComputedStyle(o)[r],l=n(s),d=n(u),c=Number.POSITIVE_INFINITY;return l||d?Math.min(l?e(s,t,i):c,d?e(u,o,i):c):"none"}
// -- Basic js utility methods
a.configMerge=function(){return a.merge(a.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,n,r,i){var o=n[e]||{},s=r[e];"scales"===e?
// scale config merging is complex. Add our own function here for that
n[e]=a.scaleMerge(o,s):"scale"===e?
// used in polar area & radar charts since there is only one scale
n[e]=a.merge(o,[t.scaleService.getScaleDefaults(s.type),s]):a._merger(e,n,r,i)}})},a.scaleMerge=function(){return a.merge(a.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,n,r,i){if("xAxes"===e||"yAxes"===e){var o,s,u,l=r[e].length;for(n[e]||(n[e]=[]),o=0;o<l;++o)u=r[e][o],s=a.valueOrDefault(u.type,"xAxes"===e?"category":"linear"),o>=n[e].length&&n[e].push({}),!n[e][o].type||u.type&&u.type!==n[e][o].type?
// new/untyped scale or type changed: let's apply the new defaults
// then merge source scale to correctly overwrite the defaults.
a.merge(n[e][o],[t.scaleService.getScaleDefaults(s),u]):
// scales type are the same
a.merge(n[e][o],u)}else a._merger(e,n,r,i)}})},a.where=function(t,e){if(a.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return a.each(t,function(t){e(t)&&n.push(t)}),n},a.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var r=0,i=t.length;r<i;++r)if(e.call(n,t[r],r,t))return r;return-1},a.findNextWhere=function(t,e,n){
// Default to start of the array
a.isNullOrUndef(n)&&(n=-1);for(var r=n+1;r<t.length;r++){var i=t[r];if(e(i))return i}},a.findPreviousWhere=function(t,e,n){
// Default to end of the array
a.isNullOrUndef(n)&&(n=t.length);for(var r=n-1;r>=0;r--){var i=t[r];if(e(i))return i}},
// -- Math methods
a.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},a.almostEquals=function(t,e,n){return Math.abs(t-e)<n},a.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},a.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},a.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},a.sign=Math.sign?function(t){return Math.sign(t)}:function(t){// convert to a number
// convert to a number
return t=+t,0===t||isNaN(t)?t:t>0?1:-1},a.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e},a.toRadians=function(t){return t*(Math.PI/180)},a.toDegrees=function(t){return t*(180/Math.PI)},
// Gets the angle from vertical upright to the point about a centre.
a.getAngleFromPoint=function(t,e){var n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*Math.PI&&(a+=2*Math.PI),{angle:a,distance:i}},a.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},a.aliasPixel=function(t){return t%2==0?0:.5},a.splineCurve=function(t,e,n,r){
// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
var i=t.skip?e:t,a=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(a.x-i.x,2)+Math.pow(a.y-i.y,2)),u=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),l=s/(s+u),d=u/(s+u);
// If all points are the same, s01 & s02 will be inf
l=isNaN(l)?0:l,d=isNaN(d)?0:d;var c=r*l,f=r*d;return{previous:{x:a.x-c*(o.x-i.x),y:a.y-c*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}},a.EPSILON=Number.EPSILON||1e-14,a.splineCurveMonotone=function(t){
// This function calculates Bézier control points in a similar way than |splineCurve|,
// but preserves monotonicity of the provided data and ensures no local extremums are added
// between the dataset discrete points due to the interpolation.
// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
var e,n,r,i,o=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),s=o.length;for(e=0;e<s;++e)if(r=o[e],!r.model.skip){if(n=e>0?o[e-1]:null,(i=e<s-1?o[e+1]:null)&&!i.model.skip){var u=i.model.x-r.model.x;
// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
r.deltaK=0!==u?(i.model.y-r.model.y)/u:0}!n||n.model.skip?r.mK=r.deltaK:!i||i.model.skip?r.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(r.deltaK)?r.mK=0:r.mK=(n.deltaK+r.deltaK)/2}
// Adjust tangents to ensure monotonic properties
var l,d,c,f;for(e=0;e<s-1;++e)r=o[e],i=o[e+1],r.model.skip||i.model.skip||(a.almostEquals(r.deltaK,0,this.EPSILON)?r.mK=i.mK=0:(l=r.mK/r.deltaK,d=i.mK/r.deltaK,(f=Math.pow(l,2)+Math.pow(d,2))<=9||(c=3/Math.sqrt(f),r.mK=l*c*r.deltaK,i.mK=d*c*r.deltaK)));
// Compute control points
var h;for(e=0;e<s;++e)r=o[e],r.model.skip||(n=e>0?o[e-1]:null,i=e<s-1?o[e+1]:null,n&&!n.model.skip&&(h=(r.model.x-n.model.x)/3,r.model.controlPointPreviousX=r.model.x-h,r.model.controlPointPreviousY=r.model.y-h*r.mK),i&&!i.model.skip&&(h=(i.model.x-r.model.x)/3,r.model.controlPointNextX=r.model.x+h,r.model.controlPointNextY=r.model.y+h*r.mK))},a.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},a.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},
// Implementation of the nice number algorithm used in determining where axis labels will go
a.niceNum=function(t,e){var n=Math.floor(a.log10(t)),r=t/Math.pow(10,n);return(e?r<1.5?1:r<3?2:r<7?5:10:r<=1?1:r<=2?2:r<=5?5:10)*Math.pow(10,n)},
// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
a.requestAnimFrame=function(){return"undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),
// -- DOM methods
a.getRelativePosition=function(t,e){var n,r,i=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),u=i.touches;u&&u.length>0?(n=u[0].clientX,r=u[0].clientY):(n=i.clientX,r=i.clientY);
// Scale mouse coordinates into canvas coordinates
// by following the pattern laid out by 'jerryj' in the comments of
// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
var l=parseFloat(a.getStyle(o,"padding-left")),d=parseFloat(a.getStyle(o,"padding-top")),c=parseFloat(a.getStyle(o,"padding-right")),f=parseFloat(a.getStyle(o,"padding-bottom")),h=s.right-s.left-l-c,m=s.bottom-s.top-d-f;
// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
return n=Math.round((n-s.left-l)/h*o.width/e.currentDevicePixelRatio),r=Math.round((r-s.top-d)/m*o.height/e.currentDevicePixelRatio),{x:n,y:r}},
// returns Number or undefined if no constraint
a.getConstraintWidth=function(t){return o(t,"max-width","clientWidth")},
// returns Number or undefined if no constraint
a.getConstraintHeight=function(t){return o(t,"max-height","clientHeight")},a.getMaximumWidth=function(t){var e=t.parentNode;if(!e)return t.clientWidth;var n=parseInt(a.getStyle(e,"padding-left"),10),r=parseInt(a.getStyle(e,"padding-right"),10),i=e.clientWidth-n-r,o=a.getConstraintWidth(t);return isNaN(o)?i:Math.min(i,o)},a.getMaximumHeight=function(t){var e=t.parentNode;if(!e)return t.clientHeight;var n=parseInt(a.getStyle(e,"padding-top"),10),r=parseInt(a.getStyle(e,"padding-bottom"),10),i=e.clientHeight-n-r,o=a.getConstraintHeight(t);return isNaN(o)?i:Math.min(i,o)},a.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},a.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||window.devicePixelRatio||1;if(1!==n){var r=t.canvas,i=t.height,a=t.width;r.height=i*n,r.width=a*n,t.ctx.scale(n,n),
// If no style has been set on the canvas, the render size is used as display size,
// making the chart visually bigger, so let's enforce it to the "correct" values.
// See https://github.com/chartjs/Chart.js/issues/3575
r.style.height||r.style.width||(r.style.height=i+"px",r.style.width=a+"px")}},
// -- Canvas methods
a.fontString=function(t,e,n){return e+" "+t+"px "+n},a.longestText=function(t,e,n,r){r=r||{};var i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},o=r.garbageCollect=[],r.font=e),t.font=e;var s=0;a.each(n,function(e){
// Undefined strings and arrays should not be measured
void 0!==e&&null!==e&&!0!==a.isArray(e)?s=a.measureText(t,i,o,s,e):a.isArray(e)&&
// if it is an array lets measure each element
// to do maybe simplify this function a bit so we can do this more recursively?
a.each(e,function(e){
// Undefined strings and arrays should not be measured
void 0===e||null===e||a.isArray(e)||(s=a.measureText(t,i,o,s,e))})});var u=o.length/2;if(u>n.length){for(var l=0;l<u;l++)delete i[o[l]];o.splice(0,u)}return s},a.measureText=function(t,e,n,r,i){var a=e[i];return a||(a=e[i]=t.measureText(i).width,n.push(i)),a>r&&(r=a),r},a.numberOfLabelLines=function(t){var e=1;return a.each(t,function(t){a.isArray(t)&&t.length>e&&(e=t.length)}),e},a.color=r?function(t){/* global CanvasGradient */
return t instanceof CanvasGradient&&(t=i.global.defaultColor),r(t)}:function(t){return console.error("Color.js not found!"),t},a.getHoverColor=function(t){/* global CanvasPattern */
return t instanceof CanvasPattern?t:a.color(t).saturate(.5).darken(.1).rgbString()}}},/* 587 */
/***/
function(t,e,n){var r=n(588),i=function(){return new l};for(var a in r){
// export Raw versions
i[a+"Raw"]=function(t){
// accept array or plain args
return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),r[t](e)}}(a);var o=/(\w+)2(\w+)/.exec(a),s=o[1],u=o[2];
// export rgb2hsl and ["rgb"]["hsl"]
i[s]=i[s]||{},i[s][u]=i[a]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=r[t](e);if("string"==typeof n||void 0===n)return n;// keyword
for(var i=0;i<n.length;i++)n[i]=Math.round(n[i]);return n}}(a)}/* Converter does lazy conversion and caching */
var l=function(){this.convs={}};/* Either get the values for a space or
  set the values for a space, depending on args */
l.prototype.routeSpace=function(t,e){var n=e[0];
// color.rgb(10, 10, 10)
return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},/* Set the values for a space, invalidating cache */
l.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
l.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,r=this.convs[n];e=i[n][t](r),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){l.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),t.exports=i},/* 588 */
/***/
function(t,e){function n(t){var e,n,r,i=t[0]/255,a=t[1]/255,o=t[2]/255,s=Math.min(i,a,o),u=Math.max(i,a,o),l=u-s;return u==s?e=0:i==u?e=(a-o)/l:a==u?e=2+(o-i)/l:o==u&&(e=4+(i-a)/l),e=Math.min(60*e,360),e<0&&(e+=360),r=(s+u)/2,n=u==s?0:r<=.5?l/(u+s):l/(2-u-s),[e,100*n,100*r]}function i(t){var e,n,r,i=t[0],a=t[1],o=t[2],s=Math.min(i,a,o),u=Math.max(i,a,o),l=u-s;return n=0==u?0:l/u*1e3/10,u==s?e=0:i==u?e=(a-o)/l:a==u?e=2+(o-i)/l:o==u&&(e=4+(i-a)/l),e=Math.min(60*e,360),e<0&&(e+=360),r=u/255*1e3/10,[e,n,r]}function a(t){var e=t[0],r=t[1],i=t[2],a=n(t)[0],o=1/255*Math.min(e,Math.min(r,i)),i=1-1/255*Math.max(e,Math.max(r,i));return[a,100*o,100*i]}function o(t){var e,n,r,i,a=t[0]/255,o=t[1]/255,s=t[2]/255;return i=Math.min(1-a,1-o,1-s),e=(1-a-i)/(1-i)||0,n=(1-o-i)/(1-i)||0,r=(1-s-i)/(1-i)||0,[100*e,100*n,100*r,100*i]}function s(t){return $[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,r=t[2]/255;
// assume sRGB
return e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,[100*(.4124*e+.3576*n+.1805*r),100*(.2126*e+.7152*n+.0722*r),100*(.0193*e+.1192*n+.9505*r)]}function l(t){var e,n,r,i=u(t),a=i[0],o=i[1],s=i[2];return a/=95.047,o/=100,s/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*o-16,n=500*(a-o),r=200*(o-s),[e,n,r]}function d(t){return F(l(t))}function c(t){var e,n,r,i,a,o=t[0]/360,s=t[1]/100,u=t[2]/100;if(0==s)return a=255*u,[a,a,a];n=u<.5?u*(1+s):u+s-u*s,e=2*u-n,i=[0,0,0];for(var l=0;l<3;l++)r=o+1/3*-(l-1),r<0&&r++,r>1&&r--,a=6*r<1?e+6*(n-e)*r:2*r<1?n:3*r<2?e+(n-e)*(2/3-r)*6:e,i[l]=255*a;return i}function f(t){var e,n,r=t[0],i=t[1]/100,a=t[2]/100;return 0===a?[0,0,0]:(a*=2,i*=a<=1?a:2-a,n=(a+i)/2,e=2*i/(a+i),[r,100*e,100*n])}function h(t){return a(c(t))}function m(t){return o(c(t))}function _(t){return s(c(t))}function p(t){var e=t[0]/60,n=t[1]/100,r=t[2]/100,i=Math.floor(e)%6,a=e-Math.floor(e),o=255*r*(1-n),s=255*r*(1-n*a),u=255*r*(1-n*(1-a)),r=255*r;switch(i){case 0:return[r,u,o];case 1:return[s,r,o];case 2:return[o,r,u];case 3:return[o,s,r];case 4:return[u,o,r];case 5:return[r,o,s]}}function y(t){var e,n,r=t[0],i=t[1]/100,a=t[2]/100;return n=(2-i)*a,e=i*a,e/=n<=1?n:2-n,e=e||0,n/=2,[r,100*e,100*n]}function v(t){return a(p(t))}function M(t){return o(p(t))}function L(t){return s(p(t))}
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function k(t){var e,n,i,a,o=t[0]/360,s=t[1]/100,u=t[2]/100,l=s+u;// linear interpolation
switch(
// wh + bl cant be > 1
l>1&&(s/=l,u/=l),e=Math.floor(6*o),n=1-u,i=6*o-e,0!=(1&e)&&(i=1-i),a=s+i*(n-s),e){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function w(t){return n(k(t))}function Y(t){return i(k(t))}function x(t){return o(k(t))}function D(t){return s(k(t))}function S(t){var e,n,r,i=t[0]/100,a=t[1]/100,o=t[2]/100,s=t[3]/100;return e=1-Math.min(1,i*(1-s)+s),n=1-Math.min(1,a*(1-s)+s),r=1-Math.min(1,o*(1-s)+s),[255*e,255*n,255*r]}function T(t){return n(S(t))}function j(t){return i(S(t))}function E(t){return a(S(t))}function O(t){return s(S(t))}function H(t){var e,n,r,i=t[0]/100,a=t[1]/100,o=t[2]/100;
// assume sRGB
return e=3.2406*i+-1.5372*a+-.4986*o,n=-.9689*i+1.8758*a+.0415*o,r=.0557*i+-.204*a+1.057*o,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),r=Math.min(Math.max(0,r),1),[255*e,255*n,255*r]}function P(t){var e,n,r,i=t[0],a=t[1],o=t[2];return i/=95.047,a/=100,o/=108.883,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,e=116*a-16,n=500*(i-a),r=200*(a-o),[e,n,r]}function A(t){return F(P(t))}function C(t){var e,n,r,i,a=t[0],o=t[1],s=t[2];return a<=8?(n=100*a/903.3,i=n/100*7.787+16/116):(n=100*Math.pow((a+16)/116,3),i=Math.pow(n/100,1/3)),e=e/95.047<=.008856?e=95.047*(o/500+i-16/116)/7.787:95.047*Math.pow(o/500+i,3),r=r/108.883<=.008859?r=108.883*(i-s/200-16/116)/7.787:108.883*Math.pow(i-s/200,3),[e,n,r]}function F(t){var e,n,r,i=t[0],a=t[1],o=t[2];return e=Math.atan2(o,a),n=360*e/2/Math.PI,n<0&&(n+=360),r=Math.sqrt(a*a+o*o),[i,r,n]}function I(t){return H(C(t))}function W(t){var e,n,r,i=t[0],a=t[1],o=t[2];return r=o/360*2*Math.PI,e=a*Math.cos(r),n=a*Math.sin(r),[i,e,n]}function N(t){return C(W(t))}function z(t){return I(W(t))}function R(t){return K[t]}function B(t){return n(R(t))}function V(t){return i(R(t))}function U(t){return a(R(t))}function J(t){return o(R(t))}function q(t){return l(R(t))}function G(t){return u(R(t))}/* MIT license */
t.exports={rgb2hsl:n,rgb2hsv:i,rgb2hwb:a,rgb2cmyk:o,rgb2keyword:s,rgb2xyz:u,rgb2lab:l,rgb2lch:d,hsl2rgb:c,hsl2hsv:f,hsl2hwb:h,hsl2cmyk:m,hsl2keyword:_,hsv2rgb:p,hsv2hsl:y,hsv2hwb:v,hsv2cmyk:M,hsv2keyword:L,hwb2rgb:k,hwb2hsl:w,hwb2hsv:Y,hwb2cmyk:x,hwb2keyword:D,cmyk2rgb:S,cmyk2hsl:T,cmyk2hsv:j,cmyk2hwb:E,cmyk2keyword:O,keyword2rgb:R,keyword2hsl:B,keyword2hsv:V,keyword2hwb:U,keyword2cmyk:J,keyword2lab:q,keyword2xyz:G,xyz2rgb:H,xyz2lab:P,xyz2lch:A,lab2xyz:C,lab2rgb:I,lab2lch:F,lch2lab:W,lch2xyz:N,lch2rgb:z};var K={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},$={};for(var Z in K)$[JSON.stringify(K[Z])]=Z},/* 589 */
/***/
function(t,e,n){function r(t){if(t){var e=/^#([a-fA-F0-9]{3})$/i,n=/^#([a-fA-F0-9]{6})$/i,r=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,i=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,a=/(\w+)/,o=[0,0,0],s=1,u=t.match(e);if(u){u=u[1];for(var l=0;l<o.length;l++)o[l]=parseInt(u[l]+u[l],16)}else if(u=t.match(n)){u=u[1];for(var l=0;l<o.length;l++)o[l]=parseInt(u.slice(2*l,2*l+2),16)}else if(u=t.match(r)){for(var l=0;l<o.length;l++)o[l]=parseInt(u[l+1]);s=parseFloat(u[4])}else if(u=t.match(i)){for(var l=0;l<o.length;l++)o[l]=Math.round(2.55*parseFloat(u[l+1]));s=parseFloat(u[4])}else if(u=t.match(a)){if("transparent"==u[1])return[0,0,0,0];if(!(o=M[u[1]]))return}for(var l=0;l<o.length;l++)o[l]=y(o[l],0,255);return s=s||0==s?y(s,0,1):1,o[3]=s,o}}function i(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var r=parseFloat(n[4]);return[y(parseInt(n[1]),0,360),y(parseFloat(n[2]),0,100),y(parseFloat(n[3]),0,100),y(isNaN(r)?1:r,0,1)]}}}function a(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var r=parseFloat(n[4]);return[y(parseInt(n[1]),0,360),y(parseFloat(n[2]),0,100),y(parseFloat(n[3]),0,100),y(isNaN(r)?1:r,0,1)]}}}function o(t){var e=r(t);return e&&e.slice(0,3)}function s(t){var e=i(t);return e&&e.slice(0,3)}function u(t){var e=r(t);return e?e[3]:(e=i(t))?e[3]:(e=a(t))?e[3]:void 0}
// generators
function l(t){return"#"+v(t[0])+v(t[1])+v(t[2])}function d(t,e){return e<1||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function f(t,e){return e<1||t[3]&&t[3]<1?h(t,e):"rgb("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%)"}function h(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function m(t,e){return e<1||t[3]&&t[3]<1?_(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function _(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}
// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function g(t){return b[t.slice(0,3)]}
// helpers
function y(t,e,n){return Math.min(Math.max(e,t),n)}function v(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}/* MIT license */
var M=n(590);t.exports={getRgba:r,getHsla:i,getRgb:o,getHsl:s,getHwb:a,getAlpha:u,hexString:l,rgbString:d,rgbaString:c,percentString:f,percentaString:h,hslString:m,hslaString:_,hwbString:p,keyword:g};
//create a list of reverse color names
var b={};for(var L in M)b[M[L]]=L},/* 590 */
/***/
function(t,e,n){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},/* 591 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(35),a=n(5);r._set("global",{elements:{arc:{backgroundColor:r.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),t.exports=i.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var r=a.getAngleFromPoint(n,{x:t,y:e}),i=r.angle,o=r.distance,s=n.startAngle,u=n.endAngle;u<s;)u+=2*Math.PI;for(;i>u;)i-=2*Math.PI;for(;i<s;)i+=2*Math.PI;
// Check if within the range of the open/close angle
var l=i>=s&&i<=u,d=o>=n.innerRadius&&o<=n.outerRadius;return l&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,r=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,r),t.arc(e.x,e.y,e.innerRadius,r,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},/* 592 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(35),a=n(5),o=r.global;r._set("global",{elements:{line:{tension:.4,backgroundColor:o.defaultColor,borderWidth:3,borderColor:o.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),t.exports=i.extend({draw:function(){var t,e,n,r,i=this,s=i._view,u=i._chart.ctx,l=s.spanGaps,d=i._children.slice(),c=o.elements.line,f=-1;for(
// If we are looping, adding the first point again
i._loop&&d.length&&d.push(d[0]),u.save(),
// Stroke Line Options
u.lineCap=s.borderCapStyle||c.borderCapStyle,
// IE 9 and 10 do not support line dash
u.setLineDash&&u.setLineDash(s.borderDash||c.borderDash),u.lineDashOffset=s.borderDashOffset||c.borderDashOffset,u.lineJoin=s.borderJoinStyle||c.borderJoinStyle,u.lineWidth=s.borderWidth||c.borderWidth,u.strokeStyle=s.borderColor||o.defaultColor,
// Stroke Line
u.beginPath(),f=-1,t=0;t<d.length;++t)e=d[t],n=a.previousItem(d,t),r=e._view,
// First point moves to it's starting position no matter what
0===t?r.skip||(u.moveTo(r.x,r.y),f=t):(n=-1===f?n:d[f],r.skip||(f!==t-1&&!l||-1===f?
// There was a gap and this is the first point after the gap
u.moveTo(r.x,r.y):
// Line to next point
a.canvas.lineTo(u,n._view,e._view),f=t));u.stroke(),u.restore()}})},/* 593 */
/***/
function(t,e,n){"use strict";function r(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}function i(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius}var a=n(9),o=n(35),s=n(5),u=a.global.defaultColor;a._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:u,borderColor:u,borderWidth:1,
// Hover
hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),t.exports=o.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:r,inXRange:r,inYRange:i,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._model,r=this._chart.ctx,i=e.pointStyle,o=e.radius,l=e.x,d=e.y,c=s.color,f=0;e.skip||(r.strokeStyle=e.borderColor||u,r.lineWidth=s.valueOrDefault(e.borderWidth,a.global.elements.point.borderWidth),r.fillStyle=e.backgroundColor||u,
// Cliping for Points.
// going out from inner charArea?
void 0!==t&&(n.x<t.left||1.01*t.right<n.x||n.y<t.top||1.01*t.bottom<n.y)&&(
// Point fade out
n.x<t.left?f=(l-n.x)/(t.left-n.x):1.01*t.right<n.x?f=(n.x-l)/(n.x-t.right):n.y<t.top?f=(d-n.y)/(t.top-n.y):1.01*t.bottom<n.y&&(f=(n.y-d)/(n.y-t.bottom)),f=Math.round(100*f)/100,r.strokeStyle=c(r.strokeStyle).alpha(f).rgbString(),r.fillStyle=c(r.fillStyle).alpha(f).rgbString()),s.canvas.drawPoint(r,i,o,l,d))}})},/* 594 */
/***/
function(t,e,n){"use strict";function r(t){return void 0!==t._view.width}/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function i(t){var e,n,i,a,o=t._view;if(r(t)){
// vertical
var s=o.width/2;e=o.x-s,n=o.x+s,i=Math.min(o.y,o.base),a=Math.max(o.y,o.base)}else{
// horizontal bar
var u=o.height/2;e=Math.min(o.x,o.base),n=Math.max(o.x,o.base),i=o.y-u,a=o.y+u}return{left:e,top:i,right:n,bottom:a}}var a=n(9),o=n(35);a._set("global",{elements:{rectangle:{backgroundColor:a.global.defaultColor,borderColor:a.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),t.exports=o.extend({draw:function(){function t(t){return g[(v+t)%4]}var e,n,r,i,a,o,s,u=this._chart.ctx,l=this._view,d=l.borderWidth;
// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
if(l.horizontal?(
// horizontal bar
e=l.base,n=l.x,r=l.y-l.height/2,i=l.y+l.height/2,a=n>e?1:-1,o=1,s=l.borderSkipped||"left"):(
// bar
e=l.x-l.width/2,n=l.x+l.width/2,r=l.y,i=l.base,a=1,o=i>r?1:-1,s=l.borderSkipped||"bottom"),d){
// borderWidth shold be less than bar width and bar height.
var c=Math.min(Math.abs(e-n),Math.abs(r-i));d=d>c?c:d;var f=d/2,h=e+("left"!==s?f*a:0),m=n+("right"!==s?-f*a:0),_=r+("top"!==s?f*o:0),p=i+("bottom"!==s?-f*o:0);
// not become a vertical line?
h!==m&&(r=_,i=p),
// not become a horizontal line?
_!==p&&(e=h,n=m)}u.beginPath(),u.fillStyle=l.backgroundColor,u.strokeStyle=l.borderColor,u.lineWidth=d;
// Corner points, from bottom-left to bottom-right clockwise
// | 1 2 |
// | 0 3 |
var g=[[e,i],[e,r],[n,r],[n,i]],y=["bottom","left","top","right"],v=y.indexOf(s,0);-1===v&&(v=0);
// Draw rectangle from 'startCorner'
var M=t(0);u.moveTo(M[0],M[1]);for(var b=1;b<4;b++)M=t(b),u.lineTo(M[0],M[1]);u.fill(),d&&u.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var n=!1;if(this._view){var r=i(this);n=t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom}return n},inLabelRange:function(t,e){var n=this;if(!n._view)return!1;var a=i(n);return r(n)?t>=a.left&&t<=a.right:e>=a.top&&e<=a.bottom},inXRange:function(t){var e=i(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=i(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,n=this._view;return r(this)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},/* 595 */
/***/
function(t,e){/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */
t.exports={acquireContext:function(t){
// Support for any object associated to a canvas (including a context2d)
return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},/* 596 */
/***/
function(t,e,n){"use strict";/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {Number} Size in pixels or undefined if unknown.
 */
function r(t,e){var n=p.getStyle(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?Number(r[1]):void 0}/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function i(t,e){var n=t.style,i=t.getAttribute("height"),a=t.getAttribute("width");if(
// Chart.js modifies some canvas values that we want to restore on destroy
t[g]={initial:{height:i,width:a,style:{display:n.display,height:n.height,width:n.width}}},
// Force canvas to display as block to avoid extra space caused by inline
// elements, which would interfere with the responsive resize process.
// https://github.com/chartjs/Chart.js/issues/2538
n.display=n.display||"block",null===a||""===a){var o=r(t,"width");void 0!==o&&(t.width=o)}if(null===i||""===i)if(""===t.style.height)
// If no explicit render height and style height, let's apply the aspect ratio,
// which one can be specified by the user but also by charts as default option
// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
t.height=t.width/(e.options.aspectRatio||2);else{var s=r(t,"height");void 0!==o&&(t.height=s)}return t}function a(t,e,n){t.addEventListener(e,n,w)}function o(t,e,n){t.removeEventListener(e,n,w)}function s(t,e,n,r,i){return{type:t,chart:e,native:i||null,x:void 0!==n?n:null,y:void 0!==r?r:null}}function u(t,e){var n=L[t.type]||t.type,r=p.getRelativePosition(t,e);return s(n,e,r.x,r.y,t)}function l(t,e){var n=!1,r=[];return function(){r=Array.prototype.slice.call(arguments),e=e||this,n||(n=!0,p.requestAnimFrame.call(window,function(){n=!1,t.apply(e,r)}))}}
// Implementation based on https://github.com/marcj/css-element-queries
function d(t){var e=document.createElement("div"),n=y+"size-monitor",r="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=r,e.className=n,e.innerHTML='<div class="'+n+'-expand" style="'+r+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+n+'-shrink" style="'+r+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var i=e.childNodes[0],o=e.childNodes[1];e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,o.scrollLeft=1e6,o.scrollTop=1e6};var s=function(){e._reset(),t()};return a(i,"scroll",s.bind(i,"expand")),a(o,"scroll",s.bind(o,"shrink")),e}
// https://davidwalsh.name/detect-node-insertion
function c(t,e){var n=t[g]||(t[g]={}),r=n.renderProxy=function(t){t.animationName===M&&e()};p.each(b,function(e){a(t,e,r)}),
// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
// is removed then added back immediately (same animation frame?). Accessing the
// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
// https://github.com/chartjs/Chart.js/issues/4737
n.reflow=!!t.offsetParent,t.classList.add(v)}function f(t){var e=t[g]||{},n=e.renderProxy;n&&(p.each(b,function(e){o(t,e,n)}),delete e.renderProxy),t.classList.remove(v)}function h(t,e,n){var r=t[g]||(t[g]={}),i=r.resizer=d(l(function(){if(r.resizer)return e(s("resize",n))}));
// The resizer needs to be attached to the node parent, so we first need to be
// sure that `node` is attached to the DOM before injecting the resizer element.
c(t,function(){if(r.resizer){var e=t.parentNode;e&&e!==i.parentNode&&e.insertBefore(i,e.firstChild),
// The container size might have changed, let's reset the resizer state.
i._reset()}})}function m(t){var e=t[g]||{},n=e.resizer;delete e.resizer,f(t),n&&n.parentNode&&n.parentNode.removeChild(n)}function _(t,e){
// http://stackoverflow.com/q/3922139
var n=t._style||document.createElement("style");t._style||(t._style=n,e="/* Chart.js */\n"+e,n.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(n)),n.appendChild(document.createTextNode(e))}/**
 * Chart.Platform implementation for targeting a web browser
 */
var p=n(5),g="$chartjs",y="chartjs-",v=y+"render-monitor",M=y+"render-animation",b=["animationstart","webkitAnimationStart"],L={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},k=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}(),w=!!k&&{passive:!0};t.exports={/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t="from{opacity:0.99}to{opacity:1}";_(this,
// DOM rendering detection
// https://davidwalsh.name/detect-node-insertion
"@-webkit-keyframes "+M+"{"+t+"}@keyframes "+M+"{"+t+"}."+v+"{-webkit-animation:"+M+" 0.001s;animation:"+M+" 0.001s;}")},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(
// Support for array based queries (such as jQuery)
t=t[0]),t&&t.canvas&&(
// Support for any object associated to a canvas (including a context2d)
t=t.canvas);
// To prevent canvas fingerprinting, some add-ons undefine the getContext
// method, for example: https://github.com/kkapsner/CanvasBlocker
// https://github.com/chartjs/Chart.js/issues/2807
var n=t&&t.getContext&&t.getContext("2d");
// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
// inside an iframe or when running in a protected environment. We could guess the
// types from their toString() value but let's keep things flexible and assume it's
// a sufficient condition if the item has a context2D which has item as `canvas`.
// https://github.com/chartjs/Chart.js/issues/3887
// https://github.com/chartjs/Chart.js/issues/4102
// https://github.com/chartjs/Chart.js/issues/4152
// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
// inside an iframe or when running in a protected environment. We could guess the
// types from their toString() value but let's keep things flexible and assume it's
// a sufficient condition if the item has a context2D which has item as `canvas`.
// https://github.com/chartjs/Chart.js/issues/3887
// https://github.com/chartjs/Chart.js/issues/4102
// https://github.com/chartjs/Chart.js/issues/4152
return n&&n.canvas===t?(i(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[g]){var n=e[g].initial;["height","width"].forEach(function(t){var r=n[t];p.isNullOrUndef(r)?e.removeAttribute(t):e.setAttribute(t,r)}),p.each(n.style||{},function(t,n){e.style[n]=t}),
// The canvas render size might have been changed (and thus the state stack discarded),
// we can't use save() and restore() to restore the initial state. So make sure that at
// least the canvas context is reset to the default state by setting the canvas width.
// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
e.width=e.width,delete e[g]}},addEventListener:function(t,e,n){var r=t.canvas;if("resize"===e)
// Note: the resize event is not supported on all browsers.
return void h(r,n,t);var i=n[g]||(n[g]={});a(r,e,(i.proxies||(i.proxies={}))[t.id+"_"+e]=function(e){n(u(e,t))})},removeEventListener:function(t,e,n){var r=t.canvas;if("resize"===e)
// Note: the resize event is not supported on all browsers.
return void m(r);var i=n[g]||{},a=i.proxies||{},s=a[t.id+"_"+e];s&&o(r,e,s)}},
// DEPRECATIONS
/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
p.addEvent=a,/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
p.removeEvent=o},/* 597 */
/***/
function(t,e,n){"use strict";/* global window: false */
var r=n(9),i=n(35),a=n(5);r._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:a.noop,onComplete:a.noop}}),t.exports=function(t){t.Animation=i.extend({chart:null,// the animation associated chart instance
currentStep:0,// the current animation step
numSteps:60,// default number of steps
easing:"",// the easing to use for this animation
render:null,// render function used by the animation service
onAnimationProgress:null,// user specified callback to fire on each step of the animation
onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,/**
		 * @param {Chart} chart - The chart to animate.
		 * @param {Chart.Animation} animation - The animation that we will animate.
		 * @param {Number} duration - The animation duration in ms.
		 * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		 */
addAnimation:function(t,e,n,r){var i,a,o=this.animations;for(e.chart=t,r||(t.animating=!0),i=0,a=o.length;i<a;++i)if(o[i].chart===t)return void(o[i]=e);o.push(e),
// If there are no animations queued, manually kickstart a digest, for lack of a better word
1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=a.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(
// Skip animation frame requests until the active one is executed.
// This can happen when processing mouse events, e.g. 'mousemove'
// and 'mouseout' events will trigger multiple renders.
t.request=a.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},/**
		 * @private
		 */
startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+n);var r=Date.now();t.dropFrames+=(r-e)/t.frameDuration,
// Do we have more stuff to animate?
t.animations.length>0&&t.requestAnimationFrame()},/**
		 * @private
		 */
advance:function(t){for(var e,n,r=this.animations,i=0;i<r.length;)e=r[i],n=e.chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),a.callback(e.render,[n,e],n),a.callback(e.onAnimationProgress,[e],n),e.currentStep>=e.numSteps?(a.callback(e.onAnimationComplete,[e],n),n.animating=!1,r.splice(i,1)):++i}},/**
	 * Provided for backward compatibility, use Chart.Animation instead
	 * @prop Chart.Animation#animationObject
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),/**
	 * Provided for backward compatibility, use Chart.Animation#chart instead
	 * @prop Chart.Animation#chartInstance
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},/* 598 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(5),a=n(225),o=n(86),s=n(226),u=n(227);t.exports=function(t){/**
	 * Initializes the given config with global and chart default values.
	 */
function e(t){t=t||{};
// Do NOT use configMerge() for the data object because this method merges arrays
// and so would change references to labels and datasets, preventing data updates.
var e=t.data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=i.configMerge(r.global,r[t.type],t.options||{}),t}/**
	 * Updates the config of the chart
	 * @param chart {Chart} chart to update the options for
	 */
function n(e){var n=e.options;i.each(e.scales,function(t){o.removeBox(e,t)}),n=i.configMerge(t.defaults.global,t.defaults[e.config.type],n),e.options=e.config.options=n,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),
// Tooltip
e.tooltip._options=n.tooltips,e.tooltip.initialize()}function l(t){return"top"===t||"bottom"===t}
// Create a dictionary of chart types, to allow for extension of existing types
t.types={},
// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
// Destroy method on the chart will remove the instance of the chart from this reference.
t.instances={},
// Controllers available for dataset visualization eg. bar, line, slice, etc.
t.controllers={},i.extend(t.prototype,/** @lends Chart */{/**
		 * @private
		 */
construct:function(n,r){var a=this;r=e(r);var o=s.acquireContext(n,r),u=o&&o.canvas,l=u&&u.height,d=u&&u.width;if(a.id=i.uid(),a.ctx=o,a.canvas=u,a.config=r,a.width=d,a.height=l,a.aspectRatio=l?d/l:null,a.options=r.options,a._bufferedRender=!1,/**
			 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
			 * the "instance" still need to be defined since it might be called from plugins.
			 * @prop Chart#chart
			 * @deprecated since version 2.6.0
			 * @todo remove at version 3
			 * @private
			 */
a.chart=a,a.controller=a,// chart.chart.controller #inception
// Add the chart instance to the global namespace
t.instances[a.id]=a,
// Define alias to the config data: `chart.data === chart.config.data`
Object.defineProperty(a,"data",{get:function(){return a.config.data},set:function(t){a.config.data=t}}),!o||!u)
// The given item is not a compatible context2d element, let's return before finalizing
// the chart initialization but after setting basic chart / controller properties that
// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
// https://github.com/chartjs/Chart.js/issues/2807
return void console.error("Failed to create chart: can't acquire context from the given item");a.initialize(),a.update()},/**
		 * @private
		 */
initialize:function(){var t=this;
// Before init plugin notification
// Initial resize before chart draws (must be silent to preserve initial animations).
// Make sure scales have IDs and are built before we build any controllers.
// After init plugin notification
return u.notify(t,"beforeInit"),i.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),u.notify(t,"afterInit"),t},clear:function(){return i.canvas.clear(this),this},stop:function(){
// Stops any current animation loop occurring
return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,r=e.canvas,a=n.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(i.getMaximumWidth(r))),s=Math.max(0,Math.floor(a?o/a:i.getMaximumHeight(r)));if((e.width!==o||e.height!==s)&&(r.width=e.width=o,r.height=e.height=s,r.style.width=o+"px",r.style.height=s+"px",i.retinaScale(e,n.devicePixelRatio),!t)){
// Notify any plugins about the resize
var l={width:o,height:s};u.notify(e,"resize",[l]),
// Notify of resize
e.options.onResize&&e.options.onResize(e,l),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;i.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),i.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
buildOrUpdateScales:function(){var e=this,n=e.options,r=e.scales||{},a=[],o=Object.keys(r).reduce(function(t,e){return t[e]=!1,t},{});n.scales&&(a=a.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&a.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),i.each(a,function(n){var a=n.options,s=a.id,u=i.valueOrDefault(a.type,n.dtype);l(a.position)!==l(n.dposition)&&(a.position=n.dposition),o[s]=!0;var d=null;if(s in r&&r[s].type===u)d=r[s],d.options=a,d.ctx=e.ctx,d.chart=e;else{var c=t.scaleService.getScaleConstructor(u);if(!c)return;d=new c({id:s,type:u,options:a,ctx:e.ctx,chart:e}),r[d.id]=d}d.mergeTicksOptions(),
// TODO(SB): I think we should be able to remove this custom case (options.scale)
// and consider it as a regular scale part of the "scales"" map only! This would
// make the logic easier and remove some useless? custom code.
n.isDefault&&(e.scale=d)}),
// clear up discarded scales
i.each(o,function(t,e){t||delete r[e]}),e.scales=r,t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],r=[];return i.each(e.data.datasets,function(i,a){var o=e.getDatasetMeta(a),s=i.type||e.config.type;if(o.type&&o.type!==s&&(e.destroyDatasetMeta(a),o=e.getDatasetMeta(a)),o.type=s,n.push(o.type),o.controller)o.controller.updateIndex(a),o.controller.linkScales();else{var u=t.controllers[o.type];if(void 0===u)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new u(e,a),r.push(o.controller)}},e),r},/**
		 * Reset the elements of all datasets
		 * @private
		 */
resetElements:function(){var t=this;i.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},/**
		* Resets the chart back to it's state before the initial animation
		*/
reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e=this;if(t&&"object"==typeof t||(
// backwards compatibility
t={duration:t,lazy:arguments[1]}),n(e),
// plugins options references might have change, let's invalidate the cache
// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
u._invalidate(e),!1!==u.notify(e,"beforeUpdate")){
// In case the entire data object changed
e.tooltip._data=e.data;
// Make sure dataset controllers are updated and new controllers are reset
var r=e.buildOrUpdateControllers();
// Make sure all dataset controllers have correct meta data counts
i.each(e.data.datasets,function(t,n){e.getDatasetMeta(n).controller.buildOrUpdateElements()},e),e.updateLayout(),
// Can only reset the new controllers after the scales have been updated
e.options.animation&&e.options.animation.duration&&i.each(r,function(t){t.reset()}),e.updateDatasets(),
// Need to reset tooltip in case it is displayed with elements that are removed
// after update.
e.tooltip.initialize(),
// Last active contains items that were previously in the tooltip.
// When we reset the tooltip, we need to clear it
e.lastActive=[],
// Do this before render so that any plugins that need final scale updates can use it
u.notify(e,"afterUpdate"),e._bufferedRender?e._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:e.render(t)}},/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */
updateLayout:function(){var t=this;!1!==u.notify(t,"beforeLayout")&&(o.update(this,this.width,this.height),/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 * @private
			 */
u.notify(t,"afterScaleUpdate"),u.notify(t,"afterLayout"))},/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */
updateDatasets:function(){var t=this;if(!1!==u.notify(t,"beforeDatasetsUpdate")){for(var e=0,n=t.data.datasets.length;e<n;++e)t.updateDataset(e);u.notify(t,"afterDatasetsUpdate")}},/**
		 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		 * @private
		 */
updateDataset:function(t){var e=this,n=e.getDatasetMeta(t),r={meta:n,index:t};!1!==u.notify(e,"beforeDatasetUpdate",[r])&&(n.controller.update(),u.notify(e,"afterDatasetUpdate",[r]))},render:function(e){var n=this;e&&"object"==typeof e||(
// backwards compatibility
e={duration:e,lazy:arguments[1]});var r=e.duration,a=e.lazy;if(!1!==u.notify(n,"beforeRender")){var o=n.options.animation,s=function(t){u.notify(n,"afterRender"),i.callback(o&&o.onComplete,[t],n)};if(o&&(void 0!==r&&0!==r||void 0===r&&0!==o.duration)){var l=new t.Animation({numSteps:(r||o.duration)/16.66,// 60 fps
easing:e.easing||o.easing,render:function(t,e){var n=i.easing.effects[e.easing],r=e.currentStep,a=r/e.numSteps;t.draw(n(a),a,r)},onAnimationProgress:o.onProgress,onAnimationComplete:s});t.animationService.addAnimation(n,l,r,a)}else n.draw(),
// See https://github.com/chartjs/Chart.js/issues/3781
s(new t.Animation({numSteps:0,chart:n}));return n}},draw:function(t){var e=this;e.clear(),i.isNullOrUndef(t)&&(t=1),e.transition(t),!1!==u.notify(e,"beforeDraw",[t])&&(
// Draw all the scales
i.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),u.notify(e,"afterDraw",[t]))},/**
		 * @private
		 */
transition:function(t){for(var e=this,n=0,r=(e.data.datasets||[]).length;n<r;++n)e.isDatasetVisible(n)&&e.getDatasetMeta(n).controller.transition(t);e.tooltip.transition(t)},/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */
drawDatasets:function(t){var e=this;if(!1!==u.notify(e,"beforeDatasetsDraw",[t])){
// Draw datasets reversed to support proper line stacking
for(var n=(e.data.datasets||[]).length-1;n>=0;--n)e.isDatasetVisible(n)&&e.drawDataset(n,t);u.notify(e,"afterDatasetsDraw",[t])}},/**
		 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
		 * @private
		 */
drawDataset:function(t,e){var n=this,r=n.getDatasetMeta(t),i={meta:r,index:t,easingValue:e};!1!==u.notify(n,"beforeDatasetDraw",[i])&&(r.controller.draw(e),u.notify(n,"afterDatasetDraw",[i]))},/**
		 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
		 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
		 * @private
		 */
_drawTooltip:function(t){var e=this,n=e.tooltip,r={tooltip:n,easingValue:t};!1!==u.notify(e,"beforeTooltipDraw",[r])&&(n.draw(),u.notify(e,"afterTooltipDraw",[r]))},
// Get the single element that was clicked on
// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
getElementAtEvent:function(t){return a.modes.single(this,t)},getElementsAtEvent:function(t){return a.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return a.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var r=a.modes[e];return"function"==typeof r?r(this,t,n):[]},getDatasetAtEvent:function(t){return a.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var r=n._meta[e.id];return r||(r=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,// See isDatasetVisible() comment
xAxisID:null,yAxisID:null}),r},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);
// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},/**
		 * @private
		 */
destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],r=n._meta&&n._meta[e];r&&(r.controller.destroy(),delete n._meta[e])},destroy:function(){var e,n,r=this,a=r.canvas;
// dataset controllers need to cleanup associated data
for(r.stop(),e=0,n=r.data.datasets.length;e<n;++e)r.destroyDatasetMeta(e);a&&(r.unbindEvents(),i.canvas.clear(r),s.releaseContext(r.ctx),r.canvas=null,r.ctx=null),u.notify(r,"destroy"),delete t.instances[r.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e,_chartInstance:e,// deprecated, backward compatibility
_data:e.data,_options:e.options.tooltips},e)},/**
		 * @private
		 */
bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};i.each(t.options.events,function(r){s.addEventListener(t,r,n),e[r]=n}),
// Elements used to detect size change should not be injected for non responsive charts.
// See https://github.com/chartjs/Chart.js/issues/2210
t.options.responsive&&(n=function(){t.resize()},s.addEventListener(t,"resize",n),e.resize=n)},/**
		 * @private
		 */
unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,i.each(e,function(e,n){s.removeEventListener(t,n,e)}))},updateHoverStyle:function(t,e,n){var r,i,a,o=n?"setHoverStyle":"removeHoverStyle";for(i=0,a=t.length;i<a;++i)(r=t[i])&&this.getDatasetMeta(r._datasetIndex).controller[o](r)},/**
		 * @private
		 */
eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==u.notify(e,"beforeEvent",[t])){
// Buffer any update calls so that renders do not occur
e._bufferedRender=!0,e._bufferedRequest=null;var r=e.handleEvent(t);
// for smooth tooltip animations issue #4989
// the tooltip should be the source of change
// Animation check workaround:
// tooltip._start will be null when tooltip isn't animating
n&&(r=n._start?n.handleEvent(t):r|n.handleEvent(t)),u.notify(e,"afterEvent",[t]);var i=e._bufferedRequest;
// If we have an update that was triggered, we need to do a normal render
// If entering, leaving, or changing elements, animate the change via pivot
// We only need to render at this point. Updating will cause scales to be
// recomputed generating flicker & using more memory than necessary.
return i?e.render(i):r&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */
handleEvent:function(t){var e=this,n=e.options||{},r=n.hover,a=!1;
// Find Active Elements for hover and tooltips
// Invoke onHover hook
// Need to call with native event here to not break backwards compatibility
// Use e.native here for backwards compatibility
// Remove styling for last active (even if it may still be active)
// Built in hover styling
// Remember Last Actives
return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,r.mode,r),i.callback(n.onHover||n.hover.onHover,[t.native,e.active],e),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(e,t.native,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,r.mode,!1),e.active.length&&r.mode&&e.updateHoverStyle(e.active,r.mode,!0),a=!i.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,a}}),/**
	 * Provided for backward compatibility, use Chart instead.
	 * @class Chart.Controller
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 * @private
	 */
t.Controller=t}},/* 599 */
/***/
function(t,e,n){"use strict";var r=n(5);t.exports=function(t){/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */
function e(t,e){if(t._chartjs)return void t._chartjs.listeners.push(e);Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),i.forEach(function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=i.apply(this,e);return r.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,e)}),a}})})}/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */
function n(t,e){var n=t._chartjs;if(n){var r=n.listeners,a=r.indexOf(e);-1!==a&&r.splice(a,1),r.length>0||(i.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=["push","pop","shift","splice","unshift"];
// Base class for all dataset controllers (line, bar, etc)
t.DatasetController=function(t,e){this.initialize(t,e)},r.extend(t.DatasetController.prototype,{/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
datasetElementType:null,/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},/**
		 * @private
		 */
destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,r=n.getMeta(),i=n.getDataset().data||[],a=r.data;for(t=0,e=i.length;t<e;++t)a[t]=a[t]||n.createMetaData(t);r.dataset=r.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,r=t.getDataset(),i=r.data||(r.data=[]);
// In order to correctly handle data addition/deletion animation (an thus simulate
// real-time charts), we need to monitor these data modifications and synchronize
// the internal meta data accordingly.
t._data!==i&&(t._data&&
// This case happens when the user replaced the data array instance.
n(t._data,t),e(i,t),t._data=i),
// Re-sync meta data in case the user replaced the data array or if we missed
// any updates and so make sure that we handle number of datapoints changing.
t.resyncElements()},update:r.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],r=n.length,i=0;i<r;++i)n[i].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,r=0;for(t.dataset&&t.dataset.draw();r<n;++r)e[r].draw()},removeHoverStyle:function(t,e){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=r.valueAtIndexOrDefault,s=t._model;s.backgroundColor=a.backgroundColor?a.backgroundColor:o(n.backgroundColor,i,e.backgroundColor),s.borderColor=a.borderColor?a.borderColor:o(n.borderColor,i,e.borderColor),s.borderWidth=a.borderWidth?a.borderWidth:o(n.borderWidth,i,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=r.valueAtIndexOrDefault,o=r.getHoverColor,s=t._model;s.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:a(e.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=i.hoverBorderColor?i.hoverBorderColor:a(e.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:a(e.hoverBorderWidth,n,s.borderWidth)},/**
		 * @private
		 */
resyncElements:function(){var t=this,e=t.getMeta(),n=t.getDataset().data,r=e.data.length,i=n.length;i<r?e.data.splice(i,r-i):i>r&&t.insertElements(r,i-r)},/**
		 * @private
		 */
insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},/**
		 * @private
		 */
onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},/**
		 * @private
		 */
onDataPop:function(){this.getMeta().data.pop()},/**
		 * @private
		 */
onDataShift:function(){this.getMeta().data.shift()},/**
		 * @private
		 */
onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},/**
		 * @private
		 */
onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=r.inherits}},/* 600 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(5),a=n(86);t.exports=function(t){t.scaleService={
// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
// use the new chart options to grab the correct scale
constructors:{},
// Use a registration function so that we can move to an ES6 map when we no longer need to support
// old browsers
// Scale config defaults
defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=i.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){
// Return the scale defaults merged with the global settings so that we always use the latest ones
return this.defaults.hasOwnProperty(t)?i.merge({},[r.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){var n=this;n.defaults.hasOwnProperty(t)&&(n.defaults[t]=i.extend(n.defaults[t],e))},addScalesToLayout:function(t){
// Adds each scale to the chart.boxes array to be sized accordingly
i.each(t.scales,function(e){
// Set ILayoutItem parameters for backwards compatibility
e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,a.addBox(t,e)})}}}},/* 601 */
/***/
function(t,e,n){"use strict";function r(t){var e,n,r=[];for(e=0,n=t.length;e<n;++e)r.push(t[e].label);return r}function i(t,e,n){var r=t.getPixelForTick(e);return n&&(r-=0===e?(t.getPixelForTick(1)-r)/2:(r-t.getPixelForTick(e-1))/2),r}var a=n(9),o=n(35),s=n(5),u=n(87);a._set("scale",{display:!0,position:"left",offset:!1,
// grid line settings
gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},
// scale label
scaleLabel:{
// display property
display:!1,
// actual label
labelString:"",
// line height
lineHeight:1.2,
// top/bottom padding
padding:{top:4,bottom:4}},
// label settings
ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,
// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
callback:u.formatters.values,minor:{},major:{}}}),t.exports=function(t){function e(t,e,n){return s.isArray(e)?s.longestText(t,n,e):t.measureText(e).width}function n(t){var e=s.valueOrDefault,n=a.global,r=e(t.fontSize,n.defaultFontSize),i=e(t.fontStyle,n.defaultFontStyle),o=e(t.fontFamily,n.defaultFontFamily);return{size:r,style:i,family:o,font:s.fontString(r,i,o)}}function u(t){return s.options.toLineHeight(s.valueOrDefault(t.lineHeight,1.2),s.valueOrDefault(t.fontSize,a.global.defaultFontSize))}t.Scale=o.extend({/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */
getPadding:function(){var t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}},/**
		 * Returns the scale tick objects ({label, major})
		 * @since 2.7
		 */
getTicks:function(){return this._ticks},
// These methods are ordered by lifecyle. Utilities then follow.
// Any function defined here is inherited by all scale types.
// Any function can be extended by the scale type
mergeTicksOptions:function(){var t=this.options.ticks;!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1});for(var e in t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){s.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var r,i,a,o,u,l,d=this;// BACKWARD COMPATIBILITY
// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!
// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
for(
// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
d.beforeUpdate(),
// Absorb the master measurements
d.maxWidth=t,d.maxHeight=e,d.margins=s.extend({left:0,right:0,top:0,bottom:0},n),d.longestTextCache=d.longestTextCache||{},
// Dimensions
d.beforeSetDimensions(),d.setDimensions(),d.afterSetDimensions(),
// Data min/max
d.beforeDataLimits(),d.determineDataLimits(),d.afterDataLimits(),
// Ticks - `this.ticks` is now DEPRECATED!
// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
// and must not be accessed directly from outside this class. `this.ticks` being
// around for long time and not marked as private, we can't change its structure
// without unexpected breaking changes. If you need to access the scale ticks,
// use scale.getTicks() instead.
d.beforeBuildTicks(),
// New implementations should return an array of objects but for BACKWARD COMPAT,
// we still support no return (`this.ticks` internally set by calling this method).
u=d.buildTicks()||[],d.afterBuildTicks(),d.beforeTickToLabelConversion(),
// New implementations should return the formatted tick labels but for BACKWARD
// COMPAT, we still support no return (`this.ticks` internally changed by calling
// this method and supposed to contain only string values).
a=d.convertTicksToLabels(u)||d.ticks,d.afterTickToLabelConversion(),d.ticks=a,r=0,i=a.length;r<i;++r)o=a[r],l=u[r],l?l.label=o:u.push(l={label:o,major:!1});
// Tick Rotation
// Fit
//
return d._ticks=u,d.beforeCalculateTickRotation(),d.calculateTickRotation(),d.afterCalculateTickRotation(),d.beforeFit(),d.fit(),d.afterFit(),d.afterUpdate(),d.minSize},afterUpdate:function(){s.callback(this.options.afterUpdate,[this])},
//
beforeSetDimensions:function(){s.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;
// Set the unconstrained dimension before label rotation
t.isHorizontal()?(
// Reset position before calculating rotation
t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,
// Reset position before calculating rotation
t.top=0,t.bottom=t.height),
// Reset padding
t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){s.callback(this.options.afterSetDimensions,[this])},
// Data limits
beforeDataLimits:function(){s.callback(this.options.beforeDataLimits,[this])},determineDataLimits:s.noop,afterDataLimits:function(){s.callback(this.options.afterDataLimits,[this])},
//
beforeBuildTicks:function(){s.callback(this.options.beforeBuildTicks,[this])},buildTicks:s.noop,afterBuildTicks:function(){s.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){s.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback,this)},afterTickToLabelConversion:function(){s.callback(this.options.afterTickToLabelConversion,[this])},
//
beforeCalculateTickRotation:function(){s.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,i=t.options.ticks,a=r(t._ticks),o=n(i);e.font=o.font;var u=i.minRotation||0;if(a.length&&t.options.display&&t.isHorizontal())
// Max label rotation can be set or default to 90 - also act as a loop counter
for(var l,d=s.longestText(e,o.font,a,t.longestTextCache),c=d,f=t.getPixelForTick(1)-t.getPixelForTick(0)-6;c>f&&u<i.maxRotation;){var h=s.toRadians(u);if(l=Math.cos(h),Math.sin(h)*d>t.maxHeight){
// go back one step
u--;break}u++,c=l*d}t.labelRotation=u},afterCalculateTickRotation:function(){s.callback(this.options.afterCalculateTickRotation,[this])},
//
beforeFit:function(){s.callback(this.options.beforeFit,[this])},fit:function(){var t=this,i=t.minSize={width:0,height:0},a=r(t._ticks),o=t.options,l=o.ticks,d=o.scaleLabel,c=o.gridLines,f=o.display,h=t.isHorizontal(),m=n(l),_=o.gridLines.tickMarkLength;
// Are we showing a title for the scale?
if(
// Width
// subtract the margins to line up with the chartArea if we are a full width scale
i.width=h?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:f&&c.drawTicks?_:0,
// height
i.height=h?f&&c.drawTicks?_:0:t.maxHeight,d.display&&f){var p=u(d),g=s.options.toPadding(d.padding),y=p+g.height;h?i.height+=y:i.width+=y}
// Don't bother fitting the ticks if we are not showing them
if(l.display&&f){var v=s.longestText(t.ctx,m.font,a,t.longestTextCache),M=s.numberOfLabelLines(a),b=.5*m.size,L=t.options.ticks.padding;if(h){
// A horizontal axis is more constrained by the height.
t.longestLabelWidth=v;var k=s.toRadians(t.labelRotation),w=Math.cos(k),Y=Math.sin(k),x=Y*v+m.size*M+b*(M-1)+b;// padding
i.height=Math.min(t.maxHeight,i.height+x+L),t.ctx.font=m.font;var D=e(t.ctx,a[0],m.font),S=e(t.ctx,a[a.length-1],m.font);
// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
// which means that the right padding is dominated by the font height
0!==t.labelRotation?(t.paddingLeft="bottom"===o.position?w*D+3:w*b+3,// add 3 px to move away from canvas edges
t.paddingRight="bottom"===o.position?w*b+3:w*S+3):(t.paddingLeft=D/2+3,// add 3 px to move away from canvas edges
t.paddingRight=S/2+3)}else
// A vertical axis is more constrained by the width. Labels are the
// dominant factor here, so get that length first and account for padding
l.mirror?v=0:
// use lineSpace for consistency with horizontal axis
// tickPadding is not implemented for horizontal
v+=L+b,i.width=Math.min(t.maxWidth,i.width+v),t.paddingTop=m.size/2,t.paddingBottom=m.size/2}t.handleMargins(),t.width=i.width,t.height=i.height},/**
		 * Handle margins and padding interactions
		 * @private
		 */
handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){s.callback(this.options.afterFit,[this])},
// Shared Methods
isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},
// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
getRightValue:function(t){
// Null and undefined values first
if(s.isNullOrUndef(t))return NaN;
// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
if("number"==typeof t&&!isFinite(t))return NaN;
// If it is in fact an object, dive in one more level
if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);
// Value is good, return it
return t},/**
		 * Used to get the value to display in the tooltip for the data at the given index
		 * @param index
		 * @param datasetIndex
		 */
getLabelForIndex:s.noop,/**
		 * Returns the location of the given data point. Value can either be an index or a numerical value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param value
		 * @param index
		 * @param datasetIndex
		 */
getPixelForValue:s.noop,/**
		 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param pixel
		 */
getValueForPixel:s.noop,/**
		 * Returns the location of the tick at the given index
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
getPixelForTick:function(t){var e=this,n=e.options.offset;if(e.isHorizontal()){var r=e.width-(e.paddingLeft+e.paddingRight),i=r/Math.max(e._ticks.length-(n?0:1),1),a=i*t+e.paddingLeft;n&&(a+=i/2);var o=e.left+Math.round(a);return o+=e.isFullWidth()?e.margins.left:0}var s=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(s/(e._ticks.length-1))},/**
		 * Utility for getting the pixel location of a percentage of scale
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),r=n*t+e.paddingLeft,i=e.left+Math.round(r);return i+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},/**
		 * Returns the pixel for the minimum chart value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this,e=t.min,n=t.max;return t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0},/**
		 * Returns a subset of ticks to be plotted to avoid overlapping labels.
		 * @private
		 */
_autoSkip:function(t){var e,n,r,i,a,o=this,u=o.isHorizontal(),l=o.options.ticks.minor,d=t.length,c=s.toRadians(o.labelRotation),f=Math.cos(c),h=o.longestLabelWidth*f,m=[];for(l.maxTicksLimit&&(a=l.maxTicksLimit),u&&(e=!1,(h+l.autoSkipPadding)*d>o.width-(o.paddingLeft+o.paddingRight)&&(e=1+Math.floor((h+l.autoSkipPadding)*d/(o.width-(o.paddingLeft+o.paddingRight)))),
// if they defined a max number of optionTicks,
// increase skipRatio until that number is met
a&&d>a&&(e=Math.max(e,Math.floor(d/a)))),n=0;n<d;n++)r=t[n],
// Since we always show the last tick,we need may need to hide the last shown one before
i=e>1&&n%e>0||n%e==0&&n+e>=d,i&&n!==d-1&&
// leave tick in place but make sure it's not displayed (#4635)
delete r.label,m.push(r);return m},
// Actually draw the scale on the canvas
// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
draw:function(t){var e=this,r=e.options;if(r.display){var o=e.ctx,l=a.global,d=r.ticks.minor,c=r.ticks.major||d,f=r.gridLines,h=r.scaleLabel,m=0!==e.labelRotation,_=e.isHorizontal(),p=d.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),g=s.valueOrDefault(d.fontColor,l.defaultFontColor),y=n(d),v=s.valueOrDefault(c.fontColor,l.defaultFontColor),M=n(c),b=f.drawTicks?f.tickMarkLength:0,L=s.valueOrDefault(h.fontColor,l.defaultFontColor),k=n(h),w=s.options.toPadding(h.padding),Y=s.toRadians(e.labelRotation),x=[],D=e.options.gridLines.lineWidth,S="right"===r.position?e.right:e.right-D-b,T="right"===r.position?e.right+b:e.right,j="bottom"===r.position?e.top+D:e.bottom-b-D,E="bottom"===r.position?e.top+D+b:e.bottom+D;if(s.each(p,function(n,a){
// autoskipper skipped this tick (#4635)
if(!s.isNullOrUndef(n.label)){var o,u,c,h,g=n.label;a===e.zeroLineIndex&&r.offset===f.offsetGridLines?(
// Draw the first index specially
o=f.zeroLineWidth,u=f.zeroLineColor,c=f.zeroLineBorderDash,h=f.zeroLineBorderDashOffset):(o=s.valueAtIndexOrDefault(f.lineWidth,a),u=s.valueAtIndexOrDefault(f.color,a),c=s.valueOrDefault(f.borderDash,l.borderDash),h=s.valueOrDefault(f.borderDashOffset,l.borderDashOffset));
// Common properties
var y,v,M,L,k,w,O,H,P,A,C="middle",F="middle",I=d.padding;if(_){var W=b+I;"bottom"===r.position?(
// bottom
F=m?"middle":"top",C=m?"right":"center",A=e.top+W):(
// top
F=m?"middle":"bottom",C=m?"left":"center",A=e.bottom-W);var N=i(e,a,f.offsetGridLines&&p.length>1);N<e.left&&(u="rgba(0,0,0,0)"),N+=s.aliasPixel(o),P=e.getPixelForTick(a)+d.labelOffset,// x values for optionTicks (need to consider offsetLabel option)
y=M=k=O=N,v=j,L=E,w=t.top,H=t.bottom+D}else{var z,R="left"===r.position;d.mirror?(C=R?"left":"right",z=I):(C=R?"right":"left",z=b+I),P=R?e.right-z:e.left+z;var B=i(e,a,f.offsetGridLines&&p.length>1);B<e.top&&(u="rgba(0,0,0,0)"),B+=s.aliasPixel(o),A=e.getPixelForTick(a)+d.labelOffset,y=S,M=T,k=t.left,O=t.right+D,v=L=w=H=B}x.push({tx1:y,ty1:v,tx2:M,ty2:L,x1:k,y1:w,x2:O,y2:H,labelX:P,labelY:A,glWidth:o,glColor:u,glBorderDash:c,glBorderDashOffset:h,rotation:-1*Y,label:g,major:n.major,textBaseline:F,textAlign:C})}}),
// Draw all of the tick labels, tick marks, and grid lines at the correct places
s.each(x,function(t){if(f.display&&(o.save(),o.lineWidth=t.glWidth,o.strokeStyle=t.glColor,o.setLineDash&&(o.setLineDash(t.glBorderDash),o.lineDashOffset=t.glBorderDashOffset),o.beginPath(),f.drawTicks&&(o.moveTo(t.tx1,t.ty1),o.lineTo(t.tx2,t.ty2)),f.drawOnChartArea&&(o.moveTo(t.x1,t.y1),o.lineTo(t.x2,t.y2)),o.stroke(),o.restore()),d.display){
// Make sure we draw text in the correct color and font
o.save(),o.translate(t.labelX,t.labelY),o.rotate(t.rotation),o.font=t.major?M.font:y.font,o.fillStyle=t.major?v:g,o.textBaseline=t.textBaseline,o.textAlign=t.textAlign;var n=t.label;if(s.isArray(n))for(var r=n.length,i=1.5*y.size,a=e.isHorizontal()?0:-i*(r-1)/2,u=0;u<r;++u)
// We just make sure the multiline element is a string here..
o.fillText(""+n[u],0,a),
// apply same lineSpacing as calculated @ L#320
a+=i;else o.fillText(n,0,0);o.restore()}}),h.display){
// Draw the scale label
var O,H,P=0,A=u(h)/2;if(_)O=e.left+(e.right-e.left)/2,// midpoint of the width
H="bottom"===r.position?e.bottom-A-w.bottom:e.top+A+w.top;else{var C="left"===r.position;O=C?e.left+A+w.top:e.right-A-w.top,H=e.top+(e.bottom-e.top)/2,P=C?-.5*Math.PI:.5*Math.PI}o.save(),o.translate(O,H),o.rotate(P),o.textAlign="center",o.textBaseline="middle",o.fillStyle=L,// render in correct colour
o.font=k.font,o.fillText(h.labelString,0,0),o.restore()}if(f.drawBorder){
// Draw the line at the edge of the axis
o.lineWidth=s.valueAtIndexOrDefault(f.lineWidth,0),o.strokeStyle=s.valueAtIndexOrDefault(f.color,0);var F=e.left,I=e.right+D,W=e.top,N=e.bottom+D,z=s.aliasPixel(o.lineWidth);_?(W=N="top"===r.position?e.bottom:e.top,W+=z,N+=z):(F=I="left"===r.position?e.right:e.left,F+=z,I+=z),o.beginPath(),o.moveTo(F,W),o.lineTo(I,N),o.stroke()}}}})}},/* 602 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(35),a=n(5);r._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{
// Args are: (tooltipItems, data)
beforeTitle:a.noop,title:function(t,e){
// Pick first xLabel for now
var n="",r=e.labels,i=r?r.length:0;if(t.length>0){var a=t[0];a.xLabel?n=a.xLabel:i>0&&a.index<i&&(n=r[a.index])}return n},afterTitle:a.noop,
// Args are: (tooltipItems, data)
beforeBody:a.noop,
// Args are: (tooltipItem, data)
beforeLabel:a.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+=t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),r=n.data[t.index],i=r._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:a.noop,
// Args are: (tooltipItems, data)
afterBody:a.noop,
// Args are: (tooltipItems, data)
beforeFooter:a.noop,footer:a.noop,afterFooter:a.noop}}}),t.exports=function(t){/**
 	 * Helper method to merge the opacity into a color
 	 */
function e(t,e){var n=a.color(t);return n.alpha(e*n.alpha()).rgbaString()}
// Helper to push or concat based on if the 2nd parameter is an array or not
function n(t,e){
// base = base.concat(toPush);
return e&&(a.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}
// Private helper to create a tooltip item model
// @param element : the chart element (point, arc, bar) to create the tooltip item for
// @return : new tooltip item
function o(t){var e=t._xScale,n=t._yScale||t._scale,r=t._index,i=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(r,i):"",yLabel:n?n.getLabelForIndex(r,i):"",index:r,datasetIndex:i,x:t._model.x,y:t._model.y}}/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */
function s(t){var e=r.global,n=a.valueOrDefault;return{
// Positioning
xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,
// Body
bodyFontColor:t.bodyFontColor,_bodyFontFamily:n(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:n(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:n(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,
// Title
titleFontColor:t.titleFontColor,_titleFontFamily:n(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:n(t.titleFontStyle,e.defaultFontStyle),titleFontSize:n(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,
// Footer
footerFontColor:t.footerFontColor,_footerFontFamily:n(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:n(t.footerFontStyle,e.defaultFontStyle),footerFontSize:n(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,
// Appearance
caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}/**
	 * Get the size of the tooltip
	 */
function u(t,e){var n=t._chart.ctx,r=2*e.yPadding,i=0,o=e.body,s=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);s+=e.beforeBody.length+e.afterBody.length;var u=e.title.length,l=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,f=e.footerFontSize;r+=u*d,// Title Lines
r+=u?(u-1)*e.titleSpacing:0,// Title Line Spacing
r+=u?e.titleMarginBottom:0,// Title's bottom Margin
r+=s*c,// Body Lines
r+=s?(s-1)*e.bodySpacing:0,// Body Line Spacing
r+=l?e.footerMarginTop:0,// Footer Margin
r+=l*f,// Footer Lines
r+=l?(l-1)*e.footerSpacing:0;// Footer Line Spacing
// Title width
var h=0,m=function(t){i=Math.max(i,n.measureText(t).width+h)};
// Body width
// Body lines may include some extra width due to the color box
// Reset back to 0
// Footer width
// Add padding
return n.font=a.fontString(d,e._titleFontStyle,e._titleFontFamily),a.each(e.title,m),n.font=a.fontString(c,e._bodyFontStyle,e._bodyFontFamily),a.each(e.beforeBody.concat(e.afterBody),m),h=e.displayColors?c+2:0,a.each(o,function(t){a.each(t.before,m),a.each(t.lines,m),a.each(t.after,m)}),h=0,n.font=a.fontString(f,e._footerFontStyle,e._footerFontFamily),a.each(e.footer,m),i+=2*e.xPadding,{width:i,height:r}}/**
	 * Helper to get the alignment of a tooltip given the size
	 */
function l(t,e){var n=t._model,r=t._chart,i=t._chart.chartArea,a="center",o="center";n.y<e.height?o="top":n.y>r.height-e.height&&(o="bottom");var s,u,l,d,c,f=(i.left+i.right)/2,h=(i.top+i.bottom)/2;"center"===o?(s=function(t){return t<=f},u=function(t){return t>f}):(s=function(t){return t<=e.width/2},u=function(t){return t>=r.width-e.width/2}),l=function(t){return t+e.width+n.caretSize+n.caretPadding>r.width},d=function(t){return t-e.width-n.caretSize-n.caretPadding<0},c=function(t){return t<=h?"top":"bottom"},s(n.x)?(a="left",
// Is tooltip too wide and goes over the right side of the chart.?
l(n.x)&&(a="center",o=c(n.y))):u(n.x)&&(a="right",
// Is tooltip too wide and goes outside left edge of canvas?
d(n.x)&&(a="center",o=c(n.y)));var m=t._options;return{xAlign:m.xAlign?m.xAlign:a,yAlign:m.yAlign?m.yAlign:o}}/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */
function d(t,e,n,r){
// Background Position
var i=t.x,a=t.y,o=t.caretSize,s=t.caretPadding,u=t.cornerRadius,l=n.xAlign,d=n.yAlign,c=o+s,f=u+s;return"right"===l?i-=e.width:"center"===l&&(i-=e.width/2,i+e.width>r.width&&(i=r.width-e.width),i<0&&(i=0)),"top"===d?a+=c:a-="bottom"===d?e.height+c:e.height/2,"center"===d?"left"===l?i+=c:"right"===l&&(i-=c):"left"===l?i-=f:"right"===l&&(i+=f),{x:i,y:a}}t.Tooltip=i.extend({initialize:function(){this._model=s(this._options),this._lastActive=[]},
// Get the title
// Args are: (tooltipItem, data)
getTitle:function(){var t=this,e=t._options,r=e.callbacks,i=r.beforeTitle.apply(t,arguments),a=r.title.apply(t,arguments),o=r.afterTitle.apply(t,arguments),s=[];return s=n(s,i),s=n(s,a),s=n(s,o)},
// Args are: (tooltipItem, data)
getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return a.isArray(t)?t:void 0!==t?[t]:[]},
// Args are: (tooltipItem, data)
getBody:function(t,e){var r=this,i=r._options.callbacks,o=[];return a.each(t,function(t){var a={before:[],lines:[],after:[]};n(a.before,i.beforeLabel.call(r,t,e)),n(a.lines,i.label.call(r,t,e)),n(a.after,i.afterLabel.call(r,t,e)),o.push(a)}),o},
// Args are: (tooltipItem, data)
getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return a.isArray(t)?t:void 0!==t?[t]:[]},
// Get the footer and beforeFooter and afterFooter lines
// Args are: (tooltipItem, data)
getFooter:function(){var t=this,e=t._options.callbacks,r=e.beforeFooter.apply(t,arguments),i=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),o=[];return o=n(o,r),o=n(o,i),o=n(o,a)},update:function(e){var n,r,i=this,c=i._options,f=i._model,h=i._model=s(c),m=i._active,_=i._data,p={xAlign:f.xAlign,yAlign:f.yAlign},g={x:f.x,y:f.y},y={width:f.width,height:f.height},v={x:f.caretX,y:f.caretY};if(m.length){h.opacity=1;var M=[],b=[];v=t.Tooltip.positioners[c.position].call(i,m,i._eventPosition);var L=[];for(n=0,r=m.length;n<r;++n)L.push(o(m[n]));
// If the user provided a filter function, use it to modify the tooltip items
c.filter&&(L=L.filter(function(t){return c.filter(t,_)})),
// If the user provided a sorting function, use it to modify the tooltip items
c.itemSort&&(L=L.sort(function(t,e){return c.itemSort(t,e,_)})),
// Determine colors for boxes
a.each(L,function(t){M.push(c.callbacks.labelColor.call(i,t,i._chart)),b.push(c.callbacks.labelTextColor.call(i,t,i._chart))}),
// Build the Text Lines
h.title=i.getTitle(L,_),h.beforeBody=i.getBeforeBody(L,_),h.body=i.getBody(L,_),h.afterBody=i.getAfterBody(L,_),h.footer=i.getFooter(L,_),
// Initial positioning and colors
h.x=Math.round(v.x),h.y=Math.round(v.y),h.caretPadding=c.caretPadding,h.labelColors=M,h.labelTextColors=b,
// data points
h.dataPoints=L,
// We need to determine alignment of the tooltip
y=u(this,h),p=l(this,y),
// Final Size and Position
g=d(h,y,p,i._chart)}else h.opacity=0;
// Point where the caret on the tooltip points to
return h.xAlign=p.xAlign,h.yAlign=p.yAlign,h.x=g.x,h.y=g.y,h.width=y.width,h.height=y.height,h.caretX=v.x,h.caretY=v.y,i._model=h,e&&c.custom&&c.custom.call(i,h),i},drawCaret:function(t,e){var n=this._chart.ctx,r=this._view,i=this.getCaretPosition(t,e,r);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)},getCaretPosition:function(t,e,n){var r,i,a,o,s,u,l=n.caretSize,d=n.cornerRadius,c=n.xAlign,f=n.yAlign,h=t.x,m=t.y,_=e.width,p=e.height;if("center"===f)s=m+p/2,"left"===c?(r=h,i=r-l,a=r,o=s+l,u=s-l):(r=h+_,i=r+l,a=r,o=s-l,u=s+l);else if("left"===c?(i=h+d+l,r=i-l,a=i+l):"right"===c?(i=h+_-d-l,r=i-l,a=i+l):(i=n.caretX,r=i-l,a=i+l),"top"===f)o=m,s=o-l,u=o;else{o=m+p,s=o+l,u=o;
// invert drawing order
var g=a;a=r,r=g}return{x1:r,x2:i,x3:a,y1:o,y2:s,y3:u}},drawTitle:function(t,n,r,i){var o=n.title;if(o.length){r.textAlign=n._titleAlign,r.textBaseline="top";var s=n.titleFontSize,u=n.titleSpacing;r.fillStyle=e(n.titleFontColor,i),r.font=a.fontString(s,n._titleFontStyle,n._titleFontFamily);var l,d;for(l=0,d=o.length;l<d;++l)r.fillText(o[l],t.x,t.y),t.y+=s+u,// Line Height and spacing
l+1===o.length&&(t.y+=n.titleMarginBottom-u)}},drawBody:function(t,n,r,i){var o=n.bodyFontSize,s=n.bodySpacing,u=n.body;r.textAlign=n._bodyAlign,r.textBaseline="top",r.font=a.fontString(o,n._bodyFontStyle,n._bodyFontFamily);
// Before Body
var l=0,d=function(e){r.fillText(e,t.x+l,t.y),t.y+=o+s};
// Before body lines
r.fillStyle=e(n.bodyFontColor,i),a.each(n.beforeBody,d);var c=n.displayColors;l=c?o+2:0,
// Draw body lines now
a.each(u,function(s,u){var l=e(n.labelTextColors[u],i);r.fillStyle=l,a.each(s.before,d),a.each(s.lines,function(a){
// Draw Legend-like boxes if needed
c&&(
// Fill a white rect so that colours merge nicely if the opacity is < 1
r.fillStyle=e(n.legendColorBackground,i),r.fillRect(t.x,t.y,o,o),
// Border
r.lineWidth=1,r.strokeStyle=e(n.labelColors[u].borderColor,i),r.strokeRect(t.x,t.y,o,o),
// Inner square
r.fillStyle=e(n.labelColors[u].backgroundColor,i),r.fillRect(t.x+1,t.y+1,o-2,o-2),r.fillStyle=l),d(a)}),a.each(s.after,d)}),
// Reset back to 0 for after body
l=0,
// After body lines
a.each(n.afterBody,d),t.y-=s},drawFooter:function(t,n,r,i){var o=n.footer;o.length&&(t.y+=n.footerMarginTop,r.textAlign=n._footerAlign,r.textBaseline="top",r.fillStyle=e(n.footerFontColor,i),r.font=a.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),a.each(o,function(e){r.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,n,r,i,a){r.fillStyle=e(n.backgroundColor,a),r.strokeStyle=e(n.borderColor,a),r.lineWidth=n.borderWidth;var o=n.xAlign,s=n.yAlign,u=t.x,l=t.y,d=i.width,c=i.height,f=n.cornerRadius;r.beginPath(),r.moveTo(u+f,l),"top"===s&&this.drawCaret(t,i),r.lineTo(u+d-f,l),r.quadraticCurveTo(u+d,l,u+d,l+f),"center"===s&&"right"===o&&this.drawCaret(t,i),r.lineTo(u+d,l+c-f),r.quadraticCurveTo(u+d,l+c,u+d-f,l+c),"bottom"===s&&this.drawCaret(t,i),r.lineTo(u+f,l+c),r.quadraticCurveTo(u,l+c,u,l+c-f),"center"===s&&"left"===o&&this.drawCaret(t,i),r.lineTo(u,l+f),r.quadraticCurveTo(u,l,u+f,l),r.closePath(),r.fill(),n.borderWidth>0&&r.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},r={x:e.x,y:e.y},i=Math.abs(e.opacity<.001)?0:e.opacity,a=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&a&&(
// Draw Background
this.drawBackground(r,e,t,n,i),
// Draw Title, Body, and Footer
r.x+=e.xPadding,r.y+=e.yPadding,
// Titles
this.drawTitle(r,e,t,i),
// Body
this.drawBody(r,e,t,i),
// Footer
this.drawFooter(r,e,t,i))}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */
handleEvent:function(t){var e=this,n=e._options,r=!1;
// Find Active Elements for tooltips
// Remember Last Actives
// Only handle target event on tooltip change
return e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chart.getElementsAtEventForMode(t,n.mode,n),r=!a.arrayEquals(e._active,e._lastActive),r&&(e._lastActive=e._active,(n.enabled||n.custom)&&(e._eventPosition={x:t.x,y:t.y},e.update(!0),e.pivot())),r}}),/**
	 * @namespace Chart.Tooltip.positioners
	 */
t.Tooltip.positioners={/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */
average:function(t){if(!t.length)return!1;var e,n,r=0,i=0,a=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();r+=s.x,i+=s.y,++a}}return{x:Math.round(r/a),y:Math.round(i/a)}},/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */
nearest:function(t,e){var n,r,i,o=e.x,s=e.y,u=Number.POSITIVE_INFINITY;for(n=0,r=t.length;n<r;++n){var l=t[n];if(l&&l.hasValue()){var d=l.getCenterPoint(),c=a.distanceBetweenPoints(e,d);c<u&&(u=c,i=l)}}if(i){var f=i.tooltipPosition();o=f.x,s=f.y}return{x:o,y:s}}}}},/* 603 */
/***/
function(t,e,n){"use strict";/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {Array<Number>} array of tick values
 */
function r(t,e){var n,r=[];if(t.stepSize&&t.stepSize>0)n=t.stepSize;else{var a=i.niceNum(e.max-e.min,!1);n=i.niceNum(a/(t.maxTicks-1),!0)}var o=Math.floor(e.min/n)*n,s=Math.ceil(e.max/n)*n;
// If min, max and stepSize is set and they make an evenly spaced scale use it.
t.min&&t.max&&t.stepSize&&i.almostWhole((t.max-t.min)/t.stepSize,n/1e3)&&(o=t.min,s=t.max);var u=(s-o)/n;
// If very close to our rounded value, use it.
u=i.almostEquals(u,Math.round(u),n/1e3)?Math.round(u):Math.ceil(u);var l=1;n<1&&(l=Math.pow(10,n.toString().length-2),o=Math.round(o*l)/l,s=Math.round(s*l)/l),r.push(void 0!==t.min?t.min:o);for(var d=1;d<u;++d)r.push(Math.round((o+d*n)*l)/l);return r.push(void 0!==t.max?t.max:s),r}var i=n(5);t.exports=function(t){var e=i.noop;t.LinearScaleBase=t.Scale.extend({getRightValue:function(e){return"string"==typeof e?+e:t.Scale.prototype.getRightValue.call(this,e)},handleTickRangeOptions:function(){var t=this,e=t.options,n=e.ticks;
// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
// do nothing since that would make the chart weird. If the user really wants a weird chart
// axis, they can manually override it
if(n.beginAtZero){var r=i.sign(t.min),a=i.sign(t.max);r<0&&a<0?
// move the top up to 0
t.max=0:r>0&&a>0&&(
// move the bottom down to 0
t.min=0)}var o=void 0!==n.min||void 0!==n.suggestedMin,s=void 0!==n.max||void 0!==n.suggestedMax;void 0!==n.min?t.min=n.min:void 0!==n.suggestedMin&&(null===t.min?t.min=n.suggestedMin:t.min=Math.min(t.min,n.suggestedMin)),void 0!==n.max?t.max=n.max:void 0!==n.suggestedMax&&(null===t.max?t.max=n.suggestedMax:t.max=Math.max(t.max,n.suggestedMax)),o!==s&&t.min>=t.max&&(o?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,n.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options,n=e.ticks,a=t.getTickLimit();a=Math.max(2,a);var o={maxTicks:a,min:n.min,max:n.max,stepSize:i.valueOrDefault(n.fixedStepSize,n.stepSize)},s=t.ticks=r(o,t);t.handleDirectionalChanges(),
// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
t.max=i.max(s),t.min=i.min(s),n.reverse?(s.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},/* 604 */
/***/
function(t,e,n){"use strict";t.exports=function(t){
// Default config for a category scale
var e={position:"bottom"},n=t.Scale.extend({/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/
getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,e=t.getLabels();t.minIndex=0,t.maxIndex=e.length-1;var n;void 0!==t.options.ticks.min&&(
// user specified min value
n=e.indexOf(t.options.ticks.min),t.minIndex=-1!==n?n:t.minIndex),void 0!==t.options.ticks.max&&(
// user specified max value
n=e.indexOf(t.options.ticks.max),t.maxIndex=-1!==n?n:t.maxIndex),t.min=e[t.minIndex],t.max=e[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();
// If we are viewing some subset of labels, slice the original array
t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,r=n.chart.data,i=n.isHorizontal();return r.yLabels&&!i?n.getRightValue(r.datasets[e].data[t]):n.ticks[t-n.minIndex]},
// Used to get data value locations.  Value can either be an index or a numerical value
getPixelForValue:function(t,e){var n,r=this,i=r.options.offset,a=Math.max(r.maxIndex+1-r.minIndex-(i?0:1),1);if(void 0!==t&&null!==t&&(n=r.isHorizontal()?t.x:t.y),void 0!==n||void 0!==t&&isNaN(e)){var o=r.getLabels();t=n||t;var s=o.indexOf(t);e=-1!==s?s:e}if(r.isHorizontal()){var u=r.width/a,l=u*(e-r.minIndex);return i&&(l+=u/2),r.left+Math.round(l)}var d=r.height/a,c=d*(e-r.minIndex);return i&&(c+=d/2),r.top+Math.round(c)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,n=e.options.offset,r=Math.max(e._ticks.length-(n?0:1),1),i=e.isHorizontal(),a=(i?e.width:e.height)/r;return t-=i?e.left:e.top,n&&(t-=a/2),(t<=0?0:Math.round(t/a))+e.minIndex},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",n,e)}},/* 605 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(5),a=n(87);t.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.linear}},n=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===e.id:t.yAxisID===e.id}var e=this,n=e.options,r=e.chart,a=r.data,o=a.datasets,s=e.isHorizontal();
// First Calculate the range
e.min=null,e.max=null;var u=n.stacked;if(void 0===u&&i.each(o,function(e,n){if(!u){var i=r.getDatasetMeta(n);r.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(u=!0)}}),n.stacked||u){var l={};i.each(o,function(a,o){var s=r.getDatasetMeta(o),u=[s.type,
// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
void 0===n.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});
// Store these per type
var d=l[u].positiveValues,c=l[u].negativeValues;r.isDatasetVisible(o)&&t(s)&&i.each(a.data,function(t,r){var i=+e.getRightValue(t);isNaN(i)||s.data[r].hidden||(d[r]=d[r]||0,c[r]=c[r]||0,n.relativePoints?d[r]=100:i<0?c[r]+=i:d[r]+=i)})}),i.each(l,function(t){var n=t.positiveValues.concat(t.negativeValues),r=i.min(n),a=i.max(n);e.min=null===e.min?r:Math.min(e.min,r),e.max=null===e.max?a:Math.max(e.max,a)})}else i.each(o,function(n,a){var o=r.getDatasetMeta(a);r.isDatasetVisible(a)&&t(o)&&i.each(n.data,function(t,n){var r=+e.getRightValue(t);isNaN(r)||o.data[n].hidden||(null===e.min?e.min=r:r<e.min&&(e.min=r),null===e.max?e.max=r:r>e.max&&(e.max=r))})});e.min=isFinite(e.min)&&!isNaN(e.min)?e.min:0,e.max=isFinite(e.max)&&!isNaN(e.max)?e.max:1,
// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this,n=e.options.ticks;if(e.isHorizontal())t=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(e.width/50));else{
// The factor of 2 used to scale the font size has been experimentally determined.
var a=i.valueOrDefault(n.fontSize,r.global.defaultFontSize);t=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(e.height/(2*a)))}return t},
// Called after the ticks are built. We need
handleDirectionalChanges:function(){this.isHorizontal()||
// We are in a vertical orientation. The top value is the highest. So reverse the array
this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},
// Utils
getPixelForValue:function(t){
// This must be called after fit has been run so that
// this.left, this.top, this.right, and this.bottom have been defined
var e=this,n=e.start,r=+e.getRightValue(t),i=e.end-n;return e.isHorizontal()?e.left+e.width/i*(r-n):e.bottom-e.height/i*(r-n)},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),r=n?e.width:e.height,i=(n?t-e.left:e.bottom-t)/r;return e.start+(e.end-e.start)*i},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",n,e)}},/* 606 */
/***/
function(t,e,n){"use strict";/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {Array<Number>} array of tick values
 */
function r(t,e){var n,r,a=[],o=i.valueOrDefault,s=o(t.min,Math.pow(10,Math.floor(i.log10(e.min)))),u=Math.floor(i.log10(e.max)),l=Math.ceil(e.max/Math.pow(10,u));0===s?(n=Math.floor(i.log10(e.minNotZero)),r=Math.floor(e.minNotZero/Math.pow(10,n)),a.push(s),s=r*Math.pow(10,n)):(n=Math.floor(i.log10(s)),r=Math.floor(s/Math.pow(10,n)));var d=n<0?Math.pow(10,Math.abs(n)):1;do{a.push(s),++r,10===r&&(r=1,++n,d=n>=0?1:d),s=Math.round(r*Math.pow(10,n)*d)/d}while(n<u||n===u&&r<l);var c=o(t.max,s);return a.push(c),a}var i=n(5),a=n(87);t.exports=function(t){var e={position:"left",
// label settings
ticks:{callback:a.formatters.logarithmic}},n=t.Scale.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===e.id:t.yAxisID===e.id}var e=this,n=e.options,r=e.chart,a=r.data,o=a.datasets,s=e.isHorizontal();
// Calculate Range
e.min=null,e.max=null,e.minNotZero=null;var u=n.stacked;if(void 0===u&&i.each(o,function(e,n){if(!u){var i=r.getDatasetMeta(n);r.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(u=!0)}}),n.stacked||u){var l={};i.each(o,function(a,o){var s=r.getDatasetMeta(o),u=[s.type,
// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
void 0===n.stacked&&void 0===s.stack?o:"",s.stack].join(".");r.isDatasetVisible(o)&&t(s)&&(void 0===l[u]&&(l[u]=[]),i.each(a.data,function(t,n){var r=l[u],i=+e.getRightValue(t);
// invalid, hidden and negative values are ignored
isNaN(i)||s.data[n].hidden||i<0||(r[n]=r[n]||0,r[n]+=i)}))}),i.each(l,function(t){if(t.length>0){var n=i.min(t),r=i.max(t);e.min=null===e.min?n:Math.min(e.min,n),e.max=null===e.max?r:Math.max(e.max,r)}})}else i.each(o,function(n,a){var o=r.getDatasetMeta(a);r.isDatasetVisible(a)&&t(o)&&i.each(n.data,function(t,n){var r=+e.getRightValue(t);
// invalid, hidden and negative values are ignored
isNaN(r)||o.data[n].hidden||r<0||(null===e.min?e.min=r:r<e.min&&(e.min=r),null===e.max?e.max=r:r>e.max&&(e.max=r),0!==r&&(null===e.minNotZero||r<e.minNotZero)&&(e.minNotZero=r))})});
// Common base implementation to handle ticks.min, ticks.max
this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options,n=e.ticks,r=i.valueOrDefault;t.min=r(n.min,t.min),t.max=r(n.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(i.log10(t.min))-1),t.max=Math.pow(10,Math.floor(i.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(i.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(i.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(i.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options,n=e.ticks,a=!t.isHorizontal(),o={min:n.min,max:n.max},s=t.ticks=r(o,t);
// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
t.max=i.max(s),t.min=i.min(s),n.reverse?(a=!a,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),a&&s.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},
// Get the correct tooltip label
getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},/**
		 * Returns the value of the first tick.
		 * @param {Number} value - The minimum not zero value.
		 * @return {Number} The first tick value.
		 * @private
		 */
_getFirstTickValue:function(t){var e=Math.floor(i.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var n,r,a,o,s,u=this,l=u.options.ticks.reverse,d=i.log10,c=u._getFirstTickValue(u.minNotZero),f=0;// invert, since the upper-left corner of the canvas is at pixel (0, 0)
// include zero tick
return e=+u.getRightValue(e),l?(a=u.end,o=u.start,s=-1):(a=u.start,o=u.end,s=1),u.isHorizontal()?(n=u.width,r=l?u.right:u.left):(n=u.height,s*=-1,r=l?u.top:u.bottom),e!==a&&(0===a&&(f=i.getValueOrDefault(u.options.ticks.fontSize,t.defaults.global.defaultFontSize),n-=f,a=c),0!==e&&(f+=n/(d(o)-d(a))*(d(e)-d(a))),r+=s*f),r},getValueForPixel:function(e){var n,r,a,o,s=this,u=s.options.ticks.reverse,l=i.log10,d=s._getFirstTickValue(s.minNotZero);if(u?(r=s.end,a=s.start):(r=s.start,a=s.end),s.isHorizontal()?(n=s.width,o=u?s.right-e:e-s.left):(n=s.height,o=u?e-s.top:s.bottom-e),o!==r){if(0===r){// include zero tick
var c=i.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize);o-=c,n-=c,r=d}o*=l(a)-l(r),o/=n,o=Math.pow(10,l(r)+o)}return o}});t.scaleService.registerScaleType("logarithmic",n,e)}},/* 607 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(5),a=n(87);t.exports=function(t){function e(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function n(t){var e=t.options.pointLabels,n=i.valueOrDefault(e.fontSize,p.defaultFontSize),r=i.valueOrDefault(e.fontStyle,p.defaultFontStyle),a=i.valueOrDefault(e.fontFamily,p.defaultFontFamily);return{size:n,style:r,family:a,font:i.fontString(n,r,a)}}function o(t,e,n){return i.isArray(n)?{w:i.longestText(t,t.font,n),h:n.length*e+1.5*(n.length-1)*e}:{w:t.measureText(n).width,h:e}}function s(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n-5,end:e}:{start:e,end:e+n+5}}/**
	 * Helper function to fit a radial linear scale with point labels
	 */
function u(t){/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */
var r,a,u,l=n(t),d=Math.min(t.height/2,t.width/2),c={r:t.width,l:0,t:t.height,b:0},f={};t.ctx.font=l.font,t._pointLabelSizes=[];var h=e(t);for(r=0;r<h;r++){u=t.getPointPosition(r,d),a=o(t.ctx,l.size,t.pointLabels[r]||""),t._pointLabelSizes[r]=a;
// Add quarter circle to make degree 0 mean top of circle
var m=t.getIndexAngle(r),_=i.toDegrees(m)%360,p=s(_,u.x,a.w,0,180),g=s(_,u.y,a.h,90,270);p.start<c.l&&(c.l=p.start,f.l=m),p.end>c.r&&(c.r=p.end,f.r=m),g.start<c.t&&(c.t=g.start,f.t=m),g.end>c.b&&(c.b=g.end,f.b=m)}t.setReductions(d,c,f)}/**
	 * Helper function to fit a radial linear scale with no point labels
	 */
function l(t){var e=Math.min(t.height/2,t.width/2);t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0)}function d(t){return 0===t||180===t?"center":t<180?"left":"right"}function c(t,e,n,r){if(i.isArray(e))for(var a=n.y,o=1.5*r,s=0;s<e.length;++s)t.fillText(e[s],n.x,a),a+=o;else t.fillText(e,n.x,n.y)}function f(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function h(t){var r=t.ctx,a=t.options,o=a.angleLines,s=a.pointLabels;r.lineWidth=o.lineWidth,r.strokeStyle=o.color;var u=t.getDistanceFromCenterForValue(a.ticks.reverse?t.min:t.max),l=n(t);r.textBaseline="top";for(var h=e(t)-1;h>=0;h--){if(o.display){var m=t.getPointPosition(h,u);r.beginPath(),r.moveTo(t.xCenter,t.yCenter),r.lineTo(m.x,m.y),r.stroke(),r.closePath()}if(s.display){
// Extra 3px out for some label spacing
var _=t.getPointPosition(h,u+5),g=i.valueAtIndexOrDefault(s.fontColor,h,p.defaultFontColor);r.font=l.font,r.fillStyle=g;var y=t.getIndexAngle(h),v=i.toDegrees(y);r.textAlign=d(v),f(v,t._pointLabelSizes[h],_),c(r,t.pointLabels[h]||"",_,l.size)}}}function m(t,n,r,a){var o=t.ctx;if(o.strokeStyle=i.valueAtIndexOrDefault(n.color,a-1),o.lineWidth=i.valueAtIndexOrDefault(n.lineWidth,a-1),t.options.gridLines.circular)
// Draw circular arcs between the points
o.beginPath(),o.arc(t.xCenter,t.yCenter,r,0,2*Math.PI),o.closePath(),o.stroke();else{
// Draw straight lines connecting each index
var s=e(t);if(0===s)return;o.beginPath();var u=t.getPointPosition(0,r);o.moveTo(u.x,u.y);for(var l=1;l<s;l++)u=t.getPointPosition(l,r),o.lineTo(u.x,u.y);o.closePath(),o.stroke()}}function _(t){return i.isNumber(t)?t:0}var p=r.global,g={display:!0,
// Boolean - Whether to animate scaling the chart from the centre
animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},
// label settings
ticks:{
// Boolean - Show a backdrop to the scale label
showLabelBackdrop:!0,
// String - The colour of the label backdrop
backdropColor:"rgba(255,255,255,0.75)",
// Number - The backdrop padding above & below the label in pixels
backdropPaddingY:2,
// Number - The backdrop padding to the side of the label in pixels
backdropPaddingX:2,callback:a.formatters.linear},pointLabels:{
// Boolean - if true, show point labels
display:!0,
// Number - Point label font size in pixels
fontSize:10,
// Function - Used to convert point labels
callback:function(t){return t}}},y=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,n=e.ticks;
// Set the unconstrained dimension before label rotation
t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var r=i.min([t.height,t.width]),a=i.valueOrDefault(n.fontSize,p.defaultFontSize);t.drawingArea=e.display?r/2-(a/2+n.backdropPaddingY):r/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;i.each(e.data.datasets,function(a,o){if(e.isDatasetVisible(o)){var s=e.getDatasetMeta(o);i.each(a.data,function(e,i){var a=+t.getRightValue(e);isNaN(a)||s.data[i].hidden||(n=Math.min(a,n),r=Math.max(a,r))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=r===Number.NEGATIVE_INFINITY?0:r,
// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=i.valueOrDefault(t.fontSize,p.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),
// Point labels
e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){this.options.pointLabels.display?u(this):l(this)},/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */
setReductions:function(t,e,n){var r=this,i=e.l/Math.sin(n.l),a=Math.max(e.r-r.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-r.height,0)/Math.cos(n.b);i=_(i),a=_(a),o=_(o),s=_(s),r.drawingArea=Math.min(Math.round(t-(i+a)/2),Math.round(t-(o+s)/2)),r.setCenterPoint(i,a,o,s)},setCenterPoint:function(t,e,n,r){var i=this,a=i.width-e-i.drawingArea,o=t+i.drawingArea,s=n+i.drawingArea,u=i.height-r-i.drawingArea;i.xCenter=Math.round((o+a)/2+i.left),i.yCenter=Math.round((s+u)/2+i.top)},getIndexAngle:function(t){
// Start from the top instead of right, so remove a quarter of the circle
return t*(2*Math.PI/e(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;
// Take into account half font size + the yPadding of the top value
var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,r=n.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(r)*e)+n.xCenter,y:Math.round(Math.sin(r)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},draw:function(){var t=this,e=t.options,n=e.gridLines,r=e.ticks,a=i.valueOrDefault;if(e.display){var o=t.ctx,s=this.getIndexAngle(0),u=a(r.fontSize,p.defaultFontSize),l=a(r.fontStyle,p.defaultFontStyle),d=a(r.fontFamily,p.defaultFontFamily),c=i.fontString(u,l,d);i.each(t.ticks,function(e,i){
// Don't draw a centre value (if it is minimum)
if(i>0||r.reverse){var l=t.getDistanceFromCenterForValue(t.ticksAsNumbers[i]);if(
// Draw circular lines around the scale
n.display&&0!==i&&m(t,n,l,i),r.display){var d=a(r.fontColor,p.defaultFontColor);if(o.font=c,o.save(),o.translate(t.xCenter,t.yCenter),o.rotate(s),r.showLabelBackdrop){var f=o.measureText(e).width;o.fillStyle=r.backdropColor,o.fillRect(-f/2-r.backdropPaddingX,-l-u/2-r.backdropPaddingY,f+2*r.backdropPaddingX,u+2*r.backdropPaddingY)}o.textAlign="center",o.textBaseline="middle",o.fillStyle=d,o.fillText(e,0,-l),o.restore()}}}),(e.angleLines.display||e.pointLabels.display)&&h(t)}}});t.scaleService.registerScaleType("radialLinear",y,g)}},/* 608 */
/***/
function(t,e,n){"use strict";function r(t,e){return t-e}function i(t){var e,n,r,i={},a=[];for(e=0,n=t.length;e<n;++e)r=t[e],i[r]||(i[r]=!0,a.push(r));return a}/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function a(t,e,n,r){if("linear"===r||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var i,a,o,s,u,l=[],d=[e];for(i=0,a=t.length;i<a;++i)(s=t[i])>e&&s<n&&d.push(s);for(d.push(n),i=0,a=d.length;i<a;++i)u=d[i+1],o=d[i-1],s=d[i],
// only add points that breaks the scale linearity
void 0!==o&&void 0!==u&&Math.round((u+o)/2)===s||l.push({time:s,pos:i/(a-1)});return l}
// @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function o(t,e,n){for(var r,i,a,o=0,s=t.length-1;o>=0&&o<=s;){if(r=o+s>>1,i=t[r-1]||null,a=t[r],!i)
// given value is outside table (before first item)
return{lo:null,hi:a};if(a[e]<n)o=r+1;else{if(!(i[e]>n))return{lo:i,hi:a};s=r-1}}
// given value is outside table (after last item)
return{lo:a,hi:null}}/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function s(t,e,n,r){var i=o(t,e,n),a=i.lo?i.hi?i.lo:t[t.length-2]:t[0],s=i.lo?i.hi?i.hi:t[t.length-1]:t[1],u=s[e]-a[e],l=u?(n-a[e])/u:0,d=(s[r]-a[r])*l;return a[r]+d}/**
 * Convert the given value to a moment object using the given time options.
 * @see http://momentjs.com/docs/#/parsing/
 */
function u(t,e){var n=e.parser,r=e.parser||e.format;
// Labels are in an incompatible moment format and no `parser` has been provided.
// The user might still use the deprecated `format` option to convert his inputs.
return"function"==typeof n?n(t):"string"==typeof t&&"string"==typeof r?y(t,r):(t instanceof y||(t=y(t)),t.isValid()?t:"function"==typeof r?r(t):t)}function l(t,e){if(M.isNullOrUndef(t))return null;var n=e.options.time,r=u(e.getRightValue(t),n);return r.isValid()?(n.round&&r.startOf(n.round),r.valueOf()):null}/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */
function d(t,e,n,r){var i,a,o,s=e-t,u=k[n],l=u.size,d=u.steps;if(!d)return Math.ceil(s/(r*l));for(i=0,a=d.length;i<a&&(o=d[i],!(Math.ceil(s/(l*o))<=r));++i);return o}/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function c(t,e,n,r){var i,a,o,s=w.length;for(i=w.indexOf(t);i<s-1;++i)if(a=k[w[i]],o=a.steps?a.steps[a.steps.length-1]:L,a.common&&Math.ceil((n-e)/(o*a.size))<=r)return w[i];return w[s-1]}/**
 * Figures out what unit to format a set of ticks with
 */
function f(t,e,n,r){var i,a,o=y.duration(y(r).diff(y(n))),s=w.length;for(i=s-1;i>=w.indexOf(e);i--)if(a=w[i],k[a].common&&o.as(a)>=t.length)return a;return w[e?w.indexOf(e):0]}function h(t){for(var e=w.indexOf(t)+1,n=w.length;e<n;++e)if(k[w[e]].common)return w[e]}/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function m(t,e,n,r){var i,a=r.time,o=a.unit||c(a.minUnit,t,e,n),s=h(o),u=M.valueOrDefault(a.stepSize,a.unitStepSize),l="week"===o&&a.isoWeekday,f=r.ticks.major.enabled,m=k[o],_=y(t),p=y(e),g=[];for(u||(u=d(t,e,o,n)),
// For 'week' unit, handle the first day of week option
l&&(_=_.isoWeekday(l),p=p.isoWeekday(l)),
// Align first/last ticks on unit
_=_.startOf(l?"day":o),p=p.startOf(l?"day":o),
// Make sure that the last tick include max
p<e&&p.add(1,o),i=y(_),f&&s&&!l&&!a.round&&(
// Align the first tick on the previous `minor` unit aligned on the `major` unit:
// we first aligned time on the previous `major` unit then add the number of full
// stepSize there is between first and the previous major time.
i.startOf(s),i.add(~~((_-i)/(m.size*u))*u,o));i<p;i.add(u,o))g.push(+i);return g.push(+i),g}/**
 * Returns the right and left offsets from edges in the form of {left, right}.
 * Offsets are added when the `offset` option is true.
 */
function _(t,e,n,r,i){var a,o,u=0,l=0;return i.offset&&e.length&&(i.time.min||(a=e.length>1?e[1]:r,o=e[0],u=(s(t,"time",a,"pos")-s(t,"time",o,"pos"))/2),i.time.max||(a=e[e.length-1],o=e.length>1?e[e.length-2]:n,l=(s(t,"time",a,"pos")-s(t,"time",o,"pos"))/2)),{left:u,right:l}}function p(t,e){var n,r,i,a,o=[];for(n=0,r=t.length;n<r;++n)i=t[n],a=!!e&&i===+y(i).startOf(e),o.push({value:i,major:a});return o}function g(t,e){var n,r,i,a=t.length;
// find the label with the most parts (milliseconds, minutes, etc.)
// format all labels with the same level of detail as the most specific label
for(n=0;n<a;n++){if(r=u(t[n],e),0!==r.millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===r.second()&&0===r.minute()&&0===r.hour()||(i=!0)}return i?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}/* global window: false */
var y=n(1);y="function"==typeof y?y:window.moment;var v=n(9),M=n(5),b=Number.MIN_SAFE_INTEGER||-9007199254740991,L=Number.MAX_SAFE_INTEGER||9007199254740991,k={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},w=Object.keys(k);t.exports=function(t){var e={position:"bottom",/**
		 * Data distribution along the scale:
		 * - 'linear': data are spread according to their time (distances can vary),
		 * - 'series': data are spread at the same distance from each other.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
distribution:"linear",/**
		 * Scale boundary strategy (bypassed by min/max time options)
		 * - `data`: make sure data are fully visible, ticks outside are removed
		 * - `ticks`: make sure ticks are fully visible, data outside are truncated
		 * @see https://github.com/chartjs/Chart.js/pull/4556
		 * @since 2.7.0
		 */
bounds:"data",time:{parser:!1,// false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
format:!1,// DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
unit:!1,// false == automatic or override with week, month, year, etc.
round:!1,// none, or override with week, month, year, etc.
displayFormat:!1,// DEPRECATED
isoWeekday:!1,// override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
minUnit:"millisecond",
// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
displayFormats:{millisecond:"h:mm:ss.SSS a",// 11:20:01.123 AM,
second:"h:mm:ss a",// 11:20:01 AM
minute:"h:mm a",// 11:20 AM
hour:"hA",// 5PM
day:"MMM D",// Sep 4
week:"ll",// Week 46, or maybe "[W]WW - YYYY" ?
month:"MMM YYYY",// Sept 2015
quarter:"[Q]Q - YYYY",// Q3
year:"YYYY"}},ticks:{autoSkip:!1,/**
			 * Ticks generation input values:
			 * - 'auto': generates "optimal" ticks based on scale size and time options.
			 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
			 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			 * @see https://github.com/chartjs/Chart.js/pull/4507
			 * @since 2.7.0
			 */
source:"auto",major:{enabled:!1}}},n=t.Scale.extend({initialize:function(){if(!y)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),t.Scale.prototype.initialize.call(this)},update:function(){var e=this,n=e.options;
// DEPRECATIONS: output a message only one time per update
return n.time&&n.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),t.Scale.prototype.update.apply(e,arguments)},/**
		 * Allows data to be referenced via 't' attribute
		 */
getRightValue:function(e){return e&&void 0!==e.t&&(e=e.t),t.Scale.prototype.getRightValue.call(this,e)},determineDataLimits:function(){var t,e,n,a,o,s,u=this,d=u.chart,c=u.options.time,f=c.unit||"day",h=L,m=b,_=[],p=[],g=[];
// Convert labels to timestamps
for(t=0,n=d.data.labels.length;t<n;++t)g.push(l(d.data.labels[t],u));
// Convert data to timestamps
for(t=0,n=(d.data.datasets||[]).length;t<n;++t)if(d.isDatasetVisible(t))
// Let's consider that all data have the same format.
if(o=d.data.datasets[t].data,M.isObject(o[0]))for(p[t]=[],e=0,a=o.length;e<a;++e)s=l(o[e],u),_.push(s),p[t][e]=s;else _.push.apply(_,g),p[t]=g.slice(0);else p[t]=[];g.length&&(
// Sort labels **after** data have been converted
g=i(g).sort(r),h=Math.min(h,g[0]),m=Math.max(m,g[g.length-1])),_.length&&(_=i(_).sort(r),h=Math.min(h,_[0]),m=Math.max(m,_[_.length-1])),h=l(c.min,u)||h,m=l(c.max,u)||m,
// In case there is no valid min/max, set limits based on unit time option
h=h===L?+y().startOf(f):h,m=m===b?+y().endOf(f)+1:m,
// Make sure that max is strictly higher than min (required by the lookup table)
u.min=Math.min(h,m),u.max=Math.max(h+1,m),
// PRIVATE
u._horizontal=u.isHorizontal(),u._table=[],u._timestamps={data:_,datasets:p,labels:g}},buildTicks:function(){var t,e,n,r=this,i=r.min,o=r.max,s=r.options,u=s.time,d=[],c=[];switch(s.ticks.source){case"data":d=r._timestamps.data;break;case"labels":d=r._timestamps.labels;break;case"auto":default:d=m(i,o,r.getLabelCapacity(i),s)}
// Remove ticks outside the min/max range
for("ticks"===s.bounds&&d.length&&(i=d[0],o=d[d.length-1]),
// Enforce limits with user min/max options
i=l(u.min,r)||i,o=l(u.max,r)||o,t=0,e=d.length;t<e;++t)(n=d[t])>=i&&n<=o&&c.push(n);
// PRIVATE
return r.min=i,r.max=o,r._unit=u.unit||f(c,u.minUnit,r.min,r.max),r._majorUnit=h(r._unit),r._table=a(r._timestamps.data,i,o,s.distribution),r._offsets=_(r._table,c,i,o,s),r._labelFormat=g(r._timestamps.data,u),p(c,r._majorUnit)},getLabelForIndex:function(t,e){var n=this,r=n.chart.data,i=n.options.time,a=r.labels&&t<r.labels.length?r.labels[t]:"",o=r.datasets[e].data[t];return M.isObject(o)&&(a=n.getRightValue(o)),i.tooltipFormat?u(a,i).format(i.tooltipFormat):"string"==typeof a?a:u(a,i).format(n._labelFormat)},/**
		 * Function to format an individual tick mark
		 * @private
		 */
tickFormatFunction:function(t,e,n,r){var i=this,a=i.options,o=t.valueOf(),s=a.time.displayFormats,u=s[i._unit],l=i._majorUnit,d=s[l],c=t.clone().startOf(l).valueOf(),f=a.ticks.major,h=f.enabled&&l&&d&&o===c,m=t.format(r||(h?d:u)),_=h?f:a.ticks.minor,p=M.valueOrDefault(_.callback,_.userCallback);return p?p(m,e,n):m},convertTicksToLabels:function(t){var e,n,r=[];for(e=0,n=t.length;e<n;++e)r.push(this.tickFormatFunction(y(t[e].value),e,t));return r},/**
		 * @private
		 */
getPixelForOffset:function(t){var e=this,n=e._horizontal?e.width:e.height,r=e._horizontal?e.left:e.top,i=s(e._table,"time",t,"pos");return r+n*(e._offsets.left+i)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,n){var r=this,i=null;if(void 0!==e&&void 0!==n&&(i=r._timestamps.datasets[n][e]),null===i&&(i=l(t,r)),null!==i)return r.getPixelForOffset(i)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,n=e._horizontal?e.width:e.height,r=e._horizontal?e.left:e.top,i=(n?(t-r)/n:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,a=s(e._table,"pos",i,"time");return y(a)},/**
		 * Crude approximation of what the label width might be
		 * @private
		 */
getLabelWidth:function(t){var e=this,n=e.options.ticks,r=e.ctx.measureText(t).width,i=M.toRadians(n.maxRotation),a=Math.cos(i),o=Math.sin(i);return r*a+M.valueOrDefault(n.fontSize,v.global.defaultFontSize)*o},/**
		 * @private
		 */
getLabelCapacity:function(t){var e=this,n=e.options.time.displayFormats.millisecond,r=e.tickFormatFunction(y(t),0,[],n),i=e.getLabelWidth(r),a=e.isHorizontal()?e.width:e.height,o=Math.floor(a/i);return o>0?o:1}});t.scaleService.registerScaleType("time",n,e)}},/* 609 */
/***/
function(t,e,n){function r(t){return n(i(t))}function i(t){var e=a[t];if(!(e+1))// check for number or string
throw new Error("Cannot find module '"+t+"'.");return e}var a={"./af":228,"./af.js":228,"./ar":229,"./ar-dz":230,"./ar-dz.js":230,"./ar-kw":231,"./ar-kw.js":231,"./ar-ly":232,"./ar-ly.js":232,"./ar-ma":233,"./ar-ma.js":233,"./ar-sa":234,"./ar-sa.js":234,"./ar-tn":235,"./ar-tn.js":235,"./ar.js":229,"./az":236,"./az.js":236,"./be":237,"./be.js":237,"./bg":238,"./bg.js":238,"./bm":239,"./bm.js":239,"./bn":240,"./bn.js":240,"./bo":241,"./bo.js":241,"./br":242,"./br.js":242,"./bs":243,"./bs.js":243,"./ca":244,"./ca.js":244,"./cs":245,"./cs.js":245,"./cv":246,"./cv.js":246,"./cy":247,"./cy.js":247,"./da":248,"./da.js":248,"./de":249,"./de-at":250,"./de-at.js":250,"./de-ch":251,"./de-ch.js":251,"./de.js":249,"./dv":252,"./dv.js":252,"./el":253,"./el.js":253,"./en-au":254,"./en-au.js":254,"./en-ca":255,"./en-ca.js":255,"./en-gb":256,"./en-gb.js":256,"./en-ie":257,"./en-ie.js":257,"./en-il":258,"./en-il.js":258,"./en-nz":259,"./en-nz.js":259,"./eo":260,"./eo.js":260,"./es":261,"./es-do":262,"./es-do.js":262,"./es-us":263,"./es-us.js":263,"./es.js":261,"./et":264,"./et.js":264,"./eu":265,"./eu.js":265,"./fa":266,"./fa.js":266,"./fi":267,"./fi.js":267,"./fo":268,"./fo.js":268,"./fr":269,"./fr-ca":270,"./fr-ca.js":270,"./fr-ch":271,"./fr-ch.js":271,"./fr.js":269,"./fy":272,"./fy.js":272,"./gd":273,"./gd.js":273,"./gl":274,"./gl.js":274,"./gom-latn":275,"./gom-latn.js":275,"./gu":276,"./gu.js":276,"./he":277,"./he.js":277,"./hi":278,"./hi.js":278,"./hr":279,"./hr.js":279,"./hu":280,"./hu.js":280,"./hy-am":281,"./hy-am.js":281,"./id":282,"./id.js":282,"./is":283,"./is.js":283,"./it":284,"./it.js":284,"./ja":285,"./ja.js":285,"./jv":286,"./jv.js":286,"./ka":287,"./ka.js":287,"./kk":288,"./kk.js":288,"./km":289,"./km.js":289,"./kn":290,"./kn.js":290,"./ko":291,"./ko.js":291,"./ky":292,"./ky.js":292,"./lb":293,"./lb.js":293,"./lo":294,"./lo.js":294,"./lt":295,"./lt.js":295,"./lv":296,"./lv.js":296,"./me":297,"./me.js":297,"./mi":298,"./mi.js":298,"./mk":299,"./mk.js":299,"./ml":300,"./ml.js":300,"./mn":301,"./mn.js":301,"./mr":302,"./mr.js":302,"./ms":303,"./ms-my":304,"./ms-my.js":304,"./ms.js":303,"./mt":305,"./mt.js":305,"./my":306,"./my.js":306,"./nb":307,"./nb.js":307,"./ne":308,"./ne.js":308,"./nl":309,"./nl-be":310,"./nl-be.js":310,"./nl.js":309,"./nn":311,"./nn.js":311,"./pa-in":312,"./pa-in.js":312,"./pl":313,"./pl.js":313,"./pt":314,"./pt-br":315,"./pt-br.js":315,"./pt.js":314,"./ro":316,"./ro.js":316,"./ru":317,"./ru.js":317,"./sd":318,"./sd.js":318,"./se":319,"./se.js":319,"./si":320,"./si.js":320,"./sk":321,"./sk.js":321,"./sl":322,"./sl.js":322,"./sq":323,"./sq.js":323,"./sr":324,"./sr-cyrl":325,"./sr-cyrl.js":325,"./sr.js":324,"./ss":326,"./ss.js":326,"./sv":327,"./sv.js":327,"./sw":328,"./sw.js":328,"./ta":329,"./ta.js":329,"./te":330,"./te.js":330,"./tet":331,"./tet.js":331,"./tg":332,"./tg.js":332,"./th":333,"./th.js":333,"./tl-ph":334,"./tl-ph.js":334,"./tlh":335,"./tlh.js":335,"./tr":336,"./tr.js":336,"./tzl":337,"./tzl.js":337,"./tzm":338,"./tzm-latn":339,"./tzm-latn.js":339,"./tzm.js":338,"./ug-cn":340,"./ug-cn.js":340,"./uk":341,"./uk.js":341,"./ur":342,"./ur.js":342,"./uz":343,"./uz-latn":344,"./uz-latn.js":344,"./uz.js":343,"./vi":345,"./vi.js":345,"./x-pseudo":346,"./x-pseudo.js":346,"./yo":347,"./yo.js":347,"./zh-cn":348,"./zh-cn.js":348,"./zh-hk":349,"./zh-hk.js":349,"./zh-tw":350,"./zh-tw.js":350};r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id=609},/* 610 */
/***/
function(t,e,n){"use strict";/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */
function r(t,e){var n,r,i,a,o=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(i=1,a=e.length;i<a;++i)o=Math.min(o,e[i]-e[i-1]);for(i=0,a=s.length;i<a;++i)r=t.getPixelForTick(i),o=i>0?Math.min(o,r-n):o,n=r;return o}/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */
function i(t,e,n){var r,i,a=n.barThickness,o=e.stackCount,s=e.pixels[t];
// When bar thickness is enforced, category and bar percentages are ignored.
// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
// and deprecate barPercentage since this value is ignored when thickness is absolute.
return u.isNullOrUndef(a)?(r=e.min*n.categoryPercentage,i=n.barPercentage):(r=a*o,i=1),{chunk:r/o,ratio:i,start:s-r/2}}/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */
function a(t,e,n){var r,i,a=e.pixels,o=a[t],s=t>0?a[t-1]:null,u=t<a.length-1?a[t+1]:null,l=n.categoryPercentage;
// first data: its size is double based on the next point or,
// if it's also the last data, we use the scale end extremity.
// last data: its size is also double based on the previous point.
return null===s&&(s=o-(null===u?e.end-o:u-o)),null===u&&(u=o+o-s),r=o-(o-s)/2*l,i=(u-s)/2*l,{chunk:i/e.stackCount,ratio:n.barPercentage,start:r}}var o=n(9),s=n(47),u=n(5);o._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",
// Specific to Bar Controller
categoryPercentage:.8,barPercentage:.9,
// offset settings
offset:!0,
// grid line settings
gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),o._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",
// Specific to Horizontal Bar Controller
categoryPercentage:.8,barPercentage:.9,
// offset settings
offset:!0,
// grid line settings
gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){
// Pick first xLabel for now
var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),t.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:s.Rectangle,initialize:function(){var e,n=this;t.DatasetController.prototype.initialize.apply(n,arguments),e=n.getMeta(),e.stack=n.getDataset().stack,e.bar=!0},update:function(t){var e,n,r=this,i=r.getMeta().data;for(r._ruler=r.getRuler(),e=0,n=i.length;e<n;++e)r.updateElement(i[e],e,t)},updateElement:function(t,e,n){var r=this,i=r.chart,a=r.getMeta(),o=r.getDataset(),s=t.custom||{},l=i.options.elements.rectangle;t._xScale=r.getScaleForId(a.xAxisID),t._yScale=r.getScaleForId(a.yAxisID),t._datasetIndex=r.index,t._index=e,t._model={datasetLabel:o.label,label:i.data.labels[e],borderSkipped:s.borderSkipped?s.borderSkipped:l.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:u.valueAtIndexOrDefault(o.backgroundColor,e,l.backgroundColor),borderColor:s.borderColor?s.borderColor:u.valueAtIndexOrDefault(o.borderColor,e,l.borderColor),borderWidth:s.borderWidth?s.borderWidth:u.valueAtIndexOrDefault(o.borderWidth,e,l.borderWidth)},r.updateElementGeometry(t,e,n),t.pivot()},/**
		 * @private
		 */
updateElementGeometry:function(t,e,n){var r=this,i=t._model,a=r.getValueScale(),o=a.getBasePixel(),s=a.isHorizontal(),u=r._ruler||r.getRuler(),l=r.calculateBarValuePixels(r.index,e),d=r.calculateBarIndexPixels(r.index,e,u);i.horizontal=s,i.base=n?o:l.base,i.x=s?n?o:l.head:d.center,i.y=s?d.center:n?o:l.head,i.height=s?d.size:void 0,i.width=s?void 0:d.size},/**
		 * @private
		 */
getValueScaleId:function(){return this.getMeta().yAxisID},/**
		 * @private
		 */
getIndexScaleId:function(){return this.getMeta().xAxisID},/**
		 * @private
		 */
getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},/**
		 * @private
		 */
getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},/**
		 * Returns the stacks based on groups and bar visibility.
		 * @param {Number} [last] - The dataset index
		 * @returns {Array} The stack list
		 * @private
		 */
_getStacks:function(t){var e,n,r=this,i=r.chart,a=r.getIndexScale(),o=a.options.stacked,s=void 0===t?i.data.datasets.length:t+1,u=[];for(e=0;e<s;++e)n=i.getDatasetMeta(e),n.bar&&i.isDatasetVisible(e)&&(!1===o||!0===o&&-1===u.indexOf(n.stack)||void 0===o&&(void 0===n.stack||-1===u.indexOf(n.stack)))&&u.push(n.stack);return u},/**
		 * Returns the effective number of stacks based on groups and bar visibility.
		 * @private
		 */
getStackCount:function(){return this._getStacks().length},/**
		 * Returns the stack index for the given dataset based on groups and bar visibility.
		 * @param {Number} [datasetIndex] - The dataset index
		 * @param {String} [name] - The stack name to find
		 * @returns {Number} The stack index
		 * @private
		 */
getStackIndex:function(t,e){var n=this._getStacks(t),r=void 0!==e?n.indexOf(e):-1;// indexOf returns -1 if element is not present
return-1===r?n.length-1:r},/**
		 * @private
		 */
getRuler:function(){var t,e,n,i=this,a=i.getIndexScale(),o=i.getStackCount(),s=i.index,l=a.isHorizontal(),d=l?a.left:a.top,c=d+(l?a.width:a.height),f=[];for(t=0,e=i.getMeta().data.length;t<e;++t)f.push(a.getPixelForValue(null,t,s));return n=u.isNullOrUndef(a.options.barThickness)?r(a,f):-1,{min:n,pixels:f,start:d,end:c,stackCount:o,scale:a}},/**
		 * Note: pixel values are not clamped to the scale area.
		 * @private
		 */
calculateBarValuePixels:function(t,e){var n,r,i,a,o,s,u=this,l=u.chart,d=u.getMeta(),c=u.getValueScale(),f=l.data.datasets,h=c.getRightValue(f[t].data[e]),m=c.options.stacked,_=d.stack,p=0;if(m||void 0===m&&void 0!==_)for(n=0;n<t;++n)r=l.getDatasetMeta(n),r.bar&&r.stack===_&&r.controller.getValueScaleId()===c.id&&l.isDatasetVisible(n)&&(i=c.getRightValue(f[n].data[e]),(h<0&&i<0||h>=0&&i>0)&&(p+=i));return a=c.getPixelForValue(p),o=c.getPixelForValue(p+h),s=(o-a)/2,{size:s,base:a,head:o,center:o+s/2}},/**
		 * @private
		 */
calculateBarIndexPixels:function(t,e,n){var r=this,o=n.scale.options,s="flex"===o.barThickness?a(e,n,o):i(e,n,o),l=r.getStackIndex(t,r.getMeta().stack),d=s.start+s.chunk*l+s.chunk/2,c=Math.min(u.valueOrDefault(o.maxBarThickness,1/0),s.chunk*s.ratio);return{base:d-c/2,head:d+c/2,center:d,size:c}},draw:function(){var t=this,e=t.chart,n=t.getValueScale(),r=t.getMeta().data,i=t.getDataset(),a=r.length,o=0;for(u.canvas.clipArea(e.ctx,e.chartArea);o<a;++o)isNaN(n.getRightValue(i.data[o]))||r[o].draw();u.canvas.unclipArea(e.ctx)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,r=t.custom||{},i=t._model;i.backgroundColor=r.hoverBackgroundColor?r.hoverBackgroundColor:u.valueAtIndexOrDefault(e.hoverBackgroundColor,n,u.getHoverColor(i.backgroundColor)),i.borderColor=r.hoverBorderColor?r.hoverBorderColor:u.valueAtIndexOrDefault(e.hoverBorderColor,n,u.getHoverColor(i.borderColor)),i.borderWidth=r.hoverBorderWidth?r.hoverBorderWidth:u.valueAtIndexOrDefault(e.hoverBorderWidth,n,i.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,r=t.custom||{},i=t._model,a=this.chart.options.elements.rectangle;i.backgroundColor=r.backgroundColor?r.backgroundColor:u.valueAtIndexOrDefault(e.backgroundColor,n,a.backgroundColor),i.borderColor=r.borderColor?r.borderColor:u.valueAtIndexOrDefault(e.borderColor,n,a.borderColor),i.borderWidth=r.borderWidth?r.borderWidth:u.valueAtIndexOrDefault(e.borderWidth,n,a.borderWidth)}}),t.controllers.horizontalBar=t.controllers.bar.extend({/**
		 * @private
		 */
getValueScaleId:function(){return this.getMeta().xAxisID},/**
		 * @private
		 */
getIndexScaleId:function(){return this.getMeta().yAxisID}})}},/* 611 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(47),a=n(5);r._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",// bubble should probably use a linear scale by default
position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){
// Title doesn't make sense for scatter since we format the data as a point
return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",r=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+r.r+")"}}}}),t.exports=function(t){t.controllers.bubble=t.DatasetController.extend({/**
		 * @protected
		 */
dataElementType:i.Point,/**
		 * @protected
		 */
update:function(t){var e=this,n=e.getMeta(),r=n.data;
// Update Points
a.each(r,function(n,r){e.updateElement(n,r,t)})},/**
		 * @protected
		 */
updateElement:function(t,e,n){var r=this,i=r.getMeta(),a=t.custom||{},o=r.getScaleForId(i.xAxisID),s=r.getScaleForId(i.yAxisID),u=r._resolveElementOptions(t,e),l=r.getDataset().data[e],d=r.index,c=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof l?l:NaN,e,d),f=n?s.getBasePixel():s.getPixelForValue(l,e,d);t._xScale=o,t._yScale=s,t._options=u,t._datasetIndex=d,t._index=e,t._model={backgroundColor:u.backgroundColor,borderColor:u.borderColor,borderWidth:u.borderWidth,hitRadius:u.hitRadius,pointStyle:u.pointStyle,radius:n?0:u.radius,skip:a.skip||isNaN(c)||isNaN(f),x:c,y:f},t.pivot()},/**
		 * @protected
		 */
setHoverStyle:function(t){var e=t._model,n=t._options;e.backgroundColor=a.valueOrDefault(n.hoverBackgroundColor,a.getHoverColor(n.backgroundColor)),e.borderColor=a.valueOrDefault(n.hoverBorderColor,a.getHoverColor(n.borderColor)),e.borderWidth=a.valueOrDefault(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},/**
		 * @protected
		 */
removeHoverStyle:function(t){var e=t._model,n=t._options;e.backgroundColor=n.backgroundColor,e.borderColor=n.borderColor,e.borderWidth=n.borderWidth,e.radius=n.radius},/**
		 * @private
		 */
_resolveElementOptions:function(t,e){var n,r,i,o=this,s=o.chart,u=s.data.datasets,l=u[o.index],d=t.custom||{},c=s.options.elements.point,f=a.options.resolve,h=l.data[e],m={},_={chart:s,dataIndex:e,dataset:l,datasetIndex:o.index},p=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(n=0,r=p.length;n<r;++n)i=p[n],m[i]=f([d[i],l[i],c[i]],_,e);
// Custom radius resolution
return m.radius=f([d.radius,h?h.r:void 0,l.radius,c.radius],_,e),m}})}},/* 612 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(47),a=n(5);r._set("doughnut",{animation:{
// Boolean - Whether we animate the rotation of the Doughnut
animateRotate:!0,
// Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,r=n.datasets,i=n.labels;if(r.length)for(var a=0;a<r[0].data.length;++a)e.push('<li><span style="background-color:'+r[0].backgroundColor[a]+'"></span>'),i[a]&&e.push(i[a]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(n,r){var i=t.getDatasetMeta(0),o=e.datasets[0],s=i.data[r],u=s&&s.custom||{},l=a.valueAtIndexOrDefault,d=t.options.elements.arc;return{text:n,fillStyle:u.backgroundColor?u.backgroundColor:l(o.backgroundColor,r,d.backgroundColor),strokeStyle:u.borderColor?u.borderColor:l(o.borderColor,r,d.borderColor),lineWidth:u.borderWidth?u.borderWidth:l(o.borderWidth,r,d.borderWidth),hidden:isNaN(o.data[r])||i.data[r].hidden,
// Extra data used for toggling the correct item
index:r}}):[]}},onClick:function(t,e){var n,r,i,a=e.index,o=this.chart;for(n=0,r=(o.data.datasets||[]).length;n<r;++n)i=o.getDatasetMeta(n),
// toggle visibility of index if exists
i.data[a]&&(i.data[a].hidden=!i.data[a].hidden);o.update()}},
// The percentage of the chart that we cut out of the middle.
cutoutPercentage:50,
// The rotation of the chart, where the first data arc begins.
rotation:-.5*Math.PI,
// The total circumference of the chart.
circumference:2*Math.PI,
// Need to override these to give a nice default
tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],r=": "+e.datasets[t.datasetIndex].data[t.index];
// show value on first line of multiline label
// need to clone because we are changing the value
return a.isArray(n)?(n=n.slice(),n[0]+=r):n+=r,n}}}}),r._set("pie",a.clone(r.doughnut)),r._set("pie",{cutoutPercentage:0}),t.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:i.Arc,linkScales:a.noop,
// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e=this,n=e.chart,r=n.chartArea,i=n.options,o=i.elements.arc,s=r.right-r.left-o.borderWidth,u=r.bottom-r.top-o.borderWidth,l=Math.min(s,u),d={x:0,y:0},c=e.getMeta(),f=i.cutoutPercentage,h=i.circumference;
// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
if(h<2*Math.PI){var m=i.rotation%(2*Math.PI);m+=2*Math.PI*(m>=Math.PI?-1:m<-Math.PI?1:0);var _=m+h,p={x:Math.cos(m),y:Math.sin(m)},g={x:Math.cos(_),y:Math.sin(_)},y=m<=0&&_>=0||m<=2*Math.PI&&2*Math.PI<=_,v=m<=.5*Math.PI&&.5*Math.PI<=_||m<=2.5*Math.PI&&2.5*Math.PI<=_,M=m<=-Math.PI&&-Math.PI<=_||m<=Math.PI&&Math.PI<=_,b=m<=.5*-Math.PI&&.5*-Math.PI<=_||m<=1.5*Math.PI&&1.5*Math.PI<=_,L=f/100,k={x:M?-1:Math.min(p.x*(p.x<0?1:L),g.x*(g.x<0?1:L)),y:b?-1:Math.min(p.y*(p.y<0?1:L),g.y*(g.y<0?1:L))},w={x:y?1:Math.max(p.x*(p.x>0?1:L),g.x*(g.x>0?1:L)),y:v?1:Math.max(p.y*(p.y>0?1:L),g.y*(g.y>0?1:L))},Y={width:.5*(w.x-k.x),height:.5*(w.y-k.y)};l=Math.min(s/Y.width,u/Y.height),d={x:-.5*(w.x+k.x),y:-.5*(w.y+k.y)}}n.borderWidth=e.getMaxBorderWidth(c.data),n.outerRadius=Math.max((l-n.borderWidth)/2,0),n.innerRadius=Math.max(f?n.outerRadius/100*f:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=d.x*n.outerRadius,n.offsetY=d.y*n.outerRadius,c.total=e.calculateTotal(),e.outerRadius=n.outerRadius-n.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-n.radiusLength,0),a.each(c.data,function(n,r){e.updateElement(n,r,t)})},updateElement:function(t,e,n){var r=this,i=r.chart,o=i.chartArea,s=i.options,u=s.animation,l=(o.left+o.right)/2,d=(o.top+o.bottom)/2,c=s.rotation,f=s.rotation,h=r.getDataset(),m=n&&u.animateRotate?0:t.hidden?0:r.calculateCircumference(h.data[e])*(s.circumference/(2*Math.PI)),_=n&&u.animateScale?0:r.innerRadius,p=n&&u.animateScale?0:r.outerRadius,g=a.valueAtIndexOrDefault;a.extend(t,{
// Utility
_datasetIndex:r.index,_index:e,
// Desired view properties
_model:{x:l+i.offsetX,y:d+i.offsetY,startAngle:c,endAngle:f,circumference:m,outerRadius:p,innerRadius:_,label:g(h.label,e,i.data.labels[e])}});var y=t._model;
// Resets the visual styles
this.removeHoverStyle(t),
// Set correct angles if not resetting
n&&u.animateRotate||(y.startAngle=0===e?s.rotation:r.getMeta().data[e-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),r=0;/* if (total === 0) {
				total = NaN;
			}*/
return a.each(n.data,function(n,i){t=e.data[i],isNaN(t)||n.hidden||(r+=Math.abs(t))}),r},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},
// gets the max border or hover width to properly scale pie charts
getMaxBorderWidth:function(t){for(var e,n,r=0,i=this.index,a=t.length,o=0;o<a;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=t[o]._chart?t[o]._chart.config.data.datasets[i].hoverBorderWidth:0,r=e>r?e:r,r=n>r?n:r;return r}})}},/* 613 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(47),a=n(5);r._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),t.exports=function(t){function e(t,e){return a.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:i.Line,dataElementType:i.Point,update:function(t){var n,r,i,o=this,s=o.getMeta(),u=s.dataset,l=s.data||[],d=o.chart.options,c=d.elements.line,f=o.getScaleForId(s.yAxisID),h=o.getDataset(),m=e(h,d);
// Update Points
for(
// Update Line
m&&(i=u.custom||{},
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==h.tension&&void 0===h.lineTension&&(h.lineTension=h.tension),
// Utility
u._scale=f,u._datasetIndex=o.index,
// Data
u._children=l,
// Model
u._model={
// Appearance
// The default behavior of lines is to break at null values, according
// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
// This option gives lines the ability to span gaps
spanGaps:h.spanGaps?h.spanGaps:d.spanGaps,tension:i.tension?i.tension:a.valueOrDefault(h.lineTension,c.tension),backgroundColor:i.backgroundColor?i.backgroundColor:h.backgroundColor||c.backgroundColor,borderWidth:i.borderWidth?i.borderWidth:h.borderWidth||c.borderWidth,borderColor:i.borderColor?i.borderColor:h.borderColor||c.borderColor,borderCapStyle:i.borderCapStyle?i.borderCapStyle:h.borderCapStyle||c.borderCapStyle,borderDash:i.borderDash?i.borderDash:h.borderDash||c.borderDash,borderDashOffset:i.borderDashOffset?i.borderDashOffset:h.borderDashOffset||c.borderDashOffset,borderJoinStyle:i.borderJoinStyle?i.borderJoinStyle:h.borderJoinStyle||c.borderJoinStyle,fill:i.fill?i.fill:void 0!==h.fill?h.fill:c.fill,steppedLine:i.steppedLine?i.steppedLine:a.valueOrDefault(h.steppedLine,c.stepped),cubicInterpolationMode:i.cubicInterpolationMode?i.cubicInterpolationMode:a.valueOrDefault(h.cubicInterpolationMode,c.cubicInterpolationMode)},u.pivot()),n=0,r=l.length;n<r;++n)o.updateElement(l[n],n,t);
// Now pivot the point for animation
for(m&&0!==u._model.tension&&o.updateBezierControlPoints(),n=0,r=l.length;n<r;++n)l[n].pivot()},getPointBackgroundColor:function(t,e){var n=this.chart.options.elements.point.backgroundColor,r=this.getDataset(),i=t.custom||{};return i.backgroundColor?n=i.backgroundColor:r.pointBackgroundColor?n=a.valueAtIndexOrDefault(r.pointBackgroundColor,e,n):r.backgroundColor&&(n=r.backgroundColor),n},getPointBorderColor:function(t,e){var n=this.chart.options.elements.point.borderColor,r=this.getDataset(),i=t.custom||{};return i.borderColor?n=i.borderColor:r.pointBorderColor?n=a.valueAtIndexOrDefault(r.pointBorderColor,e,n):r.borderColor&&(n=r.borderColor),n},getPointBorderWidth:function(t,e){var n=this.chart.options.elements.point.borderWidth,r=this.getDataset(),i=t.custom||{};return isNaN(i.borderWidth)?!isNaN(r.pointBorderWidth)||a.isArray(r.pointBorderWidth)?n=a.valueAtIndexOrDefault(r.pointBorderWidth,e,n):isNaN(r.borderWidth)||(n=r.borderWidth):n=i.borderWidth,n},updateElement:function(t,e,n){var r,i,o=this,s=o.getMeta(),u=t.custom||{},l=o.getDataset(),d=o.index,c=l.data[e],f=o.getScaleForId(s.yAxisID),h=o.getScaleForId(s.xAxisID),m=o.chart.options.elements.point;
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==l.radius&&void 0===l.pointRadius&&(l.pointRadius=l.radius),void 0!==l.hitRadius&&void 0===l.pointHitRadius&&(l.pointHitRadius=l.hitRadius),r=h.getPixelForValue("object"==typeof c?c:NaN,e,d),i=n?f.getBasePixel():o.calculatePointY(c,e,d),
// Utility
t._xScale=h,t._yScale=f,t._datasetIndex=d,t._index=e,
// Desired view properties
t._model={x:r,y:i,skip:u.skip||isNaN(r)||isNaN(i),
// Appearance
radius:u.radius||a.valueAtIndexOrDefault(l.pointRadius,e,m.radius),pointStyle:u.pointStyle||a.valueAtIndexOrDefault(l.pointStyle,e,m.pointStyle),backgroundColor:o.getPointBackgroundColor(t,e),borderColor:o.getPointBorderColor(t,e),borderWidth:o.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,
// Tooltip
hitRadius:u.hitRadius||a.valueAtIndexOrDefault(l.pointHitRadius,e,m.hitRadius)}},calculatePointY:function(t,e,n){var r,i,a,o=this,s=o.chart,u=o.getMeta(),l=o.getScaleForId(u.yAxisID),d=0,c=0;if(l.options.stacked){for(r=0;r<n;r++)if(i=s.data.datasets[r],a=s.getDatasetMeta(r),"line"===a.type&&a.yAxisID===l.id&&s.isDatasetVisible(r)){var f=Number(l.getRightValue(i.data[e]));f<0?c+=f||0:d+=f||0}var h=Number(l.getRightValue(t));return h<0?l.getPixelForValue(c+h):l.getPixelForValue(d+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,n,r,i,o,s=this,u=s.getMeta(),l=s.chart.chartArea,d=u.data||[];if(
// Only consider points that are drawn in case the spanGaps option is used
u.dataset._model.spanGaps&&(d=d.filter(function(t){return!t._model.skip})),"monotone"===u.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(d);else for(e=0,n=d.length;e<n;++e)r=d[e],i=r._model,o=a.splineCurve(a.previousItem(d,e)._model,i,a.nextItem(d,e)._model,u.dataset._model.tension),i.controlPointPreviousX=o.previous.x,i.controlPointPreviousY=o.previous.y,i.controlPointNextX=o.next.x,i.controlPointNextY=o.next.y;if(s.chart.options.elements.line.capBezierPoints)for(e=0,n=d.length;e<n;++e)i=d[e]._model,i.controlPointPreviousX=t(i.controlPointPreviousX,l.left,l.right),i.controlPointPreviousY=t(i.controlPointPreviousY,l.top,l.bottom),i.controlPointNextX=t(i.controlPointNextX,l.left,l.right),i.controlPointNextY=t(i.controlPointNextY,l.top,l.bottom)},draw:function(){var t=this,n=t.chart,r=t.getMeta(),i=r.data||[],o=n.chartArea,s=i.length,u=0;
// Draw the points
for(a.canvas.clipArea(n.ctx,o),e(t.getDataset(),n.options)&&r.dataset.draw(),a.canvas.unclipArea(n.ctx);u<s;++u)i[u].draw(o)},setHoverStyle:function(t){
// Point
var e=this.chart.data.datasets[t._datasetIndex],n=t._index,r=t.custom||{},i=t._model;i.radius=r.hoverRadius||a.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),i.backgroundColor=r.hoverBackgroundColor||a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,a.getHoverColor(i.backgroundColor)),i.borderColor=r.hoverBorderColor||a.valueAtIndexOrDefault(e.pointHoverBorderColor,n,a.getHoverColor(i.borderColor)),i.borderWidth=r.hoverBorderWidth||a.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,i.borderWidth)},removeHoverStyle:function(t){var e=this,n=e.chart.data.datasets[t._datasetIndex],r=t._index,i=t.custom||{},o=t._model;
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==n.radius&&void 0===n.pointRadius&&(n.pointRadius=n.radius),o.radius=i.radius||a.valueAtIndexOrDefault(n.pointRadius,r,e.chart.options.elements.point.radius),o.backgroundColor=e.getPointBackgroundColor(t,r),o.borderColor=e.getPointBorderColor(t,r),o.borderWidth=e.getPointBorderWidth(t,r)}})}},/* 614 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(47),a=n(5);r._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},
// Boolean - Whether to animate the rotation of the chart
animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,r=n.datasets,i=n.labels;if(r.length)for(var a=0;a<r[0].data.length;++a)e.push('<li><span style="background-color:'+r[0].backgroundColor[a]+'"></span>'),i[a]&&e.push(i[a]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(n,r){var i=t.getDatasetMeta(0),o=e.datasets[0],s=i.data[r],u=s.custom||{},l=a.valueAtIndexOrDefault,d=t.options.elements.arc;return{text:n,fillStyle:u.backgroundColor?u.backgroundColor:l(o.backgroundColor,r,d.backgroundColor),strokeStyle:u.borderColor?u.borderColor:l(o.borderColor,r,d.borderColor),lineWidth:u.borderWidth?u.borderWidth:l(o.borderWidth,r,d.borderWidth),hidden:isNaN(o.data[r])||i.data[r].hidden,
// Extra data used for toggling the correct item
index:r}}):[]}},onClick:function(t,e){var n,r,i,a=e.index,o=this.chart;for(n=0,r=(o.data.datasets||[]).length;n<r;++n)i=o.getDatasetMeta(n),i.data[a].hidden=!i.data[a].hidden;o.update()}},
// Need to override these to give a nice default
tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),t.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:i.Arc,linkScales:a.noop,update:function(t){var e=this,n=e.chart,r=n.chartArea,i=e.getMeta(),o=n.options,s=o.elements.arc,u=Math.min(r.right-r.left,r.bottom-r.top);n.outerRadius=Math.max((u-s.borderWidth/2)/2,0),n.innerRadius=Math.max(o.cutoutPercentage?n.outerRadius/100*o.cutoutPercentage:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),e.outerRadius=n.outerRadius-n.radiusLength*e.index,e.innerRadius=e.outerRadius-n.radiusLength,i.count=e.countVisibleElements(),a.each(i.data,function(n,r){e.updateElement(n,r,t)})},updateElement:function(t,e,n){for(var r=this,i=r.chart,o=r.getDataset(),s=i.options,u=s.animation,l=i.scale,d=i.data.labels,c=r.calculateCircumference(o.data[e]),f=l.xCenter,h=l.yCenter,m=0,_=r.getMeta(),p=0;p<e;++p)isNaN(o.data[p])||_.data[p].hidden||++m;
// var negHalfPI = -0.5 * Math.PI;
var g=s.startAngle,y=t.hidden?0:l.getDistanceFromCenterForValue(o.data[e]),v=g+c*m,M=v+(t.hidden?0:c),b=u.animateScale?0:l.getDistanceFromCenterForValue(o.data[e]);a.extend(t,{
// Utility
_datasetIndex:r.index,_index:e,_scale:l,
// Desired view properties
_model:{x:f,y:h,innerRadius:0,outerRadius:n?b:y,startAngle:n&&u.animateRotate?g:v,endAngle:n&&u.animateRotate?g:M,label:a.valueAtIndexOrDefault(d,e,d[e])}}),
// Apply border and fill style
r.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return a.each(e.data,function(e,r){isNaN(t.data[r])||e.hidden||n++}),n},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},/* 615 */
/***/
function(t,e,n){"use strict";var r=n(9),i=n(47),a=n(5);r._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),t.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:i.Line,dataElementType:i.Point,linkScales:a.noop,update:function(t){var e=this,n=e.getMeta(),r=n.dataset,i=n.data,o=r.custom||{},s=e.getDataset(),u=e.chart.options.elements.line,l=e.chart.scale;
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),a.extend(n.dataset,{
// Utility
_datasetIndex:e.index,_scale:l,
// Data
_children:i,_loop:!0,
// Model
_model:{
// Appearance
tension:o.tension?o.tension:a.valueOrDefault(s.lineTension,u.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||u.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||u.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||u.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:u.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||u.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||u.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||u.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||u.borderJoinStyle}}),n.dataset.pivot(),
// Update Points
a.each(i,function(n,r){e.updateElement(n,r,t)},e),
// Update bezier control points
e.updateBezierControlPoints()},updateElement:function(t,e,n){var r=this,i=t.custom||{},o=r.getDataset(),s=r.chart.scale,u=r.chart.options.elements.point,l=s.getPointPositionForValue(e,o.data[e]);
// Compatibility: If the properties are defined with only the old name, use those values
void 0!==o.radius&&void 0===o.pointRadius&&(o.pointRadius=o.radius),void 0!==o.hitRadius&&void 0===o.pointHitRadius&&(o.pointHitRadius=o.hitRadius),a.extend(t,{
// Utility
_datasetIndex:r.index,_index:e,_scale:s,
// Desired view properties
_model:{x:n?s.xCenter:l.x,// value not used in dataset scale, but we want a consistent API between scales
y:n?s.yCenter:l.y,
// Appearance
tension:i.tension?i.tension:a.valueOrDefault(o.lineTension,r.chart.options.elements.line.tension),radius:i.radius?i.radius:a.valueAtIndexOrDefault(o.pointRadius,e,u.radius),backgroundColor:i.backgroundColor?i.backgroundColor:a.valueAtIndexOrDefault(o.pointBackgroundColor,e,u.backgroundColor),borderColor:i.borderColor?i.borderColor:a.valueAtIndexOrDefault(o.pointBorderColor,e,u.borderColor),borderWidth:i.borderWidth?i.borderWidth:a.valueAtIndexOrDefault(o.pointBorderWidth,e,u.borderWidth),pointStyle:i.pointStyle?i.pointStyle:a.valueAtIndexOrDefault(o.pointStyle,e,u.pointStyle),
// Tooltip
hitRadius:i.hitRadius?i.hitRadius:a.valueAtIndexOrDefault(o.pointHitRadius,e,u.hitRadius)}}),t._model.skip=i.skip?i.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();a.each(e.data,function(n,r){var i=n._model,o=a.splineCurve(a.previousItem(e.data,r,!0)._model,i,a.nextItem(e.data,r,!0)._model,i.tension);
// Prevent the bezier going outside of the bounds of the graph
i.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),i.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),i.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),i.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),
// Now pivot the point for animation
n.pivot()})},setHoverStyle:function(t){
// Point
var e=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},r=t._index,i=t._model;i.radius=n.hoverRadius?n.hoverRadius:a.valueAtIndexOrDefault(e.pointHoverRadius,r,this.chart.options.elements.point.hoverRadius),i.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,r,a.getHoverColor(i.backgroundColor)),i.borderColor=n.hoverBorderColor?n.hoverBorderColor:a.valueAtIndexOrDefault(e.pointHoverBorderColor,r,a.getHoverColor(i.borderColor)),i.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:a.valueAtIndexOrDefault(e.pointHoverBorderWidth,r,i.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},r=t._index,i=t._model,o=this.chart.options.elements.point;i.radius=n.radius?n.radius:a.valueAtIndexOrDefault(e.pointRadius,r,o.radius),i.backgroundColor=n.backgroundColor?n.backgroundColor:a.valueAtIndexOrDefault(e.pointBackgroundColor,r,o.backgroundColor),i.borderColor=n.borderColor?n.borderColor:a.valueAtIndexOrDefault(e.pointBorderColor,r,o.borderColor),i.borderWidth=n.borderWidth?n.borderWidth:a.valueAtIndexOrDefault(e.pointBorderWidth,r,o.borderWidth)}})}},/* 616 */
/***/
function(t,e,n){"use strict";n(9)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",// need an ID so datasets can reference the scale
type:"linear",// scatter should not use a category axis
position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),t.exports=function(t){
// Scatter charts use line controllers
t.controllers.scatter=t.controllers.line}},/* 617 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},/* 618 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},/* 619 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},/* 620 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},/* 621 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},/* 622 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},/* 623 */
/***/
function(t,e,n){"use strict";t.exports=function(t){t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},/* 624 */
/***/
function(t,e,n){"use strict";t.exports={},t.exports.filler=n(625),t.exports.legend=n(626),t.exports.title=n(627)},/* 625 */
/***/
function(t,e,n){"use strict";
// @todo if (fill[0] === '#')
function r(t,e,n){var r,i=t._model||{},a=i.fill;if(void 0===a&&(a=!!i.backgroundColor),!1===a||null===a)return!1;if(!0===a)return"origin";if(r=parseFloat(a,10),isFinite(r)&&Math.floor(r)===r)return"-"!==a[0]&&"+"!==a[0]||(r=e+r),!(r===e||r<0||r>=n)&&r;switch(a){
// compatibility
case"bottom":return"start";case"top":return"end";case"zero":return"origin";
// supported boundaries
case"origin":case"start":case"end":return a;
// invalid fill values
default:return!1}}function i(t){var e,n=t.el._model||{},r=t.el._scale||{},i=t.fill,a=null;if(isFinite(i))return null;if(
// Backward compatibility: until v3, we still need to support boundary values set on
// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
// controllers might still use it (e.g. the Smith chart).
"start"===i?a=void 0===n.scaleBottom?r.bottom:n.scaleBottom:"end"===i?a=void 0===n.scaleTop?r.top:n.scaleTop:void 0!==n.scaleZero?a=n.scaleZero:r.getBasePosition?a=r.getBasePosition():r.getBasePixel&&(a=r.getBasePixel()),void 0!==a&&null!==a){if(void 0!==a.x&&void 0!==a.y)return a;if("number"==typeof a&&isFinite(a))return e=r.isHorizontal(),{x:e?a:null,y:e?null:a}}return null}function a(t,e,n){var r,i=t[e],a=i.fill,o=[e];if(!n)return a;for(;!1!==a&&-1===o.indexOf(a);){if(!isFinite(a))return a;if(!(r=t[a]))return!1;if(r.visible)return a;o.push(a),a=r.fill}return!1}function o(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),h[n](t))}function s(t){return t&&!t.skip}function u(t,e,n,r,i){var a;if(r&&i){for(
// building first area curve (normal)
t.moveTo(e[0].x,e[0].y),a=1;a<r;++a)f.canvas.lineTo(t,e[a-1],e[a]);
// building opposite area curve (reverse)
for(
// joining the two area curves
t.lineTo(n[i-1].x,n[i-1].y),a=i-1;a>0;--a)f.canvas.lineTo(t,n[a],n[a-1],!0)}}function l(t,e,n,r,i,a){var o,l,d,c,f,h,m,_=e.length,p=r.spanGaps,g=[],y=[],v=0,M=0;for(t.beginPath(),o=0,l=_+!!a;o<l;++o)d=o%_,c=e[d]._view,f=n(c,d,r),h=s(c),m=s(f),h&&m?(v=g.push(c),M=y.push(f)):v&&M&&(p?(h&&g.push(c),m&&y.push(f)):(u(t,g,y,v,M),v=M=0,g=[],y=[]));u(t,g,y,v,M),t.closePath(),t.fillStyle=i,t.fill()}/**
 * Plugin based on discussion from the following Chart.js issues:
 * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
 * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
 */
var d=n(9),c=n(47),f=n(5);d._set("global",{plugins:{filler:{propagate:!0}}});var h={dataset:function(t){var e=t.fill,n=t.chart,r=n.getDatasetMeta(e),i=r&&n.isDatasetVisible(e),a=i&&r.dataset._children||[],o=a.length||0;return o?function(t,e){return e<o&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,r=e?e.y:null;return function(t){return{x:null===n?t.x:n,y:null===r?t.y:r}}}};t.exports={id:"filler",afterDatasetsUpdate:function(t,e){var n,s,u,l,d=(t.data.datasets||[]).length,f=e.propagate,h=[];for(s=0;s<d;++s)n=t.getDatasetMeta(s),u=n.dataset,l=null,u&&u._model&&u instanceof c.Line&&(l={visible:t.isDatasetVisible(s),fill:r(u,s,d),chart:t,el:u}),n.$filler=l,h.push(l);for(s=0;s<d;++s)(l=h[s])&&(l.fill=a(h,s,f),l.boundary=i(l),l.mapper=o(l))},beforeDatasetDraw:function(t,e){var n=e.meta.$filler;if(n){var r=t.ctx,i=n.el,a=i._view,o=i._children||[],s=n.mapper,u=a.backgroundColor||d.global.defaultColor;s&&u&&o.length&&(f.canvas.clipArea(r,t.chartArea),l(r,o,s,a,u,i._loop),f.canvas.unclipArea(r))}}}},/* 626 */
/***/
function(t,e,n){"use strict";/**
 * Helper function to get the box width based on the usePointStyle option
 * @param labelopts {Object} the label options on the legend
 * @param fontSize {Number} the label font size
 * @return {Number} width of the color box area
 */
function r(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function i(t,e){var n=new d({ctx:t.ctx,options:e,chart:t});u.configure(t,n,e),u.addBox(t,n),t.legend=n}var a=n(9),o=n(35),s=n(5),u=n(86),l=s.noop;a._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,
// a callback that will handle
onClick:function(t,e){var n=e.datasetIndex,r=this.chart,i=r.getDatasetMeta(n);
// See controller.isDatasetVisible comment
i.hidden=null===i.hidden?!r.data.datasets[n].hidden:null,
// We hid a dataset ... rerender the chart
r.update()},onHover:null,labels:{boxWidth:40,padding:10,
// Generates labels shown in the legend
// Valid properties to return:
// text : text to display
// fillStyle : fill of coloured box
// strokeStyle: stroke of coloured box
// hidden : if this legend item refers to a hidden item
// lineCap : cap style for line
// lineDash
// lineDashOffset :
// lineJoin :
// lineWidth :
generateLabels:function(t){var e=t.data;return s.isArray(e.datasets)?e.datasets.map(function(e,n){return{text:e.label,fillStyle:s.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,
// Below is extra data used for toggling the datasets
datasetIndex:n}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}});/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var d=o.extend({initialize:function(t){s.extend(this,t),
// Contains hit boxes for each dataset (in dataset order)
this.legendHitBoxes=[],
// Are we in doughnut mode which has a different data type
this.doughnutMode=!1},
// These methods are ordered by lifecycle. Utilities then follow.
// Any function defined here is inherited by all legend types.
// Any function can be extended by the legend type
beforeUpdate:l,update:function(t,e,n){var r=this;
// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
// Absorb the master measurements
// Dimensions
// Labels
// Fit
//
return r.beforeUpdate(),r.maxWidth=t,r.maxHeight=e,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:l,
//
beforeSetDimensions:l,setDimensions:function(){var t=this;
// Set the unconstrained dimension before label rotation
t.isHorizontal()?(
// Reset position before calculating rotation
t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,
// Reset position before calculating rotation
t.top=0,t.bottom=t.height),
// Reset padding
t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,
// Reset minSize
t.minSize={width:0,height:0}},afterSetDimensions:l,
//
beforeBuildLabels:l,buildLabels:function(){var t=this,e=t.options.labels||{},n=s.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter(function(n){return e.filter(n,t.chart.data)})),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:l,
//
beforeFit:l,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,o=t.ctx,u=a.global,l=s.valueOrDefault,d=l(n.fontSize,u.defaultFontSize),c=l(n.fontStyle,u.defaultFontStyle),f=l(n.fontFamily,u.defaultFontFamily),h=s.fontString(d,c,f),m=t.legendHitBoxes=[],_=t.minSize,p=t.isHorizontal();
// Increase sizes here
if(p?(_.width=t.maxWidth,// fill all the width
_.height=i?10:0):(_.width=i?10:0,_.height=t.maxHeight),i)if(o.font=h,p){
// Labels
// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
var g=t.lineWidths=[0],y=t.legendItems.length?d+n.padding:0;o.textAlign="left",o.textBaseline="top",s.each(t.legendItems,function(e,i){var a=r(n,d),s=a+d/2+o.measureText(e.text).width;g[g.length-1]+s+n.padding>=t.width&&(y+=d+n.padding,g[g.length]=t.left),
// Store the hitbox width and height here. Final position will be updated in `draw`
m[i]={left:0,top:0,width:s,height:d},g[g.length-1]+=s+n.padding}),_.height+=y}else{var v=n.padding,M=t.columnWidths=[],b=n.padding,L=0,k=0,w=d+v;s.each(t.legendItems,function(t,e){var i=r(n,d),a=i+d/2+o.measureText(t.text).width;
// If too tall, go to new column
k+w>_.height&&(b+=L+n.padding,M.push(L),// previous column width
L=0,k=0),
// Get max width
L=Math.max(L,a),k+=w,
// Store the hitbox width and height here. Final position will be updated in `draw`
m[e]={left:0,top:0,width:a,height:d}}),b+=L,M.push(L),_.width+=b}t.width=_.width,t.height=_.height},afterFit:l,
// Shared Methods
isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},
// Actually draw the legend on the canvas
draw:function(){var t=this,e=t.options,n=e.labels,i=a.global,o=i.elements.line,u=t.width,l=t.lineWidths;if(e.display){var d,c=t.ctx,f=s.valueOrDefault,h=f(n.fontColor,i.defaultFontColor),m=f(n.fontSize,i.defaultFontSize),_=f(n.fontStyle,i.defaultFontStyle),p=f(n.fontFamily,i.defaultFontFamily),g=s.fontString(m,_,p);
// Canvas setup
c.textAlign="left",c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=h,// for strikethrough effect
c.fillStyle=h,// render in correct colour
c.font=g;var y=r(n,m),v=t.legendHitBoxes,M=function(t,n,r){if(!(isNaN(y)||y<=0)){
// Set the ctx for the box
c.save(),c.fillStyle=f(r.fillStyle,i.defaultColor),c.lineCap=f(r.lineCap,o.borderCapStyle),c.lineDashOffset=f(r.lineDashOffset,o.borderDashOffset),c.lineJoin=f(r.lineJoin,o.borderJoinStyle),c.lineWidth=f(r.lineWidth,o.borderWidth),c.strokeStyle=f(r.strokeStyle,i.defaultColor);var a=0===f(r.lineWidth,o.borderWidth);if(c.setLineDash&&
// IE 9 and 10 do not support line dash
c.setLineDash(f(r.lineDash,o.borderDash)),e.labels&&e.labels.usePointStyle){
// Recalculate x and y for drawPoint() because its expecting
// x and y to be center of figure (instead of top left)
var u=m*Math.SQRT2/2,l=u/Math.SQRT2,d=t+l,h=n+l;
// Draw pointStyle as legend symbol
s.canvas.drawPoint(c,r.pointStyle,u,d,h)}else
// Draw box as legend symbol
a||c.strokeRect(t,n,y,m),c.fillRect(t,n,y,m);c.restore()}},b=function(t,e,n,r){var i=m/2,a=y+i+t,o=e+i;c.fillText(n.text,a,o),n.hidden&&(
// Strikethrough the text if hidden
c.beginPath(),c.lineWidth=2,c.moveTo(a,o),c.lineTo(a+r,o),c.stroke())},L=t.isHorizontal();d=L?{x:t.left+(u-l[0])/2,y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+n.padding,line:0};var k=m+n.padding;s.each(t.legendItems,function(e,r){var i=c.measureText(e.text).width,a=y+m/2+i,o=d.x,s=d.y;L?o+a>=u&&(s=d.y+=k,d.line++,o=d.x=t.left+(u-l[d.line])/2):s+k>t.bottom&&(o=d.x=o+t.columnWidths[d.line]+n.padding,s=d.y=t.top+n.padding,d.line++),M(o,s,e),v[r].left=o,v[r].top=s,
// Fill the actual label
b(o,s,e,i),L?d.x+=a+n.padding:d.y+=k})}},/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @return {Boolean} true if a change occured
	 */
handleEvent:function(t){var e=this,n=e.options,r="mouseup"===t.type?"click":t.type,i=!1;if("mousemove"===r){if(!n.onHover)return}else{if("click"!==r)return;if(!n.onClick)return}
// Chart event already has relative position in it
var a=t.x,o=t.y;if(a>=e.left&&a<=e.right&&o>=e.top&&o<=e.bottom)for(var s=e.legendHitBoxes,u=0;u<s.length;++u){var l=s[u];if(a>=l.left&&a<=l.left+l.width&&o>=l.top&&o<=l.top+l.height){
// Touching an element
if("click"===r){
// use e.native for backwards compatibility
n.onClick.call(e,t.native,e.legendItems[u]),i=!0;break}if("mousemove"===r){
// use e.native for backwards compatibility
n.onHover.call(e,t.native,e.legendItems[u]),i=!0;break}}}return i}});t.exports={id:"legend",/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
_element:d,beforeInit:function(t){var e=t.options.legend;e&&i(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(s.mergeIf(e,a.global.legend),n?(u.configure(t,n,e),n.options=e):i(t,e)):n&&(u.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}}},/* 627 */
/***/
function(t,e,n){"use strict";function r(t,e){var n=new l({ctx:t.ctx,options:e,chart:t});s.configure(t,n,e),s.addBox(t,n),t.titleBlock=n}var i=n(9),a=n(35),o=n(5),s=n(86),u=o.noop;i._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var l=a.extend({initialize:function(t){var e=this;o.extend(e,t),
// Contains hit boxes for each dataset (in dataset order)
e.legendHitBoxes=[]},
// These methods are ordered by lifecycle. Utilities then follow.
beforeUpdate:u,update:function(t,e,n){var r=this;
// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
// Absorb the master measurements
// Dimensions
// Labels
// Fit
//
return r.beforeUpdate(),r.maxWidth=t,r.maxHeight=e,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:u,
//
beforeSetDimensions:u,setDimensions:function(){var t=this;
// Set the unconstrained dimension before label rotation
t.isHorizontal()?(
// Reset position before calculating rotation
t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,
// Reset position before calculating rotation
t.top=0,t.bottom=t.height),
// Reset padding
t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,
// Reset minSize
t.minSize={width:0,height:0}},afterSetDimensions:u,
//
beforeBuildLabels:u,buildLabels:u,afterBuildLabels:u,
//
beforeFit:u,fit:function(){var t=this,e=o.valueOrDefault,n=t.options,r=n.display,a=e(n.fontSize,i.global.defaultFontSize),s=t.minSize,u=o.isArray(n.text)?n.text.length:1,l=o.options.toLineHeight(n.lineHeight,a),d=r?u*l+2*n.padding:0;t.isHorizontal()?(s.width=t.maxWidth,// fill all the width
s.height=d):(s.width=d,s.height=t.maxHeight),t.width=s.width,t.height=s.height},afterFit:u,
// Shared Methods
isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},
// Actually draw the title block on the canvas
draw:function(){var t=this,e=t.ctx,n=o.valueOrDefault,r=t.options,a=i.global;if(r.display){var s,u,l,d=n(r.fontSize,a.defaultFontSize),c=n(r.fontStyle,a.defaultFontStyle),f=n(r.fontFamily,a.defaultFontFamily),h=o.fontString(d,c,f),m=o.options.toLineHeight(r.lineHeight,d),_=m/2+r.padding,p=0,g=t.top,y=t.left,v=t.bottom,M=t.right;e.fillStyle=n(r.fontColor,a.defaultFontColor),// render in correct colour
e.font=h,
// Horizontal
t.isHorizontal()?(u=y+(M-y)/2,// midpoint of the width
l=g+_,s=M-y):(u="left"===r.position?y+_:M-_,l=g+(v-g)/2,s=v-g,p=Math.PI*("left"===r.position?-.5:.5)),e.save(),e.translate(u,l),e.rotate(p),e.textAlign="center",e.textBaseline="middle";var b=r.text;if(o.isArray(b))for(var L=0,k=0;k<b.length;++k)e.fillText(b[k],0,L,s),L+=m;else e.fillText(b,0,0,s);e.restore()}}});t.exports={id:"title",/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
_element:l,beforeInit:function(t){var e=t.options.title;e&&r(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(o.mergeIf(e,i.global.title),n?(s.configure(t,n,e),n.options=e):r(t,e)):n&&(s.removeBox(t,n),delete t.titleBlock)}}},/* 628 */
/***/
function(t,e){},/* 629 */
/***/
function(t,e,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function e(t,e,n){t[e]||Object[r](t,e,{writable:!0,configurable:!0,value:n})}if(n(630),n(827),n(828),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var r="defineProperty";e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(e,n(84))},/* 630 */
/***/
function(t,e,n){n(631),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(649),n(650),n(651),n(652),n(653),n(654),n(655),n(656),n(657),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(670),n(671),n(672),n(673),n(674),n(675),n(676),n(677),n(678),n(679),n(680),n(681),n(682),n(683),n(684),n(685),n(686),n(687),n(688),n(689),n(690),n(691),n(692),n(693),n(694),n(695),n(696),n(697),n(698),n(699),n(700),n(701),n(702),n(703),n(704),n(705),n(706),n(707),n(708),n(709),n(711),n(712),n(714),n(715),n(716),n(717),n(718),n(719),n(720),n(722),n(723),n(724),n(725),n(726),n(727),n(728),n(729),n(730),n(731),n(732),n(733),n(734),n(173),n(735),n(736),n(369),n(737),n(738),n(739),n(740),n(741),n(372),n(374),n(375),n(742),n(743),n(744),n(745),n(746),n(747),n(748),n(749),n(750),n(751),n(752),n(753),n(754),n(755),n(756),n(757),n(758),n(759),n(760),n(761),n(762),n(763),n(764),n(765),n(766),n(767),n(768),n(769),n(770),n(771),n(772),n(773),n(774),n(775),n(776),n(777),n(778),n(779),n(780),n(781),n(782),n(783),n(784),n(785),n(786),n(787),n(788),n(789),n(790),n(791),n(792),n(793),n(794),n(795),n(796),n(797),n(798),n(799),n(800),n(801),n(802),n(803),n(804),n(805),n(806),n(807),n(808),n(809),n(810),n(811),n(812),n(813),n(814),n(815),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),t.exports=n(31)},/* 631 */
/***/
function(t,e,n){"use strict";
// ECMAScript 6 symbols shim
var r=n(3),i=n(25),a=n(11),o=n(0),s=n(22),u=n(48).KEY,l=n(7),d=n(108),c=n(77),f=n(60),h=n(10),m=n(352),_=n(153),p=n(632),g=n(111),y=n(2),v=n(8),M=n(26),b=n(36),L=n(59),k=n(63),w=n(355),Y=n(27),x=n(12),D=n(61),S=Y.f,T=x.f,j=w.f,E=r.Symbol,O=r.JSON,H=O&&O.stringify,P=h("_hidden"),A=h("toPrimitive"),C={}.propertyIsEnumerable,F=d("symbol-registry"),I=d("symbols"),W=d("op-symbols"),N=Object.prototype,z="function"==typeof E,R=r.QObject,B=!R||!R.prototype||!R.prototype.findChild,V=a&&l(function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=S(N,e);r&&delete N[e],T(t,e,n),r&&t!==N&&T(N,e,r)}:T,U=function(t){var e=I[t]=k(E.prototype);return e._k=t,e},J=z&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},q=function(t,e,n){return t===N&&q(W,e,n),y(t),e=b(e,!0),y(n),i(I,e)?(n.enumerable?(i(t,P)&&t[P][e]&&(t[P][e]=!1),n=k(n,{enumerable:L(0,!1)})):(i(t,P)||T(t,P,L(1,{})),t[P][e]=!0),V(t,e,n)):T(t,e,n)},G=function(t,e){y(t);for(var n,r=p(e=M(e)),i=0,a=r.length;a>i;)q(t,n=r[i++],e[n]);return t},K=function(t,e){return void 0===e?k(t):G(k(t),e)},$=function(t){var e=C.call(this,t=b(t,!0));return!(this===N&&i(I,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(I,t)||i(this,P)&&this[P][t])||e)},Z=function(t,e){if(t=M(t),e=b(e,!0),t!==N||!i(I,e)||i(W,e)){var n=S(t,e);return!n||!i(I,e)||i(t,P)&&t[P][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=j(M(t)),r=[],a=0;n.length>a;)i(I,e=n[a++])||e==P||e==u||r.push(e);return r},X=function(t){for(var e,n=t===N,r=j(n?W:M(t)),a=[],o=0;r.length>o;)!i(I,e=r[o++])||n&&!i(N,e)||a.push(I[e]);return a};
// 19.4.1.1 Symbol([description])
z||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(n){this===N&&e.call(W,n),i(this,P)&&i(this[P],t)&&(this[P][t]=!1),V(this,t,L(1,n))};return a&&B&&V(N,t,{configurable:!0,set:e}),U(t)},s(E.prototype,"toString",function(){return this._k}),Y.f=Z,x.f=q,n(64).f=w.f=Q,n(89).f=$,n(110).f=X,a&&!n(49)&&s(N,"propertyIsEnumerable",$,!0),m.f=function(t){return U(h(t))}),o(o.G+o.W+o.F*!z,{Symbol:E});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var nt=D(h.store),rt=0;nt.length>rt;)_(nt[rt++]);o(o.S+o.F*!z,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(t){return i(F,t+="")?F[t]:F[t]=E(t)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),o(o.S+o.F*!z,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:K,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:q,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:G,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Z,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Q,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:X}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
O&&o(o.S+o.F*(!z||l(function(){var t=E();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(v(e)||void 0!==t)&&!J(t))// IE8 returns string on undefined
return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,H.apply(O,r)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
E.prototype[A]||n(21)(E.prototype,A,E.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
c(E,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
c(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
c(r.JSON,"JSON",!0)},/* 632 */
/***/
function(t,e,n){
// all enumerable object keys, includes symbols
var r=n(61),i=n(110),a=n(89);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var o,s=n(t),u=a.f,l=0;s.length>l;)u.call(t,o=s[l++])&&e.push(o);return e}},/* 633 */
/***/
function(t,e,n){var r=n(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
r(r.S,"Object",{create:n(63)})},/* 634 */
/***/
function(t,e,n){var r=n(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(11),"Object",{defineProperty:n(12).f})},/* 635 */
/***/
function(t,e,n){var r=n(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
r(r.S+r.F*!n(11),"Object",{defineProperties:n(354)})},/* 636 */
/***/
function(t,e,n){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var r=n(26),i=n(27).f;n(39)("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},/* 637 */
/***/
function(t,e,n){
// 19.1.2.9 Object.getPrototypeOf(O)
var r=n(14),i=n(28);n(39)("getPrototypeOf",function(){return function(t){return i(r(t))}})},/* 638 */
/***/
function(t,e,n){
// 19.1.2.14 Object.keys(O)
var r=n(14),i=n(61);n(39)("keys",function(){return function(t){return i(r(t))}})},/* 639 */
/***/
function(t,e,n){
// 19.1.2.7 Object.getOwnPropertyNames(O)
n(39)("getOwnPropertyNames",function(){return n(355).f})},/* 640 */
/***/
function(t,e,n){
// 19.1.2.5 Object.freeze(O)
var r=n(8),i=n(48).onFreeze;n(39)("freeze",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},/* 641 */
/***/
function(t,e,n){
// 19.1.2.17 Object.seal(O)
var r=n(8),i=n(48).onFreeze;n(39)("seal",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},/* 642 */
/***/
function(t,e,n){
// 19.1.2.15 Object.preventExtensions(O)
var r=n(8),i=n(48).onFreeze;n(39)("preventExtensions",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},/* 643 */
/***/
function(t,e,n){
// 19.1.2.12 Object.isFrozen(O)
var r=n(8);n(39)("isFrozen",function(t){return function(e){return!r(e)||!!t&&t(e)}})},/* 644 */
/***/
function(t,e,n){
// 19.1.2.13 Object.isSealed(O)
var r=n(8);n(39)("isSealed",function(t){return function(e){return!r(e)||!!t&&t(e)}})},/* 645 */
/***/
function(t,e,n){
// 19.1.2.11 Object.isExtensible(O)
var r=n(8);n(39)("isExtensible",function(t){return function(e){return!!r(e)&&(!t||t(e))}})},/* 646 */
/***/
function(t,e,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(0);r(r.S+r.F,"Object",{assign:n(356)})},/* 647 */
/***/
function(t,e,n){
// 19.1.3.10 Object.is(value1, value2)
var r=n(0);r(r.S,"Object",{is:n(648)})},/* 648 */
/***/
function(t,e){
// 7.2.9 SameValue(x, y)
t.exports=Object.is||function(t,e){
// eslint-disable-next-line no-self-compare
return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},/* 649 */
/***/
function(t,e,n){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var r=n(0);r(r.S,"Object",{setPrototypeOf:n(157).set})},/* 650 */
/***/
function(t,e,n){"use strict";
// 19.1.3.6 Object.prototype.toString()
var r=n(90),i={};i[n(10)("toStringTag")]="z",i+""!="[object z]"&&n(22)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},/* 651 */
/***/
function(t,e,n){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var r=n(0);r(r.P,"Function",{bind:n(357)})},/* 652 */
/***/
function(t,e,n){var r=n(12).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in i||n(11)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},/* 653 */
/***/
function(t,e,n){"use strict";var r=n(8),i=n(28),a=n(10)("hasInstance"),o=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
a in o||n(12).f(o,a,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},/* 654 */
/***/
function(t,e,n){var r=n(0),i=n(359);
// 18.2.5 parseInt(string, radix)
r(r.G+r.F*(parseInt!=i),{parseInt:i})},/* 655 */
/***/
function(t,e,n){var r=n(0),i=n(360);
// 18.2.4 parseFloat(string)
r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},/* 656 */
/***/
function(t,e,n){"use strict";var r=n(3),i=n(25),a=n(33),o=n(159),s=n(36),u=n(7),l=n(64).f,d=n(27).f,c=n(12).f,f=n(78).trim,h=r.Number,m=h,_=h.prototype,p="Number"==a(n(63)(_)),g="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var n,r,i,a=e.charCodeAt(0);if(43===a||45===a){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:r=8,i=55;break;// fast equal /^0o[0-7]+$/i
default:return+e}for(var o,u=e.slice(2),l=0,d=u.length;l<d;l++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((o=u.charCodeAt(l))<48||o>i)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(p?u(function(){_.valueOf.call(n)}):"Number"!=a(n))?o(new m(y(e)),n,h):y(e)};for(var v,M=n(11)?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;M.length>b;b++)i(m,v=M[b])&&!i(h,v)&&c(h,v,d(m,v));h.prototype=_,_.constructor=h,n(22)(r,"Number",h)}},/* 657 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(38),a=n(361),o=n(160),s=1..toFixed,u=Math.floor,l=[0,0,0,0,0,0],d="Number.toFixed: incorrect invocation!",c=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*l[n],l[n]=r%1e7,r=u(r/1e7)},f=function(t){for(var e=6,n=0;--e>=0;)n+=l[e],l[e]=u(n/t),n=n%t*1e7},h=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var n=String(l[t]);e=""===e?n:e+o.call("0",7-n.length)+n}return e},m=function(t,e,n){return 0===e?n:e%2==1?m(t,e-1,n*t):m(t*t,e/2,n)},_=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e};r(r.P+r.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(7)(function(){
// V8 ~ Android 4.3-
s.call({})})),"Number",{toFixed:function(t){var e,n,r,s,u=a(this,d),l=i(t),p="",g="0";if(l<0||l>20)throw RangeError(d);
// eslint-disable-next-line no-self-compare
if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(p="-",u=-u),u>1e-21)if(e=_(u*m(2,69,1))-69,n=e<0?u*m(2,-e,1):u/m(2,e,1),n*=4503599627370496,(e=52-e)>0){for(c(0,n),r=l;r>=7;)c(1e7,0),r-=7;for(c(m(10,r,1),0),r=e-1;r>=23;)f(1<<23),r-=23;f(1<<r),c(1,1),f(2),g=h()}else c(0,n),c(1<<-e,0),g=h()+o.call("0",l);return l>0?(s=g.length,g=p+(s<=l?"0."+o.call("0",l-s)+g:g.slice(0,s-l)+"."+g.slice(s-l))):g=p+g,g}})},/* 658 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(7),a=n(361),o=1..toPrecision;r(r.P+r.F*(i(function(){
// IE7-
return"1"!==o.call(1,void 0)})||!i(function(){
// V8 ~ Android 4.3-
o.call({})})),"Number",{toPrecision:function(t){var e=a(this,"Number#toPrecision: incorrect invocation!");return void 0===t?o.call(e):o.call(e,t)}})},/* 659 */
/***/
function(t,e,n){
// 20.1.2.1 Number.EPSILON
var r=n(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 660 */
/***/
function(t,e,n){
// 20.1.2.2 Number.isFinite(number)
var r=n(0),i=n(3).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},/* 661 */
/***/
function(t,e,n){
// 20.1.2.3 Number.isInteger(number)
var r=n(0);r(r.S,"Number",{isInteger:n(362)})},/* 662 */
/***/
function(t,e,n){
// 20.1.2.4 Number.isNaN(number)
var r=n(0);r(r.S,"Number",{isNaN:function(t){
// eslint-disable-next-line no-self-compare
return t!=t}})},/* 663 */
/***/
function(t,e,n){
// 20.1.2.5 Number.isSafeInteger(number)
var r=n(0),i=n(362),a=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&a(t)<=9007199254740991}})},/* 664 */
/***/
function(t,e,n){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var r=n(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 665 */
/***/
function(t,e,n){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var r=n(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 666 */
/***/
function(t,e,n){var r=n(0),i=n(360);
// 20.1.2.12 Number.parseFloat(string)
r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},/* 667 */
/***/
function(t,e,n){var r=n(0),i=n(359);
// 20.1.2.13 Number.parseInt(string, radix)
r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},/* 668 */
/***/
function(t,e,n){
// 20.2.2.3 Math.acosh(x)
var r=n(0),i=n(363),a=Math.sqrt,o=Math.acosh;r(r.S+r.F*!(o&&710==Math.floor(o(Number.MAX_VALUE))&&o(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+a(t-1)*a(t+1))}})},/* 669 */
/***/
function(t,e,n){function r(t){return isFinite(t=+t)&&0!=t?t<0?-r(-t):Math.log(t+Math.sqrt(t*t+1)):t}
// 20.2.2.5 Math.asinh(x)
var i=n(0),a=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
i(i.S+i.F*!(a&&1/a(0)>0),"Math",{asinh:r})},/* 670 */
/***/
function(t,e,n){
// 20.2.2.7 Math.atanh(x)
var r=n(0),i=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},/* 671 */
/***/
function(t,e,n){
// 20.2.2.9 Math.cbrt(x)
var r=n(0),i=n(161);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},/* 672 */
/***/
function(t,e,n){
// 20.2.2.11 Math.clz32(x)
var r=n(0);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},/* 673 */
/***/
function(t,e,n){
// 20.2.2.12 Math.cosh(x)
var r=n(0),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},/* 674 */
/***/
function(t,e,n){
// 20.2.2.14 Math.expm1(x)
var r=n(0),i=n(162);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},/* 675 */
/***/
function(t,e,n){
// 20.2.2.16 Math.fround(x)
var r=n(0);r(r.S,"Math",{fround:n(364)})},/* 676 */
/***/
function(t,e,n){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var r=n(0),i=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(// eslint-disable-line no-unused-vars
var n,r,a=0,o=0,s=arguments.length,u=0;o<s;)n=i(arguments[o++]),u<n?(r=u/n,a=a*r*r+1,u=n):n>0?(r=n/u,a+=r*r):a+=n;return u===1/0?1/0:u*Math.sqrt(a)}})},/* 677 */
/***/
function(t,e,n){
// 20.2.2.18 Math.imul(x, y)
var r=n(0),i=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
r(r.S+r.F*n(7)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,e){var n=+t,r=+e,i=65535&n,a=65535&r;return 0|i*a+((65535&n>>>16)*a+i*(65535&r>>>16)<<16>>>0)}})},/* 678 */
/***/
function(t,e,n){
// 20.2.2.21 Math.log10(x)
var r=n(0);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},/* 679 */
/***/
function(t,e,n){
// 20.2.2.20 Math.log1p(x)
var r=n(0);r(r.S,"Math",{log1p:n(363)})},/* 680 */
/***/
function(t,e,n){
// 20.2.2.22 Math.log2(x)
var r=n(0);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},/* 681 */
/***/
function(t,e,n){
// 20.2.2.28 Math.sign(x)
var r=n(0);r(r.S,"Math",{sign:n(161)})},/* 682 */
/***/
function(t,e,n){
// 20.2.2.30 Math.sinh(x)
var r=n(0),i=n(162),a=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
r(r.S+r.F*n(7)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(a(t-1)-a(-t-1))*(Math.E/2)}})},/* 683 */
/***/
function(t,e,n){
// 20.2.2.33 Math.tanh(x)
var r=n(0),i=n(162),a=Math.exp;r(r.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(a(t)+a(-t))}})},/* 684 */
/***/
function(t,e,n){
// 20.2.2.34 Math.trunc(x)
var r=n(0);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},/* 685 */
/***/
function(t,e,n){var r=n(0),i=n(62),a=String.fromCharCode,o=String.fromCodePoint;
// length should be 1, old FF problem
r(r.S+r.F*(!!o&&1!=o.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(t){for(// eslint-disable-line no-unused-vars
var e,n=[],r=arguments.length,o=0;r>o;){if(e=+arguments[o++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?a(e):a(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},/* 686 */
/***/
function(t,e,n){var r=n(0),i=n(26),a=n(13);r(r.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(t){for(var e=i(t.raw),n=a(e.length),r=arguments.length,o=[],s=0;n>s;)o.push(String(e[s++])),s<r&&o.push(String(arguments[s]));return o.join("")}})},/* 687 */
/***/
function(t,e,n){"use strict";
// 21.1.3.25 String.prototype.trim()
n(78)("trim",function(t){return function(){return t(this,3)}})},/* 688 */
/***/
function(t,e,n){"use strict";var r=n(163)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n(164)(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},/* 689 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(163)(!1);r(r.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(t){return i(this,t)}})},/* 690 */
/***/
function(t,e,n){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var r=n(0),i=n(13),a=n(166),o="".endsWith;r(r.P+r.F*n(167)("endsWith"),"String",{endsWith:function(t){var e=a(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=i(e.length),s=void 0===n?r:Math.min(i(n),r),u=String(t);return o?o.call(e,u,s):e.slice(s-u.length,s)===u}})},/* 691 */
/***/
function(t,e,n){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var r=n(0),i=n(166);r(r.P+r.F*n(167)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},/* 692 */
/***/
function(t,e,n){var r=n(0);r(r.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:n(160)})},/* 693 */
/***/
function(t,e,n){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var r=n(0),i=n(13),a=n(166),o="".startsWith;r(r.P+r.F*n(167)("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return o?o.call(e,r,n):e.slice(n,n+r.length)===r}})},/* 694 */
/***/
function(t,e,n){"use strict";
// B.2.3.2 String.prototype.anchor(name)
n(23)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},/* 695 */
/***/
function(t,e,n){"use strict";
// B.2.3.3 String.prototype.big()
n(23)("big",function(t){return function(){return t(this,"big","","")}})},/* 696 */
/***/
function(t,e,n){"use strict";
// B.2.3.4 String.prototype.blink()
n(23)("blink",function(t){return function(){return t(this,"blink","","")}})},/* 697 */
/***/
function(t,e,n){"use strict";
// B.2.3.5 String.prototype.bold()
n(23)("bold",function(t){return function(){return t(this,"b","","")}})},/* 698 */
/***/
function(t,e,n){"use strict";
// B.2.3.6 String.prototype.fixed()
n(23)("fixed",function(t){return function(){return t(this,"tt","","")}})},/* 699 */
/***/
function(t,e,n){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
n(23)("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},/* 700 */
/***/
function(t,e,n){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
n(23)("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},/* 701 */
/***/
function(t,e,n){"use strict";
// B.2.3.9 String.prototype.italics()
n(23)("italics",function(t){return function(){return t(this,"i","","")}})},/* 702 */
/***/
function(t,e,n){"use strict";
// B.2.3.10 String.prototype.link(url)
n(23)("link",function(t){return function(e){return t(this,"a","href",e)}})},/* 703 */
/***/
function(t,e,n){"use strict";
// B.2.3.11 String.prototype.small()
n(23)("small",function(t){return function(){return t(this,"small","","")}})},/* 704 */
/***/
function(t,e,n){"use strict";
// B.2.3.12 String.prototype.strike()
n(23)("strike",function(t){return function(){return t(this,"strike","","")}})},/* 705 */
/***/
function(t,e,n){"use strict";
// B.2.3.13 String.prototype.sub()
n(23)("sub",function(t){return function(){return t(this,"sub","","")}})},/* 706 */
/***/
function(t,e,n){"use strict";
// B.2.3.14 String.prototype.sup()
n(23)("sup",function(t){return function(){return t(this,"sup","","")}})},/* 707 */
/***/
function(t,e,n){
// 20.3.3.1 / 15.9.4.4 Date.now()
var r=n(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},/* 708 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(14),a=n(36);r(r.P+r.F*n(7)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(t){var e=i(this),n=a(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},/* 709 */
/***/
function(t,e,n){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var r=n(0),i=n(710);
// PhantomJS / old WebKit has a broken implementations
r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},/* 710 */
/***/
function(t,e,n){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var r=n(7),i=Date.prototype.getTime,a=Date.prototype.toISOString,o=function(t){return t>9?t:"0"+t};
// PhantomJS / old WebKit has a broken implementations
t.exports=r(function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))})||!r(function(){a.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+o(t.getUTCMonth()+1)+"-"+o(t.getUTCDate())+"T"+o(t.getUTCHours())+":"+o(t.getUTCMinutes())+":"+o(t.getUTCSeconds())+"."+(n>99?n:"0"+o(n))+"Z"}:a},/* 711 */
/***/
function(t,e,n){var r=Date.prototype,i=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(22)(r,"toString",function(){var t=a.call(this);
// eslint-disable-next-line no-self-compare
return t===t?i.call(this):"Invalid Date"})},/* 712 */
/***/
function(t,e,n){var r=n(10)("toPrimitive"),i=Date.prototype;r in i||n(21)(i,r,n(713))},/* 713 */
/***/
function(t,e,n){"use strict";var r=n(2),i=n(36);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},/* 714 */
/***/
function(t,e,n){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var r=n(0);r(r.S,"Array",{isArray:n(111)})},/* 715 */
/***/
function(t,e,n){"use strict";var r=n(32),i=n(0),a=n(14),o=n(365),s=n(168),u=n(13),l=n(169),d=n(170);i(i.S+i.F*!n(113)(function(t){Array.from(t)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(t){var e,n,i,c,f=a(t),h="function"==typeof this?this:Array,m=arguments.length,_=m>1?arguments[1]:void 0,p=void 0!==_,g=0,y=d(f);
// if object isn't iterable or it's array with default iterator - use simple case
if(p&&(_=r(_,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&s(y))for(e=u(f.length),n=new h(e);e>g;g++)l(n,g,p?_(f[g],g):f[g]);else for(c=y.call(f),n=new h;!(i=c.next()).done;g++)l(n,g,p?o(c,_,[i.value,g],!0):i.value);return n.length=g,n}})},/* 716 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(169);
// WebKit Array.of isn't generic
r(r.S+r.F*n(7)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)i(n,t,arguments[t++]);return n.length=e,n}})},/* 717 */
/***/
function(t,e,n){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var r=n(0),i=n(26),a=[].join;
// fallback for not array-like strings
r(r.P+r.F*(n(88)!=Object||!n(34)(a)),"Array",{join:function(t){return a.call(i(this),void 0===t?",":t)}})},/* 718 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(156),a=n(33),o=n(62),s=n(13),u=[].slice;
// fallback for not array-like ES3 strings and DOM objects
r(r.P+r.F*n(7)(function(){i&&u.call(i)}),"Array",{slice:function(t,e){var n=s(this.length),r=a(this);if(e=void 0===e?n:e,"Array"==r)return u.call(this,t,e);for(var i=o(t,n),l=o(e,n),d=s(l-i),c=new Array(d),f=0;f<d;f++)c[f]="String"==r?this.charAt(i+f):this[i+f];return c}})},/* 719 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(16),a=n(14),o=n(7),s=[].sort,u=[1,2,3];r(r.P+r.F*(o(function(){
// IE8-
u.sort(void 0)})||!o(function(){
// V8 bug
u.sort(null)})||!n(34)(s)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},/* 720 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(40)(0),a=n(34)([].forEach,!0);r(r.P+r.F*!a,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(t){return i(this,t,arguments[1])}})},/* 721 */
/***/
function(t,e,n){var r=n(8),i=n(111),a=n(10)("species");t.exports=function(t){var e;
// cross-realm fallback
return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},/* 722 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(40)(1);r(r.P+r.F*!n(34)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(t){return i(this,t,arguments[1])}})},/* 723 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(40)(2);r(r.P+r.F*!n(34)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(t){return i(this,t,arguments[1])}})},/* 724 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(40)(3);r(r.P+r.F*!n(34)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(t){return i(this,t,arguments[1])}})},/* 725 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(40)(4);r(r.P+r.F*!n(34)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(t){return i(this,t,arguments[1])}})},/* 726 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(366);r(r.P+r.F*!n(34)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},/* 727 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(366);r(r.P+r.F*!n(34)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},/* 728 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(109)(!1),a=[].indexOf,o=!!a&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(o||!n(34)(a)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(t){return o?a.apply(this,arguments)||0:i(this,t,arguments[1])}})},/* 729 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(26),a=n(38),o=n(13),s=[].lastIndexOf,u=!!s&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(u||!n(34)(s)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(t){
// convert -0 to +0
if(u)return s.apply(this,arguments)||0;var e=i(this),n=o(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,a(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},/* 730 */
/***/
function(t,e,n){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var r=n(0);r(r.P,"Array",{copyWithin:n(367)}),n(50)("copyWithin")},/* 731 */
/***/
function(t,e,n){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var r=n(0);r(r.P,"Array",{fill:n(172)}),n(50)("fill")},/* 732 */
/***/
function(t,e,n){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var r=n(0),i=n(40)(5),a=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){a=!1}),r(r.P+r.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)("find")},/* 733 */
/***/
function(t,e,n){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var r=n(0),i=n(40)(6),a="findIndex",o=!0;
// Shouldn't skip holes
a in[]&&Array(1)[a](function(){o=!1}),r(r.P+r.F*o,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)(a)},/* 734 */
/***/
function(t,e,n){n(65)("Array")},/* 735 */
/***/
function(t,e,n){var r=n(3),i=n(159),a=n(12).f,o=n(64).f,s=n(112),u=n(114),l=r.RegExp,d=l,c=l.prototype,f=/a/g,h=/a/g,m=new l(f)!==f;if(n(11)&&(!m||n(7)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return h[n(10)("match")]=!1,l(f)!=f||l(h)==h||"/a/i"!=l(f,"i")}))){l=function(t,e){var n=this instanceof l,r=s(t),a=void 0===e;return!n&&r&&t.constructor===l&&a?t:i(m?new d(r&&!a?t.source:t,e):d((r=t instanceof l)?t.source:t,r&&a?u.call(t):e),n?this:c,l)};for(var _=o(d),p=0;_.length>p;)!function(t){t in l||a(l,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})}(_[p++]);c.constructor=l,l.prototype=c,n(22)(r,"RegExp",l)}n(65)("RegExp")},/* 736 */
/***/
function(t,e,n){"use strict";n(369);var r=n(2),i=n(114),a=n(11),o=/./.toString,s=function(t){n(22)(RegExp.prototype,"toString",t,!0)};
// 21.2.5.14 RegExp.prototype.toString()
n(7)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},/* 737 */
/***/
function(t,e,n){
// @@match logic
n(115)("match",1,function(t,e,n){
// 21.1.3.11 String.prototype.match(regexp)
return[function(n){"use strict";var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]})},/* 738 */
/***/
function(t,e,n){
// @@replace logic
n(115)("replace",2,function(t,e,n){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(r,i){"use strict";var a=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,i):n.call(String(a),r,i)},n]})},/* 739 */
/***/
function(t,e,n){
// @@search logic
n(115)("search",1,function(t,e,n){
// 21.1.3.15 String.prototype.search(regexp)
return[function(n){"use strict";var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]})},/* 740 */
/***/
function(t,e,n){
// @@split logic
n(115)("split",2,function(t,e,r){"use strict";var i=n(112),a=r,o=[].push,s="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[s]||2!="ab".split(/(?:ab)*/)[s]||4!=".".split(/(.?)(.?)/)[s]||".".split(/()()/)[s]>1||"".split(/.?/)[s]){var u=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
r=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];
// If `separator` is not a regex, use native split
if(!i(t))return a.call(n,t,e);var r,l,d,c,f,h=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),_=0,p=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,m+"g");for(
// Doesn't need flags gy, but they don't hurt
u||(r=new RegExp("^"+g.source+"$(?!\\s)",m));(l=g.exec(n))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
d=l.index+l[0][s])>_&&(h.push(n.slice(_,l.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!u&&l[s]>1&&l[0].replace(r,function(){for(f=1;f<arguments[s]-2;f++)void 0===arguments[f]&&(l[f]=void 0)}),l[s]>1&&l.index<n[s]&&o.apply(h,l.slice(1)),c=l[0][s],_=d,h[s]>=p));)g.lastIndex===l.index&&g.lastIndex++;return _===n[s]?!c&&g.test("")||h.push(""):h.push(n.slice(_)),h[s]>p?h.slice(0,p):h}}else"0".split(void 0,0)[s]&&(r=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(n,i){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):r.call(String(a),n,i)},r]})},/* 741 */
/***/
function(t,e,n){"use strict";var r,i,a,o,s=n(49),u=n(3),l=n(32),d=n(90),c=n(0),f=n(8),h=n(16),m=n(66),_=n(67),p=n(116),g=n(174).set,y=n(175)(),v=n(176),M=n(370),b=n(117),L=n(371),k=u.TypeError,w=u.process,Y=w&&w.versions,x=Y&&Y.v8||"",D=u.Promise,S="process"==d(w),T=function(){},j=i=v.f,E=!!function(){try{
// correct subclassing with @@species support
var t=D.resolve(1),e=(t.constructor={})[n(10)("species")]=function(t){t(T,T)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(S||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==x.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),O=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},H=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,i=1==t._s,a=0;n.length>a;)!function(e){var n,a,o,s=i?e.ok:e.fail,u=e.resolve,l=e.reject,d=e.domain;try{s?(i||(2==t._h&&C(t),t._h=1),!0===s?n=r:(d&&d.enter(),n=s(r),// may throw
d&&(d.exit(),o=!0)),n===e.promise?l(k("Promise-chain cycle")):(a=O(n))?a.call(n,u,l):u(n)):l(r)}catch(t){d&&!o&&d.exit(),l(t)}}(n[a++]);// variable length - can't use forEach
t._c=[],t._n=!1,e&&!t._h&&P(t)})}},P=function(t){g.call(u,function(){var e,n,r,i=t._v,a=A(t);if(a&&(e=M(function(){S?w.emit("unhandledRejection",i,t):(n=u.onunhandledrejection)?n({promise:t,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t._h=S||A(t)?2:1),t._a=void 0,a&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){g.call(u,function(){var e;S?w.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,// unwrap
e._v=t,e._s=2,e._a||(e._a=e._c.slice()),H(e,!0))},I=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;// unwrap
try{if(n===t)throw k("Promise can't be resolved itself");(e=O(t))?y(function(){var r={_w:n,_d:!1};// wrap
try{e.call(t,l(I,r,1),l(F,r,1))}catch(t){F.call(r,t)}}):(n._v=t,n._s=1,H(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};
// constructor polyfill
E||(
// 25.4.3.1 Promise(executor)
D=function(t){m(this,D,"Promise","_h"),h(t),r.call(this);try{t(l(I,this,1),l(F,this,1))}catch(t){F.call(this,t)}},
// eslint-disable-next-line no-unused-vars
r=function(t){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},r.prototype=n(68)(D.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(t,e){var n=j(p(this,D));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=S?w.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&H(this,!1),n.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new r;this.promise=t,this.resolve=l(I,t,1),this.reject=l(F,t,1)},v.f=j=function(t){return t===D||t===o?new a(t):i(t)}),c(c.G+c.W+c.F*!E,{Promise:D}),n(77)(D,"Promise"),n(65)("Promise"),o=n(31).Promise,
// statics
c(c.S+c.F*!E,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(t){var e=j(this);return(0,e.reject)(t),e.promise}}),c(c.S+c.F*(s||!E),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(t){return L(s&&this===o?D:this,t)}}),c(c.S+c.F*!(E&&n(113)(function(t){D.all(t).catch(T)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(t){var e=this,n=j(e),r=n.resolve,i=n.reject,a=M(function(){var n=[],a=0,o=1;_(t,!1,function(t){var s=a++,u=!1;n.push(void 0),o++,e.resolve(t).then(function(t){u||(u=!0,n[s]=t,--o||r(n))},i)}),--o||r(n)});return a.e&&i(a.v),n.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(t){var e=this,n=j(e),r=n.reject,i=M(function(){_(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},/* 742 */
/***/
function(t,e,n){"use strict";var r=n(376),i=n(80);
// 23.4 WeakSet Objects
n(118)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},/* 743 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(119),a=n(177),o=n(2),s=n(62),u=n(13),l=n(8),d=n(3).ArrayBuffer,c=n(116),f=a.ArrayBuffer,h=a.DataView,m=i.ABV&&d.isView,_=f.prototype.slice,p=i.VIEW;r(r.G+r.W+r.F*(d!==f),{ArrayBuffer:f}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(t){return m&&m(t)||l(t)&&p in t}}),r(r.P+r.U+r.F*n(7)(function(){return!new f(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(t,e){if(void 0!==_&&void 0===e)return _.call(o(this),t);for(// FF fix
var n=o(this).byteLength,r=s(t,n),i=s(void 0===e?n:e,n),a=new(c(this,f))(u(i-r)),l=new h(this),d=new h(a),m=0;r<i;)d.setUint8(m++,l.getUint8(r++));return a}}),n(65)("ArrayBuffer")},/* 744 */
/***/
function(t,e,n){var r=n(0);r(r.G+r.W+r.F*!n(119).ABV,{DataView:n(177).DataView})},/* 745 */
/***/
function(t,e,n){n(42)("Int8",1,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 746 */
/***/
function(t,e,n){n(42)("Uint8",1,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 747 */
/***/
function(t,e,n){n(42)("Uint8",1,function(t){return function(e,n,r){return t(this,e,n,r)}},!0)},/* 748 */
/***/
function(t,e,n){n(42)("Int16",2,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 749 */
/***/
function(t,e,n){n(42)("Uint16",2,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 750 */
/***/
function(t,e,n){n(42)("Int32",4,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 751 */
/***/
function(t,e,n){n(42)("Uint32",4,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 752 */
/***/
function(t,e,n){n(42)("Float32",4,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 753 */
/***/
function(t,e,n){n(42)("Float64",8,function(t){return function(e,n,r){return t(this,e,n,r)}})},/* 754 */
/***/
function(t,e,n){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var r=n(0),i=n(16),a=n(2),o=(n(3).Reflect||{}).apply,s=Function.apply;
// MS Edge argumentsList argument is optional
r(r.S+r.F*!n(7)(function(){o(function(){})}),"Reflect",{apply:function(t,e,n){var r=i(t),u=a(n);return o?o(r,e,u):s.call(r,e,u)}})},/* 755 */
/***/
function(t,e,n){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var r=n(0),i=n(63),a=n(16),o=n(2),s=n(8),u=n(7),l=n(357),d=(n(3).Reflect||{}).construct,c=u(function(){function t(){}return!(d(function(){},[],t)instanceof t)}),f=!u(function(){d(function(){})});r(r.S+r.F*(c||f),"Reflect",{construct:function(t,e){a(t),o(e);var n=arguments.length<3?t:a(arguments[2]);if(f&&!c)return d(t,e,n);if(t==n){
// w/o altered newTarget, optimization for 0-4 arguments
switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}
// w/o altered newTarget, lot of arguments case
var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}
// with altered newTarget, not support built-in constructors
var u=n.prototype,h=i(s(u)?u:Object.prototype),m=Function.apply.call(t,h,e);return s(m)?m:h}})},/* 756 */
/***/
function(t,e,n){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var r=n(12),i=n(0),a=n(2),o=n(36);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
i(i.S+i.F*n(7)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,n){a(t),e=o(e,!0),a(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},/* 757 */
/***/
function(t,e,n){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var r=n(0),i=n(27).f,a=n(2);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(a(t),e);return!(n&&!n.configurable)&&delete t[e]}})},/* 758 */
/***/
function(t,e,n){"use strict";
// 26.1.5 Reflect.enumerate(target)
var r=n(0),i=n(2),a=function(t){this._t=i(t),// target
this._i=0;// next index
var e,n=this._k=[];for(e in t)n.push(e)};n(165)(a,"Object",function(){var t,e=this,n=e._k;do{if(e._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[e._i++])in e._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function(t){return new a(t)}})},/* 759 */
/***/
function(t,e,n){function r(t,e){var n,s,d=arguments.length<3?t:arguments[2];return l(t)===d?t[e]:(n=i.f(t,e))?o(n,"value")?n.value:void 0!==n.get?n.get.call(d):void 0:u(s=a(t))?r(s,e,d):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var i=n(27),a=n(28),o=n(25),s=n(0),u=n(8),l=n(2);s(s.S,"Reflect",{get:r})},/* 760 */
/***/
function(t,e,n){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var r=n(27),i=n(0),a=n(2);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(a(t),e)}})},/* 761 */
/***/
function(t,e,n){
// 26.1.8 Reflect.getPrototypeOf(target)
var r=n(0),i=n(28),a=n(2);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(a(t))}})},/* 762 */
/***/
function(t,e,n){
// 26.1.9 Reflect.has(target, propertyKey)
var r=n(0);r(r.S,"Reflect",{has:function(t,e){return e in t}})},/* 763 */
/***/
function(t,e,n){
// 26.1.10 Reflect.isExtensible(target)
var r=n(0),i=n(2),a=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!a||a(t)}})},/* 764 */
/***/
function(t,e,n){
// 26.1.11 Reflect.ownKeys(target)
var r=n(0);r(r.S,"Reflect",{ownKeys:n(378)})},/* 765 */
/***/
function(t,e,n){
// 26.1.12 Reflect.preventExtensions(target)
var r=n(0),i=n(2),a=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return a&&a(t),!0}catch(t){return!1}}})},/* 766 */
/***/
function(t,e,n){function r(t,e,n){var u,f,h=arguments.length<4?t:arguments[3],m=a.f(d(t),e);if(!m){if(c(f=o(t)))return r(f,e,n,h);m=l(0)}if(s(m,"value")){if(!1===m.writable||!c(h))return!1;if(u=a.f(h,e)){if(u.get||u.set||!1===u.writable)return!1;u.value=n,i.f(h,e,u)}else i.f(h,e,l(0,n));return!0}return void 0!==m.set&&(m.set.call(h,n),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var i=n(12),a=n(27),o=n(28),s=n(25),u=n(0),l=n(59),d=n(2),c=n(8);u(u.S,"Reflect",{set:r})},/* 767 */
/***/
function(t,e,n){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var r=n(0),i=n(157);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},/* 768 */
/***/
function(t,e,n){"use strict";
// https://github.com/tc39/Array.prototype.includes
var r=n(0),i=n(109)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)("includes")},/* 769 */
/***/
function(t,e,n){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var r=n(0),i=n(379),a=n(14),o=n(13),s=n(16),u=n(171);r(r.P,"Array",{flatMap:function(t){var e,n,r=a(this);return s(t),e=o(r.length),n=u(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n(50)("flatMap")},/* 770 */
/***/
function(t,e,n){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var r=n(0),i=n(379),a=n(14),o=n(13),s=n(38),u=n(171);r(r.P,"Array",{flatten:function(){var t=arguments[0],e=a(this),n=o(e.length),r=u(e,0);return i(r,e,e,n,0,void 0===t?1:s(t)),r}}),n(50)("flatten")},/* 771 */
/***/
function(t,e,n){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var r=n(0),i=n(163)(!0);r(r.P,"String",{at:function(t){return i(this,t)}})},/* 772 */
/***/
function(t,e,n){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var r=n(0),i=n(380),a=n(117);
// https://github.com/zloirock/core-js/issues/280
r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(a),"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},/* 773 */
/***/
function(t,e,n){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var r=n(0),i=n(380),a=n(117);
// https://github.com/zloirock/core-js/issues/280
r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(a),"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},/* 774 */
/***/
function(t,e,n){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
n(78)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},/* 775 */
/***/
function(t,e,n){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
n(78)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},/* 776 */
/***/
function(t,e,n){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var r=n(0),i=n(37),a=n(13),o=n(112),s=n(114),u=RegExp.prototype,l=function(t,e){this._r=t,this._s=e};n(165)(l,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),r(r.P,"String",{matchAll:function(t){if(i(this),!o(t))throw TypeError(t+" is not a regexp!");var e=String(this),n="flags"in u?String(t.flags):s.call(t),r=new RegExp(t.source,~n.indexOf("g")?n:"g"+n);return r.lastIndex=a(t.lastIndex),new l(r,e)}})},/* 777 */
/***/
function(t,e,n){n(153)("asyncIterator")},/* 778 */
/***/
function(t,e,n){n(153)("observable")},/* 779 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var r=n(0),i=n(378),a=n(26),o=n(27),s=n(169);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=a(t),u=o.f,l=i(r),d={},c=0;l.length>c;)void 0!==(n=u(r,e=l[c++]))&&s(d,e,n);return d}})},/* 780 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-object-values-entries
var r=n(0),i=n(381)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},/* 781 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-object-values-entries
var r=n(0),i=n(381)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},/* 782 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(14),a=n(16),o=n(12);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
n(11)&&r(r.P+n(120),"Object",{__defineGetter__:function(t,e){o.f(i(this),t,{get:a(e),enumerable:!0,configurable:!0})}})},/* 783 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(14),a=n(16),o=n(12);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
n(11)&&r(r.P+n(120),"Object",{__defineSetter__:function(t,e){o.f(i(this),t,{set:a(e),enumerable:!0,configurable:!0})}})},/* 784 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(14),a=n(36),o=n(28),s=n(27).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
n(11)&&r(r.P+n(120),"Object",{__lookupGetter__:function(t){var e,n=i(this),r=a(t,!0);do{if(e=s(n,r))return e.get}while(n=o(n))}})},/* 785 */
/***/
function(t,e,n){"use strict";var r=n(0),i=n(14),a=n(36),o=n(28),s=n(27).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
n(11)&&r(r.P+n(120),"Object",{__lookupSetter__:function(t){var e,n=i(this),r=a(t,!0);do{if(e=s(n,r))return e.set}while(n=o(n))}})},/* 786 */
/***/
function(t,e,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(0);r(r.P+r.R,"Map",{toJSON:n(382)("Map")})},/* 787 */
/***/
function(t,e,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(0);r(r.P+r.R,"Set",{toJSON:n(382)("Set")})},/* 788 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
n(121)("Map")},/* 789 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
n(121)("Set")},/* 790 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
n(121)("WeakMap")},/* 791 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
n(121)("WeakSet")},/* 792 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
n(122)("Map")},/* 793 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
n(122)("Set")},/* 794 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
n(122)("WeakMap")},/* 795 */
/***/
function(t,e,n){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
n(122)("WeakSet")},/* 796 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-global
var r=n(0);r(r.G,{global:n(3)})},/* 797 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-global
var r=n(0);r(r.S,"System",{global:n(3)})},/* 798 */
/***/
function(t,e,n){
// https://github.com/ljharb/proposal-is-error
var r=n(0),i=n(33);r(r.S,"Error",{isError:function(t){return"Error"===i(t)}})},/* 799 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{clamp:function(t,e,n){return Math.min(n,Math.max(e,t))}})},/* 800 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 801 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0),i=180/Math.PI;r(r.S,"Math",{degrees:function(t){return t*i}})},/* 802 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0),i=n(384),a=n(364);r(r.S,"Math",{fscale:function(t,e,n,r,o){return a(i(t,e,n,r,o))}})},/* 803 */
/***/
function(t,e,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{iaddh:function(t,e,n,r){var i=t>>>0,a=e>>>0,o=n>>>0;return a+(r>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},/* 804 */
/***/
function(t,e,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{isubh:function(t,e,n,r){var i=t>>>0,a=e>>>0,o=n>>>0;return a-(r>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},/* 805 */
/***/
function(t,e,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{imulh:function(t,e){var n=+t,r=+e,i=65535&n,a=65535&r,o=n>>16,s=r>>16,u=(o*a>>>0)+(i*a>>>16);return o*s+(u>>16)+((i*s>>>0)+(65535&u)>>16)}})},/* 806 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 807 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0),i=Math.PI/180;r(r.S,"Math",{radians:function(t){return t*i}})},/* 808 */
/***/
function(t,e,n){
// https://rwaldron.github.io/proposal-math-extensions/
var r=n(0);r(r.S,"Math",{scale:n(384)})},/* 809 */
/***/
function(t,e,n){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var r=n(0);r(r.S,"Math",{umulh:function(t,e){var n=+t,r=+e,i=65535&n,a=65535&r,o=n>>>16,s=r>>>16,u=(o*a>>>0)+(i*a>>>16);return o*s+(u>>>16)+((i*s>>>0)+(65535&u)>>>16)}})},/* 810 */
/***/
function(t,e,n){
// http://jfbastien.github.io/papers/Math.signbit.html
var r=n(0);r(r.S,"Math",{signbit:function(t){
// eslint-disable-next-line no-self-compare
return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},/* 811 */
/***/
function(t,e,n){"use strict";
// https://github.com/tc39/proposal-promise-finally
var r=n(0),i=n(31),a=n(3),o=n(116),s=n(371);r(r.P+r.R,"Promise",{finally:function(t){var e=o(this,i.Promise||a.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},/* 812 */
/***/
function(t,e,n){"use strict";
// https://github.com/tc39/proposal-promise-try
var r=n(0),i=n(176),a=n(370);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=a(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},/* 813 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=r.key,o=r.set;r.exp({defineMetadata:function(t,e,n,r){o(t,e,i(n),a(r))}})},/* 814 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=r.key,o=r.map,s=r.store;r.exp({deleteMetadata:function(t,e){var n=arguments.length<3?void 0:a(arguments[2]),r=o(i(e),n,!1);if(void 0===r||!r.delete(t))return!1;if(r.size)return!0;var u=s.get(e);return u.delete(n),!!u.size||s.delete(e)}})},/* 815 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=n(28),o=r.has,s=r.get,u=r.key,l=function(t,e,n){if(o(t,e,n))return s(t,e,n);var r=a(e);return null!==r?l(t,r,n):void 0};r.exp({getMetadata:function(t,e){return l(t,i(e),arguments.length<3?void 0:u(arguments[2]))}})},/* 816 */
/***/
function(t,e,n){var r=n(374),i=n(383),a=n(43),o=n(2),s=n(28),u=a.keys,l=a.key,d=function(t,e){var n=u(t,e),a=s(t);if(null===a)return n;var o=d(a,e);return o.length?n.length?i(new r(n.concat(o))):o:n};a.exp({getMetadataKeys:function(t){return d(o(t),arguments.length<2?void 0:l(arguments[1]))}})},/* 817 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=r.get,o=r.key;r.exp({getOwnMetadata:function(t,e){return a(t,i(e),arguments.length<3?void 0:o(arguments[2]))}})},/* 818 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=r.keys,o=r.key;r.exp({getOwnMetadataKeys:function(t){return a(i(t),arguments.length<2?void 0:o(arguments[1]))}})},/* 819 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=n(28),o=r.has,s=r.key,u=function(t,e,n){if(o(t,e,n))return!0;var r=a(e);return null!==r&&u(t,r,n)};r.exp({hasMetadata:function(t,e){return u(t,i(e),arguments.length<3?void 0:s(arguments[2]))}})},/* 820 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=r.has,o=r.key;r.exp({hasOwnMetadata:function(t,e){return a(t,i(e),arguments.length<3?void 0:o(arguments[2]))}})},/* 821 */
/***/
function(t,e,n){var r=n(43),i=n(2),a=n(16),o=r.key,s=r.set;r.exp({metadata:function(t,e){return function(n,r){s(t,e,(void 0!==r?i:a)(n),o(r))}}})},/* 822 */
/***/
function(t,e,n){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var r=n(0),i=n(175)(),a=n(3).process,o="process"==n(33)(a);r(r.G,{asap:function(t){var e=o&&a.domain;i(e?e.bind(t):t)}})},/* 823 */
/***/
function(t,e,n){"use strict";
// https://github.com/zenparsing/es-observable
var r=n(0),i=n(3),a=n(31),o=n(175)(),s=n(10)("observable"),u=n(16),l=n(2),d=n(66),c=n(68),f=n(21),h=n(67),m=h.RETURN,_=function(t){return null==t?void 0:u(t)},p=function(t){var e=t._c;e&&(t._c=void 0,e())},g=function(t){return void 0===t._o},y=function(t){g(t)||(t._o=void 0,p(t))},v=function(t,e){l(t),this._c=void 0,this._o=t,t=new M(this);try{var n=e(t),r=n;null!=n&&("function"==typeof n.unsubscribe?n=function(){r.unsubscribe()}:u(n),this._c=n)}catch(e){return void t.error(e)}g(this)&&p(this)};v.prototype=c({},{unsubscribe:function(){y(this)}});var M=function(t){this._s=t};M.prototype=c({},{next:function(t){var e=this._s;if(!g(e)){var n=e._o;try{var r=_(n.next);if(r)return r.call(n,t)}catch(t){try{y(e)}finally{throw t}}}},error:function(t){var e=this._s;if(g(e))throw t;var n=e._o;e._o=void 0;try{var r=_(n.error);if(!r)throw t;t=r.call(n,t)}catch(t){try{p(e)}finally{throw t}}return p(e),t},complete:function(t){var e=this._s;if(!g(e)){var n=e._o;e._o=void 0;try{var r=_(n.complete);t=r?r.call(n,t):void 0}catch(t){try{p(e)}finally{throw t}}return p(e),t}}});var b=function(t){d(this,b,"Observable","_f")._f=u(t)};c(b.prototype,{subscribe:function(t){return new v(t,this._f)},forEach:function(t){var e=this;return new(a.Promise||i.Promise)(function(n,r){u(t);var i=e.subscribe({next:function(e){try{return t(e)}catch(t){r(t),i.unsubscribe()}},error:r,complete:n})})}}),c(b,{from:function(t){var e="function"==typeof this?this:b,n=_(l(t)[s]);if(n){var r=l(n.call(t));return r.constructor===e?r:new e(function(t){return r.subscribe(t)})}return new e(function(e){var n=!1;return o(function(){if(!n){try{if(h(t,!1,function(t){if(e.next(t),n)return m})===m)return}catch(t){if(n)throw t;return void e.error(t)}e.complete()}}),function(){n=!0}})},of:function(){for(var t=0,e=arguments.length,n=new Array(e);t<e;)n[t]=arguments[t++];return new("function"==typeof this?this:b)(function(t){var e=!1;return o(function(){if(!e){for(var r=0;r<n.length;++r)if(t.next(n[r]),e)return;t.complete()}}),function(){e=!0}})}}),f(b.prototype,s,function(){return this}),r(r.G,{Observable:b}),n(65)("Observable")},/* 824 */
/***/
function(t,e,n){
// ie9- setTimeout & setInterval additional parameters fix
var r=n(3),i=n(0),a=n(117),o=[].slice,s=/MSIE .\./.test(a),u=function(t){return function(e,n){var r=arguments.length>2,i=!!r&&o.call(arguments,2);return t(r?function(){
// eslint-disable-next-line no-new-func
("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*s,{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},/* 825 */
/***/
function(t,e,n){var r=n(0),i=n(174);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},/* 826 */
/***/
function(t,e,n){for(var r=n(173),i=n(61),a=n(22),o=n(3),s=n(21),u=n(79),l=n(10),d=l("iterator"),c=l("toStringTag"),f=u.Array,h={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(h),_=0;_<m.length;_++){var p,g=m[_],y=h[g],v=o[g],M=v&&v.prototype;if(M&&(M[d]||s(M,d,f),M[c]||s(M,c,g),u[g]=f,y))for(p in r)M[p]||a(M,p,r[p],!0)}},/* 827 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(e){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function(e){"use strict";function n(t,e,n,r){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var a=e&&e.prototype instanceof i?e:i,o=Object.create(a.prototype),s=new h(r||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return o._invoke=l(t,n,s),o}
// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function i(){}function a(){}function o(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function n(e,i,a,o){var s=r(t[e],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,a,o)},function(t){n("throw",t,a,o)}):Promise.resolve(l).then(function(t){
// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
u.value=t,a(u)},o)}o(s.arg)}function i(t,e){function r(){return new Promise(function(r,i){n(t,e,r,i)})}
// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
return a=a?a.then(r,r):r()}"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n));var a;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=i}function l(t,e,n){var i=Y;return function(a,o){if(i===D)throw new Error("Generator is already running");if(i===S){if("throw"===a)throw o;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return _()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var u=d(s,n);if(u){if(u===T)continue;return u}}if("next"===n.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===Y)throw i=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=D;var l=r(t,e,n);if("normal"===l.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
i=n.done?S:x,l.arg===T)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=S,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
n.method="throw",n.arg=l.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function d(t,e){var n=t.iterator[e.method];if(n===p){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
e.delegate=null,"throw"===e.method){if(t.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
e.method="return",e.arg=p,d(t,e),"throw"===e.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var i=r(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,T;var a=i.arg;
// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
// Resume execution at the desired location (see delegateYield).
// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=p),e.delegate=null,T):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function c(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(c,this),this.reset(!0)}function m(t){if(t){var e=t[M];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=p,e.done=!0,e};return r.next=r}}
// Return an iterator with no values.
return{next:_}}function _(){return{value:p,done:!0}}var p,g=Object.prototype,y=g.hasOwnProperty,v="function"==typeof Symbol?Symbol:{},M=v.iterator||"@@iterator",b=v.asyncIterator||"@@asyncIterator",L=v.toStringTag||"@@toStringTag",k="object"==typeof t,w=e.regeneratorRuntime;if(w)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(k&&(t.exports=w));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
w=e.regeneratorRuntime=k?t.exports:{},w.wrap=n;var Y="suspendedStart",x="suspendedYield",D="executing",S="completed",T={},j={};j[M]=function(){return this};var E=Object.getPrototypeOf,O=E&&E(E(m([])));O&&O!==g&&y.call(O,M)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
j=O);var H=o.prototype=i.prototype=Object.create(j);a.prototype=H.constructor=o,o.constructor=a,o[L]=a.displayName="GeneratorFunction",w.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},w.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,o):(t.__proto__=o,L in t||(t[L]="GeneratorFunction")),t.prototype=Object.create(H),t},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
w.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[b]=function(){return this},w.AsyncIterator=u,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
w.async=function(t,e,r,i){var a=new u(n(t,e,r,i));return w.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
s(H),H[L]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
H[M]=function(){return this},H.toString=function(){return"[object Generator]"},w.keys=function(t){var e=[];for(var n in t)e.push(n);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return n.done=!0,n}},w.values=m,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=p,this.done=!1,this.delegate=null,this.method="next",this.arg=p,this.tryEntries.forEach(f),!t)for(var e in this)
// Not sure about the optimal order of these conditions:
"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=p)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=p),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return e("end");if(i.tryLoc<=this.prev){var o=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,T):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),f(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;f(n)}return i}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:m(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=p),T}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,n(84))},/* 828 */
/***/
function(t,e,n){n(829),t.exports=n(31).RegExp.escape},/* 829 */
/***/
function(t,e,n){
// https://github.com/benjamingr/RexExp.escape
var r=n(0),i=n(830)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function(t){return i(t)}})},/* 830 */
/***/
function(t,e){t.exports=function(t,e){var n=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,n)}}}],[385]);