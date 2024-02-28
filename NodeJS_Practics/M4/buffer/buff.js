const str = "hello World";
const buffer = Buffer.from(str, "utf-8");
console.log(buffer);
console.log(buffer.length);

for(const val of buffer){
    console.log(val);
}

console.log(buffer.toString());

buffer[2] = 65;

console.log(buffer.slice(0,5).toString());