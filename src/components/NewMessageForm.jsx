/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        data-testid="messageText"
        onChange={handleTextChange}
      />
      <button
        data-testid="sendButton"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};


export default NewMessageForm;
