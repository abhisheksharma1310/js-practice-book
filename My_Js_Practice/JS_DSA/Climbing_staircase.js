/**
 * CLimbing staircase
 * Problem: Given a staircase of "n" steps, count the number of distinct ways to climb to the top.
 * You can either climb 1 step or 2 step at a time.
 * n=1, climbingStaircase(1) = 1 | (1)
 * n=2, climbingStaircase(2) = 1 | (1,1) and (2)
 * n=3, climbingStaircase(3) = 1 | (1,1,1) (1,2) and (2,1)
 * n=4, climbingStaircase(4) = 1 | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)
 * climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
 */
//Time complexity: O(n) linear
function climbingStaircase(n){
    const noOfWays = [1,2];
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }
    return noOfWays[n-1];
}

function recusionClimbingStaircase(n){
    const noOfWays = [1,2];
    if(n<=2) return noOfWays[n-1];
    return recusionClimbingStaircase(n-1) + recusionClimbingStaircase(n-2);
}

console.log(climbingStaircase(5));
console.log(recusionClimbingStaircase(5));