// import RegisterPage from "./pages/RegisterPage";
import RegisterPage from "./pages/RegisterPage";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import About from "./pages/About";
import Careers from "./pages/Careers";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
