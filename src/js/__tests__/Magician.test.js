import Magician from '../Magician';

const newMag = new Magician('mag', 80, 2);

test('check Mag is created', () => {
  expect(newMag).toEqual(
    {
      name: 'mag',
      _attack: 72,
      distance: 2,
    },
  );
});

test.each([
  ['with 100', 100, 90],
  ['with 140', 140, 100],
  ['with -20', -20, 0],
])('check Mag get/set attack without stoned %s', (_, value, expected) => {
  newMag.attack = value;
  const result = newMag.attack;
  expect(result).toBe(expected);
});

test('check Mag get/set stoned', () => {
  newMag.stoned = 10;
  const rezult = newMag.stoned;
  expect(rezult).toBe(10);
});

test.each([
  ['with 100', 100, 85],
  ['with 140', 140, 100],
  ['with -20', -20, 0],
])('check Mag get/set attack with stoned %s', (_, value, expected) => {
  newMag.attack = value;
  const result = newMag.attack;
  expect(result).toBe(expected);
});
