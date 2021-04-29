const Form = (props) => {
  return (
    <form className={props.formStyle}>
      <h1>Create Account</h1>
      <p>Name</p>
      <div>
        <input
          type="text"
          placeholder="Jean Dupont"
          value={props.nameValue}
          onChange={props.nameOnChange}
        />
      </div>
      <p>Email</p>
      <div>
        <input
          type="text"
          placeholder="jeandupont@lereacteur.gmail"
          value={props.emailValue}
          onChange={props.emailOnChange}
        />
      </div>
      <p>Password</p>
      <div>
        <input
          style={{
            borderColor: props.condition ? "red" : "inherit",
          }}
          type="password"
          placeholder="lErEaCtEuR2020"
          value={props.paswwordValue}
          onChange={props.passwordOnChange}
        />
      </div>
      <p>Confirm your password</p>
      <div>
        <input
          style={{
            borderColor: props.condition ? "red" : "inherit",
          }}
          type="password"
          placeholder="lErEaCtEuR2020"
          value={props.passwordConfirmationValue}
          onChange={props.passwordConfirmationOnChange}
        />
      </div>
      <span>{props.error}</span>
      <div>
        <button type="submit" onClick={props.submitRegister}>
          Register
        </button>
      </div>
    </form>
  );
};

export default Form;
