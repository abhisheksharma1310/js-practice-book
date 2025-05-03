/**
 * Please create a function model(state, element) to bind state.value to the HTML InputElement element.
 */

const input = document.createElement("input");
document.body.appendChild(input);

const state = { value: "Hi" };

model(state, input);

function model(state, input) {
  Object.defineProperty(state, "value", {
    get() {
      return input.value;
    },
    set(newVal) {
      //this.value = newVal;
      input.value = newVal;
      return;
    },
  });
  input.addEventListener("change", function (e) {
    state.value = e.target.value;
    console.log(state.value);
  });
}

console.log(input.value); // Hi

state.value = "dev";

console.log(input.value); // dev

input.value = "abhishek";

input.dispatchEvent(new Event("change"));

console.log(state.value); // abhishek
