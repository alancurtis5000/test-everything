import { connect } from "react-redux";
import { exampleCounterDecrement } from "../../../redux/example-counter/example-counter.actions";

const ExampleCounterMinus = (props) => {
  const { exampleCounterDecrement, margin } = props;
  return (
    <div className="example-counter-minus">
      <button
        className="minus"
        onClick={exampleCounterDecrement}
        disabled={margin === 0}
        data-testid="minus"
      >
        Minus
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  exampleCounterDecrement: () => dispatch(exampleCounterDecrement()),
});

const mapStateToProps = (state) => ({
  margin: state.exampleCounter.margin,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleCounterMinus);
