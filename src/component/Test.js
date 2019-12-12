import React, { Component } from "react";
import HelloWorld from "../HelloWorld";

import reducer from "../reducers";
import { createStore } from "redux"; //an import from the redux library

const initialState = { test: "AAAAAAA" };
const store = createStore(reducer, initialState);  // an incomplete solution - for now.

class Test extends Component {
  render() {
      console.log(store.getState());
    return (
        <div>
            <HelloWorld tech={store.getState().test} />;
        </div>

    ) 
  }
}

export default Test;