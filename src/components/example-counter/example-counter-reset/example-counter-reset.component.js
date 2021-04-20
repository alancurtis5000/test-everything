import { connect } from "react-redux";
import { exampleCounterReset } from "../../../redux/example-counter/example-counter.actions";

const ExampleCounterReset = (props) => {
  const { exampleCounterReset } = props;
  return (
    <div className="example-counter-reset">
      <button
        className="reset"
        onClick={exampleCounterReset}
        data-testid="reset"
      >
        Reset
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  exampleCounterReset: () => dispatch(exampleCounterReset()),
});
export default connect(null, mapDispatchToProps)(ExampleCounterReset);
