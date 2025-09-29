import { createContext, useState } from "react";
import GrandPa from "./GrandPa";
import { MoneyContext } from "./Context";

export const AssetContext = createContext("");

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "diamond";
  const newAsset = "gold";
  return (
    <div className="border-8 mt-20 p-4 border-success">
      <h2 className="text-4xl font-bold">Family Tree</h2>
      <h4>Total family Money : {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <GrandPa asset={asset} />
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
