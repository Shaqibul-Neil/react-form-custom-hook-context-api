import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div className="border-2 p-4 border-info w-96 h-72 space-y-4">
      <h3 className="text-lg font-bold">Dad</h3>
      <div className="grid grid-cols-2 gap-4">
        <Myself />
        <Brother />
        <Sister />
      </div>
    </div>
  );
};

export default Dad;
