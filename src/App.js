import React, { Component } from "react";
import ReactDOM from 'react-dom';
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";

import { store } from "./store";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}
const render = function() {
  ReactDOM.render(<App />, document.getElementById("root"))
}
store.subscribe(render);

export default App;
