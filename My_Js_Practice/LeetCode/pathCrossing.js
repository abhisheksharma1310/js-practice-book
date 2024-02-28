/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let ic = [0,0];
    let pathSet = new Set();
    pathSet.add([...ic]);
    for(let i=0; i<path.length; i++){
        if(path[i] === "N") {
            ic[1] = ic[1] + 1; 
            pathSet.add([...ic]);
            if(pathSet.has([...ic])) return true;
        }
        if(path[i] === "S") {
            ic[1] = ic[1] - 1; 
            pathSet.add([...ic]);
            if(pathSet.has([...ic])) return true;
        }
        if(path[i] === "E") {
            ic[0] = ic[0] + 1; 
            pathSet.add([...ic]);
            if(pathSet.has([...ic])) return true;
        }
        if(path[i] === "W") {
            ic[0] = ic[0] - 1; 
            pathSet.add([...ic]);
            if(pathSet.has([...ic])) return true;
        }
    }
    console.log(pathSet);
    return false;
};

console.log(isPathCrossing("NESWW"));