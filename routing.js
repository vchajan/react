import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Result from "./Result";
import Show from "./Show";
function App() {
  return (
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
}

export default App;
