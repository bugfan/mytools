!
function(t) {
    var e = {};
    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    },
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i,
        function(e) {
            return t[e]
        }.bind(null, i));
        return n
    },
    r.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return r.d(e, "a", e),
        e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "/dist",
    r(r.s = 21)
} ([function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    console.log("first in",t,e);
    var r = self && self.document ? "window": "worker";
    e.mode = r
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.parser = e.unparse = e.parse = void 0;
        var n = function() {
            return function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                    try {
                        for (var s, o = t[Symbol.iterator](); ! (n = (s = o.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
                    } catch(t) {
                        i = !0,
                        a = t
                    } finally {
                        try { ! n && o.
                            return && o.
                            return ()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                } (t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        } (),
        i = p(r(3)),
        a = p(r(12)),
        s = u(r(5)),
        o = u(r(16)),
        c = r(11);
        function u(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        }
        function p(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var l = function(t) {
            return t ? ("'" !== t[0] && '"' !== t[0] || (t = t.slice(1)), "'" !== t[t.length - 1] && '"' !== t[t.length - 1] || (t = t.slice(0, -1)), t.trim()) : t
        },
        h = function(e) {
            return i.
        default.vpn_host === e.host && t.startsWith(e.pathname, "/http")
        },
        f = function(t) {
            return null === t || void 0 === t || "string" != typeof t ? 0 : "h" === t.charAt(0) || "H" === t.charAt(0) ? /http(s)?:\/\//.test(t.slice(0, 8).toLowerCase()) ? 3 : 1 : "w" === t.charAt(0) || "W" === t.charAt(0) ? /ws(s)?:\/\//.test(t.slice(0, 6).toLowerCase()) ? 3 : 1 : "/" === t.charAt(0) ? "/" === t.charAt(1) ? 2 : 1 : "./" === t.slice(0, 2) || "../" === t.slice(0, 3) ? 1 : "blob:http" === t.slice(0, 9) ? 1 : "javascript:" === t.slice(0, 11) ? 1 : "data:" === t.slice(0, 5) ? 0 : (t.charAt(0), 0)
        };
        e.parse = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "http";
            if ("string" != typeof e) return e;
            if (e = l(e), o.isBlob(e)) return o.parse(e);
            if (s.isScript(e)) return "javascript:this.top.vpn_inject_script(this);" + s.parse(e.slice(11).replace("\n", ""));
            var n = f(e);
            if (!n) return e; (e = e.split("?"))[0] = e[0].replace(/\\/g,
            function(t) {
                return "/"
            });
            var u = void 0;
            if ("./" === (e = e.join("?")).slice(0, 2) || "../" === e.slice(0, 3)) {
                var p = void 0;
                e = function(e) {
                    return t(e.split("/")).reduce(function(t, e) {
                        return ".." === e ? t.length > 1 ? t.slice(0, -1) : t: "." === e ? t: t.concat(e)
                    },
                    []).join("/")
                } ((p = (p = window.document && window.document.baseURI ? window.document.baseURI.replace(window.document.origin, "") : "about:blank" === window.location.href ? "/": c.location.pathname).split("/").slice(1, -1).join("/")) ? "/" + p + "/" + e: "/" + e),
                "about:blank" === window.location.href && (e = window.document.origin + e),
                u = (0, a.
            default)(e)
            } else u = (0, a.
        default)(e);
            if (u.host === i.
        default.vpn_host && "/wengine-vpn" === u.pathname.slice(0, 12)) return e;
            if (!h(u)) {
                var d = i.
            default.vpn_host === u.host ? i.
            default.app_protocol:
                u.protocol;
                "ws" === r && (d = d === i.
            default.vpn_protocol ? "http:" === i.
            default.app_protocol ? "ws:": "wss:": d),
                d = d.slice(0, -1);
                var m = i.
            default.vpn_host === u.host ? i.
            default.app_port:
                u.port,
                v = i.
            default.vpn_host === u.host ? i.
            default.app_hostname:
                u.hostname;
                m ? u.set("pathname", d + "-" + m + "/" + v + u.pathname) : u.set("pathname", d + "/" + v + u.pathname),
                u.set("host", i.
            default.vpn_host),
                u.set("protocol", i.
            default.vpn_protocol)
            }
            return 1 === n ? u.href.slice(u.origin.length) : 2 === n ? u.href.slice(u.protocol.length) : u.href
        },
        e.unparse = function(e) {
            if ("string" != typeof e) return e;
            if (e = l(e), o.isBlob(e)) return o.unparse(e);
            if (s.isScript(e)) return e;
            var r = f(e);
            if (!r) return e; (e = e.split("?"))[0] = e[0].replace(/\\/g,
            function(t) {
                return "/"
            }),
            e = e.join("?");
            var c = (0, a.
        default)(e);
            if (c.host === i.
        default.vpn_host && "/wengine-vpn" === c.pathname.slice(0, 12)) return e;
            if (h(c)) {
                var u = function(t) {
                    return Array.isArray(t) ? t: Array.from(t)
                } (c.pathname.slice(1).split("/")),
                p = u[0],
                d = u[1],
                m = u.slice(2),
                v = p.split("-"),
                g = n(v, 2),
                y = g[0],
                _ = g[1];
                if (m = m.join("/") || "/", c.set("pathname", m), c.set("protocol", y + ":"), c.set("hostname", d), _ ? c.set("port", _) : c.set("port", ""), c.query) {
                    var x = c.query.slice(1).split("&"),
                    b = [];
                    t.each(x,
                    function(t) { / vpn - \d + $ / .test(t) || b.push(t)
                    }),
                    b.length ? c.set("query", "?" + b.join("&")) : c.set("query", "")
                }
            }
            return 1 === r ? c.href.slice(c.origin.length) : 2 === r ? c.href.slice(c.protocol.length) : c.href
        },
        e.parser = a.
    default
    }).call(this, r(2))
},
function(t, e, r) { (function(t, n) {
        var i;
        /**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash core -o ./dist/lodash.core.js`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
        (function() {
            var a, s = "Expected a function",
            o = 1,
            c = 2,
            u = 1,
            p = 1 / 0,
            l = 9007199254740991,
            h = "[object Arguments]",
            f = "[object Array]",
            d = "[object AsyncFunction]",
            m = "[object Boolean]",
            v = "[object Date]",
            g = "[object Error]",
            y = "[object Function]",
            _ = "[object GeneratorFunction]",
            x = "[object Number]",
            b = "[object Object]",
            w = "[object Proxy]",
            k = "[object RegExp]",
            E = "[object String]",
            S = /[&<>"']/g,
            A = RegExp(S.source),
            C = /^(?:0|[1-9]\d*)$/,
            P = "object" == typeof t && t && t.Object === Object && t,
            j = "object" == typeof self && self && self.Object === Object && self,
            O = P || j || Function("return this")();
            "object" == typeof e && e && !e.nodeType && e && "object" == typeof n && n && n.nodeType;
            function L(t, e) {
                return t.push.apply(t, e),
                t
            }
            function I(t) {
                return function(e) {
                    return null == e ? a: e[t]
                }
            }
            var N = function(t) {
                return function(e) {
                    return null == t ? a: t[e]
                }
            } ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });
            var T = Array.prototype,
            M = Object.prototype,
            V = M.hasOwnProperty,
            R = 0,
            D = M.toString,
            B = O._,
            H = Object.create,
            F = M.propertyIsEnumerable,
            U = O.isFinite,
            q = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            } (Object.keys, Object),
            G = Math.max;
            function W(t) {
                return t instanceof Q ? t: new Q(t)
            }
            var z = function() {
                function t() {}
                return function(e) {
                    if (!Ft(e)) return {};
                    if (H) return H(e);
                    t.prototype = e;
                    var r = new t;
                    return t.prototype = a,
                    r
                }
            } ();
            function Q(t, e) {
                this.__wrapped__ = t,
                this.__actions__ = [],
                this.__chain__ = !!e
            }
            function K(t, e, r) {
                var n = t[e];
                V.call(t, e) && Mt(n, r) && (r !== a || e in t) || X(t, e, r)
            }
            function X(t, e, r) {
                t[e] = r
            }
            function $(t, e, r) {
                if ("function" != typeof t) throw new TypeError(s);
                return setTimeout(function() {
                    t.apply(a, r)
                },
                e)
            }
            Q.prototype = z(W.prototype),
            Q.prototype.constructor = Q;
            var Z = function(t, e) {
                return function(r, n) {
                    if (null == r) return r;
                    if (!Dt(r)) return t(r, n);
                    for (var i = r.length,
                    a = e ? i: -1, s = Object(r); (e ? a--:++a < i) && !1 !== n(s[a], a, s););
                    return r
                }
            } (rt);
            function Y(t, e, r) {
                for (var n = -1,
                i = t.length; ++n < i;) {
                    var s = t[n],
                    o = e(s);
                    if (null != o && (c === a ? o == o: r(o, c))) var c = o,
                    u = s
                }
                return u
            }
            function J(t, e) {
                var r = [];
                return Z(t,
                function(t, n, i) {
                    e(t, n, i) && r.push(t)
                }),
                r
            }
            function tt(t, e, r, n, i) {
                var a = -1,
                s = t.length;
                for (r || (r = _t), i || (i = []); ++a < s;) {
                    var o = t[a];
                    e > 0 && r(o) ? e > 1 ? tt(o, e - 1, r, n, i) : L(i, o) : n || (i[i.length] = o)
                }
                return i
            }
            var et = function(t) {
                return function(e, r, n) {
                    for (var i = -1,
                    a = Object(e), s = n(e), o = s.length; o--;) {
                        var c = s[t ? o: ++i];
                        if (!1 === r(a[c], c, a)) break
                    }
                    return e
                }
            } ();
            function rt(t, e) {
                return t && et(t, e, Yt)
            }
            function nt(t, e) {
                return J(e,
                function(e) {
                    return Ht(t[e])
                })
            }
            function it(t) {
                return function(t) {
                    return D.call(t)
                } (t)
            }
            function at(t, e) {
                return t > e
            }
            var st = ae;
            function ot(t, e, r, n, i) {
                return t === e || (null == t || null == e || !Ut(t) && !Ut(e) ? t != t && e != e: function(t, e, r, n, i, s) {
                    var u = Rt(t),
                    p = Rt(e),
                    l = u ? f: it(t),
                    d = p ? f: it(e),
                    y = (l = l == h ? b: l) == b,
                    _ = (d = d == h ? b: d) == b,
                    w = l == d;
                    s || (s = []);
                    var S = Pt(s,
                    function(e) {
                        return e[0] == t
                    }),
                    A = Pt(s,
                    function(t) {
                        return t[0] == e
                    });
                    if (S && A) return S[1] == e;
                    if (s.push([t, e]), s.push([e, t]), w && !y) {
                        var C = u ?
                        function(t, e, r, n, i, s) {
                            var u = r & o,
                            p = t.length,
                            l = e.length;
                            if (p != l && !(u && l > p)) return ! 1;
                            var h = -1,
                            f = !0,
                            d = r & c ? [] : a;
                            for (; ++h < p;) {
                                var m = t[h],
                                v = e[h];
                                if (void 0 !== a) {
                                    void 0,
                                    f = !1;
                                    break
                                }
                                if (d) {
                                    if (!mt(e,
                                    function(t, e) {
                                        if (!At(d, e) && (m === t || i(m, t, r, n, s))) return d.push(e)
                                    })) {
                                        f = !1;
                                        break
                                    }
                                } else if (m !== v && !i(m, v, r, n, s)) {
                                    f = !1;
                                    break
                                }
                            }
                            return f
                        } (t, e, r, n, i, s) : function(t, e, r, n, i, a, s) {
                            switch (r) {
                            case m:
                            case v:
                            case x:
                                return Mt( + t, +e);
                            case g:
                                return t.name == e.name && t.message == e.message;
                            case k:
                            case E:
                                return t == e + ""
                            }
                            return ! 1
                        } (t, e, l);
                        return s.pop(),
                        C
                    }
                    if (! (r & o)) {
                        var P = y && V.call(t, "__wrapped__"),
                        j = _ && V.call(e, "__wrapped__");
                        if (P || j) {
                            var O = P ? t.value() : t,
                            L = j ? e.value() : e,
                            C = i(O, L, r, n, s);
                            return s.pop(),
                            C
                        }
                    }
                    if (!w) return ! 1;
                    var C = function(t, e, r, n, i, s) {
                        var c = r & o,
                        u = Yt(t),
                        p = u.length,
                        l = Yt(e).length;
                        if (p != l && !c) return ! 1;
                        var h = p;
                        for (; h--;) {
                            var f = u[h];
                            if (! (c ? f in e: V.call(e, f))) return ! 1
                        }
                        var d = !0,
                        m = c;
                        for (; ++h < p;) {
                            f = u[h];
                            var v = t[f],
                            g = e[f];
                            if (! (void 0 === a ? v === g || i(v, g, r, n, s) : void 0)) {
                                d = !1;
                                break
                            }
                            m || (m = "constructor" == f)
                        }
                        if (d && !m) {
                            var y = t.constructor,
                            _ = e.constructor;
                            y != _ && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof _ && _ instanceof _) && (d = !1)
                        }
                        return d
                    } (t, e, r, n, i, s);
                    return s.pop(),
                    C
                } (t, e, r, n, ot, i))
            }
            function ct(t) {
                return "function" == typeof t ? t: null == t ? re: ("object" == typeof t ? lt: I)(t)
            }
            function ut(t, e) {
                return t < e
            }
            function pt(t, e) {
                var r = -1,
                n = Dt(t) ? Array(t.length) : [];
                return Z(t,
                function(t, i, a) {
                    n[++r] = e(t, i, a)
                }),
                n
            }
            function lt(t) {
                var e = q(t);
                return function(r) {
                    var n = e.length;
                    if (null == r) return ! n;
                    for (r = Object(r); n--;) {
                        var i = e[n];
                        if (! (i in r && ot(t[i], r[i], o | c))) return ! 1
                    }
                    return ! 0
                }
            }
            function ht(t, e) {
                return kt(wt(t, e, re), t + "")
            }
            function ft(t, e, r) {
                var n = -1,
                i = t.length;
                e < 0 && (e = -e > i ? 0 : i + e),
                (r = r > i ? i: r) < 0 && (r += i),
                i = e > r ? 0 : r - e >>> 0,
                e >>>= 0;
                for (var a = Array(i); ++n < i;) a[n] = t[n + e];
                return a
            }
            function dt(t) {
                return ft(t, 0, t.length)
            }
            function mt(t, e) {
                var r;
                return Z(t,
                function(t, n, i) {
                    return ! (r = e(t, n, i))
                }),
                !!r
            }
            function vt(t, e, r, n) {
                var i = !r;
                r || (r = {});
                for (var s = -1,
                o = e.length; ++s < o;) {
                    var c = e[s],
                    u = n ? n(r[c], t[c], c, r, t) : a;
                    u === a && (u = t[c]),
                    i ? X(r, c, u) : K(r, c, u)
                }
                return r
            }
            function gt(t) {
                return ht(function(e, r) {
                    var n = -1,
                    i = r.length,
                    s = i > 1 ? r[i - 1] : a;
                    for (s = t.length > 3 && "function" == typeof s ? (i--, s) : a, e = Object(e); ++n < i;) {
                        var o = r[n];
                        o && t(e, o, n, s)
                    }
                    return e
                })
            }
            function yt(t, e, r, n) {
                if ("function" != typeof t) throw new TypeError(s);
                var i = e & u,
                a = function(t) {
                    return function() {
                        var e = arguments,
                        r = z(t.prototype),
                        n = t.apply(r, e);
                        return Ft(n) ? n: r
                    }
                } (t);
                return function e() {
                    for (var s = -1,
                    o = arguments.length,
                    c = -1,
                    u = n.length,
                    p = Array(u + o), l = this && this !== O && this instanceof e ? a: t; ++c < u;) p[c] = n[c];
                    for (; o--;) p[c++] = arguments[++s];
                    return l.apply(i ? r: this, p)
                }
            }
            function _t(t) {
                return Rt(t) || Vt(t)
            }
            function xt(t, e, r) {
                if (!Ft(r)) return ! 1;
                var n = typeof e;
                return !! ("number" == n ? Dt(r) &&
                function(t, e) {
                    var r = typeof t;
                    return !! (e = null == e ? l: e) && ("number" == r || "symbol" != r && C.test(t)) && t > -1 && t % 1 == 0 && t < e
                } (e, r.length) : "string" == n && e in r) && Mt(r[e], t)
            }
            function bt(t) {
                var e = [];
                if (null != t) for (var r in Object(t)) e.push(r);
                return e
            }
            function wt(t, e, r) {
                return e = G(e === a ? t.length - 1 : e, 0),
                function() {
                    for (var n = arguments,
                    i = -1,
                    a = G(n.length - e, 0), s = Array(a); ++i < a;) s[i] = n[e + i];
                    i = -1;
                    for (var o = Array(e + 1); ++i < e;) o[i] = n[i];
                    return o[e] = r(s),
                    t.apply(this, o)
                }
            }
            var kt = re;
            function Et(t) {
                return (null == t ? 0 : t.length) ? tt(t, 1) : []
            }
            function St(t) {
                return t && t.length ? t[0] : a
            }
            function At(t, e, r) {
                for (var n = null == t ? 0 : t.length, i = ((r = "number" == typeof r ? r < 0 ? G(n + r, 0) : r: 0) || 0) - 1, a = e == e; ++i < n;) {
                    var s = t[i];
                    if (a ? s === e: s != s) return i
                }
                return - 1
            }
            function Ct(t) {
                var e = W(t);
                return e.__chain__ = !0,
                e
            }
            var Pt = function(t) {
                return function(e, r, n) {
                    var i = Object(e);
                    if (!Dt(e)) {
                        var s = ct(r);
                        e = Yt(e),
                        r = function(t) {
                            return s(i[t], t, i)
                        }
                    }
                    var o = t(e, r, n);
                    return o > -1 ? i[s ? e[o] : o] : a
                }
            } (function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return - 1;
                var i = null == r ? 0 : zt(r);
                return i < 0 && (i = G(n + i, 0)),
                function(t, e, r, n) {
                    for (var i = t.length,
                    a = r + (n ? 1 : -1); n ? a--:++a < i;) if (e(t[a], a, t)) return a;
                    return - 1
                } (t, ct(e), i)
            });
            function jt(t, e) {
                return Z(t, ct(e))
            }
            function Ot(t, e, r) {
                return function(t, e, r, n, i) {
                    return i(t,
                    function(t, i, a) {
                        r = n ? (n = !1, t) : e(r, t, i, a)
                    }),
                    r
                } (t, ct(e), r, arguments.length < 3, Z)
            }
            function Lt(t, e) {
                var r;
                if ("function" != typeof e) throw new TypeError(s);
                return t = zt(t),
                function() {
                    return--t > 0 && (r = e.apply(this, arguments)),
                    t <= 1 && (e = a),
                    r
                }
            }
            var It = ht(function(t, e, r) {
                return yt(t, 32 | u, e, r)
            }),
            Nt = ht(function(t, e) {
                return $(t, 1, e)
            }),
            Tt = ht(function(t, e, r) {
                return $(t, Qt(e) || 0, r)
            });
            function Mt(t, e) {
                return t === e || t != t && e != e
            }
            var Vt = st(function() {
                return arguments
            } ()) ? st: function(t) {
                return Ut(t) && V.call(t, "callee") && !F.call(t, "callee")
            },
            Rt = Array.isArray;
            function Dt(t) {
                return null != t &&
                function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= l
                } (t.length) && !Ht(t)
            }
            var Bt = function(t) {
                return Ut(t) && it(t) == v
            };
            function Ht(t) {
                if (!Ft(t)) return ! 1;
                var e = it(t);
                return e == y || e == _ || e == d || e == w
            }
            function Ft(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
            function Ut(t) {
                return null != t && "object" == typeof t
            }
            function qt(t) {
                return "number" == typeof t || Ut(t) && it(t) == x
            }
            var Gt = function(t) {
                return Ut(t) && it(t) == k
            };
            function Wt(t) {
                return "string" == typeof t || !Rt(t) && Ut(t) && it(t) == E
            }
            var zt = Number,
            Qt = Number;
            function Kt(t) {
                return "string" == typeof t ? t: null == t ? "": t + ""
            }
            var Xt = gt(function(t, e) {
                vt(e, q(e), t)
            }),
            $t = gt(function(t, e) {
                vt(e, bt(e), t)
            });
            var Zt = ht(function(t, e) {
                t = Object(t);
                var r = -1,
                n = e.length,
                i = n > 2 ? e[2] : a;
                for (i && xt(e[0], e[1], i) && (n = 1); ++r < n;) for (var s = e[r], o = Jt(s), c = -1, u = o.length; ++c < u;) {
                    var p = o[c],
                    l = t[p]; (l === a || Mt(l, M[p]) && !V.call(t, p)) && (t[p] = s[p])
                }
                return t
            });
            var Yt = q,
            Jt = bt,
            te = function(t) {
                return kt(wt(t, a, Et), t + "")
            } (function(t, e) {
                return null == t ? {}: function(t, e) {
                    return t = Object(t),
                    Ot(e,
                    function(e, r) {
                        return r in t && (e[r] = t[r]),
                        e
                    },
                    {})
                } (t, e)
            });
            function ee(t) {
                return null == t ? [] : function(t, e) {
                    return pt(e,
                    function(e) {
                        return t[e]
                    })
                } (t, Yt(t))
            }
            function re(t) {
                return t
            }
            var ne = ct;
            function ie(t, e, r) {
                var n = Yt(e),
                i = nt(e, n);
                null != r || Ft(e) && (i.length || !n.length) || (r = e, e = t, t = this, i = nt(e, Yt(e)));
                var a = !(Ft(r) && "chain" in r && !r.chain),
                s = Ht(t);
                return Z(i,
                function(r) {
                    var n = e[r];
                    t[r] = n,
                    s && (t.prototype[r] = function() {
                        var e = this.__chain__;
                        if (a || e) {
                            var r = t(this.__wrapped__);
                            return (r.__actions__ = dt(this.__actions__)).push({
                                func: n,
                                args: arguments,
                                thisArg: t
                            }),
                            r.__chain__ = e,
                            r
                        }
                        return n.apply(t, L([this.value()], arguments))
                    })
                }),
                t
            }
            function ae() {}
            W.assignIn = $t,
            W.before = Lt,
            W.bind = It,
            W.chain = Ct,
            W.compact = function(t) {
                return J(t, Boolean)
            },
            W.concat = function() {
                var t = arguments.length;
                if (!t) return [];
                for (var e = Array(t - 1), r = arguments[0], n = t; n--;) e[n - 1] = arguments[n];
                return L(Rt(r) ? dt(r) : [r], tt(e, 1))
            },
            W.create = function(t, e) {
                var r = z(t);
                return null == e ? r: Xt(r, e)
            },
            W.defaults = Zt,
            W.defer = Nt,
            W.delay = Tt,
            W.filter = function(t, e) {
                return J(t, ct(e))
            },
            W.flatten = Et,
            W.flattenDeep = function(t) {
                return null != t && t.length ? tt(t, p) : []
            },
            W.iteratee = ne,
            W.keys = Yt,
            W.map = function(t, e) {
                return pt(t, ct(e))
            },
            W.matches = function(t) {
                return lt(Xt({},
                t))
            },
            W.mixin = ie,
            W.negate = function(t) {
                if ("function" != typeof t) throw new TypeError(s);
                return function() {
                    var e = arguments;
                    return ! t.apply(this, e)
                }
            },
            W.once = function(t) {
                return Lt(2, t)
            },
            W.pick = te,
            W.slice = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return e = null == e ? 0 : +e,
                r = r === a ? n: +r,
                n ? ft(t, e, r) : []
            },
            W.sortBy = function(t, e) {
                var r = 0;
                return e = ct(e),
                pt(pt(t,
                function(t, n, i) {
                    return {
                        value: t,
                        index: r++,
                        criteria: e(t, n, i)
                    }
                }).sort(function(t, e) {
                    return function(t, e) {
                        if (t !== e) {
                            var r = t !== a,
                            n = null === t,
                            i = t == t,
                            s = e !== a,
                            o = null === e,
                            c = e == e;
                            if (!o && t > e || n && s && c || !r && c || !i) return 1;
                            if (!n && t < e || o && r && i || !s && i || !c) return - 1
                        }
                        return 0
                    } (t.criteria, e.criteria) || t.index - e.index
                }), I("value"))
            },
            W.tap = function(t, e) {
                return e(t),
                t
            },
            W.thru = function(t, e) {
                return e(t)
            },
            W.toArray = function(t) {
                return Dt(t) ? t.length ? dt(t) : [] : ee(t)
            },
            W.values = ee,
            W.extend = $t,
            ie(W, W),
            W.clone = function(t) {
                return Ft(t) ? Rt(t) ? dt(t) : vt(t, q(t)) : t
            },
            W.escape = function(t) {
                return (t = Kt(t)) && A.test(t) ? t.replace(S, N) : t
            },
            W.every = function(t, e, r) {
                return function(t, e) {
                    var r = !0;
                    return Z(t,
                    function(t, n, i) {
                        return r = !!e(t, n, i)
                    }),
                    r
                } (t, ct(e = r ? a: e))
            },
            W.find = Pt,
            W.forEach = jt,
            W.has = function(t, e) {
                return null != t && V.call(t, e)
            },
            W.head = St,
            W.identity = re,
            W.indexOf = At,
            W.isArguments = Vt,
            W.isArray = Rt,
            W.isBoolean = function(t) {
                return ! 0 === t || !1 === t || Ut(t) && it(t) == m
            },
            W.isDate = Bt,
            W.isEmpty = function(t) {
                return Dt(t) && (Rt(t) || Wt(t) || Ht(t.splice) || Vt(t)) ? !t.length: !q(t).length
            },
            W.isEqual = function(t, e) {
                return ot(t, e)
            },
            W.isFinite = function(t) {
                return "number" == typeof t && U(t)
            },
            W.isFunction = Ht,
            W.isNaN = function(t) {
                return qt(t) && t != +t
            },
            W.isNull = function(t) {
                return null === t
            },
            W.isNumber = qt,
            W.isObject = Ft,
            W.isRegExp = Gt,
            W.isString = Wt,
            W.isUndefined = function(t) {
                return t === a
            },
            W.last = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : a
            },
            W.max = function(t) {
                return t && t.length ? Y(t, re, at) : a
            },
            W.min = function(t) {
                return t && t.length ? Y(t, re, ut) : a
            },
            W.noConflict = function() {
                return O._ === this && (O._ = B),
                this
            },
            W.noop = ae,
            W.reduce = Ot,
            W.result = function(t, e, r) {
                var n = null == t ? a: t[e];
                return n === a && (n = r),
                Ht(n) ? n.call(t) : n
            },
            W.size = function(t) {
                return null == t ? 0 : (t = Dt(t) ? t: q(t)).length
            },
            W.some = function(t, e, r) {
                return mt(t, ct(e = r ? a: e))
            },
            W.uniqueId = function(t) {
                var e = ++R;
                return Kt(t) + e
            },
            W.each = jt,
            W.first = St,
            ie(W,
            function() {
                var t = {};
                return rt(W,
                function(e, r) {
                    V.call(W.prototype, r) || (t[r] = e)
                }),
                t
            } (), {
                chain: !1
            }),
            W.VERSION = "4.17.10",
            Z(["pop", "join", "replace", "reverse", "split", "push", "shift", "sort", "splice", "unshift"],
            function(t) {
                var e = (/^(?:replace|split)$/.test(t) ? String.prototype: T)[t],
                r = /^(?:push|sort|unshift)$/.test(t) ? "tap": "thru",
                n = /^(?:pop|join|replace|shift)$/.test(t);
                W.prototype[t] = function() {
                    var t = arguments;
                    if (n && !this.__chain__) {
                        var i = this.value();
                        return e.apply(Rt(i) ? i: [], t)
                    }
                    return this[r](function(r) {
                        return e.apply(Rt(r) ? r: [], t)
                    })
                }
            }),
            W.prototype.toJSON = W.prototype.valueOf = W.prototype.value = function() {
                return function(t, e) {
                    return Ot(e,
                    function(t, e) {
                        return e.func.apply(e.thisArg, L([t], e.args))
                    },
                    t)
                } (this.__wrapped__, this.__actions__)
            },
            O._ = W,
            (i = function() {
                return W
            }.call(e, r, e, n)) === a || (n.exports = i)
        }).call(this)
    }).call(this, r(17), r(23)(t))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = {
            vpn_origin: window.location.origin,
            vpn_host: window.location.host,
            vpn_protocol: window.location.protocol,
            app_hostname: "webvpn",
            app_port: "",
            app_protocol: "http",
            vpn_pathname_prefix: "/wengine-vpn",
            vpn_js_file: "/wengine-vpn/js/main.js"
        },
        n = {
            vpn_origin: "__vpn_protocol_host",
            vpn_host: "__vpn_hostname_data",
            vpn_protocol: "__vpn_protocol_data",
            app_hostname: "__vpn_app_hostname_data",
            app_port: "__vpn_app_port_data",
            app_protocol: "__vpn_app_protocol_data",
            vpn_js_file: "__vpn_js_file"
        };
        t.each(r,
        function(t, e) {
            r[e] = window[n[e]] || r[e]
        }),
        t.each(["vpn_protocol", "app_protocol"],
        function(t) {
            ":" !== r[t].slice( - 1) && (r[t] += ":")
        });
        e.
    default = r,
        e.config = r,
        e.toCode = function() {
            return t.map(n,
            function(t, e) {
                return "var " + t + " = '" + r[e] + "';"
            }).join(" ")
        }
    }).call(this, r(2))
},
function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = {
        toString: Object.prototype.toString
    },
    n = Function.prototype,
    i = {
        call: n.call,
        apply: n.apply,
        bind: n.bind,
        toString: n.toString
    },
    a = {
        slice: Array.prototype.slice
    },
    s = XMLHttpRequest.prototype,
    o = {
        objs: r,
        functions: i,
        strings: {},
        arrays: a,
        xhr: {
            open: s.open,
            send: s.send
        }
    },
    c = function(t, e) {
        for (var r = arguments.length,
        n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        var a; (a = origin.functions.call).call.apply(a, [t, e].concat(n))
    };
    e.origins = o,
    e.setOrigin = function(t, e, r) {
        o[t] = o[t] || {},
        o[t][e] = r
    },
    e.getOrigin = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "function",
        e = arguments[1];
        return function(r) {
            for (var n = arguments.length,
            i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            var s = origin[t][e];
            return c.apply(void 0, [s, r].concat(i))
        }
    },
    e.originCall = c
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.inlineUnwrap = e.inlineWrap = e.walk = e.generate = e.acorn = e.unparse = e.parse = e.isScript = void 0;
        var n = o(r(49)),
        i = o(r(50)),
        a = r(18),
        s = r(8);
        function o(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        }
        var c = [{
            err: "Assigning to rvalue",
            hookCode: function(t, e) {
                var r = (e = e.slice(t.pos, t.raisedAt)).lastIndexOf(")"),
                n = e.slice(0, r + 1),
                i = f(n);
                return console.log("Assigning to rvalue", n),
                {
                    start: t.pos,
                    end: t.pos + r + 1,
                    code: i
                }
            }
        }],
        u = 0,
        p = function(t, e, r, n) {
            t.push({
                start: e,
                end: r,
                value: n,
                index: t.length
            })
        },
        l = function(e) {
            if (t.isString(e)) return (0, a.needHook)(e);
            if ("Identifier" === e.type) return (0, a.needHook)(e.name);
            if ("MemberExpression" === e.type) {
                if ("Identifier" === e.property.type) return (0, a.needHook)(e.property.name);
                if ("Literal" === e.property.type) return (0, a.needHook)(e.property.value)
            }
            return ! 1
        },
        h = function(e, r) {
            var n = "",
            i = e.length,
            a = 0;
            return t.each(r,
            function(t) {
                a < t.start && (n += e.slice(a, t.start)),
                n += t.value,
                a = t.end
            }),
            a < i && (n += e.slice(a)),
            n
        },
        f = function e(r) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
            if (!r || !t.isString(r)) return r;
            r = "function vpn_js_wrapper () { " + r + " }";
            try {
                var o = n.parse(r),
                f = {
                    mode: a,
                    source: r,
                    changes: []
                };
                return function(e, r) {
                    i.recursive(e, r, {
                        Identifier: function(t, e, r) {
                            l(t.name) && (p(e.changes, t.start, t.start, " vpn_get_obj(null, "), p(e.changes, t.end, t.end, ")"))
                        },
                        ObjectExpression: function(e, r, n) {
                            t.each(e.properties,
                            function(t) {
                                t.shorthand && "Identifier" === t.key.type ? (t.shorthand = !1, p(r.changes, t.start, t.start, t.value.name + ": "), n(t.value, r)) : (t.computed && n(t.key, r), n(t.value, r))
                            })
                        },
                        MemberExpression: function(t, e, r) {
                            if ("Identifier" === t.property.type && (t.computed || l(t.property.name))) {
                                var n = t.computed ? t.property.name: '"' + t.property.name + '"';
                                p(e.changes, t.start, t.object.start, " vpn_get_obj("),
                                r(t.object, e),
                                p(e.changes, t.object.end, t.end, ", " + n + ")")
                            } else "Literal" === t.property.type && l(t.property.value) ? (p(e.changes, t.start, t.start, " vpn_get_obj("), r(t.object, e), p(e.changes, t.object.end, t.end, ', "' + t.property.value + '")')) : (r(t.object, e), r(t.property, e))
                        },
                        AssignmentExpression: function(t, e, r) {
                            if ("Identifier" === t.left.type)"=" === t.operator && l(t.left.name) ? (p(e.changes, t.right.start, t.right.start, " vpn_set_obj(null, " + t.left.name + ", ("), r(t.right, e), p(e.changes, t.end, t.end, "))")) : r(t.right, e);
                            else if ("MemberExpression" === t.left.type) if ("=" === t.operator) if ("Identifier" !== t.left.property.type || t.left.computed || l(t.left.property.name)) if ("Literal" !== t.left.property.type || l(t.left.property.value)) {
                                if (p(e.changes, t.left.start, t.left.object.start, " vpn_set_obj("), r(t.left.object, e), "Identifier" === t.left.property.type) {
                                    var n = t.left.computed ? t.left.property.name: '"' + t.left.property.name + '"';
                                    p(e.changes, t.left.object.end, t.right.start, ", " + n + ", ")
                                } else "Literal" === t.left.property.type ? p(e.changes, t.left.object.end, t.right.start, ', "' + t.left.property.value + '", ') : (p(e.changes, t.left.object.end, t.left.property.start, ", ("), r(t.left.property, e), p(e.changes, t.left.property.end, t.right.start, "), "));
                                r(t.right, e),
                                p(e.changes, t.right.end, t.end, ")")
                            } else r(t.left, e),
                            r(t.right, e);
                            else r(t.left, e),
                            r(t.right, e);
                            else r(t.left.object, e),
                            r(t.left.property, e)
                        },
                        UpdateExpression: function(t, e, r) {
                            "MemberExpression" === t.argument.type && (r(t.argument.object, e), t.argument.computed && r(t.argument.property, e))
                        },
                        CallExpression: function(e, r, n) {
                            var i = e.arguments.length;
                            if ("Identifier" === e.callee.type && "eval" === e.callee.name) t.each(e.arguments,
                            function(t) {
                                p(r.changes, t.start, t.start, " vpn_rewrite_js("),
                                n(t, r),
                                p(r.changes, t.end, t.end, ")")
                            });
                            else if ("MemberExpression" === e.callee.type) if ("Literal" === e.callee.property.type && !(0, s.needHook)(e.callee.property.value) || "Identifier" === e.callee.property.type && !(0, s.needHook)(e.callee.property.name)) n(e.callee.object, r),
                            "Identifier" === e.callee.property.type && e.callee.computed && n(e.callee.property, r),
                            t.each(e.arguments,
                            function(t) {
                                n(t, r)
                            });
                            else {
                                var a = 0;
                                p(r.changes, e.start, e.start, " vpn_fn_call("),
                                n(e.callee.object, r),
                                a = r.source.indexOf(e.callee.computed ? "[": ".", e.callee.object.end),
                                p(r.changes, a, a + 1, ", " + (e.callee.computed ? "": '"')),
                                n(e.callee.property, r),
                                a = r.source.indexOf(e.callee.computed ? "]": "(", e.callee.property.end);
                                var o = r.source.indexOf("(", e.callee.end);
                                i ? (p(r.changes, a, o + 1, (e.callee.computed ? "": '"') + ", "), t.each(e.arguments,
                                function(t, e) {
                                    n(t, r)
                                })) : p(r.changes, e.callee.property.end, e.end, (e.callee.computed ? "": '"') + ")")
                            } else n(e.callee, r),
                            t.each(e.arguments,
                            function(t) {
                                n(t, r)
                            })
                        },
                        BlockStatement: function(e, r, n) {
                            t.each(e.body,
                            function(t) {
                                n(t, r)
                            })
                        },
                        FunctionExpression: function(e, r, n) {
                            var i = r.inVpnWrapper;
                            r.inVpnWrapper = 0,
                            t.each(e.params,
                            function(t) {
                                "Identifier" !== t.type && n(t, r)
                            }),
                            n(e.body, r),
                            r.inVpnWrapper = i
                        },
                        FunctionDeclaration: function(e, r, n) {
                            r.inVpnWrapper = "vpn_js_wrapper" === e.id.name,
                            t.each(e.params,
                            function(t) {
                                "Identifier" !== t.type && n(t, r)
                            }),
                            n(e.body, r)
                        },
                        UnaryExpression: function(t, e, r) {
                            "delete" === t.operator ? "MemberExpression" === t.argument.type && (r(t.argument.object, e), t.argument.computed && r(t.argument.property, e)) : r(t.argument, e)
                        },
                        ReturnStatement: function(t, e, r) {
                            "inline" === e.mode && e.inVpnWrapper ? t.argument ? (p(e.changes, t.start, t.argument.start, "vpn_return = "), r(t.argument, e), p(e.changes, t.argument.end, t.argument.end, '; throw ""')) : p(e.changes, t.start, t.end, 'throw ""') : t.argument && r(t.argument, e)
                        },
                        NewExpression: function(e, r, n) {
                            "MemberExpression" === e.callee.type ? (p(r.changes, e.callee.start, e.callee.start, "("), n(e.callee, r), p(r.changes, e.callee.end, e.callee.end, ")")) : n(e.callee, r),
                            t.each(e.arguments,
                            function(t) {
                                n(t, r)
                            })
                        }
                    })
                } (o, f),
                f.changes.sort(function(t, e) {
                    return t.start === e.start && t.end === e.end ? t.index - e.index: t.start === e.start ? t.end - e.end: t.start - e.start
                }),
                r = h(r, f.changes).slice(15 + "vpn_js_wrapper".length, -2),
                "inline" === a ? "try{" + r + "}catch(e){}": r
            } catch(t) {
                var d = function(t, e) {
                    var r = void 0;
                    for (r = 0; r < c.length; r++) {
                        var n = c[r];
                        if (t.message.match(n.err)) return n.hookCode(t, e)
                    }
                    return ! 1
                } (t, r);
                if (d) {
                    var m = "VPN_HOOK_CODE_" + u++,
                    v = r.slice(0, d.start) + m + r.slice(d.end);
                    return e(v = v.slice(15 + "vpn_js_wrapper".length, -2), a).replace(m, d.code)
                }
                throw console.log("error code", r, t),
                t
            }
        };
        e.isScript = function(e) {
            return t.isString(e) && "javascript:" === e.trim().slice(0, 11).toLowerCase()
        },
        e.parse = f,
        e.unparse = function(t) {
            return t
        },
        e.acorn = n,
        e.generate = h,
        e.walk = i,
        e.inlineWrap = function(t) {
            return t ? "var vpn_return;" === t.slice(0, 15) && "return vpn_return;" === t.slice( - 18) ? t: "var vpn_return;eval(vpn_rewrite_js((function () { " + t + " }).toString().slice(14, -2), 'inline'));return vpn_return;": t
        },
        e.inlineUnwrap = function(t) {
            if (t) {
                if ("var vpn_return;" === t.slice(0, 15) && "return vpn_return;" === t.slice( - 18)) {
                    var e = "var vpn_return;eval(vpn_rewrite_js((function () { ".length,
                    r = " }).toString().slice(14, -2), 'inline'));return vpn_return;".length;
                    return t.slice(e, -r)
                }
                return t
            }
            return t
        }
    }).call(this, r(2))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isScriptTag = e.parser = e.unparse = e.parse = void 0;
        var n = c(r(7)),
        i = c(r(15)),
        a = c(r(5)),
        s = c(r(20)),
        o = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r(51));
        function c(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        }
        var u = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            track: 1,
            wbr: 1
        },
        p = {
            "application/javascript": 1,
            "application/ecmascript": 1,
            "application/jscript": 1,
            "application/livescript": 1,
            "application/x-ecmascript": 1,
            "application/x-javascript": 1,
            "text/javascript": 1,
            "text/ecmascript": 1,
            "text/jscript": 1,
            "text/livescript": 1,
            "text/x-ecmascript": 1,
            "text/x-javascript": 1
        },
        l = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return '"' !== (e = e || "application/javascript").charAt(0) && "'" !== e.charAt(0) || (e = e.slice(1, -1)),
            "script" === t.toLowerCase() && p[e.toLowerCase()]
        };
        e.parse = function(e) {
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "parse",
                r = arguments[1];
                if ("string" != typeof r) return r;
                r += "<vpn-end-tag>";
                var c = "",
                p = [],
                h = void 0;
                o.
            default.parse(r, {
                    onprocess: function(t) {
                        c += "<" + t + ">"
                    },
                    onopentag: function(r) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r = r.toLowerCase(),
                        p.push({
                            name: r,
                            attrs: o
                        }),
                        o = t.map(o,
                        function(t, o) {
                            if (void 0 === t) return o;
                            var c = "";
                            return '"' !== t.charAt(0) && "'" !== t.charAt(0) || (c = t.charAt(0), t = t.slice(1, -1)),
                            t = "style" === o || "filter" === o ? "parse" === e ? n.parse(t) : n.unparse(t) : s.isEventAttr(o) ? "parse" === e ? a.inlineWrap(t) : a.inlineUnwrap(t) : ("parse" === e ? i.parse(["attr", r, o], t) : i.unparse(["attr", r, o], t)) || t,
                            o + "=" + c + t + c
                        }).join(" "),
                        c += o ? "<" + r + " " + o + ">": "<" + r + ">",
                        u[r] && "/>" !== c.slice( - 2) && (c = c.slice(0, -1) + " />")
                    },
                    onclosetag: function(t) {
                        t = t.toLowerCase(),
                        p.pop(),
                        u[t] || (c += "</" + t + ">")
                    },
                    ontext: function(t) {
                        if ((h = p.length && p[p.length - 1]) && l(h.name, h.attrs.type)) if ("<vpn-end-tag>" === t) c += t;
                        else if ("parse" === e)"vpn_eval(" === t.trim().slice(0, 9) ? c += t: c += "vpn_eval((function () { " + t + " }).toString().slice(14 -2))";
                        else if ("vpn_eval(" === t.trim().slice(0, 9)) {
                            var r = "vpn_eval((function () { ".length,
                            i = " }).toString().slice(14 -2))".length;
                            c += t.slice(r, -i)
                        } else c += t;
                        else h && "style" === h.name.toLowerCase() ? c += "parse" === e ? n.parse(t) : n.unparse(t) : c += t
                    },
                    oncomment: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        0 === e ? c += "\x3c!--" + t + "--\x3e": 1 === e ? c += "\x3c!--" + t + ">": 2 === e && (c += "<!" + t + "--\x3e")
                    },
                    oncdata: function(t) {
                        c += "<![CDATA[ vpn_eval((function () { " + t + " }).toString().slice(14, -2)) ]]>"
                    }
                });
                var f = c.indexOf("<vpn-end-tag>");
                return c.slice(0, f)
            } ("parse", e)
        },
        e.unparse = function(t) {
            return t
        },
        e.parser = o.
    default,
        e.isScriptTag = l
    }).call(this, r(2))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.unparse = e.parse = void 0;
        var n = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        } (r(19));
        var i = /(url\([\s]?('|"|&quot;|&apos;)?)(.*?)(('|"|&quot;|&apos;)?[\s]?\))|(@import[\s]?('|"|&quot;|&apos;)+)(.*?)('|"|&quot;|&apos;)+/gi,
        a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "parse",
            r = arguments[1];
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!t.isString(r)) return r;
            var a = "parse" === e ? n.parse: n.unparse;
            return r.replace(i,
            function(t, e, r, n, i, s, o, c, u, p) {
                return 0 === t.indexOf("@import") ? o + a(u) + (p || "") : e + a(n) + i
            })
        };
        e.parse = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
            return a("parse", t, e)
        },
        e.unparse = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
            return a("unparse", t, e)
        }
    }).call(this, r(2))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.vpnFnCall = e.needHook = e.callOrigin = e.getOrigin = e.add = void 0;
        var n = r(52),
        i = r(4);
        function a(t) {
            if (Array.isArray(t)) {
                for (var e = 0,
                r = Array(t.length); e < t.length; e++) r[e] = t[e];
                return r
            }
            return Array.from(t)
        }
        var s = [],
        o = {},
        c = i.origins.arrays.slice,
        u = i.origins.functions.bind,
        p = i.origins.functions.toString,
        l = function(t, e, r, n) {
            var i = function() {
                var t = r ? r.call.apply(r, [this].concat(a(c.call(arguments)))) : c.call(arguments),
                i = h(this, e, t, this instanceof arguments.callee);
                return n ? n.call(this, i, t) : i
            };
            return i.toString = u.call(p, e),
            i
        },
        h = function(t, e, r, n) {
            return n ? new(u.call.apply(u, [e, t].concat(a(r)))) : e.apply(t, r)
        },
        f = function(e, r) {
            var n = t.find(s, {
                obj: e,
                name: r
            });
            return n ? n.origin: e[r]
        },
        d = function(t) {
            return o.hasOwnProperty(t)
        };
        e.add = function(t) {
            var e = t.obj,
            r = t.name,
            i = t.argHandler,
            a = t.retHandler,
            c = t.handler,
            u = (0, n.walk)(e, r);
            if (!u) return ! 1;
            e = u.obj,
            r = u.name;
            var p = void 0;
            Object.getOwnPropertyDescriptor(e, r) ? (p = e[r], e[r] = l(0, p, i, a)) : (p = e.prototype[r], e.prototype[r] = l(0, p, i, a)),
            s.push({
                obj: e,
                name: r,
                origin: p
            }),
            c && (o[r] = {
                origin: p,
                handler: c
            })
        },
        e.getOrigin = f,
        e.callOrigin = function(t) {
            var e = t.obj,
            r = t.method,
            n = t.args,
            i = t.isNew,
            a = t.context,
            s = f(e, r);
            return h(a, s, n, i)
        },
        e.needHook = d,
        e.vpnFnCall = function(t, e) {
            for (var r = arguments.length,
            n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
            var a = d(e) ? o[e] : null;
            return a ? a.handler(t, e, n) : (null !== t && void 0 !== t && (e = t[e]), e.apply(t, n))
        }
    }).call(this, r(2))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.blob = e.multiUrl = e.url = e.style = e.js = e.html = void 0;
    var n = u(r(6)),
    i = u(r(5)),
    a = u(r(7)),
    s = u(r(1)),
    o = u(r(19)),
    c = u(r(16));
    function u(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    }
    var p = {
        html: n,
        js: i,
        style: a,
        url: s,
        multiUrl: o,
        blob: c
    };
    window.parsers = p,
    e.
default = p,
    e.html = n,
    e.js = i,
    e.style = a,
    e.url = s,
    e.multiUrl = o,
    e.blob = c
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ajax = void 0;
    var n = r(4),
    i = window.XMLHttpRequest,
    a = window.ActiveXObject;
    e.ajax = function(t) {
        var e = t.method,
        r = t.url,
        s = t.data,
        o = t.isAsync,
        c = void 0 !== o && o;
        e = e || "GET",
        s = s || null;
        var u = void 0,
        p = void 0;
        if (i ? u = new i: a && (u = new a("Microsoft.XMLHTTP")), u) return u.onreadystatechange = function() {
            var t = this.DONE || 4;
            this.readyState === t && (p = u.responseText)
        },
        n.origins.xhr.open.call(u, e, r, c),
        n.origins.xhr.send.call(u, s),
        p;
        console.error("Your browser does not support XMLHTTP.")
    }
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.location = void 0;
        var n = r(1),
        i = window.location,
        a = function() {};
        a.prototype = {
            assign: function(t) {
                i.assign((0, n.parse)(t))
            },
            replace: function(t) {
                i.replace((0, n.parse)(t))
            },
            reload: function() {
                i.reload()
            },
            toString: function() {
                return (0, n.unparse)(i.toString())
            }
        };
        var s = new a,
        o = [{
            hook: "anchor",
            prototype: a.prototype,
            access: {
                get: function(t) {
                    return i[t]
                },
                set: function(t, e) {
                    i[t] = e
                }
            }
        },
        {
            hook: "obj",
            name: "location",
            context: window,
            access: {
                get: function() {
                    return s
                },
                set: function(t) {
                    return "string" != typeof t ? window.location = t: window.location.href = (0, n.parse)(t)
                }
            }
        }];
        "window" === t.mode && o.push({
            hook: "obj",
            name: "location",
            context: document,
            access: {
                get: function() {
                    return s
                },
                set: function(t) {
                    return document.location = "string" == typeof t ? (0, n.parse)(t) : t,
                    document.location
                }
            }
        }),
        e.
    default = {
            objs: o
        },
        e.location = s
    }).call(this, r(0))
},
function(t, e, r) {
    "use strict"; (function(e) {
        var n = r(47),
        i = r(48),
        a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        o = [["#", "hash"], ["?", "query"], ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
        c = {
            hash: 1,
            query: 1
        };
        function u(t) {
            var r, n = e && e.location || {},
            i = {},
            a = typeof(t = t || n);
            if ("blob:" === t.protocol) i = new l(unescape(t.pathname), {});
            else if ("string" === a) for (r in i = new l(t, {}), c) delete i[r];
            else if ("object" === a) {
                for (r in t) r in c || (i[r] = t[r]);
                void 0 === i.slashes && (i.slashes = s.test(t.href))
            }
            return i
        }
        function p(t) {
            var e = a.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!e[2],
                rest: e[3]
            }
        }
        function l(t, e, r) {
            if (! (this instanceof l)) return new l(t, e, r);
            var a, s, c, h, f, d, m = o.slice(),
            v = typeof e,
            g = this,
            y = 0;
            for ("object" !== v && "string" !== v && (r = e, e = null), r && "function" != typeof r && (r = i.parse), e = u(e), a = !(s = p(t || "")).protocol && !s.slashes, g.slashes = s.slashes || a && e.slashes, g.protocol = s.protocol || e.protocol || "", t = s.rest, s.slashes || (m[2] = [/(.*)/, "pathname"]); y < m.length; y++) c = (h = m[y])[0],
            d = h[1],
            c != c ? g[d] = t: "string" == typeof c ? ~ (f = t.indexOf(c)) && ("number" == typeof h[2] ? (g[d] = t.slice(0, f), t = t.slice(f + h[2])) : (g[d] = t.slice(f), t = t.slice(0, f))) : (f = c.exec(t)) && (g[d] = f[1], t = t.slice(0, f.index)),
            g[d] = g[d] || a && h[3] && e[d] || "",
            h[4] && (g[d] = g[d].toLowerCase());
            r && (g.query = r(g.query)),
            a && e.slashes && "/" !== g.pathname.charAt(0) && ("" !== g.pathname || "" !== e.pathname) && (g.pathname = function(t, e) {
                for (var r = (e || "/").split("/").slice(0, -1).concat(t.split("/")), n = r.length, i = r[n - 1], a = !1, s = 0; n--;)"." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), s++) : s && (0 === n && (a = !0), r.splice(n, 1), s--);
                return a && r.unshift(""),
                "." !== i && ".." !== i || r.push(""),
                r.join("/")
            } (g.pathname, e.pathname)),
            n(g.port, g.protocol) || (g.host = g.hostname, g.port = ""),
            g.username = g.password = "",
            g.auth && (h = g.auth.split(":"), g.username = h[0] || "", g.password = h[1] || ""),
            g.origin = g.protocol && g.host && "file:" !== g.protocol ? g.protocol + "//" + g.host: "null",
            g.href = g.toString()
        }
        l.prototype = {
            set: function(t, e, r) {
                var a = this;
                switch (t) {
                case "query":
                    "string" == typeof e && e.length && (e = (r || i.parse)(e)),
                    a[t] = e;
                    break;
                case "port":
                    a[t] = e,
                    n(e, a.protocol) ? e && (a.host = a.hostname + ":" + e) : (a.host = a.hostname, a[t] = "");
                    break;
                case "hostname":
                    a[t] = e,
                    a.port && (e += ":" + a.port),
                    a.host = e;
                    break;
                case "host":
                    a[t] = e,
                    /:\d+$/.test(e) ? (e = e.split(":"), a.port = e.pop(), a.hostname = e.join(":")) : (a.hostname = e, a.port = "");
                    break;
                case "protocol":
                    a.protocol = e.toLowerCase(),
                    a.slashes = !r;
                    break;
                case "pathname":
                case "hash":
                    if (e) {
                        var s = "pathname" === t ? "/": "#";
                        a[t] = e.charAt(0) !== s ? s + e: e
                    } else a[t] = e;
                    break;
                default:
                    a[t] = e
                }
                for (var c = 0; c < o.length; c++) {
                    var u = o[c];
                    u[4] && (a[u[1]] = a[u[1]].toLowerCase())
                }
                return a.origin = a.protocol && a.host && "file:" !== a.protocol ? a.protocol + "//" + a.host: "null",
                a.href = a.toString(),
                a
            },
            toString: function(t) {
                t && "function" == typeof t || (t = i.stringify);
                var e, r = this,
                n = r.protocol;
                n && ":" !== n.charAt(n.length - 1) && (n += ":");
                var a = n + (r.slashes ? "//": "");
                return r.username && (a += r.username, r.password && (a += ":" + r.password), a += "@"),
                a += r.host + r.pathname,
                (e = "object" == typeof r.query ? t(r.query) : r.query) && (a += "?" !== e.charAt(0) ? "?" + e: e),
                r.hash && (a += r.hash),
                a
            }
        },
        l.extractProtocol = p,
        l.location = u,
        l.qs = i,
        t.exports = l
    }).call(this, r(17))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.vpnInjectScript = e.vpnRewriteJs = e.vpnEval = void 0;
    var n = s(r(9)),
    i = r(10),
    a = s(r(3));
    function s(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    }
    e.vpnEval = function(t, e) {
        try {
            eval.call(window, n.js.parse(t))
        } catch(t) {
            var r = {
                line: t.line || t.message || 0,
                column: t.column || 0,
                name: t.name || "",
                message: t.message || t.message || "",
                script: t.script || "",
                stack: t.stackTrace || t.stack || "",
                timestamp: Date.now(),
                ref: location.href,
                is_canary: !(!window._sharedData || !window._sharedData.is_canary) && window._sharedData.is_canary,
                rollout_hash: window._sharedData && window._sharedData.rollout_hash ? window._sharedData.rollout_hash: "",
                is_prerelease: window.__PRERELEASE__ || !1,
                bundle_variant: window._sharedData && window._sharedData.bundle_variant ? window._sharedData.bundle_variant: null,
                request_url: t.url || location.href,
                response_status_code: t.statusCode || 0
            };
            throw (0, i.ajax)({
                method: "POST",
                url: a.vpn_pathname_prefix + "/error",
                data: JSON.stringify(r)
            }),
            t
        }
    },
    e.vpnRewriteJs = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
        return n.js.parse(t, e)
    },
    e.vpnInjectScript = function(t) {
        if (t.__vpn_hostname_data || t.eval.call(t, a.toCode()), !t.vpn_eval) {
            var e = (0, i.ajax)({
                url: a.config.vpn_js_file
            });
            t.eval.call(t, e)
        }
    }
},
function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = 0;
    e.open = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        r = t
    },
    e.close = function() {
        r = 0
    },
    e.log = function(t) {
        for (var e = arguments.length,
        n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        var a;
        r && r <= t && (a = console).log.apply(a, ["[DEBUG]"].concat(n))
    },
    e.LEVEL = {
        ONE: 1,
        TWO: 2,
        THREE: 3
    }
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.unparse = e.parse = e.add = void 0;
        var n = r(14),
        i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r(9));
        var a = {};
        e.add = function(e, r) {
            t.isArray(e) && (e = e.join(".")),
            i.
        default[r] && (a[e] = i.
        default[r])
        },
        e.parse = function(e) {
            for (var r = arguments.length,
            i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
            t.isArray(e) && (e = e.join("."));
            var o = a[e];
            if (o) {
                var c = o.parse.apply(o, i);
                return (0, n.log)(n.LEVEL.ONE, "[parse]", e, i[0], c),
                c
            }
            return i[0]
        },
        e.unparse = function(e) {
            for (var r = arguments.length,
            i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
            t.isArray(e) && (e = e.join("."));
            var o = a[e];
            if (o) {
                var c = o.unparse.apply(o, i);
                return (0, n.log)(n.LEVEL.ONE, "[unparse]", e, i[0], c),
                c
            }
            return i[0]
        }
    }).call(this, r(2))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isBlob = e.unparse = e.parse = void 0;
        var n = a(r(12)),
        i = a(r(3));
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        e.parse = function(t) {
            t = t.slice(5);
            var e = (0, n.
        default)(t);
            return e.set("host", i.
        default.vpn_host),
            e.set("protocol", i.
        default.vpn_protocol),
            "blob:" + e.href
        },
        e.unparse = function(t) {
            t = t.slice(5);
            var e = (0, n.
        default)(t);
            return e.set("hostname", i.
        default.app_hostname),
            e.set("protocol", i.
        default.app_protocol),
            e.set("port", i.
        default.app_port),
            "blob:" + e.href
        },
        e.isBlob = function(e) {
            return t.isString(e) && "blob:http" === e.trim().slice(0, 9)
        }
    }).call(this, r(2))
},
function(t, e) {
    var r;
    r = function() {
        return this
    } ();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch(t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.needHook = e.vpnSetObj = e.vpnGetObj = e.hook = e.add = void 0;
        var n = r(13),
        i = r(4),
        a = [],
        s = [],
        o = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return t.isString(e) ? t.find(a, {
                name: e,
                context: r
            }) : t.find(a, {
                obj: e
            })
        },
        c = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments[1];
            if (t && t.window === t && t !== window && "[object Window]" === i.origins.objs.toString.call(t)) return (0, n.vpnInjectScript)(t),
            t.vpn_get_obj(t, e);
            var r = o(e, t);
            return r ? r.access.get() : null === t || void 0 === t ? e: t[e]
        };
        window.vpn_get_obj = c;
        var u = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments[1],
            r = arguments[2];
            if (t && t.window === t && t !== window && "[object Window]" === i.origins.objs.toString.call(t)) return (0, n.vpnInjectScript)(t),
            t.vpn_set_obj(t, e, r);
            var a = o(e, t);
            return a ? a.access.set(r) : t ? (t[e] = r, r) : (e = r, r)
        };
        window.vpn_set_obj = u;
        e.add = function(e) {
            var r = e.context,
            n = e.name,
            i = e.target,
            o = e.access,
            c = void 0 === o ? {}: o;
            if (!t.find(a, {
                context: r,
                name: n
            })) {
                var u = r[n];
                c = {
                    get: c.get || i,
                    set: c.set ||
                    function(t) {
                        i = t
                    }
                },
                a.push({
                    context: r,
                    obj: u,
                    name: n,
                    target: i,
                    access: c
                }),
                s.push(n)
            }
        },
        e.hook = o,
        e.vpnGetObj = c,
        e.vpnSetObj = u,
        e.needHook = function(e) {
            return t.includes(s, e)
        }
    }).call(this, r(2))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.unparse = e.parse = void 0;
    var n = r(1),
    i = r(14);
    var a = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "parse";
        return arguments[1].split(",").map(function(e) {
            var r = function(t) {
                return Array.isArray(t) ? t: Array.from(t)
            } (e.trim().split(" ")),
            a = r[0],
            s = r.slice(1);
            return a = [a = "parse" === t ? (0, n.parse)(a) : (0, n.unparse)(a)].concat(function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0,
                    r = Array(t.length); e < t.length; e++) r[e] = t[e];
                    return r
                }
                return Array.from(t)
            } (s)).join(" "),
            (0, i.log)(i.LEVEL.THREE, "[" + t + " multi-url]", e, a),
            a
        }).join(",")
    };
    e.parse = function(t) {
        return a("parse", t)
    },
    e.unparse = function(t) {
        return a("unparse", t)
    }
},
function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isEventAttr = function(t) {
        return /^on[a-zA-Z]/i.test(t)
    }
},
function(t, e, r) {
    try {
        void 0 === window.vpn_eval ? (r(22), r(82)) : console.error("already hook")
    } catch(t) {
        console.error(t)
    }
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        r(24);
        var n = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        } (r(25)),
        i = r(15),
        a = r(77);
        t(n).values().flatten().each(function(e) {
            e && (e.objs && t.each(e.objs,
            function(t) { (0, a.add)(t.hook, t)
            }), e.attrs && e.attrs.length && t.each(e.attrs,
            function(t) { (0, a.add)("attr", t),
                (0, i.add)(["attr", e.nodeName, t.attr], t.parser)
            }), e.props && e.props.length && t.each(e.props,
            function(t) { (0, a.add)("prop", t)
            }), e.methods && e.methods.length && t.each(e.methods,
            function(t) { (0, a.add)("method", t)
            }))
        }),
        e.
    default = {}
    }).call(this, r(2))
},
function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {},
        t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1),
        t
    }
},
function(t, e, r) { (function(t) {
        t.includes = function(t, e) {
            return - 1 !== t.indexOf(e)
        },
        t.partial = t.partial ||
        function(t) {
            for (var e = arguments.length,
            r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
            return function() {
                for (var e = arguments.length,
                n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                return t.call.apply(t, [this].concat(r, n))
            }
        },
        t.kebabCase = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
            return t.replace(/[A-Z]/g,
            function(t) {
                return e + t.toLowerCase()
            })
        },
        t.camelCase = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
            return t(e).split(r).reduce(function(t, e) {
                return "" === t ? e: (e[0] = e.toUpperCase(e[0]), t + e)
            },
            "")
        },
        t.startsWith = function(t, e) {
            return 0 === (e = "" + e).length || t.slice(0, e.length) === e
        }
    }).call(this, r(2))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = [r(26).
default, r(27).
default, r(28).
default, r(29).
default, r(30).
default, r(31).
default, r(32).
default, r(33).
default, r(34).
default, r(35).
default, r(36).
default, r(37).
default, r(38).
default, r(39).
default, r(40).
default, r(41).
default, r(42).
default, r(43).
default, r(44).
default],
    i = [r(45).
default, r(53).
default, r(11).
default, r(54).
default],
    a = [r(55).
default],
    s = [r(56).
default, r(57).
default, r(58).
default, r(59).
default, r(60).
default, r(61).
default, r(62).
default, r(63).
default, r(64).
default, r(65).
default, r(66).
default, r(67).
default, r(68).
default, r(69).
default, r(70).
default, r(71).
default, r(72).
default, r(73).
default, r(74).
default, r(75).
default, r(76).
default];
    e.elements = n,
    e.objs = i,
    e.styles = a,
    e.methods = s
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0,
        n = void 0;
        "window" === t.mode && (r = [{
            hook: "anchor",
            prototype: HTMLAnchorElement.prototype
        }], n = [{
            parser: "url",
            prototype: HTMLAnchorElement.prototype,
            attr: "href"
        }]),
        e.
    default = {
            nodeName: "a",
            objs: r,
            attrs: n
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0,
        n = void 0;
        "window" === t.mode && (r = [{
            hook: "anchor",
            prototype: HTMLAreaElement.prototype
        }], n = [{
            parser: "url",
            prototype: HTMLAreaElement.prototype,
            attr: "href"
        }]),
        e.
    default = {
            nodeName: "area",
            objs: r,
            attrs: n
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLAudioElement.prototype,
            attr: "src"
        }]),
        e.
    default = {
            nodeName: "audio",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLBaseElement.prototype,
            attr: "href"
        }]),
        e.
    default = {
            nodeName: "base",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLBodyElement.prototype,
            attr: "background"
        }]),
        e.
    default = {
            nodeName: "body",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLEmbedElement.prototype,
            attr: "src"
        }]),
        e.
    default = {
            nodeName: "embed",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLFormElement.prototype,
            attr: "action"
        }]),
        e.
    default = {
            nodeName: "form",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLFrameElement.prototype,
            attr: "src"
        }]),
        e.
    default = {
            nodeName: "frame",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLIFrameElement.prototype,
            attr: "src"
        },
        {
            parser: "html",
            prototype: HTMLIFrameElement.prototype,
            attr: "srcdoc"
        }]),
        e.
    default = {
            nodeName: "iframe",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0,
        n = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: SVGImageElement.prototype,
            attr: "xlink:href"
        }], n = [{
            parser: "url",
            prototype: SVGAnimatedString.prototype,
            prop: "animVal"
        },
        {
            parser: "url",
            prototype: SVGAnimatedString.prototype,
            prop: "baseVal"
        }]),
        e.
    default = {
            nodeName: "image",
            attrs: r,
            props: n
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLImageElement.prototype,
            attr: "src"
        },
        {
            parser: "multiUrl",
            prototype: HTMLImageElement.prototype,
            attr: "srcset"
        }]),
        e.
    default = {
            nodeName: "img",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLInputElement.prototype,
            attr: "src"
        }]),
        e.
    default = {
            nodeName: "input",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLLinkElement.prototype,
            attr: "href"
        }]),
        e.
    default = {
            nodeName: "link",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLObjectElement.prototype,
            attr: "data"
        }]),
        e.
    default = {
            nodeName: "object",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLParamElement.prototype,
            attr: "value"
        }]),
        e.
    default = {
            nodeName: "param",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLScriptElement.prototype,
            attr: "src"
        },
        {
            parser: "js",
            prototype: HTMLScriptElement.prototype,
            attr: "text"
        }]),
        e.
    default = {
            nodeName: "script",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLSourceElement.prototype,
            attr: "src"
        },
        {
            parser: "multiUrl",
            prototype: HTMLSourceElement.prototype,
            attr: "srcset"
        }]),
        e.
    default = {
            nodeName: "source",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLTrackElement.prototype,
            attr: "src"
        }]),
        e.
    default = {
            nodeName: "track",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            parser: "url",
            prototype: HTMLMediaElement.prototype,
            attr: "src"
        }]),
        e.
    default = {
            nodeName: "video",
            attrs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(r(3)),
        i = o(r(46)),
        a = r(4),
        s = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        } (r(1));
        function o(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        var c = n.
    default.app_hostname,
        u = void 0,
        p = void 0;
        if ("window" === t.mode) {
            var l = window.Document.prototype,
            h = window.Node.prototype; (0, a.setOrigin)("document", "cookie", {
                get: l.__lookupGetter__("cookie"),
                set: l.__lookupSetter__("cookie")
            }),
            p = [{
                hook: "obj",
                name: "domain",
                context: document,
                access: {
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        return c = t
                    }
                }
            },
            {
                hook: "obj",
                name: "URL",
                context: document,
                access: {
                    get: function() {
                        return s.unparse(document.URL)
                    },
                    set: function(t) {
                        return document.URL = s.parse(t),
                        t
                    }
                }
            },
            {
                hook: "obj",
                name: "referrer",
                context: document,
                access: {
                    get: function() {
                        return s.unparse(document.referrer)
                    },
                    set: function(t) {
                        return document.referrer = s.parse(t),
                        t
                    }
                }
            }],
            u = [{
                prototype: l,
                prop: "cookie",
                parse: null,
                access: {
                    get: function() {
                        return i.
                    default.get()
                    },
                    set: function(t, e) {
                        i.
                    default.set(e)
                    }
                }
            }],
            void 0 !== document.documentURI && u.push({
                prototype: l,
                prop: "documentURI",
                parser: "url"
            }),
            void 0 !== document.origin && u.push({
                prototype: l,
                prop: "origin",
                parser: null,
                access: {
                    get: function() {
                        return n.
                    default.app_protocol + "//" + n.
                    default.app_hostname + (~~n.
                    default.app_port ? ":" + n.
                    default.app_port:
                        "")
                    },
                    set: function(t) {
                        return window.document.origin = t
                    }
                }
            }),
            void 0 !== document.baseURI && u.push({
                prototype: h,
                prop: "baseURI",
                parser: "url"
            })
        }
        e.
    default = {
            props: u,
            objs: p
        }
    }).call(this, r(0))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    } (r(3)),
    i = r(11),
    a = r(10);
    var s = function() {
        var t = n.
    default.app_protocol;
        return ":" === t.slice( - 1) ? t.slice(0, -1) : t
    };
    e.
default = {
        get: function() {
            return (0, a.ajax)({
                url: n.
            default.vpn_pathname_prefix + "/cookie?method=get&host=" + n.
            default.app_hostname + "&scheme=" + s() + "&path=" + i.location.pathname
            })
        },
        set: function(t) {
            return t = encodeURIComponent(t),
            (0, a.ajax)({
                method: "POST",
                url: n.
            default.vpn_pathname_prefix + "/cookie?method=set&host=" + n.
            default.app_hostname + "&scheme=" + s() + "&path=" + i.location.pathname + "&ck_data=" + t
            })
        }
    }
},
function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if (e = e.split(":")[0], !(t = +t)) return ! 1;
        switch (e) {
        case "http":
        case "ws":
            return 80 !== t;
        case "https":
        case "wss":
            return 443 !== t;
        case "ftp":
            return 21 !== t;
        case "gopher":
            return 70 !== t;
        case "file":
            return ! 1
        }
        return 0 !== t
    }
},
function(t, e, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    function i(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
    }
    e.stringify = function(t, e) {
        e = e || "";
        var r = [];
        for (var i in "string" != typeof e && (e = "?"), t) n.call(t, i) && r.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return r.length ? e + r.join("&") : ""
    },
    e.parse = function(t) {
        for (var e, r = /([^=?&]+)=?([^&]*)/g,
        n = {}; e = r.exec(t);) {
            var a = i(e[1]),
            s = i(e[2]);
            a in n || (n[a] = s)
        }
        return n
    }
},
function(t, e, r) {
    "use strict";
    r.r(e),
    r.d(e, "version",
    function() {
        return St
    }),
    r.d(e, "parse",
    function() {
        return At
    }),
    r.d(e, "parseExpressionAt",
    function() {
        return Ct
    }),
    r.d(e, "tokenizer",
    function() {
        return Pt
    }),
    r.d(e, "parse_dammit",
    function() {
        return wt
    }),
    r.d(e, "LooseParser",
    function() {
        return kt
    }),
    r.d(e, "pluginsLoose",
    function() {
        return Et
    }),
    r.d(e, "addLooseExports",
    function() {
        return jt
    }),
    r.d(e, "Parser",
    function() {
        return H
    }),
    r.d(e, "plugins",
    function() {
        return D
    }),
    r.d(e, "defaultOptions",
    function() {
        return V
    }),
    r.d(e, "Position",
    function() {
        return N
    }),
    r.d(e, "SourceLocation",
    function() {
        return T
    }),
    r.d(e, "getLineInfo",
    function() {
        return M
    }),
    r.d(e, "Node",
    function() {
        return tt
    }),
    r.d(e, "TokenType",
    function() {
        return v
    }),
    r.d(e, "tokTypes",
    function() {
        return w
    }),
    r.d(e, "keywordTypes",
    function() {
        return x
    }),
    r.d(e, "TokContext",
    function() {
        return nt
    }),
    r.d(e, "tokContexts",
    function() {
        return it
    }),
    r.d(e, "isIdentifierChar",
    function() {
        return m
    }),
    r.d(e, "isIdentifierStart",
    function() {
        return d
    }),
    r.d(e, "Token",
    function() {
        return yt
    }),
    r.d(e, "isNewLine",
    function() {
        return S
    }),
    r.d(e, "lineBreak",
    function() {
        return k
    }),
    r.d(e, "lineBreakG",
    function() {
        return E
    }),
    r.d(e, "nonASCIIwhitespace",
    function() {
        return A
    });
    var n = {
        3 : "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5 : "class enum extends super const export import",
        6 : "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
    },
    i = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
    a = {
        5 : i,
        6 : i + " const class extends export import super"
    },
    s = /^in(stanceof)?$/,
    o = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    c = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
    u = new RegExp("[" + o + "]"),
    p = new RegExp("[" + o + c + "]");
    o = c = null;
    var l = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 190, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 26, 230, 43, 117, 63, 32, 0, 257, 0, 11, 39, 8, 0, 22, 0, 12, 39, 3, 3, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 68, 12, 0, 67, 12, 65, 1, 31, 6129, 15, 754, 9486, 286, 82, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541],
    h = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 280, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];
    function f(t, e) {
        for (var r = 65536,
        n = 0; n < e.length; n += 2) {
            if ((r += e[n]) > t) return ! 1;
            if ((r += e[n + 1]) >= t) return ! 0
        }
    }
    function d(t, e) {
        return t < 65 ? 36 === t: t < 91 || (t < 97 ? 95 === t: t < 123 || (t <= 65535 ? t >= 170 && u.test(String.fromCharCode(t)) : !1 !== e && f(t, l)))
    }
    function m(t, e) {
        return t < 48 ? 36 === t: t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t: t < 123 || (t <= 65535 ? t >= 170 && p.test(String.fromCharCode(t)) : !1 !== e && (f(t, l) || f(t, h)))))
    }
    var v = function(t, e) {
        void 0 === e && (e = {}),
        this.label = t,
        this.keyword = e.keyword,
        this.beforeExpr = !!e.beforeExpr,
        this.startsExpr = !!e.startsExpr,
        this.isLoop = !!e.isLoop,
        this.isAssign = !!e.isAssign,
        this.prefix = !!e.prefix,
        this.postfix = !!e.postfix,
        this.binop = e.binop || null,
        this.updateContext = null
    };
    function g(t, e) {
        return new v(t, {
            beforeExpr: !0,
            binop: e
        })
    }
    var y = {
        beforeExpr: !0
    },
    _ = {
        startsExpr: !0
    },
    x = {};
    function b(t, e) {
        return void 0 === e && (e = {}),
        e.keyword = t,
        x[t] = new v(t, e)
    }
    var w = {
        num: new v("num", _),
        regexp: new v("regexp", _),
        string: new v("string", _),
        name: new v("name", _),
        eof: new v("eof"),
        bracketL: new v("[", {
            beforeExpr: !0,
            startsExpr: !0
        }),
        bracketR: new v("]"),
        braceL: new v("{", {
            beforeExpr: !0,
            startsExpr: !0
        }),
        braceR: new v("}"),
        parenL: new v("(", {
            beforeExpr: !0,
            startsExpr: !0
        }),
        parenR: new v(")"),
        comma: new v(",", y),
        semi: new v(";", y),
        colon: new v(":", y),
        dot: new v("."),
        question: new v("?", y),
        arrow: new v("=>", y),
        template: new v("template"),
        invalidTemplate: new v("invalidTemplate"),
        ellipsis: new v("...", y),
        backQuote: new v("`", _),
        dollarBraceL: new v("${", {
            beforeExpr: !0,
            startsExpr: !0
        }),
        eq: new v("=", {
            beforeExpr: !0,
            isAssign: !0
        }),
        assign: new v("_=", {
            beforeExpr: !0,
            isAssign: !0
        }),
        incDec: new v("++/--", {
            prefix: !0,
            postfix: !0,
            startsExpr: !0
        }),
        prefix: new v("!/~", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
        }),
        logicalOR: g("||", 1),
        logicalAND: g("&&", 2),
        bitwiseOR: g("|", 3),
        bitwiseXOR: g("^", 4),
        bitwiseAND: g("&", 5),
        equality: g("==/!=/===/!==", 6),
        relational: g("</>/<=/>=", 7),
        bitShift: g("<</>>/>>>", 8),
        plusMin: new v("+/-", {
            beforeExpr: !0,
            binop: 9,
            prefix: !0,
            startsExpr: !0
        }),
        modulo: g("%", 10),
        star: g("*", 10),
        slash: g("/", 10),
        starstar: new v("**", {
            beforeExpr: !0
        }),
        _break: b("break"),
        _case: b("case", y),
        _catch: b("catch"),
        _continue: b("continue"),
        _debugger: b("debugger"),
        _default: b("default", y),
        _do: b("do", {
            isLoop: !0,
            beforeExpr: !0
        }),
        _else: b("else", y),
        _finally: b("finally"),
        _for: b("for", {
            isLoop: !0
        }),
        _function: b("function", _),
        _if: b("if"),
        _return: b("return", y),
        _switch: b("switch"),
        _throw: b("throw", y),
        _try: b("try"),
        _var: b("var"),
        _const: b("const"),
        _while: b("while", {
            isLoop: !0
        }),
        _with: b("with"),
        _new: b("new", {
            beforeExpr: !0,
            startsExpr: !0
        }),
        _this: b("this", _),
        _super: b("super", _),
        _class: b("class", _),
        _extends: b("extends", y),
        _export: b("export"),
        _import: b("import"),
        _null: b("null", _),
        _true: b("true", _),
        _false: b("false", _),
        _in: b("in", {
            beforeExpr: !0,
            binop: 7
        }),
        _instanceof: b("instanceof", {
            beforeExpr: !0,
            binop: 7
        }),
        _typeof: b("typeof", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
        }),
        _void: b("void", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
        }),
        _delete: b("delete", {
            beforeExpr: !0,
            prefix: !0,
            startsExpr: !0
        })
    },
    k = /\r\n?|\n|\u2028|\u2029/,
    E = new RegExp(k.source, "g");
    function S(t, e) {
        return 10 === t || 13 === t || !e && (8232 === t || 8233 === t)
    }
    var A = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    C = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    P = Object.prototype,
    j = P.hasOwnProperty,
    O = P.toString;
    function L(t, e) {
        return j.call(t, e)
    }
    var I = Array.isArray ||
    function(t) {
        return "[object Array]" === O.call(t)
    },
    N = function(t, e) {
        this.line = t,
        this.column = e
    };
    N.prototype.offset = function(t) {
        return new N(this.line, this.column + t)
    };
    var T = function(t, e, r) {
        this.start = e,
        this.end = r,
        null !== t.sourceFile && (this.source = t.sourceFile)
    };
    function M(t, e) {
        for (var r = 1,
        n = 0;;) {
            E.lastIndex = n;
            var i = E.exec(t);
            if (! (i && i.index < e)) return new N(r, e - n); ++r,
            n = i.index + i[0].length
        }
    }
    var V = {
        ecmaVersion: 7,
        sourceType: "script",
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: !1,
        allowImportExportEverywhere: !1,
        allowAwaitOutsideFunction: !1,
        allowHashBang: !1,
        locations: !1,
        onToken: null,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: !1,
        plugins: {}
    };
    function R(t) {
        var e = {};
        for (var r in V) e[r] = t && L(t, r) ? t[r] : V[r];
        if (e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), I(e.onToken)) {
            var n = e.onToken;
            e.onToken = function(t) {
                return n.push(t)
            }
        }
        return I(e.onComment) && (e.onComment = function(t, e) {
            return function(r, n, i, a, s, o) {
                var c = {
                    type: r ? "Block": "Line",
                    value: n,
                    start: i,
                    end: a
                };
                t.locations && (c.loc = new T(this, s, o)),
                t.ranges && (c.range = [i, a]),
                e.push(c)
            }
        } (e, e.onComment)),
        e
    }
    var D = {};
    function B(t) {
        return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$")
    }
    var H = function(t, e, r) {
        this.options = t = R(t),
        this.sourceFile = t.sourceFile,
        this.keywords = B(a[t.ecmaVersion >= 6 ? 6 : 5]);
        var i = "";
        if (!t.allowReserved) {
            for (var s = t.ecmaVersion; ! (i = n[s]); s--);
            "module" === t.sourceType && (i += " await")
        }
        this.reservedWords = B(i);
        var o = (i ? i + " ": "") + n.strict;
        this.reservedWordsStrict = B(o),
        this.reservedWordsStrictBind = B(o + " " + n.strictBind),
        this.input = String(e),
        this.containsEsc = !1,
        this.loadPlugins(t.plugins),
        r ? (this.pos = r, this.lineStart = this.input.lastIndexOf("\n", r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(k).length) : (this.pos = this.lineStart = 0, this.curLine = 1),
        this.type = w.eof,
        this.value = null,
        this.start = this.end = this.pos,
        this.startLoc = this.endLoc = this.curPosition(),
        this.lastTokEndLoc = this.lastTokStartLoc = null,
        this.lastTokStart = this.lastTokEnd = this.pos,
        this.context = this.initialContext(),
        this.exprAllowed = !0,
        this.inModule = "module" === t.sourceType,
        this.strict = this.inModule || this.strictDirective(this.pos),
        this.potentialArrowAt = -1,
        this.inFunction = this.inGenerator = this.inAsync = !1,
        this.yieldPos = this.awaitPos = 0,
        this.labels = [],
        0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2),
        this.scopeStack = [],
        this.enterFunctionScope(),
        this.regexpState = null
    };
    H.prototype.isKeyword = function(t) {
        return this.keywords.test(t)
    },
    H.prototype.isReservedWord = function(t) {
        return this.reservedWords.test(t)
    },
    H.prototype.extend = function(t, e) {
        this[t] = e(this[t])
    },
    H.prototype.loadPlugins = function(t) {
        for (var e in t) {
            var r = D[e];
            if (!r) throw new Error("Plugin '" + e + "' not found");
            r(this, t[e])
        }
    },
    H.prototype.parse = function() {
        var t = this.options.program || this.startNode();
        return this.nextToken(),
        this.parseTopLevel(t)
    };
    var F = H.prototype,
    U = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
    function q() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
    }
    F.strictDirective = function(t) {
        for (;;) {
            C.lastIndex = t,
            t += C.exec(this.input)[0].length;
            var e = U.exec(this.input.slice(t));
            if (!e) return ! 1;
            if ("use strict" === (e[1] || e[2])) return ! 0;
            t += e[0].length
        }
    },
    F.eat = function(t) {
        return this.type === t && (this.next(), !0)
    },
    F.isContextual = function(t) {
        return this.type === w.name && this.value === t && !this.containsEsc
    },
    F.eatContextual = function(t) {
        return !! this.isContextual(t) && (this.next(), !0)
    },
    F.expectContextual = function(t) {
        this.eatContextual(t) || this.unexpected()
    },
    F.canInsertSemicolon = function() {
        return this.type === w.eof || this.type === w.braceR || k.test(this.input.slice(this.lastTokEnd, this.start))
    },
    F.insertSemicolon = function() {
        if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
        !0
    },
    F.semicolon = function() {
        this.eat(w.semi) || this.insertSemicolon() || this.unexpected()
    },
    F.afterTrailingComma = function(t, e) {
        if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
        e || this.next(),
        !0
    },
    F.expect = function(t) {
        this.eat(t) || this.unexpected()
    },
    F.unexpected = function(t) {
        this.raise(null != t ? t: this.start, "Unexpected token")
    },
    F.checkPatternErrors = function(t, e) {
        if (t) {
            t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
            var r = e ? t.parenthesizedAssign: t.parenthesizedBind;
            r > -1 && this.raiseRecoverable(r, "Parenthesized pattern")
        }
    },
    F.checkExpressionErrors = function(t, e) {
        if (!t) return ! 1;
        var r = t.shorthandAssign,
        n = t.doubleProto;
        if (!e) return r >= 0 || n >= 0;
        r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"),
        n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property")
    },
    F.checkYieldAwaitInDefaultParams = function() {
        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"),
        this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
    },
    F.isSimpleAssignTarget = function(t) {
        return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
    };
    var G = H.prototype;
    G.parseTopLevel = function(t) {
        var e = {};
        for (t.body || (t.body = []); this.type !== w.eof;) {
            var r = this.parseStatement(!0, !0, e);
            t.body.push(r)
        }
        return this.adaptDirectivePrologue(t.body),
        this.next(),
        this.options.ecmaVersion >= 6 && (t.sourceType = this.options.sourceType),
        this.finishNode(t, "Program")
    };
    var W = {
        kind: "loop"
    },
    z = {
        kind: "switch"
    };
    G.isLet = function() {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return ! 1;
        C.lastIndex = this.pos;
        var t = C.exec(this.input),
        e = this.pos + t[0].length,
        r = this.input.charCodeAt(e);
        if (91 === r || 123 === r) return ! 0;
        if (d(r, !0)) {
            for (var n = e + 1; m(this.input.charCodeAt(n), !0);)++n;
            var i = this.input.slice(e, n);
            if (!s.test(i)) return ! 0
        }
        return ! 1
    },
    G.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return ! 1;
        C.lastIndex = this.pos;
        var t = C.exec(this.input),
        e = this.pos + t[0].length;
        return ! (k.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 !== this.input.length && m(this.input.charAt(e + 8)))
    },
    G.parseStatement = function(t, e, r) {
        var n, i = this.type,
        a = this.startNode();
        switch (this.isLet() && (i = w._var, n = "let"), i) {
        case w._break:
        case w._continue:
            return this.parseBreakContinueStatement(a, i.keyword);
        case w._debugger:
            return this.parseDebuggerStatement(a);
        case w._do:
            return this.parseDoStatement(a);
        case w._for:
            return this.parseForStatement(a);
        case w._function:
            return ! t && this.options.ecmaVersion >= 6 && this.unexpected(),
            this.parseFunctionStatement(a, !1);
        case w._class:
            return t || this.unexpected(),
            this.parseClass(a, !0);
        case w._if:
            return this.parseIfStatement(a);
        case w._return:
            return this.parseReturnStatement(a);
        case w._switch:
            return this.parseSwitchStatement(a);
        case w._throw:
            return this.parseThrowStatement(a);
        case w._try:
            return this.parseTryStatement(a);
        case w._const:
        case w._var:
            return n = n || this.value,
            t || "var" === n || this.unexpected(),
            this.parseVarStatement(a, n);
        case w._while:
            return this.parseWhileStatement(a);
        case w._with:
            return this.parseWithStatement(a);
        case w.braceL:
            return this.parseBlock();
        case w.semi:
            return this.parseEmptyStatement(a);
        case w._export:
        case w._import:
            return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")),
            i === w._import ? this.parseImport(a) : this.parseExport(a, r);
        default:
            if (this.isAsyncFunction()) return t || this.unexpected(),
            this.next(),
            this.parseFunctionStatement(a, !0);
            var s = this.value,
            o = this.parseExpression();
            return i === w.name && "Identifier" === o.type && this.eat(w.colon) ? this.parseLabeledStatement(a, s, o) : this.parseExpressionStatement(a, o)
        }
    },
    G.parseBreakContinueStatement = function(t, e) {
        var r = "break" === e;
        this.next(),
        this.eat(w.semi) || this.insertSemicolon() ? t.label = null: this.type !== w.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
        for (var n = 0; n < this.labels.length; ++n) {
            var i = this.labels[n];
            if (null == t.label || i.name === t.label.name) {
                if (null != i.kind && (r || "loop" === i.kind)) break;
                if (t.label && r) break
            }
        }
        return n === this.labels.length && this.raise(t.start, "Unsyntactic " + e),
        this.finishNode(t, r ? "BreakStatement": "ContinueStatement")
    },
    G.parseDebuggerStatement = function(t) {
        return this.next(),
        this.semicolon(),
        this.finishNode(t, "DebuggerStatement")
    },
    G.parseDoStatement = function(t) {
        return this.next(),
        this.labels.push(W),
        t.body = this.parseStatement(!1),
        this.labels.pop(),
        this.expect(w._while),
        t.test = this.parseParenExpression(),
        this.options.ecmaVersion >= 6 ? this.eat(w.semi) : this.semicolon(),
        this.finishNode(t, "DoWhileStatement")
    },
    G.parseForStatement = function(t) {
        this.next();
        var e = this.options.ecmaVersion >= 9 && this.inAsync && this.eatContextual("await") ? this.lastTokStart: -1;
        if (this.labels.push(W), this.enterLexicalScope(), this.expect(w.parenL), this.type === w.semi) return e > -1 && this.unexpected(e),
        this.parseFor(t, null);
        var r = this.isLet();
        if (this.type === w._var || this.type === w._const || r) {
            var n = this.startNode(),
            i = r ? "let": this.value;
            return this.next(),
            this.parseVar(n, !0, i),
            this.finishNode(n, "VariableDeclaration"),
            !(this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) || 1 !== n.declarations.length || "var" !== i && n.declarations[0].init ? (e > -1 && this.unexpected(e), this.parseFor(t, n)) : (this.options.ecmaVersion >= 9 && (this.type === w._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, n))
        }
        var a = new q,
        s = this.parseExpression(!0, a);
        return this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === w._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(s, !1, a), this.checkLVal(s), this.parseForIn(t, s)) : (this.checkExpressionErrors(a, !0), e > -1 && this.unexpected(e), this.parseFor(t, s))
    },
    G.parseFunctionStatement = function(t, e) {
        return this.next(),
        this.parseFunction(t, !0, !1, e)
    },
    G.parseIfStatement = function(t) {
        return this.next(),
        t.test = this.parseParenExpression(),
        t.consequent = this.parseStatement(!this.strict && this.type === w._function),
        t.alternate = this.eat(w._else) ? this.parseStatement(!this.strict && this.type === w._function) : null,
        this.finishNode(t, "IfStatement")
    },
    G.parseReturnStatement = function(t) {
        return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"),
        this.next(),
        this.eat(w.semi) || this.insertSemicolon() ? t.argument = null: (t.argument = this.parseExpression(), this.semicolon()),
        this.finishNode(t, "ReturnStatement")
    },
    G.parseSwitchStatement = function(t) {
        var e;
        this.next(),
        t.discriminant = this.parseParenExpression(),
        t.cases = [],
        this.expect(w.braceL),
        this.labels.push(z),
        this.enterLexicalScope();
        for (var r = !1; this.type !== w.braceR;) if (this.type === w._case || this.type === w._default) {
            var n = this.type === w._case;
            e && this.finishNode(e, "SwitchCase"),
            t.cases.push(e = this.startNode()),
            e.consequent = [],
            this.next(),
            n ? e.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, e.test = null),
            this.expect(w.colon)
        } else e || this.unexpected(),
        e.consequent.push(this.parseStatement(!0));
        return this.exitLexicalScope(),
        e && this.finishNode(e, "SwitchCase"),
        this.next(),
        this.labels.pop(),
        this.finishNode(t, "SwitchStatement")
    },
    G.parseThrowStatement = function(t) {
        return this.next(),
        k.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"),
        t.argument = this.parseExpression(),
        this.semicolon(),
        this.finishNode(t, "ThrowStatement")
    };
    var Q = [];
    G.parseTryStatement = function(t) {
        if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === w._catch) {
            var e = this.startNode();
            this.next(),
            this.eat(w.parenL) ? (e.param = this.parseBindingAtom(), this.enterLexicalScope(), this.checkLVal(e.param, "let"), this.expect(w.parenR)) : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterLexicalScope()),
            e.body = this.parseBlock(!1),
            this.exitLexicalScope(),
            t.handler = this.finishNode(e, "CatchClause")
        }
        return t.finalizer = this.eat(w._finally) ? this.parseBlock() : null,
        t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"),
        this.finishNode(t, "TryStatement")
    },
    G.parseVarStatement = function(t, e) {
        return this.next(),
        this.parseVar(t, !1, e),
        this.semicolon(),
        this.finishNode(t, "VariableDeclaration")
    },
    G.parseWhileStatement = function(t) {
        return this.next(),
        t.test = this.parseParenExpression(),
        this.labels.push(W),
        t.body = this.parseStatement(!1),
        this.labels.pop(),
        this.finishNode(t, "WhileStatement")
    },
    G.parseWithStatement = function(t) {
        return this.strict && this.raise(this.start, "'with' in strict mode"),
        this.next(),
        t.object = this.parseParenExpression(),
        t.body = this.parseStatement(!1),
        this.finishNode(t, "WithStatement")
    },
    G.parseEmptyStatement = function(t) {
        return this.next(),
        this.finishNode(t, "EmptyStatement")
    },
    G.parseLabeledStatement = function(t, e, r) {
        for (var n = 0,
        i = this.labels; n < i.length; n += 1) {
            i[n].name === e && this.raise(r.start, "Label '" + e + "' is already declared")
        }
        for (var a = this.type.isLoop ? "loop": this.type === w._switch ? "switch": null, s = this.labels.length - 1; s >= 0; s--) {
            var o = this.labels[s];
            if (o.statementStart !== t.start) break;
            o.statementStart = this.start,
            o.kind = a
        }
        return this.labels.push({
            name: e,
            kind: a,
            statementStart: this.start
        }),
        t.body = this.parseStatement(!0),
        ("ClassDeclaration" === t.body.type || "VariableDeclaration" === t.body.type && "var" !== t.body.kind || "FunctionDeclaration" === t.body.type && (this.strict || t.body.generator)) && this.raiseRecoverable(t.body.start, "Invalid labeled declaration"),
        this.labels.pop(),
        t.label = r,
        this.finishNode(t, "LabeledStatement")
    },
    G.parseExpressionStatement = function(t, e) {
        return t.expression = e,
        this.semicolon(),
        this.finishNode(t, "ExpressionStatement")
    },
    G.parseBlock = function(t) {
        void 0 === t && (t = !0);
        var e = this.startNode();
        for (e.body = [], this.expect(w.braceL), t && this.enterLexicalScope(); ! this.eat(w.braceR);) {
            var r = this.parseStatement(!0);
            e.body.push(r)
        }
        return t && this.exitLexicalScope(),
        this.finishNode(e, "BlockStatement")
    },
    G.parseFor = function(t, e) {
        return t.init = e,
        this.expect(w.semi),
        t.test = this.type === w.semi ? null: this.parseExpression(),
        this.expect(w.semi),
        t.update = this.type === w.parenR ? null: this.parseExpression(),
        this.expect(w.parenR),
        this.exitLexicalScope(),
        t.body = this.parseStatement(!1),
        this.labels.pop(),
        this.finishNode(t, "ForStatement")
    },
    G.parseForIn = function(t, e) {
        var r = this.type === w._in ? "ForInStatement": "ForOfStatement";
        return this.next(),
        "ForInStatement" === r && ("AssignmentPattern" === e.type || "VariableDeclaration" === e.type && null != e.declarations[0].init && (this.strict || "Identifier" !== e.declarations[0].id.type)) && this.raise(e.start, "Invalid assignment in for-in loop head"),
        t.left = e,
        t.right = "ForInStatement" === r ? this.parseExpression() : this.parseMaybeAssign(),
        this.expect(w.parenR),
        this.exitLexicalScope(),
        t.body = this.parseStatement(!1),
        this.labels.pop(),
        this.finishNode(t, r)
    },
    G.parseVar = function(t, e, r) {
        for (t.declarations = [], t.kind = r;;) {
            var n = this.startNode();
            if (this.parseVarId(n, r), this.eat(w.eq) ? n.init = this.parseMaybeAssign(e) : "const" !== r || this.type === w._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === n.id.type || e && (this.type === w._in || this.isContextual("of")) ? n.init = null: this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(w.comma)) break
        }
        return t
    },
    G.parseVarId = function(t, e) {
        t.id = this.parseBindingAtom(e),
        this.checkLVal(t.id, e, !1)
    },
    G.parseFunction = function(t, e, r, n) {
        this.initFunction(t),
        (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (t.generator = this.eat(w.star)),
        this.options.ecmaVersion >= 8 && (t.async = !!n),
        e && (t.id = "nullableID" === e && this.type !== w.name ? null: this.parseIdent(), t.id && this.checkLVal(t.id, "var"));
        var i = this.inGenerator,
        a = this.inAsync,
        s = this.yieldPos,
        o = this.awaitPos,
        c = this.inFunction;
        return this.inGenerator = t.generator,
        this.inAsync = t.async,
        this.yieldPos = 0,
        this.awaitPos = 0,
        this.inFunction = !0,
        this.enterFunctionScope(),
        e || (t.id = this.type === w.name ? this.parseIdent() : null),
        this.parseFunctionParams(t),
        this.parseFunctionBody(t, r),
        this.inGenerator = i,
        this.inAsync = a,
        this.yieldPos = s,
        this.awaitPos = o,
        this.inFunction = c,
        this.finishNode(t, e ? "FunctionDeclaration": "FunctionExpression")
    },
    G.parseFunctionParams = function(t) {
        this.expect(w.parenL),
        t.params = this.parseBindingList(w.parenR, !1, this.options.ecmaVersion >= 8),
        this.checkYieldAwaitInDefaultParams()
    },
    G.parseClass = function(t, e) {
        this.next(),
        this.parseClassId(t, e),
        this.parseClassSuper(t);
        var r = this.startNode(),
        n = !1;
        for (r.body = [], this.expect(w.braceL); ! this.eat(w.braceR);) {
            var i = this.parseClassMember(r);
            i && "MethodDefinition" === i.type && "constructor" === i.kind && (n && this.raise(i.start, "Duplicate constructor in the same class"), n = !0)
        }
        return t.body = this.finishNode(r, "ClassBody"),
        this.finishNode(t, e ? "ClassDeclaration": "ClassExpression")
    },
    G.parseClassMember = function(t) {
        var e = this;
        if (this.eat(w.semi)) return null;
        var r = this.startNode(),
        n = function(t, n) {
            void 0 === n && (n = !1);
            var i = e.start,
            a = e.startLoc;
            return !! e.eatContextual(t) && (!(e.type === w.parenL || n && e.canInsertSemicolon()) || (r.key && e.unexpected(), r.computed = !1, r.key = e.startNodeAt(i, a), r.key.name = t, e.finishNode(r.key, "Identifier"), !1))
        };
        r.kind = "method",
        r.static = n("static");
        var i = this.eat(w.star),
        a = !1;
        i || (this.options.ecmaVersion >= 8 && n("async", !0) ? (a = !0, i = this.options.ecmaVersion >= 9 && this.eat(w.star)) : n("get") ? r.kind = "get": n("set") && (r.kind = "set")),
        r.key || this.parsePropertyName(r);
        var s = r.key;
        return r.computed || r.static || !("Identifier" === s.type && "constructor" === s.name || "Literal" === s.type && "constructor" === s.value) ? r.static && "Identifier" === s.type && "prototype" === s.name && this.raise(s.start, "Classes may not have a static property named prototype") : ("method" !== r.kind && this.raise(s.start, "Constructor can't have get/set modifier"), i && this.raise(s.start, "Constructor can't be a generator"), a && this.raise(s.start, "Constructor can't be an async method"), r.kind = "constructor"),
        this.parseClassMethod(t, r, i, a),
        "get" === r.kind && 0 !== r.value.params.length && this.raiseRecoverable(r.value.start, "getter should have no params"),
        "set" === r.kind && 1 !== r.value.params.length && this.raiseRecoverable(r.value.start, "setter should have exactly one param"),
        "set" === r.kind && "RestElement" === r.value.params[0].type && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"),
        r
    },
    G.parseClassMethod = function(t, e, r, n) {
        e.value = this.parseMethod(r, n),
        t.body.push(this.finishNode(e, "MethodDefinition"))
    },
    G.parseClassId = function(t, e) {
        t.id = this.type === w.name ? this.parseIdent() : !0 === e ? this.unexpected() : null
    },
    G.parseClassSuper = function(t) {
        t.superClass = this.eat(w._extends) ? this.parseExprSubscripts() : null
    },
    G.parseExport = function(t, e) {
        if (this.next(), this.eat(w.star)) return this.expectContextual("from"),
        this.type !== w.string && this.unexpected(),
        t.source = this.parseExprAtom(),
        this.semicolon(),
        this.finishNode(t, "ExportAllDeclaration");
        if (this.eat(w._default)) {
            var r;
            if (this.checkExport(e, "default", this.lastTokStart), this.type === w._function || (r = this.isAsyncFunction())) {
                var n = this.startNode();
                this.next(),
                r && this.next(),
                t.declaration = this.parseFunction(n, "nullableID", !1, r)
            } else if (this.type === w._class) {
                var i = this.startNode();
                t.declaration = this.parseClass(i, "nullableID")
            } else t.declaration = this.parseMaybeAssign(),
            this.semicolon();
            return this.finishNode(t, "ExportDefaultDeclaration")
        }
        if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(!0),
        "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start),
        t.specifiers = [],
        t.source = null;
        else {
            if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== w.string && this.unexpected(),
            t.source = this.parseExprAtom();
            else {
                for (var a = 0,
                s = t.specifiers; a < s.length; a += 1) {
                    var o = s[a];
                    this.checkUnreserved(o.local)
                }
                t.source = null
            }
            this.semicolon()
        }
        return this.finishNode(t, "ExportNamedDeclaration")
    },
    G.checkExport = function(t, e, r) {
        t && (L(t, e) && this.raiseRecoverable(r, "Duplicate export '" + e + "'"), t[e] = !0)
    },
    G.checkPatternExport = function(t, e) {
        var r = e.type;
        if ("Identifier" === r) this.checkExport(t, e.name, e.start);
        else if ("ObjectPattern" === r) for (var n = 0,
        i = e.properties; n < i.length; n += 1) {
            var a = i[n];
            this.checkPatternExport(t, a)
        } else if ("ArrayPattern" === r) for (var s = 0,
        o = e.elements; s < o.length; s += 1) {
            var c = o[s];
            c && this.checkPatternExport(t, c)
        } else "Property" === r ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === r ? this.checkPatternExport(t, e.left) : "RestElement" === r ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === r && this.checkPatternExport(t, e.expression)
    },
    G.checkVariableExport = function(t, e) {
        if (t) for (var r = 0,
        n = e; r < n.length; r += 1) {
            var i = n[r];
            this.checkPatternExport(t, i.id)
        }
    },
    G.shouldParseExportStatement = function() {
        return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
    },
    G.parseExportSpecifiers = function(t) {
        var e = [],
        r = !0;
        for (this.expect(w.braceL); ! this.eat(w.braceR);) {
            if (r) r = !1;
            else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) break;
            var n = this.startNode();
            n.local = this.parseIdent(!0),
            n.exported = this.eatContextual("as") ? this.parseIdent(!0) : n.local,
            this.checkExport(t, n.exported.name, n.exported.start),
            e.push(this.finishNode(n, "ExportSpecifier"))
        }
        return e
    },
    G.parseImport = function(t) {
        return this.next(),
        this.type === w.string ? (t.specifiers = Q, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === w.string ? this.parseExprAtom() : this.unexpected()),
        this.semicolon(),
        this.finishNode(t, "ImportDeclaration")
    },
    G.parseImportSpecifiers = function() {
        var t = [],
        e = !0;
        if (this.type === w.name) {
            var r = this.startNode();
            if (r.local = this.parseIdent(), this.checkLVal(r.local, "let"), t.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(w.comma)) return t
        }
        if (this.type === w.star) {
            var n = this.startNode();
            return this.next(),
            this.expectContextual("as"),
            n.local = this.parseIdent(),
            this.checkLVal(n.local, "let"),
            t.push(this.finishNode(n, "ImportNamespaceSpecifier")),
            t
        }
        for (this.expect(w.braceL); ! this.eat(w.braceR);) {
            if (e) e = !1;
            else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) break;
            var i = this.startNode();
            i.imported = this.parseIdent(!0),
            this.eatContextual("as") ? i.local = this.parseIdent() : (this.checkUnreserved(i.imported), i.local = i.imported),
            this.checkLVal(i.local, "let"),
            t.push(this.finishNode(i, "ImportSpecifier"))
        }
        return t
    },
    G.adaptDirectivePrologue = function(t) {
        for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
    },
    G.isDirectiveCandidate = function(t) {
        return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
    };
    var K = H.prototype;
    K.toAssignable = function(t, e, r) {
        if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
        case "Identifier":
            this.inAsync && "await" === t.name && this.raise(t.start, "Can not use 'await' as identifier inside an async function");
            break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "RestElement":
            break;
        case "ObjectExpression":
            t.type = "ObjectPattern",
            r && this.checkPatternErrors(r, !0);
            for (var n = 0,
            i = t.properties; n < i.length; n += 1) {
                var a = i[n];
                this.toAssignable(a, e),
                "RestElement" !== a.type || "ArrayPattern" !== a.argument.type && "ObjectPattern" !== a.argument.type || this.raise(a.argument.start, "Unexpected token")
            }
            break;
        case "Property":
            "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"),
            this.toAssignable(t.value, e);
            break;
        case "ArrayExpression":
            t.type = "ArrayPattern",
            r && this.checkPatternErrors(r, !0),
            this.toAssignableList(t.elements, e);
            break;
        case "SpreadElement":
            t.type = "RestElement",
            this.toAssignable(t.argument, e),
            "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
            break;
        case "AssignmentExpression":
            "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."),
            t.type = "AssignmentPattern",
            delete t.operator,
            this.toAssignable(t.left, e);
        case "AssignmentPattern":
            break;
        case "ParenthesizedExpression":
            this.toAssignable(t.expression, e);
            break;
        case "MemberExpression":
            if (!e) break;
        default:
            this.raise(t.start, "Assigning to rvalue")
        } else r && this.checkPatternErrors(r, !0);
        return t
    },
    K.toAssignableList = function(t, e) {
        for (var r = t.length,
        n = 0; n < r; n++) {
            var i = t[n];
            i && this.toAssignable(i, e)
        }
        if (r) {
            var a = t[r - 1];
            6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start)
        }
        return t
    },
    K.parseSpread = function(t) {
        var e = this.startNode();
        return this.next(),
        e.argument = this.parseMaybeAssign(!1, t),
        this.finishNode(e, "SpreadElement")
    },
    K.parseRestBinding = function() {
        var t = this.startNode();
        return this.next(),
        6 === this.options.ecmaVersion && this.type !== w.name && this.unexpected(),
        t.argument = this.parseBindingAtom(),
        this.finishNode(t, "RestElement")
    },
    K.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) switch (this.type) {
        case w.bracketL:
            var t = this.startNode();
            return this.next(),
            t.elements = this.parseBindingList(w.bracketR, !0, !0),
            this.finishNode(t, "ArrayPattern");
        case w.braceL:
            return this.parseObj(!0)
        }
        return this.parseIdent()
    },
    K.parseBindingList = function(t, e, r) {
        for (var n = [], i = !0; ! this.eat(t);) if (i ? i = !1 : this.expect(w.comma), e && this.type === w.comma) n.push(null);
        else {
            if (r && this.afterTrailingComma(t)) break;
            if (this.type === w.ellipsis) {
                var a = this.parseRestBinding();
                this.parseBindingListItem(a),
                n.push(a),
                this.type === w.comma && this.raise(this.start, "Comma is not permitted after the rest element"),
                this.expect(t);
                break
            }
            var s = this.parseMaybeDefault(this.start, this.startLoc);
            this.parseBindingListItem(s),
            n.push(s)
        }
        return n
    },
    K.parseBindingListItem = function(t) {
        return t
    },
    K.parseMaybeDefault = function(t, e, r) {
        if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(w.eq)) return r;
        var n = this.startNodeAt(t, e);
        return n.left = r,
        n.right = this.parseMaybeAssign(),
        this.finishNode(n, "AssignmentPattern")
    },
    K.checkLVal = function(t, e, r) {
        switch (t.type) {
        case "Identifier":
            this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (e ? "Binding ": "Assigning to ") + t.name + " in strict mode"),
            r && (L(r, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), r[t.name] = !0),
            e && "none" !== e && (("var" === e && !this.canDeclareVarName(t.name) || "var" !== e && !this.canDeclareLexicalName(t.name)) && this.raiseRecoverable(t.start, "Identifier '" + t.name + "' has already been declared"), "var" === e ? this.declareVarName(t.name) : this.declareLexicalName(t.name));
            break;
        case "MemberExpression":
            e && this.raiseRecoverable(t.start, "Binding member expression");
            break;
        case "ObjectPattern":
            for (var n = 0,
            i = t.properties; n < i.length; n += 1) {
                var a = i[n];
                this.checkLVal(a, e, r)
            }
            break;
        case "Property":
            this.checkLVal(t.value, e, r);
            break;
        case "ArrayPattern":
            for (var s = 0,
            o = t.elements; s < o.length; s += 1) {
                var c = o[s];
                c && this.checkLVal(c, e, r)
            }
            break;
        case "AssignmentPattern":
            this.checkLVal(t.left, e, r);
            break;
        case "RestElement":
            this.checkLVal(t.argument, e, r);
            break;
        case "ParenthesizedExpression":
            this.checkLVal(t.expression, e, r);
            break;
        default:
            this.raise(t.start, (e ? "Binding": "Assigning to") + " rvalue")
        }
    };
    var X = H.prototype;
    X.checkPropClash = function(t, e, r) {
        if (! (this.options.ecmaVersion >= 9 && "SpreadElement" === t.type || this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
            var n, i = t.key;
            switch (i.type) {
            case "Identifier":
                n = i.name;
                break;
            case "Literal":
                n = String(i.value);
                break;
            default:
                return
            }
            var a = t.kind;
            if (this.options.ecmaVersion >= 6)"__proto__" === n && "init" === a && (e.proto && (r && r.doubleProto < 0 ? r.doubleProto = i.start: this.raiseRecoverable(i.start, "Redefinition of __proto__ property")), e.proto = !0);
            else {
                var s = e[n = "$" + n];
                if (s)("init" === a ? this.strict && s.init || s.get || s.set: s.init || s[a]) && this.raiseRecoverable(i.start, "Redefinition of property");
                else s = e[n] = {
                    init: !1,
                    get: !1,
                    set: !1
                };
                s[a] = !0
            }
        }
    },
    X.parseExpression = function(t, e) {
        var r = this.start,
        n = this.startLoc,
        i = this.parseMaybeAssign(t, e);
        if (this.type === w.comma) {
            var a = this.startNodeAt(r, n);
            for (a.expressions = [i]; this.eat(w.comma);) a.expressions.push(this.parseMaybeAssign(t, e));
            return this.finishNode(a, "SequenceExpression")
        }
        return i
    },
    X.parseMaybeAssign = function(t, e, r) {
        if (this.inGenerator && this.isContextual("yield")) return this.parseYield();
        var n = !1,
        i = -1,
        a = -1;
        e ? (i = e.parenthesizedAssign, a = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new q, n = !0);
        var s = this.start,
        o = this.startLoc;
        this.type !== w.parenL && this.type !== w.name || (this.potentialArrowAt = this.start);
        var c = this.parseMaybeConditional(t, e);
        if (r && (c = r.call(this, c, s, o)), this.type.isAssign) {
            var u = this.startNodeAt(s, o);
            return u.operator = this.value,
            u.left = this.type === w.eq ? this.toAssignable(c, !1, e) : c,
            n || q.call(e),
            e.shorthandAssign = -1,
            this.checkLVal(c),
            this.next(),
            u.right = this.parseMaybeAssign(t),
            this.finishNode(u, "AssignmentExpression")
        }
        return n && this.checkExpressionErrors(e, !0),
        i > -1 && (e.parenthesizedAssign = i),
        a > -1 && (e.trailingComma = a),
        c
    },
    X.parseMaybeConditional = function(t, e) {
        var r = this.start,
        n = this.startLoc,
        i = this.parseExprOps(t, e);
        if (this.checkExpressionErrors(e)) return i;
        if (this.eat(w.question)) {
            var a = this.startNodeAt(r, n);
            return a.test = i,
            a.consequent = this.parseMaybeAssign(),
            this.expect(w.colon),
            a.alternate = this.parseMaybeAssign(t),
            this.finishNode(a, "ConditionalExpression")
        }
        return i
    },
    X.parseExprOps = function(t, e) {
        var r = this.start,
        n = this.startLoc,
        i = this.parseMaybeUnary(e, !1);
        return this.checkExpressionErrors(e) ? i: i.start === r && "ArrowFunctionExpression" === i.type ? i: this.parseExprOp(i, r, n, -1, t)
    },
    X.parseExprOp = function(t, e, r, n, i) {
        var a = this.type.binop;
        if (null != a && (!i || this.type !== w._in) && a > n) {
            var s = this.type === w.logicalOR || this.type === w.logicalAND,
            o = this.value;
            this.next();
            var c = this.start,
            u = this.startLoc,
            p = this.parseExprOp(this.parseMaybeUnary(null, !1), c, u, a, i),
            l = this.buildBinary(e, r, t, p, o, s);
            return this.parseExprOp(l, e, r, n, i)
        }
        return t
    },
    X.buildBinary = function(t, e, r, n, i, a) {
        var s = this.startNodeAt(t, e);
        return s.left = r,
        s.operator = i,
        s.right = n,
        this.finishNode(s, a ? "LogicalExpression": "BinaryExpression")
    },
    X.parseMaybeUnary = function(t, e) {
        var r, n = this.start,
        i = this.startLoc;
        if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) r = this.parseAwait(),
        e = !0;
        else if (this.type.prefix) {
            var a = this.startNode(),
            s = this.type === w.incDec;
            a.operator = this.value,
            a.prefix = !0,
            this.next(),
            a.argument = this.parseMaybeUnary(null, !0),
            this.checkExpressionErrors(t, !0),
            s ? this.checkLVal(a.argument) : this.strict && "delete" === a.operator && "Identifier" === a.argument.type ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : e = !0,
            r = this.finishNode(a, s ? "UpdateExpression": "UnaryExpression")
        } else {
            if (r = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return r;
            for (; this.type.postfix && !this.canInsertSemicolon();) {
                var o = this.startNodeAt(n, i);
                o.operator = this.value,
                o.prefix = !1,
                o.argument = r,
                this.checkLVal(r),
                this.next(),
                r = this.finishNode(o, "UpdateExpression")
            }
        }
        return ! e && this.eat(w.starstar) ? this.buildBinary(n, i, r, this.parseMaybeUnary(null, !1), "**", !1) : r
    },
    X.parseExprSubscripts = function(t) {
        var e = this.start,
        r = this.startLoc,
        n = this.parseExprAtom(t),
        i = "ArrowFunctionExpression" === n.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd);
        if (this.checkExpressionErrors(t) || i) return n;
        var a = this.parseSubscripts(n, e, r);
        return t && "MemberExpression" === a.type && (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1)),
        a
    },
    X.parseSubscripts = function(t, e, r, n) {
        for (var i = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && "async" === this.input.slice(t.start, t.end), a = void 0;;) if ((a = this.eat(w.bracketL)) || this.eat(w.dot)) {
            var s = this.startNodeAt(e, r);
            s.object = t,
            s.property = a ? this.parseExpression() : this.parseIdent(!0),
            s.computed = !!a,
            a && this.expect(w.bracketR),
            t = this.finishNode(s, "MemberExpression")
        } else if (!n && this.eat(w.parenL)) {
            var o = new q,
            c = this.yieldPos,
            u = this.awaitPos;
            this.yieldPos = 0,
            this.awaitPos = 0;
            var p = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, !1, o);
            if (i && !this.canInsertSemicolon() && this.eat(w.arrow)) return this.checkPatternErrors(o, !1),
            this.checkYieldAwaitInDefaultParams(),
            this.yieldPos = c,
            this.awaitPos = u,
            this.parseArrowExpression(this.startNodeAt(e, r), p, !0);
            this.checkExpressionErrors(o, !0),
            this.yieldPos = c || this.yieldPos,
            this.awaitPos = u || this.awaitPos;
            var l = this.startNodeAt(e, r);
            l.callee = t,
            l.arguments = p,
            t = this.finishNode(l, "CallExpression")
        } else {
            if (this.type !== w.backQuote) return t;
            var h = this.startNodeAt(e, r);
            h.tag = t,
            h.quasi = this.parseTemplate({
                isTagged: !0
            }),
            t = this.finishNode(h, "TaggedTemplateExpression")
        }
    },
    X.parseExprAtom = function(t) {
        var e, r = this.potentialArrowAt === this.start;
        switch (this.type) {
        case w._super:
            return this.inFunction || this.raise(this.start, "'super' outside of function or class"),
            e = this.startNode(),
            this.next(),
            this.type !== w.dot && this.type !== w.bracketL && this.type !== w.parenL && this.unexpected(),
            this.finishNode(e, "Super");
        case w._this:
            return e = this.startNode(),
            this.next(),
            this.finishNode(e, "ThisExpression");
        case w.name:
            var n = this.start,
            i = this.startLoc,
            a = this.containsEsc,
            s = this.parseIdent(this.type !== w.name);
            if (this.options.ecmaVersion >= 8 && !a && "async" === s.name && !this.canInsertSemicolon() && this.eat(w._function)) return this.parseFunction(this.startNodeAt(n, i), !1, !1, !0);
            if (r && !this.canInsertSemicolon()) {
                if (this.eat(w.arrow)) return this.parseArrowExpression(this.startNodeAt(n, i), [s], !1);
                if (this.options.ecmaVersion >= 8 && "async" === s.name && this.type === w.name && !a) return s = this.parseIdent(),
                !this.canInsertSemicolon() && this.eat(w.arrow) || this.unexpected(),
                this.parseArrowExpression(this.startNodeAt(n, i), [s], !0)
            }
            return s;
        case w.regexp:
            var o = this.value;
            return (e = this.parseLiteral(o.value)).regex = {
                pattern: o.pattern,
                flags: o.flags
            },
            e;
        case w.num:
        case w.string:
            return this.parseLiteral(this.value);
        case w._null:
        case w._true:
        case w._false:
            return (e = this.startNode()).value = this.type === w._null ? null: this.type === w._true,
            e.raw = this.type.keyword,
            this.next(),
            this.finishNode(e, "Literal");
        case w.parenL:
            var c = this.start,
            u = this.parseParenAndDistinguishExpression(r);
            return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(u) && (t.parenthesizedAssign = c), t.parenthesizedBind < 0 && (t.parenthesizedBind = c)),
            u;
        case w.bracketL:
            return e = this.startNode(),
            this.next(),
            e.elements = this.parseExprList(w.bracketR, !0, !0, t),
            this.finishNode(e, "ArrayExpression");
        case w.braceL:
            return this.parseObj(!1, t);
        case w._function:
            return e = this.startNode(),
            this.next(),
            this.parseFunction(e, !1);
        case w._class:
            return this.parseClass(this.startNode(), !1);
        case w._new:
            return this.parseNew();
        case w.backQuote:
            return this.parseTemplate();
        default:
            this.unexpected()
        }
    },
    X.parseLiteral = function(t) {
        var e = this.startNode();
        return e.value = t,
        e.raw = this.input.slice(this.start, this.end),
        this.next(),
        this.finishNode(e, "Literal")
    },
    X.parseParenExpression = function() {
        this.expect(w.parenL);
        var t = this.parseExpression();
        return this.expect(w.parenR),
        t
    },
    X.parseParenAndDistinguishExpression = function(t) {
        var e, r = this.start,
        n = this.startLoc,
        i = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
            this.next();
            var a, s = this.start,
            o = this.startLoc,
            c = [],
            u = !0,
            p = !1,
            l = new q,
            h = this.yieldPos,
            f = this.awaitPos;
            for (this.yieldPos = 0, this.awaitPos = 0; this.type !== w.parenR;) {
                if (u ? u = !1 : this.expect(w.comma), i && this.afterTrailingComma(w.parenR, !0)) {
                    p = !0;
                    break
                }
                if (this.type === w.ellipsis) {
                    a = this.start,
                    c.push(this.parseParenItem(this.parseRestBinding())),
                    this.type === w.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                    break
                }
                c.push(this.parseMaybeAssign(!1, l, this.parseParenItem))
            }
            var d = this.start,
            m = this.startLoc;
            if (this.expect(w.parenR), t && !this.canInsertSemicolon() && this.eat(w.arrow)) return this.checkPatternErrors(l, !1),
            this.checkYieldAwaitInDefaultParams(),
            this.yieldPos = h,
            this.awaitPos = f,
            this.parseParenArrowList(r, n, c);
            c.length && !p || this.unexpected(this.lastTokStart),
            a && this.unexpected(a),
            this.checkExpressionErrors(l, !0),
            this.yieldPos = h || this.yieldPos,
            this.awaitPos = f || this.awaitPos,
            c.length > 1 ? ((e = this.startNodeAt(s, o)).expressions = c, this.finishNodeAt(e, "SequenceExpression", d, m)) : e = c[0]
        } else e = this.parseParenExpression();
        if (this.options.preserveParens) {
            var v = this.startNodeAt(r, n);
            return v.expression = e,
            this.finishNode(v, "ParenthesizedExpression")
        }
        return e
    },
    X.parseParenItem = function(t) {
        return t
    },
    X.parseParenArrowList = function(t, e, r) {
        return this.parseArrowExpression(this.startNodeAt(t, e), r)
    };
    var $ = [];
    X.parseNew = function() {
        var t = this.startNode(),
        e = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(w.dot)) {
            t.meta = e;
            var r = this.containsEsc;
            return t.property = this.parseIdent(!0),
            ("target" !== t.property.name || r) && this.raiseRecoverable(t.property.start, "The only valid meta property for new is new.target"),
            this.inFunction || this.raiseRecoverable(t.start, "new.target can only be used in functions"),
            this.finishNode(t, "MetaProperty")
        }
        var n = this.start,
        i = this.startLoc;
        return t.callee = this.parseSubscripts(this.parseExprAtom(), n, i, !0),
        this.eat(w.parenL) ? t.arguments = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = $,
        this.finishNode(t, "NewExpression")
    },
    X.parseTemplateElement = function(t) {
        var e = t.isTagged,
        r = this.startNode();
        return this.type === w.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
            raw: this.value,
            cooked: null
        }) : r.value = {
            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
            cooked: this.value
        },
        this.next(),
        r.tail = this.type === w.backQuote,
        this.finishNode(r, "TemplateElement")
    },
    X.parseTemplate = function(t) {
        void 0 === t && (t = {});
        var e = t.isTagged;
        void 0 === e && (e = !1);
        var r = this.startNode();
        this.next(),
        r.expressions = [];
        var n = this.parseTemplateElement({
            isTagged: e
        });
        for (r.quasis = [n]; ! n.tail;) this.expect(w.dollarBraceL),
        r.expressions.push(this.parseExpression()),
        this.expect(w.braceR),
        r.quasis.push(n = this.parseTemplateElement({
            isTagged: e
        }));
        return this.next(),
        this.finishNode(r, "TemplateLiteral")
    },
    X.isAsyncProp = function(t) {
        return ! t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === w.name || this.type === w.num || this.type === w.string || this.type === w.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === w.star) && !k.test(this.input.slice(this.lastTokEnd, this.start))
    },
    X.parseObj = function(t, e) {
        var r = this.startNode(),
        n = !0,
        i = {};
        for (r.properties = [], this.next(); ! this.eat(w.braceR);) {
            if (n) n = !1;
            else if (this.expect(w.comma), this.afterTrailingComma(w.braceR)) break;
            var a = this.parseProperty(t, e);
            t || this.checkPropClash(a, i, e),
            r.properties.push(a)
        }
        return this.finishNode(r, t ? "ObjectPattern": "ObjectExpression")
    },
    X.parseProperty = function(t, e) {
        var r, n, i, a, s = this.startNode();
        if (this.options.ecmaVersion >= 9 && this.eat(w.ellipsis)) return t ? (s.argument = this.parseIdent(!1), this.type === w.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(s, "RestElement")) : (this.type === w.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), s.argument = this.parseMaybeAssign(!1, e), this.type === w.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(s, "SpreadElement"));
        this.options.ecmaVersion >= 6 && (s.method = !1, s.shorthand = !1, (t || e) && (i = this.start, a = this.startLoc), t || (r = this.eat(w.star)));
        var o = this.containsEsc;
        return this.parsePropertyName(s),
        !t && !o && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(s) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(w.star), this.parsePropertyName(s, e)) : n = !1,
        this.parsePropertyValue(s, t, r, n, i, a, e, o),
        this.finishNode(s, "Property")
    },
    X.parsePropertyValue = function(t, e, r, n, i, a, s, o) {
        if ((r || n) && this.type === w.colon && this.unexpected(), this.eat(w.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, s),
        t.kind = "init";
        else if (this.options.ecmaVersion >= 6 && this.type === w.parenL) e && this.unexpected(),
        t.kind = "init",
        t.method = !0,
        t.value = this.parseMethod(r, n);
        else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === w.comma || this.type === w.braceR) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? (this.checkUnreserved(t.key), t.kind = "init", e ? t.value = this.parseMaybeDefault(i, a, t.key) : this.type === w.eq && s ? (s.shorthandAssign < 0 && (s.shorthandAssign = this.start), t.value = this.parseMaybeDefault(i, a, t.key)) : t.value = t.key, t.shorthand = !0) : this.unexpected();
        else { (r || n) && this.unexpected(),
            t.kind = t.key.name,
            this.parsePropertyName(t),
            t.value = this.parseMethod(!1);
            var c = "get" === t.kind ? 0 : 1;
            if (t.value.params.length !== c) {
                var u = t.value.start;
                "get" === t.kind ? this.raiseRecoverable(u, "getter should have no params") : this.raiseRecoverable(u, "setter should have exactly one param")
            } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
        }
    },
    X.parsePropertyName = function(t) {
        if (this.options.ecmaVersion >= 6) {
            if (this.eat(w.bracketL)) return t.computed = !0,
            t.key = this.parseMaybeAssign(),
            this.expect(w.bracketR),
            t.key;
            t.computed = !1
        }
        return t.key = this.type === w.num || this.type === w.string ? this.parseExprAtom() : this.parseIdent(!0)
    },
    X.initFunction = function(t) {
        t.id = null,
        this.options.ecmaVersion >= 6 && (t.generator = !1, t.expression = !1),
        this.options.ecmaVersion >= 8 && (t.async = !1)
    },
    X.parseMethod = function(t, e) {
        var r = this.startNode(),
        n = this.inGenerator,
        i = this.inAsync,
        a = this.yieldPos,
        s = this.awaitPos,
        o = this.inFunction;
        return this.initFunction(r),
        this.options.ecmaVersion >= 6 && (r.generator = t),
        this.options.ecmaVersion >= 8 && (r.async = !!e),
        this.inGenerator = r.generator,
        this.inAsync = r.async,
        this.yieldPos = 0,
        this.awaitPos = 0,
        this.inFunction = !0,
        this.enterFunctionScope(),
        this.expect(w.parenL),
        r.params = this.parseBindingList(w.parenR, !1, this.options.ecmaVersion >= 8),
        this.checkYieldAwaitInDefaultParams(),
        this.parseFunctionBody(r, !1),
        this.inGenerator = n,
        this.inAsync = i,
        this.yieldPos = a,
        this.awaitPos = s,
        this.inFunction = o,
        this.finishNode(r, "FunctionExpression")
    },
    X.parseArrowExpression = function(t, e, r) {
        var n = this.inGenerator,
        i = this.inAsync,
        a = this.yieldPos,
        s = this.awaitPos,
        o = this.inFunction;
        return this.enterFunctionScope(),
        this.initFunction(t),
        this.options.ecmaVersion >= 8 && (t.async = !!r),
        this.inGenerator = !1,
        this.inAsync = t.async,
        this.yieldPos = 0,
        this.awaitPos = 0,
        this.inFunction = !0,
        t.params = this.toAssignableList(e, !0),
        this.parseFunctionBody(t, !0),
        this.inGenerator = n,
        this.inAsync = i,
        this.yieldPos = a,
        this.awaitPos = s,
        this.inFunction = o,
        this.finishNode(t, "ArrowFunctionExpression")
    },
    X.parseFunctionBody = function(t, e) {
        var r = e && this.type !== w.braceL,
        n = this.strict,
        i = !1;
        if (r) t.body = this.parseMaybeAssign(),
        t.expression = !0,
        this.checkParams(t, !1);
        else {
            var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
            n && !a || (i = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
            var s = this.labels;
            this.labels = [],
            i && (this.strict = !0),
            this.checkParams(t, !n && !i && !e && this.isSimpleParamList(t.params)),
            t.body = this.parseBlock(!1),
            t.expression = !1,
            this.adaptDirectivePrologue(t.body.body),
            this.labels = s
        }
        this.exitFunctionScope(),
        this.strict && t.id && this.checkLVal(t.id, "none"),
        this.strict = n
    },
    X.isSimpleParamList = function(t) {
        for (var e = 0,
        r = t; e < r.length; e += 1) {
            if ("Identifier" !== r[e].type) return ! 1
        }
        return ! 0
    },
    X.checkParams = function(t, e) {
        for (var r = {},
        n = 0,
        i = t.params; n < i.length; n += 1) {
            var a = i[n];
            this.checkLVal(a, "var", e ? null: r)
        }
    },
    X.parseExprList = function(t, e, r, n) {
        for (var i = [], a = !0; ! this.eat(t);) {
            if (a) a = !1;
            else if (this.expect(w.comma), e && this.afterTrailingComma(t)) break;
            var s = void 0;
            r && this.type === w.comma ? s = null: this.type === w.ellipsis ? (s = this.parseSpread(n), n && this.type === w.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : s = this.parseMaybeAssign(!1, n),
            i.push(s)
        }
        return i
    },
    X.checkUnreserved = function(t) {
        var e = t.start,
        r = t.end,
        n = t.name; (this.inGenerator && "yield" === n && this.raiseRecoverable(e, "Can not use 'yield' as identifier inside a generator"), this.inAsync && "await" === n && this.raiseRecoverable(e, "Can not use 'await' as identifier inside an async function"), this.isKeyword(n) && this.raise(e, "Unexpected keyword '" + n + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, r).indexOf("\\")) || (this.strict ? this.reservedWordsStrict: this.reservedWords).test(n) && (this.inAsync || "await" !== n || this.raiseRecoverable(e, "Can not use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + n + "' is reserved"))
    },
    X.parseIdent = function(t, e) {
        var r = this.startNode();
        return t && "never" === this.options.allowReserved && (t = !1),
        this.type === w.name ? r.name = this.value: this.type.keyword ? (r.name = this.type.keyword, "class" !== r.name && "function" !== r.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(),
        this.next(),
        this.finishNode(r, "Identifier"),
        t || this.checkUnreserved(r),
        r
    },
    X.parseYield = function() {
        this.yieldPos || (this.yieldPos = this.start);
        var t = this.startNode();
        return this.next(),
        this.type === w.semi || this.canInsertSemicolon() || this.type !== w.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(w.star), t.argument = this.parseMaybeAssign()),
        this.finishNode(t, "YieldExpression")
    },
    X.parseAwait = function() {
        this.awaitPos || (this.awaitPos = this.start);
        var t = this.startNode();
        return this.next(),
        t.argument = this.parseMaybeUnary(null, !0),
        this.finishNode(t, "AwaitExpression")
    };
    var Z = H.prototype;
    Z.raise = function(t, e) {
        var r = M(this.input, t);
        e += " (" + r.line + ":" + r.column + ")";
        var n = new SyntaxError(e);
        throw n.pos = t,
        n.loc = r,
        n.raisedAt = this.pos,
        n
    },
    Z.raiseRecoverable = Z.raise,
    Z.curPosition = function() {
        if (this.options.locations) return new N(this.curLine, this.pos - this.lineStart)
    };
    var Y = H.prototype,
    J = Object.assign ||
    function(t) {
        for (var e = [], r = arguments.length - 1; r-->0;) e[r] = arguments[r + 1];
        for (var n = 0,
        i = e; n < i.length; n += 1) {
            var a = i[n];
            for (var s in a) L(a, s) && (t[s] = a[s])
        }
        return t
    };
    Y.enterFunctionScope = function() {
        this.scopeStack.push({
            var: {},
            lexical: {},
            childVar: {},
            parentLexical: {}
        })
    },
    Y.exitFunctionScope = function() {
        this.scopeStack.pop()
    },
    Y.enterLexicalScope = function() {
        var t = this.scopeStack[this.scopeStack.length - 1],
        e = {
            var: {},
            lexical: {},
            childVar: {},
            parentLexical: {}
        };
        this.scopeStack.push(e),
        J(e.parentLexical, t.lexical, t.parentLexical)
    },
    Y.exitLexicalScope = function() {
        var t = this.scopeStack.pop(),
        e = this.scopeStack[this.scopeStack.length - 1];
        J(e.childVar, t.
        var, t.childVar)
    }, Y.canDeclareVarName = function(t) {
        var e = this.scopeStack[this.scopeStack.length - 1];
        return ! L(e.lexical, t) && !L(e.parentLexical, t)
    },
    Y.canDeclareLexicalName = function(t) {
        var e = this.scopeStack[this.scopeStack.length - 1];
        return ! L(e.lexical, t) && !L(e.
        var, t) && !L(e.childVar, t)
    },
    Y.declareVarName = function(t) {
        this.scopeStack[this.scopeStack.length - 1].
        var [t] = !0
    },
    Y.declareLexicalName = function(t) {
        this.scopeStack[this.scopeStack.length - 1].lexical[t] = !0
    };
    var tt = function(t, e, r) {
        this.type = "",
        this.start = e,
        this.end = 0,
        t.options.locations && (this.loc = new T(t, r)),
        t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile),
        t.options.ranges && (this.range = [e, 0])
    },
    et = H.prototype;
    function rt(t, e, r, n) {
        return t.type = e,
        t.end = r,
        this.options.locations && (t.loc.end = n),
        this.options.ranges && (t.range[1] = r),
        t
    }
    et.startNode = function() {
        return new tt(this, this.start, this.startLoc)
    },
    et.startNodeAt = function(t, e) {
        return new tt(this, t, e)
    },
    et.finishNode = function(t, e) {
        return rt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
    },
    et.finishNodeAt = function(t, e, r, n) {
        return rt.call(this, t, e, r, n)
    };
    var nt = function(t, e, r, n, i) {
        this.token = t,
        this.isExpr = !!e,
        this.preserveSpace = !!r,
        this.override = n,
        this.generator = !!i
    },
    it = {
        b_stat: new nt("{", !1),
        b_expr: new nt("{", !0),
        b_tmpl: new nt("${", !1),
        p_stat: new nt("(", !1),
        p_expr: new nt("(", !0),
        q_tmpl: new nt("`", !0, !0,
        function(t) {
            return t.tryReadTemplateToken()
        }),
        f_stat: new nt("function", !1),
        f_expr: new nt("function", !0),
        f_expr_gen: new nt("function", !0, !1, null, !0),
        f_gen: new nt("function", !1, !1, null, !0)
    },
    at = H.prototype;
    at.initialContext = function() {
        return [it.b_stat]
    },
    at.braceIsBlock = function(t) {
        var e = this.curContext();
        return e === it.f_expr || e === it.f_stat || (t !== w.colon || e !== it.b_stat && e !== it.b_expr ? t === w._return || t === w.name && this.exprAllowed ? k.test(this.input.slice(this.lastTokEnd, this.start)) : t === w._else || t === w.semi || t === w.eof || t === w.parenR || t === w.arrow || (t === w.braceL ? e === it.b_stat: t !== w._var && t !== w.name && !this.exprAllowed) : !e.isExpr)
    },
    at.inGeneratorContext = function() {
        for (var t = this.context.length - 1; t >= 1; t--) {
            var e = this.context[t];
            if ("function" === e.token) return e.generator
        }
        return ! 1
    },
    at.updateContext = function(t) {
        var e, r = this.type;
        r.keyword && t === w.dot ? this.exprAllowed = !1 : (e = r.updateContext) ? e.call(this, t) : this.exprAllowed = r.beforeExpr
    },
    w.parenR.updateContext = w.braceR.updateContext = function() {
        if (1 !== this.context.length) {
            var t = this.context.pop();
            t === it.b_stat && "function" === this.curContext().token && (t = this.context.pop()),
            this.exprAllowed = !t.isExpr
        } else this.exprAllowed = !0
    },
    w.braceL.updateContext = function(t) {
        this.context.push(this.braceIsBlock(t) ? it.b_stat: it.b_expr),
        this.exprAllowed = !0
    },
    w.dollarBraceL.updateContext = function() {
        this.context.push(it.b_tmpl),
        this.exprAllowed = !0
    },
    w.parenL.updateContext = function(t) {
        var e = t === w._if || t === w._for || t === w._with || t === w._while;
        this.context.push(e ? it.p_stat: it.p_expr),
        this.exprAllowed = !0
    },
    w.incDec.updateContext = function() {},
    w._function.updateContext = w._class.updateContext = function(t) {
        t.beforeExpr && t !== w.semi && t !== w._else && (t !== w.colon && t !== w.braceL || this.curContext() !== it.b_stat) ? this.context.push(it.f_expr) : this.context.push(it.f_stat),
        this.exprAllowed = !1
    },
    w.backQuote.updateContext = function() {
        this.curContext() === it.q_tmpl ? this.context.pop() : this.context.push(it.q_tmpl),
        this.exprAllowed = !1
    },
    w.star.updateContext = function(t) {
        if (t === w._function) {
            var e = this.context.length - 1;
            this.context[e] === it.f_expr ? this.context[e] = it.f_expr_gen: this.context[e] = it.f_gen
        }
        this.exprAllowed = !0
    },
    w.name.updateContext = function(t) {
        var e = !1;
        this.options.ecmaVersion >= 6 && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0),
        this.exprAllowed = e
    };
    var st = {
        $LONE: ["ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased", "CWL", "Changes_When_NFKC_Casefolded", "CWKCF", "Changes_When_Titlecased", "CWT", "Changes_When_Uppercased", "CWU", "Dash", "Default_Ignorable_Code_Point", "DI", "Deprecated", "Dep", "Diacritic", "Dia", "Emoji", "Emoji_Component", "Emoji_Modifier", "Emoji_Modifier_Base", "Emoji_Presentation", "Extender", "Ext", "Grapheme_Base", "Gr_Base", "Grapheme_Extend", "Gr_Ext", "Hex_Digit", "Hex", "IDS_Binary_Operator", "IDSB", "IDS_Trinary_Operator", "IDST", "ID_Continue", "IDC", "ID_Start", "IDS", "Ideographic", "Ideo", "Join_Control", "Join_C", "Logical_Order_Exception", "LOE", "Lowercase", "Lower", "Math", "Noncharacter_Code_Point", "NChar", "Pattern_Syntax", "Pat_Syn", "Pattern_White_Space", "Pat_WS", "Quotation_Mark", "QMark", "Radical", "Regional_Indicator", "RI", "Sentence_Terminal", "STerm", "Soft_Dotted", "SD", "Terminal_Punctuation", "Term", "Unified_Ideograph", "UIdeo", "Uppercase", "Upper", "Variation_Selector", "VS", "White_Space", "space", "XID_Continue", "XIDC", "XID_Start", "XIDS"],
        General_Category: ["Cased_Letter", "LC", "Close_Punctuation", "Pe", "Connector_Punctuation", "Pc", "Control", "Cc", "cntrl", "Currency_Symbol", "Sc", "Dash_Punctuation", "Pd", "Decimal_Number", "Nd", "digit", "Enclosing_Mark", "Me", "Final_Punctuation", "Pf", "Format", "Cf", "Initial_Punctuation", "Pi", "Letter", "L", "Letter_Number", "Nl", "Line_Separator", "Zl", "Lowercase_Letter", "Ll", "Mark", "M", "Combining_Mark", "Math_Symbol", "Sm", "Modifier_Letter", "Lm", "Modifier_Symbol", "Sk", "Nonspacing_Mark", "Mn", "Number", "N", "Open_Punctuation", "Ps", "Other", "C", "Other_Letter", "Lo", "Other_Number", "No", "Other_Punctuation", "Po", "Other_Symbol", "So", "Paragraph_Separator", "Zp", "Private_Use", "Co", "Punctuation", "P", "punct", "Separator", "Z", "Space_Separator", "Zs", "Spacing_Mark", "Mc", "Surrogate", "Cs", "Symbol", "S", "Titlecase_Letter", "Lt", "Unassigned", "Cn", "Uppercase_Letter", "Lu"],
        Script: ["Adlam", "Adlm", "Ahom", "Anatolian_Hieroglyphs", "Hluw", "Arabic", "Arab", "Armenian", "Armn", "Avestan", "Avst", "Balinese", "Bali", "Bamum", "Bamu", "Bassa_Vah", "Bass", "Batak", "Batk", "Bengali", "Beng", "Bhaiksuki", "Bhks", "Bopomofo", "Bopo", "Brahmi", "Brah", "Braille", "Brai", "Buginese", "Bugi", "Buhid", "Buhd", "Canadian_Aboriginal", "Cans", "Carian", "Cari", "Caucasian_Albanian", "Aghb", "Chakma", "Cakm", "Cham", "Cherokee", "Cher", "Common", "Zyyy", "Coptic", "Copt", "Qaac", "Cuneiform", "Xsux", "Cypriot", "Cprt", "Cyrillic", "Cyrl", "Deseret", "Dsrt", "Devanagari", "Deva", "Duployan", "Dupl", "Egyptian_Hieroglyphs", "Egyp", "Elbasan", "Elba", "Ethiopic", "Ethi", "Georgian", "Geor", "Glagolitic", "Glag", "Gothic", "Goth", "Grantha", "Gran", "Greek", "Grek", "Gujarati", "Gujr", "Gurmukhi", "Guru", "Han", "Hani", "Hangul", "Hang", "Hanunoo", "Hano", "Hatran", "Hatr", "Hebrew", "Hebr", "Hiragana", "Hira", "Imperial_Aramaic", "Armi", "Inherited", "Zinh", "Qaai", "Inscriptional_Pahlavi", "Phli", "Inscriptional_Parthian", "Prti", "Javanese", "Java", "Kaithi", "Kthi", "Kannada", "Knda", "Katakana", "Kana", "Kayah_Li", "Kali", "Kharoshthi", "Khar", "Khmer", "Khmr", "Khojki", "Khoj", "Khudawadi", "Sind", "Lao", "Laoo", "Latin", "Latn", "Lepcha", "Lepc", "Limbu", "Limb", "Linear_A", "Lina", "Linear_B", "Linb", "Lisu", "Lycian", "Lyci", "Lydian", "Lydi", "Mahajani", "Mahj", "Malayalam", "Mlym", "Mandaic", "Mand", "Manichaean", "Mani", "Marchen", "Marc", "Masaram_Gondi", "Gonm", "Meetei_Mayek", "Mtei", "Mende_Kikakui", "Mend", "Meroitic_Cursive", "Merc", "Meroitic_Hieroglyphs", "Mero", "Miao", "Plrd", "Modi", "Mongolian", "Mong", "Mro", "Mroo", "Multani", "Mult", "Myanmar", "Mymr", "Nabataean", "Nbat", "New_Tai_Lue", "Talu", "Newa", "Nko", "Nkoo", "Nushu", "Nshu", "Ogham", "Ogam", "Ol_Chiki", "Olck", "Old_Hungarian", "Hung", "Old_Italic", "Ital", "Old_North_Arabian", "Narb", "Old_Permic", "Perm", "Old_Persian", "Xpeo", "Old_South_Arabian", "Sarb", "Old_Turkic", "Orkh", "Oriya", "Orya", "Osage", "Osge", "Osmanya", "Osma", "Pahawh_Hmong", "Hmng", "Palmyrene", "Palm", "Pau_Cin_Hau", "Pauc", "Phags_Pa", "Phag", "Phoenician", "Phnx", "Psalter_Pahlavi", "Phlp", "Rejang", "Rjng", "Runic", "Runr", "Samaritan", "Samr", "Saurashtra", "Saur", "Sharada", "Shrd", "Shavian", "Shaw", "Siddham", "Sidd", "SignWriting", "Sgnw", "Sinhala", "Sinh", "Sora_Sompeng", "Sora", "Soyombo", "Soyo", "Sundanese", "Sund", "Syloti_Nagri", "Sylo", "Syriac", "Syrc", "Tagalog", "Tglg", "Tagbanwa", "Tagb", "Tai_Le", "Tale", "Tai_Tham", "Lana", "Tai_Viet", "Tavt", "Takri", "Takr", "Tamil", "Taml", "Tangut", "Tang", "Telugu", "Telu", "Thaana", "Thaa", "Thai", "Tibetan", "Tibt", "Tifinagh", "Tfng", "Tirhuta", "Tirh", "Ugaritic", "Ugar", "Vai", "Vaii", "Warang_Citi", "Wara", "Yi", "Yiii", "Zanabazar_Square", "Zanb"]
    };
    Array.prototype.push.apply(st.$LONE, st.General_Category),
    st.gc = st.General_Category,
    st.sc = st.Script_Extensions = st.scx = st.Script;
    var ot = H.prototype,
    ct = function(t) {
        this.parser = t,
        this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy": "") + (t.options.ecmaVersion >= 9 ? "s": ""),
        this.source = "",
        this.flags = "",
        this.start = 0,
        this.switchU = !1,
        this.switchN = !1,
        this.pos = 0,
        this.lastIntValue = 0,
        this.lastStringValue = "",
        this.lastAssertionIsQuantifiable = !1,
        this.numCapturingParens = 0,
        this.maxBackReference = 0,
        this.groupNames = [],
        this.backReferenceNames = []
    };
    function ut(t) {
        return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
    }
    function pt(t) {
        return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
    }
    function lt(t) {
        return t >= 65 && t <= 90 || t >= 97 && t <= 122
    }
    function ht(t) {
        return lt(t) || 95 === t
    }
    function ft(t) {
        return ht(t) || dt(t)
    }
    function dt(t) {
        return t >= 48 && t <= 57
    }
    function mt(t) {
        return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
    }
    function vt(t) {
        return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48
    }
    function gt(t) {
        return t >= 48 && t <= 55
    }
    ct.prototype.reset = function(t, e, r) {
        var n = -1 !== r.indexOf("u");
        this.start = 0 | t,
        this.source = e + "",
        this.flags = r,
        this.switchU = n && this.parser.options.ecmaVersion >= 6,
        this.switchN = n && this.parser.options.ecmaVersion >= 9
    },
    ct.prototype.raise = function(t) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
    },
    ct.prototype.at = function(t) {
        var e = this.source,
        r = e.length;
        if (t >= r) return - 1;
        var n = e.charCodeAt(t);
        return ! this.switchU || n <= 55295 || n >= 57344 || t + 1 >= r ? n: (n << 10) + e.charCodeAt(t + 1) - 56613888
    },
    ct.prototype.nextIndex = function(t) {
        var e = this.source,
        r = e.length;
        if (t >= r) return r;
        var n = e.charCodeAt(t);
        return ! this.switchU || n <= 55295 || n >= 57344 || t + 1 >= r ? t + 1 : t + 2
    },
    ct.prototype.current = function() {
        return this.at(this.pos)
    },
    ct.prototype.lookahead = function() {
        return this.at(this.nextIndex(this.pos))
    },
    ct.prototype.advance = function() {
        this.pos = this.nextIndex(this.pos)
    },
    ct.prototype.eat = function(t) {
        return this.current() === t && (this.advance(), !0)
    },
    ot.validateRegExpFlags = function(t) {
        for (var e = t.validFlags,
        r = t.flags,
        n = 0; n < r.length; n++) {
            var i = r.charAt(n); - 1 === e.indexOf(i) && this.raise(t.start, "Invalid regular expression flag"),
            r.indexOf(i, n + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag")
        }
    },
    ot.validateRegExpPattern = function(t) {
        this.regexp_pattern(t),
        !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t))
    },
    ot.regexp_pattern = function(t) {
        t.pos = 0,
        t.lastIntValue = 0,
        t.lastStringValue = "",
        t.lastAssertionIsQuantifiable = !1,
        t.numCapturingParens = 0,
        t.maxBackReference = 0,
        t.groupNames.length = 0,
        t.backReferenceNames.length = 0,
        this.regexp_disjunction(t),
        t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")),
        t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
        for (var e = 0,
        r = t.backReferenceNames; e < r.length; e += 1) {
            var n = r[e]; - 1 === t.groupNames.indexOf(n) && t.raise("Invalid named capture referenced")
        }
    },
    ot.regexp_disjunction = function(t) {
        for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
        this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"),
        t.eat(123) && t.raise("Lone quantifier brackets")
    },
    ot.regexp_alternative = function(t) {
        for (; t.pos < t.source.length && this.regexp_eatTerm(t););
    },
    ot.regexp_eatTerm = function(t) {
        return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : !(t.switchU ? !this.regexp_eatAtom(t) : !this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
    },
    ot.regexp_eatAssertion = function(t) {
        var e = t.pos;
        if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return ! 0;
        if (t.eat(92)) {
            if (t.eat(66) || t.eat(98)) return ! 0;
            t.pos = e
        }
        if (t.eat(40) && t.eat(63)) {
            var r = !1;
            if (this.options.ecmaVersion >= 9 && (r = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t),
            t.eat(41) || t.raise("Unterminated group"),
            t.lastAssertionIsQuantifiable = !r,
            !0
        }
        return t.pos = e,
        !1
    },
    ot.regexp_eatQuantifier = function(t, e) {
        return void 0 === e && (e = !1),
        !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
    },
    ot.regexp_eatQuantifierPrefix = function(t, e) {
        return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
    },
    ot.regexp_eatBracedQuantifier = function(t, e) {
        var r = t.pos;
        if (t.eat(123)) {
            var n = 0,
            i = -1;
            if (this.regexp_eatDecimalDigits(t) && (n = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (i = t.lastIntValue), t.eat(125))) return - 1 !== i && i < n && !e && t.raise("numbers out of order in {} quantifier"),
            !0;
            t.switchU && !e && t.raise("Incomplete quantifier"),
            t.pos = r
        }
        return ! 1
    },
    ot.regexp_eatAtom = function(t) {
        return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
    },
    ot.regexp_eatReverseSolidusAtomEscape = function(t) {
        var e = t.pos;
        if (t.eat(92)) {
            if (this.regexp_eatAtomEscape(t)) return ! 0;
            t.pos = e
        }
        return ! 1
    },
    ot.regexp_eatUncapturingGroup = function(t) {
        var e = t.pos;
        if (t.eat(40)) {
            if (t.eat(63) && t.eat(58)) {
                if (this.regexp_disjunction(t), t.eat(41)) return ! 0;
                t.raise("Unterminated group")
            }
            t.pos = e
        }
        return ! 1
    },
    ot.regexp_eatCapturingGroup = function(t) {
        if (t.eat(40)) {
            if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1,
            !0;
            t.raise("Unterminated group")
        }
        return ! 1
    },
    ot.regexp_eatExtendedAtom = function(t) {
        return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
    },
    ot.regexp_eatInvalidBracedQuantifier = function(t) {
        return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"),
        !1
    },
    ot.regexp_eatSyntaxCharacter = function(t) {
        var e = t.current();
        return !! pt(e) && (t.lastIntValue = e, t.advance(), !0)
    },
    ot.regexp_eatPatternCharacters = function(t) {
        for (var e = t.pos,
        r = 0; - 1 !== (r = t.current()) && !pt(r);) t.advance();
        return t.pos !== e
    },
    ot.regexp_eatExtendedPatternCharacter = function(t) {
        var e = t.current();
        return ! ( - 1 === e || 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || 91 === e || 94 === e || 124 === e) && (t.advance(), !0)
    },
    ot.regexp_groupSpecifier = function(t) {
        if (t.eat(63)) {
            if (this.regexp_eatGroupName(t)) return - 1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"),
            void t.groupNames.push(t.lastStringValue);
            t.raise("Invalid group")
        }
    },
    ot.regexp_eatGroupName = function(t) {
        if (t.lastStringValue = "", t.eat(60)) {
            if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return ! 0;
            t.raise("Invalid capture group name")
        }
        return ! 1
    },
    ot.regexp_eatRegExpIdentifierName = function(t) {
        if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
            for (t.lastStringValue += ut(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += ut(t.lastIntValue);
            return ! 0
        }
        return ! 1
    },
    ot.regexp_eatRegExpIdentifierStart = function(t) {
        var e = t.pos,
        r = t.current();
        return t.advance(),
        92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t) && (r = t.lastIntValue),
        function(t) {
            return d(t, !0) || 36 === t || 95 === t
        } (r) ? (t.lastIntValue = r, !0) : (t.pos = e, !1)
    },
    ot.regexp_eatRegExpIdentifierPart = function(t) {
        var e = t.pos,
        r = t.current();
        return t.advance(),
        92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t) && (r = t.lastIntValue),
        function(t) {
            return m(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
        } (r) ? (t.lastIntValue = r, !0) : (t.pos = e, !1)
    },
    ot.regexp_eatAtomEscape = function(t) {
        return !! (this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
    },
    ot.regexp_eatBackReference = function(t) {
        var e = t.pos;
        if (this.regexp_eatDecimalEscape(t)) {
            var r = t.lastIntValue;
            if (t.switchU) return r > t.maxBackReference && (t.maxBackReference = r),
            !0;
            if (r <= t.numCapturingParens) return ! 0;
            t.pos = e
        }
        return ! 1
    },
    ot.regexp_eatKGroupName = function(t) {
        if (t.eat(107)) {
            if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue),
            !0;
            t.raise("Invalid named reference")
        }
        return ! 1
    },
    ot.regexp_eatCharacterEscape = function(t) {
        return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
    },
    ot.regexp_eatCControlLetter = function(t) {
        var e = t.pos;
        if (t.eat(99)) {
            if (this.regexp_eatControlLetter(t)) return ! 0;
            t.pos = e
        }
        return ! 1
    },
    ot.regexp_eatZero = function(t) {
        return 48 === t.current() && !dt(t.lookahead()) && (t.lastIntValue = 0, t.advance(), !0)
    },
    ot.regexp_eatControlEscape = function(t) {
        var e = t.current();
        return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
    },
    ot.regexp_eatControlLetter = function(t) {
        var e = t.current();
        return !! lt(e) && (t.lastIntValue = e % 32, t.advance(), !0)
    },
    ot.regexp_eatRegExpUnicodeEscapeSequence = function(t) {
        var e = t.pos;
        if (t.eat(117)) {
            if (this.regexp_eatFixedHexDigits(t, 4)) {
                var r = t.lastIntValue;
                if (t.switchU && r >= 55296 && r <= 56319) {
                    var n = t.pos;
                    if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                        var i = t.lastIntValue;
                        if (i >= 56320 && i <= 57343) return t.lastIntValue = 1024 * (r - 55296) + (i - 56320) + 65536,
                        !0
                    }
                    t.pos = n,
                    t.lastIntValue = r
                }
                return ! 0
            }
            if (t.switchU && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) &&
            function(t) {
                return t >= 0 && t <= 1114111
            } (t.lastIntValue)) return ! 0;
            t.switchU && t.raise("Invalid unicode escape"),
            t.pos = e
        }
        return ! 1
    },
    ot.regexp_eatIdentityEscape = function(t) {
        if (t.switchU) return !! this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
        var e = t.current();
        return ! (99 === e || t.switchN && 107 === e) && (t.lastIntValue = e, t.advance(), !0)
    },
    ot.regexp_eatDecimalEscape = function(t) {
        t.lastIntValue = 0;
        var e = t.current();
        if (e >= 49 && e <= 57) {
            do {
                t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance()
            } while (( e = t . current ()) >= 48 && e <= 57);
            return ! 0
        }
        return ! 1
    },
    ot.regexp_eatCharacterClassEscape = function(t) {
        var e = t.current();
        if (function(t) {
            return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t
        } (e)) return t.lastIntValue = -1,
        t.advance(),
        !0;
        if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
            if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return ! 0;
            t.raise("Invalid property name")
        }
        return ! 1
    },
    ot.regexp_eatUnicodePropertyValueExpression = function(t) {
        var e = t.pos;
        if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
            var r = t.lastStringValue;
            if (this.regexp_eatUnicodePropertyValue(t)) {
                var n = t.lastStringValue;
                return this.regexp_validateUnicodePropertyNameAndValue(t, r, n),
                !0
            }
        }
        if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
            var i = t.lastStringValue;
            return this.regexp_validateUnicodePropertyNameOrValue(t, i),
            !0
        }
        return ! 1
    },
    ot.regexp_validateUnicodePropertyNameAndValue = function(t, e, r) {
        st.hasOwnProperty(e) && -1 !== st[e].indexOf(r) || t.raise("Invalid property name")
    },
    ot.regexp_validateUnicodePropertyNameOrValue = function(t, e) { - 1 === st.$LONE.indexOf(e) && t.raise("Invalid property name")
    },
    ot.regexp_eatUnicodePropertyName = function(t) {
        var e = 0;
        for (t.lastStringValue = ""; ht(e = t.current());) t.lastStringValue += ut(e),
        t.advance();
        return "" !== t.lastStringValue
    },
    ot.regexp_eatUnicodePropertyValue = function(t) {
        var e = 0;
        for (t.lastStringValue = ""; ft(e = t.current());) t.lastStringValue += ut(e),
        t.advance();
        return "" !== t.lastStringValue
    },
    ot.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
        return this.regexp_eatUnicodePropertyValue(t)
    },
    ot.regexp_eatCharacterClass = function(t) {
        if (t.eat(91)) {
            if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return ! 0;
            t.raise("Unterminated character class")
        }
        return ! 1
    },
    ot.regexp_classRanges = function(t) {
        for (; this.regexp_eatClassAtom(t);) {
            var e = t.lastIntValue;
            if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                var r = t.lastIntValue; ! t.switchU || -1 !== e && -1 !== r || t.raise("Invalid character class"),
                -1 !== e && -1 !== r && e > r && t.raise("Range out of order in character class")
            }
        }
    },
    ot.regexp_eatClassAtom = function(t) {
        var e = t.pos;
        if (t.eat(92)) {
            if (this.regexp_eatClassEscape(t)) return ! 0;
            if (t.switchU) {
                var r = t.current(); (99 === r || gt(r)) && t.raise("Invalid class escape"),
                t.raise("Invalid escape")
            }
            t.pos = e
        }
        var n = t.current();
        return 93 !== n && (t.lastIntValue = n, t.advance(), !0)
    },
    ot.regexp_eatClassEscape = function(t) {
        var e = t.pos;
        if (t.eat(98)) return t.lastIntValue = 8,
        !0;
        if (t.switchU && t.eat(45)) return t.lastIntValue = 45,
        !0;
        if (!t.switchU && t.eat(99)) {
            if (this.regexp_eatClassControlLetter(t)) return ! 0;
            t.pos = e
        }
        return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
    },
    ot.regexp_eatClassControlLetter = function(t) {
        var e = t.current();
        return ! (!dt(e) && 95 !== e) && (t.lastIntValue = e % 32, t.advance(), !0)
    },
    ot.regexp_eatHexEscapeSequence = function(t) {
        var e = t.pos;
        if (t.eat(120)) {
            if (this.regexp_eatFixedHexDigits(t, 2)) return ! 0;
            t.switchU && t.raise("Invalid escape"),
            t.pos = e
        }
        return ! 1
    },
    ot.regexp_eatDecimalDigits = function(t) {
        var e = t.pos,
        r = 0;
        for (t.lastIntValue = 0; dt(r = t.current());) t.lastIntValue = 10 * t.lastIntValue + (r - 48),
        t.advance();
        return t.pos !== e
    },
    ot.regexp_eatHexDigits = function(t) {
        var e = t.pos,
        r = 0;
        for (t.lastIntValue = 0; mt(r = t.current());) t.lastIntValue = 16 * t.lastIntValue + vt(r),
        t.advance();
        return t.pos !== e
    },
    ot.regexp_eatLegacyOctalEscapeSequence = function(t) {
        if (this.regexp_eatOctalDigit(t)) {
            var e = t.lastIntValue;
            if (this.regexp_eatOctalDigit(t)) {
                var r = t.lastIntValue;
                e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * r + t.lastIntValue: t.lastIntValue = 8 * e + r
            } else t.lastIntValue = e;
            return ! 0
        }
        return ! 1
    },
    ot.regexp_eatOctalDigit = function(t) {
        var e = t.current();
        return gt(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
    },
    ot.regexp_eatFixedHexDigits = function(t, e) {
        var r = t.pos;
        t.lastIntValue = 0;
        for (var n = 0; n < e; ++n) {
            var i = t.current();
            if (!mt(i)) return t.pos = r,
            !1;
            t.lastIntValue = 16 * t.lastIntValue + vt(i),
            t.advance()
        }
        return ! 0
    };
    var yt = function(t) {
        this.type = t.type,
        this.value = t.value,
        this.start = t.start,
        this.end = t.end,
        t.options.locations && (this.loc = new T(t, t.startLoc, t.endLoc)),
        t.options.ranges && (this.range = [t.start, t.end])
    },
    _t = H.prototype;
    function xt(t) {
        return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
    }
    _t.next = function() {
        this.options.onToken && this.options.onToken(new yt(this)),
        this.lastTokEnd = this.end,
        this.lastTokStart = this.start,
        this.lastTokEndLoc = this.endLoc,
        this.lastTokStartLoc = this.startLoc,
        this.nextToken()
    },
    _t.getToken = function() {
        return this.next(),
        new yt(this)
    },
    "undefined" != typeof Symbol && (_t[Symbol.iterator] = function() {
        var t = this;
        return {
            next: function() {
                var e = t.getToken();
                return {
                    done: e.type === w.eof,
                    value: e
                }
            }
        }
    }),
    _t.curContext = function() {
        return this.context[this.context.length - 1]
    },
    _t.nextToken = function() {
        var t = this.curContext();
        return t && t.preserveSpace || this.skipSpace(),
        this.start = this.pos,
        this.options.locations && (this.startLoc = this.curPosition()),
        this.pos >= this.input.length ? this.finishToken(w.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
    },
    _t.readToken = function(t) {
        return d(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
    },
    _t.fullCharCodeAtPos = function() {
        var t = this.input.charCodeAt(this.pos);
        return t <= 55295 || t >= 57344 ? t: (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
    },
    _t.skipBlockComment = function() {
        var t, e = this.options.onComment && this.curPosition(),
        r = this.pos,
        n = this.input.indexOf("*/", this.pos += 2);
        if ( - 1 === n && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations) for (E.lastIndex = r; (t = E.exec(this.input)) && t.index < this.pos;)++this.curLine,
        this.lineStart = t.index + t[0].length;
        this.options.onComment && this.options.onComment(!0, this.input.slice(r + 2, n), r, this.pos, e, this.curPosition())
    },
    _t.skipLineComment = function(t) {
        for (var e = this.pos,
        r = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !S(n);) n = this.input.charCodeAt(++this.pos);
        this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, r, this.curPosition())
    },
    _t.skipSpace = function() {
        t: for (; this.pos < this.input.length;) {
            var t = this.input.charCodeAt(this.pos);
            switch (t) {
            case 32:
            case 160:
                ++this.pos;
                break;
            case 13:
                10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
            case 10:
            case 8232:
            case 8233:
                ++this.pos,
                this.options.locations && (++this.curLine, this.lineStart = this.pos);
                break;
            case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                case 42:
                    this.skipBlockComment();
                    break;
                case 47:
                    this.skipLineComment(2);
                    break;
                default:
                    break t
                }
                break;
            default:
                if (! (t > 8 && t < 14 || t >= 5760 && A.test(String.fromCharCode(t)))) break t; ++this.pos
            }
        }
    },
    _t.finishToken = function(t, e) {
        this.end = this.pos,
        this.options.locations && (this.endLoc = this.curPosition());
        var r = this.type;
        this.type = t,
        this.value = e,
        this.updateContext(r)
    },
    _t.readToken_dot = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t >= 48 && t <= 57) return this.readNumber(!0);
        var e = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(w.ellipsis)) : (++this.pos, this.finishToken(w.dot))
    },
    _t.readToken_slash = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(w.assign, 2) : this.finishOp(w.slash, 1)
    },
    _t.readToken_mult_modulo_exp = function(t) {
        var e = this.input.charCodeAt(this.pos + 1),
        r = 1,
        n = 42 === t ? w.star: w.modulo;
        return this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++r, n = w.starstar, e = this.input.charCodeAt(this.pos + 2)),
        61 === e ? this.finishOp(w.assign, r + 1) : this.finishOp(n, r)
    },
    _t.readToken_pipe_amp = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === t ? this.finishOp(124 === t ? w.logicalOR: w.logicalAND, 2) : 61 === e ? this.finishOp(w.assign, 2) : this.finishOp(124 === t ? w.bitwiseOR: w.bitwiseAND, 1)
    },
    _t.readToken_caret = function() {
        return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(w.assign, 2) : this.finishOp(w.bitwiseXOR, 1)
    },
    _t.readToken_plus_min = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === t ? 45 !== e || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !k.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(w.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(w.assign, 2) : this.finishOp(w.plusMin, 1)
    },
    _t.readToken_lt_gt = function(t) {
        var e = this.input.charCodeAt(this.pos + 1),
        r = 1;
        return e === t ? (r = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + r) ? this.finishOp(w.assign, r + 1) : this.finishOp(w.bitShift, r)) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (r = 2), this.finishOp(w.relational, r)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
    },
    _t.readToken_eq_excl = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return 61 === e ? this.finishOp(w.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(w.arrow)) : this.finishOp(61 === t ? w.eq: w.prefix, 1)
    },
    _t.getTokenFromCode = function(t) {
        switch (t) {
        case 46:
            return this.readToken_dot();
        case 40:
            return++this.pos,
            this.finishToken(w.parenL);
        case 41:
            return++this.pos,
            this.finishToken(w.parenR);
        case 59:
            return++this.pos,
            this.finishToken(w.semi);
        case 44:
            return++this.pos,
            this.finishToken(w.comma);
        case 91:
            return++this.pos,
            this.finishToken(w.bracketL);
        case 93:
            return++this.pos,
            this.finishToken(w.bracketR);
        case 123:
            return++this.pos,
            this.finishToken(w.braceL);
        case 125:
            return++this.pos,
            this.finishToken(w.braceR);
        case 58:
            return++this.pos,
            this.finishToken(w.colon);
        case 63:
            return++this.pos,
            this.finishToken(w.question);
        case 96:
            if (this.options.ecmaVersion < 6) break;
            return++this.pos,
            this.finishToken(w.backQuote);
        case 48:
            var e = this.input.charCodeAt(this.pos + 1);
            if (120 === e || 88 === e) return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
                if (111 === e || 79 === e) return this.readRadixNumber(8);
                if (98 === e || 66 === e) return this.readRadixNumber(2)
            }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return this.readNumber(!1);
        case 34:
        case 39:
            return this.readString(t);
        case 47:
            return this.readToken_slash();
        case 37:
        case 42:
            return this.readToken_mult_modulo_exp(t);
        case 124:
        case 38:
            return this.readToken_pipe_amp(t);
        case 94:
            return this.readToken_caret();
        case 43:
        case 45:
            return this.readToken_plus_min(t);
        case 60:
        case 62:
            return this.readToken_lt_gt(t);
        case 61:
        case 33:
            return this.readToken_eq_excl(t);
        case 126:
            return this.finishOp(w.prefix, 1)
        }
        this.raise(this.pos, "Unexpected character '" + xt(t) + "'")
    },
    _t.finishOp = function(t, e) {
        var r = this.input.slice(this.pos, this.pos + e);
        return this.pos += e,
        this.finishToken(t, r)
    },
    _t.readRegexp = function() {
        for (var t, e, r = this.pos;;) {
            this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
            var n = this.input.charAt(this.pos);
            if (k.test(n) && this.raise(r, "Unterminated regular expression"), t) t = !1;
            else {
                if ("[" === n) e = !0;
                else if ("]" === n && e) e = !1;
                else if ("/" === n && !e) break;
                t = "\\" === n
            }++this.pos
        }
        var i = this.input.slice(r, this.pos); ++this.pos;
        var a = this.pos,
        s = this.readWord1();
        this.containsEsc && this.unexpected(a);
        var o = this.regexpState || (this.regexpState = new ct(this));
        o.reset(r, i, s),
        this.validateRegExpFlags(o),
        this.validateRegExpPattern(o);
        var c = null;
        try {
            c = new RegExp(i, s)
        } catch(t) {}
        return this.finishToken(w.regexp, {
            pattern: i,
            flags: s,
            value: c
        })
    },
    _t.readInt = function(t, e) {
        for (var r = this.pos,
        n = 0,
        i = 0,
        a = null == e ? 1 / 0 : e; i < a; ++i) {
            var s = this.input.charCodeAt(this.pos),
            o = void 0;
            if ((o = s >= 97 ? s - 97 + 10 : s >= 65 ? s - 65 + 10 : s >= 48 && s <= 57 ? s - 48 : 1 / 0) >= t) break; ++this.pos,
            n = n * t + o
        }
        return this.pos === r || null != e && this.pos - r !== e ? null: n
    },
    _t.readRadixNumber = function(t) {
        this.pos += 2;
        var e = this.readInt(t);
        return null == e && this.raise(this.start + 2, "Expected number in radix " + t),
        d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
        this.finishToken(w.num, e)
    },
    _t.readNumber = function(t) {
        var e = this.pos;
        t || null !== this.readInt(10) || this.raise(e, "Invalid number");
        var r = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
        r && this.strict && this.raise(e, "Invalid number"),
        r && /[89]/.test(this.input.slice(e, this.pos)) && (r = !1);
        var n = this.input.charCodeAt(this.pos);
        46 !== n || r || (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)),
        69 !== n && 101 !== n || r || (43 !== (n = this.input.charCodeAt(++this.pos)) && 45 !== n || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")),
        d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
        var i = this.input.slice(e, this.pos),
        a = r ? parseInt(i, 8) : parseFloat(i);
        return this.finishToken(w.num, a)
    },
    _t.readCodePoint = function() {
        var t;
        if (123 === this.input.charCodeAt(this.pos)) {
            this.options.ecmaVersion < 6 && this.unexpected();
            var e = ++this.pos;
            t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos),
            ++this.pos,
            t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
        } else t = this.readHexChar(4);
        return t
    },
    _t.readString = function(t) {
        for (var e = "",
        r = ++this.pos;;) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var n = this.input.charCodeAt(this.pos);
            if (n === t) break;
            92 === n ? (e += this.input.slice(r, this.pos), e += this.readEscapedChar(!1), r = this.pos) : (S(n, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
        }
        return e += this.input.slice(r, this.pos++),
        this.finishToken(w.string, e)
    };
    var bt = {};
    _t.tryReadTemplateToken = function() {
        this.inTemplateElement = !0;
        try {
            this.readTmplToken()
        } catch(t) {
            if (t !== bt) throw t;
            this.readInvalidTemplateToken()
        }
        this.inTemplateElement = !1
    },
    _t.invalidStringToken = function(t, e) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw bt;
        this.raise(t, e)
    },
    _t.readTmplToken = function() {
        for (var t = "",
        e = this.pos;;) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
            var r = this.input.charCodeAt(this.pos);
            if (96 === r || 36 === r && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== w.template && this.type !== w.invalidTemplate ? (t += this.input.slice(e, this.pos), this.finishToken(w.template, t)) : 36 === r ? (this.pos += 2, this.finishToken(w.dollarBraceL)) : (++this.pos, this.finishToken(w.backQuote));
            if (92 === r) t += this.input.slice(e, this.pos),
            t += this.readEscapedChar(!0),
            e = this.pos;
            else if (S(r)) {
                switch (t += this.input.slice(e, this.pos), ++this.pos, r) {
                case 13:
                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                    t += "\n";
                    break;
                default:
                    t += String.fromCharCode(r)
                }
                this.options.locations && (++this.curLine, this.lineStart = this.pos),
                e = this.pos
            } else++this.pos
        }
    },
    _t.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
        case "\\":
            ++this.pos;
            break;
        case "$":
            if ("{" !== this.input[this.pos + 1]) break;
        case "`":
            return this.finishToken(w.invalidTemplate, this.input.slice(this.start, this.pos))
        }
        this.raise(this.start, "Unterminated template")
    },
    _t.readEscapedChar = function(t) {
        var e = this.input.charCodeAt(++this.pos);
        switch (++this.pos, e) {
        case 110:
            return "\n";
        case 114:
            return "\r";
        case 120:
            return String.fromCharCode(this.readHexChar(2));
        case 117:
            return xt(this.readCodePoint());
        case 116:
            return "\t";
        case 98:
            return "\b";
        case 118:
            return "\v";
        case 102:
            return "\f";
        case 13:
            10 === this.input.charCodeAt(this.pos) && ++this.pos;
        case 10:
            return this.options.locations && (this.lineStart = this.pos, ++this.curLine),
            "";
        default:
            if (e >= 48 && e <= 55) {
                var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                n = parseInt(r, 8);
                return n > 255 && (r = r.slice(0, -1), n = parseInt(r, 8)),
                this.pos += r.length - 1,
                e = this.input.charCodeAt(this.pos),
                "0" === r && 56 !== e && 57 !== e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - r.length, t ? "Octal literal in template string": "Octal literal in strict mode"),
                String.fromCharCode(n)
            }
            return String.fromCharCode(e)
        }
    },
    _t.readHexChar = function(t) {
        var e = this.pos,
        r = this.readInt(16, t);
        return null === r && this.invalidStringToken(e, "Bad character escape sequence"),
        r
    },
    _t.readWord1 = function() {
        this.containsEsc = !1;
        for (var t = "",
        e = !0,
        r = this.pos,
        n = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
            var i = this.fullCharCodeAtPos();
            if (m(i, n)) this.pos += i <= 65535 ? 1 : 2;
            else {
                if (92 !== i) break;
                this.containsEsc = !0,
                t += this.input.slice(r, this.pos);
                var a = this.pos;
                117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"),
                ++this.pos;
                var s = this.readCodePoint(); (e ? d: m)(s, n) || this.invalidStringToken(a, "Invalid Unicode escape"),
                t += xt(s),
                r = this.pos
            }
            e = !1
        }
        return t + this.input.slice(r, this.pos)
    },
    _t.readWord = function() {
        var t = this.readWord1(),
        e = w.name;
        return this.keywords.test(t) && (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + t), e = x[t]),
        this.finishToken(e, t)
    };
    var wt, kt, Et, St = "5.7.1";
    function At(t, e) {
        return new H(e, t).parse()
    }
    function Ct(t, e, r) {
        var n = new H(r, t, e);
        return n.nextToken(),
        n.parseExpression()
    }
    function Pt(t, e) {
        return new H(e, t)
    }
    function jt(t, e, r) {
        wt = t,
        kt = e,
        Et = r
    }
},
function(t, e, r) { !
    function(t) {
        "use strict";
        function e(t) {
            return "string" == typeof t ?
            function(e) {
                return e === t
            }: t ||
            function() {
                return ! 0
            }
        }
        var r = function(t, e) {
            this.node = t,
            this.state = e
        },
        n = Object.create ||
        function(t) {
            function e() {}
            return e.prototype = t,
            new e
        };
        function i(t, e) {
            var r = n(e || o);
            for (var i in t) r[i] = t[i];
            return r
        }
        function a(t, e, r) {
            r(t, e)
        }
        function s(t, e, r) {}
        var o = {};
        o.Program = o.BlockStatement = function(t, e, r) {
            for (var n = 0,
            i = t.body; n < i.length; n += 1) {
                var a = i[n];
                r(a, e, "Statement")
            }
        },
        o.Statement = a,
        o.EmptyStatement = s,
        o.ExpressionStatement = o.ParenthesizedExpression = function(t, e, r) {
            return r(t.expression, e, "Expression")
        },
        o.IfStatement = function(t, e, r) {
            r(t.test, e, "Expression"),
            r(t.consequent, e, "Statement"),
            t.alternate && r(t.alternate, e, "Statement")
        },
        o.LabeledStatement = function(t, e, r) {
            return r(t.body, e, "Statement")
        },
        o.BreakStatement = o.ContinueStatement = s,
        o.WithStatement = function(t, e, r) {
            r(t.object, e, "Expression"),
            r(t.body, e, "Statement")
        },
        o.SwitchStatement = function(t, e, r) {
            r(t.discriminant, e, "Expression");
            for (var n = 0,
            i = t.cases; n < i.length; n += 1) {
                var a = i[n];
                a.test && r(a.test, e, "Expression");
                for (var s = 0,
                o = a.consequent; s < o.length; s += 1) {
                    var c = o[s];
                    r(c, e, "Statement")
                }
            }
        },
        o.SwitchCase = function(t, e, r) {
            t.test && r(t.test, e, "Expression");
            for (var n = 0,
            i = t.consequent; n < i.length; n += 1) {
                var a = i[n];
                r(a, e, "Statement")
            }
        },
        o.ReturnStatement = o.YieldExpression = o.AwaitExpression = function(t, e, r) {
            t.argument && r(t.argument, e, "Expression")
        },
        o.ThrowStatement = o.SpreadElement = function(t, e, r) {
            return r(t.argument, e, "Expression")
        },
        o.TryStatement = function(t, e, r) {
            r(t.block, e, "Statement"),
            t.handler && r(t.handler, e),
            t.finalizer && r(t.finalizer, e, "Statement")
        },
        o.CatchClause = function(t, e, r) {
            t.param && r(t.param, e, "Pattern"),
            r(t.body, e, "ScopeBody")
        },
        o.WhileStatement = o.DoWhileStatement = function(t, e, r) {
            r(t.test, e, "Expression"),
            r(t.body, e, "Statement")
        },
        o.ForStatement = function(t, e, r) {
            t.init && r(t.init, e, "ForInit"),
            t.test && r(t.test, e, "Expression"),
            t.update && r(t.update, e, "Expression"),
            r(t.body, e, "Statement")
        },
        o.ForInStatement = o.ForOfStatement = function(t, e, r) {
            r(t.left, e, "ForInit"),
            r(t.right, e, "Expression"),
            r(t.body, e, "Statement")
        },
        o.ForInit = function(t, e, r) {
            "VariableDeclaration" === t.type ? r(t, e) : r(t, e, "Expression")
        },
        o.DebuggerStatement = s,
        o.FunctionDeclaration = function(t, e, r) {
            return r(t, e, "Function")
        },
        o.VariableDeclaration = function(t, e, r) {
            for (var n = 0,
            i = t.declarations; n < i.length; n += 1) {
                var a = i[n];
                r(a, e)
            }
        },
        o.VariableDeclarator = function(t, e, r) {
            r(t.id, e, "Pattern"),
            t.init && r(t.init, e, "Expression")
        },
        o.Function = function(t, e, r) {
            t.id && r(t.id, e, "Pattern");
            for (var n = 0,
            i = t.params; n < i.length; n += 1) {
                var a = i[n];
                r(a, e, "Pattern")
            }
            r(t.body, e, t.expression ? "ScopeExpression": "ScopeBody")
        },
        o.ScopeBody = function(t, e, r) {
            return r(t, e, "Statement")
        },
        o.ScopeExpression = function(t, e, r) {
            return r(t, e, "Expression")
        },
        o.Pattern = function(t, e, r) {
            "Identifier" === t.type ? r(t, e, "VariablePattern") : "MemberExpression" === t.type ? r(t, e, "MemberPattern") : r(t, e)
        },
        o.VariablePattern = s,
        o.MemberPattern = a,
        o.RestElement = function(t, e, r) {
            return r(t.argument, e, "Pattern")
        },
        o.ArrayPattern = function(t, e, r) {
            for (var n = 0,
            i = t.elements; n < i.length; n += 1) {
                var a = i[n];
                a && r(a, e, "Pattern")
            }
        },
        o.ObjectPattern = function(t, e, r) {
            for (var n = 0,
            i = t.properties; n < i.length; n += 1) {
                var a = i[n];
                "Property" === a.type ? (a.computed && r(a.key, e, "Expression"), r(a.value, e, "Pattern")) : "RestElement" === a.type && r(a.argument, e, "Pattern")
            }
        },
        o.Expression = a,
        o.ThisExpression = o.Super = o.MetaProperty = s,
        o.ArrayExpression = function(t, e, r) {
            for (var n = 0,
            i = t.elements; n < i.length; n += 1) {
                var a = i[n];
                a && r(a, e, "Expression")
            }
        },
        o.ObjectExpression = function(t, e, r) {
            for (var n = 0,
            i = t.properties; n < i.length; n += 1) {
                var a = i[n];
                r(a, e)
            }
        },
        o.FunctionExpression = o.ArrowFunctionExpression = o.FunctionDeclaration,
        o.SequenceExpression = o.TemplateLiteral = function(t, e, r) {
            for (var n = 0,
            i = t.expressions; n < i.length; n += 1) {
                var a = i[n];
                r(a, e, "Expression")
            }
        },
        o.UnaryExpression = o.UpdateExpression = function(t, e, r) {
            r(t.argument, e, "Expression")
        },
        o.BinaryExpression = o.LogicalExpression = function(t, e, r) {
            r(t.left, e, "Expression"),
            r(t.right, e, "Expression")
        },
        o.AssignmentExpression = o.AssignmentPattern = function(t, e, r) {
            r(t.left, e, "Pattern"),
            r(t.right, e, "Expression")
        },
        o.ConditionalExpression = function(t, e, r) {
            r(t.test, e, "Expression"),
            r(t.consequent, e, "Expression"),
            r(t.alternate, e, "Expression")
        },
        o.NewExpression = o.CallExpression = function(t, e, r) {
            if (r(t.callee, e, "Expression"), t.arguments) for (var n = 0,
            i = t.arguments; n < i.length; n += 1) {
                var a = i[n];
                r(a, e, "Expression")
            }
        },
        o.MemberExpression = function(t, e, r) {
            r(t.object, e, "Expression"),
            t.computed && r(t.property, e, "Expression")
        },
        o.ExportNamedDeclaration = o.ExportDefaultDeclaration = function(t, e, r) {
            t.declaration && r(t.declaration, e, "ExportNamedDeclaration" === t.type || t.declaration.id ? "Statement": "Expression"),
            t.source && r(t.source, e, "Expression")
        },
        o.ExportAllDeclaration = function(t, e, r) {
            r(t.source, e, "Expression")
        },
        o.ImportDeclaration = function(t, e, r) {
            for (var n = 0,
            i = t.specifiers; n < i.length; n += 1) {
                var a = i[n];
                r(a, e)
            }
            r(t.source, e, "Expression")
        },
        o.ImportSpecifier = o.ImportDefaultSpecifier = o.ImportNamespaceSpecifier = o.Identifier = o.Literal = s,
        o.TaggedTemplateExpression = function(t, e, r) {
            r(t.tag, e, "Expression"),
            r(t.quasi, e, "Expression")
        },
        o.ClassDeclaration = o.ClassExpression = function(t, e, r) {
            return r(t, e, "Class")
        },
        o.Class = function(t, e, r) {
            t.id && r(t.id, e, "Pattern"),
            t.superClass && r(t.superClass, e, "Expression"),
            r(t.body, e)
        },
        o.ClassBody = function(t, e, r) {
            for (var n = 0,
            i = t.body; n < i.length; n += 1) {
                var a = i[n];
                r(a, e)
            }
        },
        o.MethodDefinition = o.Property = function(t, e, r) {
            t.computed && r(t.key, e, "Expression"),
            r(t.value, e, "Expression")
        },
        t.simple = function(t, e, r, n, i) {
            r || (r = o),
            function t(n, i, a) {
                var s = a || n.type,
                o = e[s];
                r[s](n, i, t),
                o && o(n, i)
            } (t, n, i)
        },
        t.ancestor = function(t, e, r, n) {
            var i = [];
            r || (r = o),
            function t(n, a, s) {
                var o = s || n.type,
                c = e[o],
                u = n !== i[i.length - 1];
                u && i.push(n),
                r[o](n, a, t),
                c && c(n, a || i, i),
                u && i.pop()
            } (t, n)
        },
        t.recursive = function(t, e, r, n, a) {
            var s = r ? i(r, n || void 0) : n; !
            function t(e, r, n) {
                s[n || e.type](e, r, t)
            } (t, e, a)
        },
        t.full = function(t, e, r, n, i) {
            r || (r = o),
            function t(n, i, a) {
                var s = a || n.type;
                r[s](n, i, t),
                a || e(n, i, s)
            } (t, n, i)
        },
        t.fullAncestor = function(t, e, r, n) {
            r || (r = o);
            var i = []; !
            function t(n, a, s) {
                var o = s || n.type,
                c = n !== i[i.length - 1];
                c && i.push(n),
                r[o](n, a, t),
                s || e(n, a || i, i, o),
                c && i.pop()
            } (t, n)
        },
        t.findNodeAt = function(t, n, i, a, s, c) {
            s || (s = o),
            a = e(a);
            try { !
                function t(e, o, c) {
                    var u = c || e.type;
                    if ((null == n || e.start <= n) && (null == i || e.end >= i) && s[u](e, o, t), (null == n || e.start === n) && (null == i || e.end === i) && a(u, e)) throw new r(e, o)
                } (t, c)
            } catch(t) {
                if (t instanceof r) return t;
                throw t
            }
        },
        t.findNodeAround = function(t, n, i, a, s) {
            i = e(i),
            a || (a = o);
            try { !
                function t(e, s, o) {
                    var c = o || e.type;
                    if (! (e.start > n || e.end < n) && (a[c](e, s, t), i(c, e))) throw new r(e, s)
                } (t, s)
            } catch(t) {
                if (t instanceof r) return t;
                throw t
            }
        },
        t.findNodeAfter = function(t, n, i, a, s) {
            i = e(i),
            a || (a = o);
            try { !
                function t(e, s, o) {
                    if (! (e.end < n)) {
                        var c = o || e.type;
                        if (e.start >= n && i(c, e)) throw new r(e, s);
                        a[c](e, s, t)
                    }
                } (t, s)
            } catch(t) {
                if (t instanceof r) return t;
                throw t
            }
        },
        t.findNodeBefore = function(t, n, i, a, s) {
            var c;
            return i = e(i),
            a || (a = o),
            function t(e, s, o) {
                if (! (e.start > n)) {
                    var u = o || e.type;
                    e.end <= n && (!c || c.node.end < e.end) && i(u, e) && (c = new r(e, s)),
                    a[u](e, s, t)
                }
            } (t, s),
            c
        },
        t.make = i,
        t.base = o,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    } (e)
},
function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(t, e, r, n) {
        var i = void 0;
        for (i = 0; i < n; i++) if (t.charAt(e + i) !== r.charAt(i)) return ! 1;
        return ! 0
    },
    n = function(t, e, n, i) {
        for (var a = void 0,
        s = i.length; e < n;) {
            var o = t.charAt(e);
            if (e + s > n) return ! 1;
            if ("\\" !== o) if ('"' !== o && "'" !== o) if (a) e++;
            else {
                if (1 === s) {
                    if (t.charAt(e) === i) return e
                } else if (!1 !== r(t, e, i, s)) return e;
                e++
            } else a ? a === o && (a = "") : a = o,
            e++;
            else e += 2
        }
        return ! 1
    },
    i = function(t) {
        var e = 0,
        r = t.length,
        i = void 0,
        a = {};
        if ( - 1 === (e = t.indexOf(" "))) i = t;
        else {
            i = t.slice(0, e),
            e++;
            for (var s = void 0,
            o = void 0,
            c = void 0,
            u = void 0; e < r;) ! 1 === (s = n(t, e, r, " ")) && (s = r),
            -1 === (u = t.slice(e, s).indexOf("=")) ? (o = t.slice(e, s), c = void 0) : (o = t.slice(e, e + u), c = t.slice(e + u + 1, s)),
            a[o] = c,
            e = s + 1
        }
        return {
            tag: i,
            attrs: a
        }
    },
    a = function(t, e) {
        for (var r = 0,
        a = t.length,
        s = void 0,
        o = {
            start: 0,
            end: 0
        },
        c = void 0, u = void 0; r < a;) if (s = t.charAt(r), c || "<" !== s) {
            if (0 === r) {
                var p = n(t, r, a, "<script>"),
                l = n(t, r, a, "<\/script>");
                if (!1 === l || !1 !== l && !1 !== p && p < l) {
                    var h = t.indexOf("<");
                    if ( - 1 !== h) {
                        e.ontext && e.ontext(t.slice(r, h)),
                        o = {
                            start: r = h,
                            end: r
                        };
                        continue
                    }
                    r = a;
                    continue
                }
            }
            "\\" === s ? r += 2 : '"' === s || "'" === s ? (c ? c === s && (c = "") : c = s, r++) : r++,
            o.end = r
        } else {
            var f = t.charAt(r + 1);
            if (u && "script" === u.toLowerCase() && "/" !== f) {
                r++,
                o.end = r;
                continue
            }
            if (o.end > o.start && e.ontext && e.ontext(t.slice(o.start, o.end)), "!" === f) {
                var d = n(t, r, a, ">");
                if (!1 === d) {
                    e.ontext && e.ontext(t.slice(r));
                    break
                }
                "\x3c!--" === t.slice(r, r + 4) && "--\x3e" === t.slice(d - 2, d + 1) ? e.oncomment && e.oncomment(t.slice(r + 4, d - 2)) : "\x3c!--" === t.slice(r, r + 4) ? e.oncomment && e.oncomment(t.slice(r + 4, d), 1) : "--\x3e" === t.slice(d - 2, d + 1) ? e.oncomment && e.oncomment(t.slice(r + 2, d - 2), 2) : "<!doctype" === t.slice(r, r + 9).toLowerCase() ? e.onprocess && e.onprocess(t.slice(r + 2, d)) : "<![CDATA[" === t.slice(r, r + 9).toUpperCase() && "]]>" === t.slice(d - 2, d + 1) && e.oncdata && e.oncdata(t.slice(r + 9, d - 2)),
                o = {
                    start: r = d + 1,
                    end: r
                };
                continue
            }
            if ("/" === f) {
                var m = n(t, r, a, ">");
                if (!1 === m) {
                    e.ontext && e.ontext(t.slice(r));
                    break
                }
                e.onclosetag && e.onclosetag(t.slice(r + 2, m)),
                u = null,
                o = {
                    start: r = m + 1,
                    end: r
                };
                continue
            }
            var v = n(t, r, a, ">");
            if (!1 === v) {
                e.ontext && e.ontext(t.slice(r));
                break
            }
            var g = i(t.slice(r + 1, v)),
            y = g.tag,
            _ = g.attrs;
            e.onopentag && e.onopentag(y, _),
            u = y,
            o = {
                start: r = v + 1,
                end: r
            }
        }
    };
    e.
default = {
        parse: a
    },
    e.parse = a
},
function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.walk = function t(e, r) {
        return null !== e && (Object.getOwnPropertyDescriptor(e, r) ? {
            obj: e,
            name: r
        }: "function" == typeof e ? Object.getOwnPropertyDescriptor(e.prototype, r) ? {
            obj: e,
            name: r
        }: t(e.prototype.__proto__, r) : t(e.__proto__, r))
    }
},
function(t, e, r) { (function(t, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r(3));
        var a = void 0;
        if ("window" === t.mode) {
            var s = window.localStorage,
            o = void 0,
            c = s.getItem("__vpn_" + i.
        default.app_hostname);
            if (c) try { (c = JSON.parse(c)) && c.uuid && (o = c.uuid)
            } catch(t) {
                throw t
            }
            if (!o || isNaN(o)) {
                var u = s.getItem("__vpn_cur_uuid");
                o = u ? (parseInt(u) || 0) + 1 : function() {
                    var t = 0;
                    return n(s).keys().each(function(e) {
                        try {
                            if ("__vpn_" === e.slice(0, "__vpn_".length)) {
                                var r = JSON.parse(s.getItem(e));
                                r && r.uuid && (t = n.max([t, r.uuid]))
                            }
                        } catch(t) {
                            throw t
                        }
                    }),
                    parseInt(t) + 1
                } (),
                s.setItem("__vpn_cur_uuid", o),
                s.setItem("__vpn_" + i.
            default.app_hostname, JSON.stringify({
                    uuid: o
                }))
            }
            var p = function(t) {
                return null === t ? "null": void 0 === t ? "undefined": t.toString()
            },
            l = {
                parse: function(t) {
                    return t = p(t),
                    "__" + o + "_" + t
                },
                unparse: function(t) {
                    return p(t).slice(("__" + o + "_").length)
                },
                valid: function(t) {
                    return n.startsWith(t, "__" + o + "_")
                }
            },
            h = function() {};
            h.prototype = s.__proto__;
            var f = function() {
                var t = [],
                e = [];
                n(s).keys().each(function(e) {
                    l.valid(e) && t.push(e)
                }),
                n(d).keys().each(function(t) {
                    var r = d[t];
                    t = l.parse(t),
                    e.push(t),
                    s.setItem(t, r)
                }),
                n.each(t,
                function(t) {
                    n.includes(e, t) || s.removeItem(t)
                })
            },
            d = new h;
            Object.defineProperty(window, "localStorage", {
                get: function() {
                    return d
                }
            }),
            Object.defineProperty(d, "getItem", {
                enumerable: 0,
                value: function(t) {
                    return t = p(t),
                    this.hasOwnProperty(t) ? p(this[t]) : null
                }
            }),
            Object.defineProperty(d, "setItem", {
                enumerable: 0,
                value: function(t, e) {
                    t = p(t),
                    e = p(e),
                    this[t] = e,
                    f()
                }
            }),
            Object.defineProperty(d, "removeItem", {
                enumerable: 0,
                value: function(t) {
                    delete this[t = p(t)],
                    f()
                }
            }),
            Object.defineProperty(d, "key", {
                enumerable: 0,
                value: function(t) {
                    return t = "number" == typeof t ? t: 0,
                    n.values(this)[t]
                }
            }),
            Object.defineProperty(d, "clear", {
                enumerable: 0,
                value: function() {
                    var t = this;
                    n.each(this,
                    function(e, r) {
                        delete t[r]
                    }),
                    f()
                }
            }),
            Object.defineProperty(d, "length", {
                configurable: 0,
                enumerable: 0,
                get: function() {
                    return Object.keys(this).length
                }
            }),
            Object.defineProperty(d, "toString", {
                enumerable: 0,
                value: function() {
                    return s.toString()
                }
            }),
            n(s).keys().each(function(t) {
                if (l.valid(t)) {
                    var e = s.getItem(t);
                    t = l.unparse(t),
                    d[t] = e
                }
            }),
            setInterval(function() {
                f()
            },
            1e3),
            a = [{
                hook: "obj",
                name: "localStorage",
                context: window,
                access: {
                    get: function() {
                        return d
                    },
                    set: function(t) {
                        return t
                    }
                }
            }]
        }
        e.
    default = {
            objs: a
        }
    }).call(this, r(0), r(2))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.props = void 0;
    var n = function(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    } (r(3));
    window.origin = n.
default.app_protocol + "//" + n.
default.app_hostname + (n.
default.app_port ? ":" + n.
default.app_port:
    "");
    e.props = []
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        "window" === t.mode && (r = [{
            hook: "style",
            prototype: window.CSSStyleDeclaration.prototype
        }]),
        e.
    default = {
            nodeName: "element",
            objs: r
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: HTMLElement,
            name: "setAttribute",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return (0, n.parse)(e[1]),
                e
            }
        },
        {
            hook: "method",
            obj: HTMLElement,
            name: "setAttributeNS",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return (0, n.parse)(e[2]),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: window,
            name: "Audio",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(5),
        i = r(6);
        e.
    default = {
            methods: [{
                hook: "method",
                obj: window,
                name: "Blob",
                argHandler: function() {
                    for (var e = arguments.length,
                    r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                    return t.isArray(r[0]) || (r[0] = [r[0]]),
                    r[1] && r[1].type && (0, i.isScriptTag)("script", r[1].type) && (r[0] = t.map(r[0],
                    function(t) {
                        return (0, n.parse)(t)
                    })),
                    r
                }
            }]
        }
    }).call(this, r(2))
},
function(t, e, r) { (function(t, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        } (r(6)),
        a = r(13),
        s = r(4);
        var o = function() {
            for (var e = arguments.length,
            r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return t.map(r,
            function(t) {
                return i.parse(t)
            })
        },
        c = void 0;
        "window" === n.mode && (c = [{
            hook: "method",
            obj: Document,
            name: "write",
            argHandler: o
        },
        {
            hook: "method",
            obj: Document,
            name: "writeln",
            argHandler: o
        },
        {
            hook: "method",
            obj: Document,
            name: "open",
            handler: function(t, e, r) {
                if (e = t ? t[e] : e, t &&
                function(t) {
                    var e = s.origins.objs.toString.call(t);
                    return "[object HTMLDocument]" === e || "[object Document]" === e
                } (t)) {
                    if (r.length && "text/html" === r[0] && t.defaultView) {
                        var n = e.apply(t, r);
                        return (0, a.vpnInjectScript)(t.defaultView),
                        n
                    }
                    return e.apply(t, r)
                }
                return e.apply(t, r)
            },
            retHandler: function(t, e) {
                return e.length && "text/html" === e[0] && (void 0).defaultView && (0, a.vpnInjectScript)((void 0).defaultView),
                t
            }
        }]),
        e.
    default = {
            methods: c
        }
    }).call(this, r(2), r(0))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    } (r(3)),
    i = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    } (r(1));
    var a = /(https?:\/\/.*):\d+:\d+/;
    e.
default = {
        methods: [{
            hook: "method",
            obj: window,
            name: "Error",
            retHandler: function(t) {
                var e = n.
            default.vpn_origin + "/static/main.js";
                return t.stack = t.stack.split("\n").map(function(t) {
                    return - 1 !== t.indexOf(e) ? t: t.replace(a,
                    function(t) {
                        return i.unparse(t)
                    })
                }).join("\n"),
                t
            }
        }]
    }
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(1);
    e.
default = {
        methods: [{
            hook: "method",
            obj: window,
            name: "EventSource",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]
    }
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(1);
    e.
default = {
        methods: [{
            hook: "method",
            obj: window,
            name: "fetch",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]
    }
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: window,
            name: "FontFace",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = function() {
            for (var t = arguments.length,
            e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return e[2] = (0, n.parse)(e[2]),
            e
        },
        a = void 0;
        "window" === t.mode && (a = [{
            hook: "method",
            obj: History,
            name: "replaceState",
            argHandler: i
        },
        {
            hook: "method",
            obj: History,
            name: "pushState",
            argHandler: i
        },
        {
            hook: "method",
            obj: History,
            name: "go",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: a
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = function() {
            for (var t = arguments.length,
            e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return e[1] = (0, n.parse)(e[1]),
            e
        },
        a = void 0;
        "window" === t.mode && (a = [{
            hook: "method",
            obj: Navigator,
            name: "registerProtocolHandler",
            argHandler: i
        },
        {
            hook: "method",
            obj: Navigator,
            name: "registerContentHandler",
            argHandler: i
        },
        {
            hook: "method",
            obj: Navigator,
            name: "sendBeacon",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: a
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a(r(7)),
        i = a(r(5));
        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        }
        var s = void 0,
        o = function() {
            for (var t = this.nodeName.toLowerCase(), e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
            return "style" === t ? r[0].textContent = n.parse(r[0].textContent) : "script" === t && (r[0].textContent = i.parse(r[0].textContent)),
            r
        };
        "window" === t.mode && (s = [{
            hook: "method",
            obj: Node,
            name: "insertBefore",
            argHandler: o
        },
        {
            hook: "method",
            obj: Node,
            name: "appendChild",
            argHandler: o
        },
        {
            hook: "method",
            obj: Node,
            name: "replaceChild",
            argHandler: o
        }]),
        e.
    default = {
            methods: s
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: window,
            name: "open",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    } (r(1)),
    i = r(4);
    var a = [{
        hook: "method",
        obj: window,
        name: "postMessage",
        argHandler: function() {
            for (var t = arguments.length,
            e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return e[1] = n.parse(e[1]),
            e
        },
        handler: function(t, e, r) {
            return e = t ? t[e] : e,
            function(t) {
                return "[object Window]" === i.origins.objs.toString.call(t)
            } (t) ? (r[1] = n.parse(r[1]), e.apply(t, r)) : e.apply(t, r)
        }
    }];
    e.
default = {
        methods: a
    }
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(6),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: Range,
            name: "createContextualFragment",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: window,
            name: "Request",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(1),
    i = r(10),
    a = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    } (r(3)),
    s = r(8);
    e.
default = {
        methods: [{
            hook: "method",
            obj: window,
            name: "SharedWorker",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                var o = (0, i.ajax)({
                    url: (0, n.parse)(e[0])
                }),
                c = (0, i.ajax)({
                    url: a.config.vpn_js_file
                }),
                u = "\n  var window = this;\n  var __app_origin_url = '" + (0, n.parse)(e[0]) + "';\n  " + a.toCode() + "\n  " + c + "\n  " + o + "\n  ",
                p = (0, s.getOrigin)(window, "Blob"),
                l = (0, s.getOrigin)(URL, "createObjectURL"),
                h = new p([u], {
                    type: "text/javascript"
                });
                return e[0] = l(h),
                e
            }
        }]
    }
},
function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.
default = {}
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(16);
    e.
default = {
        methods: [{
            hook: "method",
            obj: URL,
            name: "createObjectURL",
            retHandler: function(t) {
                return (0, n.unparse)(t)
            }
        },
        {
            hook: "method",
            obj: URL,
            name: "revokeObjectURL",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = (0, n.parse)(e[0]),
                e
            }
        }]
    }
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
        i = void 0;
        "window" === t.mode && (i = [{
            hook: "method",
            obj: window,
            name: "WebSocket",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return e[0] = "ws" + (0, n.parse)(e[0], "ws").slice(4),
                e
            }
        }]),
        e.
    default = {
            methods: i
        }
    }).call(this, r(0))
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(1),
    i = r(10),
    a = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    } (r(3)),
    s = r(8);
    e.
default = {
        methods: [{
            hook: "method",
            obj: window,
            name: "Worker",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                var o = (0, i.ajax)({
                    url: (0, n.parse)(e[0])
                }),
                c = (0, i.ajax)({
                    url: a.config.vpn_js_file
                }),
                u = "\n    var window = this;\n    var __app_origin_url = '" + (0, n.parse)(e[0]) + "';\n    " + a.toCode() + "\n    " + c + "\n    " + o + "\n    ",
                p = (0, s.getOrigin)(window, "Blob"),
                l = (0, s.getOrigin)(URL, "createObjectURL"),
                h = new p([u], {
                    type: "text/javascript"
                });
                return e[0] = l(h),
                e
            }
        }]
    }
},
function(t, e, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(1),
    i = function(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    } (r(3));
    e.
default = {
        methods: [{
            hook: "method",
            obj: window.XMLHttpRequest,
            name: "open",
            argHandler: function() {
                for (var t = arguments.length,
                e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e[1] = (0, n.parse)(e[1]);
                var a = e[1].indexOf("?"),
                s = e[1].slice(5).match(/(https?)/),
                o = "vpn-12-o" + ("https" === (s = s ? s[0] : i.
            default.app_protocol) ? 2 : 1) + "-" + i.
            default.app_hostname;
                return - 1 === a ? e[1] += "?" + o: e[1] = e[1].slice(0, a + 1) + o + "&" + e[1].slice(a + 1),
                e
            }
        }]
    }
},
function(t, e, r) {
    function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.
    default = t,
        e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.add = void 0;
    var i = {
        obj: n(r(18)),
        attr: n(r(78)),
        prop: n(r(79)),
        style: n(r(80)),
        anchor: n(r(81)),
        method: n(r(8))
    };
    e.add = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i[t].add(e)
    }
},
function(t, e, r) { (function(t, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.add = void 0;
        var i = u(r(15)),
        a = u(r(6)),
        s = u(r(7)),
        o = u(r(5)),
        c = u(r(20));
        function u(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        }
        var p = void 0;
        "window" === t.mode ? (!
        function() {
            var t = {
                get: Element.prototype.getAttribute,
                set: Element.prototype.setAttribute
            };
            Element.prototype.getAttribute = function(e) {
                var r = t.get.call(this, e),
                n = e.slice(e.indexOf(":") + 1);
                console.log("get rock you:",r);
                return i.unparse(["attr", this.nodeName.toLowerCase(), n], r)
            },
            Element.prototype.setAttribute = function(e, r) {
                if (c.isEventAttr(e)) n.isString(r) && (r = o.inlineWrap(r));
                else {
                    var a = e.slice(e.indexOf(":") + 1);
                    r = i.parse(["attr", this.nodeName.toLowerCase(), a], r)
                }
                r=judgeUrl(r);
                console.log("set rock you:",r);
                t.set.call(this, e, r)
            };
            var e = {
                get: Element.prototype.getAttributeNS,
                set: Element.prototype.setAttributeNS
            };
            Element.prototype.getAttributeNS = function(t, r) {
                var n = e.get.call(this, t, r),
                a = r.slice(r.indexOf(":") + 1);
                return i.unparse(["attr", this.nodeName.toLowerCase(), a], t, n)
            },
            Element.prototype.setAttributeNS = function(t, r, a) {
                if (c.isEventAttr(r)) n.isString(a) && (a = o.inlineWrap(a));
                else {
                    var s = r.slice(r.indexOf(":") + 1);
                    a = i.parse(["attr", this.nodeName.toLowerCase(), s], a)
                }
                e.set.call(this, t, r, a)
            }
        } (),
        function() {
            var t = {
                get: Element.prototype.__lookupGetter__("innerHTML"),
                set: Element.prototype.__lookupSetter__("innerHTML")
            };
            Object.defineProperty(Element.prototype, "innerHTML", {
                get: function() {
                    var e = t.get.call(this),
                    r = this.tagName.toLowerCase();
                    return "style" === r ? s.unparse(e, "block") : a.isScriptTag(r, this.attributes.type && this.attributes.type.value) ? o.unparse(e) : a.unparse(e)
                },
                set: function(e) {
                    var r = this.tagName.toLowerCase();
                    return e = "style" === r ? s.parse(e) : a.isScriptTag(r, this.attributes.type && this.attributes.type.value) ? o.parse(e) : a.parse(e),
                    t.set.call(this, e)
                }
            });
            var e = {
                get: HTMLElement.prototype.__lookupGetter__("innerText"),
                set: HTMLElement.prototype.__lookupSetter__("innerText")
            };
            Object.defineProperty(HTMLElement.prototype, "innerText", {
                get: function() {
                    var t = e.get.call(this),
                    r = this.tagName.toLowerCase();
                    return "style" === r ? s.unparse(t) : a.isScriptTag(r, this.attributes.type && this.attributes.type.value) ? o.unparse(t) : t
                },
                set: function(t) {
                    var r = this.tagName.toLowerCase();
                    return "style" === r ? t = s.parse(t) : a.isScriptTag(r, this.attributes.type && this.attributes.type.value) && (t = o.parse(t)),
                    e.set.call(this, t)
                }
            })
        } (), e.add = p = function(t) {
            var e = t.prototype,
            r = t.attr,
            a = t.access;
            if (Object.getOwnPropertyDescriptor(e, r)) {
                var s = {
                    get: (a = a || {}).get ? n.partial(a.get, r) : e.__lookupGetter__(r),
                    set: a.set ? n.partial(a.set, r) : e.__lookupSetter__(r)
                };
                Object.defineProperty(e, r, {
                    get: function() {
                        var t = s.get.call(this);
                        return i.unparse(["attr", this.nodeName.toLowerCase(), r], t)
                    },
                    set: function(t) {
                        return t = i.parse(["attr", this.nodeName.toLowerCase(), r], t),
                        s.set.call(this, t)
                    }
                })
            }
        }) : e.add = p = function() {},
        e.add = p
    }).call(this, r(0), r(2))
},
function(t, e, r) { (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.add = void 0;
        var n = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r(9));
        e.add = function(e) {
            var r = e.prototype,
            i = e.prop,
            a = e.parser,
            s = e.access;
            if (Object.getOwnPropertyDescriptor(r, i)) {
                s = s || {},
                a = n.
            default[a];
                var o = {
                    get: s.get ? t.partial(s.get, i) : r.__lookupGetter__(i),
                    set: s.set ? t.partial(s.set, i) : r.__lookupSetter__(i)
                };
                Object.defineProperty(r, i, {
                    get: function() {
                        var t = o.get.call(this);
                        return a ? a.unparse(t) : t
                    },
                    set: function(t) {
                        if (o.set) return o.set.call(this, a ? a.parse(t) : t)
                    }
                })
            }
        }
    }).call(this, r(2))
},
function(t, e, r) { (function(t, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.add = void 0;
        var i = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        } (r(7)),
        a = r(14);
        var s = void 0;
        if ("window" === t.mode) {
            var o = ["cursor", "background", "backgroundImage", "borderImage", "borderImageSource", "listStyle", "listStyleImage"],
            c = window.CSSStyleDeclaration.prototype; !
            function() {
                var t = {
                    get: c.getPropertyValue,
                    set: c.setProperty
                };
                c.getPropertyValue = function(e) {
                    var r = t.get.call(this, e);
                    return i.unparse(r, "value")
                },
                c.setProperty = function(e, r) {
                    return r = i.parse(r, "value"),
                    t.set.call(this, e, r)
                }
            } (),
            function() {
                var t = {
                    get: c.__lookupGetter__("cssText"),
                    set: c.__lookupSetter__("cssText")
                };
                Object.defineProperty(c, "cssText", {
                    get: function() {
                        var e = t.get.call(this),
                        r = document.createElement("div");
                        return t.set.call(r.style, i.unparse(e, "inline")),
                        t.get.call(r.style)
                    },
                    set: function(e) {
                        var r = i.parse(e, "inline");
                        return (0, a.log)(a.LEVEL.THREE, "[cssText parse]", e, r),
                        t.set.call(this, r)
                    }
                })
            } (),
            e.add = s = function() {
                n.each(o,
                function(t) {
                    Object.defineProperty(c, t, {
                        get: function() {
                            var e = this.getPropertyValue(n.kebabCase(t));
                            return i.unparse(e, "value")
                        },
                        set: function(e) {
                            var r = i.parse(e, "value");
                            return this.setProperty(n.kebabCase(t), r)
                        }
                    })
                })
            }
        } else e.add = s = function() {};
        e.add = s
    }).call(this, r(0), r(2))
},
function(t, e, r) { (function(t, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.add = void 0;
        var i = r(1),
        a = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (r(12));
        var s = ["hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search"];
        e.add = function(e) {
            var r = e.prototype,
            o = e.access,
            c = {
                get: (o = o || {}).get ? t.partial(o.get, "href") : r.__lookupGetter__("href"),
                set: o.set ? t.partial(o.set, "href") : r.__lookupSetter__("href")
            };
            "worker" === n.mode && (c.get = function() {
                return window.__app_origin_url
            }),
            t.each(s,
            function(t) {
                Object.defineProperty(r, t, {
                    get: function() {
                        "search" === t && (t = "query");
                        var e = (0, i.unparse)(c.get.call(this));
                        return e ? (0, a.
                    default)(e)[t]:
                        ""
                    },
                    set: function(e) {
                        if ("origin" === t) return e;
                        "search" === t && (t = "query");
                        var r = void 0;
                        "href" === t ? r = (0, a.
                    default)((0, i.parse)(e)) : (r = (0, a.
                    default)((0, i.unparse)(c.get.call(this)) || "/")).set(t, e),
                        c.set.call(this, (0, i.parse)(r.href))
                    }
                })
            })
        }
    }).call(this, r(2), r(0))
},
function(t, e, r) { (function(t) {
        var e = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.
        default = t,
            e
        } (r(9)),
        n = r(4),
        i = r(8),
        a = r(13);
        var s = {
            __vpn__: {
                parsers: e,
                origins: n.origins
            },
            vpn_eval: a.vpnEval,
            vpn_rewrite_js: a.vpnRewriteJs,
            vpn_fn_call: i.vpnFnCall,
            vpn_inject_script: a.vpnInjectScript
        };
        t.each(s,
        function(t, e) {
            window[e] = t
        })
    }).call(this, r(2))
}]);
