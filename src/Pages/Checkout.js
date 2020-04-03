import React, { Component } from 'react';
import Products from './Products';
class Checkout extends Component {
    state = { products: [] }
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.products.map((_product) => {
                                return (<tr>
                                    <td>{_product.name}</td>
                                    <td> <img className="card-img-top" src={_product.image} style={{ maxWidth: "50px", maxHeight: "50px", }} /></td>
                                    <td>{_product.count}</td>
                                </tr>)
                            }
                            )
                        }

                    </tbody>
                </table>

            </div>
        );
    }
    componentWillMount = () => {

        var cartProducts = localStorage.getItem("cartProducts");

        cartProducts = JSON.parse(cartProducts);
        if (cartProducts) {

            this.setState({ products: [...cartProducts] })
        }
    }
}

export default Checkout;