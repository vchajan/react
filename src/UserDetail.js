import React, { useState, useContext, useRef } from "react";
import { UserContext } from "./UserContext";

const UserDetail = () => {
   const { selectedUser, setSelectedUser } = useContext(UserContext);
   const [status, setStatus] = useState("");
   const nameInputRef = useRef();

   const saveDetails = async () => {
      if (!selectedUser) return;

      // Simulating a save action with a HTTP PATCH request
      setStatus("Saving...");
      const updatedUser = {
         ...selectedUser,
         name: nameInputRef.current.value,
      };

      try {
         // Since we're using a placeholder API that doesn't support actual updates,
         // this is just a simulation. Replace the URL with your actual API's URL.
         const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${selectedUser.id}`,
            {
               method: "PATCH", // The method could also be 'PUT' depending on your API.
               headers: {
                  "Content-type": "application/json; charset=UTF-8", // Indicates the content
               },
               body: JSON.stringify(updatedUser),
            }
         );

         if (!response.ok) {
            throw new Error("Could not save the data.");
         }

         // We update the selected user in our context after a successful 'save'.
         setSelectedUser(updatedUser);
         setStatus("Saved successfully!");
      } catch (error) {
         setStatus("Failed to save!");
      }
   };

   if (!selectedUser) return <div>No user selected</div>;

   return (
      <div>
         <h2>User Details</h2>
         <p>Name: {selectedUser.name}</p>
         <p>Email: {selectedUser.email}</p>
         {/* Form for editing details */}
         <div>
            <input
               defaultValue={selectedUser.name}
               ref={nameInputRef}
               type="text"
            />
            <button onClick={saveDetails}>Save</button>
         </div>
         {/* Display status */}
         {status && <p>{status}</p>}
      </div>
   );
};

export default UserDetail;
