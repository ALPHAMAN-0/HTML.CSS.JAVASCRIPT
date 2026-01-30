// Math constants
console.log(Math.PI);      // π
console.log(Math.E);       // Euler's number
console.log(Math.SQRT2);   // √2

// Basic numeric operations
console.log(Math.abs(-7.25));      // 7.25
console.log(Math.ceil(4.2));       // 5
console.log(Math.floor(4.7));      // 4
console.log(Math.round(4.5));      // 5
console.log(Math.trunc(4.9));      // 4
console.log(Math.sign(-5));        // -1

// Min & Max
console.log(Math.max(1, 3, 2, 5, 4));   // 5
console.log(Math.min(1, 3, 2, 5, 4));   // 1

// Power & roots
console.log(Math.pow(2, 3));       // 8
console.log(Math.sqrt(16));        // 4
console.log(Math.cbrt(27));        // 3
console.log(Math.hypot(3, 4));     // 5

// Random
console.log(Math.random());        // 0 ≤ n < 1
console.log(Math.random() * 10);   // 0 ≤ n < 10

// Trigonometry
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.acos(1));           // 0
console.log(Math.asin(0));           // 0
console.log(Math.atan(1));           // ≈ 0.7854
console.log(Math.atan2(1, 1));       // ≈ 0.7854

// Logarithmic & exponential
console.log(Math.log(Math.E));     // 1
console.log(Math.log10(1000));     // 3
console.log(Math.log2(8));         // 3
console.log(Math.log1p(1));        // ≈ 0.693
console.log(Math.exp(1));          // e
console.log(Math.expm1(1));        // e - 1

// Hyperbolic functions
console.log(Math.sinh(0));         // 0
console.log(Math.cosh(0));         // 1
console.log(Math.tanh(1));         // ≈ 0.76159

// Bitwise & low-level numeric ops
console.log(Math.clz32(1));        // 31
console.log(Math.fround(1.5));     // 1.5
console.log(Math.imul(2, 4));      // 8