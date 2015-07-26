/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*! jQuery UI - v1.10.1 - 2013-02-15
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r,i=this.element[0].nodeName.toLowerCase(),s=i==="textarea",o=i==="input";this.isMultiLine=s?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty();this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=o(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function o(t){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(n,"mouseout",function(){e(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(n,"mouseover",function(){e.datepicker._isDisabledDatepicker(i.inline?t.parent()[0]:i.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).addClass("ui-datepicker-next-hover"))})}function u(t,n){e.extend(t,n);for(var r in n)n[r]==null&&(t[r]=n[r]);return t}e.extend(e.ui,{datepicker:{version:"1.10.1"}});var n="datepicker",r=(new Date).getTime(),i;e.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return u(this._defaults,e||{}),this},_attachDatepicker:function(t,n){var r,i,s;r=t.nodeName.toLowerCase(),i=r==="div"||r==="span",t.id||(this.uuid+=1,t.id="dp"+this.uuid),s=this._newInst(e(t),i),s.settings=e.extend({},n||{}),r==="input"?this._connectDatepicker(t,s):i&&this._inlineDatepicker(t,s)},_newInst:function(t,n){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?o(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,r){var i=e(t);r.append=e([]),r.trigger=e([]);if(i.hasClass(this.markerClassName))return;this._attachments(i,r),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(r),e.data(t,n,r),r.settings.disabled&&this._disableDatepicker(t)},_attachments:function(t,n){var r,i,s,o=this._get(n,"appendText"),u=this._get(n,"isRTL");n.append&&n.append.remove(),o&&(n.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[u?"before":"after"](n.append)),t.unbind("focus",this._showDatepicker),n.trigger&&n.trigger.remove(),r=this._get(n,"showOn"),(r==="focus"||r==="both")&&t.focus(this._showDatepicker);if(r==="button"||r==="both")i=this._get(n,"buttonText"),s=this._get(n,"buttonImage"),n.trigger=e(this._get(n,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:i,title:i}):e("<button type='button'></button>").addClass(this._triggerClass).html(s?e("<img/>").attr({src:s,alt:i,title:i}):i)),t[u?"before":"after"](n.trigger),n.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1})},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,n,r,i,s=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){n=0,r=0;for(i=0;i<e.length;i++)e[i].length>n&&(n=e[i].length,r=i);return r},s.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),e.input.attr("size",this._formatDate(e,s).length)}},_inlineDatepicker:function(t,r){var i=e(t);if(i.hasClass(this.markerClassName))return;i.addClass(this.markerClassName).append(r.dpDiv),e.data(t,n,r),this._setDate(r,this._getDefaultDate(r),!0),this._updateDatepicker(r),this._updateAlternate(r),r.settings.disabled&&this._disableDatepicker(t),r.dpDiv.css("display","block")},_dialogDatepicker:function(t,r,i,s,o){var a,f,l,c,h,p=this._dialogInst;return p||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],n,p)),u(p.settings,s||{}),r=r&&r.constructor===Date?this._formatDate(p,r):r,this._dialogInput.val(r),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(f=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[f/2-100+c,l/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],n,p),this},_destroyDatepicker:function(t){var r,i=e(t),s=e.data(t,n);if(!i.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase(),e.removeData(t,n),r==="input"?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r==="div"||r==="span")&&i.removeClass(this.markerClassName).empty()},_enableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})},_disableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,n)}catch(r){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(n,r,i){var s,o,a,f,l=this._getInst(n);if(arguments.length===2&&typeof r=="string")return r==="defaults"?e.extend({},e.datepicker._defaults):l?r==="all"?e.extend({},l.settings):this._get(l,r):null;s=r||{},typeof r=="string"&&(s={},s[r]=i),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(n,!0),a=this._getMinMaxDate(l,"min"),f=this._getMinMaxDate(l,"max"),u(l.settings,s),a!==null&&s.dateFormat!==t&&s.minDate===t&&(l.settings.minDate=this._formatDate(l,a)),f!==null&&s.dateFormat!==t&&s.maxDate===t&&(l.settings.maxDate=this._formatDate(l,f)),"disabled"in s&&(s.disabled?this._disableDatepicker(n):this._enableDatepicker(n)),this._attachments(e(n),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l))},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(t){var n,r,i,s=e.datepicker._getInst(t.target),o=!0,u=s.dpDiv.is(".ui-datepicker-rtl");s._keyEvent=!0;if(e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return i=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv),i[0]&&e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,i[0]),n=e.datepicker._get(s,"onSelect"),n?(r=e.datepicker._formatDate(s),n.apply(s.input?s.input[0]:null,[r,s])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else t.keyCode===36&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var n,r,i=e.datepicker._getInst(t.target);if(e.datepicker._get(i,"constrainInput"))return n=e.datepicker._possibleChars(e.datepicker._get(i,"dateFormat")),r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||r<" "||!n||n.indexOf(r)>-1},_doKeyUp:function(t){var n,r=e.datepicker._getInst(t.target);if(r.input.val()!==r.lastVal)try{n=e.datepicker.parseDate(e.datepicker._get(r,"dateFormat"),r.input?r.input.val():null,e.datepicker._getFormatConfig(r)),n&&(e.datepicker._setDateFromField(r),e.datepicker._updateAlternate(r),e.datepicker._updateDatepicker(r))}catch(i){}return!0},_showDatepicker:function(t){t=t.target||t,t.nodeName.toLowerCase()!=="input"&&(t=e("input",t.parentNode)[0]);if(e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t)return;var n,r,i,s,o,a,f;n=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==n&&(e.datepicker._curInst.dpDiv.stop(!0,!0),n&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),r=e.datepicker._get(n,"beforeShow"),i=r?r.apply(t,[t,n]):{};if(i===!1)return;u(n.settings,i),n.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(n),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),s=!1,e(t).parents().each(function(){return s|=e(this).css("position")==="fixed",!s}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(n),o=e.datepicker._checkOffset(n,o,s),n.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":s?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),n.inline||(a=e.datepicker._get(n,"showAnim"),f=e.datepicker._get(n,"duration"),n.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[a]?n.dpDiv.show(a,e.datepicker._get(n,"showOptions"),f):n.dpDiv[a||"show"](a?f:null),n.input.is(":visible")&&!n.input.is(":disabled")&&n.input.focus(),e.datepicker._curInst=n)},_updateDatepicker:function(t){this.maxRows=4,i=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var n,r=this._getNumberOfMonths(t),s=r[1],o=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",o*s+"em"),t.dpDiv[(r[0]!==1||r[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&t.input[0]!==document.activeElement&&t.input.focus(),t.yearshtml&&(n=t.yearshtml,setTimeout(function(){n===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),n=t.yearshtml=null},0))},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(t,n,r){var i=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,u=t.input?t.input.outerHeight():0,a=document.documentElement.clientWidth+(r?0:e(document).scrollLeft()),f=document.documentElement.clientHeight+(r?0:e(document).scrollTop());return n.left-=this._get(t,"isRTL")?i-o:0,n.left-=r&&n.left===t.input.offset().left?e(document).scrollLeft():0,n.top-=r&&n.top===t.input.offset().top+u?e(document).scrollTop():0,n.left-=Math.min(n.left,n.left+i>a&&a>i?Math.abs(n.left+i-a):0),n.top-=Math.min(n.top,n.top+s>f&&f>s?Math.abs(s+u):0),n},_findPos:function(t){var n,r=this._getInst(t),i=this._get(r,"isRTL");while(t&&(t.type==="hidden"||t.nodeType!==1||e.expr.filters.hidden(t)))t=t[i?"previousSibling":"nextSibling"];return n=e(t).offset(),[n.left,n.top]},_hideDatepicker:function(t){var r,i,s,o,u=this._curInst;if(!u||t&&u!==e.data(t,n))return;this._datepickerShowing&&(r=this._get(u,"showAnim"),i=this._get(u,"duration"),s=function(){e.datepicker._tidyDialog(u)},e.effects&&(e.effects.effect[r]||e.effects[r])?u.dpDiv.hide(r,e.datepicker._get(u,"showOptions"),i,s):u.dpDiv[r==="slideDown"?"slideUp":r==="fadeIn"?"fadeOut":"hide"](r?i:null,s),r||s(),this._datepickerShowing=!1,o=this._get(u,"onClose"),o&&o.apply(u.input?u.input[0]:null,[u.input?u.input.val():"",u]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(!e.datepicker._curInst)return;var n=e(t.target),r=e.datepicker._getInst(n[0]);(n[0].id!==e.datepicker._mainDivId&&n.parents("#"+e.datepicker._mainDivId).length===0&&!n.hasClass(e.datepicker.markerClassName)&&!n.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||n.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==r)&&e.datepicker._hideDatepicker()},_adjustDate:function(t,n,r){var i=e(t),s=this._getInst(i[0]);if(this._isDisabledDatepicker(i[0]))return;this._adjustInstDate(s,n+(r==="M"?this._get(s,"showCurrentAtPos"):0),r),this._updateDatepicker(s)},_gotoToday:function(t){var n,r=e(t),i=this._getInst(r[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(n=new Date,i.selectedDay=n.getDate(),i.drawMonth=i.selectedMonth=n.getMonth(),i.drawYear=i.selectedYear=n.getFullYear()),this._notifyChange(i),this._adjustDate(r)},_selectMonthYear:function(t,n,r){var i=e(t),s=this._getInst(i[0]);s["selected"+(r==="M"?"Month":"Year")]=s["draw"+(r==="M"?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(i)},_selectDay:function(t,n,r,i){var s,o=e(t);if(e(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))return;s=this._getInst(o[0]),s.selectedDay=s.currentDay=e("a",i).html(),s.selectedMonth=s.currentMonth=n,s.selectedYear=s.currentYear=r,this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(t){var n=e(t);this._selectDate(n,"")},_selectDate:function(t,n){var r,i=e(t),s=this._getInst(i[0]);n=n!=null?n:this._formatDate(s),s.input&&s.input.val(n),this._updateAlternate(s),r=this._get(s,"onSelect"),r?r.apply(s.input?s.input[0]:null,[n,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],typeof s.input[0]!="object"&&s.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var n,r,i,s=this._get(t,"altField");s&&(n=this._get(t,"altFormat")||this._get(t,"dateFormat"),r=this._getDate(t),i=this.formatDate(n,r,this._getFormatConfig(t)),e(s).each(function(){e(this).val(i)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t,n=new Date(e.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),t=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((t-n)/864e5)/7)+1},parseDate:function(t,n,r){if(t==null||n==null)throw"Invalid arguments";n=typeof n=="object"?n.toString():n+"";if(n==="")return null;var i,s,o,u=0,a=(r?r.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=typeof a!="string"?a:(new Date).getFullYear()%100+parseInt(a,10),l=(r?r.dayNamesShort:null)||this._defaults.dayNamesShort,c=(r?r.dayNames:null)||this._defaults.dayNames,h=(r?r.monthNamesShort:null)||this._defaults.monthNamesShort,p=(r?r.monthNames:null)||this._defaults.monthNames,d=-1,v=-1,m=-1,g=-1,y=!1,b,w=function(e){var n=i+1<t.length&&t.charAt(i+1)===e;return n&&i++,n},E=function(e){var t=w(e),r=e==="@"?14:e==="!"?20:e==="y"&&t?4:e==="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=n.substring(u).match(i);if(!s)throw"Missing number at position "+u;return u+=s[0].length,parseInt(s[0],10)},S=function(t,r,i){var s=-1,o=e.map(w(t)?i:r,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});e.each(o,function(e,t){var r=t[1];if(n.substr(u,r.length).toLowerCase()===r.toLowerCase())return s=t[0],u+=r.length,!1});if(s!==-1)return s+1;throw"Unknown name at position "+u},x=function(){if(n.charAt(u)!==t.charAt(i))throw"Unexpected literal at position "+u;u++};for(i=0;i<t.length;i++)if(y)t.charAt(i)==="'"&&!w("'")?y=!1:x();else switch(t.charAt(i)){case"d":m=E("d");break;case"D":S("D",l,c);break;case"o":g=E("o");break;case"m":v=E("m");break;case"M":v=S("M",h,p);break;case"y":d=E("y");break;case"@":b=new Date(E("@")),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"!":b=new Date((E("!")-this._ticksTo1970)/1e4),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"'":w("'")?x():y=!0;break;default:x()}if(u<n.length){o=n.substr(u);if(!/^\s+/.test(o))throw"Extra/unparsed characters found in date: "+o}d===-1?d=(new Date).getFullYear():d<100&&(d+=(new Date).getFullYear()-(new Date).getFullYear()%100+(d<=f?0:-100));if(g>-1){v=1,m=g;do{s=this._getDaysInMonth(d,v-1);if(m<=s)break;v++,m-=s}while(!0)}b=this._daylightSavingAdjust(new Date(d,v-1,m));if(b.getFullYear()!==d||b.getMonth()+1!==v||b.getDate()!==m)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r,i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=function(t){var n=r+1<e.length&&e.charAt(r+1)===t;return n&&r++,n},f=function(e,t,n){var r=""+t;if(a(e))while(r.length<n)r="0"+r;return r},l=function(e,t,n,r){return a(e)?r[t]:n[t]},c="",h=!1;if(t)for(r=0;r<e.length;r++)if(h)e.charAt(r)==="'"&&!a("'")?h=!1:c+=e.charAt(r);else switch(e.charAt(r)){case"d":c+=f("d",t.getDate(),2);break;case"D":c+=l("D",t.getDay(),i,s);break;case"o":c+=f("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":c+=f("m",t.getMonth()+1,2);break;case"M":c+=l("M",t.getMonth(),o,u);break;case"y":c+=a("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=t.getTime()*1e4+this._ticksTo1970;break;case"'":a("'")?c+="'":h=!0;break;default:c+=e.charAt(r)}return c},_possibleChars:function(e){var t,n="",r=!1,i=function(n){var r=t+1<e.length&&e.charAt(t+1)===n;return r&&t++,r};for(t=0;t<e.length;t++)if(r)e.charAt(t)==="'"&&!i("'")?r=!1:n+=e.charAt(t);else switch(e.charAt(t)){case"d":case"m":case"y":case"@":n+="0123456789";break;case"D":case"M":return null;case"'":i("'")?n+="'":r=!0;break;default:n+=e.charAt(t)}return n},_get:function(e,n){return e.settings[n]!==t?e.settings[n]:this._defaults[n]},_setDateFromField:function(e,t){if(e.input.val()===e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i=this._getDefaultDate(e),s=i,o=this._getFormatConfig(e);try{s=this.parseDate(n,r,o)||i}catch(u){r=t?"":r}e.selectedDay=s.getDate(),e.drawMonth=e.selectedMonth=s.getMonth(),e.drawYear=e.selectedYear=s.getFullYear(),e.currentDay=r?s.getDate():0,e.currentMonth=r?s.getMonth():0,e.currentYear=r?s.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,n,r){var i=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(n){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),n,e.datepicker._getFormatConfig(t))}catch(r){}var i=(n.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,s=i.getFullYear(),o=i.getMonth(),u=i.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,f=a.exec(n);while(f){switch(f[2]||"d"){case"d":case"D":u+=parseInt(f[1],10);break;case"w":case"W":u+=parseInt(f[1],10)*7;break;case"m":case"M":o+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o))}f=a.exec(n)}return new Date(s,o,u)},o=n==null||n===""?r:typeof n=="string"?s(n):typeof n=="number"?isNaN(n)?r:i(n):new Date(n.getTime());return o=o&&o.toString()==="Invalid Date"?r:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!==e.selectedMonth||s!==e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()===""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,-n,"M")},next:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,+n,"M")},hide:function(){window["DP_jQuery_"+r].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+r].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+r].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=new Date,R=this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth(),q.getDate())),U=this._get(e,"isRTL"),z=this._get(e,"showButtonPanel"),W=this._get(e,"hideIfNoPrevNext"),X=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),$=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),K=V[0]!==1||V[1]!==1,Q=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(e,"min"),Y=this._getMinMaxDate(e,"max"),Z=e.drawMonth-$,et=e.drawYear;Z<0&&(Z+=12,et--);if(Y){t=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-V[0]*V[1]+1,Y.getDate())),t=G&&t<G?G:t;while(this._daylightSavingAdjust(new Date(et,Z,1))>t)Z--,Z<0&&(Z=11,et--)}e.drawMonth=Z,e.drawYear=et,n=this._get(e,"prevText"),n=X?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):n,r=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>":W?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>",i=this._get(e,"nextText"),i=X?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>":W?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>",o=this._get(e,"currentText"),u=this._get(e,"gotoCurrent")&&e.currentDay?Q:R,o=X?this.formatDate(o,u,this._getFormatConfig(e)):o,a=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",f=z?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(U?a:"")+(this._isInRange(e,u)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(U?"":a)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,c=this._get(e,"showWeek"),h=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),d=this._get(e,"monthNames"),v=this._get(e,"monthNamesShort"),m=this._get(e,"beforeShowDay"),g=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),w="",E;for(S=0;S<V[0];S++){x="",this.maxRows=4;for(T=0;T<V[1];T++){N=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),C=" ui-corner-all",k="";if(K){k+="<div class='ui-datepicker-group";if(V[1]>1)switch(T){case 0:k+=" ui-datepicker-group-first",C=" ui-corner-"+(U?"right":"left");break;case V[1]-1:k+=" ui-datepicker-group-last",C=" ui-corner-"+(U?"left":"right");break;default:k+=" ui-datepicker-group-middle",C=""}k+="'>"}k+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&S===0?U?s:r:"")+(/all|right/.test(C)&&S===0?U?r:s:"")+this._generateMonthYearHeader(e,Z,et,G,Y,S>0||T>0,d,v)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",L=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"";for(E=0;E<7;E++)A=(E+l)%7,L+="<th"+((E+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[A]+"'>"+p[A]+"</span></th>";k+=L+"</tr></thead><tbody>",O=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,O)),M=(this._getFirstDayOfMonth(et,Z)-l+7)%7,_=Math.ceil((M+O)/7),D=K?this.maxRows>_?this.maxRows:_:_,this.maxRows=D,P=this._daylightSavingAdjust(new Date(et,Z,1-M));for(H=0;H<D;H++){k+="<tr>",B=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(P)+"</td>":"";for(E=0;E<7;E++)j=m?m.apply(e.input?e.input[0]:null,[P]):[!0,""],F=P.getMonth()!==Z,I=F&&!y||!j[0]||G&&P<G||Y&&P>Y,B+="<td class='"+((E+l+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(P.getTime()===N.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===P.getTime()&&b.getTime()===N.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!g?"":" "+j[1]+(P.getTime()===Q.getTime()?" "+this._currentClass:"")+(P.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+((!F||g)&&j[2]?" title='"+j[2].replace(/'/g,"&#39;")+"'":"")+(I?"":" data-handler='selectDay' data-event='click' data-month='"+P.getMonth()+"' data-year='"+P.getFullYear()+"'")+">"+(F&&!g?"&#xa0;":I?"<span class='ui-state-default'>"+P.getDate()+"</span>":"<a class='ui-state-default"+(P.getTime()===R.getTime()?" ui-state-highlight":"")+(P.getTime()===Q.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+P.getDate()+"</a>")+"</td>",P.setDate(P.getDate()+1),P=this._daylightSavingAdjust(P);k+=B+"</tr>"}Z++,Z>11&&(Z=0,et++),k+="</tbody></table>"+(K?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=k}w+=x}return w+=f,e._keyEvent=!1,w},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a,f,l,c,h,p,d,v,m=this._get(e,"changeMonth"),g=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",w="";if(s||!m)w+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{a=r&&r.getFullYear()===n,f=i&&i.getFullYear()===n,w+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(l=0;l<12;l++)(!a||l>=r.getMonth())&&(!f||l<=i.getMonth())&&(w+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+u[l]+"</option>");w+="</select>"}y||(b+=w+(s||!m||!g?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!g)b+="<span class='ui-datepicker-year'>"+n+"</span>";else{c=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?n+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(t)?h:t},d=p(c[0]),v=Math.max(d,p(c[1]||"")),d=r?Math.max(d,r.getFullYear()):d,v=i?Math.min(v,i.getFullYear()):v,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;d<=v;d++)e.yearshtml+="<option value='"+d+"'"+(d===n?" selected='selected'":"")+">"+d+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}}return b+=this._get(e,"yearSuffix"),y&&(b+=(s||!m||!g?"&#xa0;":"")+w),b+="</div>",b},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n==="Y"?t:0),i=e.drawMonth+(n==="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n==="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n==="M"||n==="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return r&&i>r?r:i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n,r,i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),o=null,u=null,a=this._get(e,"yearRange");return a&&(n=a.split(":"),r=(new Date).getFullYear(),o=parseInt(n[0],10),u=parseInt(n[1],10),n[0].match(/[+\-].*/)&&(o+=r),n[1].match(/[+\-].*/)&&(u+=r)),(!i||t.getTime()>=i.getTime())&&(!s||t.getTime()<=s.getTime())&&(!o||t.getFullYear()>=o)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),e("#"+e.datepicker._mainDivId).length===0&&e("body").append(e.datepicker.dpDiv);var n=Array.prototype.slice.call(arguments,1);return typeof t!="string"||t!=="isDisabled"&&t!=="getDate"&&t!=="widget"?t==="option"&&arguments.length===2&&typeof arguments[1]=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n)):this.each(function(){typeof t=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(n)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))},e.datepicker=new s,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.1",window["DP_jQuery_"+r]=e})(jQuery);(function(e,t){var n={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},r={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open")},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB)return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height(),n.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,o={};e.each(t,function(e,t){i._setOption(e,t),e in n&&(s=!0),e in r&&(o[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_createOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(t){!e(t.target).closest(".ui-dialog").length&&!e(t.target).closest(".ui-datepicker").length&&(t.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal)return;this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()}})})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=this.data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(e(r[0]).css("zIndex"),10)||0,e(r).each(function(n){e(this).css("zIndex",t+n)}),this.css("zIndex",t+r.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.droppable",{version:"1.10.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,n=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables[this.options.scope];for(;t<n.length;t++)n[t]===this&&n.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t==="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=!1;return!r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1)},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,t,r){if(!t.offset)return!1;var i,s,o=(e.positionAbs||e.position.absolute).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top,p=h+t.proportions.height;switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;case"intersect":return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions.height/2&&f-e.helperProportions.height/2<p;case"pointer":return i=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,n(s,h,t.proportions.height)&&n(i,l,t.proportions.width);case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(r=0;r<s.length;r++){if(s[r].options.disabled||t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element))continue;for(i=0;i<u.length;i++)if(u[i]===s[r].element[0]){s[r].proportions.height=0;continue e}s[r].visible=s[r].element.css("display")!=="none";if(!s[r].visible)continue;o==="mousedown"&&s[r]._activate.call(s[r],n),s[r].offset=s[r].element.offset(),s[r].proportions={width:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;if(!u)return;this.options.greedy&&(i=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===i}),s.length&&(r=e.data(s[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,n)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,n),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return arguments.length>1?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass.apply(this,arguments)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.1",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.10.1",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){if(e===t)return this.options.value;this.options.value=this._constrainedValue(e),this._refreshValue()},_constrainedValue:function(e){return e===t&&(e=this.options.value),this.indeterminate=e===!1,typeof e!="number"&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){e==="max"&&(t=Math.max(this.min,t)),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,n=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(n.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}})})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p)return!1;n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e)t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s);this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p)return;f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)}):r(n.alsoResize)},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)}})})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,n=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(n.options.filter,n.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this,r=this.options;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().addBack().each(function(){var r,i=e.data(this,"selectable-item");if(i)return r=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected"),i.$element.removeClass(r?"ui-unselecting":"ui-selected").addClass(r?"ui-selecting":"ui-unselecting"),i.unselecting=!r,i.selecting=r,i.selected=r,r?n._trigger("selecting",t,{selecting:i.element}):n._trigger("unselecting",t,{unselecting:i.element}),!1})},_mouseDrag:function(t){this.dragged=!0;if(this.options.disabled)return;var n,r=this,i=this.options,s=this.opos[0],o=this.opos[1],u=t.pageX,a=t.pageY;return s>u&&(n=u,u=s,s=n),o>a&&(n=a,a=o,o=n),this.helper.css({left:s,top:o,width:u-s,height:a-o}),this.selectees.each(function(){var n=e.data(this,"selectable-item"),f=!1;if(!n||n.element===r.element[0])return;i.tolerance==="touch"?f=!(n.left>u||n.right<s||n.top>a||n.bottom<o):i.tolerance==="fit"&&(f=n.left>s&&n.right<u&&n.top>o&&n.bottom<a),f?(n.selected&&(n.$element.removeClass("ui-selected"),n.selected=!1),n.unselecting&&(n.$element.removeClass("ui-unselecting"),n.unselecting=!1),n.selecting||(n.$element.addClass("ui-selecting"),n.selecting=!0,r._trigger("selecting",t,{selecting:n.element}))):(n.selecting&&((t.metaKey||t.ctrlKey)&&n.startselected?(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.$element.addClass("ui-selected"),n.selected=!0):(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.startselected&&(n.$element.addClass("ui-unselecting"),n.unselecting=!0),r._trigger("unselecting",t,{unselecting:n.element}))),n.selected&&!t.metaKey&&!t.ctrlKey&&!n.startselected&&(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,r._trigger("unselecting",t,{unselecting:n.element})))}),!1},_mouseStop:function(t){var n=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];n=r.values&&r.values.length||1,i.length>n&&(i.slice(n).remove(),i=i.slice(0,n));for(t=i.length;t<n;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),!this.range||!this.range.length?(this.range=e("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"):this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}),this.range.addClass(n+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):this.range=e([])},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;t==="range"&&this.options.range===!0&&(n==="min"?(this.options.value=this._values(0),this.options.values=null):n==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;if(this.options.values&&this.options.values.length){n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},click:function(e){e.preventDefault()},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=null,i=!1,s=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type==="static")return!1;this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s)return r=e(this),!1}),e.data(t.target,s.widgetName+"-item")===s&&(r=e(t.target));if(!r)return!1;if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)});if(!i)return!1}return this.currentItem=r,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i,s=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),s.containment&&this._setContainment(),s.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",s.cursor)),s.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",s.opacity)),s.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",s.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";for(n=this.items.length-1;n>=0;n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);if(!s)continue;if(r.instance!==this.currentContainer)continue;if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down":"up";if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r))break;this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1):!1},_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s==="right"&&r||s==="left"&&!r:i&&(i==="down"&&t||i==="up"&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[],a=this._connectWith();if(a&&t)for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--)u[n][0].each(function(){o.push(this)});return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();if(h&&this.ready)for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]),this.containers.push(s))}for(n=c.length-1;n>=0;n--){o=c[n][1],u=c[n][0];for(r=0,f=u.length;r<f;r++)a=e(u[r]),a.data(this.widgetName+"-item",o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])continue;i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(n=this.containers.length-1;n>=0;n--)s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String)n=r.placeholder,r.placeholder={element:function(){var r=e(document.createElement(t.currentItem[0].nodeName)).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return n||(r.style.visibility="hidden"),r},update:function(e,i){if(n&&!r.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}};t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n,r,i,s,o,u,a,f,l,c=null,h=null;for(n=this.containers.length-1;n>=0;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0]))continue;if(this._intersectsWith(this.containers[n].containerCache)){if(c&&e.contains(this.containers[n].element[0],c.element[0]))continue;c=this.containers[n],h=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this)),this.containers[n].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1;else{i=1e4,s=null,o=this.containers[h].floating?"left":"top",u=this.containers[h].floating?"width":"height",a=this.positionAbs[o]+this.offset.click[o];for(r=this.items.length-1;r>=0;r--){if(!e.contains(this.containers[h].element[0],this.items[r].item[0]))continue;if(this.items[r].item[0]===this.currentItem[0])continue;f=this.items[r].item.offset()[o],l=!1,Math.abs(f-a)>Math.abs(f+this.items[r][u]-a)&&(l=!0,f+=this.items[r][u]),Math.abs(f-a)<i&&(i=Math.abs(f-a),s=this.items[r],this.direction=l?"up":"down")}if(!s&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[h],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[h].element,!0),this._trigger("change",t,this._uiHash()),this.containers[h]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];/^(document|window|parent)$/.test(i.containment)||(t=e(i.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);return this.cssPosition==="relative"&&(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i===this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r,i=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(r in this._storedCSS)if(this._storedCSS[r]==="auto"||this._storedCSS[r]==="static")this._storedCSS[r]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!n&&i.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(i.push(function(e){this._trigger("remove",e,this._uiHash())}),i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(r=this.containers.length-1;r>=0;r--)n||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over&&(i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.10.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;return e.each(["min","max","step"],function(e,r){var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel:function(e,t){if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(e,t,n){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment:function(t){var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e},_stop:function(e){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),e==="icons"&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format:function(e){return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.10.1",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);
/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*! jCarousel - v0.3.0-beta.2 - 2013-02-25
* http://sorgalla.com/jcarousel
* Copyright (c) 2013 Jan Sorgalla; Licensed MIT */
(function(t){"use strict";var i=t.jCarousel={};i.version="0.3.0-beta.2";var s=/^([+\-]=)?(.+)$/;i.parseTarget=function(t){var i=!1,e="object"!=typeof t?s.exec(t):null;return e?(t=parseInt(e[2],10)||0,e[1]&&(i=!0,"-="===e[1]&&(t*=-1))):"object"!=typeof t&&(t=parseInt(t,10)||0),{target:t,relative:i}},i.detectCarousel=function(t){for(var i;t.size()>0;){if(i=t.filter("[data-jcarousel]"),i.size()>0)return i;if(i=t.find("[data-jcarousel]"),i.size()>0)return i;t=t.parent()}return null},i.base=function(s){return{version:i.version,_options:{},_element:null,_carousel:null,_init:t.noop,_create:t.noop,_destroy:t.noop,_reload:t.noop,create:function(){return this._element.attr("data-"+s.toLowerCase(),!0).data(s,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(s).removeAttr("data-"+s.toLowerCase()),this)},reload:function(t){return!1===this._trigger("reload")?this:(t&&this.options(t),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(i,s){if(0===arguments.length)return t.extend({},this._options);if("string"==typeof i){if(s===void 0)return this._options[i]===void 0?null:this._options[i];this._options[i]=s}else this._options=t.extend({},this._options,i);return this},carousel:function(){return this._carousel||(this._carousel=i.detectCarousel(this.options("carousel")||this._element),this._carousel||t.error('Could not detect carousel for plugin "'+s+'"')),this._carousel},_trigger:function(i,e,r){var n,o=!1;return r=[this].concat(r||[]),(e||this._element).each(function(){n=t.Event((i+"."+s).toLowerCase()),t(this).trigger(n,r),n.isDefaultPrevented()&&(o=!0)}),!o}}},i.plugin=function(s,e){var r=t[s]=function(i,s){this._element=t(i),this.options(s),this._init(),this.create()};return r.fn=r.prototype=t.extend({},i.base(s),e),t.fn[s]=function(i){var e=Array.prototype.slice.call(arguments,1),n=this;return"string"==typeof i?this.each(function(){var r=t(this).data(s);if(!r)return t.error("Cannot call methods on "+s+" prior to initialization; "+'attempted to call method "'+i+'"');if(!t.isFunction(r[i])||"_"===i.charAt(0))return t.error('No such method "'+i+'" for '+s+" instance");var o=r[i].apply(r,e);return o!==r&&o!==void 0?(n=o,!1):void 0}):this.each(function(){var e=t(this).data(s);e instanceof r?e.reload(i):new r(this,i)}),n},r}})(jQuery),function(t,i){"use strict";var s=function(t){return parseFloat(t)||0};t.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:null,_first:null,_last:null,_visible:null,_fullyvisible:null,_init:function(){var i=this;return this.onWindowResize=function(){i.resizeTimer&&clearTimeout(i.resizeTimer),i.resizeTimer=setTimeout(function(){i.reload()},100)},this.onAnimationComplete=function(s){i.animating=!1;var e=i.list().find("[data-jcarousel-clone]");e.size()>0&&(e.remove(),i._reload()),i._trigger("animateend"),t.isFunction(s)&&s.call(i,!0)},this},_create:function(){this._reload(),t(i).bind("resize.jcarousel",this.onWindowResize)},_destroy:function(){t(i).unbind("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(i){if("rtl"===(""+i.attr("dir")).toLowerCase())return!0;var s=!1;return i.parents("[dir]").each(function(){return/rtl/i.test(t(this).attr("dir"))?(s=!0,!1):void 0}),s}(this._element)),this.lt=this.vertical?"top":"left",this._items=null;var i=this._target&&this.index(this._target)>=0?this._target:this.closest();return this.circular="circular"===this.options("wrap"),this.underflow=!1,i.size()>0?(this._prepare(i),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.size()>=this.items().size(),this.circular=this.circular&&!this.underflow,this.list().css(this.lt,this._position(i)+"px")):this.list().css({left:0,top:0}),this},list:function(){if(null===this._list){var i=this.options("list");this._list=t.isFunction(i)?i.call(this):this._element.find(i)}return this._list},items:function(){if(null===this._items){var i=this.options("items");this._items=(t.isFunction(i)?i.call(this):this.list().find(i)).not("[data-jcarousel-clone]")}return this._items},index:function(t){return this.items().index(t)},closest:function(){var i,e=this,r=this.list().position()[this.lt],n=t(),o=!1,l=this.vertical?"bottom":this.rtl?"left":"right";return this.rtl&&!this.vertical&&(r=-1*(r+this.list().width()-this.clipping())),this.items().each(function(){if(n=t(this),o)return!1;var a=e.dimension(n);if(r+=a,r>=0){if(i=a-s(n.css("margin-"+l)),!(0>=Math.abs(r)-a+i/2))return!1;o=!0}}),n},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var t=this.options("wrap"),i=this.items().size()-1;return i>=0&&(t&&"first"!==t||i>this.index(this._last)||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var t=this.options("wrap");return this.items().size()>0&&(t&&"last"!==t||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(t){return t["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(i,e,r){if(this.animating)return this;if(!1===this._trigger("scroll",null,[i,e]))return this;t.isFunction(e)&&(r=e,e=!0);var n=t.jCarousel.parseTarget(i);if(n.relative){var o,l,a,h,u,c,f=this.items().size()-1,d=Math.abs(n.target),_=this.options("wrap");if(n.target>0){var p=this.index(this._last);if(p>=f&&this.tail)this.inTail?"both"===_||"last"===_?this._scroll(0,e,r):this._scroll(Math.min(this.index(this._target)+d,f),e,r):this._scrollTail(e,r);else if(o=this.index(this._target),this.underflow&&i===f&&("circular"===_||"both"===_||"last"===_)||!this.underflow&&p===f&&("both"===_||"last"===_))this._scroll(0,e,r);else if(a=o+d,this.circular&&a>f){for(c=f,u=this.items().get(-1);a>c++;)u=this.items().eq(0),u.after(u.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(u),this._items=null;this._scroll(u,e,r)}else this._scroll(Math.min(a,f),e,r)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-d+1,0),e,r);else if(l=this.index(this._first),o=this.index(this._target),h=this.underflow?o:l,a=h-d,0>=h&&(this.underflow&&"circular"===_||"both"===_||"first"===_))this._scroll(f,e,r);else if(this.circular&&0>a){for(c=a,u=this.items().get(0);0>c++;){u=this.items().eq(-1),u.after(u.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(u),this._items=null;var m=s(this.list().css(this.lt)),v=this.dimension(u);this.rtl&&!this.vertical?m+=v:m-=v,this.list().css(this.lt,m+"px")}this._scroll(u,e,r)}else this._scroll(Math.max(a,0),e,r)}else this._scroll(n.target,e,r);return this._trigger("scrollend"),this},_scroll:function(i,e,r){if(this.animating)return t.isFunction(r)&&r.call(this,!1),this;if("object"!=typeof i?i=this.items().eq(i):i.jquery===void 0&&(i=t(i)),0===i.size())return t.isFunction(r)&&r.call(this,!1),this;this.inTail=!1,this._prepare(i);var n=this._position(i),o=s(this.list().css(this.lt));if(n===o)return t.isFunction(r)&&r.call(this,!1),this;var l={};return l[this.lt]=n+"px",this._animate(l,e,r),this},_scrollTail:function(i,s){if(this.animating||!this.tail)return t.isFunction(s)&&s.call(this,!1),this;var e=this.list().position()[this.lt];this.rtl?e+=this.tail:e-=this.tail,this.inTail=!0;var r={};return r[this.lt]=e+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(r,i,s),this},_animate:function(i,s,e){if(!1===this._trigger("animate"))return t.isFunction(e)&&e.call(this,!1),this;this.animating=!0;var r=this.options("animation");if(r&&s!==!1){var n=this;if(t.isFunction(r))r.call(this,i,function(){n.onAnimationComplete(e)});else{var o="object"==typeof r?t.extend({},r):{duration:r},l=o.complete;o.complete=function(){n.onAnimationComplete(e),t.isFunction(l)&&l.call(this)},this.list().animate(i,o)}}else this.list().css(i),this.onAnimationComplete(e);return this},_prepare:function(i){var e,r,n=this.index(i),o=n,l=this.dimension(i),a=this.clipping(),h=this.vertical?"bottom":this.rtl?"left":"right",u={target:i,first:i,last:i,visible:i,fullyvisible:a>=l?i:t()};if(this.options("center")&&(l/=2,a/=2),a>l)for(;;){if(e=this.items().eq(++o),0===e.size()){if(!this.circular)break;if(e=this.items().eq(0),i.get(0)===e.get(0))break;e.after(e.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(e),this._items=null}if(l+=this.dimension(e),u.last=e,u.visible=u.visible.add(e),r=s(e.css("margin-"+h)),a>=l-r&&(u.fullyvisible=u.fullyvisible.add(e)),l>=a)break}if(!this.circular&&a>l)for(o=n;;){if(0>--o)break;if(e=this.items().eq(o),0===e.size())break;if(l+=this.dimension(e),u.first=e,u.visible=u.visible.add(e),r=s(e.css("margin-"+h)),a>=l-r&&(u.fullyvisible=u.fullyvisible.add(e)),l>=a)break}return this._update(u),this.tail=0,"circular"!==this.options("wrap")&&"custom"!==this.options("wrap")&&this.index(u.last)===this.items().size()-1&&(l-=s(u.last.css("margin-"+h)),l>a&&(this.tail=l-a)),this},_position:function(t){var i=this._first,s=i.position()[this.lt];return this.rtl&&!this.vertical&&(s-=this.clipping()-this.dimension(i)),this.options("center")&&(s-=this.clipping()/2-this.dimension(i)/2),(this.index(t)>this.index(i)||this.inTail)&&this.tail?(s=this.rtl?s-this.tail:s+this.tail,this.inTail=!0):this.inTail=!1,-s},_update:function(i){var s,e=this,r={target:this._target||t(),first:this._first||t(),last:this._last||t(),visible:this._visible||t(),fullyvisible:this._fullyvisible||t()},n=this.index(i.first||r.first)<this.index(r.first),o=function(s){var o=[],l=[];i[s].each(function(){0>r[s].index(this)&&o.push(this)}),r[s].each(function(){0>i[s].index(this)&&l.push(this)}),n?o=o.reverse():l=l.reverse(),e._trigger("item"+s+"in",t(o)),e._trigger("item"+s+"out",t(l)),e["_"+s]=i[s]};for(s in i)o(s);return this}})}(jQuery,window),function(t){"use strict";t.jcarousel.fn.scrollIntoView=function(i,s,e){var r,n=t.jCarousel.parseTarget(i),o=this.index(this._fullyvisible.first()),l=this.index(this._fullyvisible.last());if(r=n.relative?0>n.target?Math.max(0,o+n.target):l+n.target:"object"!=typeof n.target?n.target:this.index(n.target),o>r)return this.scroll(r,s,e);if(r>=o&&l>=r)return t.isFunction(e)&&e.call(this,!1),this;for(var a,h=this.items(),u=this.clipping(),c=this.vertical?"bottom":this.rtl?"left":"right",f=0;;){if(a=h.eq(r),0===a.size())break;if(f+=this.dimension(a),f>=u){var d=parseFloat(a.css("margin-"+c))||0;f-d!==u&&r++;break}if(0>=r)break;r--}return this.scroll(r,s,e)}}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onEvent=t.proxy(function(i){i.preventDefault();var s=this.options("method");t.isFunction(s)?s.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy).bind("reloadend.jcarousel scrollend.jcarousel",this.onReload),this._element.bind(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.unbind(".jcarouselcontrol",this.onEvent),this.carousel().unbind("destroy.jcarousel",this.onDestroy).unbind("reloadend.jcarousel scrollend.jcarousel",this.onReload)},_reload:function(){var i,s=t.jCarousel.parseTarget(this.options("target")),e=this.carousel();if(s.relative)i=e.jcarousel(s.target>0?"hasNext":"hasPrev");else{var r="object"!=typeof s.target?e.jcarousel("items").eq(s.target):s.target;i=e.jcarousel("target").index(r)>=0}return this._active!==i&&(this._trigger(i?"active":"inactive"),this._active=i),this}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(t){return'<a href="#'+t+'">'+t+"</a>"}},_pages:{},_items:{},_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy).bind("reloadend.jcarousel",this.onReload),this._reload()},_destroy:function(){this._clear(),this.carousel().unbind("destroy.jcarousel",this.onDestroy).unbind("reloadend.jcarousel",this.onReload)},_reload:function(){var i=this.options("perPage");if(this._pages={},this._items={},t.isFunction(i)&&(i=i.call(this)),null==i)this._pages=this._calculatePages();else for(var s,e=parseInt(i,10)||0,r=this.carousel().jcarousel("items"),n=1,o=0;;){if(s=r.eq(o++),0===s.size())break;this._pages[n]=this._pages[n]?this._pages[n].add(s):s,0===o%e&&n++}var l=this,a=this._element,h=this.options("item");this._clear(),t.each(this._pages,function(i,s){var e=l._items[i]=t(h.call(l,i,s));a.append(e),t.fn.jcarouselControl&&e.jcarouselControl({carousel:l.carousel(),target:s.eq(0)})})},items:function(){return this._items},_clear:function(){t.fn.jcarouselControl&&t.each(this._items,function(t,i){i.jcarouselControl("destroy")}),this._element.empty()},_calculatePages:function(){for(var t,i=this.carousel().data("jcarousel"),s=i.items(),e=i.clipping(),r=0,n=0,o=1,l={};;){if(t=s.eq(n++),0===t.size())break;l[o]=l[o]?l[o].add(t):t,r+=i.dimension(t),r>=e&&(o++,r=0)}return l}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",t.proxy(this._create,this))},this),this.onAnimateEnd=t.proxy(this.start,this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy),this.options("autostart")&&this.start()},_destroy:function(){this.stop(),this.carousel().unbind("destroy.jcarousel",this.onDestroy)},start:function(){return this.stop(),this.carousel().one("animateend.jcarousel",this.onAnimateEnd),this._timer=setTimeout(t.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this},stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().unbind("animateend.jcarousel",this.onAnimateEnd),this}})}(jQuery);
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2012 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.2
 *
 */
(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null
        };

        function update() {
            var counter = 0;
      
            elements.each(function() {
                var $this = $(this);
                
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit; 
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed; 
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function(event) {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
            	
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            $self
                                .hide()
                                .attr("src", $self.data(settings.data_attribute))
                                [settings.effect](settings.effect_speed);
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function(event) {
            update();
        });
              
        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
        	
            update();
        });
        
        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[':'], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
/***************************************************************************************

JSCharts v3.02 – Javascript charts component
Copyright © 2012 SmartketerLLC | jscharts.com | jumpeyecomponents.com

Shall not be used by any customer to create third party applications/components that may compete with Smartketer by providing the third party consumer with the possibility to have the embedded component within an editor application.
To get the source codes, special customizations licenses please contact our sales department at sales [at] jumpeyecomponents.com.

JSCharts by JumpeyeComponents, Smartketer LLC is licensed under a Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported License.
Based on a work at www.jscharts.com. 

For details, see the JSCharts website: www.jscharts.com

***************************************************************************************/

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1c ms(){1a.mt=1g;1a.mu={1L:[\'1h\',\'1h\'],2T:[\'1n\',\'1h\'],2j:[\'1n\',\'1h\']};1a.mv=[\'1L\',\'2T\',\'2j\'];1a.mw={};1a.f=\'#uN\';1a.mx=\'#8w\';1a.my=\'#8w\';1a.mz=1g;1a.mA=1g;1a.k=11;1a.mB=11;1a.m=\'X\';1a.mC=\'Y\';1a.mD=1g;1a.mE=1g;1a.mF=30;1a.mG=1g;1a.mH=40;1a.mI=1g;1a.u=30;1a.v=1g;1a.w=50;1a.mJ=0;1a.mK=1g;1a.z=1g;1a.A=1g;1a.B=1g;1a.C=1g;1a.D=0;1a.E=\'#5U\';1a.F=\'#5U\';1a.G=\'2I\';1a.H=\'2I\';1a.I=5;1a.J=2;1a.K=1g;1a.L=1g;1a.M=8;1a.N=8;1a.O=1g;1a.P=1g;1a.Q=1g;1a.R=1g;1a.S=1B;1a.T=1B;1a.U=1g;1a.V=1g;1a.W=0;1a.X=0;1a.Y=2;1a.Z=1g;1a.ba={};1a.bb=\'\';1a.bc=\'\';1a.bd=\'o3\';1a.be=1g;1a.bf=[\'#o7\',\'#nJ\',\'#nE\',\'#nD\',\'#oJ\',\'#oM\',\'#p2\',\'#p4\',\'#oV\',\'#ao\',\'#ow\',\'#oF\',\'#ox\',\'#oB\',\'#n3\',\'#n8\',\'#n6\',\'#ao\',\'#m8\',\'#mU\',\'#mW\',\'#ns\',\'#nx\',\'#nu\',\'#nc\',\'#nb\',\'#ng\',\'#nk\',\'#m7\',\'#n1\'];1a.bg={};1a.bh=1g;1a.bi=[];1a.bj=[];1a.bk=[];1a.bl=3;1a.bm=1;1a.bn=\'#n0\';1a.bo=1g;1a.bp=-50;1a.bq=1;1a.br=3;1a.bs=\'8v\';1a.bt=1;1a.bu=0;1a.bv=0;1a.bw=\'#aL\';1a.bx=\'#aL\';1a.by=1;1a.bz=\'#8y\';1a.bA=\'#8y\';1a.bB=0.9;1a.bC=10;1a.bD=0.9;1a.bE=1;1a.bF=10;1a.bG=10;1a.bH=1B;1a.bI=\'#r6\';1a.bJ=\'2I\';1a.bK=1g;1a.bL=8;1a.bM=1g;1a.bN=1g;1a.bO=1g;1a.bP=1g;1a.bQ=[1a.bR];1a.bR=\'#8y\';1a.bS=0.9;1a.bT=2;1a.bU=[1a.bS];1a.bV=90;1a.bW=1g;1a.bX=[1a.bT];1a.bY=45;1a.bZ=15;1a.ca=1;1a.cb=0;1a.cc=0;1a.cd=0;1a.ce=\'#5U\';1a.cf=1g;1a.cg=8;1a.mL=10;1a.ci=\'#8x\';1a.cj=\'2I\';1a.ck=1g;1a.cl=8;1a.cm=-20;1a.cn=1g;1a.co=1g;1a.cp=1B;1a.cq=\'#b2\';1a.cr=\'#b2\';1a.cs=0.5;1a.ct=0.5;1a.cu=[];1a.cv=\'\';1a.cw=1g;1a.cx=1g;1a.cy=1g;1a.cz=1g;1a.cA=1g;1a.cB=1g;1a.cC=1g;1a.cD=1g;1a.cE=1g;1a.cF=\'#5U\';1a.cG=\'#5U\';1a.cH=1g;1a.cI=1g;1a.cJ=8;1a.cK=8;1a.cL=1g;1a.cM=1g;1a.cN=[];1a.cO=[];1a.cP=\'#8w\';1a.cQ=1B;1a.cR=1g;1a.cS=8;1a.cT=1g;1a.cU=\'2v 5M\';1a.cV=[];1a.cW=[];1a.cX=1g;1a.cY=[];1a.cZ=0;1a.da=0;1a.db=0;1a.dc=0;1a.dd=0;1a.de=0;1a.df=0;1a.dg=0;1a.dh=1g;1a.di=\'\';1a.dj=0;1a.dk=0;1a.dl=0;1a.dm=0;1a.dn=1B;1a.mM=0;1a.dp=0;1a.dq=0;1a.dr=0;1a.ds=4s;1a.dt=rf;1a.du=1T;1a.dv=\'#7B\';1a.dw=\'93\';1a.dx=12;1a.dy=1T;1a.dz=1T;1a.dA=\'\';1a.dB=1;1a.dC=0;1a.dD=1g;1a.dE=1;1a.dF=1g;1a.dG=8;1a.dH=15;1a.dI=1B;1a.dJ=\'r9 5E\';1a.dK=\'#qX\';1a.dL=1g;1a.dM=11;1a.dN=\'5M\';1a.dO=\'#qI\';1a.dP=\'5J qH #qJ\';1a.dQ=[];1a.dR=\'#qE\';1a.dS=\'93\';1a.dT=12;1a.dU=7;1a.dV=0.7;1a.dW=\'qV qM\';1a.dX=\'se\';1a.dY=[\'nw\',\'sw\',\'se\',\'ne\'];1a.dZ={};1a.ea={};1a.eb=[];1a.ec=\'1L\';1a.ed=1;1a.ee=1;1a.ef=\'\';1a.eg=\'#qQ\';1a.eh=1g;1a.ei=9;1a.ej=0.8;1a.ek=\'ne\';1a.el=\'#8x\';1a.em=1g;1a.en=1B;1a.eo=\'#rR\';1a.ep=0;1a.eq=1g;1a.er=8;1a.es=\'\';1a.et=19;1a.eu=77;1a.ev=0.8;1a.ew=\'\';1a.ex=0.5;1a.ey=\'\';1a.ez=\'#8x\';1a.eA=\'\';1a.eB=1c(3g){if(1a.dn){37(1a.eC[3g])}};1a.eD=1c(eE,eF,eG){if(eE.5z){eE.5z(\'on\'+eF,eG);1d 1B}1i if(eE.9s){eE.9s(eF,eG,1g);1d 1B}1d 1g};1a.eH=1c(){1a.ew+=\'rM\';1a.eI+=\'s3\';1a.ey+=\'rW\';1a.eA+=\'s0\';5l{1a.ba.3k(\'2d\')}5k(3g){1d 1g}1d 1B};1a.eJ=1c(eK,eL,1m){if(1f 1m===\'1r\'){1m=1g}if((eK<1a.bu||eK>1a.bu+1a.dq||eL<1a.bv||eL>1a.bv+1a.dr)&&1m===1B){1d 1g}if((eK<1a.df||eK>1a.db||eL<1a.dg||eL>1a.dc)&&1m===1g){1d 1g}1d 1B};1a.eM=1c(2B){if(1f 2B!==\'1n\'){1d 1g}if(!1Y.3B(2B)){1d 1g}1d 1B};1a.eN=1c(2f){1b eO=1a.mv.1l;1q(1b eP=0;eP<eO;eP++){if(1a.mv[eP]===2f){1d 1B}}1d 1g};1a.eQ=1c(eO,eR){if(eR){1b eS=1a.dc;1b eT=1a.dg;1b eU=1a.H;1b eV=1a.R;1b eW=1a.V;1b eX=1a.L;1b eY=1a.N;1b eZ=1a.J}1i{1b eS=1a.db;1b eT=1a.df;1b eU=1a.G;1b eV=1a.Q;1b eW=1a.U;1b eX=1a.K;1b eY=1a.M;1b eZ=1a.I}1b fa=(eX===1g)?1a.dw:eX;1b fb=0;1b fc=1a.dq/eO;1b fd=1a.fe((eS-eT)/eO,eU);1b ff=eT;1b fg=1a.bu;1b fh;2t(fg<1a.dq+20){fh=1J(1a.fe(ff,1a.eU));if(1f eV===\'1n\'){fh=eV+fh}if(1f eW===\'1n\'){fh=fh+eW}1b fi=1a.fj(fh,eY,1k,1k,fa);if(ff===eT){fi=fi/2}ff+=fd;fg+=fc;fb+=fi}fh=1J(eS);if(1f eV===\'1n\'){fh=eV+fh}if(1f eW===\'1n\'){fh=fh+eW}fb+=1a.fj(fh,eY,1k,1k,fa)/2;if(1a.dq-fb-eO*eZ>0){1d 1B}1d 1g};1a.fk=1c(eO,fl){1b fb=0;1b fc=1a.dr/eO;1b fd=(1a.dc-1a.dg)/eO;1b ff=1a.dg;1b fm=1a.bv+1a.dr;2t(fm>1a.bv){1b fn=1a.fo(1a.N);if(ff===1a.dg){fn=fn/2}ff+=fd;fm-=fc;fb+=fn}fb+=1a.fo(1a.N)/2;1b fp=1a.dr-fb-eO*1a.J;if(1f fl===\'1r\'){if(fp>0){1d 1B}1d 1g}1i{if(fl&&fp>1a.fo(1a.N)*(eO-1)*2){1d 1g}1d 1B}};1a.fq=1c(fr){1b fs=(fr 7b 3S)?[]:{};1q(1b eP in fr){if(fr[eP]&&1f fr[eP]==="4c"){fs[eP]=1a.fq(fr[eP])}1i{fs[eP]=fr[eP]}}1d fs};1a.ft=1c(){1a.ew+=\'ry\';1a.eI+=\'ro\';1a.ey+=\'rG\';1a.eA+=\'rA\';if(1a.fu()){1d 1g}1b 1z=1Y.2p(\'8o\');1z.2H(\'id\',1a.bd+1a.di);1z.2H(\'1o\',1a.ds);1z.2H(\'1C\',1a.dt);1z.1v.1G=\'pA\';1z.1v.9Q=1a.bb;1a.bg.2z(1z);1a.ba=1z;1a.bc=1a.bd+1a.di};1a.fv=1c(){1b 2M=1Y.2p(\'ps\');2M.2H(\'2B\',\'8I\'+1a.bc);2M.2H(\'id\',\'8I\'+1a.bc);1a.bg.2z(2M);1d 2M};1a.fw=1c(2M,1m){1b fx=1Y.2p(\'py\');fx.2H(\'3L\',\'pN\');fx.2H(\'1m\',1m);2M.2z(fx);1d fx};1a.fy=1c(2M){1b fz=\'<4h 3z="1D:2l/8l;8m,92///8k==" \'+\'1o="\'+1a.ds+\'" \'+\'1C="\'+1a.dt+\'" \'+\'pP="#8I\'+1a.bc+\'" \'+\'1v="4z:0;1G:2X;2b:\'+1a.ba.3U+\'px;2v:\'+1a.ba.44+\'px;\'+\'91:\\\'8D(0, \'+1a.ds+\'px, \'+1a.dt+\'px, 0)\\\';\'+\'4S:3o(2m=0);\'+\'z-1V:\'+(1a.ba.1v.3d+10)+\';">\';2M.3r+=fz;1d fz};1a.fA=1c(eK,eL,fB,fC,fD){1b fE=1Y.2p(\'8i\');fE.1v.1G=\'2X\';fE.1v.2b=(1a.ba.3U+fB)+\'px\';fE.1v.2v=(1a.ba.44+fC)+\'px\';fE.1v.4z=1a.dP;fE.1v.6a=1a.dW;fE.1v.9Q=1a.dO;fE.1v.2D=1a.dT+\'px\';fE.1v.9J=1a.dS;fE.1v.1j=1a.dR;fE.1v.fF=1a.dV;fE.1v.4S=\'3o(2m=\'+(1a.dV*1T)+\')\';fE.1v.5m=\'5N\';fE.1v.3d=1E(1a.ba.1v.3d)+1T;fE.2H(\'id\',\'9L\'+1a.bc+\'4H\'+eK+\'4H\'+eL);if(fD===1k||fD===\'\'||fD===\' \'){fE.3r=1a.m+\': \'+eK+\'<br>\'+1a.mC+\': \'+eL}1i{fE.3r=fD}fE.1G=1a.dX;fE.fG=1a.dU;fE.fB=1a.ba.3U+fB;fE.fC=1a.ba.44+fC;1d fE};1a.fH=1c(eK,eL,fB,fC,fD,fI){if(1a.ba.1v.3d===\'\'){1a.ba.1v.3d=1}if(1B){1b fE=1a.fA(eK,eL,fB,fC,fD);1b 2i=5;1b 1o=1a.br*2+1a.bt*2+2i*2+5;1b 1C=1a.br*2+1a.bt*2+2i*2+5;1b fJ=1g;1b 1z=1Y.2p(\'8o\');1z.2H(\'id\',fE.2Q(\'id\')+\'8E\');1z.1v.1G=\'2X\';1z.1v.8F=\'6V\';1z.1v.2b=(1a.ba.3U+fB-1o/2)+\'px\';1z.1v.2v=(1a.ba.44+fC-1C/2)+\'px\';1z.1v.1o=1o+\'px\';1z.1o=1o;1z.1v.1C=1C+\'px\';1z.1C=1C;1z.1v.3d=1E(1a.ba.1v.3d)+90;1a.bg.2z(1z);if(!1a.fK(1z)&&1a.fL()){1z=66.5B(1z);fJ=1B}1b fM=1z.3k(\'2d\');fM.2o();fM.1R=1a.bt;fM.1P=1a.fN(1a.bn,(1a.bt===0)?0:1a.bq);2s(1a.bs){1A\'74\':fM.1H(1z.1o/2-1a.br-2i,1z.1C/2+1a.br+2i);fM.1u(1z.1o/2-1a.br-2i,1z.1C/2-1a.br-2i);fM.1u(1z.1o/2+1a.br+2i,1z.1C/2-1a.br-2i);fM.1u(1z.1o/2+1a.br+2i,1z.1C/2+1a.br+2i);fM.35();1F;1A\'9M\':fM.1H(1o/2-(1a.br+2i)*1p.2G(1p.1X/6),1C/2+(1a.br+2i)*1p.2G(1p.1X/3));fM.1u(1o/2,1C/2-1a.br-2i);fM.1u(1o/2+(1a.br+2i)*1p.2G(1p.1X/6),1C/2+(1a.br+2i)*1p.2G(1p.1X/3));fM.35();1F;1A\'9K\':fM.1H(1z.1o/2-1a.br-2i,1z.1C/2);fM.1u(1z.1o/2,1z.1C/2-1a.br-2i);fM.1u(1z.1o/2+1a.br+2i,1z.1C/2);fM.1u(1z.1o/2,1z.1C/2+1a.br+2i);fM.35();1F;1A\'8v\':2w:fM.4t(1o/2,1C/2,1a.br+2i,0,1p.1X*2,1g)}if(1a.bo!==1g){fM.1N=1a.fN(1a.bo,1a.bq);fM.2U()}fM.2e();if(fJ){1a.fO(1z)}1b fP=1c(){1b eE=1Y.3B(fE.2Q(\'id\')+\'8E\');eE.1v.8F=\'\';1b eE=1Y.3B(fE.2Q(\'id\')+\'8t\');eE.1v.5m=\'5N\';if(fD!==1g&&fD!==\'1g\'){eE=1Y.3B(fE.2Q(\'id\'));eE.1v.5m=\'\';2s(eE.1G){1A\'nw\':eE.1v.2b=(1U(eE.fB,10)-eE.fG-eE.a0)+\'px\';eE.1v.2v=(1U(eE.fC,10)-eE.fG-eE.9R)+\'px\';1F;1A\'ne\':eE.1v.2b=(1U(eE.fB,10)+eE.fG)+\'px\';eE.1v.2v=(1U(eE.fC,10)-eE.fG-eE.9R)+\'px\';1F;1A\'sw\':eE.1v.2b=(1U(eE.fB,10)-eE.fG-eE.a0)+\'px\';eE.1v.2v=(1U(eE.fC,10)+eE.fG)+\'px\';1F;2w:eE.1v.2b=(1U(eE.fB,10)+eE.fG)+\'px\';eE.1v.2v=(1U(eE.fC,10)+eE.fG)+\'px\'}}};1b fQ=1c(){1Y.3B(fE.2Q(\'id\')).1v.5m=\'5N\';1Y.3B(fE.2Q(\'id\')+\'8E\').1v.8F=\'6V\';1Y.3B(fE.2Q(\'id\')+\'8t\').1v.5m=\'\'};1a.bg.2z(fE);1b fR=1a.fS(eK,eL,fB,fC,fI);1a.eD(fR,\'ph\',fP);1a.eD(fR,\'pi\',fQ);1a.bg.2z(fR)}};1a.fS=1c(eK,eL,fB,fC,fI){1b fR=\'<4e \'+\'1v="1G:2X;\'+\'2b:\'+(1a.ba.3U+fB-1a.br)+\'px;\'+\'2v:\'+(1a.ba.44+fC-1a.br)+\'px;\'+\'1o:\'+(1a.br*2)+\'px;\'+\'1C:\'+(1a.br*2)+\'px;\'+\'1Z-1t: 5J;\'+\'z-1V: \'+(1E(1a.ba.1v.3d)+4X)+\';\'+\'" id="pj\'+eK+\'4H\'+eL+\'">\'+\'<4h 3z="1D:2l/8l;8m,92///8k==" \'+\'1o="\'+(1a.br*2)+\'" \'+\'1C="\'+(1a.br*2)+\'" \'+"><\\/4e>";1b fT=1Y.2p(\'8i\');fT.3r+=fR;1b fR=fT.3A;1b fU=fR.g1(1B);fR.h0.8j(fR);if(fI){1a.eD(fU,\'6t\',fI)}1d fU};1a.fV=1c(){if(!1a.fu()&&1a.bc){1d 1g}1b fW=1Y.3B(1a.di);if(fW.pQ()){2t(fW.3T.1l>=1){fW.8j(fW.3A)}}};1a.fO=1c(1z){1b fX;if(1f 1z===\'1r\'){fX=1a.ba.3A.1v}1i{fX=1z.3A.1v}if(fX.1o==="8X"){1b fY=1a.ba.1v;fX.1o=fY.1o;fX.1C=fY.1C}};1a.fZ=1c(){1b fJ=1g;1a.ew=\'qk\';1a.eI=\'qm\';1a.ey=\'qo\';1a.eA=\'qf\';if(1a.fu()){1a.fV()}1a.ft();if(!1a.fK(1a.ba)&&1a.fL()){1a.ba=66.5B(1a.ba);fJ=1B}if(!1a.eH()){1a.eB(\'9l\')}1a.bh=1a.ba.3k(\'2d\');if(!1a.fL()){1a.dI=1a.ga()}if(1a.cX&&!1a.gb(1a.cU)){1a.gc()}if(1a.v===1g){1a.v=1a.w}if(1a.mE===1g){1a.mE=1a.mF}if(1a.mG===1g){1a.mG=1a.mH}if(1a.mI===1g){1a.mI=1a.u}if(1a.dD===1g){1a.dD=1a.dE}if(1a.dF===1g){1a.dF=1a.dG}1a.gd();1a.ge();1a.gf();1a.cv=4k(gg.gh(1a.gi));if(/^9G\\./i.3b(1a.cv)){1a.cv=1a.cv.2J(4)}if(1a.Z!==1g){1a.gj()}if(1a.ec===\'1L\'){1a.gk();if(1a.W===0){1a.gl()}if(1a.X===0){1a.gm()}1a.gn();if(1a.cp){1a.mN();1a.gp()}if(1a.S){1a.gq()}if(1a.T){1a.gr()}1a.gs();1a.gt();1a.gu()}if(1a.ec===\'2j\'){1a.gk();if(1a.X===0){1a.gm()}if(1a.cp){1a.mN()}1a.gv();if(1a.T){1a.gr(1a.mK)}1a.gs();1a.gu()}if(1a.ec===\'2T\'){1a.gw()}1a.gx();if(fJ){1a.fO()}if(1a.cX&&1a.gb(1a.cU)){1a.gc()}1b gy;1b eO;1b gz;1b eP;if(1a.uC===\'\'){gy=gg.gh(\'6O\'+1a.ew);gz=1a.gA(\'\',1g,1B);2L((1c(fr){1d 1c(){1b fT=1Y.2p(\'4e\');1b fz=gy+\'1v="4z:0;1G:2X;2b:\'+(fr.ba.3U+gz[0])+\'px;2v:\'+(fr.ba.44+gz[1])+\'px;\'+\'z-1V:\'+(fr.ba.1v.3d+3R)+\';"/>\';fT.3r=fz;fr.bg.2z(fT)}}(1a)),1a.ep);1d}1b ix=0;qg=1a.uC;if(1a.uC.3x(\',\')==\'-1\'){if(1a.uC.3x(\'#8P\')!=-1){1b gB=1a.gC(1a.cv)}1i{1b gB=1a.gD(1a.cv)}if(gB==1a.uC){2L(1a.gE(),1a.ep);1d}}1i{1b gF=1a.uC.2R(/\\s/g,\'\');1b gG=gF.4A(\',\');1b gH=gG.1l;1q(ix=0;ix<gH;ix++){if(gG[ix].3x(\'#8P\')!=-1){1b gB=1a.gC(1a.cv)}1i{1b gB=1a.gD(1a.cv)}if(gB==gG[ix]){2L(1a.gE(),1a.ep);1d}}}gy=gg.gh(\'6O\'+1a.ew);gz=1a.gA(\'\',1g,1B);2L((1c(fr){1d 1c(){1b fT=1Y.2p(\'4e\');1b fz=gy+\'1v="4z:0;1G:2X;2b:\'+(fr.ba.3U+gz[0])+\'px;2v:\'+(fr.ba.44+gz[1])+\'px;\'+\'z-1V:\'+(fr.ba.1v.3d+3R)+\';"/>\';fT.3r=fz;fr.bg.2z(fT)}}(1a)),1a.ep);1d};1a.gk=1c(){1b gI=1a.bO?1a.dq/15:0;1b gJ=1a.bP?1a.dr/15:0;1a.bh.2o();1a.bh.1R=1a.Y;1a.bh.1P=1a.f;1a.bh.1H(1a.mG,1a.v-gJ);1a.bh.1u(1a.mG,1a.dt-1a.mE);1a.bh.1u(1a.ds-1a.mI+gI,1a.dt-1a.mE);1a.bh.2e();if(1a.mt&&1a.cp&&1a.ec!==\'1L\'){1a.bh.1R=1;1a.bh.1P=1a.f;1a.bh.1H(1a.mG+1a.bC,1a.v-gJ-1a.bC);1a.bh.1u(1a.mG+1a.bC,1a.dt-1a.mE-1a.bC);1a.bh.1u(1a.ds-1a.mI+gI+1a.bC,1a.dt-1a.mE-1a.bC);1a.bh.1H(1a.mG+1a.bC,1a.dt-1a.mE-1a.bC);1a.bh.1u(1a.mG,1a.dt-1a.mE)}1a.bh.2e()};1a.gj=1c(){1a.ba.1v.e6=\'f7(\'+1a.Z+\')\'};1a.gv=1c(){1b eO=1a.bi.1l;1b gK;1b gL;1b fi;1b fn;1b 1o=1a.gM();1b fg=1a.bE;1b gN;1b gO;1b gP;1b gQ;1b fm;1b gR;1b gS;1b gT;1b gU;1b 1m;1b fD;1b gV;1b gW;1b eK;1b eL;1b gX;1b gY;1b fh;1b 1N;1b 1P;1b fE;1b gZ;1b ha;1b hb;1b hc;1b hd;1b fa;1b fc=(1a.bG!==1);1b he=[];1b hf;1b hg;1b hh;1b hi=0;1b hj=0;1b hk=0;1b hl=-1a.D*1p.1X/43;1b 2M;1b hm;1b fx;1a.ea=1a.fq(1a.dZ);if(1a.mK){1o/=1a.mJ;fm=1a.dr-1a.bE/1a.mJ}2M=1a.fv();1a.fy(2M);1q(1b eP=(1a.mK)?eO-1:0;(1a.mK&&eP>=0)||(!1a.mK&&eP<eO);eP=(1a.mK)?eP-1:eP+1){gL=1a.bi[eP].1l-1;hc=1g;hd=1g;if(1a.mK&&eP===eO-1){fm-=1o/gL}1q(gW=0;gW<gL;gW++){ha=(1f 1a.bw===\'1n\'||1f 1a.bw[gW]===\'1r\')?1a.bx:1a.bw[gW];gZ=(1f 1a.bz===\'1n\'||1f 1a.bz[gW]===\'1r\')?1a.bA:1a.bz[gW];hb=(1f 1a.bD===\'1n\'||1f 1a.bD[gW]===\'1r\')?1a.bB:1a.bD[gW];1m=1a.hn(1k,1a.bi[eP][gW+1]);if(1a.mK){1m=[1m[0],(1a.dr+1a.bv-1m[1])*1a.mJ+1a.bu]}1N=1a.fN((1a.be!==1g)?1a.be[eP]:gZ,hb);if(1m[1]>1a.bu+1a.dq&&1a.mK){1m[1]=1a.bu+1a.dq+1;fg=1m[1]}if(1m[1]<1a.bv&&!1a.mK){1m[1]=1a.bv-1;fm=1m[1]}if(!1a.cu[(1a.mK)?1p.2g(gW-gL)-1:gW]){1a.bh.2o();1a.bh.1N=1N;if(fc===1g){if(1a.mK){1a.bh.5R(1a.bu,1a.bv+fm,1m[1]-1a.bu,1o/gL);if(1a.mt){1a.bh.1N=1N;1a.bh.1H(1a.bu,1a.bv+fm);1a.bh.1u(1m[1],1a.bv+fm);1a.bh.1u(1m[1],1a.bv+fm+1o/gL);1a.bh.1u(1m[1]+1a.bC,1a.bv+fm+1o/gL-1a.bC);1a.bh.1u(1m[1]+1a.bC,1a.bv+fm-1a.bC);1a.bh.1u(1a.bu+1a.bC,1a.bv+fm-1a.bC);1a.bh.2U()}}1i{1a.bh.5R(1a.bu+fg,1m[1],1o/gL,1a.bv+1a.dr-1m[1]);if(1a.mt){1a.bh.1N=1N;1a.bh.1H(1a.bu+fg,1m[1]);1a.bh.1u(1a.bu+fg+1a.bC,1m[1]-1a.bC);1a.bh.1u(1a.bu+fg+1o/gL+1a.bC,1m[1]-1a.bC);1a.bh.1u(1a.bu+fg+1o/gL+1a.bC,1a.bv+1a.dr-1a.bC);1a.bh.1u(1a.bu+fg+1o/gL,1a.bv+1a.dr);1a.bh.1u(1a.bu+fg+1o/gL,1m[1]);1a.bh.2U()}}}1i{fc=1p.2n((1a.bv+1a.dr)/1a.bG);if(fc<3){fc=3}if(1a.mK){1q(hf=1a.bu;hf<1m[1];hf+=fc,hi++){hh=[];hg=fc;if(hf+fc>1m[1]){hg=1m[1]-hf}hh.1s({1H:[hf,1a.bv+fm]});hh.1s({1u:[hf+hg,1a.bv+fm]});hh.1s({1u:[hf+hg,1a.bv+fm+1o/gL]});hh.1s({1u:[hf,1a.bv+fm+1o/gL]});if(1a.mt){hh.1s({1H:[hf,1a.bv+fm]});hh.1s({1u:[hf+1a.bC,1a.bv+fm-1a.bC]});hh.1s({1u:[hf+hg+hb*0.5+1a.bC,1a.bv+fm-1a.bC]});hh.1s({1u:[hf+hg+hb*0.5,1a.bv+fm]})}if(hf+fc>=1m[1]&&1a.mt){hh.1s({1H:[hf+hg,1a.bv+fm]});hh.1s({1u:[hf+hg+1a.bC,1a.bv+fm-1a.bC]});hh.1s({1u:[hf+hg+1a.bC,1a.bv+fm+1o/gL-1a.bC]});hh.1s({1u:[hf+hg,1a.bv+fm+1o/gL]})}hh.1s({2U:[]});he.1s({hh:hh,hi:hi})}}1i{1q(hf=1a.bv+1a.dr;hf>1m[1];hf-=fc,hi++){hh=[];hg=fc;if(hf-fc<1m[1]){hg=hf-1m[1]}hh.1s({1H:[1a.bu+fg,hf-hg]});hh.1s({1u:[1a.bu+fg,hf]});hh.1s({1u:[1a.bu+fg+1o/gL,hf]});hh.1s({1u:[1a.bu+fg+1o/gL,hf-hg]});if(1a.mt){hh.1s({1H:[1a.bu+fg+1o/gL,hf-hg-hb*0.6]});hh.1s({1u:[1a.bu+fg+1o/gL+1a.bC,hf-hg-hb*0.6-1a.bC]});hh.1s({1u:[1a.bu+fg+1o/gL+1a.bC,hf-1a.bC]});hh.1s({1u:[1a.bu+fg+1o/gL,hf]})}if(hf-fc<1m[1]&&1a.mt){hh.1s({1H:[1a.bu+fg,hf-hg]});hh.1s({1u:[1a.bu+fg+1a.bC,hf-hg-1a.bC]});hh.1s({1u:[1a.bu+fg+1o/gL+1a.bC,hf-hg-1a.bC]});hh.1s({1u:[1a.bu+fg+1o/gL,hf-hg]})}hh.1s({2U:[]});he.1s({hh:hh,hi:hi})}}1q(hf=0,gK=he.1l;hf<gK;hf++){hk=he[hf].hi*10+4X;2L((1c(fM,he,1N){1d 1c(){fM.2o();fM.1N=1N;1b ho,eK;1q(1b eP=0,eO=he.1l;eP<eO;eP++){1q(eK in he[eP]){ho=he[eP][eK].3e(\',\');4k(\'fM.\'+eK+\'(\'+ho+\');\')}}fM.35()}})(1a.bh,he[hf].hh,1N),hk)}he=[]}1a.bh.1P=1a.fN(ha,hb);if(1a.by>0){1a.bh.1R=1a.by;if(fc===1g){if(1a.mK){1a.bh.1H(1a.bu,1a.bv+fm);1a.bh.1u(1m[1],1a.bv+fm);if(1m[1]>1a.bu+1a.dq){1a.bh.1H(1m[1],1a.bv+fm+1o/gL)}1i{1a.bh.1u(1m[1],1a.bv+fm+1o/gL)}1a.bh.1u(1a.bu,1a.bv+fm+1o/gL)}1i{1a.bh.1H(1a.bu+fg,1a.bv+1a.dr);1a.bh.1u(1a.bu+fg,1m[1]);if(1m[1]<1a.bv){1a.bh.1H(1a.bu+fg+1o/gL,1m[1])}1i{1a.bh.1u(1a.bu+fg+1o/gL,1m[1])}1a.bh.1u(1a.bu+fg+1o/gL,1a.bv+1a.dr)}}1i{if(1a.mK){1q(hf=1a.bu;hf<1m[1];hf+=fc,hj++){hg=fc;hh=[];if(hf+fc>1m[1]){hg=1m[1]-hf}hh.1s({1H:[hf,1a.bv+fm]});hh.1s({1u:[hf+hg,1a.bv+fm]});hh.1s({1H:[hf,1a.bv+fm+1o/gL]});hh.1s({1u:[hf+hg,1a.bv+fm+1o/gL]});if(1a.mt){if(hf===1a.bu){hh.1s({1H:[hf,1a.bv+fm]});hh.1s({1u:[hf+1a.bC,1a.bv+fm-1a.bC]})}1i{hh.1s({1H:[hf+1a.bC,1a.bv+fm-1a.bC]})}hh.1s({1u:[hf+hg+1a.bC,1a.bv+fm-1a.bC]})}if(hf+hg===1m[1]&&hf+hg<=1a.bu+1a.dq){hh.1s({1H:[hf+hg,1a.bv+fm]});hh.1s({1u:[hf+hg,1a.bv+fm+1o/gL]});if(1a.mt){hh.1s({1u:[hf+hg+1a.bC,1a.bv+fm+1o/gL-1a.bC]});hh.1s({1u:[hf+hg+1a.bC,1a.bv+fm-1a.bC]});hh.1s({1u:[hf+hg,1a.bv+fm]})}}he.1s({hh:hh,hi:hj})}}1i{1q(hf=1a.bv+1a.dr;hf>1m[1];hf-=fc,hj++){hg=fc;hh=[];if(hf-fc<1m[1]){hg=hf-1m[1]}hh.1s({1H:[1a.bu+fg,hf]});hh.1s({1u:[1a.bu+fg,hf-hg]});hh.1s({1H:[1a.bu+fg+1o/gL,hf]});hh.1s({1u:[1a.bu+fg+1o/gL,hf-hg]});if(1a.mt){if(hf===1a.bv+1a.dr){hh.1s({1H:[1a.bu+fg+1o/gL,hf]});hh.1s({1u:[1a.bu+fg+1o/gL+1a.bC,hf-1a.bC]})}1i{hh.1s({1H:[1a.bu+fg+1o/gL+1a.bC,hf-1a.bC]})}hh.1s({1u:[1a.bu+fg+1o/gL+1a.bC,hf-hg-1a.bC]})}if(hf-hg===1m[1]&&hf-hg>=1a.bv){hh.1s({1H:[1a.bu+fg,hf-hg]});hh.1s({1u:[1a.bu+fg+1o/gL,hf-hg]});if(1a.mt){hh.1s({1u:[1a.bu+fg+1o/gL+1a.bC,hf-hg-1a.bC]});hh.1s({1u:[1a.bu+fg+1a.bC,hf-hg-1a.bC]});hh.1s({1u:[1a.bu+fg,hf-hg]})}}he.1s({hh:hh,hi:hj})}}1q(hf=0,gK=he.1l;hf<gK;hf++){hk=he[hf].hi*10+4X;2L((1c(fM,he,1P,1R){1d 1c(){fM.2o();fM.1P=1P;fM.1R=1R;1b ho,eK;1q(1b eP=0,eO=he.1l;eP<eO;eP++){1q(eK in he[eP]){ho=he[eP][eK].3e(\',\');4k(\'fM.\'+eK+\'(\'+ho+\');\')}}fM.2e()}})(1a.bh,he[hf].hh,1a.bh.1P,1a.bh.1R),hk)}he=[]}1a.bh.2e();1a.bh.35();if(1m[1]>1a.bu+1a.dq&&1a.mK){1m[1]=1a.bu+1a.dq+1;fg=1m[1];1q(gV=hb;gV>0;gV-=0.1){1P=1a.fN((1a.be!==1g)?1a.be[eP]:gZ,(gV>hb/2)?gV:gV/2);2L((1c(fM,1P,mt,hp,fg,gR,gS){1d 1c(){fM.2o();fM.1R=1;fM.1P=1P;if(mt){fM.1H(fg+hp,gR-hp);fM.1u(fg+hp,gS-hp);fM.1u(fg,gS)}1i{fM.1H(fg,gR);fM.1u(fg,gS)}fM.2e()}})(1a.bh,1P,1a.mt,1a.bC,fg,1a.bv+fm,1a.bv+fm+1o/gL),hk);fg++}}if(1m[1]<1a.bv&&!1a.mK){1m[1]=1a.bv-1;fm=1m[1];1q(gV=hb;gV>0;gV-=0.1){1P=1a.fN((1a.be!==1g)?1a.be[eP]:gZ,(gV>hb/2)?gV:gV/2);2L((1c(fM,1P,mt,hp,gN,gO,fm){1d 1c(){fM.2o();fM.1R=1;fM.1P=1P;if(mt){fM.1H(gN,fm);fM.1u(gN+hp,fm-hp);fM.1u(gO+hp,fm-hp)}1i{fM.1H(gN,fm);fM.1u(gO,fm)}fM.2e()}})(1a.bh,1P,1a.mt,1a.bC,1a.bu+fg,1a.bu+fg+1o/gL,fm),hk);fm--}}if(1m[1]>1a.bu+1a.dq&&1a.mK){fg=1m[1]+0.5;1q(gV=hb;gV>0;gV-=0.1){1P=1a.fN(ha,(gV>hb/2)?gV:gV/2);2L((1c(fM,1P,mt,hp,fg,gR,gS,gT,gU){1d 1c(){fM.2o();fM.1R=1;fM.1P=1P;fM.1H(fg,gR);fM.1u(fg,gS);fM.1H(fg,gT);fM.1u(fg,gU);if(mt){fM.1H(fg+hp,gR-hp);fM.1u(fg+hp,gS-hp)}fM.2e()}})(1a.bh,1P,1a.mt,1a.bC,fg,1a.bv+fm-1a.by/2,1a.bv+fm+1a.by/2,1a.bv+fm-1a.by/2+1o/gL,1a.bv+fm+1a.by/2+1o/gL),hk);fg++}}if(1m[1]<1a.bv&&!1a.mK){fm=1m[1]-0.5;1q(gV=hb;gV>0;gV-=0.1){1P=1a.fN(ha,(gV>hb/2)?gV:gV/2);2L((1c(fM,1P,mt,hp,gN,gO,gP,gQ,fm){1d 1c(){fM.2o();fM.1R=1;fM.1P=1P;fM.1H(gN,fm);fM.1u(gO,fm);fM.1H(gP,fm);fM.1u(gQ,fm);if(mt){fM.1H(gP+hp,fm-hp);fM.1u(gQ+hp,fm-hp)}fM.2e()}})(1a.bh,1P,1a.mt,1a.bC,1a.bu+fg-1a.by/2,1a.bu+fg+1a.by/2,1a.bu+fg+1o/gL-1a.by/2,1a.bu+fg+1o/gL+1a.by/2,fm),hk);fm--}}}if(1f 1a.mw[1a.bi[eP][0]]!==\'1r\'){if(1a.mK){hm=[1a.bu,1a.bv+fm,1m[1],1a.bv+fm,1m[1],1a.bv+fm+1o/gL,1a.bu,1a.bv+fm+1o/gL]}1i{hm=[1a.bu+fg,1m[1],1a.bu+fg+1o/gL,1m[1],1a.bu+fg+1o/gL,1a.bv+1a.dr,1a.bu+fg,1a.bv+1a.dr]}fx=1a.fw(2M,hm);1a.eD(fx,\'6t\',1a.mw[1a.bi[eP][0]])}gV=1a.bi[eP][0];fE=1a.dZ[gW+1];if(1f fE!==\'1r\'&&1f fE[gV]!==\'1r\'){fD=(1f fE[gV][1]===\'1r\')?1k:fE[gV][1];fh=1a.bi[eP][gW+1];if(1f 1a.bM===\'1n\'){fh=1a.bM+fh}if(1f 1a.bN===\'1n\'){fh=fh+1a.bN}if(1a.mK){eK=1m[1];eL=1a.bv+fm+1o/gL/2}1i{eK=1a.bu+fg+1o/gL/2;eL=1m[1]}1a.fH(1a.bi[eP][0],fh,eK,eL,fD,(1f fE[gV][\'3p\']===\'1r\')?1g:fE[gV][\'3p\']);1a.eb.1s(2L(1a.hq(1a,[eK,eL],1a.bi[eP][0],fh),hk))}fE=1a.dZ[\'4f\'];if(1f fE!==\'1r\'&&1f fE[gV]!==\'1r\'){fD=(1f fE[gV][1]===\'1r\')?1k:fE[gV][1];fh=1a.bi[eP][gW+1];if(1f 1a.bM===\'1n\'){fh=1a.bM+fh}if(1f 1a.bN===\'1n\'){fh=fh+1a.bN}if(1a.mK){eK=1m[1];eL=1a.bv+fm+1o/gL/2}1i{eK=1a.bu+fg+1o/gL/2;eL=1m[1]}1a.fH(1a.bi[eP][0],fh,eK,eL,fD,(1f fE[gV][\'3p\']===\'1r\')?1g:fE[gV][\'3p\']);1a.eb.1s(2L(1a.hq(1a,[eK,eL],1a.bi[eP][0],fh),hk))}}fa=(1a.K===1g)?1a.dw:1a.K;fi=1a.fj(1a.bi[eP][0],1a.M,1k,1k,fa);if(1a.bi[eP][gW+1]<1a.dg){if(1a.mK){1m[1]=1a.mG-4-fi}1i{1m[1]=1a.bv+1a.dr}}if(1m[1]<1a.bv-1a.hr){1m[1]=1a.bv-1a.hr-5}if(1a.S&&!hc){hc=1B;if(1a.mK){fn=1a.fo(1a.M);1a.hs(1a.bi[eP][0],1a.mG-4-fi,1a.bv+fm+1o/gL-1o/2-fn/2,1a.M,1k,1k,1k,fa,1a.E)}1i{if(1a.D>0){1a.bh.3I();1a.bh.41(1a.bu+fg+1o/2,1a.dt-((1a.O===1g)?1a.mE-4:1a.O)+1a.M/2+2);1a.bh.2Z(hl);1a.hs(1a.bi[eP][0],0-fi,0-1a.M/2-2,1a.M,1k,1k,1k,fa,1a.E);1a.bh.3F()}1i{1a.hs(1a.bi[eP][0],1a.bu+fg+1o/2-fi/2,1a.dt-((1a.O===1g)?1a.mE-4:1a.O),1a.M,1k,1k,1k,fa,1a.E)}}}if(1a.bH&&!1a.cu[(1a.mK)?1p.2g(gW-gL)-1:gW]){fh=(1a.bJ===\'2I\')?1a.bi[eP][gW+1]:1a.bi[eP][gW+1].2W(1a.bJ);gX=1J(1a.bi[eP][gW+1]).3W(\'.\');gY=1J(1a.bi[eP][gW+1]).2J(gX+1).1l;if(gY>3&&1a.bJ===\'2I\'){fh=1a.fe(1a.bi[eP][gW+1],3)}if(1f 1a.bM===\'1n\'){fh=1a.bM+fh}if(1f 1a.bN===\'1n\'){fh=fh+1a.bN}if(1a.em!==1g){fh=1a.ht(fh)}fa=(1a.bK===1g)?1a.dw:1a.bK;fi=1a.fj(1J(fh),1a.bL,1k,1k,fa);if(1a.mK){1a.hs(fh,1m[1]+3,1a.bv+fm+1o/gL/2-fn/2,1a.bL,1k,1k,1k,fa,1a.bI,1k,1k,1k,hk)}1i{1a.hs(fh,1a.bu+fg+1o/gL/2-fi/2,1m[1]-1a.fo(1a.bL)-3,1a.bL,1k,1k,1k,fa,1a.bI,1k,1k,1k,hk)}}if(!hd){hd=1B;gK=1a.cN.1l;fa=(1a.cH===1g)?1a.dw:1a.cH;1q(gV=0;gV<gK;gV++){if(1a.cN[gV][0]===1a.bi[eP][0]){fi=1a.fj(1J(1a.cN[gV][1]),1a.cJ,1k,1k,fa);if(1a.mK){1a.hs(1a.cN[gV][1],(1a.cM===1g)?1a.mG-4-fi:1a.cM-fi,1a.bv+fm+1o/2-fn/2,1a.cJ,1k,1k,1k,fa,1a.cF)}1i{if(1a.D>0){1a.bh.3I();1a.bh.41(1a.bu+fg+1o/2,1a.dt-((1a.cL===1g)?1a.mE-10:1a.cL-4));1a.bh.2Z(hl);1a.hs(1a.cN[gV][1],0-fi,0-1a.cJ/2-2,1a.cJ,1k,1k,1k,fa,1a.cF);1a.bh.3F()}1i{1a.hs(1a.cN[gV][1],1a.bu+fg+1o/2-fi/2,1a.dt-((1a.cL===1g)?1a.mE-4:1a.cL),1a.cJ,1k,1k,1k,fa,1a.cF)}}}}}if(1a.mK){if(gW===gL-1&&1f 1a.bi[eP-1]!==\'1r\'){fm-=1o/(1a.bi[eP-1].1l-1);fm-=1a.bE*2/1a.mJ}1i{fm-=1o/gL}}1i{fg=(gW===gL-1)?fg+1o/gL+2*1a.bE:fg+1o/gL}}}1a.ep=hk};1a.hu=1c(eK,eL,1R){1a.bh.5R(eK-1R/4,eL-1R/4,1R/2,1R/2)};1a.mN=1c(){if(1a.mK){1b hv=1a.bP?1a.dr/15:0}1i{1b hv=1a.bO?1a.dq/15:0}1b fc;1b fg;1b fm;if(1a.X===0){1b ff=1a.de;fm=1a.bv+1a.dr-1a.ee;fg=(1a.mK&&1a.ec!==\'1L\')?1a.bu+1a.ee*1a.mJ:1a.bu;2t(ff<=1a.da-1a.dp){1a.bh.2o();1a.bh.1P=1a.fN(1a.cq,1a.cs);1a.bh.1R=1;if(1a.mK&&1a.ec!==\'1L\'){if(1a.mt){1a.bh.1H(fg+1a.bC,1a.bv-hv-1a.bC);1a.bh.1u(fg+1a.bC,1a.bv+1a.dr-1a.bC);1a.bh.1u(fg,1a.bv+1a.dr)}1i{1a.bh.1H(fg,1a.bv-hv);1a.bh.1u(fg,1a.bv+1a.dr)}fg+=1a.ee*1a.mJ}1i{if(1a.mt&&1a.ec!==\'1L\'){1a.bh.1H(1a.bu,fm);1a.bh.1u(1a.bu+1a.bC,fm-1a.bC);1a.bh.1u(1a.bu+1a.dq+hv+1a.bC,fm-1a.bC)}1i{1a.bh.1H(1a.bu,fm);1a.bh.1u(1a.bu+1a.dq+hv,fm)}fm-=1a.ee}ff+=1a.dp;ff=1E(ff.2W(10));1a.bh.2e()}}1i{1b eO=(1a.X>1)?1a.X-1:((1a.dh)?1a.bi[0].1l:1a.bi.1l)-1;2t(!1a.fk(eO)){eO=1p.2q(eO/2)}if(1a.mK){fc=1a.dq/eO;fg=1a.bu}1i{fc=1a.dr/eO;fm=1a.bv+1a.dr-fc}1q(1b eP=1;eP<=eO;eP++){1a.bh.2o();1a.bh.1P=1a.fN(1a.cq,1a.cs);1a.bh.1R=1;if(1a.mK&&1a.ec!==\'1L\'){if(1a.mt){1a.bh.1H(fg,1a.bv-hv);1a.bh.1u(fg,1a.bv+1a.dr)}1i{1a.bh.1H(fg,1a.bv-hv);1a.bh.1u(fg,1a.bv+1a.dr)}fg+=fc}1i{if(1a.mt&&1a.ec!==\'1L\'){1a.bh.1H(1a.bu,fm);1a.bh.1u(1a.bu+1a.bC,fm-1a.bC);1a.bh.1u(1a.bu+1a.dq+hv+1a.bC,fm-1a.bC)}1i{1a.bh.1H(1a.bu,fm);1a.bh.1u(1a.bu+1a.dq+hv,fm)}fm-=fc}1a.bh.2e()}}};1a.gp=1c(){1b hv=1a.bP?1a.dr/15:0;1b fd;1b ff;1b fc;1b fg;if(1a.W===0){ff=1a.dd;fg=1a.bu+1a.ed;2t(ff<=1a.cZ-1a.mM){1a.bh.2o();1a.bh.1P=1a.fN(1a.cr,1a.ct);1a.bh.1R=1;1a.bh.1H(fg,1a.bv+1a.dr);1a.bh.1u(fg,1a.bv-hv);1a.bh.2e();ff+=1a.mM;fg+=1a.ed}}1i{1b eO=(1a.W>1)?1a.W-1:((1a.dh)?1a.bi[0].1l:1a.bi.1l)-1;2t(!1a.eQ(eO)){eO=1p.2q(eO/2)}fc=1a.dq/eO;fd=(1a.db-1a.df)/eO;ff=1a.df;fg=1a.bu+fc;1q(1b eP=0;eP<=eO-1;eP++){1a.bh.2o();1a.bh.1P=1a.fN(1a.cr,1a.ct);1a.bh.1R=1;1a.bh.1H(fg,1a.bv+1a.dr);1a.bh.1u(fg,1a.bv-hv);1a.bh.2e();ff+=fd;fg+=fc}}};1a.gn=1c(){1b gL=1a.bi.1l;1b eO;1b gK;1b eK;1b eL;1b eP;1b gV;1b 1L;1b 1m;1b hw;1b hx;1b hy;1b hz;1b 1R;1b hA;1b hB=[];1b hC=[];1b hD=[];1b fc=(1a.bV===1)?1g:1a.dq/1a.bV;1b hE=0;1b hF;if(1a.dZ[\'4f\']==={}){ag 1a.dZ[\'4f\']}1a.ea=1a.fq(1a.dZ);1q(1b hG=0;hG<gL;hG++){if(1a.cu[hG]){39}eO=1a.bi[hG].1l;if(1a.bQ.1l===1){hz=1a.bQ[0]}1i{hz=(1f 1a.bQ[hG]===\'1r\')?1a.bQ[0]:1a.bQ[hG]}if(1a.bU.1l===1){hA=1a.bU[0]}1i{hA=(1f 1a.bU[hG]===\'1r\')?1a.bU[0]:1a.bU[hG]}if(1a.bX.1l===1){1R=1a.bX[0]}1i{1R=(1f 1a.bX[hG]===\'1r\')?1a.bX[0]:1a.bX[hG]}hH=1a.fN(hz,hA);1q(eP=0;eP<eO;eP++){1m=1a.hn(1a.bi[hG][eP][0],1a.bi[hG][eP][1]);if(eP<eO-1){hy=1a.hn(1a.bi[hG][eP+1][0],1a.bi[hG][eP+1][1]);if(!1a.eJ(1a.bi[hG][eP][0],1a.bi[hG][eP][1])){hw=1g;1q(gV=1m[0];gV<hy[0];gV+=0.9E){if(hy[1]>=1m[1]){eL=(hy[1]-1m[1])*(gV-1m[0])/(hy[0]-1m[0])+1m[1]}1i{eL=(1m[1]-hy[1])*(gV-1m[0])/(hy[0]-1m[0])+1m[1];eL=1m[1]*2-eL}if(1a.eJ(gV,eL,1B)){hw=1B;1F}}if(!hw){39}1m[0]=gV;1m[1]=eL}if(!1a.eJ(1a.bi[hG][eP+1][0],1a.bi[hG][eP+1][1])){hw=1g;hx=1g;1q(gV=1m[0];gV<hy[0];gV+=0.9E){if(hy[1]>=1m[1]){eL=(hy[1]-1m[1])*(gV-1m[0])/(hy[0]-1m[0])+1m[1]}1i{eL=(1m[1]-hy[1])*(gV-1m[0])/(hy[0]-1m[0])+1m[1];eL=1m[1]*2-eL}if(1a.eJ(gV,eL,1B)){hx=1B}1i if(hx){hw=1B;1F}}if(hw){hy[0]=gV;hy[1]=eL}}if(fc===1g){1a.bh.2o();1a.bh.1P=hH;1a.bh.1R=1R;1a.bh.1H(1m[0],1m[1]);1a.bh.1u(hy[0],hy[1]);1a.bh.2e()}1i{1q(gV=1m[0];gV<hy[0];gV+=fc){if(hy[1]>=1m[1]){eL=(hy[1]-1m[1])*(gV-1m[0])/(hy[0]-1m[0])+1m[1]}1i{eL=(1m[1]-hy[1])*(gV-1m[0])/(hy[0]-1m[0])+1m[1];eL=1m[1]*2-eL}hC.1s([gV,eL])}hC.1s([hy[0],hy[1]]);hB.1s(hC);hC=[]}}1m=1a.hn(1a.bi[hG][eP][0],1a.bi[hG][eP][1]);1L=1a.bj[hG];eK=1a.bi[hG][eP][0];if(1f 1a.dZ[1L]!==\'1r\'&&1f 1a.dZ[1L][eK]!==\'1r\'){if(fc!==1g){hD[1m[0]]=[1L,eK,hG,eP,1m]}1i{1a.hI(1L,eK,hG,eP,1m)}}if(1f 1a.dZ[\'4f\']!==\'1r\'&&1f 1a.dZ[\'4f\'][eK]!==\'1r\'){if(fc!==1g){hD[1m[0]]=[\'4f\',eK,hG,eP,1m]}1i{1a.hI(\'4f\',eK,hG,eP,1m)}}}if(fc!==1g){1q(eP=0,eO=hB.1l;eP<eO;eP++){hC=hB[eP];1q(gV=0,gK=hC.1l;gV<gK;gV++){hE+=gV+eP;if(1f hD[hC[gV][0]]!==\'1r\'){gW=hD[hC[gV][0]];1a.hI(gW[0],gW[1],gW[2],gW[3],gW[4],hE+50)}if(gV>=gK-1){39}hF=hC[gV+1];2L((1c(fM,hC,hF,hH,1R){1d 1c(){fM.2o();fM.1P=hH;fM.1R=1R;fM.1H(hC[0],hC[1]);fM.1u(hF[0],hF[1]);fM.2e()}})(1a.bh,hC[gV],hF,hH,1R),hE+50)}}}hE=0;hC=[];hB=[]}};1a.gw=1c(){1b 1m;1b 1l;1b eO=1a.bi.1l;1b gK;1b 1M=0;1b fb=0;1b fD;1b 4i;1b 4g;1b 1j;1b hJ=[];1b gX;1b gY;1b fh;1b fi;1b gV;1b hg;1b hK=1;1b hL=1;1b fa;1b fz;1b 2M;1b hM;1b hN;1b hm;1b 2i=2;1b 1o;1b 1C;1b 1z;1b hO=1a.cc;if(1a.cb===0){1a.cb=1a.ds/2}if(1a.cc===0){1a.cc=1a.dt/2}if(1a.cd===0){1a.cd=(1a.dt>1a.ds)?1a.ds/3.75:1a.dt/3.75}1q(1b eP=0;eP<eO;eP++){fb+=1a.bi[eP][1]}1a.bh.3I();if(1a.mt){gV=1a.cd*1p.2G(1a.bY*1p.1X/43);hL=gV/1a.cd;hK=1a.bZ*1p.3X(1a.bY*1p.1X/43)/hL;1a.bh.4T(1,hL);1a.cc+=(1a.cc-1a.cc*hL)/hL}1q(eP=0;eP<eO;eP++){1l=1a.bi[eP][1]*1p.1X*2/fb;1a.bh.2o();if(1a.fL()){1a.bh.2U();if(1l===0){1l=0.qv}}1j=1a.hP();if(eP>0){2t(hJ[hJ.1l-1]===1j||(eP===eO-1&&hJ[0]===1j)){1j=1a.hP()}}hJ[hJ.1l]=1j;1N=1a.fN(1j,1a.ca);if(1a.be!==1g){1N=1a.fN(1a.be[eP],1a.ca)}1a.bh.1N=1N;1a.bh.4t(1a.cb,1a.cc,1a.cd,1M,1M+1l,1g);1a.bh.1u(1a.cb,1a.cc);1a.bh.2U();1a.bh.35();if(1a.mt&&1M<=1p.1X){hg=1l;hQ=1a.cd*1p.2G(1M);hR=1a.cd*1p.3X(1M);if(1M+1l>1p.1X){hS=-1a.cd;hT=0;hg=1p.1X-1M}1i{hS=1a.cd*1p.2G(1M+hg);hT=1a.cd*1p.3X(1M+hg)}1a.bh.2o();1a.bh.1N=1N;1a.bh.4t(1a.cb,1a.cc+hK,1a.cd,1M,1M+hg,1g);1a.bh.1u(1a.cb+hS,1a.cc+hT+hK);1a.bh.4t(1a.cb,1a.cc,1a.cd,1M+hg,1M,1B);1a.bh.2U();1a.bh.35()}1M+=1l}1a.bh.3F();2M=1a.fv();1a.fy(2M);hM=1p.2q(1a.cd/20);1M=0;1q(eP=0;eP<eO;eP++){1l=1a.bi[eP][1]*1p.1X*2/fb;if(1f 1a.mw[1a.bi[eP][0]]!==\'1r\'){hm=[1a.cb,1a.cc*hL];hg=1M;hN=1l/hM;1q(gV=0;gV<=hM;gV++,hg+=hN){hm.1s(1a.cb+1a.cd*1p.2G(hg));hm.1s((1a.cc+1a.cd*1p.3X(hg))*hL)}fx=1a.fw(2M,hm);1a.eD(fx,\'6t\',1a.mw[1a.bi[eP][0]])}gK=1a.dZ.1l;gV=1a.bi[eP][0];if(1f 1a.dZ[gV]!==\'1r\'){1m=1a.hU(1M,1l,1a.bp);fD=(1f 1a.dZ[gV][1]===\'1r\')?1k:1a.dZ[gV][1];fh=1a.bi[eP][1];if(1f 1a.cn===\'1n\'){fh=1a.cn+fh}if(1f 1a.co===\'1n\'){fh=fh+1a.co}1a.fH(1a.bi[eP][0],fh,1m[0],1m[1]*hL,fD,(1f 1a.dZ[gV][\'3p\']===\'1r\')?1g:1a.dZ[gV][\'3p\']);1a.eb.1s(2L(1a.hq(1a,1m,1a.bi[eP][0],fh,hL),0))}if(1a.S){1m=1a.hU(1M,1l,1a.mL);fa=(1a.cf===1g)?1a.dw:1a.cf;if(1M+1l/2<1p.1X/3||1M+1l/2>=1p.1X/3*5){4i=0;4g=-1a.fo(1a.cg)/2}1i if(1M+1l/2<1p.1X/3*2){4i=-1a.fj(1a.bi[eP][0],1a.cg,1k,1k,fa)/2;4g=0}1i if(1M+1l/2<1p.1X/3*4){4i=-1a.fj(1a.bi[eP][0],1a.cg,1k,1k,fa);4g=-1a.fo(1a.cg)/2}1i if(1M+1l/2<1p.1X/3*5){4i=-1a.fj(1a.bi[eP][0],1a.cg,1k,1k,fa)/2;4g=-1a.fo(1a.cg)}1a.hs(1a.bi[eP][0],1m[0]+4i,1m[1]*hL+4g,1a.cg,1k,1k,1k,fa,1a.ce)}if(1a.T){fh=(1a.cj===\'2I\')?1a.bi[eP][1]:1a.bi[eP][1].2W(1a.cj);gX=1J(1a.bi[eP][1]).3W(\'.\');gY=1J(1a.bi[eP][1]).2J(gX+1).1l;if(gY>3&&1a.cj===\'2I\'){fh=1a.fe(1a.bi[eP][1],3)}if(1f 1a.cn===\'1n\'){fh=1a.cn+fh}if(1f 1a.co===\'1n\'){fh=fh+1a.co}if(1a.em!==1g){fh=1a.ht(fh)}fa=(1a.ck===1g)?1a.dw:1a.ck;fi=1a.fj(1J(fh),1a.cl,1k,1k,fa);1l=1a.bi[eP][1]*1p.1X*2/fb;1m=1a.hU(1M,1l,1a.cm);4g=-1a.fo(1a.cl)/2;4i=-fi/2;1a.hs(fh,1m[0]+4i,1m[1]*hL+4g,1a.cl,1k,1k,1k,fa,1a.ci)}1M+=1l}1a.cc=hO};1a.hq=1c(hV,1m,hW,hX,hL){1d 1c(){if(1f hL===\'1r\'){hL=1}1b 2i=2;1b 1o=hV.br*2+hV.bt*2+2i*2;1b 1C=hV.br*2+hV.bt*2+2i*2;1b fJ=1g;1b 1z=1Y.2p(\'8o\');1z.2H(\'id\',\'9L\'+hV.bc+\'4H\'+hW+\'4H\'+hX+\'8t\');1z.1v.1G=\'2X\';1z.1v.1o=1o+\'px\';1z.1o=1o;1z.1v.1C=1C+\'px\';1z.1C=1C;1z.1v.2b=(hV.ba.3U+1m[0]-1o/2)+\'px\';1z.1v.2v=(hV.ba.44+1m[1]-1C/2)*hL+\'px\';1z.1v.3d=1E(hV.ba.1v.3d)+80;hV.bg.2z(1z);if(!hV.fK(1z)&&hV.fL()){1z=66.5B(1z);fJ=1g}1b fM=1z.3k(\'2d\');fM.2o();fM.1R=hV.bt;fM.1P=hV.fN(hV.bn,(hV.bt===0)?0:hV.bq);2s(hV.bs){1A\'74\':fM.1H(1z.1o/2-hV.br,1z.1C/2+hV.br);fM.1u(1z.1o/2-hV.br,1z.1C/2-hV.br);fM.1u(1z.1o/2+hV.br,1z.1C/2-hV.br);fM.1u(1z.1o/2+hV.br,1z.1C/2+hV.br);fM.35();1F;1A\'9M\':fM.1H(1z.1o/2-hV.br*1p.2G(1p.1X/6),1z.1C/2+hV.br*1p.2G(1p.1X/3));fM.1u(1z.1o/2,1z.1C/2-hV.br);fM.1u(1z.1o/2+hV.br*1p.2G(1p.1X/6),1z.1C/2+hV.br*1p.2G(1p.1X/3));fM.35();1F;1A\'9K\':fM.1H(1z.1o/2-hV.br,1z.1C/2);fM.1u(1z.1o/2,1z.1C/2-hV.br);fM.1u(1z.1o/2+hV.br,1z.1C/2);fM.1u(1z.1o/2,1z.1C/2+hV.br);fM.35();1F;1A\'8v\':2w:fM.4t(1z.1o/2,1z.1C/2,hV.br,0,1p.1X*2,1g)}if(hV.bo!==1g){fM.1N=hV.fN(hV.bo,hV.bq);fM.2U()}fM.2e();if(fJ){hV.fO(1z)}}};1a.hY=1c(hZ){if(hZ===""||hZ==="0"||hZ===0||hZ===1k||hZ===1g||hZ===[]){1d 1g}1d 1B};1a.fu=1c(){if(1a.bc!==\'\'&&1Y.3B(1a.bc)){1d 1B}1d 1g};1a.ia=1c(2y,ib,ic,mO,fa,1j,fF,ie,id){1b mP=[];mP.2y=(1f 2y===\'1r\'||2y===1k)?1a.dx:2y;mP.ib=(1f ib===\'1r\'||ib===1k)?1a.dy:ib;mP.ic=(1f ic===\'1r\'||ic===1k)?1a.dz:ic;mP.mO=(1f mO===\'1r\')||mO===1k?1a.du:mO;mP.fa=(1f fa===\'1r\'||fa===1k)?1a.dw:fa;mP.1j=(1f 1j===\'1r\'||1j===1k)?1a.dv:1j;mP.fF=(1f fF===\'1r\'||fF===1k)?1a.dB:fF;mP.ie=(1f ie===\'1r\'||ie===1k)?1a.dC:ie;mP.id=(1f id===\'1r\'||id===1k)?1a.dA:id;1d mP};1a.ht=1c(eP){eP=1J(eP);1b ig=1g;1b hj=1g;1b ih=\'\';1b hG;if(1a.em===\'.\'){1b ii=\'.\';1b ij=\',\'}1i{1b ii=\',\';1b ij=\'.\'}1b mQ=eP.3W(\'.\');if(mQ===-1){ig=eP}1i{ig=eP.2J(0,mQ);hj=eP.2J(mQ+1)}1q(1b gV=ig.1l-1,fc=0;gV>=0;gV--,fc++){hG=ig.2J(gV,1);if(/[0-9]/.3b(hG)){if(fc===3){fc=-1;gV++;ih=ij+ih}1i{ih=hG+ih}}}1d(hj===1g)?ih:ih+ii+hj};1a.gM=1c(){1b il=1a.dq/1a.bi.1l;1a.bE=1p.2n(il*1a.bF/1T);1d il-2*1a.bE};1a.hn=1c(eK,eL){1b im=[1k,1k];if(1f eK===\'1h\'){im[0]=(1a.W===0)?(eK-1a.dd)*1a.ed/1a.mM+1a.bu:(eK-1a.df)*1a.ed+1a.bu}if(1f eL===\'1h\'){im[1]=(1a.X===0)?(1a.da-eL)*1a.ee/1a.dp+1a.bv:(1a.dc-eL)*1a.ee+1a.bv}1d im};1a.ge=1c(){1a.ew+=\'qp\';1a.gi+=\'qr\';1a.df=1a.mR();1a.dg=1a.io();1a.db=1a.ip();1a.dc=1a.iq();if(1a.ec===\'2j\'){1b ir=0;2t(1a.dc-1a.dg<(1a.dg-ir)*20/1T){ir=(1a.dg-ir)*90/1T+ir}1a.dg=ir}if(1a.ec===\'1L\'){if(1a.cz!==1g&&1a.cx!==1g&&1a.cz>1a.cx){1a.eB(\'9u\');1a.cz=1g;1a.cx=1g}1i{if(1a.cz!==1g){1a.df=1a.cz}if(1a.cx!==1g){1a.db=1a.cx}}}if(1a.ec===\'1L\'||1a.ec===\'2j\'){if(1a.cA!==1g&&1a.cy!==1g&&1a.cA>1a.cy){1a.eB(\'9x\');1a.cA=1g;1a.cy=1g}1i{if(1a.cA!==1g){1a.dg=1a.cA}1i if(1a.ec===\'2j\'){1a.dg=0}if(1a.cy!==1g){1a.dc=1a.cy}}}};1a.ip=1c(){1b is;1b eO;1b eP;if(1a.dh){1b gL=1a.bi.1l;1q(1b hG=0;hG<gL;hG++){eO=1a.bi[hG].1l;1q(eP=0;eP<eO;eP++){if(1f is===\'1r\'){is=1a.bi[hG][eP][0]}1i{if(is<1a.bi[hG][eP][0]){is=1a.bi[hG][eP][0]}}}}}1i{eO=1a.bi.1l;1q(eP=0;eP<eO;eP++){if(eP===0){is=1a.bi[eP][0]}1i{if(is<1a.bi[eP][0]){is=1a.bi[eP][0]}}}}1d is};1a.iq=1c(){1b is;1b gL;1b eO;1b eP;1b hG;if(1a.dh){gL=1a.bi.1l;1q(hG=0;hG<gL;hG++){eO=1a.bi[hG].1l;1q(eP=0;eP<eO;eP++){if(1f is===\'1r\'){is=1a.bi[hG][eP][1]}1i{if(is<1a.bi[hG][eP][1]){is=1a.bi[hG][eP][1]}}}}}1i{eO=1a.bi.1l;1q(eP=0;eP<eO;eP++){gL=1a.bi[eP].1l-1;1q(hG=1;hG<=gL;hG++){if(eP===0&&hG===1){is=1a.bi[eP][hG]}1i{if(is<1a.bi[eP][hG]){is=1a.bi[eP][hG]}}}}}1d is};1a.mR=1c(){1b is;1b it;1b eP;if(1a.dh){1b gL=1a.bi.1l;1b eP;1q(1b hG=0;hG<gL;hG++){eO=1a.bi[hG].1l;1q(eP=0;eP<eO;eP++){if(1f is===\'1r\'){is=1a.bi[hG][eP][0]}1i{if(is>1a.bi[hG][eP][0]){is=1a.bi[hG][eP][0]}}}}}1i{eO=1a.bi.1l;1q(eP=0;eP<eO;eP++){if(eP===0){is=1a.bi[eP][0]}1i{if(is>1a.bi[eP][0]){is=1a.bi[eP][0]}}}}1d is};1a.io=1c(){1b is;1b eO;1b eP;if(1a.dh){1b gL=1a.bi.1l;1q(1b hG=0;hG<gL;hG++){eO=1a.bi[hG].1l;1q(eP=0;eP<eO;eP++){if(1f is===\'1r\'){is=1a.bi[hG][eP][1]}1i{if(is>1a.bi[hG][eP][1]){is=1a.bi[hG][eP][1]}}}}}1i{eO=1a.bi.1l;1q(eP=0;eP<eO;eP++){if(eP===0){is=1a.bi[eP][1]}1i{if(is>1a.bi[eP][1]){is=1a.bi[eP][1]}}}}1d is};1a.hU=1c(1M,1l,fG){1b 1m;if(1M+1l/2<1p.1X/2){1m=1a.iu(1M,1M+1l,1a.cb,1a.cc,1a.cd+fG)}1i if(1M+1l/2<1p.1X){1m=1a.iv(1M,1M+1l,1a.cb,1a.cc,1a.cd+fG)}1i if(1M+1l/2<1p.1X+1p.1X/2){1m=1a.iw(1M,1M+1l,1a.cb,1a.cc,1a.cd+fG)}1i{1m=1a.mS(1M,1M+1l,1a.cb,1a.cc,1a.cd+fG)}1d 1m};1a.iu=1c(iy,iz,eK,eL,iA){1b hl=(iz-iy)/2+iy;1d[eK+iA*1p.2G(hl),eL+iA*1p.3X(hl)]};1a.iv=1c(iy,iz,eK,eL,iA){1b hl=(iz-iy)/2+1p.1X-iz;1d[eK-iA*1p.2G(hl),eL+iA*1p.3X(hl)]};1a.iw=1c(iy,iz,eK,eL,iA){1b hl=(iz-iy)/2+iy-1p.1X;1d[eK-iA*1p.2G(hl),eL-iA*1p.3X(hl)]};1a.mS=1c(iy,iz,eK,eL,iA){1b hl=2*1p.1X-iy-(iz-iy)/2;1d[eK+iA*1p.2G(hl),eL-iA*1p.3X(hl)]};1a.hP=1c(){1b 1V=1p.2g(1p.2n(1p.9I()*1a.bf.1l-1));1d 1a.bf[1V]};1a.fo=1c(1t){if(!1a.dI){1d 8U(1t)}1b 1t=(1f 1t===\'1r\')?12:1t;1d 32*(1t/25)};1a.fj=1c(1O,2y,ic,mO,fa){1a.bh.1Z=(1a.fL())?2y+1a.bm+1a.bl+\'px "\'+fa+\'"\':2y+1a.bl+\'px "\'+fa+\'"\';if(!1a.dI){1d 8Q(1O,2y,ic,mO,\'4a-4b\')}1i{1d 1a.bh.8R(1O).1o}};1a.gA=1c(iB,iC,iD){1b iE;1b 2D;1b hL=1;1b gV;1b fa=(1a.eh===1g)?1a.dw:1a.eh;if(iC){2s(1a.ek){1A\'ne\':iE=0;1F;1A\'se\':iE=1;1F;1A\'sw\':iE=2;1F;2w:iE=3}2D=1a.ei}1i{iE=1U(1p.9I()*4,10);iE=3;2D=1a.er;fa=\'93\'}1b fg;1b fm;if(1a.ec===\'2T\'){if(1a.cc===0){1a.cc=1a.dt/2}if(1a.mt){gV=1a.cd*1p.2G(1a.bY*1p.1X/43);hL=gV/1a.cd}}if(iD){2s(iE){1A 0:fg=1a.ds-1a.eu;fm=0;1F;1A 1:fg=1a.ds-1a.eu;fm=1a.dt-1a.et;1F;1A 2:fg=0;fm=1a.dt-1a.et;1F;2w:fg=0;fm=0}}1i{2s(iE){1A 0:if(1a.ec===\'2T\'){fm=1a.cc-1a.cd-1a.mL-1a.cg-1a.fo(2D)-5;fg=1a.cb+1a.cc-fm-1a.fj(iB,2D,1k,1k,fa)}1i{fg=1a.ds-1a.mI-1a.fj(iB,2D,1k,1k,fa);fm=1a.bv}1F;1A 1:if(1a.ec===\'2T\'){fm=1a.cc+1a.cd+1a.mL+1a.cg+5;fg=1a.cb+fm-1a.cc-1a.fj(iB,2D,1k,1k,fa)}1i{fg=1a.ds-1a.mI-1a.fj(iB,2D,1k,1k,fa);fm=1a.dt-1a.mE-1a.fo(2D)-5}1F;1A 2:if(1a.ec===\'2T\'){fm=1a.cc+1a.cd+1a.mL+1a.cg+5;fg=1a.cb-(fm-1a.cc)-5}1i{fg=1a.mG+5;fm=1a.dt-1a.mE-1a.fo(2D)-5}1F;2w:if(1a.ec===\'2T\'){fm=1a.cc-1a.cd-1a.mL-1a.cg-1a.fo(2D)-5;fg=1a.cb-(1a.cc-fm)+5}1i{fg=1a.mG+5;fm=1a.bv}}}1d[fg,fm]};1a.gD=1c(76){1b iF=76.4A(\'.\');1b eO=iF.1l;1b iG=\'\';1q(1b eP=0;eP<eO;eP++){iG+=1a.iH.iI(iF[eP])}iG=1a.iH.iI(iG);iG+=\'-\'+1a.ey;1d 1a.iH.iI(iG)};1a.iJ=1c(iK){iK=iK.2R(29 3n(/^\\s+/),"");iK=iK.2R(29 3n(/\\s+$/),"");iK=iK.2R(29 3n(/\\\\/g),"/");iK=iK.2R(29 3n(/^q1\\:\\/\\/|^q0\\:\\/\\/|^pS\\:\\/\\//i),"");iK=iK.2R(29 3n(/^9G\\./i),"");iK=iK.2R(29 3n(/\\/(.*)/),"");1b iL=\'\';if(iK.73(29 3n(/\\.[a-z]{2,3}\\.[a-z]{2}$/i))){iL=iK.73(29 3n(/\\.[a-z]{2,3}\\.[a-z]{2}$/i)).3e("");iK=iK.2R(29 3n(/\\.[a-z]{2,3}\\.[a-z]{2}$/i),"")}1i if(iK.73(29 3n(/\\.[a-z]{2,4}$/i))){iL=iK.73(29 3n(/\\.[a-z]{2,4}$/i)).3e("");iK=iK.2R(29 3n(/\\.[a-z]{2,4}$/i),"")}1b iM=iK.4A(".");iK=1J(iM[iM.1l-1]).6R(iL);1d iK};1a.gC=1c(76){1b iN=1a.iJ(76);1b iF=iN.4A(\'.\');1b eO=iF.1l;1b iO=0;1b iG=\'\';1q(1b eP=iO;eP<eO;eP++){iG+=1a.iH.iI(iF[eP])}iG=1a.iH.iI(iG);iG+=\'-\'+1a.eA;1d 1a.iH.iI(iG)+\'#8P\'};1a.fN=1c(1j,iP){if(1f 1j===\'1r\'||(1j.1l!==4&&1j.1l!==7)){1a.eB(\'2a\');1d 1g}if(1j.1l===4){1j=(\'#\'+1j.2Y(1,2))+1j.2Y(1,2)+1j.2Y(2,3)+1j.2Y(2,3)+1j.2Y(3,4)+1j.2Y(3,4)}1b iQ=1U(1j.2Y(1,7).2Y(0,2),16);1b iR=1U(1j.2Y(1,7).2Y(2,4),16);1b hj=1U(1j.2Y(1,7).2Y(4,6),16);1d\'pV(\'+iQ+\', \'+iR+\', \'+hj+\', \'+iP+\')\'};1a.iS=1c(iF,iT){1q(1b eP=0,eO=iF.1l;eP<eO;eP++){if(iF[eP]===iT){1d 1B}}1d 1g};1a.iU=1c(2B,2f,3Y,ik,58){if(1f 3Y===\'1r\'){3Y=\'\';ik=\'\'}if(!1a.eM(2B)){1a.iV=1B;1a.eB(\'9j\');1d}1a.di=2B;1a.bg=1Y.3B(2B);1a.bg.3r=\'\';if(!1a.eN(2f)){1a.cw=1B;1a.eB(\'aW\');1d}4k(gg.gh(\'q9\'));4k(gg.gh(\'q8\'));if(58){1b 1o=1a.bg.1v.1o;1b 1C=1a.bg.1v.1C;1a.iW(1o,1C)}};1a.iX=1c(1D){1b iY=1a.mu[1a.ec];if(!1a.gb(1D)){1d 1g}1b eO=1D.1l;1q(1b eP=0;eP<eO;eP++){if(!1a.gb(1D[eP])){1d 1g}if(1D[eP].1l<iY.1l){1d 1g}gK=2;1q(1b gV=0;gV<gK;gV++){if(1f 1D[eP][gV]!==iY[gV]){1d 1g}if(5A(1D[eP][gV])&&iY[gV]===\'1h\'){1d 1g}}}1d 1B};1a.gb=1c(1D){if(1D 7b 3S){1d 1B}1d 1g};1a.fK=1c(iZ){1d(iZ.3k)};1a.ja=1c(iZ){1d 6f.3j.5e.48(iZ)==="[4c qa]"};1a.fL=1c(){1b jb=5L.5F.3a();1d(!/^79/.3b(jb)&&/qc/.3b(jb))};1a.jc=1c(){1b jb=5L.5F.3a();1d(/q7/.3b(jb)&&!/(q3|q4)/.3b(jb))};1a.jd=1c(){1b jb=5L.5F.3a();1b k2=1E(jb.3W(\'/\'));1d(/^79/.3b(jb)&&k2<10.50)};1a.ga=1c(){1d(1f 1a.bh.8R!==\'1r\')};1a.je=1c(jf){jf=2F.5X(jf);if(1f jf.1y===\'1r\'){1a.eB(\'6g\');1d}1i{1b jg=1Y.2p(\'1y\');1b jh;1b ji;1b 1D;1b jj;1b jk;1b eP;1b gV;1b eO;if(1f jf.1y[\'k1\']===\'1r\'){1a.eB(\'6g\');1d}1i{jh=jf.1y[\'k1\'];eO=jh.1l;1q(eP=0;eP<eO;eP++){ji=jh[eP];jl=1Y.2p(\'e4\');if(1f ji.5h===\'1n\'&&ji.5h===\'1B\'){jl.2H(\'5h\',1B)}if(1f ji.2f===\'1n\'){jl.2H(\'2f\',ji[\'2f\'])}if(1f ji.id===\'1n\'){jl.2H(\'id\',ji[\'id\'])}if(1f ji[\'1D\']!==\'1r\'&&1f ji[\'1D\']!==\'1r\'){gK=ji[\'1D\'].1l;1q(gV=0;gV<gK;gV++){jm=1Y.2p(\'1D\');jm.2H(\'8K\',ji[\'1D\'][gV][\'8K\']);jm.2H(\'1K\',ji[\'1D\'][gV][\'1K\']);jl.2z(jm)}}jg.2z(jl)}if(1f jf.1y[\'65\']!==\'1r\'){jn=jf.1y[\'65\'];eO=jn.1l;jo=1Y.2p(\'65\');1q(eP=0;eP<eO;eP++){jp=1Y.2p(\'1j\');jp.2H(\'1K\',jn[eP]);jo.2z(jp)}jg.2z(jo)}if(1f jf.1y[\'67\']!==\'1r\'){jj=jf.1y[\'67\'];eO=jj.1l;jq=1Y.2p(\'67\');1q(eP=0;eP<eO;eP++){jr=1Y.2p(\'6e\');jr.2H(\'3V\',jj[eP][\'3V\']);jr.2H(\'1K\',jj[eP][\'1K\']);jq.2z(jr)}jg.2z(jq)}}}js=1Y.2p(\'j3\');js.2z(jg);1d js};1a.hI=1c(1L,eK,hG,eP,1m,hk){if(1f 1a.dZ[1L]===\'1r\'||1f 1a.dZ[1L][eK]===\'1r\'){1d 1g}if(1f 1a.dZ[1L][eK][2]!==\'1r\'&&1a.dZ[1L][eK][2]!==1a.bj[hG]){1d 1g}if(1a.iS(1a.dQ,1m)){1d 1g}1a.dQ.1s(1m);1b fD=(1f 1a.dZ[1L][eK][1]===\'1r\')?1k:1a.dZ[1L][eK][1];1b hW=1a.bi[hG][eP][0];if(1f 1a.Q===\'1n\'){hW=1a.Q+hW}if(1f 1a.Q===\'1n\'){hW=hW+1a.Q}1b hX=1a.bi[hG][eP][1];if(1f 1a.R===\'1n\'){hX=1a.R+hX}if(1f 1a.V===\'1n\'){hX=hX+1a.V}1a.fH(hW,hX,1m[0],1m[1],fD,(1f 1a.dZ[1L][eK][\'3p\']===\'1r\')?1g:1a.dZ[1L][eK][\'3p\']);if(1f hk===\'1r\'){hk=0}1a.eb.1s(2L(1a.hq(1a,1m,hW,hX),hk))};1a.jt=1c(ju){1b js;if(!1a.fL()){7K.i5=(1c(iZ,3g){if(iZ){1d 1c(){37(3g)}}1d 1c(){}})(1a.dn,1a.eC.6s)}5l{js=29 f1(\'7N.qb\')}5k(jv){5l{1b js=29 f3()}5k(3g){37(3g.8h);1d}}js.d6("i7",ju,1g);js.i9("j6-j7","pX/j3, 1O/qz");js.j2(1k);js=js.qx;js.f5=1g;1d js};1a.jw=1c(ju,fh){1b js;fh=(1f fh!==\'1r\'&&fh===1B);if(!1a.fL()){7K.i5=(1c(iZ,3g){if(iZ){1d 1c(){37(3g)}}1d 1c(){}})(1a.dn,1a.eC.6s)}5l{js=29 f1(\'7N.qj\')}5k(jv){5l{if(!fh){1b jx=29 f3();jx.d6("i7",ju,1g);jx.i9("j6-j7","1O/f8");jx.j2(1k);js=jx.nd}}5k(3g){37(3g.8h);1d}}1b jy;if(fh){if(1a.fL()){jy=js.nn(ju)}1i{1b jz=29 n4();js=jz.n9(ju,"1O/f8");jy=1B}}1i{js.f5=1g;jy=1a.fL()?js.ni(ju):1B}if(!jy){1a.eB(\'6s\');1d}1d js};1a.jA=1c(eK,ir){1d 1p.e3(eK)/1p.e3(ir)};1a.jB=1c(js){if(1f js===\'1r\'){1d 1g}1b jC=[];1b jD=[];1b jE=[];if(js.7P(\'1y\').1l!==1){1a.eB(\'6g\');1d}1b jF=js.7P(\'1y\')[0];1b eO=jF.3T.1l;1b gK;1b gL;1b jG;1b 1D;1b 1j;1b ec;1b jH;1b jI;1b jJ;1b jK;1b jL;1b gV;1b gW;1b id;1b jM;1b 61;1b jN;1q(1b eP=0;eP<eO;eP++){jG=jF.3T[eP];if(1f jG===\'1r\'){39}if(1J(jG.4r).3a()===\'e4\'){ec=jG.2Q(\'2f\');if(ec===1k||ec===\'\'){1a.eB(\'b8\');1d}1a.ec=ec;gK=jG.3T.1l;if(gK<1){1a.eB(\'b7\');1d}gL=0;jL=(jG.2Q(\'5h\')===\'1B\');1q(gV=0;gV<gK;gV++){1D=jG.3T[gV];if(1J(1D.4r).3a()===\'1D\'){jI=1D.2Q(\'8K\');jJ=1D.2Q(\'1K\');if(jI===1k||jI===\'\'||jJ===1k||jJ===\'\'){1a.eB(\'6p\');1d}2s(ec){1A\'2j\':if(jJ.3x(\',\')>-1){61=[1J(jI)];jN=jJ.4A(\',\');1q(gW=0;gW<jN.1l;gW++){61.1s(1E(jN[gW]))}jC.1s(61);if(gL<jN.1l){gL=jN.1l}}1i{jC.1s([1J(jI),1E(jJ)])}1F;1A\'2T\':if(5A(1E(jJ))){1a.eB(\'6p\');1d}jC.1s([1J(jI),1E(jJ)]);1F;2w:if(5A(1E(jJ))){1a.eB(\'6p\');1d}if(/^[0-9.]*$/.3b(jI)&&!jL){jC.1s([1E(jI),1E(jJ)])}1i{jC.1s([1J(jI),1E(jJ)]);1a.bW=1B}}}}if(1a.ec===\'2j\'){1q(gV=0;gV<gL;gV++){1a.cW.1s([1a.bA,1J(gV+1),gV+1]);1a.cu.1s(1g)}}if(1f jC[0][0]===\'1n\'&&1a.ec===\'1L\'){if(1a.bi.1l===0){1q(gW=0,gK=jC.1l;gW<gK;gW++){1a.cN.1s([gW,1J(jC[gW][0]),\'x-1K\']);1a.bk[jC[gW][0]]=gW;jC[gW][0]=gW}}1i{1b 1w=1a.mR();1b 1x=1a.ip();1b fc=1p.2n((1x-1w)/(jC.1l-1));1q(1b jO=0,gW=1w;gW<1x,jO<jC.1l;gW+=fc,jO++){1a.cN.1s([gW,1J(jC[jO][0]),\'x-1K\']);1a.bk[jC[jO][0]]=gW;jC[jO][0]=gW}}1a.S=1g}id=1g;jM=jG.2Q(\'id\');if(jM!==1k&&jM!==\'\'){id=jM}if(1a.ec===\'1L\'){1a.dh=1B;if(1a.bi===[]){1a.bi=29 3S(jC)}1i{1a.bi.1s(jC)}1b 1V=1J(1a.bi.1l-1);1a.bj[1V]=(id===1g)?\'9g\'+1V:id;if(1f 1a.bQ[1V]===\'1r\'){1a.bQ[1V]=1a.bR}if(1f 1a.bU[1V]===\'1r\'){1a.bU[1V]=1a.bS}if(1f 1a.bX[1V]===\'1r\'){1a.bX[1V]=1a.bT}1a.cY.1s([1a.bR,1a.bj[1V],1a.bj[1V]])}1i{1a.bi=jC}jC=[]}if(1J(jG.4r).3a()===\'65\'){gK=jG.3T.1l;1q(gV=0;gV<gK;gV++){1j=jG.3T[gV];if(1J(1j.4r).3a()===\'1j\'){jH=1j.2Q(\'1K\');if(jH===1k||jH===\'\'){1a.eB(\'ah\');1d}jD.1s(jH)}}1a.be=jD}if(1J(jG.4r).3a()===\'67\'){gK=jG.3T.1l;1q(gV=0;gV<gK;gV++){1j=jG.3T[gV];if(1J(1j.4r).3a()===\'6e\'){jK=1j.2Q(\'3V\');jJ=1j.2Q(\'1K\');jM=1j.2Q(\'id\');if(jK===1k||jK===\'\'||jJ===1k||jJ===\'\'){1a.eB(\'ai\');1d}if(jM===1k||jM===\'\'){jE.1s([jK,jJ])}1i{jE.1s([jK,jJ,jM])}}}}}1d jE};1a.fe=1c(ig,jN){1b hj=1E(ig);1d 1E(hj.2W(jN))};1a.gl=1c(eR){1b jP;1b ff;1b jQ;1b gX;1b gY;1b fh;1b fi;1b jR=1;1b fb=0;if(eR){1b eT=1a.dg;1b eS=1a.dc}1i{1b eT=1a.df;1b eS=1a.db}2t(fb<1a.dq){jP=1a.jS(eT,eS,jR);1a.dd=jP[0];1a.cZ=jP[1];1a.mM=jP[2];ff=1a.dd;jQ=0;2t(ff<=1a.cZ){fh=(1a.G===\'2I\')?ff:ff.2W(1a.G);gX=1J(ff).3W(\'.\');gY=1J(ff).2J(gX+1).1l;if(gY>3&&1a.G===\'2I\'){fh=1a.fe(ff,3)}fi=1a.fj(1J(fh),1a.M,1k,1k,1a.M);fb+=fi;ff+=1a.mM;jQ++;if(jQ<1){fb-=fi/2}}fb-=fi/2;jR++}1a.dl=(eT-1a.dd)*1a.dq/(1a.cZ-1a.dd);1a.dj=(1a.cZ-eS)*1a.dq/(1a.cZ-1a.dd);1a.ed=1a.mM*1a.dq/(1a.cZ-1a.dd)};1a.gm=1c(){1b fn=1a.fo(1a.N);1b jR=1p.2q(1a.dr/(fn+6));1b jP=1a.jS(1a.dg,1a.dc,jR);1a.de=jP[0];1a.da=jP[1];1a.dp=jP[2];1a.dm=(1a.dg-1a.de)*1a.dr/(1a.da-1a.de);1a.dk=(1a.da-1a.dc)*1a.dr/(1a.da-1a.de);1a.ee=1a.dp*1a.dr/(1a.da-1a.de)};1a.gd=1c(){1a.ew+=\'nv\';1a.gi=\'nz\';1a.bu=1a.mG+1;1a.bv=1a.v+1;1a.dq=1a.ds-1a.mG-1a.mI-2;1a.dr=1a.dt-1a.v-1a.mE-2;1a.mJ=1a.dq/1a.dr};1a.iW=1c(eK,eL){if(eK){1b 1o=1U(eK,10);if(!5A(1o)){1a.ds=1o}}if(eL){1b 1C=1U(eL,10);if(!5A(1C)){1a.dt=1C}}};1a.gf=1c(){if(1a.dq===0){1a.ge()}if(1a.db===1a.df){1a.db++}if(1a.dc===1a.dg){1a.dc++}1a.ed=1a.dq/(1a.db-1a.df);1a.ee=1a.dr/(1a.dc-1a.dg)};1a.gc=1c(){1b 2S=(1a.v===1g)?1a.w:1a.v;1b 3y=(1a.mE===1g)?1a.mF:1a.mE;1b 3h=(1a.mG===1g)?1a.mH:1a.mG;1b 3u=(1a.mI===1g)?1a.u:1a.mI;1b jT=(1a.dD===1g)?1a.dE:1a.dD;1b jU=(1a.dF===1g)?1a.dG:1a.dF;1b jV=1a.ds-3h-3u+8;1b eP;1b eO;if(1a.cQ===1B){if(1a.ec===\'1L\'){eO=1a.cY.1l;1q(eP=0;eP<eO;eP++){1a.cV.1s([1a.bQ[eP],1a.cY[eP][1],1a.cY[eP][2]])}}if(1a.ec===\'2j\'){eO=1a.cW.1l;1q(eP=0;eP<eO;eP++){1a.cV.1s([(1f 1a.bz===\'1n\'||1f 1a.bz[eP]===\'1r\')?1a.bA:1a.bz[eP],1a.cW[eP][1],eP])}}}eO=1a.cV.1l;if(eO===0){1d 1g}1b 1G;if(1a.gb(1a.cU)){1G=1a.cU}1i{1G=1a.cU.4A(\' \');1G[0]=1G[0].2J(0,1);1b jW=(1G[0]===\'l\'||1G[0]===\'r\');if(1f 1G[1]===\'1r\'){if(jW){1G[1]=\'m\'}1i{1G[1]=\'c\'}}1G[1]=1G[1].2J(0,1);1G=1G[0]+1G[1]}1b 4y=[[]];1b jX=0;1b jY=0;1b jZ=0;1b ka=0;1b kb;1b kc=(jW||1a.gb(1G))?0:1a.fo(1a.cS)+10;1q(eP=0;eP<eO;eP++){kb=1a.fj(1a.cV[eP][1],1a.cS,1k,1k,1a.cR)+25;if(jZ<kb){jZ=kb}}1q(eP=0;eP<eO;eP++){jX+=jZ;if(jX>jV||jW||1a.gb(1G)){jX=jZ;ka++;if(jW||1a.gb(1G)){4y[ka-1]=[1a.cV[eP]]}1i{4y[ka]=[1a.cV[eP]]}kc+=1a.fo(1a.cS)+4}1i{if(jY<jX){jY=jX}4y[ka].1s(1a.cV[eP]);if(eP===eO-1){}}}1b kd;1b ke;2s(1G){1A\'tc\':2w:if(1f 1G===\'1n\'){if(1a.cT!==1g){2S=1a.cT}kd=3h+jV/2-jY/2;ke=2S}1F;1A\'tl\':if(1a.cT!==1g){2S=1a.cT}kd=3h;ke=2S;1F;1A\'tr\':if(1a.cT!==1g){2S=1a.cT}kd=3h+jV-jY;ke=2S;1F;1A\'bl\':kd=3h;if(1a.cT!==1g){ke=1a.dt-1a.cT-2*kc+1a.fo(1a.mB)+1a.fo((1a.mK)?1a.N:1a.M)+10}1i{ke=1a.dt-3y-kc+1a.fo(1a.mB)+1a.fo((1a.mK)?1a.N:1a.M)+10}1F;1A\'bc\':kd=3h+jV/2-jY/2;if(1a.cT!==1g){ke=1a.dt-1a.cT-2*kc+1a.fo(1a.mB)+1a.fo((1a.mK)?1a.N:1a.M)+10}1i{ke=1a.dt-3y-kc+1a.fo(1a.mB)+1a.fo((1a.mK)?1a.N:1a.M)+10}1F;1A\'br\':kd=3h+jV-jY;if(1a.cT!==1g){ke=1a.dt-1a.cT-2*kc+1a.fo(1a.mB)+1a.fo((1a.mK)?1a.N:1a.M)+10}1i{ke=1a.dt-3y-kc+1a.fo(1a.mB)+1a.fo((1a.mK)?1a.N:1a.M)+10}1F;1A\'lt\':kd=10;if(1a.cT!==1g){kd=1a.cT;3h=1a.cT}ke=2S;1F;1A\'lm\':kd=10;if(1a.cT!==1g){kd=1a.cT;3h=1a.cT}ke=2S+(1a.dt-2S-3y-kc)/2;1F;1A\'lb\':kd=10;if(1a.cT!==1g){kd=1a.cT;3h=1a.cT}ke=1a.dt-3y-kc;1F;1A\'rt\':if(1a.cT!==1g){3u=1a.cT}kd=1a.ds-3u-jZ;ke=2S;1F;1A\'rm\':if(1a.cT!==1g){3u=1a.cT}kd=1a.ds-3u-jZ;ke=2S+(1a.dt-2S-3y-kc)/2;1F;1A\'rb\':if(1a.cT!==1g){3u=1a.cT}kd=1a.ds-3u-jZ;ke=1a.dt-3y-kc;1F}1b kf=4y.1l;1b fg=(1a.gb(1G))?1G[0]:kd;1b fm=(1a.gb(1G))?1G[1]:ke;1b kg;1b kh=0;1b fa=(1a.cR===1g)?1a.dw:1a.cR;1b fR;1b fU;1b fT;1q(1b iQ=0;iQ<kf;iQ++){if(jW||1a.gb(1G)){eO=1}1i{eO=4y[iQ].1l}1q(eP=0;eP<eO;eP++){kg=4y[iQ][eP];1a.bh.1N=1a.fN(kg[0],1);1a.bh.5R(fg,fm,10,10);1a.hs(kg[1],fg+15,fm,1a.cS,1k,1k,1k,fa,1a.cP);fR=\'<4e \'+\'1v="1G:2X;\'+\'2b:\'+(1a.ba.3U+fg)+\'px;\'+\'2v:\'+(1a.ba.44+fm)+\'px;\'+\'1o: 7G;\'+\'1C: 7G;\'+\'1Z-1t: 5J;\'+\'z-1V: \'+(1E(1a.ba.1v.3d)+4X)+\';\'+\'" id="np\'+1U(fg,10)+\'4H\'+1U(fm,10)+\'">\'+\'<4h 3z="1D:2l/8l;8m,92///8k==" \'+\'1o="\'+(1a.br*2)+\'" \'+\'1C="\'+(1a.br*2)+\'" \'+"><\\/4e>";fT=1Y.2p(\'8i\');fT.3r+=fR;fR=fT.3A;fU=fR.g1(1B);fR.h0.8j(fR);1a.eD(fU,\'6t\',(1c(hV,kg,2S,3y,3h,3u,jT){1d 1c(){1b eP;1b eO;hV.v=2S;hV.mE=3y;hV.mG=3h;hV.mI=3u;hV.dD=jT;if(hV.cQ===1B){1b ki=[];eO=hV.cV.1l;1q(eP=0;eP<eO;eP++){if(hV.cV[eP][2]===\'87\'){ki.1s(hV.cV[eP])}}hV.cV=ki}hV.dZ=hV.ea;if(hV.ec===\'1L\'){eO=hV.bj.1l;1q(eP=0;eP<eO;eP++){if(kg[2]!==\'87\'&&kg[2]===hV.bj[eP]){hV.cu[eP]=!(hV.cu[eP])}}}if(hV.ec===\'2j\'){eO=hV.cu.1l;1q(eP=0;eP<eO;eP++){if(kg[2]===eP){hV.cu[eP]=!(hV.cu[eP])}}}eO=hV.eb.1l;1q(eP=0;eP<eO;eP++){oQ(hV.eb[eP])}hV.eb=[];hV.fZ()}})(1a,kg,1a.v,1a.mE,1a.mG,1a.mI,1a.dD));1a.bg.2z(fU);fg+=jZ;kh++}fg=(1a.gb(1G))?1G[0]:kd;fm+=1a.fo(1a.cS)+4}if(jW){jZ+=10}2s(1G){1A\'tc\':1A\'tl\':1A\'tr\':2w:if(1a.v===1g&&!1a.gb(1G)){1b kj=1a.v;1a.v=2S+kc}1F;1A\'bl\':1A\'bc\':1A\'br\':if(1a.mE===1g){1b kj=1a.mE;1a.mE=1a.mF+kc}if(1a.dD===1g){1a.dD=1a.dE+kc}1F;1A\'lt\':1A\'lm\':1A\'lb\':if(1a.mG===1g){1b kj=1a.mG;1a.mG=1a.mH+jZ}if(1a.dF===1g){1a.dF=1a.dG+jZ}1F;1A\'rt\':1A\'rm\':1A\'rb\':if(1a.mI===1g){1b kj=1a.mI;1a.mI=1a.u+jZ}1F}1a.hr=kc};1a.hs=1c(1O,eK,eL,2y,ib,ic,mO,fa,1j,fF,ie,id,hk){if(1f 1a.bh===1g||1f 1O===\'1r\'||1f eK===\'1r\'||1f eL===\'1r\'){1d 1g}1O=1J(1O);1b kk=1a.ia(2y,ib,ic,mO,fa,1j,fF,ie,id);2y=(1a.fL())?kk.2y+1a.bm+1a.bl+\'px "\'+fa+\'"\':kk.2y+1a.bl+\'px "\'+fa+\'"\';if(1a.fL()){eK-=1}if(!1a.dI){if(1f hk===\'1r\'){1a.bh.1P=1a.fN(kk.1j,kk.fF);1a.bh.53(1O,eK,eL,kk.2y,kk.ib,kk.ic,kk.mO,kk.fa,kk.1j,kk.fF,kk.ie,kk.id)}1i{2L((1c(fM,1P,1O,eK,eL,2y,ib,ic,mO,fa,1j,fF,ie,id){1d 1c(){fM.1P=1P;fM.53(1O,eK,eL,2y,ib,ic,mO,fa,1j,fF,ie,id)}})(1a.bh,1a.fN(kk.1j,kk.fF),1O,eK,eL,kk.2y,kk.ib,kk.ic,kk.mO,kk.fa,kk.1j,kk.fF,kk.ie,kk.id),hk)}}1i{if(1f hk===\'1r\'){1a.bh.1N=1a.fN(kk.1j,kk.fF);1a.bh.1Z=2y;1a.bh.4J=\'2v\';1a.bh.8T(1O,eK,eL)}1i{2L((1c(fM,1N,1Z,1O,eK,eL){1d 1c(){fM.1N=1N;fM.1Z=1Z;fM.4J=\'2v\';fM.8T(1O,eK,eL)}})(1a.bh,1a.fN(kk.1j,kk.fF),2y,1O,eK,eL),hk)}}};1a.gs=1c(){1b kl=(1a.mz===1g)?1a.dw:1a.mz;1b km=(1a.mA===1g)?1a.dw:1a.mA;1b kn=1a.fj(1a.m,1a.k,1k,1k,kl);1b ko=1a.fj(1a.mC,1a.mB,1k,1k,km);1b fg=(1a.dq-kn)/2+1a.mG;1b fm=1a.dt-1a.dD-1a.fo((1a.mK)?1a.mB:1a.k);if(1a.mK){fg=(1a.dq-ko)/2+1a.mG;1a.hs(1a.mC,fg,fm,1a.mB,1k,1k,1k,km,1a.my)}1i{1a.hs(1a.m,fg,fm,1a.k,1k,1k,1k,kl,1a.mx)}if(1a.mD){1b fn=1a.fo((1a.mK)?1a.k:1a.mB);fg=1a.dF+fn/2;fm=1a.dt/2;1a.bh.3I();1a.bh.41(fg,fm);1a.bh.2Z(-90*1p.1X/43);if(1a.mK){1a.hs(1a.m,0-kn/2,0-fn/2,1a.k,1k,1k,1k,kl,1a.mx)}1i{1a.hs(1a.mC,0-ko/2,0-fn/2,1a.mB,1k,1k,1k,km,1a.my)}1a.bh.3F()}1i{1b eO=(1a.mK)?1a.m.1l:1a.mC.1l;1b fn=eO*1a.fo((1a.mK)?1a.k:1a.mB);fm=1p.2n((1a.dt-fn)/2);1q(1b eP=0;eP<eO;eP++){fg=1a.dF;if(1a.mK){1a.hs(1a.m.2J(eP,1),fg,fm,1a.k,1k,1k,1k,kl,1a.mx)}1i{1a.hs(1a.mC.2J(eP,1),fg,fm,1a.mB,1k,1k,1k,km,1a.my)}fm+=1a.fo((1a.mK)?1a.k:1a.mB)}}};1a.gt=1c(){if(1a.ec!==\'1L\'){1d 1g}1b eO;1b 1m;1b fi;1b fa;1b eP;1b eO=1a.cN.1l;1b hl=-1a.D*1p.1X/43;1b fm;1b eK;1b kp;1b kq;1b kr=[];1b ks=[];1q(eP=0;eP<eO;eP++){1m=1a.hn(1a.cN[eP][0],0);if(1m[0]<1a.mG||1m[0]>1a.ds-1a.mI){39}if(1f 1a.cN[eP][2]!==\'1r\'&&1a.cN[eP][2]===\'x-1K\'){kr.1s(1a.cN[eP])}1i{ks.1s(1a.cN[eP])}}eO=kr.1l;1q(eP=0;eP<eO;eP++){1m=1a.hn(kr[eP][0],0);kp=(1a.z&&eP===0);kq=(1a.B&&eP+1===eO);fm=1a.dt-((1a.O===1g)?1a.mE-4:1a.O);fa=(1a.K===1g)?1a.dw:1a.K;fi=1a.fj(1J(kr[eP][1]),1a.M,1k,1k,fa);if(1a.D>0){1a.bh.3I();if(kp){eK=1m[0]+2+1a.M/2}1i if(kq){eK=1m[0]+2-1a.M/2}1i{eK=1m[0]+2}1a.bh.41(eK,fm+4);1a.bh.2Z(hl);1a.hs(kr[eP][1],0-fi,0-1a.M/2-2,1a.M,1k,1k,1k,fa,1a.E);1a.bh.3F()}1i{if(kp){eK=1m[0]}1i if(kq){eK=1m[0]-fi}1i{eK=1m[0]-fi/2}1a.hs(kr[eP][1],eK,fm,1a.M,1k,1k,1k,fa,1a.E)}}eO=ks.1l;1q(eP=0;eP<eO;eP++){1m=1a.hn(ks[eP][0],0);1m[0]=1E(1m[0].2W(12));kp=(1a.cB&&1m[0]===1a.bu);kq=(1a.cD&&1m[0]===1a.bu+1a.dq);fm=1a.dt-((1a.cL===1g)?1a.mE-4:1a.cL);fa=(1a.cH===1g)?1a.dw:1a.cH;fi=1a.fj(1J(ks[eP][1]),1a.cJ,1k,1k,fa);if(1a.D>0){1a.bh.3I();if(kp){eK=1m[0]+2+1a.M/2}1i if(kq){eK=1m[0]+2-1a.M/2}1i{eK=1m[0]+2}1a.bh.41(eK,fm+4);1a.bh.2Z(hl);1a.hs(ks[eP][1],0-fi,0-1a.cJ/2-2,1a.cJ,1k,1k,1k,fa,1a.cF);1a.bh.3F()}1i{if(kp){eK=1m[0]}1i if(kq){eK=1m[0]-fi}1i{eK=1m[0]-fi/2}1a.hs(ks[eP][1],eK,fm,1a.cJ,1k,1k,1k,fa,1a.cF)}}};1a.gu=1c(){1b eO;1b 1m;1b fi;1b eO=1a.cO.1l;1b eP;1b fa=(1a.cI===1g)?1a.dw:1a.cI;1b hl=-1a.D*1p.1X/43;1b kp;1b kq;1b eK;1b eL;if(1a.mK){1q(eP=0;eP<eO;eP++){1m=1a.hn(1a.cO[eP][0],0);if(1m[0]<1a.mG||1m[0]>1a.dq+1a.bu){39}kp=(1a.cC&&1m[0]===1a.bu);kq=(1a.cE&&1m[0]===1a.bu+1a.dq);fi=1a.fj(1J(1a.cO[eP][1]),1a.cK,1k,1k,fa);if(1a.D>0){1a.bh.3I();if(kp){eK=1m[0]+2+1a.cK}1i if(kq){eK=1m[0]+2-1a.cK/4}1i{eK=1m[0]+2}1a.bh.41(eK,(1a.cL===1g)?1a.dt-1a.mE+8:1a.dt-1a.cL);1a.bh.2Z(hl);1a.hs(1a.cO[eP][1],0-fi,0-1a.cK/2-2,1a.cK,1k,1k,1k,fa,1a.cG);1a.bh.3F()}1i{if(kp){eK=1m[0]}1i if(kq){eK=1m[0]-fi}1i{eK=1m[0]-fi/2}1a.hs(1a.cO[eP][1],eK,(1a.cL===1g)?1a.dt-1a.mE+4:1a.dt-1a.cL,1a.cK,1k,1k,1k,fa,1a.cG)}}}1i{1q(eP=0;eP<eO;eP++){1m=1a.hn(0,1a.cO[eP][0]);if(1m[1]<1a.v||1m[1]>1a.dt-1a.mE){39}kp=(1a.cC&&1m[1]===1a.bv+1a.dr);kq=(1a.cE&&1m[1]===1a.bv);fi=1a.fj(1J(1a.cO[eP][1]),1a.cK,1k,1k,fa);if(kp){eL=1m[1]-1a.fo(1a.cK)}1i if(kq){eL=1m[1]}1i{eL=1m[1]-1a.fo(1a.cK/2)}1a.hs(1a.cO[eP][1],(1a.cM===1g)?1a.mG-fi-4:1a.cM-fi,eL,1a.cK,1k,1k,1k,fa,1a.cG)}}};1a.gx=1c(){1b fa=(1a.dL===1g)?1a.dw:1a.dL;1b kt=1a.fj(1a.dJ,1a.dM,1k,1k,fa);1b fg;2s(1a.dN){1A\'2b\':fg=1a.mG;1F;1A\'3s\':fg=1a.ds-1a.mI-kt;1F;2w:fg=1p.2n((1a.ds-kt)/2)}1b fm=1a.dH;1a.hs(1a.dJ,fg,fm,1a.dM,1k,1k,1k,fa,1a.dK)};1a.gE=1c(){1b fr=1a;1d 1c(){1b gz=fr.gA(fr.ef,1B);1b fa=(fr.eh===1g)?fr.dw:fr.eh;fr.hs(fr.ef,gz[0]+1,gz[1]+1,fr.ei,1k,1k,1k,fa,fr.el,fr.ej);fr.hs(fr.ef,gz[0],gz[1],fr.ei,1k,1k,1k,fa,fr.eg,fr.ej)}};1a.gq=1c(eR){1b fi;1b fh;1b gY;1b gX;1b fc;1b fd;1b ff;1b fg;1b fm=1a.dt-((1a.O===1g)?1a.mE-4:1a.O);1b hl=-1a.D*1p.1X/43;1b eK;1b kp;1b kq;if(eR){1a.ed=1a.dq/(1a.dc-1a.dg);1a.gl(eR);1b ku=1a.X;1b kv=1a.de;1b kw=1a.da;1b eU=1a.H;1b eV=1a.R;1b eW=1a.V;1b eX=1a.L;1b eY=1a.N;1b kx=1a.F;1b eS=1a.dc;1b eT=1a.dg}1i{1b ku=1a.W;1b kv=1a.dd;1b kw=1a.cZ;1b eU=1a.G;1b eV=1a.Q;1b eW=1a.U;1b eX=1a.K;1b eY=1a.M;1b kx=1a.E;1b eS=1a.db;1b eT=1a.df}1b fa=(eX===1g)?1a.dw:eX;if(ku===0){ff=kv;fg=1a.bu;2t(ff<=kw){fh=(eU===\'2I\')?ff:ff.2W(eU);kp=(((1a.z&&!eR)||(1a.A&&eR))&&ff===kv);kq=(((1a.B&&!eR)||(1a.C&&eR))&&ff+1a.mM>kw);gX=1J(ff).3W(\'.\');gY=1J(ff).2J(gX+1).1l;if(gY>3&&eU===\'2I\'){fh=1a.fe(ff,3)}if(1a.em!==1g){fh=1a.ht(fh)}if(1f eV===\'1n\'){fh=eV+fh}if(1f eW===\'1n\'){fh=fh+eW}fi=1a.fj(1J(fh),eY,1k,1k,fa);if(1a.D>0){if(kp){eK=fg+eY}1i if(kq){eK=fg-eY/4}1i{eK=fg+eY/4}1a.bh.3I();1a.bh.41(eK,fm+4);1a.bh.2Z(hl);1a.hs(fh,0-fi,0-eY/2-2,eY,1k,1k,1k,fa,kx);1a.bh.3F()}1i{if(kp){eK=fg}1i if(kq){eK=fg-fi}1i{eK=fg-fi/2}1a.hs(fh,eK,fm,eY,1k,1k,1k,fa,kx)}ff+=1a.mM;fg+=1a.ed}}1i{1b hw=1g;1q(1b eP=2;eP<4X;eP++){if((eS-eT)%eP===0){hw=eP;if(!1a.eQ(eP,1B)){39}1F}}1b eO=(hw)?hw:eP;if(ku>1){eO=ku-1}1b ky=0;1b 1D=(1a.dh)?1a.bi[0]:1a.bi;1q(eP=0;eP<1D.1l;eP++){gX=1J(1D[eP][0]).3W(\'.\');if(gX>=0){gY=1J(1D[eP][0]).2J(gX+1).1l;if(ky<gY){ky=gY}}}ky++;2t(!1a.eQ(eO,1B)){eO=1p.2q(eO/2)}fc=1a.dq/eO;fd=(eS-eT)/eO;ff=eT;fg=1a.mG;fm=(1a.O===1g)?1a.bv+1a.dr+4:1a.dt-1a.O;1q(eP=0;eP<=eO;eP++){kp=(1a.z&&eP===0);kq=(1a.B&&eP+1>eO);fh=(eU===\'2I\'&&1a.fe(ff,eU)!==ff)?1a.fe(ff,ky):ff.2W(eU);if(1a.em!==1g){fh=1a.ht(fh)}if(1f eV===\'1n\'){fh=eV+fh}if(1f eW===\'1n\'){fh=fh+eW}fi=1a.fj(fh,eY,1k,1k,fa);if(1a.D>0){1a.bh.3I();if(kp){eK=fg+fi/4+eY/2}1i if(kq){eK=fg+fi/4-eY/2}1i{eK=fg+fi/4}1a.bh.41(eK,fm+4);1a.bh.2Z(hl);1a.hs(fh,0-fi,0-eY/2-2,eY,1k,1k,1k,fa,kx);1a.bh.3F()}1i{if(kp){eK=fg}1i if(kq){eK=fg-fi}1i{eK=fg-fi/2}1a.hs(fh,eK,fm,eY,1k,1k,1k,fa,kx)}ff+=fd;fg+=fc}}};1a.gr=1c(eR){if(eR){1a.gq(1B);1d}1b fi;1b fh;1b gY;1b gX;1b fc;1b fd;1b ff;1b fm;1b fg=(1a.P===1g)?1a.mG-4:1a.P;1b fn=1a.fo(1a.N);1b fa=(1a.L===1g)?1a.dw:1a.L;1b kp;1b kq;if(1a.X===0){ff=1a.de;fm=1a.bv+1a.dr;2t(ff<=1a.da){kp=(1a.A&&ff===1a.de);kq=(1a.C&&ff+1a.dp>1a.da);fh=(1a.H===\'2I\')?ff:ff.2W(1a.H);gX=1J(ff).3W(\'.\');gY=1J(ff).2J(gX+1).1l;if(gY>3&&1a.H===\'2I\'){fh=1a.fe(ff,3)}if(1a.em!==1g){fh=1a.ht(fh)}if(1f 1a.R===\'1n\'){fh=1a.R+fh}if(1f 1a.V===\'1n\'){fh=fh+1a.V}fi=1a.fj(1J(fh),1a.N,1k,1k,fa);if(kp){eL=fm-fn}1i if(kq){eL=fm}1i{eL=fm-fn/2}1a.hs(fh,fg-fi,eL,1a.N,1k,1k,1k,fa,1a.F);ff+=1a.dp;ff=1E(ff.2W(10));fm-=1a.ee}}1i{1b hw=1g;1q(1b eP=2;eP<4X;eP++){if((1a.dc-1a.dg)%eP===0){hw=eP;if(!1a.fk(eP,1B)){39}1F}}1b eO=(hw)?hw:eP;if(1a.X>1){eO=1a.X-1}1b ky=0;1b 1D=(1a.dh)?1a.bi[0]:1a.bi;1q(eP=0;eP<1D.1l;eP++){gX=1J(1D[eP][1]).3W(\'.\');if(gX>=0){gY=1J(1D[eP][1]).2J(gX+1).1l;if(ky<gY){ky=gY}}}ky++;2t(!1a.fk(eO)){eO=1p.2q(eO/2)}fc=1a.dr/eO;fd=(1a.dc-1a.dg)/eO;ff=1a.dg;fg=(1a.P===1g)?1a.mG-4:1a.P;fm=1a.bv+1a.dr;1q(eP=0;eP<=eO;eP++){kp=(1a.A&&eP===0);kq=(1a.C&&eP+1>eO);fn=1a.fo(1a.N);fh=(1a.H===\'2I\'&&1a.fe(ff,1a.H)!==ff)?1a.fe(ff,ky):ff.2W(1a.H);if(1a.em!==1g){fh=1a.ht(fh)}if(1f 1a.R===\'1n\'){fh=1a.R+fh}if(1f 1a.V===\'1n\'){fh=fh+1a.V}fi=1a.fj(fh,1a.N,1k,1k,fa);if(kp){eL=fm-fn}1i if(kq){eL=fm}1i{eL=fm-fn/2}1a.hs(fh,fg-fi,eL,1a.N,1k,1k,1k,fa,1a.F);ff+=fd;fm-=fc}}};1a.kz=1g;1a.kA=1g;1a.kB=0;1a.kC=0;1a.kD=1g;1a.kE=1c(1w,1x,kF,kG){if(1f kG===\'1r\'){kG=1B}1w=1p.2q(1w);1x=1p.46(1x);if(1p.2g(1w-1x)===0){--1w;++1x}kF=1p.2q(kF);1b kH=1p.2n((1a.kB/1T.0)*1p.2g(1x-1w));1b kI=1p.2n((1a.kC/1T.0)*1p.2g(1x-1w));if(1f 1a.kz===\'1h\'){1w=1p.46(1a.kz);if(1w>=1x){37(\'6j 6h 5b a 1w 1K 5P j8() 6n is k0 5w 3Q j9 1K 6c 1q 3Q 4T. 6b is 2V 52.\');1d}}if(1f 1a.kA===\'1h\'){1x=1p.46(1a.kA);if(1w>=1x){37(\'6j 6h 5b a 1x 1K 5P i8() 6n is l1 5w 3Q l8 1K 6c 1q 3Q 4T. 6b is 2V 52.\');1d}}if(1p.2g(1w-1x)===0){++1x;--1w}1w-=kI;1x+=kH;1b is;1b kJ;1b kK;1b kL;1b kM;1b kN;1b kO;1b kP;1b kQ;1b kR;1b kS;1b kT;1b kU;if(kG){is=1a.kV(kF,1w,1x,1);kJ=is[0];kP=is[1];kQ=is[2];kM=is[3]}1i{kP=1w;kQ=1x;is=1a.kW(kF,1w,1x,1);kJ=is[0];kM=is[1]}if(1p.2g(1w-1x)>2){if(kG){is=1a.kV(kF,1w,1x,5);kK=is[0];kR=is[1];kS=is[2];kN=is[3]}1i{kR=1w;kS=1x;is=1a.kW(kF,1w,1x,5);kK=is[0];kN=is[1]}}1i{kK=8W}if(1p.2g(1w-1x)>5){if(kG){is=1a.kV(kF,1w,1x,2);kL=is[0];kT=is[1];kU=is[2];kO=is[3]}1i{kT=1w;kU=1x;is=1a.kW(kF,1w,1x,2);kL=is[0];kO=is[1]}}1i{kL=8W}1b kX=1p.2g(kJ-kF);1b kY=1p.2g(kK-kF);1b kZ=(!1a.hY(kO)&&kO>1)?1p.2g(kL-kF):kZ=8W;1b iQ;if(kX<kY){iQ=(kX<kZ)?1:3}1i{iQ=(kY<kZ)?2:3}2s(iQ){1A 1:1d[kP,kQ,kM];1A 2:1d[kR,kS,kN];1A 3:1d[kT,kU,kO];2w:37(\'e8 r (oh) \');1d}};1a.jS=1c(1w,1x,kF,kG){if(1f kG===\'1r\'){kG=1B}if(1a.kD){1a.kE(1w,1x,kF,kG);1d}if(1p.2g(1w-1x)<0.7k){if(1w===0&&1x===0){1w=-1;1x=1}1i{1b la=(1p.2g(1x)+1p.2g(1w))*0.oe;1w-=la;1x+=la}}1b kH=(1a.kB/1T.0)*1p.2g(1x-1w);1b kI=(1a.kC/1T.0)*1p.2g(1x-1w);if(1f 1a.kz===\'1h\'){1w=1a.kz;if(1w>=1x){37(\'6j 6h 5b a 1w 1K 5P j8() 6n is k0 5w 3Q j9 1K 6c 1q 3Q 4T. 6b is 2V 52.\');1d}if(1p.2g(1w-1x)<0.7k){1x*=1.2}}if(1f 1a.kA===\'1h\'){1x=1a.kA;if(1w>=1x){37(\'6j 6h 5b a 1x 1K 5P i8() 6n is l1 5w 3Q l8 1K 6c 1q 3Q 4T. 6b is 2V 52.\');1d}if(1p.2g(1w-1x)<0.7k){1w*=0.8}}1w-=kI;1x+=kH;1b is;1b kJ;1b kK;1b kL;1b kP;1b kQ;1b kR;1b kS;1b kT;1b kU;1b lb;1b kM;1b lc;1b kN;1b mT;1b kO;if(kG){is=1a.le(kF,1w,1x,1,2);kJ=is[0];kP=is[1];kQ=is[2];lb=is[3];kM=is[4]}1i{kP=1w;kQ=1x;is=1a.lf(kF,1w,1x,1,2,1g);kJ=is[0];lb=is[1];kM=is[2]}if(kG){is=1a.le(kF,1w,1x,5,2);kK=is[0];kR=is[1];kS=is[2];lc=is[3];kN=is[4]}1i{kR=1w;kS=1x;is=1a.lf(kF,1w,1x,5,2,1g);kK=is[0];lc=is[1];kN=is[2]}if(kG){is=1a.le(kF,1w,1x,2,5);kL=is[0];kT=is[1];kU=is[2];mT=is[3];kO=is[4]}1i{kT=1w;kU=1x;is=1a.lf(kF,1w,1x,2,5,1g);kL=is[0];mT=is[1];kO=is[2]}1b kX=1p.2g(kJ-kF);1b kY=1p.2g(kK-kF);1b kZ=1p.2g(kL-kF);1b iQ=1a.lg(kX,kY,kZ,0.8);2s(iQ){1A 1:1d[kP,kQ,kM];1A 2:1d[kR,kS,kN];1A 3:1d[kT,kU,kO];2w:37(\'e8 r (oI) \');1d}};1a.le=1c(kF,1w,1x,ig,hj,kG){if(1f kG===\'1r\'){kG=1B}1b lh=1x-1w;1b li=(lh===0)?0:1p.2q(1a.jA(lh,10));if(1w>0&&1w<1p.3H(10,li)){1w=0}1b lj=1p.3H(10,li)/ig;1b lk=lj/hj;1b ll=1p.46(1x/lk)*lk;1b lm=1p.2q(1w/lk)*lk;1b ln=ll-lm;1b lo=ln/lj;2t(lo>kF){lj=1p.3H(10,li)/ig;lo=ln/lj;++li}lk=lj/hj;lm=1p.2q(1w/lk)*lk;ln=ll-lm;if(kG){lm=1p.2q(1w/lj)*lj;ln=ll-lm;ll=1p.46(ln/lj)*lj+lm}1i{ll=1p.46(1x/lk)*lk}1d[lo,lm,ll,lk,lj]};1a.lf=1c(kF,1w,1x,ig,hj){1b lh=1x-1w;1b li=(lh===0)?0:1p.2q(1a.jA(lh,10));1b lj=1p.3H(10,li)/ig;1b lk=1p.lj/hj;1b lo=1p.2q(lh/lj);2t(lo>kF){lj=1p.3H(10,li)/ig;lo=1p.2q(lh/lj);++li}lk=lj/hj;1d[lo,lk,lj]};1a.kV=1c(kF,1w,1x,ig,kG){if(1f kG===\'1r\'){kG=1B}1b lh=1x-1w;if(lh===0){37(\'h9\\\'t i0 g2 g8 g6 1w == 1x.\');1d}1i{1b li=1p.2q(1a.jA(lh,10))}if(1w>0&&1w<1p.3H(10,li)){1w=0}if(li===0){li=1}1b lj=(ig===1)?1:1p.3H(10,li)/ig;1b ll=1p.46(1x/lj)*lj;1b lm=1p.2q(1w/lj)*lj;1b ln=ll-lm;1b lo=ln/lj;2t(lo>kF){lj=1p.3H(10,li)/ig;lo=ln/lj;++li}lm=1p.2q(1w/lj)*lj;ln=ll-lm;if(kG){lm=1p.2q(1w/lj)*lj;ln=ll-lm;ll=1p.46(ln/lj)*lj+lm}1i{ll=1p.46(1x/lj)*lj}1d[lo,lm,ll,lj]};1a.kW=1c(kF,1w,1x,ig){1b lh=1x-1w;if(lh===0){37(\'h9\\\'t i0 g2 g8 g6 1w == 1x.\');1d}1i{1b li=1p.2q(1a.jA(lh,10))}if(li===0){li=1}1b lj=(ig===1)?1:1p.3H(10,li)/ig;1b lo=1p.2q(lh/lj);2t(lo>kF){lj=1p.3H(10,li)/ig;lo=1p.2q(lh/lj);++li}1d[lo,lj]};1a.lg=1c(ig,hj,hi,lp){if(ig<hj){if(ig<hi*lp){1d 1}1d 3}1i if(hj<hi*lp){1d 2}1d 3};1a.iH={lq:0,lr:"",ls:8,iI:1c(hG){1d 1a.lt(1a.lu(1a.lv(hG),hG.1l*1a.ls))},lw:1c(hG){1d 1a.lx(1a.lu(1a.lv(hG),hG.1l*1a.ls))},ly:1c(hG){1d 1a.lz(1a.lu(1a.lv(hG),hG.1l*1a.ls))},lA:1c(lB,1D){1d 1a.lt(1a.lC(lB,1D))},lD:1c(lB,1D){1d 1a.lx(1a.lC(lB,1D))},lE:1c(lB,1D){1d 1a.lz(1a.lC(lB,1D))},lF:1c(){1d 1a.iI("nj")==="nq"},lu:1c(eK,eO){eK[eO>>5]|=r4<<((eO)%32);eK[(((eO+64)>>>9)<<4)+14]=eO;1b ig=r7;1b hj=-qZ;1b hi=-r1;1b hh=rh;1q(1b eP=0;eP<eK.1l;eP+=16){1b lG=ig;1b lH=hj;1b lI=hi;1b lJ=hh;ig=1a.lK(ig,hj,hi,hh,eK[eP+0],7,-qU);hh=1a.lK(hh,ig,hj,hi,eK[eP+1],12,-rT);hi=1a.lK(hi,hh,ig,hj,eK[eP+2],17,rV);hj=1a.lK(hj,hi,hh,ig,eK[eP+3],22,-rQ);ig=1a.lK(ig,hj,hi,hh,eK[eP+4],7,-s1);hh=1a.lK(hh,ig,hj,hi,eK[eP+5],12,rv);hi=1a.lK(hi,hh,ig,hj,eK[eP+6],17,-rx);hj=1a.lK(hj,hi,hh,ig,eK[eP+7],22,-rq);ig=1a.lK(ig,hj,hi,hh,eK[eP+8],7,rJ);hh=1a.lK(hh,ig,hj,hi,eK[eP+9],12,-rI);hi=1a.lK(hi,hh,ig,hj,eK[eP+10],17,-rz);hj=1a.lK(hj,hi,hh,ig,eK[eP+11],22,-pB);ig=1a.lK(ig,hj,hi,hh,eK[eP+12],7,pE);hh=1a.lK(hh,ig,hj,hi,eK[eP+13],12,-pD);hi=1a.lK(hi,hh,ig,hj,eK[eP+14],17,-pz);hj=1a.lK(hj,hi,hh,ig,eK[eP+15],22,pw);ig=1a.lL(ig,hj,hi,hh,eK[eP+1],5,-pO);hh=1a.lL(hh,ig,hj,hi,eK[eP+6],9,-pK);hi=1a.lL(hi,hh,ig,hj,eK[eP+11],14,pG);hj=1a.lL(hj,hi,hh,ig,eK[eP+0],20,-pJ);ig=1a.lL(ig,hj,hi,hh,eK[eP+5],5,-pc);hh=1a.lL(hh,ig,hj,hi,eK[eP+10],9,pf);hi=1a.lL(hi,hh,ig,hj,eK[eP+15],14,-p9);hj=1a.lL(hj,hi,hh,ig,eK[eP+4],20,-p8);ig=1a.lL(ig,hj,hi,hh,eK[eP+9],5,pm);hh=1a.lL(hh,ig,hj,hi,eK[eP+14],9,-po);hi=1a.lL(hi,hh,ig,hj,eK[eP+3],14,-pq);hj=1a.lL(hj,hi,hh,ig,eK[eP+8],20,pp);ig=1a.lL(ig,hj,hi,hh,eK[eP+13],5,-pl);hh=1a.lL(hh,ig,hj,hi,eK[eP+2],9,-qn);hi=1a.lL(hi,hh,ig,hj,eK[eP+7],14,qi);hj=1a.lL(hj,hi,hh,ig,eK[eP+12],20,-qy);ig=1a.lM(ig,hj,hi,hh,eK[eP+5],4,-qu);hh=1a.lM(hh,ig,hj,hi,eK[eP+8],11,-qd);hi=1a.lM(hi,hh,ig,hj,eK[eP+11],16,pT);hj=1a.lM(hj,hi,hh,ig,eK[eP+14],23,-q5);ig=1a.lM(ig,hj,hi,hh,eK[eP+1],4,-q6);hh=1a.lM(hh,ig,hj,hi,eK[eP+4],11,q2);hi=1a.lM(hi,hh,ig,hj,eK[eP+7],16,-pU);hj=1a.lM(hj,hi,hh,ig,eK[eP+10],23,-pR);ig=1a.lM(ig,hj,hi,hh,eK[eP+13],4,pW);hh=1a.lM(hh,ig,hj,hi,eK[eP+0],11,-pZ);hi=1a.lM(hi,hh,ig,hj,eK[eP+3],16,-pY);hj=1a.lM(hj,hi,hh,ig,eK[eP+6],23,qs);ig=1a.lM(ig,hj,hi,hh,eK[eP+9],4,-qt);hh=1a.lM(hh,ig,hj,hi,eK[eP+12],11,-qq);hi=1a.lM(hi,hh,ig,hj,eK[eP+15],16,qw);hj=1a.lM(hj,hi,hh,ig,eK[eP+2],23,-qh);ig=1a.lN(ig,hj,hi,hh,eK[eP+0],6,-qe);hh=1a.lN(hh,ig,hj,hi,eK[eP+7],10,ql);hi=1a.lN(hi,hh,ig,hj,eK[eP+14],15,-pk);hj=1a.lN(hj,hi,hh,ig,eK[eP+5],21,-pg);ig=1a.lN(ig,hj,hi,hh,eK[eP+12],6,pn);hh=1a.lN(hh,ig,hj,hi,eK[eP+3],10,-p7);hi=1a.lN(hi,hh,ig,hj,eK[eP+10],15,-p5);hj=1a.lN(hj,hi,hh,ig,eK[eP+1],21,-p6);ig=1a.lN(ig,hj,hi,hh,eK[eP+8],6,pa);hh=1a.lN(hh,ig,hj,hi,eK[eP+15],10,-pe);hi=1a.lN(hi,hh,ig,hj,eK[eP+6],15,-pd);hj=1a.lN(hj,hi,hh,ig,eK[eP+13],21,pb);ig=1a.lN(ig,hj,hi,hh,eK[eP+4],6,-pr);hh=1a.lN(hh,ig,hj,hi,eK[eP+11],10,-pI);hi=1a.lN(hi,hh,ig,hj,eK[eP+2],15,pH);hj=1a.lN(hj,hi,hh,ig,eK[eP+9],21,-pF);ig=1a.lO(ig,lG);hj=1a.lO(hj,lH);hi=1a.lO(hi,lI);hh=1a.lO(hh,lJ)}1d[ig,hj,hi,hh]},lP:1c(lQ,ig,hj,eK,hG,gW){1d 1a.lO(1a.lR(1a.lO(1a.lO(ig,lQ),1a.lO(eK,gW)),hG),hj)},lK:1c(ig,hj,hi,hh,eK,hG,gW){1d 1a.lP((hj&hi)|((~hj)&hh),ig,hj,eK,hG,gW)},lL:1c(ig,hj,hi,hh,eK,hG,gW){1d 1a.lP((hj&hh)|(hi&(~hh)),ig,hj,eK,hG,gW)},lM:1c(ig,hj,hi,hh,eK,hG,gW){1d 1a.lP(hj^hi^hh,ig,hj,eK,hG,gW)},lN:1c(ig,hj,hi,hh,eK,hG,gW){1d 1a.lP(hi^(hj|(~hh)),ig,hj,eK,hG,gW)},lC:1c(lB,1D){1b lS=1a.lv(lB);if(lS.1l>16){lS=1a.lu(lS,lB.1l*1a.ls)}1b lT=[16],lU=[16];1q(1b eP=0;eP<16;eP++){lT[eP]=lS[eP]^pL;lU[eP]=lS[eP]^pM}1b 9T=1a.lu(lT.6R(1a.lv(1D)),97+1D.1l*1a.ls);1d 1a.lu(lU.6R(9T),97+pv)},lO:1c(eK,eL){1b lV=(eK&7S)+(eL&7S);1b lW=(eK>>16)+(eL>>16)+(lV>>16);1d(lW<<16)|(lV&7S)},lR:1c(lX,lY){1d(lX<<lY)|(lX>>>(32-lY))},lv:1c(lZ){1b ma=[];1b mb=(1<<1a.ls)-1;1q(1b eP=0;eP<lZ.1l*1a.ls;eP+=1a.ls){ma[eP>>5]|=(lZ.5Q(eP/1a.ls)&mb)<<(eP%32)}1d ma},lz:1c(ma){1b lZ="";1b mb=(1<<1a.ls)-1;1q(1b eP=0;eP<ma.1l*32;eP+=1a.ls){lZ+=1J.9y((ma[eP>>5]>>>(eP%32))&mb)}1d lZ},lt:1c(mc){1b md=1a.lq?"pu":"o4";1b lZ="";1q(1b eP=0;eP<mc.1l*4;eP++){lZ+=md.4w((mc[eP>>2]>>((eP%4)*8+4))&9e)+md.4w((mc[eP>>2]>>((eP%4)*8))&9e)}1d lZ},lx:1c(mc){1b me="pC+/";1b lZ="";1q(1b eP=0;eP<mc.1l*4;eP+=3){1b mf=(((mc[eP>>2]>>8*(eP%4))&7R)<<16)|(((mc[eP+1>>2]>>8*((eP+1)%4))&7R)<<8)|((mc[eP+2>>2]>>8*((eP+2)%4))&7R);1q(1b jO=0;jO<4;jO++){if(eP*8+jO*6>mc.1l*32){lZ+=1a.lr}1i{lZ+=me.4w((mf>>6*(3-jO))&rC)}}}1d lZ}};1a.eC={a5:\'1y: 3D 3Z 1I be 1W (1B/1g)\',3i:\'1y: rD 3Z 1I be 1W (1B/1g)\',7f:\'1y: 5i 2B 1I be 1n\',7A:\'1y: 5i 33 4n 1I be 1n\',7v:\'1y: 5i 33 7E 1I be 1n\',aD:\'1y: 5i 3E 1I be a 1h 7y 0 4x 90\',7F:\'1y: b3 1h of 7W 33 1I be a 1h rB 5w 1\',aF:\'1y: 5i 1o 1I be a 1h\',aG:\'1y: rE 2l 2B 1I be 1n\',ar:\'1y: 99 4z 1o 1I be a 1h\',ap:\'1y: 99 rH rF 1I be a 1h 7y 0 4x 1T\',aq:\'1y: 7U 33 3Z 1I be 1W (1B/1g)\',au:\'1y: 7U 33 4n 1I be 1n\',ax:\'1y: 7U 33 7E 1I be 1n\',al:\'1y: rr 6C 1l 1I rp 1D 1l in 1A of 2T 4x 2j rn\',ak:\'1y: rs 1D 2V 6C\',av:\'1y: 96 1D 2V 6C\',aw:\'1y: 96 1D in rw 5f 1q ru 5Y 2f\',86:\'1y: rK 3Z 1I be a 1h\',as:\'1y: 6A rZ 3Z 1I be 1W (1B/1g)\',6m:\'1y: 69 rY 3Z 1I be 1W (1B/1g)\',az:\'1y: 7X 38 1I be a 1h\',aI:\'1y: 7X 3L 1I be a 1n\',aH:\'1y: 7X 1L 1o 1I be a 1h\',2N:\'1y: 5p 1Z 54 rX 1I be s5\',2K:\'1y: 5p 1Z s6 1I be 59\',aC:\'1y: s4 3Z 1I be 1W (1B/1g)\',5V:\'1y: s2 2V 1n\',5S:\'1y: 5p 7Y rO 1I be 59\',a6:\'1y: 47 rP 48\',7M:\'1y: 47 2j 1h\',2a:\'1y: 5p 1j 33 1I be in rN 5f (#9B or #rL)\',9t:\'1y: rU 2V a 1c\',9u:\'1y: 47 7Y on 7W X\',9x:\'1y: 47 7Y on 7W Y\',7I:\'1y: 47 2u 5f\',aP:\'1y: 47 2T 3E\',9r:\'1y: 47 7Z 5f\',9c:\'1y: 47 33 5f\',7V:\'1y: 8d 2s 1I be 1W (1B/1g)\',b5:\'1y: 8d 1G 1I be 1n (rS rl 1q 33) or qP 1h b1\',6r:\'1y: 8d 1O 2V 1n\',d3:\'1y: qO 1o 1I be a 1h\',9l:\'1y: 7i 1z qN\',7p:\'1y: 7i 1D c0\',a8:\'1y: qR qW 1D to qS 5Y\',qT:\'1y: qF 5Z or qD\',9j:\'1y: qA 1I be 1n 4x qB to an qG qK\',qL:\'1y: 7i 7Z 5P 1a id\',aW:\'1y: 5E 2f 2V rd\',ae:\'1y: 5E is 2V re 2f\',rc:\'1y: 5E is 2V 1L 2f\',a7:\'1y: 5E is 2V 2T 2f\',3G:\'1y: ra 2m 1I be a 1h 7y 0 (rj) 4x 1 (rk)\',ri:\'1y: rg 3V 2V 6C\',3c:\'1y: r2 33 1I be 59\',5G:\'1y: b3 6J of r0 qY 3Q 1z 1t\',aJ:\'1y: 56 1G b1 1I be 59\',r3:\'1y: 56 aS 1Z 1t 1I be a 1h\',7t:\'1y: 56 aS 38 1I be a 1h\',r8:\'1y: 56 33 38 1I be a 1h\',aZ:\'1y: 56 33 4n 1I be 1n\',aU:\'1y: 56 33 7E 1I be 1n\',ay:\'1y: r5 id 4n 1I be 1n\',7D:\'1y: 5p 4R n5 1I be 59\',ab:\'1y: 5i 6l 3Z 1I be 1W (1B/1g)\',7C:\'1y: 69 1t 2r 1I be 59\',88:\'1y: nt 1I be a 1h\',9k:\'1y: aK 1I be 1n\',9q:\'1y: aK 1G 1I be 1n (5M, 2b or 3s)\',9i:\'1y: 5c 4z 1I be 1n\',98:\'1y: 5c 1Z 54 1I be 1n\',9b:\'1y: 5c 38 1I be a 1h\',nf:\'1y: 5c id 1I be a 1h\',9f:\'1y: 5c 6a 1I be 1n\',9d:\'1y: 5c 1G 1I be 1n\',9h:\'1y: c9 7Z 1G, 52 33 d0 nw, ne, sw 4x se\',aE:\'1y: 69 2u 1I be 1n\',aB:\'1y: 69 2u 1G 1I be 1n\',aA:\'1y: c9 nl 2u 1G, 52 33 d0 nw, ne, sw 4x se\',5j:\'1y: nr 1I be a 1h\',7u:\'1y: ny 4v 3Z 1I be 1W (1B/1g)\',b7:\'1y 42/2F: 60 1D 3V\',nh:\'1y 42/2F: 60 or 5Z 3C\',mV:\'1y 42/2F: 60 or 5Z 5Y 2B\',b8:\'1y 42/2F: 60 or 5Z 5Y 2f\',6s:\'1y 42/2F: na 2V c0 or nm 1j/1D/6e 3V\',ah:\'1y 42/2F: 8e 1j 3V\',6p:\'1y 42/2F: 8e 1D 3V\',ai:\'1y 42/2F: 8e 6e 3V\',6g:\'1y 42/2F: m9 5f\'}}1c 1y(2B,2f,3Y,lB,58){1a.mg=29 ms();1b mg=1a.mg;1b mh;if(1f lB===\'1W\'){58=lB}lB=\'\';if(1f 3Y===\'1r\'){3Y=\'\'}mg.iU(2B,2f.3a(),3Y,lB,58);mg.eB=1c(3g){if(mg.dn){37(mg.eC[3g])}};1a.n7=1c(){mg.cN=[];mg.cO=[]};1a.mZ=1c(){mg.cN=[]};1a.mY=1c(){mg.cO=[]};1a.n2=1c(){mg.dZ={}};1a.7m=1c(mi){if(mg.bi.1l===0){mg.eB(\'7p\');1d}if(!mg.gb(mi)){mg.eB(\'ak\');1d}if(mg.bi.1l!==mi.1l&&mg.ec!==\'1L\'){mg.eB(\'al\');1d}mg.be=mi};1a.mX=1c(mi){if(mg.ec===\'2j\'){1a.7m(mi)}1i{mg.eB(\'ae\')}};1a.oA=1c(mi){if(mg.ec===\'2T\'){1a.7m(mi)}1i{mg.eB(\'a7\')}};1a.oz=1c(){if(mg.bi.1l===0){mg.eB(\'7p\');1d}if(((mg.bi.1l===1&&!mg.dh)||(mg.bi[0].1l===1&&mg.dh))&&mg.ec===\'1L\'){mg.eB(\'a8\');1d}mg.fZ()};1a.oy=1c(){1d mg.bj};1a.58=1c(eK,eL){if(1f eK!==\'1h\'||1f eL!==\'1h\'){mg.eB(\'7C\');1d}mg.iW(eK,eL);mg.fZ()};1a.oG=1c(mj){if(1f mj!==\'1W\'){mg.eB(\'a5\');1d}mg.mt=mj};1a.oE=1c(ff,fI){if(1f ff!==\'1n\'||!mg.ja(fI)){mg.eB(\'a6\');1d}mg.mw[ff]=fI};1a.oC=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.z=1S;mg.B=1S};1a.oD=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.A=1S;mg.C=1S};1a.oo=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.z=1S};1a.op=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.A=1S};1a.om=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.B=1S};1a.ok=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.C=1S};1a.ol=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.f=1j};1a.ou=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.mx=1j;mg.my=1j};1a.ov=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.mx=1j};1a.ot=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.my=1j};1a.oq=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.mz=fh;mg.mA=fh};1a.os=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.mz=fh};1a.oH=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.mA=fh};1a.oW=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.k=1E(1t);mg.mB=1E(1t)};1a.oX=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.k=1E(1t)};1a.oT=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.mB=1E(1t)};1a.oU=1c(2B,2Z){if(1f 2B!==\'1n\'){mg.eB(\'7f\');1d}if(1f 2Z===\'1W\'){mg.mD=2Z}mg.m=2B};1a.p3=1c(2B,2Z){if(1f 2B!==\'1n\'){mg.eB(\'7f\');1d}if(1f 2Z===\'1W\'){mg.mD=2Z}mg.mC=2B};1a.oY=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}if(mg.v+1h>=mg.dt){mg.eB(\'5G\');1d}mg.mE=1E(1h)};1a.oZ=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}if(1h+mg.mI>=mg.ds){mg.eB(\'5G\');1d}mg.mG=1E(1h)};1a.oS=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}if(mg.mG+1h>=mg.ds){mg.eB(\'5G\');1d}mg.mI=1E(1h)};1a.oL=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}if(1h+mg.mE>=mg.dt){mg.eB(\'5G\');1d}mg.v=1E(1h)};1a.oK=1c(6l){if(1f 6l!==\'1W\'){mg.eB(\'ab\');1d}if(mg.ec===\'2j\'){mg.mK=6l}};1a.oR=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'aD\');1d}if(1h<0){1h=0}if(1h>89.9){1h=89.9}mg.D=1h};1a.oP=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.E=1j;mg.F=1j};1a.oN=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.E=1j};1a.oO=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.F=1j};1a.nO=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5j\');1d}mg.G=1h;mg.H=1h};1a.nP=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5j\');1d}mg.G=1h};1a.nN=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5j\');1d}mg.H=1h};1a.nL=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.K=fh;mg.L=fh};1a.nM=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.K=fh};1a.nT=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.L=fh};1a.nU=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.M=1E(1t);mg.N=1E(1t)};1a.nS=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.M=1E(1t)};1a.nQ=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.N=1E(1t)};1a.nR=1c(1h){if(1f 1h!==\'1h\'&&1h>1){mg.eB(\'7F\');1d}mg.W=1h};1a.nK=1c(1h){if(1f 1h!==\'1h\'&&1h>1){mg.eB(\'7F\');1d}mg.X=1h};1a.nC=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.O=1E(1h)};1a.nA=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.P=1E(1h)};1a.nB=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'7A\');1d}mg.Q=fh};1a.nI=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'7A\');1d}mg.R=fh};1a.nH=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'7v\');1d}mg.U=fh};1a.nF=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'7v\');1d}mg.V=fh};1a.nG=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'aF\');1d}mg.Y=1h};1a.nV=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.bb=1j};1a.oc=1c(3z){if(1f 3z!==\'1n\'){mg.eB(\'aG\');1d}mg.Z=3z};1a.od=1c(1j,hG){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}if(1f hG===\'1r\'){mg.bx=1j}1i if(1f mg.bw===\'1n\'){mg.bw=[];mg.bw[hG-1]=1j}1i{mg.bw[hG-1]=1j}};1a.ob=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'ar\');1d}mg.by=1E(1h)};1a.o9=1c(1j,hG){if(mg.ec!==\'2j\'){1d 1g}if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}if(1f hG===\'1r\'){mg.bA=1j}1i if(1f mg.bz===\'1n\'){mg.bz=[];mg.bz[hG-1]=1j}1i{mg.bz[hG-1]=1j;if(1f mg.cW[hG-1]!==\'1r\'){mg.cW[hG-1][0]=1j}}};1a.oa=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'86\');1d}mg.bC=1h};1a.oi=1c(fF,hG){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}if(1f hG===\'1r\'){mg.bB=fF}1i if(1f mg.bD===\'1h\'){mg.bD=[];mg.bD[hG-1]=fF}1i{mg.bD[hG-1]=fF}};1a.oj=1c(1h){if(1f 1h!==\'1h\'||(1h<0||1h>1T)){mg.eB(\'ap\');1d}mg.bF=1E(1h)/2};1a.a4=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'88\');1d}1h=1T-1h;if(1h<1){1h=1}if(1h>1T){1h=1T}mg.bG=1E(1h)};1a.og=1c(jN){if(1f jN!==\'1W\'){mg.eB(\'aq\');1d}mg.bH=jN};1a.o8=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.bI=1j};1a.nZ=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5j\');1d}mg.bJ=1h};1a.o0=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.bK=fh};1a.nY=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.bL=1E(1t)};1a.nW=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'au\');1d}mg.bM=fh};1a.nX=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'ax\');1d}mg.bN=fh};1a.o6=1c(4n){if(1f 4n!==\'1n\'){mg.eB(\'ay\');1d}mg.bd=4n};1a.o5=1c(1D,id,5h){if(mg.cw){1d}if(!mg.gb(1D)){mg.eB(\'av\');1d}mg.ec=2f.3a();1b eP;1b eO;if((1f 1D[0][0]===\'1n\'||5h===1B)&&mg.ec===\'1L\'){if(mg.bi.1l===0){1q(eP=0,eO=1D.1l;eP<eO;eP++){1a.7n([eP,1J(1D[eP][0]),\'x-1K\']);mg.bk[1D[eP][0]]=eP;1D[eP][0]=eP}}1i{1b 1w=mg.mR();1b 1x=mg.ip();1b fc=1p.2n((1x-1w)/(1D.1l-1));1q(1b jO=0,eP=1w,eO=1D.1l;eP<1x,jO<eO;eP+=fc,jO++){1a.7n([eP,1J(1D[jO][0])],\'x-1K\');mg.bk[1D[jO][0]]=eP;1D[jO][0]=eP}}1a.aT(1g);1a.bW=1B}if(!mg.iX(1D)){mg.eB(\'aw\');1d}if(1f id!==\'1r\'&&id!==1k&&1f id!==\'1n\'){mg.eB(\'5V\');1d}if(mg.ec===\'1L\'){mg.dh=1B;1b mk=1g;if(mg.bi===[]){mg.bi=29 3S(1D)}1i{1q(1b eK in mg.bj){if(mg.bj[eK]===id){mg.bi[eK]=1D;mk=1B}}if(!mk){mg.bi[mg.bi.1l]=1D}}if(!mk){1b 1V=mg.bi.1l-1;mg.bj[1V]=(1f id===\'1r\'||id===1k)?\'9g\'+1V:id;mg.cu[1V]=1g;if(1f mg.bQ[1V]===\'1r\'){mg.bQ[1V]=mg.bR}if(1f mg.bU[1V]===\'1r\'){mg.bU[1V]=mg.bS}if(1f mg.bX[1V]===\'1r\'){mg.bX[1V]=mg.bT}mg.cY.1s([mg.bR,mg.bj[1V],mg.bj[1V]])}}1i if(mg.ec===\'2j\'){eO=1D.1l;1b hG=0;1q(eP=0;eP<eO;eP++){if(hG<1D[eP].1l){hG=1D[eP].1l}}1q(eP=1;eP<hG;eP++){mg.cW.1s([mg.bA,1J(eP),eP]);mg.cu.1s(1g)}mg.bi=1D}1i{mg.bi=1D}};1a.vt=1c(ju,fh){if(mg.cw){1d}1b jf=mg.jt(ju,fh);1b jg=mg.je(jf);1b jj=mg.jB(jg);if(mg.gb(jj)&&jj.1l>0){1b eO=jj.1l;1b ho;1b gV;1b ml;1q(1b eP=0;eP<eO;eP++){if(jj[eP].1l<3){ml=jj[eP][0]+\'(\'+jj[eP][1]+\')\'}1i{ml=jj[eP][0]+\'(\'+jj[eP][1]+\', "\'+jj[eP][2]+\'")\'}4k("1a."+ml)}}};1a.vW=1c(ju,fh){if(mg.cw){1d}1b jj=mg.jB(mg.jw(ju,fh));if(mg.gb(jj)&&jj.1l>0){1b eO=jj.1l;1b ho;1b gV;1b ml;1q(1b eP=0;eP<eO;eP++){if(jj[eP].1l<3){ml=jj[eP][0]+\'(\'+jj[eP][1]+\')\'}1i{ml=jj[eP][0]+\'(\'+jj[eP][1]+\', "\'+jj[eP][2]+\'")\'}4k("1a."+ml)}}};1a.uB=1c(mm){if(1f mm!==\'1W\'){mg.eB(\'as\');1d}mg.dn=mm};1a.uG=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.bn=1j};1a.vf=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.bo=1j};1a.vm=1c(fG){if(1f fG!==\'1h\'){mg.eB(\'az\');1d}mg.bp=1E(fG)};1a.v7=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.bq=fF};1a.vc=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'aI\');1d}mg.bs=fh};1a.va=1c(iA){if(1f iA!==\'1h\'){mg.eB(\'7D\');1d}mg.br=1E(iA)};1a.v2=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'aH\');1d}mg.bt=1E(1h)};1a.v5=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.dw=fh};1a.v4=1c(hv){if(1f hv!==\'1W\'){mg.eB(\'6m\');1d}mg.bO=hv;mg.bP=hv};1a.v3=1c(hv){if(1f hv!==\'1W\'){mg.eB(\'6m\');1d}mg.bO=hv};1a.vn=1c(hv){if(1f hv!==\'1W\'){mg.eB(\'6m\');1d}mg.bP=hv};1a.vp=1c(2u){if(1f 2u!==\'1n\'){mg.eB(\'aE\');1d}mg.ef=2u};1a.ve=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.eg=1j};1a.vi=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.eh=fh};1a.uH=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.ei=1E(1t)};1a.uL=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.ej=fF};1a.uJ=1c(1G){if(1f 1G!==\'1n\'){mg.eB(\'aB\');1d}1b eO=mg.dY.1l;1q(1b eP=0;eP<eO;eP++){if(mg.dY[eP]===1G){mg.ek=1G;1d 1B}}mg.eB(\'aA\');1d};1a.uy=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.el=1j};1a.uE=1c(mn){if(1f mn!==\'1W\'){mg.eB(\'aC\');1d}mg.cp=mn};1a.uW=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cq=1j;mg.cr=1j};1a.uU=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cq=1j};1a.uP=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cr=1j};1a.uR=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.cs=fF;mg.ct=fF};1a.uQ=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.cs=fF};1a.vU=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.ct=fF};1a.ad=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5S\');1d}mg.cx=1h};1a.a9=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5S\');1d}mg.cy=1h};1a.aa=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5S\');1d}mg.cz=1h};1a.ac=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5S\');1d}mg.cA=1h};1a.vS=1c(1M,mo){1a.aa(1M);1a.ad(mo)};1a.vT=1c(1M,mo){1a.ac(1M);1a.a9(mo)};1a.w0=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.cB=1S;mg.cD=1S};1a.vz=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.cC=1S;mg.cE=1S};1a.vy=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.cB=1S};1a.vA=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.cC=1S};1a.vB=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.cD=1S};1a.vx=1c(1S){if(1f 1S!==\'1W\'){mg.eB(\'3i\');1d}mg.cE=1S};1a.vX=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cF=1j;mg.cG=1j};1a.vu=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cF=1j};1a.vL=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cG=1j};1a.vM=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.cH=fh;mg.cI=fh};1a.vO=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.cH=fh};1a.vN=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.cI=fh};1a.vF=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.cJ=1E(1t);mg.cK=1E(1t)};1a.vI=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.cJ=1E(1t)};1a.vs=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.cK=1E(1t)};1a.sZ=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.cL=1E(1h)};1a.sW=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.cM=1E(1h)};1a.7n=1c(2u){if(!mg.gb(2u)||2u.1l<2||2u.1l>3){mg.eB(\'7I\');1d}if(mg.ec===\'1L\'&&1f 2u[0]===\'1n\'){if(1f mg.bk[2u[0]]!==\'1r\'){2u[0]=mg.bk[2u[0]]}}mg.cN.1s(2u)};1a.sX=1c(2u){if(!mg.gb(2u)||2u.1l!==2){mg.eB(\'7I\');1d}mg.cO.1s(2u)};1a.t0=1c(1j,1O){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}if(1f 1O!==\'1n\'){mg.eB(\'6r\');1d}mg.cV.1s([1j,1O,\'87\'])};1a.sV=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.cP=1j};1a.sP=1c(kg){if(1f kg!==\'1W\'){mg.eB(\'7V\');1d}mg.cQ=kg};1a.sN=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.cR=fh};1a.sO=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.cS=1E(1t)};1a.sU=1c(2j,1O){if(1f 2j!==\'1h\'){mg.eB(\'7M\');1d}2j--;if(2j<0||2j>=mg.cW.1l){mg.eB(\'7M\');1d}if(1f 1O!==\'1n\'){mg.eB(\'6r\');1d}mg.cW[2j]=[(1f mg.bz[2j]===\'1r\')?mg.bA:mg.bz[2j],1O]};1a.ti=1c(id,1O){if(1f id!==\'1r\'&&1f id!==\'1n\'){mg.eB(\'5V\');1d}if(1f 1O!==\'1n\'){mg.eB(\'6r\');1d}1b eO=mg.bj.1l;1q(1b eP=0;eP<eO;eP++){if(1f mg.bj[eP]!==\'1r\'&&mg.bj[eP]===id){mg.cY[eP][1]=1O;1F}}};1a.tf=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.cT=1h};1a.tg=1c(fg,fm){if(1f fg===\'1n\'){mg.cU=fg}1i if(1f fg===\'1h\'&&1f fm===\'1h\'){mg.cU=[fg,fm]}1i{mg.eB(\'b5\');1d}};1a.tk=1c(kg){if(1f kg!==\'1W\'){mg.eB(\'7V\');1d}mg.cX=kg};1a.t7=1c(1j,id){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}if(1f id!==\'1r\'&&1f id!==\'1n\'){mg.eB(\'5V\');1d}if(1f id===\'1r\'){if(mg.bQ.1l===1){mg.bQ[0]=1j}1i{1b eO=mg.bj.1l;1q(1b eP=0;eP<eO;eP++){if(1f mg.bQ[eP]!==\'1r\'){mg.bQ[eP]=1j}}}}1i{if(mg.bj.1l<2){mg.bQ[0]=1j}1i{1q(1b lB in mg.bj){if(mg.bj[lB]===id){mg.bQ[lB]=1j;mg.cY[lB][0]=1j}}}}};1a.t8=1c(fF,id){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}if(1f id===\'1r\'){if(mg.bU.1l===1){mg.bU[0]=fF}1i{1b eO=mg.bj.1l;1q(1b eP=0;eP<eO;eP++){if(1f mg.bQ[eP]!==\'1r\'){mg.bU[eP]=fF}}}}1i{if(mg.bj.1l<2){mg.bU[0]=fF}1i{1b 1V=1g;1q(1b lB in mg.bj){if(mg.bj[lB]===id){1V=lB;1F}}if(1V!==1g){mg.bU[1V]=fF}}}};1a.9m=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'88\');1d}1h=(1T-1h)*10;if(1h<1){1h=1}if(1h>3R){1h=3R}mg.bV=1E(1h)};1a.td=1c(1h,id){if(1f 1h!==\'1h\'){mg.eB(\'d3\');1d}1h=1E(1h);if(1f id===\'1r\'){if(mg.bX.1l===1){mg.bX[0]=1h}1i{1b eO=mg.bj.1l;1q(1b eP=0;eP<eO;eP++){if(1f mg.bX[eP]!==\'1r\'){mg.bX[eP]=1h}}}}1i{if(mg.bj.1l<2){mg.bX[0]=1h}1i{1b 1V=1g;1q(1b lB in mg.bj){if(mg.bj[lB]===id){1V=lB;1F}}if(1V!==1g){mg.bX[1V]=1h}}}};1a.sj=1c(1h){if(1f 1h!==\'1h\'||1h<0||1h>89){mg.eB(\'aP\');1d}mg.bY=1h};1a.sm=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'86\');1d}if(1h<1){1h=1}mg.bZ=1h};1a.sg=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.ca=1E(fF)};1a.sa=1c(eK,eL){if(1f eK!==\'1h\'||1f eL!==\'1h\'){mg.eB(\'aJ\');1d}mg.cb=1E(eK);mg.cc=1E(eL)};1a.sd=1c(iA){if(1f iA!==\'1h\'){mg.eB(\'7D\');1d}mg.cd=1E(iA)};1a.sb=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.ce=1j};1a.sc=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.cf=fh};1a.sr=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.cg=1E(1t)};1a.sH=1c(fG){if(1f fG!==\'1h\'){mg.eB(\'7t\');1d}mg.mL=1E(fG)};1a.sI=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.ci=1j};1a.sF=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'5j\');1d}mg.cj=1h};1a.sG=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.ck=fh};1a.sL=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.cl=1E(1t)};1a.sM=1c(fG){if(1f fG!==\'1h\'){mg.eB(\'7t\');1d}mg.cm=1E(fG)};1a.sK=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'aZ\');1d}mg.cn=fh};1a.sE=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'aU\');1d}mg.co=fh};1a.aT=1c(4v){if(1f 4v!==\'1W\'){mg.eB(\'7u\');1d}mg.S=4v};1a.sv=1c(4v){if(1f 4v!==\'1W\'){mg.eB(\'7u\');1d}mg.T=4v};1a.sz=1c(eK,eL){if(1f eK!==\'1h\'||1f eL!==\'1h\'){mg.eB(\'7C\');1d}mg.iW(eK,eL)};1a.st=1c(1h){mg.a4(1h);if(1f 1h===\'1h\'){mg.9m(1h)}};1a.su=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.dD=1E(1h)};1a.sD=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.dF=1E(1h)};1a.sA=1c(1h){if(1f 1h!==\'1h\'){mg.eB(\'3c\');1d}mg.dH=1E(1h)};1a.sB=1c(7l){if(1f 7l!==\'1n\'){mg.eB(\'9k\');1d}mg.dJ=7l};1a.ua=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.dK=1j};1a.ub=1c(fh){if(1f fh!==\'1n\'){mg.eB(\'2N\');1d}mg.dL=fh};1a.u8=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.dM=1E(1t)};1a.u9=1c(gz){if(1f gz!==\'1n\'){mg.eB(\'9q\');1d}mg.dN=gz};1a.ue=1c(fE,fI){if(!mg.gb(fE)||fE.1l<1||fE.1l>3){mg.eB(\'9r\');1d}if(mg.ec!==\'2T\'){1b 1L=(1f fE[2]===\'1r\')?\'4f\':fE[2];if(1f mg.dZ[1L]===\'1r\'){mg.dZ[1L]={}}if(mg.ec===\'1L\'&&1f fE[0]===\'1n\'){if(1f mg.bk[fE[0]]!==\'1r\'){mg.dZ[1L][mg.bk[fE[0]]]=fE}}1i{mg.dZ[1L][fE[0]]=fE}}1i{mg.dZ[fE[0]]=fE}if(1f fI!==\'1r\'){if(!mg.ja(fI)){mg.eB(\'9t\');1d}if(mg.ec!==\'2T\'){if(mg.ec===\'1L\'&&1f fE[0]===\'1n\'){if(1f mg.bk[fE[0]]!==\'1r\'){mg.dZ[1L][mg.bk[fE[0]]][\'3p\']=fI}}1i{mg.dZ[1L][fE[0]][\'3p\']=fI}}1i{mg.dZ[fE[0]][\'3p\']=fI}}};1a.u7=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.dO=1j};1a.u1=1c(mp){if(1f mp!==\'1n\'){mg.eB(\'9i\');1d}mg.dP=mp};1a.u2=1c(1j){if(1f 1j!==\'1n\'||mg.fN(1j)===1g){mg.eB(\'2a\');1d}mg.dR=1j};1a.u5=1c(1Z){if(1f 1Z!==\'1n\'){mg.eB(\'98\');1d}mg.dS=1Z};1a.u6=1c(1t){if(1f 1t!==\'1h\'){mg.eB(\'2K\');1d}mg.dT=1E(1t)};1a.u3=1c(fF){if(1f fF!==\'1h\'||(fF<0||fF>1)){mg.eB(\'3G\');1d}mg.dV=1E(fF)};1a.u4=1c(mp){if(1f mp!==\'1n\'){mg.eB(\'9f\');1d}mg.dW=mp};1a.us=1c(fG){if(1f fG!==\'1h\'){mg.eB(\'9b\');1d}mg.dU=1E(fG)};1a.ut=1c(1G){if(1f 1G!==\'1n\'){mg.eB(\'9d\');1d}1b eO=mg.dY.1l;1q(1b eP=0;eP<eO;eP++){if(mg.dY[eP]===1G){mg.dX=1G;1d 1B}}mg.eB(\'9h\');1d};1a.uw=1c(iY){if(iY!==\'.\'&&iY!==\',\'&&iY!==1g){mg.eB(\'9c\');1d}mg.em=iY}}1c gg(){}gg.mq=1c(hG){1b iQ="6O";1b mr=29 3S("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");1q(1b eP=0;eP<hG.1l;eP++){iQ+=mr[hG.5Q(eP)>>4]+mr[hG.5Q(eP)&uo]}1d iQ};gg.gh=1c(hf){1b iQ="";1q(1b eP=(hf.2J(0,2)=="6O")?2:0;eP<hf.1l;eP+=2){iQ+=1J.9y(1U(hf.2J(eP,2),16))}1d iQ};if(!1Y.2p(\'1z\').3k){(1c(){1b m=1p;1b mr=m.2n;1b ms=m.3X;1b mc=m.2G;1b 2g=m.2g;1b 7J=m.7J;1b Z=10;1b 4u=Z/2;1c 3k(){1d 1a.9U||(1a.9U=29 68(1a))}1b 5a=3S.3j.5a;1c a1(f,9V,m5){1b a=5a.48(2r,2);1d 1c(){1d f.b9(9V,a.6R(5a.48(2r)))}}1c 8O(s){1d 1J(s).2R(/&/g,\'&tU;\').2R(/"/g,\'&tR;\')}1c 7O(31){if(!31.4o[\'2P\']){31.4o.8z(\'2P\',\'8C:8B-8A-8n:d5\',\'#2w#6Q\')}if(!31.4o[\'84\']){31.4o.8z(\'84\',\'8C:8B-8A-8n:9S:9S\',\'#2w#6Q\')}if(!31.tS[\'9P\']){1b ss=31.k5();ss.tX.id=\'9P\';ss.tV=\'1z{5m:tW-tQ;9w:6V;\'+\'1O-1S:2b;1o:tK;1C:tL}\'}}7O(1Y);1b 8H={9D:1c(9W){if(/tI/.3b(5L.5F)&&!7K.79){1b 31=9W||1Y;31.2p(\'1z\');31.5z(\'tJ\',a1(1a.a3,1a,31))}},a3:1c(31){1b 7Q=31.7P(\'1z\');1q(1b i=0;i<7Q.1l;i++){1a.5B(7Q[i])}},5B:1c(el){if(!el.3k){el.3k=3k;7O(el.94);el.3r=\'\';el.5z(\'tO\',9Y);el.5z(\'tP\',9Z);1b 4p=el.8b;if(4p.1o&&4p.1o.5b){el.1v.1o=4p.1o.6G+\'px\'}1i{el.1o=el.6W}if(4p.1C&&4p.1C.5b){el.1v.1C=4p.1C.6G+\'px\'}1i{el.1C=el.6X}}1d el}};1c 9Y(e){1b el=e.9O;2s(e.tM){1A\'1o\':el.3k().7H();el.1v.1o=el.8b.1o.6G+\'px\';el.3A.1v.1o=el.6W+\'px\';1F;1A\'1C\':el.3k().7H();el.1v.1C=el.8b.1C.6G+\'px\';el.3A.1v.1C=el.6X+\'px\';1F}}1c 9Z(e){1b el=e.9O;if(el.3A){el.3A.1v.1o=el.6W+\'px\';el.3A.1v.1C=el.6X+\'px\'}}8H.9D();1b 83=[];1q(1b i=0;i<16;i++){1q(1b j=0;j<16;j++){83[i*16+j]=i.5e(16)+j.5e(16)}}1c 63(){1d[[1,0,0],[0,1,0],[0,0,1]]}1c 4P(m1,m2){1b 82=63();1q(1b x=0;x<3;x++){1q(1b y=0;y<3;y++){1b 6J=0;1q(1b z=0;z<3;z++){6J+=m1[x][z]*m2[z][y]}82[x][y]=6J}}1d 82}1c 8f(o1,o2){o2.1N=o1.1N;o2.3K=o1.3K;o2.4I=o1.4I;o2.1R=o1.1R;o2.4G=o1.4G;o2.9F=o1.9F;o2.9C=o1.9C;o2.9z=o1.9z;o2.9A=o1.9A;o2.1P=o1.1P;o2.4q=o1.4q;o2.1Z=o1.1Z;o2.3q=o1.3q;o2.4J=o1.4J;o2.4E=o1.4E;o2.4F=o1.4F;o2.5y=o1.5y}1c 6z(34){1b 3v,3o=1;34=1J(34);if(34.2Y(0,3)==\'9B\'){1b 1M=34.3x(\'(\',3);1b 7o=34.3x(\')\',1M+1);1b 6I=34.2Y(1M+1,7o).4A(\',\');3v=\'#\';1q(1b i=0;i<3;i++){3v+=83[1E(6I[i])]}if(6I.1l==4&&34.2J(3,1)==\'a\'){3o=6I[3]}}1i{3v=34}1d{1j:3v,3o:3o}}1b 57={1v:\'81\',70:\'81\',2C:\'81\',1t:10,54:\'4a-4b\'};1b 71={};1c e1(34){if(71[34]){1d 71[34]}1b el=1Y.2p(\'4e\');1b 1v=el.1v;5l{1v.1Z=34}5k(ex){}1d 71[34]={1v:1v.5n||57.1v,70:1v.te||57.70,2C:1v.tN||57.2C,1t:1v.2D||57.1t,54:1v.9J||57.54}}1c e2(1v,9H){1b 3w={};1q(1b p in 1v){3w[p]=1v[p]}1b 5O=9N(9H.d8.2D),2D=9N(1v.1t);if(1f 1v.1t==\'1h\'){3w.1t=1v.1t}1i if(1v.1t.3x(\'px\')!=-1){3w.1t=2D}1i if(1v.1t.3x(\'em\')!=-1){3w.1t=5O*2D}1i if(1v.1t.3x(\'%\')!=-1){3w.1t=(5O/1T)*2D}1i if(1v.1t.3x(\'pt\')!=-1){3w.1t=5O*(4/3)*2D}1i{3w.1t=5O}3w.1t*=0.tY;1d 3w}1c e5(1v){1d 1v.1v+\' \'+1v.70+\' \'+1v.2C+\' \'+1v.1t+\'px \'+1v.54}1c f4(3K){2s(3K){1A\'9X\':1d\'tT\';1A\'2n\':1d\'2n\';1A\'74\':2w:1d\'74\'}}1c 68(4U){1a.2x=63();1a.8c=[];1a.62=[];1a.3f=[];1a.1P=\'#7B\';1a.1N=\'#7B\';1a.1R=1;1a.4I=\'tH\';1a.3K=\'9X\';1a.4G=Z*1;1a.4q=1;1a.1Z=\'7G 4a-4b\';1a.3q=\'2b\';1a.4J=\'l2\';1a.1z=4U;1b el=4U.94.2p(\'4e\');el.1v.1o=4U.6W+\'px\';el.1v.1C=4U.6X+\'px\';el.1v.9w=\'6V\';el.1v.1G=\'2X\';4U.2z(el);1a.3J=el;1a.4E=1;1a.4F=1;1a.5y=1}1b 28=68.3j;28.7H=1c(){if(1a.3N){1a.3N.tu(1B);1a.3N=1k}1a.3J.3r=\'\'};28.2o=1c(){1a.3f=[]};28.1H=1c(aX,aY){1b p=1a.2E(aX,aY);1a.3f.1s({2f:\'1H\',x:p.x,y:p.y});1a.4Z=p.x;1a.51=p.y};28.1u=1c(aX,aY){1b p=1a.2E(aX,aY);1a.3f.1s({2f:\'1u\',x:p.x,y:p.y});1a.4Z=p.x;1a.51=p.y};28.4m=1c(9v,9p,9o,9n,aX,aY){1b p=1a.2E(aX,aY);1b 3M=1a.2E(9v,9p);1b 4B=1a.2E(9o,9n);4m(1a,3M,4B,p)};1c 4m(6Z,3M,4B,p){6Z.3f.1s({2f:\'4m\',i2:3M.x,h4:3M.y,h3:4B.x,h6:4B.y,x:p.x,y:p.y});6Z.4Z=p.x;6Z.51=p.y}28.a2=1c(k3,k4,aX,aY){1b cp=1a.2E(k3,k4);1b p=1a.2E(aX,aY);1b 3M={x:1a.4Z+2.0/3.0*(cp.x-1a.4Z),y:1a.51+2.0/3.0*(cp.y-1a.51)};1b 4B={x:3M.x+(p.x-1a.4Z)/3.0,y:3M.y+(p.y-1a.51)/3.0};4m(1a,3M,4B,p)};28.4t=1c(aX,aY,4C,7j,7h,7g){4C*=Z;1b j1=7g?\'at\':\'d7\';1b 4W=aX+mc(7j)*4C-4u;1b 6L=aY+ms(7j)*4C-4u;1b 5x=aX+mc(7h)*4C-4u;1b 6M=aY+ms(7h)*4C-4u;if(4W==5x&&!7g){4W+=0.tx}1b p=1a.2E(aX,aY);1b 7s=1a.2E(4W,6L);1b 85=1a.2E(5x,6M);1a.3f.1s({2f:j1,x:p.x,y:p.y,4R:4C,4W:7s.x,6L:7s.y,5x:85.x,6M:85.y})};28.8D=1c(aX,aY,3O,3P){1a.1H(aX,aY);1a.1u(aX+3O,aY);1a.1u(aX+3O,aY+3P);1a.1u(aX,aY+3P);1a.35()};28.8Y=1c(aX,aY,3O,3P){1b 72=1a.3f;1a.2o();1a.1H(aX,aY);1a.1u(aX+3O,aY);1a.1u(aX+3O,aY+3P);1a.1u(aX,aY+3P);1a.35();1a.2e();1a.3f=72};28.5R=1c(aX,aY,3O,3P){1b 72=1a.3f;1a.2o();1a.1H(aX,aY);1a.1u(aX+3O,aY);1a.1u(aX+3O,aY+3P);1a.1u(aX,aY+3P);1a.35();1a.2U();1a.3f=72};28.tw=1c(6H,6D,6K,6P){1b 2O=29 4K(\'2O\');2O.5q=6H;2O.5o=6D;2O.6v=6K;2O.6y=6P;1d 2O};28.tq=1c(6H,6D,ld,6K,6P,l9){1b 2O=29 4K(\'tp\');2O.5q=6H;2O.5o=6D;2O.8q=ld;2O.6v=6K;2O.6y=6P;2O.8p=l9;1d 2O};28.tt=1c(2l,m5){1b dx,dy,dw,dh,sx,sy,sw,sh;1b f0=2l.4O.1o;1b e7=2l.4O.1C;2l.4O.1o=\'2I\';2l.4O.1C=\'2I\';1b w=2l.1o;1b h=2l.1C;2l.4O.1o=f0;2l.4O.1C=e7;if(2r.1l==3){dx=2r[1];dy=2r[2];sx=sy=0;sw=dw=w;sh=dh=h}1i if(2r.1l==5){dx=2r[1];dy=2r[2];dw=2r[3];dh=2r[4];sx=sy=0;sw=w;sh=h}1i if(2r.1l==9){sx=2r[1];sy=2r[2];sw=2r[3];sh=2r[4];dx=2r[5];dy=2r[6];dw=2r[7];dh=2r[8]}1i{6i 6A(\'47 1h of 2r\')}1b d=1a.2E(dx,dy);1b ts=sw/2;1b h2=sh/2;1b 4Q=[];1b W=10;1b H=10;4Q.1s(\' <2P:8J\',\' 5r="\',Z*W,\',\',Z*H,\'"\',\' 5s="0,0"\',\' 1v="1o:\',W,\'px;1C:\',H,\'px;1G:2X;\');if(1a.2x[0][0]!=1||1a.2x[0][1]||1a.2x[1][1]!=1||1a.2x[1][0]){1b 4S=[];4S.1s(\'ty=\',1a.2x[0][0],\',\',\'tE=\',1a.2x[1][0],\',\',\'tD=\',1a.2x[0][1],\',\',\'tG=\',1a.2x[1][1],\',\',\'tF=\',mr(d.x/Z),\',\',\'tA=\',mr(d.y/Z),\'\');1b 1x=d;1b c2=1a.2E(dx+dw,dy);1b c3=1a.2E(dx,dy+dh);1b c4=1a.2E(dx+dw,dy+dh);1x.x=m.1x(1x.x,c2.x,c3.x,c4.x);1x.y=m.1x(1x.y,c2.y,c3.y,c4.y);4Q.1s(\'6a:0 \',mr(1x.x/Z),\'px \',mr(1x.y/Z),\'px 0;4S:tC:tB.7N.um(\',4S.3e(\'\'),", ul=\'91\');")}1i{4Q.1s(\'2v:\',mr(d.y/Z),\'px;2b:\',mr(d.x/Z),\'px;\')}4Q.1s(\' ">\',\'<2P:2l 3z="\',2l.3z,\'"\',\' 1v="1o:\',Z*dw,\'px;\',\' 1C:\',Z*dh,\'px"\',\' un="\',sx/w,\'"\',\' ui="\',sy/h,\'"\',\' uh="\',(w-sx-sw)/w,\'"\',\' uk="\',(h-sy-sh)/h,\'"\',\' />\',\'</2P:8J>\');1a.3J.6d(\'uj\',4Q.3e(\'\'))};28.2e=1c(6N){1b 2k=[];1b up=1g;1b W=10;1b H=10;2k.1s(\'<2P:3L\',\' 6F="\',!!6N,\'"\',\' 1v="1G:2X;1o:\',W,\'px;1C:\',H,\'px;"\',\' 5s="0,0"\',\' 5r="\',Z*W,\',\',Z*H,\'"\',\' 6E="\',!6N,\'"\',\' 3l="\');1b uv=1g;1b 1w={x:1k,y:1k};1b 1x={x:1k,y:1k};1q(1b i=0;i<1a.3f.1l;i++){1b p=1a.3f[i];1b c;2s(p.2f){1A\'1H\':c=p;2k.1s(\' m \',mr(p.x),\',\',mr(p.y));1F;1A\'1u\':2k.1s(\' l \',mr(p.x),\',\',mr(p.y));1F;1A\'h7\':2k.1s(\' x \');p=1k;1F;1A\'4m\':2k.1s(\' c \',mr(p.i2),\',\',mr(p.h4),\',\',mr(p.h3),\',\',mr(p.h6),\',\',mr(p.x),\',\',mr(p.y));1F;1A\'at\':1A\'d7\':2k.1s(\' \',p.2f,\' \',mr(p.x-1a.4E*p.4R),\',\',mr(p.y-1a.4F*p.4R),\' \',mr(p.x+1a.4E*p.4R),\',\',mr(p.y+1a.4F*p.4R),\' \',mr(p.4W),\',\',mr(p.6L),\' \',mr(p.5x),\',\',mr(p.6M));1F}if(p){if(1w.x==1k||p.x<1w.x){1w.x=p.x}if(1x.x==1k||p.x>1x.x){1x.x=p.x}if(1w.y==1k||p.y<1w.y){1w.y=p.y}if(1x.y==1k||p.y>1x.y){1x.y=p.y}}}2k.1s(\' ">\');if(!6N){7w(1a,2k)}1i{7z(1a,2k,1w,1x)}2k.1s(\'</2P:3L>\');1a.3J.6d(\'8L\',2k.3e(\'\'))};1c 7w(2c,2k){1b a=6z(2c.1P);1b 1j=a.1j;1b 2m=a.3o*2c.4q;1b 1R=2c.5y*2c.1R;if(1R<1){2m*=1R}2k.1s(\'<2P:2e\',\' 2m="\',2m,\'"\',\' l0="\',2c.4I,\'"\',\' i6="\',2c.4G,\'"\',\' k7="\',f4(2c.3K),\'"\',\' 2C="\',1R,\'px"\',\' 1j="\',1j,\'" />\')}1c 7z(2c,2k,1w,1x){1b 1N=2c.1N;1b 4N=2c.4E;1b 4M=2c.4F;1b 1o=1x.x-1w.x;1b 1C=1x.y-1w.y;if(1N 7b 4K){1b 3E=0;1b 5T={x:0,y:0};1b 7e=0;1b 7L=1;if(1N.8r==\'2O\'){1b f6=1N.5q/4N;1b e9=1N.5o/4M;1b m0=1N.6v/4N;1b l5=1N.6y/4M;1b p0=2c.2E(f6,e9);1b p1=2c.2E(m0,l5);1b dx=p1.x-p0.x;1b dy=p1.y-p0.y;3E=1p.uu(dx,dy)*43/1p.1X;if(3E<0){3E+=ux}if(3E<1e-6){3E=0}}1i{1b p0=2c.2E(1N.5q,1N.5o);5T={x:(p0.x-1w.x)/1o,y:(p0.y-1w.y)/1C};1o/=4N*Z;1C/=4M*Z;1b 7x=m.1x(1o,1C);7e=2*1N.8q/7x;7L=2*1N.8p/7x-7e}1b 4l=1N.8s;4l.ur(1c(j0,j5){1d j0.38-j5.38});1b 1l=4l.1l;1b m3=4l[0].1j;1b 8g=4l[1l-1].1j;1b f2=4l[0].3o*2c.4q;1b 7q=4l[1l-1].3o*2c.4q;1b 7a=[];1q(1b i=0;i<1l;i++){1b 8a=4l[i];7a.1s(8a.38*7L+7e+\' \'+8a.1j)}2k.1s(\'<2P:2U 2f="\',1N.8r,\'"\',\' uq="5N" 5T="1T%"\',\' 1j="\',m3,\'"\',\' 8g="\',8g,\'"\',\' 7a="\',7a.3e(\',\'),\'"\',\' 2m="\',7q,\'"\',\' 84:7q="\',f2,\'"\',\' 3E="\',3E,\'"\',\' u0="\',5T.x,\',\',5T.y,\'" />\')}1i if(1N 7b 7d){if(1o&&1C){1b d9=-1w.x;1b do=-1w.y;2k.1s(\'<2P:2U\',\' 1G="\',d9/1o*4N*4N,\',\',do/1C*4M*4M,\'"\',\' 2f="tZ"\',\' 3z="\',1N.go,\'" />\')}}1i{1b a=6z(2c.1N);1b 1j=a.1j;1b 2m=a.3o*2c.4q;2k.1s(\'<2P:2U 1j="\',1j,\'" 2m="\',2m,\'" />\')}}28.2U=1c(){1a.2e(1B)};28.35=1c(){1a.3f.1s({2f:\'h7\'})};28.2E=1c(aX,aY){1b m=1a.2x;1d{x:Z*(aX*m[0][0]+aY*m[1][0]+m[2][0])-4u,y:Z*(aX*m[0][1]+aY*m[1][1]+m[2][1])-4u}};28.3I=1c(){1b o={};8f(1a,o);1a.62.1s(o);1a.8c.1s(1a.2x);1a.2x=4P(63(),1a.2x)};28.3F=1c(){if(1a.62.1l){8f(1a.62.g3(),1a);1a.2x=1a.8c.g3()}};1c g4(m){1d 4j(m[0][0])&&4j(m[0][1])&&4j(m[1][0])&&4j(m[1][1])&&4j(m[2][0])&&4j(m[2][1])}1c 4V(2c,m,g5){if(!g4(m)){1d}2c.2x=m;if(g5){1b g0=m[0][0]*m[1][1]-m[0][1]*m[1][0];2c.5y=7J(2g(g0))}}28.41=1c(aX,aY){1b m1=[[1,0,0],[0,1,0],[aX,aY,1]];4V(1a,4P(m1,1a.2x),1g)};28.2Z=1c(7T){1b c=mc(7T);1b s=ms(7T);1b m1=[[c,s,0],[-s,c,0],[0,0,1]];4V(1a,4P(m1,1a.2x),1g)};28.4T=1c(aX,aY){1a.4E*=aX;1a.4F*=aY;1b m1=[[aX,0,0],[0,aY,0],[0,0,1]];4V(1a,4P(m1,1a.2x),1B)};28.uc=1c(6q,6B,6w,6x,dx,dy){1b m1=[[6q,6B,0],[6w,6x,0],[dx,dy,1]];4V(1a,4P(m1,1a.2x),1B)};28.uf=1c(6q,6B,6w,6x,dx,dy){1b m=[[6q,6B,0],[6w,6x,0],[dx,dy,1]];4V(1a,m,1B)};28.8S=1c(1O,x,y,5H,2e){1b m=1a.2x,6k=3R,2b=0,3s=6k,38={x:0,y:0},2k=[];1b 5n=e2(e1(1a.1Z),1a.3J);1b l4=e5(5n);1b 7r=1a.3J.d8;1b 3q=1a.3q.3a();2s(3q){1A\'2b\':1A\'5M\':1A\'3s\':1F;1A\'7o\':3q=7r.l3==\'sC\'?\'3s\':\'2b\';1F;1A\'1M\':3q=7r.l3==\'s7\'?\'3s\':\'2b\';1F;2w:3q=\'2b\'}2s(1a.4J){1A\'s9\':1A\'2v\':38.y=5n.1t/1.75;1F;1A\'sq\':1F;2w:1A 1k:1A\'l2\':1A\'so\':1A\'si\':38.y=-5n.1t/2.25;1F}2s(3q){1A\'3s\':2b=6k;3s=0.k6;1F;1A\'5M\':2b=3s=6k/2;1F}1b d=1a.2E(x+38.x,y+38.y);2k.1s(\'<2P:1L sl="\',-2b,\' 0" to="\',3s,\' 0.k6" \',\' 5r="1T 1T" 5s="0 0"\',\' 6F="\',!2e,\'" 6E="\',!!2e,\'" 1v="1G:2X;1o:5J;1C:5J;">\');if(2e){7w(1a,2k)}1i{7z(1a,2k,{x:-2b,y:0},{x:3s,y:5n.1t})}1b k8=m[0][0].2W(3)+\',\'+m[1][0].2W(3)+\',\'+m[0][1].2W(3)+\',\'+m[1][1].2W(3)+\',0,0\';1b k9=mr(d.x/Z)+\',\'+mr(d.y/Z);2k.1s(\'<2P:tb on="t" t6="\',k8,\'" \',\' 38="\',k9,\'" t5="\',2b,\' 0" />\',\'<2P:3l tm="1B" />\',\'<2P:l6 on="1B" 1n="\',8O(1O),\'" 1v="v-1O-1S:\',3q,\';1Z:\',8O(l4),\'" /></2P:1L>\');1a.3J.6d(\'8L\',2k.3e(\'\'))};28.8T=1c(1O,x,y,5H){1a.8S(1O,x,y,5H,1g)};28.53=1c(1O,x,y,5H){1a.8S(1O,x,y,5H,1B)};28.8R=1c(1O){if(!1a.3N){1b s=\'<m4 1v="1G:2X;\'+\'2v:-sR;2b:0;6a:0;8u:0;4z:5N;\'+\'vD-2A:vw;"></m4>\';1a.3J.6d(\'8L\',s);1a.3N=1a.3J.vd}1b 31=1a.3J.94;1a.3N.3r=\'\';1a.3N.1v.1Z=1a.1Z;1a.3N.2z(31.uO(1O));1d{1o:1a.3N.vP}};28.91=1c(){};28.vG=1c(){};28.vC=1c(2l,5v){1d 29 7d(2l,5v)};1c 4K(i4){1a.8r=i4;1a.5q=0;1a.5o=0;1a.8q=0;1a.6v=0;1a.6y=0;1a.8p=0;1a.8s=[]}4K.3j.vV=1c(i1,5C){5C=6z(5C);1a.8s.1s({38:i1,1j:5C.1j,3o:5C.3o})};1c 7d(2l,5v){g7(2l);2s(5v){1A\'5u\':1A 1k:1A\'\':1a.g9=\'5u\';1F;1A\'5u-x\':1A\'5u-y\':1A\'no-5u\':1a.g9=5v;1F;2w:5W(\'f9\')}1a.go=2l.3z;1a.vY=2l.1o;1a.vQ=2l.1C}1c 5W(s){6i 29 7c(s)}1c g7(4h){if(!4h||4h.uT!=1||4h.4r!=\'uX\'){5W(\'e0\')}if(4h.uY!=\'uF\'){5W(\'h8\')}}1c 7c(s){1a.3Y=1a[s];1a.8h=s+\': uK vo \'+1a.3Y}1b p=7c.3j=29 6A;p.v9=1;p.vb=2;p.v6=3;p.v1=4;p.vq=5;p.vg=6;p.vj=7;p.uS=8;p.vr=9;p.vR=10;p.h8=11;p.f9=12;p.vv=13;p.vK=14;p.vJ=15;p.sY=16;p.e0=17;66=8H;78=68;t2=4K;t3=7d;t1=7c})()}if(/^79/.3b(5L.5F.3a())){1c sQ(){if(1Y.4o[\'v\']==1k){1b e=["3L","sT","8J","e6","3l","sS","t4","2U","2e","th","tn","l6","tj","1L","vH","t9","ta","sk","8D","4t","2l"],s=1Y.k5();1q(1b i=0;i<e.1l;i++){s.sn("v\\\\:"+e[i],"s8: f7(#2w#6Q);")}1Y.4o.8z("v","8C:8B-8A-8n:d5","#2w#6Q");}if(1f h1==\'1c\'&&1Y.4o[\'v\']!=1k){1d 1B}1i{1d 1g}}1c sf(x,y,4L,6Y,5K,2C,1j,2m,3m){3m=1f(3m)!=\'1r\'?3m:0;1j=1f(1j)!=\'1r\'?1j:\'#l7\';2m=1f(2m)!=\'1r\'?2m:1;id=1f(id)!=\'1r\'?\'id="\'+id+\'"\':\'\';1b w=1U(5K),b=1U(4L),h=1U(6Y);1d\'<v:3L \'+id+\' 6F="f" 6E="t" 5s="0,0" 5r="\'+w+\',\'+h+\'" 3l="m 0,\'+b+\' l 0,0,\'+w+\',0,\'+w+\',\'+b+\',0,\'+b+\',0,\'+h+\',\'+w+\',\'+h+\',\'+w+\',\'+b+\' e" 1v="3m:\'+3m+\';1G:2X;8u:8X;2v:\'+1p.2n(y)+\'px;2b:\'+1p.2n(x)+\'px;1o:\'+w+\'px;1C:\'+h+\'px;"><v:2e 1j="\'+1j+\'" 2m="\'+2m+\'" 2C="\'+2C+\'" /></v:3L>\'}1c h1(1n,x,y,1t,2C,1o,2A,1Z,1j,2m,3m,id){1c qC(cX,cY,i3,h5,aX,aY){1b t=29 3S(6);t[0]=cX+2.0/3.0*(i3-cX);t[1]=cY+2.0/3.0*(h5-cY);t[2]=t[0]+(aX-cX)/3.0;t[3]=t[1]+(aY-cY)/3.0;t[4]=aX;t[5]=aY;1d t}1t=1f(1t)!=\'1r\'?1t:12;2C=1f(2C)!=\'1r\'?2C:1T;1o=1T;2A=1T;1Z="4a-4b";1n=1f(1n)!=\'1r\'?1n:\' \';1b j4=1f(x)!=\'1r\'?x:0;1b m6=1f(y)!=\'1r\'?y:0;3m=1f(3m)!=\'1r\'?3m:0;1j=1f(1j)!=\'1r\'?1j:\'#l7\';2m=1f(2m)!=\'1r\'?2m:1;id=1f(id)!=\'1r\'?\'id="\'+id+\'"\':\'\';1b i=0,j=0,f=10,3l="",a,b,z,k,c,p,o,4d=1n.1l,1Q=1t/25.0,6T=1p.1x(1p.1w(2C,4s),1)/40,2h=1p.1x(1p.1w(1o,4s),10)/1T;1b 6S=1p.1x(1p.1w(2A,3R),10)/1T,mx=((1Q*16*2h)*6S)-(1Q*16*2h),lw=(6T*1Q);x=0;y=1t;1b 95=1p.2n(8Q(1n,1t,1o,2A,1Z)),hh=1p.2n(8U(1t));1b 8V=\'<v:3L \'+id+\' 6F="f" 6E="t" 5s="0,0" 5r="\'+1U(95*f)+\',\'+1U(hh*f)+\'"\';1q(i=0;i<4d;i++){c=5d[1Z][1n.4w(i)];if(!c){39}o=0;1q(j=0;j<c.n;j++){if(1f(c.d[o])!="1n"){o++;39}p=c.d[o];o++;a=c.d[o];if(p=="m"){3l+=\' m \'+1U((x+a[0]*1Q*2h)*f)+\',\'+1U((y-a[1]*1Q)*f);o++}1i if(p=="q"){z=c.d[o-2];o++;b=c.d[o];k=qC(z[0],z[1],a[0],a[1],b[0],b[1]);3l+=\' c \'+1U((x+k[0]*1Q*2h)*f)+\',\'+1U((y-k[1]*1Q)*f)+\',\'+1U((x+k[2]*1Q*2h)*f)+\',\'+1U((y-k[3]*1Q)*f)+\',\'+1U((x+k[4]*1Q*2h)*f)+\',\'+1U((y-k[5]*1Q)*f);o++}1i if(p=="b"){o++;b=c.d[o];o++;z=c.d[o];3l+=\' c \'+1U((x+a[0]*1Q*2h)*f)+\',\'+1U((y-a[1]*1Q)*f)+\',\'+1U((x+a[0]*1Q*2h)*f)+\',\'+1U((y-a[1]*1Q)*f)+\',\'+1U((x+z[0]*1Q*2h)*f)+\',\'+1U((y-z[1]*1Q)*f);o++}1i if(p=="l"){3l+=\' l \'+1U((x+a[0]*1Q*2h)*f)+\',\'+1U((y-a[1]*1Q)*f);o++;2t(1f(c.d[o])!="1n"&&o<c.d.1l){a=c.d[o];3l+=\' l \'+1U((x+a[0]*1Q*2h)*f)+\',\'+1U((y-a[1]*1Q)*f);o++}}}x+=((c.w*2h)*1Q)+mx}8V+=\' 3l="\'+3l+\' e" 1v="3m:\'+3m+\';1G:2X;8u:8X;2v:\'+1p.2n(m6)+\'px;2b:\'+1p.2n(j4)+\'px;1o:\'+95+\'px;1C:\'+hh+\'px;"><v:2e 1j="\'+1j+\'" 2m="\'+2m+\'" 2C="\'+lw+\'" i6="0" k7="2n" l0="2n" /></v:3L>\';1d 8V}1c sJ(1t){1d 1t}1c 8U(1t){1t=1f(1t)!=\'1r\'?1t:12;1d 32*(1t/25)}1c 8Q(1n,1t,1o,2A,1Z){1t=1f(1t)!=\'1r\'?1t:12;1o=1T;2A=1T;1n=1f(1n)!=\'1r\'?1n:\' \';1Z="4a-4b";1b 4Y=0,4d=1n.1l,mg=1t/25.0,fw=1p.1x(1p.1w(1o,4s),10)/1T,sp=1p.1x(1p.1w(2A,3R),10)/1T,m=((mg*16*fw)*sp)-(mg*16*fw);1q(1b i=0;i<4d;i++){1b c=5d[1Z][1n.4w(i)];if(c)4Y+=((c.w*fw)*mg)+m}1d 4Y-(m)}1c ud(1n,1o,1t,5I,2A,1Z){1t=1f(1t)!=\'1r\'?1t:12;5I=1f(5I)!=\'1r\'?5I:1T;2A=1T;1n=1f(1n)!=\'1r\'?1n:\' \';1o=1T;1Z="4a-4b";1b 6U=0,4Y=0,4d=1n.1l,mg=1t/25.0,fw=1p.1x(1p.1w(5I,4s),10)/1T,sp=1p.1x(1p.1w(2A,3R),10)/1T,m=((mg*16*fw)*sp)-(mg*16*fw);1q(1b i=0;i<4d;i++){1b c=5d[1Z][1n.4w(i)];if(c){6U=((c.w*fw)*mg)+m;if((4Y+6U-(m))<=1o){4Y+=6U}1i{1F}}1i{1F}}1d 1n.2Y(0,i)}1c ug(2c,x,y,4L,6Y,5K){2c.8Y(x,y+4L,5K,6Y-4L);2c.8Y(x,y,5K,4L)}1c 8N(1n,x,y,1t,2C,1o,2A,1Z){1t=1f(1t)!=\'1r\'?1t:12;2C=1f(2C)!=\'1r\'?2C:1T;1o=1T;2A=1T;1Z="4a-4b";x=1f(x)!=\'1r\'?x:0;y=1f(y)!=\'1r\'?y+1t:0+1t;1n=1f(1n)!=\'1r\'?1n:\' \';1b i=0,j=0,a,b,z,c,p,o,4d=1n.1l,1Q=1t/25.0,6T=1p.1x(1p.1w(2C,4s),1)/40,2h=1p.1x(1p.1w(1o,4s),10)/1T;1b 6S=1p.1x(1p.1w(2A,3R),10)/1T,mx=((1Q*16*2h)*6S)-(1Q*16*2h),lw=1a.1R,ml=1a.4G,lj=1a.4I,lc=1a.3K;1a.1R=(6T*1Q);1a.4G=0;1a.4I="2n";1a.3K="2n";1q(i=0;i<4d;i++){c=5d[1Z][1n.4w(i)];if(!c){39}o=0;1a.2o();1q(j=0;j<c.n;j++){if(1f(c.d[o])!="1n"){o++;39}p=c.d[o];o++;a=c.d[o];if(p=="m"){1a.1H(x+a[0]*1Q*2h,y-a[1]*1Q);o++}1i if(p=="q"){o++;b=c.d[o];1a.a2(x+a[0]*1Q*2h,y-a[1]*1Q,x+b[0]*1Q*2h,y-b[1]*1Q);o++}1i if(p=="b"){o++;b=c.d[o];o++;z=c.d[o];1a.4m(x+a[0]*1Q*2h,y-a[1]*1Q,x+b[0]*1Q*2h,y-b[1]*1Q,x+z[0]*1Q*2h,y-z[1]*1Q);o++}1i if(p=="l"){1a.1u(x+a[0]*1Q*2h,y-a[1]*1Q);o++;2t(1f(c.d[o])!="1n"&&o<c.d.1l){a=c.d[o];1a.1u(x+a[0]*1Q*2h,y-a[1]*1Q);o++}}}1a.2e();x+=((c.w*2h)*1Q)+mx}1a.1R=lw;1a.4G=ml;1a.4I=lj;1a.3K=lc}1c tz(2c){if(1f 78==\'1r\'){2c.53=8N}}1c tv(2c){if(1f 2c.53==\'1c\'){1d 1B}1i{1d 1g}}if(1f 78!=\'1r\'){78.3j.53=8N}5d=29 3S();5d["4a-4b"]={\' \':{w:16,n:1,d:[]},\'!\':{w:10,n:4,d:[\'m\',[5,21],\'l\',[5,7],\'m\',[5,2],\'l\',[4,1],[5,0],[6,1],[5,2]]},\'"\':{w:14,n:4,d:[\'m\',[4,21],\'l\',[4,14],\'m\',[10,21],\'l\',[10,14]]},\'#\':{w:21,n:8,d:[\'m\',[11,25],\'l\',[4,-7],\'m\',[17,25],\'l\',[10,-7],\'m\',[4,12],\'l\',[18,12],\'m\',[3,6],\'l\',[17,6]]},\'$\':{w:20,n:12,d:[\'m\',[16,18],\'q\',[15,21],[10,21],\'q\',[5,21],[4,17],\'q\',[3,12],[7,11],\'l\',[13,10],\'q\',[18,9],[17,4],\'q\',[16,0],[10,0],\'q\',[4,0],[3,4],\'m\',[8,25],\'l\',[6,-4],\'m\',[14,25],\'l\',[12,-4]]},\'%\':{w:24,n:12,d:[\'m\',[21,21],\'l\',[3,0],\'m\',[7,21],\'q\',[3,21],[3,17],\'q\',[3,13],[7,13],\'q\',[11,13],[11,17],\'q\',[11,21],[7,21],\'m\',[17,8],\'q\',[13,8],[13,4],\'q\',[13,0],[17,0],\'q\',[21,0],[21,4],\'q\',[21,8],[17,8]]},\'&\':{w:26,n:14,d:[\'m\',[23,12],\'q\',[23,14],[22,14],\'q\',[20,14],[19,11],\'l\',[17,6],\'q\',[15,0],[9,0],\'q\',[3,0],[3,5],\'q\',[3,8],[7,10],\'l\',[12,13],\'q\',[14,15],[14,17],\'q\',[14,21],[11,21],\'q\',[8,21],[8,17],\'q\',[8,14],[12,8],\'q\',[17,0],[21,0],\'q\',[23,0],[23,2]]},\'\\\'\':{w:10,n:2,d:[\'m\',[5,19],\'l\',[4,20],[5,21],[6,20],[6,18],[5,16],[4,15]]},\'(\':{w:14,n:3,d:[\'m\',[11,25],\'q\',[4,19],[4,9],\'q\',[4,-1],[11,-7]]},\')\':{w:14,n:3,d:[\'m\',[3,25],\'q\',[10,19],[10,9],\'q\',[10,-1],[3,-7]]},\'*\':{w:16,n:6,d:[\'m\',[8,21],\'l\',[8,9],\'m\',[3,18],\'l\',[13,12],\'m\',[13,18],\'l\',[3,12]]},\'+\':{w:26,n:4,d:[\'m\',[13,18],\'l\',[13,0],\'m\',[4,9],\'l\',[22,9]]},\',\':{w:10,n:2,d:[\'m\',[6,1],\'l\',[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},\'-\':{w:26,n:2,d:[\'m\',[4,9],\'l\',[22,9]]},\'.\':{w:10,n:2,d:[\'m\',[5,2],\'l\',[4,1],[5,0],[6,1],[5,2]]},\'/\':{w:22,n:2,d:[\'m\',[20,25],\'l\',[2,-7]]},\'0\':{w:20,n:7,d:[\'m\',[10,21],\'q\',[3,21],[3,12],\'l\',[3,9],\'q\',[3,0],[10,0],\'q\',[17,0],[17,9],\'l\',[17,12],\'q\',[17,21],[10,21]]},\'1\':{w:20,n:3,d:[\'m\',[6,17],\'q\',[8,18],[11,21],\'l\',[11,0]]},\'2\':{w:20,n:5,d:[\'m\',[17,0],\'l\',[3,0],[13,10],\'q\',[16,13],[16,16],\'q\',[16,21],[10,21],\'q\',[4,21],[4,16]]},\'3\':{w:20,n:5,d:[\'m\',[5,21],\'l\',[16,21],[10,14],\'q\',[17,14],[17,7],\'q\',[17,0],[10,0],\'q\',[5,0],[3,4]]},\'4\':{w:20,n:2,d:[\'m\',[13,0],\'l\',[13,21],[3,7],[18,7]]},\'5\':{w:20,n:6,d:[\'m\',[15,21],\'l\',[5,21],[4,12],\'q\',[5,14],[10,14],\'q\',[17,14],[17,7],\'q\',[17,0],[10,0],\'q\',[5,0],[3,4]]},\'6\':{w:20,n:8,d:[\'m\',[16,18],\'q\',[15,21],[10,21],\'q\',[3,21],[3,12],\'l\',[3,7],\'q\',[3,0],[10,0],\'q\',[17,0],[17,7],\'q\',[17,13],[10,13],\'q\',[3,13],[3,7]]},\'7\':{w:20,n:2,d:[\'m\',[3,21],\'l\',[17,21],[7,0]]},\'8\':{w:20,n:9,d:[\'m\',[10,13],\'q\',[15,13],[15,17],\'q\',[15,21],[10,21],\'q\',[5,21],[5,17],\'q\',[5,13],[10,13],\'q\',[3,13],[3,7],\'q\',[3,0],[10,0],\'q\',[17,0],[17,7],\'q\',[17,13],[10,13]]},\'9\':{w:20,n:8,d:[\'m\',[17,14],\'q\',[17,8],[10,8],\'q\',[3,8],[3,14],\'q\',[3,21],[10,21],\'q\',[17,21],[17,14],\'l\',[17,9],\'q\',[17,0],[10,0],\'q\',[5,0],[4,3]]},\':\':{w:10,n:4,d:[\'m\',[5,14],\'l\',[4,13],[5,12],[6,13],[5,14],\'m\',[5,2],\'l\',[4,1],[5,0],[6,1],[5,2]]},\';\':{w:10,n:4,d:[\'m\',[5,14],\'l\',[4,13],[5,12],[6,13],[5,14],\'m\',[6,1],\'l\',[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},\'<\':{w:24,n:2,d:[\'m\',[20,18],\'l\',[4,9],[20,0]]},\'=\':{w:26,n:4,d:[\'m\',[4,12],\'l\',[22,12],\'m\',[4,6],\'l\',[22,6]]},\'>\':{w:24,n:2,d:[\'m\',[4,18],\'l\',[20,9],[4,0]]},\'?\':{w:18,n:8,d:[\'m\',[3,16],\'q\',[3,21],[9,21],\'q\',[15,21],[15,16],\'q\',[15,11],[10,11],\'q\',[9,11],[9,10],\'l\',[9,7],\'m\',[9,2],\'l\',[8,1],[9,0],[10,1],[9,2]]},\'@\':{w:27,n:17,d:[\'m\',[21,3],\'q\',[20,1],[14,0],\'l\',[13,0],\'q\',[4,1],[3,10],\'l\',[3,11],\'q\',[4,20],[13,21],\'l\',[14,21],\'q\',[23,20],[24,11],\'l\',[24,10],\'q\',[24,6],[20,6],\'q\',[17,6],[18,10],\'q\',[18,6],[13,6],\'q\',[8,6],[9,11],\'q\',[10,15],[14,15],\'q\',[19,15],[18,10],\'m\',[18,10],\'l\',[19,14]]},\'A\':{w:18,n:6,d:[\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'B\':{w:21,n:9,d:[\'m\',[4,11],\'l\',[12,11],\'m\',[13,0],\'l\',[4,0],[4,21],[12,21],\'q\',[17,21],[17,16],\'q\',[17,11],[12,11],\'q\',[18,11],[18,6],\'l\',[18,5],\'q\',[18,0],[13,0]]},\'C\':{w:21,n:7,d:[\'m\',[11,21],\'q\',[17,21],[18,16],\'m\',[18,5],\'q\',[17,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'D\':{w:21,n:5,d:[\'m\',[11,0],\'l\',[4,0],[4,21],[11,21],\'q\',[18,21],[18,12],\'l\',[18,9],\'q\',[18,0],[11,0]]},\'E\':{w:19,n:4,d:[\'m\',[17,21],\'l\',[4,21],[4,0],[17,0],\'m\',[4,11],\'l\',[12,11]]},\'F\':{w:18,n:4,d:[\'m\',[17,21],\'l\',[4,21],[4,0],\'m\',[4,11],\'l\',[12,11]]},\'G\':{w:21,n:8,d:[\'m\',[11,21],\'q\',[17,21],[18,16],\'m\',[13,8],\'l\',[18,8],[18,5],\'q\',[17,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'H\':{w:22,n:6,d:[\'m\',[4,21],\'l\',[4,0],\'m\',[18,21],\'l\',[18,0],\'m\',[4,11],\'l\',[18,11]]},\'I\':{w:8,n:2,d:[\'m\',[4,21],\'l\',[4,0]]},\'J\':{w:16,n:5,d:[\'m\',[12,21],\'l\',[12,5],\'q\',[12,0],[7,0],\'q\',[2,0],[2,5],\'l\',[2,7]]},\'K\':{w:21,n:6,d:[\'m\',[4,21],\'l\',[4,0],\'m\',[18,21],\'l\',[4,7],\'m\',[9,12],\'l\',[18,0]]},\'L\':{w:17,n:2,d:[\'m\',[4,21],\'l\',[4,0],[16,0]]},\'M\':{w:24,n:2,d:[\'m\',[4,0],\'l\',[4,21],[12,0],[20,21],[20,0]]},\'N\':{w:22,n:2,d:[\'m\',[4,0],\'l\',[4,21],[18,0],[18,21]]},\'O\':{w:22,n:7,d:[\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'P\':{w:21,n:6,d:[\'m\',[4,10],\'l\',[13,10],\'q\',[18,10],[18,15],\'l\',[18,16],\'q\',[18,21],[13,21],\'l\',[4,21],[4,0]]},\'Q\':{w:22,n:9,d:[\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21],\'m\',[12,4],\'l\',[18,-2]]},\'R\':{w:21,n:8,d:[\'m\',[4,10],\'l\',[13,10],\'q\',[18,10],[18,15],\'l\',[18,16],\'q\',[18,21],[13,21],\'l\',[4,21],[4,0],\'m\',[13,10],\'l\',[18,0]]},\'S\':{w:20,n:8,d:[\'m\',[16,18],\'q\',[15,21],[10,21],\'q\',[5,21],[4,17],\'q\',[3,12],[7,11],\'l\',[13,10],\'q\',[18,9],[17,4],\'q\',[16,0],[10,0],\'q\',[4,0],[3,4]]},\'T\':{w:16,n:4,d:[\'m\',[8,21],\'l\',[8,0],\'m\',[1,21],\'l\',[15,21]]},\'U\':{w:22,n:5,d:[\'m\',[4,21],\'l\',[4,6],\'q\',[4,0],[11,0],\'q\',[18,0],[18,6],\'l\',[18,21]]},\'V\':{w:18,n:2,d:[\'m\',[1,21],\'l\',[9,0],[17,21]]},\'W\':{w:24,n:2,d:[\'m\',[2,21],\'l\',[7,0],[12,21],[17,0],[22,21]]},\'X\':{w:20,n:4,d:[\'m\',[3,21],\'l\',[17,0],\'m\',[17,21],\'l\',[3,0]]},\'Y\':{w:18,n:4,d:[\'m\',[1,21],\'l\',[9,11],[17,21],\'m\',[9,11],\'l\',[9,0]]},\'Z\':{w:20,n:2,d:[\'m\',[3,21],\'l\',[17,21],[3,0],[17,0]]},\'[\':{w:14,n:2,d:[\'m\',[11,25],\'l\',[4,25],[4,-7],[11,-7]]},\'\\\\\':{w:14,n:2,d:[\'m\',[0,21],\'l\',[14,-3]]},\']\':{w:14,n:2,d:[\'m\',[3,25],\'l\',[10,25],[10,-7],[3,-7]]},\'^\':{w:16,n:2,d:[\'m\',[3,16],\'l\',[8,21],[13,16]]},\'4H\':{w:16,n:2,d:[\'m\',[0,-2],\'l\',[16,-2]]},\'`\':{w:10,n:2,d:[\'m\',[6,21],\'l\',[5,20],[4,18],[4,16],[5,15],[6,16],[5,17]]},\'a\':{w:19,n:10,d:[\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'b\':{w:19,n:10,d:[\'m\',[4,21],\'l\',[4,0],\'m\',[10,14],\'l\',[9,14],\'q\',[6,14],[4,12],\'m\',[4,2],\'q\',[6,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'c\':{w:18,n:10,d:[\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[15,11],\'q\',[14,14],[10,14]]},\'d\':{w:19,n:10,d:[\'m\',[15,21],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'e\':{w:18,n:8,d:[\'m\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[3,8],\'l\',[15,8],\'q\',[15,14],[9,14]]},\'f\':{w:12,n:5,d:[\'m\',[10,21],\'q\',[5,21],[5,17],\'l\',[5,0],\'m\',[2,14],\'l\',[9,14]]},\'g\':{w:19,n:12,d:[\'m\',[15,14],\'l\',[15,-2],\'q\',[15,-7],[10,-7],\'q\',[7,-7],[6,-6],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'h\':{w:19,n:6,d:[\'m\',[4,21],\'l\',[4,0],\'m\',[4,10],\'q\',[6,14],[11,14],\'q\',[15,14],[15,10],\'l\',[15,0]]},\'i\':{w:8,n:4,d:[\'m\',[3,21],\'l\',[4,20],[5,21],[4,22],[3,21],\'m\',[4,14],\'l\',[4,0]]},\'j\':{w:10,n:5,d:[\'m\',[5,21],\'l\',[6,20],[7,21],[6,22],[5,21],\'m\',[6,14],\'l\',[6,-3],\'q\',[6,-8],[1,-7]]},\'k\':{w:17,n:6,d:[\'m\',[4,21],\'l\',[4,0],\'m\',[14,14],\'l\',[4,4],\'m\',[8,8],\'l\',[15,0]]},\'l\':{w:8,n:2,d:[\'m\',[4,21],\'l\',[4,0]]},\'m\':{w:26,n:10,d:[\'m\',[4,14],\'l\',[4,0],\'m\',[4,10],\'q\',[6,14],[10,14],\'q\',[13,14],[13,10],\'l\',[13,0],\'m\',[13,10],\'q\',[15,14],[19,14],\'q\',[22,14],[22,10],\'l\',[22,0]]},\'n\':{w:19,n:6,d:[\'m\',[4,14],\'l\',[4,0],\'m\',[4,10],\'q\',[6,14],[11,14],\'q\',[15,14],[15,10],\'l\',[15,0]]},\'o\':{w:19,n:7,d:[\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'p\':{w:19,n:10,d:[\'m\',[4,14],\'l\',[4,-7],\'m\',[10,14],\'l\',[9,14],\'q\',[6,14],[4,12],\'m\',[4,2],\'q\',[6,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'q\':{w:19,n:10,d:[\'m\',[15,14],\'l\',[15,-7],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'r\':{w:13,n:4,d:[\'m\',[4,14],\'l\',[4,0],\'m\',[4,8],\'q\',[5,14],[12,14]]},\'s\':{w:16,n:7,d:[\'m\',[13,11],\'q\',[13,14],[8,14],\'q\',[3,14],[3,11],\'q\',[3,8],[8,7],\'q\',[13,6],[13,3],\'q\',[13,0],[8,0],\'q\',[3,0],[3,3]]},\'t\':{w:12,n:5,d:[\'m\',[5,21],\'l\',[5,4],\'q\',[5,-1],[10,0],\'m\',[2,14],\'l\',[9,14]]},\'u\':{w:19,n:6,d:[\'m\',[4,14],\'l\',[4,4],\'q\',[4,0],[8,0],\'q\',[13,0],[15,4],\'m\',[15,14],\'l\',[15,0]]},\'v\':{w:16,n:2,d:[\'m\',[2,14],\'l\',[8,0],[14,14]]},\'w\':{w:22,n:2,d:[\'m\',[3,14],\'l\',[7,0],[11,14],[15,0],[19,14]]},\'x\':{w:17,n:4,d:[\'m\',[3,14],\'l\',[14,0],\'m\',[14,14],\'l\',[3,0]]},\'y\':{w:16,n:5,d:[\'m\',[2,14],\'l\',[8,0],\'m\',[14,14],\'l\',[8,0],\'q\',[5,-7],[1,-7]]},\'z\':{w:17,n:2,d:[\'m\',[3,14],\'l\',[14,14],[3,0],[14,0]]},\'{\':{w:14,n:9,d:[\'m\',[9,25],\'q\',[5,24],[5,20],\'q\',[5,17],[7,16],\'q\',[9,15],[8,12],\'q\',[7,9],[4,9],\'q\',[7,9],[8,6],\'q\',[9,3],[7,2],\'q\',[5,1],[5,-2],\'q\',[5,-6],[9,-7]]},\'|\':{w:8,n:2,d:[\'m\',[4,25],\'l\',[4,-7]]},\'}\':{w:14,n:9,d:[\'m\',[5,25],\'q\',[9,24],[9,20],\'q\',[9,17],[7,16],\'q\',[5,15],[6,12],\'q\',[7,9],[10,9],\'q\',[7,9],[6,6],\'q\',[5,3],[7,2],\'q\',[9,1],[9,-2],\'q\',[9,-6],[5,-7]]},\'~\':{w:24,n:4,d:[\'m\',[3,6],\'q\',[3,12],[10,10],\'l\',[14,8],\'q\',[21,4],[21,10]]},\'�\':{w:16,n:1,d:[]},\'�\':{w:10,n:4,d:[\'m\',[5,10],\'l\',[5,-4],\'m\',[5,17],\'l\',[4,16],[5,15],[6,16],[5,17]]},\'�\':{w:18,n:14,d:[\'m\',[9,14],\'l\',[9,18],\'m\',[9,0],\'l\',[9,-4],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[15,11],\'q\',[14,14],[10,14]]},\'�\':{w:18,n:8,d:[\'m\',[4,11],\'l\',[13,11],\'m\',[16,18],\'q\',[15,21],[11,21],\'q\',[5,21],[6,16],\'q\',[7,8],[6,2],\'q\',[5,0],[4,0],\'l\',[16,0]]},\'�\':{w:19,n:13,d:[\'m\',[15,3],\'l\',[17,1],\'m\',[15,13],\'l\',[17,15],\'m\',[5,3],\'l\',[3,1],\'m\',[5,13],\'l\',[3,15],\'m\',[10,14],\'q\',[4,14],[4,8],\'q\',[4,2],[10,2],\'q\',[16,2],[16,8],\'q\',[16,14],[10,14]]},\'�\':{w:18,n:8,d:[\'m\',[4,7],\'l\',[14,7],\'m\',[4,11],\'l\',[14,11],\'m\',[1,21],\'l\',[9,11],[17,21],\'m\',[9,11],\'l\',[9,0]]},\'�\':{w:8,n:4,d:[\'m\',[4,25],\'l\',[4,12],\'m\',[4,6],\'l\',[4,-7]]},\'�\':{w:20,n:12,d:[\'m\',[16,18],\'q\',[16,21],[10,21],\'q\',[4,21],[4,18],\'q\',[4,15],[10,14],\'q\',[16,13],[16,10],\'q\',[16,6],[10,7],\'m\',[10,14],\'q\',[4,15],[4,11],\'q\',[4,8],[10,7],\'q\',[16,6],[16,3],\'q\',[16,0],[10,0],\'q\',[4,0],[4,3]]},\'�\':{w:16,n:4,d:[\'m\',[4,25],\'l\',[4,23],\'m\',[12,25],\'l\',[12,23]]},\'�\':{w:27,n:15,d:[\'m\',[18,13],\'q\',[17,15],[14,15],\'q\',[9,15],[9,11],\'l\',[9,10],\'q\',[9,6],[14,6],\'q\',[17,6],[18,8],\'m\',[24,10],\'q\',[24,0],[14,0],\'l\',[13,0],\'q\',[3,0],[3,10],\'l\',[3,11],\'q\',[3,21],[13,21],\'l\',[14,21],\'q\',[24,21],[24,11],\'l\',[24,10]]},\'�\':{w:14,n:9,d:[\'m\',[4,12],\'l\',[10,12],\'m\',[10,21],\'l\',[10,15],\'m\',[4,18],\'q\',[4,15],[7,15],\'q\',[10,15],[10,18],\'q\',[10,21],[7,21],\'q\',[4,21],[4,18]]},\'�\':{w:24,n:4,d:[\'m\',[12,16],\'l\',[3,9],[12,2],\'m\',[21,16],\'l\',[12,9],[21,2]]},\'�\':{w:22,n:2,d:[\'m\',[4,12],\'l\',[18,12],[18,8]]},\'�\':{w:22,n:2,d:[\'m\',[4,9],\'l\',[18,9]]},\'�\':{w:27,n:17,d:[\'m\',[9,6],\'l\',[9,15],[16,15],\'m\',[9,10],\'l\',[16,10],[18,6],\'m\',[16,10],\'q\',[18,10],[18,12],\'l\',[18,13],\'q\',[18,15],[16,15],\'m\',[24,10],\'q\',[24,0],[14,0],\'l\',[13,0],\'q\',[3,0],[3,10],\'l\',[3,11],\'q\',[3,21],[13,21],\'l\',[14,21],\'q\',[24,21],[24,11],\'l\',[24,10]]},\'�\':{w:16,n:2,d:[\'m\',[0,24],\'l\',[16,24]]},\'�\':{w:10,n:5,d:[\'m\',[3,23],\'q\',[3,21],[5,21],\'q\',[7,21],[7,23],\'q\',[7,25],[5,25],\'q\',[3,25],[3,23]]},\'�\':{w:22,n:6,d:[\'m\',[11,18],\'l\',[11,6],\'m\',[4,12],\'l\',[18,12],\'m\',[4,2],\'l\',[18,2]]},\'�\':{w:14,n:6,d:[\'m\',[10,11],\'l\',[4,11],\'q\',[4,15],[7,15],\'q\',[10,15],[10,18],\'q\',[10,21],[7,21],\'q\',[4,21],[4,18]]},\'�\':{w:14,n:5,d:[\'m\',[4,14],\'q\',[4,11],[7,11],\'q\',[10,11],[10,14],\'q\',[10,17],[7,17],\'l\',[10,21],[4,21]]},\'�\':{w:19,n:2,d:[\'m\',[9,18],\'l\',[12,20]]},\'�\':{w:19,n:7,d:[\'m\',[4,14],\'l\',[4,-6],\'m\',[4,4],\'q\',[4,0],[8,0],\'q\',[13,0],[15,4],\'m\',[15,14],\'l\',[15,0]]},\'�\':{w:18,n:5,d:[\'m\',[8,11],\'q\',[3,11],[3,16],\'q\',[3,21],[9,21],\'m\',[9,0],\'l\',[9,21],[15,21],[15,0]]},\'�\':{w:10,n:2,d:[\'m\',[5,14],\'l\',[4,13],[5,12],[6,13],[5,14]]},\'�\':{w:18,n:2,d:[\'m\',[10,0],\'l\',[10,-2],[7,-4]]},\'�\':{w:10,n:2,d:[\'m\',[4,19],\'l\',[6,21],[6,11]]},\'�\':{w:14,n:7,d:[\'m\',[4,12],\'l\',[10,12],\'m\',[4,18],\'q\',[4,15],[7,15],\'q\',[10,15],[10,18],\'q\',[10,21],[7,21],\'q\',[4,21],[4,18]]},\'�\':{w:24,n:4,d:[\'m\',[3,16],\'l\',[12,9],[3,2],\'m\',[12,16],\'l\',[21,9],[12,2]]},\'�\':{w:24,n:6,d:[\'m\',[4,19],\'l\',[6,21],[6,11],\'m\',[16,15],\'l\',[6,5],\'m\',[19,0],\'l\',[19,10],[14,4],[20,4]]},\'�\':{w:24,n:10,d:[\'m\',[4,19],\'l\',[6,21],[6,11],\'m\',[16,15],\'l\',[6,5],\'m\',[20,0],\'l\',[14,0],\'q\',[14,4],[17,4],\'q\',[20,4],[20,7],\'q\',[20,10],[17,10],\'q\',[14,10],[14,7]]},\'�\':{w:24,n:10,d:[\'m\',[4,14],\'q\',[4,11],[7,11],\'q\',[10,11],[10,14],\'q\',[10,17],[7,17],\'l\',[10,21],[4,21],\'m\',[18,15],\'l\',[8,5],\'m\',[19,0],\'l\',[19,10],[14,4],[20,4]]},\'�\':{w:18,n:7,d:[\'m\',[9,21],\'l\',[8,20],[9,19],[10,20],[9,21],\'m\',[9,14],\'l\',[9,10],\'q\',[3,10],[3,5],\'q\',[3,0],[9,0],\'q\',[15,0],[15,5]]},\'�\':{w:18,n:6,d:[\'m\',[7,25],\'l\',[10,23],\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'�\':{w:18,n:6,d:[\'m\',[8,23],\'l\',[11,25],\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'�\':{w:18,n:6,d:[\'m\',[7,23],\'l\',[9,25],[11,23],\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'�\':{w:18,n:6,d:[\'m\',[6,23],\'l\',[8,25],[10,23],[12,25],\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'�\':{w:18,n:10,d:[\'m\',[5,25],\'l\',[5,23],\'m\',[13,25],\'l\',[13,23],\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'�\':{w:18,n:10,d:[\'m\',[7,23],\'q\',[7,21],[9,21],\'q\',[11,21],[11,23],\'q\',[11,25],[9,25],\'q\',[7,25],[7,23],\'m\',[1,0],\'l\',[9,21],[17,0],\'m\',[4,7],\'l\',[14,7]]},\'�\':{w:18,n:12,d:[\'m\',[9,21],\'l\',[1,0],\'m\',[4,7],\'l\',[9,7],\'m\',[9,21],\'l\',[9,0],\'m\',[9,21],\'l\',[17,21],\'m\',[9,11],\'l\',[17,11],\'m\',[9,0],\'l\',[17,0]]},\'�\':{w:21,n:9,d:[\'m\',[11,0],\'l\',[11,-2],[8,-4],\'m\',[11,21],\'q\',[17,21],[18,16],\'m\',[18,5],\'q\',[17,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:19,n:8,d:[\'m\',[7,25],\'l\',[10,23],\'m\',[17,21],\'l\',[4,21],[4,0],[17,0],\'m\',[4,11],\'l\',[12,11]]},\'�\':{w:19,n:8,d:[\'m\',[9,23],\'l\',[12,25],\'m\',[17,21],\'l\',[4,21],[4,0],[17,0],\'m\',[4,11],\'l\',[12,11]]},\'�\':{w:19,n:8,d:[\'m\',[8,23],\'l\',[10,25],[12,23],\'m\',[17,21],\'l\',[4,21],[4,0],[17,0],\'m\',[4,11],\'l\',[12,11]]},\'�\':{w:19,n:10,d:[\'m\',[6,25],\'l\',[6,23],\'m\',[15,25],\'l\',[15,23],\'m\',[17,21],\'l\',[4,21],[4,0],[17,0],\'m\',[4,11],\'l\',[12,11]]},\'�\':{w:8,n:4,d:[\'m\',[3,25],\'l\',[6,23],\'m\',[4,21],\'l\',[4,0]]},\'�\':{w:8,n:4,d:[\'m\',[2,23],\'l\',[5,25],\'m\',[4,21],\'l\',[4,0]]},\'�\':{w:8,n:4,d:[\'m\',[2,23],\'l\',[4,25],[6,23],\'m\',[4,21],\'l\',[4,0]]},\'�\':{w:8,n:6,d:[\'m\',[2,25],\'l\',[2,23],\'m\',[6,25],\'l\',[6,23],\'m\',[4,21],\'l\',[4,0]]},\'�\':{w:21,n:7,d:[\'m\',[2,10],\'l\',[11,10],\'m\',[11,0],\'l\',[4,0],[4,21],[11,21],\'q\',[18,21],[18,12],\'l\',[18,9],\'q\',[18,0],[11,0]]},\'�\':{w:22,n:4,d:[\'m\',[8,23],\'l\',[10,25],[12,23],[14,25],\'m\',[4,0],\'l\',[4,21],[18,0],[18,21]]},\'�\':{w:22,n:9,d:[\'m\',[8,25],\'l\',[11,23],\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:22,n:9,d:[\'m\',[10,23],\'l\',[13,25],\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:22,n:9,d:[\'m\',[9,23],\'l\',[11,25],[13,23],\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:22,n:9,d:[\'m\',[8,23],\'l\',[10,25],[12,23],[14,25],\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:22,n:13,d:[\'m\',[6,25],\'l\',[6,23],\'m\',[16,25],\'l\',[16,23],\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:12,n:4,d:[\'m\',[2,16],\'l\',[10,6],\'m\',[10,16],\'l\',[2,6]]},\'�\':{w:22,n:9,d:[\'m\',[3,1],\'l\',[19,20],\'m\',[11,21],\'q\',[19,21],[19,12],\'l\',[19,9],\'q\',[19,0],[11,0],\'q\',[3,0],[3,9],\'l\',[3,12],\'q\',[3,21],[11,21]]},\'�\':{w:22,n:7,d:[\'m\',[8,25],\'l\',[11,23],\'m\',[4,21],\'l\',[4,6],\'q\',[4,0],[11,0],\'q\',[18,0],[18,6],\'l\',[18,21]]},\'�\':{w:22,n:7,d:[\'m\',[10,23],\'l\',[13,25],\'m\',[4,21],\'l\',[4,6],\'q\',[4,0],[11,0],\'q\',[18,0],[18,6],\'l\',[18,21]]},\'�\':{w:22,n:7,d:[\'m\',[9,23],\'l\',[11,25],[13,23],\'m\',[4,21],\'l\',[4,6],\'q\',[4,0],[11,0],\'q\',[18,0],[18,6],\'l\',[18,21]]},\'�\':{w:22,n:9,d:[\'m\',[7,25],\'l\',[7,23],\'m\',[15,25],\'l\',[15,23],\'m\',[4,21],\'l\',[4,6],\'q\',[4,0],[11,0],\'q\',[18,0],[18,6],\'l\',[18,21]]},\'�\':{w:18,n:6,d:[\'m\',[8,23],\'l\',[11,25],\'m\',[1,21],\'l\',[9,11],[9,0],\'m\',[17,21],\'l\',[9,11]]},\'�\':{w:19,n:7,d:[\'m\',[4,18],\'l\',[4,-5],\'m\',[4,14],\'l\',[9,14],\'q\',[16,14],[16,7],\'q\',[16,0],[9,0],\'l\',[4,0]]},\'�\':{w:21,n:9,d:[\'m\',[8,0],\'l\',[11,0],\'q\',[17,0],[17,5],\'l\',[17,6],\'q\',[17,10],[11,12],\'q\',[16,13],[16,16],\'q\',[16,21],[10,21],\'q\',[4,21],[4,16],\'l\',[4,0]]},\'�\':{w:19,n:12,d:[\'m\',[7,20],\'l\',[10,18],\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'�\':{w:19,n:12,d:[\'m\',[9,18],\'l\',[12,20],\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'�\':{w:19,n:12,d:[\'m\',[7,18],\'l\',[9,20],[11,18],\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'�\':{w:19,n:12,d:[\'m\',[7,18],\'l\',[9,20],[11,18],[13,20],\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'�\':{w:19,n:14,d:[\'m\',[4,20],\'l\',[4,18],\'m\',[15,20],\'l\',[15,18],\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'�\':{w:19,n:15,d:[\'m\',[7,18],\'q\',[7,16],[9,16],\'q\',[11,16],[11,18],\'q\',[11,20],[9,20],\'q\',[7,20],[7,18],\'m\',[15,14],\'l\',[15,0],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[13,0],[15,2],\'m\',[15,12],\'q\',[13,14],[10,14]]},\'�\':{w:21,n:10,d:[\'m\',[11,14],\'l\',[11,0],\'m\',[11,8],\'l\',[18,8],\'q\',[18,14],[12,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[13,0],\'q\',[17,0],[18,3]]},\'�\':{w:18,n:10,d:[\'m\',[10,0],\'l\',[10,-2],[7,-4],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[15,11],\'q\',[14,14],[10,14]]},\'�\':{w:18,n:10,d:[\'m\',[7,20],\'l\',[10,18],\'m\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[3,8],\'l\',[15,8],\'q\',[15,14],[9,14]]},\'�\':{w:18,n:10,d:[\'m\',[9,18],\'l\',[12,20],\'m\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[3,8],\'l\',[15,8],\'q\',[15,14],[9,14]]},\'�\':{w:18,n:10,d:[\'m\',[7,18],\'l\',[9,20],[11,18],\'m\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[3,8],\'l\',[15,8],\'q\',[15,14],[9,14]]},\'�\':{w:18,n:12,d:[\'m\',[4,20],\'l\',[4,18],\'m\',[15,20],\'l\',[15,18],\'m\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[14,0],[15,3],\'m\',[3,8],\'l\',[15,8],\'q\',[15,14],[9,14]]},\'�\':{w:8,n:4,d:[\'m\',[3,20],\'l\',[6,18],\'m\',[4,14],\'l\',[4,0]]},\'�\':{w:8,n:4,d:[\'m\',[2,18],\'l\',[5,20],\'m\',[4,14],\'l\',[4,0]]},\'�\':{w:8,n:4,d:[\'m\',[2,18],\'l\',[4,20],[6,18],\'m\',[4,14],\'l\',[4,0]]},\'�\':{w:8,n:6,d:[\'m\',[2,20],\'l\',[2,18],\'m\',[6,20],\'l\',[6,18],\'m\',[4,14],\'l\',[4,0]]},\'�\':{w:19,n:12,d:[\'m\',[8,17],\'l\',[10,21],\'m\',[7,20],\'l\',[11,18],\'q\',[16,16],[16,8],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:19,n:8,d:[\'m\',[7,18],\'l\',[9,20],[11,18],[13,20],\'m\',[4,14],\'l\',[4,0],\'m\',[4,10],\'q\',[6,14],[11,14],\'q\',[15,14],[15,10],\'l\',[15,0]]},\'�\':{w:19,n:9,d:[\'m\',[7,20],\'l\',[10,18],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:19,n:9,d:[\'m\',[9,18],\'l\',[12,20],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:19,n:9,d:[\'m\',[7,18],\'l\',[9,20],[11,18],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:19,n:9,d:[\'m\',[7,18],\'l\',[9,20],[11,18],[13,20],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:19,n:11,d:[\'m\',[4,20],\'l\',[4,18],\'m\',[15,20],\'l\',[15,18],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:18,n:6,d:[\'m\',[9,15],\'l\',[9,14],\'m\',[4,9],\'l\',[14,9],\'m\',[9,4],\'l\',[9,3]]},\'�\':{w:19,n:9,d:[\'m\',[3,1],\'l\',[15,14],\'m\',[10,14],\'l\',[9,14],\'q\',[3,14],[3,7],\'q\',[3,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:19,n:8,d:[\'m\',[7,20],\'l\',[10,18],\'m\',[4,14],\'l\',[4,4],\'q\',[4,0],[8,0],\'q\',[13,0],[15,4],\'m\',[15,14],\'l\',[15,0]]},\'�\':{w:19,n:8,d:[\'m\',[9,18],\'l\',[12,20],\'m\',[4,14],\'l\',[4,4],\'q\',[4,0],[8,0],\'q\',[13,0],[15,4],\'m\',[15,14],\'l\',[15,0]]},\'�\':{w:19,n:8,d:[\'m\',[7,18],\'l\',[9,20],[11,18],\'m\',[4,14],\'l\',[4,4],\'q\',[4,0],[8,0],\'q\',[13,0],[15,4],\'m\',[15,14],\'l\',[15,0]]},\'�\':{w:19,n:10,d:[\'m\',[4,20],\'l\',[4,18],\'m\',[15,20],\'l\',[15,18],\'m\',[4,14],\'l\',[4,4],\'q\',[4,0],[8,0],\'q\',[13,0],[15,4],\'m\',[15,14],\'l\',[15,0]]},\'�\':{w:16,n:7,d:[\'m\',[7,18],\'l\',[10,20],\'m\',[2,14],\'l\',[8,0],\'m\',[14,14],\'l\',[8,0],\'q\',[5,-7],[1,-7]]},\'�\':{w:19,n:10,d:[\'m\',[4,21],\'l\',[4,-7],\'m\',[10,14],\'l\',[9,14],\'q\',[6,14],[4,12],\'m\',[4,2],\'q\',[6,0],[9,0],\'l\',[10,0],\'q\',[16,0],[16,7],\'q\',[16,14],[10,14]]},\'�\':{w:16,n:9,d:[\'m\',[2,20],\'l\',[2,18],\'m\',[14,20],\'l\',[14,18],\'m\',[2,14],\'l\',[8,0],\'m\',[14,14],\'l\',[8,0],\'q\',[5,-7],[1,-7]]}}}if(!1a.2F){1a.2F={}}(1c(){1c f(n){1d n<10?\'0\'+n:n}if(1f aV.3j.4D!==\'1c\'){aV.3j.4D=1c(3C){1d 4j(1a.b0())?1a.v8()+\'-\'+f(1a.v0()+1)+\'-\'+f(1a.vl())+\'T\'+f(1a.vk())+\':\'+f(1a.vh())+\':\'+f(1a.uI())+\'Z\':1k};1J.3j.4D=1E.3j.4D=uA.3j.4D=1c(3C){1d 1a.b0()}}1b cx=/[\\uz\\aM\\aN-\\aQ\\aR\\aO\\ch\\c7-\\c8\\d4-\\d1\\d2-\\c6\\b6\\b4-\\c1]/g,6u=/[\\\\\\"\\uD-\\uM\\uV-\\uZ\\aM\\aN-\\aQ\\aR\\aO\\ch\\c7-\\c8\\d4-\\d1\\d2-\\c6\\b6\\b4-\\c1]/g,36,5D,c5={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'},49;1c 6o(1n){6u.aj=0;1d 6u.3b(1n)?\'"\'+1n.2R(6u,1c(a){1b c=c5[a];1d 1f c===\'1n\'?c:\'\\\\u\'+(\'am\'+a.5Q(0).5e(16)).5a(-4)})+\'"\':\'"\'+1n+\'"\'}1c 3v(3C,5g){1b i,k,v,1l,5t=36,3t,1K=5g[3C];if(1K&&1f 1K===\'4c\'&&1f 1K.4D===\'1c\'){1K=1K.4D(3C)}if(1f 49===\'1c\'){1K=49.48(5g,3C,1K)}2s(1f 1K){1A\'1n\':1d 6o(1K);1A\'1h\':1d 4j(1K)?1J(1K):\'1k\';1A\'1W\':1A\'1k\':1d 1J(1K);1A\'4c\':if(!1K){1d\'1k\'}36+=5D;3t=[];if(6f.3j.5e.b9(1K)===\'[4c 3S]\'){1l=1K.1l;1q(i=0;i<1l;i+=1){3t[i]=3v(i,1K)||\'1k\'}v=3t.1l===0?\'[]\':36?\'[\\n\'+36+3t.3e(\',\\n\'+36)+\'\\n\'+5t+\']\':\'[\'+3t.3e(\',\')+\']\';36=5t;1d v}if(49&&1f 49===\'4c\'){1l=49.1l;1q(i=0;i<1l;i+=1){k=49[i];if(1f k===\'1n\'){v=3v(k,1K);if(v){3t.1s(6o(k)+(36?\': \':\':\')+v)}}}}1i{1q(k in 1K){if(6f.af.48(1K,k)){v=3v(k,1K);if(v){3t.1s(6o(k)+(36?\': \':\':\')+v)}}}}v=3t.1l===0?\'{}\':36?\'{\\n\'+36+3t.3e(\',\\n\'+36)+\'\\n\'+5t+\'}\':\'{\'+3t.3e(\',\')+\'}\';36=5t;1d v}}if(1f 2F.8G!==\'1c\'){2F.8G=1c(1K,55,2A){1b i;36=\'\';5D=\'\';if(1f 2A===\'1h\'){1q(i=0;i<2A;i+=1){5D+=\' \'}}1i if(1f 2A===\'1n\'){5D=2A}49=55;if(55&&1f 55!==\'1c\'&&(1f 55!==\'4c\'||1f 55.1l!==\'1h\')){6i 29 6A(\'2F.8G\')}1d 3v(\'\',{\'\':1K})}}if(1f 2F.5X!==\'1c\'){2F.5X=1c(1O,8M){1b j;1c 8Z(5g,3C){1b k,v,1K=5g[3C];if(1K&&1f 1K===\'4c\'){1q(k in 1K){if(6f.af.48(1K,k)){v=8Z(1K,k);if(v!==1r){1K[k]=v}1i{ag 1K[k]}}}}1d 8M.48(5g,3C,1K)}cx.aj=0;if(cx.3b(1O)){1O=1O.2R(cx,1c(a){1d\'\\\\u\'+(\'am\'+a.5Q(0).5e(16)).5a(-4)})}if(/^[\\],:{}\\s]*$/.3b(1O.2R(/\\\\(?:["\\\\\\/vZ]|u[0-9a-fA-F]{4})/g,\'@\').2R(/"[^"\\\\\\n\\r]*"|1B|1g|1k|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\']\').2R(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=4k(\'(\'+1O+\')\');1d 1f 8M===\'1c\'?8Z({\'\':j},\'\'):j}6i 29 vE(\'2F.5X\')}}}());',62,1985,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|var|function|return||typeof|false|number|else|color|null|length|coords|string|width|Math|for|undefined|push|size|lineTo|style|min|max|JSChart|canvas|case|true|height|data|Number|break|position|moveTo|must|String|value|line|start|fillStyle|text|strokeStyle|mag|lineWidth|align|100|parseInt|index|boolean|PI|document|font|||||||||contextPrototype|new|_invalidColor|left|ctx||stroke|type|abs|faw|expand|bar|lineStr|image|opacity|round|beginPath|createElement|floor|arguments|switch|while|label|top|default|m_|fontsize|appendChild|space|name|weight|fontSize|getCoords_|JSON|cos|setAttribute|auto|substr|_fontSizeNotNumber|setTimeout|map|_fontFamilyNotString|gradient|g_vml_|getAttribute|replace|paddingTop|pie|fill|not|toFixed|absolute|substring|rotate||doc||values|styleString|closePath|gap|alert|offset|continue|toLowerCase|test|_paddingNotNumber|zIndex|join|currentPath_|err|paddingLeft|_alignNotBoolean|prototype|getContext|path|rotation|RegExp|alpha|callback|textAlign|innerHTML|right|partial|paddingRight|str|computedStyle|indexOf|paddingBottom|src|firstChild|getElementById|key||angle|restore|_opacityNotNumber|pow|save|element_|lineCap|shape|cp1|textMeasureEl_|aWidth|aHeight|the|1000|Array|childNodes|offsetLeft|set|lastIndexOf|sin|code|setting||translate|XML|180|offsetTop||ceil|Invalid|call|rep|sans|serif|object|len|div|__all__|offsetY|img|offsetX|isFinite|eval|stops|bezierCurveTo|prefix|namespaces|attrs|globalAlpha|tagName|400|arc|Z2|show|charAt|and|rows|border|split|cp2|aRadius|toJSON|arcScaleX_|arcScaleY_|miterLimit|_|lineJoin|textBaseline|CanvasGradient_|baseline|arcScaleY|arcScaleX|runtimeStyle|matrixMultiply|vmlStr|radius|filter|scale|surfaceElement|setM|xStart|200|total|currentX_||currentY_|possible|strokeText|family|replacer|Pie|DEFAULT_STYLE|resize|numbers|slice|specified|Tooltip|strokeFont|toString|format|holder|usestring|Axis|_valuesDecimalsNotNumber|catch|try|display|fontStyle|y0_|All|x0_|coordsize|coordorigin|mind|repeat|repetition|than|xEnd|lineScale_|attachEvent|isNaN|initElement|aColor|indent|Chart|userAgent|_paddingTooMuch|maxWidth|fontwidth|1px|linewidth|navigator|center|none|canvasFontSize|with|charCodeAt|fillRect|_intervalNotNumber|focus|777|_idNotString|throwException|parse|chart|missing|Empty|newValue|aStack_|createMatrixIdentity||colorset|G_vmlCanvasManager|optionset|CanvasRenderingContext2D_|Graph|padding|This|used|insertAdjacentHTML|option|Object|_xmlUnexpectedFormat|have|throw|You|delta|reverse|_extendNotBoolean|which|quote|_xmlMalformedData|m11|_legendTextNotString|_xmlFileNotLoaded|click|escapable|x1_|m21|m22|y1_|processStyle|Error|m12|array|aY0|stroked|filled|nodeValue|aX0|guts|sum|aX1|yStart|yEnd|aFill|0x|aY1|VML|concat|spc|fac|cur|hidden|clientWidth|clientHeight|lineheight|self|variant|fontStyleCache|oldPath|match|square||host||CanvasRenderingContext2D|opera|colors|instanceof|DOMException_|CanvasPattern_|shift|_axisNameNotString|aClockwise|aEndAngle|No|aStartAngle|00001|title|colorize|setLabelX|end|_noData|opacity2|elementStyle|pStart|_pieUnitsOffsetNotNumber|_valuesShowNotBoolean|_axisSuffixNotString|appendStroke|dimension|between|appendFill|_axisPrefixNotString|000|_sizeNotNumber|_radiusNotNumber|suffix|_axisValuesNotNumber|10px|clearRect|_invalidLabel|sqrt|window|expansion|_invalidBarNumber|Microsoft|addNamespacesAndStylesheet|getElementsByTagName|els|0xFF|0xFFFF|aRot|Bar|_legendNotBoolean|axis|Flag|interval|tooltip||normal|result|dec2hex|g_o_|pEnd|_depthNotNumber|__custom__|_speedNotNumber||stop|attributes|mStack_|Legend|Malformed|copyState|color2|message|DIV|removeChild|wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw|gif|base64|com|CANVAS|r1_|r0_|type_|colors_|_flag|margin|circle|999|fff|3E90C9|add|microsoft|schemas|urn|rect|_over|visibility|stringify|G_vmlCanvasManager_|map_|group|unit|beforeEnd|reviver|do_drawText|encodeHtmlAttribute|SUB|get_textWidth|measureText|drawText_|fillText|get_textHeight|out|10000|0px|strokeRect|walk||clip|R0lGODlhAQABAIAAAP|arial|ownerDocument|ww|Input|512|_tooltipFontNotString|Bars||_tooltipOffsetNotNumber|_invalidValueFormat|_tooltipPositionNotString|0xF|_tooltipPaddingNotString|_autoid_|_tooltipPositionWrong|_tooltipBorderNotString|_noName|_titleNotString|_noCanvasSupport|setLineSpeed|aCP2y|aCP2x|aCP1y|_titlePositionNotString|_invalidTooltip|addEventListener|_invalidFunction|_invalidIntervalX|aCP1x|overflow|_invalidIntervalY|fromCharCode|shadowOffsetX|shadowOffsetY|rgb|shadowColor|init|01|shadowBlur|www|element|random|fontFamily|diamond|tooltip_|triangle|parseFloat|srcElement|ex_canvas_|backgroundColor|scrollHeight|office|hash|context_|obj|opt_doc|butt|onPropertyChange|onResize|scrollWidth|bind|quadraticCurveTo|init_|setBarSpeed|_3dNotBoolean|_invalidArea|_notPie|_notEnoughData|setIntervalEndY|setIntervalStartX|_reverseNotBoolean|setIntervalStartY|setIntervalEndX|_notBars|hasOwnProperty|delete|_xmlMalformedColor|_xmlMalformedOption|lastIndex|_colorNotArray|_colorLength|0000||959595|_barSpacingRatioNotNumber|_barValuesNotBoolean|_barBorderWidthNotNumber|_errorsNotBoolean||_barValuesPrefixNotString|_dataNotArray|_dataWrongFormat|_barValuesSuffixNotString|_prefixNotString|_flagOffsetNotNumber|_userLabelPositionWrong|_userLabelPositionNotString|_gridNotBoolean|_axisValuesAngleNotNumber|_userLabelNotString|_axisWidthNotNumber|_backgroundImageNotString|_flagWidthNotNumber|_flagShapeNotString|_piePositionNotNumber|Title|C4C4C4|u00ad|u0600|u17b4|_invalidPieAngle|u0604|u070f|units|setShowXValues|_pieValuesSuffixNotString|Date|_noType|||_pieValuesPrefixNotString|valueOf|coordinates|C6C6C6|The|ufff0|_invalidLegendPosition|ufeff|_xmlEmptyData|_xmlEmptyType|apply|||||||||||||||||||||||||||||||||||||||||||||||||||||loaded|uffff||||meta|u206f|u200c|u200f|Wrong||||||||u17b5|||||||||||||||||||||||||||||||||||||||||||||are|u202f|u2060|_lineWidthNotNumber|u2028|vml|open|wa|currentStyle|deltaLeft|||||||||||||||deltaTop||||||||||||||||||||||||||||||||||||||TYPE_MISMATCH_ERR|processFontStyle|getComputedStyle|log|dataset|buildStyle|background|oldRuntimeHeight|invalid|y0|||||||||||||||||||||||||||||||||||||||||||||||||||||oldRuntimeWidth|ActiveXObject|opacity1|XMLHttpRequest|processLineCap|async|x0|url|xml|SYNTAX_ERR|||||||||||||||||||||||||||||||||||||||||||||||||||||det|cloneNode|determine|pop|matrixIsFinite|updateLineScale|since|assertImageIsValid|ticks|repetition_|||||||||||||||src_||||||||||||||||||||||||||||||||||||||parentNode|get_strokeText||cp2x|cp1y|CPy|cp2y|close|INVALID_STATE_ERR|Can|||||||||||||||||||||||||||||||||||||||||||||||||||||automatically|aOffset|cp1x|CPx|aType|onerror|miterlimit|GET|SetAutoMax|setRequestHeader|||||||||||||||||||||||||||||||||||||||||||||||||||||cs1|arcType|send|json|xx|cs2|Content|Type|SetAutoMin|maximum|||||||||||||||||||||||||||||||||||||||||||||||||||||larger|datasets|version|aCPx|aCPy|createStyleSheet|05|endcap|skewM|skewOffset|||||||||||||||||||||||||||||||||||||||||||||||||||||joinstyle|smaller|alphabetic|direction|fontStyleString|y1|textpath|000000|miminum|aR1||||aR0|||||||||||||||||||||||||||||||||||||||||||||||||x1|||color1|span|var_args|yy|b1e467|4390d3|Unexpected|||||||||||||||||||||||||||||||||||||||||||||||5f5ab5|_xmlEmptyName|f06eaa|colorizeBars|clearLabelsY|clearLabelsX|f00|aa83d5|clearTooltips|a186be|DOMParser|settings|9e0b0f|clearLabels|736357|parseFromString|File|363636|003663|responseXML||_tooltipIdNotNumber|32004b|_xmlEmptyKey|load|abc|7b0046|graph|malformed|loadXML||trigger_legend_|900150983cd24fb0d6963f7d28e17f72|Decimals|998675|Speed|0054a6|6b786e5a796561706c4657566b5a525552462f50484b456f306550556c4251774657666a30416751474668495949675546645846776f2f5864654a69596b68612f703064757a596763666a6f61696f6950543064413773333839626d7a656a4b417131762f6b4e4b353535686e7354456f6949694c675a4e4d6b4746377a6448506d6b41594378305a6b737a3139505974543941507a3179676d327432396b35346b3341526a6d474d467a633337484c7863655a3256424e533537424144626a72364358777665456a524a6b6a6833376877656a7765667a34656d61596969794f4a4669326873624d517744436f714b6d672b6349437a6e7865303936656c30583773474f3374375a53576c4e445132456866587838744c533330397661536b5a354f526b5947567a77653675727147444e6d444c4778735451334e33505050666451586c5a475631635842773865784f6c30686a7a2b336f514546455768707261576d544e6e6f716f71697149514668374f2f327a64476970794136724b6878392b794b584c6c304f6732354a4c2b64473150744d434f73377649796f736e75484f4f47544a6754383477496e754a7435735773624667573436757666675533754a436b2f414b5563673278537571723263766e53494c522b745a752b7057757a7933354b494b4548765351652b626a757959714f727134757336644f353074754c4b496f7357627959317259326d707161794d334e5a63574b466678383354714f486a324b4b49714d48547332564c52716d735948483378415445774d555646523950663344784832752b2b536d35744c793847445448336f4958355858382b564b31655938754344504c74364e57397433737975336274446f466d576864506849437372693250743757526c5a564662573476483477476775626b5a5552544a7a7337475058382b5033763156547765443549303145414a4e307044756a6d55526150446f6e485a4939454d503563487a6d4e596f4e6a417345414e517268444a736f566a30325555665642504c344c71446f3331576733536b4f61706845664830392b666a36425149434f||790000|Values|0x6c6f636174696|setAxisValuesPaddingLeft|setAxisValuesPrefixX|setAxisValuesPaddingBottom|005e20|00a651|setAxisValuesSuffixY|setAxisWidth|setAxisValuesSuffixX|setAxisValuesPrefixY|fff200|setAxisValuesNumberY|setAxisValuesFontFamily|setAxisValuesFontFamilyX|setAxisValuesDecimalsY|setAxisValuesDecimals|setAxisValuesDecimalsX|setAxisValuesFontSizeY|setAxisValuesNumberX|setAxisValuesFontSizeX|setAxisValuesFontFamilyY|setAxisValuesFontSize|setBackgroundColor|setBarValuesPrefix|setBarValuesSuffix|setBarValuesFontSize|setBarValuesDecimals|setBarValuesFontFamily|||JSChart_|0123456789abcdef|setDataArray|setCanvasIdPrefix|ed1c24|setBarValuesColor|setBarColor|setBarDepth|setBarBorderWidth|setBackgroundImage|setBarBorderColor|005||setBarValues|IntAutoScale|setBarOpacity|setBarSpacingRatio|setAxisAlignLastY|setAxisColor|setAxisAlignLastX||setAxisAlignFirstX|setAxisAlignFirstY|setAxisNameFontFamily||setAxisNameFontFamilyX|setAxisNameColorY|setAxisNameColor|setAxisNameColorX|662d91|197b30|getDataIds|draw|colorizePie|8dc63f|setAxisAlignX|setAxisAlignY|setArea|8c6239|set3D|setAxisNameFontFamilyY|AutoScale|2e3192|setAxisReversed|setAxisPaddingTop|ec008c|setAxisValuesColorX|setAxisValuesColorY|setAxisValuesColor|clearTimeout|setAxisValuesAngle|setAxisPaddingRight|setAxisNameFontSizeY|setAxisNameX|00aeef|setAxisNameFontSize|setAxisNameFontSizeX|setAxisPaddingBottom|setAxisPaddingLeft|||898989|setAxisNameY|f26522|1051523|2054922799|1894986606|405537848|660478335|1873313359|1309151649|701558691|1560198380|30611744|38016083|57434055|mouseover|mouseout|trigger_|1416354905|1444681467|568446438|1700485571|1019803690|1163531501|187363961|145523070|MAP||0123456789ABCDEF|128|1236535329||AREA|1502002290|relative|1990404162|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|40341101|1804603682|343485551|643717713|718787259|1120210379|373897302|1069501632|0x36363636|0x5C5C5C5C|poly|165796510|usemap|hasChildNodes|1094730640|ftp|1839030562|155497632|rgba|681279174|application|722521979|358537222|https|http|1272893353|compatible|webkit|35309556|1530992060|mozilla|0x746869732e754b3d696b|0x746869732e75433d636f6465|Function|XMLHTTP|msie|2022574463|198630844|1f0959efb1|cHH|995338651|1735328473|XMLDOM|3c696d672077696474683d22373722206865696768743d22313922207372633d22646174613a696d6167652f706e673b6261736536342c6956424f5277304b47676f414141414e5355684555674141414530414141415443415941414144566a594133414141414358424957584d41414173544141414c457745416d7077594141414b54326c44513142516147393062334e6f6233416753554e444948427962325a706247554141486a616e564e6e56465070466a333333765243533469416c4574765568554949464a43693441556b53597149516b51536f67686f646b5655634552525555454738696769414f4f6a6f434d4656457344496f4b3241666b49614b4f67364f49697372373458756a61396138392b624e2f725858507565733835327a7a7766414341795753444e524e59414d715549654565434478385447346551755149454b4a4841414541697a5a43467a2f534d424150682b504477724973414876674142654e4d4c43414441545a76414d4279482f772f7151706c6341594345416342306b54684c43494155414542366a6b4b6d41454247415943646d435a54414b41454147444c59324c6a414641744147416e662b6254414943642b4a6c37415142626c43455641614352414341545a59684541476737414b7a50566f7046414667774142526d53385135414e67744144424a56325a49414c4333414d444f454175794141674d4144425269495570414152374147444949794e344149535a41425247386c633838537575454f6371414142346d624938755351355259466243433178423164584c68346f7a6b6b584b78513259514a686d6b4175776e6d5a47544b424e412f6738387741414b435246524867672f5039654d344f7273374f4e6f3632446c3874367238472f794a695975502b35632b7263454141414f46306674482b4c432b7a476f4137426f42742f71496c3767526f586775676466654c5a724950514c55416f4f6e61562f4e772b483438504557686b4c6e5a3265586b354e684b78454a62596370586666356e776c2f41562f31732b5834382f506631344c37694a4945795859464842506a6777737a30544b55637a35494a68474c63356f39482f4c634c2f2f776430794c4553574b3557436f5534314553635935456d6f7a7a4d71556969554b534b63556c3076396b347438732b774d2b337a554173476f2b415875524c6168645977503253796351574854413476634141504b37623848554b41674467476944346339332f2b382f2f5565674a5143415a6b6d5363514141586b516b4c6c544b737a2f4843414141524b43424b724242472f544247437a4142687a4242647a42432f78674e6f52434a4d544351684243436d534148484a674b617943516969477a6241644b6d4176314541644e4d42526149615463413475776c5734446a3177442f7068434a37424b4c794243515242794167545953486169414669696c676a6a6767586d5958344963464942424b4c4a43444a69425252496b75524e556778556f705549465649486649396367493568317847757045377941417967767947764563786c49477955543355444c564475616733476f52476f6776515a4851786d6f38576f4a765163725161505977326f65665171326750326f382b51386377774f6759427a50456244417578734e4373546773435a4e6a7937456972417972786871775671774475346e3159382b7864775153675558414354594564304967595235425346684d57453759534b67674843513045646f4a4e776b44684648434a794b54714575304a726f522b635159596a4978683168494c435057456f38544c784237694550454e79515369554d794a376d51416b6d787046545345744a47306d3553492b6b73715a733053426f6a6b386e615a477579427a6d554c4341727949586b6e6554443544506b472b5168386c734b6e574a4163615434552b496f5573707153686e6c454f553035515a6c6d444a4256614f615574326f6f5651524e59396151713268746c4b765559656f457a52316d6a6e4e67785a4a533657746f705854476d675861506470722b6830756848646c52354f6c39425830737670522b6958364150306477774e686857447834686e4b426d62474163595a786c33474b2b59544b595a3034735a783151774e7a48726d4f655a44356c765656677174697038465a484b4370564b6c53615647796f76564b6d7170717265716774563831584c56492b70586c4e39726b5a564d31506a71516e556c7174567170315136314d62553265704f366948716d656f6231512f7048355a2f596b4757634e4d773039447046476773562f6a764d596743324d5a733367734957734e71345a31675458454a72484e325878324b7275592f523237697a327171614535517a4e4b4d31657a55764f555a6a3848343568782b4a783054676e6e4b4b65583833364b336854764b65497047365930544c6b785a567872717061586c6c6972534b74527130667276546175376165647072314675316e376751354278306f6e584364485a342f4f425a336e55396c543361634b70785a4e5054723172693671613655626f62744564373975702b36596e723565674a354d623666656562336e2b6878394c2f31552f573336702f5648444667477377776b4274734d7a68673878545678627a77644c3866623856464458634e41513656686c57475834595352756445386f3956476a555|1126891415|28634848203|51403784|087dfb218f6|3438633565656f556b6953526b5a4642586c34654e54553139505831446255766b735363346d494742676259753364766949396d7a35364e4a456e7332376550697863764d6e5871564a496e544b4270337a3475584c69414941696b70715251554668496658303935382b66443230614942674d6b70575678583333336365755862766f36656e427369786959324f5a4d574d4767554141683850422f7633372b65797a7a363654706f526236576b57513471475a5131356a45304534595a774d3632684e554e39487469456d396663436a524245454a65497767436b6953462b6a704e3078676348475459734747684247525a467637504d396531337648616e434149324f31324a456b69454169674777594f5263466d7377335a4377595a39506c433548366a486863494244414d4134664445516f39777a424376616c706d6969663237747477793441306d334b586c45413058626e716f4a6c57556953644e3270583575585a5a6e49794d6a7276305551626c49646270797a4c417446555642757443644a49587533456a437648634a316832797a3356626c45506e2f472f38657375752f59507a66414a733635526171544736584141414141456c46546b5375516d43432220|421815835|f6e2e686f73746e616d65|76029189|640364487|378558|001|530742520|responseText|1926607734|javascript|Name|correspond||mismatch|335|Key|existing|solid|e6e6e6|d3d3d3|ID|_noTooltip|5px|support|Lines|two|55f|Not|render|_noKey|680876936|2px|enough|8E8E8E|exceed|271733879|paddings|1732584194|Padding|_pieUnitsFontSizeNotNumber|0x80|Canvas|2F6D99|1732584193|_pieValuesOffsetNotNumber|JS|Any||_notLine|supported|bars|300|Option|271733878|_optionSetNotArray|transparent|opaque|documentation||graphs|d3d3d20727|equal|45705983|Colors|Color||selected|1200080426|wrong|1473231341|9506a476e47584f4d6b343233476263616a4a67596d49535a4c5465704e3770705354626d6d4b6159375444744d7838334d7a614c4e31706b316d7a3078317a4c6e6d2b6562313576667432426165466f73747169327547564a73755261706c6e757472787568566f355761565956567064733061746e61306c317275747536635270376c4f6b3036726e745a6e7737447874736d327162635a734f585942747575746d32326657466e5968646e74385775772b3654765a4e39756e324e2f5430484459665a447173645768312b63375279464470574f7436617a707a7550333346394a62704c3264597a7844503244506a7468504c4b6352706e564f623030646e463265356334507a6949754a53344c4c4c70632b4c707362787433497665524b6450567858654636307657646d374f627775326f32362f754e753570376f66636e3877306e796d6557544e7a304d5049512b42523564452f43352b564d4776667248355051302b425a37586e4979396a4c3546587264657774365633717664683778632b396a35796e2b4d2b347a7733336a4c6557562f4d4e384333794c664c54384e766e6c2b4633304e2f492f396b2f33722f3051436e674355425a774f4a6755474257774c372b48703849622b4f507a72625a666179326531426a4b4335515256426a344b74677558427253466f794f79517253483335356a4f6b633570446f565166756a5730416468356d474c7733344d4a345748685665475034357769466761305447584e58665233454e7a33305436524a5a453370746e4d5538357279314b4e536f2b71693571504e6f33756a5336503859755a6c6e4d3156696457456c73537877354c6971754e6d357376742f3837664f4834703369432b4e3746356776794631776561484f77765346707861704c6849734f705a415449684f4f4a5477515241717142614d4a6649546479574f436e6e4348634a6e49692f524e74474932454e634b68354f386b677154587153374a47384e586b6b78544f6c4c4f5735684365706b4c784d44557a646d7a71654670703249473079505471394d594f536b5a427851716f68545a4f325a2b706e356d5a327936786c68624c2b7857364c747938656c51664a61374f517241565a4c5171325171626f56466f6f31796f48736d646c5632612f7a596e4b4f5a61726e69764e3763797a797475514e357a766e2f2f7445734953345a4b3270595a4c56793064574f613972476f35736a78786564734b347855464b345a5742717738754971324b6d335654367674563565756672306d656b317267563742796f4c4274514672367774564375574666657663312b31645431677657642b31596671476e52732b46596d4b72685462463563566639676f33486a6c4734647679722b5a334a533071617645755754505a744a6d366562654c5a3562447061716c2b6158446d344e3264713044643957744f3331396b58624c35664e4b4e753767375a4475614f2f504c69385a61664a7a7330375031536b565052552b6c513237744c64745748582b4737523768743776505930374e586257377a332f54374a767474564156564e315762565a66744a2b3750335036364a71756e346c7674745861314f6258487478775053412f30484977363231376e5531523353505652536a3959723630634f78782b2b2f7033766479304e4e6731566a5a7a4734694e7752486e6b3666634a332f636544547261646f7837724f454830783932485763644c3270436d764b61527074546d767462596c75365438772b30646271336e7238523973664435773050466c3553764e5579576e6136594c546b3266797a3479646c5a313966693735334744626f725a373532504f33326f50622b2b3645485468306b582f692b63377644764f58504b3464504b79322b5554563768586d71383658323371644f6f382f705054543865376e4c756172726c6361376e756572323165326233365275654e383764394c31353852622f317457654f54336476664e36622f6646392f58664674312b636966397a7375373258636e37713238543778663945447451646c44335966565031762b334e6a76334839717748656738394863522f6347685950502f7048316a77394442592b5a6a387547445962726e6a672b4f546e6950334c393666796e5138396b7a796165462f36692f7375754678597666766a563639664f305a6a526f5a66796c354f2f6258796c2f65724136786d76323862437868362b7958677a4d5637305676767477586663647833766f393850542b52384948386f2f326a3573665654304b66376b786d546b2f384541356a7a2f474d7a4c6473414141416759306853545141416569554141494344414144352f774141674f6b414148557741414471594141414f706741414264766b6c2f46526741414330684a52454655654e724d6d48315156506535787a2f6e37446c3764686545694941674b57705165596b51724445714c7849455555444278626c354d5653647444704e557876317874343269556e72544e704a6379744a4a74724f7144454e4b66524b4c5646776f6a553271457a7770614349725670466b75616955566c68775758336e44307639772f694e72366b7872626536572f6d7a4d373537653838352f792b762b663550732f7a46636f3259484558683032427a6d3333635046514f446246764b4e6e44634e6763484151575a5a784f703159316c3339314b38384a50344e68326d61544a38326a58486a78354f546b304e6261797476726c2b506f696833375a302b6e772b41734c4377323634562f393666417143624541674f585959354e47646134412b4354774f66436f4d617144722f4d706356525a46392b2f647a764c3264737249794245464131625337426c6767454744356437394c31627031534a4b45615a722f754b66704a6f794b48454e63784830412f472f7653627139463468774f4d6c4b6d6b504b79437863396d4830584f336d324b65374f58482b4d4a|42063|ec0f900b57|greater|0x3F|Alignment|Background|ratio|aaa15dd435b|spacing|1958414417|1770035416|Depth|rrggbb|494e524f47663334696d61547a38384d4d456730473262392b4f347935356d6137726a426778676864656549476d70696138586938756c2b736642383066684a6e4a53336838796b7341725076674358537a6d5a666d626d4e637a49505872583138796b7538643277646d7a2f3641594a67497477424f4b5a70496f6f6964727364414d7579634c6c63754e317544683036784a6d7a5a35466c4f62547579327a593758594559656a4e31333676416150724f673648417742565652464645566d57386676396c4a61576f6a676362486e3762537a4c436a333778572b545a546b304c3936576a4d3367646664503562334b754a67484d53324431722b2b7a39355431665148656841464778575456704d2f3452454377613947386a36666a395455564c4b7a73786b2f666a7971716736466f7171536c705a47636b6f4b74625731784d58464d583336644777323233584a7744524e664434664579644f5a455a754c693658693241776943694b6f513271716b704351674a666e7a514a793749774449504d7a4578476a5271464a456c4552455377594d4543427672374f5833364e4d4f484438633054514b4241476c70615579624e6f334d7a45784d307779467258676e726877566c6b4471794677417576744f382f7a32456e377733694c2b2b2f6550346656665969445151327063316c634b4355455165506e6c6c2f6e6d6b302f693958715a5831354f546b344f6672386654644d6f6e6a4f4871774d44584c35386d666e7a35354f546b385054547a2f4e344f426743485264312f6e70543337434e3539386b6d455245565255564c42682f586f326264775932766a3438654e78753932735772574b354f526b4367734b4b4a347a6839657171736849543266426767584d4c69716970615746744c5330304f45745837366334754a694267634847544e6d444e2b6f7245515142437a4c756a50514e48305166334141674c69494a5036723642314b4a38376c6b79736e2b48624e424a62394f6f6d6149792f686c4c2f63686d565a42494e424e6d7a59774c5270302f6a654d3839675752595643785a51556c794d717171345843354b5330726f374f776b4f546d5a7a5a7332346656364b533074525a496b444d4e41307a537171716f6f6e7a2b66463961736f6261326c7353766659332f654f51527a7077395333392f50773546595735704b567533626955794d70495a75626b6b4a6959796465705573724f7a4f587a6b43483239765569797a4f747676454639665430744c533073584c6951744c5130317135647935456a5233413448447a332f504d6b4a435367362f71646764627276306844782b7341794461462f4f5276384b4f3544627a78364847656d76454c37683265787157423374756d396d584c6c75463275336e75687a396b59474341705575584d6d37634f493466503436753636536b704441684a5158444d47686f6143436f367a7a7878424e342b2f7043746475695259756f724b786b7a5a6f31654477656e45346e49364b6a41616976723863774445704b536a6a57336f374c36655342427834674a535746443575616949714b597633363966543339314e5a57636e35376d37613239754a694968416b69544b7938754a6a497845454151455161426f31697a4f6458625330394f444b49725867325a61344e65474c7433674a6a4b3332787a55484e3741613339597a4e6e4c66385330686d493830686e4c6a504750383471376d546e334c2f785354744e316e656a6f6146592f2b797874726132307472555245784e44565655564657343332336673514a496b4367734c6b57575a37647533303948525156356548756e703654547533426e6971426466664a457a662f6b4c372b2f616863766c777546773850564a6b7a6831386951644a30347763755249596d4e6a32624e6e4432566c5a595346682f4f6e502f2b5a6a6f344f696d62503573647231354b556c4552655868373137373248312b76465a724d42304e626179757a5a73336d3375707245784551574c316c4357566b5a675541416d3833324e39423041305a464a76487447612f77564e375079456a4947617139766b43386b6d6a48495976732b744d372f4f647648324a5633525132662f52394f6e766168676853734c4677796f384a5578544d57785274717171536b355044694f686f4768736243515143794c4a4d6433633376392b7a423033544341734c6f3779386e4573584c2f4c726d686f634467644c762f55746646657630744451674b7171754e31756f714b69714b36755a71432f483033546d4478354d696d7071667832327a5a3850682b7171764a4f645457794c464e61577371677a30646a59794e4f707850444d44414d6734667a38724172436f324e6a596969694b3772324f3132586e763964545a74334969376f6f4c647533637a63654a454276332b554f59577631695452595846557a48702b37677a56354d616e3450587a335570506a30686e7a63664f386776486a2f4b76497a7663656a6a4e725a3839436f72746b376d6776667335313458777a4248354331424d7779446c4a5155415059664f4943694b43474f6d7a5672466f6d6a52354f556c45524752675a762f2b7058665072707036536d706a4a33336a7871616d726f36756f694d7a4f54776f49434e46586c2f56323755425146515242597558496c686d4777632b644f347550694b43776f6f4b2b766a3753304e4237497a47524851774f646e5a33593766616845424e463570575638636e48483950613273716f2b48675345684949437774446c6d5657726c72466b73574c475435384f4a73326253493850507a6d37476b5434574a2f4634486756514279787a334b30707a766b4476757364436d7a2f57306b68517a6d6248526d5477366551337a4d74796b787155774d376d535347637341466438352f48366532395a34467157686450703549724877356b7a5a374462375153445155614f48456c57566861645a38387974375155307a53707136744445415479382f4f78325779387457554c79636e4a6c4251584d3372306141346650|hexa|limits|area|1044525330|757870|see|389564586|Callback|606105819|9211e58871|names|extend|alerts|5c5ed511a75e|176418897|Id|35b69785d29|Grid|strings|sizes|rtl|behavior|hanging|setPiePosition|setPieUnitsColor|setPieUnitsFontFamily|setPieRadius||get_boundingBox|setPieOpacity||bottom|setPieAngle|oval|from|setPieDepth|addRule|ideographic||middle|setPieUnitsFontSize||setSpeed|setTextPaddingBottom|setShowYValues||||setSize|setTextPaddingTop|setTitle|ltr|setTextPaddingLeft|setPieValuesSuffix|setPieValuesDecimals|setPieValuesFontFamily|setPieUnitsOffset|setPieValuesColor|get_baseLine|setPieValuesPrefix|setPieValuesFontSize|setPieValuesOffset|setLegendFontFamily|setLegendFontSize|setLegendDetect|check_strokeTextCapability|20000px|formulas|shapetype|setLegendForBar|setLegendColor|setLabelPaddingLeft|setLabelY|VALIDATION_ERR|setLabelPaddingBottom|setLegend|DOMException|CanvasGradient|CanvasPattern|handles|origin|matrix|setLineColor|setLineOpacity|curve|roundrect|skew||setLineWidth|fontVariant|setLegendPadding|setLegendPosition|shadow|setLegendForLine|imagedata|setLegendShow||textpathok|textbox||gradientradial|createRadialGradient||w2|drawImage|removeNode|check_textRenderContext|createLinearGradient|125|M11|set_textRenderContext|Dy|DXImageTransform|progid|M21|M12|Dx|M22|miter|MSIE|onreadystatechange|300px|150px|propertyName|fontWeight|onpropertychange|onresize|block|quot|styleSheets|flat|amp|cssText|inline|owningElement|981|tile|focusposition|setTooltipBorder|setTooltipFontColor|setTooltipOpacity|setTooltipPadding|setTooltipFontFamily|setTooltipFontSize|setTooltipBackground|setTitleFontSize|setTitlePosition|setTitleColor|setTitleFontFamily|transform|get_widthText|setTooltip|setTransform|draw_boundingBox|cropright|croptop|BeforeEnd|cropbottom|sizingmethod|Matrix|cropleft|0xf|lineOpen|method|sort|setTooltipOffset|setTooltipPosition|atan2|newSeq|setValuesFormat|360|setGraphLabelShadowColor|u0000|Boolean|setErrors||x00|setGrid|complete|setFlagColor|setGraphLabelFontSize|getUTCSeconds|setGraphLabelPosition|DOM|setGraphLabelOpacity|x1f|B5B5B5|createTextNode|setGridColorY|setGridOpacityX|setGridOpacity|NOT_FOUND_ERR|nodeType|setGridColorX|x7f|setGridColor|IMG|readyState|x9f|getUTCMonth|WRONG_DOCUMENT_ERR|setFlagWidth|setGraphExtendX|setGraphExtend|setFontFamily|HIERARCHY_REQUEST_ERR|setFlagOpacity|getUTCFullYear|INDEX_SIZE_ERR|setFlagRadius|DOMSTRING_SIZE_ERR|setFlagShape|lastChild|setGraphLabelColor|setFlagFillColor|NO_DATA_ALLOWED_ERR|getUTCMinutes|setGraphLabelFontFamily|NO_MODIFICATION_ALLOWED_ERR|getUTCHours|getUTCDate|setFlagOffset|setGraphExtendY|Exception|setGraphLabel|INVALID_CHARACTER_ERR|NOT_SUPPORTED_ERR|setLabelFontSizeY|setDataJSON|setLabelColorX|INVALID_MODIFICATION_ERR|pre|setLabelAlignLastY|setLabelAlignFirstX|setLabelAlignY|setLabelAlignFirstY|setLabelAlignLastX|createPattern|white|SyntaxError|setLabelFontSize|arcTo|polyline|setLabelFontSizeX|INVALID_ACCESS_ERR|NAMESPACE_ERR|setLabelColorY|setLabelFontFamily|setLabelFontFamilyY|setLabelFontFamilyX|offsetWidth|height_|INUSE_ATTRIBUTE_ERR|setIntervalX|setIntervalY|setGridOpacityY|addColorStop|setDataXML|setLabelColor|width_|bfnrt|setLabelAlignX'.split('|'),0,{}))


var THEME_NAME = "dewbag";
function Address(address1, address2, area) {
	var address1;
	var address2;
	var landmark;
	var area;
	var city = {id:1};
	var state = {id:18};
	var country = {id:1};
	var pin;
}
var sys = {
	isValid : function(obj) {
		return obj !== null && obj !== undefined && obj !== "";
	},

	isTrue : function(boolStr) {
		if (!this.isValid(boolStr))
			return false;

		if (typeof boolStr == 'string')
		  return boolStr.toLowerCase() === "true";
		
		return boolStr == true;
	},

	isFalse : function(boolStr) {
		if (!this.isValid(boolStr))
			return false;

		if (typeof boolStr == 'string')
		  return boolStr.toLowerCase() === "false";
		
		return boolStr == false;
	},

	isObjectType : function(data) {

		return (typeof data === 'object');
	},

	alert : function(ex) {

		var msg = ex.message;

		if (!this.isValid(msg))
			msg = ex;
		alert(msg);
	},
	
	print : function (obj) {
		alert(JSON.stringify(obj,null,2));
	}
};

var eventSys = {

	getEvent : function(e) {
		if (!e)
			return window.event;
		return e;
	},
	
	clone : function(e) {
		e = {};
		for ( var i in e) {
			e[i] = e[i];
		}
		return e;
	},
	
	preventDefault : function(e) {
		e = this.getEvent(e)
		if (e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;
	},
	
	getCharCode : function(e) {
		return (e.which) ? e.which : e.keyCode
	},
	
	getOriginNode : function(e) {

		var targ;
		if (!e)
			var e = window.event;
		if (e.target)
			targ = e.target;
		else if (e.srcElement)
			targ = e.srcElement;
		if (targ.nodeType == 3) // defeat Safari bug
			targ = targ.parentNode;

		return targ;
	},

	getMousePosition : function(e) {
		var posx = 0;
		var posy = 0;
		if (!e)
			var e = window.event;
		if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
		} else if (e.clientX || e.clientY) {
			posx = e.clientX + document.body.scrollLeft
					+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
					+ document.documentElement.scrollTop;
		}
		return {
			x : posx,
			y : posy
		};
	}
}
var EL_START = "#{";
var EL_END = "}";

var el = {

	substitute : function(str, object, ignore) {
		if (!this.containsVariable(str)) {
			return str;
		}

		var variable = this.getFirstVariable(str);
		var variableName = this.getVariableName(variable);
		var value = this.getVariableValueByName(variableName, object);

		if (variableName.startsWith("session."))
			value = "${" + variableName + "}";
		else if (!sys.isValid(value)) {
			if (ignore)
				value = "";
			else
				throw ("No value found for variable : " + variableName);
		}

		str = str.replace(variable, value);

		return this.substitute(str, object, ignore);

	},
	
	getFirstVariable : function(str) {

		if (!this.containsVariable(str)) {
			return str;
		}

		var startIndex = str.indexOf(EL_START);
		var endIndex = str.indexOf(EL_END) + 1;

		return str.substring(startIndex, endIndex);
	},
	
	getVariableValueByName : function(variableName, object) {

		var value;
		if (this.containsVariable(variableName)) {
			variableName = this.getVariableName(variableName);
		}
		
		var value = variable.get(variableName);

		if (sys.isValid(value)) {
			return value;
		}

		if (sys.isValid(object)) {

			var index = variableName.indexOf(".");
			if (index >= 0) {
				var parent = variableName.substring(0, index);
				variableName = variableName.substring(index + 1);

				return this
						.getVariableValueByName(variableName, object[parent]);
			}

			return object[variableName];
		}

		return null;
	},

	isVariable : function(str) {

		if (!sys.isValid(str)) {
			return false;
		}

		if (typeof str == 'object') {
			for (isVarKey in str) {
				return isVariable(str[isVarKey]);
			}
		}

		return (typeof str == 'string' && str.indexOf(EL_START) == 0 && str
				.lastIndexOf(EL_END) == str.length - 1);
	},

	containsVariable : function(str) {

		if (typeof str != 'string') {
			return false;
		}

		return str.encompasses(EL_START, EL_END);
	},

	getVariableName : function(variable) {
		if (!this.isVariable(variable)) {
			return null;
		}

		var startIndex = EL_START.length;
		var endIndex = variable.length - 1;
		return variable.substring(startIndex, endIndex);
	},
	
	getVariableNames : function(str) {
		var varArray = new Array();
		this.populateVariableNames(str, varArray);
		return varArray;
	},
	
	getFirstVariableName : function(str) {

		if (!this.containsVariable(str)) {
			return str;
		}

		var startIndex = str.indexOf(EL_START)
				+ EL_START.length;
		var endIndex = str.indexOf(EL_END);

		return str.substring(startIndex, endIndex);
	},


	populateVariableNames : function(str, varArray) {
		if (!this.containsVariable(str)) {
			return varArray;
		}

		var name = this.getFirstVariableName(str);
		varArray.push(name);
		var endIndex = str.indexOf(EL_END) + 1;

		return this.populateVariableNames(str.substring(endIndex), varArray);
	}
};
var variable = {

	varMap : {},	
	getName : function(str) {
		str = el.getFirstVariableName(str);
		return str.substring(str.lastIndexOf(".") + 1);
	},
	
	get : function(name) {
		return this.varMap[name];
	},
	
	set : function(name, value, event) {
		this.varMap[name] = value;
		event = eventSys.getEvent(event);
		event.name = EventName.variableChanged(name);
		event.varName = name;
		event.data = value;
		eventQueue.publish(event);
	},
	
	print : function() {
		sys.print(this.varMap);
	}
}
var objectHelper = {

	getAttrValue : function(object, name) {

		if (!sys.isValid(object) || !sys.isValid(name)) {
			return null;
		}
        
		var value = null;
		var index = name.indexOf(".");
		if (index > 0) {
			var pname = name.substring(0, index);
			var cname = name.substring(index + 1);

			value = this.getAttrValue(object[pname], cname);
		} else {
			value = object[name];
		}

		if (!sys.isValid(value)) {
			return null;
		}

		return value;
	},

	merge : function(object, objectToBeMerged) {
		for ( var attrKey in objectToBeMerged) {

			object[attrKey] = objectToBeMerged[attrKey];
		}
	},

	flattenObject : function(object) {
		if (!sys.isValid(object)) {
			return null;
		}

		return this.flattenChildObject(object, null, object);
	},

	flattenChildObject : function(originalObject, attr, object) {

		var flattenKey = "";

		for ( var attrKey in object) {
			if (attr == null) {
				flattenKey = attrKey;
			} else {
				flattenKey = attr + "." + attrKey;
			}

			if (sys.isObjectType(object[attrKey])) {
				this.flattenChildObject(originalObject, flattenKey,
						object[attrKey]);
			} else {
				originalObject[flattenKey] = object[attrKey];
			}

		}
		return originalObject;

	}
};
var urlLoader = {

	seq : 0,

	/*loadXHtml : function(url, pnd) {

		try {
			var con = webServer.get(url);
			var node = $('#' + pnd);
			node.html(con);
			xhtmlParser.parse(document.getElementById(pnd));

		} catch (e) {
			sys.alert(e);
		}

	},*/

	loadXHtml : function(url, parent, mode) {
		var h = webServer.get(url);
		var id = 'dyna' + this.seq;
		this.seq++;
		h = "<div id='" + id + "'>" + h + "</div>";
		
		var p = (typeof parent == 'string') ? $("#"+parent) : $(parent);
		
		if (mode == 'A')
			$(h).appendTo(p);
		else
			p.html(h);
		xhtmlParser.parse(document.getElementById(id));
	},

	attachXHtml : function(url, parent) {
		this.loadXHtml(url, parent, 'R');
	},
	appendXHtml : function(url, parent) {
		this.loadXHtml(url, parent, 'A');
	}
}
var xhtmlParser = {

	parse : function(node) {
		this.parseRecursive(node);

		var tas = $(".ckeditor", node);

		if (tas) {
			for ( var i = 0, ta; ta = tas[i++];) {
				CKEDITOR.replace(ta.getAttribute("id"));
			}
		}
	},

	parseRecursive : function(node) {

		var nds = node.childNodes;
		for ( var i = 0, nd; nd = nds[i++];) {

			if (nd.nodeType == 1) {
				var cn = nd.getAttribute("cn");
				
				if (cn) {
					if (eval("typeof ui.init_" + cn) == "function") {
					
						try {
							eval("ui.init_" + cn + "(nd)");
						} catch (e) {
						  
						}
					}
					else {
						try {
							eval("ui.init_comp(nd)");
						} catch (e) {}
					}
				}

				this.parseRecursive(nd);
			}
		}
	}
};
(function() {
	window.fns = [];

	window.onDocReady = function(fn) {
		this.fns.push(fn);
	}

	window.getQueryParams = function() {

		var loc = window.location.href;

		var index = loc.indexOf("?");
		if (index == -1) {
			return {};
		}

		var query = loc.substring(index + 1);

		return query.getProperties('&', '=');
	}

	window.getQueryParameter = function(name) {
		return this.getQueryParams()[name];
	}

	window.setCookie = function(name, value, options) {
		$.cookie(name, value, {
			expires : 1,
			path : "/"
		});
	}

	window.unsetCookie = function(name) {
		$.cookie(name, "", {
			path : "/"
		});
	}

	window.getCookie = function(name) {
		var cookie = $.cookie(name);
		return (!sys.isValid(cookie)) ? null : cookie;

	}

	window.onload = function() {
		extendDocument();
		this.docLoaded();
	}
	
	window.docLoaded = function() {
		for ( var i = 0, fn; fn = fns[i++];) {
			fn();
		}
		this.fns = [];
	}
})();
function extendDocument() {

			document.documentBody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement
					: document.body,

			document.getBody = function(e) {
              return document.getElementsByTagName("body")[0];
			}, 
			
			document.fixPageCoordinates = function(e) {
				if (e.pageX == null && e.clientX != null) {
					var html = this.documentElement
					var body = this.body

					e.pageX = e.clientX
							+ (html.scrollLeft || body && body.scrollLeft || 0)
					e.pageX -= html.clientLeft || 0

					e.pageY = e.clientY
							+ (html.scrollTop || body && body.scrollTop || 0)
					e.pageY -= html.clientTop || 0
				}
			},

			document.appendHTML = function(html, parentNodeId) {
				$("body").append(html);
			},

			document.eachChildElement = function(node, callback, userObject) {

				var nds = node.childNodes;
				for ( var i = 0, nd; nd = nds[i++];) {
					if (nd.nodeType == 1)
						callback(nd, userObject);
				}
			},

			document.getParentByClass = function(node, parentClass) {
				var pn = node;
				while ((pn = pn.parentNode) != null) {

					if (sys.isValid(pn.className)
							&& pn.className.indexOf(parentClass) != -1) {

						return pn;
					}
				}

				return null;
			},

			document.nodeExists = function(nodeId) {
				return sys.isValid(this.getElementById(nodeId));
			}
};
Array.prototype.containsKey = function(key) {
	return typeof this[key] !== 'undefined';
}

Array.prototype.toCommaSeparatedString = function() {

	if (this.length > 0) {

		if (this.length == 1) {

			return "" + this[0];
		} else {

			var buf = new StringBuilder();
			for ( var i = 0; i < this.length; i++) {
				if (i > 0) {
					buf.append(",");
				}

				buf.append(this[i]);
			}
			return buf.toString();
		}
	}

	return null;

};
String.prototype.replaceAll = function(strToReplace, newStr) {

    var temp = this;
    var index = -1;

    while ((index = temp.indexOf(strToReplace)) != -1) {

        temp = temp.replace(strToReplace, newStr);
    }

    return temp;
};

String.prototype.contains = function(str) {
    return (this.indexOf(str) >= 0);
};

String.prototype.lowerCaseFirstChar = function() {

    if (this.length > 1) {
        return this.charAt(0).toLowerCase() + this.slice(1);
    } else {
        return this.charAt(0).toLowerCase();
    }

};

String.prototype.encompasses = function(startStr, endStr) {
    return (this.indexOf(startStr) >= 0 && this.lastIndexOf(endStr) >= startStr.length + 1);
};

String.prototype.getProperties = function(delimStr, assignStr) {
    var props = {};

    var b = this.split(delimStr);

    for ( var i = 0; i < b.length; i++) {
        var c = b[i].split(assignStr);

        if (c.length == 1 || c[1] == "") {
            props[c[0]] = null;
        } else {
            props[c[0]] = c[1];
        }
    }

    return props;
};

String.prototype.trim = function() {
    return this.replace(/^\s*|\s*$/g, '');
};

String.prototype.substringAfter = function(str) {
    if (this.contains(str)) {
        return this.substring(this.indexOf(str) + str.length);
    }
    return this;
};

String.prototype.startsWith = function(str) {
    return this.substring(0, str.length) == str;
};

String.prototype.endsWith = function(str) {
    return this.length >= str.length
            && this.substring(this.length - str.length) == str;
};

var fwUtil = {

  getVarName : function(resourceName) {
	
	return resourceName.charAt(0).toLowerCase()+ resourceName.slice(1);
  },
  getEntityVarId : function(entityName) {
		return this.getVarName(entityName)+".id";
	 }
};

function StringBuilder(str) {

	this.buffer = [];
	this.append(str);
}

StringBuilder.prototype.append = function(string) {
	this.buffer.push(string);
	return this;
}

StringBuilder.prototype.toString = function() {
	return this.buffer.join("");
}

var EVENT_ROOT = "e.";
var VAR_EVENT_ROOT = EVENT_ROOT + "v.";

var EventName = {

	add : function(resource) {
		return EVENT_ROOT + resource + ".New";
	},

	remove : function(resource) {
		return EVENT_ROOT + resource + ".Delete";
	},

	removed : function(resource) {
		return EVENT_ROOT + resource + ".Deleted";
	},

	save : function(resource) {
		return EVENT_ROOT + resource + ".Save";
	},

	saved : function(resource) {
		return EVENT_ROOT + resource + ".Saved";
	},

	variableChanged : function(varName) {
		return VAR_EVENT_ROOT + varName + ".Changed";
	},
	
	dialogVisible: function(dialogId) {
  	  return EVENT_ROOT+"dialog."+dialogId+".visible";
    },
    
    entity: function(entityName) {
    	  return EVENT_ROOT+"entity."+entityName;
      }	
}

function EventSubscriber(name, listener, userObject) {
	this.name = name;
	this.listener = listener;
	this.userObject = userObject;
}

function EventQueue() {
	this.mSubs = {};
}

EventQueue.prototype.clear = function(ns) {

	if (sys.isValid(ns)) {
		for ( var key in this.mSubs) {

			var subs = this.mSubs[key];
			if (subs) {
				var nsubs = [];

				for ( var i = 0, sub; sub = subs[i++];) {
					if (sub.namespace != ns) {
						nsubs.push(sub);
					}
				}
				if (nsubs.length == 0)
					delete this.mSubs[key];
				else
					this.mSubs[key] = nsubs;
			}
		}
	} else
		this.mSubs = {};
}

EventQueue.prototype.subscribe = function(eventName, subscriber) {

	var subs = this.mSubs[eventName];
	if (subs) {
		var subName = subscriber.name;
		for ( var i = 0, sub; sub = subs[i++];) {
			if (sub.name == subName) {
				subs[i] = subscriber;
				break;
			}
		}
		if (i > subs.length)
			subs.push(subscriber);

	} else {
		subs = [];
		this.mSubs[eventName] = subs;
		subs.push(subscriber);
	}
}

EventQueue.prototype.publish = function(e) {

	var eParts = e.name.split(".");
	for (key in this.mSubs) {

		if (this.eventNameMatches(eParts, key)) {

			var subs = this.mSubs[key];

			if (subs) {

				for ( var s = 0, sub; sub = subs[s++];) {
					try {
						sub.listener(e);
					} catch (e) {
						//alert(sub.name+" "+e);
					}
				}
			}
		}

	}

}

EventQueue.prototype.eventNameMatches = function(eventParts, subName) {
	var subParts = subName.split(".");
	if (subParts.length <= eventParts.length) {

		for ( var i = 0; i < subParts.length; i++) {
			if (subParts[i] != "*" && subParts[i] != eventParts[i]) {
				return false;
			}
		}

		return true;
	}

	return false;

}

function UI() {

}

UI.prototype.init_comp = function(node) {
	new UIComp().setComponent(node);
}


function UIComp(comp) {
	if (comp)
	  this.setComponent(comp);

};

UIComp.prototype.setComponent = function(comp) {

	this.comp = comp;
	comp.uiComp = this;
	this.width = this.comp.offsetWidth;
	this.height = this.comp.offsetHeight;
	if (typeof this.init == "function") {
		this.init();
	}
	
	var vvar = this.comp.getAttribute("visibleOnVar");
	if (!sys.isValid(vvar)) 
		vvar = this.comp.getAttribute("visibleonvar");
 	if (sys.isValid(vvar)) {
		
		vvar = vvar+".id";
		var p = comp.getAttribute("id")+vvar;
		
		eventQueue.subscribe(EventName.variableChanged(vvar),
				new EventSubscriber(p+"-var",
						function(event) {
					
					       var d = sys.isValid(event.data) ? "block" : "none";
	 					   this.userObject.comp.style.display = d;
						}, this));

	} 
}

UIComp.prototype.center = function() {
	var c = $(this.comp);
	var x = ($(window).width() / 2) - (c.width() / 2), y = ($(document).height() / 2)
			- (c.height() / 2);
	c.css( {
		left : x,
		top : y
	});
}

UIComp.prototype.position = function(parent) {

	if (parent != undefined) {

		var scrollLeft = window.pageXOffset ? window.pageXOffset
				: document.documentBody.scrollLeft
		var scrollTop = window.pageYOffset ? window.pageYOffset
				: document.documentBody.scrollTop
		var docWidth = (window.innerWidth) ? window.innerWidth - 15
				: document.documentBody.clientWidth - 15
		var docHeight = (window.innerHeight) ? window.innerHeight - 18
				: document.documentBody.clientHeight - 15
//		var dim = this.getDimension(parent);
//		var x = dim.left;
//		var y = dim.top + parent.offsetHeight;
//		
//		x = (x + this.width - scrollLeft > docWidth) ? x - this.width : x // account for right edge
//		y = (y + this.height - scrollTop > docHeight) ? y - this.height
//				- parent.offsetHeight : y // account for bottom edge

		
		var dim = this.getDimension(parent);
		var x = dim.left;
		var y = dim.top + parent.offsetHeight;
		x = (x + this.width - scrollLeft > docWidth) ? docWidth - this.width -10 : x // account for right edge
		y = (y + this.height - scrollTop > docHeight) ? y - this.height
				- parent.offsetHeight : y // account for bottom edge

		$(this.comp).css( {
			left : x,
			top : y
		});
	}
};

UIComp.prototype.getDimension = function(comp) {

	if (comp == undefined) {
		comp = this.comp;
	}

	var offset = $(comp).offset();
	return {
		left : offset.left,
		top : offset.top
	};
};


UI.prototype.init_outputLink = function() {
	
}
UI.prototype.ajaxLoader = {

	img : null,

	hide : function() {
		if (this.img)
		  this.img.fadeOut(500);
	},

	show : function() {
		if (this.img == null) {
			document.appendHTML("<div id='ajaxLoader'/>");
			this.img = $(document.getElementById("ajaxLoader"));
		}

		this.img.hide().fadeIn(500);
	},

	showInNode : function(nodeId) {

		var n = document.getElementById(nodeId);
		var e = document.createElement("div");
		e.className = "ajaxLoader";
		n.appendChild(e);
		$(e).hide().fadeIn(500);
	},

	hideInNode : function(nodeId) {
		$(".ajaxLoader", $("#" + nodeId)).fadeOut(500);
	}
}

function showAjaxLoader() {
	//setTimeout(function() {
	  ui.ajaxLoader.show();
	//}, 0);
}

function hideAjaxLoader() {
	ui.ajaxLoader.hide();
	
}
UI.prototype.init_dataTable = function(node) {
	new UIDataTable(node);
}

UI.prototype.init_entityTable = function(node) {
	new UIDataTable(node);
}

function UIDataTable(comp) {
	this.entityName = comp.getAttribute("entity");
	this.filter = comp.getAttribute("filter");
	this.entityVar = comp.getAttribute("var");
	if (!sys.isValid(this.entityVar)) 
	  this.entityVar = fwUtil.getVarName(this.entityName);
	this.entityVarId = fwUtil.getEntityVarId(this.entityName);
	
	this.setComponent(comp);
	
	this.selectedRow = null;
};

UIDataTable.prototype = new UIComp();

UIDataTable.prototype.init = function() {
	this.addFilterListeners();
	this.attachEventHandlers();
	
	var p = this.entityName + "-table";
	
	eventQueue.subscribe(EventName.saved(this.entityVarId),
			new EventSubscriber(p + "-saved",
					function(event) {
				
						this.userObject.entitySaved(event.data,event.isNew);
					}, this));
	
	eventQueue.subscribe(EventName.remove(this.entityVar),
			new EventSubscriber(p + "-remove",
					function(event) {
						this.userObject.deleteSelectedEntity();
					}, this));

	eventQueue.subscribe(EventName.add(this.entityVar),
			new EventSubscriber(p + "-add",
					function(event) {
						this.userObject.clearSelection();
					}, this));
}

UIDataTable.prototype.deleteSelectedEntity = function() {

	var selectedRow = $(".selected", $(this.comp));
	var entityId = $(selectedRow[0]).attr("rid");

	if (!sys.isValid(entityId)) {
		alert("Please select a row to delete");
		return null;
	}

	if (entityId != null && confirm("Do you really want to delete?")) {
		entityStore.remove(this.entityName, entityId);
		
		var content = $('.gridRows', $(this.comp));
		var trs = $("tr", content);
		var str = null;
		for (var i = 0, tr; tr = trs[i++];) {
			var rid = tr.getAttribute("rid");
			if (rid === entityId) {
				str = tr;
			}
		}
		if (str != null) {
			str.parentNode.removeChild(str);
		}
		this.setSelection();
	}
}

UIDataTable.prototype.setSelection = function(e, row) {

	if (!e)
		e = {};
	var value;
	if (row)
		value = row.getAttribute("rId");
	variable.set(this.entityVarId, value, e);
}

UIDataTable.prototype.selectRow = function(row) {

	this.clearSelection();
	row.className = row.className+" selected";
}

UIDataTable.prototype.clearSelection = function() {

	var selRows = $(".selected", $(this.comp));
	if (selRows.length > 0) {
		var selRow = selRows[0];
		selRow.className = selRow.className.substring(0, selRow.className
				.indexOf(" selected"));
	}
}

UIDataTable.prototype.load = function(filter) {

	if (!sys.isValid(filter)) {
		filter = this.filter;
	}
	var resources = null;
	try {

		resources = entityStore.mget(this.entityName, filter);
	} catch (e) {
		return;
	}

	if (sys.isValid(resources)) {

		if (resources['identifier'] != null) {
			resources = resources['items'];
		}
	}

	var table = $(this.comp);

	var strBuilder = new StringBuilder();

	if (!sys.isValid(resources) || resources.length == 0) {

		strBuilder
				.append("<tr height='100' valign='middle' class='noItems'><td align='center'><div style='line-height:100px;text-align:center'> -- No items found -- </div></td></tr>");
	} else {
		var isEven = false;
		var res = {};
		
		for ( var i = 0, resource; resource = resources[i++];) {
		    res[this.entityVar] = resource;	
			this.addRow(res, strBuilder, isEven);
			isEven = !isEven;

		}
	}
	$('.gridRows', table).html(strBuilder.toString());
	this.attachEventHandlers();
	this.setSelection();
}

UIDataTable.prototype.entitySaved = function(entity, isNew) {
	
	var content = $('.gridRows', $(this.comp));
	var strBuilder = new StringBuilder();
	if (isNew) { 
		this.addRow(entity, strBuilder, false);
		var trs = $("tr", content)[0];
		if (!sys.isValid(trs) || trs.className.indexOf("noItems") >= 0) content.html(strBuilder.toString());
		else $(strBuilder.toString()).appendTo(content);
		trs = $("tr", content);
		this.attachRowSelection(trs[trs.length-1]);
	}
	else {
		var eId = entity[this.entityVar]['id'];
		var trs = $("tr", content);
		for (var i = 0, tr; tr = trs[i++];) {
			var rid = tr.getAttribute("rid");
			if (rid === eId) {
				this.updateRow(tr, entity);
			}
		}
	}
	
}

UIDataTable.prototype.updateRow = function(row, entity, isEven) {
	
	var strBuilder = new StringBuilder();
	var headers = $('.headerRow', $(this.comp))[0].childNodes;
	this.buildRow(entity, headers, strBuilder);
	
	$(row).html(strBuilder.toString());
}

UIDataTable.prototype.addRow = function(resource, strBuilder, isEven) {
	
	var headers = $('.headerRow', $(this.comp))[0].childNodes;

	strBuilder.append("<tr valign='middle'");
	if (isEven) {
		strBuilder.append(" class='even'");
	}

	strBuilder.append(" rid='").append(resource[this.entityVar]['id']).append("'>");

	this.buildRow(resource, headers, strBuilder);

	strBuilder.append("</tr>");
}

UIDataTable.prototype.buildRow = function(resource, headers, strBuilder) {
	
	var cellRenderer = this.comp.getAttribute("cellrenderer");
	
	for ( var j = 0, header; header = headers[j++];) {
		
		if (typeof header.getAttribute == 'undefined') {
			continue;
		}
		
		 if (header.className == "removeable") {
	        	strBuilder.append("<td width='20'><div class='removeable'></div></td>");
	        	continue;
		 }
		
		if (header.className == "remove") {
			strBuilder
					.append("<td width='20'><div class='removeable'></div></td>");
			continue;
		}

		var rsel = header.getAttribute("rowSelection");
		if (rsel == "multiple") {
			strBuilder
					.append("<td width='25'><div style='vertical-align:middle'><input type='checkbox' class='multiSelect' eid='"
							+ resource['id'] + "'/></div></td>");
		} else {
			var attr = header.getAttribute("value");
			var width = header.getAttribute("width");
			if (width)
				var cssWidth = width + "px";

			var align = header.getAttribute("align");
			if (!sys.isValid(align)) {
				align = "left";
			}

			var value;

			if (sys.isValid(cellRenderer)) {
				value = eval(cellRenderer + "(resource,attr)");
			} else {
                
				if (sys.isValid(attr)) {
					
					value = el.substitute(attr, resource, true);

				} 

			}

			strBuilder.append("<td width='" + width + "'><div style='width:")
					.append(cssWidth).append(";text-align:").append(align)
					.append("'>").append(value).append("</div></td>");
		}

	}
}

UIDataTable.prototype.attachEventHandlers = function() {
	
	var content = $('.gridRows', $(this.comp));
	content[0]['dataTable'] = this;
	var resName = this.entityName;
	
	$(document).ready(function() {
		    
		var trs = $("tr", content);
		var dataTable = content[0].parentNode.parentNode.parentNode.uiComp;
		for ( var i = 0, tr; tr = trs[i++];) {
			tr.regClass = tr.className;
			dataTable.attachRowSelection(tr);
		}
		
		
        trs = $(".removeable", content);
		
		for (var i=0,rm; rm = trs[i++];) {
			
			rm.onclick = function() {
				var tr =  this.parentNode.parentNode;
				var rid = tr.getAttribute("rid");
				entityStore.remove(resName,rid);
				var tb = tr.parentNode;
                tr.parentNode.removeChild(tr);
                
				if ($("tr",$(tb)).length == 0) {
					//$(tb).html("<tr height='100' valign='middle'><td align='center'><div style='line-height:100px;text-align:center'> -- Your shopping bag is empty -- </div></td></tr></tbody></table>");
				}
				try {
					eval("post"+resName+"Delete(" + rid+")");
				} catch (e) {
					// alert(e);
				}
				location.reload(true);
			}
		}
	});
}

UIDataTable.prototype.attachRowSelection = function(tr) {
	tr.onclick = function(e) {
		var dataTable = this.parentNode.parentNode.parentNode.parentNode.uiComp;
		if (sys.isValid(this.parentNode)) {
			if (dataTable.selectedRow != null) {
				dataTable.selectedRow.className = dataTable.selectedRow.regClass;
			}
			if (!sys.isValid(this.regClass)) {
				this.regClass = "";
			}
			this.className = this.regClass + " selected";
			dataTable.selectedRow = this;
			e = eventSys.getEvent(e);
			dataTable.setSelection(e, this);
		}
	}
	this.selectRow(tr);
}

UIDataTable.prototype.addFilterListeners = function() {
	if (this.filter && el.containsVariable(this.filter)) {
		var varas = el.getVariableNames(this.filter);

		for ( var j = 0, vara; vara = varas[j++];) {

			eventQueue.subscribe(EventName.variableChanged(vara),
					new EventSubscriber(this.comp.getAttribute("id")
							+ this.entityName + vara, function(e) {
						this.userObject.load();
					}, this));
		}
	}
}
UI.prototype.init_entityForm = function(node) {
	new UIEntityForm(node);
}

function UIEntityForm(comp) {
	this.entityName = comp.getAttribute("entity");
	this.entityVar = comp.getAttribute("listenVar");
	if (!sys.isValid(this.entityVar)) 
	  this.entityVar = fwUtil.getVarName(this.entityName);
	this.entityVarId = fwUtil.getEntityVarId(this.entityName);
	this.setComponent(comp);
};


UIEntityForm.prototype = new UIComp();

UIEntityForm.prototype.init = function() {
	var id = this.comp.getAttribute("id");

	var p = id + this.entityName + "-form";
	eventQueue.subscribe(EventName.add(this.entityVar), new EventSubscriber(
			p + "-new", function(event) {
				this.userObject.clear();
				this.userObject.postEntityNew();
			}, this));

	eventQueue.subscribe(EventName.removed(this.entityName),
			new EventSubscriber(p + "-removed",
					function(event) {
						this.userObject.clear();
					}, this));
	
	
	eventQueue.subscribe(EventName.variableChanged(this.entityVarId),
			new EventSubscriber(p + "-var",
					function(event) {
				       var valid = sys.isValid(event.data);
				       if (valid) 
 					     this.userObject.populate(event.data);
 					    this.userObject.postEntityView(valid);
					}, this));

	var saveBut = document.getElementById(id+"Submit");
	if (sys.isValid(saveBut)) {
	
		saveBut.entityForm = this;
		saveBut.onclick = function() {
			this.entityForm.submit();
	        return false;		
		}
    }
}

UIEntityForm.prototype.postEntityNew = function() {
	//make container visible
	var c = this.comp.parentNode;
	var pc = null;
	while (c != null) {
		if (sys.isValid(c.getAttribute("visibleOnVar"))) {
			pc = c;
			break;
		}
		c = c.parentNode;
	} 
	if (pc != null) {
		  pc.style.display = "block";
	  if (typeof pc.uiComp.postEntityNew == "function") {
		  pc.uiComp.postEntityNew();
	  }
	}
}

UIEntityForm.prototype.postEntityView = function(visible) {
	//make container visible
	var c = this.comp.parentNode;
	var pc = null;
	while (c != null) {
		if (c.nodeType == 1 && sys.isValid(c.getAttribute("visibleOnVar"))) {
			pc = c;
			break;
		}
		c = c.parentNode;
	} 
	if (pc != null) {
		  pc.style.display = (sys.isValid(visible) && visible) ? "block" : "none";
	  if (typeof pc.uiComp.postEntityView == "function") {
		  pc.uiComp.postEntityView(visible);
	  }
	}
}

UIEntityForm.prototype.isMultiPart = function() {

	var enctype = this.comp.getAttribute("enctype");
	return (sys.isValid(enctype) && enctype.toLowerCase() === 'multipart/form-data');
}


UIEntityForm.prototype.clear = function() {

	var inputElems = this.comp.getElementsByTagName("input");
	this.clearInputValues(inputElems);
	inputElems = this.comp.getElementsByTagName("select");
	this.clearInputValues(inputElems);
	inputElems = this.comp.getElementsByTagName("textarea");
	this.clearInputValues(inputElems);
}

UIEntityForm.prototype.clearInputValues = function(inputElems) {
	
	for ( var i = 0, elem; elem = inputElems[i++];) {
		
		if (elem.inputText) {
			elem.inputText.clear();
		}
	}
}

UIEntityForm.prototype.getEntity = function() {

	var object = {};

	var inputElems = this.comp.getElementsByTagName("input");
	this.populateObject(object, inputElems);
	inputElems = this.comp.getElementsByTagName("select");
	this.populateObject(object, inputElems);
	inputElems = this.comp.getElementsByTagName("textarea");
	this.populateObject(object, inputElems);
	return object;

}

UIEntityForm.prototype.populateObject = function(object, inputElems) {

	if (sys.isValid(inputElems)) {

		for ( var i = 0, elem; elem = inputElems[i++];) {
			if (elem.type != 'submit') {
				this.addInputValue(object, elem, elem.name);
			}
		}
	}
}

UIEntityForm.prototype.addInputValue = function(object, inputElem, inputName) {

	var index = inputName.indexOf(".");
	if (index == -1) {
		var val;
		if (inputElem.type == "radio") {
			if (inputElem.checked) object[inputName] = inputElem.value; 
		}
		else {
			object[inputName] = (inputElem.inputText) ? inputElem.inputText.getValue() : inputElem.value;
		}
	} else {

		var parent = inputName.substr(0, index);
		var curr = object;
		if (parent != this.entityVar) {
			curr = objectHelper.getAttrValue(object, parent);

			if (curr == null) {
				curr = {};
				object[parent] = curr;
			}
		}

		this.addInputValue(curr, inputElem, inputName.substr(index + 1));
	}
}


UIEntityForm.prototype.setEntity = function(entity) {

	var res = {};
	res[this.entityVar] = entity;

	// objectMap.put(this.comp.getAttribute("id"), res);
	object = objectHelper.flattenObject(res);

	var inputElems = this.comp.getElementsByTagName("input");
	this.setInputValues(inputElems, res);
	inputElems = this.comp.getElementsByTagName("select");
	this.setInputValues(inputElems, res);
	inputElems = this.comp.getElementsByTagName("textarea");
	this.setInputValues(inputElems, res);

};

UIEntityForm.prototype.setInputValues = function(inputElems, resource) {

	if (sys.isValid(inputElems)) {
        var value;
		for ( var i = 0, elem; elem = inputElems[i++];) {

			if (elem.type != 'submit') {

				if (sys.isValid(elem.expr)) {
					value = el.substituteVariables(elem.expr, resource);
				} 
				else {
					value = objectHelper.getAttrValue(resource, elem.name);
				}
				
				if (elem.inputText) {
				  elem.inputText.setValue(value);
				}
			}
		}
	}

}

UIEntityForm.prototype.populate = function(entityId) {

	
	if (sys.isValid(entityId)) {
		
		var filter = this.filter;
		var resource = null;
		
		if (filter != null) {
			
			filter = el.substituteVariables(filter);
			resource = entityStore
					.getFirstEntity(this.entityName, filter);
			
		} else
			resource = entityStore.get(this.entityName, entityId);
		
		this.setEntity(resource);
		return resource;
	} else this.clear();

};

UIEntityForm.prototype.getMultipartResponse = function(iframe) {

	var doc = iframe.contentDocument ? iframe.contentDocument
			: window.frames[iframe.id].document;

	if (doc.XMLDocument) {
		response = doc.XMLDocument;
	} else if (doc.body) {
		response = doc.body.innerHTML;
		if (response) {
			if (doc.body.firstChild
					&& doc.body.firstChild.nodeName.toUpperCase() == 'PRE') {
				response = doc.body.firstChild.firstChild.nodeValue;
			}
		}
	} else {
		response = doc;
	}

	setTimeout(function() {
		document.body.removeChild(iframe);
	}, 0);

	return response;

};



UIEntityForm.prototype.submit = function() {

	if (!this.validate()) {
		ui.messageBox
				.show("One or more invalid inputs found.");
		return;
	}

	try {

		if (this.isMultiPart()) {

			var url = entityStore.getPath(this.entityName);
			
			var iframe = document.createElement("iframe");
			iframe.setAttribute("name", "abc111");
			iframe.setAttribute("id", "abc111");
			iframe.setAttribute("src", "javascript:false;");
			iframe.style.display = 'none';
			document.body.appendChild(iframe);

			this.comp.setAttribute("method", "post");
			this.comp.setAttribute("action", entityStore.absURL(url));
			this.comp.setAttribute("onsubmit", "");
			this.comp.setAttribute("target", "abc111");
			this.comp.submit();

			var thisForm = this;
			iframe.onload = function() {
				
				var resource = thisForm.getMultipartResponse(iframe);
				resource = entityStore.parseResult(resource);
				thisForm.postSave(resource, true);
				try {
					eval("post" + this.entityName + "Save(resource)");
				} catch (e) {
					//alert(e);
				}
				ui.statusBar
						.show("The requested operation has been completed successfully");
			}

		} else {

			var entity = this.getEntity();
			var isNew = !sys.isValid(entity['id']);
			entity = entityStore.save(this.entityName, entity);
			
			this.postSave(entity, isNew);
			
			if (eval("typeof post" + this.entityName + "Save") == "function") {
				var n = this.comp.getAttribute("name");
				try {
					
					eval("post" + this.entityName + "Save(entity, '"+n+"')");
				} catch (e) {
					//alert(e);
				}
			}
			
			if (entity[STATUS_MSG] != NULL) {
			  var msg = this.comp.getAttribute("successMsg");
			  if (msg != 'null') {
			    if (!msg) msg = "The requested operation has been completed successfully";
			    ui.statusBar.show(msg);
			  }
			}
		}

	} catch (e) {
		ui.messageBox.error(e);
		//throw e;
	}

}

UIEntityForm.prototype.postSave = function(entity, isNew) {

	if (sys.isValid(entity)) {
		this.setEntity(entity);
		var res = {};
		res[this.entityVar] = entity;
		var e = {};
		e.name = EventName.saved(fwUtil.getEntityVarId(this.entityName));
		e.data = res;
		e.isNew = isNew;
		eventQueue.publish(e);
	}

};


UIEntityForm.prototype.validate = function() {

	var inputElems = this.comp.getElementsByTagName("input");
	var isValid = true;
	if (!this.isInputValid(inputElems)) {
		isValid = false;
	}
	inputElems = this.comp.getElementsByTagName("select");

	if (!this.isInputValid(inputElems)) {
		isValid = false;
	}
	inputElems = this.comp.getElementsByTagName("textarea");
	if (!this.isInputValid(inputElems)) {
		isValid = false;
	}

	return isValid;

};

UIEntityForm.prototype.isInputValid = function(inputElems) {

	var isValid = true;
	for ( var i = 0, elem; elem = inputElems[i++];) {

		if (elem.type == 'submit' || elem.type == 'hidden') {
			continue;
		}
		
		if (elem.inputText && !elem.inputText.isValid()) {
			elem.inputText.errorOut();
			isValid = false;
		}
	}

	return isValid;
};


UI.prototype.init_toolbar = function(node) {
   new UIToolbar(node);
}

function UIToolbar(comp) {
	this.setComponent(comp);
};

UIToolbar.prototype = new UIComp();

UIToolbar.prototype.init = function() {
	
	var buttons = $('div[class="toolbarCommand"]', $(this.comp));

	var entity = this.comp.getAttribute("entity");
	
	var entityVar = this.comp.parentNode.getAttribute("var");
	if (!sys.isValid(entityVar))
	  entityVar = fwUtil.getVarName(entity);

	for ( var i = 0, b; b = buttons[i++];) {

		var button = b.getElementsByTagName("span")[0];
		button.entityVar = entityVar;
		if (button.onclick == null || button.onclick == undefined) {

			button.onclick = function(e) {
				e = eventSys.getEvent(e);
				var event = null;
				switch (this.className) {
				case "buttonNew":
					
					e.name = EventName.add(this.entityVar);
					e.data = entity;
					event = e;
					
					break;
				case "buttonDelete":
					e.name = EventName.remove(this.entityVar);
					e.data = entity;
					event = e;
					break;
				case "buttonSearch":
					break;
				case "buttonSave":
					e.name = EventName.save(this.entityVar);
					e.data = entity;
					event = e;
					break;
				default :
					try {
						
						eval("toolbarCommand"+this.className+"Clicked()");
					} catch (e) {
						alert(e);
					}
				}

				if (event != null) {
					eventQueue.publish(event);
				}
			}
		}

	}

}
UI.prototype.overlay = {
	add : function() {
		if (!document.getElementById("overlay")) {
			var ol = document.createElement("div");
			ol.setAttribute("id", "overlay");
			document.documentBody.appendChild(ol);
		}
	},
	show : function() {
		if (document.getElementById("overlay"))
			document.getElementById("overlay").style.display = "block";
	},

	hide : function() {
		if (document.getElementById("overlay"))
			document.getElementById("overlay").style.display = "none";
	}
}
UI.prototype.init_dialog = function(node) {
	ui.overlay.add();
	this.init_closeDialogIcon(node);
}

UI.prototype.init_closeDialogIcon = function(node) {
	$(".dlgClose", $(node)).click(function() {
		$(this).parent().parent().fadeOut(500);
		ui.overlay.hide();
	});
}

UI.prototype.dialog = {
	
	showById : function(nodeId) {
		this.show(document.getElementById(nodeId));
	},
	show : function(node) {
		
		if (node.parentNode.nodeName != "BODY") {
			node.parentNode.removeChild(node);
			$("body").append($(node));
		}
		
		ui.overlay.show();
		// node.style.display = "block";
		$(node).hide().fadeIn(500);
		ui.input.focus(node);
		
		new UIComp(node).center();

		// var event = new
		// Event(ViewEvent.dialogVisible(node.getAttribute("id")),
		// node);
		// eventQueue.publish(event);

	},

	hideById : function(nodeId) {
		$('#'+nodeId).fadeOut(500);
		ui.overlay.hide();
		// var event = new Event("event.dialog.hidden", node);
		// eventQueue.publish(event);
	}
}
UI.prototype.autoSuggestPopup = function() {

}

function UIAutoSuggestPopup() {

}

UIAutoSuggestPopup.prototype.getHtml = function() {
	return '<div id="autoSuggest" class="autoSuggest"><ul></ul></div>';
}

UIAutoSuggestPopup.prototype.show = function(parentNode) {
	var node = document.getElementById("autoSuggest");
	if (!node) {
		document.appendHTML(this.getHtml());
		node = document.getElementById("autoSuggest");
		$("body").append($(node));
		$(document).click(function() {
			$(".autoSuggest").fadeOut(500);
		});
	}

	if (parentNode.value != "") {

		var val = parentNode.value;
		var autoSuggest = this;
		entityStore.mget("ProductLineItem",
				"searchTerms=[like]" + parentNode.value + "&pageSize=25", function(resources) { 
			resources = resources["items"];
			if (val == parentNode.value && resources && resources.length > 0) {
				var str = "<ul>";
				var m = {};
				for ( var i = 0, res; res = resources[i++];) {
					if (!m[res['product']['id']]) {
						str += "<li>";
						var d = "";
						if (sys.isValid(res['product']['brand']))
							d = res['product']['brand'] + " ";  
						d += res['product']['name'];
						
						str += d +"</li>";
						m[res['product']['id']] = res['product'];
					}
	
				}
				str += "</ul>"
	
				$(node).html(str);
	
				lis = node.getElementsByTagName("li");
	
				for ( var i = 0, li; li = lis[i++];) {
					li.onclick = function(e) {
						var h = $(this).html().replace("&amp;", "&");
						parentNode.value = decodeURI(h);
						parentNode.focus();
						parentNode.parentNode.submit();
						
					}
				}
				$(node).hide().fadeIn(500);
				new UIComp(node).position(parentNode);
			} else {
				autoSuggest.hideById("#autoSuggest");
			}
		});
	} else
		this.hideById("#autoSuggest");

}

UIAutoSuggestPopup.prototype.hideById = function(nodeId) {
	$("#autoSuggest").fadeOut(500);
}

UIAutoSuggestPopup.prototype.selectNextItem = function(input) {
	var sel = this.selected();

	var sl;
	if (sel.index == -1) {
		sl = sel.list[0];
		input.actValue = input.value;
	}
	else {
		sl = sel.list[sel.index];
		sel.list[sel.index - 1].className = "";
	}
	if (sl) {
		sl.className = "sel";
	    input.value = unescape($(sl).html());
	}
	else input.value = input.actValue;
}

UIAutoSuggestPopup.prototype.selectPrevItem = function(input) {

	var sel = this.selected();

	var sl;
	if (sel.index == -1) {
		sl = sel.list[sel.list.length-1];
		input.actValue = input.value;
	}
	else {
		sl = sel.list[sel.index-2];
		sel.list[sel.index - 1].className = "";
	}
	if (sl) {
	  sl.className = "sel";
	  input.value = unescape($(sl).html());
	}
	else input.value = input.actValue;
}

UIAutoSuggestPopup.prototype.selected = function() {
	ul = document.getElementById("autoSuggest").getElementsByTagName("ul")[0];
	var lis = ul.getElementsByTagName("li");
	if (!lis || lis.length == 0)
		return -1;
	var i = 0;
	for ( var li; li = lis[i++];) {
		if (li.className == "sel") {
			break;
		}
	}

	if (i == lis.length+1) i = -1;
	return {index : i, list : lis};

}

UI.prototype.init_popup = function(node) {
	
	ui.popup.attachClose(node);
}

UI.prototype.popup = {

	attachClose : function(node) {
		$(".popupClose", $(node)).click(function() {
			$(this).parent().parent().fadeOut(500);
		});
	},	
		
    showById : function(nodeId, parentId) {
	  this.show(document.getElementById(nodeId), document.getElementById(parentId));
    },
		
	show : function(node, parentNode) {
		$(node).hide().fadeIn(500);
		new UIComp(node).position(parentNode);
		ui.input.focus(node);
	},

	hideById : function(nodeId) {
		this.hide(document.getElementById(nodeId));
	},
	
	hide : function(node) {
		if (!sys.isValid(node))
			node = $('.popup'); 
		    $(node).fadeOut(500);
	},

	hideParent : function(childNode) {
		var p = document.getParentByClass(childNode, "popup");
		if (p != null)
			this.hide(p);
	}
}

UI.prototype.init_popupLink = function(node) {
	
	ui.popup.attachClose(node);
	
	var cpnt = document.getElementById(node.getAttribute(CLINK));
	node.removeChild(cpnt);
	$("body").append($(cpnt));
	var popupFn = function(nd, e) {
		var cpnt = document.getElementById(nd.getAttribute(CLINK));
		ui.popup.show(cpnt, nd);
	}

	node.onclick = function(e) {
		
		popupFn(this, e);
		return false;
	}
	
	ui.init_loginPopup(node);
}

UI.prototype.init_loginPopup = function(node) {

	var id = node.getAttribute("id");
	
	if (id == "loginPopup" ) {
		
		$(".newUser")[0].onclick = function(e) {
			ui.popup.hideParent(this);
			loginFn(document.getElementById("regPopup"), e);
		}
		$(".forgotPass")[0].onclick = function(e) {
			ui.popup.hideParent(this);
			var cpnt = document.getElementById("forgotPassPopup");
			ui.popup.show(cpnt, document.getElementById("loginPopup"));
	
		}
		$(".regUser")[0].onclick = function(e) {
			ui.popup.hideParent(this);
			loginFn(document.getElementById("loginPopup"), e);
		}
	}
}

var loginFn = function(node, e) {
	try {
		eventSys.preventDefault(e);
		var cpnt = document.getElementById(node.getAttribute(CLINK));
		$("#loginMsg", cpnt).html("");
		$("#registerMsg", cpnt).html("");
		var popup = document.getElementById("loginPopup").getAttribute(CLINK);
		ui.popup.hideById(popup);
		var popup = document.getElementById("regPopup").getAttribute(CLINK);
		ui.popup.hideById(popup);
		ui.popup.show(cpnt, node);
	} catch (e) {
		alert(e);
	}
	return false;
}
UI.prototype.init_splitPane = function(node) {
	new UISplitPane(node);
}


function UISplitPane(comp) {

  this.splitter = null;
  this.sibling1 = null;
  this.sibling2 = null;
  var nds = comp.childNodes;

  for ( var i = 0, nd; nd = nds[i++];) {
		if (nd.nodeType == 1) {
			
			if (nd.className.contains("spLeft")) this.sibling1 = nd; 
			else if (nd.className.contains("spRight")) this.sibling2 = nd; 
			else if (nd.className.contains("splitter")) this.splitter= nd;
		}	
  }
  
  this.setComponent(comp);
};

UISplitPane.prototype = new UIComp();

UISplitPane.prototype.init = function() {
	
	this.splitter.onmousedown = function() {
			
      var sp = this.parentNode;
      document.onmousemove = function (e) {
    	  e = e || event;
    	  document.fixPageCoordinates(e);
    	  sp.uiComp.splitter.style.left = e.pageX-7+'px';
    	  sp.uiComp.splitter.setAttribute("left",e.pageX-7)
    	  sp.uiComp.sibling1.style.width = sp.uiComp.splitter.style.left;
    	  sp.uiComp.sibling2.style.left = e.pageX+15+'px';
    	  e.preventDefault();
      }      
      
      document.onmouseup = function(e) {
    	  document.onmousemove = null;
      }
      
      this.onmouseup = function(e) {
    	  document.onmousemove = null;
//    	  e = e || event;
//    	  dom.fixPageCoordinates(e);
//    	  divs[0].style.width = splitter.style.left;
//    	  divs[2].style.left = e.pageX+15+'px';
      }
	}
	
	this.splitter.ondragstart = function() {return false;};
	
};


UI.prototype.init_tabs = function(node) {

	new UITabs(node);
}

function UITabs(comp) {
	
	this.setComponent(comp);
};

UITabs.prototype = new UIComp();

UITabs.prototype.init = function() {
	
	var ul = this.comp.getElementsByTagName("ul")[0];

	if (ul) {
		document.eachChildElement(ul, function(nd, menu) {
		
			nd.onclick = function(e) {
				this.parentNode.parentNode.uiComp.selectTab(this,"");
			}
			
			if (nd.className.contains("sel")) {
				$('#tc-' + $(nd).attr("id")).css("display", "");
			}
		}, this);

		$($("a", $(ul))[0]).attr("class", "sel");
	}
}

UITabs.prototype.selectTab = function(tab, siblings) {
	tab = $(tab);
	tab.siblings().attr("class", "tab");
	$('a', tab.siblings()).attr("class", "null");
	$("a", tab).attr("class", "sel");
	tab.attr("class", "tab sel");
	tab.siblings().css("display",siblings);
	$(".tci-" + tab.parent().parent().attr("id")).css("display","none");
	$('#tc-' + tab.attr("id")).css("display", "");
}


UITabs.prototype.postEntityNew = function() {
	var ul = this.comp.getElementsByTagName("ul")[0];
	this.selectTab(ul.getElementsByTagName("li")[0], "none");
}

UITabs.prototype.postEntityView = function() {
	var ul = this.comp.getElementsByTagName("ul")[0];
	this.selectTab(ul.getElementsByTagName("li")[0], "");
}

UI.prototype.init_tree = function(node) {
	new UITree(node);
}

UI.prototype.init_entityTree= function(node) {
	new UITree(node);
}



function UITree(comp) {
	this.setComponent(comp);
}

UITree.prototype = new UIComp();


UITree.prototype.init = function() {

	var tree = $(this.comp);
	var thisObj = this;
	var id = this.comp.getAttribute("id");
	
	var options = {};
    options.duration = 1000;
    options.easing = null;
	$('.folder', tree).click(function() {
		var comp = $(this);
		var nds = this.parentNode.childNodes;
		for (var i=0, nd; nd=nds[i++];) {
			if (nd.nodeName == "UL") { 
				if (this.className.indexOf('collapsed') != -1) {
					$(nd).slideDown( {
			              duration : options.duration,
			              easing : options.easing
			          });
					comp.removeClass('collapsed').addClass('expanded');
				}
				else {
					$(nd).slideUp( {
			            duration : options.duration,
			            easing : options.easing
			        });
					comp.removeClass('expanded').addClass('collapsed');
				}
			}
		}
		
	});
	
	$(".treeNode", tree).click(function() {
		var pN = $(".selected", tree)[0];
		if (sys.isValid(pN)) {
		  pN.className = pN.className.substring(0,pN.className.indexOf(" selected"));
		}
		this.className = this.className+" selected";
		eval(this.getAttribute("href"));
		
	});
	
};
UI.prototype.messageBox = {

	getHtml : function() {

		return "<div id='messageBox' style='width:500px'>"
				+ "<div class='head'>Message</div>"
				+ "<div class='content'/>"
				+ "<div class='foot'><div class='buttonGrp'><button onclick='ui.messageBox.hide()'>Close</button></div></div>"
				+ "</div>"
				+ "<script type='text/javascript'>window.onDocReady(function() {"
				+ "try {$('#messageBox').draggable();} catch (e) { if (sys != undefined) sys.alert(e)}"
				+ "});</script>";

	},

	hide : function() {
		$('.overlay').css("display", "none");
		$('#messageBox').fadeOut(500);
	},

	error : function(ex) {
		if (ex.message) {
			ex = ex.message;
		}
		this.show(ex, "error");
	},

	show : function(message, type) {

		if (!document.nodeExists("messageBox")) {
			document.appendHTML(this.getHtml());
		}

		var msgBox = $('#messageBox');
		$(".content", '#messageBox').html(message);
		$('.overlay').css("display", "block");
		//msgBox.css("display", "");
		msgBox.hide().fadeIn(500);

	}

}

UI.prototype.statusBar = {

	getHtml : function() {

		return "<div id='statusBar'><div class='close' onclick='ui.statusBar.hide()'>X</div>"
				+ "<div class='content'>" + "</div></div>";

	},

	hide : function() {
		$('#statusBar').fadeOut(500);
	},

	show : function(message, type) {

		if (!document.nodeExists("statusBar")) {
			document.appendHTML(this.getHtml());
		}

		var bgImage = "success.png";

		if (sys.isValid(type)) {
			switch (type) {
			case "error":
				bgImage = "error.png";
				break;
			}
		}

		var stausBar = $('#statusBar');
		var content = $(".content", '#statusBar');
		content.css( {
			background : "url('" + THEME_HOME + "img/" + bgImage
					+ "') no-repeat left center",
			color : "#000000"
		});

		content.html(message);

		$('#statusBar').hide().fadeIn(500);
		setTimeout(function() {
			ui.statusBar.hide();
		}, 5000);

	}
}

UI.prototype.init_window = function(node) {
}

UI.prototype.window = {

	show : function(url,name,width, height) {
	    
		var sX = window.screenX ? window.screenX : window.screenLeft;
		var sY = window.screenY ? window.screenY : window.screenTop;
		
		var sWidth = window.outerWidth ? window.outerWidth : document.getBody().clientWidth;
		
		var sHeight = window.outerHeight ? window.outerHeight : (document.getBody().clientHeight - 25);
		var left = parseInt(sX + ((sWidth - width) / 2), 10);
		var top = parseInt(sY + ((sHeight - height) / 2.5), 10);
		
		var features = ('left='+ left + ',top=' + top + ',width=' + width + ',height=' + height);
		
		var win = window.open(url,"",features);
	    
        if (win.focus) win.focus();
        return win;
	},

	hide : function(node) {
		if (sys.isValid(node))
			node.style.display = "none";

		else {
			$('.window').css("display", "none");
		}
		ui.overlay.hide();
	},

	hideParent : function(childNode) {
		var p = document.getParentByClass(childNode, "window");
		if (p != null)
			this.hide(p);
	}
}

UI.prototype.input = {

	focus : function(parentNode) {
		var ins = $("input", $(parentNode));
		for ( var i = 0, inp; inp=ins[i++];) {
			if (inp.getAttribute("type") == "text") {
				inp.focus();
				break;
			}
		}
	}
}

UI.prototype.init_inputHidden = function(node) {
	node.inputText = new UITextField(node);
}

UI.prototype.init_inputDecimal = function(node) {
	node.inputText = new UITextField(node);
}

UI.prototype.init_inputDate = function(node) {
	
	$(node).datepicker( {
		changeMonth : true,
		changeYear : true,
		dateFormat : 'dd-mm-yy',
		onSelect : function(dp) {
		 if (sys.isValid(this.getAttribute("onselect"))) 
		    try {
		    	eval(this.getAttribute("onselect"));
		    } catch (e) {sys.alert(e)}
	    }
	});
	
	node.inputText = new UITextField(node);
}
UI.prototype.init_inputText = function(node) {
	node.inputText = new UITextField(node);

	if (node.getAttribute("autoSuggest") == "true") {
		node.autoSuggestPopup = new UIAutoSuggestPopup();
		node.thinkTime = 100;
	   node.onkeyup = function(e) {
		  e = eventSys.getEvent(e);
		  var cd = eventSys.getCharCode(e);
		  if (cd == 40) {
			  this.autoSuggestPopup.selectNextItem(this);
		  }
		  else if (cd == 38) {
			  this.autoSuggestPopup.selectPrevItem(this);
		  }
		  else {
			  var tt = new Date().getTime();
			  if (tt >= this.thinkTime+200) {
				  this.thinkTime = tt;
			    this.autoSuggestPopup.show(this);
			  }
		  } 
	  }	
	}
}

UI.prototype.init_inputInt = function(node) {
	node.inputText = new UITextField(node);
}

UI.prototype.init_inputTextarea = function(node) {
	node.inputText = new UITextField(node);
}


UI.prototype.init_inputFile = function(node) {
	node.inputText = new UITextField(node);
}

UI.prototype.init_selectBooleanCheckBox = function(node) {
	node.inputText = new UITextField(node);
}

UI.prototype.init_selectOneEntityMenu = function(node) {
	node.inputText = new UITextField(node);
}

function UITextField(textField) {
	this.field = textField;
}

UITextField.prototype.isValid = function() {

	var val = this.field.value;
	
	if (this.field.getAttribute("req") == 'true') {
		if (!sys.isValid(val)) {
			return false;
		}
	} else if (val == "")
		return true;

	
	var l = this.field.getAttribute("valLen");
	if (sys.isValid(l) && val.length != l) {
		return false;
	}

	var reg = this.field.getAttribute("regExp");
	if (sys.isValid(reg)) {
		var rEx = new RegExp(reg);
		if (!rEx.test(val)) {
			return false;
		}
	}

	return true;

};

UITextField.prototype.setDefault = function() {

	this.field.value =  "";
	
	var v = this.field.getAttribute("var");
	var value = "";
	if (sys.isValid(v)) {
		if (el.isVariable(v)) v = el.getVariableName(v);
		this.field.value = variable.get(v);
	}

	if (!sys.isValid(this.field.value) && sys.isValid(this.field.getAttribute('default'))) {
		this.field.value = this.field.getAttribute('default');
	}
};

UITextField.prototype.getValue = function() {
	var val = "";

	if (this.isCKEditor()) 	val = CKEDITOR.instances[this.field.getAttribute("id")].getData();
	else {
		switch (this.field.getAttribute("type")) {
			case 'checkbox':
				val = (this.field.checked) ? 'Y' : 'N';
				break;
			default:	
			   val = this.field.value;
		}
		
		if (!sys.isValid(val) && sys.isValid(this.field.getAttribute('default'))) {
			val = this.field.getAttribute('default');
		}
		
	}

	return val;
};

UITextField.prototype.setValue = function(value) {
	
	if (!sys.isValid(value)) {
		value = "";
	}
	
	if (this.field.nodeName == 'SELECT') {
		var selected = false;
		for ( var i = 0; i < this.field.options.length; i++) {
			if (this.field.options[i].value == value) {
				this.field.options[i].selected = true;
				selected = true;
			}
		}

		if (!selected) this.field.options[0].selected = true;
	} else {

		switch (this.field.getAttribute("type")) {
		case 'checkbox':
			this.field.checked = (value == 'Y');
			break;
		case 'file':
			break;
		default:

			if (this.isCKEditor()) CKEDITOR.instances[this.field.getAttribute("id")].setData(value);
		    else this.field.value = value;
		}
	}
};

UITextField.prototype.clear = function() {
	if (this.field.type == 'submit') {
		return;
	}

	if (this.isCKEditor()) 
		CKEDITOR.instances[this.field.getAttribute("id")].setData("");
    else {

    	switch (this.field.getAttribute("type")) {
		case 'checkbox':
			this.field.checked = false;
			break;
		default:	
			this.setDefault();
	  }
	}
}


UITextField.prototype.isCKEditor = function() {
	
	if (this.field.nodeName == "TEXTAREA") {

		var cs = this.field.getAttribute("class");
		if (sys.isValid(cs) && cs.indexOf("ckeditor") != -1) {
			return true;
		}
			
	}
	
	return false;
}

UITextField.prototype.errorOut = function() {
	$(this.field).css('background-color', '#ec9486');
	$(this.field).focus(function(event) {
	  $(event.target).css('background-color', '');
	});
}
UI.prototype.init_commandButton = function(node) {
	var onclick = node.getAttribute("onclick");

	if (!onclick) {
		var type = node.getAttribute("type");

		if (type === "submit" && !node.parentNode.getAttribute("target")) {
            //alert(node.getAttribute("onClick")+"  "+node.getAttribute("onclick"))
			if (!sys.isValid(node.getAttribute("onclick"))) {

				node.onclick = function(e) {

					var nd = this.parentNode;
					var form = null;
					while (sys.isValid(nd)) {
						if (nd.className.indexOf("entityForm") != -1) {
							form = nd;
							break;
						}
						nd = nd.parentNode;
					}

					var form = new UIEntityForm(form);
					form.submit();
					return false;
				}
			}
		}
	}
}
UI.prototype.init_timeSlot = function(node) {
	var addrId = parseInt($("#custAddrId").html());
	document.getElementById("poDelAddr").value = addrId;
	var b = node.getElementsByTagName("tbody")[0];
	b.onclick = function(e) {
		e = eventSys.getEvent(e);
		var td = eventSys.getOriginNode(e);
		var date = td.getAttribute("date");
		var slot = td.getAttribute("slot");
		var slotId = td.getAttribute("slotId");
		if (sys.isValid(date)) {
			$('.selected', $(node.parentNode.parentNode)).attr("class", "");
			eventSys.getOriginNode(e).className = "selected";
			var fn = this.parentNode.getAttribute("onSlotSelect");
			if (sys.isValid(fn))
				eval(fn);
		}
	}
}
UI.prototype.init_fbLogin = function(node) {
	node.setAttribute("title","Login By Facebook");
	node.onclick = function(e) {
		var url = 'https://www.facebook.com/dialog/oauth?client_id=358125640942503&redirect_uri=https%3A%2F%2Fwww.dewbag.com%2Fcommon%2Fsocial%2Ffb%2FfbLogin.html&state=facebooklogin&display=popup&scope=email&response_type=token';
		fbWin = ui.window.show(url,"Login By Facebook", 500, 300);
		checkFBWin();
	}
}

var fbWin;

function checkFBWin() {
	  if (fbWin.closed) {
		try {  
		  window.setCookie("UID",fbWin.UID);
		} catch (e){
			//IE hack. ignore
		}
		//window.location.reload(true);  		
	  } else setTimeout("checkFBWin()",1);
}

UI.prototype.init_googleLogin = function(node) {
	node.setAttribute("title","Login By Google");
	node.onclick = function(e) {
		var url = 'https://accounts.google.com/o/oauth2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=%2Fprofile&redirect_uri=https%3A%2F%2Fwww.dewbag.com%2Fcommon%2Fsocial%2Fgoogle%2FgLogin.html&response_type=token&client_id=1062338590500.apps.googleusercontent.com';
		goWin = ui.window.show(url,"Login By Google", 500, 400);
		checkGoWin();
	}
}

var goWin;

function checkGoWin() {
	  if (goWin.closed) {
		  try {
		   window.setCookie("UID",goWin.getCookie("UID"));
		  } catch (e){
				//IE hack. ignore
	      }
		 //window.location.reload(true);	      
	  } else setTimeout("checkGoWin()",1);
}


function WebServer(appURL) {
	this.appURL = appURL != undefined ? appURL : null;
}

WebServer.prototype = {

	absURL : function(url) {
		
		if (this.appURL == null || url.charAt(0) == '/')
			return url;
		
		return this.appURL + url;
	},

	get : function(url, callback) {
		return this.invoke(url, 'GET', null,callback);
	},

	post : function(url, data, callback) {
		return this.invoke(url, 'POST', data, callback);
	},

	remove : function(url, callback) {
		return this.invoke(url, 'DELETE', null, callback);
	},

	invoke : function(url, method, data, callback) {

		if (!data || data == null) data = {};
		var as = (callback != undefined);
		showAjaxLoader();
		bodyContent = $.ajax({
			async : as,
			url : this.absURL(url),
			global : false,
			type : method,
			cache : false,
			data : data.payload,
			contentType : data.contentType,
			timeout: 2000,
			success : function(data, status, jqXHR) {
				if (status == 'timeout') alert("Timed out");
				else if (as) {
				  hideAjaxLoader();
				  if (callback) {
					callback(data);
				  }
				}
				
			},
		    error : function(jqXHR, status, error) {
		    	alert("#### E "+status);
		    	hideAjaxLoader();
		    	if (status == 'timeout') alert("Timed out");
		    	else if (jqXHR.status >= 300)
			      alert(jqXHR.status+" : "+error);
			}
		}).responseText;

		if (!as) hideAjaxLoader();
		
		return bodyContent;
	}
}

function EntityStore(server) {
	this.server = server;
}

EntityStore.prototype = {

	absURL : function(relativeUrl) {
		return this.server.absURL(relativeUrl);
	},	
		
	getIdPath : function(entity, id, params) {

		if (sys.isValid(params))
			params = "?" + params;
		else
			params = "";

		if (!sys.isValid(id)) {
			return entity + params;
		}

		return entity + "/" + id + params;
	},

	getPath : function(entity, filter) {

		if (!sys.isValid(filter)) {
			return entity;
		}

		return entity + "?" + filter;
	},

	parseResult : function(result) {

		if (!sys.isValid(result) || result == "null") {
			return null;
		}

		if (typeof result == "object") return result;
		
		try {

			var object = JSON.parse(result);

			if (sys.isValid(object[ERROR_MSG])) {

				throw object[ERROR_MSG];
			}
			
			return object;
		} catch (e) {
			throw e;
		}
	},

	get : function(entityName, id, params, callback) {
		
		if (callback) {
			this.server.get(this.getIdPath(entityName, id, params), function(result) {
			  callback(entityStore.parseResult(result));
			});
		}
		else {
		  var result = this.server.get(this.getIdPath(entityName, id, params));
		  return this.parseResult(result);
		}
	},

	getFirst : function(entityName, filter) {
		var entities = this.mget(entityName, filter);

		if (sys.isValid(entities)) {

			return entities["items"][0];
		}

		return null;
	},
	
	mget : function(entityName, filter, callback) {
		if (sys.isValid(filter)) {
			filter = el.substitute(filter);
		}

		var path = this.getPath(entityName, filter);

		return this.parseResult(this.server.get(path, callback));

	},

	save : function(entityName, entity) {
		
		var url = this.getIdPath(entityName, entity['id']);

		var data = {};
		data.payload = JSON.stringify(entity);
		data.contentType = "application/json";
		result = this.server.post(url, data);
		return this.parseResult(result);
	},

	remove : function(entityName, id) {
		return this.server.remove(this.getIdPath(entityName, id));
	},

	mremove : function(entityName, filter) {

		return this.server.remove(this.getPath(entityName, filter));
	}
};

var APP_HOME = "/";
var WEB_FW_HOME = "/fw/";
if (!THEME_NAME)
  var THEME_NAME = "basic";
var THEME_HOME = WEB_FW_HOME + "theme/" + THEME_NAME + "/";

var ui = null;
var webServer = null;
var entityStore = null;
var eventQueue = new EventQueue();

var ERROR_MSG = "ERROR";
var NULL = "^NULL^";
var CLINK = "cl";
var STATUS_MSG = "^STATUS^";

(function() {
	window.onDocReady(function() {
		jQuery.support.cors = true;
		try {
			
			ui = new UI();
			webServer = new WebServer(APP_HOME);
			entityStore = new EntityStore(new WebServer(APP_HOME + "bo/"));
			xhtmlParser.parse(document.documentBody);
		} catch (e) {
			alert("LOAD0001 : " + e);
		}
	});

})();

function loadContent(uri) {
	try {
	  urlLoader.loadXHtml(uri,'content');
	} catch (e) {
		sys.alert(e);
	}
} 

function loadContentRight(uri) {
	eventQueue.clear();
	try {
	  
		urlLoader.loadXHtml(uri,'content-right');
	  
	} catch (e) {
		sys.alert(e);
	}
} 

function loggedIn() {
	return sys.isValid(window.getCookie("UID"));
}

function loginSocial(email, accessToken) {
	var data = {};
	data["payload"] = "userName="+email+"&accessToken="+accessToken;
	data["contentType"] = "application/x-www-form-urlencoded";
	webServer.post("account/login",data);
}


function postLogin(loc) {
	ui.popup.hide();
	ui.ajaxLoader.hideInNode("loginAjaxLoader");
	if (sys.isValid(redirectURL))
		window.top.location = redirectURL;
	else
		window.top.location = loc;
}

function postLoginFailure(msg) {
	ui.ajaxLoader.hideInNode("loginAjaxLoader");
	var loginBox = document.getElementById('loginMsg');
	loginBox.innerHTML = msg;
}

function postEmailRegistration(loc) {
	ui.ajaxLoader.hideInNode("regAjaxLoader");
	ui.popup.hide();
	ui.messageBox
			.show('Thanks for registering with DewBag. <br>We have sent you an email to confirm your registration');
	// window.top.location = loc;
}

function postMobileRegistration(mobileNo) {
	ui.ajaxLoader.hideInNode("regAjaxLoader");
	ui.popup.hide();
	
	urlLoader.loadXHtml("/common/view/MobilePhoneConfirmationForm.xhtml?m="+mobileNo, document.documentBody, 'A');
	ui.dialog.showById("mobileConfDialog");
}

function postMobileConfirmation(loc) {
	ui.ajaxLoader.hideInNode("regAjaxLoader");
	ui.dialog.hideById("mobileConfDialog");
	ui.messageBox
			.show('Thanks for your confirmation. <br>Please login to continue shopping');
	// window.top.location = loc;
}

function postRegistrationFailure(msg) {
	ui.ajaxLoader.hideInNode("regAjaxLoader");
	var msgBox = document.getElementById('registerMsg');
	msgBox.innerHTML = msg;
}

function postMobileConfirmationFailure(msg) {
	ui.ajaxLoader.hideInNode("regAjaxLoader");
	var msgBox = document.getElementById('mobileRegMsg');
	msgBox.innerHTML = msg;
}

function loadMiniCart(rs) {
  miniCart.loadItems(rs);	
}

var miniCart = {

	cart : null,
	items : {},
	size : 0,

	init : function() {
		this.cart = $('#miniCart');
		//this.cart.draggable();
		this.load();

	},

	clear : function() {
		$("#mcItems").html("<tr><td>Shopping cart is empty</td></tr>");
		$('.cartCount').html(0);
	},

	load : function() {
		entityStore.get("SessionCart", "1", null, loadMiniCart);
	},
	
	loadItems: function(rs) {
		
		if (!rs) return;
		var items = rs['cartItems'];

		if (items.length > 0) {
			for ( var i = 0, item; item = items[i++];)
				this.displayItem(item);
			this.updateTotalPrice(rs['itemSummary']);
			this.cart.fadeIn(500);
		} else
			this.cart.fadeOut(500);

		this.updateProductQuantity();
	},

	updateCart : function(pid, qty) {
		ui.ajaxLoader.showInNode("ajaxMCLoader");
		this.cart.fadeIn(500);
		try {
			var object = {};
			object["productLineItem"] = {};
			object["productLineItem"]["id"] = pid;
			object["quantity"] = ""+qty;
			var resource = entityStore.save("ShoppingCartLineItem", object);

			if (!sys.isValid(resource)) {
				ui.messageBox
						.show("Unable to add/update the item to the cart.");
				return;
			}

			var cd = resource['code'];
			if (sys.isValid(cd)) {
				resource = resource['entity'];
			}
			if (cd == "Deleted") {
				var etr = $('#mcpid' + pid);
				if (etr.length > 0) {
					etr.remove();
				}
				this.updateCount();
			} else {
				this.displayItem(resource['cartItem']);
			}
			this.updateTotalPrice(resource['itemSummary']);
			ui.ajaxLoader.hideInNode("ajaxMCLoader");
			
			if (!sys.isValid(resource['message'])) resource['message'] = ""; 
			$('#mcMsg').html(resource['message']);
			
			
			return resource;
		} catch (e) {
			ui.ajaxLoader.hideInNode("ajaxMCLoader");
			alert(e);
		}
	},

	updateCount : function(t) {
		var trs = $(".seq", $("#mcItems"));
		var i;
		for (i = 0; tr = trs[i++];)
			$(tr).html(i);
		if (i > 0)
			i--;
		$("#mcartCount").html(i);
		$(".cartCount").html(i);
	},

	getProduct : function(pId) {
		var p, cX, cY, cpId = $("#mcpid" + pId);
		this.cart.fadeIn(500);
		var citems = $("#mcItems tr:first");
		if (citems.offset().left != 0) {

			if (cpId.length > 0) {
				cX = $(cpId[0]).offset().left;
				cY = $(cpId[0]).offset().top;
			} else {
				cX = citems.offset().left;
				cY = citems.offset().top-100;
			}
			p = cpId;
		} else {
			cX = this.cart.offset().left;
			cY = this.cart.offset().top;
			p = this.cart;
		}

		return {
			p : p,
			x : cX,
			y : cY
		};
	},

	updateTotalPrice : function(itemSummary) {
		if (itemSummary) {
		  $("#mcTotalPrice").html(itemSummary['grandTotal']);
		  $("#mcSavings").html(itemSummary['savings']);
		}
		else {
			$("#mcTotalPrice").html("0");
			  $("#mcSavings").html("0");
		}
	},

	displayItem : function(cartItem) {

		var prodItem = cartItem['productLineItem'];
		var qty = $("input", "#pi-" + prodItem['id']);
		if (qty.length > 0) {
			qty[0].value = cartItem.quantity;
			$(".removeCart", $(qty[0].parentNode.parentNode)).css("display",
					"block");
		}
		$("input", "#pi-" + prodItem['id']).val(cartItem.quantity);

		var pid = "mcpid" + prodItem['id'];
		var etr = $('#' + pid);
		var tr;
			if (etr.length > 0)
			tr = etr;
		else
			tr = $("#mcItems tr:first");
		
			
		this.items[pid] = cartItem;

		var qty = parseInt(cartItem['quantity']);
		var savings = qty * parseFloat(prodItem["savings"]);
		savings = savings + "";

		if (savings.indexOf(".") >= 0) {
			savings = savings.substring(0, savings.indexOf(".") + 3);
		}

		var html = "<tr id='" + pid + "'><td class='mtd seq'>" + 0 + "</td>";
		html += "<td class='itd'>" + prodItem["product"]["name"] + " "
				+ prodItem["quantity"] + " "
				+ prodItem["unitOfMeasure"]["value"] + "</td>";
		html += "<td class='mtd'>" + qty + "</td>";
		html += "<td class='rtd'>" + cartItem['totalPrice'] + "</td>";
		html += "<td class='rtd'>" + savings + "</td></tr>";

		tr.before(html);
		if (etr.length > 0)
			etr.remove();
		var tr = $('#' + pid);
		tr.hide();
		tr.show(); 
		this.updateCount(); 
	},

	updatePageQuantities : function(node) {
		for ( var key in this.items) {
			var item = this.items[key];
			var pid = item['productLineItem']['id'];
			var pDiv = $("#pi-" + pid, $(node));
			if (pDiv.length > 0) {
				var qty = $("input", pDiv);
				if (qty.length > 0) {
					qty[0].value = item.quantity;
					$(".removeCart", pDiv).css("display", "block");
				}
			}
		}
	},

	updateProductQuantity : function() {

		for ( var key in this.items) {
			var item = this.items[key];
			var pid = item['productLineItem']['id'];
			var pInfo = $("#productInfo-"+pid);
			if (pInfo.length == 1 && item.quantity > 0) {
				var qty = $("input", pInfo);
				qty[0].value = item.quantity;
				$(".removeCart", pInfo).css("display", "block");
			}
		}
	}
}

function ProductCartPipe(buyDiv) {
	this.bDiv = $(buyDiv);
	this.pId = $($('.buyProdId', this.bDiv)[0]).html();
	this.qtyInp = $('.qty', this.bDiv)[0];
	this.plusBut = $('.addCart', this.bDiv)[0];
	this.rmBut = $('.removeCart', this.bDiv)[0];

	buyDiv.pipe = this;

	this.onPlusClick = function(e) {

		var p = this.parentNode.pipe;
		var qty = p.validQty();
		if (qty != null) {
			if (sys.isTrue(p.inputChanged)) p.inputChanged = false;
			else p.qtyInp.value = qty + 1;
			p.flow('F', e);
			if (qty == 0)
				$(p.rmBut).fadeIn(500);
		}

	}

	this.onRmClick = function(e) {
		var p = this.parentNode.pipe;
		var qty = p.validQty();
		if (qty != null && qty > 0) {
			p.qtyInp.value = qty - 1;
			p.flow('R', e);

			if (qty == 1) {
				p.qtyInp.value = "";
				$(p.rmBut).fadeOut(500);
			}
		}
	}

	this.qtyInp.onkeyup = function() {
		var p = this.parentNode.parentNode.pipe;
		//p.removeHandlers();
	}

	this.qtyInp.onchange = function(e) {
		var p = this.parentNode.parentNode.pipe;
		//p.flow('F', e);
		p.inputChanged = true;
	}

	this.plusBut.onclick = this.onPlusClick;
	this.rmBut.onclick = this.onRmClick;
}

ProductCartPipe.prototype.validQty = function() {
	var qty;
	if (this.qtyInp.value == "") {
		this.qtyInp.value = 0;
	}

	try {
		qty = parseInt(this.qtyInp.value);
	} catch (e) {
		alert("Please provide a valid value");
		return null;
	}
	if (qty < 0) {
		alert("Please provide a valid value");
		return null;
	}
	return qty;
}

ProductCartPipe.prototype.flow = function(dir, e) {

	var pQty = this.validQty();
	if (pQty == null)
		return;

	var pTNImg = $(".pTNImg", this.bDiv.parent());
	
	if (pTNImg.length == 0) {
		pTNImg = $(".productTNImage");
		
	}
	
	var os = pTNImg.offset();
	var pX = os.left;
	var pY = os.top;
	var prod = miniCart.getProduct(this.pId);

	var gX = 0;
	var gY = 0;
	var src;
	if (dir == 'F') {
		gX = prod.x - pX;
		gY = prod.y - pY;
		src = $("a", pTNImg);
		//For Detail page
		if (src.length == 0) src = $("div", pTNImg);
	} else {
		gX = -pX;
		gY = -pY;
		src = prod.p;
	}

	var img = $("img", pTNImg);
	
	var fImgW = img.width() / 3;
	var fImgH = img.height() / 3;

	var fImg = img.clone();

	fImg[0].pId = this.pId;
	fImg[0].pQty = pQty;
	fImg[0].pipe = this;
	fImg[0].dr = dir;
	if (dir == 'R') {
		miniCart.updateCart(this.pId, pQty);
	} else {
		
		fImg.prependTo(src).css( {
			'position' : 'absolute',
			'z-index' : '10'
		}).animate( {
			opacity : 0.4
		}, 100).animate( {
			opacity : 0.1,
			marginLeft : gX,
			marginTop : gY,
			width : fImgW,
			height : fImgH
		}, 1200, function() {
			$(this).remove();
			miniCart.updateCart(this.pId, this.pQty);
			this.pipe.attachHandlers();
		});
	}
}

ProductCartPipe.prototype.attachHandlers = function() {
	this.plusBut.onclick = this.onPlusClick;
	this.rmBut.onclick = this.onRmClick;
}

ProductCartPipe.prototype.removeHandlers = function() {
	this.plusBut.onclick = "";
	this.rmBut.onclick = "";
}
var productPageLoader = {

	loadPage : true,

	init : function() {

		window.onDocReady(function() {

			var pl = $("#itemsDiv")

			var top = pl.offset().top + pl.height();

			if (top > $(window).height()) {
				$("#pageLoader").css("display", "block");
				if ($("#noItemsP").length == 0) {
					$(window).scroll(function() {
						try {
							productPageLoader.loadNextPage();
						} catch (e) {
							alert(e)
						}
					});
				}

			}
		});
	},
	
	loadNextPage : function(url) {
		var pl = $("#pageLoader");
		var url = $("#nextPageLink").attr("href");
		var top = pl.offset().top;
		top = top - $(window).height();
		if (this.loadPage == true && $(window).scrollTop() >= top) {
			this.loadPage = false;
			ui.ajaxLoader.showInNode("ajaxPageLoader");
			var page = pl.attr("page");
			
			if (url.indexOf("?") == -1)
				url = url + "?pageNo=" + page;
			else
				url = url + "&pageNo=" + page;
			page = parseInt(page) + 1;
			
			webServer.get(
							url,
							function(html) {
								
								if (html
										.indexOf("noItemsP") != -1) {
									pl.css("display", "none");
									$(html).appendTo($("#itemsDiv"));
									$('#noItemsP').css("display","none");
								} else {
									html = "<hr/>Showing Page "
											+ page
											+ "<hr/>"
											+ html
											+ "<script type='text/javascript'>$(document).ready(function() { productPageLoader.loadPage = true; });</script>";
									$(html).appendTo($("#itemsDiv"));
									
									var g = $(".productGrid");
									var g = g[g.length-1];
									initBuyButton();
									lazyLoadImgs();
									pl.attr("page", page);
									miniCart.updatePageQuantities(g);
								}
								ui.ajaxLoader.hideInNode("ajaxPageLoader");
							});
		}
	}
	
}

window.onDocReady(function() {
	initGoToTop();
	if (window.location.href.indexOf("/cart") ==  -1)
	   miniCart.init();
	$(window).scroll(function() {
		onScrollGoToTop()
		onScrollCategoryList();

	});
});

function initProductThumbnailPage() {
	initBuyButton();
	lazyLoadImgs();
}

function lazyLoadImgs() {

	$("img.thumbnailProductImage").lazyload({
		effect : "fadeIn"
	});
}

function initBuyButton() {
	
	var bDivs = $('.buyDiv');
	for (var i=0,bDiv; bDiv=bDivs[i++];) {
	  new ProductCartPipe(bDiv);
	}
	return;
}


UI.prototype.init_productGrid = function(node) {
	var sts = $(".stackItems", $(node));
	
	for (var i=0,st; st=sts[i++];) {
		var lis = $("li",$(st));
		for (var j=0,li; li=lis[j++];) {
			li.onclick = function() {
				var prodId = this.getAttribute("pid");
				var cs = $(".stackItem-"+prodId);
				cs.css("display","none");
				document.getElementById(this.getAttribute("tp")).style.display = "";
				$("li", $(this.parentNode)).attr("class","");
				this.className = "sel";
				$("img.thumbnailProductImage", $(this.parentNode.parentNode.parentNode)).lazyload({
			        effect : "fadeIn"
			    });
			}
		}
	}
}

function initGoToTop() {
	var top = document.getElementById("goToTop");
	if (top) {

		top.onclick = function() {
			$('html, body').animate( {
				scrollTop : 0
			}, 'slow');
		}
	}
}

function onScrollGoToTop() {
	var d = $("#goToTop");
	if ($(window).scrollTop() > 0)
		d.fadeIn(500);
	else
		d.fadeOut(500)
}

var subCatListTop;
function onScrollCategoryList() {
	var c = $(".subCategoryList")[0];

	if (c) {
		c = $(c);
		if (!subCatListTop)
			subCatListTop = c.offset().top;
		if ($(window).scrollTop() >= subCatListTop) {
			if (c.height() > $(window).height()) {
				c.css("position", "absolute");
				c.css("left", "0");
			} 
			else {
			  c.css("position", "fixed");
			  c.css("top", "0");
			}
		} else {
			c.css("position", "absolute");
			c.css("left", "0");
		}
	}
}

function addToCart(input) {
	if (sys.isValid(input.value) && sys.isValid(input.getAttribute("rid"))) {
		var resource = entityStore.save("PreSalesOrderLineItem", {id:input.getAttribute("rid"),quantity:input.value});
  	    window.location.reload(true);
	}
}


var redirectURL = null;

function checkout(e) {

	var count = parseInt($('.cartCount').html());
	if (count == 0)
		ui.messageBox.show("Shopping Cart is empty");
	else if (!loggedIn()) {
		var login = document.getElementById("loginPopup");
		eventSys.preventDefault(e);
		var cpnt = document.getElementById(login.getAttribute(CLINK));
		$("#loginMsg", cpnt).html("Please login to checkout");
		var node = eventSys.getOriginNode(e);

		redirectURL = "/cart/checkout.xhtml";
		ui.popup.show(cpnt, node);
	} else
		window.location = "/cart/checkout.xhtml";
}

function confirmCheckout() {
	var spans = document.getElementById("coAddress").getElementsByTagName(
			"span");
	
	var address = "";
	for ( var i = 0, s; s = spans[i++];) {
		var v = $(s).html();
		if (v != "") {
			if (i != 0 && address != "")
				address += ", ";
			address += $(s).html();
		}
	}
	
	$("#dlgSA").html(address);

	$("#dlgDL").html($('#delSlotInfo').html());
	var pm = document.getElementById("payCash");
	if (pm.checked)
		$("#dlgPM").html($("#payCashDesc").html());
	else
		$("#dlgPM").html($("#payCCDesc").html());

	ui.dialog.showById("coConfirmDlg");
	
	return false;
}

function performCheckout() {
	ui.dialog.hideById("coConfirmDlg");
	var form = new UIEntityForm(document.getElementById("poForm"));
	form.submit();
	return false;
}

function changeCheckoutAddress() {
	var did = "shipAddressDlg";
	if (!sys.isValid(document.getElementById(did))) {
		urlLoader.appendXHtml("shop/cart/inc/AddressTableDialog.xhtml", document.body);
		eventQueue.subscribe(EventName.variableChanged("customerAddress.id"), new EventSubscriber("custaddress-dataTable-var-changed", function (event) {
			  if (sys.isValid(event.data)) {
				  ui.dialog.hideById(this.userObject);
				  urlLoader.loadXHtml("shop/cart/inc/CustomerAddress.xhtml?id="+event.data, document.getElementById("coAddressPanel"));
				  document.getElementById('poDelAddr').value = event.data;
			  }
		  }, did)); 
    }
	ui.dialog.showById(did);	
}

function addCheckoutAddress() {
	ui.dialog.hideById("shipAddressDlg");
	var did = "addAddressDlg";
	if (!sys.isValid(document.getElementById(did))) {
		eventQueue.subscribe(EventName.saved("CustomerAddress"), new EventSubscriber("custaddress-dlg-saved", function (event) {
			  if (sys.isValid(event.data)) {
				  ui.dialog.hideById(this.userObject);
				  urlLoader.attachXHtml("shop/cart/inc/CustomerAddress.xhtml?id="+event.data['customerAddress']['id'], document.getElementById("coAddressPanel"));
				  document.getElementById('poDelAddr').value = event.data;
			  }
		  }, did));
		  urlLoader.appendXHtml("shop/cart/inc/CustomerAddressDialog.xhtml", document.body);
    }
	ui.dialog.showById(did);	
}

function postSalesOrderSave(po) {
	po[STATUS_MSG] = NULL;

	if (po['payMode'] && po["payMode"]['id'] == "51") {
		miniCart.clear();
		var orderId = po['orderId'];
		$('#dbContent')
				.html(
						"<h1>Order Confirmation</h1><p style='margin-top:10px'>Your order '"
								+ orderId
								+ "' has been successfully placed.</p> <p>Please refer the order id '"
								+ orderId + "' for further communications.</p>");
	} else {
		try {
			var pf = document.forms["payment"];

			pf.Merchant_Id.value = po['merchantId'];
			var amt = po['salesOrder']['amount'];
			if (amt.indexOf(".") == -1)
				pf.Amount.value = amt + ".0";
			else
				pf.Amount.value = amt;

			pf.Order_Id.value = po['salesOrder']['transId'];
			pf.Redirect_Url.value = po['redirectURL'];
			pf.Checksum.value = po['checksum'];
			var cu = po['salesOrder']['customer'];
			pf.billing_cust_name.value = cu['firstName'] + " " + cu['lastName'];
			var cuaddr = cu['address'];
			var addr = cuaddr['address1'] + ", ";
			if (cuaddr['address2'])
				addr = addr + cuaddr['address2'] + ", ";
			pf.billing_cust_address.value = addr;
			pf.billing_cust_country.value = cuaddr['country']['name'];
			pf.billing_cust_state.value = cuaddr['state']['name'];
			pf.billing_cust_tel.value = cu['mobile'];
			pf.billing_cust_email.value = cu['email'];
			pf.delivery_cust_name.value = cu['firstName'] + " "
					+ cu['lastName'];
			pf.delivery_cust_address.value = addr;
			pf.delivery_cust_country.value = cuaddr['country']['name'];
			pf.delivery_cust_state.value = cuaddr['state']['name'];
			pf.delivery_cust_tel.value = cu['mobile'];
			pf.delivery_cust_notes.value = "";
			pf.Merchant_Param.value = "";
			pf.billing_cust_city.value = cuaddr['city']['name'];
			pf.billing_zip_code.value = cuaddr['pin'];
			pf.delivery_cust_city.value = cuaddr['city']['name'];
			pf.delivery_zip_code.value = cuaddr['pin'];
			pf.submit();
		} catch (e) {
			alert("Unable to process your order due to '" + e + "'")
		}
	}
}

function createShoppingCart(rName, rId) {
	try {
		var po = entityStore.get(rName,rId,"addToCart");
		ui.messageBox.show("All items have been added to your shopping bag");
		miniCart.load();
	} catch (e) { 
		ui.messageBox.show("The items have already been added to your shopping cart or an internal error occurred");
	}
}


function registerChart() {
	eventQueue.subscribe(EventName.variableChanged("salesOrder.id"),
			new EventSubscriber("purchaseOrderId-changed", function(event) {
                
				if (sys.isValid(event.data)) {
					var report = entityStore.getFirst("SalesOrderReport",
							"orderId=" + event.data);
					var r = report['data'];
					var reportData = new Array();

					for ( var i = 0; i < r.length; i++) {
						reportData[i] = [ r[i]['label'],
								parseInt(r[i]['value']) ];
					}

					drawPie("oGraph", reportData);
				}
			}, null));
	
}

function generateDateRangeReport() {
	    var sDate = document.getElementById("rsDate").value;
	    var eDate = document.getElementById("reDate").value;
	    
		var report = entityStore.getFirst("SalesOrderReport",
				"startDate=[>]" + sDate+"&endDate=[<]"+eDate);
		var reportData = new Array();
		if (sys.isValid(report)) {
		  var r = report['data'];

		  for ( var i = 0; i < r.length; i++) {
			  reportData[i] = [ r[i]['label'],
					      parseInt(r[i]['value']) ];
		  }
		}
		else ui.messageBox.show("No matching orders found");
		$("#dGraph").show();
		drawPie("dGraph",reportData);
}

function drawPie(graphId, data) {
	// var data = new Array(['Sector 1', 2], ['Sector 2', 1], ['Sector 3', 3],
	// ['Sector 4', 6], ['Sector 5', 8.5], ['Sector 6', 10]);

	// var colors = ['#FACC00', '#FB9900', '#FB6600', '#FB4800', '#CB0A0A',
	// '#F8F933'];
	var chart = new JSChart(graphId, 'pie');
	chart.setDataArray(data);
	// chart.colorizePie(colors);
	// chart.setTitleColor('#857D7D');
	// chart.setPieUnitsColor('#9B9B9B');
	// chart.setPieValuesColor('#6A0000');
	chart.draw();
}

var action = {
		
		makeAddressPrimary : function(id) {
		  var r = webServer.get("bo/CustomerAddress/"+id+"?makePrimary");
		  window.location.reload();
	    }	
};


function subscribeCustomerAddress() {
	eventQueue.subscribe(EventName.entity("Address"),
			new EventSubscriber(EventName.entity("Address") + "-1",
					function(event) {
						$("form[entity='Customer']")[0]["customer.address.pin"].value = event.data.pin;
					}, this));

}


function postCustomerSave(cust, formName) {
	
	if (sys.isValid(formName)) {
		cust[STATUS_MSG] = NULL;
		if (formName ==  "CustomerCheckout") 
		  window.location = "/cart/checkout.xhtml";
	}
}


