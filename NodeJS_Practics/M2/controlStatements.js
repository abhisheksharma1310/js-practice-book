//control statements in js
//for loop
for(let x = 0; x<10; x++){
    console.log('for loop ', x);
}

//while loop
let y = 0;
while(y<10){
    console.log('while loop ', y);
    y++;
}

//do while loop
do{
    console.log('do while loop ', y);
} while(y<10);

//for in loop
const obj = {name: "Abhishek Sharma", age: 24, city: "Patna"};
for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
}

//for of loop
const arr = [1,2 ,3, 4, 5];
for(let e of arr){
    console.log(`${e}`);
}