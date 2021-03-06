import React, { Fragment } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import InvisibleCard from "../UI/InvisibleCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFirstUnansweredQuestion,
  selectMaxId,
  setUser,
} from "../../store/inventory-slice";
import { useState } from "react";
import { useEffect } from "react";

const Welcome = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const maxId = useSelector(selectMaxId);
  const [userData, setUserData] = useState();

  const unfilledQuestion = useSelector(selectFirstUnansweredQuestion);

  useEffect(() => {
    if (userData) {
      // Redirect to first unfilled question
      if (!unfilledQuestion) {
        // history.push(`/result`);
        history.push(`/questions/${maxId}`);
      }

      history.push(`/questions/${unfilledQuestion.id}`);
    }
  }, [userData, history, unfilledQuestion, maxId]);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    dispatch(setUser(userData));
    setUserData(userData);
  };

  return (
    <Fragment>
      <Helmet>
        <link
          rel="canonical"
          href="https://kiei-personality-assessment.wizamit.com/"
        />
        <title>KIEI Personality Assessment</title>
        <meta
          name="description"
          content="K.I.E.I (Kundu Introversion, Extroversion Inventory) for the assessment of personality types. Personality test developed by WizAmit."
        />
      </Helmet>

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

      {/* <InvisibleCard title="How does it work?">
        <div className="text-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://webcache.googleusercontent.com/search?q=cache:n5AMriM_fN0J:dl.icdst.org/pdfs/files3/da1471d078a03fbdfb2b8cce83b1ee8f.pdf+&cd=3&hl=en&ct=clnk&gl=in"
          >
            Read more
          </a>
        </div>
      </InvisibleCard> */}
    </Fragment>
  );
};

export default Welcome;
