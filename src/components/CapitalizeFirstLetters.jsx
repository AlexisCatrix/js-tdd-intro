import { useState, useEffect } from "react";
import "./capitalizeFirstLetters.css";

export default function CapitalizeFirstLetter() {
  const [stringEntry, setStringEntry] = useState("");
  const [stringOutput, setStringOutput] = useState("");

  useEffect(() => {
    if (stringEntry === "") {
      setStringOutput("");
    }
  }, [stringEntry]);

  const handleChange = (e) => {
    setStringEntry(e.target.value);
  };

  const submitString = (e) => {
    e.preventDefault();
    capitalizeFirst();
  };

  const capitalizeFirst = () => {
    let stringEntrySplit = stringEntry.split(" ");
    for (let i = 0; i < stringEntrySplit.length; i++) {
      stringEntrySplit[i] =
        stringEntrySplit[i].charAt(0).toUpperCase() +
        stringEntrySplit[i].substring(1);
    }

    setStringOutput(stringEntrySplit.join(" "));
  };

  return (
    <div id="mainContainer">
      <form onSubmit={submitString}>
        <label id="label">Enter your string without capitalization</label>
        <input
          type="text"
          name="stringWithoutCapitalization"
          value={stringEntry}
          onChange={handleChange}
        />
        <input type="submit" value="Valider" />
      </form>
      <div id="stringOutput">
        {" "}
        <p>Here is the transformed chain : {stringOutput} </p>
      </div>
    </div>
  );
}
