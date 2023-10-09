import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";
import Result from "./Result";
import Show from "./Show";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/about" component={Result} />
          <Route path="/contact" component={Show} />
        </Routes>
      </BrowserRouter>
   </React.StrictMode>
  );
);
reportWebVitals();
