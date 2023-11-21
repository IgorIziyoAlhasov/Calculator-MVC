import composeHTMLElement from './tools/dom-manipulation'

export default class CalculatorController {
    constructor(props) {
        document.getElementById('application')
            .insertAdjacentElement(composeHTMLElement(
                'h2', 
                { classes: ['succes-message'] }, 
                'CalculatorController has been added'
            ))
    }

}