/* eslint-disable no-undef */

import * as method from './index';

test('Returns object if gender property contains female', () => {
  const testObject = [
    {
      id: 1,
      first_name: 'Roselin',
      last_name: 'Kilius',
      email: 'rkilius0@com.com',
      gender: 'Female',
      ip_address: '174.118.224.252',
      age: 87,
    },
  ];
  expect(method.filterFemales(testObject[0])).toBe(true);
});

test('Returns false if gender property contains male', () => {
  const testObject = [
    {
      id: 2,
      first_name: 'Hasty',
      last_name: 'Playhill',
      email: 'hplayhill1@state.tx.us',
      gender: 'Male',
      ip_address: '174.109.68.191',
      age: 55,
    },
  ];
  expect(method.filterFemales(testObject[0])).toBe(false);
});

test('Returns object if age property is greater than 35', () => {
  const testObject = [
    {
      id: 1,
      first_name: 'Roselin',
      last_name: 'Kilius',
      email: 'rkilius0@com.com',
      gender: 'Female',
      ip_address: '174.118.224.252',
      age: 87,
    },
  ];
  expect(method.filterNamesByAge(testObject[0])).toBe(true);
});

test('Returns undefined if age property is less than 35 or equal to', () => {
  const testObject = [
    {
      id: 8,
      first_name: 'Purcell',
      last_name: 'Mearns',
      email: 'pmearns7@chica.govesttribune.com',
      gender: 'Male',
      ip_address: '60.16.88.134',
      age: 24,
    },
  ];
  expect(method.filterNamesByAge(testObject[0])).toBe(false);
});

test('Returns a string of First and Last name', () => {
  const testObject = [
    {
      id: 1,
      first_name: 'Roselin',
      last_name: 'Kilius',
      email: 'rkilius0@com.com',
      gender: 'Female',
      ip_address: '174.118.224.252',
      age: 87,
    },
  ];
  expect(method.mapFirstAndLastNameHelper(testObject[0])).toBe('Roselin Kilius');
});

test('Returns object if Gender = Male, age is less than 43 but greater than 22 and if their first or last name starts with the letter L', () => {
  const testObject = [
    {
      id: 57,
      first_name: 'Lonny',
      last_name: 'Todd',
      email: 'ltadd1k@cargocollective.com',
      gender: 'Male',
      ip_address: '237.30.28.214',
      age: 24,
    },
  ];
  expect(method.filterMaleByAgeAndName(testObject[0])).toBe(true);
});

test('Returns undefined if this condition fails Gender = Male, age is less than 43 but greater than 22 and if their first or last name starts with the letter L', () => {
  const testObject = [
    {
      id: 1,
      first_name: 'Roselin',
      last_name: 'Kilius',
      email: 'rkilius0@com.com',
      gender: 'Female',
      ip_address: '174.118.224.252',
      age: 87,
    },
  ];
  expect(method.filterMaleByAgeAndName(testObject[0])).toBe(false);
});

test('Returns undefined if domain part of email does not match .gov. .gov but fails .govest', () => {
  const testObject = [
    {
      id: 1,
      first_name: 'Roselin',
      last_name: 'Kilius',
      email: 'rkilius0@com.com',
      gender: 'Female',
      ip_address: '174.118.224.252',
      age: 87,
    },
    {
      id: 9,
      first_name: 'Amanda',
      last_name: 'Govnge',
      email: 'agovnge8@t.co',
      gender: 'Female',
      ip_address: '246.160.41.135',
      age: 95,
    },
    {
      id: 8,
      first_name: 'Purcell',
      last_name: 'Mearns',
      email: 'pmearns7@chica.govesttribune.com',
      gender: 'Male',
      ip_address: '60.16.88.134',
      age: 24,
    },
  ];
  expect(method.filterByEmailAddressGov(testObject[0])).toBe(false);
  expect(method.filterByEmailAddressGov(testObject[1])).toBe(false);
  expect(method.filterByEmailAddressGov(testObject[2])).toBe(false);
});

test('Returns object if domain part of email matches .gov. .gov but fails .govest', () => {
  const testObject = [
    {
      id: 4,
      first_name: 'Adele',
      last_name: 'Crocket',
      email: 'dcrocket3@miibeian.gov.cn',
      gender: 'Female',
      ip_address: '110.33.231.195',
      age: 67,
    },
    {
      id: 4,
      first_name: 'Eden',
      last_name: 'Crocket',
      email: 'dcrocket3@miibeian.gov',
      gender: 'Female',
      ip_address: '110.33.231.195',
      age: 67,
    },
  ];

  expect(method.filterByEmailAddressGov(testObject[0])).toBe(true);
  expect(method.filterByEmailAddressGov(testObject[1])).toBe(true);
});

test('Returns objects that start with first name K and last name S', () => {
  const testObject = [
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Skip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 62,
    },
  ];
  expect(method.filterByKAndS(testObject[0])).toBe(true);
});

test('Returns undefined if condition fails that start with first name K and last name S', () => {
  const testObject = [
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'kip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 62,
    },
    {
      id: 109,
      first_name: 'Leene',
      last_name: 'skip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 62,
    },
  ];
  expect(method.filterByKAndS(testObject[0])).toBe(false);
  expect(method.filterByKAndS(testObject[1])).toBe(false);
});

test('Increments age by 10', () => {
  const testObject = [
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Skip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 62,
    },
  ];
  expect(method.mapIncrementAgeBy10(testObject[0]).age).toBe(72);
});

test('Filters by age range between 35 and 80 inclusive and last name starts with D', () => {
  const testObject = [
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Dip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 62,
    },
  ];
  expect(method.filterNamesByAgeRangeAndD(testObject[0])).toBe(true);
});

test('Returns undefined if age range between 35 and 80 inclusive and last name starts with D fails', () => {
  const testObject = [
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Dip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 90,
    },
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Dip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 22,
    },
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Lip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 60,
    },
  ];
  expect(method.filterNamesByAgeRangeAndD(testObject[0])).toBe(false);
  expect(method.filterNamesByAgeRangeAndD(testObject[1])).toBe(false);
  expect(method.filterNamesByAgeRangeAndD(testObject[2])).toBe(false);
});

test('Adds birthday based on todays year value minus age.', () => {
  const testObject = [
    {
      id: 109,
      first_name: 'Keene',
      last_name: 'Dip',
      email: 'kskip30@cnbc.com',
      gender: 'Male',
      ip_address: '165.51.206.72',
      age: 62,
    },
  ];
  expect(method.mapNewPersonObject(testObject[0])?.birthDate).toBe(1959);
});
