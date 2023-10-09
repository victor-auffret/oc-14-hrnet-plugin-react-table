import We, { useMemo as $, useState as q, useCallback as Ae } from "react";
var de = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function fr() {
  if (Le)
    return B;
  Le = 1;
  var T = We, C = Symbol.for("react.element"), O = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, y = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(j, p, k) {
    var f, b = {}, R = null, A = null;
    k !== void 0 && (R = "" + k), p.key !== void 0 && (R = "" + p.key), p.ref !== void 0 && (A = p.ref);
    for (f in p)
      m.call(p, f) && !N.hasOwnProperty(f) && (b[f] = p[f]);
    if (j && j.defaultProps)
      for (f in p = j.defaultProps, p)
        b[f] === void 0 && (b[f] = p[f]);
    return { $$typeof: C, type: j, key: R, ref: A, props: b, _owner: y.current };
  }
  return B.Fragment = O, B.jsx = E, B.jsxs = E, B;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function dr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var T = We, C = Symbol.for("react.element"), O = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), G = Symbol.iterator, L = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[L];
      return typeof r == "function" ? r : null;
    }
    var P = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ee = !1, D = !1, re = !1, c = !1, i = !1, u;
    u = Symbol.for("react.module.reference");
    function I(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === N || i || e === y || e === k || e === f || c || e === A || ee || D || re || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === E || e.$$typeof === j || e.$$typeof === p || // This needs to include all possible module reference object
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
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case O:
          return "Portal";
        case N:
          return "Profiler";
        case y:
          return "StrictMode";
        case k:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return ve(r) + ".Consumer";
          case E:
            var t = e;
            return ve(t._context) + ".Provider";
          case p:
            return te(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case R: {
            var s = e, l = s._payload, o = s._init;
            try {
              return w(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, V = 0, pe, he, ge, me, be, _e, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ye() {
      {
        if (V === 0) {
          pe = console.log, he = console.info, ge = console.warn, me = console.error, be = console.group, _e = console.groupCollapsed, ye = console.groupEnd;
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
        V++;
      }
    }
    function Me() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: pe
            }),
            info: F({}, e, {
              value: he
            }),
            warn: F({}, e, {
              value: ge
            }),
            error: F({}, e, {
              value: me
            }),
            group: F({}, e, {
              value: be
            }),
            groupCollapsed: F({}, e, {
              value: _e
            }),
            groupEnd: F({}, e, {
              value: ye
            })
          });
        }
        V < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = P.ReactCurrentDispatcher, ne;
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
            } catch (S) {
              a = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              a = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            a = S;
          }
          e();
        }
      } catch (S) {
        if (S && a && typeof S.stack == "string") {
          for (var n = S.stack.split(`
`), _ = a.stack.split(`
`), d = n.length - 1, h = _.length - 1; d >= 1 && h >= 0 && n[d] !== _[h]; )
            h--;
          for (; d >= 1 && h >= 0; d--, h--)
            if (n[d] !== _[h]) {
              if (d !== 1 || h !== 1)
                do
                  if (d--, h--, h < 0 || n[d] !== _[h]) {
                    var x = `
` + n[d].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, x), x;
                  }
                while (d >= 1 && h >= 0);
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
        case k:
          return z("Suspense");
        case f:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ue(e.render);
          case b:
            return K(e.type, r, t);
          case R: {
            var a = e, s = a._payload, l = a._init;
            try {
              return K(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, xe = {}, Te = P.ReactDebugCurrentFrame;
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
                var _ = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              n = d;
            }
            n && !(n instanceof Error) && (Z(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), Z(null)), n instanceof Error && !(n.message in xe) && (xe[n.message] = !0, Z(s), g("Failed %s type: %s", t, n.message), Z(null));
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
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Pe(e) {
      if (ze(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Ce(e);
    }
    var U = P.ReactCurrentOwner, He = {
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
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var t = w(U.current.type);
        se[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(U.current.type), e.ref), se[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          je || (je = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        $$typeof: C,
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
        var l, o = {}, n = null, _ = null;
        t !== void 0 && (Pe(t), n = "" + t), Xe(r) && (Pe(r.key), n = "" + r.key), Ke(r) && (_ = r.ref, Ze(r, s));
        for (l in r)
          X.call(r, l) && !He.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            o[l] === void 0 && (o[l] = d[l]);
        }
        if (n || _) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Qe(o, h), _ && er(o, h);
        }
        return rr(e, n, _, s, a, U.current, o);
      }
    }
    var le = P.ReactCurrentOwner, Se = P.ReactDebugCurrentFrame;
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
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    function Oe() {
      {
        if (le.current) {
          var e = w(le.current.type);
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
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var a = "";
        e && e._owner && e._owner !== le.current && (a = " It was passed a child from " + w(e._owner.type) + "."), W(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), W(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ce(a) && De(a, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = M(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), o; !(o = l.next()).done; )
              ce(o.value) && De(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var s = w(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            W(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Fe(e, r, t, a, s, l) {
      {
        var o = I(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ar(s);
          _ ? n += _ : n += Oe();
          var d;
          e === null ? d = "null" : ie(e) ? d = "array" : e !== void 0 && e.$$typeof === C ? (d = "<" + (w(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, n);
        }
        var h = tr(e, r, t, s, l);
        if (h == null)
          return h;
        if (o) {
          var x = r.children;
          if (x !== void 0)
            if (a)
              if (ie(x)) {
                for (var Y = 0; Y < x.length; Y++)
                  $e(x[Y], e);
                Object.freeze && Object.freeze(x);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(x, e);
        }
        return e === m ? ir(h) : or(h), h;
      }
    }
    function sr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    J.Fragment = m, J.jsx = ur, J.jsxs = cr;
  }()), J;
}
process.env.NODE_ENV === "production" ? de.exports = fr() : de.exports = dr();
var v = de.exports;
const fe = [10, 25, 50, 100], pr = (T = {
  data: [],
  columns: [],
  listNbPerPage: fe
}) => {
  const C = $(() => T.data, [T.data]), O = $(() => T.columns, [T.columns]), m = $(() => T.listNbPerPage.length > 0 ? T.listNbPerPage : fe, [T.listNbPerPage]), [y, N] = q(0), [E, j] = q(O[0].data ?? ""), [p, k] = q(!1), [f, b] = q(0), [R, A] = q(""), G = (c) => {
    R != c.target.value && (A(c.target.value), b(0));
  }, L = $(() => {
    if (R == "")
      return C;
    let c = [];
    for (let i = 0; i < C.length; i++) {
      let u = !1;
      for (const [I, te] of Object.entries(C[i]))
        if (!u && te.toLowerCase().includes(R.toLowerCase())) {
          c.push(C[i]), u = !0;
          break;
        }
    }
    return c;
  }, [C, R]), M = $(() => f > 0, [f]), P = $(
    () => (f + 1) * m[y] < L.length,
    [f, m, y, L.length]
  ), g = Ae(() => {
    M && b((c) => c - 1);
  }, [M]), Q = Ae(() => {
    P && b((c) => c + 1);
  }, [P]), ee = $(() => {
    const c = (i) => () => {
      document.querySelectorAll(".sorting, .sorting_asc, .sorting_desc").forEach((u) => {
        u.classList.remove("sorting_asc"), u.classList.remove("sorting_desc"), u.classList.remove("sorting"), u.id != `col-${i.toLowerCase().split(" ").join("-")}` ? u.classList.add("sorting") : u.classList.add(`sorting${p ? "_asc" : "_desc"}`);
      }), j(i), k((u) => !u), b(0);
    };
    return /* @__PURE__ */ v.jsx("thead", { children: /* @__PURE__ */ v.jsx("tr", { children: O.map(
      (i, u) => /* @__PURE__ */ v.jsx(
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
  }, [O, E, p]), D = $(() => {
    let c = L.sort((i, u) => {
      if (E in i && E in u) {
        if (i[E].toLocaleLowerCase() < u[E].toLocaleLowerCase())
          return 1;
        if (i[E].toLocaleLowerCase() > u[E].toLocaleLowerCase())
          return -1;
      }
      return 0;
    });
    return p ? c : c.reverse();
  }, [L, E, p]), re = (c) => {
    N(Number(c.target.value)), b(0);
  };
  return /* @__PURE__ */ v.jsxs("div", { id: "employee-table_wrapper", className: "dataTables_wrapper no-footer", children: [
    /* @__PURE__ */ v.jsx("div", { className: "dataTables_length", id: "employee-table_length", children: /* @__PURE__ */ v.jsxs("label", { htmlFor: "show", children: [
      "Show ",
      /* @__PURE__ */ v.jsxs("select", { name: "employee-table_length", "aria-controls": "employee-table", onChange: re, children: [
        " ",
        fe.map((c, i) => /* @__PURE__ */ v.jsxs("option", { value: i, children: [
          " ",
          c,
          " "
        ] }, `max-per-page-${i}`)),
        " "
      ] }),
      " entries"
    ] }) }),
    /* @__PURE__ */ v.jsx("div", { id: "employee-table_filter", className: "dataTables_filter", children: /* @__PURE__ */ v.jsxs("label", { htmlFor: "search", children: [
      "Search:",
      /* @__PURE__ */ v.jsx("input", { type: "text", name: "search", id: "search", "aria-controls": "employee-table", onChange: G })
    ] }) }),
    /* @__PURE__ */ v.jsxs("table", { id: "employee-table", className: "display dataTable", children: [
      ee,
      /* @__PURE__ */ v.jsx("tbody", { children: D.filter((c, i) => {
        const u = f * m[y], I = u + m[y];
        return u <= i && i < I;
      }).map(
        (c, i) => /* @__PURE__ */ v.jsx("tr", { role: "row", className: `${i % 2 == 0 ? "odd" : "even"}`, children: O.map((u, I) => /* @__PURE__ */ v.jsx("td", { children: c[u.data] }, `elem-${i}-to-${I}`)) }, `data-line-${i}`)
      ) })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "dataTables_info", id: "employee-table_info", role: "status", children: [
      "Showing ",
      D.length == 0 ? 0 : f * m[y] + 1,
      " to ",
      Math.min(D.length, f * m[y] + m[y]),
      " of ",
      D.length,
      " entries"
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "dataTables_paginate paging_simple_numbers", id: "employee-table_paginate", children: [
      /* @__PURE__ */ v.jsx(
        "a",
        {
          className: `paginate_button previous ${M ? "" : "disabled"}`,
          id: "employee-table_previous",
          onClick: g,
          "aria-controls": "employee-table",
          "data-dt-idx": 0,
          tabIndex: -1,
          children: "Previous"
        }
      ),
      /* @__PURE__ */ v.jsx("span", { children: Array.from(
        Array((D.length - D.length % m[y]) / m[y] + 1),
        (c, i) => /* @__PURE__ */ v.jsx(
          "a",
          {
            className: `paginate_button ${f == i ? "current" : ""}`,
            "aria-controls": "employee-table",
            "data-dt-idx": i + 1,
            tabIndex: 0,
            onClick: () => b(i),
            children: i + 1
          },
          `pagination-page-${i}`
        )
      ) }),
      /* @__PURE__ */ v.jsx(
        "a",
        {
          className: `paginate_button next ${P ? "" : "disabled"}`,
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
  pr as DataTableComponent
};
