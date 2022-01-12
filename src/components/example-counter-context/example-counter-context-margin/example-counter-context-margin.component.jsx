import { useContext } from "react";
import { ExampleCounterContext } from "../../../providers/example-counter-context/example-counter-context.provider";

const ExampleCounterContextMargin = (props) => {
  const { margin, updateMargin } = useContext(ExampleCounterContext);
  return (
    <div className="example-counter-margin">
      <input
        value={margin}
        type="number"
        id="margin"
        onChange={(e) => updateMargin(e.target.value * 1)}
        data-testid="margin"
      />
    </div>
  );
};

export default ExampleCounterContextMargin;
