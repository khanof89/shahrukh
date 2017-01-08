//v129 (c) 2008-2016 33Across Inc. All Rights Reserved
Tynt = window.Tynt || [];
"undefined" == typeof Tynt.TIL && "undefined" == typeof Tynt.TCL && function() {
    var d = window,
        g = document,
        m = {
            distro: "TC-" + (new Date).getTime()
        };
    Tynt.TCL = function() {
        function u() {
            return 3 == m.type || 4 == m.type
        }

        function I(a) {
            var b = I.options;
            a = b.parser[b.strictMode ? "strict" : "loose"].exec(a);
            for (var c = {}, e = 14; e--;) c[b.key[e]] = a[e] || "";
            c[b.q.name] = {};
            c[b.key[12]].replace(b.q.parser, function(a, e, f) {
                e && (c[b.q.name][e] = f)
            });
            return c
        }
        if (document.body) {
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            });
            var h = {
                _maxRef: 600,
                _idMacro: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                init: function() {
                    this._icUrl = m.protocol + (Tynt.e || "") + "ic.tynt.com";
                    this._debUrl = m.protocol + (Tynt.e || "") + "de.tynt.com/deb/v2";
                    this._sicUrl = m.protocol + (Tynt.e || "") + "cdn-sic.33across.com/1/javascripts/sic.js";
                    this._apUrl = m.protocol + (Tynt.e || "") + "cdn-ap.33across.com/javascripts/ap.js"
                },
                newEle: function(a, b, c, e) {
                    e = e || window;
                    a = e.document.createElement(a);
                    b && this.extend(a, b);
                    c && this.extend(a.style, c);
                    return a
                },
                injectScript: function(a, b, c) {
                    b = b ||
                        window;
                    a = this.newEle("script", {
                        async: "async",
                        type: "text/javascript",
                        src: a
                    }, null, b);
                    this.insertEle(a, c || b.document.getElementsByTagName("script")[0])
                },
                injectSicScript: function(a) {
                    this.injectScript(this._sicUrl, window, a)
                },
                injectApolloScript: function() {
                    this.injectScript(this._apUrl)
                },
                injectSicIframe: function(a, b, c) {
                    var e = {
                        width: a.width + "px",
                        height: a.height + "px",
                        border: "0 none",
                        margin: "0"
                    };
                    c && this.extend(e, c);
                    c = this.newEle("iframe", {
                        src: "about:blank",
                        frameBorder: "0",
                        frameSpacing: "0",
                        scrolling: "no"
                    }, e);
                    this.insertEle(c, b);
                    a.iframeId = this.eleId(c);
                    a.sicWindow = c.contentWindow;
                    a = c.contentWindow.document;
                    a.open();
                    a.write('<!DOCTYPE html><html><head><style type="text/css">*{margin:0;padding:0;}</style></head><body><script type="text/javascript">window.Tynt = window.parent.Tynt;\x3c/script><script type="text/javascript" src="' + this._sicUrl + '">\x3c/script></body></html>');
                    a.close()
                },
                insertEle: function(a, b) {
                    b ? "script" == b.tagName.toLowerCase() ? b.parentNode.insertBefore(a, b) : b.appendChild(a) : document.body.appendChild(a)
                },
                eleId: function(a) {
                    var b = a.id;
                    b || (b = "x33x" + Date.now(), a.id = b);
                    return b
                },
                injectPixel: function(a, b, c) {
                    var e;
                    try {
                        e = g.createElement("img")
                    } catch (d) {
                        e = document.createElement("img")
                    }
                    e && (b && (e.onload = b), c && (e.onerror = c), e.src = a)
                },
                docUrl: function() {
                    var a = this.getLink("canonical");
                    a || (a = this.getMeta("property", "og:url", "name", "original-source"));
                    if (a) {
                        if (0 != a.indexOf("http")) {
                            var b = m.protocol + d.location.host + d.location.pathname,
                                c = g.getElementsByTagName("base")[0];
                            c && (c = c.getAttribute("href")) && (b = c);
                            "/" == a.charAt(0) ?
                                (c = b.indexOf("/", 9), -1 < c && (b = b.slice(0, c))) : (c = b.lastIndexOf("/"), b = 9 < c ? b.slice(0, c + 1) : b + "/");
                            a = b + a
                        }
                        return a
                    }
                    return ""
                },
                getMeta: function(a, b, c, e) {
                    var d, k = null,
                        f = null,
                        n = g.getElementsByTagName("meta");
                    for (d = 0; d < n.length; ++d) k || n[d].getAttribute(a) !== b ? c && !f && n[d].getAttribute(c) === e && (f = n[d].getAttribute("content") || null) : k = n[d].getAttribute("content") || null;
                    return k || f
                },
                getLink: function(a, b) {
                    var c, e, d = g.getElementsByTagName("link");
                    for (c = 0; c < d.length; ++c)
                        if (e = d[c].getAttribute("rel"), d[c].getAttribute("href") &&
                            e && (!b && 0 <= e.indexOf(a) || b && e == a)) return d[c].href;
                    return null
                },
                extend: function(a, b) {
                    var c, e;
                    for (c = 1; c < arguments.length; ++c)
                        for (e in arguments[c]) arguments[c].hasOwnProperty(e) && (a[e] = arguments[c][e]);
                    return a
                },
                isArray: function(a) {
                    return "undefined" != typeof a && "[object Array]" === Object.prototype.toString.call(a)
                },
                inArray: function(a, b) {
                    return 0 <= this.indexOf(a, b)
                },
                toArray: function(a, b) {
                    return Array.prototype.slice.call(a, b || 0)
                },
                indexOf: function(a, b) {
                    if (a.indexOf) return a.indexOf(b);
                    for (var c = 0; c < a.length; ++c)
                        if (a[c] ===
                            b) return c;
                    return -1
                },
                unique: function(a) {
                    var b, c = {},
                        e = [];
                    for (b = 0; b < a.length; ++b) c[a[b]] || (c[a[b]] = !0, e.push(a[b]));
                    return e
                },
                iframeType: function() {
                    var a = this.iframeEle(),
                        b = 0;
                    if (a) a.id && 0 <= a.id.search(/google_ads?_i?frame/) ? (b = 6, h.clog("In same-origin iframe from DFP")) : (b = 5, h.clog("In same-origin iframe"));
                    else try {
                        window != window.top ? "undefined" != typeof window.$sf ? (b = 4, h.clog("In SafeFrame")) : (b = 3, h.clog("In cross-origin iframe")) : h.clog("In top window")
                    } catch (c) {
                        b = 3, h.clog("DEBUG: exception 2")
                    }
                    return b
                },
                iframeEle: function(a) {
                    var b = null;
                    a = a || window;
                    try {
                        b = a.frameElement
                    } catch (c) {}
                    return b
                },
                iframeTop: function() {
                    var a = window,
                        b = null;
                    try {
                        for (; a != window.top;) b = a, a = a.parent
                    } catch (c) {
                        return null
                    }
                    return b ? this.iframeEle(b) : null
                },
                getTopWin: function() {
                    var a = window;
                    try {
                        for (; a.parent !== a && a.parent.document;) a = a.parent
                    } catch (b) {}
                    return a
                },
                jsonDecode: function(a) {
                    if ("function" !== typeof Array.prototype.toJSON) return JSON.stringify(a);
                    var b = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    a = JSON.stringify(a);
                    Array.prototype.toJSON =
                        b;
                    return a
                },
                getCookie: function(a, b) {
                    for (var c = b + "=", e = a.split(";"), d = 0; d < e.length; d++) {
                        for (var k = e[d];
                            " " == k.charAt(0);) k = k.substring(1, k.length);
                        if (0 === k.indexOf(c)) return k.substring(c.length, k.length)
                    }
                    return null
                },
                trim: function(a) {
                    return a.replace(/^\s+|\s+$/g, "")
                },
                trunc: function(a, b) {
                    var c, e;
                    if (!a || a.length <= b) return a;
                    c = a.substring(0, b);
                    for (e = 1; 3 >= e; ++e)
                        if ("%" == c.charAt(c.length - e)) return c.substring(0, c.length - e);
                    return c
                },
                tyntIds: function() {
                    return this.unique(Tynt).join("~")
                },
                _log: function(a) {
                    "undefined" ==
                    typeof Tynt.debug && 0 < d.location.search.indexOf("__tcdebugmode=1") && d.console && d.console.log && (Tynt.debug = 1);
                    1 === Tynt.debug && (a.unshift("[TC]"), d.console.log.apply(d.console, a))
                },
                log: function() {
                    u() ? this.clog.apply(this, arguments) : this._log(this.toArray(arguments))
                },
                clog: function() {
                    var a = this.toArray(arguments);
                    a.unshift(m.distro);
                    this._log(a)
                },
                callIc: function() {
                    var a, b, c, e, A, k, f, n;
                    if (!d._33Across.state.icDone) {
                        d._33Across.state.icDone = 1;
                        b = this.getCookie(g.cookie, "tracertraffic");
                        a = d.location.hash;
                        a = /tynt=/.test(a) ? a.match(/tynt=?([^?&$#]*)/)[1] : !1;
                        e = c = this._icUrl + "/b/p?id=" + this.tyntIds() + (b ? "&et=" + b : "") + (a ? "&a=" + a : "") + ("string" == typeof Tynt.b ? "&b=" + Tynt.b : "") + "&lm=" + m.type + "&ts=" + Date.now();
                        (a = this.getMeta("property", "og:image:url", "property", "og:image")) && (e += "&img=" + encodeURIComponent(this.trunc(a, 250)));
                        A = e;
                        (a = this.getMeta("property", "og:title")) && a != g.title && (A += "&ct=" + encodeURIComponent(this.trunc(a, 200)));
                        k = A;
                        g.referrer && (a = this.trunc(g.referrer, this._maxRef), k += "&r=" + encodeURIComponent(a));
                        f = k;
                        if (a = g.title || d.location.hostname) a = this.trim(this.trunc(a, 200)), f += "&t=" + encodeURIComponent(a);
                        n = f;
                        if (a = this.docUrl()) a = this.trunc(a, 400), n += "&cu=" + encodeURIComponent(a);
                        b = n;
                        if (a = this.getLink("amphtml", !0)) a = this.trunc(a, 250), b += "&ah=" + encodeURIComponent(a);
                        h.callIc.rsp = function() {
                            d._33Across.state.icDone = 2
                        };
                        h.clog("Calling IC");
                        this.injectPixel(b, h.callIc.rsp, function() {
                            this.injectPixel(n, h.callIc.rsp, function() {
                                h.injectPixel(f, h.callIc.rsp, function() {
                                    h.injectPixel(k, h.callIc.rsp, function() {
                                        h.injectPixel(A,
                                            h.callIc.rsp,
                                            function() {
                                                h.injectPixel(e, h.callIc.rsp, function() {
                                                    h.injectPixel(c, h.callIc.rsp)
                                                })
                                            })
                                    })
                                })
                            })
                        })
                    }
                },
                callDeb: function(a) {
                    if ("undefined" == typeof a) {
                        if (d._33Across.state.deDone) return;
                        a = 4
                    }
                    d._33Across.state.deDone = !0;
                    0 == a || 2 == d._33Across.state.icDone ? (h.clog("Calling DEB" + (0 == a ? " on IC timeout" : "")), this.injectScript(this._debUrl + "?id=" + this.tyntIds() + "&r=" + encodeURIComponent(this.trunc(g.referrer, this._maxRef)), d)) : setTimeout(function() {
                        h.callDeb(a - 1)
                    }, 50)
                },
                injectAf: function(a) {
                    var b = "https://api.b2c.com/api/init-" +
                        (u() ? "146wsg3zg5yy0d1k1ur" : "133ed1mzcoi88y0mx5o");
                    a = this.newEle("script", {
                        async: "async",
                        "data-cfasync": "false",
                        src: b + ".js?pub=" + a
                    }, null, d);
                    this.insertEle(a, d.document.getElementsByTagName("script")[0])
                }
            };
            m.type = h.iframeType();
            5 <= m.type && (d = h.getTopWin(), g = d.document);
            d._33Across || (d._33Across = {});
            d._33Across.state || (d._33Across.state = {
                _pfx: "tta.tc.coi.st.",
                icDone: 0,
                deDone: !1,
                ivDone: !1,
                afDone: !1,
                has: function(a, b) {
                    var c = !1;
                    u() && (c = 0 <= document.cookie.indexOf(this._pfx + a + "=" + b));
                    return c || this[a] === b
                },
                set: function(a, b) {
                    this[a] = b;
                    u() && (document.cookie = this._pfx + a + "=" + b)
                },
                clr: function() {
                    var a, b, c = document.cookie.split(";");
                    for (a = 0; a < c.length; ++a) b = h.trim(c[a]).split("="), b = h.trim(b[0]), 0 == b.indexOf(this._pfx) && (document.cookie = b + "=")
                }
            }, d.addEventListener ? d.addEventListener("unload", function(a) {
                d._33Across.state.clr()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function(a) {
                d._33Across.state.clr()
            }));
            "https:" === d.location.protocol ? (m.isSecure = !0, m.protocol = "https://") : (m.isSecure = !1, m.protocol = "http://");
            h.init();
            I.options = {
                strictMode: !1,
                key: "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            };
            var l = g.body,
                p = g.documentElement,
                S = d.eval("/*@cc_on!@*/false"),
                J = function(a, b) {
                    for (var c = "", e = 0; e < b; e++) c += a;
                    return c
                },
                D = J("a", 50),
                B = (Tynt.e || "") + "ic.tynt.com",
                K = B + "/b/s",
                L;
            L = d.addEventListener ? function(a, b, c) {
                a.addEventListener(b, c, !1)
            } : function(a, b, c) {
                a.attachEvent("on" + b, c)
            };
            var T = function(a) {
                    "complete" == g.readyState ? a() : L(d, "load", function(b) {
                        setTimeout(function() {
                            "undefined" != typeof g.readyState || S || (g.readyState = "complete");
                            a()
                        }, 10)
                    })
                },
                w = function(a, b) {
                    var c = [],
                        e = function(a, b) {
                            var c = m.protocol +
                                a.replace("id=" + D, "id=" + h.tyntIds()); - 1 < c.indexOf(B + "/b/p?") && "string" == typeof Tynt.b && (c += "&b=" + Tynt.b);
                            var e = new Image(1, 1);
                            b && (e.onerror = b);
                            e.src = c
                        };
                    w = function(a, b) {
                        c.push([a, b])
                    };
                    T(function() {
                        w = e;
                        for (var a = 0; a < c.length; a++) w(c[a][0], c[a][1]);
                        c = null
                    });
                    w(a, b)
                },
                M = function(a) {
                    var b = [],
                        c = "",
                        e;
                    for (e in a) a.hasOwnProperty(e) && (b.push(c, e, "=", a[e]), c = "&");
                    return b.join("")
                },
                O = function(a) {
                    for (var b = 0, c = 100 > a.length ? a.length : 100, e = 0; e < c; e++) b += a.charCodeAt(e);
                    a = Math.floor(3844 * Math.random());
                    c = Math.abs(Date.now() -
                        12281184E5);
                    return N(c, 7) + N((b + a) % 3844, 2)
                },
                P = function(a) {
                    if (62 > a) return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(this);
                    var b = Math.floor(a / 62);
                    a -= 62 * b;
                    return 62 <= b ? P(b) + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a) : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(b) + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a)
                },
                N = function(a, b) {
                    var c = P(a);
                    return J("0", b - c.length) + c
                },
                U = h.trim((g.title || d.location.hostname).toString()).replace(new RegExp(d.location.hash,
                    "g"), ""),
                V = function() {
                    if (-1 !== g.cookie.indexOf("tracertraffic=") && (!g.referrer || -1 == g.referrer.indexOf(d.location.host))) {
                        var a = d.location.hostname.split("."),
                            b, c = 2;
                        do b = "tracertraffic=0;path=/;domain=." + a.slice(a.length - c, a.length).join(".") + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", g.cookie = b, c++; while (-1 == g.cookie.indexOf("tracertraffic=0") && c <= a.length); - 1 == g.cookie.indexOf("tracertraffic=0") && (g.cookie = "tracertraffic=0;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT")
                    }
                },
                v = function() {
                    var a = [];
                    return function(b) {
                        for (var c =
                                a.length - 1; 0 <= c; c--)
                            if (a[c] == b) return !1;
                        a.unshift(b);
                        3 < a.length && a.pop();
                        return !0
                    }
                },
                W = v(),
                X = v(),
                Y = function(a) {
                    var b, c = function(a) {
                        d.removeEventListener("blur", c, !1);
                        G(b);
                        return !0
                    };
                    return function(a) {
                        b = a.target || a.srcElement;
                        d.removeEventListener("blur", c, !1);
                        "IMG" == b.nodeName && "A" != b.parentNode.nodeName && (d.addEventListener("blur", c, !1), setTimeout(function() {
                            g.removeEventListener("blur", c, !1)
                        }, 1E4));
                        return !0
                    }
                }(),
                Q = function(a) {
                    G(a.target || a.srcElement, !0)
                },
                x, R = function(a) {
                    a = a.target || a.srcElement;
                    x = "IMG" == a.nodeName ? a : null
                },
                H = function(a) {
                    var b = function(a) {
                            return "number" == typeof a.pageX ? {
                                x: a.pageX - (p.scrollLeft ? p.scrollLeft : l.scrollLeft),
                                y: a.pageY - (p.scrollTop ? p.scrollTop : l.scrollTop)
                            } : {
                                x: a.clientX,
                                y: a.clientY
                            }
                        },
                        c = function(a) {
                            a = b(a);
                            return 0 >= a.x || 0 >= a.y || a.x >= l.clientWidth || a.y >= l.clientHeight
                        },
                        e = function(a) {
                            a = b(a);
                            return 0 >= a.x || 0 >= a.y || a.x >= p.clientWidth || a.y >= p.clientHeight
                        },
                        d = function(a) {
                            return "#document" == a.target.nodeName
                        },
                        k = function(a) {
                            a = b(a);
                            return 4 >= a.x || 4 >= a.y || a.x >= p.clientWidth -
                                4 || a.y >= p.clientHeight - 4
                        },
                        f = function(a) {
                            f = navigator.userAgent.match("MSIE") ? g.compatMode && -1 != g.compatMode.indexOf("CSS") ? e : c : navigator.userAgent.match("Firefox") ? d : k;
                            f(a)
                        };
                    return function(a) {
                        x && f(a) && (G(x), x = null);
                        return !0
                    }
                }();
            Tynt.ci = function() {
                var a;
                return function(b, c) {
                    a = c || a;
                    var e = K + ["?ci=", b, "&id=", D, "&g=", a, "&r=", encodeURIComponent(g.referrer), "&ts=", Date.now()].join("");
                    w(e)
                }
            }();
            Tynt.st = function() {
                var a;
                return function(b, c, e, h) {
                    a = e || a;
                    b = [K, "?", encodeURIComponent(b), "=", encodeURIComponent(c),
                        "&id=", D, "&g=", a, "&r=", encodeURIComponent(g.referrer), "&href=", encodeURIComponent(d.location.href), "&ts=", Date.now()
                    ];
                    c = "";
                    if (h) {
                        c = [];
                        e = "";
                        for (var k in h) h.hasOwnProperty(k) && (c.push(e, encodeURIComponent(k), "=", encodeURIComponent(h[k])), e = "&");
                        c = "&" + c.join("")
                    }
                    w(b.join("") + c)
                }
            }();
            Tynt.c ? v = function() {} : (Tynt.c = !0, Tynt.m = Tynt.m || [], Tynt.n = Tynt.n || [], v = function() {
                var a = !0,
                    b, c = function(b, c) {
                        var d;
                        d = (d = h.trim(c)) ? d.split(/\s+/i).length : 0;
                        var f = {
                            id: D,
                            wc: d,
                            c: c,
                            f: a ? 1 : 0,
                            t: U
                        };
                        h.extend(f, b);
                        a = !1;
                        d = f.trace_type;
                        delete f.trace_type;
                        var g = f.g;
                        delete f.g;
                        for (var C = [], t = "id wc f w h t c".split(" "), r = 0; r < t.length; r++) {
                            var p = t[r],
                                l = f[p];
                            l && C.push([p, encodeURIComponent(l).replace(/\'/g, "%27")]);
                            delete f[p]
                        }
                        for (var q in f) f.hasOwnProperty(q) && (t = f[q]) && C.push([q, encodeURIComponent(t).replace(/\'/g, "%27")]);
                        q = [];
                        var r = 2048 - ((m.protocol + B + "/a/t/x#?").length + (3 + g.length) + 5),
                            p = C.length,
                            y = l = 0,
                            z = 0,
                            v, u, x, E, F = 0;
                        for (q[F] = {
                                g: g,
                                tp: null
                            }; l < p && 35 > q.length;) v = C[l][0], f = C[l][1], x = v.length + 2, u = r - x - y, 0 < u ? (t = f.substring(z, z + u),
                            E = t.slice(-2).indexOf("%"), -1 < E && (t = f.substring(z, z + u - 2 + E), y += E + 2), y += t.length + x, z += t.length, q[F][v] = t) : y = r, y >= r && (q[++F] = {
                            g: g,
                            p: F
                        }, y = 0), z >= f.length && (l++, z = 0);
                        q[0].tp = q.length;
                        w(B + "/b/t/" + d + "?" + M(q[0]));
                        for (g = 1; g < q.length; g++) w(B + "/b/x/" + d + "?" + M(q[g]))
                    };
                d.addEventListener ? (navigator.userAgent.match(/Firefox\/2\b/) || l.addEventListener("copy", Q, !1), d.addEventListener("mousedown", R, !1), d.addEventListener("dragleave", H, !1), d.addEventListener("dragexit", H, !1), g.addEventListener("contextmenu", Y, !1)) : (l.attachEvent("oncopy",
                    Q), g.getElementsByTagName("html")[0].attachEvent("ondragleave", H), l.attachEvent("onmousedown", R));
                V();
                h.callIc();
                h.callDeb();
                return function(a, m) {
                    if (!g.getElementById("tyntSh")) {
                        var k, f, n;
                        m && (g.selection && g.selection.createRange ? (f = g.selection.createRange(), n = f.duplicate(), k = f.text) : (f = d.getSelection(), n = 0 < f.rangeCount && f.getRangeAt(0), k = f.toString()));
                        var l = a.src;
                        if (l && !k && X(l)) {
                            f = {
                                trace_type: 3,
                                g: O(l),
                                w: a.width,
                                h: a.height
                            };
                            for (n = 0; n < Tynt.n.length; n++) Tynt.n[n](f, l);
                            c(f, l)
                        } else if (k && h.trim(k).length &&
                            "TEXTAREA" != a.nodeName && "INPUT" != a.nodeName) {
                            l = W(k);
                            f = {
                                trace_type: 1
                            };
                            l && (b = O(k));
                            f.g = b;
                            for (var p = !0, r = 0; r < Tynt.m.length; r++) p = p && Tynt.m[r](f, k, n, l);
                            l && p && c(f, k)
                        }
                    }
                }
            });
            if (!/tracer=test|tracer=no_tracing|disableTracer=/.test(d.location.href) && !/disableTracer=y/.test(g.cookie)) var G = v()
        } else setTimeout(function() {
            Tynt.TCL()
        }, 62)
    };
    Tynt.TCL()
}();