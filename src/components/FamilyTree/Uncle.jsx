import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div className="border-2 p-4 border-info w-96 h-72 space-y-4">
      <h3 className="text-lg font-bold">Uncle</h3>
      <div className="grid grid-cols-2 gap-4">
        <Cousin />
        <Cousin />
      </div>
    </div>
  );
};

export default Uncle;
