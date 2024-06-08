function fibonacci(n) {
  let fib = [0, 1];
  if (n === 2) {
    return fib;
  } else {
    fib = fibonacci(n - 1);
    let lastElement = fib[n - 2] + fib[n - 3];
    fib.push(lastElement);
    return fib;
  }
}
console.log("fibonacci");
console.log(fibonacci(8));
