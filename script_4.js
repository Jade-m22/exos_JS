const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// let bornInSeventees = entrepreneurs.filter(function(entrepreneur){
//   return entrepreneur.year >= 1970 && entrepreneur.year < 1980
// });
// console.log(bornInSeventees);

let bornInSeventies = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log(bornInSeventies);


// let firstAndLastName = entrepreneurs.map(function(entrepreneur){
//   return entrepreneur.first + " " + entrepreneur.last
// });
// console.log(firstAndLastName);

let firstAndLastName = entrepreneurs.map(entrepreneur => entrepreneur.first + " " + entrepreneur.last);
console.log(firstAndLastName);

// const today = 2025;
// let ageNow = entrepreneurs.map(function(entrepreneur){
//   return today - entrepreneur.year
// });
// console.log(ageNow);

const today = 2025;
let ageNow = entrepreneurs.map(entrepreneur => today - entrepreneur.year);
console.log(ageNow);

// let alphabeticLast = entrepreneurs.sort(function(a, b){
//   return a.last.localeCompare(b.last);
// });
// console.log(alphabeticLast);

let alphabeticLast = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(alphabeticLast);
