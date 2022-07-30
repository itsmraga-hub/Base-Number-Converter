const numbers = document.querySelectorAll('[data-id="integers"]');
const operations = document.querySelectorAll('[data-operations]');
const clear = document.querySelectorAll('[data-all-clear]');
const allClear = document.querySelectorAll('[data-all-clear]')
const upperOperand = document.querySelector('.upper-screen');
const lowerOperand = document.querySelector('.lower-screen');



class Calculator {
  constructor (upperOperand, lowerOperand) {
    this.upperOperand = upperOperand;
    this.lowerOperand = lowerOperand;
    this.clear();
  }

  clear () {
    this.upperOperand = '';
    this.lowerOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {

  }

  updateDisplay() {
    this.lowerOperand.innerText = this.curr
  }
}


const calculator = new Calculator(upperOperand, lowerOperand);


numbers.forEach((numberBtn) => {
  numberBtn.addEventListener('click', () => {
    calculator.appendNumber(numberBtn.innerText);
    calculator.updateDisplay();
  })
})
