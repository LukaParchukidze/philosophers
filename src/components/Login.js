import React, { useState, useEffect } from "react";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (email === "") {
      setEmailError("");
    } else if (!emailRegex.test(email)) {
      setEmailError("Please provide a valid email address.");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("");
    } else if (!/^[0-9]+$/.test(password) && !passwordRegex.test(password)) {
      setPasswordError(
        "Please provide at least 8 characters with at least 1 letter and a number."
      );
    } else {
      setPasswordError("");
    }
  }, [email, emailError, password, passwordError]);

  const validateInputs = () => {
    if (
      email !== "" &&
      password !== "" &&
      emailError === "" &&
      passwordError === ""
    ) {
      props.login();
    }
  };

  return (
    <form style={{ width: "512px", textAlign: "justify" }}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="input-field validate"
          id="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError !== "" && (
          <small id="email" className="form-text text-danger">
            {emailError}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input-field validate"
          id="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError !== "" && (
          <small id="password-error" className="form-text text-danger">
            {passwordError}
          </small>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-submit"
        onClick={(event) => {
          event.preventDefault();

          validateInputs();
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        Submit
      </button>
    </form>
  );
};

const LoginSuccess = () => {
  return (
    <section>
      <h1>You have successfully logged in!</h1>
    </section>
  );
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <LoginSuccess />;
    } else {
      return <LoginForm login={() => this.setState({ isLoggedIn: true })} />;
    }
  }
}

export default Login;
