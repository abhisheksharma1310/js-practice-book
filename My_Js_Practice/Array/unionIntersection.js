/**
 * Union and Intersection of two sorted arrays
 */

function UnionIntersection (arr1, arr2) {
    const union = new Set([...arr1, ...arr2]);
    const uArr = [...union].sort((a,b) => a-b);
    const intr = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                intr.push(arr1[i]);
            }
        }
    }
    return `Union: ${uArr}, Intersection: ${intr}`;
}
console.log(UnionIntersection([1, 3, 4, 5, 7], [2, 3, 5, 6]));