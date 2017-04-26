import React, { Component } from 'react';

class QuantityManager extends Component {
  state = { quantita: 0 }

  increaseQuantity() {
    this.setState({quantita: this.state.quantita + 1});
    this.props.onQuantityChange(this.props.price);
  }
  decreaseQuantity() {
    if (this.state.quantita > 0) {
      this.setState({quantita: this.state.quantita - 1});
      this.props.onQuantityChange(-this.props.price);
    }
  }
  render() {
    const subtotale = (this.props.price * this.state.quantita).toFixed(2);
    return (
      <div style={{margin: 20}}>
        <div>
          Quantità: {this.state.quantita}
        </div>
        <div style={{ padding: 10 }}>
          <button onClick={this.increaseQuantity.bind(this)}>Add</button>
          <button onClick={this.decreaseQuantity.bind(this)}>Remove</button>
          <h5>
            Subtotale: {subtotale} Euro
          </h5>
        </div>
      </div>
    )
  }
}

export default QuantityManager;
