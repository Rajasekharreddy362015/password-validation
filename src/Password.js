import React from "react";

const styles = {
  login: {
    width: "75%"
  },
  inputs: {
    display: "block",
    margin: "0 auto",
    marginTop: "20px",
    padding: "12px",
    borderRadius: "0.5"
  },
  button: {
    padding: "16px",
    marginTop: "20px",
    backgroundColor: "#113163",
    color: "#efefef",
    fontSize: "large"
  },
  reqs: {
    margin: "0 auto",
    width: "60%"
  },
  requirements: {
    textAlign: "left"
  },
  valid: {
    color: "green"
  },
  invalid: {
    color: "red"
  }
};

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      req: {
        len: "invalid",
        cap: "invalid",
        num: "invalid",
        spec: "invalid"
      }
    };
  }
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    let reqState = {};

    reqState.len = this.state.text.length >= 7 ? "valid" : "invalid";
    reqState.cap = this.state.text.match(/[A-Z]/) ? "valid" : "invalid";
    reqState.low = this.state.text.match(/[a-z]/) ? "valid" : "invalid";
    reqState.num = this.state.text.match(/[0-9]/) ? "valid" : "invalid";
    reqState.spec = this.state.text.match(/[~!@#$%^&*\-_]/)
      ? "valid"
      : "invalid";

    return (
      <div style={styles.login}>
        <input
          type="password"
          style={styles.inputs}
          placeholder="Password"
          value={this.state.text}
          onChange={this.handleChange}
        />

        <h4>Password Requirements</h4>
        <div style={styles.reqs}>
          <ul style={styles.requirements}>
            <li style={styles[reqState.len]}>8-13 Characters</li>
            <li style={styles[reqState.cap]}>At least 1 Capitalcase</li>
            <li style={styles[reqState.low]}>At least 1 lowercase</li>
            <li style={styles[reqState.num]}>At least 1 number</li>
            <li style={styles[reqState.spec]}>At least 1 special character</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Password;
