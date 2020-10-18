import React, { Component } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Timer from "./components/Timer/Timer";
import Team from "./components/Team/Team";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  state = {
    timer: [3, 16, 36],
  };

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <main>
          <Header />
          <About />
          <Timer
            value_days={this.state.timer[0]}
            value_hours={this.state.timer[1]}
            value_minutes={this.state.timer[2]}
          />
          <Team />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
