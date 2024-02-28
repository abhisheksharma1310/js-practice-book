//global variable
let arr = [1, 2, 3, 6, 9, 8, 7, 4];

const buttons = {
  0: "btn1",
  1: "btn2",
  2: "btn3",
  3: "btn6",
  4: "btn9",
  5: "btn8",
  6: "btn7",
  7: "btn4",
};

const button = document.getElementById("btn5");

button.addEventListener("click", function () {
  rotateButton(arr, true);
  arr.forEach((el, ind) => {
    document.getElementById(buttons[ind]).innerHTML = el;
  });
});

function rotateButton(arr, reverse) {
  if (reverse) {
    arr.unshift(arr.pop());
  } else {
    arr.push(arr.shift());
  }
  return arr;
}
