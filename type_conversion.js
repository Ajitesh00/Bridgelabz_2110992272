// Implicit Type Conversion (Type Coercion)

// String Coercion
console.log('3' + 2);           // '32'
console.log('5'+1.1);           // '51.1'
console.log('5.5'+1);           // '5.51'
console.log('Hello' + true);    // 'Hellotrue'
console.log('5' + null);        // '5null'

// Number Coercion with -, *, /
console.log('5' - 1);           // 4
console.log('6' * '2');         // 12
console.log('10' / 2);          // 5
console.log('10' % 3);          // 1

// Boolean Coercion
console.log(true + 1);          // 2
console.log(false + 10);        // 10
console.log(!0);                // true
console.log(!1);                // false

// null and undefined
console.log(null + 1);          // 1
console.log(undefined + 1);     // NaN

// Explicit Type Conversion

// To String
console.log(String(123));       // '123'
console.log(String(true));      // 'true'
console.log(String(null));      // 'null'
console.log(String(undefined)); // 'undefined'
console.log((100).toString());  // '100'

// To Number
console.log(Number('123'));         // 123
console.log(Number('123abc'));      // NaN
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN
console.log(Number(''));            // 0
console.log(Number(' '));           // 0
console.log(+'42');                 // 42 (Unary plus)
console.log(parseInt('42.5'));      // 42
console.log(parseFloat('42.5'));    // 42.5

// To Boolean
console.log(Boolean(0));            // false
console.log(Boolean(1));            // true
console.log(Boolean(''));           // false
console.log(Boolean('hello'));      // true
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false

// Weird/Edge Cases
console.log([] + {});               // "[object Object]"
console.log({} + []);               // 0 (in global scope)
console.log([] + []);               // ''
console.log([] == false);           // true
console.log('' == 0);               // true
console.log(false == '0');          // true
console.log(null == undefined);     // true
console.log(null === undefined);    // false

// Type checking
console.log(typeof '42');           // 'string'
console.log(typeof 42);             // 'number'
console.log(typeof true);           // 'boolean'
console.log(typeof null);           // 'object' (quirky)
console.log(typeof undefined);      // 'undefined'
