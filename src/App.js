import React from 'react';
import Exercices1 from './Exercices1'
import Exercices2 from './Exercices2'
import Exercices3 from './Exercices3'
import Exercices4 from './Exercices4'
import Links from './Links'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <h1>Homework nr. 5 JFDDL6 Pietroń Krystian</h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
                <hr />
              </li>
              <li>
                <Link to='/exercices-1'>Zadanie 1 : Tic Tac Toe</Link>
                <hr />
              </li>
              <li>
                <Link to='/exercices-2'>Zadanie 2</Link>
                <hr />
              </li>
              <li>
                <Link to='/exercices-3'>Zadanie 3</Link>
                <hr />
              </li>
              <li>
                <Link to='/exercices-4'>Zadanie 4</Link>
                <hr />
              </li>
              <li>
                <Link to='/Links'>Link do repo</Link>
                <hr />
              </li>
            </ul>
            <Route path='/exercices-1' component={Exercices1} />
            <Route path='/exercices-2' component={Exercices2} />
            <Route path='/exercices-3' component={Exercices3} />
            <Route path='/exercices-4' component={Exercices4} />
            <Route path='/links' component={Links} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
