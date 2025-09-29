import { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = () => {
  const newAsset = useContext(AssetContext);
  console.log(newAsset);
  return (
    <div className="border p-4 border-error">
      <h3 className="text-md font-bold">Special</h3>
      <p>Asset: {newAsset}</p>
    </div>
  );
};

export default Special;
