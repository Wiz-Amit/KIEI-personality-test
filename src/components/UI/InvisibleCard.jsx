import { Card } from "react-bootstrap";

const InvisibleCard = (props) => {
  return (
    <Card
      className="my-2 my-md-3 p-4 card-invisible border-0 overflow-hidden w-100"
      style={{ borderRadius: "0.8rem", position: "relative" }}
    >
      <Card.Header
        className="text-center border-0 bg-white"
        style={{ fontSize: "calc(10px + 3vmin)" }}
      >
        <h1 style={{ fontSize: "inherit" }}>{props.title || props.header}</h1>
      </Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};

export default InvisibleCard;
