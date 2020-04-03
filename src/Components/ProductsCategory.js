import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
class ProductsCategory extends Component {
    state = { type: null, size: "" }
    render() {
        if (this.state.type != null) {
            let currentUrlParams = new URLSearchParams(window.location.search);
            currentUrlParams.set('type', this.state.type);
            // changing location using new url
            window.location = window.location.pathname + "?" + currentUrlParams.toString();
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <select className="form-control" id="typeCategory" onChange={(e) => this.typeChange(e)}>
                        <option value="All">All</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>

                    </select>
                </div>
            </div>
        );
    }

    typeChange = (e) => {
        this.setState({ type: e.target.value });
    }

    componentDidMount = () => {

        if (this.props.type === null || this.props.type === 'All') {
            document.getElementById("typeCategory").value = "All"
        }
        else {
            document.getElementById("typeCategory").value = this.props.type;
        }

    }


}

export default ProductsCategory;