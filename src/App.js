import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
