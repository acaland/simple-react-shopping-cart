import React, { Component } from 'react';
import OrderItem from './OrderItem';

import './App.css';

class App extends Component {
  state = { totale: 0 }

  quantitaCambiata(amount) {
    //console.log(this.state.totale + amount);
    this.setState({
      totale: parseFloat((this.state.totale + amount).toFixed(2))
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Shopping cart</h2>
        </div>
        <div>
          <OrderItem
            image="http://www.daddario.com/resources/jdcdad/images/products/da_prod_ej16_main_1.jpg"
            product="D'Addario set corder acustiche"
            price={1.20}
            onQuantityChange={this.quantitaCambiata.bind(this)}
          />
          <OrderItem
            image="http://www.emporiomusicale.it/images/articoli/66654_articolo_foto_1.jpg"
            product="Custodia per chitarra"
            price={49.99}
            onQuantityChange={amount => this.setState({
              totale: parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
          <OrderItem
            image="http://www.emporiomusicale.it/images/articoli/63826_articolo_foto_1.jpg"
            product="Chitarra Acustica"
            price={144.99}
            onQuantityChange={this.quantitaCambiata.bind(this)}
          />
        </div>
        <div>
          <h3>Totale: {this.state.totale} Euro </h3>
        </div>
      </div>
    );
  }
}

export default App;
