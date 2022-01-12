import { useContext } from "react";
import { ExampleCounterContext } from "../../../providers/example-counter-context/example-counter-context.provider";

const ExampleCounterContextReset = () => {
  const { reset } = useContext(ExampleCounterContext);
  return (
    <div className="example-counter-reset">
      <button className="reset" onClick={() => reset()} data-testid="reset">
        Reset
      </button>
    </div>
  );
};

export default ExampleCounterContextReset;
