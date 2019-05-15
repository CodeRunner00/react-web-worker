import React from 'react';
import logo from './logo.svg';
import './App.css';
import myWorker from './test.worker';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('component mounteds');
    const worker = new myWorker();
    worker.postMessage("howdydoo");
    worker.addEventListener('message', event => console.log('the app side ', event.data));

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

}

export default App;
