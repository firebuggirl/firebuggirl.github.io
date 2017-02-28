function initialize() {
    var e = {
            lat: 29.9579921,
            lng: -90.0659233
        },
        t = new google.maps.Map(document.getElementById("map"), {
            center: e,
            zoom: 14
        }),
        n = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
            position: e,
            pov: {
                heading: 10,
                pitch: -10
            }
        });
    t.setStreetView(n);
}
var posts = [

      {
        "id":1,
        "text":"<h1>Customize Wordpress</h1><h3>Task: Customize Genesis child theme Centric Pro:</h3><p>Create a modular workflow with automation along with custom Instagram and Spotify page templates.</p><h4>Tools and Methods used:</h4><br><li>Google page speed</li><li>Gulp</li><li>Gulp Sass</li><li>Gulp Images for image optimization</li><li>Gulp Uglify CSS</li><li>Gulp Clean CSS</li><li>Gulp Concat</li><li>Gulp Uglify</li><li>BrowserSync + Reload</li>"

      },
      {
        "id":2,
        "text":"<h1>Online Registration Form</h1><h3>Treehouse Front End Tech Degree Project 3 task:</h3><p>Build a responsive, mobile-first registration form using a variety of HTML form elements.</p><h4>Tools and Methods used:</h4><br><li>Sass</li><li>Gulp</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":3,
        "text":"<h1>Interactive Photo Gallery</h1><h3>Treehouse Front End Tech Degree Project 4 task:</h3><p>Use HTML, CSS and JavaScript to create an interactive, searchable gallery of photos.</p><h4>Tools and Methods used:</h4><br><li>Sass</li><li>Gulp</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"
      },
      {
        "id":4,
        "text":"<h1>FireBug Music</h1><h3>FireBug band website:</h3><br><p>Design a responsive and interactive website for my band FireBug </p><h4>Tools and Methods used:</h4></h4><li>Soundcloud API</li><li>Instagram API</li><li>Sass</li><li>Gulp/Node.js</li><li>Animsition</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"
      },

      {
        "id":5,
        "text":"<h1>SVG Site Update</h1><h3>Treehouse Front End Tech Degree Project 6 task:</h3><br><p>Master Scaleable Vector Graphics. SVG graphics are quickly becoming one of the most widely used graphic formats on the Web. Modernize the user interface of a web page by adding, styling and optimizing SVG graphics.</p><h4>Tools and Methods used:</h4><li>Sass</li><li>Gulp/Node.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":6,
        "text":"<h1>Interactive Video Player</h1><h3>Treehouse Front End Tech Degree Project 7 task:</h3><br><p>Build an HTML5 video player using JavaScript and the HTML5 Video API. Video, and the interface used to control the video, is increasingly important for all many different kinds of web applications including web site landing pages, blogs, podcasts, product marketing and training.</p><h4>Tools and Methods used:</h4><li>JS & jQuery</li><li>Sass</li><li>Gulp/Node.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":7,
        "text":"<h1>Accessibility Refactor</h1><h3>Treehouse Front End Tech Degree Project 8 task:</h3><br><p>Modify a website to make it more accessible for users and search engines by taking a set of interlinked pages that suffer from various accessibility flaws and refine and update them so they are accessible and pass an accessibility validator(s)'s automated checks and a human's check.</p><h4>Tools and Methods used:</h4><li>Sass</li><li>Gulp</li><li>Chrome Dev Tools-Audit Tab</li><li>Chrome Color Contrast Analyzer</li><li>Chrome Accessibility Developer Tools</li><li></li><li>W3C CSS Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":8,
        "text":"<h1>Web APP Dashboard</h1><h3>Treehouse Front End Tech Degree Project 9 task:</h3><br><p>Build an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.</p><h4>Tools and Methods used:</h4><li>Sass</li><li>Gulp</li><li>Chart.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":9,
        "text":"<h1>Public API</h1><h3>Treehouse Front End Tech Degree Project 10 task:</h3><br><p>Use Javascript programming to create a gallery of information and images by communication with a third-party API (Application Programming Interface).</p><h4>Tools and Methods used:</h4><br><li>Spotify Public API</li><li>Flickr Public API</li><li>IMDB Public API</li><li>Sass</li><li>Gulp/Node.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":10,
        "text":"<h1>Web Optimization</h1><h3>Treehouse Front End Tech Degree Project 11 task:</h3><br><p>Performance_Optimization Apply the skills learned for optimization of graphics, HTML, CSS, and JavaScript to take a poorly optimized site and reduce the total load size to under 1.3mb and total requests to less than 27. Students will need to analyze the assets they've been provided to see where optimizations can and need to be made, make those optimizations, and measure their success. Multiple analyzation, optimization, and measuring cycles may be required.</p><h4>Tools and Methods used:</h4><br><li>Google page speed</li><br><li>Node phantomas/http-server</li><br><li>Gulp Images for image optimization<li><br><li>Gulp minifyHTML, minifyCSS, Gulp Watch, Gulp connect, Gulp concatScripts, Gulp build (for automation)</li><br><li>W3C Markup Validation Service</li><br><li>W3C HTML Markup Validation Service</li><br><li>JS Hint</li>",

      },
      {
        "id":11,
        "text":"<h1>CSS to Sass</h1><h3>Treehouse Front End Tech Degree Project 5 task:</h3><p>Use programming principles to refactor a standard CSS stylesheet to Sass by identifying repeating patterns, using variables, and adding mixins.</p><h4>Tools and Methods used:</h4><br><li>Sass</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },

    ],
    jsonData = JSON.stringify(posts);
if (window.Modernizr = function(e, t, n) {
        function i(e) {
            b.cssText = e
        }

        function r(e, t) {
            return i(C.join(e + ";") + (t || ""))
        }

        function o(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function s(e, t) {
            for (var i in e) {
                var r = e[i];
                if (!a(r, "-") && b[r] !== n) return "pfx" != t || r
            }
            return !1
        }

        function l(e, t, i) {
            for (var r in e) {
                var a = t[e[r]];
                if (a !== n) return i === !1 ? e[r] : o(a, "function") ? a.bind(i || t) : a
            }
            return !1
        }

        function c(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                r = (e + " " + E.join(i + " ") + i).split(" ");
            return o(t, "string") || o(t, "undefined") ? s(r, t) : (r = (e + " " + S.join(i + " ") + i).split(" "), l(r, t, n))
        }

        function u() {
            h.input = function(n) {
                for (var i = 0, r = n.length; i < r; i++) L[n[i]] = !!(n[i] in x);
                return L.list && (L.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), L
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
                for (var i, r, o, a = 0, s = e.length; a < s; a++) x.setAttribute("type", r = e[a]), i = "text" !== x.type, i && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && x.style.WebkitAppearance !== n ? (g.appendChild(x), o = t.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), A[e[a]] = !!i;
                return A
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d, p, f = "2.8.3",
            h = {},
            m = !0,
            g = t.documentElement,
            v = "modernizr",
            y = t.createElement(v),
            b = y.style,
            x = t.createElement("input"),
            w = ":)",
            T = {}.toString,
            C = " -webkit- -moz- -o- -ms- ".split(" "),
            k = "Webkit Moz O ms",
            E = k.split(" "),
            S = k.toLowerCase().split(" "),
            N = {
                svg: "http://www.w3.org/2000/svg"
            },
            D = {},
            A = {},
            L = {},
            j = [],
            $ = j.slice,
            H = function(e, n, i, r) {
                var o, a, s, l, c = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = t.createElement("div"), s.id = r ? r[i] : v + (i + 1), c.appendChild(s);
                return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (u ? c : d).innerHTML += o, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), a = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l), !!a
            },
            P = function(t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t) && n(t).matches || !1;
                var i;
                return H("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                    i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), i
            },
            M = function() {
                function e(e, r) {
                    r = r || t.createElement(i[e] || "div"), e = "on" + e;
                    var a = e in r;
                    return a || (r.setAttribute || (r = t.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""), a = o(r[e], "function"), o(r[e], "undefined") || (r[e] = n), r.removeAttribute(e))), r = null, a
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            q = {}.hasOwnProperty;
        p = o(q, "undefined") || o(q.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return q.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = $.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var r = function() {};
                        r.prototype = t.prototype;
                        var o = new r,
                            a = t.apply(o, n.concat($.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat($.call(arguments)))
                };
            return i
        }), D.flexbox = function() {
            return c("flexWrap")
        }, D.flexboxlegacy = function() {
            return c("boxDirection")
        }, D.canvas = function() {
            var e = t.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, D.canvastext = function() {
            return !(!h.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function"))
        }, D.webgl = function() {
            return !!e.WebGLRenderingContext
        }, D.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : H(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, D.geolocation = function() {
            return "geolocation" in navigator
        }, D.postmessage = function() {
            return !!e.postMessage
        }, D.websqldatabase = function() {
            return !!e.openDatabase
        }, D.indexedDB = function() {
            return !!c("indexedDB", e)
        }, D.hashchange = function() {
            return M("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
        }, D.history = function() {
            return !(!e.history || !history.pushState)
        }, D.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, D.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, D.rgba = function() {
            return i("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
        }, D.hsla = function() {
            return i("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
        }, D.multiplebgs = function() {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, D.backgroundsize = function() {
            return c("backgroundSize")
        }, D.borderimage = function() {
            return c("borderImage")
        }, D.borderradius = function() {
            return c("borderRadius")
        }, D.boxshadow = function() {
            return c("boxShadow")
        }, D.textshadow = function() {
            return "" === t.createElement("div").style.textShadow
        }, D.opacity = function() {
            return r("opacity:.55"), /^0.55$/.test(b.opacity)
        }, D.cssanimations = function() {
            return c("animationName")
        }, D.csscolumns = function() {
            return c("columnCount")
        }, D.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return i((e + "-webkit- ".split(" ").join(t + e) + C.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
        }, D.cssreflections = function() {
            return c("boxReflect")
        }, D.csstransforms = function() {
            return !!c("transform")
        }, D.csstransforms3d = function() {
            var e = !!c("perspective");
            return e && "webkitPerspective" in g.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, D.csstransitions = function() {
            return c("transition")
        }, D.fontface = function() {
            var e;
            return H('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
                var r = t.getElementById("smodernizr"),
                    o = r.sheet || r.styleSheet,
                    a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                e = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
            }), e
        }, D.generatedcontent = function() {
            var e;
            return H(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, D.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (e) {}
            return n
        }, D.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return n
        }, D.localstorage = function() {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, D.sessionstorage = function() {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, D.webworkers = function() {
            return !!e.Worker
        }, D.applicationcache = function() {
            return !!e.applicationCache
        }, D.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
        }, D.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
        }, D.smil = function() {
            return !!t.createElementNS && /SVGAnimate/.test(T.call(t.createElementNS(N.svg, "animate")))
        }, D.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(T.call(t.createElementNS(N.svg, "clipPath")))
        };
        for (var I in D) p(D, I) && (d = I.toLowerCase(), h[d] = D[I](), j.push((h[d] ? "" : "no-") + d));
        return h.input || u(), h.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var i in e) p(e, i) && h.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), h[e] !== n) return h;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), h[e] = t
                }
                return h
            }, i(""), y = x = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = v[e[m]];
                    return t || (t = {}, g++, e[m] = g, v[g] = t), t
                }

                function o(e, n, i) {
                    if (n || (n = t), u) return n.createElement(e);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[e] ? i.cache[e].cloneNode() : h.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !o.canHaveChildren || f.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || r(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; a < l; a++) o.createElement(s[a]);
                    return o
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var i = r(e);
                    return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || s(e, i), e
                }
                var c, u, d = "3.7.0",
                    p = e.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (e) {
                        c = !0, u = !0
                    }
                }();
                var y = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: a
                };
                e.html5 = y, l(t)
            }(this, t), h._version = f, h._prefixes = C, h._domPrefixes = S, h._cssomPrefixes = E, h.mq = P, h.hasEvent = M, h.testProp = function(e) {
                return s([e])
            }, h.testAllProps = c, h.testStyles = H, h.prefixed = function(e, t, n) {
                return t ? c(e, t, n) : c(e, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + j.join(" ") : ""), h
    }(this, this.document), ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = re.type(e);
            return "function" !== n && !re.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return re.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (pe.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) {
                return re.inArray(e, t) >= 0 !== n
            })
        }

        function r(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = xe[e] = {};
            return re.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), re.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n)
                    } catch (e) {}
                    re.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (re.acceptData(e)) {
                var r, o, a = re.expando,
                    s = e.nodeType,
                    l = s ? re.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = J.pop() || re.guid++ : a), l[c] || (l[c] = s ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
            }
        }

        function d(e, t, n) {
            if (re.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? re.cache : e,
                    s = o ? e[re.expando] : re.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !c(i) : !re.isEmptyObject(i)) return
                    }(n || (delete a[s].data, c(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return he.activeElement
            } catch (e) {}
        }

        function m(e) {
            var t = qe.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
        }

        function v(e) {
            Le.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = Xe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
        }

        function T(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, r, o = re._data(e),
                    a = re._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function C(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                    r = re._data(t);
                    for (i in r.events) re.removeEvent(t, i, r.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function k(t, n) {
            var i, r = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
            return r.detach(), o
        }

        function E(e) {
            var t = he,
                n = Ze[e];
            return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ke.detach()), Ze[e] = n), n
        }

        function S(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function N(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = pt.length; r--;)
                if (t = pt[r] + n, t in e) return t;
            return i
        }

        function D(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && De(i) && (o[a] = re._data(i, "olddisplay", E(i.nodeName)))) : (r = De(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function A(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function L(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Ne[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Ne[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Ne[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Ne[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Ne[o] + "Width", !0, r)));
            return a
        }

        function j(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = et(e),
                a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
                i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + L(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function $(e, t, n, i, r) {
            return new $.prototype.init(e, t, n, i, r)
        }

        function H() {
            return setTimeout(function() {
                ft = void 0
            }), ft = re.now()
        }

        function P(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ne[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function M(e, t, n) {
            for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function q(e, t, n) {
            var i, r, o, a, s, l, c, u, d = this,
                p = {},
                f = e.style,
                h = e.nodeType && De(e),
                m = re._data(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = re.css(e, "display"), u = "none" === c ? re._data(e, "olddisplay") || E(e.nodeName) : c, "inline" === u && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], mt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        h = !0
                    }
                    p[i] = m && m[i] || re.style(e, i)
                } else c = void 0;
            if (re.isEmptyObject(p)) "inline" === ("none" === c ? E(e.nodeName) : c) && (f.display = c);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !h), h ? re(e).show() : d.done(function() {
                    re(e).hide()
                }), d.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in p) re.style(e, t, p[t])
                });
                for (i in p) a = M(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function I(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function F(e, t, n) {
            var i, r, o = 0,
                a = yt.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = ft || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ft || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (I(u, c.opts.specialEasing); a > o; o++)
                if (i = yt[o].call(c, e, u, c.opts)) return i;
            return re.map(u, M, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function O(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(be) || [];
                if (re.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function W(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, re.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                a = e === Bt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function R(e, t) {
            var n, i, r = re.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && re.extend(!0, e, n), e
        }

        function _(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function B(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a)
                    for (r in c)
                        if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function z(e, t, n, i) {
            var r;
            if (re.isArray(t)) re.each(t, function(t, r) {
                n || Ut.test(e) ? i(e, r) : z(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (r in t) z(e + "[" + r + "]", t[r], n, i)
        }

        function V() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function U() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function X(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var J = [],
            G = J.slice,
            Q = J.concat,
            Y = J.push,
            K = J.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = {},
            ie = "1.11.2",
            re = function(e, t) {
                return new re.fn.init(e, t)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            se = /-([\da-z])/gi,
            le = function(e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: ie,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
            },
            pushStack: function(e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return re.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(re.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Y,
            sort: J.sort,
            splice: J.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], n = r[i], a !== n && (c && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(c, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === re.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && re.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ae, "ms-").replace(se, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e);
                if (i) {
                    if (s)
                        for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(oe, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (K) return K.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r,
                    e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && l.push(r);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(G.call(arguments)))
                }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, c, d, f, h, m;
                if ((t ? t.ownerDocument || t : W) !== $ && j(t), t = t || $, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && P) {
                    if (11 !== s && (r = ye.exec(e)))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!M || !M.test(e))) {
                        if (f = d = O, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = E(e), (d = t.getAttribute("id")) ? f = d.replace(xe, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                            h = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                        }
                        if (m) try {
                            return K.apply(n, h.querySelectorAll(m)), n
                        } catch (e) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[O] = !0, e
            }

            function r(e) {
                var t = $.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = _++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c = [R, o];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (l = t[O] || (t[O] = {}), (s = l[i]) && s[0] === R && s[1] === o) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function g(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
                return a
            }

            function v(e, t, n, r, o, a) {
                return r && !r[O] && (r = v(r)), o && !o[O] && (o = v(o, a)), i(function(i, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        v = i || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : g(v, p, e, s, l),
                        b = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, b, s, l), r)
                        for (c = g(b, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), c = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), u = [function(e, n, i) {
                        var r = !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; r > s; s++)
                    if (n = T.relative[e[s].type]) u = [f(h(u), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                            for (i = ++s; r > i && !T.relative[e[i].type]; i++);
                            return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                        }
                        u.push(n)
                    }
                return h(u)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, p, f = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = D,
                            b = i || o && T.find.TAG("*", c),
                            x = R += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (D = a !== $ && a); h !== w && null != (u = b[h]); h++) {
                            if (o && u) {
                                for (d = 0; p = e[d++];)
                                    if (p(u, a, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (R = x)
                            }
                            r && ((u = !p && u) && f--, i && m.push(u))
                        }
                        if (f += h, r && h !== f) {
                            for (d = 0; p = n[d++];) p(m, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (R = x, D = y), m
                    };
                return r ? i(a) : a
            }
            var x, w, T, C, k, E, S, N, D, A, L, j, $, H, P, M, q, I, F, O = "sizzle" + 1 * new Date,
                W = e.document,
                R = 0,
                _ = 0,
                B = n(),
                z = n(),
                V = n(),
                U = function(e, t) {
                    return e === t && (L = !0), 0
                },
                X = 1 << 31,
                J = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                Y = G.push,
                K = G.push,
                Z = G.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = ie.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ce = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(ae),
                fe = new RegExp("^" + re + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Te = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Ce = function() {
                    j()
                };
            try {
                K.apply(G = Z.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: G.length ? function(e, t) {
                        Y.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, j = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : W;
                return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, H = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), P = !k(i), w.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function(e) {
                    return H.appendChild(e).id = O, !i.getElementsByName || !i.getElementsByName(O).length
                }), w.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return P ? t.getElementsByClassName(e) : void 0
                }, q = [], M = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                    H.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || M.push(".#.+[+~]")
                }), r(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (w.matchesSelector = ve.test(I = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), q.push("!=", ae)
                }), M = M.length && new RegExp(M.join("|")), q = q.length && new RegExp(q.join("|")), t = ve.test(H.compareDocumentPosition), F = t || ve.test(H.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return L = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === W && F(W, e) ? -1 : t === i || t.ownerDocument === W && F(W, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return L = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        c = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[r] === c[r];) r++;
                    return r ? a(l[r], c[r]) : l[r] === W ? -1 : c[r] === W ? 1 : 0
                }, i) : $
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== $ && j(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !P || q && q.test(n) || M && M.test(n))) try {
                    var i = I.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, $, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== $ && j(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== $ && j(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (L = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), L) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[O] || (g[O] = {}), c = u[e] || [], f = c[0] === R && c[1], p = c[0] === R && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                        if (1 === d.nodeType && ++p && d === t) {
                                            u[e] = [R, f, p];
                                            break
                                        }
                                } else if (y && (c = (t[O] || (t[O] = {}))[e]) && c[0] === R) p = c[1];
                                else
                                    for (;
                                        (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[O] || (d[O] = {}))[e] = [R, p]), d !== t)););
                                return p -= r, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[O] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(le, "$1"));
                        return r[O] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(we, Te),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
                var i, r, o, a, s, l, c, u = z[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = T.preFilter; s;) {
                    (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) !(r = he[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
            }, S = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[O] ? i.push(o) : r.push(o);
                    o = V(e, b(r, i)), o.selector = e
                }
                return o
            }, N = t.select = function(e, t, n, i) {
                var r, o, a, s, l, c = "function" == typeof e && e,
                    d = !i && E(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);)
                        if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, Te), be.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && p(o), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return (c || S(e, d))(i, t, !P, n, be.test(e) && u(t.parentNode) || t), n
            }, w.sortStable = O.split("").sort(U).join("") === O, w.detectDuplicates = !!L, j(), w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition($.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var ue = re.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pe = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (re.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
            }
        });
        var fe, he = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = re.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && re.isPlainObject(t))
                            for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = he.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return fe.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = he, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
            };
        ge.prototype = re.fn, fe = re(he);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), re.fn.extend({
            has: function(e) {
                var t, n = re(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? re.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return re.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return re.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return re.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return re.sibling(e.firstChild)
            },
            contents: function(e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var r = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var be = /\S+/g,
            xe = {};
        re.Callbacks = function(e) {
            e = "string" == typeof e ? xe[e] || o(e) : re.extend({}, e);
            var t, n, i, r, a, s, l = [],
                c = !e.once && [],
                u = function(o) {
                    for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function t(n) {
                                re.each(n, function(n, i) {
                                    var r = re.type(i);
                                    "function" === r ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                                })
                            }(arguments), t ? r = l.length : n && (s = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(e, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, o) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, re.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = G.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : re.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var we;
        re.fn.ready = function(e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--re.readyWait : !re.isReady) {
                    if (!he.body) return setTimeout(re.ready);
                    re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
                }
            }
        }), re.ready.promise = function(t) {
            if (!we)
                if (we = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready);
                else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && he.documentElement
                } catch (e) {}
                n && n.doScroll && ! function e() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var Te, Ce = "undefined";
        for (Te in re(ne)) break;
        ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, re(function() {
                var e, t, n, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = he.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        ne.deleteExpando = !1
                    }
                }
                e = null
            }(), re.acceptData = function(e) {
                var t = re.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
            };
        var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !c(e)
            },
            data: function(e, t, n) {
                return u(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return u(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), re.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                        re._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, e, t)
                }) : o ? l(o, e, re.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    re.removeData(this, e)
                })
            }
        }), re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = re._queueHooks(e, t),
                    a = function() {
                        re.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(e, t + "queue"), re._removeData(e, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = re.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ne = ["Top", "Right", "Bottom", "Left"],
            De = function(e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            },
            Ae = re.access = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === re.type(n)) {
                    r = !0;
                    for (s in n) re.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(re(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Le = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = he.createElement("input"),
                t = he.createElement("div"),
                n = he.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = he.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var je = /^(?:input|select|textarea)$/i,
            $e = /^key/,
            He = /^(?:mouse|pointer|contextmenu)|click/,
            Pe = /^(?:focusinfocus|focusoutblur)$/,
            Me = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, f, h, m, g = re._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                            return typeof re === Ce || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (c = re.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = re.event.special[f] || {}, d = re.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && re.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), re.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, f, h, m, g = re.hasData(e) && re._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(be) || [""], c = t.length; c--;)
                        if (s = Me.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = re.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || re.removeEvent(e, f, g.handle), delete u[f])
                        } else
                            for (f in u) re.event.remove(e, f + t[c], n, i, !0);
                    re.isEmptyObject(u) && (delete g.handle, re._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, p = [i || he],
                    f = te.call(t, "type") ? t.type : t,
                    h = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), c = re.event.special[f] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!r && !c.noBubble && !re.isWindow(i)) {
                        for (l = c.delegateType || f, Pe.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                        u === (i.ownerDocument || he) && p.push(u.defaultView || u.parentWindow || e)
                    }
                    for (d = 0;
                        (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || f, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && re.acceptData(i) && a && i[f] && !re.isWindow(i)) {
                        u = i[a], u && (i[a] = null), re.event.triggered = f;
                        try {
                            i[f]()
                        } catch (e) {}
                        re.event.triggered = void 0, u && (i[a] = u)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = G.call(arguments),
                    l = (re._data(this, "events") || {})[e.type] || [],
                    c = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = re.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = He.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return re.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = re.extend(new re.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = he.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Ce && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return !re.nodeName(this, "form") && void re.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !re.nodeName(this, "form") && void re.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (re.event.special.change = {
            setup: function() {
                return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    je.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                    }), re._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !je.test(this.nodeName)
            }
        }), ne.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                re.event.simulate(t, e.target, re.event.fix(e), !0)
            };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t);
                    r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t) - 1;
                    r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === r && (a = i, i = function(e) {
                    return re().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                    re.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                    re.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        });
        var qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ie = / jQuery\d+="(?:null|\d+)"/g,
            Fe = new RegExp("<(?:" + qe + ")[\\s/>]", "i"),
            Oe = /^\s+/,
            We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Re = /<([\w:]+)/,
            _e = /<tbody/i,
            Be = /<|&#?\w+;/,
            ze = /<(?:script|style|link)/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ue = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qe = m(he),
            Ye = Qe.appendChild(he.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ye.innerHTML = e.outerHTML, Ye.removeChild(o = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && C(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
                    else T(e, o);
                return i = g(o, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, c, u, d = e.length, p = m(t), f = [], h = 0; d > h; h++)
                    if (o = e[h], o || 0 === o)
                        if ("object" === re.type(o)) re.merge(f, o.nodeType ? [o] : o);
                        else if (Be.test(o)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, s.innerHTML = u[1] + o.replace(We, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                    if (!ne.leadingWhitespace && Oe.test(o) && f.push(t.createTextNode(Oe.exec(o)[0])), !ne.tbody)
                        for (o = "table" !== l || _e.test(o) ? "<table>" !== u[1] || _e.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (re.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else f.push(t.createTextNode(o));
                for (s && p.removeChild(s), ne.appendChecked || re.grep(g(f, "input"), v), h = 0; o = f[h++];)
                    if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(p.appendChild(o), "script"), a && w(s), n))
                        for (r = 0; o = s[r++];) Ue.test(o.type || "") && n.push(o);
                return s = null, p
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, c = ne.deleteExpando, u = re.event.special; null != (n = e[a]); a++)
                    if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, J.push(r))
                    }
            }
        }), re.fn.extend({
            text: function(e) {
                return Ae(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return re.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ae(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                    if (!("string" != typeof e || ze.test(e) || !ne.htmlSerialize && Fe.test(e) || !ne.leadingWhitespace && Oe.test(e) || Ge[(Re.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(We, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Q.apply([], e);
                var n, i, r, o, a, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    p = e[0],
                    f = re.isFunction(p);
                if (f || c > 1 && "string" == typeof p && !ne.checkClone && Ve.test(p)) return this.each(function(n) {
                    var i = u.eq(n);
                    f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = re.map(g(s, "script"), b), r = o.length; c > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Je, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), Y.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ke, Ze = {};
        ! function() {
            var e;
            ne.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
            rt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : he.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
        }), ! function() {
            function t() {
                var t, n, i, r;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, r = t.appendChild(he.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
            }
            var n, i, r, o, a, s, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), re.swap = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
        var ot = /alpha\([^)]*\)/i,
            at = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Se + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Se + ")", "i"),
            ut = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            pt = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = re.camelCase(t),
                        l = e.style;
                    if (t = re.cssProps[s] || (re.cssProps[s] = N(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                    if (o = typeof n, "string" === o && (r = ct.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = N(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ut, function() {
                        return j(e, t, i)
                    }) : j(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && et(e);
                    return A(e, n, i ? L(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ne.opacity || (re.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), re.cssHooks.marginRight = S(ne.reliableMarginRight, function(e, t) {
            return t ? re.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ne[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, nt.test(e) || (re.cssHooks[e + t].set = A)
        }), re.fn.extend({
            css: function(e, t) {
                return Ae(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (re.isArray(t)) {
                        for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    De(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = $, $.prototype = {
            constructor: $,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = $.propHooks[this.prop];
                return e && e.get ? e.get(this) : $.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = $.propHooks[this.prop];
                return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
            }
        }, $.prototype.init.prototype = $.prototype, $.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, re.fx = $.prototype.init, re.fx.step = {};
        var ft, ht, mt = /^(?:toggle|show|hide)$/,
            gt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [q],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = gt.exec(t),
                        o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                        a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        re.Animation = re.extend(F, {
                tweener: function(e, t) {
                    re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), re.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? re.extend({}, e) : {
                    complete: n || !n && t || re.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !re.isFunction(t) && t
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(De).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = re.isEmptyObject(e),
                        o = re.speed(t, n, i),
                        a = function() {
                            var t = F(this, re.extend({}, e), o);
                            (r || re._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = re.timers,
                            a = re._data(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = re._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, r)
                }
            }), re.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                re.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var e, t = re.timers,
                    n = 0;
                for (ft = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || re.fx.stop(), ft = void 0
            }, re.fx.timer = function(e) {
                re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                ht || (ht = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(ht), ht = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(e, t) {
                return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, r;
                t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), r = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
            }();
        var xt = /\r/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                            if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                }
            }, ne.checkOn || (re.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt, Tt, Ct = re.expr.attrHandle,
            kt = /^(?:checked|selected)$/i,
            Et = ne.getSetAttribute,
            St = ne.input;
        re.fn.extend({
            attr: function(e, t) {
                return Ae(this, re.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? St && Et || !kt.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(Et ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Tt = {
            set: function(e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : St && Et || !kt.test(n) ? e.setAttribute(!Et && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Ct[t] || re.find.attr;
            Ct[t] = St && Et || !kt.test(t) ? function(e, t, i) {
                var r, o;
                return i || (o = Ct[t], Ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ct[t] = o), r
            } : function(e, t, n) {
                return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), St && Et || (re.attrHooks.value = {
            set: function(e, t, n) {
                return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
            }
        }), Et || (wt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: wt.set
        }, re.attrHooks.contenteditable = {
            set: function(e, t, n) {
                wt.set(e, "" !== t && t, n)
            }
        }, re.each(["width", "height"], function(e, t) {
            re.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ne.style || (re.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Nt = /^(?:input|select|textarea|button|object)$/i,
            Dt = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(e, t) {
                return Ae(this, re.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = re.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), re.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Nt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
            re.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (re.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ne.enctype || (re.propFix.enctype = "encoding");
        var At = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = re.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === Ce || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Lt = re.now(),
            jt = /\?/,
            $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = re.trim(t + "");
            return r && !re.trim(r.replace($t, function(e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var Ht, Pt, Mt = /#.*$/,
            qt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ot = /^(?:GET|HEAD)$/,
            Wt = /^\/\//,
            Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            _t = {},
            Bt = {},
            zt = "*/".concat("*");
        try {
            Pt = location.href
        } catch (e) {
            Pt = he.createElement("a"), Pt.href = "", Pt = Pt.href
        }
        Ht = Rt.exec(Pt.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pt,
                type: "GET",
                isLocal: Ft.test(Ht[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? R(R(e, re.ajaxSettings), t) : R(re.ajaxSettings, e)
            },
            ajaxPrefilter: O(_t),
            ajaxTransport: O(Bt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, u, v, y, x, T = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = _(d, w, n)), y = B(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, r = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", r ? h.resolveWith(p, [u, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(g), g = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]), m.fireWith(p, [w, T]), l && (f.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, l, c, u, d = re.ajaxSetup({}, t),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                    h = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; t = It.exec(a);) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Pt) + "").replace(Mt, "").replace(Wt, Ht[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ht[1] && i[2] === Ht[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), W(_t, d, t, w), 2 === b) return w;
                l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ot.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (jt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = qt.test(o) ? o.replace(qt, "$1_=" + Lt++) : o + (jt.test(o) ? "&" : "?") + "_=" + Lt++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[r](d[r]);
                if (c = W(Bt, d, t, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, r) {
                return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(re.isFunction(e) ? function(t) {
                    re(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }, re.expr.filters.visible = function(e) {
            return !re.expr.filters.hidden(e)
        };
        var Vt = /%20/g,
            Ut = /\[\]$/,
            Xt = /\r?\n/g,
            Jt = /^(?:submit|button|image|reset|file)$/i,
            Gt = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) z(n, e[n], t, r);
            return i.join("&").replace(Vt, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Gt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Le.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Xt, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
        } : V;
        var Qt = 0,
            Yt = {},
            Kt = re.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in Yt) Yt[e](void 0, !0)
        }), ne.cors = !!Kt && "withCredentials" in Kt, Kt = ne.ajax = !!Kt, Kt && re.ajaxTransport(function(e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            a = ++Qt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var s, l, c;
                            if (t && (r || 4 === o.readyState))
                                if (delete Yt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (e) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && i(s, l, c, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Yt[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = he.head || re("head")[0] || he.documentElement;
                return {
                    send: function(i, r) {
                        t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var Zt = [],
            en = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Zt.pop() || re.expando + "_" + Lt++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = t.jsonp !== !1 && (en.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(en, "$1" + r) : t.jsonp !== !1 && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || re.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Zt.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || he;
            var i = de.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
        };
        var tn = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && tn) return tn.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        };
        var nn = e.document.documentElement;
        re.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c, u = re.css(e, "position"),
                    d = re(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o ? (t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = X(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || nn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                    return e || nn
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) {
                return Ae(this, function(e, i, r) {
                    var o = X(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = S(ne.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ae(this, function(t, n, i) {
                        var r;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var rn = e.jQuery,
            on = e.$;
        return re.noConflict = function(t) {
            return e.$ === re && (e.$ = on), t && e.jQuery === re && (e.jQuery = rn), re
        }, typeof t === Ce && (e.jQuery = e.$ = re), re
    }), ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = oe.type(e);
            return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return oe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (me.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function(e) {
                return Z.call(t, e) > -1 !== n
            })
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return oe.each(e.match(we) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            G.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), oe.ready()
        }

        function s() {
            this.expando = oe.expando + s.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(De, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? oe.parseJSON(n) : n)
                    } catch (e) {}
                    Se.set(e, t, n)
                } else n = void 0;
            return n
        }

        function c(e, t, n, i) {
            var r, o = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return oe.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
                u = (oe.cssNumber[t] || "px" !== c && +l) && Le.exec(oe.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do o = o || ".5", u /= o, oe.style(e, t, u + c); while (o !== (o = s() / l) && 1 !== o && --a)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function u(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
        }

        function d(e, t) {
            for (var n = 0, i = e.length; i > n; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
        }

        function p(e, t, n, i, r) {
            for (var o, a, s, l, c, p, f = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)
                if (o = e[m], o || 0 === o)
                    if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                    else if (Ie.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (Pe.exec(o) || ["", ""])[1].toLowerCase(), l = qe[s] || qe._default, a.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], p = l[0]; p--;) a = a.lastChild;
                oe.merge(h, a.childNodes), a = f.firstChild, a.textContent = ""
            } else h.push(t.createTextNode(o));
            for (f.textContent = "", m = 0; o = h[m++];)
                if (i && oe.inArray(o, i) > -1) r && r.push(o);
                else if (c = oe.contains(o.ownerDocument, o), a = u(f.appendChild(o), "script"), c && d(a), n)
                for (p = 0; o = a[p++];) Me.test(o.type || "") && n.push(o);
            return f
        }

        function f() {
            return !0
        }

        function h() {
            return !1
        }

        function m() {
            try {
                return G.activeElement
            } catch (e) {}
        }

        function g(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) g(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
            else if (!r) return this;
            return 1 === o && (a = r, r = function(e) {
                return oe().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = oe.guid++)), e.each(function() {
                oe.event.add(this, t, r, i, n)
            })
        }

        function v(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function y(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function b(e) {
            var t = ze.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            var n, i, r, o, a, s, l, c;
            if (1 === t.nodeType) {
                if (Ee.hasData(e) && (o = Ee.access(e), a = Ee.set(t, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; i > n; n++) oe.event.add(t, r, c[r][n])
                }
                Se.hasData(e) && (s = Se.access(e), l = oe.extend({}, s), Se.set(t, l))
            }
        }

        function w(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && He.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function T(e, t, n, i) {
            t = Y.apply([], t);
            var r, o, a, s, l, c, d = 0,
                f = e.length,
                h = f - 1,
                m = t[0],
                g = oe.isFunction(m);
            if (g || f > 1 && "string" == typeof m && !ie.checkClone && Be.test(m)) return e.each(function(r) {
                var o = e.eq(r);
                g && (t[0] = m.call(this, r, o.html())), T(o, t, n, i)
            });
            if (f && (r = p(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = oe.map(u(r, "script"), y), s = a.length; f > d; d++) l = r, d !== h && (l = oe.clone(l, !0, !0), s && oe.merge(a, u(l, "script"))), n.call(e[d], l, d);
                if (s)
                    for (c = a[a.length - 1].ownerDocument, oe.map(a, b), d = 0; s > d; d++) l = a[d], Me.test(l.type || "") && !Ee.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(Ve, "")))
            }
            return e
        }

        function C(e, t, n) {
            for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(u(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function k(e, t) {
            var n = oe(t.createElement(e)).appendTo(t.body),
                i = oe.css(n[0], "display");
            return n.detach(), i
        }

        function E(e) {
            var t = G,
                n = Xe[e];
            return n || (n = k(e, t), "none" !== n && n || (Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), n = k(e, t), Ue.detach()), Xe[e] = n), n
        }

        function S(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || Qe(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), !ie.pixelMarginRight() && Ge.test(a) && Je.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function N(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function D(e) {
            if (e in it) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
                if (e = nt[n] + t, e in it) return e
        }

        function A(e, t, n) {
            var i = Le.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function L(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += oe.css(e, n + je[o], !0, r)), i ? ("content" === n && (a -= oe.css(e, "padding" + je[o], !0, r)), "margin" !== n && (a -= oe.css(e, "border" + je[o] + "Width", !0, r))) : (a += oe.css(e, "padding" + je[o], !0, r), "padding" !== n && (a += oe.css(e, "border" + je[o] + "Width", !0, r)));
            return a
        }

        function j(t, n, i) {
            var r = !0,
                o = "width" === n ? t.offsetWidth : t.offsetHeight,
                a = Qe(t),
                s = "border-box" === oe.css(t, "boxSizing", !1, a);
            if (G.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = S(t, n, a), (0 > o || null == o) && (o = t.style[n]), Ge.test(o)) return o;
                r = s && (ie.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
            }
            return o + L(t, n, i || (s ? "border" : "content"), r, a) + "px"
        }

        function $(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = Ee.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[a] = Ee.access(i, "olddisplay", E(i.nodeName)))) : (r = $e(i), "none" === n && r || Ee.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function H(e, t, n, i, r) {
            return new H.prototype.init(e, t, n, i, r)
        }

        function P() {
            return e.setTimeout(function() {
                rt = void 0
            }), rt = oe.now()
        }

        function M(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = je[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function q(e, t, n) {
            for (var i, r = (O.tweeners[t] || []).concat(O.tweeners["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function I(e, t, n) {
            var i, r, o, a, s, l, c, u, d = this,
                p = {},
                f = e.style,
                h = e.nodeType && $e(e),
                m = Ee.get(e, "fxshow");
            n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), u = "none" === c ? Ee.get(e, "olddisplay") || E(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], at.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        h = !0
                    }
                    p[i] = m && m[i] || oe.style(e, i)
                } else c = void 0;
            if (oe.isEmptyObject(p)) "inline" === ("none" === c ? E(e.nodeName) : c) && (f.display = c);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = Ee.access(e, "fxshow", {}), o && (m.hidden = !h), h ? oe(e).show() : d.done(function() {
                    oe(e).hide()
                }), d.done(function() {
                    var t;
                    Ee.remove(e, "fxshow");
                    for (t in p) oe.style(e, t, p[t])
                });
                for (i in p) a = q(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function F(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = oe.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function O(e, t, n) {
            var i, r, o = 0,
                a = O.prefilters.length,
                s = oe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = rt || P(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {},
                        easing: oe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (F(u, c.opts.specialEasing); a > o; o++)
                if (i = O.prefilters[o].call(c, e, u, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
            return oe.map(u, q, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function W(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function R(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(we) || [];
                if (oe.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function _(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, oe.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                a = e === Et;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function B(e, t) {
            var n, i, r = oe.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && oe.extend(!0, e, i), e
        }

        function z(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    a || (a = r)
                }
                o = o || a
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function V(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a)
                    for (r in c)
                        if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function U(e, t, n, i) {
            var r;
            if (oe.isArray(t)) oe.each(t, function(t, r) {
                n || At.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== oe.type(t)) i(e, t);
            else
                for (r in t) U(e + "[" + r + "]", t[r], n, i)
        }

        function X(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var J = [],
            G = e.document,
            Q = J.slice,
            Y = J.concat,
            K = J.push,
            Z = J.indexOf,
            ee = {},
            te = ee.toString,
            ne = ee.hasOwnProperty,
            ie = {},
            re = "2.2.0",
            oe = function(e, t) {
                return new oe.fn.init(e, t)
            },
            ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            le = /-([\da-z])/gi,
            ce = function(e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: re,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
            },
            pushStack: function(e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return oe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(oe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: K,
            sort: J.sort,
            splice: J.splice
        }, oe.extend = oe.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, a[t] = oe.extend(c, o, i)) : void 0 !== i && (a[t] = i));
            return a
        }, oe.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" === oe.type(e) && !e.nodeType && !oe.isWindow(e) && !(e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(le, ce)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ae, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : Z.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o, a = 0,
                    s = [];
                if (n(e))
                    for (r = e.length; r > a; a++) o = t(e[a], a, i), null != o && s.push(o);
                else
                    for (a in e) o = t(e[a], a, i), null != o && s.push(o);
                return Y.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (i = Q.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(Q.call(arguments)))
                }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
            },
            now: Date.now,
            support: ie
        }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = J[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        });
        var ue = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, c, d, f, h = t && t.ownerDocument,
                    m = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((t ? t.ownerDocument || t : W) !== $ && j(t), t = t || $, P)) {
                    if (11 !== m && (c = ve.exec(e)))
                        if (r = c[1]) {
                            if (9 === m) {
                                if (!(a = t.getElementById(r))) return n;
                                if (a.id === r) return n.push(a), n
                            } else if (h && (a = h.getElementById(r)) && F(t, a) && a.id === r) return n.push(a), n
                        } else {
                            if (c[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (w.qsa && !V[e + " "] && (!M || !M.test(e))) {
                        if (1 !== m) h = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = O), d = E(e), o = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + p(d[o]);
                            f = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                        }
                        if (f) try {
                            return K.apply(n, h.querySelectorAll(f)), n
                        } catch (e) {} finally {
                            s === O && t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[O] = !0, e
            }

            function r(e) {
                var t = $.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = _++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c, u = [R, o];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (c = t[O] || (t[O] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === o) return u[2] = s[2];
                                if (l[i] = u, u[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function g(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
                return a
            }

            function v(e, t, n, r, o, a) {
                return r && !r[O] && (r = v(r)), o && !o[O] && (o = v(o, a)), i(function(i, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        v = i || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : g(v, p, e, s, l),
                        b = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, b, s, l), r)
                        for (c = g(b, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), c = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), u = [function(e, n, i) {
                        var r = !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; r > s; s++)
                    if (n = T.relative[e[s].type]) u = [f(h(u), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                            for (i = ++s; r > i && !T.relative[e[i].type]; i++);
                            return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                        }
                        u.push(n)
                    }
                return h(u)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, p, f = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = D,
                            b = i || o && T.find.TAG("*", c),
                            x = R += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (D = a === $ || a || c); h !== w && null != (u = b[h]); h++) {
                            if (o && u) {
                                for (d = 0, a || u.ownerDocument === $ || (j(u), s = !P); p = e[d++];)
                                    if (p(u, a || $, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (R = x)
                            }
                            r && ((u = !p && u) && f--, i && m.push(u))
                        }
                        if (f += h, r && h !== f) {
                            for (d = 0; p = n[d++];) p(m, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (R = x, D = y), m
                    };
                return r ? i(a) : a
            }
            var x, w, T, C, k, E, S, N, D, A, L, j, $, H, P, M, q, I, F, O = "sizzle" + 1 * new Date,
                W = e.document,
                R = 0,
                _ = 0,
                B = n(),
                z = n(),
                V = n(),
                U = function(e, t) {
                    return e === t && (L = !0), 0
                },
                X = 1 << 31,
                J = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                Y = G.push,
                K = G.push,
                Z = G.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(oe),
                pe = new RegExp("^" + ie + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    j()
                };
            try {
                K.apply(G = Z.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: G.length ? function(e, t) {
                        Y.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, j = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : W;
                return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, H = $.documentElement, P = !k($), (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ge.test($.getElementsByClassName), w.getById = r(function(e) {
                    return H.appendChild(e).id = O, !$.getElementsByName || !$.getElementsByName(O).length
                }), w.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
                }, q = [], M = [], (w.qsa = ge.test($.querySelectorAll)) && (r(function(e) {
                    H.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || M.push(".#.+[+~]")
                }), r(function(e) {
                    var t = $.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (w.matchesSelector = ge.test(I = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), q.push("!=", oe)
                }), M = M.length && new RegExp(M.join("|")), q = q.length && new RegExp(q.join("|")), t = ge.test(H.compareDocumentPosition), F = t || ge.test(H.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return L = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === W && F(W, e) ? -1 : t === $ || t.ownerDocument === W && F(W, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return L = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!r || !o) return e === $ ? -1 : t === $ ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (r === o) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === W ? -1 : l[i] === W ? 1 : 0
                }, $) : $
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== $ && j(e), n = n.replace(ue, "='$1']"), w.matchesSelector && P && !V[n + " "] && (!q || !q.test(n)) && (!M || !M.test(n))) try {
                    var i = I.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, $, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== $ && j(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== $ && j(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (L = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), L) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (p = g, d = p[O] || (p[O] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === R && c[1], b = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [R, f, b];
                                            break
                                        }
                                } else if (y && (p = t, d = p[O] || (p[O] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === R && c[1], b = f), b === !1)
                                    for (;
                                        (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[O] || (p[O] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [R, b]), p !== t)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[O] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(se, "$1"));
                        return r[O] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(xe, we),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
                var i, r, o, a, s, l, c, u = z[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = T.preFilter; s;) {
                    (!i || (r = le.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
            }, S = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[O] ? i.push(o) : r.push(o);
                    o = V(e, b(r, i)), o.selector = e
                }
                return o
            }, N = t.select = function(e, t, n, i) {
                var r, o, a, s, l, c = "function" == typeof e && e,
                    d = !i && E(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);)
                        if ((l = T.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && p(o), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return (c || S(e, d))(i, t, !P, n, !t || ye.test(e) && u(t.parentNode) || t), n
            }, w.sortStable = O.split("").sort(U).join("") === O, w.detectDuplicates = !!L, j(), w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition($.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
        var de = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && oe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            pe = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            fe = oe.expr.match.needsContext,
            he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            me = /^.[^:#\[\.,]*$/;
        oe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (oe.contains(r[t], this)) return !0
                }));
                for (t = 0; n > t; t++) oe.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ye = oe.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || ge, "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(i[1]) && oe.isPlainObject(t))
                            for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return r = G.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
            };
        ye.prototype = oe.fn, ge = oe(G);
        var be = /^(?:parents|prev(?:Until|All))/,
            xe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.fn.extend({
            has: function(e) {
                var t = oe(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (oe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return de(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return de(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return de(e, "nextSibling")
            },
            prevAll: function(e) {
                return de(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return de(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return de(e, "previousSibling", n)
            },
            siblings: function(e) {
                return pe((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return pe(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || oe.merge([], e.childNodes)
            }
        }, function(e, t) {
            oe.fn[e] = function(n, i) {
                var r = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (xe[e] || oe.uniqueSort(r), be.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var we = /\S+/g;
        oe.Callbacks = function(e) {
            e = "string" == typeof e ? o(e) : oe.extend({}, e);
            var t, n, i, r, a = [],
                s = [],
                l = -1,
                c = function() {
                    for (r = e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
                },
                u = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                            oe.each(n, function(n, i) {
                                oe.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== oe.type(i) && t(i)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return oe.each(arguments, function(e, t) {
                            for (var n;
                                (n = oe.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? oe.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return r = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return r = s = [], n || (a = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, oe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return oe.Deferred(function(n) {
                                oe.each(t, function(t, o) {
                                    var a = oe.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? oe.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, oe.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = Q.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : oe.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var Te;
        oe.fn.ready = function(e) {
            return oe.ready.promise().done(e), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
            }
        }), oe.ready.promise = function(t) {
            return Te || (Te = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), Te.promise(t)
        }, oe.ready.promise();
        var Ce = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === oe.type(n)) {
                    r = !0;
                    for (s in n) Ce(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(oe(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            ke = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        s.uid = 1, s.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function(e) {
                if (!ke(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[t] = n;
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t) this.register(e);
                    else {
                        oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(we) || [])), n = i.length;
                        for (; n--;) delete o[i[n]]
                    }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !oe.isEmptyObject(t)
            }
        };
        var Ee = new s,
            Se = new s,
            Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            De = /[A-Z]/g;
        oe.extend({
            hasData: function(e) {
                return Se.hasData(e) || Ee.hasData(e)
            },
            data: function(e, t, n) {
                return Se.access(e, t, n)
            },
            removeData: function(e, t) {
                Se.remove(e, t)
            },
            _data: function(e, t, n) {
                return Ee.access(e, t, n)
            },
            _removeData: function(e, t) {
                Ee.remove(e, t)
            }
        }), oe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Se.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i])));
                        Ee.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    Se.set(this, e)
                }) : Ce(this, function(t) {
                    var n, i;
                    if (o && void 0 === t) {
                        if (n = Se.get(o, e) || Se.get(o, e.replace(De, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = oe.camelCase(e), n = Se.get(o, i), void 0 !== n) return n;
                        if (n = l(o, i, void 0), void 0 !== n) return n
                    } else i = oe.camelCase(e), this.each(function() {
                        var n = Se.get(this, i);
                        Se.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Se.remove(this, e)
                })
            }
        }), oe.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = Ee.get(e, t), n && (!i || oe.isArray(n) ? i = Ee.access(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = oe._queueHooks(e, t),
                    a = function() {
                        oe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Ee.get(e, n) || Ee.access(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        Ee.remove(e, [t + "queue", n])
                    })
                })
            }
        }), oe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    oe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = oe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Ee.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Le = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
            je = ["Top", "Right", "Bottom", "Left"],
            $e = function(e, t) {
                return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
            },
            He = /^(?:checkbox|radio)$/i,
            Pe = /<([\w:-]+)/,
            Me = /^$|\/(?:java|ecma)script/i,
            qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
        var Ie = /<|&#?\w+;/;
        ! function() {
            var e = G.createDocumentFragment(),
                t = e.appendChild(G.createElement("div")),
                n = G.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"),
                t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Fe = /^key/,
            Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            We = /^([^.]*)(?:\.(.+)|)/;
        oe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, f, h, m, g = Ee.get(e);
                if (g)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(we) || [""], c = t.length; c--;) s = We.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f && (d = oe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = oe.event.special[f] || {}, u = oe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[f] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, f, h, m, g = Ee.hasData(e) && Ee.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(we) || [""], c = t.length; c--;)
                        if (s = We.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) u = p[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, f, g.handle), delete l[f])
                        } else
                            for (f in l) oe.event.remove(e, f + t[c], n, i, !0);
                    oe.isEmptyObject(l) && Ee.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = oe.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = Q.call(arguments),
                    l = (Ee.get(this, "events") || {})[e.type] || [],
                    c = oe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = oe.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[oe.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Oe.test(r) ? this.mouseHooks : Fe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== m() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === m() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, oe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, oe.Event = function(e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            constructor: oe.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = f, e && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = f, e && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            oe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !oe.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), oe.fn.extend({
            on: function(e, t, n, i) {
                return g(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return g(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                    oe.event.remove(this, e, n, t)
                })
            }
        });
        var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            _e = /<script|<style|<link/i,
            Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ze = /^true\/(.*)/,
            Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oe.extend({
            htmlPrefilter: function(e) {
                return e.replace(Re, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, a, s = e.cloneNode(!0),
                    l = oe.contains(e.ownerDocument, e);
                if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (a = u(s), o = u(e), i = 0, r = o.length; r > i; i++) w(o[i], a[i]);
                if (t)
                    if (n)
                        for (o = o || u(e), a = a || u(s), i = 0, r = o.length; r > i; i++) x(o[i], a[i]);
                    else x(e, s);
                return a = u(s, "script"), a.length > 0 && d(a, !l && u(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (ke(n)) {
                        if (t = n[Ee.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                            n[Ee.expando] = void 0
                        }
                        n[Se.expando] && (n[Se.expando] = void 0)
                    }
            }
        }), oe.fn.extend({
            domManip: T,
            detach: function(e) {
                return C(this, e, !0)
            },
            remove: function(e) {
                return C(this, e)
            },
            text: function(e) {
                return Ce(this, function(e) {
                    return void 0 === e ? oe.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return oe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ce(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !_e.test(e) && !qe[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = oe.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return T(this, arguments, function(t) {
                    var n = this.parentNode;
                    oe.inArray(this, e) < 0 && (oe.cleanData(u(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            oe.fn[e] = function(e) {
                for (var n, i = [], r = oe(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), oe(r[a])[t](n), K.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ue, Xe = {
                HTML: "block",
                BODY: "block"
            },
            Je = /^margin/,
            Ge = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
            Qe = function(t) {
                var n = t.ownerDocument.defaultView;
                return n.opener || (n = e), n.getComputedStyle(t)
            },
            Ye = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = a[o];
                return r
            },
            Ke = G.documentElement;
        ! function() {
            function t() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ke.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(a)
            }
            var n, i, r, o, a = G.createElement("div"),
                s = G.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), oe.extend(ie, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), r
                },
                reliableMarginLeft: function() {
                    return null == i && t(), o
                },
                reliableMarginRight: function() {
                    var t, n = s.appendChild(G.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ke.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(a), s.removeChild(n), t
                }
            }))
        }();
        var Ze = /^(none|table(?!-c[ea]).+)/,
            et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            nt = ["Webkit", "O", "Moz", "ms"],
            it = G.createElement("div").style;
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = S(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = oe.camelCase(t),
                        l = e.style;
                    return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Le.exec(n)) && r[1] && (n = c(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = oe.camelCase(t);
                return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = S(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), oe.each(["height", "width"], function(e, t) {
            oe.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ye(e, et, function() {
                        return j(e, t, i)
                    }) : j(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r, o = i && Qe(e),
                        a = i && L(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                    return a && (r = Le.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), A(e, n, a)
                }
            }
        }), oe.cssHooks.marginLeft = N(ie.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Ye(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), oe.cssHooks.marginRight = N(ie.reliableMarginRight, function(e, t) {
            return t ? Ye(e, {
                display: "inline-block"
            }, S, [e, "marginRight"]) : void 0
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            oe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + je[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, Je.test(e) || (oe.cssHooks[e + t].set = A)
        }), oe.fn.extend({
            css: function(e, t) {
                return Ce(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (oe.isArray(t)) {
                        for (i = Qe(e), r = t.length; r > a; a++) o[t[a]] = oe.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = H, H.prototype = {
            constructor: H,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, oe.fx = H.prototype.init, oe.fx.step = {};
        var rt, ot, at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
        oe.Animation = oe.extend(O, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return c(n.elem, e, Le.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], O.tweeners[n] = O.tweeners[n] || [], O.tweeners[n].unshift(t)
                },
                prefilters: [I],
                prefilter: function(e, t) {
                    t ? O.prefilters.unshift(e) : O.prefilters.push(e)
                }
            }), oe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
                }, i
            }, oe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter($e).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = oe.isEmptyObject(e),
                        o = oe.speed(t, n, i),
                        a = function() {
                            var t = O(this, oe.extend({}, e), o);
                            (r || Ee.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = oe.timers,
                            a = Ee.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && oe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = Ee.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = oe.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function(e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, r)
                }
            }), oe.each({
                slideDown: M("show"),
                slideUp: M("hide"),
                slideToggle: M("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                oe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), oe.timers = [], oe.fx.tick = function() {
                var e, t = 0,
                    n = oe.timers;
                for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || oe.fx.stop(), rt = void 0
            }, oe.fx.timer = function(e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function() {
                ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function() {
                e.clearInterval(ot), ot = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function(t, n) {
                return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = G.createElement("input"),
                    t = G.createElement("select"),
                    n = t.appendChild(G.createElement("option"));
                e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
            }();
        var lt, ct = oe.expr.attrHandle;
        oe.fn.extend({
            attr: function(e, t) {
                return Ce(this, oe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(we);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), lt = {
            set: function(e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ct[t] || oe.find.attr;
            ct[t] = function(e, t, i) {
                var r, o;
                return i || (o = ct[t], ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = o), r
            }
        });
        var ut = /^(?:input|select|textarea|button)$/i,
            dt = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function(e, t) {
                return Ce(this, oe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[oe.propFix[e] || e]
                })
            }
        }), oe.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ie.optSelected || (oe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oe.propFix[this.toLowerCase()] = this
        });
        var pt = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, W(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(we) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                            for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = oe.trim(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(we) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            s = oe.trim(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                    oe(this).toggleClass(e.call(this, n, W(this), t), t)
                }) : this.each(function() {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = oe(this), o = e.match(we) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(void 0 === e || "boolean" === n) && (t = W(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + W(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var ft = /\r/g;
        oe.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = oe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        return oe.trim(e.value)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = oe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function() {
            oe.valHooks[this] = {
                set: function(e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
                }
            }, ie.checkOn || (oe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var ht = /^(?:focusinfocus|focusoutblur)$/;
        oe.extend(oe.event, {
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, p = [i || G],
                    f = ne.call(t, "type") ? t.type : t,
                    h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !ht.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !oe.isWindow(i)) {
                        for (l = d.delegateType || f, ht.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                        s === (i.ownerDocument || G) && p.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, u = (Ee.get(a, "events") || {})[t.type] && Ee.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && ke(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = f, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !ke(i) || c && oe.isFunction(i[f]) && !oe.isWindow(i) && (s = i[c], s && (i[c] = null), oe.event.triggered = f, i[f](), oe.event.triggered = void 0, s && (i[c] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                oe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }), oe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    oe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            oe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                oe.event.simulate(t, e.target, oe.event.fix(e))
            };
            oe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = Ee.access(i, t);
                    r || i.addEventListener(e, n, !0), Ee.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = Ee.access(i, t) - 1;
                    r ? Ee.access(i, t, r) : (i.removeEventListener(e, n, !0), Ee.remove(i, t))
                }
            }
        });
        var mt = e.location,
            gt = oe.now(),
            vt = /\?/;
        oe.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, oe.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return (!n || n.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + t), n
        };
        var yt = /#.*$/,
            bt = /([?&])_=[^&]*/,
            xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Tt = /^(?:GET|HEAD)$/,
            Ct = /^\/\//,
            kt = {},
            Et = {},
            St = "*/".concat("*"),
            Nt = G.createElement("a");
        Nt.href = mt.href, oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mt.href,
                type: "GET",
                isLocal: wt.test(mt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": St,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
            },
            ajaxPrefilter: R(kt),
            ajaxTransport: R(Et),
            ajax: function(t, n) {
                function i(t, n, i, s) {
                    var c, d, y, b, w, C = n;
                    2 !== x && (x = 2, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = z(p, T, i)), b = V(p, b, T, c), c ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, c = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", c ? m.resolveWith(f, [d, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? d : y]), g.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, p]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var r, o, a, s, l, c, u, d, p = oe.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                    m = oe.Deferred(),
                    g = oe.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!s)
                                    for (s = {}; t = xt.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || mt.href) + "").replace(yt, "").replace(Ct, mt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                    c = G.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), _(kt, p, n, T), 2 === x) return T;
                u = oe.event && p.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Tt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (vt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = bt.test(o) ? o.replace(bt, "$1_=" + gt++) : o + (vt.test(o) ? "&" : "?") + "_=" + gt++)), p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + St + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers) T.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[d](p[d]);
                if (r = _(Et, p, n, T)) {
                    if (T.readyState = 1, u && h.trigger("ajaxSend", [T, p]), 2 === x) return T;
                    p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, r.send(y, i)
                    } catch (e) {
                        if (!(2 > x)) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function(e, t) {
            oe[t] = function(e, n, i, r) {
                return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, oe.isPlainObject(e) && e))
            }
        }), oe._evalUrl = function(e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, oe.fn.extend({
            wrapAll: function(e) {
                var t;
                return oe.isFunction(e) ? this.each(function(t) {
                    oe(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return oe.isFunction(e) ? this.each(function(t) {
                    oe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = oe.isFunction(e);
                return this.each(function(n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function(e) {
            return !oe.expr.filters.visible(e)
        }, oe.expr.filters.visible = function(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
        };
        var Dt = /%20/g,
            At = /\[\]$/,
            Lt = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            $t = /^(?:input|select|textarea|keygen)/i;
        oe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) U(n, e[n], t, r);
            return i.join("&").replace(Dt, "+")
        }, oe.fn.extend({
            serialize: function() {
                return oe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && $t.test(this.nodeName) && !jt.test(e) && (this.checked || !He.test(e))
                }).map(function(e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Lt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Lt, "\r\n")
                    }
                }).get()
            }
        }), oe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var Ht = {
                0: 200,
                1223: 204
            },
            Pt = oe.ajaxSettings.xhr();
        ie.cors = !!Pt && "withCredentials" in Pt, ie.ajax = Pt = !!Pt, oe.ajaxTransport(function(t) {
            var n, i;
            return ie.cors || Pt && !t.crossDomain ? {
                send: function(r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) s.setRequestHeader(a, r[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), oe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = oe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), G.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Mt = [],
            qt = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Mt.pop() || oe.expando + "_" + gt++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + r) : t.jsonp !== !1 && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || oe.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Mt.push(r)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), ie.createHTMLDocument = function() {
            var e = G.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), oe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (ie.createHTMLDocument ? G.implementation.createHTMLDocument("") : G);
            var i = he.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = p([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
        };
        var It = oe.fn.load;
        oe.fn.load = function(e, t, n) {
            if ("string" != typeof e && It) return It.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && oe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(a, o || [e.responseText, t, e])
                })
            }), this
        }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            oe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), oe.expr.filters.animated = function(e) {
            return oe.grep(oe.timers, function(t) {
                return e === t.elem
            }).length
        }, oe.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c, u = oe.css(e, "position"),
                    d = oe(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, oe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                return o ? (t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = X(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0) - e.scrollTop(), i.left += oe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                        top: t.top - i.top - oe.css(n, "marginTop", !0),
                        left: t.left - i.left - oe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                    return e || Ke
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            oe.fn[e] = function(i) {
                return Ce(this, function(e, i, r) {
                    var o = X(e);
                    return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                }, e, i, arguments.length)
            }
        }), oe.each(["top", "left"], function(e, t) {
            oe.cssHooks[t] = N(ie.pixelPosition, function(e, n) {
                return n ? (n = S(e, t), Ge.test(n) ? oe(e).position()[t] + "px" : n) : void 0
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                oe.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ce(this, function(t, n, i) {
                        var r;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), oe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return oe
        });
        var Ft = e.jQuery,
            Ot = e.$;
        return oe.noConflict = function(t) {
            return e.$ === oe && (e.$ = Ot), t && e.jQuery === oe && (e.jQuery = Ft), oe
        }, t || (e.jQuery = e.$ = oe), oe
    }), !jQuery) throw new Error("Bootstrap requires jQuery"); + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            }
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one(e.support.transition.end, function() {
            n = !0
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function() {
        e.support.transition = t()
    })
}(window.jQuery), + function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var i = e(this),
            r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e(r);
        t && t.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof t && r[t].call(i)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i)
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(e) {
        var t = "disabled",
            n = this.$element,
            i = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === t.prop("type") && e.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.button"),
                o = "object" == typeof n && n;
            r || i.data("bs.button", r = new t(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function(t) {
        var n = this,
            i = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function() {
            n.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function(t, n) {
        var i = this.$element.find(".item.active"),
            r = n || i[t](),
            o = this.interval,
            a = "next" == t ? "left" : "right",
            s = "next" == t ? "first" : "last",
            l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[s]()
        }
        this.sliding = !0, o && this.pause();
        var c = e.Event("slide.bs.carousel", {
            relatedTarget: r[0],
            direction: a
        });
        if (!r.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                    var t = e(l.$indicators.children()[l.getActiveIndex()]);
                    t && t.addClass("active")
                })), e.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                r.addClass(t), r[0].offsetWidth, i.addClass(a), r.addClass(a), i.one(e.support.transition.end, function() {
                    r.removeClass([t, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return o && this.cycle(), this
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.carousel"),
                o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n),
                a = "string" == typeof n ? n : o.slide;
            r || i.data("bs.carousel", r = new t(this, o)), "number" == typeof n ? r.to(n) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n, i = e(this),
            r = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = e.extend({}, r.data(), i.data()),
            a = i.attr("data-slide-to");
        a && (o.interval = !1), r.carousel(o), (a = i.attr("data-slide-to")) && r.data("bs.carousel").to(a), t.preventDefault()
    }), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning) return;
                    n.collapse("hide"), i || n.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("in")[r]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return o.call(this);
                var a = e.camelCase(["scroll", r].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][a])
            }
        }
    }, t.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.collapse"),
                o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            r || i.data("bs.collapse", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var n, i = e(this),
            r = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = e(r),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : i.data(),
            l = i.attr("data-parent"),
            c = l && e(l);
        a && a.transitioning || (c && c.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(s)
    })
}(window.jQuery), + function(e) {
    "use strict";

    function t() {
        e(i).remove(), e(r).each(function(t) {
            var i = n(e(this));
            i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown")), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }
    var i = ".dropdown-backdrop",
        r = "[data-toggle=dropdown]",
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r),
                a = o.hasClass("open");
            if (t(), !a) {
                if ("ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t), o.trigger(i = e.Event("show.bs.dropdown")), i.isDefaultPrevented()) return;
                o.toggleClass("open").trigger("shown.bs.dropdown"), r.focus()
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var i = e(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    a = o.hasClass("open");
                if (!a || a && 27 == t.keyCode) return 27 == t.which && o.find(r).focus(), i.click();
                var s = e("[role=menu] li:not(.divider):visible a", o);
                if (s.length) {
                    var l = s.index(s.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).focus()
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("dropdown");
            i || n.data("dropdown", i = new o(this)), "string" == typeof t && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = a, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu]", o.prototype.keydown)
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function(t) {
        var n = this,
            i = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var i = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                n.$element.focus().trigger(r)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(r)
        }))
    }, t.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function(n, i) {
        return this.each(function() {
            var r = e(this),
                o = r.data("bs.modal"),
                a = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
            o || r.data("bs.modal", o = new t(this, a)), "string" == typeof n ? o[n](i) : a.show && o.show(i)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this),
            i = n.attr("href"),
            r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = r.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
        t.preventDefault(), r.modal(o, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }), e(document).on("show.bs.modal", ".modal", function() {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        e(document.body).removeClass("modal-open")
    })
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function(t, n, i) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focus",
                    l = "hover" == a ? "mouseleave" : "blur";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented()) return;
            var n = this.tip();
            this.setContent(), this.options.animation && n.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                r = /\s?auto?\s?/i,
                o = r.test(i);
            o && (i = i.replace(r, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var a = this.getPosition(),
                s = n[0].offsetWidth,
                l = n[0].offsetHeight;
            if (o) {
                var c = this.$element.parent(),
                    u = i,
                    d = document.documentElement.scrollTop || document.body.scrollTop,
                    p = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
                    f = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
                    h = "body" == this.options.container ? 0 : c.offset().left;
                i = "bottom" == i && a.top + a.height + l - d > f ? "top" : "top" == i && a.top - d - l < 0 ? "bottom" : "right" == i && a.right + s > p ? "left" : "left" == i && a.left - s < h ? "right" : i, n.removeClass(u).addClass(i)
            }
            var m = this.getCalculatedOffset(i, a, s, l);
            this.applyPlacement(m, i), this.$element.trigger("shown.bs." + this.type)
        }
    }, t.prototype.applyPlacement = function(e, t) {
        var n, i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, i.offset(e).addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        if ("top" == t && c != o && (n = !0, e.top = e.top + o - c), /bottom|top/.test(t)) {
            var u = 0;
            e.left < 0 && (u = -2 * e.left, e.left = 0, i.offset(e), l = i[0].offsetWidth, c = i[0].offsetHeight), this.replaceArrow(u - r + l, l, "left")
        } else this.replaceArrow(c - o, c, "top");
        n && i.offset(e)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && i.detach()
        }
        var n = this,
            i = this.tip(),
            r = e.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.$element.trigger("hidden.bs." + this.type), this)
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function() {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof n && n;
            r || i.data("bs.tooltip", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.popover"),
                o = "object" == typeof n && n;
            r || i.data("bs.popover", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(window.jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        var r, o = e.proxy(this.process, this);
        this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || (r = e(n).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function() {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var i = e(this),
                r = i.data("target") || i.attr("href"),
                o = /^#\w/.test(r) && e(r);
            return o && o.length && [
                [o[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            i = n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (t >= i) return a != (e = o.last()[0]) && this.activate(e);
        for (e = r.length; e--;) a != o[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, e(this.selector).parents(".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.attr("data-target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0],
                o = e.Event("show.bs.tab", {
                    relatedTarget: r
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.parent("li"), n), this.activate(a, a.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r
                    })
                })
            }
        }
    }, t.prototype.activate = function(t, n, i) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }
        var o = n.find("> .active"),
            a = i && e.support.transition && o.hasClass("fade");
        a ? o.one(e.support.transition.end, r).emulateTransitionEnd(150) : r(), o.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new t(this)), "string" == typeof n && r[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(window.jQuery), + function(e) {
    "use strict";
    var t = function(n, i) {
        this.options = e.extend({}, t.DEFAULTS, i), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = e(document).height(),
                i = this.$window.scrollTop(),
                r = this.$element.offset(),
                o = this.options.offset,
                a = o.top,
                s = o.bottom;
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top()), "function" == typeof s && (s = o.bottom());
            var l = !(null != this.unpin && i + this.unpin <= r.top) && (null != s && r.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i && "top");
            this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, this.unpin = "bottom" == l ? r.top - i : null, this.$element.removeClass(t.RESET).addClass("affix" + (l ? "-" + l : "")), "bottom" == l && this.$element.offset({
                top: document.body.offsetHeight - s - this.$element.height()
            }))
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.affix"),
                o = "object" == typeof n && n;
            r || i.data("bs.affix", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(window.jQuery), $(".dropdown-menu input").click(function(e) {
    e.stopPropagation()
}), window.resize && window.location.reload();
var details1 = document.querySelector(".details");
details1.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[0].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details1.innerHTML = "close", details1.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal1"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details2 = document.querySelector(".details2");
details2.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[1].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details2.innerHTML = "close", details2.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal2"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details3 = document.querySelector(".details3");
details3.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[2].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details3.innerHTML = "close", details3.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal3"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details4 = document.querySelector(".details4");
details4.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[3].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details4.innerHTML = "close", details4.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal4"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details5 = document.querySelector(".details5");
details5.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[4].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details5.innerHTML = "close", details5.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal5"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details6 = document.querySelector(".details6");
details6.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[5].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details6.innerHTML = "close", details6.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal6"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details7 = document.querySelector(".details7");
details7.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[6].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details7.innerHTML = "close", details7.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal7"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details8 = document.querySelector(".details8");
details8.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[7].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details8.innerHTML = "close", details8.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal8"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details9 = document.querySelector(".details9");
details9.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[8].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details9.innerHTML = "close", details9.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal9"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details10 = document.querySelector(".details10");
details10.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[9].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details10.innerHTML = "close", details10.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal10"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details11 = document.querySelector(".details11");
details11.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[10].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details11.innerHTML = "close", details11.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal11"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var details12 = document.querySelector(".details11");
details12.addEventListener("click", function(e) {
    function t(e) {
        var t = "";
        t += '<p class="pEl">' + e[11].text + "</p><br>";
        var r = function() {
            i.innerHTML = t, n.appendChild(i)
        };
        r()
    }
    e.preventDefault(), details12.innerHTML = "close", details11.addEventListener("click", function() {
        n.style.display = "none", window.location.reload()
    });
    var n = document.querySelector(".modal12"),
        i = document.createElement("div"),
        r = JSON.parse(jsonData);
    t(r)
});
var localStorage = {};
localStorage.init = function() {
        localStorage.updateLocalStore(jsonData)
    }, $(document).ready(function() {
        function e(e) {
            $.getJSON(t, {
                q: i,
                type: "album"
            }, function(t) {
                var i = [];
                $.each(t.albums.items, function(e, r) {
                    console.log(t.albums.items), "6HWxqdryeaBrcVNExMyzXC" !== r.id && "2NeiklEJ3gQE7bV9cp27hZ" !== r.id && "5sah14CPmQ1v2FUp2AKDql" !== r.id && "2GLF9bjkeGaKSiPAyLEWRb" !== r.id && i.push(n + r.id)
                }), e(i)
            })
        }
        var t = "https://api.spotify.com/v1/search",
            n = "https://api.spotify.com/v1/albums/",
            i = "Firebug";
        e(function(e) {
            function t(e) {
                return function(t) {
                    var n = "playing",
                        i = new Audio(e.tracks.items[0].preview_url),
                        r = $(this);
                    t.preventDefault(), r.append(i), r.hasClass(n) ? i.pause() : i.play(), $("#lightbox").click(function(e) {
                        e.preventDefault(), i.pause()
                    }), $(".lb-close").click(function(e) {
                        e.preventDefault(), i.pause()
                    })
                }
            }

            function n() {
                $.each(e, function(e, n) {
                    $.getJSON(n, {
                        q: i,
                        type: "album",
                        limit: 12
                    }, function(e) {
                        var n = "";
                        n += '<li data-name="' + e.artists[0].name + '">', n += '<li data-name="' + e.artists[0].name + '">', n += '<a href="' + e.images[0].url + '" data-lightbox="albums" data-title="', n += "Album Name: " + e.name + "</br>", n += "Audio Tracks: " + e.tracks.items[0].preview_url + "</br>", n += "Artist Name: " + e.artists[0].name + "</br>", n += "Release Date: " + e.release_date + "</br>", n += "SpotifyURL: " + e.external_urls.spotify + "</br>", n += '">', n += '<img src="' + e.images[0].url + '"alt="' + e.name + '"></a></li>';
                        var i = $(n).clone(!0);
                        i.find("a").click(t(e));
                        $("#albums").append(i)
                    })
                })
            }
            n()
        }), $(".musicButton1").click(function() {
            tinysort("ul#albums>li", {
                selector: "a",
                attr: "href"
            })
        }), $(".musicButton2").click(function() {
            tinysort("ul#albums>li", {
                selector: "img",
                attr: "alt"
            })
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.lightbox = t(e.jQuery)
    }(this, function(e) {
        function t(t) {
            this.album = [], this.currentImageIndex = void 0, this.init(), this.options = e.extend({}, this.constructor.defaults), this.option(t)
        }
        return t.defaults = {
            albumLabel: "Image %1 of %2",
            alwaysShowNavOnTouchDevices: !1,
            fadeDuration: 500,
            fitImagesInViewport: !0,
            positionFromTop: 50,
            resizeDuration: 700,
            showImageNumberLabel: !0,
            wrapAround: !1,
            disableScrolling: !1
        }, t.prototype.option = function(t) {
            e.extend(this.options, t)
        }, t.prototype.imageCountLabel = function(e, t) {
            return this.options.albumLabel.replace(/%1/g, e).replace(/%2/g, t)
        }, t.prototype.init = function() {
            this.enable(), this.build()
        }, t.prototype.enable = function() {
            var t = this;
            e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(n) {
                return t.start(e(n.currentTarget)), !1
            })
        }, t.prototype.build = function() {
            var t = this;
            e('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(e("body")), this.$lightbox = e("#lightbox"), this.$overlay = e("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
                return t.end(), !1
            }), this.$lightbox.hide().on("click", function(n) {
                return "lightbox" === e(n.target).attr("id") && t.end(), !1
            }), this.$outerContainer.on("click", function(n) {
                return "lightbox" === e(n.target).attr("id") && t.end(), !1
            }), this.$lightbox.find(".lb-prev").on("click", function() {
                return 0 === t.currentImageIndex ? t.changeImage(t.album.length - 1) : t.changeImage(t.currentImageIndex - 1), !1
            }), this.$lightbox.find(".lb-next").on("click", function() {
                return t.currentImageIndex === t.album.length - 1 ? t.changeImage(0) : t.changeImage(t.currentImageIndex + 1), !1
            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                return t.end(), !1
            })
        }, t.prototype.start = function(t) {
            function n(e) {
                i.album.push({
                    link: e.attr("href"),
                    title: e.attr("data-title") || e.attr("title")
                })
            }
            var i = this,
                r = e(window);
            r.on("resize", e.proxy(this.sizeOverlay, this)), e("select, object, embed").css({
                visibility: "hidden"
            }), this.sizeOverlay(), this.album = [];
            var o, a = 0,
                s = t.attr("data-lightbox");
            if (s) {
                o = e(t.prop("tagName") + '[data-lightbox="' + s + '"]');
                for (var l = 0; l < o.length; l = ++l) n(e(o[l])), o[l] === t[0] && (a = l)
            } else if ("lightbox" === t.attr("rel")) n(t);
            else {
                o = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
                for (var c = 0; c < o.length; c = ++c) n(e(o[c])), o[c] === t[0] && (a = c)
            }
            var u = r.scrollTop() + this.options.positionFromTop,
                d = r.scrollLeft();
            this.$lightbox.css({
                top: u + "px",
                left: d + "px"
            }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && e("body").addClass("lb-disable-scrolling"), this.changeImage(a)
        }, t.prototype.changeImage = function(t) {
            var n = this;
            this.disableKeyboardNav();
            var i = this.$lightbox.find(".lb-image");
            this.$overlay.fadeIn(this.options.fadeDuration), e(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
            var r = new Image;
            r.onload = function() {
                var o, a, s, l, c, u, d;
                i.attr("src", n.album[t].link), o = e(r), i.width(r.width), i.height(r.height), n.options.fitImagesInViewport && (d = e(window).width(), u = e(window).height(), c = d - n.containerLeftPadding - n.containerRightPadding - 20, l = u - n.containerTopPadding - n.containerBottomPadding - 120, n.options.maxWidth && n.options.maxWidth < c && (c = n.options.maxWidth), n.options.maxHeight && n.options.maxHeight < c && (l = n.options.maxHeight), (r.width > c || r.height > l) && (r.width / c > r.height / l ? (s = c, a = parseInt(r.height / (r.width / s), 10), i.width(s), i.height(a)) : (a = l, s = parseInt(r.width / (r.height / a), 10), i.width(s), i.height(a)))), n.sizeContainer(i.width(), i.height())
            }, r.src = this.album[t].link, this.currentImageIndex = t
        }, t.prototype.sizeOverlay = function() {
            this.$overlay.width(e(document).width()).height(e(document).height())
        }, t.prototype.sizeContainer = function(e, t) {
            function n() {
                i.$lightbox.find(".lb-dataContainer").width(a), i.$lightbox.find(".lb-prevLink").height(s), i.$lightbox.find(".lb-nextLink").height(s), i.showImage()
            }
            var i = this,
                r = this.$outerContainer.outerWidth(),
                o = this.$outerContainer.outerHeight(),
                a = e + this.containerLeftPadding + this.containerRightPadding,
                s = t + this.containerTopPadding + this.containerBottomPadding;
            r !== a || o !== s ? this.$outerContainer.animate({
                width: a,
                height: s
            }, this.options.resizeDuration, "swing", function() {
                n()
            }) : n()
        }, t.prototype.showImage = function() {
            this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
        }, t.prototype.updateNav = function() {
            var e = !1;
            try {
                document.createEvent("TouchEvent"), e = !!this.options.alwaysShowNavOnTouchDevices
            } catch (e) {}
            this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
        }, t.prototype.updateDetails = function() {
            var t = this;
            if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(t) {
                    void 0 !== e(this).attr("target") ? window.open(e(this).attr("href"), e(this).attr("target")) : location.href = e(this).attr("href")
                }), this.album.length > 1 && this.options.showImageNumberLabel) {
                var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
                this.$lightbox.find(".lb-number").text(n).fadeIn("fast")
            } else this.$lightbox.find(".lb-number").hide();
            this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
                return t.sizeOverlay()
            })
        }, t.prototype.preloadNeighboringImages = function() {
            if (this.album.length > this.currentImageIndex + 1) {
                var e = new Image;
                e.src = this.album[this.currentImageIndex + 1].link
            }
            if (this.currentImageIndex > 0) {
                var t = new Image;
                t.src = this.album[this.currentImageIndex - 1].link
            }
        }, t.prototype.enableKeyboardNav = function() {
            e(document).on("keyup.keyboard", e.proxy(this.keyboardAction, this))
        }, t.prototype.disableKeyboardNav = function() {
            e(document).off(".keyboard")
        }, t.prototype.keyboardAction = function(e) {
            var t = 27,
                n = 37,
                i = 39,
                r = e.keyCode,
                o = String.fromCharCode(r).toLowerCase();
            r === t || o.match(/x|o|c/) ? this.end() : "p" === o || r === n ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : "n" !== o && r !== i || (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
        }, t.prototype.end = function() {
            this.disableKeyboardNav(), e(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), e("select, object, embed").css({
                visibility: "visible"
            }), this.options.disableScrolling && e("body").removeClass("lb-disable-scrolling")
        }, new t
    }),
    function(e) {
        var t, n, i, r = function(e) {
                var t = function(e) {
                        return {
                            h: Math.floor(e / 36e5),
                            m: Math.floor(e / 6e4 % 60),
                            s: Math.floor(e / 1e3 % 60)
                        }
                    }(e),
                    n = [];
                return t.h > 0 && n.push(t.h), n.push(t.m < 10 && t.h > 0 ? "0" + t.m : t.m), n.push(t.s < 10 ? "0" + t.s : t.s), n.join(".")
            },
            o = function(e) {
                return e.sort(function() {
                    return 1 - Math.floor(3 * Math.random())
                }), e
            },
            a = !0,
            s = !1,
            l = e(document),
            c = function(e) {
                try {
                    a && window.console && window.console.log && window.console.log.apply(window.console, arguments)
                } catch (e) {}
            },
            u = s ? "sandbox-soundcloud.com" : "soundcloud.com",
            d = "https:" === document.location.protocol,
            p = function(e, t) {
                var n = (d || /^https/i.test(e) ? "https" : "http") + "://api." + u + "/resolve?url=",
                    i = "format=json&consumer_key=" + t + "&callback=?";
                return d && (e = e.replace(/^http:/, "https:")), /api\./.test(e) ? e + "?" + i : n + e + "&" + i
            },
            f = function() {
                var t = function() {
                        var e = !1;
                        try {
                            var t = new Audio;
                            e = t.canPlayType && /maybe|probably/.test(t.canPlayType("audio/mpeg"))
                        } catch (e) {}
                        return e
                    }(),
                    n = {
                        onReady: function() {
                            l.trigger("scPlayer:onAudioReady")
                        },
                        onPlay: function() {
                            l.trigger("scPlayer:onMediaPlay")
                        },
                        onPause: function() {
                            l.trigger("scPlayer:onMediaPause")
                        },
                        onEnd: function() {
                            l.trigger("scPlayer:onMediaEnd")
                        },
                        onBuffer: function(e) {
                            l.trigger({
                                type: "scPlayer:onMediaBuffering",
                                percent: e
                            })
                        }
                    },
                    i = function() {
                        var t = new Audio,
                            i = function(e) {
                                var t = e.target,
                                    i = (t.buffered.length && t.buffered.end(0)) / t.duration * 100;
                                n.onBuffer(i), t.currentTime === t.duration && n.onEnd()
                            },
                            r = function(e) {
                                var t = e.target,
                                    i = (t.buffered.length && t.buffered.end(0)) / t.duration * 100;
                                n.onBuffer(i)
                            };
                        return e('<div class="sc-player-engine-container"></div>').appendTo(document.body).append(t), t.addEventListener("play", n.onPlay, !1), t.addEventListener("pause", n.onPause, !1), t.addEventListener("timeupdate", i, !1), t.addEventListener("progress", r, !1), {
                            load: function(e, n) {
                                t.pause(), t.src = e.stream_url + (/\?/.test(e.stream_url) ? "&" : "?") + "consumer_key=" + n, t.load(), t.play()
                            },
                            play: function() {
                                t.play()
                            },
                            pause: function() {
                                t.pause()
                            },
                            stop: function() {
                                t.currentTime && (t.currentTime = 0, t.pause())
                            },
                            seek: function(e) {
                                t.currentTime = t.duration * e, t.play()
                            },
                            getDuration: function() {
                                return 1e3 * t.duration
                            },
                            getPosition: function() {
                                return 1e3 * t.currentTime
                            },
                            setVolume: function(e) {
                                t.volume = e / 100
                            }
                        }
                    },
                    r = function() {
                        var t, i = "scPlayerEngine",
                            r = function(t) {
                                var n = (d ? "https" : "http") + "://player." + u + "/player.swf?url=" + t + "&amp;enable_api=true&amp;player_type=engine&amp;object_id=" + i;
                                return e.browser.msie ? '<object height="100%" width="100%" id="' + i + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="' + n + '"><param name="movie" value="' + n + '" /><param name="allowscriptaccess" value="always" /></object>' : '<object height="100%" width="100%" id="' + i + '"><embed allowscriptaccess="always" height="100%" width="100%" src="' + n + '" type="application/x-shockwave-flash" name="' + i + '" /></object>'
                            };
                        return soundcloud.addEventListener("onPlayerReady", function(e, r) {
                            t = soundcloud.getPlayer(i), n.onReady()
                        }), soundcloud.addEventListener("onMediaEnd", n.onEnd), soundcloud.addEventListener("onMediaBuffering", function(e, t) {
                            n.onBuffer(t.percent)
                        }), soundcloud.addEventListener("onMediaPlay", n.onPlay), soundcloud.addEventListener("onMediaPause", n.onPause), {
                            load: function(n) {
                                var i = n.uri;
                                t ? t.api_load(i) : e('<div class="sc-player-engine-container"></div>').appendTo(document.body).html(r(i))
                            },
                            play: function() {
                                t && t.api_play()
                            },
                            pause: function() {
                                t && t.api_pause()
                            },
                            stop: function() {
                                t && t.api_stop()
                            },
                            seek: function(e) {
                                t && t.api_seekTo(t.api_getTrackDuration() * e)
                            },
                            getDuration: function() {
                                return t && t.api_getTrackDuration && 1e3 * t.api_getTrackDuration()
                            },
                            getPosition: function() {
                                return t && t.api_getTrackPosition && 1e3 * t.api_getTrackPosition()
                            },
                            setVolume: function(e) {
                                t && t.api_setVolume && t.api_setVolume(e)
                            }
                        }
                    };
                return t ? i() : r()
            }(),
            h = !1,
            m = [],
            g = {},
            v = function(n, i, r) {
                var o = 0,
                    a = {
                        node: n,
                        tracks: []
                    },
                    s = function(n) {
                        var r = p(n.url, t);
                        e.getJSON(r, function(t) {
                            o += 1, t.tracks ? (console.log("data.tracks", t.tracks), a.tracks = a.tracks.concat(t.tracks)) : t.duration ? (t.permalink_url = n.url, a.tracks.push(t)) : t.creator ? i.push({
                                url: t.uri + "/tracks"
                            }) : t.username ? /favorites/.test(n.url) ? i.push({
                                url: t.uri + "/favorites"
                            }) : i.push({
                                url: t.uri + "/tracks"
                            }) : e.isArray(t) && (a.tracks = a.tracks.concat(t)), i[o] ? s(i[o]) : a.node.trigger({
                                type: "onTrackDataLoaded",
                                playerObj: a,
                                url: r
                            })
                        })
                    };
                t = r, m.push(a), s(i[o])
            },
            y = function(e, t) {
                return t ? '<div class="sc-loading-artwork">Loading Artwork</div>' : e.artwork_url ? '<img src="' + e.artwork_url.replace("-large", "-t300x300") + '"/>' : '<div class="sc-no-artwork">No Artwork</div>'
            },
            b = function(t, n) {
                e(".sc-info", t).each(function(t) {
                    e("h3", this).html('<a href="' + n.permalink_url + '">' + n.title + "</a>"), e("h4", this).html('by <a href="' + n.user.permalink_url + '">' + n.user.username + "</a>"), e("p", this).html(n.description || "no Description")
                }), e(".sc-artwork-list li", t).each(function(t) {
                    var i = e(this),
                        r = i.data("sc-track");
                    r === n ? i.addClass("active").find(".sc-loading-artwork").each(function(t) {
                        e(this).removeClass("sc-loading-artwork").html(y(n, !1))
                    }) : i.removeClass("active")
                }), e(".sc-duration", t).html(r(n.duration)), e(".sc-waveform-container", t).html('<img src="' + n.waveform_url + '" />'), t.trigger("onPlayerTrackSwitch.scPlayer", [n])
            },
            x = function(e) {
                var i = e.permalink_url;
                n === i ? f.play() : (n = i, f.load(e, t))
            },
            w = function(t) {
                return m[e(t).data("sc-player").id]
            },
            T = function(t, n) {
                n && e("div.sc-player.playing").removeClass("playing"), e(t).toggleClass("playing", n).trigger(n ? "onPlayerPlay" : "onPlayerPause")
            },
            C = function(t, n) {
                var i = w(t).tracks[n || 0];
                b(t, i), g = {
                    $buffer: e(".sc-buffer", t),
                    $played: e(".sc-played", t),
                    position: e(".sc-position", t)[0]
                }, T(t, !0), x(i)
            },
            k = function(e) {
                T(e, !1), f.pause()
            },
            E = function() {
                var e = g.$played.closest(".sc-player");
                g.$played.css("width", "0%"), g.position.innerHTML = r(0), T(e, !1), f.stop(), e.trigger("onPlayerTrackFinish")
            },
            S = function(t, n) {
                f.seek(n), e(t).trigger("onPlayerSeek")
            },
            N = function(t) {
                var n = e(t);
                c("track finished get the next one"), $nextItem = e(".sc-trackslist li.active", n).next("li"), $nextItem.length || ($nextItem = n.nextAll("div.sc-player:first").find(".sc-trackslist li.active")), $nextItem.click()
            },
            D = function() {
                var e = 80,
                    t = document.cookie.split(";"),
                    n = new RegExp("scPlayer_volume=(\\d+)");
                for (var i in t)
                    if (n.test(t[i])) {
                        e = parseInt(t[i].match(n)[1], 10);
                        break
                    }
                return e
            }(),
            A = function(e) {
                var t = Math.floor(e),
                    n = new Date;
                n.setTime(n.getTime() + 31536e6), D = t, document.cookie = ["scPlayer_volume=", t, "; expires=", n.toUTCString(), '; path="/"'].join(""), f.setVolume(D)
            };
        l.bind("scPlayer:onAudioReady", function(e) {
            c("onPlayerReady: audio engine is ready"), f.play(), A(D)
        }).bind("scPlayer:onMediaPlay", function(e) {
            clearInterval(i), i = setInterval(function() {
                var e = f.getDuration(),
                    t = f.getPosition(),
                    n = t / e;
                g.$played.css("width", 100 * n + "%"), g.position.innerHTML = r(t), l.trigger({
                    type: "onMediaTimeUpdate.scPlayer",
                    duration: e,
                    position: t,
                    relative: n
                })
            }, 500)
        }).bind("scPlayer:onMediaPause", function(e) {
            clearInterval(i), i = null
        }).bind("scPlayer:onVolumeChange", function(e) {
            A(e.volume)
        }).bind("scPlayer:onMediaEnd", function(e) {
            E()
        }).bind("scPlayer:onMediaBuffering", function(e) {
            g.$buffer.css("width", e.percent + "%")
        }), e.scPlayer = function(t, n) {
            var i = e.extend({}, e.scPlayer.defaults, t),
                a = m.length,
                s = n && e(n),
                l = s[0].className.replace("sc-player", ""),
                c = i.links || e.map(e("a", s).add(s.filter("a")), function(e) {
                    return {
                        url: e.href,
                        title: e.innerHTML
                    }
                }),
                u = e('<div class="sc-player loading"></div>').data("sc-player", {
                    id: a
                }),
                d = e('<ol class="sc-artwork-list"></ol>').appendTo(u);
            e('<div class="sc-controls"></div>').appendTo(u), e('<div class="sc-info"><h3></h3><h4></h4><p></p><a href="#" class="sc-info-close">X</a></div>').appendTo(u);
            return (l || i.customClass) && u.addClass(l).addClass(i.customClass), u.find(".sc-controls").append('<a href="#play" class="sc-play">Play</a> <a href="#pause" class="sc-pause hidden">Pause</a>').end().append('<a href="#info" class="sc-info-toggle">Info</a>').append('<div class="sc-scrubber"></div>').find(".sc-scrubber").append('<div class="sc-volume-slider"><span class="sc-volume-status" style="width:' + D + '%"></span></div>').append('<div class="sc-time-span"><div class="sc-waveform-container"></div><div class="sc-buffer"></div><div class="sc-played"></div></div>').append('<div class="sc-time-indicators"><span class="sc-position"></span> | <span class="sc-duration"></span></div>'), $list = e('<ol class="sc-trackslist"></ol>').appendTo(u), v(u, c, i.apiKey), u.bind("onTrackDataLoaded.scPlayer", function(t) {
                var n = t.playerObj.tracks;
                i.randomize && (n = o(n)), e.each(n, function(t, n) {
                    var o = 0 === t;
                    e('<li><a href="' + n.permalink_url + '">' + n.title + '</a><span class="sc-track-duration">' + r(n.duration) + "</span></li>").data("sc-track", {
                        id: t
                    }).toggleClass("active", o).appendTo($list), e("<li></li>").append(y(n, t >= i.loadArtworks)).appendTo(d).toggleClass("active", o).data("sc-track", n)
                }), u.each(function() {
                    e.isFunction(i.beforeRender) && i.beforeRender.call(this, n)
                }), e(".sc-duration", u)[0].innerHTML = r(n[0].duration), e(".sc-position", u)[0].innerHTML = r(0), b(u, n[0]), i.continuePlayback && u.bind("onPlayerTrackFinish", function(e) {
                    N(u)
                }), u.removeClass("loading").trigger("onPlayerInit"), i.autoPlay && !h && (C(u), h = !0)
            }), s.each(function(t) {
                e(this).replaceWith(u)
            }), u
        }, e.scPlayer.stopAll = function() {
            e(".sc-player.playing a.sc-pause").click()
        }, e.scPlayer.destroy = function() {
            e(".sc-player, .sc-player-engine-container").remove()
        }, e.fn.scPlayer = function(t) {
            return h = !1, this.each(function() {
                e.scPlayer(t, this)
            }), this
        }, e.scPlayer.defaults = e.fn.scPlayer.defaults = {
            customClass: null,
            beforeRender: function(t) {
                e(this)
            },
            onDomReady: function() {
                e("a.sc-player, div.sc-player").scPlayer()
            },
            autoPlay: !1,
            continuePlayback: !0,
            randomize: !1,
            loadArtworks: 5,
            apiKey: "79e30dd2ac72db0444182eb00f176487"
        }, e(document).on("click", "a.sc-play, a.sc-pause", function(t) {
            var n = e(this).closest(".sc-player").find("ol.sc-trackslist");
            return n.find("li.active").click(), !1
        }), e(document).on("click", "a.sc-play", function(t) {
            var n = document.createElement("p"),
                i = document.createTextNode("||"),
                r = (document.querySelector("a.sc-play"), document.querySelector(".sc-controls"));
            n.appendChild(i), r.appendChild(n), n.addEventListener("click", function() {
                n.style.display = "none", e.scPlayer.stopAll = function() {
                    e(".sc-player.playing a.sc-pause").click()
                }, e.scPlayer.stopAll()
            })
        }), e(document).on("click", "a.sc-info-toggle, a.sc-info-close", function(t) {
            var n = e(this);
            return n.closest(".sc-player").find(".sc-info").toggleClass("active").end().find("a.sc-info-toggle").toggleClass("active"), !1
        }), e(document).on("click", ".sc-trackslist li", function(t) {
            var n = e(this),
                i = n.closest(".sc-player"),
                r = n.data("sc-track").id,
                o = i.is(":not(.playing)") || n.is(":not(.active)");
            return o ? C(i, r) : k(i), n.addClass("active").siblings("li").removeClass("active"), e(".artworks li", i).each(function(t) {
                e(this).toggleClass("active", t === r)
            }), !1
        });
        var L = function(t, n) {
                var i = e(t).closest(".sc-time-span"),
                    r = i.find(".sc-buffer"),
                    o = i.find(".sc-waveform-container img"),
                    a = i.closest(".sc-player"),
                    s = Math.min(r.width(), n - o.offset().left) / o.width();
                S(a, s)
            },
            j = function(e) {
                1 === e.targetTouches.length && (L(e.target, e.targetTouches && e.targetTouches.length && e.targetTouches[0].clientX), e.preventDefault())
            };
        e(document).on("click", ".sc-time-span", function(e) {
            return L(this, e.pageX), !1
        }).on("touchstart", ".sc-time-span", function(e) {
            this.addEventListener("touchmove", j, !1), e.originalEvent.preventDefault()
        }).on("touchend", ".sc-time-span", function(e) {
            this.removeEventListener("touchmove", j, !1), e.originalEvent.preventDefault()
        });
        var $ = function(t, n) {
                var i = e(t),
                    r = i.offset().left,
                    o = i.width(),
                    a = function(e) {
                        return Math.floor((e - r) / o * 100)
                    },
                    s = function(e) {
                        l.trigger({
                            type: "scPlayer:onVolumeChange",
                            volume: a(e.pageX)
                        })
                    };
                i.bind("mousemove.sc-player", s), s(n)
            },
            H = function(t, n) {
                e(t).unbind("mousemove.sc-player")
            };
        e(document).on("mousedown", ".sc-volume-slider", function(e) {
            $(this, e)
        }).on("mouseup", ".sc-volume-slider", function(e) {
            H(this, e)
        }), l.bind("scPlayer:onVolumeChange", function(t) {
            e("span.sc-volume-status").css({
                width: t.volume + "%"
            })
        }), e(function() {
            e.isFunction(e.scPlayer.defaults.onDomReady) && e.scPlayer.defaults.onDomReady()
        })
    }(jQuery);
