import { connect } from "react-redux";
import { exampleCounterIncrement } from "../../../redux/example-counter/example-counter.actions";

const ExampleCounterAdd = (props) => {
  const { exampleCounterIncrement, margin } = props;
  return (
    <div className="example-counter-add">
      <button
        className="add"
        onClick={exampleCounterIncrement}
        data-testid="add"
        disabled={margin === 0}
      >
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  exampleCounterIncrement: () => dispatch(exampleCounterIncrement()),
});

const mapStateToProps = (state) => ({
  margin: state.exampleCounter.margin,
});
export default connect(mapStateToProps, mapDispatchToProps)(ExampleCounterAdd);
