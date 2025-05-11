// a.b.c.d.e => {a:{b:{c:{d:e}}}}

const str = "a.b.c.d.e";

const strArr = str.split(".");

const obj = strArr.reduceRight((acc, el) => {
  return { [el]: acc };
}, {});

console.log(obj);
