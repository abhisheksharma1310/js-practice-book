// validate mobile numbers using regex

//for indian mobile number coditions are:
//mobile number length should be exactly 10.
//mobile number must start with either 6,7,8, or 9.
//number may or may not contain std code 0 or country code +91

function validateMobile(number) {
  const regex = /^(?:\+91|0)?[6-9]\d{9}$/;
  return regex.test(number);
}

console.log(validateMobile("9852240467")); //true
console.log(validateMobile("+919852240467")); //true
console.log(validateMobile("09852240467")); //true
console.log(validateMobile("06852240467")); //true
console.log(validateMobile("07852240467")); //true
console.log(validateMobile("08852240467")); //true
console.log(validateMobile("8852240467")); //true
console.log(validateMobile("+918852240467")); //true
console.log(validateMobile("+915852240467")); //false
console.log(validateMobile("05852240467")); //false
console.log(validateMobile("5852240467")); //false
