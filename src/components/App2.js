import React from "react";
import WelcomeHeader from "./common/WelcomeHeader";
import AddMessageForm from "./common/AddMessageForm";
import MessagesDisplay from "./common/MessagesDisplay";

const App2 = ({ messages, addMessage, removeMessage }) => {
  return (
    <div className='App'>
      <WelcomeHeader />
      <AddMessageForm onSubmit={addMessage} />
      <MessagesDisplay messages={messages} onRemoveMessage={removeMessage} />
    </div>
  );
};

export default App2;
