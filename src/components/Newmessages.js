import React from "react";

export default function Newmessages({
  onTypedText,
  setOnTypedText,
  sendText,
  setSendText,
  selectUser,
}) {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <input
          className="h-full w-full bg-gray-200"
          value={onTypedText}
          onChange={(e) => {
            setOnTypedText(e.target.value);
          }}
        />
      </div>
      <div className="bg-blue-200">
        <button
          className="mx-6 my-2"
          onClick={() => {
            if (onTypedText === "") {
              alert("Vous n'avez rien écrit !");
            } else {
              setSendText([
                ...sendText,
                {
                  text: onTypedText,
                  userId: selectUser,
                  date: new Date(),
                },
              ]);
              setOnTypedText("");
            }
          }}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
