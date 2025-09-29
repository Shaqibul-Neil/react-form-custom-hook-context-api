import { useContext } from "react";
import { MoneyContext } from "./Context";

const Sister = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border p-4 border-warning">
      <h3 className="text-md font-bold">Sister</h3>
      <button
        className="btn btn-warning"
        onClick={() => setMoney(money + 5000)}
      >
        Add 5000 tk
      </button>
    </div>
  );
};

export default Sister;
