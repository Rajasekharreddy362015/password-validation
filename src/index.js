import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Password from "./Password";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Test extends React.Component {
  render() {
    return <div>password</div>;
  }
}

const App = () => {
  return (
    <div style={styles}>
      <Test />
      <Password />
    </div>
  );
};

render(<App />, document.getElementById("root"));
