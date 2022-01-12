import { useContext } from "react";
import { ExampleCounterContext } from "../../../providers/example-counter-context/example-counter-context.provider";

const ExampleCounterContextMinus = (props) => {
  const { decrement, margin } = useContext(ExampleCounterContext);
  return (
    <div className="example-counter-minus">
      <button
        className="minus"
        onClick={() => decrement()}
        disabled={margin === 0}
        data-testid="minus"
      >
        Minus
      </button>
    </div>
  );
};

export default ExampleCounterContextMinus;
