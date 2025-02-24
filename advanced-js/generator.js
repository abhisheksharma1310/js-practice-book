
function* generate() {
    yield "Hello";
    yield "World";
    yield "!";
}

const generator = generate();

for (const value of generator) {
    console.log(value);
}