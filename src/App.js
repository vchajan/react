import React from "react";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function App() {
   return (
      <UserProvider>
         <div className="App">
            <UserList />
            <UserDetail />
         </div>
      </UserProvider>
   );
}

export default App;
