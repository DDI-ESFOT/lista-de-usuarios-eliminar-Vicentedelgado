/**
 * Created by chalosalvador on 4/2/21
 */
import { useState } from "react";

function formatName(user) {
  return `${user.name} ${user.lastname}`;
}

const UserList = ({ users }) => {
  const [usersList, setUsersList] = useState(users);

  const handleAddUser = (event) => {
    // console.log("event", event);
    console.log("Añadir");
    const newName = document.querySelector("#name").value;
    const newLastname = document.querySelector("#lastname").value;
    const newUser = {
      name: newName,
      lastname: newLastname,
    };
    console.log("newUser", newUser);

    setUsersList((prevUsersList) => {
      // Spread operator
      return [...prevUsersList, newUser];
    });

    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
  };

  const handDeleteUser = (index) => {
      console.log("eventEliminar",index);
      setUsersList((prevState) =>{
          return prevState.filter( (user,i) => i !== index);
     });

  };

  return (
    <>
      <h1>Lista de usuarios ({usersList.length} usuarios)</h1>
      <input type="text" id="name" placeholder="Ingrese un nombre" />
      <input type="text" id="lastname" placeholder="Ingrese un apellido" />
      <button onClick={handleAddUser}>Añadir</button>
        {usersList.map( (user, index) => {
            return <button key={index} onClick={() => handDeleteUser(index)}>Eliminar el último usuario</button>;
        })}
      <ul>
        {usersList.map((user, index) => {
          return <li key={Math.random()}>{formatName(user)}</li>;
        })}
      </ul>
    </>
  );
};

export default UserList;
