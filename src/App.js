import React, { PureComponent } from "react";
import "./App.css";
import Season from "./components/Season";

class App extends PureComponent {
  constructor() {
    super();
    this.state = { season: 2, mode: 'if-else' };
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>l6_t6 задание 2: условный рендеринг</h1>
          <menu>
            <label htmlFor="season-select">Время года: </label>
            <select
              onChange={this.handleSeasonChange}
              name="season-select"
              value={this.state.season}
            >
              <option value={0}>Зима</option>
              <option value={1}>Весна</option>
              <option value={2}>Лето</option>
              <option value={3}>Осень</option>
            </select>
            <label htmlFor="mode-select">Вид условного рендеринга: </label>
            <select
              onChange={this.handleModeChange}
              name="mode-select"
              value={this.state.mode}
            >
              <option>if-else</option>
              <option>switch</option>
              <option>тернарный оператор</option>
              <option>тернарный оператор в пропсе</option>
              <option>&& в JSX</option>
            </select>
          </menu>
        </header>
        <Season value={this.state.season} mode={this.state.mode}/>
      </div>
    );
  }
  handleSeasonChange(e) {
    this.setState({ season: +e.target.value });
  }
  handleModeChange(e) {
    this.setState({ mode: e.target.value });
  }
}

export default App;
