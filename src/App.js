import React from 'react';
import './App.css';

import Playlists from './components/Playlists'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    {/* <Navigation /> */}
      <div className="wrapper">
        { <Playlists /> }
      </div>
    </div>
  );
}

export default App;
