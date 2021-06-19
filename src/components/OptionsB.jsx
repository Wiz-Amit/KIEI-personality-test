import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Options.scss";

const OptionsB = (props) => {
  const [value, setValue] = useState(props.value);

  const choose = (value) => {
    value = parseInt(value);
    props.onChange(value);
    setValue(value);
  };

  return (
    <div className="options">
      <ul className="feedback-reactions justify-content-center my-4">
        <li
          onClick={() => choose(2)}
          className={`angry ${value === 2 ? "active" : ""}`}
        >
          <OverlayTrigger
            overlay={
              <Tooltip id="how-to-choose-answer">
                Dislike to a great extent
              </Tooltip>
            }
          >
            <div>
              <svg className="eye left">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="eye right">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="mouth">
                <use xlinkHref="#mouth" />
              </svg>
            </div>
          </OverlayTrigger>
        </li>

        <li
          onClick={() => choose(4)}
          className={`sad ${value === 4 ? "active" : ""}`}
        >
          <OverlayTrigger
            overlay={
              <Tooltip id="how-to-choose-answer">
                Dislike to some extent
              </Tooltip>
            }
          >
            <div>
              <svg className="eye left">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="eye right">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="mouth">
                <use xlinkHref="#mouth" />
              </svg>
            </div>
          </OverlayTrigger>
        </li>

        <li
          onClick={() => choose(5)}
          className={`ok ${value === 5 ? "active" : ""}`}
        >
          <OverlayTrigger
            overlay={<Tooltip id="how-to-choose-answer">Indifferent</Tooltip>}
          >
            <div></div>
          </OverlayTrigger>
        </li>

        <li
          onClick={() => choose(3)}
          className={`good ${value === 3 ? "active" : ""}`}
        >
          <OverlayTrigger
            overlay={
              <Tooltip id="how-to-choose-answer">Like to some extent</Tooltip>
            }
          >
            <div>
              <svg className="eye left">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="eye right">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="mouth">
                <use xlinkHref="#mouth" />
              </svg>
            </div>
          </OverlayTrigger>
        </li>

        <li
          onClick={() => choose(1)}
          className={`happy ${value === 1 ? "active" : ""}`}
        >
          <OverlayTrigger
            overlay={
              <Tooltip id="how-to-choose-answer">
                Like to a great extent
              </Tooltip>
            }
          >
            <div>
              <svg className="eye left">
                <use xlinkHref="#eye" />
              </svg>
              <svg className="eye right">
                <use xlinkHref="#eye" />
              </svg>
            </div>
          </OverlayTrigger>
        </li>
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
          <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 7"
          id="mouth"
        >
          <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
        </symbol>
      </svg>
    </div>
  );
};

export default OptionsB;
