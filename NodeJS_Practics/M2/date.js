//date object in js
console.log(new Date());

//gate date in ISO formate
console.log(new Date("2022-12-28"));

//gate time in ms from epoch
console.log(new Date().getTime());

//get year
console.log(new Date().getFullYear());

//get month
console.log(new Date().getMonth());

//get date
console.log(new Date().getDate());

//get day
console.log(new Date().getDay());

//get hour
console.log(new Date().getHours());

//get minutes
console.log(new Date().getMinutes());

//get seconds
console.log(new Date().getSeconds());

//get milliseconds
console.log(new Date().getMilliseconds());

//get timezone
console.log(new Date().getTimezoneOffset());

//get time string
console.log(new Date().toLocaleTimeString());

//get date string
console.log(new Date().toLocaleDateString());

//get date in json
console.log(new Date().toJSON());

//get date in ISO
console.log(new Date().toISOString());

//
const date = new Date().toLocaleDateString();
const date1 = date.split('/');
console.log(date1[2]+'-'+date1[1]+'-'+date1[0]);
const date2 = date1.join('-');
console.log(date2);