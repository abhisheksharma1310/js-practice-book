/**
 * Program to validate an IP address
 */

function isValidIp(str) {
  const ip = str.split(".");
  if (ip.length !== 4) return 0;
  for (let i = 0; i < 4; i++) {
    const curr = ip[i];
    if(curr === "") return 0;
    if(Number.isNaN(+curr)) return 0;
    if(curr.length > 3) return 0;
    if (+curr < 0 || +curr > 255) {
      return 0;
    }
    if(curr.length > 1){
        if(curr[0] === "0") return 0;
    }
  }
  return "Valid Ip. " + str;
}
console.log(isValidIp("172.16.254.1"));
