function bfInterpreter(bfCode: string) {
  const evaluator = new BfEvaluator(bfCode);

  return evaluator.evaluate();
}

class BfEvaluator {
  bfCode: string;
  memory: number[];
  ptr: number;
  pc: number;
  loopStack: number[];

  constructor(bfCode: string) {
    this.bfCode = bfCode;
    this.memory = new Array(1000).fill(0);
    this.ptr = 500;
    this.pc = 0;
    this.loopStack = [];
  }

  moveRight() {
    this.ptr++;
  }
  moveLeft() {
    this.ptr--;
  }
  increment() {
    this.memory[this.ptr]++;
  }
  decrement() {
    this.memory[this.ptr]--;
  }
  loopStart() {
    if (this.memory[this.ptr] === 0) {
      let cnt = 1;
      while (cnt !== 0) {
        this.pc++;
        if (this.bfCode[this.pc] === "[") {
          cnt++;
        } else if (this.bfCode[this.pc] === "]") {
          cnt--;
        }
      }
    } else {
      this.loopStack.push(this.pc);
    }
  }
  loopEnd() {
    if (this.memory[this.ptr] !== 0) {
      this.pc = this.loopStack[this.loopStack.length - 1];
    } else {
      this.loopStack.pop();
    }
  }

  evaluate(): string {
    let result = "";
    while (this.pc < this.bfCode.length) {
      switch (this.bfCode[this.pc]) {
        case ">":
          this.moveRight();
          break;
        case "<":
          this.moveLeft();
          break;
        case "+":
          this.increment();
          break;
        case "-":
          this.decrement();
          break;
        case "[":
          this.loopStart();
          break;
        case "]":
          this.loopEnd();
          break;
        case ".":
          result += String.fromCharCode(this.memory[this.ptr]);
          break;
      }
      this.pc++;
    }
    return result;
  }
}
