(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_pb0r4_1,._controlPanel_pb0r4_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_pb0r4_1>canvas,._displayPanel_pb0r4_1>svg,._controlPanel_pb0r4_8>svg,._controlPanel_pb0r4_8>canvas{display:block;box-sizing:border-box}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Os = {
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
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Gn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function zs(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Aa(t) {
  let n, e, r;
  t.length !== 2 ? (n = Gn, e = (u, l) => Gn(t(u), l), r = (u, l) => t(u) - l) : (n = t === Gn || t === zs ? t : Cs, e = t, r = t);
  function i(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) < 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function o(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) <= 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function a(u, l, s = 0, c = u.length) {
    const h = i(u, l, s, c - 1);
    return h > s && r(u[h - 1], l) > -r(u[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Cs() {
  return 0;
}
function Is(t) {
  return t === null ? NaN : +t;
}
const Rs = Aa(Gn), js = Rs.right;
Aa(Is).center;
const Fs = Math.sqrt(50), Ds = Math.sqrt(10), Ls = Math.sqrt(2);
function ae(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Fs ? 10 : o >= Ds ? 5 : o >= Ls ? 2 : 1;
  let u, l, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), l = Math.round(n * s), u / s < t && ++u, l / s > n && --l, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), l = Math.round(n / s), u * s < t && ++u, l * s > n && --l), l < u && 0.5 <= e && e < 2 ? ae(t, n, e * 2) : [u, l, s];
}
function qs(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? ae(n, t, e) : ae(t, n, e);
  if (!(o >= i)) return [];
  const u = o - i + 1, l = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) l[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) l[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * a;
  return l;
}
function vr(t, n, e) {
  return n = +n, t = +t, e = +e, ae(t, n, e)[2];
}
function Bs(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? vr(n, t, e) : vr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Xs = { value: () => {
} };
function $a() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Vn(e);
}
function Vn(t) {
  this._ = t;
}
function Hs(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Vn.prototype = $a.prototype = {
  constructor: Vn,
  on: function(t, n) {
    var e = this._, r = Hs(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Us(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Di(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Di(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Vn(t);
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
function Us(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Di(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Xs, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var mr = "http://www.w3.org/1999/xhtml";
const Li = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: mr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ee(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Li.hasOwnProperty(n) ? { space: Li[n], local: t } : t;
}
function Ys(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === mr && n.documentElement.namespaceURI === mr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Gs(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Na(t) {
  var n = Ee(t);
  return (n.local ? Gs : Ys)(n);
}
function Vs() {
}
function ti(t) {
  return t == null ? Vs : function() {
    return this.querySelector(t);
  };
}
function Ks(t) {
  typeof t != "function" && (t = ti(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), l, s, c = 0; c < a; ++c)
      (l = o[c]) && (s = t.call(l, l.__data__, c, o)) && ("__data__" in l && (s.__data__ = l.__data__), u[c] = s);
  return new D(r, this._parents);
}
function Ws(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Zs() {
  return [];
}
function Ta(t) {
  return t == null ? Zs : function() {
    return this.querySelectorAll(t);
  };
}
function Js(t) {
  return function() {
    return Ws(t.apply(this, arguments));
  };
}
function Qs(t) {
  typeof t == "function" ? t = Js(t) : t = Ta(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && (r.push(t.call(l, l.__data__, s, a)), i.push(l));
  return new D(r, i);
}
function Sa(t) {
  return function() {
    return this.matches(t);
  };
}
function Ea(t) {
  return function(n) {
    return n.matches(t);
  };
}
var tl = Array.prototype.find;
function nl(t) {
  return function() {
    return tl.call(this.children, t);
  };
}
function el() {
  return this.firstElementChild;
}
function rl(t) {
  return this.select(t == null ? el : nl(typeof t == "function" ? t : Ea(t)));
}
var il = Array.prototype.filter;
function ol() {
  return Array.from(this.children);
}
function al(t) {
  return function() {
    return il.call(this.children, t);
  };
}
function ul(t) {
  return this.selectAll(t == null ? ol : al(typeof t == "function" ? t : Ea(t)));
}
function sl(t) {
  typeof t != "function" && (t = Sa(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new D(r, this._parents);
}
function ka(t) {
  return new Array(t.length);
}
function ll() {
  return new D(this._enter || this._groups.map(ka), this._parents);
}
function ue(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ue.prototype = {
  constructor: ue,
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
function cl(t) {
  return function() {
    return t;
  };
}
function fl(t, n, e, r, i, o) {
  for (var a = 0, u, l = n.length, s = o.length; a < s; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new ue(t, o[a]);
  for (; a < l; ++a)
    (u = n[a]) && (i[a] = u);
}
function hl(t, n, e, r, i, o, a) {
  var u, l, s = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (u = 0; u < c; ++u)
    (l = n[u]) && (f[u] = p = a.call(l, l.__data__, u, n) + "", s.has(p) ? i[u] = l : s.set(p, l));
  for (u = 0; u < h; ++u)
    p = a.call(t, o[u], u, o) + "", (l = s.get(p)) ? (r[u] = l, l.__data__ = o[u], s.delete(p)) : e[u] = new ue(t, o[u]);
  for (u = 0; u < c; ++u)
    (l = n[u]) && s.get(f[u]) === l && (i[u] = l);
}
function pl(t) {
  return t.__data__;
}
function dl(t, n) {
  if (!arguments.length) return Array.from(this, pl);
  var e = n ? hl : fl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = cl(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), l = new Array(o), s = 0; s < o; ++s) {
    var c = r[s], h = i[s], f = h.length, p = gl(t.call(c, c && c.__data__, s, r)), g = p.length, _ = u[s] = new Array(g), w = a[s] = new Array(g), b = l[s] = new Array(f);
    e(c, h, _, w, b, p, n);
    for (var d = 0, M = 0, y, m; d < g; ++d)
      if (y = _[d]) {
        for (d >= M && (M = d + 1); !(m = w[M]) && ++M < g; ) ;
        y._next = m || null;
      }
  }
  return a = new D(a, r), a._enter = u, a._exit = l, a;
}
function gl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function yl() {
  return new D(this._exit || this._groups.map(ka), this._parents);
}
function _l(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function vl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), l = 0; l < a; ++l)
    for (var s = e[l], c = r[l], h = s.length, f = u[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = s[g] || c[g]) && (f[g] = p);
  for (; l < i; ++l)
    u[l] = e[l];
  return new D(u, this._parents);
}
function ml() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function wl(t) {
  t || (t = bl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, l = i[o] = new Array(u), s, c = 0; c < u; ++c)
      (s = a[c]) && (l[c] = s);
    l.sort(n);
  }
  return new D(i, this._parents).order();
}
function bl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function xl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ml() {
  return Array.from(this);
}
function Al() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function $l() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Nl() {
  return !this.node();
}
function Tl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function Sl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function El(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function kl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Pl(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Ol(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function zl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Cl(t, n) {
  var e = Ee(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? El : Sl : typeof n == "function" ? e.local ? zl : Ol : e.local ? Pl : kl)(e, n));
}
function Pa(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Il(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Rl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function jl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Fl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Il : typeof n == "function" ? jl : Rl)(t, n, e ?? "")) : Ht(this.node(), t);
}
function Ht(t, n) {
  return t.style.getPropertyValue(n) || Pa(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Dl(t) {
  return function() {
    delete this[t];
  };
}
function Ll(t, n) {
  return function() {
    this[t] = n;
  };
}
function ql(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Bl(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Dl : typeof n == "function" ? ql : Ll)(t, n)) : this.node()[t];
}
function Oa(t) {
  return t.trim().split(/^|\s+/);
}
function ni(t) {
  return t.classList || new za(t);
}
function za(t) {
  this._node = t, this._names = Oa(t.getAttribute("class") || "");
}
za.prototype = {
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
function Ca(t, n) {
  for (var e = ni(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ia(t, n) {
  for (var e = ni(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Xl(t) {
  return function() {
    Ca(this, t);
  };
}
function Hl(t) {
  return function() {
    Ia(this, t);
  };
}
function Ul(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ca : Ia)(this, t);
  };
}
function Yl(t, n) {
  var e = Oa(t + "");
  if (arguments.length < 2) {
    for (var r = ni(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ul : n ? Xl : Hl)(e, n));
}
function Gl() {
  this.textContent = "";
}
function Vl(t) {
  return function() {
    this.textContent = t;
  };
}
function Kl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Wl(t) {
  return arguments.length ? this.each(t == null ? Gl : (typeof t == "function" ? Kl : Vl)(t)) : this.node().textContent;
}
function Zl() {
  this.innerHTML = "";
}
function Jl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ql(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function tc(t) {
  return arguments.length ? this.each(t == null ? Zl : (typeof t == "function" ? Ql : Jl)(t)) : this.node().innerHTML;
}
function nc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ec() {
  return this.each(nc);
}
function rc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ic() {
  return this.each(rc);
}
function oc(t) {
  var n = typeof t == "function" ? t : Na(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function ac() {
  return null;
}
function uc(t, n) {
  var e = typeof t == "function" ? t : Na(t), r = n == null ? ac : typeof n == "function" ? n : ti(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function sc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function lc() {
  return this.each(sc);
}
function cc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function fc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hc(t) {
  return this.select(t ? fc : cc);
}
function pc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function dc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function gc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function yc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function _c(t, n, e) {
  return function() {
    var r = this.__on, i, o = dc(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function vc(t, n, e) {
  var r = gc(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var l = 0, s = u.length, c; l < s; ++l)
        for (i = 0, c = u[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? _c : yc, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function Ra(t, n, e) {
  var r = Pa(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function mc(t, n) {
  return function() {
    return Ra(this, t, n);
  };
}
function wc(t, n) {
  return function() {
    return Ra(this, t, n.apply(this, arguments));
  };
}
function bc(t, n) {
  return this.each((typeof n == "function" ? wc : mc)(t, n));
}
function* xc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ja = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function En() {
  return new D([[document.documentElement]], ja);
}
function Mc() {
  return this;
}
D.prototype = En.prototype = {
  constructor: D,
  select: Ks,
  selectAll: Qs,
  selectChild: rl,
  selectChildren: ul,
  filter: sl,
  data: dl,
  enter: ll,
  exit: yl,
  join: _l,
  merge: vl,
  selection: Mc,
  order: ml,
  sort: wl,
  call: xl,
  nodes: Ml,
  node: Al,
  size: $l,
  empty: Nl,
  each: Tl,
  attr: Cl,
  style: Fl,
  property: Bl,
  classed: Yl,
  text: Wl,
  html: tc,
  raise: ec,
  lower: ic,
  append: oc,
  insert: uc,
  remove: lc,
  clone: hc,
  datum: pc,
  on: vc,
  dispatch: bc,
  [Symbol.iterator]: xc
};
function Ac(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], ja);
}
function ei(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Fa(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function kn() {
}
var gn = 0.7, se = 1 / gn, qt = "\\s*([+-]?\\d+)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $c = /^#([0-9a-f]{3,8})$/, Nc = new RegExp(`^rgb\\(${qt},${qt},${qt}\\)$`), Tc = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`), Sc = new RegExp(`^rgba\\(${qt},${qt},${qt},${yn}\\)$`), Ec = new RegExp(`^rgba\\(${tt},${tt},${tt},${yn}\\)$`), kc = new RegExp(`^hsl\\(${yn},${tt},${tt}\\)$`), Pc = new RegExp(`^hsla\\(${yn},${tt},${tt},${yn}\\)$`), qi = {
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
ei(kn, Et, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bi,
  // Deprecated! Use color.formatHex.
  formatHex: Bi,
  formatHex8: Oc,
  formatHsl: zc,
  formatRgb: Xi,
  toString: Xi
});
function Bi() {
  return this.rgb().formatHex();
}
function Oc() {
  return this.rgb().formatHex8();
}
function zc() {
  return Da(this).formatHsl();
}
function Xi() {
  return this.rgb().formatRgb();
}
function Et(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = $c.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Hi(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? In(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? In(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Nc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Tc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Sc.exec(t)) ? In(n[1], n[2], n[3], n[4]) : (n = Ec.exec(t)) ? In(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = kc.exec(t)) ? Gi(n[1], n[2] / 100, n[3] / 100, 1) : (n = Pc.exec(t)) ? Gi(n[1], n[2] / 100, n[3] / 100, n[4]) : qi.hasOwnProperty(t) ? Hi(qi[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Hi(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function In(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function Cc(t) {
  return t instanceof kn || (t = Et(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function wr(t, n, e, r) {
  return arguments.length === 1 ? Cc(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ei(R, wr, Fa(kn, {
  brighter(t) {
    return t = t == null ? se : Math.pow(se, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gn : Math.pow(gn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(Tt(this.r), Tt(this.g), Tt(this.b), le(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ui,
  // Deprecated! Use color.formatHex.
  formatHex: Ui,
  formatHex8: Ic,
  formatRgb: Yi,
  toString: Yi
}));
function Ui() {
  return `#${$t(this.r)}${$t(this.g)}${$t(this.b)}`;
}
function Ic() {
  return `#${$t(this.r)}${$t(this.g)}${$t(this.b)}${$t((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Yi() {
  const t = le(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Tt(this.r)}, ${Tt(this.g)}, ${Tt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function le(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Tt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function $t(t) {
  return t = Tt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Gi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new V(t, n, e, r);
}
function Da(t) {
  if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof kn || (t = Et(t)), !t) return new V();
  if (t instanceof V) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, l = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : u = l > 0 && l < 1 ? 0 : a, new V(a, u, l, t.opacity);
}
function Rc(t, n, e, r) {
  return arguments.length === 1 ? Da(t) : new V(t, n, e, r ?? 1);
}
function V(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ei(V, Rc, Fa(kn, {
  brighter(t) {
    return t = t == null ? se : Math.pow(se, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gn : Math.pow(gn, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      nr(t >= 240 ? t - 240 : t + 120, i, r),
      nr(t, i, r),
      nr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(Vi(this.h), Rn(this.s), Rn(this.l), le(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = le(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Vi(this.h)}, ${Rn(this.s) * 100}%, ${Rn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Vi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Rn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function nr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ri = (t) => () => t;
function jc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Fc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Dc(t) {
  return (t = +t) == 1 ? La : function(n, e) {
    return e - n ? Fc(n, e, t) : ri(isNaN(n) ? e : n);
  };
}
function La(t, n) {
  var e = n - t;
  return e ? jc(t, e) : ri(isNaN(t) ? n : t);
}
const ce = function t(n) {
  var e = Dc(n);
  function r(i, o) {
    var a = e((i = wr(i)).r, (o = wr(o)).r), u = e(i.g, o.g), l = e(i.b, o.b), s = La(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = u(c), i.b = l(c), i.opacity = s(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Lc(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function qc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Bc(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ii(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Xc(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function Y(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Hc(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ii(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var br = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, er = new RegExp(br.source, "g");
function Uc(t) {
  return function() {
    return t;
  };
}
function Yc(t) {
  return function(n) {
    return t(n) + "";
  };
}
function qa(t, n) {
  var e = br.lastIndex = er.lastIndex = 0, r, i, o, a = -1, u = [], l = [];
  for (t = t + "", n = n + ""; (r = br.exec(t)) && (i = er.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, l.push({ i: a, x: Y(r, i) })), e = er.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? l[0] ? Yc(l[0].x) : Uc(n) : (n = l.length, function(s) {
    for (var c = 0, h; c < n; ++c) u[(h = l[c]).i] = h.x(s);
    return u.join("");
  });
}
function ii(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ri(n) : (e === "number" ? Y : e === "string" ? (r = Et(n)) ? (n = r, ce) : qa : n instanceof Et ? ce : n instanceof Date ? Xc : qc(n) ? Lc : Array.isArray(n) ? Bc : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Hc : Y)(t, n);
}
function Gc(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ki = 180 / Math.PI, xr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ba(t, n, e, r, i, o) {
  var a, u, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, l /= u), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ki,
    skewX: Math.atan(l) * Ki,
    scaleX: a,
    scaleY: u
  };
}
var jn;
function Vc(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? xr : Ba(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Kc(t) {
  return t == null || (jn || (jn = document.createElementNS("http://www.w3.org/2000/svg", "g")), jn.setAttribute("transform", t), !(t = jn.transform.baseVal.consolidate())) ? xr : (t = t.matrix, Ba(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Xa(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, c, h, f, p, g) {
    if (s !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      g.push({ i: _ - 4, x: Y(s, h) }, { i: _ - 2, x: Y(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(s, c, h, f) {
    s !== c ? (s - c > 180 ? c += 360 : c - s > 180 && (s += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Y(s, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function u(s, c, h, f) {
    s !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Y(s, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(s, c, h, f, p, g) {
    if (s !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: Y(s, h) }, { i: _ - 2, x: Y(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(s, c) {
    var h = [], f = [];
    return s = t(s), c = t(c), o(s.translateX, s.translateY, c.translateX, c.translateY, h, f), a(s.rotate, c.rotate, h, f), u(s.skewX, c.skewX, h, f), l(s.scaleX, s.scaleY, c.scaleX, c.scaleY, h, f), s = c = null, function(p) {
      for (var g = -1, _ = f.length, w; ++g < _; ) h[(w = f[g]).i] = w.x(p);
      return h.join("");
    };
  };
}
var Wc = Xa(Vc, "px, ", "px)", "deg)"), Zc = Xa(Kc, ", ", ")", ")"), Ut = 0, un = 0, en = 0, Ha = 1e3, fe, sn, he = 0, kt = 0, ke = 0, _n = typeof performance == "object" && performance.now ? performance : Date, Ua = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pe() {
  return kt || (Ua(Jc), kt = _n.now() + ke);
}
function Jc() {
  kt = 0;
}
function vn() {
  this._call = this._time = this._next = null;
}
vn.prototype = Ya.prototype = {
  constructor: vn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Pe() : +e) + (n == null ? 0 : +n), !this._next && sn !== this && (sn ? sn._next = this : fe = this, sn = this), this._call = t, this._time = e, Mr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Mr());
  }
};
function Ya(t, n, e) {
  var r = new vn();
  return r.restart(t, n, e), r;
}
function Qc() {
  Pe(), ++Ut;
  for (var t = fe, n; t; )
    (n = kt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ut;
}
function Wi() {
  kt = (he = _n.now()) + ke, Ut = un = 0;
  try {
    Qc();
  } finally {
    Ut = 0, nf(), kt = 0;
  }
}
function tf() {
  var t = _n.now(), n = t - he;
  n > Ha && (ke -= n, he = t);
}
function nf() {
  for (var t, n = fe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : fe = e);
  sn = t, Mr(r);
}
function Mr(t) {
  if (!Ut) {
    un && (un = clearTimeout(un));
    var n = t - kt;
    n > 24 ? (t < 1 / 0 && (un = setTimeout(Wi, t - _n.now() - ke)), en && (en = clearInterval(en))) : (en || (he = _n.now(), en = setInterval(tf, Ha)), Ut = 1, Ua(Wi));
  }
}
function Zi(t, n, e) {
  var r = new vn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function ef(t, n, e) {
  var r = new vn(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, u) {
    a = +a, u = u == null ? Pe() : +u, r._restart(function l(s) {
      s += i, r._restart(l, i += a, u), o(s);
    }, a, u);
  }, r.restart(t, n, e), r;
}
var rf = $a("start", "end", "cancel", "interrupt"), of = [], Ga = 0, Ji = 1, Ar = 2, Kn = 3, Qi = 4, $r = 5, Wn = 6;
function Oe(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  af(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: rf,
    tween: of,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ga
  });
}
function oi(t, n) {
  var e = Z(t, n);
  if (e.state > Ga) throw new Error("too late; already scheduled");
  return e;
}
function rt(t, n) {
  var e = Z(t, n);
  if (e.state > Kn) throw new Error("too late; already running");
  return e;
}
function Z(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function af(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ya(o, 0, e.time);
  function o(s) {
    e.state = Ji, e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
  }
  function a(s) {
    var c, h, f, p;
    if (e.state !== Ji) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === Kn) return Zi(a);
        p.state === Qi ? (p.state = Wn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = Wn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Zi(function() {
      e.state === Kn && (e.state = Qi, e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = Ar, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ar) {
      for (e.state = Kn, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function u(s) {
    for (var c = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(l), e.state = $r, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === $r && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = Wn, e.timer.stop(), delete r[n];
    for (var s in r) return;
    delete t.__transition;
  }
}
function uf(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Ar && r.state < $r, r.state = Wn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function sf(t) {
  return this.each(function() {
    uf(this, t);
  });
}
function lf(t, n) {
  var e, r;
  return function() {
    var i = rt(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function cf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = rt(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, l = 0, s = i.length; l < s; ++l)
        if (i[l].name === n) {
          i[l] = u;
          break;
        }
      l === s && i.push(u);
    }
    o.tween = i;
  };
}
function ff(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? lf : cf)(e, t, n));
}
function ai(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = rt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[n];
  };
}
function Va(t, n) {
  var e;
  return (typeof n == "number" ? Y : n instanceof Et ? ce : (e = Et(n)) ? (n = e, ce) : qa)(t, n);
}
function hf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function pf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function df(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function gf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function yf(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function _f(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function vf(t, n) {
  var e = Ee(t), r = e === "transform" ? Zc : Va;
  return this.attrTween(t, typeof n == "function" ? (e.local ? _f : yf)(e, r, ai(this, "attr." + t, n)) : n == null ? (e.local ? pf : hf)(e) : (e.local ? gf : df)(e, r, n));
}
function mf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function wf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function bf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && wf(t, o)), e;
  }
  return i._value = n, i;
}
function xf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && mf(t, o)), e;
  }
  return i._value = n, i;
}
function Mf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ee(t);
  return this.tween(e, (r.local ? bf : xf)(r, n));
}
function Af(t, n) {
  return function() {
    oi(this, t).delay = +n.apply(this, arguments);
  };
}
function $f(t, n) {
  return n = +n, function() {
    oi(this, t).delay = n;
  };
}
function Nf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Af : $f)(n, t)) : Z(this.node(), n).delay;
}
function Tf(t, n) {
  return function() {
    rt(this, t).duration = +n.apply(this, arguments);
  };
}
function Sf(t, n) {
  return n = +n, function() {
    rt(this, t).duration = n;
  };
}
function Ef(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Tf : Sf)(n, t)) : Z(this.node(), n).duration;
}
function kf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    rt(this, t).ease = n;
  };
}
function Pf(t) {
  var n = this._id;
  return arguments.length ? this.each(kf(n, t)) : Z(this.node(), n).ease;
}
function Of(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    rt(this, t).ease = e;
  };
}
function zf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Of(this._id, t));
}
function Cf(t) {
  typeof t != "function" && (t = Sa(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new ct(r, this._parents, this._name, this._id);
}
function If(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var l = n[u], s = e[u], c = l.length, h = a[u] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || s[p]) && (h[p] = f);
  for (; u < r; ++u)
    a[u] = n[u];
  return new ct(a, this._parents, this._name, this._id);
}
function Rf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function jf(t, n, e) {
  var r, i, o = Rf(n) ? oi : rt;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function Ff(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Z(this.node(), e).on.on(t) : this.each(jf(e, t, n));
}
function Df(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Lf() {
  return this.on("end.remove", Df(this._id));
}
function qf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ti(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, s = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = u[f]) && (h = t.call(c, c.__data__, f, u)) && ("__data__" in c && (h.__data__ = c.__data__), s[f] = h, Oe(s[f], n, e, f, s, Z(c, e)));
  return new ct(o, this._parents, n, e);
}
function Bf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ta(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var l = r[u], s = l.length, c, h = 0; h < s; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, g = Z(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Oe(p, n, e, _, f, g);
        o.push(f), a.push(c);
      }
  return new ct(o, a, n, e);
}
var Xf = En.prototype.constructor;
function Hf() {
  return new Xf(this._groups, this._parents);
}
function Uf(t, n) {
  var e, r, i;
  return function() {
    var o = Ht(this, t), a = (this.style.removeProperty(t), Ht(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ka(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Ht(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Gf(t, n, e) {
  var r, i, o;
  return function() {
    var a = Ht(this, t), u = e(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), Ht(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u));
  };
}
function Vf(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var l = rt(this, t), s = l.on, c = l.value[o] == null ? u || (u = Ka(n)) : void 0;
    (s !== e || i !== c) && (r = (e = s).copy()).on(a, i = c), l.on = r;
  };
}
function Kf(t, n, e) {
  var r = (t += "") == "transform" ? Wc : Va;
  return n == null ? this.styleTween(t, Uf(t, r)).on("end.style." + t, Ka(t)) : typeof n == "function" ? this.styleTween(t, Gf(t, r, ai(this, "style." + t, n))).each(Vf(this._id, t)) : this.styleTween(t, Yf(t, r, n), e).on("end.style." + t, null);
}
function Wf(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Zf(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Wf(t, a, e)), r;
  }
  return o._value = n, o;
}
function Jf(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Zf(t, n, e ?? ""));
}
function Qf(t) {
  return function() {
    this.textContent = t;
  };
}
function th(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function nh(t) {
  return this.tween("text", typeof t == "function" ? th(ai(this, "text", t)) : Qf(t == null ? "" : t + ""));
}
function eh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function rh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && eh(i)), n;
  }
  return r._value = t, r;
}
function ih(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, rh(t));
}
function oh() {
  for (var t = this._name, n = this._id, e = Wa(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      if (l = a[s]) {
        var c = Z(l, n);
        Oe(l, t, e, s, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ct(r, this._parents, t, e);
}
function ah() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = rt(this, r), c = s.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(l)), s.on = n;
    }), i === 0 && o();
  });
}
var uh = 0;
function ct(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Wa() {
  return ++uh;
}
var ot = En.prototype;
ct.prototype = {
  constructor: ct,
  select: qf,
  selectAll: Bf,
  selectChild: ot.selectChild,
  selectChildren: ot.selectChildren,
  filter: Cf,
  merge: If,
  selection: Hf,
  transition: oh,
  call: ot.call,
  nodes: ot.nodes,
  node: ot.node,
  size: ot.size,
  empty: ot.empty,
  each: ot.each,
  on: Ff,
  attr: vf,
  attrTween: Mf,
  style: Kf,
  styleTween: Jf,
  text: nh,
  textTween: ih,
  remove: Lf,
  tween: ff,
  delay: Nf,
  duration: Ef,
  ease: Pf,
  easeVarying: zf,
  end: ah,
  [Symbol.iterator]: ot[Symbol.iterator]
};
function sh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var lh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: sh
};
function ch(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function fh(t) {
  var n, e;
  t instanceof ct ? (n = t._id, t = t._name) : (n = Wa(), (e = lh).time = Pe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && Oe(l, t, n, s, a, e || ch(l, n));
  return new ct(r, this._parents, t, n);
}
En.prototype.interrupt = sf;
En.prototype.transition = fh;
function hh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function pe(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Yt(t) {
  return t = pe(Math.abs(t)), t ? t[1] : NaN;
}
function ph(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], l = 0; i > 0 && u > 0 && (l + u + 1 > r && (u = Math.max(1, r - l)), o.push(e.substring(i -= u, i + u)), !((l += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function dh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var gh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function de(t) {
  if (!(n = gh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ui({
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
de.prototype = ui.prototype;
function ui(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ui.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function yh(t) {
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
var Za;
function _h(t, n) {
  var e = pe(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Za = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + pe(t, Math.max(0, n + o - 1))[0];
}
function to(t, n) {
  var e = pe(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const no = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: hh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => to(t * 100, n),
  r: to,
  s: _h,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function eo(t) {
  return t;
}
var ro = Array.prototype.map, io = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? eo : ph(ro.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? eo : dh(ro.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(h) {
    h = de(h);
    var f = h.fill, p = h.align, g = h.sign, _ = h.symbol, w = h.zero, b = h.width, d = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (d = !0, m = "g") : no[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var T = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", S = _ === "$" ? r : /[%p]/.test(m) ? a : "", P = no[m], q = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function B(v) {
      var O = T, A = S, z, Mt, F;
      if (m === "c")
        A = P(v) + A, v = "";
      else {
        v = +v;
        var X = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : P(Math.abs(v), M), y && (v = yh(v)), X && +v == 0 && g !== "+" && (X = !1), O = (X ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + O, A = (m === "s" ? io[8 + Za / 3] : "") + A + (X && g === "(" ? ")" : ""), q) {
          for (z = -1, Mt = v.length; ++z < Mt; )
            if (F = v.charCodeAt(z), 48 > F || F > 57) {
              A = (F === 46 ? i + v.slice(z + 1) : v.slice(z)) + A, v = v.slice(0, z);
              break;
            }
        }
      }
      d && !w && (v = n(v, 1 / 0));
      var U = O.length + v.length + A.length, E = U < b ? new Array(b - U + 1).join(f) : "";
      switch (d && w && (v = n(E + v, E.length ? b - A.length : 1 / 0), E = ""), p) {
        case "<":
          v = O + v + A + E;
          break;
        case "=":
          v = O + E + v + A;
          break;
        case "^":
          v = E.slice(0, U = E.length >> 1) + O + v + A + E.slice(U);
          break;
        default:
          v = E + O + v + A;
          break;
      }
      return o(v);
    }
    return B.toString = function() {
      return h + "";
    }, B;
  }
  function c(h, f) {
    var p = s((h = de(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(Yt(f) / 3))) * 3, _ = Math.pow(10, -g), w = io[8 + g / 3];
    return function(b) {
      return p(_ * b) + w;
    };
  }
  return {
    format: s,
    formatPrefix: c
  };
}
var Fn, Ja, Qa;
mh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function mh(t) {
  return Fn = vh(t), Ja = Fn.format, Qa = Fn.formatPrefix, Fn;
}
function wh(t) {
  return Math.max(0, -Yt(Math.abs(t)));
}
function bh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Yt(n) / 3))) * 3 - Yt(Math.abs(t)));
}
function xh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Yt(n) - Yt(t)) + 1;
}
function Mh(t, n) {
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
function Ah(t) {
  return function() {
    return t;
  };
}
function $h(t) {
  return +t;
}
var oo = [0, 1];
function Dt(t) {
  return t;
}
function Nr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ah(isNaN(n) ? NaN : 0.5);
}
function Nh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Th(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Nr(i, r), o = e(a, o)) : (r = Nr(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function Sh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Nr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var l = js(t, u, 1, r) - 1;
    return o[l](i[l](u));
  };
}
function Eh(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function kh() {
  var t = oo, n = oo, e = ii, r, i, o, a = Dt, u, l, s;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Dt && (a = Nh(t[0], t[f - 1])), u = f > 2 ? Sh : Th, l = s = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = u(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((s || (s = u(n, t.map(r), Y)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, $h), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = Gc, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Dt, c()) : a !== Dt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Ph() {
  return kh()(Dt, Dt);
}
function Oh(t, n, e, r) {
  var i = Bs(t, n, e), o;
  switch (r = de(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = bh(i, a)) && (r.precision = o), Qa(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = xh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = wh(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ja(r);
}
function zh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return qs(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Oh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], l, s, c = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); c-- > 0; ) {
      if (s = vr(a, u, e), s === l)
        return r[i] = a, r[o] = u, n(r);
      if (s > 0)
        a = Math.floor(a / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      l = s;
    }
    return t;
  }, t;
}
function si() {
  var t = Ph();
  return t.copy = function() {
    return Eh(t, si());
  }, Mh.apply(t, arguments), zh(t);
}
function ln(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
ln.prototype = {
  constructor: ln,
  scale: function(t) {
    return t === 1 ? this : new ln(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new ln(this.k, this.x + this.k * t, this.y + this.k * n);
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
ln.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;font-size:var(--d3w-font-size, 16px);line-height:var(--d3w-line-height, 1.25);font-family:var(--d3w-font-family, system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);font-weight:var(--d3w-font-weight, 400)}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1279t_47{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_1279t_47 ._title_1279t_59{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1279t_47 ._label_1279t_67{fill:var(--color-text);stroke:none}._widget_1279t_47 ._lit_1279t_72{fill:var(--color-lit)}._button_1279t_76>._symbol_1279t_76,._radio_1279t_77>._radiobutton_1279t_77>._symbol_1279t_76{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83,._toggle_1279t_84._selected_1279t_83,._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83._lit_1279t_72{fill:var(--color-selected)}._widget_1279t_47 ._symbol_1279t_76._lit_1279t_72{fill:var(--color-lit-symbol)}._slider_1279t_93>._track_1279t_93,._toggle_1279t_84>._track_1279t_93{pointer-events:none}._slider_1279t_93>._track_overlay_1279t_98,._toggle_1279t_84>._track_overlay_1279t_98{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1279t_93>._handle_1279t_106,._toggle_1279t_84>._handle_1279t_106{fill:var(--color-handle)}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function Zn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ch(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function tu(t) {
  let n, e, r;
  t.length !== 2 ? (n = Zn, e = (u, l) => Zn(t(u), l), r = (u, l) => t(u) - l) : (n = t === Zn || t === Ch ? t : Ih, e = t, r = t);
  function i(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) < 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function o(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) <= 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function a(u, l, s = 0, c = u.length) {
    const h = i(u, l, s, c - 1);
    return h > s && r(u[h - 1], l) > -r(u[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Ih() {
  return 0;
}
function Rh(t) {
  return t === null ? NaN : +t;
}
const jh = tu(Zn), Fh = jh.right;
tu(Rh).center;
const Dh = Math.sqrt(50), Lh = Math.sqrt(10), qh = Math.sqrt(2);
function ge(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Dh ? 10 : o >= Lh ? 5 : o >= qh ? 2 : 1;
  let u, l, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), l = Math.round(n * s), u / s < t && ++u, l / s > n && --l, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), l = Math.round(n / s), u * s < t && ++u, l * s > n && --l), l < u && 0.5 <= e && e < 2 ? ge(t, n, e * 2) : [u, l, s];
}
function Bh(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? ge(n, t, e) : ge(t, n, e);
  if (!(o >= i)) return [];
  const u = o - i + 1, l = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) l[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) l[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * a;
  return l;
}
function Tr(t, n, e) {
  return n = +n, t = +t, e = +e, ge(t, n, e)[2];
}
function Xh(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Tr(n, t, e) : Tr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Dn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Hh(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Uh = { value: () => {
} };
function li() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Jn(e);
}
function Jn(t) {
  this._ = t;
}
function Yh(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Jn.prototype = li.prototype = {
  constructor: Jn,
  on: function(t, n) {
    var e = this._, r = Yh(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Gh(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ao(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ao(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Jn(t);
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
function Gh(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ao(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Uh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Sr = "http://www.w3.org/1999/xhtml";
const uo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Sr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ze(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), uo.hasOwnProperty(n) ? { space: uo[n], local: t } : t;
}
function Vh(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Sr && n.documentElement.namespaceURI === Sr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Kh(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function nu(t) {
  var n = ze(t);
  return (n.local ? Kh : Vh)(n);
}
function Wh() {
}
function ci(t) {
  return t == null ? Wh : function() {
    return this.querySelector(t);
  };
}
function Zh(t) {
  typeof t != "function" && (t = ci(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), l, s, c = 0; c < a; ++c)
      (l = o[c]) && (s = t.call(l, l.__data__, c, o)) && ("__data__" in l && (s.__data__ = l.__data__), u[c] = s);
  return new L(r, this._parents);
}
function Jh(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Qh() {
  return [];
}
function eu(t) {
  return t == null ? Qh : function() {
    return this.querySelectorAll(t);
  };
}
function tp(t) {
  return function() {
    return Jh(t.apply(this, arguments));
  };
}
function np(t) {
  typeof t == "function" ? t = tp(t) : t = eu(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && (r.push(t.call(l, l.__data__, s, a)), i.push(l));
  return new L(r, i);
}
function ru(t) {
  return function() {
    return this.matches(t);
  };
}
function iu(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ep = Array.prototype.find;
function rp(t) {
  return function() {
    return ep.call(this.children, t);
  };
}
function ip() {
  return this.firstElementChild;
}
function op(t) {
  return this.select(t == null ? ip : rp(typeof t == "function" ? t : iu(t)));
}
var ap = Array.prototype.filter;
function up() {
  return Array.from(this.children);
}
function sp(t) {
  return function() {
    return ap.call(this.children, t);
  };
}
function lp(t) {
  return this.selectAll(t == null ? up : sp(typeof t == "function" ? t : iu(t)));
}
function cp(t) {
  typeof t != "function" && (t = ru(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new L(r, this._parents);
}
function ou(t) {
  return new Array(t.length);
}
function fp() {
  return new L(this._enter || this._groups.map(ou), this._parents);
}
function ye(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ye.prototype = {
  constructor: ye,
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
function hp(t) {
  return function() {
    return t;
  };
}
function pp(t, n, e, r, i, o) {
  for (var a = 0, u, l = n.length, s = o.length; a < s; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new ye(t, o[a]);
  for (; a < l; ++a)
    (u = n[a]) && (i[a] = u);
}
function dp(t, n, e, r, i, o, a) {
  var u, l, s = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (u = 0; u < c; ++u)
    (l = n[u]) && (f[u] = p = a.call(l, l.__data__, u, n) + "", s.has(p) ? i[u] = l : s.set(p, l));
  for (u = 0; u < h; ++u)
    p = a.call(t, o[u], u, o) + "", (l = s.get(p)) ? (r[u] = l, l.__data__ = o[u], s.delete(p)) : e[u] = new ye(t, o[u]);
  for (u = 0; u < c; ++u)
    (l = n[u]) && s.get(f[u]) === l && (i[u] = l);
}
function gp(t) {
  return t.__data__;
}
function yp(t, n) {
  if (!arguments.length) return Array.from(this, gp);
  var e = n ? dp : pp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = hp(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), l = new Array(o), s = 0; s < o; ++s) {
    var c = r[s], h = i[s], f = h.length, p = _p(t.call(c, c && c.__data__, s, r)), g = p.length, _ = u[s] = new Array(g), w = a[s] = new Array(g), b = l[s] = new Array(f);
    e(c, h, _, w, b, p, n);
    for (var d = 0, M = 0, y, m; d < g; ++d)
      if (y = _[d]) {
        for (d >= M && (M = d + 1); !(m = w[M]) && ++M < g; ) ;
        y._next = m || null;
      }
  }
  return a = new L(a, r), a._enter = u, a._exit = l, a;
}
function _p(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vp() {
  return new L(this._exit || this._groups.map(ou), this._parents);
}
function mp(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function wp(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), l = 0; l < a; ++l)
    for (var s = e[l], c = r[l], h = s.length, f = u[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = s[g] || c[g]) && (f[g] = p);
  for (; l < i; ++l)
    u[l] = e[l];
  return new L(u, this._parents);
}
function bp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function xp(t) {
  t || (t = Mp);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, l = i[o] = new Array(u), s, c = 0; c < u; ++c)
      (s = a[c]) && (l[c] = s);
    l.sort(n);
  }
  return new L(i, this._parents).order();
}
function Mp(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ap() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function $p() {
  return Array.from(this);
}
function Np() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Tp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Sp() {
  return !this.node();
}
function Ep(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function kp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Op(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function zp(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Cp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ip(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Rp(t, n) {
  var e = ze(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Pp : kp : typeof n == "function" ? e.local ? Ip : Cp : e.local ? zp : Op)(e, n));
}
function au(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function jp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fp(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Dp(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Lp(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? jp : typeof n == "function" ? Dp : Fp)(t, n, e ?? "")) : Gt(this.node(), t);
}
function Gt(t, n) {
  return t.style.getPropertyValue(n) || au(t).getComputedStyle(t, null).getPropertyValue(n);
}
function qp(t) {
  return function() {
    delete this[t];
  };
}
function Bp(t, n) {
  return function() {
    this[t] = n;
  };
}
function Xp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Hp(t, n) {
  return arguments.length > 1 ? this.each((n == null ? qp : typeof n == "function" ? Xp : Bp)(t, n)) : this.node()[t];
}
function uu(t) {
  return t.trim().split(/^|\s+/);
}
function fi(t) {
  return t.classList || new su(t);
}
function su(t) {
  this._node = t, this._names = uu(t.getAttribute("class") || "");
}
su.prototype = {
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
function lu(t, n) {
  for (var e = fi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function cu(t, n) {
  for (var e = fi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Up(t) {
  return function() {
    lu(this, t);
  };
}
function Yp(t) {
  return function() {
    cu(this, t);
  };
}
function Gp(t, n) {
  return function() {
    (n.apply(this, arguments) ? lu : cu)(this, t);
  };
}
function Vp(t, n) {
  var e = uu(t + "");
  if (arguments.length < 2) {
    for (var r = fi(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Gp : n ? Up : Yp)(e, n));
}
function Kp() {
  this.textContent = "";
}
function Wp(t) {
  return function() {
    this.textContent = t;
  };
}
function Zp(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Jp(t) {
  return arguments.length ? this.each(t == null ? Kp : (typeof t == "function" ? Zp : Wp)(t)) : this.node().textContent;
}
function Qp() {
  this.innerHTML = "";
}
function td(t) {
  return function() {
    this.innerHTML = t;
  };
}
function nd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ed(t) {
  return arguments.length ? this.each(t == null ? Qp : (typeof t == "function" ? nd : td)(t)) : this.node().innerHTML;
}
function rd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function id() {
  return this.each(rd);
}
function od() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ad() {
  return this.each(od);
}
function ud(t) {
  var n = typeof t == "function" ? t : nu(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function sd() {
  return null;
}
function ld(t, n) {
  var e = typeof t == "function" ? t : nu(t), r = n == null ? sd : typeof n == "function" ? n : ci(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function fd() {
  return this.each(cd);
}
function hd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function pd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function dd(t) {
  return this.select(t ? pd : hd);
}
function gd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function yd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function _d(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function vd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function md(t, n, e) {
  return function() {
    var r = this.__on, i, o = yd(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function wd(t, n, e) {
  var r = _d(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var l = 0, s = u.length, c; l < s; ++l)
        for (i = 0, c = u[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? md : vd, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function fu(t, n, e) {
  var r = au(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function bd(t, n) {
  return function() {
    return fu(this, t, n);
  };
}
function xd(t, n) {
  return function() {
    return fu(this, t, n.apply(this, arguments));
  };
}
function Md(t, n) {
  return this.each((typeof n == "function" ? xd : bd)(t, n));
}
function* Ad() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var hu = [null];
function L(t, n) {
  this._groups = t, this._parents = n;
}
function Pn() {
  return new L([[document.documentElement]], hu);
}
function $d() {
  return this;
}
L.prototype = Pn.prototype = {
  constructor: L,
  select: Zh,
  selectAll: np,
  selectChild: op,
  selectChildren: lp,
  filter: cp,
  data: yp,
  enter: fp,
  exit: vp,
  join: mp,
  merge: wp,
  selection: $d,
  order: bp,
  sort: xp,
  call: Ap,
  nodes: $p,
  node: Np,
  size: Tp,
  empty: Sp,
  each: Ep,
  attr: Rp,
  style: Lp,
  property: Hp,
  classed: Vp,
  text: Jp,
  html: ed,
  raise: id,
  lower: ad,
  append: ud,
  insert: ld,
  remove: fd,
  clone: dd,
  datum: gd,
  on: wd,
  dispatch: Md,
  [Symbol.iterator]: Ad
};
function I(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], hu);
}
function Nd(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function so(t, n) {
  if (t = Nd(t), n === void 0 && (n = t.currentTarget), n) {
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
const Td = { passive: !1 }, mn = { capture: !0, passive: !1 };
function rr(t) {
  t.stopImmediatePropagation();
}
function Bt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Sd(t) {
  var n = t.document.documentElement, e = I(t).on("dragstart.drag", Bt, mn);
  "onselectstart" in n ? e.on("selectstart.drag", Bt, mn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ed(t, n) {
  var e = t.document.documentElement, r = I(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Bt, mn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Ln = (t) => () => t;
function Er(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: u,
  dx: l,
  dy: s,
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
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: s, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Er.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function kd(t) {
  return !t.ctrlKey && !t.button;
}
function Pd() {
  return this.parentNode;
}
function Od(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function zd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cd() {
  var t = kd, n = Pd, e = Od, r = zd, i = {}, o = li("start", "drag", "end"), a = 0, u, l, s, c, h = 0;
  function f(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Td).on("touchend.drag touchcancel.drag", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var T = M(this, n.call(this, y, m), y, m, "mouse");
      T && (I(y.view).on("mousemove.drag", g, mn).on("mouseup.drag", _, mn), Sd(y.view), rr(y), s = !1, u = y.clientX, l = y.clientY, T("start", y));
    }
  }
  function g(y) {
    if (Bt(y), !s) {
      var m = y.clientX - u, T = y.clientY - l;
      s = m * m + T * T > h;
    }
    i.mouse("drag", y);
  }
  function _(y) {
    I(y.view).on("mousemove.drag mouseup.drag", null), Ed(y.view, s), Bt(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var T = y.changedTouches, S = n.call(this, y, m), P = T.length, q, B;
      for (q = 0; q < P; ++q)
        (B = M(this, S, y, m, T[q].identifier, T[q])) && (rr(y), B("start", y, T[q]));
    }
  }
  function b(y) {
    var m = y.changedTouches, T = m.length, S, P;
    for (S = 0; S < T; ++S)
      (P = i[m[S].identifier]) && (Bt(y), P("drag", y, m[S]));
  }
  function d(y) {
    var m = y.changedTouches, T = m.length, S, P;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < T; ++S)
      (P = i[m[S].identifier]) && (rr(y), P("end", y, m[S]));
  }
  function M(y, m, T, S, P, q) {
    var B = o.copy(), v = so(q || T, m), O, A, z;
    if ((z = e.call(y, new Er("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: P,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: B
    }), S)) != null)
      return O = z.x - v[0] || 0, A = z.y - v[1] || 0, function Mt(F, X, U) {
        var E = v, tr;
        switch (F) {
          case "start":
            i[P] = Mt, tr = a++;
            break;
          case "end":
            delete i[P], --a;
          // falls through
          case "drag":
            v = so(U || X, m), tr = a;
            break;
        }
        B.call(
          F,
          y,
          new Er(F, {
            sourceEvent: X,
            subject: z,
            target: f,
            identifier: P,
            active: tr,
            x: v[0] + O,
            y: v[1] + A,
            dx: v[0] - E[0],
            dy: v[1] - E[1],
            dispatch: B
          }),
          S
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Ln(!!y), f) : t;
  }, f.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Ln(y), f) : n;
  }, f.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ln(y), f) : e;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Ln(!!y), f) : r;
  }, f.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function hi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function pu(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function On() {
}
var wn = 0.7, _e = 1 / wn, Xt = "\\s*([+-]?\\d+)\\s*", bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Id = /^#([0-9a-f]{3,8})$/, Rd = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), jd = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Fd = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${bn}\\)$`), Dd = new RegExp(`^rgba\\(${nt},${nt},${nt},${bn}\\)$`), Ld = new RegExp(`^hsl\\(${bn},${nt},${nt}\\)$`), qd = new RegExp(`^hsla\\(${bn},${nt},${nt},${bn}\\)$`), lo = {
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
hi(On, Pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: co,
  // Deprecated! Use color.formatHex.
  formatHex: co,
  formatHex8: Bd,
  formatHsl: Xd,
  formatRgb: fo,
  toString: fo
});
function co() {
  return this.rgb().formatHex();
}
function Bd() {
  return this.rgb().formatHex8();
}
function Xd() {
  return du(this).formatHsl();
}
function fo() {
  return this.rgb().formatRgb();
}
function Pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Id.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ho(n) : e === 3 ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? qn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? qn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Rd.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = jd.exec(t)) ? new j(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fd.exec(t)) ? qn(n[1], n[2], n[3], n[4]) : (n = Dd.exec(t)) ? qn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ld.exec(t)) ? yo(n[1], n[2] / 100, n[3] / 100, 1) : (n = qd.exec(t)) ? yo(n[1], n[2] / 100, n[3] / 100, n[4]) : lo.hasOwnProperty(t) ? ho(lo[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function ho(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function qn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new j(t, n, e, r);
}
function Hd(t) {
  return t instanceof On || (t = Pt(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function kr(t, n, e, r) {
  return arguments.length === 1 ? Hd(t) : new j(t, n, e, r ?? 1);
}
function j(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
hi(j, kr, pu(On, {
  brighter(t) {
    return t = t == null ? _e : Math.pow(_e, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? wn : Math.pow(wn, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(St(this.r), St(this.g), St(this.b), ve(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: Ud,
  formatRgb: go,
  toString: go
}));
function po() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}`;
}
function Ud() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}${Nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function go() {
  const t = ve(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${St(this.r)}, ${St(this.g)}, ${St(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ve(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function St(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Nt(t) {
  return t = St(t), (t < 16 ? "0" : "") + t.toString(16);
}
function yo(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new K(t, n, e, r);
}
function du(t) {
  if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity);
  if (t instanceof On || (t = Pt(t)), !t) return new K();
  if (t instanceof K) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, l = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : u = l > 0 && l < 1 ? 0 : a, new K(a, u, l, t.opacity);
}
function Yd(t, n, e, r) {
  return arguments.length === 1 ? du(t) : new K(t, n, e, r ?? 1);
}
function K(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
hi(K, Yd, pu(On, {
  brighter(t) {
    return t = t == null ? _e : Math.pow(_e, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? wn : Math.pow(wn, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new j(
      ir(t >= 240 ? t - 240 : t + 120, i, r),
      ir(t, i, r),
      ir(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new K(_o(this.h), Bn(this.s), Bn(this.l), ve(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ve(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${_o(this.h)}, ${Bn(this.s) * 100}%, ${Bn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function _o(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Bn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ir(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const pi = (t) => () => t;
function Gd(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Vd(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Kd(t) {
  return (t = +t) == 1 ? gu : function(n, e) {
    return e - n ? Vd(n, e, t) : pi(isNaN(n) ? e : n);
  };
}
function gu(t, n) {
  var e = n - t;
  return e ? Gd(t, e) : pi(isNaN(t) ? n : t);
}
const me = function t(n) {
  var e = Kd(n);
  function r(i, o) {
    var a = e((i = kr(i)).r, (o = kr(o)).r), u = e(i.g, o.g), l = e(i.b, o.b), s = gu(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = u(c), i.b = l(c), i.opacity = s(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Wd(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Zd(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Jd(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = di(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Qd(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function G(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function t0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = di(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, or = new RegExp(Pr.source, "g");
function n0(t) {
  return function() {
    return t;
  };
}
function e0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function yu(t, n) {
  var e = Pr.lastIndex = or.lastIndex = 0, r, i, o, a = -1, u = [], l = [];
  for (t = t + "", n = n + ""; (r = Pr.exec(t)) && (i = or.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, l.push({ i: a, x: G(r, i) })), e = or.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? l[0] ? e0(l[0].x) : n0(n) : (n = l.length, function(s) {
    for (var c = 0, h; c < n; ++c) u[(h = l[c]).i] = h.x(s);
    return u.join("");
  });
}
function di(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? pi(n) : (e === "number" ? G : e === "string" ? (r = Pt(n)) ? (n = r, me) : yu : n instanceof Pt ? me : n instanceof Date ? Qd : Zd(n) ? Wd : Array.isArray(n) ? Jd : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? t0 : G)(t, n);
}
function r0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var vo = 180 / Math.PI, _u = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vu(t, n, e, r, i, o) {
  var a, u, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, l /= u), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * vo,
    skewX: Math.atan(l) * vo,
    scaleX: a,
    scaleY: u
  };
}
var Xn;
function i0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? _u : vu(n.a, n.b, n.c, n.d, n.e, n.f);
}
function o0(t) {
  return t == null || (Xn || (Xn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xn.setAttribute("transform", t), !(t = Xn.transform.baseVal.consolidate())) ? _u : (t = t.matrix, vu(t.a, t.b, t.c, t.d, t.e, t.f));
}
function mu(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, c, h, f, p, g) {
    if (s !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      g.push({ i: _ - 4, x: G(s, h) }, { i: _ - 2, x: G(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(s, c, h, f) {
    s !== c ? (s - c > 180 ? c += 360 : c - s > 180 && (s += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: G(s, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function u(s, c, h, f) {
    s !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: G(s, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(s, c, h, f, p, g) {
    if (s !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: G(s, h) }, { i: _ - 2, x: G(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(s, c) {
    var h = [], f = [];
    return s = t(s), c = t(c), o(s.translateX, s.translateY, c.translateX, c.translateY, h, f), a(s.rotate, c.rotate, h, f), u(s.skewX, c.skewX, h, f), l(s.scaleX, s.scaleY, c.scaleX, c.scaleY, h, f), s = c = null, function(p) {
      for (var g = -1, _ = f.length, w; ++g < _; ) h[(w = f[g]).i] = w.x(p);
      return h.join("");
    };
  };
}
var a0 = mu(i0, "px, ", "px)", "deg)"), u0 = mu(o0, ", ", ")", ")"), Vt = 0, cn = 0, rn = 0, wu = 1e3, we, fn, be = 0, Ot = 0, Ce = 0, xn = typeof performance == "object" && performance.now ? performance : Date, bu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function gi() {
  return Ot || (bu(s0), Ot = xn.now() + Ce);
}
function s0() {
  Ot = 0;
}
function xe() {
  this._call = this._time = this._next = null;
}
xe.prototype = xu.prototype = {
  constructor: xe,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? gi() : +e) + (n == null ? 0 : +n), !this._next && fn !== this && (fn ? fn._next = this : we = this, fn = this), this._call = t, this._time = e, Or();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Or());
  }
};
function xu(t, n, e) {
  var r = new xe();
  return r.restart(t, n, e), r;
}
function l0() {
  gi(), ++Vt;
  for (var t = we, n; t; )
    (n = Ot - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Vt;
}
function mo() {
  Ot = (be = xn.now()) + Ce, Vt = cn = 0;
  try {
    l0();
  } finally {
    Vt = 0, f0(), Ot = 0;
  }
}
function c0() {
  var t = xn.now(), n = t - be;
  n > wu && (Ce -= n, be = t);
}
function f0() {
  for (var t, n = we, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : we = e);
  fn = t, Or(r);
}
function Or(t) {
  if (!Vt) {
    cn && (cn = clearTimeout(cn));
    var n = t - Ot;
    n > 24 ? (t < 1 / 0 && (cn = setTimeout(mo, t - xn.now() - Ce)), rn && (rn = clearInterval(rn))) : (rn || (be = xn.now(), rn = setInterval(c0, wu)), Vt = 1, bu(mo));
  }
}
function wo(t, n, e) {
  var r = new xe();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var h0 = li("start", "end", "cancel", "interrupt"), p0 = [], Mu = 0, bo = 1, zr = 2, Qn = 3, xo = 4, Cr = 5, te = 6;
function Ie(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  d0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: h0,
    tween: p0,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Mu
  });
}
function yi(t, n) {
  var e = J(t, n);
  if (e.state > Mu) throw new Error("too late; already scheduled");
  return e;
}
function it(t, n) {
  var e = J(t, n);
  if (e.state > Qn) throw new Error("too late; already running");
  return e;
}
function J(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function d0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = xu(o, 0, e.time);
  function o(s) {
    e.state = bo, e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
  }
  function a(s) {
    var c, h, f, p;
    if (e.state !== bo) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === Qn) return wo(a);
        p.state === xo ? (p.state = te, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = te, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (wo(function() {
      e.state === Qn && (e.state = xo, e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = zr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === zr) {
      for (e.state = Qn, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function u(s) {
    for (var c = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(l), e.state = Cr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Cr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = te, e.timer.stop(), delete r[n];
    for (var s in r) return;
    delete t.__transition;
  }
}
function g0(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > zr && r.state < Cr, r.state = te, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function y0(t) {
  return this.each(function() {
    g0(this, t);
  });
}
function _0(t, n) {
  var e, r;
  return function() {
    var i = it(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function v0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = it(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, l = 0, s = i.length; l < s; ++l)
        if (i[l].name === n) {
          i[l] = u;
          break;
        }
      l === s && i.push(u);
    }
    o.tween = i;
  };
}
function m0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = J(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? _0 : v0)(e, t, n));
}
function _i(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = it(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return J(i, r).value[n];
  };
}
function Au(t, n) {
  var e;
  return (typeof n == "number" ? G : n instanceof Pt ? me : (e = Pt(n)) ? (n = e, me) : yu)(t, n);
}
function w0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function b0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function x0(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function M0(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function A0(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function $0(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function N0(t, n) {
  var e = ze(t), r = e === "transform" ? u0 : Au;
  return this.attrTween(t, typeof n == "function" ? (e.local ? $0 : A0)(e, r, _i(this, "attr." + t, n)) : n == null ? (e.local ? b0 : w0)(e) : (e.local ? M0 : x0)(e, r, n));
}
function T0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function S0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function E0(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && S0(t, o)), e;
  }
  return i._value = n, i;
}
function k0(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && T0(t, o)), e;
  }
  return i._value = n, i;
}
function P0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = ze(t);
  return this.tween(e, (r.local ? E0 : k0)(r, n));
}
function O0(t, n) {
  return function() {
    yi(this, t).delay = +n.apply(this, arguments);
  };
}
function z0(t, n) {
  return n = +n, function() {
    yi(this, t).delay = n;
  };
}
function C0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? O0 : z0)(n, t)) : J(this.node(), n).delay;
}
function I0(t, n) {
  return function() {
    it(this, t).duration = +n.apply(this, arguments);
  };
}
function R0(t, n) {
  return n = +n, function() {
    it(this, t).duration = n;
  };
}
function j0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? I0 : R0)(n, t)) : J(this.node(), n).duration;
}
function F0(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    it(this, t).ease = n;
  };
}
function D0(t) {
  var n = this._id;
  return arguments.length ? this.each(F0(n, t)) : J(this.node(), n).ease;
}
function L0(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    it(this, t).ease = e;
  };
}
function q0(t) {
  if (typeof t != "function") throw new Error();
  return this.each(L0(this._id, t));
}
function B0(t) {
  typeof t != "function" && (t = ru(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new ft(r, this._parents, this._name, this._id);
}
function X0(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var l = n[u], s = e[u], c = l.length, h = a[u] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || s[p]) && (h[p] = f);
  for (; u < r; ++u)
    a[u] = n[u];
  return new ft(a, this._parents, this._name, this._id);
}
function H0(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function U0(t, n, e) {
  var r, i, o = H0(n) ? yi : it;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function Y0(t, n) {
  var e = this._id;
  return arguments.length < 2 ? J(this.node(), e).on.on(t) : this.each(U0(e, t, n));
}
function G0(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function V0() {
  return this.on("end.remove", G0(this._id));
}
function K0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ci(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, s = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = u[f]) && (h = t.call(c, c.__data__, f, u)) && ("__data__" in c && (h.__data__ = c.__data__), s[f] = h, Ie(s[f], n, e, f, s, J(c, e)));
  return new ft(o, this._parents, n, e);
}
function W0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = eu(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var l = r[u], s = l.length, c, h = 0; h < s; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, g = J(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Ie(p, n, e, _, f, g);
        o.push(f), a.push(c);
      }
  return new ft(o, a, n, e);
}
var Z0 = Pn.prototype.constructor;
function J0() {
  return new Z0(this._groups, this._parents);
}
function Q0(t, n) {
  var e, r, i;
  return function() {
    var o = Gt(this, t), a = (this.style.removeProperty(t), Gt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function $u(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function tg(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Gt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ng(t, n, e) {
  var r, i, o;
  return function() {
    var a = Gt(this, t), u = e(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), Gt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u));
  };
}
function eg(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var l = it(this, t), s = l.on, c = l.value[o] == null ? u || (u = $u(n)) : void 0;
    (s !== e || i !== c) && (r = (e = s).copy()).on(a, i = c), l.on = r;
  };
}
function rg(t, n, e) {
  var r = (t += "") == "transform" ? a0 : Au;
  return n == null ? this.styleTween(t, Q0(t, r)).on("end.style." + t, $u(t)) : typeof n == "function" ? this.styleTween(t, ng(t, r, _i(this, "style." + t, n))).each(eg(this._id, t)) : this.styleTween(t, tg(t, r, n), e).on("end.style." + t, null);
}
function ig(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function og(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && ig(t, a, e)), r;
  }
  return o._value = n, o;
}
function ag(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, og(t, n, e ?? ""));
}
function ug(t) {
  return function() {
    this.textContent = t;
  };
}
function sg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function lg(t) {
  return this.tween("text", typeof t == "function" ? sg(_i(this, "text", t)) : ug(t == null ? "" : t + ""));
}
function cg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function fg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && cg(i)), n;
  }
  return r._value = t, r;
}
function hg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, fg(t));
}
function pg() {
  for (var t = this._name, n = this._id, e = Nu(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      if (l = a[s]) {
        var c = J(l, n);
        Ie(l, t, e, s, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ft(r, this._parents, t, e);
}
function dg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = it(this, r), c = s.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(l)), s.on = n;
    }), i === 0 && o();
  });
}
var gg = 0;
function ft(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Nu() {
  return ++gg;
}
var at = Pn.prototype;
ft.prototype = {
  constructor: ft,
  select: K0,
  selectAll: W0,
  selectChild: at.selectChild,
  selectChildren: at.selectChildren,
  filter: B0,
  merge: X0,
  selection: J0,
  transition: pg,
  call: at.call,
  nodes: at.nodes,
  node: at.node,
  size: at.size,
  empty: at.empty,
  each: at.each,
  on: Y0,
  attr: N0,
  attrTween: P0,
  style: rg,
  styleTween: ag,
  text: lg,
  textTween: hg,
  remove: V0,
  tween: m0,
  delay: C0,
  duration: j0,
  ease: D0,
  easeVarying: q0,
  end: dg,
  [Symbol.iterator]: at[Symbol.iterator]
};
function yg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var _g = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: yg
};
function vg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function mg(t) {
  var n, e;
  t instanceof ft ? (n = t._id, t = t._name) : (n = Nu(), (e = _g).time = gi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && Ie(l, t, n, s, a, e || vg(l, n));
  return new ft(r, this._parents, t, n);
}
Pn.prototype.interrupt = y0;
Pn.prototype.transition = mg;
const Ir = Math.PI, Rr = 2 * Ir, At = 1e-6, wg = Rr - At;
function Tu(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function bg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Tu;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Su {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Tu : bg(n);
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
    let a = this._x1, u = this._y1, l = r - n, s = i - e, c = a - n, h = u - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > At) if (!(Math.abs(h * l - s * c) > At) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, g = i - u, _ = l * l + s * s, w = p * p + g * g, b = Math.sqrt(_), d = Math.sqrt(f), M = o * Math.tan((Ir - Math.acos((_ + f - w) / (2 * b * d))) / 2), y = M / d, m = M / b;
      Math.abs(y - 1) > At && this._append`L${n + y * c},${e + y * h}`, this._append`A${o},${o},0,0,${+(h * p > c * g)},${this._x1 = n + m * l},${this._y1 = e + m * s}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let u = r * Math.cos(i), l = r * Math.sin(i), s = n + u, c = e + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${s},${c}` : (Math.abs(this._x1 - s) > At || Math.abs(this._y1 - c) > At) && this._append`L${s},${c}`, r && (f < 0 && (f = f % Rr + Rr), f > wg ? this._append`A${r},${r},0,1,${h},${n - u},${e - l}A${r},${r},0,1,${h},${this._x1 = s},${this._y1 = c}` : f > At && this._append`A${r},${r},0,${+(f >= Ir)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Q() {
  return new Su();
}
Q.prototype = Su.prototype;
function xg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Me(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Kt(t) {
  return t = Me(Math.abs(t)), t ? t[1] : NaN;
}
function Mg(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], l = 0; i > 0 && u > 0 && (l + u + 1 > r && (u = Math.max(1, r - l)), o.push(e.substring(i -= u, i + u)), !((l += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Ag(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var $g = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ae(t) {
  if (!(n = $g.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new vi({
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
Ae.prototype = vi.prototype;
function vi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
vi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ng(t) {
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
var Eu;
function Tg(t, n) {
  var e = Me(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Eu = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Me(t, Math.max(0, n + o - 1))[0];
}
function Mo(t, n) {
  var e = Me(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ao = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: xg,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Mo(t * 100, n),
  r: Mo,
  s: Tg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function $o(t) {
  return t;
}
var No = Array.prototype.map, To = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Sg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? $o : Mg(No.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? $o : Ag(No.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(h) {
    h = Ae(h);
    var f = h.fill, p = h.align, g = h.sign, _ = h.symbol, w = h.zero, b = h.width, d = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (d = !0, m = "g") : Ao[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var T = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", S = _ === "$" ? r : /[%p]/.test(m) ? a : "", P = Ao[m], q = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function B(v) {
      var O = T, A = S, z, Mt, F;
      if (m === "c")
        A = P(v) + A, v = "";
      else {
        v = +v;
        var X = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : P(Math.abs(v), M), y && (v = Ng(v)), X && +v == 0 && g !== "+" && (X = !1), O = (X ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + O, A = (m === "s" ? To[8 + Eu / 3] : "") + A + (X && g === "(" ? ")" : ""), q) {
          for (z = -1, Mt = v.length; ++z < Mt; )
            if (F = v.charCodeAt(z), 48 > F || F > 57) {
              A = (F === 46 ? i + v.slice(z + 1) : v.slice(z)) + A, v = v.slice(0, z);
              break;
            }
        }
      }
      d && !w && (v = n(v, 1 / 0));
      var U = O.length + v.length + A.length, E = U < b ? new Array(b - U + 1).join(f) : "";
      switch (d && w && (v = n(E + v, E.length ? b - A.length : 1 / 0), E = ""), p) {
        case "<":
          v = O + v + A + E;
          break;
        case "=":
          v = O + E + v + A;
          break;
        case "^":
          v = E.slice(0, U = E.length >> 1) + O + v + A + E.slice(U);
          break;
        default:
          v = E + O + v + A;
          break;
      }
      return o(v);
    }
    return B.toString = function() {
      return h + "";
    }, B;
  }
  function c(h, f) {
    var p = s((h = Ae(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(Kt(f) / 3))) * 3, _ = Math.pow(10, -g), w = To[8 + g / 3];
    return function(b) {
      return p(_ * b) + w;
    };
  }
  return {
    format: s,
    formatPrefix: c
  };
}
var Hn, Re, ku;
Eg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Eg(t) {
  return Hn = Sg(t), Re = Hn.format, ku = Hn.formatPrefix, Hn;
}
function kg(t) {
  return Math.max(0, -Kt(Math.abs(t)));
}
function Pg(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Kt(n) / 3))) * 3 - Kt(Math.abs(t)));
}
function Og(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Kt(n) - Kt(t)) + 1;
}
function zg(t, n) {
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
function Cg(t) {
  return function() {
    return t;
  };
}
function Ig(t) {
  return +t;
}
var So = [0, 1];
function Lt(t) {
  return t;
}
function jr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Cg(isNaN(n) ? NaN : 0.5);
}
function Rg(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function jg(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = jr(i, r), o = e(a, o)) : (r = jr(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function Fg(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = jr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var l = Fh(t, u, 1, r) - 1;
    return o[l](i[l](u));
  };
}
function Dg(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Lg() {
  var t = So, n = So, e = di, r, i, o, a = Lt, u, l, s;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Lt && (a = Rg(t[0], t[f - 1])), u = f > 2 ? Fg : jg, l = s = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = u(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((s || (s = u(n, t.map(r), G)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Ig), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = r0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Lt, c()) : a !== Lt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function qg() {
  return Lg()(Lt, Lt);
}
function Bg(t, n, e, r) {
  var i = Xh(t, n, e), o;
  switch (r = Ae(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Pg(i, a)) && (r.precision = o), ku(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Og(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = kg(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Re(r);
}
function Xg(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Bh(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Bg(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], l, s, c = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); c-- > 0; ) {
      if (s = Tr(a, u, e), s === l)
        return r[i] = a, r[o] = u, n(r);
      if (s > 0)
        a = Math.floor(a / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      l = s;
    }
    return t;
  }, t;
}
function Wt() {
  var t = qg();
  return t.copy = function() {
    return Dg(t, Wt());
  }, zg.apply(t, arguments), Xg(t);
}
function hn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
hn.prototype = {
  constructor: hn,
  scale: function(t) {
    return t === 1 ? this : new hn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new hn(this.k, this.x + this.k * t, this.y + this.k * n);
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
hn.prototype;
var Pu = typeof global == "object" && global && global.Object === Object && global, Hg = typeof self == "object" && self && self.Object === Object && self, pt = Pu || Hg || Function("return this")(), et = pt.Symbol, Ou = Object.prototype, Ug = Ou.hasOwnProperty, Yg = Ou.toString, on = et ? et.toStringTag : void 0;
function Gg(t) {
  var n = Ug.call(t, on), e = t[on];
  try {
    t[on] = void 0;
    var r = !0;
  } catch {
  }
  var i = Yg.call(t);
  return r && (n ? t[on] = e : delete t[on]), i;
}
var Vg = Object.prototype, Kg = Vg.toString;
function Wg(t) {
  return Kg.call(t);
}
var Zg = "[object Null]", Jg = "[object Undefined]", Eo = et ? et.toStringTag : void 0;
function Qt(t) {
  return t == null ? t === void 0 ? Jg : Zg : Eo && Eo in Object(t) ? Gg(t) : Wg(t);
}
function Zt(t) {
  return t != null && typeof t == "object";
}
var Qg = "[object Symbol]";
function je(t) {
  return typeof t == "symbol" || Zt(t) && Qt(t) == Qg;
}
function zu(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var W = Array.isArray, ko = et ? et.prototype : void 0, Po = ko ? ko.toString : void 0;
function Cu(t) {
  if (typeof t == "string")
    return t;
  if (W(t))
    return zu(t, Cu) + "";
  if (je(t))
    return Po ? Po.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var ty = /\s/;
function ny(t) {
  for (var n = t.length; n-- && ty.test(t.charAt(n)); )
    ;
  return n;
}
var ey = /^\s+/;
function ry(t) {
  return t && t.slice(0, ny(t) + 1).replace(ey, "");
}
function Jt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Oo = NaN, iy = /^[-+]0x[0-9a-f]+$/i, oy = /^0b[01]+$/i, ay = /^0o[0-7]+$/i, uy = parseInt;
function sy(t) {
  if (typeof t == "number")
    return t;
  if (je(t))
    return Oo;
  if (Jt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Jt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ry(t);
  var e = oy.test(t);
  return e || ay.test(t) ? uy(t.slice(2), e ? 2 : 8) : iy.test(t) ? Oo : +t;
}
var ly = 1 / 0, cy = 17976931348623157e292;
function ar(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = sy(t), t === ly || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * cy;
  }
  return t === t ? t : 0;
}
function fy(t) {
  return t;
}
var hy = "[object AsyncFunction]", py = "[object Function]", dy = "[object GeneratorFunction]", gy = "[object Proxy]";
function Iu(t) {
  if (!Jt(t))
    return !1;
  var n = Qt(t);
  return n == py || n == dy || n == hy || n == gy;
}
var ur = pt["__core-js_shared__"], zo = function() {
  var t = /[^.]+$/.exec(ur && ur.keys && ur.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function yy(t) {
  return !!zo && zo in t;
}
var _y = Function.prototype, vy = _y.toString;
function It(t) {
  if (t != null) {
    try {
      return vy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var my = /[\\^$.*+?()[\]{}|]/g, wy = /^\[object .+?Constructor\]$/, by = Function.prototype, xy = Object.prototype, My = by.toString, Ay = xy.hasOwnProperty, $y = RegExp(
  "^" + My.call(Ay).replace(my, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ny(t) {
  if (!Jt(t) || yy(t))
    return !1;
  var n = Iu(t) ? $y : wy;
  return n.test(It(t));
}
function Ty(t, n) {
  return t == null ? void 0 : t[n];
}
function tn(t, n) {
  var e = Ty(t, n);
  return Ny(e) ? e : void 0;
}
var Fr = tn(pt, "WeakMap"), Sy = 9007199254740991, Ey = /^(?:0|[1-9]\d*)$/;
function mi(t, n) {
  var e = typeof t;
  return n = n ?? Sy, !!n && (e == "number" || e != "symbol" && Ey.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function wi(t, n) {
  return t === n || t !== t && n !== n;
}
var ky = 9007199254740991;
function bi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ky;
}
function Fe(t) {
  return t != null && bi(t.length) && !Iu(t);
}
function Py(t, n, e) {
  if (!Jt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Fe(e) && mi(n, e.length) : r == "string" && n in e) ? wi(e[n], t) : !1;
}
var Oy = Object.prototype;
function zy(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Oy;
  return t === e;
}
function Cy(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Iy = "[object Arguments]";
function Co(t) {
  return Zt(t) && Qt(t) == Iy;
}
var Ru = Object.prototype, Ry = Ru.hasOwnProperty, jy = Ru.propertyIsEnumerable, xi = Co(/* @__PURE__ */ function() {
  return arguments;
}()) ? Co : function(t) {
  return Zt(t) && Ry.call(t, "callee") && !jy.call(t, "callee");
};
function Fy() {
  return !1;
}
var ju = typeof exports == "object" && exports && !exports.nodeType && exports, Io = ju && typeof module == "object" && module && !module.nodeType && module, Dy = Io && Io.exports === ju, Ro = Dy ? pt.Buffer : void 0, Ly = Ro ? Ro.isBuffer : void 0, Dr = Ly || Fy, qy = "[object Arguments]", By = "[object Array]", Xy = "[object Boolean]", Hy = "[object Date]", Uy = "[object Error]", Yy = "[object Function]", Gy = "[object Map]", Vy = "[object Number]", Ky = "[object Object]", Wy = "[object RegExp]", Zy = "[object Set]", Jy = "[object String]", Qy = "[object WeakMap]", t_ = "[object ArrayBuffer]", n_ = "[object DataView]", e_ = "[object Float32Array]", r_ = "[object Float64Array]", i_ = "[object Int8Array]", o_ = "[object Int16Array]", a_ = "[object Int32Array]", u_ = "[object Uint8Array]", s_ = "[object Uint8ClampedArray]", l_ = "[object Uint16Array]", c_ = "[object Uint32Array]", $ = {};
$[e_] = $[r_] = $[i_] = $[o_] = $[a_] = $[u_] = $[s_] = $[l_] = $[c_] = !0;
$[qy] = $[By] = $[t_] = $[Xy] = $[n_] = $[Hy] = $[Uy] = $[Yy] = $[Gy] = $[Vy] = $[Ky] = $[Wy] = $[Zy] = $[Jy] = $[Qy] = !1;
function f_(t) {
  return Zt(t) && bi(t.length) && !!$[Qt(t)];
}
function h_(t) {
  return function(n) {
    return t(n);
  };
}
var Fu = typeof exports == "object" && exports && !exports.nodeType && exports, pn = Fu && typeof module == "object" && module && !module.nodeType && module, p_ = pn && pn.exports === Fu, sr = p_ && Pu.process, jo = function() {
  try {
    var t = pn && pn.require && pn.require("util").types;
    return t || sr && sr.binding && sr.binding("util");
  } catch {
  }
}(), Fo = jo && jo.isTypedArray, Du = Fo ? h_(Fo) : f_, d_ = Object.prototype, g_ = d_.hasOwnProperty;
function y_(t, n) {
  var e = W(t), r = !e && xi(t), i = !e && !r && Dr(t), o = !e && !r && !i && Du(t), a = e || r || i || o, u = a ? Cy(t.length, String) : [], l = u.length;
  for (var s in t)
    g_.call(t, s) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    mi(s, l))) && u.push(s);
  return u;
}
function __(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var v_ = __(Object.keys, Object), m_ = Object.prototype, w_ = m_.hasOwnProperty;
function b_(t) {
  if (!zy(t))
    return v_(t);
  var n = [];
  for (var e in Object(t))
    w_.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Mi(t) {
  return Fe(t) ? y_(t) : b_(t);
}
var x_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, M_ = /^\w*$/;
function Ai(t, n) {
  if (W(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || je(t) ? !0 : M_.test(t) || !x_.test(t) || n != null && t in Object(n);
}
var Mn = tn(Object, "create");
function A_() {
  this.__data__ = Mn ? Mn(null) : {}, this.size = 0;
}
function $_(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var N_ = "__lodash_hash_undefined__", T_ = Object.prototype, S_ = T_.hasOwnProperty;
function E_(t) {
  var n = this.__data__;
  if (Mn) {
    var e = n[t];
    return e === N_ ? void 0 : e;
  }
  return S_.call(n, t) ? n[t] : void 0;
}
var k_ = Object.prototype, P_ = k_.hasOwnProperty;
function O_(t) {
  var n = this.__data__;
  return Mn ? n[t] !== void 0 : P_.call(n, t);
}
var z_ = "__lodash_hash_undefined__";
function C_(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Mn && n === void 0 ? z_ : n, this;
}
function zt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
zt.prototype.clear = A_;
zt.prototype.delete = $_;
zt.prototype.get = E_;
zt.prototype.has = O_;
zt.prototype.set = C_;
function I_() {
  this.__data__ = [], this.size = 0;
}
function De(t, n) {
  for (var e = t.length; e--; )
    if (wi(t[e][0], n))
      return e;
  return -1;
}
var R_ = Array.prototype, j_ = R_.splice;
function F_(t) {
  var n = this.__data__, e = De(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : j_.call(n, e, 1), --this.size, !0;
}
function D_(t) {
  var n = this.__data__, e = De(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function L_(t) {
  return De(this.__data__, t) > -1;
}
function q_(t, n) {
  var e = this.__data__, r = De(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = I_;
dt.prototype.delete = F_;
dt.prototype.get = D_;
dt.prototype.has = L_;
dt.prototype.set = q_;
var An = tn(pt, "Map");
function B_() {
  this.size = 0, this.__data__ = {
    hash: new zt(),
    map: new (An || dt)(),
    string: new zt()
  };
}
function X_(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Le(t, n) {
  var e = t.__data__;
  return X_(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function H_(t) {
  var n = Le(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function U_(t) {
  return Le(this, t).get(t);
}
function Y_(t) {
  return Le(this, t).has(t);
}
function G_(t, n) {
  var e = Le(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function gt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = B_;
gt.prototype.delete = H_;
gt.prototype.get = U_;
gt.prototype.has = Y_;
gt.prototype.set = G_;
var V_ = "Expected a function";
function $i(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(V_);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new ($i.Cache || gt)(), e;
}
$i.Cache = gt;
var K_ = 500;
function W_(t) {
  var n = $i(t, function(r) {
    return e.size === K_ && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Z_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, J_ = /\\(\\)?/g, Q_ = W_(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Z_, function(e, r, i, o) {
    n.push(i ? o.replace(J_, "$1") : r || e);
  }), n;
});
function tv(t) {
  return t == null ? "" : Cu(t);
}
function Lu(t, n) {
  return W(t) ? t : Ai(t, n) ? [t] : Q_(tv(t));
}
function qe(t) {
  if (typeof t == "string" || je(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function qu(t, n) {
  n = Lu(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[qe(n[e++])];
  return e && e == r ? t : void 0;
}
function nv(t, n, e) {
  var r = t == null ? void 0 : qu(t, n);
  return r === void 0 ? e : r;
}
function Bu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Do = et ? et.isConcatSpreadable : void 0;
function ev(t) {
  return W(t) || xi(t) || !!(Do && t && t[Do]);
}
function rv(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = ev), i || (i = []); ++o < a; ) {
    var u = t[o];
    e(u) ? Bu(i, u) : i[i.length] = u;
  }
  return i;
}
function iv(t) {
  var n = t == null ? 0 : t.length;
  return n ? rv(t) : [];
}
function ov() {
  this.__data__ = new dt(), this.size = 0;
}
function av(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function uv(t) {
  return this.__data__.get(t);
}
function sv(t) {
  return this.__data__.has(t);
}
var lv = 200;
function cv(t, n) {
  var e = this.__data__;
  if (e instanceof dt) {
    var r = e.__data__;
    if (!An || r.length < lv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new gt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function st(t) {
  var n = this.__data__ = new dt(t);
  this.size = n.size;
}
st.prototype.clear = ov;
st.prototype.delete = av;
st.prototype.get = uv;
st.prototype.has = sv;
st.prototype.set = cv;
function fv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function hv() {
  return [];
}
var pv = Object.prototype, dv = pv.propertyIsEnumerable, Lo = Object.getOwnPropertySymbols, gv = Lo ? function(t) {
  return t == null ? [] : (t = Object(t), fv(Lo(t), function(n) {
    return dv.call(t, n);
  }));
} : hv;
function yv(t, n, e) {
  var r = n(t);
  return W(t) ? r : Bu(r, e(t));
}
function qo(t) {
  return yv(t, Mi, gv);
}
var Lr = tn(pt, "DataView"), qr = tn(pt, "Promise"), Br = tn(pt, "Set"), Bo = "[object Map]", _v = "[object Object]", Xo = "[object Promise]", Ho = "[object Set]", Uo = "[object WeakMap]", Yo = "[object DataView]", vv = It(Lr), mv = It(An), wv = It(qr), bv = It(Br), xv = It(Fr), mt = Qt;
(Lr && mt(new Lr(new ArrayBuffer(1))) != Yo || An && mt(new An()) != Bo || qr && mt(qr.resolve()) != Xo || Br && mt(new Br()) != Ho || Fr && mt(new Fr()) != Uo) && (mt = function(t) {
  var n = Qt(t), e = n == _v ? t.constructor : void 0, r = e ? It(e) : "";
  if (r)
    switch (r) {
      case vv:
        return Yo;
      case mv:
        return Bo;
      case wv:
        return Xo;
      case bv:
        return Ho;
      case xv:
        return Uo;
    }
  return n;
});
var Go = pt.Uint8Array, Mv = "__lodash_hash_undefined__";
function Av(t) {
  return this.__data__.set(t, Mv), this;
}
function $v(t) {
  return this.__data__.has(t);
}
function $e(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new gt(); ++n < e; )
    this.add(t[n]);
}
$e.prototype.add = $e.prototype.push = Av;
$e.prototype.has = $v;
function Nv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Tv(t, n) {
  return t.has(n);
}
var Sv = 1, Ev = 2;
function Xu(t, n, e, r, i, o) {
  var a = e & Sv, u = t.length, l = n.length;
  if (u != l && !(a && l > u))
    return !1;
  var s = o.get(t), c = o.get(n);
  if (s && c)
    return s == n && c == t;
  var h = -1, f = !0, p = e & Ev ? new $e() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < u; ) {
    var g = t[h], _ = n[h];
    if (r)
      var w = a ? r(_, g, h, n, t, o) : r(g, _, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Nv(n, function(b, d) {
        if (!Tv(p, d) && (g === b || i(g, b, e, r, o)))
          return p.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function kv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Pv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Ov = 1, zv = 2, Cv = "[object Boolean]", Iv = "[object Date]", Rv = "[object Error]", jv = "[object Map]", Fv = "[object Number]", Dv = "[object RegExp]", Lv = "[object Set]", qv = "[object String]", Bv = "[object Symbol]", Xv = "[object ArrayBuffer]", Hv = "[object DataView]", Vo = et ? et.prototype : void 0, lr = Vo ? Vo.valueOf : void 0;
function Uv(t, n, e, r, i, o, a) {
  switch (e) {
    case Hv:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Xv:
      return !(t.byteLength != n.byteLength || !o(new Go(t), new Go(n)));
    case Cv:
    case Iv:
    case Fv:
      return wi(+t, +n);
    case Rv:
      return t.name == n.name && t.message == n.message;
    case Dv:
    case qv:
      return t == n + "";
    case jv:
      var u = kv;
    case Lv:
      var l = r & Ov;
      if (u || (u = Pv), t.size != n.size && !l)
        return !1;
      var s = a.get(t);
      if (s)
        return s == n;
      r |= zv, a.set(t, n);
      var c = Xu(u(t), u(n), r, i, o, a);
      return a.delete(t), c;
    case Bv:
      if (lr)
        return lr.call(t) == lr.call(n);
  }
  return !1;
}
var Yv = 1, Gv = Object.prototype, Vv = Gv.hasOwnProperty;
function Kv(t, n, e, r, i, o) {
  var a = e & Yv, u = qo(t), l = u.length, s = qo(n), c = s.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = u[h];
    if (!(a ? f in n : Vv.call(n, f)))
      return !1;
  }
  var p = o.get(t), g = o.get(n);
  if (p && g)
    return p == n && g == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = u[h];
    var b = t[f], d = n[f];
    if (r)
      var M = a ? r(d, b, f, n, t, o) : r(b, d, f, t, n, o);
    if (!(M === void 0 ? b === d || i(b, d, e, r, o) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var Wv = 1, Ko = "[object Arguments]", Wo = "[object Array]", Un = "[object Object]", Zv = Object.prototype, Zo = Zv.hasOwnProperty;
function Jv(t, n, e, r, i, o) {
  var a = W(t), u = W(n), l = a ? Wo : mt(t), s = u ? Wo : mt(n);
  l = l == Ko ? Un : l, s = s == Ko ? Un : s;
  var c = l == Un, h = s == Un, f = l == s;
  if (f && Dr(t)) {
    if (!Dr(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new st()), a || Du(t) ? Xu(t, n, e, r, i, o) : Uv(t, n, l, e, r, i, o);
  if (!(e & Wv)) {
    var p = c && Zo.call(t, "__wrapped__"), g = h && Zo.call(n, "__wrapped__");
    if (p || g) {
      var _ = p ? t.value() : t, w = g ? n.value() : n;
      return o || (o = new st()), i(_, w, e, r, o);
    }
  }
  return f ? (o || (o = new st()), Kv(t, n, e, r, i, o)) : !1;
}
function Ni(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Zt(t) && !Zt(n) ? t !== t && n !== n : Jv(t, n, e, r, Ni, i);
}
var Qv = 1, tm = 2;
function nm(t, n, e, r) {
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
    var u = a[0], l = t[u], s = a[1];
    if (a[2]) {
      if (l === void 0 && !(u in t))
        return !1;
    } else {
      var c = new st(), h;
      if (!(h === void 0 ? Ni(s, l, Qv | tm, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Hu(t) {
  return t === t && !Jt(t);
}
function em(t) {
  for (var n = Mi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Hu(i)];
  }
  return n;
}
function Uu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function rm(t) {
  var n = em(t);
  return n.length == 1 && n[0][2] ? Uu(n[0][0], n[0][1]) : function(e) {
    return e === t || nm(e, t, n);
  };
}
function im(t, n) {
  return t != null && n in Object(t);
}
function om(t, n, e) {
  n = Lu(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = qe(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && bi(i) && mi(a, i) && (W(t) || xi(t)));
}
function am(t, n) {
  return t != null && om(t, n, im);
}
var um = 1, sm = 2;
function lm(t, n) {
  return Ai(t) && Hu(n) ? Uu(qe(t), n) : function(e) {
    var r = nv(e, t);
    return r === void 0 && r === n ? am(e, t) : Ni(n, r, um | sm);
  };
}
function cm(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function fm(t) {
  return function(n) {
    return qu(n, t);
  };
}
function hm(t) {
  return Ai(t) ? cm(qe(t)) : fm(t);
}
function pm(t) {
  return typeof t == "function" ? t : t == null ? fy : typeof t == "object" ? W(t) ? lm(t[0], t[1]) : rm(t) : hm(t);
}
function dm(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), u = a.length; u--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var gm = dm();
function ym(t, n) {
  return t && gm(t, n, Mi);
}
function _m(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Fe(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var vm = _m(ym);
function mm(t, n) {
  var e = -1, r = Fe(t) ? Array(t.length) : [];
  return vm(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Jo(t, n) {
  var e = W(t) ? zu : mm;
  return e(t, pm(n));
}
var wm = Math.ceil, bm = Math.max;
function xm(t, n, e, r) {
  for (var i = -1, o = bm(wm((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Mm(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Py(n, e, r) && (e = r = void 0), n = ar(n), e === void 0 ? (e = n, n = 0) : e = ar(e), r = r === void 0 ? n < e ? 1 : -1 : ar(r), xm(n, e, r);
  };
}
var Am = Mm();
const $m = (t, n, e = 12, r = 12) => {
  const i = Wt().domain([0, e]).range([0, t]), o = Wt().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Am((e + 1) * (r + 1)).map(function(a) {
        return { m: a % (e + 1), n: Math.floor(a / (e + 1)), x: i(a % (e + 1)), y: o(Math.floor(a / (e + 1))) };
      });
    },
    position: function(a, u) {
      typeof a == "number" && (a = [a]), typeof u == "number" && (u = [u]);
      const l = iv(Jo(u, function(s) {
        return Jo(
          a,
          function(c) {
            return { x: i(c), y: o(s) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Nm = "_widget_1279t_47", Tm = "_label_1279t_67", Sm = "_lit_1279t_72", Em = "_button_1279t_76", km = "_symbol_1279t_76", Pm = "_radio_1279t_77", Om = "_radiobutton_1279t_77", zm = "_selected_1279t_83", Cm = "_toggle_1279t_84", Im = "_slider_1279t_93", Rm = "_track_1279t_93", jm = "_track_overlay_1279t_98", Fm = "_handle_1279t_106", x = {
  widget: Nm,
  label: Tm,
  lit: Sm,
  button: Em,
  symbol: km,
  radio: Pm,
  radiobutton: Om,
  selected: zm,
  toggle: Cm,
  slider: Im,
  track: Rm,
  track_overlay: jm,
  handle: Fm
}, Ti = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Si = (t, n, e) => {
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
}, Dm = (t = 1) => {
  const n = Q();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Lm = (t = 1) => {
  const n = Q(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, qm = (t = 1) => {
  const n = Q();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Bm = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = Q();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Xm = (t = 1) => {
  const n = Q(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, u = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], s = [t * u * Math.cos(i + Math.PI / 2), t * u * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + s[0], l[1] + s[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Hm = (t = 1) => {
  const n = Q(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, u = Math.PI + e;
  return n.arc(0, 0, r, u, a), n.lineTo(t, r * Math.sin(u)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(u)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Um = (t = 1) => {
  const n = Q(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, u = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], s = [t * u * Math.cos(r + Math.PI / 2), t * u * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + s[0], l[1] + s[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Ym = (t = 1) => {
  var n = Q(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Gm = (t = 1) => {
  const n = Q(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Xr = (t) => {
  switch (t) {
    case "play":
      return Dm;
    case "forward":
      return Lm;
    case "back":
      return qm;
    case "pause":
      return Bm;
    case "reload":
      return Xm;
    case "capture":
      return Hm;
    case "rewind":
      return Um;
    case "stop":
      return Ym;
    case "push":
      return Gm;
  }
}, Ei = () => {
  const t = "button";
  var n = Ti(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, u = "bottom", l = null, s = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? o.x : (o.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? o.y : (o.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, s(), I(this.parentNode).select("." + x.symbol).attr("d", Xr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, s(), f.select("#button_" + n).select("." + x.symbol).attr("d", Xr(c[h])(r * e));
    }
  };
}, Vm = () => {
  const t = "slider", n = Re(".3f");
  var e = Ti(), r = 100, i = 8, o = 10, a = !1, u = { x: 0, y: 0 }, l = "top-left", s = 4, c = null, h = function(d) {
  }, f = function(d) {
  }, p = [0, 1], g = 0, _ = null, w = Wt().domain(p).range([0, r]).clamp(!0);
  const b = function(d, M, y = p) {
    const m = d.select("#slider_" + e);
    w.domain(y), g = M, m.selectAll("." + x.handle).transition().attr("cx", w(M)), a && m.select("." + x.label).text(_ + " = " + n(g)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? _ : (_ = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    girth: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    knob: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    show: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? u.x : (u.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? u.y : (u.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    labelpadding: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return h = d, this;
      h(d);
    },
    update_end: function(d) {
      if (typeof d == "function")
        return f = d, this;
      f(d);
    },
    range: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? g : (g = d, this);
    },
    reset: b,
    click: b
  };
}, Km = () => {
  const t = "toggle";
  var n = Ti(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, u = function(s) {
  }, l = 0;
  return {
    type: t,
    id: function(s) {
      return typeof s > "u" ? n : (n = s, this);
    },
    size: function(s) {
      return typeof s > "u" ? e : (e = s, this);
    },
    position: function(s) {
      return typeof s > "u" ? r : (r = s, this);
    },
    x: function(s) {
      return typeof s > "u" ? r.x : (r.x = s, this);
    },
    y: function(s) {
      return typeof s > "u" ? r.y : (r.y = s, this);
    },
    label: function(s) {
      return typeof s > "u" ? i : (i = s, this);
    },
    labelposition: function(s) {
      return typeof s > "u" ? o : (o = s, this);
    },
    fontsize: function(s) {
      return typeof s > "u" ? a : (a = s, this);
    },
    update: function(s) {
      if (typeof s == "function")
        return u = s, this;
      u(s);
    },
    value: function(s) {
      return typeof s > "u" ? l : (l = s, this);
    },
    click: function() {
      l = !l;
      const s = I(this.parentNode);
      s.select("." + x.handle).transition().attr("cx", l ? 2 * e : 0), s.classed(x.selected, l), u();
    },
    reset: function(s, c) {
      l = c;
      const h = s.select("#toggle_" + n);
      h.selectAll("." + x.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(x.selected, l), u();
    }
  };
}, Wm = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = I(o).attr("class", x.widget + " " + x.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var u;
  if (t.shape() == "rect" ? u = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : u = a.append("circle").attr("r", t.size() / 2), u.attr("class", x.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(x.lit, !0), I(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(x.lit, !1), I(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), a.append("path").attr("d", Xr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", x.symbol), r) {
    const l = Si(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", x.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, Yu = (t, n) => {
  const e = Q();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, Zm = (t, n) => {
  const e = Re(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var u;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  u = I(l).attr("class", x.widget + " " + x.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const s = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (b) => {
    const d = b && b.sourceEvent ? b.sourceEvent : b;
    return d ? d.clientX != null ? d.clientX : d.touches && d.touches.length ? d.touches[0].clientX : d.changedTouches && d.changedTouches.length ? d.changedTouches[0].clientX : null : null;
  }, h = (b, d) => {
    const M = c(b);
    if (M == null) return null;
    const y = d.getBoundingClientRect(), m = M - y.left, T = d.width && d.width.baseVal ? d.width.baseVal.value : y.width, S = y.width ? T / y.width : 1;
    return m * S - s;
  };
  u.append("path").attr("d", Yu(t.size(), t.girth())).attr("class", x.track), u.append("circle").attr("class", x.handle).attr("r", t.knob()).attr("cx", a(t.value())), u.append("rect").attr("width", t.size() + 2 * s).attr("height", 2 * s).attr("transform", "translate(" + -s + "," + -s + ")").attr("class", x.track_overlay).on("click", function(b) {
    const d = h(b, this);
    if (d == null) return;
    const M = Math.max(0, Math.min(t.size(), d));
    t.value(a.invert(M)), t.update(), t.update_end(), u.selectAll("." + x.handle).attr("cx", a(t.value())), t.show() && u.select("." + x.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Cd().on("drag", function(b) {
      const d = h(b, this);
      if (d == null) return;
      const M = Math.max(0, Math.min(t.size(), d));
      t.value(a.invert(M)), t.update(), u.selectAll("." + x.handle).attr("cx", a(t.value())), t.show() && u.select("." + x.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var f, p, g, _ = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Dn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Dn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Dn([t.girth() / 2, t.knob()]) + 7 + w : -Dn([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, g = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", _ = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", u.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", x.label).style("text-anchor", g).style("alignment-baseline", _).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, Jm = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), u = I(a).attr("class", x.widget + " " + x.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(x.selected, t.value() == 1);
  if (u.append("path").attr("d", Yu(2 * t.size(), 2 * t.size())).attr("class", x.track), u.append("circle").attr("class", x.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), u.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", x.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Si(4 * t.size(), 2 * t.size(), o);
    u.append("text").text(i).attr("class", x.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, Qm = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, u = Hh(a), l = Wt().domain([0, a - 1]).range([0, t.size()]), s = Wt().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = I(c).attr("class", x.widget + " " + x.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + x.radiobutton).data(u).enter().append("g").attr("class", x.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + s(_) + ")" : "translate(" + l(_) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), f.attr("class", x.background).on("mouseover", function() {
    I(this).classed(x.lit, !0), I(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(x.lit, !1), I(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), p.attr("class", x.symbol), p.filter((_) => _ == t.value()).classed(x.selected, !0), h.on("click", t.click);
  const g = Si(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", x.label).text(function(_, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, cr = (t, n) => {
  switch (t.type) {
    case "button":
      return Wm(t);
    case "slider":
      return Zm(t);
    case "radio":
      return Qm(t);
    case "toggle":
      return Jm(t);
  }
}, t1 = "_displayPanel_pb0r4_1", n1 = "_controlPanel_pb0r4_8", Qo = {
  displayPanel: t1,
  controlPanel: n1
}, e1 = (t, n) => {
  const e = $m(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  );
  console.log(t);
  const r = Ac("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", Qo.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), u = r.append("div").attr("id", o).attr("class", "d3-widgets " + Qo.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && u.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && a.style("border", n.display_border), n.debug && u.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: a, controls: u, grid: e };
};
var Gu = typeof global == "object" && global && global.Object === Object && global, r1 = typeof self == "object" && self && self.Object === Object && self, yt = Gu || r1 || Function("return this")(), bt = yt.Symbol, Vu = Object.prototype, i1 = Vu.hasOwnProperty, o1 = Vu.toString, an = bt ? bt.toStringTag : void 0;
function a1(t) {
  var n = i1.call(t, an), e = t[an];
  try {
    t[an] = void 0;
    var r = !0;
  } catch {
  }
  var i = o1.call(t);
  return r && (n ? t[an] = e : delete t[an]), i;
}
var u1 = Object.prototype, s1 = u1.toString;
function l1(t) {
  return s1.call(t);
}
var c1 = "[object Null]", f1 = "[object Undefined]", ta = bt ? bt.toStringTag : void 0;
function Rt(t) {
  return t == null ? t === void 0 ? f1 : c1 : ta && ta in Object(t) ? a1(t) : l1(t);
}
function xt(t) {
  return t != null && typeof t == "object";
}
var h1 = "[object Symbol]";
function Be(t) {
  return typeof t == "symbol" || xt(t) && Rt(t) == h1;
}
function zn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var H = Array.isArray, na = bt ? bt.prototype : void 0, ea = na ? na.toString : void 0;
function Ku(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return zn(t, Ku) + "";
  if (Be(t))
    return ea ? ea.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var p1 = /\s/;
function d1(t) {
  for (var n = t.length; n-- && p1.test(t.charAt(n)); )
    ;
  return n;
}
var g1 = /^\s+/;
function y1(t) {
  return t && t.slice(0, d1(t) + 1).replace(g1, "");
}
function ht(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ra = NaN, _1 = /^[-+]0x[0-9a-f]+$/i, v1 = /^0b[01]+$/i, m1 = /^0o[0-7]+$/i, w1 = parseInt;
function b1(t) {
  if (typeof t == "number")
    return t;
  if (Be(t))
    return ra;
  if (ht(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ht(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = y1(t);
  var e = v1.test(t);
  return e || m1.test(t) ? w1(t.slice(2), e ? 2 : 8) : _1.test(t) ? ra : +t;
}
var x1 = 1 / 0, M1 = 17976931348623157e292;
function fr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = b1(t), t === x1 || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * M1;
  }
  return t === t ? t : 0;
}
function Xe(t) {
  return t;
}
var A1 = "[object AsyncFunction]", $1 = "[object Function]", N1 = "[object GeneratorFunction]", T1 = "[object Proxy]";
function Wu(t) {
  if (!ht(t))
    return !1;
  var n = Rt(t);
  return n == $1 || n == N1 || n == A1 || n == T1;
}
var hr = yt["__core-js_shared__"], ia = function() {
  var t = /[^.]+$/.exec(hr && hr.keys && hr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function S1(t) {
  return !!ia && ia in t;
}
var E1 = Function.prototype, k1 = E1.toString;
function jt(t) {
  if (t != null) {
    try {
      return k1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var P1 = /[\\^$.*+?()[\]{}|]/g, O1 = /^\[object .+?Constructor\]$/, z1 = Function.prototype, C1 = Object.prototype, I1 = z1.toString, R1 = C1.hasOwnProperty, j1 = RegExp(
  "^" + I1.call(R1).replace(P1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function F1(t) {
  if (!ht(t) || S1(t))
    return !1;
  var n = Wu(t) ? j1 : O1;
  return n.test(jt(t));
}
function D1(t, n) {
  return t == null ? void 0 : t[n];
}
function Ft(t, n) {
  var e = D1(t, n);
  return F1(e) ? e : void 0;
}
var Hr = Ft(yt, "WeakMap");
function L1(t, n, e) {
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
var q1 = 800, B1 = 16, X1 = Date.now;
function H1(t) {
  var n = 0, e = 0;
  return function() {
    var r = X1(), i = B1 - (r - e);
    if (e = r, i > 0) {
      if (++n >= q1)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function U1(t) {
  return function() {
    return t;
  };
}
var Ne = function() {
  try {
    var t = Ft(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Y1 = Ne ? function(t, n) {
  return Ne(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: U1(n),
    writable: !0
  });
} : Xe, G1 = H1(Y1);
function V1(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var K1 = 9007199254740991, W1 = /^(?:0|[1-9]\d*)$/;
function He(t, n) {
  var e = typeof t;
  return n = n ?? K1, !!n && (e == "number" || e != "symbol" && W1.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Z1(t, n, e) {
  n == "__proto__" && Ne ? Ne(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Ue(t, n) {
  return t === n || t !== t && n !== n;
}
var J1 = Object.prototype, Q1 = J1.hasOwnProperty;
function tw(t, n, e) {
  var r = t[n];
  (!(Q1.call(t, n) && Ue(r, e)) || e === void 0 && !(n in t)) && Z1(t, n, e);
}
var oa = Math.max;
function nw(t, n, e) {
  return n = oa(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = oa(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var u = Array(n + 1); ++i < n; )
      u[i] = r[i];
    return u[n] = e(a), L1(t, this, u);
  };
}
function ew(t, n) {
  return G1(nw(t, n, Xe), t + "");
}
var rw = 9007199254740991;
function ki(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rw;
}
function nn(t) {
  return t != null && ki(t.length) && !Wu(t);
}
function iw(t, n, e) {
  if (!ht(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? nn(e) && He(n, e.length) : r == "string" && n in e) ? Ue(e[n], t) : !1;
}
var ow = Object.prototype;
function Zu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ow;
  return t === e;
}
function Ju(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var aw = "[object Arguments]";
function aa(t) {
  return xt(t) && Rt(t) == aw;
}
var Qu = Object.prototype, uw = Qu.hasOwnProperty, sw = Qu.propertyIsEnumerable, ts = aa(/* @__PURE__ */ function() {
  return arguments;
}()) ? aa : function(t) {
  return xt(t) && uw.call(t, "callee") && !sw.call(t, "callee");
};
function lw() {
  return !1;
}
var ns = typeof exports == "object" && exports && !exports.nodeType && exports, ua = ns && typeof module == "object" && module && !module.nodeType && module, cw = ua && ua.exports === ns, sa = cw ? yt.Buffer : void 0, fw = sa ? sa.isBuffer : void 0, Ur = fw || lw, hw = "[object Arguments]", pw = "[object Array]", dw = "[object Boolean]", gw = "[object Date]", yw = "[object Error]", _w = "[object Function]", vw = "[object Map]", mw = "[object Number]", ww = "[object Object]", bw = "[object RegExp]", xw = "[object Set]", Mw = "[object String]", Aw = "[object WeakMap]", $w = "[object ArrayBuffer]", Nw = "[object DataView]", Tw = "[object Float32Array]", Sw = "[object Float64Array]", Ew = "[object Int8Array]", kw = "[object Int16Array]", Pw = "[object Int32Array]", Ow = "[object Uint8Array]", zw = "[object Uint8ClampedArray]", Cw = "[object Uint16Array]", Iw = "[object Uint32Array]", N = {};
N[Tw] = N[Sw] = N[Ew] = N[kw] = N[Pw] = N[Ow] = N[zw] = N[Cw] = N[Iw] = !0;
N[hw] = N[pw] = N[$w] = N[dw] = N[Nw] = N[gw] = N[yw] = N[_w] = N[vw] = N[mw] = N[ww] = N[bw] = N[xw] = N[Mw] = N[Aw] = !1;
function Rw(t) {
  return xt(t) && ki(t.length) && !!N[Rt(t)];
}
function jw(t) {
  return function(n) {
    return t(n);
  };
}
var es = typeof exports == "object" && exports && !exports.nodeType && exports, dn = es && typeof module == "object" && module && !module.nodeType && module, Fw = dn && dn.exports === es, pr = Fw && Gu.process, la = function() {
  try {
    var t = dn && dn.require && dn.require("util").types;
    return t || pr && pr.binding && pr.binding("util");
  } catch {
  }
}(), ca = la && la.isTypedArray, rs = ca ? jw(ca) : Rw, Dw = Object.prototype, Lw = Dw.hasOwnProperty;
function is(t, n) {
  var e = H(t), r = !e && ts(t), i = !e && !r && Ur(t), o = !e && !r && !i && rs(t), a = e || r || i || o, u = a ? Ju(t.length, String) : [], l = u.length;
  for (var s in t)
    (n || Lw.call(t, s)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    He(s, l))) && u.push(s);
  return u;
}
function os(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var qw = os(Object.keys, Object), Bw = Object.prototype, Xw = Bw.hasOwnProperty;
function Hw(t) {
  if (!Zu(t))
    return qw(t);
  var n = [];
  for (var e in Object(t))
    Xw.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ye(t) {
  return nn(t) ? is(t) : Hw(t);
}
function Uw(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Yw = Object.prototype, Gw = Yw.hasOwnProperty;
function Vw(t) {
  if (!ht(t))
    return Uw(t);
  var n = Zu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Gw.call(t, r)) || e.push(r);
  return e;
}
function Kw(t) {
  return nn(t) ? is(t, !0) : Vw(t);
}
var Ww = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zw = /^\w*$/;
function Pi(t, n) {
  if (H(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Be(t) ? !0 : Zw.test(t) || !Ww.test(t) || n != null && t in Object(n);
}
var $n = Ft(Object, "create");
function Jw() {
  this.__data__ = $n ? $n(null) : {}, this.size = 0;
}
function Qw(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var tb = "__lodash_hash_undefined__", nb = Object.prototype, eb = nb.hasOwnProperty;
function rb(t) {
  var n = this.__data__;
  if ($n) {
    var e = n[t];
    return e === tb ? void 0 : e;
  }
  return eb.call(n, t) ? n[t] : void 0;
}
var ib = Object.prototype, ob = ib.hasOwnProperty;
function ab(t) {
  var n = this.__data__;
  return $n ? n[t] !== void 0 : ob.call(n, t);
}
var ub = "__lodash_hash_undefined__";
function sb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = $n && n === void 0 ? ub : n, this;
}
function Ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ct.prototype.clear = Jw;
Ct.prototype.delete = Qw;
Ct.prototype.get = rb;
Ct.prototype.has = ab;
Ct.prototype.set = sb;
function lb() {
  this.__data__ = [], this.size = 0;
}
function Ge(t, n) {
  for (var e = t.length; e--; )
    if (Ue(t[e][0], n))
      return e;
  return -1;
}
var cb = Array.prototype, fb = cb.splice;
function hb(t) {
  var n = this.__data__, e = Ge(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : fb.call(n, e, 1), --this.size, !0;
}
function pb(t) {
  var n = this.__data__, e = Ge(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function db(t) {
  return Ge(this.__data__, t) > -1;
}
function gb(t, n) {
  var e = this.__data__, r = Ge(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = lb;
_t.prototype.delete = hb;
_t.prototype.get = pb;
_t.prototype.has = db;
_t.prototype.set = gb;
var Nn = Ft(yt, "Map");
function yb() {
  this.size = 0, this.__data__ = {
    hash: new Ct(),
    map: new (Nn || _t)(),
    string: new Ct()
  };
}
function _b(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Ve(t, n) {
  var e = t.__data__;
  return _b(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function vb(t) {
  var n = Ve(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function mb(t) {
  return Ve(this, t).get(t);
}
function wb(t) {
  return Ve(this, t).has(t);
}
function bb(t, n) {
  var e = Ve(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = yb;
vt.prototype.delete = vb;
vt.prototype.get = mb;
vt.prototype.has = wb;
vt.prototype.set = bb;
var xb = "Expected a function";
function Oi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(xb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Oi.Cache || vt)(), e;
}
Oi.Cache = vt;
var Mb = 500;
function Ab(t) {
  var n = Oi(t, function(r) {
    return e.size === Mb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var $b = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nb = /\\(\\)?/g, Tb = Ab(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace($b, function(e, r, i, o) {
    n.push(i ? o.replace(Nb, "$1") : r || e);
  }), n;
});
function Ke(t) {
  return t == null ? "" : Ku(t);
}
function We(t, n) {
  return H(t) ? t : Pi(t, n) ? [t] : Tb(Ke(t));
}
function Cn(t) {
  if (typeof t == "string" || Be(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function zi(t, n) {
  n = We(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Cn(n[e++])];
  return e && e == r ? t : void 0;
}
function Sb(t, n, e) {
  var r = t == null ? void 0 : zi(t, n);
  return r === void 0 ? e : r;
}
function as(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Eb = os(Object.getPrototypeOf, Object);
function kb(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Pb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, kb(t, n, e);
}
var Ob = "\\ud800-\\udfff", zb = "\\u0300-\\u036f", Cb = "\\ufe20-\\ufe2f", Ib = "\\u20d0-\\u20ff", Rb = zb + Cb + Ib, jb = "\\ufe0e\\ufe0f", Fb = "\\u200d", Db = RegExp("[" + Fb + Ob + Rb + jb + "]");
function us(t) {
  return Db.test(t);
}
function Lb(t) {
  return t.split("");
}
var ss = "\\ud800-\\udfff", qb = "\\u0300-\\u036f", Bb = "\\ufe20-\\ufe2f", Xb = "\\u20d0-\\u20ff", Hb = qb + Bb + Xb, Ub = "\\ufe0e\\ufe0f", Yb = "[" + ss + "]", Yr = "[" + Hb + "]", Gr = "\\ud83c[\\udffb-\\udfff]", Gb = "(?:" + Yr + "|" + Gr + ")", ls = "[^" + ss + "]", cs = "(?:\\ud83c[\\udde6-\\uddff]){2}", fs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Vb = "\\u200d", hs = Gb + "?", ps = "[" + Ub + "]?", Kb = "(?:" + Vb + "(?:" + [ls, cs, fs].join("|") + ")" + ps + hs + ")*", Wb = ps + hs + Kb, Zb = "(?:" + [ls + Yr + "?", Yr, cs, fs, Yb].join("|") + ")", Jb = RegExp(Gr + "(?=" + Gr + ")|" + Zb + Wb, "g");
function Qb(t) {
  return t.match(Jb) || [];
}
function tx(t) {
  return us(t) ? Qb(t) : Lb(t);
}
function nx(t) {
  return function(n) {
    n = Ke(n);
    var e = us(n) ? tx(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Pb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var ex = nx("toUpperCase");
function rx(t) {
  return ex(Ke(t).toLowerCase());
}
function ix() {
  this.__data__ = new _t(), this.size = 0;
}
function ox(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function ax(t) {
  return this.__data__.get(t);
}
function ux(t) {
  return this.__data__.has(t);
}
var sx = 200;
function lx(t, n) {
  var e = this.__data__;
  if (e instanceof _t) {
    var r = e.__data__;
    if (!Nn || r.length < sx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new vt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function lt(t) {
  var n = this.__data__ = new _t(t);
  this.size = n.size;
}
lt.prototype.clear = ix;
lt.prototype.delete = ox;
lt.prototype.get = ax;
lt.prototype.has = ux;
lt.prototype.set = lx;
function Ci(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function ds() {
  return [];
}
var cx = Object.prototype, fx = cx.propertyIsEnumerable, fa = Object.getOwnPropertySymbols, gs = fa ? function(t) {
  return t == null ? [] : (t = Object(t), Ci(fa(t), function(n) {
    return fx.call(t, n);
  }));
} : ds, hx = Object.getOwnPropertySymbols, px = hx ? function(t) {
  for (var n = []; t; )
    as(n, gs(t)), t = Eb(t);
  return n;
} : ds;
function ys(t, n, e) {
  var r = n(t);
  return H(t) ? r : as(r, e(t));
}
function ha(t) {
  return ys(t, Ye, gs);
}
function dx(t) {
  return ys(t, Kw, px);
}
var Vr = Ft(yt, "DataView"), Kr = Ft(yt, "Promise"), Wr = Ft(yt, "Set"), pa = "[object Map]", gx = "[object Object]", da = "[object Promise]", ga = "[object Set]", ya = "[object WeakMap]", _a = "[object DataView]", yx = jt(Vr), _x = jt(Nn), vx = jt(Kr), mx = jt(Wr), wx = jt(Hr), ut = Rt;
(Vr && ut(new Vr(new ArrayBuffer(1))) != _a || Nn && ut(new Nn()) != pa || Kr && ut(Kr.resolve()) != da || Wr && ut(new Wr()) != ga || Hr && ut(new Hr()) != ya) && (ut = function(t) {
  var n = Rt(t), e = n == gx ? t.constructor : void 0, r = e ? jt(e) : "";
  if (r)
    switch (r) {
      case yx:
        return _a;
      case _x:
        return pa;
      case vx:
        return da;
      case mx:
        return ga;
      case wx:
        return ya;
    }
  return n;
});
var va = yt.Uint8Array, bx = "__lodash_hash_undefined__";
function xx(t) {
  return this.__data__.set(t, bx), this;
}
function Mx(t) {
  return this.__data__.has(t);
}
function Te(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new vt(); ++n < e; )
    this.add(t[n]);
}
Te.prototype.add = Te.prototype.push = xx;
Te.prototype.has = Mx;
function Ax(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function $x(t, n) {
  return t.has(n);
}
var Nx = 1, Tx = 2;
function _s(t, n, e, r, i, o) {
  var a = e & Nx, u = t.length, l = n.length;
  if (u != l && !(a && l > u))
    return !1;
  var s = o.get(t), c = o.get(n);
  if (s && c)
    return s == n && c == t;
  var h = -1, f = !0, p = e & Tx ? new Te() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < u; ) {
    var g = t[h], _ = n[h];
    if (r)
      var w = a ? r(_, g, h, n, t, o) : r(g, _, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Ax(n, function(b, d) {
        if (!$x(p, d) && (g === b || i(g, b, e, r, o)))
          return p.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function vs(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Sx(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Ex = 1, kx = 2, Px = "[object Boolean]", Ox = "[object Date]", zx = "[object Error]", Cx = "[object Map]", Ix = "[object Number]", Rx = "[object RegExp]", jx = "[object Set]", Fx = "[object String]", Dx = "[object Symbol]", Lx = "[object ArrayBuffer]", qx = "[object DataView]", ma = bt ? bt.prototype : void 0, dr = ma ? ma.valueOf : void 0;
function Bx(t, n, e, r, i, o, a) {
  switch (e) {
    case qx:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Lx:
      return !(t.byteLength != n.byteLength || !o(new va(t), new va(n)));
    case Px:
    case Ox:
    case Ix:
      return Ue(+t, +n);
    case zx:
      return t.name == n.name && t.message == n.message;
    case Rx:
    case Fx:
      return t == n + "";
    case Cx:
      var u = vs;
    case jx:
      var l = r & Ex;
      if (u || (u = Sx), t.size != n.size && !l)
        return !1;
      var s = a.get(t);
      if (s)
        return s == n;
      r |= kx, a.set(t, n);
      var c = _s(u(t), u(n), r, i, o, a);
      return a.delete(t), c;
    case Dx:
      if (dr)
        return dr.call(t) == dr.call(n);
  }
  return !1;
}
var Xx = 1, Hx = Object.prototype, Ux = Hx.hasOwnProperty;
function Yx(t, n, e, r, i, o) {
  var a = e & Xx, u = ha(t), l = u.length, s = ha(n), c = s.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = u[h];
    if (!(a ? f in n : Ux.call(n, f)))
      return !1;
  }
  var p = o.get(t), g = o.get(n);
  if (p && g)
    return p == n && g == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = u[h];
    var b = t[f], d = n[f];
    if (r)
      var M = a ? r(d, b, f, n, t, o) : r(b, d, f, t, n, o);
    if (!(M === void 0 ? b === d || i(b, d, e, r, o) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var Gx = 1, wa = "[object Arguments]", ba = "[object Array]", Yn = "[object Object]", Vx = Object.prototype, xa = Vx.hasOwnProperty;
function Kx(t, n, e, r, i, o) {
  var a = H(t), u = H(n), l = a ? ba : ut(t), s = u ? ba : ut(n);
  l = l == wa ? Yn : l, s = s == wa ? Yn : s;
  var c = l == Yn, h = s == Yn, f = l == s;
  if (f && Ur(t)) {
    if (!Ur(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new lt()), a || rs(t) ? _s(t, n, e, r, i, o) : Bx(t, n, l, e, r, i, o);
  if (!(e & Gx)) {
    var p = c && xa.call(t, "__wrapped__"), g = h && xa.call(n, "__wrapped__");
    if (p || g) {
      var _ = p ? t.value() : t, w = g ? n.value() : n;
      return o || (o = new lt()), i(_, w, e, r, o);
    }
  }
  return f ? (o || (o = new lt()), Yx(t, n, e, r, i, o)) : !1;
}
function Ii(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !xt(t) && !xt(n) ? t !== t && n !== n : Kx(t, n, e, r, Ii, i);
}
var Wx = 1, Zx = 2;
function Jx(t, n, e, r) {
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
    var u = a[0], l = t[u], s = a[1];
    if (a[2]) {
      if (l === void 0 && !(u in t))
        return !1;
    } else {
      var c = new lt(), h;
      if (!(h === void 0 ? Ii(s, l, Wx | Zx, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function ms(t) {
  return t === t && !ht(t);
}
function Qx(t) {
  for (var n = Ye(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ms(i)];
  }
  return n;
}
function ws(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function t2(t) {
  var n = Qx(t);
  return n.length == 1 && n[0][2] ? ws(n[0][0], n[0][1]) : function(e) {
    return e === t || Jx(e, t, n);
  };
}
function n2(t, n) {
  return t != null && n in Object(t);
}
function bs(t, n, e) {
  n = We(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Cn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && ki(i) && He(a, i) && (H(t) || ts(t)));
}
function e2(t, n) {
  return t != null && bs(t, n, n2);
}
var r2 = 1, i2 = 2;
function o2(t, n) {
  return Pi(t) && ms(n) ? ws(Cn(t), n) : function(e) {
    var r = Sb(e, t);
    return r === void 0 && r === n ? e2(e, t) : Ii(n, r, r2 | i2);
  };
}
function xs(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function a2(t) {
  return function(n) {
    return zi(n, t);
  };
}
function u2(t) {
  return Pi(t) ? xs(Cn(t)) : a2(t);
}
function Ze(t) {
  return typeof t == "function" ? t : t == null ? Xe : typeof t == "object" ? H(t) ? o2(t[0], t[1]) : t2(t) : u2(t);
}
function s2(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), u = a.length; u--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var l2 = s2();
function c2(t, n) {
  return t && l2(t, n, Ye);
}
function f2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!nn(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ri = f2(c2);
function h2(t) {
  return xt(t) && nn(t);
}
function p2(t) {
  return typeof t == "function" ? t : Xe;
}
function Tn(t, n) {
  var e = H(t) ? V1 : Ri;
  return e(t, p2(n));
}
function d2(t, n) {
  return zn(n, function(e) {
    return [e, t[e]];
  });
}
function g2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var y2 = "[object Map]", _2 = "[object Set]";
function v2(t) {
  return function(n) {
    var e = ut(n);
    return e == y2 ? vs(n) : e == _2 ? g2(n) : d2(n, t(n));
  };
}
var m2 = v2(Ye);
function w2(t, n) {
  var e = [];
  return Ri(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function b2(t, n) {
  var e = H(t) ? Ci : w2;
  return e(t, Ze(n));
}
function x2(t, n) {
  var e = -1, r = nn(t) ? Array(t.length) : [];
  return Ri(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function ji(t, n) {
  var e = H(t) ? zn : x2;
  return e(t, Ze(n));
}
var M2 = Object.prototype, A2 = M2.hasOwnProperty;
function $2(t, n) {
  return t != null && A2.call(t, n);
}
function N2(t, n) {
  return t != null && bs(t, n, $2);
}
var T2 = "[object Boolean]";
function S2(t) {
  return t === !0 || t === !1 || xt(t) && Rt(t) == T2;
}
function E2(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
function k2(t, n, e, r) {
  if (!ht(t))
    return t;
  n = We(n, t);
  for (var i = -1, o = n.length, a = o - 1, u = t; u != null && ++i < o; ) {
    var l = Cn(n[i]), s = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = u[l];
      s = void 0, s === void 0 && (s = ht(c) ? c : He(n[i + 1]) ? [] : {});
    }
    tw(u, l, s), u = u[l];
  }
  return t;
}
function P2(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], u = zi(t, a);
    e(u, a) && k2(o, We(a, t), u);
  }
  return o;
}
function Ms(t, n) {
  if (t == null)
    return {};
  var e = zn(dx(t), function(r) {
    return [r];
  });
  return n = Ze(n), P2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var O2 = Math.ceil, z2 = Math.max;
function C2(t, n, e, r) {
  for (var i = -1, o = z2(O2((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function I2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && iw(n, e, r) && (e = r = void 0), n = fr(n), e === void 0 ? (e = n, n = 0) : e = fr(e), r = r === void 0 ? n < e ? 1 : -1 : fr(r), C2(n, e, r);
  };
}
var Zr = I2();
function R2() {
  var t = arguments, n = Ke(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function gr(t, n) {
  return t && t.length ? E2(t, Ze(n)) : 0;
}
var j2 = Math.max;
function F2(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Ci(t, function(e) {
    if (h2(e))
      return n = j2(e.length, n), !0;
  }), Ju(n, function(e) {
    return zn(t, xs(e));
  });
}
var Se = ew(F2);
const C = {
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
}, k = {
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
}, As = (t) => ji(m2(t), (n) => (n[1].id = n[0], n[1].label = R2(rx(n[0]), /_/g, " "), n[1])), $s = (t, n) => Tn(t, (e, r) => e.widget = n[r]), Ns = (t) => Ms(t, (n) => N2(n, "range")), Ts = (t) => Ms(t, (n) => S2(n.default)), Ss = As(Ns(k)), Es = As(Ts(k)), ne = ji(
  Ss,
  (t) => Vm().id(t.id).label(t.label).range(t.range).value(t.default).girth(C.widgets.slider_girth).knob(C.widgets.slider_knob).size(C.widgets.slider_size)
), ee = ji(
  Es,
  (t) => Km().id(t.id).label(t.label).value(t.default).labelposition(C.widgets.toggle_label_pos)
);
$s(Es, ee);
$s(Ss, ne);
const wt = Ei().actions(["play", "pause"]), Je = Ei().actions(["back"]), Qe = Ei().actions(["rewind"]), D2 = [wt, Je, Qe], L2 = (t, n) => {
  const e = n.position(C.widgets.slider_anchor.x, Zr(ne.length).map((i) => C.widgets.slider_anchor.y + C.widgets.slider_gap * i)), r = n.position(C.widgets.toggle_anchor.x, Zr(ee.length).map((i) => C.widgets.toggle_anchor.y + C.widgets.toggle_gap * i));
  ne.forEach((i, o) => i.position(e[o])), ee.forEach((i, o) => i.position(r[o])), wt.position(n.position(C.widgets.playbutton_anchor.x, C.widgets.playbutton_anchor.y)).size(C.widgets.playbutton_size), Qe.position(n.position(C.widgets.backbutton_anchor.x, C.widgets.backbutton_anchor.y)), Je.position(n.position(C.widgets.resetbutton_anchor.x, C.widgets.resetbutton_anchor.y)), t.selectAll(null).data(ne).enter().append(cr), t.selectAll(null).data(ee).enter().append(cr), t.selectAll(null).data(D2).enter().append(cr);
}, q2 = (t) => {
  Tn(Ns(k), (n) => n.widget.reset(t, n.default)), Tn(Ts(k), (n) => n.widget.reset(t, n.default));
};
function ks(t, n) {
  return [t % n, Math.floor(t / n)];
}
const B2 = {
  n4: Se([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Se([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function yr(t, n, e = "periodic", r = "n8") {
  const i = [];
  return B2[r].forEach((o) => {
    var a = o[1], u = o[0];
    const l = ks(t, n), s = l[0], c = l[1], h = s + u, f = c + a;
    (e == "dirichlet" ? !(a == 0 && u == 0) && h < n && f < n && h >= 0 && f >= 0 : !(a == 0 && u == 0)) && i.push(n * ((f + n) % n) + (h + n) % n);
  }), i;
}
const X2 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const u = Zr(i * i).map(function(f) {
    const p = ks(f, i);
    return {
      m: p[0],
      n: p[1],
      x: o * (p[0] + 0.5) - e / 2,
      y: a * (p[1] + 0.5) - e / 2
    };
  });
  u.forEach(function(f, p) {
    f.neighbors = yr(p, i, n, r).map((g) => u[g]), f.cell = () => [
      { x: f.x + o / 2, y: f.y + a / 2 },
      { x: f.x - o / 2, y: f.y + a / 2 },
      { x: f.x - o / 2, y: f.y - a / 2 },
      { x: f.x + o / 2, y: f.y - a / 2 },
      { x: f.x + o / 2, y: f.y + a / 2 }
    ], f.random_interior_point = () => ({
      x: f.x + o * (Math.random() - 0.5),
      y: f.y + a * (Math.random() - 0.5)
    });
  });
  const l = function(f) {
    return typeof f < "u" ? (u.forEach(function(p) {
      p.x = (p.m + 0.5) * f / i - f / 2, p.y = (p.n + 0.5) * f / i - f / 2;
    }), e = f, o = e / i, a = e / i, this.L = e, this) : e;
  }, s = function(f) {
    return typeof f < "u" ? (u.forEach(function(p, g) {
      p.neighbors = yr(g, i, f, r).map((_) => u[_]);
    }), n = f, u.forEach((p) => {
      p.is_boundary = n == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : n;
  }, c = function(f) {
    return typeof f < "u" ? (u.forEach(function(p, g) {
      p.neighbors = yr(g, i, n, f).map((_) => u[_]);
    }), r = f, this) : r;
  }, h = function() {
    return n === "periodic" ? null : b2(u, (f) => f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: c,
    nodes: u,
    scale: l,
    boundary: s,
    boundary_cells: h
  };
};
Se([-1, 1, 0, 0], [0, 0, -1, 1]), Se([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const H2 = k.N;
k.dt;
var Sn = [];
const U2 = () => {
  k.timer = {}, k.tick = 0, Sn = X2(H2).boundary("periodic").nodes, Sn.forEach((n) => {
    n.u = Math.random(), n.v = Math.random(), n.w = Math.random();
  });
}, Y2 = () => {
  k.tick++;
  const t = k.dt, n = k.predation.widget.value(), e = k.competition.widget.value(), r = k.diffusion.widget.value();
  Tn(Sn, (i) => {
    i.du = t * i.u * (n * (i.v - i.w) + i.u - e * (i.v + i.w) - i.u * i.u) + t * r * gr(i.neighbors, (o) => o.u - i.u), i.dv = t * i.v * (n * (i.w - i.u) + i.v - e * (i.u + i.w) - i.v * i.v) + t * r * gr(i.neighbors, (o) => o.v - i.v), i.dw = t * i.w * (n * (i.u - i.v) + i.w - e * (i.u + i.v) - i.w * i.w) + t * r * gr(i.neighbors, (o) => o.w - i.w);
  }), Tn(Sn, (i) => {
    i.u += i.du, i.v += i.dv, i.w += i.dw, i.u < 0 && (i.u = 0), i.v < 0 && (i.v = 0), i.w < 0 && (i.w = 0);
  });
};
k.N;
const re = si().domain([-0.5, 0.5]), ie = si().domain([-0.5, 0.5]);
var oe, Jr, Qr;
const Fi = (t, n) => {
  oe.clearRect(0, 0, Jr, Qr), Sn.forEach((e) => {
    const r = e.cell(), i = Math.floor(255 * (k.show_species_1.widget.value() ? e.u : 0)), o = Math.floor(255 * (k.show_species_2.widget.value() ? e.v : 0)), a = Math.floor(255 * (k.show_species_3.widget.value() ? e.w : 0));
    oe.fillStyle = "rgb(" + i + "," + o + "," + a + ")", oe.fillRect(re(r[2].x), ie(r[2].y), re(r[0].x) - re(r[2].x), ie(r[0].y) - ie(r[2].y));
  });
}, G2 = (t, n) => {
  Fi();
}, V2 = (t, n) => {
  Jr = n.display_size.width, Qr = n.display_size.height, re.range([0, Jr]), ie.range([0, Qr]), oe = t.node().getContext("2d"), Fi();
};
function K2(t, n) {
  Y2(), Fi();
}
function Ps(t, n) {
  U2(), V2(t, n);
}
function _r(t, n) {
  G2();
}
var Ma = {};
const W2 = (t, n) => {
  wt.value() == 1 ? Ma = ef(() => K2(), C.simulation.delay) : Ma.stop();
}, Z2 = (t, n, e) => {
  Qe.update(() => q2(n)), wt.update(() => W2()), Je.update(() => Ps(t, e)), k.show_species_1.widget.update(() => _r()), k.show_species_2.widget.update(() => _r()), k.show_species_3.widget.update(() => _r());
}, J2 = {
  name: "@explorables/cycledelic",
  title: "Cycledelic",
  subtitle: "The spatial rock-paper-scissors game",
  description: "The explorable illustrates dynamic pattern formation and spiral waves in a cyclic reaction-diffusion system. In the model three species prey on each other in a cyclic way, A eating B, B eating C, and C eating A.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Q2(t, n = Os) {
  const e = e1(t, n), r = e.display, i = e.controls, o = e.grid;
  return L2(i, o), Z2(r, i, n), Ps(r, n), {
    halt() {
      wt.value() === 1 && wt.press(i);
    },
    reset() {
      wt.value() === 1 && wt.press(i), Qe.press(i), Je.press(i);
    },
    config: n,
    meta: J2
  };
}
export {
  Os as config,
  Q2 as default,
  Q2 as load,
  J2 as meta
};
