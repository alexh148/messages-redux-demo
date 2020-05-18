import React, { useState } from "react";

const AddMessageForm = ({ onSubmit }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(newMessage);
    setNewMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder="Type a message here"
      />
      <button>Add message</button>
    </form>
  );
};

export default AddMessageForm;
