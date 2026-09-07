const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ricky', () => {
    expect(values.firstName).toEqual('Ricky');
  });
  test('lastName is Ariyansyah', () => {
    expect(values.lastName).toEqual('Ariyansyah');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2001', () => {
    expect(values.birthYear).toEqual(2001);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Ricky Ariyansyah and I am 25 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Ricky Ariyansyah', () => {
    expect(values.fullName).toEqual('Ricky Ariyansyah');
  });
  test('age is 25', () => {
    expect(values.age).toEqual(25);
  });
});
