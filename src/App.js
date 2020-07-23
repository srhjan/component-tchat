import React, { useState } from "react";
import "./tailwind.css";
import Newusers from "./components/Newusers";
import Newmessages from "./components/Newmessages";
import Conversation from "./components/Conversation";
import AvailableUsers from "./components/AvailableUsers";

function App() {
  const [newUser, setNewUser] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  return (
    <div className="flex">
      <AvailableUsers
        usersName={users}
        setUsersName={(user) => setUsers(user)}
        selectUser={selectedUser}
        setSelectUser={(userSelected) => setSelectedUser(userSelected)}
      ></AvailableUsers>
      <div className="w-3/5 h-screen flex flex-col">
        <Conversation userMessage={messages} findUser={users}></Conversation>
        <Newmessages
          onTypedText={newMessage}
          setOnTypedText={(newText) => setNewMessage(newText)}
          sendText={messages}
          setSendText={(sendMessages) => setMessages(sendMessages)}
          selectUser={selectedUser}
        ></Newmessages>
      </div>
      <Newusers
        addUser={newUser}
        setAddUser={(user) => setNewUser(user)}
        usersTchat={users}
        setUsersTchat={(userTchat) => setUsers(userTchat)}
      ></Newusers>
    </div>
  );
}

export default App;
