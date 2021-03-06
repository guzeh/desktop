window._zhugeSdk = function(t) {
	var e = {};

	function n(i) {
		if(e[i]) return e[i].exports;
		var o = e[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	return n.m = t, n.c = e, n.d = function(t, e, i) {
		n.o(t, e) || Object.defineProperty(t, e, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, n.r = function(t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t['default']
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 74)
}({
	0: function(t, e) {
		var n, i, o, r, s, a, c, u, d, f, l, h = window.navigator,
			p = window.document,
			g = h.userAgent,
			v = Array.prototype,
			m = Object.prototype,
			_ = m.toString,
			y = v.forEach,
			w = Array.isArray,
			k = v.slice,
			b = m.hasOwnProperty,
			S = {},
			T = {
				each: function(t, e, n) {
					if(null != t)
						if(y && t.forEach === y) t.forEach(e, n);
						else if(t.length === +t.length) {
						for(var i = 0, o = t.length; i < o; i++)
							if(i in t && e.call(n, t[i], i, t) === S) return
					} else
						for(var r in t)
							if(b.call(t, r) && e.call(n, t[r], r, t) === S) return
				},
				extend: function(t) {
					return T.each(k.call(arguments, 1), function(e) {
						for(var n in e) void 0 !== e[n] && (t[n] = e[n])
					}), t
				},
				isUndefined: function(t) {
					return void 0 === t
				},
				isString: function(t) {
					return "[object String]" == _.call(t)
				},
				isArray: w || function(t) {
					return "[object Array]" === _.call(t)
				},
				isFunction: function(t) {
					return "[object Function]" === _.call(t)
				},
				isObject: function(t) {
					return "[object Object]" === _.call(t) && void 0 !== t
				},
				hasMobileSdk: function() {
					var t = !!(window.zhugeTracker || window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.zhugeTracker);
					return {
						flag: t,
						track: function(e, n) {
							t && (window.zhugeTracker ? window.zhugeTracker.trackProperty(e, T.JSONEncode(n)) : window.webkit.messageHandlers.zhugeTracker.postMessage({
								type: "track",
								name: e,
								prop: n
							}))
						},
						identify: function(e, n) {
							t && (window.zhugeTracker ? window.zhugeTracker.identifyProperty(e, T.JSONEncode(n)) : window.webkit.messageHandlers.zhugeTracker.postMessage({
								type: "identify",
								name: e,
								prop: n
							}))
						}
					}
				},
				includes: function(t, e) {
					return -1 !== t.indexOf(e)
				},
				encode: function(t) {
					var e = {};
					for(var n in t) e["_" + n] = t[n];
					return e
				},
				truncate: function(t, e) {
					var n;
					return "string" == typeof t ? n = t.slice(0, e) : T.isArray(t) ? (n = [], T.each(t, function(t) {
						n.push(T.truncate(t, e))
					})) : T.isObject(t) ? (n = {}, T.each(t, function(t, i) {
						n[i] = T.truncate(t, e)
					})) : n = t, n
				},
				strip_empty_properties: function(t) {
					var e = {};
					return T.each(t, function(t, n) {
						T.isString(t) && t.length > 0 && (e[n] = t)
					}), e
				},
				trim: function(t) {
					return(t || "").replace(/\s+/g, " ").replace(/^\s+/, "").replace(/\s+$/, "")
				},
				random: function(t, e) {
					return Math.round(Math.random() * (e - t)) + t
				},
				jsonp: function(t, e, n) {
					var i = "cb" + Math.random().toString().split(".")[1],
						o = p.createElement("script");
					o.src = t + "?callback=" + i, window[i] = function(t) {
						e(t)
					}, o.onerror = function() {
						n()
					}, p.head ? p.head.appendChild(o) : p.getElementsByTagName("head")[0].appendChild(o)
				},
				JSONEncode: function(t) {
					var e = function(t) {
							var e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
								n = {
									"\b": "\\b",
									"\t": "\\t",
									"\n": "\\n",
									"\f": "\\f",
									"\r": "\\r",
									'"': '\\"',
									"\\": "\\\\"
								};
							return e.lastIndex = 0, e.test(t) ? '"' + t.replace(e, function(t) {
								var e = n[t];
								return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
							}) + '"' : '"' + t + '"'
						},
						n = function(t, i) {
							var o = "",
								r = 0,
								s = "",
								a = "",
								c = 0,
								u = o,
								d = [],
								f = i[t];
							switch(f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(t)), typeof f) {
								case "string":
									return e(f);
								case "number":
									return isFinite(f) ? String(f) : "null";
								case "boolean":
								case "null":
									return String(f);
								case "object":
									if(!f) return "null";
									if(o += "    ", d = [], "[object Array]" === _.apply(f)) {
										for(c = f.length, r = 0; r < c; r += 1) d[r] = n(r, f) || "null";
										return a = 0 === d.length ? "[]" : o ? "[\n" + o + d.join(",\n" + o) + "\n" + u + "]" : "[" + d.join(",") + "]", o = u, a
									}
									for(s in f) b.call(f, s) && (a = n(s, f)) && d.push(e(s) + (o ? ": " : ":") + a);
									return a = 0 === d.length ? "{}" : o ? "{" + d.join(",") + u + "}" : "{" + d.join(",") + "}", o = u, a
							}
						};
					return n("", {
						"": t
					})
				},
				JSONDecode: (a = {
					'"': '"',
					"\\": "\\",
					"/": "/",
					b: "\b",
					f: "\f",
					n: "\n",
					r: "\r",
					t: "\t"
				}, c = function(t) {
					throw {
						name: "SyntaxError",
						message: t,
						at: i,
						text: r
					}
				}, u = function(t) {
					return t && t !== o && c("Expected '" + t + "' instead of '" + o + "'"), o = r.charAt(i), i += 1, o
				}, d = function() {
					var t, e = "";
					for("-" === o && (e = "-", u("-")); o >= "0" && o <= "9";) e += o, u();
					if("." === o)
						for(e += "."; u() && o >= "0" && o <= "9";) e += o;
					if("e" === o || "E" === o)
						for(e += o, u(), "-" !== o && "+" !== o || (e += o, u()); o >= "0" && o <= "9";) e += o, u();
					if(t = +e, isFinite(t)) return t;
					c("Bad number")
				}, f = function() {
					var t, e, n, i = "";
					if('"' === o)
						for(; u();) {
							if('"' === o) return u(), i;
							if("\\" === o)
								if(u(), "u" === o) {
									for(n = 0, e = 0; e < 4 && (t = parseInt(u(), 16), isFinite(t)); e += 1) n = 16 * n + t;
									i += String.fromCharCode(n)
								} else {
									if("string" != typeof a[o]) break;
									i += a[o]
								}
							else i += o
						}
					c("Bad string")
				}, l = function() {
					for(; o && o <= " ";) u()
				}, s = function() {
					switch(l(), o) {
						case "{":
							return function() {
								var t, e = {};
								if("{" === o) {
									if(u("{"), l(), "}" === o) return u("}"), e;
									for(; o;) {
										if(t = f(), l(), u(":"), Object.hasOwnProperty.call(e, t) && c('Duplicate key "' + t + '"'), e[t] = s(), l(), "}" === o) return u("}"), e;
										u(","), l()
									}
								}
								c("Bad object")
							}();
						case "[":
							return function() {
								var t = [];
								if("[" === o) {
									if(u("["), l(), "]" === o) return u("]"), t;
									for(; o;) {
										if(t.push(s()), l(), "]" === o) return u("]"), t;
										u(","), l()
									}
								}
								c("Bad array")
							}();
						case '"':
							return f();
						case "-":
							return d();
						default:
							return o >= "0" && o <= "9" ? d() : function() {
								switch(o) {
									case "t":
										return u("t"), u("r"), u("u"), u("e"), !0;
									case "f":
										return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
									case "n":
										return u("n"), u("u"), u("l"), u("l"), null
								}
								c("Unexpected '" + o + "'")
							}()
					}
				}, function(t) {
					var e;
					return r = t, i = 0, o = " ", e = s(), l(), o && c("Syntax error"), e
				}),
				HTTPBuildQuery: function(t, e) {
					var n, i, o = [];
					return void 0 === e && (e = "&"), T.each(t, function(t, e) {
						n = encodeURIComponent(t.toString()), i = encodeURIComponent(e), o[o.length] = i + "=" + n
					}), o.join(e)
				},
				getQueryParam: function(t, e) {
					e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
					var n = new RegExp("[\\?&#]" + e + "=([^&#]*)").exec(t);
					if(null === n || n && "string" != typeof n[1] && n[1].length) return "";
					var i = n[1];
					try {
						i = decodeURIComponent(decodeURIComponent(i)).replace(/\+/g, " ")
					} catch(t) {}
					return i
				},
				getDomain: function(t) {
					var e = t.match(/\/\/\S*?\//);
					return e && e.length ? e[0].replace(/\//g, "") : ""
				},
				register_event: function() {
					function t(e) {
						return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), e
					}
					return t.preventDefault = function() {
							this.returnValue = !1
						}, t.stopPropagation = function() {
							this.cancelBubble = !0
						},
						function(e, n, i, o) {
							if(e)
								if(e.addEventListener && !o) e.addEventListener(n, i, !1);
								else {
									var r = "on" + n,
										s = e[r];
									e[r] = function(e, n, i) {
										return function(o) {
											if(o = o || t(window.event)) {
												var r, s, a = !0;
												return T.isFunction(i) && (r = i(o)), s = n.call(e, o), !1 !== r && !1 !== s || (a = !1), a
											}
										}
									}(e, i, s)
								}
							else console && console.error("No valid element provided to register_event")
						}
				}(),
				cookie: {
					get: function(t) {
						for(var e = t + "=", n = p.cookie.split(";"), i = 0; i < n.length; i++) {
							for(var o = n[i];
								" " == o.charAt(0);) o = o.substring(1, o.length);
							if(0 == o.indexOf(e)) return decodeURIComponent(o.substring(e.length, o.length))
						}
						return null
					},
					parse: function(t) {
						var e;
						try {
							e = T.JSONDecode(T.cookie.get(t)) || {}
						} catch(t) {}
						return e
					},
					set: function(t, e, n, i, o) {
						var r = "",
							s = "",
							a = "";
						if(i) {
							var c = p.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
								u = c ? c[0] : "";
							r = u ? "; domain=." + u : ""
						}
						if(n) {
							var d = new Date;
							d.setTime(d.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + d.toGMTString()
						}
						o && (a = "; secure"), p.cookie = t + "=" + encodeURIComponent(e) + s + "; path=/" + r + a
					},
					remove: function(t) {
						var e = p.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
							n = e ? e[0] : "";
						T.cookie.set(t, "", -1, "." + n)
					}
				},
				info: {
					campaignParams: function(t) {
						t || (t = "{}"), T.isString(t) && (t = T.JSONDecode(t));
						var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
							n = "",
							i = {};
						return T.each(e, function(e) {
							((n = T.getQueryParam(p.URL, e)).length || t[e]) && (i["$" + e] = t[e] || n)
						}), i
					},
					searchEngine: function(t) {
						return 0 === t.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === t.search("https?://(.*)baidu.com") ? "baidu" : 0 === t.search("https?://(.*)sogou.com") ? "sogou" : 0 === t.search("https?://(.*)haosou.com") ? "haosou" : null
					},
					searchKeyword: function(t) {
						var e = T.info.searchEngine(t);
						return "google" == e ? T.getQueryParam(t, "q") : "baidu" == e ? T.getQueryParam(t, "wd") : "sogou" == e ? T.getQueryParam(t, "query") : "haosou" == e ? T.getQueryParam(t, "q") : null
					},
					referringDomain: function(t) {
						var e = t.split("/");
						return e.length >= 3 ? e[2] : ""
					},
					browser: function(t, e, n) {
						e = e || "";
						return n ? T.includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : T.includes(t, "FBIOS") ? "Facebook Mobile" : T.includes(t, "Chrome") ? "Chrome" : T.includes(t, "CriOS") ? "Chrome iOS" : T.includes(e, "Apple") ? T.includes(t, "Mobile") ? "Mobile Safari" : "Safari" : T.includes(t, "Android") ? "Android Mobile" : T.includes(t, "Konqueror") ? "Konqueror" : T.includes(t, "Firefox") ? "Firefox" : T.includes(t, "MSIE") || T.includes(t, "Trident/") ? "Internet Explorer" : T.includes(t, "Gecko") ? "Mozilla" : ""
					},
					os: function() {
						var t = g;
						return /Windows/i.test(t) ? /Phone/.test(t) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "Mac OS X" : /Linux/.test(t) ? "Linux" : ""
					},
					device: function(t) {
						return /iPad/.test(t) ? "iPad" : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Windows Phone/i.test(t) ? "Windows Phone" : /Android/.test(t) ? "Android" : ""
					},
					resolution: function() {
						return screen.width + "*" + screen.height
					}
				},
				UUID: (n = function() {
					for(var t = 1 * new Date, e = 0; t == 1 * new Date;) e++;
					return t.toString(16) + e.toString(16)
				}, function() {
					var t = (screen.height * screen.width).toString(16);
					return n() + "-" + Math.random().toString(16).replace(".", "") + "-" + function(t) {
						var e, n, i = g,
							o = [],
							r = 0;

						function s(t, e) {
							var n, i = 0;
							for(n = 0; n < e.length; n++) i |= o[n] << 8 * n;
							return t ^ i
						}
						for(e = 0; e < i.length; e++) n = i.charCodeAt(e), o.unshift(255 & n), o.length >= 4 && (r = s(r, o), o = []);
						return o.length > 0 && (r = s(r, o)), r.toString(16)
					}() + "-" + t + "-" + n()
				})
			};
		t.exports = T
	},
	1: function(t, e, n) {
		var i = n(6),
			o = n(0);
		t.exports = o.extend({
			getRect: function(t, e) {
				var n = t.getBoundingClientRect(),
					i = this.css(t, "position");
				return {
					position: "fixed" === i ? "fixed" : "absolute",
					width: t.offsetWidth,
					height: t.offsetHeight,
					top: n.top + ("fixed" === i || e ? 0 : window.pageYOffset),
					bottom: n.bottom,
					left: n.left + ("fixed" === i || e ? 0 : window.pageXOffset),
					right: n.right
				}
			},
			getOffset: function(t) {
				for(var e = {
						position: "fixed" === this.css(t, "position") ? "fixed" : "absolute",
						width: t.offsetWidth,
						height: t.offsetHeight,
						top: t.offsetTop,
						left: t.offsetLeft
					}; t.offsetParent;) {
					var n = t.offsetParent;
					"fixed" === this.css(n, "position") && (e.position = "fixed"), e.top += n.offsetTop, e.left += n.offsetLeft, t = n
				}
				return e
			},
			css: function(t, e) {
				if(o.isString(e)) return window.getComputedStyle(t)[e];
				for(var n in e) t.style[n] = e[n]
			},
			addStyleRules: function(t) {
				var e, n = document.createElement("style");
				document.head ? document.head.appendChild(n) : document.getElementsByTagName("head")[0].appendChild(n), e = n.sheet;
				for(var i = 0, o = t.length; i < o; i++) {
					var r = 1,
						s = t[i],
						a = t[i][0],
						c = "";
					"[object Array]" === Object.prototype.toString.call(s[1][0]) && (s = s[1], r = 0);
					for(var u = s.length; r < u; r++) {
						var d = s[r];
						c += d[0] + ":" + d[1] + (d[2] ? " !important" : "") + ";\n"
					}
					e.insertRule(a + "{" + c + "}", e.cssRules.length)
				}
			},
			append: function(t, e) {
				o.isString(e) ? t.insertAdjacentHTML("beforeend", e) : t.appendChild(e)
			},
			html: function(t, e) {
				t.innerHTML = e
			},
			remove: function(t) {
				t.parentNode && t.parentNode.removeChild(t)
			},
			contains: function(t, e) {
				for(var n = !1; this.getParent(e) && "body" !== i.getTagName(e);) {
					if(this.getParent(e) === t) {
						n = !0;
						break
					}
					e = this.getParent(e)
				}
				return n
			},
			show: function(t, e) {
				return o.isArray(t) ? t.forEach(function(t) {
					this.css(t, {
						display: e || "block"
					})
				}, this) : this.css(t, {
					display: e || "block"
				}), t
			},
			hide: function(t) {
				return o.isArray(t) ? t.forEach(function(t) {
					this.css(t, {
						display: "none"
					})
				}, this) : this.css(t, {
					display: "none"
				}), t
			},
			child: function(t) {
				for(var e = [], n = 0, i = t.childNodes.length; n < i; n++) this.isTextNode(t.childNodes[n]) || e.push(t.childNodes[n]);
				return e
			},
			siblings: function(t, e) {
				var n = [];
				return this.child(this.getParent(t)).forEach(function(i) {
					i !== t && this.is(i, e) && n.push(i)
				}, this), n
			},
			setContext: function(t, e) {
				t.textContent = e
			},
			delegate: function(t, e, n, i, o) {
				var r = this;
				return this.bind(t, e, function(t) {
					var e = t.target,
						s = r.is(e, n);
					if(s.flag) return i.call(o, t, s.target)
				}, o)
			},
			scroll: function(t) {
				i.bind(t, "mousewheel", function(e) {
					var n = this.getRect(t).height,
						i = t.scrollHeight;
					(t.scrollTop === i - n && e.deltaY > 0 || 0 === t.scrollTop && e.deltaY < 0) && e.preventDefault()
				}, this)
			},
			prev: function(t) {
				var e = t.previousSibling;
				return !e || this.isTextNode(t) ? null : e
			},
			prevAll: function(t) {
				for(var e = []; this.prev(t);) e.push(this.prev(t)), t = this.prev(t);
				return e
			},
			fixPosition: function(t) {
				var e = this.css(t, "position");
				/absolute|fixed/.test(e) || this.css(t, {
					position: "relative"
				})
			},
			locate: function(t, e) {
				var n = this.getRect(t, !0),
					i = this.getRect(e),
					o = {
						top: n.top,
						left: n.left + n.width
					};
				o.top + i.height >= window.innerHeight && (o.top = Math.max(o.top - (o.top + i.height - window.innerHeight), 0)), o.left + i.width >= window.innerWidth && (o.left = Math.max(n.left - i.width, 0)), this.css(e, {
					top: o.top + "px",
					left: o.left + "px"
				})
			},
			removeData: function(t, e) {
				delete(t.dataset || {})[e]
			},
			empty: function(t) {
				return t.innerHTML = "", t
			},
			scrollTo: function(t) {
				var e = this.getRect(this.body),
					n = this.getRect(t),
					i = n.top - e.height / 2,
					o = n.left - e.width / 2;
				this.body.scrollTop = i, this.body.scrollLeft = o
			}
		}, i)
	},
	15: function(t, e) {
		t.exports.url = {
			CHECK_LOGIN: "https://zhugeio.com/user/checkAuthorization.jsp",
			EVENT_LIST: "https://zhugeio.com/data/datalist.jsp",
			LOAD_ENV_DATA: "https://zhugeio.com/appusergroup/getEventEnvData.jsp",
			LOAD_USER_PROPS: "https://zhugeio.com/appusergroup/getUserPropMeta.jsp"
		}
	},
	25: function(t, e) {
		t.exports = {
			SESSION_KEYS: {
				PARAMS: "zhugeJsHeatMapParams"
			},
			URL: {
				DATA_LIST: "https://zhugeio.com/data/datalist.jsp"
			}
		}
	},
	5: function(t, e, n) {
		var i = n(0),
			o = {
				UNSENT: 0,
				OPENED: 1,
				HEADERS_RECEIVED: 2,
				LOADING: 3,
				DONE: 4
			};

		function r(t) {
			var e = [];
			for(var n in t) {
				var o = t[n];
				e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i.isString(o) ? o : i.JSONEncode(o)))
			}
			return e.join("&")
		}

		function s(t, e) {
			var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
				s = function(t) {
					i.isFunction(e[t]) && e[t].call(e.context, function(t, e) {
						var n = t.responseText;
						switch(e) {
							case "json":
								n = i.JSONDecode(n);
								break;
							default:
								console && console.error(arguments, this)
						}
						return n
					}(n, e.dataType))
				};
			switch(n.onreadystatechange = function() {
				if(n.readyState === o.DONE)
					if(n.status >= 200 && n.status <= 299) try {
						s("success")
					} catch(t) {
						s("error")
					} else s("error")
			}, n.onerror = function() {
				s("error"), console && console.error(arguments, this)
			}, n.withCredentials = !0, e.type.toLowerCase()) {
				case "get":
					t += "?" + r(e.data), n.open(e.type, t, e.sync), n.send();
					break;
				case "post":
					var a = r(e.data);
					n.open(e.type, t, e.sync), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(a);
					break;
				default:
					console && console.error(arguments, this)
			}
		}
		t.exports = function(t, e) {
			var n = i.extend({
				type: "post",
				data: {},
				dataType: "json",
				success: null,
				error: null,
				sync: !0,
				context: this,
				jsonp: !1
			}, e);
			n.jsonp ? function(t, e) {
				var n = function(t, n) {
						i.isFunction(e[t]) && e[t].call(e.context, n)
					},
					o = document.createElement("script"),
					s = "callback" + Math.random().toString().split(".")[1],
					a = t + "?";
				e.data.callback = s, window[s] = function(t) {
					n("success", t)
				}, o.src = a + r(e.data), o.onerror = function() {
					n("error")
				}, document.body.appendChild(o)
			}(t, n) : s(t, n)
		}
	},
	6: function(t, e, n) {
		var i = n(0),
			o = {
				prefix: {
					expand: "zhuge-auto-track-",
					interface: "zhuge-interface-"
				},
				body: document.getElementsByTagName("body")[0],
				ready: function(t, e) {
					if(this.body) t.call(e);
					else var n = this,
						i = setInterval(function() {
							window.document.body && (n.body = window.document.body, clearInterval(i), t.call(e))
						}, 50)
				},
				addClass: function(t, e) {
					var n = this.getAttr(t, "class") || "";
					new RegExp(e).test(n) || (n += " " + e, o.setAttr(t, "class", i.trim(n)))
				},
				removeClass: function(t, e) {
					var n = this.getAttr(t, "class") || "";
					o.setAttr(t, "class", i.trim(n.replace(e, "")))
				},
				bind: function(t, e, n, o) {
					o = o || t;
					var r = function(e) {
						if((e.target = e.target || e.srcElement, i.isFunction(n)) && !1 === n.call(o, e || window.event, t)) return e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.returnValue && (e.returnValue = !1), e.cancelBubble && (e.cancelBubble = !0), !1
					};
					if(t.addEventListener) t.addEventListener(e, r, !0);
					else if(t.attachEvent) t.attachEvent("on" + e, r);
					else {
						var s = "on" + e,
							a = t[s];
						t[s] = function(e) {
							return i.isFunction(a) && a.call(t, e || window.event), n.call(o, e || window.event, t)
						}
					}
					return {
						unbind: function() {
							t.removeEventListener ? t.removeEventListener(e, r, !0) : t.detachEvent && t.detachEvent("on" + e, r)
						}
					}
				},
				data: function(t, e) {
					var n = t.dataset || {};
					if(i.isString(e)) return n[e];
					for(var o in e) n[o] = e[o]
				},
				getStylePropertyValue: function(t, e) {
					return t && e ? window.getComputedStyle ? window.getComputedStyle(t).getPropertyValue(e) : t.currentStyle ? t.currentStyle[e] : "" : ""
				},
				getTagName: function(t) {
					return t && t.tagName ? t.tagName.toLowerCase() : ""
				},
				getAttr: function(t, e) {
					return t && t.getAttribute ? t.getAttribute(e) : ""
				},
				setAttr: function(t, e, n) {
					if(i.isObject(e))
						for(var o in e) t.setAttribute(o, e[o]);
					else t.setAttribute(e, n)
				},
				isValidLink: function(t) {
					return "a" === this.getTagName(t) && this.getAttr(t, "href") && !/^javascript:/.test(this.getAttr(t, "href"))
				},
				is: function(t, e) {
					for(var n = !1, i = this.query(e), o = t; o && !n && "body" !== this.getTagName(o);) {
						for(var r = 0, s = i.length; r < s; r++) {
							if(i[r] === o) {
								n = !0;
								break
							}
						}
						n || (o = this.getParent(o))
					}
					return {
						flag: n,
						target: o
					}
				},
				isClickAble: function(t, e, n) {
					if(!t || this.isTextNode(t)) return {
						flag: !1
					};
					var o = this.getTagName(t),
						r = this.getAttr(t, "type"),
						s = this.isValidLink(t),
						a = {
							flag: !1,
							target: t,
							isValidLink: s,
							form: null
						};
					switch(o) {
						case "a":
							if(s) {
								a.flag = !0;
								break
							}
						case "button":
							t.disabled || (a.flag = !0);
							break;
						case "input":
							/button|reset|submit/.test(r) && !t.disabled && (a.flag = !0, "submit" === r && (a.form = t.form));
							break;
						case "body":
							a.flag = !1;
							break;
						default:
							if(this.hasBindClick(t) || i.isFunction(e) && e(t)) a.flag = !0;
							else if(!n) return this.isClickAble(this.getParent(t))
					}
					return a
				},
				hasBindClick: function(t) {
					return !!(t.onclick || window.jQuery && (window.jQuery._data || window.jQuery.data) && i.isFunction(window.jQuery._data || window.jQuery.data) && (window.jQuery._data || window.jQuery.data)(t, "events"))
				},
				getParent: function(t) {
					return t.parentNode
				},
				getIndexInParent: function(t) {
					for(var e = this.getParent(t), n = this.getSelector(t), i = o.query(e, n), r = 0, s = i.length; r < s; r++) {
						if(i[r] === t) return r
					}
					return 0
				},
				getSelector: function(t) {
					for(var e = this.getAttr(t, "id"), n = this.getTagName(t), o = i.trim(this.getAttr(t, "class")).split(/\s/), r = [], s = 0, a = o.length; s < a; s++) new RegExp(this.prefix.interface + "|" + this.prefix.expand).test(o[s]) || r.push(o[s]);
					return r = r.join("."), e ? "#" + e : n + (r = r ? "." + r : "")
				},
				getUniqueSelector: function(t, e) {
					var n = this.getSelector(t);
					return /#/.test(n) || "body" === this.getTagName(t) ? (e && (n = n + ">" + e), n) : this.getParent(t) ? (n += ":eq(" + this.getIndexInParent(t) + ")", e && (n = n + ">" + e), this.getUniqueSelector(this.getParent(t), n)) : ""
				},
				getTextContent: function(t) {
					return t && (t.textContent || t.innerText || this.getAttr(t, "type") || t.value) || ""
				},
				query: function() {
					var t = "",
						e = window.document,
						n = /:eq\(\d+\)/g;
					if(i.isString(arguments[0]) ? t = arguments[0] : (e = arguments[0] || e, t = arguments[1]), this.isTextNode(e)) return [];
					if(n.test(t)) {
						for(var o = t.split(n), r = t.match(n), s = null, a = 0, c = o.length; a < c; a++) {
							var u = o[a].replace(/^>/, ":scope>");
							if(!u) break;
							if(s = this.query(s || e, u), !(r.length > a)) return s;
							var d = r[a].match(/\d+/)[0];
							if(!(s && d < s.length)) return [];
							s = s[d]
						}
						return [s]
					}
					if(i.isString(t)) {
						var f = t.match(/^[a-z|>|:]*[#.]\d/);
						if(f && f.length) {
							var l = (f[0] || "").length - 1;
							t = t.slice(0, l) + "\\00003" + t.slice(l)
						}
					}
					return e.querySelectorAll(t)
				},
				isTextNode: function(t) {
					return "#text" === t.nodeName
				},
				loadJs: function(t) {
					t = i.extend({
						async: !0,
						src: "",
						onLoad: null,
						onError: null,
						context: null
					}, t || {});
					var e = document.createElement("script");
					this.setAttr(e, {
						async: t.async,
						src: t.src
					}), this.bind(e, "load", t.onLoad, t.context), this.bind(e, "error", t.onError, t.context), this.body.appendChild(e)
				}
			};
		t.exports = o
	},
	69: function(t, e, n) {
		var i = n(0),
			o = function(t, e) {
				this.name = t, this.props = {}, this.config = i.extend({}, e), this.load()
			};
		o.prototype.load = function() {
			var t = i.cookie.parse(this.name);
			t && (this.props = i.extend({}, t))
		}, o.prototype.save = function() {
			i.cookie.set(this.name, i.JSONEncode(this.props), this.config.cookie_expire_days, this.config.cookie_cross_subdomain, this.config.cookie_secure)
		}, o.prototype.register_once = function(t, e) {
			return !!i.isObject(t) && (void 0 === e && (e = "None"), i.each(t, function(t, n) {
				this.props[n] && this.props[n] !== e || (this.props[n] = t)
			}, this), this.save(), !0)
		}, o.prototype.register = function(t) {
			return !!i.isObject(t) && (i.extend(this.props, t), this.save(), !0)
		}, t.exports = o
	},
	7: function(t, e) {
		t.exports = {
			MODE: {
				NORMAL: 0,
				CREATE: 1,
				CREATING_EVENT: 2,
				ADD_SAME: 3,
				ADDING_SAME_AUTO: 4,
				ADDING_SAME_CUSTOM: 5,
				ADD_PROPERTY: 6,
				ADDING_PROPERTY: 7
			},
			SESSION_KEYS: {
				IS_ANALYSIS_MODE: "isZhugeVisualizerMode",
				PARAMS: "jsVisualizerParam"
			},
			URL: {
				DATA_LIST: "https://zhugeio.com/data/datalist.jsp",
				DELETE_EVENT: "https://zhugeio.com/appvisual/delete.jsp",
				CREATE_EVENT: "https://zhugeio.com/appvisual/create.jsp",
				UPDATE_EVENT: "https://zhugeio.com/appvisual/update.jsp",
				CHECK_NAME: "https://zhugeio.com/appvisual/checkName.jsp",
				QUERY_VISUAL_LIST: "https://zhugeio.com/appvisual/queryVisualList.jsp"
			}
		}
	},
	70: function(t, e, n) {
		var i = n(0),
			o = n(1),
			r = (n(5), n(25));

		function s(t, e) {
			(this.config = i.extend({
				open: !1
			}, e || {}), this.tracker = t, this.loaded = !1, this.config.open) && (this._init(), "heatMap" === (window.sessionStorage.getItem("zhugeAnalysisModeType") || "") && this._initQueryParam())
		}
		s.prototype = {
			constructor: s,
			_init: function() {
				o.ready(function() {
					this._initEventBind()
				}, this)
			},
			_initEventBind: function() {
				o.bind(window, "message", this._onMessage, this)
			},
			_initQueryParam: function() {
				(window.opener || window.parent).postMessage({
					command: "getHeatMapQueryParam",
					data: {
						rect: o.getRect(o.body)
					}
				}, "https://zhugeio.com")
			},
			_onMessage: function(t) {
				var e = t.origin,
					n = t.data;
				if("https://zhugeio.com" === e) switch(n.command) {
					case "pageReload":
						window.sessionStorage.removeItem("zhugeAnalysisModeType"), n.href ? location.replace(n.href) : location.reload();
						break;
					case "openJsHeatMap":
						this._initQueryParam();
						break;
					case "getHeatMapQueryParam":
						window.sessionStorage.setItem(r.SESSION_KEYS.PARAMS, JSON.stringify(n.params)), this._loadAnalysisCode()
				}
			},
			_loadAnalysisCode: function() {
				if(!this.loaded) {
					this.loaded = !0, window.sessionStorage.setItem("zhugeAnalysisModeType", "heatMap");
					var t = "https://static2-online.zhugeio.com/lib/sdk/heatMap.min.js".replace(/\"/g, "");
					o.loadJs({
						src: t + "?a=" + Math.random()
					})
				}
			}
		}, t.exports = s
	},
	71: function(t, e, n) {
		var i = n(0),
			o = n(6),
			r = n(5),
			s = n(7);

		function a(t, e) {
			this.config = i.extend({
				open: !1,
				stopTrack: null
			}, e || {}), this.tracker = t, this.eventList = [], this.loaded = !1, this.config.open && this._init()
		}
		a.prototype = {
			constructor: a,
			_init: function() {
				o.ready(function() {
					this._initEventBind(), this._loadEventList(), window.sessionStorage.getItem(s.SESSION_KEYS.IS_ANALYSIS_MODE) && this._loadAnalysisCode()
				}, this)
			},
			_initEventBind: function() {
				o.bind(window, "message", this._onMessage, this)
			},
			_loadEventList: function() {
				r("https://api.zhugeio.com/v2/visual", {
					type: "get",
					data: {
						url: location.href,
						app_key: this.tracker.getKey(),
						platform: 3
					},
					context: this,
					jsonp: !0,
					success: function(t) {
						10001 === t.code && (this.eventList = t.visual_events)
					}
				})
			},
			_onMessage: function(t) {
				var e = t.origin,
					n = t.data;
				if("https://zhugeio.com" === e) switch(n.command) {
					case "openJsVisualizer":
						window.opener.postMessage({
							command: "getQueryParam"
						}, e);
						break;
					case "getQueryParam":
						window.sessionStorage.setItem(s.SESSION_KEYS.PARAMS, JSON.stringify(n.data)), this._loadAnalysisCode()
				}
			},
			_loadAnalysisCode: function() {
				if(!this.loaded) {
					this.loaded = !0, this.config.stopTrack(), window.sessionStorage.setItem(s.SESSION_KEYS.IS_ANALYSIS_MODE, JSON.stringify({
						flag: !0
					}));
					var t = "https://static2-online.zhugeio.com/lib/sdk/visualizer.min.js".replace(/\"/g, "");
					o.loadJs({
						src: t + "?a=" + Math.random()
					})
				}
			},
			getEvent: function(t) {
				for(var e = [], n = 0, i = this.eventList.length; n < i; n++)
					for(var r = this.eventList[n], s = 0; s < r.element.length; s++)
						if(o.is(t.target, r.element[s]).flag) {
							for(var a = {
									element_content: o.getTextContent(t.target),
									element_link: t.isValidLink ? o.getAttr(t.target, "href") : null
								}, c = 0; c < r.attr.length; c++) {
								var u = r.attr[c];
								a[u.name] = o.getTextContent(o.query(u.selector)[0])
							}
							var d = {
								dt: "evt",
								eid: r.event_name,
								param: a
							};
							e.push(d)
						}
				return e
			}
		}, t.exports = a
	},
	72: function(t, e, n) {
		var i = n(0),
			o = n(6),
			r = n(8),
			s = n(15),
			a = n(5);

		function c(t, e) {
			this.tracker = t, this.config = i.extend({
				open: !1,
				isClickAble: null,
				singlePage: !1
			}, e), this.loaded = !1, this.config.open && this._init()
		}
		c.prototype = {
			constructor: c,
			_init: function() {
				this.config.singlePage && this._initHistoryHook(), this._onView();
				var t = this;
				o.ready(function() {
					t._initEventBind(), setTimeout(function() {
						t._checkPermissions()
					}, 1e3)
				}, this)
			},
			_initHistoryHook: function() {
				var t = window.history,
					e = t.pushState,
					n = this;
				t.pushState = function(i) {
					var o = e.apply(t, arguments);
					return n._onView(), o
				}
			},
			_initEventBind: function() {
				o.bind(window, "message", this._onMessage, this), this.config.singlePage && (o.bind(window, "popstate", this._onView, this), o.bind(window, "hashchange", this._onView, this))
			},
			_checkPermissions: function() {
				"analysis" === window.sessionStorage.getItem("zhugeAnalysisModeType") && a(s.url.CHECK_LOGIN, {
					type: s.json ? "get" : "post",
					context: this,
					success: function(t) {
						t.authorized && this._loadAnalysisCode()
					},
					error: function(t) {
						console && console.error("加载分析脚本失败", t)
					}
				})
			},
			_loadAnalysisCode: function() {
				if(!this.loaded) {
					this.loaded = !0, window.sessionStorage.setItem("zhugeAnalysisModeType", "analysis");
					var t = "https://static2-online.zhugeio.com/lib/sdk/analysis.min.js".replace(/\"/g, "");
					o.loadJs({
						src: t + "?a=" + Math.random()
					})
				}
			},
			_onMessage: function(t) {
				if("https://zhugeio.com" === t.origin) {
					var e = t.data;
					switch(e.command) {
						case "pageReload":
							window.sessionStorage.removeItem("zhugeAnalysisModeType"), e.href ? location.replace(e.href) : location.reload();
							break;
						case "authorized":
							var n = window.opener || window.parent;
							if(n === window) return;
							n.postMessage({
								command: "hasOpenAutoTrackAnalysis"
							}, "https://zhugeio.com"), this._loadAnalysisCode();
							break;
						default:
							console && console.warn("未识别的message信息", e)
					}
				}
			},
			_onView: function() {
				var t = {
					$page_url: window.location.href,
					$page_title: window.document.title
				};
				this.config.isLanding && (t.$landing_page = !0), this.tracker.batchTrack([{
					dt: "abp",
					eid: "pv",
					param: t
				}])
			},
			getEvent: function(t) {
				var e = o.getUniqueSelector(t.target);
				if(e) {
					var n = t.target,
						i = {
							$page_url: window.location.href,
							$page_title: window.document.title,
							$element_id: o.getAttr(n, "id"),
							$element_content: o.getTextContent(n),
							$element_type: o.getTagName(n),
							$element_style: o.getAttr(n, "class"),
							$element_selector: r(e),
							$element_link: t.isValidLink ? o.getAttr(n, "href") : null
						};
					return this.config.isLanding && (i.$landing_page = !0), {
						dt: "abp",
						eid: "click",
						param: i
					}
				}
			}
		}, t.exports = c
	},
	73: function(t, e, n) {
		var i = n(0),
			o = n(72),
			r = n(71),
			s = n(70),
			a = n(6),
			c = n(69),
			u = [],
			d = ["identify", "track", "page"],
			f = null,
			l = function(t) {
				this.config = {}, i.extend(this.config, t), this.idle = 0, this.last_activity = new Date, this.is_landing = !1
			};
		l.prototype._init = function(t, e, n) {
			if(this._key = t, this._jsc = function() {}, i.isObject(e))
				for(var o in i.extend(this.config, e), this.config) i.isObject(this.config[o]) && (this.config[o] = i.JSONEncode(this.config[o]));
			var r = this,
				s = function(t, e) {
					r._initDid(t), r.cookie = new c("zg_" + r._key, r.config);
					var n = i.cookie.get("_zg");
					n && r.config.inherit_user_data ? (r.cookie.register_once(i.JSONDecode(n), ""), i.cookie.remove("_zg")) : r.cookie.register_once({
						sid: 0,
						updated: 0,
						info: 0,
						superProperty: r.config.superProperty,
						platform: r.config.platform
					}, ""), r.cookie.register({
						superProperty: r.config.superProperty,
						platform: r.config.platform
					});
					var o = r._session(e);
					r.config.autoTrack && (r.is_landing = r._checkLanding(o)), r._info(), r._startPing(), r._initAutoTrack(), r.is_landing && r._initLanding()
				};
			this.config.adTrack ? (r._wrapTrackerFunction(), i.jsonp("https://u.zhugeapi.net/v2/adtrack/header", function(t) {
				s(t.zg_adver_did, t.zg_adver_sid), n(), r._doTrackerQueue()
			}, function() {
				s(), n(), r._doTrackerQueue()
			})) : (s(), n())
		}, l.prototype._checkLanding = function(t) {
			if(this.config.autoTrack) {
				var e = !1,
					n = i.getDomain(location.href) !== i.getDomain(document.referrer);
				return t ? n && (e = !0, this.cookie.register({
					landHref: location.href
				})) : n && location.href === this.cookie.props.landHref && (e = !0), e
			}
		}, l.prototype._initLanding = function() {
			var t = this,
				e = function(e) {
					t.config.autoTrack && (f && clearTimeout(f), f = setTimeout(function() {
						t.batchTrack([{
							dt: "abp",
							eid: "scroll",
							param: {
								$page_url: window.location.href,
								$page_title: window.document.title,
								$scroll: Math.floor(window.innerHeight + (window.scrollY || window.pageYOffset))
							}
						}])
					}, 50))
				};
			a.ready(function() {
				a.bind(window, "scroll", e)
			}, this)
		}, l.prototype._wrapTrackerFunction = function() {
			var t = this,
				e = {},
				n = "",
				o = 0;
			for(o = 0; o < d.length; o++) e[n = d[o]] = l.prototype[n], l.prototype[n] = function(n) {
				return function() {
					t.cookie ? i.isFunction(e[n]) && e[n].apply(t, arguments) : u.push([e[n], arguments])
				}
			}(n)
		}, l.prototype._doTrackerQueue = function() {
			var t = 0,
				e = null;
			for(t = 0; t < u.length; t++) e = u[t] || [], i.isFunction(e[0]) && e[0].apply(this, e[1] || []);
			u = []
		}, l.prototype._initAutoTrack = function() {
			var t = !0,
				e = new r(this, {
					open: this.config.visualizer,
					stopTrack: function() {
						t = !1
					}
				}),
				n = new o(this, {
					open: this.config.autoTrack,
					isClickAble: this.config.isClickAble,
					singlePage: this.config.singlePage,
					isLanding: this.is_landing
				}),
				c = (new s(this, {
					open: this.config.autoTrack
				}), this),
				u = function(o) {
					if(t) {
						var r = a.isClickAble(o.target, c.config.isClickAble);
						if(r.flag) {
							var s = [];
							c.config.autoTrack && !i.hasMobileSdk().flag && s.push(n.getEvent(r)), c.config.visualizer && (s = e.getEvent(r).concat(s));
							var u = o.target || o.srcElement || {},
								d = u.clickedByZgSdk,
								f = a.getAttr(r.target, "target");
							if(c.config.redirectAfterTrack && document.body.addEventListener && (!f || "_self" === f)) return !0 === d || !s.length || (c.batchTrack(s, function() {
								u.clickedByZgSdk = !0, u.click()
							}), !1);
							s.length && c.batchTrack(s)
						}
					}
				};
			a.ready(function() {
				a.bind(a.body, "click", u)
			}, this)
		}, l.prototype._session = function(t) {
			var e = !1,
				n = this.cookie.props.updated,
				o = this.cookie.props.sid,
				r = 1 * new Date,
				s = new Date;
			if(0 == o || r > n + 60 * this.config.session_interval_mins * 1e3) {
				if(o > 0 && n > 0) {
					var a = {
						dt: "se",
						pr: {}
					};
					a.pr.$ct = s.getTime(), a.pr.$tz = 6e4 * -s.getTimezoneOffset(), a.pr.$dru = n - o, a.pr.$sid = o, a.pr.$cuid = this.cookie.props.cuid, this._batchTrack(a)
				}
				o = t || r, o *= 1;
				var c = {
						dt: "ss",
						pr: {}
					},
					u = i.info.campaignParams(this.config.utm);
				c.pr = i.extend(c.pr, u), this.cookie.register({
					utm: i.JSONEncode(u)
				}, ""), c.pr.$ct = s.getTime(), c.pr.$sid = o, c.pr.$cuid = this.cookie.props.cuid, c.pr.$cn = this.config.app_channel, c.pr.$vn = this.config.app_version, c.pr.$tz = 6e4 * -s.getTimezoneOffset(), c.pr.$url = location.href, c.pr.$ref = document.referrer;
				var d = i.getDomain(document.referrer);
				c.pr.$referrer_domain = d, this.cookie.register({
					referrerDomain: d
				}, ""), this._batchTrack(c), this.cookie.register({
					sid: o
				}, ""), e = !0
			}
			return this.cookie.register({
				updated: r
			}, ""), e
		}, l.prototype._info = function() {
			var t = this.cookie.props.info,
				e = 1 * new Date;
			if(e > t + 24 * this.config.info_upload_interval_days * 60 * 60 * 1e3) {
				var n = {
						dt: "pl",
						pr: {
							$rs: i.info.resolution()
						}
					},
					o = new Date;
				n.pr.$tz = 6e4 * -o.getTimezoneOffset(), n.pr.$ct = o.getTime(), n.pr.$cuid = this.cookie.props.cuid, n.pr = i.extend(n.pr, i.encode(i.JSONDecode(this.cookie.props.platform))), this._batchTrack(n), this.cookie.register({
					info: e
				}, "")
			}
		}, l.prototype.debug = function(t) {
			this.config.debug = t
		}, l.prototype.identify = function(t, e, n) {
			t += "";
			var o = i.isObject(e) ? e : {},
				r = i.isObject(e) ? n : e;
			this.cookie.register({
				cuid: t
			}, ""), this._session();
			var s = i.hasMobileSdk();
			if(s.flag) s.identify(t, o), i.isFunction(r) && r();
			else {
				var a = {
						dt: "usr",
						pr: {}
					},
					c = new Date;
				a.pr.$ct = c.getTime(), a.pr.$tz = 6e4 * -c.getTimezoneOffset(), a.pr.$cuid = t, a.pr.$sid = this.cookie.props.sid, a.pr.$url = location.href, a.pr.$ref = document.referrer, a.pr = i.extend(a.pr, i.encode(o)), this._batchTrack(a, r)
			}
		}, l.prototype.setUserProperties = function(t, e) {
			this.identify(this.cookie.props.cuid, t, e)
		}, l.prototype.page = function(t, e) {
			this._session();
			var n = document.location.href,
				i = {
					et: "pg"
				};
			i.pid = n, i.pn = void 0 === t ? n : t, i.tl = document.title, i.ref = document.referrer, i.sid = this.cookie.props.sid, this._batchTrack(i, e)
		}, l.prototype.setWxProperties = function(t, e, n) {
			if(t && e) {
				var o = new Date,
					r = {
						dt: "um",
						pr: {
							$push_ch: "zgwx",
							$wx_appid: t,
							$wx_openid: e,
							$ct: o.getTime(),
							$tz: 6e4 * -o.getTimezoneOffset()
						}
					},
					s = this.cookie.props.cuid;
				s && (r.pr.$cuid = s), this._batchTrack(r, n)
			} else i.isFunction(n) && n()
		}, l.prototype.track = function(t, e, n) {
			var o = i.isObject(e) ? e : {},
				r = i.isObject(e) ? n : e,
				s = i.hasMobileSdk();
			s.flag ? (s.track(t, o), i.isFunction(r) && r()) : this.batchTrack([{
				dt: "evt",
				eid: t,
				param: o
			}], r)
		}, l.prototype.batchTrack = function(t, e) {
			this._session();
			for(var n = [], o = new Date, r = this.cookie.props.utm ? i.JSONDecode(this.cookie.props.utm) : {}, s = 0, a = t.length; s < a; s++) {
				var c = t[s];
				if(c && c.dt) {
					var u = {
						dt: c.dt,
						pr: {}
					};
					for(var d in u.pr.$ct = o.getTime(), u.pr.$tz = 6e4 * -o.getTimezoneOffset(), u.pr.$cuid = this.cookie.props.cuid, u.pr.$sid = this.cookie.props.sid, u.pr.$url = location.href, u.pr.$ref = document.referrer, u.pr.$referrer_domain = this.cookie.props.referrerDomain, u.pr.$eid = c.eid, r) u.pr[d] = r[d];
					"evt" === c.dt ? u.pr = i.extend(u.pr, i.encode(c.param)) : u.pr = i.extend(u.pr, c.param), u.pr = i.extend(u.pr, i.encode(i.JSONDecode(this.cookie.props.superProperty))), n.push(u)
				}
			}
			n.length && this._batchTrack(n, e)
		}, l.prototype._moved = function(t) {
			this.last_activity = new Date, this.idle = 0
		}, l.prototype._startPing = function() {
			var t = this;
			i.register_event(window, "mousemove", function() {
				t._moved.apply(t, arguments)
			}), void 0 === this.pingInterval && (this.pingInterval = window.setInterval(function() {
				t._ping()
			}, this.config.ping_interval))
		}, l.prototype._stopPing = function() {
			void 0 !== this.pingInterval && (window.clearInterval(this.pingInterval), delete this.pingInterval)
		}, l.prototype._ping = function() {
			if(this.config.ping && this.idle < this.config.idle_timeout) {
				var t = {
					type: "ping",
					sdk: "web",
					sdkv: "2.0"
				};
				t.ak = this._key, t.did = this.did.props.did, t.cuid = this.cookie.props.cuid, this._sendTrackRequest(t)
			} else this._stopPing();
			var e = new Date;
			return e - this.last_activity > this.config.idle_threshold && (this.idle = e - this.last_activity), this
		}, l.prototype.getDid = function() {
			return this.did.props.did
		}, l.prototype.getSid = function() {
			return this.cookie.props.sid
		}, l.prototype.setSuperProperty = function(t) {
			i.isObject(t) && this.cookie.register({
				superProperty: i.JSONEncode(t)
			})
		}, l.prototype.setPlatform = function(t) {
			i.isObject(t) && (this.cookie.register({
				platform: i.JSONEncode(t),
				info: 0
			}), this._info())
		}, l.prototype._batchTrack = function(t, e) {
			if(!i.hasMobileSdk().flag) {
				var n = {},
					o = new Date;
				n.sln = "itn", n.pl = "js", n.sdk = "zg-js", n.sdkv = "2.0", n.owner = "zg", n.ut = [o.getFullYear(), o.getMonth() + 1, o.getDate()].join("-") + " " + o.toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0], n.tz = 6e4 * -o.getTimezoneOffset(), n.debug = this.config.debug ? 1 : 0, n.ak = this._key, n.usr = {
					did: this.did.props.did
				};
				var r = [];
				i.isArray(t) ? r = t : r.push(t), n.data = r, this._sendTrackRequest(n, this._prepareCallback(e, n))
			}
		}, l.prototype._prepareCallback = function(t, e) {
			if(!i.isFunction(t)) return null;
			return function(n) {
				t(n, e)
			}
		}, l.prototype._initDid = function(t) {
			var e = i.cookie.get("_zg");
			t = t || i.UUID();
			e && i.JSONDecode(e).uuid && (t = i.JSONDecode(e).uuid), i.cookie.get("zg_did") || i.cookie.remove("zg_" + this._key), this.did = new c("zg_did", this.config), this.did.register_once({
				did: t
			}, "")
		}, l.prototype._sendTrackRequest = function(t, e) {
			var n = i.truncate(t, 255),
				o = {
					event: i.JSONEncode(n),
					_: (new Date).getTime().toString()
				},
				r = {
					bac: this.config.api_host_bac + "&" + i.HTTPBuildQuery(o),
					normal: this.config.api_host + "&" + i.HTTPBuildQuery(o)
				};
			this._sendRequest(r, e)
		}, l.prototype._sendRequest = function(t, e) {
			var n = new Image,
				i = !1,
				o = setTimeout(function() {
					!i && e && (e(), i = !0)
				}, 500),
				r = function() {
					!i && e && (clearTimeout(o), e())
				};
			n.onload = r, n.onerror = function() {
				var e = new Image;
				e.onload = r, e.onerror = r, e.src = t.bac
			}, n.src = t.normal
		}, l.prototype.push = function(t) {
			var e = t.shift();
			this[e] && this[e].apply(this, t)
		}, l.prototype.getKey = function() {
			return this._key
		}, t.exports = l
	},
	74: function(t, e, n) {
		var i = n(73),
			o = n(6);
		DEFAULT_CONFIG = {
			api_host: "https://u.zhugeapi.net/web_event/web.gif?method=web_event_srv.upload",
			api_host_bac: "https://ubak.zhugeio.com/web_event/web.gif?method=web_event_srv.upload",
			debug: !1,
			inherit_user_data: !0,
			ping: !1,
			ping_interval: 12e3,
			idle_timeout: 3e5,
			idle_threshold: 1e4,
			track_link_timeout: 300,
			cookie_expire_days: 365,
			cookie_cross_subdomain: !0,
			cookie_secure: !1,
			info_upload_interval_days: 7,
			session_interval_mins: 30,
			app_channel: "js",
			app_version: "1.0",
			superProperty: "{}",
			platform: "{}",
			autoTrack: !1,
			isClickAble: null,
			redirectAfterTrack: !1,
			singlePage: !1,
			visualizer: !1,
			deepShare: !1,
			onLoadDeepShare: null,
			utm: {},
			adTrack: !1
		};
		for(var r = window.zhuge || [], s = new i(DEFAULT_CONFIG), a = 0; a < r.length; a++)
			if("_init" === r[a][0]) {
				var c = r.shift(),
					u = c.shift();
				c.push(function() {
					for(; r && r.length > 0;) {
						var t = r.shift(),
							e = t.shift();
						s[e] && s[e].apply(s, t)
					}
				}), s[u] && s[u].apply(s, c);
				break
			}
		if(s.config.deepShare) {
			var d = new Date,
				f = d.getFullYear().toString() + d.getMonth().toString() + d.getDate().toString();
			o.loadJs({
				src: "https://zgsdk.zhugeio.com/deepshare.min.js?v=" + f,
				onLoad: s.config.onLoadDeepShare
			})
		}
		s.env = Object({
			ZHUGE_ORIGIN: "https://zhugeio.com",
			WEBSITE_API_ORIGIN: "https://zhugeio.com",
			API_SERVER_ORIGIN: "https://api.zhugeio.com",
			LOG_API_ORIGIN: "https://u.zhugeapi.net",
			LOG_API_ORIGIN_BAC: "https://ubak.zhugeio.com",
			ANALYSIS_CODE_SRC: "https://static2-online.zhugeio.com/lib/sdk/analysis.min.js",
			VISUALIZER_CODE_SRC: "https://static2-online.zhugeio.com/lib/sdk/visualizer.min.js",
			HEATMAP_CODE_SRC: "https://static2-online.zhugeio.com/lib/sdk/heatMap.min.js",
			DEEPSHARE_CODE_SRC: "https://zgsdk.zhugeio.com/deepshare.min.js"
		}), window.zhuge = s
	},
	8: function(t, e) {
		function n(t, e) {
			var n = (65535 & t) + (65535 & e);
			return(t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
		}

		function i(t, e, i, o, r, s) {
			return n((a = n(n(e, t), n(o, s))) << (c = r) | a >>> 32 - c, i);
			var a, c
		}

		function o(t, e, n, o, r, s, a) {
			return i(e & n | ~e & o, t, e, r, s, a)
		}

		function r(t, e, n, o, r, s, a) {
			return i(e & o | n & ~o, t, e, r, s, a)
		}

		function s(t, e, n, o, r, s, a) {
			return i(e ^ n ^ o, t, e, r, s, a)
		}

		function a(t, e, n, o, r, s, a) {
			return i(n ^ (e | ~o), t, e, r, s, a)
		}

		function c(t, e) {
			var i, c, u, d, f;
			t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
			var l = 1732584193,
				h = -271733879,
				p = -1732584194,
				g = 271733878;
			for(i = 0; i < t.length; i += 16) c = l, u = h, d = p, f = g, h = a(h = a(h = a(h = a(h = s(h = s(h = s(h = s(h = r(h = r(h = r(h = r(h = o(h = o(h = o(h = o(h, p = o(p, g = o(g, l = o(l, h, p, g, t[i], 7, -680876936), h, p, t[i + 1], 12, -389564586), l, h, t[i + 2], 17, 606105819), g, l, t[i + 3], 22, -1044525330), p = o(p, g = o(g, l = o(l, h, p, g, t[i + 4], 7, -176418897), h, p, t[i + 5], 12, 1200080426), l, h, t[i + 6], 17, -1473231341), g, l, t[i + 7], 22, -45705983), p = o(p, g = o(g, l = o(l, h, p, g, t[i + 8], 7, 1770035416), h, p, t[i + 9], 12, -1958414417), l, h, t[i + 10], 17, -42063), g, l, t[i + 11], 22, -1990404162), p = o(p, g = o(g, l = o(l, h, p, g, t[i + 12], 7, 1804603682), h, p, t[i + 13], 12, -40341101), l, h, t[i + 14], 17, -1502002290), g, l, t[i + 15], 22, 1236535329), p = r(p, g = r(g, l = r(l, h, p, g, t[i + 1], 5, -165796510), h, p, t[i + 6], 9, -1069501632), l, h, t[i + 11], 14, 643717713), g, l, t[i], 20, -373897302), p = r(p, g = r(g, l = r(l, h, p, g, t[i + 5], 5, -701558691), h, p, t[i + 10], 9, 38016083), l, h, t[i + 15], 14, -660478335), g, l, t[i + 4], 20, -405537848), p = r(p, g = r(g, l = r(l, h, p, g, t[i + 9], 5, 568446438), h, p, t[i + 14], 9, -1019803690), l, h, t[i + 3], 14, -187363961), g, l, t[i + 8], 20, 1163531501), p = r(p, g = r(g, l = r(l, h, p, g, t[i + 13], 5, -1444681467), h, p, t[i + 2], 9, -51403784), l, h, t[i + 7], 14, 1735328473), g, l, t[i + 12], 20, -1926607734), p = s(p, g = s(g, l = s(l, h, p, g, t[i + 5], 4, -378558), h, p, t[i + 8], 11, -2022574463), l, h, t[i + 11], 16, 1839030562), g, l, t[i + 14], 23, -35309556), p = s(p, g = s(g, l = s(l, h, p, g, t[i + 1], 4, -1530992060), h, p, t[i + 4], 11, 1272893353), l, h, t[i + 7], 16, -155497632), g, l, t[i + 10], 23, -1094730640), p = s(p, g = s(g, l = s(l, h, p, g, t[i + 13], 4, 681279174), h, p, t[i], 11, -358537222), l, h, t[i + 3], 16, -722521979), g, l, t[i + 6], 23, 76029189), p = s(p, g = s(g, l = s(l, h, p, g, t[i + 9], 4, -640364487), h, p, t[i + 12], 11, -421815835), l, h, t[i + 15], 16, 530742520), g, l, t[i + 2], 23, -995338651), p = a(p, g = a(g, l = a(l, h, p, g, t[i], 6, -198630844), h, p, t[i + 7], 10, 1126891415), l, h, t[i + 14], 15, -1416354905), g, l, t[i + 5], 21, -57434055), p = a(p, g = a(g, l = a(l, h, p, g, t[i + 12], 6, 1700485571), h, p, t[i + 3], 10, -1894986606), l, h, t[i + 10], 15, -1051523), g, l, t[i + 1], 21, -2054922799), p = a(p, g = a(g, l = a(l, h, p, g, t[i + 8], 6, 1873313359), h, p, t[i + 15], 10, -30611744), l, h, t[i + 6], 15, -1560198380), g, l, t[i + 13], 21, 1309151649), p = a(p, g = a(g, l = a(l, h, p, g, t[i + 4], 6, -145523070), h, p, t[i + 11], 10, -1120210379), l, h, t[i + 2], 15, 718787259), g, l, t[i + 9], 21, -343485551), l = n(l, c), h = n(h, u), p = n(p, d), g = n(g, f);
			return [l, h, p, g]
		}

		function u(t) {
			var e, n = "",
				i = 32 * t.length;
			for(e = 0; e < i; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
			return n
		}

		function d(t) {
			var e, n = [];
			for(n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
			var i = 8 * t.length;
			for(e = 0; e < i; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
			return n
		}

		function f(t) {
			var e, n, i = "";
			for(n = 0; n < t.length; n += 1) e = t.charCodeAt(n), i += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
			return i
		}

		function l(t) {
			return unescape(encodeURIComponent(t))
		}

		function h(t) {
			return function(t) {
				return u(c(d(t), 8 * t.length))
			}(l(t))
		}

		function p(t, e) {
			return function(t, e) {
				var n, i, o = d(t),
					r = [],
					s = [];
				for(r[15] = s[15] = void 0, o.length > 16 && (o = c(o, 8 * t.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
				return i = c(r.concat(d(e)), 512 + 8 * e.length), u(c(s.concat(i), 640))
			}(l(t), l(e))
		}
		t.exports = function(t, e, n) {
			return e ? n ? p(e, t) : f(p(e, t)) : n ? h(t) : f(h(t))
		}
	}
});