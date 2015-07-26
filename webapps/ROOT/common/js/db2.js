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
	var scrollTop = window.pageYOffset ? window.pageYOffset
			: document.documentBody.scrollTop
			
	var x = ($(window).width() / 2) - (c.width() / 2), y = scrollTop+($(window).height() / 2) - (c.height() / 2);
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
		var docWidth = (window.innerWidth) ? window.innerWidth - 20
				: document.documentBody.clientWidth - 20
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
		//alert(x+" "+this.width+" "+scrollLeft+"  "+docWidth);
		x = (x + this.width - scrollLeft > docWidth) ? docWidth + scrollLeft - this.width : x // account for right edge
		y = (y + this.height - scrollTop > docHeight) ? y - this.height
				- parent.offsetHeight : y // account for bottom edge

				//alert(x+" "+this.width+" "+scrollLeft+"  "+docWidth);
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
			
			if (!sys.isFalse(this.comp.getAttribute("successStatus"))) {
				
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

		return "<div id='messageBox' class='popup' style='width:500px'>"
				+ "<div class='head popupHead'><div class='title'>Message</div><div class='popupClose'></div></div>"
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
					+ "') no-repeat left center"
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

UI.prototype.init_inputRuledTextarea = function(node) {
	node.inputText = new UITextField(node);
	node.counter = 1;
	node.onkeydown = function(e) {
		if (this.value == "") this.value = this.counter+". ";
	}
	node.onkeyup = function(e) {
		e = eventSys.getEvent(e);
		var cd = eventSys.getCharCode(e);
		if (cd == 13) {
		  this.counter = this.counter + 1;
		  this.value = this.value+node.counter+". ";
		}
	}
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

	var val = this.getValue();
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
						if (sys.isValid(nd.className) && nd.className.indexOf("entityForm") != -1) {
							form = nd;
							break;
						}
						nd = nd.parentNode;
					}

					if (sys.isValid(form)) {
					  form = new UIEntityForm(form);
					  form.submit();
					  return false;
					}
				}
			}
		}
	}
}
UI.prototype.init_outputLink = function(node) {
	if (node.href && node.href.indexOf("%20") >= 0 && node.href.indexOf("%%20") >= 0) {
		node.href = node.href.replace("%%20","%25%20");
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
//		    	hideAjaxLoader();
//		    	if (status == 'timeout') alert("Timed out");
//		    	else if (jqXHR.status >= 300)
//			      alert(jqXHR.status+" : "+error);
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
	window.opener.location.href = "/";
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
	bag:{},
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
		entityStore.get("ShoppingBag", "1", null, loadMiniCart);
	},
	
	loadItems: function(rs) {
		
		if (!rs) return;
		this.bag = rs;
		var items = rs['lineItems'];

		if (items.length > 0) {
			for ( var i = 0, item; item = items[i++];)
				this.displayItem(item);
			this.updateTotalPrice(rs);
			this.cart.fadeIn(500);
		} else
			this.cart.fadeOut(500);

		this.updateProductQuantity();
	},

	updateCart : function(pid, qty) {
		
		if (!sys.isValid(pid) || !sys.isValid(qty)) {
			alert("Unable to process the request #"+pid+"#"+qty);
			return;
		} 
		
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
				resource['cartItem']['state'] = 'N';
				this.displayItem(resource['cartItem']);
			}
			this.updateTotalPrice(resource['shoppingBag']);
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
//		var qty = $("input", "#pi-" + prodItem['id']);
//		if (qty.length > 0) {
//			qty[0].value = cartItem.quantity;
//			$(".removeCart", $(qty[0].parentNode.parentNode)).css("display",
//					"block");
//		}
		if (cartItem['state'] != 'N')
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
			var pid = item['id'];//item['productLineItem']['id'];
			var pDiv = $("#pi-" + pid, $(node));
			if (pDiv.length > 0) {
				var qty = $("input", pDiv);
				if (qty.length > 0) {
					//qty[0].value = item.quantity;
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
				//qty[0].value = item.quantity;
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
    this.queue = [];
    this.count = 0;
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
		this.parentNode.pipe.removeHandlers();

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
		this.parentNode.pipe.removeHandlers();
	}

	this.qtyInp.onkeyup = function() {
		//var p = this.parentNode.parentNode.pipe;
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
		this.qtyInp.value = "0";
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

	if (!sys.isValid(this.pId)) 
		return;
	
	var pQty = this.validQty();
	if (!sys.isValid(pQty))
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

	var cq = img.clone();

	cq[0].pId = this.pId;
	cq[0].pQty = pQty;
	cq[0].pipe = this;
	cq[0].dr = dir;
	if (dir == 'R') {
		miniCart.updateCart(this.pId, pQty);
	} else {
		
		cq.prependTo(src).css( {
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
//			console.log(">>>>"+ this+"  "+this.pId+"#"+this.pQty);
			if (sys.isValid(this.pId) && sys.isValid(this.pQty)) {
			  miniCart.updateCart(this.pId, this.pQty);
			  this.pipe.attachHandlers();
			}
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
									
									var id = 'dyna' + urlLoader.seq;
									urlLoader.seq++;
									html = "<div id='" + id + "'>" + html + "</div>";
									
									html = "<hr/>Showing Page "
											+ page
											+ "<hr/>"
											+ html
											+ "<script type='text/javascript'>$(document).ready(function() { productPageLoader.loadPage = true; });</script>";
									$(html).appendTo($("#itemsDiv"));
									
									var g = $(".productGrid");
									var g = g[g.length-1];
									initProductThumbnailPage();
									xhtmlParser.parse(document.getElementById(id));
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

function suggestProduct() {
	
	var did = "prdSuggestDlg";
	if (!sys.isValid(document.getElementById(did))) {
		eventQueue.subscribe(EventName.saved("ProductSuggestion"), new EventSubscriber("prod_sugg-dlg-saved", function (event) {
			ui.dialog.hideById(this.userObject);
		  }, did));
		urlLoader.loadXHtml("/product/inc/ProductSuggestionDialog.xhtml", document.body, 'A');
    }
	ui.dialog.showById(did);	
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


function clearShoppingCart() {
	if (confirm("Do you really want to clear the shopping bag?")) {
	  webServer.get("/bo/ShoppingCart?clear");
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
			pf.billing_cust_name.value = cu['name'];
			var cuaddr = cu['address'];
			var addr = cuaddr['address1'] + ", ";
			if (cuaddr['address2'])
				addr = addr + cuaddr['address2'] + ", ";
			pf.billing_cust_address.value = addr;
			pf.billing_cust_country.value = cuaddr['country']['name'];
			pf.billing_cust_state.value = cuaddr['state']['name'];
			pf.billing_cust_tel.value = cu['mobile'];
			pf.billing_cust_email.value = cu['email'];
			pf.delivery_cust_name.value = cu['name'];
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
				        $("form[entity='Customer']")[0]["customer.address.latlng"].value = event.data.latlng;
						$("form[entity='Customer']")[0]["customer.address.pin"].value = event.data.pin;
					}, this));

}


function postCustomerSave(cust, formName) {
	
	if (sys.isValid(formName)) {
		cust[STATUS_MSG] = NULL;
		if (formName ==  "CustomerCheckout") window.location = "/cart/checkout.xhtml";
		else if (formName == "BillerCheckout") window.location = "/cart/checkout.xhtml?cid="+cust['id'];
	}
}


