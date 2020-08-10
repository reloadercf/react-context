import React from 'react';
import {Context} from "./context/Context"
import Movie from './components/Movie'

function App() {
  return (
    <div>
      <Context>
        <Movie />
      </Context>
    </div>
  );
}

export default App;