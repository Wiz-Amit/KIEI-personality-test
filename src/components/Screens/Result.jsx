import { useContext } from "react";
import InventoryContext from "../../store/inventory-context";
import InvisibleCard from "../UI/InvisibleCard";
import introvertImage from "../../assets/introvert.svg";
import ambivertImage from "../../assets/ambivert.svg";
import extrovertImage from "../../assets/extrovert.svg";
import { Redirect } from "react-router-dom";

const Result = (props) => {
  const inventoryCtx = useContext(InventoryContext);
  const score = inventoryCtx.getScore();

  if (!score) {
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

    personality += " Extrovert";
  }

  const title = `${inventoryCtx.user.name}'s personality: ${personality}`;

  return (
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
      </InvisibleCard>

      {/* <ul>
        {inventoryCtx.questions.map((q) => (
          <li key={q.id}>
            {q.id}: {q.answer}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Result;
