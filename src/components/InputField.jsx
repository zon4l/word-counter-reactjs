import { useState } from "react";

const InputField = (props) => {
  const [buttonState, setButtonState] = useState(true);

  const handleChange = () => {
    if (event.target.value.trim() != "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  };

  return (
    <>
      <div className="d-flex justify-center">
        <h1 className="font-42 text-center">
          Paste your text or simply upload the file
        </h1>
      </div>
      <form onSubmit={props.handleState} className="mt-30">
        <textarea
          name="textInput"
          id="textInput"
          cols="30"
          rows="7"
          placeholder="Paste your text here"
          className="font-16"
          onChange={handleChange}
        >
          {/* <input type="file" name="input-file" id="file-input" /> */}
        </textarea>
        <div className="d-flex justify-center mt-28">
          <button type="submit" className="count-btn" disabled={buttonState}>
            Count
          </button>
        </div>
      </form>
    </>
  );
};

export default InputField;
