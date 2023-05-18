import "./app.css";
import Login from "./login";
import Home from "./home";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Forgetpass from "./Forgetpass";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forgetpass />} />
      </Routes>
    </div>
  );
}

export default App;
