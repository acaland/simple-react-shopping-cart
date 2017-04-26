import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import Product from './Product';

const OrderItem2 = React.createClass({
    getInitialState() {
        return {
            quantita: 0
        }
    },
    getDefaultProps() {
        return {
            product: "No name",
            price: 0
        }
    },
    increaseQuantity() {
        this.setState({quantita: this.state.quantita + 1})
    },
    decreaseQuantity() {
        this.setState({quantita: this.state.quantita + 1})
    },
    render() {
        console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
        return (
            <div style={{backgroundColor: "red", display: "flex", justifyContent: "flex-start", padding: 10}}>
                <Thumbnail url={this.props.image}/>
                <Product name={this.props.product} price={this.props.price}/>
                <div style={{margin: 20}}>
                    <div>Quantità: {this.state.quantita}</div>
                    <div>
                        <button onClick={this.increaseQuantity}>Add</button>
                        <button onClick={this.decreaseQuantity}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
});

export default OrderItem2;