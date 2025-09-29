import Special from "./Special";
import { AssetContext } from "./FamilyTree";
import { useContext } from "react";
import Friend from "./Friend";

const Cousin = ({ children }) => {
  const newAsset = useContext(AssetContext);
  return (
    <div className="border p-4 border-warning text-center">
      <h3 className="text-md font-bold">{children}</h3>
      {children === "Pan Pan" && <Special>{newAsset}</Special>}

      {children === "Pom Pom" && <Friend />}
    </div>
  );
};

export default Cousin;
