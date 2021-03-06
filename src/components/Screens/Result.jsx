import { Fragment } from "react";
import InvisibleCard from "../UI/InvisibleCard";
import introvertImage from "../../assets/introvert.svg";
import ambivertImage from "../../assets/ambivert.svg";
import extrovertImage from "../../assets/extrovert.svg";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Accordion, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTest,
  selectQuestions,
  selectScore,
  selectUser,
} from "../../store/inventory-slice";

const Result = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const questions = [...useSelector(selectQuestions)];
  const score = useSelector(selectScore);
  const user = useSelector(selectUser);

  if (score === null) {
    return <Redirect to="/" />;
  }

  let personalityImage;
  let personality;

  if (score <= 130) {
    personalityImage = extrovertImage;

    if (score <= 75) {
      personality = "Extremely";
    } else if (score <= 89) {
      personality = "Grossly";
    } else if (score <= 112) {
      personality = "Moderately";
    } else {
      personality = "Slightly";
    }

    personality += " Extrovert";
  } else if (score <= 171) {
    personalityImage = ambivertImage;
    personality = "Ambivert";
  } else {
    personalityImage = introvertImage;

    if (score <= 185) {
      personality = "Slightly";
    } else if (score <= 199) {
      personality = "Moderately";
    } else if (score <= 228) {
      personality = "Grossly";
    } else {
      personality = "Extremely";
    }

    personality += " Introvert";
  }

  const title = `${user.name}'s personality: ${personality}`;

  const testAgainHandler = () => {
    dispatch(resetTest());
    history.push("/");
  };

  return (
    <Fragment>
      <Helmet>
        <link
          rel="canonical"
          href="https://kiei-personality-assessment.wizamit.com/result"
        />
        <title>KIEI Assessment: Result</title>
        <meta
          name="description"
          content="Result of K.I.E.I (Kundu Introversion, Extroversion Inventory) for the assessment of personality types. Personality test developed by WizAmit."
        />
      </Helmet>

      <div className="result">
        <InvisibleCard title={title}>
          <img
            src={personalityImage}
            alt={personality}
            style={{ maxHeight: "50vh" }}
          />

          <p className="text-muted text-center mt-3">
            K. I. E. I. Score: {score}
          </p>

          <div className="actions text-center">
            <Button onClick={testAgainHandler} variant="outline-primary">
              Test again
            </Button>
          </div>
        </InvisibleCard>

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Show block scores
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className="mt-5">
                  {["a", "b", "c", "d", "e"].map((block) => (
                    <li key={block} className="">
                      <span className="text-muted text-uppercase">
                        Block {block}:
                      </span>{" "}
                      {questions
                        .filter((q) => q.block === block)
                        .reduce((s, q) => {
                          if (q.answer) {
                            // console.log(q);
                            s +=
                              q.scores.findIndex((ans) => ans === q.answer) + 1;
                          }
                          return s;
                        }, 0)}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Show individual question scores
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="mt-5">
                  {questions
                    .sort((q1, q2) => q1.id - q2.id)
                    .map((q) => (
                      <li
                        className={`${q.answer ? "" : "text-muted"}`}
                        key={q.id}
                      >
                        <span className="text-muted text-uppercase">
                          Block {q.block}:
                        </span>{" "}
                        Q{q.id}. {q.answer} (Score:{" "}
                        {q.scores.findIndex((ans) => ans === q.answer) + 1})
                      </li>
                    ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Fragment>
  );
};

export default Result;
