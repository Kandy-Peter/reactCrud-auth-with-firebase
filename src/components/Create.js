import React, { useState, useContext } from "react";
import firebase from "../utils/firebaseConfig";
import { UidContext } from "./UiContext";

const Create = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const uid = useContext(UidContext);

  const createQuote = () => {
    const quotesDB = firebase.database().ref("databasCrud");
    const quote = {
        uid,
      author,
      text,
    };

    quotesDB.push(quote);

    setAuthor("");
    setText("");
  };

  return (
    <div className="create">
      <h4>Create your quote here</h4>
      <div className="form">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Quote"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={createQuote}>Create</button>
      </div>
    </div>
  );
};

export default Create;