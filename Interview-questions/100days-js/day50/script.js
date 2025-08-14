const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const patterns = {
  //Username must be and contain 5 - 12 characters
  username: /^[\w]{5,12}$/,
  //Email must be a valid address, e.g. me@mydomain.com
  email:
    /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_-][A-Za-z0-9]+)*\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
  //Password must contain at least one lowercase one uppercase one digit and one special character and should be 8 - 20 characters in length
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,20}$/,
  //Telephone must be a valid Indian telephone number (10 digits)
  phone: /^(?:\+91|0)?[6-9]\d{9}$/,
  // Slug must contain only lowercase letters, numbers and hyphens and be 8 - 20 characters
  slug: /^[a-z0-9-]{8,20}$/,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

validateForm();

function validateForm() {
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      validateInput(event.target);
    });
  });
}

function validateInput(input) {
  const regex =
    input.name === "confirmpassword"
      ? patterns["password"]
      : patterns[input.name];
  if (regex.test(input.value)) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
}
