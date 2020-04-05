import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage, SingleNote, Create, Archive } from './pages';
import { Header } from './commons';
import { NoteContextProvider } from './context/notes';

function App() {

  return (
    <Router>
      <Header/>
      <NoteContextProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />  
          <Route path="/single-note/:id" component={SingleNote} />
          <Route path="/create" component={Create} /> 
          <Route path="/archive" component={Archive} /> 
        </Switch>
      </NoteContextProvider>
    </Router>
  );

}

export default App;
