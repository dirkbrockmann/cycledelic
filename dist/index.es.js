(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Yi = {
  display_type: "canvas",
  // {svg{canvas}}
  debug: !1,
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 505, height: 505 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Jt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ki(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function zr(t) {
  let n, e, r;
  t.length !== 2 ? (n = Jt, e = (s, u) => Jt(t(s), u), r = (s, u) => t(s) - u) : (n = t === Jt || t === Ki ? t : Vi, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function Vi() {
  return 0;
}
function Zi(t) {
  return t === null ? NaN : +t;
}
const Wi = zr(Jt), Ji = Wi.right;
zr(Zi).center;
const Qi = Math.sqrt(50), ji = Math.sqrt(10), to = Math.sqrt(2);
function sn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Qi ? 10 : o >= ji ? 5 : o >= to ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? sn(t, n, e * 2) : [s, u, l];
}
function no(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? sn(n, t, e) : sn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Zn(t, n, e) {
  return n = +n, t = +t, e = +e, sn(t, n, e)[2];
}
function eo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Zn(n, t, e) : Zn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ut(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function ro(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var io = { value: () => {
} };
function me() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Qt(e);
}
function Qt(t) {
  this._ = t;
}
function oo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Qt.prototype = me.prototype = {
  constructor: Qt,
  on: function(t, n) {
    var e = this._, r = oo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = ao(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = He(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = He(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Qt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function ao(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function He(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = io, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Wn = "http://www.w3.org/1999/xhtml";
const Be = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Be.hasOwnProperty(n) ? { space: Be[n], local: t } : t;
}
function so(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Wn && n.documentElement.namespaceURI === Wn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function uo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Cr(t) {
  var n = wn(t);
  return (n.local ? uo : so)(n);
}
function lo() {
}
function ve(t) {
  return t == null ? lo : function() {
    return this.querySelector(t);
  };
}
function fo(t) {
  typeof t != "function" && (t = ve(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new C(r, this._parents);
}
function co(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ho() {
  return [];
}
function Ir(t) {
  return t == null ? ho : function() {
    return this.querySelectorAll(t);
  };
}
function po(t) {
  return function() {
    return co(t.apply(this, arguments));
  };
}
function go(t) {
  typeof t == "function" ? t = po(t) : t = Ir(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new C(r, i);
}
function kr(t) {
  return function() {
    return this.matches(t);
  };
}
function Rr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var yo = Array.prototype.find;
function _o(t) {
  return function() {
    return yo.call(this.children, t);
  };
}
function mo() {
  return this.firstElementChild;
}
function vo(t) {
  return this.select(t == null ? mo : _o(typeof t == "function" ? t : Rr(t)));
}
var wo = Array.prototype.filter;
function bo() {
  return Array.from(this.children);
}
function xo(t) {
  return function() {
    return wo.call(this.children, t);
  };
}
function $o(t) {
  return this.selectAll(t == null ? bo : xo(typeof t == "function" ? t : Rr(t)));
}
function Mo(t) {
  typeof t != "function" && (t = kr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new C(r, this._parents);
}
function Fr(t) {
  return new Array(t.length);
}
function To() {
  return new C(this._enter || this._groups.map(Fr), this._parents);
}
function un(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
un.prototype = {
  constructor: un,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ao(t) {
  return function() {
    return t;
  };
}
function So(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new un(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Po(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), d;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = d = a.call(u, u.__data__, s, n) + "", l.has(d) ? i[s] = u : l.set(d, u));
  for (s = 0; s < f; ++s)
    d = a.call(t, o[s], s, o) + "", (u = l.get(d)) ? (r[s] = u, u.__data__ = o[s], l.delete(d)) : e[s] = new un(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Eo(t) {
  return t.__data__;
}
function No(t, n) {
  if (!arguments.length) return Array.from(this, Eo);
  var e = n ? Po : So, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ao(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, d = Oo(t.call(c, c && c.__data__, l, r)), p = d.length, _ = s[l] = new Array(p), b = a[l] = new Array(p), y = u[l] = new Array(h);
    e(c, f, _, b, y, d, n);
    for (var x = 0, M = 0, g, v; x < p; ++x)
      if (g = _[x]) {
        for (x >= M && (M = x + 1); !(v = b[M]) && ++M < p; ) ;
        g._next = v || null;
      }
  }
  return a = new C(a, r), a._enter = s, a._exit = u, a;
}
function Oo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function zo() {
  return new C(this._exit || this._groups.map(Fr), this._parents);
}
function Co(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Io(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), d, p = 0; p < f; ++p)
      (d = l[p] || c[p]) && (h[p] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new C(s, this._parents);
}
function ko() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Ro(t) {
  t || (t = Fo);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new C(i, this._parents).order();
}
function Fo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Lo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Do() {
  return Array.from(this);
}
function Ho() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Bo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function qo() {
  return !this.node();
}
function Xo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Uo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Go(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Yo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ko(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Vo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Zo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Wo(t, n) {
  var e = wn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Go : Uo : typeof n == "function" ? e.local ? Zo : Vo : e.local ? Ko : Yo)(e, n));
}
function Lr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Jo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function jo(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ta(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Jo : typeof n == "function" ? jo : Qo)(t, n, e ?? "")) : vt(this.node(), t);
}
function vt(t, n) {
  return t.style.getPropertyValue(n) || Lr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function na(t) {
  return function() {
    delete this[t];
  };
}
function ea(t, n) {
  return function() {
    this[t] = n;
  };
}
function ra(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ia(t, n) {
  return arguments.length > 1 ? this.each((n == null ? na : typeof n == "function" ? ra : ea)(t, n)) : this.node()[t];
}
function Dr(t) {
  return t.trim().split(/^|\s+/);
}
function we(t) {
  return t.classList || new Hr(t);
}
function Hr(t) {
  this._node = t, this._names = Dr(t.getAttribute("class") || "");
}
Hr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Br(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function qr(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function oa(t) {
  return function() {
    Br(this, t);
  };
}
function aa(t) {
  return function() {
    qr(this, t);
  };
}
function sa(t, n) {
  return function() {
    (n.apply(this, arguments) ? Br : qr)(this, t);
  };
}
function ua(t, n) {
  var e = Dr(t + "");
  if (arguments.length < 2) {
    for (var r = we(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? sa : n ? oa : aa)(e, n));
}
function la() {
  this.textContent = "";
}
function fa(t) {
  return function() {
    this.textContent = t;
  };
}
function ca(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ha(t) {
  return arguments.length ? this.each(t == null ? la : (typeof t == "function" ? ca : fa)(t)) : this.node().textContent;
}
function pa() {
  this.innerHTML = "";
}
function da(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ga(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ya(t) {
  return arguments.length ? this.each(t == null ? pa : (typeof t == "function" ? ga : da)(t)) : this.node().innerHTML;
}
function _a() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ma() {
  return this.each(_a);
}
function va() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wa() {
  return this.each(va);
}
function ba(t) {
  var n = typeof t == "function" ? t : Cr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function xa() {
  return null;
}
function $a(t, n) {
  var e = typeof t == "function" ? t : Cr(t), r = n == null ? xa : typeof n == "function" ? n : ve(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ma() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ta() {
  return this.each(Ma);
}
function Aa() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Sa() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Pa(t) {
  return this.select(t ? Sa : Aa);
}
function Ea(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Na(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Oa(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function za(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ca(t, n, e) {
  return function() {
    var r = this.__on, i, o = Na(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ia(t, n, e) {
  var r = Oa(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Ca : za, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Xr(t, n, e) {
  var r = Lr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ka(t, n) {
  return function() {
    return Xr(this, t, n);
  };
}
function Ra(t, n) {
  return function() {
    return Xr(this, t, n.apply(this, arguments));
  };
}
function Fa(t, n) {
  return this.each((typeof n == "function" ? Ra : ka)(t, n));
}
function* La() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Ur = [null];
function C(t, n) {
  this._groups = t, this._parents = n;
}
function Dt() {
  return new C([[document.documentElement]], Ur);
}
function Da() {
  return this;
}
C.prototype = Dt.prototype = {
  constructor: C,
  select: fo,
  selectAll: go,
  selectChild: vo,
  selectChildren: $o,
  filter: Mo,
  data: No,
  enter: To,
  exit: zo,
  join: Co,
  merge: Io,
  selection: Da,
  order: ko,
  sort: Ro,
  call: Lo,
  nodes: Do,
  node: Ho,
  size: Bo,
  empty: qo,
  each: Xo,
  attr: Wo,
  style: ta,
  property: ia,
  classed: ua,
  text: ha,
  html: ya,
  raise: ma,
  lower: wa,
  append: ba,
  insert: $a,
  remove: Ta,
  clone: Pa,
  datum: Ea,
  on: Ia,
  dispatch: Fa,
  [Symbol.iterator]: La
};
function S(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], Ur);
}
function Ha(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Jn(t, n) {
  if (t = Ha(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ba = { passive: !1 }, Et = { capture: !0, passive: !1 };
function Ln(t) {
  t.stopImmediatePropagation();
}
function _t(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function qa(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", _t, Et);
  "onselectstart" in n ? e.on("selectstart.drag", _t, Et) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Xa(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", _t, Et), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Gt = (t) => () => t;
function Qn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Qn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ua(t) {
  return !t.ctrlKey && !t.button;
}
function Ga() {
  return this.parentNode;
}
function Ya(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Ka() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Va() {
  var t = Ua, n = Ga, e = Ya, r = Ka, i = {}, o = me("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(g) {
    g.on("mousedown.drag", d).filter(r).on("touchstart.drag", b).on("touchmove.drag", y, Ba).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(g, v) {
    if (!(c || !t.call(this, g, v))) {
      var A = M(this, n.call(this, g, v), g, v, "mouse");
      A && (S(g.view).on("mousemove.drag", p, Et).on("mouseup.drag", _, Et), qa(g.view), Ln(g), l = !1, s = g.clientX, u = g.clientY, A("start", g));
    }
  }
  function p(g) {
    if (_t(g), !l) {
      var v = g.clientX - s, A = g.clientY - u;
      l = v * v + A * A > f;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    S(g.view).on("mousemove.drag mouseup.drag", null), Xa(g.view, l), _t(g), i.mouse("end", g);
  }
  function b(g, v) {
    if (t.call(this, g, v)) {
      var A = g.changedTouches, P = n.call(this, g, v), N = A.length, B, Y;
      for (B = 0; B < N; ++B)
        (Y = M(this, P, g, v, A[B].identifier, A[B])) && (Ln(g), Y("start", g, A[B]));
    }
  }
  function y(g) {
    var v = g.changedTouches, A = v.length, P, N;
    for (P = 0; P < A; ++P)
      (N = i[v[P].identifier]) && (_t(g), N("drag", g, v[P]));
  }
  function x(g) {
    var v = g.changedTouches, A = v.length, P, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < A; ++P)
      (N = i[v[P].identifier]) && (Ln(g), N("end", g, v[P]));
  }
  function M(g, v, A, P, N, B) {
    var Y = o.copy(), w = Jn(B || A, v), q, O, R;
    if ((R = e.call(g, new Qn("beforestart", {
      sourceEvent: A,
      target: h,
      identifier: N,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), P)) != null)
      return q = R.x - w[0] || 0, O = R.y - w[1] || 0, function Xt(nt, ot, gt) {
        var k = w, Fn;
        switch (nt) {
          case "start":
            i[N] = Xt, Fn = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            w = Jn(gt || ot, v), Fn = a;
            break;
        }
        Y.call(
          nt,
          g,
          new Qn(nt, {
            sourceEvent: ot,
            subject: R,
            target: h,
            identifier: N,
            active: Fn,
            x: w[0] + q,
            y: w[1] + O,
            dx: w[0] - k[0],
            dy: w[1] - k[1],
            dispatch: Y
          }),
          P
        );
      };
  }
  return h.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Gt(!!g), h) : t;
  }, h.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Gt(g), h) : n;
  }, h.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Gt(g), h) : e;
  }, h.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Gt(!!g), h) : r;
  }, h.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? h : g;
  }, h.clickDistance = function(g) {
    return arguments.length ? (f = (g = +g) * g, h) : Math.sqrt(f);
  }, h;
}
function be(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Gr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Ht() {
}
var Nt = 0.7, ln = 1 / Nt, mt = "\\s*([+-]?\\d+)\\s*", Ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", X = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Za = /^#([0-9a-f]{3,8})$/, Wa = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), Ja = new RegExp(`^rgb\\(${X},${X},${X}\\)$`), Qa = new RegExp(`^rgba\\(${mt},${mt},${mt},${Ot}\\)$`), ja = new RegExp(`^rgba\\(${X},${X},${X},${Ot}\\)$`), ts = new RegExp(`^hsl\\(${Ot},${X},${X}\\)$`), ns = new RegExp(`^hsla\\(${Ot},${X},${X},${Ot}\\)$`), qe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
be(Ht, lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xe,
  // Deprecated! Use color.formatHex.
  formatHex: Xe,
  formatHex8: es,
  formatHsl: rs,
  formatRgb: Ue,
  toString: Ue
});
function Xe() {
  return this.rgb().formatHex();
}
function es() {
  return this.rgb().formatHex8();
}
function rs() {
  return Yr(this).formatHsl();
}
function Ue() {
  return this.rgb().formatRgb();
}
function lt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Za.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ge(n) : e === 3 ? new z(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Yt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Yt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Wa.exec(t)) ? new z(n[1], n[2], n[3], 1) : (n = Ja.exec(t)) ? new z(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Qa.exec(t)) ? Yt(n[1], n[2], n[3], n[4]) : (n = ja.exec(t)) ? Yt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ts.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, 1) : (n = ns.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, n[4]) : qe.hasOwnProperty(t) ? Ge(qe[t]) : t === "transparent" ? new z(NaN, NaN, NaN, 0) : null;
}
function Ge(t) {
  return new z(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new z(t, n, e, r);
}
function is(t) {
  return t instanceof Ht || (t = lt(t)), t ? (t = t.rgb(), new z(t.r, t.g, t.b, t.opacity)) : new z();
}
function jn(t, n, e, r) {
  return arguments.length === 1 ? is(t) : new z(t, n, e, r ?? 1);
}
function z(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
be(z, jn, Gr(Ht, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Nt : Math.pow(Nt, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new z(ut(this.r), ut(this.g), ut(this.b), fn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ye,
  // Deprecated! Use color.formatHex.
  formatHex: Ye,
  formatHex8: os,
  formatRgb: Ke,
  toString: Ke
}));
function Ye() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}`;
}
function os() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}${st((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ke() {
  const t = fn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ut(this.r)}, ${ut(this.g)}, ${ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function fn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ut(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function st(t) {
  return t = ut(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ve(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new L(t, n, e, r);
}
function Yr(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ht || (t = lt(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new L(a, s, u, t.opacity);
}
function as(t, n, e, r) {
  return arguments.length === 1 ? Yr(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
be(L, as, Gr(Ht, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Nt : Math.pow(Nt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new z(
      Dn(t >= 240 ? t - 240 : t + 120, i, r),
      Dn(t, i, r),
      Dn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new L(Ze(this.h), Kt(this.s), Kt(this.l), fn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = fn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ze(this.h)}, ${Kt(this.s) * 100}%, ${Kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ze(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Dn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const xe = (t) => () => t;
function ss(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function us(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ls(t) {
  return (t = +t) == 1 ? Kr : function(n, e) {
    return e - n ? us(n, e, t) : xe(isNaN(n) ? e : n);
  };
}
function Kr(t, n) {
  var e = n - t;
  return e ? ss(t, e) : xe(isNaN(t) ? n : t);
}
const cn = function t(n) {
  var e = ls(n);
  function r(i, o) {
    var a = e((i = jn(i)).r, (o = jn(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = Kr(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function fs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function cs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function hs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = $e(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function ps(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function F(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ds(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = $e(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var te = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Hn = new RegExp(te.source, "g");
function gs(t) {
  return function() {
    return t;
  };
}
function ys(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Vr(t, n) {
  var e = te.lastIndex = Hn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = te.exec(t)) && (i = Hn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: F(r, i) })), e = Hn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? ys(u[0].x) : gs(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function $e(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? xe(n) : (e === "number" ? F : e === "string" ? (r = lt(n)) ? (n = r, cn) : Vr : n instanceof lt ? cn : n instanceof Date ? ps : cs(n) ? fs : Array.isArray(n) ? hs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ds : F)(t, n);
}
function _s(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var We = 180 / Math.PI, ne = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * We,
    skewX: Math.atan(u) * We,
    scaleX: a,
    scaleY: s
  };
}
var Vt;
function ms(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ne : Zr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function vs(t) {
  return t == null || (Vt || (Vt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vt.setAttribute("transform", t), !(t = Vt.transform.baseVal.consolidate())) ? ne : (t = t.matrix, Zr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Wr(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, d, p) {
    if (l !== f || c !== h) {
      var _ = d.push("translate(", null, n, null, e);
      p.push({ i: _ - 4, x: F(l, f) }, { i: _ - 2, x: F(c, h) });
    } else (f || h) && d.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: F(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: F(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, d, p) {
    if (l !== f || c !== h) {
      var _ = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: F(l, f) }, { i: _ - 2, x: F(c, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(d) {
      for (var p = -1, _ = h.length, b; ++p < _; ) f[(b = h[p]).i] = b.x(d);
      return f.join("");
    };
  };
}
var ws = Wr(ms, "px, ", "px)", "deg)"), bs = Wr(vs, ", ", ")", ")"), wt = 0, Tt = 0, $t = 0, Jr = 1e3, hn, At, pn = 0, ft = 0, bn = 0, zt = typeof performance == "object" && performance.now ? performance : Date, Qr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function xn() {
  return ft || (Qr(xs), ft = zt.now() + bn);
}
function xs() {
  ft = 0;
}
function Ct() {
  this._call = this._time = this._next = null;
}
Ct.prototype = jr.prototype = {
  constructor: Ct,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? xn() : +e) + (n == null ? 0 : +n), !this._next && At !== this && (At ? At._next = this : hn = this, At = this), this._call = t, this._time = e, ee();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ee());
  }
};
function jr(t, n, e) {
  var r = new Ct();
  return r.restart(t, n, e), r;
}
function $s() {
  xn(), ++wt;
  for (var t = hn, n; t; )
    (n = ft - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --wt;
}
function Je() {
  ft = (pn = zt.now()) + bn, wt = Tt = 0;
  try {
    $s();
  } finally {
    wt = 0, Ts(), ft = 0;
  }
}
function Ms() {
  var t = zt.now(), n = t - pn;
  n > Jr && (bn -= n, pn = t);
}
function Ts() {
  for (var t, n = hn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : hn = e);
  At = t, ee(r);
}
function ee(t) {
  if (!wt) {
    Tt && (Tt = clearTimeout(Tt));
    var n = t - ft;
    n > 24 ? (t < 1 / 0 && (Tt = setTimeout(Je, t - zt.now() - bn)), $t && ($t = clearInterval($t))) : ($t || (pn = zt.now(), $t = setInterval(Ms, Jr)), wt = 1, Qr(Je));
  }
}
function Qe(t, n, e) {
  var r = new Ct();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function As(t, n, e) {
  var r = new Ct(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? xn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Ss = me("start", "end", "cancel", "interrupt"), Ps = [], ti = 0, je = 1, re = 2, jt = 3, tr = 4, ie = 5, tn = 6;
function $n(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Es(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ss,
    tween: Ps,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ti
  });
}
function Me(t, n) {
  var e = D(t, n);
  if (e.state > ti) throw new Error("too late; already scheduled");
  return e;
}
function G(t, n) {
  var e = D(t, n);
  if (e.state > jt) throw new Error("too late; already running");
  return e;
}
function D(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Es(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = jr(o, 0, e.time);
  function o(l) {
    e.state = je, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, d;
    if (e.state !== je) return u();
    for (c in r)
      if (d = r[c], d.name === e.name) {
        if (d.state === jt) return Qe(a);
        d.state === tr ? (d.state = tn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < n && (d.state = tn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (Qe(function() {
      e.state === jt && (e.state = tr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = re, e.on.call("start", t, t.__data__, e.index, e.group), e.state === re) {
      for (e.state = jt, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = ie, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === ie && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = tn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Ns(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > re && r.state < ie, r.state = tn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Os(t) {
  return this.each(function() {
    Ns(this, t);
  });
}
function zs(t, n) {
  var e, r;
  return function() {
    var i = G(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Cs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = G(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Is(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? zs : Cs)(e, t, n));
}
function Te(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = G(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function ni(t, n) {
  var e;
  return (typeof n == "number" ? F : n instanceof lt ? cn : (e = lt(n)) ? (n = e, cn) : Vr)(t, n);
}
function ks(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Rs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ds(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Hs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Bs(t, n) {
  var e = wn(t), r = e === "transform" ? bs : ni;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Hs : Ds)(e, r, Te(this, "attr." + t, n)) : n == null ? (e.local ? Rs : ks)(e) : (e.local ? Ls : Fs)(e, r, n));
}
function qs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Xs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Us(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Xs(t, o)), e;
  }
  return i._value = n, i;
}
function Gs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && qs(t, o)), e;
  }
  return i._value = n, i;
}
function Ys(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = wn(t);
  return this.tween(e, (r.local ? Us : Gs)(r, n));
}
function Ks(t, n) {
  return function() {
    Me(this, t).delay = +n.apply(this, arguments);
  };
}
function Vs(t, n) {
  return n = +n, function() {
    Me(this, t).delay = n;
  };
}
function Zs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ks : Vs)(n, t)) : D(this.node(), n).delay;
}
function Ws(t, n) {
  return function() {
    G(this, t).duration = +n.apply(this, arguments);
  };
}
function Js(t, n) {
  return n = +n, function() {
    G(this, t).duration = n;
  };
}
function Qs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ws : Js)(n, t)) : D(this.node(), n).duration;
}
function js(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    G(this, t).ease = n;
  };
}
function tu(t) {
  var n = this._id;
  return arguments.length ? this.each(js(n, t)) : D(this.node(), n).ease;
}
function nu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    G(this, t).ease = e;
  };
}
function eu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(nu(this._id, t));
}
function ru(t) {
  typeof t != "function" && (t = kr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new W(r, this._parents, this._name, this._id);
}
function iu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, d = 0; d < c; ++d)
      (h = u[d] || l[d]) && (f[d] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new W(a, this._parents, this._name, this._id);
}
function ou(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function au(t, n, e) {
  var r, i, o = ou(n) ? Me : G;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function su(t, n) {
  var e = this._id;
  return arguments.length < 2 ? D(this.node(), e).on.on(t) : this.each(au(e, t, n));
}
function uu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function lu() {
  return this.on("end.remove", uu(this._id));
}
function fu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ve(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, $n(l[h], n, e, h, l, D(c, e)));
  return new W(o, this._parents, n, e);
}
function cu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ir(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), d, p = D(c, e), _ = 0, b = h.length; _ < b; ++_)
          (d = h[_]) && $n(d, n, e, _, h, p);
        o.push(h), a.push(c);
      }
  return new W(o, a, n, e);
}
var hu = Dt.prototype.constructor;
function pu() {
  return new hu(this._groups, this._parents);
}
function du(t, n) {
  var e, r, i;
  return function() {
    var o = vt(this, t), a = (this.style.removeProperty(t), vt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ei(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function gu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = vt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function yu(t, n, e) {
  var r, i, o;
  return function() {
    var a = vt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), vt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function _u(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = G(this, t), l = u.on, c = u.value[o] == null ? s || (s = ei(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function mu(t, n, e) {
  var r = (t += "") == "transform" ? ws : ni;
  return n == null ? this.styleTween(t, du(t, r)).on("end.style." + t, ei(t)) : typeof n == "function" ? this.styleTween(t, yu(t, r, Te(this, "style." + t, n))).each(_u(this._id, t)) : this.styleTween(t, gu(t, r, n), e).on("end.style." + t, null);
}
function vu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function wu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && vu(t, a, e)), r;
  }
  return o._value = n, o;
}
function bu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, wu(t, n, e ?? ""));
}
function xu(t) {
  return function() {
    this.textContent = t;
  };
}
function $u(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Mu(t) {
  return this.tween("text", typeof t == "function" ? $u(Te(this, "text", t)) : xu(t == null ? "" : t + ""));
}
function Tu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Au(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Tu(i)), n;
  }
  return r._value = t, r;
}
function Su(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Au(t));
}
function Pu() {
  for (var t = this._name, n = this._id, e = ri(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = D(u, n);
        $n(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new W(r, this._parents, t, e);
}
function Eu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = G(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Nu = 0;
function W(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ri() {
  return ++Nu;
}
var K = Dt.prototype;
W.prototype = {
  constructor: W,
  select: fu,
  selectAll: cu,
  selectChild: K.selectChild,
  selectChildren: K.selectChildren,
  filter: ru,
  merge: iu,
  selection: pu,
  transition: Pu,
  call: K.call,
  nodes: K.nodes,
  node: K.node,
  size: K.size,
  empty: K.empty,
  each: K.each,
  on: su,
  attr: Bs,
  attrTween: Ys,
  style: mu,
  styleTween: bu,
  text: Mu,
  textTween: Su,
  remove: lu,
  tween: Is,
  delay: Zs,
  duration: Qs,
  ease: tu,
  easeVarying: eu,
  end: Eu,
  [Symbol.iterator]: K[Symbol.iterator]
};
function Ou(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var zu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ou
};
function Cu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Iu(t) {
  var n, e;
  t instanceof W ? (n = t._id, t = t._name) : (n = ri(), (e = zu).time = xn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && $n(u, t, n, l, a, e || Cu(u, n));
  return new W(r, this._parents, t, n);
}
Dt.prototype.interrupt = Os;
Dt.prototype.transition = Iu;
const oe = Math.PI, ae = 2 * oe, at = 1e-6, ku = ae - at;
function ii(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Ru(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ii;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class oi {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ii : Ru(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > at) if (!(Math.abs(f * u - l * c) > at) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = r - a, p = i - s, _ = u * u + l * l, b = d * d + p * p, y = Math.sqrt(_), x = Math.sqrt(h), M = o * Math.tan((oe - Math.acos((_ + h - b) / (2 * y * x))) / 2), g = M / x, v = M / y;
      Math.abs(g - 1) > at && this._append`L${n + g * c},${e + g * f}`, this._append`A${o},${o},0,0,${+(f * d > c * p)},${this._x1 = n + v * u},${this._y1 = e + v * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > at || Math.abs(this._y1 - c) > at) && this._append`L${l},${c}`, r && (h < 0 && (h = h % ae + ae), h > ku ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > at && this._append`A${r},${r},0,${+(h >= oe)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function H() {
  return new oi();
}
H.prototype = oi.prototype;
function Fu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function dn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function bt(t) {
  return t = dn(Math.abs(t)), t ? t[1] : NaN;
}
function Lu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Du(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Hu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function gn(t) {
  if (!(n = Hu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ae({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
gn.prototype = Ae.prototype;
function Ae(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ae.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Bu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ai;
function qu(t, n) {
  var e = dn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ai = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + dn(t, Math.max(0, n + o - 1))[0];
}
function nr(t, n) {
  var e = dn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const er = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Fu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => nr(t * 100, n),
  r: nr,
  s: qu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function rr(t) {
  return t;
}
var ir = Array.prototype.map, or = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Xu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? rr : Lu(ir.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? rr : Du(ir.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = gn(f);
    var h = f.fill, d = f.align, p = f.sign, _ = f.symbol, b = f.zero, y = f.width, x = f.comma, M = f.precision, g = f.trim, v = f.type;
    v === "n" ? (x = !0, v = "g") : er[v] || (M === void 0 && (M = 12), g = !0, v = "g"), (b || h === "0" && d === "=") && (b = !0, h = "0", d = "=");
    var A = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = _ === "$" ? r : /[%p]/.test(v) ? a : "", N = er[v], B = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function Y(w) {
      var q = A, O = P, R, Xt, nt;
      if (v === "c")
        O = N(w) + O, w = "";
      else {
        w = +w;
        var ot = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : N(Math.abs(w), M), g && (w = Bu(w)), ot && +w == 0 && p !== "+" && (ot = !1), q = (ot ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + q, O = (v === "s" ? or[8 + ai / 3] : "") + O + (ot && p === "(" ? ")" : ""), B) {
          for (R = -1, Xt = w.length; ++R < Xt; )
            if (nt = w.charCodeAt(R), 48 > nt || nt > 57) {
              O = (nt === 46 ? i + w.slice(R + 1) : w.slice(R)) + O, w = w.slice(0, R);
              break;
            }
        }
      }
      x && !b && (w = n(w, 1 / 0));
      var gt = q.length + w.length + O.length, k = gt < y ? new Array(y - gt + 1).join(h) : "";
      switch (x && b && (w = n(k + w, k.length ? y - O.length : 1 / 0), k = ""), d) {
        case "<":
          w = q + w + O + k;
          break;
        case "=":
          w = q + k + w + O;
          break;
        case "^":
          w = k.slice(0, gt = k.length >> 1) + q + w + O + k.slice(gt);
          break;
        default:
          w = k + q + w + O;
          break;
      }
      return o(w);
    }
    return Y.toString = function() {
      return f + "";
    }, Y;
  }
  function c(f, h) {
    var d = l((f = gn(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(bt(h) / 3))) * 3, _ = Math.pow(10, -p), b = or[8 + p / 3];
    return function(y) {
      return d(_ * y) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var Zt, Mn, si;
Uu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Uu(t) {
  return Zt = Xu(t), Mn = Zt.format, si = Zt.formatPrefix, Zt;
}
function Gu(t) {
  return Math.max(0, -bt(Math.abs(t)));
}
function Yu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bt(n) / 3))) * 3 - bt(Math.abs(t)));
}
function Ku(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, bt(n) - bt(t)) + 1;
}
function Vu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Zu(t) {
  return function() {
    return t;
  };
}
function Wu(t) {
  return +t;
}
var ar = [0, 1];
function yt(t) {
  return t;
}
function se(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Zu(isNaN(n) ? NaN : 0.5);
}
function Ju(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Qu(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = se(i, r), o = e(a, o)) : (r = se(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function ju(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = se(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Ji(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function tl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function nl() {
  var t = ar, n = ar, e = $e, r, i, o, a = yt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== yt && (a = Ju(t[0], t[h - 1])), s = h > 2 ? ju : Qu, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), F)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Wu), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = _s, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : yt, c()) : a !== yt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, c();
  };
}
function el() {
  return nl()(yt, yt);
}
function rl(t, n, e, r) {
  var i = eo(t, n, e), o;
  switch (r = gn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Yu(i, a)) && (r.precision = o), si(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ku(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Gu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Mn(r);
}
function il(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return no(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return rl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Zn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function rt() {
  var t = el();
  return t.copy = function() {
    return tl(t, rt());
  }, Vu.apply(t, arguments), il(t);
}
function St(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
St.prototype = {
  constructor: St,
  scale: function(t) {
    return t === 1 ? this : new St(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new St(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
St.prototype;
var ui = typeof global == "object" && global && global.Object === Object && global, ol = typeof self == "object" && self && self.Object === Object && self, Q = ui || ol || Function("return this")(), U = Q.Symbol, li = Object.prototype, al = li.hasOwnProperty, sl = li.toString, Mt = U ? U.toStringTag : void 0;
function ul(t) {
  var n = al.call(t, Mt), e = t[Mt];
  try {
    t[Mt] = void 0;
    var r = !0;
  } catch {
  }
  var i = sl.call(t);
  return r && (n ? t[Mt] = e : delete t[Mt]), i;
}
var ll = Object.prototype, fl = ll.toString;
function cl(t) {
  return fl.call(t);
}
var hl = "[object Null]", pl = "[object Undefined]", sr = U ? U.toStringTag : void 0;
function ht(t) {
  return t == null ? t === void 0 ? pl : hl : sr && sr in Object(t) ? ul(t) : cl(t);
}
function it(t) {
  return t != null && typeof t == "object";
}
var dl = "[object Symbol]";
function Tn(t) {
  return typeof t == "symbol" || it(t) && ht(t) == dl;
}
function Bt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var I = Array.isArray, ur = U ? U.prototype : void 0, lr = ur ? ur.toString : void 0;
function fi(t) {
  if (typeof t == "string")
    return t;
  if (I(t))
    return Bt(t, fi) + "";
  if (Tn(t))
    return lr ? lr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var gl = /\s/;
function yl(t) {
  for (var n = t.length; n-- && gl.test(t.charAt(n)); )
    ;
  return n;
}
var _l = /^\s+/;
function ml(t) {
  return t && t.slice(0, yl(t) + 1).replace(_l, "");
}
function J(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var fr = NaN, vl = /^[-+]0x[0-9a-f]+$/i, wl = /^0b[01]+$/i, bl = /^0o[0-7]+$/i, xl = parseInt;
function $l(t) {
  if (typeof t == "number")
    return t;
  if (Tn(t))
    return fr;
  if (J(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = J(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ml(t);
  var e = wl.test(t);
  return e || bl.test(t) ? xl(t.slice(2), e ? 2 : 8) : vl.test(t) ? fr : +t;
}
var Ml = 1 / 0, Tl = 17976931348623157e292;
function Bn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = $l(t), t === Ml || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Tl;
  }
  return t === t ? t : 0;
}
function An(t) {
  return t;
}
var Al = "[object AsyncFunction]", Sl = "[object Function]", Pl = "[object GeneratorFunction]", El = "[object Proxy]";
function ci(t) {
  if (!J(t))
    return !1;
  var n = ht(t);
  return n == Sl || n == Pl || n == Al || n == El;
}
var qn = Q["__core-js_shared__"], cr = function() {
  var t = /[^.]+$/.exec(qn && qn.keys && qn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Nl(t) {
  return !!cr && cr in t;
}
var Ol = Function.prototype, zl = Ol.toString;
function pt(t) {
  if (t != null) {
    try {
      return zl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Cl = /[\\^$.*+?()[\]{}|]/g, Il = /^\[object .+?Constructor\]$/, kl = Function.prototype, Rl = Object.prototype, Fl = kl.toString, Ll = Rl.hasOwnProperty, Dl = RegExp(
  "^" + Fl.call(Ll).replace(Cl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hl(t) {
  if (!J(t) || Nl(t))
    return !1;
  var n = ci(t) ? Dl : Il;
  return n.test(pt(t));
}
function Bl(t, n) {
  return t == null ? void 0 : t[n];
}
function dt(t, n) {
  var e = Bl(t, n);
  return Hl(e) ? e : void 0;
}
var ue = dt(Q, "WeakMap");
function ql(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var Xl = 800, Ul = 16, Gl = Date.now;
function Yl(t) {
  var n = 0, e = 0;
  return function() {
    var r = Gl(), i = Ul - (r - e);
    if (e = r, i > 0) {
      if (++n >= Xl)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Kl(t) {
  return function() {
    return t;
  };
}
var yn = function() {
  try {
    var t = dt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Vl = yn ? function(t, n) {
  return yn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kl(n),
    writable: !0
  });
} : An, Zl = Yl(Vl);
function Wl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Jl = 9007199254740991, Ql = /^(?:0|[1-9]\d*)$/;
function Sn(t, n) {
  var e = typeof t;
  return n = n ?? Jl, !!n && (e == "number" || e != "symbol" && Ql.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function jl(t, n, e) {
  n == "__proto__" && yn ? yn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Pn(t, n) {
  return t === n || t !== t && n !== n;
}
var tf = Object.prototype, nf = tf.hasOwnProperty;
function ef(t, n, e) {
  var r = t[n];
  (!(nf.call(t, n) && Pn(r, e)) || e === void 0 && !(n in t)) && jl(t, n, e);
}
var hr = Math.max;
function rf(t, n, e) {
  return n = hr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = hr(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), ql(t, this, s);
  };
}
function of(t, n) {
  return Zl(rf(t, n, An), t + "");
}
var af = 9007199254740991;
function Se(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= af;
}
function xt(t) {
  return t != null && Se(t.length) && !ci(t);
}
function sf(t, n, e) {
  if (!J(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? xt(e) && Sn(n, e.length) : r == "string" && n in e) ? Pn(e[n], t) : !1;
}
var uf = Object.prototype;
function hi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || uf;
  return t === e;
}
function pi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var lf = "[object Arguments]";
function pr(t) {
  return it(t) && ht(t) == lf;
}
var di = Object.prototype, ff = di.hasOwnProperty, cf = di.propertyIsEnumerable, Pe = pr(/* @__PURE__ */ function() {
  return arguments;
}()) ? pr : function(t) {
  return it(t) && ff.call(t, "callee") && !cf.call(t, "callee");
};
function hf() {
  return !1;
}
var gi = typeof exports == "object" && exports && !exports.nodeType && exports, dr = gi && typeof module == "object" && module && !module.nodeType && module, pf = dr && dr.exports === gi, gr = pf ? Q.Buffer : void 0, df = gr ? gr.isBuffer : void 0, le = df || hf, gf = "[object Arguments]", yf = "[object Array]", _f = "[object Boolean]", mf = "[object Date]", vf = "[object Error]", wf = "[object Function]", bf = "[object Map]", xf = "[object Number]", $f = "[object Object]", Mf = "[object RegExp]", Tf = "[object Set]", Af = "[object String]", Sf = "[object WeakMap]", Pf = "[object ArrayBuffer]", Ef = "[object DataView]", Nf = "[object Float32Array]", Of = "[object Float64Array]", zf = "[object Int8Array]", Cf = "[object Int16Array]", If = "[object Int32Array]", kf = "[object Uint8Array]", Rf = "[object Uint8ClampedArray]", Ff = "[object Uint16Array]", Lf = "[object Uint32Array]", $ = {};
$[Nf] = $[Of] = $[zf] = $[Cf] = $[If] = $[kf] = $[Rf] = $[Ff] = $[Lf] = !0;
$[gf] = $[yf] = $[Pf] = $[_f] = $[Ef] = $[mf] = $[vf] = $[wf] = $[bf] = $[xf] = $[$f] = $[Mf] = $[Tf] = $[Af] = $[Sf] = !1;
function Df(t) {
  return it(t) && Se(t.length) && !!$[ht(t)];
}
function Hf(t) {
  return function(n) {
    return t(n);
  };
}
var yi = typeof exports == "object" && exports && !exports.nodeType && exports, Pt = yi && typeof module == "object" && module && !module.nodeType && module, Bf = Pt && Pt.exports === yi, Xn = Bf && ui.process, yr = function() {
  try {
    var t = Pt && Pt.require && Pt.require("util").types;
    return t || Xn && Xn.binding && Xn.binding("util");
  } catch {
  }
}(), _r = yr && yr.isTypedArray, _i = _r ? Hf(_r) : Df, qf = Object.prototype, Xf = qf.hasOwnProperty;
function mi(t, n) {
  var e = I(t), r = !e && Pe(t), i = !e && !r && le(t), o = !e && !r && !i && _i(t), a = e || r || i || o, s = a ? pi(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Xf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Sn(l, u))) && s.push(l);
  return s;
}
function vi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Uf = vi(Object.keys, Object), Gf = Object.prototype, Yf = Gf.hasOwnProperty;
function Kf(t) {
  if (!hi(t))
    return Uf(t);
  var n = [];
  for (var e in Object(t))
    Yf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function En(t) {
  return xt(t) ? mi(t) : Kf(t);
}
function Vf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Zf = Object.prototype, Wf = Zf.hasOwnProperty;
function Jf(t) {
  if (!J(t))
    return Vf(t);
  var n = hi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Wf.call(t, r)) || e.push(r);
  return e;
}
function Qf(t) {
  return xt(t) ? mi(t, !0) : Jf(t);
}
var jf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tc = /^\w*$/;
function Ee(t, n) {
  if (I(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Tn(t) ? !0 : tc.test(t) || !jf.test(t) || n != null && t in Object(n);
}
var It = dt(Object, "create");
function nc() {
  this.__data__ = It ? It(null) : {}, this.size = 0;
}
function ec(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var rc = "__lodash_hash_undefined__", ic = Object.prototype, oc = ic.hasOwnProperty;
function ac(t) {
  var n = this.__data__;
  if (It) {
    var e = n[t];
    return e === rc ? void 0 : e;
  }
  return oc.call(n, t) ? n[t] : void 0;
}
var sc = Object.prototype, uc = sc.hasOwnProperty;
function lc(t) {
  var n = this.__data__;
  return It ? n[t] !== void 0 : uc.call(n, t);
}
var fc = "__lodash_hash_undefined__";
function cc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = It && n === void 0 ? fc : n, this;
}
function ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = nc;
ct.prototype.delete = ec;
ct.prototype.get = ac;
ct.prototype.has = lc;
ct.prototype.set = cc;
function hc() {
  this.__data__ = [], this.size = 0;
}
function Nn(t, n) {
  for (var e = t.length; e--; )
    if (Pn(t[e][0], n))
      return e;
  return -1;
}
var pc = Array.prototype, dc = pc.splice;
function gc(t) {
  var n = this.__data__, e = Nn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : dc.call(n, e, 1), --this.size, !0;
}
function yc(t) {
  var n = this.__data__, e = Nn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function _c(t) {
  return Nn(this.__data__, t) > -1;
}
function mc(t, n) {
  var e = this.__data__, r = Nn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function j(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
j.prototype.clear = hc;
j.prototype.delete = gc;
j.prototype.get = yc;
j.prototype.has = _c;
j.prototype.set = mc;
var kt = dt(Q, "Map");
function vc() {
  this.size = 0, this.__data__ = {
    hash: new ct(),
    map: new (kt || j)(),
    string: new ct()
  };
}
function wc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function On(t, n) {
  var e = t.__data__;
  return wc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function bc(t) {
  var n = On(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function xc(t) {
  return On(this, t).get(t);
}
function $c(t) {
  return On(this, t).has(t);
}
function Mc(t, n) {
  var e = On(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function tt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
tt.prototype.clear = vc;
tt.prototype.delete = bc;
tt.prototype.get = xc;
tt.prototype.has = $c;
tt.prototype.set = Mc;
var Tc = "Expected a function";
function Ne(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Tc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ne.Cache || tt)(), e;
}
Ne.Cache = tt;
var Ac = 500;
function Sc(t) {
  var n = Ne(t, function(r) {
    return e.size === Ac && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Pc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ec = /\\(\\)?/g, Nc = Sc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Pc, function(e, r, i, o) {
    n.push(i ? o.replace(Ec, "$1") : r || e);
  }), n;
});
function zn(t) {
  return t == null ? "" : fi(t);
}
function Cn(t, n) {
  return I(t) ? t : Ee(t, n) ? [t] : Nc(zn(t));
}
function qt(t) {
  if (typeof t == "string" || Tn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Oe(t, n) {
  n = Cn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[qt(n[e++])];
  return e && e == r ? t : void 0;
}
function Oc(t, n, e) {
  var r = t == null ? void 0 : Oe(t, n);
  return r === void 0 ? e : r;
}
function ze(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var mr = U ? U.isConcatSpreadable : void 0;
function zc(t) {
  return I(t) || Pe(t) || !!(mr && t && t[mr]);
}
function Cc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = zc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? ze(i, s) : i[i.length] = s;
  }
  return i;
}
function Ic(t) {
  var n = t == null ? 0 : t.length;
  return n ? Cc(t) : [];
}
var kc = vi(Object.getPrototypeOf, Object);
function Rc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Fc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Rc(t, n, e);
}
var Lc = "\\ud800-\\udfff", Dc = "\\u0300-\\u036f", Hc = "\\ufe20-\\ufe2f", Bc = "\\u20d0-\\u20ff", qc = Dc + Hc + Bc, Xc = "\\ufe0e\\ufe0f", Uc = "\\u200d", Gc = RegExp("[" + Uc + Lc + qc + Xc + "]");
function wi(t) {
  return Gc.test(t);
}
function Yc(t) {
  return t.split("");
}
var bi = "\\ud800-\\udfff", Kc = "\\u0300-\\u036f", Vc = "\\ufe20-\\ufe2f", Zc = "\\u20d0-\\u20ff", Wc = Kc + Vc + Zc, Jc = "\\ufe0e\\ufe0f", Qc = "[" + bi + "]", fe = "[" + Wc + "]", ce = "\\ud83c[\\udffb-\\udfff]", jc = "(?:" + fe + "|" + ce + ")", xi = "[^" + bi + "]", $i = "(?:\\ud83c[\\udde6-\\uddff]){2}", Mi = "[\\ud800-\\udbff][\\udc00-\\udfff]", th = "\\u200d", Ti = jc + "?", Ai = "[" + Jc + "]?", nh = "(?:" + th + "(?:" + [xi, $i, Mi].join("|") + ")" + Ai + Ti + ")*", eh = Ai + Ti + nh, rh = "(?:" + [xi + fe + "?", fe, $i, Mi, Qc].join("|") + ")", ih = RegExp(ce + "(?=" + ce + ")|" + rh + eh, "g");
function oh(t) {
  return t.match(ih) || [];
}
function ah(t) {
  return wi(t) ? oh(t) : Yc(t);
}
function sh(t) {
  return function(n) {
    n = zn(n);
    var e = wi(n) ? ah(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Fc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var uh = sh("toUpperCase");
function lh(t) {
  return uh(zn(t).toLowerCase());
}
function fh() {
  this.__data__ = new j(), this.size = 0;
}
function ch(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function hh(t) {
  return this.__data__.get(t);
}
function ph(t) {
  return this.__data__.has(t);
}
var dh = 200;
function gh(t, n) {
  var e = this.__data__;
  if (e instanceof j) {
    var r = e.__data__;
    if (!kt || r.length < dh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new tt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function Z(t) {
  var n = this.__data__ = new j(t);
  this.size = n.size;
}
Z.prototype.clear = fh;
Z.prototype.delete = ch;
Z.prototype.get = hh;
Z.prototype.has = ph;
Z.prototype.set = gh;
function Ce(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Si() {
  return [];
}
var yh = Object.prototype, _h = yh.propertyIsEnumerable, vr = Object.getOwnPropertySymbols, Pi = vr ? function(t) {
  return t == null ? [] : (t = Object(t), Ce(vr(t), function(n) {
    return _h.call(t, n);
  }));
} : Si, mh = Object.getOwnPropertySymbols, vh = mh ? function(t) {
  for (var n = []; t; )
    ze(n, Pi(t)), t = kc(t);
  return n;
} : Si;
function Ei(t, n, e) {
  var r = n(t);
  return I(t) ? r : ze(r, e(t));
}
function wr(t) {
  return Ei(t, En, Pi);
}
function wh(t) {
  return Ei(t, Qf, vh);
}
var he = dt(Q, "DataView"), pe = dt(Q, "Promise"), de = dt(Q, "Set"), br = "[object Map]", bh = "[object Object]", xr = "[object Promise]", $r = "[object Set]", Mr = "[object WeakMap]", Tr = "[object DataView]", xh = pt(he), $h = pt(kt), Mh = pt(pe), Th = pt(de), Ah = pt(ue), V = ht;
(he && V(new he(new ArrayBuffer(1))) != Tr || kt && V(new kt()) != br || pe && V(pe.resolve()) != xr || de && V(new de()) != $r || ue && V(new ue()) != Mr) && (V = function(t) {
  var n = ht(t), e = n == bh ? t.constructor : void 0, r = e ? pt(e) : "";
  if (r)
    switch (r) {
      case xh:
        return Tr;
      case $h:
        return br;
      case Mh:
        return xr;
      case Th:
        return $r;
      case Ah:
        return Mr;
    }
  return n;
});
var Ar = Q.Uint8Array, Sh = "__lodash_hash_undefined__";
function Ph(t) {
  return this.__data__.set(t, Sh), this;
}
function Eh(t) {
  return this.__data__.has(t);
}
function _n(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new tt(); ++n < e; )
    this.add(t[n]);
}
_n.prototype.add = _n.prototype.push = Ph;
_n.prototype.has = Eh;
function Nh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Oh(t, n) {
  return t.has(n);
}
var zh = 1, Ch = 2;
function Ni(t, n, e, r, i, o) {
  var a = e & zh, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, d = e & Ch ? new _n() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var p = t[f], _ = n[f];
    if (r)
      var b = a ? r(_, p, f, n, t, o) : r(p, _, f, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!Nh(n, function(y, x) {
        if (!Oh(d, x) && (p === y || i(p, y, e, r, o)))
          return d.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === _ || i(p, _, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Oi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ih(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var kh = 1, Rh = 2, Fh = "[object Boolean]", Lh = "[object Date]", Dh = "[object Error]", Hh = "[object Map]", Bh = "[object Number]", qh = "[object RegExp]", Xh = "[object Set]", Uh = "[object String]", Gh = "[object Symbol]", Yh = "[object ArrayBuffer]", Kh = "[object DataView]", Sr = U ? U.prototype : void 0, Un = Sr ? Sr.valueOf : void 0;
function Vh(t, n, e, r, i, o, a) {
  switch (e) {
    case Kh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Yh:
      return !(t.byteLength != n.byteLength || !o(new Ar(t), new Ar(n)));
    case Fh:
    case Lh:
    case Bh:
      return Pn(+t, +n);
    case Dh:
      return t.name == n.name && t.message == n.message;
    case qh:
    case Uh:
      return t == n + "";
    case Hh:
      var s = Oi;
    case Xh:
      var u = r & kh;
      if (s || (s = Ih), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Rh, a.set(t, n);
      var c = Ni(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case Gh:
      if (Un)
        return Un.call(t) == Un.call(n);
  }
  return !1;
}
var Zh = 1, Wh = Object.prototype, Jh = Wh.hasOwnProperty;
function Qh(t, n, e, r, i, o) {
  var a = e & Zh, s = wr(t), u = s.length, l = wr(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : Jh.call(n, h)))
      return !1;
  }
  var d = o.get(t), p = o.get(n);
  if (d && p)
    return d == n && p == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++f < u; ) {
    h = s[f];
    var y = t[h], x = n[h];
    if (r)
      var M = a ? r(x, y, h, n, t, o) : r(y, x, h, t, n, o);
    if (!(M === void 0 ? y === x || i(y, x, e, r, o) : M)) {
      _ = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (_ && !b) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var jh = 1, Pr = "[object Arguments]", Er = "[object Array]", Wt = "[object Object]", tp = Object.prototype, Nr = tp.hasOwnProperty;
function np(t, n, e, r, i, o) {
  var a = I(t), s = I(n), u = a ? Er : V(t), l = s ? Er : V(n);
  u = u == Pr ? Wt : u, l = l == Pr ? Wt : l;
  var c = u == Wt, f = l == Wt, h = u == l;
  if (h && le(t)) {
    if (!le(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new Z()), a || _i(t) ? Ni(t, n, e, r, i, o) : Vh(t, n, u, e, r, i, o);
  if (!(e & jh)) {
    var d = c && Nr.call(t, "__wrapped__"), p = f && Nr.call(n, "__wrapped__");
    if (d || p) {
      var _ = d ? t.value() : t, b = p ? n.value() : n;
      return o || (o = new Z()), i(_, b, e, r, o);
    }
  }
  return h ? (o || (o = new Z()), Qh(t, n, e, r, i, o)) : !1;
}
function Ie(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !it(t) && !it(n) ? t !== t && n !== n : np(t, n, e, r, Ie, i);
}
var ep = 1, rp = 2;
function ip(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new Z(), f;
      if (!(f === void 0 ? Ie(l, u, ep | rp, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function zi(t) {
  return t === t && !J(t);
}
function op(t) {
  for (var n = En(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, zi(i)];
  }
  return n;
}
function Ci(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function ap(t) {
  var n = op(t);
  return n.length == 1 && n[0][2] ? Ci(n[0][0], n[0][1]) : function(e) {
    return e === t || ip(e, t, n);
  };
}
function sp(t, n) {
  return t != null && n in Object(t);
}
function Ii(t, n, e) {
  n = Cn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = qt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Se(i) && Sn(a, i) && (I(t) || Pe(t)));
}
function up(t, n) {
  return t != null && Ii(t, n, sp);
}
var lp = 1, fp = 2;
function cp(t, n) {
  return Ee(t) && zi(n) ? Ci(qt(t), n) : function(e) {
    var r = Oc(e, t);
    return r === void 0 && r === n ? up(e, t) : Ie(n, r, lp | fp);
  };
}
function ki(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function hp(t) {
  return function(n) {
    return Oe(n, t);
  };
}
function pp(t) {
  return Ee(t) ? ki(qt(t)) : hp(t);
}
function In(t) {
  return typeof t == "function" ? t : t == null ? An : typeof t == "object" ? I(t) ? cp(t[0], t[1]) : ap(t) : pp(t);
}
function dp(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var gp = dp();
function yp(t, n) {
  return t && gp(t, n, En);
}
function _p(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!xt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var ke = _p(yp);
function mp(t) {
  return it(t) && xt(t);
}
function vp(t) {
  return typeof t == "function" ? t : An;
}
function Rt(t, n) {
  var e = I(t) ? Wl : ke;
  return e(t, vp(n));
}
function wp(t, n) {
  return Bt(n, function(e) {
    return [e, t[e]];
  });
}
function bp(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var xp = "[object Map]", $p = "[object Set]";
function Mp(t) {
  return function(n) {
    var e = V(n);
    return e == xp ? Oi(n) : e == $p ? bp(n) : wp(n, t(n));
  };
}
var Tp = Mp(En);
function Ap(t, n) {
  var e = [];
  return ke(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function Sp(t, n) {
  var e = I(t) ? Ce : Ap;
  return e(t, In(n));
}
function Pp(t, n) {
  var e = -1, r = xt(t) ? Array(t.length) : [];
  return ke(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Ft(t, n) {
  var e = I(t) ? Bt : Pp;
  return e(t, In(n));
}
var Ep = Object.prototype, Np = Ep.hasOwnProperty;
function Op(t, n) {
  return t != null && Np.call(t, n);
}
function zp(t, n) {
  return t != null && Ii(t, n, Op);
}
var Cp = "[object Boolean]";
function Ip(t) {
  return t === !0 || t === !1 || it(t) && ht(t) == Cp;
}
function kp(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
function Rp(t, n, e, r) {
  if (!J(t))
    return t;
  n = Cn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = qt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = J(c) ? c : Sn(n[i + 1]) ? [] : {});
    }
    ef(s, u, l), s = s[u];
  }
  return t;
}
function Fp(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Oe(t, a);
    e(s, a) && Rp(o, Cn(a, t), s);
  }
  return o;
}
function Ri(t, n) {
  if (t == null)
    return {};
  var e = Bt(wh(t), function(r) {
    return [r];
  });
  return n = In(n), Fp(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Lp = Math.ceil, Dp = Math.max;
function Hp(t, n, e, r) {
  for (var i = -1, o = Dp(Lp((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Bp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && sf(n, e, r) && (e = r = void 0), n = Bn(n), e === void 0 ? (e = n, n = 0) : e = Bn(e), r = r === void 0 ? n < e ? 1 : -1 : Bn(r), Hp(n, e, r);
  };
}
var mn = Bp();
function qp() {
  var t = arguments, n = zn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Gn(t, n) {
  return t && t.length ? kp(t, In(n)) : 0;
}
var Xp = Math.max;
function Up(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Ce(t, function(e) {
    if (mp(e))
      return n = Xp(e.length, n), !0;
  }), pi(n, function(e) {
    return Bt(t, ki(e));
  });
}
var vn = of(Up);
const Gp = (t, n, e = 12, r = 12) => {
  const i = rt().domain([0, e]).range([0, t]), o = rt().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return mn((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Ic(Ft(l, function(f) {
        return Ft(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, Yp = "_widget_18g36_1", Kp = "_label_18g36_19", Vp = "_lit_18g36_24", Zp = "_button_18g36_29", Wp = "_symbol_18g36_29", Jp = "_radio_18g36_29", Qp = "_radiobutton_18g36_29", jp = "_selected_18g36_35", td = "_toggle_18g36_35", nd = "_slider_18g36_44", ed = "_track_18g36_44", rd = "_track_overlay_18g36_48", id = "_handle_18g36_55", m = {
  widget: Yp,
  label: Kp,
  lit: Vp,
  button: Zp,
  symbol: Wp,
  radio: Jp,
  radiobutton: Qp,
  selected: jp,
  toggle: td,
  slider: nd,
  track: ed,
  track_overlay: rd,
  handle: id
}, Re = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Fe = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, od = (t = 1) => {
  const n = H();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, ad = (t = 1) => {
  const n = H(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, sd = (t = 1) => {
  const n = H();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, ud = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = H();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, ld = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, fd = (t = 1) => {
  const n = H(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, cd = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, hd = (t = 1) => {
  var n = H(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, pd = (t = 1) => {
  const n = H(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ge = (t) => {
  switch (t) {
    case "play":
      return od;
    case "forward":
      return ad;
    case "back":
      return sd;
    case "pause":
      return ud;
    case "reload":
      return ld;
    case "capture":
      return fd;
    case "rewind":
      return cd;
    case "stop":
      return hd;
    case "push":
      return pd;
  }
}, Le = () => {
  const t = "button";
  var n = Re(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(p) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", ge(c[f])(r * e));
    },
    press: function(p) {
      f = (f + 1) % c.length, l(), p.select("#button_" + n).select("." + m.symbol).attr("d", ge(c[f])(r * e));
    }
  };
}, dd = () => {
  const t = "slider", n = Mn(".3f");
  var e = Re(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(y) {
  }, f = function(y) {
  }, h = [0, 1], d = 0, p = null, _ = rt().domain(h).range([0, r]).clamp(!0);
  const b = function(y, x, M = h) {
    const g = y.select("#slider_" + e);
    _.domain(M), d = x, g.selectAll("." + m.handle).transition().attr("cx", _(x)), a && g.select("." + m.label).text(p + " = " + n(d)), c(), f();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return c = y, this;
      c(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    range: function(y) {
      return typeof y > "u" ? h : (h = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    reset: b,
    click: b
  };
}, gd = () => {
  const t = "toggle";
  var n = Re(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = S(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const d = f.select("#toggle_" + n);
      d.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), d.classed(m.selected, u), s();
    }
  };
}, yd = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", ge(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Fe(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, Fi = (t, n) => {
  const e = H();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, _d = (t, n) => {
  const e = Mn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Fi(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(p) {
    const _ = Jn(p, this)[0];
    t.value(a.invert(_)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Va().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var c, f, h, d = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Ut([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Ut([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Ut([t.girth() / 2, t.knob()]) + 7 : -Ut([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, md = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", Fi(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Fe(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, vd = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = ro(a), u = rt().domain([0, a - 1]).range([0, t.size()]), l = rt().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var d, p;
  t.shape() == "rect" ? (d = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (d = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), d.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), p.attr("class", m.symbol), p.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const _ = Fe(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), c;
}, Yn = (t, n) => {
  switch (t.type) {
    case "button":
      return yd(t);
    case "slider":
      return _d(t);
    case "radio":
      return vd(t);
    case "toggle":
      return md(t);
  }
}, wd = (t, n) => {
  const e = Gp(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = S("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, E = {
  widgets: {
    slider_size: 400,
    slider_girth: 16,
    slider_knob: 14,
    slider_gap: 2,
    slider_anchor: { x: 1, y: 7.5 },
    toggle_anchor: { x: 7, y: 2 },
    toggle_gap: 1.5,
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 }
  },
  simulation: {
    delay: 10
  }
}, T = {
  dt: 0.1,
  N: 50,
  predation: {
    range: [0, 3],
    default: 2
  },
  competition: {
    range: [0, 3],
    default: 1.5
  },
  diffusion: {
    range: [0, 0.1],
    default: 0.05
  },
  show_species_1: {
    default: !0
  },
  show_species_2: {
    default: !0
  },
  show_species_3: {
    default: !0
  }
}, Li = (t) => Ft(Tp(t), (n) => (n[1].id = n[0], n[1].label = qp(lh(n[0]), /_/g, " "), n[1])), Di = (t, n) => Rt(t, (e, r) => e.widget = n[r]), Hi = (t) => Ri(t, (n) => zp(n, "range")), Bi = (t) => Ri(t, (n) => Ip(n.default)), qi = Li(Hi(T)), Xi = Li(Bi(T)), nn = Ft(
  qi,
  (t) => dd().id(t.id).label(t.label).range(t.range).value(t.default).girth(E.widgets.slider_girth).knob(E.widgets.slider_knob).size(E.widgets.slider_size)
), en = Ft(
  Xi,
  (t) => gd().id(t.id).label(t.label).value(t.default).labelposition(E.widgets.toggle_label_pos)
);
Di(Xi, en);
Di(qi, nn);
const et = Le().actions(["play", "pause"]), kn = Le().actions(["back"]), Rn = Le().actions(["rewind"]), bd = [et, kn, Rn], xd = (t, n) => {
  const e = n.position(E.widgets.slider_anchor.x, mn(nn.length).map((i) => E.widgets.slider_anchor.y + E.widgets.slider_gap * i)), r = n.position(E.widgets.toggle_anchor.x, mn(en.length).map((i) => E.widgets.toggle_anchor.y + E.widgets.toggle_gap * i));
  nn.forEach((i, o) => i.position(e[o])), en.forEach((i, o) => i.position(r[o])), et.position(n.position(E.widgets.playbutton_anchor.x, E.widgets.playbutton_anchor.y)).size(E.widgets.playbutton_size), Rn.position(n.position(E.widgets.backbutton_anchor.x, E.widgets.backbutton_anchor.y)), kn.position(n.position(E.widgets.resetbutton_anchor.x, E.widgets.resetbutton_anchor.y)), t.selectAll(null).data(nn).enter().append(Yn), t.selectAll(null).data(en).enter().append(Yn), t.selectAll(null).data(bd).enter().append(Yn);
}, $d = (t) => {
  Rt(Hi(T), (n) => n.widget.reset(t, n.default)), Rt(Bi(T), (n) => n.widget.reset(t, n.default));
};
function Ui(t, n) {
  return [t % n, Math.floor(t / n)];
}
const Md = {
  n4: vn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: vn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Kn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return Md[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = Ui(t, n), l = u[0], c = u[1], f = l + s, h = c + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && f < n && h < n && f >= 0 && h >= 0 : !(a == 0 && s == 0)) && i.push(n * ((h + n) % n) + (f + n) % n);
  }), i;
}
const Td = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = mn(i * i).map(function(h) {
    const d = Ui(h, i);
    return {
      m: d[0],
      n: d[1],
      x: o * (d[0] + 0.5) - e / 2,
      y: a * (d[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(h, d) {
    h.neighbors = Kn(d, i, n, r).map((p) => s[p]), h.cell = () => [
      { x: h.x + o / 2, y: h.y + a / 2 },
      { x: h.x - o / 2, y: h.y + a / 2 },
      { x: h.x - o / 2, y: h.y - a / 2 },
      { x: h.x + o / 2, y: h.y - a / 2 },
      { x: h.x + o / 2, y: h.y + a / 2 }
    ], h.random_interior_point = () => ({
      x: h.x + o * (Math.random() - 0.5),
      y: h.y + a * (Math.random() - 0.5)
    });
  });
  const u = function(h) {
    return typeof h < "u" ? (s.forEach(function(d) {
      d.x = (d.m + 0.5) * h / i - h / 2, d.y = (d.n + 0.5) * h / i - h / 2;
    }), e = h, o = e / i, a = e / i, this.L = e, this) : e;
  }, l = function(h) {
    return typeof h < "u" ? (s.forEach(function(d, p) {
      d.neighbors = Kn(p, i, h, r).map((_) => s[_]);
    }), n = h, s.forEach((d) => {
      d.is_boundary = n == "dirichlet" && (d.n == 0 || d.n == 2 * t || d.m == 0 || d.m == 2 * t);
    }), this) : n;
  }, c = function(h) {
    return typeof h < "u" ? (s.forEach(function(d, p) {
      d.neighbors = Kn(p, i, n, h).map((_) => s[_]);
    }), r = h, this) : r;
  }, f = function() {
    return n === "periodic" ? null : Sp(s, (h) => h.n == 0 || h.n == 2 * t || h.m == 0 || h.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: c,
    nodes: s,
    scale: u,
    boundary: l,
    boundary_cells: f
  };
};
vn([-1, 1, 0, 0], [0, 0, -1, 1]), vn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const Ad = T.N;
T.dt;
var Lt = [];
const Sd = () => {
  T.timer = {}, T.tick = 0, Lt = Td(Ad).boundary("periodic").nodes, Lt.forEach((n) => {
    n.u = Math.random(), n.v = Math.random(), n.w = Math.random();
  });
}, Pd = () => {
  T.tick++;
  const t = T.dt, n = T.predation.widget.value(), e = T.competition.widget.value(), r = T.diffusion.widget.value();
  Rt(Lt, (i) => {
    i.du = t * i.u * (n * (i.v - i.w) + i.u - e * (i.v + i.w) - i.u * i.u) + t * r * Gn(i.neighbors, (o) => o.u - i.u), i.dv = t * i.v * (n * (i.w - i.u) + i.v - e * (i.u + i.w) - i.v * i.v) + t * r * Gn(i.neighbors, (o) => o.v - i.v), i.dw = t * i.w * (n * (i.u - i.v) + i.w - e * (i.u + i.v) - i.w * i.w) + t * r * Gn(i.neighbors, (o) => o.w - i.w);
  }), Rt(Lt, (i) => {
    i.u += i.du, i.v += i.dv, i.w += i.dw, i.u < 0 && (i.u = 0), i.v < 0 && (i.v = 0), i.w < 0 && (i.w = 0);
  });
};
T.N;
const rn = rt().domain([-0.5, 0.5]), on = rt().domain([-0.5, 0.5]);
var an, ye, _e;
const De = (t, n) => {
  an.clearRect(0, 0, ye, _e), Lt.forEach((e) => {
    const r = e.cell(), i = Math.floor(255 * (T.show_species_1.widget.value() ? e.u : 0)), o = Math.floor(255 * (T.show_species_2.widget.value() ? e.v : 0)), a = Math.floor(255 * (T.show_species_3.widget.value() ? e.w : 0));
    an.fillStyle = "rgb(" + i + "," + o + "," + a + ")", an.fillRect(rn(r[2].x), on(r[2].y), rn(r[0].x) - rn(r[2].x), on(r[0].y) - on(r[2].y));
  });
}, Ed = (t, n) => {
  De();
}, Nd = (t, n) => {
  ye = n.display_size.width, _e = n.display_size.height, rn.range([0, ye]), on.range([0, _e]), an = t.node().getContext("2d"), De();
};
function Od(t, n) {
  Pd(), De();
}
function Gi(t, n) {
  Sd(), Nd(t, n);
}
function Vn(t, n) {
  Ed();
}
var Or = {};
const zd = (t, n) => {
  et.value() == 1 ? Or = As(() => Od(), E.simulation.delay) : Or.stop();
}, Cd = (t, n, e) => {
  Rn.update(() => $d(n)), et.update(() => zd()), kn.update(() => Gi(t, e)), T.show_species_1.widget.update(() => Vn()), T.show_species_2.widget.update(() => Vn()), T.show_species_3.widget.update(() => Vn());
}, Id = {
  name: "@explorables/cycledelic",
  title: "Cycledelic",
  subtitle: "The spatial rock-paper-scissors game",
  description: "The explorable illustrates dynamic pattern formation and spiral waves in a cyclic reaction-diffusion system. In the model three species prey on each other in a cyclic way, A eating B, B eating C, and C eating A.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function kd(t, n = Yi) {
  const e = wd(t, n), r = e.display, i = e.controls, o = e.grid;
  return xd(i, o), Cd(r, i, n), Gi(r, n), {
    halt() {
      et.value() === 1 && et.press(i);
    },
    reset() {
      et.value() === 1 && et.press(i), Rn.press(i), kn.press(i);
    },
    config: n,
    meta: Id
  };
}
export {
  Yi as config,
  kd as default,
  kd as load,
  Id as meta
};
