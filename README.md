# CLI RPN Calculator

## High-Level Description

The CLI RPN Calculator is a command-line tool designed to perform arithmetic operations using Reverse Polish Notation (RPN). RPN is a mathematical notation wherein every operator follows all of its operands, which is beneficial for stack-based calculations. This calculator supports the four basic arithmetic operations: addition, subtraction, multiplication, and division. It reads user input from the command line, processes the input, and outputs the result directly.

### Language and Platform

- **JavaScript with Node.js:** JavaScript was chosen due to its ubiquity and ease of use, while Node.js provides a robust platform for handling CLI operations.
- **Standard Input/Output:** Using direct standard input and output ensures that the application is lightweight and has minimal dependencies.

### Architecture

- **Modular Functions:** The core functionality is encapsulated within a `calculate` function, which processes the RPN logic.
- **Event-Driven Input Handling:** Leveraging Node.js's event-driven architecture allows for responsive and efficient user input handling.

### Trade-offs

- **Simplicity vs. Extensibility:** The current implementation focuses on simplicity and clarity, making it easy to understand and maintain. However, it does not yet support more complex features like custom operators or alternate input methods (e.g., WebSocket, file input).
- **Error Handling:** Basic error handling is implemented, but it could be improved to provide more user-friendly messages and suggestions for recovery.

### Future Enhancements

- **Additional Operators:** Implement support for more complex arithmetic operations and mathematical functions.
- **Alternate Interfaces:** Expand the calculator to support inputs via WebSocket, files, or TCP sockets.
- **Improved Testing:** Add comprehensive unit and integration tests to ensure robustness and prevent regressions.
- **User Experience:** Enhance the user interface with better prompts, help commands, and error messages.

## How to Run Your Code

### Prerequisites

- **Node.js:** Ensure that Node.js is installed on your system. You can download it from [Node.js](https://nodejs.org/).

### Steps to Run

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Run the Calculator:**
   ```bash
    npm start
   ```
