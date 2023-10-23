import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [users, setUsers] = useState([]);
   const [selectedUser, setSelectedUser] = useState(null);
   const [error, setError] = useState(null);

   // Funkcia na načítanie údajov o užívateľoch z API
   const fetchUsers = async () => {
      try {
         let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
         );
         let data = await response.json();
         setUsers(data);
      } catch (error) {
         setError("Načítanie užívateľov zlyhalo");
      }
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   return (
      <UserContext.Provider
         value={{ users, selectedUser, setSelectedUser, error }}
      >
         {children}
      </UserContext.Provider>
   );
};
