import ExampleCounterContextCount from "./example-counter-context-count/example-counter-context-count.component";
import ExampleCounterContextAdd from "./example-counter-context-add/example-counter-context-add.component";
import ExampleCounterContextMinus from "./example-counter-context-minus/example-counter-context-minus.component";
import ExampleCounterContextReset from "./example-counter-context-reset/example-counter-context-reset.component";
import ExampleCounterContextMargin from "./example-counter-context-margin/example-counter-context-margin.component";
import ExampleCounterContextProvider from "../../providers/example-counter-context/example-counter-context.provider";

const ExampleCounterContext = () => {
  return (
    <ExampleCounterContextProvider>
      <div className="example-counter-context">
        <h1>ExampleCounterContext</h1>
        <ExampleCounterContextCount />
        <ExampleCounterContextMargin />
        <div className="button-container">
          <ExampleCounterContextAdd />
          <ExampleCounterContextMinus />
          <ExampleCounterContextReset />
        </div>
      </div>
    </ExampleCounterContextProvider>
  );
};

export default ExampleCounterContext;
