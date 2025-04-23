// Typed Array

// Typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. They are used to handle binary data in JavaScript, such as images, audio, and video files.
// Typed arrays are useful for performance-critical applications, such as WebGL and WebRTC, where you need to manipulate binary data efficiently.

// Typed arrays are not resizable, meaning that once you create a typed array, you cannot change its size. However, you can create a new typed array with a different size and copy the data from the old one to the new one.
// Typed arrays are not as flexible as regular arrays, but they are more efficient for certain operations. They are also more complex to use, as you need to be aware of the underlying binary data representation and the endianness of the data.
// Typed arrays are not as widely supported as regular arrays, but they are available in most modern browsers and Node.js.
// Typed arrays are not a replacement for regular arrays, but rather a complement to them. You can use typed arrays when you need to manipulate binary data efficiently, and regular arrays when you need to manipulate more complex data structures.
// Typed arrays are not a new feature of JavaScript, but rather a part of the ECMAScript 6 (ES6) specification. They were introduced in ES6 to provide a more efficient way to handle binary data in JavaScript.
// Typed arrays are not a new concept in programming, but rather a common feature in many programming languages, such as C, C++, and Java. They are used to provide a more efficient way to handle binary data in these languages, and JavaScript has adopted this concept to provide a similar feature.

// declaration of typed arrays
const int8Array = new Int8Array(10); // 8-bit signed integers
const uint8Array = new Uint8Array(10); // 8-bit unsigned integers
const uint8ClampedArray = new Uint8ClampedArray(10); // 8-bit unsigned integers clamped to 0-255
const int16Array = new Int16Array(10); // 16-bit signed integers
const uint16Array = new Uint16Array(10); // 16-bit unsigned integers
const int32Array = new Int32Array(10); // 32-bit signed integers
const uint32Array = new Uint32Array(10); // 32-bit unsigned integers
const float32Array = new Float32Array(10); // 32-bit floating point numbers
const float64Array = new Float64Array(10); // 64-bit floating point numbers
const dataView = new DataView(new ArrayBuffer(10)); // low-level interface for reading and writing binary data in an ArrayBuffer
const arrayBuffer = new ArrayBuffer(10); // low-level interface for reading and writing binary data in memory
const sharedArrayBuffer = new SharedArrayBuffer(10); // low-level interface for reading and writing binary data in memory that can be shared between threads
const typedArray = new Uint8Array([1, 2, 3, 4, 5]); // create a typed array from an array of numbers
const typedArray2 = new Uint8Array(typedArray); // create a typed array from another typed array
const typedArray3 = new Uint8Array(typedArray.buffer); // create a typed array from an ArrayBuffer
const typedArray4 = new Uint8Array(typedArray.buffer, 0, 5); // create a typed array from an ArrayBuffer with a byte offset and length
