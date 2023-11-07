import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const upperhandler = () => {
    setText(text.toUpperCase());
    props.showcostumMsg("Text Converted to Uppercase!", "success");
  };
  const lowerhandler = () => {
    setText(text.toLowerCase());
    props.showcostumMsg("Text Converted to Lowercase!", "success");
  };

  const wordsCount = (text) => {
    const trimmedText = text.trim(); 
    if (trimmedText === "") {
      return "0 Words";
    } else {
      const wordArray = trimmedText.split(/\s+/);
      return wordArray.length + " Words";
    }
  };
  
  

  const readTime = (text) => {
    if (text.trim() === "") {
      return "0 seconds";
    } else {
      const seconds = 0.342857 * text.trim().split(/\s+/).length;
      if (seconds >= 59) {
        const minutes = (seconds / 60).toFixed(2);
        return `${minutes} minutes`;
      } else {
        return `${seconds.toFixed(2)} seconds`;
      }
    }
  };

  const countUniqueWords = (text) => {
    const words = text.split(" ").filter((word) => word.trim() !== "");
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  const copyText = () => {
    let textArea = document.getElementById("textArea");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showcostumMsg("Text Copied!", "success");
  };

  const clearText = () => {
    setText("");
    props.showcostumMsg("Text Cleared!", "success");
  };

  const removeExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showcostumMsg("Removed Extra Spaces!", "success");
  };

  const speechText = () => {
    const message = new SpeechSynthesisUtterance(text);
    message.lang = 'hi-IN'; 
    window.speechSynthesis.speak(message);
  };
  

  const onCHangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div >
      <div className="mb-3 container" >
        <h1 className="form-label">{props.heading}</h1>
        <textarea
          className="form-control"
          id="textArea"
          rows="5"
          value={text}
          onChange={onCHangeHandler}
         
        ></textarea>
        <div className="my-2 d-flex justify-content-between">
        <button disabled={text.replace(/\s/g, '').length===0} className="btn btn-primary" onClick={upperhandler}>
          Convert to uppercase
        </button>
        <button disabled={text.replace(/\s/g, '').length===0} className="btn btn-primary" onClick={lowerhandler}>
          Convert to lowerCase
        </button>
        <button disabled={text.replace(/\s/g, '').length===0} className="btn btn-primary" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.replace(/\s/g, '').length===0} className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
        <button disabled={text.replace(/\s/g, '').length===0} className="btn btn-primary" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.replace(/\s/g, '').length===0} className="btn btn-primary" onClick={speechText}>
          Speech your text
        </button>
        </div>
      </div>
      <div className="mb-3 container">
        <h1>Your Text Suumery here!</h1>
        <p>
          {wordsCount(text)} and {text.replace(/\s/g, '').length} characters
        </p>
        <p>{readTime(text)} takes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <h2>Other Functionality</h2>
        <p>Unique Words: {countUniqueWords(text)}</p>
      </div>
    </div>
  );
}
