import Special from "./Special";

const Myself = ({ asset }) => {
  return (
    <div className="border p-4 border-warning space-y-4">
      <h3 className="text-md font-bold">MySelf</h3>
      <Special asset={asset} />
    </div>
  );
};

export default Myself;
