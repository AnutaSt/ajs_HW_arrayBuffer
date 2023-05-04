/* eslint-disable no-underscore-dangle */
export default class MathCalc {
  constructor(attack, distance) {
    this.distance = distance;
    this.attack = attack;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    let calc = value * (1 - (this.distance - 1) / 10);
    if (this.stoned) calc -= Math.log2(this.distance) * 5;
    this._attack = 0;
    if (calc > 0) this._attack = Math.floor(calc);
    if (calc > 100) this._attack = 100;
    return this._attack;
  }
}
