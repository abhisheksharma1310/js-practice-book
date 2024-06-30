// show only key value of object which are string

function showProperties(obj) {
  for (key in obj) {
    if (typeof obj[key] == "string") {
      console.log(key, obj[key]);
    }
  }
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);
