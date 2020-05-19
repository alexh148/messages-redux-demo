import { connect } from "react-redux";
import App2 from "./App2";
import { addMessage, removeMessage } from "../redux/messages/actions";

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = {
  addMessage,
  removeMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(App2);
