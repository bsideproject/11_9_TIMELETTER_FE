import { Button, ProgressBar } from '~components/index';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProgressBar steps={5} activeStep={2} />
        <img src={logo} className="App-logo" alt="logo" />
        <Button label="Shared Button" background="transparent" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
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

export default App;
