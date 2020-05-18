import React from "react";

const MessagesDisplay = ({ messages, onRemoveMessage }) => {
  return (
    <div>
      {messages.map(m => {
        return (
          <div key={m.id}>
            <p className='Message'>{m.text}</p>
            <button onClick={() => onRemoveMessage(m.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default MessagesDisplay;
