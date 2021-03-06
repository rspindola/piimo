function filtraObras() {
    var e = $(".wrap-obras").isotope({
            filter: ".mar-18",
            transitionDuration: 0
        }),
        i = {
            numberGreaterThan50: function () {
                var t = $(this).find(".number").text();
                return 50 < parseInt(t, 10)
            },
            ium: function () {
                return $(this).find(".name").text().match(/ium$/)
            }
        };
    $(".filtro-obras").on("change", function () {
        var t = this.value;
        t = i[t] || t, e.isotope({
            filter: t
        })
    })
}! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (c) {
    var p, o, u, n, h, e, l = "Close",
        d = "BeforeClose",
        f = "MarkupParse",
        m = "Open",
        r = "Change",
        i = "mfp",
        g = "." + i,
        y = "mfp-ready",
        s = "mfp-removing",
        a = "mfp-prevent-close",
        t = function () {},
        v = !!window.jQuery,
        w = c(window),
        k = function (t, e) {
            p.ev.on(i + t + g, e)
        },
        S = function (t, e, i, o) {
            var n = document.createElement("div");
            return n.className = "mfp-" + t, i && (n.innerHTML = i), o ? e && e.appendChild(n) : (n = c(n), e && n.appendTo(e)), n
        },
        T = function (t, e) {
            p.ev.triggerHandler(i + t, e), p.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), p.st.callbacks[t] && p.st.callbacks[t].apply(p, c.isArray(e) ? e : [e]))
        },
        b = function (t) {
            return t === e && p.currTemplate.closeBtn || (p.currTemplate.closeBtn = c(p.st.closeMarkup.replace("%title%", p.st.tClose)), e = t), p.currTemplate.closeBtn
        },
        C = function () {
            c.magnificPopup.instance || ((p = new t).init(), c.magnificPopup.instance = p)
        };
    t.prototype = {
        constructor: t,
        init: function () {
            var t = navigator.appVersion;
            p.isLowIE = p.isIE8 = document.all && !document.addEventListener, p.isAndroid = /android/gi.test(t), p.isIOS = /iphone|ipad|ipod/gi.test(t), p.supportsTransition = function () {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            }(), p.probablyMobile = p.isAndroid || p.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), u = c(document), p.popupsCache = {}
        },
        open: function (t) {
            var e;
            if (!1 === t.isObj) {
                p.items = t.items.toArray(), p.index = 0;
                var i, o = t.items;
                for (e = 0; e < o.length; e++)
                    if ((i = o[e]).parsed && (i = i.el[0]), i === t.el[0]) {
                        p.index = e;
                        break
                    }
            } else p.items = c.isArray(t.items) ? t.items : [t.items], p.index = t.index || 0;
            if (!p.isOpen) {
                p.types = [], h = "", t.mainEl && t.mainEl.length ? p.ev = t.mainEl.eq(0) : p.ev = u, t.key ? (p.popupsCache[t.key] || (p.popupsCache[t.key] = {}), p.currTemplate = p.popupsCache[t.key]) : p.currTemplate = {}, p.st = c.extend(!0, {}, c.magnificPopup.defaults, t), p.fixedContentPos = "auto" === p.st.fixedContentPos ? !p.probablyMobile : p.st.fixedContentPos, p.st.modal && (p.st.closeOnContentClick = !1, p.st.closeOnBgClick = !1, p.st.showCloseBtn = !1, p.st.enableEscapeKey = !1), p.bgOverlay || (p.bgOverlay = S("bg").on("click" + g, function () {
                    p.close()
                }), p.wrap = S("wrap").attr("tabindex", -1).on("click" + g, function (t) {
                    p._checkIfClose(t.target) && p.close()
                }), p.container = S("container", p.wrap)), p.contentContainer = S("content"), p.st.preloader && (p.preloader = S("preloader", p.container, p.st.tLoading));
                var n = c.magnificPopup.modules;
                for (e = 0; e < n.length; e++) {
                    var s = n[e];
                    s = s.charAt(0).toUpperCase() + s.slice(1), p["init" + s].call(p)
                }
                T("BeforeOpen"), p.st.showCloseBtn && (p.st.closeBtnInside ? (k(f, function (t, e, i, o) {
                    i.close_replaceWith = b(o.type)
                }), h += " mfp-close-btn-in") : p.wrap.append(b())), p.st.alignTop && (h += " mfp-align-top"), p.fixedContentPos ? p.wrap.css({
                    overflow: p.st.overflowY,
                    overflowX: "hidden",
                    overflowY: p.st.overflowY
                }) : p.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (!1 === p.st.fixedBgPos || "auto" === p.st.fixedBgPos && !p.fixedContentPos) && p.bgOverlay.css({
                    height: u.height(),
                    position: "absolute"
                }), p.st.enableEscapeKey && u.on("keyup" + g, function (t) {
                    27 === t.keyCode && p.close()
                }), w.on("resize" + g, function () {
                    p.updateSize()
                }), p.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && p.wrap.addClass(h);
                var r = p.wH = w.height(),
                    a = {};
                if (p.fixedContentPos && p._hasScrollBar(r)) {
                    var l = p._getScrollbarSize();
                    l && (a.marginRight = l)
                }
                p.fixedContentPos && (p.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");
                var d = p.st.mainClass;
                return p.isIE7 && (d += " mfp-ie7"), d && p._addClassToMFP(d), p.updateItemHTML(), T("BuildControls"), c("html").css(a), p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo || c(document.body)), p._lastFocusedEl = document.activeElement, setTimeout(function () {
                    p.content ? (p._addClassToMFP(y), p._setFocus()) : p.bgOverlay.addClass(y), u.on("focusin" + g, p._onFocusIn)
                }, 16), p.isOpen = !0, p.updateSize(r), T(m), t
            }
            p.updateItemHTML()
        },
        close: function () {
            p.isOpen && (T(d), p.isOpen = !1, p.st.removalDelay && !p.isLowIE && p.supportsTransition ? (p._addClassToMFP(s), setTimeout(function () {
                p._close()
            }, p.st.removalDelay)) : p._close())
        },
        _close: function () {
            T(l);
            var t = s + " " + y + " ";
            if (p.bgOverlay.detach(), p.wrap.detach(), p.container.empty(), p.st.mainClass && (t += p.st.mainClass + " "), p._removeClassFromMFP(t), p.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                p.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e)
            }
            u.off("keyup.mfp focusin" + g), p.ev.off(g), p.wrap.attr("class", "mfp-wrap").removeAttr("style"), p.bgOverlay.attr("class", "mfp-bg"), p.container.attr("class", "mfp-container"), !p.st.showCloseBtn || p.st.closeBtnInside && !0 !== p.currTemplate[p.currItem.type] || p.currTemplate.closeBtn && p.currTemplate.closeBtn.detach(), p.st.autoFocusLast && p._lastFocusedEl && c(p._lastFocusedEl).focus(), p.currItem = null, p.content = null, p.currTemplate = null, p.prevHeight = 0, T("AfterClose")
        },
        updateSize: function (t) {
            if (p.isIOS) {
                var e = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * e;
                p.wrap.css("height", i), p.wH = i
            } else p.wH = t || w.height();
            p.fixedContentPos || p.wrap.css("height", p.wH), T("Resize")
        },
        updateItemHTML: function () {
            var t = p.items[p.index];
            p.contentContainer.detach(), p.content && p.content.detach(), t.parsed || (t = p.parseEl(p.index));
            var e = t.type;
            if (T("BeforeChange", [p.currItem ? p.currItem.type : "", e]), p.currItem = t, !p.currTemplate[e]) {
                var i = !!p.st[e] && p.st[e].markup;
                T("FirstMarkupParse", i), p.currTemplate[e] = !i || c(i)
            }
            n && n !== t.type && p.container.removeClass("mfp-" + n + "-holder");
            var o = p["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, p.currTemplate[e]);
            p.appendContent(o, e), t.preloaded = !0, T(r, t), n = t.type, p.container.prepend(p.contentContainer), T("AfterChange")
        },
        appendContent: function (t, e) {
            (p.content = t) ? p.st.showCloseBtn && p.st.closeBtnInside && !0 === p.currTemplate[e] ? p.content.find(".mfp-close").length || p.content.append(b()) : p.content = t: p.content = "", T("BeforeAppend"), p.container.addClass("mfp-" + e + "-holder"), p.contentContainer.append(p.content)
        },
        parseEl: function (t) {
            var e, i = p.items[t];
            if (i.tagName ? i = {
                    el: c(i)
                } : (e = i.type, i = {
                    data: i,
                    src: i.src
                }), i.el) {
                for (var o = p.types, n = 0; n < o.length; n++)
                    if (i.el.hasClass("mfp-" + o[n])) {
                        e = o[n];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = e || p.st.type || "inline", i.index = t, i.parsed = !0, p.items[t] = i, T("ElementParse", i), p.items[t]
        },
        addGroup: function (e, i) {
            var t = function (t) {
                t.mfpEl = this, p._openClick(t, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, t)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, t) : (i.items = e).off(o).on(o, t))
        },
        _openClick: function (t, e, i) {
            if ((void 0 !== i.midClick ? i.midClick : c.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                var o = void 0 !== i.disableOn ? i.disableOn : c.magnificPopup.defaults.disableOn;
                if (o)
                    if (c.isFunction(o)) {
                        if (!o.call(p)) return !0
                    } else if (w.width() < o) return !0;
                t.type && (t.preventDefault(), p.isOpen && t.stopPropagation()), i.el = c(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), p.open(i)
            }
        },
        updateStatus: function (t, e) {
            if (p.preloader) {
                o !== t && p.container.removeClass("mfp-s-" + o), e || "loading" !== t || (e = p.st.tLoading);
                var i = {
                    status: t,
                    text: e
                };
                T("UpdateStatus", i), t = i.status, e = i.text, p.preloader.html(e), p.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), p.container.addClass("mfp-s-" + t), o = t
            }
        },
        _checkIfClose: function (t) {
            if (!c(t).hasClass(a)) {
                var e = p.st.closeOnContentClick,
                    i = p.st.closeOnBgClick;
                if (e && i) return !0;
                if (!p.content || c(t).hasClass("mfp-close") || p.preloader && t === p.preloader[0]) return !0;
                if (t === p.content[0] || c.contains(p.content[0], t)) {
                    if (e) return !0
                } else if (i && c.contains(document, t)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (t) {
            p.bgOverlay.addClass(t), p.wrap.addClass(t)
        },
        _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), p.wrap.removeClass(t)
        },
        _hasScrollBar: function (t) {
            return (p.isIE7 ? u.height() : document.body.scrollHeight) > (t || w.height())
        },
        _setFocus: function () {
            (p.st.focus ? p.content.find(p.st.focus).eq(0) : p.wrap).focus()
        },
        _onFocusIn: function (t) {
            return t.target === p.wrap[0] || c.contains(p.wrap[0], t.target) ? void 0 : (p._setFocus(), !1)
        },
        _parseMarkup: function (n, t, e) {
            var s;
            e.data && (t = c.extend(e.data, t)), T(f, [n, t, e]), c.each(t, function (t, e) {
                if (void 0 === e || !1 === e) return !0;
                if (1 < (s = t.split("_")).length) {
                    var i = n.find(g + "-" + s[0]);
                    if (0 < i.length) {
                        var o = s[1];
                        "replaceWith" === o ? i[0] !== e[0] && i.replaceWith(e) : "img" === o ? i.is("img") ? i.attr("src", e) : i.replaceWith(c("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(s[1], e)
                    }
                } else n.find(g + "-" + t).html(e)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === p.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), p.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return p.scrollbarSize
        }
    }, c.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (t, e) {
            return C(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
        },
        close: function () {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function (t, e) {
            e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, c.fn.magnificPopup = function (t) {
        C();
        var e = c(this);
        if ("string" == typeof t)
            if ("open" === t) {
                var i, o = v ? e.data("magnificPopup") : e[0].magnificPopup,
                    n = parseInt(arguments[1], 10) || 0;
                o.items ? i = o.items[n] : (i = e, o.delegate && (i = i.find(o.delegate)), i = i.eq(n)), p._openClick({
                    mfpEl: i
                }, e, o)
            } else p.isOpen && p[t].apply(p, Array.prototype.slice.call(arguments, 1));
        else t = c.extend(!0, {}, t), v ? e.data("magnificPopup", t) : e[0].magnificPopup = t, p.addGroup(e, t);
        return e
    };
    var x, $, I, z = "inline",
        _ = function () {
            I && ($.after(I.addClass(x)).detach(), I = null)
        };
    c.magnificPopup.registerModule(z, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                p.types.push(z), k(l + "." + z, function () {
                    _()
                })
            },
            getInline: function (t, e) {
                if (_(), t.src) {
                    var i = p.st.inline,
                        o = c(t.src);
                    if (o.length) {
                        var n = o[0].parentNode;
                        n && n.tagName && ($ || (x = i.hiddenClass, $ = S(x), x = "mfp-" + x), I = o.after($).detach().removeClass(x)), p.updateStatus("ready")
                    } else p.updateStatus("error", i.tNotFound), o = c("<div>");
                    return t.inlineElement = o
                }
                return p.updateStatus("ready"), p._parseMarkup(e, {}, t), e
            }
        }
    });
    var E, O = "ajax",
        L = function () {
            E && c(document.body).removeClass(E)
        },
        P = function () {
            L(), p.req && p.req.abort()
        };
    c.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                p.types.push(O), E = p.st.ajax.cursor, k(l + "." + O, P), k("BeforeChange." + O, P)
            },
            getAjax: function (n) {
                E && c(document.body).addClass(E), p.updateStatus("loading");
                var t = c.extend({
                    url: n.src,
                    success: function (t, e, i) {
                        var o = {
                            data: t,
                            xhr: i
                        };
                        T("ParseAjax", o), p.appendContent(c(o.data), O), n.finished = !0, L(), p._setFocus(), setTimeout(function () {
                            p.wrap.addClass(y)
                        }, 16), p.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function () {
                        L(), n.finished = n.loadError = !0, p.updateStatus("error", p.st.ajax.tError.replace("%url%", n.src))
                    }
                }, p.st.ajax.settings);
                return p.req = c.ajax(t), ""
            }
        }
    });
    var A;
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var t = p.st.image,
                    e = ".image";
                p.types.push("image"), k(m + e, function () {
                    "image" === p.currItem.type && t.cursor && c(document.body).addClass(t.cursor)
                }), k(l + e, function () {
                    t.cursor && c(document.body).removeClass(t.cursor), w.off("resize" + g)
                }), k("Resize" + e, p.resizeImage), p.isLowIE && k("AfterChange", p.resizeImage)
            },
            resizeImage: function () {
                var t = p.currItem;
                if (t && t.img && p.st.image.verticalFit) {
                    var e = 0;
                    p.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", p.wH - e)
                }
            },
            _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, A && clearInterval(A), t.isCheckingImgSize = !1, T("ImageHasSize", t), t.imgHidden && (p.content && p.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function (e) {
                var i = 0,
                    o = e.img[0],
                    n = function (t) {
                        A && clearInterval(A), A = setInterval(function () {
                            return 0 < o.naturalWidth ? void p._onImageHasSize(e) : (200 < i && clearInterval(A), void(3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)))
                        }, t)
                    };
                n(1)
            },
            getImage: function (t, e) {
                var i = 0,
                    o = function () {
                        t && (t.img[0].complete ? (t.img.off(".mfploader"), t === p.currItem && (p._onImageHasSize(t), p.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, T("ImageLoadComplete")) : ++i < 200 ? setTimeout(o, 100) : n())
                    },
                    n = function () {
                        t && (t.img.off(".mfploader"), t === p.currItem && (p._onImageHasSize(t), p.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                    },
                    s = p.st.image,
                    r = e.find(".mfp-img");
                if (r.length) {
                    var a = document.createElement("img");
                    a.className = "mfp-img", t.el && t.el.find("img").length && (a.alt = t.el.find("img").attr("alt")), t.img = c(a).on("load.mfploader", o).on("error.mfploader", n), a.src = t.src, r.is("img") && (t.img = t.img.clone()), 0 < (a = t.img[0]).naturalWidth ? t.hasSize = !0 : a.width || (t.hasSize = !1)
                }
                return p._parseMarkup(e, {
                    title: function (t) {
                        if (t.data && void 0 !== t.data.title) return t.data.title;
                        var e = p.st.image.titleSrc;
                        if (e) {
                            if (c.isFunction(e)) return e.call(p, t);
                            if (t.el) return t.el.attr(e) || ""
                        }
                        return ""
                    }(t),
                    img_replaceWith: t.img
                }, t), p.resizeImage(), t.hasSize ? (A && clearInterval(A), t.loadError ? (e.addClass("mfp-loading"), p.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), p.updateStatus("ready"))) : (p.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), p.findImageSize(t))), e
            }
        }
    });
    var M;
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var t, s = p.st.zoom,
                    e = ".zoom";
                if (s.enabled && p.supportsTransition) {
                    var i, o, n = s.duration,
                        r = function (t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + s.duration / 1e3 + "s " + s.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                n = "transition";
                            return o["-webkit-" + n] = o["-moz-" + n] = o["-o-" + n] = o[n] = i, e.css(o), e
                        },
                        a = function () {
                            p.content.css("visibility", "visible")
                        };
                    k("BuildControls" + e, function () {
                        if (p._allowZoom()) {
                            if (clearTimeout(i), p.content.css("visibility", "hidden"), !(t = p._getItemToZoom())) return void a();
                            (o = r(t)).css(p._getOffset()), p.wrap.append(o), i = setTimeout(function () {
                                o.css(p._getOffset(!0)), i = setTimeout(function () {
                                    a(), setTimeout(function () {
                                        o.remove(), t = o = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, n)
                            }, 16)
                        }
                    }), k(d + e, function () {
                        if (p._allowZoom()) {
                            if (clearTimeout(i), p.st.removalDelay = n, !t) {
                                if (!(t = p._getItemToZoom())) return;
                                o = r(t)
                            }
                            o.css(p._getOffset(!0)), p.wrap.append(o), p.content.css("visibility", "hidden"), setTimeout(function () {
                                o.css(p._getOffset())
                            }, 16)
                        }
                    }), k(l + e, function () {
                        p._allowZoom() && (a(), o && o.remove(), t = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === p.currItem.type
            },
            _getItemToZoom: function () {
                return !!p.currItem.hasSize && p.currItem.img
            },
            _getOffset: function (t) {
                var e, i = (e = t ? p.currItem.img : p.st.zoom.opener(p.currItem.el || p.currItem)).offset(),
                    o = parseInt(e.css("padding-top"), 10),
                    n = parseInt(e.css("padding-bottom"), 10);
                i.top -= c(window).scrollTop() - o;
                var s = {
                    width: e.width(),
                    height: (v ? e.innerHeight() : e[0].offsetHeight) - n - o
                };
                return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var H = "iframe",
        W = function (t) {
            if (p.currTemplate[H]) {
                var e = p.currTemplate[H].find("iframe");
                e.length && (t || (e[0].src = "//about:blank"), p.isIE8 && e.css("display", t ? "block" : "none"))
            }
        };
    c.magnificPopup.registerModule(H, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                p.types.push(H), k("BeforeChange", function (t, e, i) {
                    e !== i && (e === H ? W() : i === H && W(!0))
                }), k(l + "." + H, function () {
                    W()
                })
            },
            getIframe: function (t, e) {
                var i = t.src,
                    o = p.st.iframe;
                c.each(o.patterns, function () {
                    return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                });
                var n = {};
                return o.srcAction && (n[o.srcAction] = i), p._parseMarkup(e, n, t), p.updateStatus("ready"), e
            }
        }
    });
    var j = function (t) {
            var e = p.items.length;
            return e - 1 < t ? t - e : t < 0 ? e + t : t
        },
        D = function (t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var s = p.st.gallery,
                    t = ".mfp-gallery";
                return p.direction = !0, !(!s || !s.enabled) && (h += " mfp-gallery", k(m + t, function () {
                    s.navigateByImgClick && p.wrap.on("click" + t, ".mfp-img", function () {
                        return 1 < p.items.length ? (p.next(), !1) : void 0
                    }), u.on("keydown" + t, function (t) {
                        37 === t.keyCode ? p.prev() : 39 === t.keyCode && p.next()
                    })
                }), k("UpdateStatus" + t, function (t, e) {
                    e.text && (e.text = D(e.text, p.currItem.index, p.items.length))
                }), k(f + t, function (t, e, i, o) {
                    var n = p.items.length;
                    i.counter = 1 < n ? D(s.tCounter, o.index, n) : ""
                }), k("BuildControls" + t, function () {
                    if (1 < p.items.length && s.arrows && !p.arrowLeft) {
                        var t = s.arrowMarkup,
                            e = p.arrowLeft = c(t.replace(/%title%/gi, s.tPrev).replace(/%dir%/gi, "left")).addClass(a),
                            i = p.arrowRight = c(t.replace(/%title%/gi, s.tNext).replace(/%dir%/gi, "right")).addClass(a);
                        e.click(function () {
                            p.prev()
                        }), i.click(function () {
                            p.next()
                        }), p.container.append(e.add(i))
                    }
                }), k(r + t, function () {
                    p._preloadTimeout && clearTimeout(p._preloadTimeout), p._preloadTimeout = setTimeout(function () {
                        p.preloadNearbyImages(), p._preloadTimeout = null
                    }, 16)
                }), void k(l + t, function () {
                    u.off(t), p.wrap.off("click" + t), p.arrowRight = p.arrowLeft = null
                }))
            },
            next: function () {
                p.direction = !0, p.index = j(p.index + 1), p.updateItemHTML()
            },
            prev: function () {
                p.direction = !1, p.index = j(p.index - 1), p.updateItemHTML()
            },
            goTo: function (t) {
                p.direction = t >= p.index, p.index = t, p.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var t, e = p.st.gallery.preload,
                    i = Math.min(e[0], p.items.length),
                    o = Math.min(e[1], p.items.length);
                for (t = 1; t <= (p.direction ? o : i); t++) p._preloadItem(p.index + t);
                for (t = 1; t <= (p.direction ? i : o); t++) p._preloadItem(p.index - t)
            },
            _preloadItem: function (t) {
                if (t = j(t), !p.items[t].preloaded) {
                    var e = p.items[t];
                    e.parsed || (e = p.parseEl(t)), T("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
                        e.hasSize = !0
                    }).on("error.mfploader", function () {
                        e.hasSize = !0, e.loadError = !0, T("LazyLoadError", e)
                    }).attr("src", e.src)), e.preloaded = !0
                }
            }
        }
    });
    var B = "retina";
    c.magnificPopup.registerModule(B, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (1 < window.devicePixelRatio) {
                    var i = p.st.retina,
                        o = i.ratio;
                    1 < (o = isNaN(o) ? o() : o) && (k("ImageHasSize." + B, function (t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / o,
                            width: "100%"
                        })
                    }), k("ElementParse." + B, function (t, e) {
                        e.src = i.replaceSrc(e, o)
                    }))
                }
            }
        }
    }), C()
}),
function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (d) {
    "use strict";
    var n, r = window.Slick || {};
    (n = 0, r = function (t, e) {
        var i, o = this;
        o.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: d(t),
            appendDots: d(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (t, e) {
                return d('<button type="button" />').text(e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, d.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = d(t), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, i = d(t).data("slick") || {}, o.options = d.extend({}, o.defaults, e, i), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = d.proxy(o.autoPlay, o), o.autoPlayClear = d.proxy(o.autoPlayClear, o), o.autoPlayIterator = d.proxy(o.autoPlayIterator, o), o.changeSlide = d.proxy(o.changeSlide, o), o.clickHandler = d.proxy(o.clickHandler, o), o.selectHandler = d.proxy(o.selectHandler, o), o.setPosition = d.proxy(o.setPosition, o), o.swipeHandler = d.proxy(o.swipeHandler, o), o.dragHandler = d.proxy(o.dragHandler, o), o.keyHandler = d.proxy(o.keyHandler, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function (t, e, i) {
        var o = this;
        if ("boolean" == typeof e) i = e, e = null;
        else if (e < 0 || e >= o.slideCount) return !1;
        o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? d(t).appendTo(o.$slideTrack) : i ? d(t).insertBefore(o.$slides.eq(e)) : d(t).insertAfter(o.$slides.eq(e)) : !0 === i ? d(t).prependTo(o.$slideTrack) : d(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, e) {
            d(e).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, r.prototype.animateSlide = function (t, e) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), d({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate(" + t + "px, 0px)" : i[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(i)
            },
            complete: function () {
                e && e.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), e && setTimeout(function () {
            o.disableTransition(), e.call()
        }, o.options.speed))
    }, r.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = d(t).not(this.$slider)), t
    }, r.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = d(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, r.prototype.applyTransition = function (t) {
        var e = this,
            i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, r.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function () {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, r.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = d(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = d(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function () {
        var t, e, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), e = d("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(d("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, r.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
            d(e).attr("data-slick-index", t).data("originalStyling", d(e).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? d('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), d("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, r.prototype.buildRows = function () {
        var t, e, i, o, n, s, r, a = this;
        if (o = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), t = 0; t < n; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = t * r + (e * a.options.slidesPerRow + i);
                        s.get(c) && d.appendChild(s.get(c))
                    }
                    l.appendChild(d)
                }
                o.appendChild(l)
            }
            a.$slider.empty().append(o), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function (t, e) {
        var i, o, n, s = this,
            r = !1,
            a = s.$slider.width(),
            l = window.innerWidth || d(window).width();
        if ("window" === s.respondTo ? n = l : "slider" === s.respondTo ? n = a : "min" === s.respondTo && (n = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? n < s.breakpoints[i] && (o = s.breakpoints[i]) : n > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || e) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), r = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), r = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), r = o), t || !1 === r || s.$slider.trigger("breakpoint", [s, r])
        }
    }, r.prototype.changeSlide = function (t, e) {
        var i, o, n = this,
            s = d(t.currentTarget);
        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? n.options.slidesToScroll : n.options.slidesToShow - i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, e);
                break;
            case "next":
                o = 0 === i ? n.options.slidesToScroll : i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, e);
                break;
            case "index":
                var r = 0 === t.data.index ? 0 : t.data.index || s.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(r), !1, e), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                i = e[o]
            }
        return t
    }, r.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (d("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", d.proxy(t.interrupt, t, !0)).off("mouseleave.slick", d.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), d(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().off("click.slick", t.selectHandler), d(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), d(window).off("resize.slick.slick-" + t.instanceUid, t.resize), d("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), d(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, r.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", d.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", d.proxy(t.interrupt, t, !1))
    }, r.prototype.cleanUpRows = function () {
        var t;
        1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, r.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, r.prototype.destroy = function (t) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            d(this).attr("style", d(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
    }, r.prototype.disableTransition = function (t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, r.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, r.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.focusHandler = function () {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var e = d(this);
            setTimeout(function () {
                i.options.pauseOnFocus && (i.focussed = e.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, r.prototype.getDotCount = function () {
        var t = this,
            e = 0,
            i = 0,
            o = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++o;
            else
                for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) o = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return o - 1
    }, r.prototype.getLeft = function (t) {
        var e, i, o, n, s = this,
            r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? n = -1.5 : 1 === s.options.slidesToShow && (n = -2)), r = i * s.options.slidesToShow * n), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
    }, r.prototype.getOption = r.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, r.prototype.getNavigableIndexes = function () {
        var t, e = this,
            i = 0,
            o = 0,
            n = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, r.prototype.getSlick = function () {
        return this
    }, r.prototype.getSlideCount = function () {
        var i, o, n = this;
        return o = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (t, e) {
            if (e.offsetLeft - o + d(e).outerWidth() / 2 > -1 * n.swipeLeft) return i = e, !1
        }), Math.abs(d(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function (t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, r.prototype.init = function (t) {
        var e = this;
        d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, r.prototype.initADA = function () {
        var i = this,
            o = Math.ceil(i.slideCount / i.options.slidesToShow),
            n = i.getNavigableIndexes().filter(function (t) {
                return 0 <= t && t < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (t) {
            var e = n.indexOf(t);
            d(this).attr({
                role: "tabpanel",
                id: "slick-slide" + i.instanceUid + t,
                tabindex: -1
            }), -1 !== e && d(this).attr({
                "aria-describedby": "slick-slide-control" + i.instanceUid + e
            })
        }), i.$dots.attr("role", "tablist").find("li").each(function (t) {
            var e = n[t];
            d(this).attr({
                role: "presentation"
            }), d(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + t,
                "aria-controls": "slick-slide" + i.instanceUid + e,
                "aria-label": t + 1 + " of " + o,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++) i.$slides.eq(t).attr("tabindex", 0);
        i.activateADA()
    }, r.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, r.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && (d("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && d("li", t.$dots).on("mouseenter.slick", d.proxy(t.interrupt, t, !0)).on("mouseleave.slick", d.proxy(t.interrupt, t, !1))
    }, r.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", d.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", d.proxy(t.interrupt, t, !1)))
    }, r.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), d(document).on(t.visibilityChange, d.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler), d(window).on("orientationchange.slick.slick-" + t.instanceUid, d.proxy(t.orientationChange, t)), d(window).on("resize.slick.slick-" + t.instanceUid, d.proxy(t.resize, t)), d("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), d(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), d(t.setPosition)
    }, r.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, r.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function () {
        function t(t) {
            d("img[data-lazy]", t).each(function () {
                var t = d(this),
                    e = d(this).attr("data-lazy"),
                    i = d(this).attr("data-srcset"),
                    o = d(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    n = document.createElement("img");
                n.onload = function () {
                    t.animate({
                        opacity: 0
                    }, 100, function () {
                        i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", e).animate({
                            opacity: 1
                        }, 200, function () {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, e])
                    })
                }, n.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, e])
                }, n.src = e
            })
        }
        var e, i, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (0 < i && i--, o <= s.slideCount && o++)), e = s.$slider.find(".slick-slide").slice(i, o), "anticipated" === s.options.lazyLoad)
            for (var n = i - 1, r = o, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) n < 0 && (n = s.slideCount - 1), e = (e = e.add(a.eq(n))).add(a.eq(r)), n--, r++;
        t(e), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, r.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, r.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && d(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }, r.prototype.prev = r.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, r.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var e, i, o, n, s, r = this,
            a = d("img[data-lazy]", r.$slider);
        a.length ? (e = a.first(), i = e.attr("data-lazy"), o = e.attr("data-srcset"), n = e.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
            o && (e.attr("srcset", o), n && e.attr("sizes", n)), e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, e, i]), r.progressiveLazyLoad()
        }, s.onerror = function () {
            t < 3 ? setTimeout(function () {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]), r.progressiveLazyLoad())
        }, s.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, r.prototype.refresh = function (t) {
        var e, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), e = o.currentSlide, o.destroy(!0), d.extend(o, o.initials, {
            currentSlide: e
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function () {
        var t, e, i, o = this,
            n = o.options.responsive || null;
        if ("array" === d.type(n) && n.length) {
            for (t in o.respondTo = o.options.respondTo || "window", n)
                if (i = o.breakpoints.length - 1, n.hasOwnProperty(t)) {
                    for (e = n[t].breakpoint; 0 <= i;) o.breakpoints[i] && o.breakpoints[i] === e && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(e), o.breakpointSettings[e] = n[t].settings
                }
            o.breakpoints.sort(function (t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, r.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, r.prototype.resize = function () {
        var t = this;
        d(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = d(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function (t, e, i) {
        var o = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : o.slideCount - 1 : !0 === e ? --t : t, o.slideCount < 1 || t < 0 || t > o.slideCount - 1) return !1;
        o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.setCSS = function (t) {
        var e, i, o = this,
            n = {};
        !0 === o.options.rtl && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", n[o.positionProp] = t, !1 === o.transformsEnabled || (!(n = {}) === o.cssTransitions ? n[o.animType] = "translate(" + e + ", " + i + ")" : n[o.animType] = "translate3d(" + e + ", " + i + ", 0px)"), o.$slideTrack.css(n)
    }, r.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, r.prototype.setFade = function () {
        var i, o = this;
        o.$slides.each(function (t, e) {
            i = o.slideWidth * t * -1, !0 === o.options.rtl ? d(e).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : d(e).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function () {
        var t, e, i, o, n, s = this,
            r = !1;
        if ("object" === d.type(arguments[0]) ? (i = arguments[0], r = arguments[1], n = "multiple") : "string" === d.type(arguments[0]) && (i = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) s.options[i] = o;
        else if ("multiple" === n) d.each(i, function (t, e) {
            s.options[t] = e
        });
        else if ("responsive" === n)
            for (e in o)
                if ("array" !== d.type(s.options.responsive)) s.options.responsive = [o[e]];
                else {
                    for (t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === o[e].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[e])
                }
        r && (s.unload(), s.reinit())
    }, r.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, r.prototype.setProps = function () {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, r.prototype.setSlideClasses = function (t) {
        var e, i, o, n, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + t, i.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
        } else 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, r.prototype.setupInfinite = function () {
        var t, e, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) e = t - 1, d(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1) e = t, d(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                d(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, r.prototype.selectHandler = function (t) {
        var e = d(t.target).is(".slick-slide") ? d(t.target) : d(t.target).parents(".slick-slide"),
            i = parseInt(e.attr("data-slick-index"));
        i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, r.prototype.slideHandler = function (t, e, i) {
        var o, n, s, r, a, l = null,
            d = this;
        if (e = e || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === t))
            if (!1 === e && d.asNavFor(t), o = t, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function () {
                d.postSlide(o)
            }) : d.postSlide(o));
            else if (!1 === d.options.infinite && !0 === d.options.centerMode && (t < 0 || t > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function () {
            d.postSlide(o)
        }) : d.postSlide(o));
        else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), n = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), s = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s), d.fadeSlide(n, function () {
                d.postSlide(n)
            })) : d.postSlide(n), void d.animateHeight();
            !0 !== i ? d.animateSlide(l, function () {
                d.postSlide(n)
            }) : d.postSlide(n)
        }
    }, r.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function () {
        var t, e, i, o, n = this;
        return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && 0 <= o ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && 315 <= o ? !1 === n.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function (t) {
        var e, i, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;
        if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, r.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, r.prototype.swipeMove = function (t) {
        var e, i, o, n, s, r, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, t.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + o * n : a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, r.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, r.prototype.unload = function () {
        var t = this;
        d(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, r.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, r.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, d.fn.slick = function () {
        var t, e, i = this,
            o = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || void 0 === o ? i[t].slick = new r(i[t], o) : e = i[t].slick[o].apply(i[t].slick, n), void 0 !== e) return e;
        return i
    }
}),
function (e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(d, n, c) {
        (c = c || e || t.jQuery) && (n.prototype.option || (n.prototype.option = function (t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }), c.fn[d] = function (t) {
            if ("string" == typeof t) {
                var e = p.call(arguments, 1);
                return r = e, l = "$()." + d + '("' + (s = t) + '")', (i = this).each(function (t, e) {
                    var i = c.data(e, d);
                    if (i) {
                        var o = i[s];
                        if (o && "_" != s.charAt(0)) {
                            var n = o.apply(i, r);
                            a = void 0 === a ? n : a
                        } else u(l + " is not a valid method")
                    } else u(d + " not initialized. Cannot call methods, i.e. " + l)
                }), void 0 !== a ? a : i
            }
            var i, s, r, a, l, o;
            return o = t, this.each(function (t, e) {
                var i = c.data(e, d);
                i ? (i.option(o), i._init()) : (i = new n(e, o), c.data(e, d, i))
            }), this
        }, o(c))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var p = Array.prototype.slice,
        n = t.console,
        u = void 0 === n ? function () {} : function (t) {
            n.error(t)
        };
    return o(e || t.jQuery), i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return -1 == o.indexOf(e) && o.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return -1 != o && i.splice(o, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n];
                o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function y(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function v(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function w(t) {
        if (function () {
                if (!b) {
                    b = !0;
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                    var e = document.body || document.documentElement;
                    e.appendChild(t);
                    var i = v(t);
                    k = 200 == Math.round(y(i.width)), w.isBoxSizeOuter = k, e.removeChild(t)
                }
            }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = v(t);
            if ("none" == e.display) return function () {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < T; e++) t[S[e]] = 0;
                return t
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < T; n++) {
                var s = S[n],
                    r = e[s],
                    a = parseFloat(r);
                i[s] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight,
                d = i.paddingTop + i.paddingBottom,
                c = i.marginLeft + i.marginRight,
                p = i.marginTop + i.marginBottom,
                u = i.borderLeftWidth + i.borderRightWidth,
                h = i.borderTopWidth + i.borderBottomWidth,
                f = o && k,
                m = y(e.width);
            !1 !== m && (i.width = m + (f ? 0 : l + u));
            var g = y(e.height);
            return !1 !== g && (i.height = g + (f ? 0 : d + h)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (d + h), i.outerWidth = i.width + c, i.outerHeight = i.height + p, i
        }
    }
    var k, i = "undefined" == typeof console ? function () {} : function (t) {
            console.error(t)
        },
        S = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        T = S.length,
        b = !1;
    return w
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var i = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i] + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function (t, e) {
        return t[i](e)
    }
}),
function (e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function (d, s) {
    var c = {
            extend: function (t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function (t, e) {
                return (t % e + e) % e
            }
        },
        e = Array.prototype.slice;
    c.makeArray = function (t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }, c.removeFrom = function (t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, c.getParent = function (t, e) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, s(t, e)) return t
    }, c.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, c.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, c.filterFindElements = function (t, o) {
        t = c.makeArray(t);
        var n = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                s(t, o) && n.push(t);
                for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i])
            }
        }), n
    }, c.debounceMethod = function (t, e, o) {
        o = o || 100;
        var n = t.prototype[e],
            s = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[s];
            clearTimeout(t);
            var e = arguments,
                i = this;
            this[s] = setTimeout(function () {
                n.apply(i, e), delete i[s]
            }, o)
        }
    }, c.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, c.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var p = d.console;
    return c.htmlInit = function (a, l) {
        c.docReady(function () {
            var t = c.toDashed(l),
                n = "data-" + t,
                e = document.querySelectorAll("[" + n + "]"),
                i = document.querySelectorAll(".js-" + t),
                o = c.makeArray(e).concat(c.makeArray(i)),
                s = n + "-options",
                r = d.jQuery;
            o.forEach(function (e) {
                var t, i = e.getAttribute(n) || e.getAttribute(s);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void(p && p.error("Error parsing " + n + " on " + e.className + ": " + t))
                }
                var o = new a(e, t);
                r && r.data(e, l, o)
            })
        })
    }, c
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var o = document.documentElement.style,
        n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        r = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[n],
        a = {
            transform: s,
            transition: n,
            transitionDuration: n + "Duration",
            transitionProperty: n + "Property",
            transitionDelay: n + "Delay"
        },
        l = i.prototype = Object.create(t.prototype);
    l.constructor = i, l._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.getSize = function () {
        this.size = e(this.element)
    }, l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[a[i] || i] = t[i]
        }
    }, l.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size; - 1 != o.indexOf("%") && (s = s / 100 * a.width), -1 != n.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, l.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var l = o ? "paddingTop" : "paddingBottom",
            d = o ? "top" : "bottom",
            c = o ? "bottom" : "top",
            p = this.position.y + t[l];
        e[d] = this.getYValue(p), e[c] = "", this.css(e), this.emitEvent("layout", [this])
    }, l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !n || this.isTransitioning) {
            var s = t - i,
                r = e - o,
                a = {};
            a.transform = this.getTranslate(s, r), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function (t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, l._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var d = "opacity," + s.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase()
    });
    l.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: d,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(r, this, !1)
        }
    }, l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, l.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var c = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                    for (var e in t) return !1;
                    return !0
                }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function () {
        this.css(p)
    }, l.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, l.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, l.remove = function () {
        return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, l.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, l.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, l.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
}),
function (n, s) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, o) {
        return s(n, t, e, i, o)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function (t, e, n, s, o) {
    "use strict";

    function r(t, e) {
        var i = s.getQueryElement(t);
        if (i) {
            this.element = i, d && (this.$element = d(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
            var o = ++c;
            this.element.outlayerGUID = o, (p[o] = this)._create(), this._getOption("initLayout") && this.layout()
        } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function a(t) {
        function e() {
            t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    var l = t.console,
        d = t.jQuery,
        i = function () {},
        c = 0,
        p = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var u = r.prototype;
    s.extend(u, e.prototype), u.option = function (t) {
        s.extend(this.options, t)
    }, u._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, u.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, u._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = new i(e[n], this);
            o.push(s)
        }
        return o
    }, u._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector)
    }, u.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, u.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, u._init = u.layout, u._resetLayout = function () {
        this.getSize()
    }, u.getSize = function () {
        this.size = n(this.element)
    }, u._getMeasurement = function (t, e) {
        var i, o = this.options[t];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
    }, u.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, u._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, u._layoutItems = function (t, i) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var o = [];
            t.forEach(function (t) {
                var e = this._getItemLayoutPosition(t);
                e.item = t, e.isInstant = i || t.isLayoutInstant, o.push(e)
            }, this), this._processLayoutQueue(o)
        }
    }, u._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, u._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, u.updateStagger = function () {
        var t = this.options.stagger;
        return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            return i.length ? (i = parseFloat(i)) * (h[o] || 1) : 0
        }(t), this.stagger)
    }, u._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, u._postLayout = function () {
        this.resizeContainer()
    }, u.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, u._getContainerSize = i, u._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, u._emitCompleteOnItems = function (e, t) {
        function i() {
            n.dispatchEvent(e + "Complete", null, [t])
        }

        function o() {
            ++r == s && i()
        }
        var n = this,
            s = t.length;
        if (t && s) {
            var r = 0;
            t.forEach(function (t) {
                t.once(e, o)
            })
        } else i()
    }, u.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), d)
            if (this.$element = this.$element || d(this.element), e) {
                var n = d.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, u.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, u.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, u.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, u.unstamp = function (t) {
        (t = this._find(t)) && t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, u._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), s.makeArray(t)
    }, u._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, u._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, u._manageStamp = i, u._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(t);
        return {
            left: e.left - i.left - o.marginLeft,
            top: e.top - i.top - o.marginTop,
            right: i.right - e.right - o.marginRight,
            bottom: i.bottom - e.bottom - o.marginBottom
        }
    }, u.handleEvent = s.handleEvent, u.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, u.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, u.onresize = function () {
        this.resize()
    }, s.debounceMethod(r, "onresize", 100), u.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, u.needsResizeLayout = function () {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, u.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, u.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, u.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var i = this.updateStagger();
            t.forEach(function (t, e) {
                t.stagger(e * i), t.reveal()
            })
        }
    }, u.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var i = this.updateStagger();
            t.forEach(function (t, e) {
                t.stagger(e * i), t.hide()
            })
        }
    }, u.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, u.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, u.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, u.getItems = function (t) {
        t = s.makeArray(t);
        var i = [];
        return t.forEach(function (t) {
            var e = this.getItem(t);
            e && i.push(e)
        }, this), i
    }, u.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), s.removeFrom(this.items, t)
        }, this)
    }, u.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete p[e], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace)
    }, r.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && p[e]
    }, r.create = function (t, e) {
        var i = a(r);
        return i.defaults = s.extend({}, r.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = a(o), s.htmlInit(i, t), d && d.bridget && d.bridget(t, i), i
    };
    var h = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function () {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (e, i) {
    "use strict";

    function o(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = o.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
        n[t] = function () {
            return i.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function (t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, o.modes = {}, o.create = function (t, e) {
        function i() {
            o.apply(this, arguments)
        }
        return (i.prototype = Object.create(n)).constructor = i, e && (i.options = e), o.modes[i.prototype.namespace = t] = i
    }, o
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, d) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    var i = e.prototype;
    return i._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                e = t && t.element;
            this.columnWidth = e && d(e).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            n = o / i,
            s = i - o % i;
        n = Math[s && s < 1 ? "round" : "floor"](n), this.cols = Math.max(n, 1)
    }, i.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            e = d(t);
        this.containerWidth = e && e.innerWidth
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                x: this.columnWidth * o.col,
                y: o.y
            }, s = o.y + t.size.outerHeight, r = i + o.col, a = o.col; a < r; a++) this.colYs[a] = s;
        return n
    }, i._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, i._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, i._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, i._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = 1 < t && i + t > this.cols ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, i._manageStamp = function (t) {
        var e = d(t),
            i = this._getElementOffset(t),
            o = this._getOption("originLeft") ? i.left : i.right,
            n = o + e.outerWidth,
            s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var r = Math.floor(n / this.columnWidth);
        r -= n % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
        for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = s; l <= r; l++) this.colYs[l] = Math.max(a, this.colYs[l])
    }, i._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function () {
        return {
            height: this.maxY
        }
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function () {
        return {
            height: this.y
        }
    }, e
}),
function (r, a) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (t, e, i, o, n, s) {
        return a(r, t, e, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = a(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode)
}(window, function (t, i, e, o, s, n, r) {
    var a = t.jQuery,
        d = String.prototype.trim ? function (t) {
            return t.trim()
        } : function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        c = i.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    c.Item = n, c.LayoutMode = r;
    var l = c.prototype;
    l._create = function () {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function () {
        this.itemGUID = 0, i.prototype.reloadItems.call(this)
    }, l._itemize = function () {
        for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
            t[e].id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var l = s(a);
                l && i.push(a), l && a.isHidden ? o.push(a) : l || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function (e) {
        return a && this.options.isJQueryFiltering ? function (t) {
            return a(t.element).is(e)
        } : "function" == typeof e ? function (t) {
            return e(t.element)
        } : function (t) {
            return o(t.element, e)
        }
    }, l.updateSortData = function (t) {
        var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = p(i)
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData()
        }
    };
    var p = function (t) {
        if ("string" != typeof t) return t;
        var e, i, o = d(t).split(" "),
            n = o[0],
            s = n.match(/^\[(.+)\]$/),
            r = s && s[1],
            a = (i = n, (e = r) ? function (t) {
                return t.getAttribute(e)
            } : function (t) {
                var e = t.querySelector(i);
                return e && e.textContent
            }),
            l = c.sortDataParsers[o[1]];
        return l ? function (t) {
            return t && l(a(t))
        } : function (t) {
            return t && a(t)
        }
    };
    c.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        },
        parseFloat: function (t) {
            return parseFloat(t)
        }
    }, l._sort = function () {
        if (this.options.sortBy) {
            var t = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = (r = this.sortHistory, a = this.options.sortAscending, function (t, e) {
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        n = t.sortData[o],
                        s = e.sortData[o];
                    if (s < n || n < s) return (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1)
                }
                return 0
            });
            this.filteredItems.sort(e)
        }
        var r, a
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function () {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var u = l.remove;
    return l.remove = function (t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var n = e[o];
            s.removeFrom(this.filteredItems, n)
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, c
}), $("nav li.list-inline-item").hover(function () {
    $(this).find(".dropdown-menu").stop(!0, !0).delay(0).fadeIn(0)
}, function () {
    $(this).find(".dropdown-menu").stop(!0, !0).delay(0).fadeOut(0)
});
var url = window.location;

function filtraEmpreendimentos() {
    var o = {};
    $(".filtro-obras").on("click", "a", function () {
        $('.filtro-bairros').find(".filtro-selecionado").removeClass("filtro-selecionado");
        $('.filtro-bairros').find('.todos').addClass('filtro-selecionado');
        var t = $(this),
            e = t.parents(".menu-filtro").attr("data-filter-group");
        o[e] = t.attr("data-filter");
        var i = function (t) {
            var e = "";
            for (var i in t) e += t[i];
            return e
        }(o);
        return $(".filtro-emp").isotope({
            filter: i
        }), url.hash = "filtro=" + i, i
    }), $(".filtro-bairros").on("click", "a", function () {
        $('.filtro-obras').find(".filtro-selecionado").removeClass("filtro-selecionado");
        $('.filtro-obras').find('.todos').addClass('filtro-selecionado');
        var t = $(this).attr("data-filter");
        $(".filtro-emp").isotope({
            filter: t
        }), url.hash = "filtro=" + t
    });
    var t = location.hash.match(/\.[^\]]+/g);
    null != t && $(".filtro-emp").isotope({
        filter: t[0]
    })
}
$(".menu-filtro").each(function (t, e) {
    var i = $(e);
    i.on("click", "a", function () {
        i.find(".filtro-selecionado").removeClass("filtro-selecionado"), $(this).addClass("filtro-selecionado")
    })
}), $(document).ready(function () {
    $(".slider-home").slick({
        fade: !0,
        autoplay: !0,
        autoplaySpeed: 3e3
    }), $(".glry-obras").magnificPopup({
        delegate: "a",
        type: "image",
        preloader: !0,
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 2]
        },
        removalDelay: 500
    }), $(".glry-img").magnificPopup({
        delegate: "a",
        type: "image",
        preloader: !0,
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 2]
        },
        removalDelay: 500
    }), $(".glry-plantas").magnificPopup({
        delegate: "a",
        type: "image",
        preloader: !0,
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 2]
        },
        removalDelay: 500
    }), filtraObras(), filtraEmpreendimentos()
});
