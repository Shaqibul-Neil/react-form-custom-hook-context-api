import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Context";

const Aunt = () => {
  const [money, _] = useContext(MoneyContext);
  return (
    <div className="border-2 p-4 border-info w-96 h-80 space-y-4">
      <h3 className="text-lg font-bold">Aunt</h3>
      <div className="grid grid-cols-2 gap-4">
        <Cousin>Tom Tom</Cousin>
        <Cousin>Kom Kom</Cousin>
        <Cousin>
          <p>Chom Chom</p>
          <p>Family Got: {money}</p>
        </Cousin>
        <Cousin>Pom Pom</Cousin>
      </div>
    </div>
  );
};

export default Aunt;
