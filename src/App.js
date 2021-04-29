import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [display1, setDisplay1] = useState("hidden");
  const [display2, setDisplay2] = useState("display");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      setErrorMessage("Les mots de passe ne sont pas identiques");
    } else {
      setDisplay1("display");
      setDisplay2("hidden");
    }
  };
  const handleSubmitEdit = (event) => {
    event.preventDefault();

    setDisplay1("hidden");
    setDisplay2("display");
  };

  return (
    <div>
      <Form
        condition={errorMessage}
        formStyle={display2}
        submitRegister={handleSubmit}
        nameValue={name}
        nameOnChange={(event) => {
          setName(event.target.value);
        }}
        emailValue={email}
        emailOnChange={(event) => {
          setEmail(event.target.value);
        }}
        passwordValue={password}
        passwordOnChange={(event) => {
          setPassword(event.target.value);
        }}
        passwordConfirmationValue={passwordConfirmation}
        passwordConfirmationOnChange={(event) => {
          setPasswordConfirmation(event.target.value);
        }}
        error={<h2>{errorMessage}</h2>}
      />
      <StepTwo
        visibleStyle="stepTwo"
        submitEdit={handleSubmitEdit}
        stepTwoStyle={display1}
        name={name}
        email={email}
        password={password}
      />
    </div>
  );
}

export default App;
