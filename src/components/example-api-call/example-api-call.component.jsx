import { connect } from "react-redux";
import { exampleApiCall } from "../../redux/example-api-call/example-api-call.actions";
import isEmpty from "lodash/isEmpty";

const ExampleApiCall = (props) => {
  const { exampleApiCall, exampleApiCallRedux } = props;
  const { error, data, isLoaded } = exampleApiCallRedux;
  const { text, author } = data;

  const handleOnClick = () => {
    exampleApiCall();
  };

  const renderError = () => {
    return error ? <div data-testid="error">{error}</div> : null;
  };

  const renderLoading = () => {
    return isLoaded ? null : <div data-testid="is-loading">...Loading...</div>;
  };

  const renderNoResults = () => {
    if (isEmpty(data) && isLoaded) {
      return <div data-testid="no-results">...No results found...</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="example-api-call">
      <h1>ExampleApiCall</h1>
      {renderLoading()}
      {renderNoResults()}
      <div>
        <div>Quote:</div>
        <div data-testid="quote-text">{text}</div>
        <div>Author:</div>
        <div data-testid="quote-author">{author}</div>
      </div>
      {renderError()}
      <button data-testid="get-quote" onClick={handleOnClick}>
        Get Quote
      </button>
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
