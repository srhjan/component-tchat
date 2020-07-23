import React from "react";

export default function Newusers({
  addUser,
  setAddUser,
  usersTchat,
  setUsersTchat,
}) {
  return (
    <div className=" bg-blue-100 w-1/5">
      <div className="text-center font-bold">Ajouter des utilisateurs :</div>
      <div className="mt-10 ml-2">Nom :</div>
      <input
        className="mt-1 ml-2"
        value={addUser}
        style={{ width: 250 }}
        onChange={(e) => {
          setAddUser(e.target.value);
        }}
      />
      <button
        className="mt-2 ml-2 bg-gray-400 font-semibold"
        style={{ width: 250 }}
        onClick={() => {
          if (addUser === "") {
            alert("Veuillez remplir le champs Nom");
          } else {
            setUsersTchat([
              ...usersTchat,
              {
                id: +new Date(),
                name: addUser,
              },
            ]);
            setAddUser("");
          }
        }}
      >
        Ajouter un utilisateur
      </button>
    </div>
  );
}
