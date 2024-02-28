/**
 * Multiply Large Numbers represented as Strings
 */

function largeMultiply (s1, s2) {
    s1 = BigInt(s1);
    s2 = BigInt(s2);
    const m = BigInt(s1*s2);
    return m.toString();
}
console.log(largeMultiply("654154154151454545415415454", "63516561563156316545145146514654"));