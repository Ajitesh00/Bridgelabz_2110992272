let num: number | string;

num = 25;         // ✅ number
num = "twenty";   // ✅ string
// num = true;    // ❌ Error: 'boolean' is not assignable to 'string | number'



function print(value: string | number){
    console.log(`${value}`);
}

print("Hello, World!"); // Output: Hello, World!
print(42); // Output: 42