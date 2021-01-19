import React, { useState, useEffect } from "react";

const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

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

    if (phone === "") {
      setPhoneError("");
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Please provide a valid (USA based) phone number.");
    } else {
      setPhoneError("");
    }
  }, [email, emailError, password, passwordError, phone, phoneError]);

  const validateInputs = () => {
    if (
      email !== "" &&
      password !== "" &&
      phone !== "" &&
      emailError === "" &&
      passwordError === "" &&
      phoneError === ""
    ) {
      props.register();
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
      <div className="form-group">
        <label htmlFor="phone-number">Phone</label>
        <input
          type="text"
          className="input-field validate"
          id="phone-number"
          placeholder="Phone Number"
          onChange={(event) => setPhone(event.target.value)}
        />
        {phoneError !== "" && (
          <small id="phone-error" className="form-text text-danger">
            {phoneError}
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

const RegistrationSuccess = () => {
  return (
    <section>
      <h1>You have successfully registered!</h1>
    </section>
  );
};

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
    };
  }

  render() {
    if (this.state.isRegistered) {
      return <RegistrationSuccess />;
    } else {
      return (
        <RegisterForm register={() => this.setState({ isRegistered: true })} />
      );
    }
  }
}

export default Register;
