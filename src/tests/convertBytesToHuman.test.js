/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import convertBytesToHuman from '../convertBytesToHuman';

function foo() {return 2}

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman('123qwe')).toBe(false)
  expect(convertBytesToHuman('123\n')).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman({obj: 123})).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Symbol('id'))).toBe(false)
  expect(convertBytesToHuman(foo)).toBe(false)
  expect(convertBytesToHuman([123])).toBe(false)
  expect(convertBytesToHuman('1023')).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(2)).toBe('2 B')
  expect(convertBytesToHuman(1023)).toBe('1023 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(1025)).toBe('1 KB')
  expect(convertBytesToHuman(2048)).toBe('2 KB')
  expect(convertBytesToHuman(1536)).toBe('1.50 KB')
  expect(convertBytesToHuman(1048576)).toBe('1 MB')
  expect(convertBytesToHuman(1073741824)).toBe('1 GB')
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB')
  expect(convertBytesToHuman(1125899906842624)).toBe('1 PB')
});

// другая группа проверок
