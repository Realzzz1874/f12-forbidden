class Forbidden {
  private _t: number;
  constructor() {
    this._t = 500;
    this.debug();
  }
  debug() {
    const e = new Function('debugger');
    setInterval(e, this._t);
  }
}

export function f12Forbidden() {
  new Forbidden();
}