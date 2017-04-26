import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import Product from './Product';

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

    render() {
        const subtotale = (this.props.price * this.state.quantita).toFixed(2);

        //console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
        return (
            <div style={{
                //backgroundColor: "red",
                display: "flex",
                justifyContent: "flex-start",
                padding: 0,
                borderStyle: 'solid',
                borderWidth: 1,
                margin: 5
              }}>
                <Thumbnail url={this.props.image}/>
                <Product name={this.props.product} price={this.props.price}/>
                <div style={{margin: 20}}>
                  <div>
                    Quantità: {this.state.quantita}
                  </div>
                  <div>
                    <button onClick={() => {
                        this.setState({quantita: this.state.quantita + 1});
                        this.props.onQuantityChange(this.props.price);
                      }}>
                      Add
                    </button>
                    <button onClick={() => {
                        if (this.state.quantita > 0) {
                          this.setState({quantita: this.state.quantita - 1});
                          this.props.onQuantityChange(-this.props.price);
                        }
                      }}>
                      Remove
                    </button>
                    <h5>
                      Subtotale: {subtotale}
                    </h5>
                  </div>
                </div>
            </div>

        );
    }
}
