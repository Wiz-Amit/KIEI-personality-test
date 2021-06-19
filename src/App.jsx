import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Layout/navigation";
import Result from "./components/Result";
import Welcome from "./components/Screens/welcome";
import Slide from "./components/Slide";
import InventoryProvider from "./store/InventoryProvider";

function App() {
  return (
    <Fragment>
      <InventoryProvider>
        <Navigation />
        <Container className="container-fluid w-100">
          <Switch>
            <Route strict path="/result">
              <Result />
            </Route>

            <Route path="/questions/:id">
              <Slide />
            </Route>

            <Route strict path="/">
              <Welcome />
            </Route>
          </Switch>
        </Container>
      </InventoryProvider>
    </Fragment>
  );
}

export default App;
