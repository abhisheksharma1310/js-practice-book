const circle = document.querySelector(".circle");

// move circle wherever mouse moves
document.body.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  circle.style.top = `${y - 100}px`;
  circle.style.left = `${x - 100}px`;
});
