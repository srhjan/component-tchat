import React from "react";

export default function AvailableUsers({
  usersName,
  setUsersName,
  selectUser,
  setSelectUser,
}) {
  return (
    <div className=" bg-blue-100 w-1/5">
      <div className="text-center font-bold mb-5">
        Utilisateurs disponibles :
      </div>
      <div className="ml-2">
        {usersName.map((user, i) => {
          return (
            <div>
              <span
                className={
                  selectUser === user.id
                    ? "text-green-400 text-lg"
                    : "text-black text-lg"
                }
              >
                {user.name}
              </span>
              <button
                className="mt-2 ml-2 bg-gray-400 font-semibold"
                style={{ width: 100 }}
                onClick={() => {
                  setUsersName([
                    ...usersName.slice(0, i),
                    ...usersName.slice(i + 1),
                  ]);
                }}
              >
                Supprimer
              </button>
              <button
                className="mt-2 ml-2 bg-gray-400 font-semibold"
                style={{ width: 110 }}
                onClick={() => {
                  setSelectUser(user.id);
                }}
              >
                Sélectionner
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
