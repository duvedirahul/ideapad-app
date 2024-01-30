import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import Navbar from "./Navbar";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<RequireAuth> <NotesPage /></RequireAuth> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
