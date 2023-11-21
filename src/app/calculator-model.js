import { composeHTMLElement } from './tools';

export default class CalculatorModel {
  constructor(options) {
    document
      .getElementById('application')
      .insertAdjacentElement(
        'beforeend',
        composeHTMLElement(
          'h2',
          { classes: ['message'] },
          'CalculatorModel has been initiated'
        )
      );
  }
}
