import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Layout/navigation";
import Welcome from "./components/Screens/welcome";
import InventoryProvider from "./store/InventoryProvider";

function App() {
  return (
    <Fragment>
      <InventoryProvider>
        <Navigation />
        <Container className="container-fluid w-100">
          <Welcome />
        </Container>
      </InventoryProvider>
    </Fragment>
  );
}

export default App;
