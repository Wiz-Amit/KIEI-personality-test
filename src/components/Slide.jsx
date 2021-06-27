import { useContext, Fragment } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import InventoryContext from "../store/inventory-context";
import InvisibleCard from "./UI/InvisibleCard";
import QuestionCard from "./QuestionCard";
import { Helmet } from "react-helmet";

const Slide = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const inventoryCtx = useContext(InventoryContext);
  const question = inventoryCtx.getQuestion(+id);
  console.log({ questions: inventoryCtx.questions, question, id });

  const updateAnswer = (answer) => {
    inventoryCtx.setAnswer(question.id, answer);
  };

  const goToPrevSlide = () => {
    const id = question.id - 1 >= 1 ? question.id - 1 : 1;
    history.push(`/questions/${id}`);
  };

  const goToNextSlide = () => {
    const id =
      question.id + 1 <= inventoryCtx.getMaxId()
        ? question.id + 1
        : inventoryCtx.getMaxId();
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
          className="actions mt-2 text-center m-auto"
          style={{ maxWidth: "400px" }}
        >
          <QuestionCard
            question={question}
            updateAnswer={updateAnswer}
            questionCount={inventoryCtx.getMaxId()}
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

            {question.id === inventoryCtx.getMaxId() ? (
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

          <Button
            onClick={viewResult}
            type="button"
            variant="link"
            className="px-5 mt-3 text-muted btn-sm"
          >
            View Result
          </Button>
        </div>
      </InvisibleCard>
    </Fragment>
  );
};

export default Slide;
