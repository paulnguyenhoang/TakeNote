import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import  SignUp from "./Page/Sign_Up/SignUp.jsx";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
