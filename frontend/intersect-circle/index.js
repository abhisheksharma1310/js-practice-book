// when user click on page a circle will be drawn on the page and center of the circle will be the point where user clicked

const circles = [];

document.addEventListener("click", function (event) {
  const { clientX, clientY } = event;
  const totalCircle = document.querySelectorAll(".circle");
  if (totalCircle.length < 2) {
    createCircle(clientX, clientY);
  }
});

// calculate random radius
function calculateRadius() {
  const max = 200,
    min = 50;
  const radius = Math.floor(Math.random() * (max - min) + min);
  return radius;
}

// check for intersection
function isIntersect() {
  if (circles.length < 2) {
    console.log("Not enough circles to check intersection.");
    return;
  }

  console.table(circles);

  const distance =
    Math.hypot(circles[0].x - circles[1].x, circles[0].y - circles[1].y) - 20; //offset due to border width
  const sumOfRadii = circles[0].r + circles[1].r;

  const res = distance < sumOfRadii;

  if (res) {
    document.body.style.background = "#ffffaa";
  }

  console.log("Distance between centers:", distance);
  console.log("Sum of Radii:", sumOfRadii);
  console.log("Intersected: ", res);
}

// create circle
function createCircle(clientX, clientY) {
  const radius = calculateRadius();
  circles.push({ x: clientX, y: clientY, r: radius / 2 });
  const circle = document.createElement("div");
  circle.style.width = `${radius}px`;
  circle.style.height = `${radius}px`;
  circle.style.position = "fixed";
  circle.style.top = `${clientY - radius / 2}px`;
  circle.style.left = `${clientX - radius / 2}px`;
  circle.classList.add("circle");
  document.body.appendChild(circle);

  isIntersect();
}
