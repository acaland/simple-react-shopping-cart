import React, { Component } from 'react';
import OrderItem from './OrderItem';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Shopping list</h2>
        </div>
        <div>
          <OrderItem 
            image="http://www.daddario.com/resources/jdcdad/images/products/da_prod_ej16_main_1.jpg" 
            product="D'Addario set corder acustiche" 
            price={3.88}
          />
        </div>
      </div>
    );
  }
}

export default App;
