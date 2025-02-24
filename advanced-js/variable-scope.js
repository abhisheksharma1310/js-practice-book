let a  = 10;

function outer() {
    let b = 20;
    function inner() {
        let c = 30
        console.log("inner: ", a, b, c);
    }
    inner();
    console.log("outer: ", a, b);
}
outer();