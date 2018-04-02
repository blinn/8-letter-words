import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";


class App extends Component {
  state = {
      user : {
      isLoggedIn : false,
      userName: ""
    }
  };
  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Game />
      </div>
    );
  }
}

export default App;
