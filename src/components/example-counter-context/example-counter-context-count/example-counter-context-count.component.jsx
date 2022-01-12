import { connect } from "react-redux";

const ExampleCounterContextCount = (props) => {
  const { count } = props;
  return (
    <div className="example-counter-count">
      <h1>{`Count: `}</h1>
      <h1 data-testid="count">{`${count}`}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.exampleCounter.count,
});
export default connect(mapStateToProps)(ExampleCounterContextCount);
