import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes, Outlet
} from "react-router-dom";
import Header from "./components/header";
import Mainpage from "./pages/login";
import Loginpage from "./pages/login";
<<<<<<< Updated upstream
import Seoul from "./pages/Seoul";
=======
import Signuppage from "./pages/login";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} >
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage />} />
<<<<<<< Updated upstream
          <Route path="/Seoul" element={<Seoul />} />
=======
          <Route path="/signup" element={<Signuppage />} />
>>>>>>> Stashed changes
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;