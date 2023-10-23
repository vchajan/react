import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserList = () => {
   const { users, setSelectedUser, error } = useContext(UserContext);

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <div>
         <h2>User List</h2>
         {users.map((user) => (
            <div key={user.id} onClick={() => setSelectedUser(user)}>
               {user.name} - {user.email}{" "}
               {/* Changed 'activity' to 'email' based on the API data structure */}
            </div>
         ))}
      </div>
   );
};

export default UserList;
