//import ReactDOM from 'react-dom';
import React from 'react';

//import {useContext} from 'react';

function Home () {
    const ctx = React.useContext(userContext);
    const userContext = React.createContext(ctx.value);
  return (
    
      <h1>Home
          {JSON.stringify(ctx.value)}
      </h1>
    
  );
}

export default Home;