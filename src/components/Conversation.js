import React from "react";

export default function Conversation({ userMessage, findUser }) {
  return (
    <div className="h-full w-full">
      {userMessage.map((message) => {
        const user = findUser.find((u) => u.id === message.userId);
        const date = message.date.getHours() + ":" + message.date.getMinutes();
        return (
          <div>
            <div>
              {user.name} : <span>{date}</span>
            </div>
            <div>{message.text}</div>
          </div>
        );
      })}
    </div>
  );
}
