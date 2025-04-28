function addTogether(a, b) {
  if(arguments.length == 2 && typeof b == "undefined") return undefined;

  if(typeof(a) !== 'number' || (b != undefined && typeof(b) !== 'number')) {
    return undefined;
  }
  if(b == undefined) {
    return c => addTogether(a, c);
  }
  return a + b;
}


console.log(addTogether(2, undefined))
addTogether(2,undefined);