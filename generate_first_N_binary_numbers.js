function generateBinaryNumbers(n) {
  let queue = ["1"]; // start with "1"

  for (let i = 0; i < n; i++) {
    let curr = queue.shift(); // dequeue front
    console.log(curr);

    // enqueue next two binary numbers
    queue.push(curr + "0");
    queue.push(curr + "1");
  }
}

// Example
generateBinaryNumbers(5);