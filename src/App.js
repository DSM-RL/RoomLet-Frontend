import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes, Outlet
} from "react-router-dom";
import Header from "./components/header";
import Mainpage from "./pages/main";
import Loginpage from "./pages/login";
// import Seoul from "./pages/Seoul";
import Signuppage from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} >
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage />} />
          {/* <Route path="/Seoul" element={<Seoul />} /> */}
          <Route path="/signup" element={<Signuppage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;