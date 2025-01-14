import React, { useState } from 'react';

export default function TextForm(props) {
 
  const [text, setText] = useState('');

  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

 
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

 
  const handleClearClick = () => {
    setText('');
  };

 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

 
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
  };

 
  const textColor = props.mode === 'dark' ? 'white' : '#0d144e';
  const backgroundColor = props.mode === 'dark' ? 'gray' : 'white';

  return (
    <>
      <div className='container' style={{ color: textColor }}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              fontSize: '18px',
            }}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{ color: textColor }}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}</b> words and
          <b> {text.length}</b> characters.
        </p>
        <p>
          <b>{(0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)).toFixed(2)}</b> Minutes to read.
        </p>

        <h2>Preview:</h2>
        <p>{text.length > 0 ? text : "Enter something in the above text box to preview it here..."}</p>
      </div>
    </>
  );
}
