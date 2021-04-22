import { connect } from "react-redux";
import { exampleApiCall } from "../../redux/example-api-call/example-api-call.actions";
const ExampleApiCall = (props) => {
  const { exampleApiCall, exampleApiCallRedux } = props;
  const { error, data, isLoaded } = exampleApiCallRedux;
  const { text, author } = data;

  const handleOnClick = () => {
    console.log("handleOnClick");
    exampleApiCall();
  };

  const renderError = () => {
    return error ? <div>{error}</div> : null;
  };

  const renderLoading = () => {
    return isLoaded ? null : <div>...Loading...</div>;
  };

  return (
    <div className="example-api-call">
      <h1>ExampleApiCall</h1>
      {renderLoading()}
      <div>
        <div>Quote:</div>
        <div>{text}</div>
        <div>Author:</div>
        <div>{author}</div>
      </div>
      {renderError()}

      <button onClick={handleOnClick}>Get Quote</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  exampleApiCall: () => dispatch(exampleApiCall()),
});

const mapStateToProps = (state) => ({
  exampleApiCallRedux: state.exampleApiCall,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleApiCall);
