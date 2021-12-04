const fs = require('fs');
import calcFn from '../calculator';

'use strict';

jest.mock('../index')

describe('clicking on calculators buttons changes the calculator display', () => {
  
  test('updates calculator display with digit after clicking on digit button', () => {
    const $ = require('jquery');
    const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
    document.body.innerHTML = data;
    const { inputDigit } = calcFn;

    require('../index.js')

    let screen = document.querySelector('.result')
    const calc = document.querySelector('.calc-cnt');
    const keys = calc.querySelector('tbody')
           
    keys.addEventListener('click', (e) => {
      if (e.target.matches('[dataset-number]')) {
        const key = e.target
        expect(inputDigit).toBeCalled()
        expect(screen.value).toEqual(key.value)
      }
        
    })
   
    let clickEvent = new Event('click');
    keys.dispatchEvent(clickEvent)
    
  })
})