import React from 'react';

/*export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.price} Euro</h4>
            </div>
        )
    }
}*/

const Product = (props) => (
    <div>
                <h3>{props.name}</h3>
                <h4>{props.price} Euro</h4>
            </div>
);

export default Product;

