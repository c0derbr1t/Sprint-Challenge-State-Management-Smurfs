import React from "react";

import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';

import { connect } from 'react-redux';
import "./App.css";

const App = props => {
  console.log(props.state);
  return (
    <div className="App">
      <header>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>
      </header>
      <section>
        <AddSmurf />
        <SmurfsList />
      </section>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, {})(App);
