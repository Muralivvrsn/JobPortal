import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Onboard from "./Onboard";
import "../App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Onboard/>}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
