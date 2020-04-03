import React, { Component } from 'react';

class Product extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <div className="card" style={{ width: "400px" }}>
                <img className="card-img-top" src={this.props._product.image} style={{ width: "100%", maxHeight: "300px" }} />
                <div className="card-body">
                    <h4 className="card-title">{this.props._product.name}</h4>
                    <div className="row">
                        {!this.ifExist(this.props._product.id) ? (
                            <React.Fragment>
                                <div className="col-3 mr-1">
                                    <input className="form-control" type="number" id="points" name="points" step="1" min="1" onChange={(e) => this.incCount(e)} />
                                </div>
                                <div className="col-4">
                                    <button href="#" className="btn btn-primary" onClick={(e) => this.props.addToCart(e, this.props._product, this.state.count)}>Add to Cart</button>
                                </div>
                            </React.Fragment>
                        ) : (
                                <button href="#" className="btn btn-primary" onClick={(e) => this.props.removeFromCart(e, this.props._product)}>Remove From Cart</button>
                            )}


                    </div>
                </div>
            </div>);
    }

    ifExist = (id) => {

        const cartProducts = localStorage.getItem("cartProducts");
        if (cartProducts) {

            var products = JSON.parse(cartProducts);
            var products = products.filter(function (item) {
                return item.id === id;
            });
            if (products[0]) {
                return true;
            } else {
                return false;
            }
        }
        else return false;
    }

    incCount = (e) => {
        this.setState({ count: e.target.value });
    }
}

export default Product;