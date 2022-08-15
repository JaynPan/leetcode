class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.history.push(command);
    this.value = command.execute(this.value);
    return this.value;
  }

  undo() {
    if(this.history.length === 0) {
      throw new Error('no history left');
    }

    const command = this.history.pop();

    this.value = command.undo(this.value);
    return this.value;
  }
}

class AddCommand {
  constructor(newValue) {
    this.newValue = newValue;
  }

  execute(currentValue) {
    return currentValue + this.newValue;
  }

  undo(currentValue) {
    return currentValue - this.newValue
  }
}

class MinusCommand {
  constructor(newValue) {
    this.newValue = newValue;
  }

  execute(currentValue) {
    return currentValue - this.newValue;
  }

  undo(currentValue) {
    return currentValue + this.newValue;
  }
}

const calculator = new Calculator();

console.log(calculator.executeCommand(new AddCommand(10))); // 10 
console.log(calculator.executeCommand(new AddCommand(5))); // 15
console.log(calculator.undo()); // 10
console.log(calculator.executeCommand(new MinusCommand(2))); // 8
console.log(calculator.undo()); // 10