/**
 * Sum of two large numbers
 */

function largeSum (s1, s2) {
    s1 = BigInt(s1);
    s2 = BigInt(s2);
    let s = BigInt(s1+s2);
    return s.toString(10);
}
console.log(largeSum("3333311111111111","44422222221111"));