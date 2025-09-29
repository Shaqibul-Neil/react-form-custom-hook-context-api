import "./App.css";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import ControlledField from "./components/Form/ControlledField";
import CustomHookForm from "./components/Form/CustomHookForm";
import Form from "./components/Form/Form";
import FormAction from "./components/Form/FormAction";
import FormRef from "./components/Form/FormRef";
import HookForm from "./components/Form/HookForm";
import UncontrolledField from "./components/Form/UncontrolledField";
import ProductManagement from "./components/ProductManagement/ProductManagement";

function App() {
  return (
    <>
      {/* <div>
        <Form />
      </div>
      <div>
        <FormAction />
      </div>
      <div>
        <ControlledField />
      </div>
      <div>
        <UncontrolledField />
      </div>
      <div>
        <HookForm />
      </div>
      <div>
        <FormRef />
      </div>
      <div>
        <CustomHookForm />
      </div> */}
      <div className="mx-auto">
        <ProductManagement />
      </div>
      <div className="mx-auto">
        <FamilyTree />
      </div>
    </>
  );
}

export default App;
