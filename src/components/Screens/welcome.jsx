import React, { Fragment } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import InvisibleCard from "../UI/InvisibleCard";
import AppInfo from "../UI/AppInfo";
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
        <title>
          KIEI Personality Assessment - Free Indian Personality Test | WizAmit
        </title>
        <meta
          name="description"
          content="Take the scientifically validated KIEI (Kundu Introversion Extraversion Inventory) personality test. Designed specifically for Indian socio-cultural context by Dr. Ramanath Kundu at University of Calcutta. Free, private, and accurate personality assessment."
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kiei-personality-assessment.wizamit.com/"
        />
        <meta
          property="og:title"
          content="KIEI Personality Assessment - Free Indian Personality Test"
        />
        <meta
          property="og:description"
          content="Discover your personality type with the KIEI assessment. A scientifically validated test designed for Indian context. Free, private, and takes only 30 minutes."
        />
        {/* <meta
          property="og:image"
          content="https://kiei-personality-assessment.wizamit.com/og-image.jpg"
        /> */}
        <meta property="og:site_name" content="KIEI Personality Assessment" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://kiei-personality-assessment.wizamit.com/"
        />
        <meta
          name="twitter:title"
          content="KIEI Personality Assessment - Free Indian Personality Test"
        />
        <meta
          name="twitter:description"
          content="Take the scientifically validated KIEI personality test designed for Indian context. Free, private, and accurate."
        />
        {/* <meta
          name="twitter:image"
          content="https://kiei-personality-assessment.wizamit.com/og-image.jpg"
        /> */}
        <meta name="twitter:creator" content="@wizamit" />

        {/* Additional SEO */}
        <meta
          name="application-name"
          content="KIEI Personality Assessment"
        />
        <meta name="apple-mobile-web-app-title" content="KIEI Test" />
        <meta
          name="apple-mobile-web-app-description"
          content="Free Indian personality assessment test"
        />
      </Helmet>

      <InvisibleCard title="K. I. E. I. Personality assessment">
        <div className="text-center m-auto" style={{ maxWidth: "400px" }}>
          <p className="text-muted text-pretty">
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

        <AppInfo />
      </InvisibleCard>
    </Fragment>
  );
};

export default Welcome;
