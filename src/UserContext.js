import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [users, setUsers] = useState([]);
   const [selectedUser, setSelectedUser] = useState(null);
   const [error, setError] = useState(null);

   // Function to fetch user data from an API
   const fetchUsers = async () => {
      try {
         let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
         );
         let data = await response.json();
         setUsers(data);
      } catch (error) {
         setError("Failed to fetch users");
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
