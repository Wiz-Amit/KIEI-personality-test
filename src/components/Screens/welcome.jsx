import { useContext } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import InventoryContext from "../../store/inventory-context";
import InvisibleCard from "../UI/InvisibleCard";

const Welcome = (props) => {
  const history = useHistory();
  const inventoryCtx = useContext(InventoryContext);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    if (
      !inventoryCtx.user ||
      user.name !== inventoryCtx.user.name ||
      user.email !== inventoryCtx.user.email
    ) {
      inventoryCtx.setUser(user);
    }

    // Redirect to first unfilled question
    const unfilledQuestion = inventoryCtx.questions.find((q) => !q.answer);
    history.push(`/questions/${unfilledQuestion.id}`);
  };

  return (
    <InvisibleCard title="K. I. E. I. Personality assessment">
      <div className="text-center m-auto" style={{ maxWidth: "400px" }}>
        <p className="text-muted">
          Begin test and answer all questions to finish the Personality
          assessment
        </p>

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
              placeholder="Email (Optional)"
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
