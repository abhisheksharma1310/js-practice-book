// validation script here

//select input field
const inputs = document.querySelectorAll("input");

//pattern object
const pattern = {
  //Username must be  and contain 5 - 12 characters
  username: /^[\w]{5,12}$/,
  //Email must be a valid address, e.g. me@mydomain.com
  email: /^[\w-\.]+@[\w-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
  //Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters
  password: /^[\w@-]{8,20}$/,
  //Telephone must be a valid UK telephone number (11 digits)
  telephone: /^[\d]{11}$/,
  //Slug must contain only lowercase letters, numbers and hyphens and be 8 - 20 characters
  slug: /^[a-z0-9-]{8,20}$/,
};

//function for validate input value
function validate(target, regex) {
  if (regex.test(target.value)) {
    target.className = "valid";
  } else {
    target.className = "invalid";
  }
}

//add event listener to all inputs field
inputs.forEach((input) => {
  console.log(input);
  //iterate over all input filed
  input.addEventListener("input", (event) => {
    validate(event.target, pattern[event.target.name]);
  });
});
