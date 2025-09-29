import { use } from "react";
import { MoneyContext } from "./Context";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div className="border p-4 border-warning">
      <h3 className="text-md font-bold">Brother</h3>
      <button
        className="btn btn-warning"
        onClick={() => setMoney(money + 1000)}
      >
        Add 1000 tk
      </button>
    </div>
  );
};

export default Brother;
