import { composeHTMLElement } from './tools';

export default class CalculatorView {
  constructor(options) {
    document
      .getElementById('application')
      .insertAdjacentElement(
        'beforeend',
        composeHTMLElement(
          'h2',
          { classes: ['message'] },
          'CalculatorView has been initiated'
        )
      );
  }
}
