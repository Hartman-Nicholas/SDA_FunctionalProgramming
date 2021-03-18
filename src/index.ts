// const fs = require('fs');

/* eslint-disable no-console */

/* Interface object that describes the expected structure of the personObject that we will receive
 from the mock data. */

interface personObject {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  age: number;
}

// let DATA: personObject[] = [
//   {
//     id: 0,
//     first_name: '',
//     last_name: '',
//     email: '',
//     gender: '',
//     ip_address: '',
//     age: 0,
//   },
// ];

/* Type of window checks if the program is running in the browser or in the Terminal if its running
running in the Terminal (returns true) then it allows the user to select the data to load by
providing an argument. If its running in the browser (returns false) then it loads the
data directly from the file. */

// if (typeof window === 'undefined') {
//   const rawData = fs.readFileSync(process.argv[2]);
//   DATA = JSON.parse(rawData.toString());
// } else {
// eslint-disable-next-line global-require
const DATA: personObject = require('./MOCK_DATA.json');
// }

/* **************************** Exercise 1: Number of females *********************************** */

export const filterFemales = (value: personObject) => {
  if (value.gender === 'Female') {
    return true;
  }
  return false;
};

const numberFemales = DATA.filter(filterFemales).length;

/* ******************* Exercise 2: First and Last Name older than 35 **************************** */

export const filterNamesByAge = (value: personObject) => {
  if (value.age > 35) {
    return true;
  }
  return false;
};

export const mapFirstAndLastNameHelper = (value: personObject) => `${value.first_name} ${value.last_name}`;

const filterFirstAndLastByAge = DATA.filter(filterNamesByAge).map(mapFirstAndLastNameHelper);

/* ********************************** Exercise 3: Total Ages ************************************ */

const totalAge = DATA.reduce((total, value) => total + value.age, 0);

/* ********************************** Exercise 4: Average Ages ********************************** */

const averageAge = totalAge / DATA.length;

/* ****** Exercise 5: First and Last Names where either equals L, Males, between 22-43,  ******** */

export const filterMaleByAgeAndName = (value: personObject) => {
  if ((value.age < 43 && value.age > 22 && value.first_name[0] === 'L' && value.gender === 'Male') || (value.age < 43 && value.age > 22 && value.last_name[0] === 'L' && value.gender === 'Male')) {
    return true;
  }
  return false;
};

const malesInRangeAndName = DATA.filter(filterMaleByAgeAndName).map(mapFirstAndLastNameHelper);

/* ******************************* Exercise 6: Government Emails  ******************************* */

export const filterByEmailAddressGov = (value: personObject) => {
  if (value.email.search(/(\.g[ou]{1,2}(v|b|vt)|\.mil|\.gc|\.fed)(\.[a-z]{2})?$/i) > 1) {
    return true;
  }
  return false;
};

export const mapEmailAddressNames = (value: personObject) => `${value.first_name} ${value.last_name} IP Address: ${value.ip_address}`;

const govEmailAddresses = DATA.filter(filterByEmailAddressGov).map(mapEmailAddressNames);

/* ******************************** Exercise 7: Increment Age  ********************************** */

export const filterByKAndS = (value: personObject) => {
  if (value.first_name[0].toUpperCase() === 'K' && value.last_name[0].toUpperCase() === 'S') {
    return true;
  }
  return false;
};

export const mapIncrementAgeBy10 = (value: personObject) => {
  // eslint-disable-next-line no-param-reassign
  value.age += 10;
  return value;
};

const updateAgeSAndK = DATA.filter(filterByKAndS).map(mapIncrementAgeBy10);

/* ************************** Exercise 8: Filter and Add BirthDate  ***************************** */

export const filterNamesByAgeRangeAndD = (value: personObject) => {
  if (value.age >= 35 && value.age <= 80 && value.last_name[0].toUpperCase() === 'D') {
    return true;
  }
  return false;
};

export const mapNewPersonObject = (value: personObject) => {
  const date = new Date();
  const birthDate = { birthDate: date.getFullYear() - value.age };

  const updatedPerson = Object.assign(birthDate, value);

  return updatedPerson;
};

const filterByAgeAndAddBirthDay = DATA.filter(filterNamesByAgeRangeAndD).map(mapNewPersonObject);

/* ******************************* Exercise CLI: Terminal Outputs  ****************************** */

console.log('1: Number of Women in sample');
console.log(numberFemales);

console.log('2: All people that are older than 35');
console.log(filterFirstAndLastByAge);

console.log('3: Total age of all people summed:');
console.log(totalAge);

console.log('4: Average age of all people.');
console.log(averageAge);

console.log('5. First name or last name with letter L and between 43-22');
console.log(malesInRangeAndName);

console.log('6: Government email Addresses');
console.log(govEmailAddresses);

console.log('7: Filter and update Age');
console.log(updateAgeSAndK);

console.log('8: Filter and add birthDate');
console.log(filterByAgeAndAddBirthDay);
