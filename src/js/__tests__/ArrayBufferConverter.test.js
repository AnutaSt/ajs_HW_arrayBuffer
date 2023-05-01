import ArrayBufferConverter from '../ArrayBufferConverter';

const buffer = new ArrayBufferConverter();
test('check ArrayBuffer load type data', () => {
  const data = buffer.load();
  expect(data).toBeInstanceOf(ArrayBuffer);
});

test('check ArrayBuffer toString()', () => {
  const data = buffer.load();
  const rezult = buffer.toString(data);
  expect(rezult).toEqual(
    {
      data: {
        user: {
          id: 1,
          level: 10,
          name: 'Hitman',
        },
      },
    },
  );
});
