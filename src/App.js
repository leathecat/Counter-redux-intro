import React, { Component } from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  //common to write initialState above the reducer
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

//   if (action.type ==="INCREMENT") {
//       return {
//         count: state.count + 1
//       }
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       count: state.count - 1
//     }
//   }

// }

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
