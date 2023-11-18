import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={HomePage} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
