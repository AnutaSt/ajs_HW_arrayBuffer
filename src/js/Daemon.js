import MathCalc from './Math';

export default class Deamon extends MathCalc {
  constructor(name, attack, distance) {
    super(attack, distance);
    this.name = name;
  }
}
