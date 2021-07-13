import { useEffect } from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Layout/navigation";
import Result from "./components/Screens/Result";
import Welcome from "./components/Screens/welcome";
import Slide from "./components/Slide";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Container
        className="container-fluid w-100 h-100 d-flex justify-content-between align-items-center flex-column"
        style={{
          minHeight: "88vh",
        }}
      >
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

        <p className="text-muted text-center mt-2">
          Developed by{" "}
          <a href="https://wizamit.com" target="_blank" rel="noreferrer">
            WizAmit
          </a>
        </p>
      </Container>
    </Fragment>
  );
}

export default App;
