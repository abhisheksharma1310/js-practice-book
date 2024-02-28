/**
 * Cartesian Product
 * Problem: Given two finite non-empty sets, find their Cartesian Product.
 * In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AXB, is the set of all ordered pairs (a,b) where a is in A and B is in B
 * A = [1,2]
 * B = [3,4]
 * AXB = [[1,3], [1,4], [2,3], [2,4]]
 */
//Time Complexity: O(mn)
function Cartesian_Product(A, B) {
    const result = [];
    for(let i=0; i<A.length; i++){
        for(let j=0; j<B.length; j++){
            const newSet = [A[i], B[j]];
            result.push(newSet);
        }
    }
    return result;
}

console.log(Cartesian_Product([1,2], [3,4]));