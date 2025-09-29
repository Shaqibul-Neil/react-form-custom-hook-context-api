import { useState } from "react";

const useCustomInputHook = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, handleInputOnChange];
};

export default useCustomInputHook;
