//try and catch in js for error handling

function test(val) {
  try {
    if (val === undefined) throw "Undefine val";
    if (val > 5) throw "Not valid number";
    if (isNaN(val)) throw "Not a number";
  } catch (error) {
    console.log(`Error: ${error} with value: ${val}`);
  } finally {
    console.log("Test done!");
  }
}

test();
test(7);
test("hello!");
