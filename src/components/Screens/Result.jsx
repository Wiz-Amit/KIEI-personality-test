import { useContext } from "react";
import InventoryContext from "../../store/inventory-context";
import InvisibleCard from "../UI/InvisibleCard";
import introvertImage from "../../assets/introvert.svg";
import extrovertImage from "../../assets/extrovert.svg";

const Result = (props) => {
  const inventoryCtx = useContext(InventoryContext);
  const personality = "Extrovert";
  const personalityImage = extrovertImage;
  const title = `${inventoryCtx.user.name}'s personality: ${personality}`;

  return (
    <div className="result">
      <InvisibleCard title={title}>
        <img
          src={personalityImage}
          alt={personality}
          style={{ maxHeight: "50vh" }}
        />
      </InvisibleCard>

      <ul>
        {inventoryCtx.questions.map((q) => (
          <li key={q.id}>
            {q.id}: {q.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
