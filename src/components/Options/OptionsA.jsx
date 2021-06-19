import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Options.scss";

const OptionsA = ({ question, onChange }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(question.answer);
  }, [question]);

  const choose = (value) => {
    value = parseInt(value);
    onChange(value);
    setValue(value);
  };

  return (
    <div className="options d-flex flex-column">
      {question.options.map((option, i) => (
        <Button
          key={i + 1}
          variant={value === i + 1 ? "primary" : "outline-primary"}
          className="mt-2"
          onClick={() => choose(i + 1)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default OptionsA;
