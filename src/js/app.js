/* eslint-disable no-console */
import Magician from './Magician';
import Deamon from './Daemon';
import ArrayBufferConverter from './ArrayBufferConverter';

const mag = new Magician('mag', 100, 4);
// console.log(mag);

const deam = new Deamon('dem', 100, 2);
// console.log(deam);

const buffer = new ArrayBufferConverter();
const data = buffer.load();
console.log(data);
const str = buffer.toString(data);
console.log(str);
