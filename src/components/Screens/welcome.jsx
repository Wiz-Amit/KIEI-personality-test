import { useContext } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import InventoryContext from "../../store/inventory-context";
import InvisibleCard from "../UI/InvisibleCard";

const Welcome = (props) => {
  const inventoryCtx = useContext(InventoryContext);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    inventoryCtx.setUser(user);
  };

  return (
    <InvisibleCard title="K. I. E. I. Personality assessment">
      <div
        className="actions mt-2 text-center m-auto"
        style={{ maxWidth: "400px" }}
      >
        <Form onSubmit={formSubmissionHandler}>
          <InputGroup className="mb-3">
            <FormControl
              required
              name="name"
              placeholder="Name"
              aria-label="Name"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
            />
          </InputGroup>

          <Button type="submit" className="btn-primary btn-block px-5">
            Begin Test
          </Button>
        </Form>
      </div>
    </InvisibleCard>
  );
};

export default Welcome;
