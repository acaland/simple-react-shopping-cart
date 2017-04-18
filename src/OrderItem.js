import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import Product from './Product';

export default class OrderItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantita: 0
        }
    }
    componentWillMount() {
        console.log("sto per montare", this.state.quantita);
    }

    componentDidMount() {
        console.log("sono stato renderizzato", this.state.quantita);
    }

    componentWillReceiveProps(nextProps) {
        console.log("sto per ricevere nuove proprietà dal padre");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("devo aggiornare il componente?");
        console.log(this.state, nextState);
        if (nextState.quantita < 0) {
            return false
        }
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Il componente è stato aggiornato");
    }

    render() {
        console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
        return (
            <div style={{backgroundColor: "red", display: "flex", justifyContent: "flex-start", padding: 10}}>
                <Thumbnail url={this.props.image}/>
                <Product name={this.props.product} price={this.props.price}/>
                <div style={{margin: 20}}>
                    <div>Quantità: {this.state.quantita}</div>
                    <div>
                        <button onClick={() => this.setState({quantita: this.state.quantita + 1})}>Add</button>
                        <button onClick={() => this.setState({quantita: this.state.quantita - 1})}>Remove</button>
                    </div>
                </div>
            </div>
            
        );
    }
}