import { useContext } from "react";
import { ExampleCounterContext } from "../../../providers/example-counter-context/example-counter-context.provider";

const ExampleCounterContextCount = () => {
  const { count } = useContext(ExampleCounterContext);
  return (
    <div className="example-counter-count">
      <h1>{`Count: `}</h1>
      <h1 data-testid="count">{`${count}`}</h1>
    </div>
  );
};

export default ExampleCounterContextCount;
