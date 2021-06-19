import InventoryContext from "../store/inventory-context";

const Result = (props) => {
  const inventoryCtx = InventoryContext;

  return (
    <div className="result">
      <p className="">Result:</p>
      <ul>
        {inventoryCtx.questions &&
          inventoryCtx.questions.map((q) => <li>{q.answer}</li>)}
      </ul>
    </div>
  );
};

export default Result;
