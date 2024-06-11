const calculate = (input) => {
  const operators = input.split(" ");
  const stack = [];

  operators.forEach((operator) => {
    if (!isNaN(operator)) {
      stack.push(parseFloat(operator));
    } else {
      if (stack.length < 2) {
        throw new Error("Insufficient values in the expression");
      }
      const b = stack.pop();
      const a = stack.pop();
      switch (operator) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
    }
  });

  if (stack.length !== 1) {
    throw new Error("The user input has too many values");
  }

  return stack[0];
};

console.log("Welcome to the CLI RPN Calculator");
console.log('Enter your expression or type "q" to exit.');

process.stdout.write("> ");

process.stdin.on("data", function (data) {
  const input = data.toString().trim();
  if (input === "q") {
    console.log("Goodbye!");
    process.exit();
  } else {
    try {
      const result = calculate(input);
      console.log(result);
    } catch (error) {
      console.log("Error:", error.message);
    }
    process.stdout.write("> ");
  }
});
