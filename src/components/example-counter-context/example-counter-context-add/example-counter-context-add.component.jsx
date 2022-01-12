import { useContext } from "react";
import { ExampleCounterContext } from "../../../providers/example-counter-context/example-counter-context.provider";

const ExampleCounterContextAdd = () => {
  const { increment, margin } = useContext(ExampleCounterContext);
  return (
    <div className="example-counter-add">
      <button
        className="add"
        onClick={() => increment()}
        data-testid="add"
        disabled={margin === 0}
      >
        Add
      </button>
    </div>
  );
};

export default ExampleCounterContextAdd;
