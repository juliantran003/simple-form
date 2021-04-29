const StepTwo = (props) => {
  return (
    <div className={props.stepTwoStyle}>
      <div className={props.visibleStyle}>
        <h1>Results</h1>
        <div className="greyContainer">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <p>Password: {props.password}</p>
        </div>
        <button type="submit" onClick={props.submitEdit}>
          Edit your information
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
