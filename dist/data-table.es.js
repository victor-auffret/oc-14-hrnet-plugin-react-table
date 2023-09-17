import We, { useMemo as F, useState as B, useCallback as Ae } from "react";
var de = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function fr() {
  if (Ie)
    return J;
  Ie = 1;
  var x = We, E = Symbol.for("react.element"), $ = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, _ = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(j, v, D) {
    var h, T = {}, w = null, S = null;
    D !== void 0 && (w = "" + D), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (S = v.ref);
    for (h in v)
      g.call(v, h) && !I.hasOwnProperty(h) && (T[h] = v[h]);
    if (j && j.defaultProps)
      for (h in v = j.defaultProps, v)
        T[h] === void 0 && (T[h] = v[h]);
    return { $$typeof: E, type: j, key: w, ref: S, props: T, _owner: _.current };
  }
  return J.Fragment = $, J.jsx = y, J.jsxs = y, J;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function dr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var x = We, E = Symbol.for("react.element"), $ = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), j = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), P = Symbol.iterator, N = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[N];
      return typeof r == "function" ? r : null;
    }
    var C = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var a = C.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ee = !1, V = !1, re = !1, c = !1, i = !1, u;
    u = Symbol.for("react.module.reference");
    function L(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === I || i || e === _ || e === D || e === h || c || e === S || ee || V || re || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === y || e.$$typeof === j || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === u || e.getModuleId !== void 0));
    }
    function te(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case $:
          return "Portal";
        case I:
          return "Profiler";
        case _:
          return "StrictMode";
        case D:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return ve(r) + ".Consumer";
          case y:
            var t = e;
            return ve(t._context) + ".Provider";
          case v:
            return te(e, e.render, "ForwardRef");
          case T:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case w: {
            var s = e, l = s._payload, o = s._init;
            try {
              return O(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, U = 0, pe, he, me, ge, be, _e, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ye() {
      {
        if (U === 0) {
          pe = console.log, he = console.info, me = console.warn, ge = console.error, be = console.group, _e = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        U++;
      }
    }
    function Me() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: pe
            }),
            info: A({}, e, {
              value: he
            }),
            warn: A({}, e, {
              value: me
            }),
            error: A({}, e, {
              value: ge
            }),
            group: A({}, e, {
              value: be
            }),
            groupCollapsed: A({}, e, {
              value: _e
            }),
            groupEnd: A({}, e, {
              value: ye
            })
          });
        }
        U < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = C.ReactCurrentDispatcher, ne;
    function z(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            ne = a && a[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var oe = !1, H;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ve();
    }
    function Re(e, r) {
      if (!e || oe)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      oe = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = ae.current, ae.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (k) {
              a = k;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (k) {
              a = k;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            a = k;
          }
          e();
        }
      } catch (k) {
        if (k && a && typeof k.stack == "string") {
          for (var n = k.stack.split(`
`), b = a.stack.split(`
`), f = n.length - 1, p = b.length - 1; f >= 1 && p >= 0 && n[f] !== b[p]; )
            p--;
          for (; f >= 1 && p >= 0; f--, p--)
            if (n[f] !== b[p]) {
              if (f !== 1 || p !== 1)
                do
                  if (f--, p--, p < 0 || n[f] !== b[p]) {
                    var R = `
` + n[f].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, R), R;
                  }
                while (f >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ae.current = l, Me(), Error.prepareStackTrace = s;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? z(Y) : "";
      return typeof e == "function" && H.set(e, Ne), Ne;
    }
    function Ue(e, r, t) {
      return Re(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, qe(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case D:
          return z("Suspense");
        case h:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ue(e.render);
          case T:
            return K(e.type, r, t);
          case w: {
            var a = e, s = a._payload, l = a._init;
            try {
              return K(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, xe = {}, Te = C.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, s) {
      {
        var l = Function.call.bind(X);
        for (var o in e)
          if (l(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              n = f;
            }
            n && !(n instanceof Error) && (Z(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), Z(null)), n instanceof Error && !(n.message in xe) && (xe[n.message] = !0, Z(s), m("Failed %s type: %s", t, n.message), Z(null));
          }
      }
    }
    var Je = Array.isArray;
    function ie(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Ce(e) {
      if (ze(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Pe(e);
    }
    var q = C.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, we, se;
    se = {};
    function Ke(e) {
      if (X.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (X.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = O(q.current.type);
        se[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), e.ref), se[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          je || (je = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          we || (we = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, a, s, l, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function tr(e, r, t, a, s) {
      {
        var l, o = {}, n = null, b = null;
        t !== void 0 && (Ce(t), n = "" + t), Xe(r) && (Ce(r.key), n = "" + r.key), Ke(r) && (b = r.ref, Ze(r, s));
        for (l in r)
          X.call(r, l) && !He.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (l in f)
            o[l] === void 0 && (o[l] = f[l]);
        }
        if (n || b) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Qe(o, p), b && er(o, p);
        }
        return rr(e, n, b, s, a, q.current, o);
      }
    }
    var le = C.ReactCurrentOwner, Se = C.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Oe() {
      {
        if (le.current) {
          var e = O(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ke = {};
    function nr(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function $e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var a = "";
        e && e._owner && e._owner !== le.current && (a = " It was passed a child from " + O(e._owner.type) + "."), W(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), W(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ce(a) && $e(a, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = M(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), o; !(o = l.next()).done; )
              ce(o.value) && $e(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var s = O(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            W(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Fe(e, r, t, a, s, l) {
      {
        var o = L(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar(s);
          b ? n += b : n += Oe();
          var f;
          e === null ? f = "null" : ie(e) ? f = "array" : e !== void 0 && e.$$typeof === E ? (f = "<" + (O(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, n);
        }
        var p = tr(e, r, t, s, l);
        if (p == null)
          return p;
        if (o) {
          var R = r.children;
          if (R !== void 0)
            if (a)
              if (ie(R)) {
                for (var Y = 0; Y < R.length; Y++)
                  De(R[Y], e);
                Object.freeze && Object.freeze(R);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(R, e);
        }
        return e === g ? ir(p) : or(p), p;
      }
    }
    function sr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    G.Fragment = g, G.jsx = ur, G.jsxs = cr;
  }()), G;
}
process.env.NODE_ENV === "production" ? de.exports = fr() : de.exports = dr();
var d = de.exports;
const vr = "_dataTable_19so0_1", pr = {
  dataTable: vr
}, fe = [10, 25, 50, 100], mr = (x = {
  data: [],
  columns: [],
  listNbPerPage: fe
}) => {
  const E = F(() => x.data, [x.data]), $ = F(() => x.columns, [x.columns]), g = F(() => x.listNbPerPage.length > 0 ? x.listNbPerPage : fe, [x.listNbPerPage]), [_, I] = B(0), [y, j] = B($[0].data ?? ""), [v, D] = B(!1), [h, T] = B(""), w = (c) => T(c.target.value), S = F(() => {
    if (h == "")
      return E;
    let c = [];
    for (let i = 0; i < E.length; i++) {
      let u = !1;
      for (const [L, te] of Object.entries(E[i]))
        if (!u && te.toLowerCase().includes(h.toLowerCase())) {
          c.push(E[i]), u = !0;
          break;
        }
    }
    return c;
  }, [E, h]), [P, N] = B(0), M = F(() => P > 0, [P]), C = F(
    () => (P + 1) * g[_] < S.length,
    [P, g, _, S.length]
  ), m = Ae(() => {
    M && N((c) => c - 1);
  }, [M]), Q = Ae(() => {
    C && N((c) => c + 1);
  }, [C]), ee = F(() => {
    const c = (i) => () => {
      document.querySelectorAll(".sorting, .sorting_asc, .sorting_desc").forEach((u) => {
        u.classList.remove("sorting_asc"), u.classList.remove("sorting_desc"), u.classList.remove("sorting"), u.id != `col-${i.toLowerCase().split(" ").join("-")}` ? u.classList.add("sorting") : u.classList.add(`sorting${v ? "_asc" : "_desc"}`);
      }), j(i), D((u) => !u), N(0);
    };
    return /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { children: $.map(
      (i, u) => /* @__PURE__ */ d.jsx(
        "th",
        {
          scope: "col",
          id: `col-${i.title.toLowerCase().split(" ").join("")}`,
          className: `sorting${u == 0 ? "_asc" : ""}`,
          onClick: c(i.data),
          children: i.title
        },
        `col-${u}`
      )
    ) }) });
  }, [$, y, v]), V = F(() => {
    let c = S.sort((i, u) => {
      if (y in i && y in u) {
        if (i[y] < u[y])
          return 1;
        if (i[y] > u[y])
          return -1;
      }
      return 0;
    });
    return v ? c : c.reverse();
  }, [S, y, v]), re = (c) => {
    I(Number(c.target.value)), N(0);
  };
  return /* @__PURE__ */ d.jsxs("div", { id: "employee-table_wrapper", className: "dataTables_wrapper no-footer", children: [
    /* @__PURE__ */ d.jsx("div", { className: "dataTables_length", id: "employee-table_length", children: /* @__PURE__ */ d.jsxs("label", { htmlFor: "show", children: [
      "Show ",
      /* @__PURE__ */ d.jsxs("select", { name: "employee-table_length", "aria-controls": "employee-table", onChange: re, children: [
        " ",
        fe.map((c, i) => /* @__PURE__ */ d.jsxs("option", { value: i, children: [
          " ",
          c,
          " "
        ] }, `max-per-page-${i}`)),
        " "
      ] }),
      " entries"
    ] }) }),
    /* @__PURE__ */ d.jsx("div", { id: "employee-table_filter", className: "dataTables_filter", children: /* @__PURE__ */ d.jsxs("label", { htmlFor: "search", children: [
      "Search:",
      /* @__PURE__ */ d.jsx("input", { type: "text", name: "search", id: "search", "aria-controls": "employee-table", onChange: w })
    ] }) }),
    /* @__PURE__ */ d.jsxs("table", { id: "employee-table", className: pr.dataTable, children: [
      ee,
      /* @__PURE__ */ d.jsx("tbody", { children: V.filter((c, i) => {
        const u = P * g[_], L = u + g[_];
        return u <= i && i < L;
      }).map(
        (c, i) => /* @__PURE__ */ d.jsx("tr", { role: "row", className: `${i % 2 == 0 ? "odd" : "even"}`, children: $.map((u, L) => /* @__PURE__ */ d.jsx("td", { children: c[u.data] }, `elem-${i}-to-${L}`)) }, `data-line-${i}`)
      ) })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "dataTables_info", id: "employee-table_info", role: "status", children: [
      "Showing ",
      P * g[_] + 1,
      " to ",
      Math.min(E.length, P * g[_] + g[_]),
      " of ",
      E.length,
      " entries"
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "dataTables_paginate paging_simple_numbers", id: "employee-table_paginate", children: [
      /* @__PURE__ */ d.jsx(
        "a",
        {
          className: `paginate_button previous ${M ? "" : "disabled"}`,
          id: "employee-table_previous",
          onClick: m,
          "aria-controls": "employee-table",
          "data-dt-idx": 0,
          tabIndex: -1,
          children: "Previous"
        }
      ),
      /* @__PURE__ */ d.jsx("span", { children: Array.from(
        Array((V.length - V.length % g[_]) / g[_] + 1),
        (c, i) => /* @__PURE__ */ d.jsx(
          "a",
          {
            className: `paginate_button ${P == i ? "current" : ""}`,
            "aria-controls": "employee-table",
            "data-dt-idx": i + 1,
            tabIndex: 0,
            onClick: () => N(i),
            children: i + 1
          },
          `pagination-page-${i}`
        )
      ) }),
      /* @__PURE__ */ d.jsx(
        "a",
        {
          className: `paginate_button next ${C ? "" : "disabled"}`,
          "aria-controls": "employee-table",
          "data-dt-idx": "3",
          tabIndex: 0,
          id: "employee-table_next",
          onClick: Q,
          children: "Next"
        }
      )
    ] })
  ] });
};
export {
  mr as DataTableComponent
};
