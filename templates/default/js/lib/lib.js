/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

jQuery.fx.interval = 26;

var bskyb = {};

bskyb.util = {
    checkFunc: function (a, b) {
        if (a) {
            return b("done")
        } else {
            window.checkF = setInterval(function (c) {
                if (c) {
                    clearInterval(window.checkF);
                    return b("done")
                }
            }, 300)
        }
    },
    ordinal: function (c) {
        var a = ["th", "st", "nd", "rd"];
        var b = c % 100;
        return c + (a[(b - 20) % 10] || a[b] || a[0])
    },
    hasFlash: function () {
        var b = false;
        var a = null;
        if (window.ActiveXObject) {
            var d = null;
            try {
                d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (c) {
                a = 0
            }
            if (d) {
                b = true;
                a = d.GetVariable("$version").substring(4);
                a = a.split(",");
                a = parseFloat(a[0] + "." + a[1])
            }
        } else {
            if (navigator.plugins["Shockwave Flash"]) {
                a = navigator.plugins["Shockwave Flash"].description;
                a = a.split(".")[0];
                a = parseInt(a.split("Flash ")[1])
            } else {
                a = 0
            }
        }
        return a
    },
    getquery: function (d) {
        var c = window.location.search.substring(1);
        c = c.replace("&amp;", "&");
        var a = c.split("&");
        for (var b = 0; b < a.length; b++) {
            var e = a[b].split("=");
            return (e[0] == d) ? e[1] : false
        }
    },
    getoptions: function (b) {
        var a = b.def || "false";
        if (b.opts && b.opts.length > 1) {
            var c = b.opts.split("&");
            $(c).each(function (d) {
                c[d].split("=")[0] == b.val && (a = c[d].split("=")[1])
            })
        }
        return b.parse ? parseInt(a) : a
    },
    getStyleProperty: function (g, d) {
        var f = ["Moz", "Webkit", "Khtml", "O", "Ms"];
        d = d || document.documentElement;
        var e = d.style,
            a;
        if (typeof e[g] == "string") {
            return g
        }
        g = g.charAt(0).toUpperCase() + g.slice(1);
        for (var c = 0, b = f.length; c < b; c++) {
            a = f[c] + g;
            if (typeof e[a] == "string") {
                return a
            }
        }
    },
    debug: function (a) {
        if (location.href.match("demodesign2")) {
            if (window.console) {
                console.log(a)
            } else {
                alert(a)
            }
        }
    }
};
/*Slide picture*/
typeof (bskyb) != "object" && (bskyb = {});
bskyb.carousel = function (a) {
    $(".enable-carousel").each(function () {
        var s = $(this).attr("options");
        var c = {};
        c.el = $(this);
        c.length = $(this).find(".carousel-list-item").length;
        c.heros = $(this).find(".carousel-hero-item").clone();
        c.listheight = ($(this).find(".carousel-list-item").height() + parseInt($(this).find(".carousel-list-item").css("marginBottom"))) * -1;
        c.speed = bskyb.util.getoptions({
            opts: s,
            val: "speed",

            parse: true,
            def: 500
        });
        c.auto = bskyb.util.getoptions({
            opts: s,
            val: "auto"
        });
        c.fixed = bskyb.util.getoptions({
            opts: s,
            val: "fixed"
        });
        c.nocycle = bskyb.util.getoptions({
            opts: s,
            val: "nocycle"
        });

        function p(u) {
            try {
                sky.tracking.featuredContentClickManual("carousel", u)
            } catch (t) {}
        }
        function m(t) {
            var e = c.el.find(".carousel-disabled");
            c.el.find(".carousel-disabled:visible")[0] ? e.hide() : e.show()
        }
        function k(t) {
            c.heros.removeClass("js-hdn");
            var e = c.heros.find(".gallery-placeholder").clone();
            c.heros.find(".enable-gallery").html("").append(e);
            c.el.find(".carousel-hero-item:gt(0)").remove();
            c.el.find(".carousel-hero-item").attr({
                rel: "0"
            });
            c.el.find(".carousel-list-item").each(function (w) {
                $(this).attr({
                    rel: w
                });
                c.heros.eq(w).attr({
                    rel: w
                })
            });
            c.el.find(".carousel-list-rail").prepend(c.el.find(".carousel-list-rail li:last").clone());
            c.el.find(".carousel-list-rail").append(c.el.find(".carousel-list-rail li:eq(1)").clone());
            c.el.find(".carousel-list-rail").append(c.el.find(".carousel-list-rail li:eq(2)").clone());
            c.el.find(".carousel-list-rail").css({
                marginTop: c.listheight * 2
            });
            if (c.fixed == "false") {
                c.el.append('<div class="carousel-controls"><div class="carousel-butt butt-bw"></div><ul></ul><div class="carousel-butt butt-fw"></div></div><span class="disabled"></span>');
                for (i = 0; i < c.length; i++) {
                    var u = "";
                    i == 0 && (u = "disabled");
                    c.el.find(".carousel-controls ul").append('<li class="' + u + ' currentitem" rel="' + i + '"></li>')
                }
                c.el.append('<div class="carousel-disabled"></div>')
            }
            c.el.delegate(".hero-link-overlay", "click", function (w) {
                location.href = $(this).attr("href")
            });
            c.el.delegate(".hero-link-overlay", "mouseover", function (w) {
                c.el.find(".hero-hdl,.hero-byl").addClass("on")
            });
            c.el.delegate(".hero-link-overlay", "mouseout", function (w) {
                c.el.find(".hero-hdl,.hero-byl").removeClass("on")
            });
            c.el.delegate("#tab-latest div.carousel-hero-item", "click", function (x) {
                var w = $(this).attr("rel");
                p("carousel-item-" + w)
            });
            $(".v5-carousel .carousel-hero-item").show();
            c.heros.css({
                display: "block"
            });
            c.el.find(".carousel-list-rail li").css({
                visibility: "visible"
            });
            c.el.find(".carousel-list-rail").css({
                backgroundImage: "none"
            });
            c.el.addClass("loaded").css({
                backgroundImage: "none"
            })
        }
        function d(e) {
            if (c.heros.length < 2) {
                return false
            }
            if (typeof (e.auto) == "undefined") {
                clearTimeout(window.carouselInterval);
                c.auto = "false";
                c.nocycle = "false";
                c.el.find(".carousel-list-item").removeClass("disabled")
            } else {} if (c.fixed != "false") {
                c.nocycle = "true"
            }
            if (e.item == c.length) {
                e.item = 0
            }
            if (e.item == -1) {
                e.item = c.length - 1
            }
            if (e.item != "x") {
                m();
                f({
                    item: e.item,
                    nocycle: c.nocycle
                }, function (t) {
                    if (c.fixed == "false") {
                        if (c.nocycle == "false") {
                            c.el.find(".carousel-controls ul li").removeClass("disabled");
                            c.el.find(".carousel-controls ul li:eq(" + e.item + ")").addClass("disabled")
                        }
                        c.el.find(".carousel-controls ul li").removeClass("currentitem");
                        c.el.find(".carousel-controls ul li:eq(" + e.item + ")").addClass("currentitem");
                        g({
                            item: e.item,
                            direction: e.direction,
                            skip: e.skip
                        })
                    }
                })
            }
            if (e.item == "x") {
                c.el.find(".carousel-controls ul li").click(function () {
                    p("dot nav");
                    if ($(this).hasClass("disabled") == false) {
                        d({
                            item: $(this).attr("rel")
                        })
                    }
                })
            }
            if (e.scroll) {}
        }
        function b(e) {
            c.el.find(".carousel-butt").click(function (u, t) {
                !t && p("back and forward arrows");
                var w = c.el.find(".carousel-controls ul li").index(c.el.find(".carousel-controls ul li.currentitem"));
                if ($(this).hasClass("butt-fw")) {
                    d({
                        item: w + 1,
                        direction: "forwards",
                        auto: t
                    })
                } else {
                    d({
                        item: w - 1,
                        direction: "backwards",
                        auto: t
                    })
                }
            })
        }
        function g(u) {
            if (u.direction == "forwards") {
                if (u.skip == 1) {
                    c.el.find(".carousel-list-rail").css({
                        marginTop: 0
                    })
                }
                if (parseInt(c.el.find(".carousel-list-rail").css("marginTop")) == c.listheight * (c.length + 1)) {
                    c.el.find(".carousel-list-rail").css({
                        marginTop: c.listheight
                    })
                }
                c.el.find(".carousel-list-rail").animate({
                    marginTop: c.listheight * (parseInt(u.item + 2))
                }, c.speed, function () {
                    if (u.item == c.length - 1) {
                        c.el.find(".carousel-list-rail").css({
                            marginTop: c.listheight
                        })
                    }
                })
            }
            if (u.direction == "backwards") {
                if (u.item != c.length - 1) {
                    var e = parseInt(c.el.find(".carousel-list-rail").css("marginTop"));
                    c.el.find(".carousel-list-rail").animate({
                        marginTop: e - c.listheight
                    }, c.speed)
                } else {
                    c.el.find(".carousel-list-rail").animate({
                        marginTop: c.listheight
                    }, c.speed, function () {
                        c.el.find(".carousel-list-rail").css({
                            marginTop: c.listheight * (c.length + 1)
                        })
                    })
                }
            }
            if (!u.direction) {
                c.el.find(".carousel-list-rail").animate({
                    marginTop: c.listheight * (parseInt(u.item) + 2)
                }, c.speed)
            }
        }
        function o(e) {
            c.el.find(".carousel-list-item").click(function () {
                p("carousel thumbnails");
                if ($(this).hasClass("disabled")) {
                    return false
                }
                if (c.fixed != "false") {
                    location.href = $(this).find(".carousel-list-link").attr("href")
                } else {
                    if ($(this).position().top == 0) {
                        c.el.find(".butt-fw").trigger("click", "x")
                    } else {
                        var u = parseInt($(this).attr("rel")),
                            t;
                        u == 0 ? t = 1 : t = 0;
                        d({
                            direction: "forwards",
                            item: u,
                            skip: t
                        })
                    }
                    return false
                }
            })
        }
        function f(t, C) {
            function u(J) {
                var I = -634,
                    H = c.speed;
                C && C();
                c.el.find(".carousel-hero-rail").animate({
                    marginLeft: I
                }, H, function () {
                    c.el.find(".carousel-hero-rail").css({
                        marginLeft: 0
                    });
                    c.el.find(".carousel-hero-rail").find(".carousel-hero-item:first").remove();
                    m();
                    c.el.find(".overlay-loader").removeClass("js-hdn");
                    switch (D) {
                    case "standard":
                        l();
                        break;
                    case "gallery":
                        $(".hero-gallery .v5-gallery:visible").Gallery();
                        break;
                    case "video":
                        l();
                        break
                    }
                })
            }
            var y = c.heros.eq(t.item).clone();
            var D = y.attr("type");
            if (c.auto != "false" && t.nocycle != "false" && !t.noscroll) {
                D = "nocycle"
            }
            switch (D) {
            case "standard":
                var G = y.find(".hero-img").attr("load");
                if (y.find(".hero-img").attr("load").length > 0) {
                    var A = new Image();
                    $(A).bind("load", function (H) {
                        y.find(".hero-img").attr("src", G);
                        c.el.find(".carousel-hero-rail").append(y);
                        u(y)
                    }).error(function () {
                        C && C();
                        m()
                    }).attr("src", G)
                } else {
                    u(y)
                }
                break;
            case "video":
                var B = y.attr("videoid");
                var E = y.attr("videoname");
                var e = y.attr("id");
                var w = y.attr("pageurl");
                var x = y.attr("videoposter");
                var F = y.attr("videowidth") || "662";
                var z = y.attr("videoheight") || "372";
                c.el.find(".carousel-hero-rail").append(y);
                h({
                    videoid: B,
                    hero: y,
                    videoname: E,
                    id: e,
                    videowidth: F,
                    videoheight: z
                }, function (H) {
                    $.getJSON("http://api.brightcove.com/services/library?command=find_video_by_id&media_delivery=http&video_fields=name,videoStillURL,renditions&video_id=" + B + "&token=FKf2-UXI9EvFQmSk77uLPw5oVfIcmNUcDTXD9Cl_oRc.&callback=?", function (J) {
                        $("#" + y.attr("id")).prepend("<h4 class='hero-byl v5-rnd-5'>VIDEO: " + J.name + "</h4><img src='/Images/skysports/v5/ajax-loader-t6.gif' class='overlay-loader js-hdn' /><span class='overlay'></span><img class='v5-vid-thumb'/>");
                        if (t.firstplay == true) {
                            c.el.find(".overlay-loader").removeClass("js-hdn")
                        }
                        var I = new Image();
                        if (x || x.length > 0) {
                            J.videoStillURL = x
                        }
                        $(I).bind("load", function (K) {
                            $("#" + y.attr("id")).find(".v5-vid-thumb").attr("src", J.videoStillURL);
                            $("#" + y.attr("id")).find("span.overlay").mouseover(function () {
                                $("#" + y.attr("id")).find(".hero-byl").addClass("on")
                            });
                            $("#" + y.attr("id")).find("span.overlay").mouseout(function () {
                                $("#" + y.attr("id")).find(".hero-byl").removeClass("on")
                            });
                            $("#" + y.attr("id")).find("span.overlay,.hero-byl").click(function () {
                                $("#" + y.attr("id")).find(".hero-byl,span.overlay").hide();
                                $("#" + y.attr("id")).find(".v5-vid-thumb").hide();
                                if (navigator.userAgent.match(/iP/)) {
                                    y.append("<video controls id='carousel-html5vid' src='" + J.renditions[1].url + "' width='634px' height='480px'></video>");
                                    y.find("#carousel-html5vid")[0].play()
                                } else {
                                    VCVP[E].loadVideo(B)
                                }
                                clearTimeout(window.carouselInterval);
                                c.auto = "false";
                                c.nocycle = "false"
                            });
                            if (t.noscroll != true) {
                                u(y)
                            } else {
                                l(t)
                            }
                        }).attr("src", J.videoStillURL);
                        if (navigator.userAgent.match(/iP/)) {
                            y.find("span.overlay").css({
                                visibility: "visible"
                            });
                            y.find(".overlay-loader").remove()
                        }
                    })
                });
                break;
            case "gallery":
                c.el.find(".carousel-hero-rail").append(y);
                u(y);
                break;
            case "nocycle":
                c.el.find(".carousel-list-item[rel=0]").addClass("disabled");
                C && C();
                m();
                l();
                break
            }
        }
        function h(x, u) {
            !x.videowidth && (x.videowidth = 662);
            !x.videoheight && (x.videoheight = 372);
            var A = "false";
            if (x.auto) {
                A = x.auto
            }
            if (navigator.userAgent.match(/iP/)) {
                u()
            } else {
                var y = {};
                y.width = x.videowidth;
                y.height = x.videoheight;
                y.bgcolor = "#050538";
                y.playerID = "739703908001";
                y.publisherID = "165012893";
                y.wmode = "transparent";
                y.isVid = "true";
                y.isUI = "true";
                y.dynamicStreaming = "true";
                y.videoSmoothing = "true";
                y.autoStart = x.auto;
                y.videoId = x.videoid;
                var t = brightcove.createElement("object");
                t.id = x.videoname;
                var z;
                for (var e in y) {
                    z = brightcove.createElement("param");
                    z.name = e;
                    z.value = y[e];
                    t.appendChild(z)
                }
                var w = document.getElementById(x.id);
                brightcove.createExperience(t, w, true);
                u()

            }
        }
        function l(e) {
            clearInterval(window.carouselInterval);
            if (c.auto != "false") {
                c.auto = parseInt(c.auto);
                window.carouselInterval = setTimeout(function () {
                    c.el.find(".butt-fw").trigger("click", "x")
                }, c.auto)
            }
        }
        function q() {
            k();
            b();
            d({
                item: "x",
                auto: "x"
            });
            o()
        }
        try {
            if (location.hash != "#tab-watch") {
                q()
            }
        } catch (n) {}
        if (c.heros.eq(0).attr("type") == "video") {
            c.el.find(".carousel-hero-rail .carousel-hero-item").remove();
            f({
                item: 0,
                type: "video",
                noscroll: true,
                firstplay: true
            });
            if (c.nocycle != "false") {
                c.auto = c.auto
            } else {
                clearTimeout(window.carouselInterval);
                c.auto = "false";
                c.nocycle = "false"
            }
        }
        if (c.heros.eq(0).attr("type") == "gallery") {
            $(".hero-gallery .v5-gallery:visible").Gallery()
        }
        if (c.heros.eq(0).attr("type") == "standard") {
            l()
        }
        tabactions = function () {
            var t = c.el.parents(".enable-tabs");
            c.el.parents(".enable-tabs").find(".tab-anchors li").click(function (y, e) {
                $(".vp-popout-disabled").hide();
                c.el.find("video").each(function () {
                    this.pause()
                });
                if ($(this).hasClass("tab-watch")) {
                    function B(E) {
                        var C = $(".v-player-container", t);
                        var x = $("li#" + E);
                        var D = x.find("a").attr("href");
                        if (C.find("iframe").length == 1) {
                            C.html("");
                            __spHost.startPageUrl = D;
                            __spHost.createSyndicatedPlayer()
                        } else {
                            C.html("");
                            __spHost = new SPHost();
                            __spHost.hostId = "SKYSPORTS";
                            __spHost.brandName = "Sky Sports";
                            __spHost.placeHolder = C.get(0);
                            __spHost.startPageUrl = D;
                            __spHost.createSyndicatedPlayer()
                        }
                        $(".v5-channel-nav li").removeClass("on");
                        x.addClass("on")
                    }
                    function z() {
                        var x = $(".v-player-container", t).html("<img src='/Images/skysports/v5/ajax-loader-t6.gif' class='overlay-loader' />");
                        if (bskyb.browser == "ios") {
                            $.getJSON("http://api.brightcove.com/services/library?command=find_video_by_id&media_delivery=http&video_id=1806217383&token=FKf2-UXI9EvFQmSk77uLPw5oVfIcmNUcDTXD9Cl_oRc.&callback=?", function (C) {
                                $("#vp-player-holder").html("<video height='352px' width='662px' src='" + C.videoFullLength.url + "' poster='" + C.videoStillURL + "' controls=controls></video>").find("overlay-loader").remove()
                            })
                        } else {
                            h({
                                videoid: 1806217383,
                                auto: true,
                                videoname: "rollingnews",
                                id: "vp-player-holder"
                            }, function () {
                                $(".col2", t).find(".v5-channel-nav li").removeClass("on");
                                $(".v5-channel-nav .free", t).parent().addClass("on")
                            })
                        }
                    }
                    function w() {
                        var x = {
                            st: 0
                        };
                        if (bskyb.cookie.get("interactive")) {
                            x = $.evalJSON(decodeURIComponent(bskyb.cookie.get("interactive")))
                        }
                        if (x.st && x.st == 2 && bskyb.cookie.get("skyplayerSSO")) {
                            $("#vp-popout-button").show();
                            $("#tab-watch .vp-login-box").remove();
                            $("#tab-watch .disable-nav").remove();
                            $("#tab-watch #vp-channel-nav").animate({
                                opacity: 1
                            }, function () {
                                $(this).removeClass("disabled")
                            });
                            if (bskyb.cookie.get("tab-watch-channel")) {
                                if (bskyb.cookie.get("tab-watch-channel") != "ch-0") {
                                    B(bskyb.cookie.get("tab-watch-channel"))
                                } else {
                                    z()
                                }
                            } else {
                                z()
                            }
                        } else {
                            $("#vp-popout-button").hide();
                            $("#tab-watch .vp-login-box").show();
                            if (bskyb.cookie.get("tab-watch-channel") == "ch-0") {
                                z()
                            } else {
                                bskyb.cookie.set("tab-watch-channel", "ch-0");
                                z()
                            }
                        }
                    }
                    clearInterval(window.bskybgallery0);
                    clearTimeout(window.carouselInterval);
                    c.auto = "false";
                    var A = c.el.find(".hero-video").attr("videoname");
                    VCVP[A] && VCVP[A].pause();
                    if ($("#tab-watch", t).children().length == 0) {
                        $.ajax({
                            url: $(this).attr("url"),
                            success: function (x) {
                                $("#tab-watch", t).append(x);
                                w();
                                $(".v5-channel-nav .subscribe", t).bind("click", function () {
                                    if (!$(this).parent().hasClass("disabled")) {
                                        var C = $(this).parents("li").attr("id");
                                        bskyb.cookie.set("tab-watch-channel", C);
                                        B(C)
                                    }
                                    return false
                                });
                                $(".v5-channel-nav .free", t).bind("click", function () {
                                    var C = $(this).parents("li").attr("id");
                                    bskyb.cookie.set("tab-watch-channel", C);
                                    z();
                                    return false
                                })
                            }
                        })
                    } else {
                        w()
                    }
                }
                if ($(this).hasClass("tab-latest")) {
                    if (c.el.hasClass("loaded") == false) {
                        q()
                    }
                    if ($(".v-player-container iframe", t).length == 1) {
                        $(".v-player-container iframe", t).attr("src", "")
                    }
                    if (VCVP.rollingnews) {
                        VCVP.rollingnews && VCVP.rollingnews.pause()
                    }
                }
                return false
            });
            try {
                if ($(".tab-section#" + (location.hash.replace("jumpto-", "")))[0]) {
                    $(".tab-anchors li a[href='" + (location.hash.replace("jumpto-", "")) + "']").trigger("click")
                }
            } catch (u) {}
        };
       
    })
};
