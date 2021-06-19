import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import Options from "./Options";
import { Fragment } from "react";

const QuestionCard = ({ question, updateAnswer }) => {
  if (!question) return <p>Invalid ID</p>;

  return (
    <Fragment>
      <OverlayTrigger
        overlay={<Tooltip id="how-to-choose-answer">info.</Tooltip>}
      >
        <p className="text-muted">
          <span>Choose answer </span>
          <Badge className="badge-info badge-pill text-white">?</Badge>
        </p>
      </OverlayTrigger>

      <Options question={question} onChange={updateAnswer} />
    </Fragment>
  );
};

export default QuestionCard;
