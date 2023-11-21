import { composeHTMLElement } from './tools';

export default class CalculatorController {
  constructor(options) {
    document
      .getElementById('application')
      .insertAdjacentElement(
        'beforeend',
        composeHTMLElement(
          'h2',
          { classes: ['message'] },
          'CalculatorController has been initiated'
        )
      );
  }
}
