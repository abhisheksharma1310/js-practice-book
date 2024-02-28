//recursive function in js

function rf(i){
    if(i<10){
        console.log(i++);
        rf(i);
    }
};

rf(0);