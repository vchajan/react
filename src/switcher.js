// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserDetail from "./UserDetail";
import Form from "./form";
import Try from "./try";

function Switcher() {
   return (
      <Router>
         <div>
            <Routes>
               <Route path="/" element={<Form />} exact />
               <Route path="/userdetail" element={<UserDetail />} />
               <Route path="/try" element={<Try />} />
            </Routes>
         </div>
      </Router>
   );
}

export default Switcher;
