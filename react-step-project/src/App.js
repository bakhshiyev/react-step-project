import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage, Create } from './pages';
import { Header } from './commons';
import { NoteContextProvider } from './context/notes';

function App() {

  return (
    <Router>
      <Header/>
      <NoteContextProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />  
          <Route path="/create" component={Create} /> 
        </Switch>
      </NoteContextProvider>
    </Router>
  );

}

export default App;
