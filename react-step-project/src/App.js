import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage, SingleNote } from './pages';
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
        </Switch>
      </NoteContextProvider>
    </Router>
  );

}

export default App;
