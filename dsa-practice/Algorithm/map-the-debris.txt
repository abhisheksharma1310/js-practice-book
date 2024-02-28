
function orbitalPeriod(arr) {
  const result = [];
  const GM = 398600.4418;
  const er = 6367.4447;
  for(let i=0; i<arr.length; i++){
    const t = 2*Math.PI*(Math.sqrt(((er+ arr[i].avgAlt)**3)/GM))
  result[i] = {name: arr[i].name, orbitalPeriod: Math.round(t)}
  }
  console.log(result)
  return result;
}

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])