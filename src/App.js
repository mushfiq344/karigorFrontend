
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function App() {
  let query = useQuery();
  console.log(query);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/old-match">
          <Redirect to="/will-match" />
        </Route>
        <Route path="/Products">

          <Products query={query} />
        </Route>
        <Route path="/Checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </div >
  );
}


function Home() {
  return <h3>Routes: /Products and /Checkout</h3>;
}



function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

