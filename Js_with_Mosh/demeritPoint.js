// Speed limit 70km.hr => OK
// Speed > 70 for every 5 more km/hr speed => 1 point

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    return console.log("OK");
  } else if (speed > speedLimit) {
    const limitExceedBy = speed - speedLimit;
    const points = Math.floor(limitExceedBy / kmPerPoint);
    if (points >= 12) {
      console.log("Your license is suspended.");
    } else {
      console.log("You get ", points, " point.");
    }
  }
}

checkSpeed(189);
