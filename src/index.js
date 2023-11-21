import CalculatorController from './app/calculator-controller';
import CalculatorModel from './app/calculator-model';
import CalculatorView from './app/calculator-view';
function App() {
  let model = new CalculatorModel();
  let view = new CalculatorView();
  let controller = new CalculatorController();
}

App();
