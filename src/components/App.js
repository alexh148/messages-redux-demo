import React, { useState } from "react";
import WelcomeHeader from "./common/WelcomeHeader";
import AddMessageForm from "./common/AddMessageForm";
import MessagesDisplay from "./common/MessagesDisplay";

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = text => {
    const newMessage = { id: Math.random(), text };
    setMessages([...messages, newMessage]);
  };

  const removeMessage = idToRemove => {
    setMessages(messages.filter(m => m.id !== idToRemove));
  };

  return (
    <div className='App'>
      <WelcomeHeader />
      <AddMessageForm onSubmit={addMessage} />
      <MessagesDisplay messages={messages} onRemoveMessage={removeMessage} />
    </div>
  );
};

export default App;
