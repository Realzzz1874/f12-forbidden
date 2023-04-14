var s = Object.defineProperty;
var d = (e, t, n) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var o = (e, t, n) => (d(e, typeof t != "symbol" ? t + "" : t, n), n);
class i {
  constructor() {
    o(this, "_t");
    this._t = 500, this.debug();
  }
  debug() {
    const t = new Function("debugger");
    setInterval(t, this._t);
  }
}
function c() {
  new i();
}
export {
  c as f12Forbidden
};
