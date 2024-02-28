//try and catch in js for error handling

function test(val){
    try {
        if(val === undefined) throw console.log("Undefine val");
        if(val > 5) throw console.log("Not valid number");
        if(val === isNaN) throw console.log("Not a number");
    } catch (error) {
        console.log(`Error: ${error} with value: ${val}`);
    }
    finally{
        console.log("Test done!");
    }
};

test();
test(7);
test('hello!');
