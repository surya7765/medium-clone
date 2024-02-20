import Register from "./auth/register/Register";
import Home from "./components/home/Home";
import Login from "./auth/login/Login";
import { useNavigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {Cookies.get("Authenticated") ? (
          navigate('/')
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
