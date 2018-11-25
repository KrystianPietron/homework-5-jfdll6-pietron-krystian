import React from 'react';
import Exercices4 from './Exercices4/Exercices4'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Zadanie 1</h2>
          <hr/>
        </div>
        <div>
          <h2>Zadanie 2 : Linijki 24 i 25 wystarczy pousuwać nawiasy ().</h2>
          <hr/>
        </div>
        <div>
          <h2>Zadanie 3 :<a href='https://codesandbox.io/s/3kx8ljj4nm'> https://codesandbox.io/s/3kx8ljj4nm</a></h2>
          <hr/>
        </div>
        <div>
          <h2>Zadanie 4</h2>
          <Exercices4 />
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
