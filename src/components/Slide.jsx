import { Fragment } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import InvisibleCard from "./UI/InvisibleCard";
import QuestionCard from "./QuestionCard";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  inventoryActions,
  selectActiveQuestion,
  selectMaxId,
} from "../store/inventory-slice";

const Slide = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  dispatch(inventoryActions.setActiveQuestion(id));
  const question = useSelector(selectActiveQuestion);
  const maxId = useSelector(selectMaxId);

  const updateAnswer = (answer) => {
    dispatch(inventoryActions.setAnswer({ id: question.id, answer }));
    setTimeout(() => {
      goToNextSlide();
    }, 1000);
  };

  const goToPrevSlide = () => {
    const id = question.id - 1 >= 1 ? question.id - 1 : 1;
    history.push(`/questions/${id}`);
  };

  const goToNextSlide = () => {
    const id = question.id + 1 <= maxId ? question.id + 1 : maxId;
    history.push(`/questions/${id}`);
  };

  const viewResult = () => {
    history.push(`/result`);
  };

  if (!question) {
    return <p>Invalid ID</p>;
  }

  return (
    <Fragment>
      <Helmet>
        <link
          rel="canonical"
          href={`"https://kiei-personality-assessment.wizamit.com/questions/${id}"`}
        />
        <title>KIEI: Question {id}</title>
        <meta
          name="description"
          content="Questions of K.I.E.I (Kundu Introversion, Extroversion Inventory) for the assessment of personality types. Personality test developed by WizAmit."
        />
      </Helmet>

      <InvisibleCard title={question.text}>
        <div
          className="progress"
          style={{
            height: "5px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: ((question.id - 1) / maxId) * 100 + "%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div
          className="actions mt-2 text-center m-auto"
          style={{ maxWidth: "400px" }}
        >
          <QuestionCard
            question={question}
            updateAnswer={updateAnswer}
            questionCount={maxId}
          />

          <ButtonGroup className="mt-4">
            <Button onClick={goToPrevSlide} type="button" variant="primary">
              Previous
            </Button>

            <Button
              disabled
              type="button"
              variant="primary"
              className="d-none d-md-inline-block"
            >
              Question {question.id}
            </Button>

            {question.id === maxId ? (
              <Button
                disabled={!question.answer}
                onClick={viewResult}
                type="button"
                variant="primary"
                className="px-5"
              >
                View Result
              </Button>
            ) : (
              <Button
                disabled={!question.answer}
                onClick={goToNextSlide}
                type="button"
                variant="primary"
                className="px-5"
              >
                Next
              </Button>
            )}
          </ButtonGroup>

          {/* <Button
            onClick={viewResult}
            type="button"
            variant="link"
            className="px-5 mt-3 text-muted btn-sm"
          >
            View Result
          </Button> */}
        </div>
      </InvisibleCard>
    </Fragment>
  );
};

export default Slide;
