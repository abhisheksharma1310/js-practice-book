/**
 * 
Divide by the base 2 to get the digits from the remainders:

Division
by 2	Quotient	
Remainder

(Digit)	Bit #
(20)/2	10	0	0
(10)/2	5	0	1
(5)/2	2	1	2
(2)/2	1	0	3
(1)/2	0	1	4
= (10100)2
 */
function addBinary(s1, s2) {
  // code here
  let b1 = "";
  let b2 = "";
  for (let i = 0; i < s1.length; i++) {
    if (!b1 && s1[i] === "0") {
      continue;
    } else {
      b1 += s1[i];
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (!b2 && s2[i] === "0") {
      continue;
    } else {
      b2 += s2[i];
    }
  }
  let sum = 0;
  let bs1 = 0;
  let bs2 = 0;
  for (let i = 0; i < b1.length; i++) {
    const n = b1.length - 1 - i;
    bs1 += b1[i] * 2 ** n;
  }
  for (let i = 0; i < b2.length; i++) {
    const n = b2.length - 1 - i;
    bs2 += b2[i] * 2 ** n;
  }
  sum = bs1 + bs2;
  let res = "";
  while (sum > 0) {
    const rem = sum % 2;
    res = rem.toString() + res;
    sum = Math.floor(sum / 2);
  }
  return res;
}

function addBinary2(s1, s2) {
  // Remove leading zeros
  let b1 = "";
  let b2 = "";

  for (let i = 0; i < s1.length; i++) {
    if (!b1 && s1[i] === "0") continue;
    b1 += s1[i];
  }

  for (let i = 0; i < s2.length; i++) {
    if (!b2 && s2[i] === "0") continue;
    b2 += s2[i];
  }

  // Pad shorter string with leading zeros
  while (b1.length < b2.length) b1 = "0" + b1;
  while (b2.length < b1.length) b2 = "0" + b2;

  let carry = 0;
  let result = "";

  for (let i = b1.length - 1; i >= 0; i--) {
    let sum = parseInt(b1[i]) + parseInt(b2[i]) + carry;
    carry = Math.floor(sum / 2);
    result = (sum % 2).toString() + result;
  }

  if (carry) result = "1" + result;

  return result;
}

// Example usage:
console.log(
  addBinary2(
    "100100000111111101010010010011010101110110",
    "1011101001111110010000000001010001101100000010010110001111100010101100011110001011101000100011111111111010000010010101010111001000010100101100001101011101101"
  )
);

function addBinary1(s1, s2) {
  let sum = parseInt(s1, 2) + parseInt(s2, 2);
  return sum.toString(2);
}
console.log(addBinary("1101", "111"));
console.log(addBinary1("000000001101", "111"));
