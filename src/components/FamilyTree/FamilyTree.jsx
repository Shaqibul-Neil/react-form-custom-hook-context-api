import GrandPa from "./GrandPa";

const FamilyTree = () => {
  const asset = "diamond";
  return (
    <div className="border-8 mt-20 p-4 border-success">
      <h2 className="text-4xl font-bold">Family Tree</h2>
      <GrandPa asset={asset} />
    </div>
  );
};

export default FamilyTree;
