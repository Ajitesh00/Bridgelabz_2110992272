// 1. [] == ![]
console.log([] == ![]); // true
// Explanation:
// ![] → false → [] == false
// [] → '' → 0, false → 0 → 0 == 0 → true

// 2. null == undefined
console.log(null == undefined); // true
console.log(null === undefined); // false
// Explanation: Only loosely equal, not strictly equal

// 3. false == '0'
console.log(false == '0'); // true
console.log(false === '0'); // false
// Explanation:
// '0' → 0, false → 0 → 0 == 0 → true

// 4. [] == 0
console.log([] == 0); // true
// Explanation:
// [] → '' → 0 → 0 == 0 → true

// 5. '' == 0
console.log('' == 0); // true
// Explanation:
// '' → 0 → 0 == 0 → true

// 6. {} == {} and [] == []
console.log({} == {}); // false
console.log([] == []); // false
// Explanation:
// Different object references → never equal

// 7. NaN == NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
// Explanation:
// NaN is not equal to anything, even itself
// Use Number.isNaN(NaN) → true

// 8. true == 1 vs true === 1
console.log(true == 1); // true
console.log(true === 1); // false
// Explanation:
// true → 1 (loose), but types differ (strict)