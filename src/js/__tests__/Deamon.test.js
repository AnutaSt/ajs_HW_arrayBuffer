import Deamon from '../Daemon';

const deamon = new Deamon('deamon', 80, 4);

test('check Mag is created', () => {
  expect(deamon).toEqual(
    {
      name: 'deamon',
      _attack: 56,
      distance: 4,
    },
  );
});

test.each([
  ['with 100', 90, 62],
  ['with 160', 160, 100],
  ['with -20', -20, 0],
])('check deamon get/set attack without stoned %s', (_, value, expected) => {
  deamon.attack = value;
  const result = deamon.attack;
  expect(result).toBe(expected);
});

test('check deamon get/set stoned', () => {
  deamon.stoned = 20;
  const rezult = deamon.stoned;
  expect(rezult).toBe(20);
});

test.each([
  ['with 100', 100, 60],
  ['with 140', 200, 100],
  ['with -20', -20, 0],
])('check deamon get/set attack with stoned %s', (_, value, expected) => {
  deamon.attack = value;
  const result = deamon.attack;
  expect(result).toBe(expected);
});
