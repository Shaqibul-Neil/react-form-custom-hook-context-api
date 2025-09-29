import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const GrandPa = ({ asset }) => {
  return (
    <div className="border-4 mt-20 p-4 border-secondary space-y-4">
      <h3 className="text-2xl font-bold">GrandPa</h3>
      <section className="space-y-4 grid grid-cols-3 gap-4">
        <Dad asset={asset} />
        <Uncle />
        <Aunt />
      </section>
    </div>
  );
};

export default GrandPa;
