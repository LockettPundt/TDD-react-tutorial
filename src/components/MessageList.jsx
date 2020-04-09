/* eslint-disable react/no-array-index-key */
import React from 'react';


const MessageList = ({ data }) => (
  <div>
    <ul>
      {data.map((message, index) => <li key={`message-${index}`}>{message}</li>)}
    </ul>
  </div>
);


export default MessageList;
