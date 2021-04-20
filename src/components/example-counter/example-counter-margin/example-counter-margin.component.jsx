import { connect } from "react-redux";

import { exampleCounterUpdateMargin } from "../../../redux/example-counter/example-counter.actions";

const ExampleCounterMargin = (props) => {
  const { margin, exampleCounterUpdateMargin } = props;
  return (
    <div className="example-counter-margin">
      <input
        value={margin}
        type="number"
        id="margin"
        onChange={(e) => exampleCounterUpdateMargin(e.target.value * 1)}
        data-testid="margin"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  margin: state.exampleCounter.margin,
});

const mapDispatchToProps = (dispatch) => ({
  exampleCounterUpdateMargin: (updatedMargin) =>
    dispatch(exampleCounterUpdateMargin(updatedMargin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleCounterMargin);
