import Dashboard from "./components/Dasboard/Dashboard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
       <Route path="/" index element={ <LoginPage/> } />
       <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/dashboard" element={<Dashboard />}></Route>

        
      </Routes>
    </>
  );
}

export default App;
