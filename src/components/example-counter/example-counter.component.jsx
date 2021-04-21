import ExampleCounterCount from "./example-counter-count/example-counter-count.component";
import ExampleCounterAdd from "./example-counter-add/example-counter-add.component";
import ExampleCounterMinus from "./example-counter-minus/example-counter-minus.component";
import ExampleCounterReset from "./example-counter-reset/example-counter-reset.component";
import ExampleCounterMargin from "./example-counter-margin/example-counter-margin.component";

const ExampleCounter = () => {
  return (
    <div className="example-counter">
      <h1>ExampleCounter</h1>
      <ExampleCounterCount />
      <ExampleCounterMargin />
      <div className="button-container">
        <ExampleCounterAdd />
        <ExampleCounterMinus />
        <ExampleCounterReset />
      </div>
    </div>
  );
};

export default ExampleCounter;
