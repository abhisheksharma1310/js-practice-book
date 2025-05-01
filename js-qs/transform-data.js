//input

const obj = [
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 2",
    data: "Data2",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 3",
    data: "Data1",
  },
  {
    key: "Sample 4",
    data: "Data1",
  },
];

//output
// let OutputSample = {
//   "Sample 1": [
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//   ],
//   "Sample 2": [],
//   "Sample 3": [],
//   "Sample 4": [],
// };

const output = {};

// transform data using foreach
obj.forEach((item) => {
  //if key not available
  if (!output[item.key]) {
    output[item.key] = [];
  }
  output[item.key].push(item);
});

//transform data using reduce method
const output1 = obj.reduce((acc, item) => {
  if (!acc[item.key]) {
    acc[item.key] = [];
  }
  acc[item.key].push(item);
  return acc;
}, {});

console.log(output1);
