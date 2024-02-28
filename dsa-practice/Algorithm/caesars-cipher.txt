function rot13(str) {
  const enc = str.toUpperCase();
  let result = "";
  for(let i=0; i<enc.length; i++){
    const charCode = enc.toString().charCodeAt(i);
    if(charCode >= 65 && charCode <= 90){
      const decodeChar = String.fromCharCode(charCode <= 77 ? charCode +13 : charCode-13);
      result += decodeChar;
    } else {
      result += enc[i];
    }
  }
  console.log(result)
  return result;
}

rot13("SERR CVMMN!")
rot13("MM!")
rot13("SERR PBQR PNZC");