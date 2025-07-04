webpackJsonp([1], [function (t, e, n) {
    "use strict";
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        e.i18n = e.lan = e.getParam = e.eachLines = e.transform = e.maxPoint = e.lastRecord = e.StorageKey = e.clearPoints = e.blankMatrix = e.blankLine = e.fillLine = e.delays = e.speeds = e.blockType = e.origin = e.blockShape = void 0;
    var i = n(14)
        , r = a(i)
        , o = n(142)
        , s = a(o)
        , u = e.blockShape = {
            I: [[1, 1, 1, 1]],
            L: [[0, 0, 1], [1, 1, 1]],
            J: [[1, 0, 0], [1, 1, 1]],
            Z: [[1, 1, 0], [0, 1, 1]],
            S: [[0, 1, 1], [1, 1, 0]],
            O: [[1, 1], [1, 1]],
            T: [[0, 1, 0], [1, 1, 1]]
        }
        , c = (e.origin = {
            I: [[-1, 1], [1, -1]],
            L: [[0, 0]],
            J: [[0, 0]],
            Z: [[0, 0]],
            S: [[0, 0]],
            O: [[0, 0]],
            T: [[0, 0], [1, 0], [-1, 1], [0, -1]]
        },
            e.blockType = (0,
                r.default)(u),
            e.speeds = [800, 650, 500, 370, 250, 160],
            e.delays = [50, 60, 70, 80, 90, 100],
            e.fillLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            e.blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        , l = (e.blankMatrix = function () {
            for (var t = [], e = 0; e < 20; e++)
                t.push(c);
            return t
        }(),
            e.clearPoints = [100, 300, 700, 1500],
            e.StorageKey = "VUE_TETRIS")
        , d = (e.lastRecord = function () {
            var t = window.localStorage.getItem(l);
            if (!t)
                return !1;
            try {
                window.btoa && (t = atob(t)),
                    t = decodeURIComponent(t),
                    t = JSON.parse(t)
            } catch (t) {
                return (window.console || window.console.error) && window.console.error("??????:", t),
                    !1
            }
            return t
        }(),
            e.maxPoint = 999999,
            e.transform = function () {
                var t = ["transform", "webkitTransform", "msTransform", "mozTransform", "oTransform"]
                    , e = document.body;
                return t.filter(function (t) {
                    return void 0 !== e.style[t]
                })[0]
            }(),
            e.eachLines = 20,
            e.getParam = function (t) {
                var e = new RegExp("\\?(?:.+&)?" + t + "=(.*?)(?:&.*)?$")
                    , n = window.location.toString().match(e);
                return n ? decodeURI(n[1]) : ""
            }
        )
        , f = e.lan = function () {
            var t = d("lan").toLowerCase();
            return !t && navigator.languages && (t = navigator.languages.find(function (t) {
                return -1 !== s.default.lan.indexOf(t)
            })),
                t = -1 === s.default.lan.indexOf(t) ? s.default.default : t
        }();
    document.title = s.default.data.title[f];
    e.i18n = s.default.data
}
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.isFocus = e.visibilityChangeEvent = e.subscribeRecord = e.isOver = e.isClear = e.want = e.isMobile = e.getNextType = void 0;
        var a = n(9)
            , i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a)
            , r = n(0)
            , o = function () {
                var t = ["hidden", "webkitHidden", "mozHidden", "msHidden"];
                return t = t.filter(function (t) {
                    return t in document
                }),
                    t.length > 0 && t[0]
            }()
            , s = {
                getNextType: function () {
                    var t = r.blockType.length;
                    console.log("len for next type is", t);
                    var e = Math.floor(Math.random() * t);
                    return console.log("random next is ", e),
                        r.blockType[e]
                },
                want: function (t, e) {
                    var n = t.xy
                        , a = t.shape
                        , i = a[0].length;
                    return a.every(function (t, a) {
                        return t.every(function (t, r) {
                            return !(n[1] < 0) && (!(n[1] + i > 10) && (n[0] + a < 0 || !(n[0] + a >= 20) && (!t || !e[n[0] + a][n[1] + r])))
                        })
                    })
                },
                isClear: function (t) {
                    var e = [];
                    return t.forEach(function (t, n) {
                        t.every(function (t) {
                            return !!t
                        }) && e.push(n)
                    }),
                        0 !== e.length && e
                },
                isOver: function (t) {
                    return t[0].some(function (t) {
                        return !!t
                    })
                },
                subscribeRecord: function (t) {
                    t.subscribe(function () {
                        var e = t.state;
                        e.lock || (e = (0,
                            i.default)(e),
                            e = encodeURIComponent(e),
                            window.btoa && (e = btoa(e)),
                            window.localStorage.setItem(r.StorageKey, e))
                    })
                },
                isMobile: function () {
                    var t = navigator.userAgent
                        , e = /Android (\d+\.\d+)/.test(t)
                        , n = t.indexOf("iPhone") > -1
                        , a = t.indexOf("iPod") > -1
                        , i = t.indexOf("iPad") > -1
                        , r = t.indexOf("NokiaN") > -1;
                    return e || n || a || i || r
                },
                visibilityChangeEvent: function () {
                    return !!o && o.replace(/hidden/i, "visibilitychange")
                }(),
                isFocus: function () {
                    return !o || !document[o]
                }
            }
            , u = s.getNextType
            , c = s.isMobile
            , l = s.want
            , d = s.isClear
            , f = s.isOver
            , v = s.subscribeRecord
            , p = s.visibilityChangeEvent
            , m = s.isFocus;
        e.getNextType = u,
            e.isMobile = c,
            e.want = l,
            e.isClear = d,
            e.isOver = f,
            e.subscribeRecord = v,
            e.visibilityChangeEvent = p,
            e.isFocus = m
    }
    , , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(9)
            , r = a(i)
            , o = n(8)
            , s = a(o)
            , u = n(1)
            , c = n(0)
            , l = n(6)
            , d = function (t) {
                for (var e = function (t, e) {
                    for (var n = parseInt((e - t + 1) * Math.random() + t, 10), a = [], i = 0; i < n; i++)
                        a.push(1);
                    for (var r = 0, o = 10 - n; r < o; r++) {
                        var s = parseInt((a.length + 1) * Math.random(), 10);
                        a.splice(s, 0, 0)
                    }
                    return a
                }, n = [], a = 0; a < t; a++)
                    a <= 2 ? n.push(e(5, 8)) : a <= 6 ? n.push(e(4, 9)) : n.push(e(3, 9));
                for (var i = 0, r = 20 - t; i < r; i++)
                    n.unshift(c.blankLine);
                return n
            }
            , f = {
                fallInterval: null,
                start: function () {
                    l.music.start && l.music.start();
                    var t = s.default.state;
                    f.dispatchPoints(0),
                        s.default.commit("speedRun", t.speedStart);
                    var e = t.startLines
                        , n = d(e);
                    s.default.commit("matrix", n),
                        s.default.commit("moveBlock", {
                            type: t.next
                        }),
                        s.default.commit("nextBlock", ""),
                        f.auto()
                },
                auto: function (t) {
                    var e = t < 0 ? 0 : t
                        , n = s.default.state
                        , a = n.cur
                        , i = function t() {
                            n = s.default.state,
                                a = n.cur;
                            var e = a.fall();
                            if ((0,
                                u.want)(e, n.matrix))
                                s.default.commit("moveBlock", e),
                                    f.fallInterval = setTimeout(t, c.speeds[n.speedRun - 1]);
                            else {
                                var i = JSON.parse((0,
                                    r.default)(n.matrix))
                                    , o = a && a.shape
                                    , l = a && a.xy;
                                o.forEach(function (t, e) {
                                    return t.forEach(function (t, n) {
                                        if (t && l[0] + e >= 0) {
                                            var a = i[l[0] + e];
                                            a[l[1] + n] = 1,
                                                i[l[0] + e] = a
                                        }
                                    })
                                }),
                                    f.nextAround(i)
                            }
                        };
                    clearTimeout(f.fallInterval),
                        f.fallInterval = setTimeout(i, void 0 === e ? c.speeds[n.speedRun - 1] : e)
                },
                nextAround: function (t, e) {
                    clearTimeout(f.fallInterval),
                        s.default.commit("lock", !0),
                        s.default.commit("matrix", t),
                        "function" == typeof e && e();
                    var n = s.default.state.points + 10 + 2 * (s.default.state.speedRun - 1);
                    return f.dispatchPoints(n),
                        (0,
                            u.isClear)(t) ? void (l.music.clear && l.music.clear()) : (0,
                                u.isOver)(t) ? (l.music.gameover && l.music.gameover(),
                                    void f.overStart()) : void setTimeout(function () {
                                        s.default.commit("lock", !1),
                                            s.default.commit("moveBlock", {
                                                type: s.default.state.next
                                            }),
                                            s.default.commit("nextBlock", ""),
                                            f.auto()
                                    }, 100)
                },
                focus: function (t) {
                    if (s.default.commit("focus", t),
                        !t)
                        return void clearTimeout(f.fallInterval);
                    var e = s.default.state;
                    !e.cur || e.reset || e.pause || f.auto()
                },
                pause: function (t) {
                    if (s.default.commit("pause", t),
                        t)
                        return void clearTimeout(f.fallInterval);
                    f.auto()
                },
                clearLines: function (t, e) {
                    var n = s.default.state
                        , a = JSON.parse((0,
                            r.default)(t));
                    e.forEach(function (t) {
                        a.splice(t, 1),
                            a.unshift(c.blankLine)
                    }),
                        s.default.commit("matrix", a),
                        s.default.commit("moveBlock", {
                            type: n.next
                        }),
                        s.default.commit("nextBlock", ""),
                        f.auto(),
                        s.default.commit("lock", !1);
                    var i = n.clearLines + e.length;
                    s.default.commit("clearLines", i);
                    var o = s.default.state.points + c.clearPoints[e.length - 1];
                    f.dispatchPoints(o);
                    var u = Math.floor(i / c.eachLines)
                        , l = n.speedStart + u;
                    l = l > 6 ? 6 : l,
                        s.default.commit("speedRun", l)
                },
                overStart: function () {
                    clearTimeout(f.fallInterval),
                        s.default.commit("lock", !0),
                        s.default.commit("reset", !0),
                        s.default.commit("pause", !1)
                },
                overEnd: function () {
                    s.default.commit("matrix", c.blankMatrix),
                        s.default.commit("moveBlock", {
                            reset: !0
                        }),
                        s.default.commit("reset", !1),
                        s.default.commit("lock", !1),
                        s.default.commit("clearLines", 0)
                },
                dispatchPoints: function (t) {
                    s.default.commit("points", t),
                        t > 0 && t > s.default.state.max && s.default.commit("max", t)
                }
            };
        e.default = f
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(14)
            , i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a)
            , r = {}
            , o = function (t) {
                if ((0,
                    i.default)(r).forEach(function (t) {
                        clearTimeout(r[t]),
                            r[t] = null
                    }),
                    t.callback) {
                    var e = function () {
                        clearTimeout(r[t.key])
                    };
                    if (t.callback(e),
                        !0 !== t.once) {
                        var n = t.begin || 100
                            , a = t.interval || 50;
                        !function i() {
                            r[t.key] = setTimeout(function () {
                                n = null,
                                    i(),
                                    t.callback(e)
                            }, n || a)
                        }()
                    }
                }
            }
            , s = function (t) {
                clearTimeout(r[t.key]),
                    r[t.key] = null,
                    t.callback && t.callback()
            }
            , u = function () {
                (0,
                    i.default)(r).forEach(function (t) {
                        clearTimeout(r[t]),
                            r[t] = null
                    })
            };
        e.default = {
            down: o,
            up: s,
            clearAll: u
        }
    }
    , , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.music = e.hasWebAudioAPI = void 0;
        var a = n(8)
            , i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a)
            , r = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext
            , o = e.hasWebAudioAPI = {
                data: !!r && -1 !== location.protocol.indexOf("http")
            }
            , s = e.music = {};
        !function () {
            if (o.data) {
                var t = "./static/music.mp3"
                    , e = new r
                    , n = new XMLHttpRequest;
                n.open("GET", t, !0),
                    n.responseType = "arraybuffer",
                    n.onload = function () {
                        e.decodeAudioData(n.response, function (t) {
                            var n = function () {
                                var n = e.createBufferSource();
                                return n.buffer = t,
                                    n.connect(e.destination),
                                    n
                            };
                            s.killStart = function () {
                                s.start = function () { }
                            }
                                ,
                                s.start = function () {
                                    s.killStart(),
                                        i.default.state.music && n().start(0, 3.7202, 3.6224)
                                }
                                ,
                                s.clear = function () {
                                    i.default.state.music && n().start(0, 0, .7675)
                                }
                                ,
                                s.fall = function () {
                                    i.default.state.music && n().start(0, 1.2558, .3546)
                                }
                                ,
                                s.gameover = function () {
                                    i.default.state.music && n().start(0, 8.1276, 1.1437)
                                }
                                ,
                                s.rotate = function () {
                                    i.default.state.music && n().start(0, 2.2471, .0807)
                                }
                                ,
                                s.move = function () {
                                    i.default.state.music && n().start(0, 2.9088, .1437)
                                }
                        }, function (e) {
                            window.console && window.console.error && (window.console.error("??: " + t + " ????", e),
                                o.data = !1)
                        })
                    }
                    ,
                    n.send()
            }
        }()
    }
    , , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(28)
            , r = a(i)
            , o = n(42)
            , s = a(o)
            , u = n(1)
            , c = n(66)
            , l = a(c)
            , d = n(1)
            , f = n(0)
            , v = n(30)
            , p = a(v)
            , m = n(6);
        r.default.use(s.default);
        var _ = f.lastRecord && !isNaN(parseInt(f.lastRecord.clearLines, 10)) ? parseInt(f.lastRecord.clearLines, 10) : 0;
        _ < 0 && (_ = 0);
        var h = function () {
            if (!f.lastRecord || !f.lastRecord.cur)
                return null;
            var t = f.lastRecord.cur
                , e = {
                    type: t.type,
                    rotateIndex: t.rotateIndex,
                    shape: t.shape,
                    xy: t.xy
                };
            return new p.default(e)
        }()
            , b = !(!f.lastRecord || void 0 === f.lastRecord.drop) && !!f.lastRecord.drop
            , y = !(!f.lastRecord || void 0 === f.lastRecord.lock) && !!f.lastRecord.lock
            , x = f.lastRecord && Array.isArray(f.lastRecord.matrix) ? f.lastRecord.matrix : f.blankMatrix
            , k = f.lastRecord && !isNaN(parseInt(f.lastRecord.max, 10)) ? parseInt(f.lastRecord.max, 10) : 0;
        k < 0 ? k = 0 : k > f.maxPoint && (k = f.maxPoint);
        var C = !f.lastRecord || void 0 === f.lastRecord.music || !!f.lastRecord.music;
        m.hasWebAudioAPI.data || (C = !1);
        var g = f.lastRecord && -1 !== f.blockType.indexOf(f.lastRecord.next) ? f.lastRecord.next : (0,
            u.getNextType)()
            , w = !(!f.lastRecord || void 0 === f.lastRecord.pause) && !!f.lastRecord.pause
            , R = f.lastRecord && !isNaN(parseInt(f.lastRecord.points, 10)) ? parseInt(f.lastRecord.points, 10) : 0;
        R < 0 ? R = 0 : R > f.maxPoint && (R = f.maxPoint);
        var S = f.lastRecord && !isNaN(parseInt(f.lastRecord.speedRun, 10)) ? parseInt(f.lastRecord.speedRun, 10) : 1;
        (S < 1 || S > 6) && (S = 1);
        var M = f.lastRecord && !isNaN(parseInt(f.lastRecord.speedStart, 10)) ? parseInt(f.lastRecord.speedStart, 10) : 1;
        (M < 1 || M > 6) && (M = 1);
        var I = f.lastRecord && !isNaN(parseInt(f.lastRecord.startLines, 10)) ? parseInt(f.lastRecord.startLines, 10) : 0;
        (I < 0 || I > 10) && (I = 0);
        var L = !(!f.lastRecord || !f.lastRecord.reset) && !!f.lastRecord.reset
            , T = {
                music: C,
                pause: w,
                matrix: x,
                next: g,
                cur: h,
                speedStart: M,
                speedRun: S,
                startLines: I,
                clearLines: _,
                points: R,
                max: k,
                reset: L,
                drop: b,
                keyboard: {
                    drop: !1,
                    down: !1,
                    left: !1,
                    right: !1,
                    rotate: !1,
                    reset: !1,
                    music: !1,
                    pause: !1
                },
                mode: "practice",
                loggedIn: !1,
                lock: y,
                focus: (0,
                    d.isFocus)()
            };
        e.default = new s.default.Store({
            state: T,
            mutations: l.default
        })
    }
    , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(58)
            , r = a(i)
            , o = n(61)
            , s = a(o)
            , u = n(57)
            , c = a(u)
            , l = n(62)
            , d = a(l)
            , f = n(64)
            , v = a(f)
            , p = n(63)
            , m = a(p)
            , _ = n(60)
            , h = a(_)
            , b = n(59)
            , y = a(b);
        e.default = {
            left: r.default,
            down: c.default,
            rotate: d.default,
            right: s.default,
            space: v.default,
            r: h.default,
            p: y.default,
            s: m.default
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(20)
            , r = a(i)
            , o = n(70)
            , s = a(o)
            , u = n(71)
            , c = a(u)
            , l = n(0)
            , d = function () {
                function t(e) {
                    if ((0,
                        s.default)(this, t),
                        this.type = e.type,
                        e.rotateIndex ? this.rotateIndex = e.rotateIndex : this.rotateIndex = 0,
                        e.timeStamp ? this.timeStamp = e.timeStamp : this.timeStamp = Date.now(),
                        e.shape ? this.shape = e.shape : this.shape = l.blockShape[e.type],
                        e.xy)
                        this.xy = e.xy;
                    else
                        switch (e.type) {
                            case "I":
                                this.xy = [0, 3];
                                break;
                            case "L":
                            case "J":
                            case "Z":
                            case "S":
                            case "O":
                            case "T":
                                this.xy = [-1, 4]
                        }
                }
                return (0,
                    c.default)(t, [{
                        key: "rotate",
                        value: function () {
                            var t = this.shape
                                , e = [];
                            t.forEach(function (t) {
                                return t.forEach(function (n, a) {
                                    var i = t.length - a - 1;
                                    void 0 === e[i] && (e[i] = []),
                                        e[i].push(n);
                                    var o = [].concat((0,
                                        r.default)(e[i]));
                                    e[i] = o
                                })
                            });
                            var n = [this.xy[0] + l.origin[this.type][this.rotateIndex][0], this.xy[1] + l.origin[this.type][this.rotateIndex][1]]
                                , a = this.rotateIndex + 1 >= l.origin[this.type].length ? 0 : this.rotateIndex + 1;
                            return {
                                shape: e,
                                type: this.type,
                                xy: n,
                                rotateIndex: a,
                                timeStamp: this.timeStamp
                            }
                        }
                    }, {
                        key: "fall",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return {
                                shape: this.shape,
                                type: this.type,
                                xy: [this.xy[0] + t, this.xy[1]],
                                rotateIndex: this.rotateIndex,
                                timeStamp: Date.now()
                            }
                        }
                    }, {
                        key: "right",
                        value: function () {
                            return {
                                shape: this.shape,
                                type: this.type,
                                xy: [this.xy[0], this.xy[1] + 1],
                                rotateIndex: this.rotateIndex,
                                timeStamp: this.timeStamp
                            }
                        }
                    }, {
                        key: "left",
                        value: function () {
                            return {
                                shape: this.shape,
                                type: this.type,
                                xy: [this.xy[0], this.xy[1] - 1],
                                rotateIndex: this.rotateIndex,
                                timeStamp: this.timeStamp
                            }
                        }
                    }]),
                    t
            }();
        e.default = d
    }
    , , , , , , , , , , , function (t, e, n) {
        function a(t) {
            n(116)
        }
        var i = n(2)(n(54), n(137), a, null, null);
        t.exports = i.exports
    }
    , , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var i = n(14)
            , r = a(i)
            , o = n(8)
            , s = a(o)
            , u = n(29)
            , c = a(u)
            , l = {
                37: "left",
                38: "rotate",
                39: "right",
                40: "down",
                32: "space",
                83: "s",
                82: "r",
                80: "p"
            }
            , d = void 0
            , f = (0,
                r.default)(l).map(function (t) {
                    return parseInt(t, 10)
                })
            , v = function (t) {
                if (!0 !== t.metaKey && -1 !== f.indexOf(t.keyCode)) {
                    var e = l[t.keyCode];
                    e !== d && (d = e,
                        c.default[e].down(s.default))
                }
            }
            , p = function (t) {
                if (!0 !== t.metaKey && -1 !== f.indexOf(t.keyCode)) {
                    var e = l[t.keyCode];
                    e === d && (d = ""),
                        c.default[e].up(s.default)
                }
            };
        document.addEventListener("keydown", v, !0),
            document.addEventListener("keyup", p, !0)
    }
    , function (t, e, n) {
        function a(t) {
            n(118)
        }
        var i = n(2)(n(45), n(139), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(72)
            , r = a(i)
            , o = n(119)
            , s = a(o)
            , u = n(120)
            , c = a(u)
            , l = n(126)
            , d = a(l)
            , f = n(125)
            , v = a(f)
            , p = n(127)
            , m = a(p)
            , _ = n(41)
            , h = a(_)
            , b = n(128)
            , y = a(b)
            , x = n(122)
            , k = a(x)
            , C = n(123)
            , g = a(C)
            , w = n(124)
            , R = a(w)
            , S = n(42)
            , M = n(0)
            , I = n(1)
            , L = n(3)
            , T = a(L);
        e.default = {
            mounted: function () {
                this.render(),
                    window.addEventListener("resize", this.resize.bind(this), !0)
            },
            data: function () {
                return {
                    size: {},
                    w: document.documentElement.clientWidth,
                    h: document.documentElement.clientHeight,
                    filling: ""
                }
            },
            components: {
                Decorate: s.default,
                Guide: c.default,
                Next: d.default,
                Music: v.default,
                Pause: m.default,
                Number: h.default,
                Point: y.default,
                Logo: g.default,
                Keyboard: k.default,
                Matrix: R.default
            },
            computed: (0,
                r.default)({
                    pContent: function () {
                        return this.cur ? M.i18n.cleans[M.lan] : M.i18n.startLine[M.lan]
                    },
                    level: function () {
                        return M.i18n.level[M.lan]
                    },
                    nextText: function () {
                        return M.i18n.next[M.lan]
                    }
                }, (0,
                    S.mapState)(["matrix", "keyboard", "music", "pause", "next", "cur", "speedStart", "speedRun", "startLines", "clearLines", "points", "max", "reset", "drop"])),
            methods: {
                render: function () {
                    var t = this
                        , e = 0
                        , n = function () {
                            var n = t.w
                                , a = t.h
                                , i = a / n
                                , r = void 0
                                , o = {};
                            return i < 1.5 ? r = a / 960 : (r = n / 640,
                                e = (a - 960 * r) / r / 3,
                                o = {
                                    "padding-top": Math.floor(e) + 42 + "px",
                                    "padding-bottom": Math.floor(e) + "px",
                                    "margin-top": Math.floor(-480 - 1.5 * e) + "px"
                                }),
                                o[M.transform] = "scale(" + r + ")",
                                o
                        }();
                    this.size = n,
                        this.start(),
                        this.filling = e
                },
                resize: function () {
                    this.w = document.documentElement.clientWidth,
                        this.h = document.documentElement.clientHeight,
                        this.render()
                },
                start: function () {
                    if (I.visibilityChangeEvent && document.addEventListener(I.visibilityChangeEvent, function () {
                        T.default.focus((0,
                            I.isFocus)())
                    }, !1),
                        M.lastRecord) {
                        if (M.lastRecord.cur && !M.lastRecord.pause) {
                            var t = this.$store.state.speedRun
                                , e = M.speeds[t - 1] / 2;
                            e = t < M.speeds[M.speeds.length - 1] ? M.speeds[M.speeds.length - 1] : t,
                                T.default.auto(e)
                        }
                        M.lastRecord.cur || T.default.overStart()
                    } else
                        T.default.overStart()
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(0);
        e.default = {
            name: "Decorate",
            computed: {
                title: function () {
                    return a.i18n.title[a.lan]
                },
                github: function () {
                    return a.i18n.github[a.lan]
                },
                QRTitle: function () {
                    return a.i18n.QRNotice[a.lan]
                },
                QRCode: function () {
                    return a.i18n.QRCode[a.lan]
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(0)
            , i = n(1);
        e.default = {
            name: "Guide",
            data: function () {
                return {
                    isMobile: (0,
                        i.isMobile)()
                }
            },
            computed: {
                linkTitle: function () {
                    return a.i18n.linkTitle[a.lan]
                },
                github: function () {
                    return a.i18n.github[a.lan]
                },
                QRCode: function () {
                    return a.i18n.QRCode[a.lan]
                },
                QRTitle: function () {
                    return a.i18n.QRNotice[a.lan]
                },
                QRSrc: function () {
                    return window.location.protocol + "//raw.githubusercontent.com/Binaryify/vue-tetris/master/static/qr.jpeg"
                }
            },
            mounted: function () {
                window.addEventListener("resize", this.resize.bind(this), !0)
            },
            methods: {
                resize: function () {
                    this.isMobile = (0,
                        i.isMobile)()
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        n(0);
        e.default = {
            props: ["active", "color", "size", "top", "left", "label", "position", "arrow"]
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(14)
            , r = a(i)
            , o = n(121)
            , s = a(o)
            , u = n(0)
            , c = n(8)
            , l = a(c)
            , d = n(29)
            , f = a(d);
        e.default = {
            props: ["filling"],
            data: function () {
                return {
                    fillingNum: 0
                }
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function (t) {
                        this.fillingNum = t.filling + 20
                    }
                }
            },
            computed: {
                keyboard: function () {
                    return this.$store.state.keyboard
                },
                rotation: function () {
                    return u.i18n.rotation[u.lan]
                },
                labelLeft: function () {
                    return u.i18n.left[u.lan]
                },
                labelRight: function () {
                    return u.i18n.right[u.lan]
                },
                labelDown: function () {
                    return u.i18n.down[u.lan]
                },
                labelDropSpace: function () {
                    return u.i18n.drop[u.lan] + " (SPACE)"
                },
                labelResetR: function () {
                    return u.i18n.reset[u.lan] + "(R)"
                },
                labelSoundS: function () {
                    return u.i18n.sound[u.lan] + "(S)"
                },
                labelPauseP: function () {
                    return u.i18n.pause[u.lan] + "(P)"
                }
            },
            mounted: function () {
                var t = this
                    , e = {}
                    , n = {};
                document.addEventListener("touchstart", function (t) {
                    t.preventDefault && t.preventDefault()
                }, !0),
                    document.addEventListener("touchend", function (t) {
                        t.preventDefault && t.preventDefault()
                    }, !0),
                    document.addEventListener("gesturestart", function (t) {
                        t.preventDefault()
                    }),
                    document.addEventListener("mousedown", function (t) {
                        t.preventDefault && t.preventDefault()
                    }, !0),
                    (0,
                        r.default)(f.default).forEach(function (a) {
                            t.$refs["dom_" + a].$el.addEventListener("mousedown", function () {
                                !0 !== e[a] && (f.default[a].down(l.default),
                                    n[a] = !0)
                            }, !0),
                                t.$refs["dom_" + a].$el.addEventListener("mouseup", function () {
                                    if (!0 === e[a])
                                        return void (e[a] = !1);
                                    f.default[a].up(l.default),
                                        n[a] = !1
                                }, !0),
                                t.$refs["dom_" + a].$el.addEventListener("mouseout", function () {
                                    !0 === n[a] && f.default[a].up(l.default)
                                }, !0),
                                t.$refs["dom_" + a].$el.addEventListener("touchstart", function () {
                                    e[a] = !0,
                                        f.default[a].down(l.default)
                                }, !0),
                                t.$refs["dom_" + a].$el.addEventListener("touchend", function () {
                                    f.default[a].up(l.default)
                                }, !0)
                        })
            },
            components: {
                Vbutton: s.default
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(0)
            , i = {
                timeout: null
            };
        e.default = {
            props: ["cur", "reset"],
            data: function () {
                return {
                    style: "r1",
                    display: "none"
                }
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function (t, e) {
                        this.animate(t),
                            (-1 !== [e.cur, t.cur].indexOf(!1) && e.cur !== t.cur || e.reset !== t.reset) && this.animate(t)
                    }
                }
            },
            computed: {
                titleCenter: function () {
                    return a.i18n.titleCenter[a.lan]
                }
            },
            beforeMount: function () {
                this.animate(this.$props)
            },
            methods: {
                animate: function (t) {
                    var e = this
                        , n = t.cur
                        , a = t.reset;
                    if (clearTimeout(i.timeout),
                        this.style = "r1",
                        this.display = "none",
                        n || a)
                        return void (this.display = "none");
                    var r = "r"
                        , o = 0
                        , s = function (t, e) {
                            t && (i.timeout = setTimeout(t, e))
                        }
                        , u = function (t) {
                            s(function () {
                                e.display = "block",
                                    t && t()
                            }, 150)
                        }
                        , c = function (t) {
                            s(function () {
                                e.display = "none",
                                    t && t()
                            }, 150)
                        }
                        , l = function (t, n, a) {
                            s(function () {
                                e.style = r + 2,
                                    s(function () {
                                        e.style = r + 1,
                                            t && t()
                                    }, a)
                            }, n)
                        }
                        , d = function t(n) {
                            s(function () {
                                e.style = r + 4,
                                    s(function () {
                                        if (e.style = r + 3,
                                            o++,
                                            10 !== o && 20 !== o && 30 !== o || (r = "r" === r ? "l" : "r"),
                                            o < 40)
                                            return void t(n);
                                        e.style = r + 1,
                                            n && s(n, 4e3)
                                    }, 100)
                            }, 100)
                        }
                        , f = function t() {
                            o = 0,
                                l(function () {
                                    l(function () {
                                        l(function () {
                                            e.style = r + 2,
                                                d(t)
                                        }, 150, 150)
                                    }, 150, 150)
                                }, 1e3, 1500)
                        };
                    u(function () {
                        c(function () {
                            u(function () {
                                c(function () {
                                    u(function () {
                                        f()
                                    })
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(20)
            , r = a(i)
            , o = n(9)
            , s = a(o)
            , u = n(1)
            , c = n(0)
            , l = n(3)
            , d = a(l)
            , f = setTimeout;
        e.default = {
            props: ["cur", "reset", "propMatrix"],
            watch: {
                $props: {
                    handler: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        arguments[1];
                        this.propsChange(t)
                    },
                    deep: !0
                }
            },
            render: function () {
                var t = arguments[0]
                    , e = void 0;
                return e = this.isOver ? this.overState : this.getResult(),
                    t("div", {
                        class: "matrix"
                    }, [e.map(function (e, n) {
                        return t("p", null, [e.map(function (e, n) {
                            return t("b", {
                                class: (1 === e ? "c" : "") + (2 === e ? "d" : "")
                            }, [])
                        })])
                    })])
            },
            data: function () {
                return {
                    clearLines: !1,
                    animateColor: 2,
                    isOver: !1,
                    overState: null
                }
            },
            methods: {
                propsChange: function (t) {
                    var e = this
                        , n = (0,
                            u.isClear)(t.propMatrix)
                        , a = t.reset;
                    setTimeout(function () {
                        e.clearLines = n,
                            e.isOver = a
                    }, 0),
                        n && !this.clearLines && this.clearAnimate(n),
                        n || !a || this.isOver || this.over(t)
                },
                getResult: function (t) {
                    t || (t = this.$props);
                    var e = t.cur
                        , n = e && e.shape
                        , a = e && e.xy
                        , i = JSON.parse((0,
                            s.default)(t.propMatrix))
                        , r = this.clearLines;
                    if (r) {
                        var o = this.animateColor;
                        r.forEach(function (t) {
                            i[t] = [o, o, o, o, o, o, o, o, o, o]
                        })
                    } else
                        n && n.forEach(function (t, e) {
                            return t.forEach(function (t, n) {
                                if (t && a[0] + e >= 0) {
                                    var o = i[a[0] + e]
                                        , s = void 0;
                                    s = 1 !== o[a[1] + n] || r ? 1 : 2,
                                        o[a[1] + n] = s,
                                        i[a[0] + e] = o
                                }
                            })
                        });
                    return i
                },
                clearAnimate: function () {
                    var t = this
                        , e = function (e) {
                            f(function () {
                                t.animateColor = 0,
                                    f(function () {
                                        t.animateColor = 2,
                                            "function" == typeof e && e()
                                    }, 100)
                            }, 100)
                        };
                    e(function () {
                        e(function () {
                            e(function () {
                                f(function () {
                                    d.default.clearLines(t.propMatrix, t.clearLines)
                                }, 100)
                            })
                        })
                    })
                },
                over: function (t) {
                    var e = this
                        , n = this.getResult(t);
                    this.overState = [].concat((0,
                        r.default)(n));
                    for (var a = function (t) {
                        if (t <= 19)
                            n[19 - t] = c.fillLine;
                        else {
                            if (!(t >= 20 && t <= 39))
                                return void d.default.overEnd();
                            n[t - 20] = c.blankLine
                        }
                        e.overState = [].concat((0,
                            r.default)(n))
                    }, i = 0; i <= 40; i++)
                        f(a.bind(null, i), 40 * (i + 1))
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                props: ["data"]
            }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(20)
            , i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a)
            , r = n(0)
            , o = {
                I: [1, 0],
                L: [0, 0],
                J: [0, 0],
                Z: [0, 0],
                S: [0, 0],
                O: [0, 1],
                T: [0, 0]
            }
            , s = [[0, 0, 0, 0], [0, 0, 0, 0]];
        e.default = {
            props: ["data"],
            mounted: function () {
                this.build(this.data)
            },
            data: function () {
                return {
                    block: s
                }
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function (t) {
                        this.build(t.data)
                    }
                }
            },
            methods: {
                build: function (t) {
                    var e = r.blockShape[t]
                        , n = s.map(function (t) {
                            return [].concat((0,
                                i.default)(t))
                        });
                    e.forEach(function (e, a) {
                        e.forEach(function (e, i) {
                            e && (n[a + o[t][0]][i + o[t][1]] = 1)
                        })
                    }),
                        this.block = n
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function (t) {
            return t < 10 ? ("0" + t).split("") : ("" + t).split("")
        }
            , i = {
                timeInterval: null,
                time_count: null
            };
        e.default = {
            watch: {
                $props: {
                    deep: !0,
                    handler: function (t) {
                        this.render()
                    }
                }
            },
            props: {
                propTime: {
                    type: Boolean
                },
                number: {
                    type: Number
                },
                length: {
                    type: Number,
                    default: 6
                }
            },
            data: function () {
                return {
                    time_count: "",
                    time: new Date,
                    data: []
                }
            },
            destroyed: function () {
                this.propTime && clearTimeout(i.timeInterval)
            },
            methods: {
                render: function () {
                    if (this.propTime) {
                        var t = this.time
                            , e = a(t.getHours())
                            , n = a(t.getMinutes())
                            , i = t.getSeconds() % 2
                            , r = e.concat(i ? "d" : "d_c", n);
                        return void (this.data = r)
                    }
                    for (var o = ("" + this.number).split(""), s = 0, u = this.length - o.length; s < u; s++)
                        o.unshift("n");
                    this.data = o
                }
            },
            beforeMount: function () {
                var t = this;
                if (this.length || (this.length = 6),
                    this.propTime) {
                    !function e() {
                        var n = +i.timeInterval;
                        i.timeInterval = setTimeout(function () {
                            t.time = new Date,
                                t.time_count = n,
                                t.render(),
                                e()
                        }, 1e3)
                    }()
                }
            },
            mounted: function () {
                this.render()
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = {
            timeout: null
        };
        e.default = {
            props: ["data"],
            mounted: function () {
                this.setShake(this.data)
            },
            data: function () {
                return {
                    showPause: !1
                }
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function (t) {
                        this.setShake(t.data)
                    }
                }
            },
            methods: {
                setShake: function (t) {
                    var e = this;
                    t && !a.timeout && (a.timeout = setInterval(function () {
                        e.showPause = !e.showPause
                    }, 250)),
                        !t && a.timeout && (clearInterval(a.timeout),
                            this.showPause = !1,
                            a.timeout = null)
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(0)
            , i = n(41)
            , r = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i)
            , o = a.i18n.point[a.lan]
            , s = a.i18n.highestScore[a.lan]
            , u = a.i18n.lastRound[a.lan]
            , c = {
                timeout: null
            };
        e.default = {
            props: ["cur", "point", "max"],
            mounted: function () {
                this.onChange(this.$props)
            },
            components: {
                Number: r.default
            },
            data: function () {
                return {
                    label: "",
                    number: 0
                }
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function (t) {
                        this.onChange(t)
                    }
                }
            },
            methods: {
                onChange: function (t) {
                    var e = this
                        , n = t.cur
                        , a = t.point
                        , i = t.max;
                    if (clearInterval(c.timeout),
                        n)
                        this.label = a >= i ? s : o,
                            this.number = a;
                    else {
                        0 !== a ? function t() {
                            e.label = u,
                                e.number = a,
                                c.timeout = setTimeout(function () {
                                    e.label = s,
                                        e.number = i,
                                        c.timeout = setTimeout(t, 3e3)
                                }, 3e3)
                        }() : (this.label = s,
                            this.number = i)
                    }
                }
            }
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(9)
            , r = a(i)
            , o = n(1)
            , s = n(4)
            , u = a(s)
            , c = n(3)
            , l = a(c)
            , d = n(6)
            , f = function (t) {
                t.commit("key_down", !0),
                    null !== t.state.cur ? u.default.down({
                        key: "down",
                        begin: 40,
                        interval: 40,
                        callback: function (e) {
                            var n = t.state;
                            if (!n.lock) {
                                d.music.move && d.music.move();
                                var a = n.cur;
                                if (null !== a) {
                                    if (n.pause)
                                        return void l.default.pause(!1);
                                    var i = a.fall();
                                    if ((0,
                                        o.want)(i, n.matrix))
                                        t.commit("moveBlock", i),
                                            l.default.auto();
                                    else {
                                        var s = JSON.parse((0,
                                            r.default)(n.matrix))
                                            , u = a.shape
                                            , c = a.xy;
                                        u.forEach(function (t, e) {
                                            return t.forEach(function (t, n) {
                                                if (t && c[0] + e >= 0) {
                                                    var a = s[c[0] + e];
                                                    a[c[1] + n] = 1,
                                                        s[c[0] + e] = a
                                                }
                                            })
                                        }),
                                            l.default.nextAround(s, e)
                                    }
                                }
                            }
                        }
                    }) : u.default.down({
                        key: "down",
                        begin: 200,
                        interval: 100,
                        callback: function () {
                            if (!t.state.lock) {
                                var e = t.state;
                                if (!e.cur) {
                                    d.music.move && d.music.move();
                                    var n = e.startLines;
                                    n = n - 1 < 0 ? 10 : n - 1,
                                        t.commit("startLines", n)
                                }
                            }
                        }
                    })
            }
            , v = function (t) {
                t.commit("key_down", !1),
                    u.default.up({
                        key: "down"
                    })
            };
        e.default = {
            down: f,
            up: v
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1)
            , r = n(4)
            , o = a(r)
            , s = n(3)
            , u = a(s)
            , c = n(0)
            , l = n(6)
            , d = function (t) {
                t.commit("key_left", !0),
                    o.default.down({
                        key: "left",
                        begin: 200,
                        interval: 100,
                        callback: function () {
                            var e = t.state;
                            if (!e.lock) {
                                l.music.move && l.music.move();
                                var n = e.cur;
                                if (null !== n) {
                                    if (e.pause)
                                        return void u.default.pause(!1);
                                    var a = n.left()
                                        , r = c.delays[e.speedRun - 1]
                                        , o = void 0;
                                    (0,
                                        i.want)(a, e.matrix) ? (a.timeStamp += parseInt(r, 10),
                                            t.commit("moveBlock", a),
                                            o = a.timeStamp) : (n.timeStamp += parseInt(parseInt(r, 10) / 1.5, 10),
                                                t.commit("moveBlock", n),
                                                o = n.timeStamp);
                                    var s = c.speeds[e.speedRun - 1] - (Date.now() - o);
                                    u.default.auto(s)
                                } else {
                                    var d = e.speedStart;
                                    d = d - 1 < 1 ? 6 : d - 1,
                                        t.commit("speedStart", d)
                                }
                            }
                        }
                    })
            }
            , f = function (t) {
                t.commit("key_left", !1),
                    o.default.up({
                        key: "left"
                    })
            };
        e.default = {
            down: d,
            up: f
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4)
            , r = a(i)
            , o = n(3)
            , s = a(o)
            , u = function (t) {
                t.commit("key_pause", !0),
                    r.default.down({
                        key: "p",
                        once: !0,
                        callback: function () {
                            var e = t.state;
                            if (!e.lock) {
                                var n = e.cur
                                    , a = e.pause;
                                null !== n ? s.default.pause(!a) : s.default.start()
                            }
                        }
                    })
            }
            , c = function (t) {
                t.commit("key_pause", !1),
                    r.default.up({
                        key: "p"
                    })
            };
        e.default = {
            down: u,
            up: c
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4)
            , r = a(i)
            , o = n(3)
            , s = a(o)
            , u = function (t) {
                t.commit("key_reset", !0),
                    t.state.lock || (null !== t.state.cur ? r.default.down({
                        key: "r",
                        once: !0,
                        callback: function () {
                            s.default.overStart()
                        }
                    }) : r.default.down({
                        key: "r",
                        once: !0,
                        callback: function () {
                            t.state.lock || s.default.start()
                        }
                    }))
            }
            , c = function (t) {
                t.commit("key_reset", !1),
                    r.default.up({
                        key: "r"
                    })
            };
        e.default = {
            down: u,
            up: c
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1)
            , r = n(4)
            , o = a(r)
            , s = n(3)
            , u = a(s)
            , c = n(0)
            , l = n(6)
            , d = function (t) {
                t.commit("key_right", !0),
                    o.default.down({
                        key: "right",
                        begin: 200,
                        interval: 100,
                        callback: function () {
                            var e = t.state;
                            if (!e.lock) {
                                l.music.move && l.music.move();
                                var n = e.cur;
                                if (null !== n) {
                                    if (e.pause)
                                        return void u.default.pause(!1);
                                    var a = n.right()
                                        , r = c.delays[e.speedRun - 1]
                                        , o = void 0;
                                    (0,
                                        i.want)(a, e.matrix) ? (a.timeStamp += parseInt(r, 10),
                                            t.commit("moveBlock", a),
                                            o = a.timeStamp) : (n.timeStamp += parseInt(parseInt(r, 10) / 1.5, 10),
                                                t.commit("moveBlock", n),
                                                o = n.timeStamp);
                                    var s = c.speeds[e.speedRun - 1] - (Date.now() - o);
                                    u.default.auto(s)
                                } else {
                                    var d = e.speedStart;
                                    d = d + 1 > 6 ? 1 : d + 1,
                                        t.commit("speedStart", d)
                                }
                            }
                        }
                    })
            }
            , f = function (t) {
                t.commit("key_right", !1),
                    o.default.up({
                        key: "right"
                    })
            };
        e.default = {
            down: d,
            up: f
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1)
            , r = n(4)
            , o = a(r)
            , s = n(3)
            , u = a(s)
            , c = n(6)
            , l = function (t) {
                t.commit("key_rotate", !0),
                    null !== t.state.cur ? o.default.down({
                        key: "rotate",
                        once: !0,
                        callback: function () {
                            var e = t.state;
                            if (!e.lock) {
                                e.pause && u.default.pause(!1);
                                var n = e.cur;
                                if (null !== n) {
                                    c.music.rotate && c.music.rotate();
                                    var a = n.rotate();
                                    (0,
                                        i.want)(a, e.matrix) && t.commit("moveBlock", a)
                                }
                            }
                        }
                    }) : o.default.down({
                        key: "rotate",
                        begin: 200,
                        interval: 100,
                        callback: function () {
                            if (!t.state.lock) {
                                c.music.move && c.music.move();
                                var e = t.state;
                                if (!e.cur) {
                                    var n = e.startLines;
                                    n = n + 1 > 10 ? 0 : n + 1,
                                        t.commit("startLines", n)
                                }
                            }
                        }
                    })
            }
            , d = function (t) {
                t.commit("key_rotate", !1),
                    o.default.up({
                        key: "rotate"
                    })
            };
        e.default = {
            down: l,
            up: d
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(4)
            , i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a)
            , r = function (t) {
                t.commit("key_music", !0),
                    t.state.lock || i.default.down({
                        key: "s",
                        once: !0,
                        callback: function () {
                            t.state.lock || t.commit("music", !t.state.music)
                        }
                    })
            }
            , o = function (t) {
                t.commit("key_music", !1),
                    i.default.up({
                        key: "s"
                    })
            };
        e.default = {
            down: r,
            up: o
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(9)
            , r = a(i)
            , o = n(1)
            , s = n(4)
            , u = a(s)
            , c = n(3)
            , l = a(c)
            , d = n(6)
            , f = function (t) {
                t.commit("key_drop", !0),
                    u.default.down({
                        key: "space",
                        once: !0,
                        callback: function () {
                            var e = t.state;
                            if (!e.lock) {
                                var n = e.cur;
                                if (null !== n) {
                                    if (e.pause)
                                        return void l.default.pause(!1);
                                    d.music.fall && d.music.fall();
                                    for (var a = 0, i = n.fall(a); (0,
                                        o.want)(i, e.matrix);)
                                        i = n.fall(a),
                                            a++;
                                    var s = JSON.parse((0,
                                        r.default)(e.matrix));
                                    i = n.fall(a - 2),
                                        t.commit("moveBlock", i);
                                    var u = i.shape
                                        , c = i.xy;
                                    u.forEach(function (t, e) {
                                        return t.forEach(function (t, n) {
                                            if (t && c[0] + e >= 0) {
                                                var a = s[c[0] + e];
                                                a[c[1] + n] = 1,
                                                    s[c[0] + e] = a
                                            }
                                        })
                                    }),
                                        t.commit("drop", !0),
                                        setTimeout(function () {
                                            t.commit("drop", !1)
                                        }, 100),
                                        l.default.nextAround(s)
                                } else
                                    l.default.start()
                            }
                        }
                    })
            }
            , v = function (t) {
                t.commit("key_drop", !1),
                    u.default.up({
                        key: "space"
                    })
            };
        e.default = {
            down: f,
            up: v
        }
    }
    , function (t, e, n) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var i = n(28)
            , r = a(i)
            , o = n(44)
            , s = a(o)
            , u = n(8)
            , c = a(u);
        n(0),
            n(43),
            (0,
                n(1).subscribeRecord)(c.default),
            r.default.config.productionTip = !1,
            new r.default({
                el: "#root",
                render: function (t) {
                    return t(s.default)
                },
                store: c.default
            })
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(1)
            , i = n(30)
            , r = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i)
            , o = {
                nextBlock: function (t, e) {
                    e || (e = (0,
                        a.getNextType)()),
                        t.next = e
                },
                moveBlock: function (t, e) {
                    t.cur = !0 === e.reset ? null : new r.default(e)
                },
                speedStart: function (t, e) {
                    t.speedStart = e
                },
                speedRun: function (t, e) {
                    t.speedRun = e
                },
                startLines: function (t, e) {
                    t.startLines = e
                },
                matrix: function (t, e) {
                    t.matrix = e
                },
                lock: function (t, e) {
                    t.lock = e
                },
                clearLines: function (t, e) {
                    t.clearLines = e
                },
                points: function (t, e) {
                    t.points = e
                },
                max: function (t, e) {
                    t.max = e
                },
                reset: function (t, e) {
                    t.reset = e
                },
                drop: function (t, e) {
                    t.drop = e
                },
                pause: function (t, e) {
                    t.pause = e
                },
                music: function (t, e) {
                    t.music = e
                },
                focus: function (t, e) {
                    t.focus = e
                },
                key_drop: function (t, e) {
                    t.keyboard.drop = e
                },
                key_down: function (t, e) {
                    t.keyboard.down = e
                },
                key_left: function (t, e) {
                    t.keyboard.left = e
                },
                key_right: function (t, e) {
                    t.keyboard.right = e
                },
                key_rotate: function (t, e) {
                    t.keyboard.rotate = e
                },
                key_reset: function (t, e) {
                    t.keyboard.reset = e
                },
                key_music: function (t, e) {
                    t.keyboard.music = e
                },
                key_pause: function (t, e) {
                    t.keyboard.pause = e
                },
                currentMode: function (t, e) {
                    t.mode = e
                },
                userLoggedIn: function (t, e) {
                    t.loggedIn = e
                }
            };
        e.default = o
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e) { }
    , function (t, e, n) {
        function a(t) {
            n(112)
        }
        var i = n(2)(n(46), n(133), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(114)
        }
        var i = n(2)(n(47), n(134), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(110)
        }
        var i = n(2)(n(48), n(131), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(111)
        }
        var i = n(2)(n(49), n(132), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(117)
        }
        var i = n(2)(n(50), n(138), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(113)
        }
        var i = n(2)(n(51), null, a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(109)
        }
        var i = n(2)(n(52), n(130), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(115)
        }
        var i = n(2)(n(53), n(135), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        function a(t) {
            n(108)
        }
        var i = n(2)(n(55), n(129), a, null, null);
        t.exports = i.exports
    }
    , function (t, e, n) {
        var a = n(2)(n(56), n(136), null, null, null);
        t.exports = a.exports
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "bg pause",
                    class: {
                        c: t.showPause
                    }
                })
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "bg music",
                    class: t.data ? "" : "c"
                })
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "button",
                    class: t.color + " " + t.size,
                    style: "top:" + t.top + "px;left:" + t.left + "px"
                }, [n("i", {
                    class: {
                        active: t.active
                    }
                }), t._v(" "), n("em", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "s1" === t.size,
                        expression: "size==='s1'"
                    }],
                    style: "transform:" + t.arrow + " scale(1,2)"
                }), t._v(" "), n("span", {
                    class: t.position ? "position" : ""
                }, [t._v("\n    " + t._s(t.label) + "\n  ")])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "keyboard",
                    style: "margin-top:" + t.fillingNum + "px"
                }, [n("vbutton", {
                    ref: "dom_rotate",
                    attrs: {
                        color: "blue",
                        size: "s1",
                        top: 0,
                        left: 374,
                        label: t.rotation,
                        arrow: "translate(0, 63px)",
                        position: !0,
                        active: t.keyboard.rotate
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_down",
                    attrs: {
                        color: "blue",
                        size: "s1",
                        top: 180,
                        left: 374,
                        label: t.labelDown,
                        arrow: "translate(0,-71px) rotate(180deg)",
                        active: t.keyboard.down
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_left",
                    attrs: {
                        color: "blue",
                        size: "s1",
                        top: 90,
                        left: 284,
                        label: t.labelLeft,
                        arrow: "translate(60px, -12px) rotate(270deg)",
                        active: t.keyboard.left
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_right",
                    attrs: {
                        color: "blue",
                        size: "s1",
                        top: 90,
                        left: 464,
                        label: t.labelRight,
                        arrow: "translate(-60px, -12px) rotate(90deg)",
                        active: t.keyboard.right
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_space",
                    attrs: {
                        color: "blue",
                        size: "s0",
                        top: 100,
                        left: 52,
                        label: t.labelDropSpace,
                        active: t.keyboard.drop
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_r",
                    attrs: {
                        color: "red",
                        size: "s2",
                        top: 0,
                        left: 196,
                        label: t.labelResetR,
                        active: t.keyboard.reset
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_s",
                    attrs: {
                        color: "green",
                        size: "s2",
                        top: 0,
                        left: 106,
                        label: t.labelSoundS,
                        active: t.keyboard.music
                    }
                }), t._v(" "), n("vbutton", {
                    ref: "dom_p",
                    attrs: {
                        color: "green",
                        size: "s2",
                        top: 0,
                        left: 16,
                        label: t.labelPauseP,
                        active: t.keyboard.pause
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "decorate"
                }, [t._m(0), t._v(" "), n("h1", [t._v(t._s(t.title))]), t._v(" "), t._m(1), t._v(" "), t._m(2)])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "topBorder"
                }, [n("span", {
                    staticClass: "l mr",
                    staticStyle: {
                        width: "40px"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "l mr"
                }), t._v(" "), n("span", {
                    staticClass: "l mr"
                }), t._v(" "), n("span", {
                    staticClass: "l mr"
                }), t._v(" "), n("span", {
                    staticClass: "l mr"
                }), t._v(" "), n("span", {
                    staticClass: "r ml",
                    staticStyle: {
                        width: "40px"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "r ml"
                }), t._v(" "), n("span", {
                    staticClass: "r ml"
                }), t._v(" "), n("span", {
                    staticClass: "r ml"
                }), t._v(" "), n("span", {
                    staticClass: "r ml"
                })])
            }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "view"
                    }, [n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    })])
                }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "view l"
                    }, [n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("em"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("p"), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    }), t._v(" "), n("div", {
                        staticClass: "clear"
                    }), t._v(" "), n("b", {
                        staticClass: "c"
                    })])
                }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement;
                return (t._self._c || e)("div")
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "next"
                }, t._l(t.block, function (e, a) {
                    return n("div", t._l(e, function (t, e) {
                        return n("b", {
                            class: t ? "c" : ""
                        })
                    }))
                }))
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", [n("p", [t._v(t._s(t.label))]), t._v(" "), n("Number", {
                    attrs: {
                        number: t.number
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "number"
                }, t._l(t.data, function (t, e) {
                    return n("span", {
                        class: "bg s_" + t
                    })
                }))
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "logo",
                    style: "display:" + t.display
                }, [n("div", {
                    staticClass: "bg dragon",
                    class: t.style
                }), t._v(" "), n("p", {
                    domProps: {
                        innerHTML: t._s(t.titleCenter)
                    }
                })])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "app",
                    style: t.size
                }, [n("div", {
                    staticClass: "rect",
                    class: t.drop ? "drop" : ""
                }, [n("Decorate"), t._v(" "), n("div", {
                    staticClass: "screen"
                }, [n("div", {
                    staticClass: "panel"
                }, [n("Matrix", {
                    attrs: {
                        propMatrix: t.matrix,
                        cur: t.cur,
                        reset: t.reset
                    }
                }), t._v(" "), n("Logo", {
                    attrs: {
                        cur: !!t.cur,
                        reset: t.reset
                    }
                }), t._v(" "), n("div", {
                    staticClass: "state"
                }, [n("Point", {
                    attrs: {
                        cur: !!t.cur,
                        max: t.max,
                        point: t.points
                    }
                }), t._v(" "), n("p", [t._v(t._s(t.pContent))]), t._v(" "), n("Number", {
                    attrs: {
                        number: t.cur ? t.clearLines : t.startLines
                    }
                }), t._v(" "), n("p", [t._v(t._s(t.level))]), t._v(" "), n("Number", {
                    attrs: {
                        number: t.cur ? t.speedRun : t.speedStart,
                        length: 1
                    }
                }), t._v(" "), n("p", [t._v(t._s(t.nextText))]), t._v(" "), n("Next", {
                    attrs: {
                        data: t.next
                    }
                }), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [n("Music", {
                    attrs: {
                        data: t.music
                    }
                }), t._v(" "), n("Pause", {
                    attrs: {
                        data: t.pause
                    }
                }), t._v(" "), n("Number", {
                    attrs: {
                        propTime: !0
                    }
                })], 1)], 1)], 1)])], 1), t._v(" "), n("Keyboard", {
                    attrs: {
                        filling: t.filling
                    }
                }), t._v(" "), n("Guide")], 1)
            },
            staticRenderFns: []
        }
    }
    , , , function (t, e) {
        t.exports = {
            lan: ["cn", "en", "fr", "fa"],
            default: "cn",
            data: {
                title: {
                    cn: "?????",
                    en: "Kafirchain Tetris",
                    fr: "Kafirchain Tetris",
                    fa: "???? ????"
                },
                github: {
                    cn: "GitHub",
                    en: "GitHub",
                    fr: "GitHub",
                    fa: "???????"
                },
                linkTitle: {
                    cn: "?????",
                    en: "View data source",
                    fr: "Afficher la source des données",
                    fa: "?????? ???? ?????"
                },
                QRCode: {
                    cn: "???",
                    en: "QR code",
                    fr: "QR code",
                    fa: "????? ??"
                },
                QRNotice: {
                    cn: "???????",
                    en: "Scan QR code to play with a mobile phone",
                    fr: "Numérisez le code QR pour jouer avec un téléphone mobile",
                    fa: "???? ????? ?? ???? ???? ?? ???? ?????"
                },
                titleCenter: {
                    cn: "?????<br />TETRIS",
                    en: "Classic Tetris on Kafirchain",
                    fr: "Classic Tetris on Kafirchain",
                    fa: "???? ????"
                },
                point: {
                    cn: "??",
                    en: "Points",
                    fr: "Score",
                    fa: "??????"
                },
                highestScore: {
                    cn: "???",
                    en: "Max Score",
                    fr: "Max Score",
                    fa: "??????"
                },
                lastRound: {
                    cn: "????",
                    en: "Last Round",
                    fr: "Dernier Tour",
                    fa: "????? ???"
                },
                cleans: {
                    cn: "???",
                    en: "Cleans",
                    fr: "Lignes",
                    fa: "??? ???"
                },
                level: {
                    cn: "??",
                    en: "Speed",
                    fr: "Difficulté",
                    fa: "???"
                },
                startLine: {
                    cn: "???",
                    en: "Level",
                    fr: "Ligne Départ",
                    fa: "?? ????"
                },
                next: {
                    cn: "???",
                    en: "Next",
                    fr: "Prochain",
                    fa: "????"
                },
                pause: {
                    cn: "??",
                    en: "Pause",
                    fr: "Pause",
                    fa: "???"
                },
                sound: {
                    cn: "??",
                    en: "Sound",
                    fr: "Sonore",
                    fa: "???"
                },
                reset: {
                    cn: "??",
                    en: "Reset",
                    fr: "Réinitialiser",
                    fa: "????"
                },
                rotation: {
                    cn: "??",
                    en: "Rotation",
                    fr: "Rotation",
                    fa: "????"
                },
                left: {
                    cn: "??",
                    en: "Left",
                    fr: "Gauche",
                    fa: "??"
                },
                right: {
                    cn: "??",
                    en: "Right",
                    fr: "Droite",
                    fa: "????"
                },
                down: {
                    cn: "??",
                    en: "Down",
                    fr: "Bas",
                    fa: "?????"
                },
                drop: {
                    cn: "??",
                    en: "Drop",
                    fr: "Tomber",
                    fa: "????"
                }
            }
        }
    }
], [65]);