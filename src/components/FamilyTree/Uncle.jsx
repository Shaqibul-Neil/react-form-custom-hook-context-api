import { useContext } from "react";
import Cousin from "./Cousin";
import { AssetContext } from "./FamilyTree";

const Uncle = () => {
  const newAsset = useContext(AssetContext);
  return (
    <div className="border-2 p-4 border-info w-96 h-72 space-y-4">
      <h3 className="text-lg font-bold">Uncle</h3>
      <div className="grid grid-cols-2 gap-4">
        <Cousin>
          <p>Pan Pan</p>
          <p>Asset: {newAsset}</p>
        </Cousin>
        <Cousin>Tan Tan</Cousin>
      </div>
    </div>
  );
};

export default Uncle;
