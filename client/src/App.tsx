import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import Cart from "./pages/Cart";
import routes from "./routes";
import "./App.css";

const loading = (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "white"
    }}
  >
    <h2>On loading...</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
