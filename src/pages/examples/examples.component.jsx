import ExampleCounter from "../../components/example-counter/example-counter.component";
import ExampleApiCall from "../../components/example-api-call/example-api-call.component";
import ExampleCounterContext from "../../components/example-counter-context/example-counter-context.component";
const ExamplesPage = () => {
  return (
    <div>
      Examples Page
      <ExampleApiCall />
      <ExampleCounter />
      <ExampleCounterContext />
    </div>
  );
};

export default ExamplesPage;
