import { useState } from "react";

import InputField from "./components/InputField";
import ResultDisplay from "./components/resultDisplay/ResultDisplay";

import "./App.css";

function App() {
  const [enterState, setEnterState] = useState(true);

  const [textContent, setTextContent] = useState("");

  function changeState(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    if (formJson.textInput) setTextContent(formJson.textInput);
    else setTextContent("");

    setEnterState(false);
  }

  return (
    <div className="p-main">
      {enterState && <InputField handleState={changeState}></InputField>}
      {!enterState && <ResultDisplay textContent={textContent}></ResultDisplay>}
    </div>
  );
}

export default App;
