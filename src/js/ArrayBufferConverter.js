/* eslint-disable class-methods-use-this */
import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load() {
    return getBuffer();
  }

  toString(data) {
    let str = '';
    const dataView = new Uint16Array(data);
    for (let i = 0; i < dataView.length; i += 1) {
      str += String.fromCharCode(dataView[i]);
    }
    console.log(str);
    return JSON.parse(str);
  }
}
