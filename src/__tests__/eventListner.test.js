import calcFn from '../calculator';

const fs = require('fs');

describe('clicking on calculators buttons changes the calculator display', () => {
  test('updates calculator display with digit after clicking on digit button', () => {
    const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
    document.body.innerHTML = data;
    const { inputDigit } = calcFn;

    require('../index');

    const screen = document.querySelector('.result');
    const calc = document.querySelector('.calc-cnt');
    const keys = calc.querySelector('tbody');

    keys.addEventListener('click', (e) => {
      if (e.target.matches('[dataset-number]')) {
        const key = e.target;
        expect(inputDigit).toBeCalled();
        expect(screen.value).toEqual(key.value);
      }
    });

    const clickEvent = new Event('click');
    keys.dispatchEvent(clickEvent);
  });

  test('updates calculator display with decimal after clicking on decimal button', () => {
    const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
    document.body.innerHTML = data;
    const { inputDecimal, updateScreen } = calcFn;

    require('../index');

    // let screen = document.querySelector('.result')
    const calc = document.querySelector('.calc-cnt');
    const keys = calc.querySelector('tbody');

    keys.addEventListener('click', (e) => {
      if (e.target.matches('[dataset-decimal]')) {
        expect(inputDecimal).toBeCalled();
        expect(updateScreen).toBeCalled();
      }
    });

    const clickEvent = new Event('click');
    keys.dispatchEvent(clickEvent);
  });

  test('clears calculator display after clicking on clear button', () => {
    const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
    document.body.innerHTML = data;
    const { clear } = calcFn;

    require('../index');

    const screen = document.querySelector('.result');
    const calc = document.querySelector('.calc-cnt');
    const keys = calc.querySelector('tbody');

    keys.addEventListener('click', (e) => {
      if (e.target.matches('[dataset-clear]')) {
        expect(clear).toBeCalled();
        expect(screen.value).toEqual('0');
      }
    });

    const clickEvent = new Event('click');
    keys.dispatchEvent(clickEvent);
  });

  test('invoke handel operator function after clicking on action button', () => {
    const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
    document.body.innerHTML = data;
    const { handleOperator } = calcFn;

    require('../index');

    const calc = document.querySelector('.calc-cnt');
    const keys = calc.querySelector('tbody');

    keys.addEventListener('click', (e) => {
      if (e.target.matches('[dataset-action]')) {
        expect(handleOperator).toBeCalled();
      }
    });

    const clickEvent = new Event('click');
    keys.dispatchEvent(clickEvent);
  });

  test('invoke handel operator function after clicking on equals button', () => {
    const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
    document.body.innerHTML = data;
    const { handleOperator } = calcFn;

    require('../index');

    const calc = document.querySelector('.calc-cnt');
    const keys = calc.querySelector('tbody');

    keys.addEventListener('click', (e) => {
      if (e.target.matches('[dataset-equals]')) {
        expect(handleOperator).toBeCalled();
      }
    });

    const clickEvent = new Event('click');
    keys.dispatchEvent(clickEvent);
  });
});
