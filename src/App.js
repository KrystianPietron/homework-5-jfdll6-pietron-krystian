import React from 'react';
import Exercices4 from './Exercices4'
import Exercices1 from './Exercices1'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
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
                <h2>Zadanie 2 : Linijki 24 i 25 wystarczy pousuwać nawiasy ().</h2>
                <hr />
              </li>
              <li>
                <h2>Zadanie 3 :<a href='https://codesandbox.io/s/3kx8ljj4nm'> https://codesandbox.io/s/3kx8ljj4nm</a></h2>
                <hr />
              </li>
              <li>
                <Link to='/exercices-4'>Zadanie 4</Link>
                <hr />
              </li>
            </ul>
            <Route path='/exercices-1' component={Exercices1} />
            <Route path='/exercices-4' component={Exercices4} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
