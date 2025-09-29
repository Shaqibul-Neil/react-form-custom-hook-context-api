import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div className="border-2 p-4 border-info w-96 h-72 space-y-4">
      <h3 className="text-lg font-bold">Aunt</h3>
      <div className="grid grid-cols-2 gap-4">
        <Cousin>Tom Tom</Cousin>
        <Cousin>Kom Kom</Cousin>
        <Cousin>Chom Chom</Cousin>
        <Cousin>Pom Pom</Cousin>
      </div>
    </div>
  );
};

export default Aunt;
