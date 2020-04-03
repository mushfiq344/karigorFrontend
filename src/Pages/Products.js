import React, { Component } from 'react';

import ProductsCategory from "../Components/ProductsCategory";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";
import Product from "../Components/Product";
class Products extends Component {
    state = {
        Products: []
    };


    render() {

        return (
            <div className="container">
                <div className="row">
                    <ProductsCategory type={this.props.query.get("type")} size={this.props.query.get("size")} query={this.props.query} />
                </div>
                <div className="row">
                    {
                        this.state.Products.map((_product, _index) => {

                            return (
                                <Product key={_index} addToCart={this.addToCart} removeFromCart={this.removeFromCart} _product={_product} _index={_index}></Product>
                            )
                        })
                    }

                </div>

            </div >);
    }
    componentDidUpdate = async () => {
        console.log("updated");
    }
    componentWillMount = async () => {

        var result;
        var type = this.props.query.get("type");
        console.log("type:", type);

        if (type === "Male") {
            await fetch('http://localhost:8080/product/male')
                .then(res => res.json())
                .then((data) => {
                    result = Object.values(data);
                })
                .catch(console.log)
        }
        else if (type === "Female") {
            await fetch('http://localhost:8080/product/female')
                .then(res => res.json())
                .then((data) => {
                    result = Object.values(data);
                })
                .catch(console.log)

        }
        else {
            await fetch('http://localhost:8080/product/all')
                .then(res => res.json())
                .then((data) => {
                    console.log("data", data);
                    result = Object.values(data);
                })
                .catch(console.log)

        }


        this.setState({ Products: [...result[0]] });
    }

    addToCart = (e, product, count) => {
        product.count = count;
        const cartProducts = localStorage.getItem("cartProducts");

        if (cartProducts && JSON.parse(cartProducts).length) {

            var products = JSON.parse(cartProducts);
            products = products.filter(function (item) {
                return item.id === product.id;
            });
            if (!products.length) {
                products = [...JSON.parse(cartProducts), product];
                localStorage.setItem("cartProducts", JSON.stringify(products));
            }

        } else {
            var products = [];
            products.push(product);
            localStorage.setItem("cartProducts", JSON.stringify(products));
        }

        this.setState({ Products: [...this.state.Products] });
    }

    removeFromCart = (e, product) => {
        const cartProducts = localStorage.getItem("cartProducts");
        if (cartProducts) {
            var id = product.id;
            var products = JSON.parse(cartProducts);
            var products = products.filter(function (item) {
                return item.id !== id;
            });
            localStorage.setItem("cartProducts", JSON.stringify(products));
            this.setState({ Products: [...this.state.Products] });
        }

    }



}


export default Products;