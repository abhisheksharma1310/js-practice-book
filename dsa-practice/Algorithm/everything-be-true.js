function truthCheck(collection, pre) {
  let result = " ";
  for (let i = 0; i < collection.length - 1; i++) {
    result =
      Boolean(collection[i][pre]) &&
      Boolean(collection[i + 1][pre]) &&
      Boolean(result);
  }
  return result;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: 65 },
      { name: "Naomi", role: "", isBot: " " },
      { name: "Camperbot", role: "Bot", isBot: 1 },
    ],
    "isBot"
  )
);
