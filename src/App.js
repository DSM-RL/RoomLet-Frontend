import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes, Outlet
} from "react-router-dom";
import Header from "./components/header";
import Loginpage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} >
          <Route path="/login" element={<Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;