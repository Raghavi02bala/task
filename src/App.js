import React from 'react';
import './App.css';

import Tables from './Tables';
import Pagination from './Pagination';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from './context';
import TableDetails from './TableDetail';

const App = () => {  

  return (
    <>
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Tables />
              <Pagination  />
            </Route>
            <Route exact path="/details">
            <TableDetails />
          </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  )
}

export default App;

