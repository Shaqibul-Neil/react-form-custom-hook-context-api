import { use } from "react";
import { MoneyContext } from "./Context";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div className="border p-4 border-error">
      <h3 className="text-md font-bold">Friend</h3>
      <button className="btn btn-error" onClick={() => setMoney(money - 500)}>
        Remove 500 Tk
      </button>
    </div>
  );
};

export default Friend;
