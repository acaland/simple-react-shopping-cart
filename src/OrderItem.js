import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import Product from './Product';



const styles = {
  wrapper: {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      margin: 5
    }
};

export default class OrderItem extends Component {
    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         quantita: 0
    //     }
    // }
    state = { quantita: 0 }

    // componentWillMount() {
    //   console.log("sto per montare OrderItem");
    // }
    //
    // componentDidMount() {
    //   console.log("ho montato OrderItem");
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("vuoi aggiornare il componente? ");
    //   //console.log(nextProps, nextState);
    //   if (this.state.quantita > 0 ) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //   console.log("il componente si aggiornerà", nextProps, nextState);
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //   console.log("il componente è stato aggiornernatp", prevProps, prevState);
    // }

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
        //console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
        return (
            <div style={styles.wrapper}>
                <Thumbnail url={this.props.image}/>
                <Product name={this.props.product} price={this.props.price}/>
                <div style={{ margin: 20 }}>
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
            </div>
        );
    }
}
