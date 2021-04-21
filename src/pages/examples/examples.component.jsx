import ExampleCounter from "../../components/example-counter/example-counter.component";
import ExampleApiCall from "../../components/example-api-call/example-api-call.component";
const ExamplesPage = () => {
  return (
    <div>
      Examples Page
      <ExampleApiCall />
      <ExampleCounter />
    </div>
  );
};

export default ExamplesPage;
