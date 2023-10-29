import React from "react";
<<<<<<< HEAD
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register"
// import Messenger from "./pages/messenger/Messenger";
import Profile from "./pages/profile/Profile"
=======
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";

import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

>>>>>>> 30058112acea020824711c5268ca14cc331a7580
function App() {
  const { user } = useContext(AuthContext);
  return (
<<<<<<< HEAD
    <>
    {/* <Home /> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Messenger/> */}
    <Profile/>
    </>
  )
=======
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" replace/> : <Login />} />
        <Route path="/register" element= {user ? <Navigate to="/" replace/> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
>>>>>>> 30058112acea020824711c5268ca14cc331a7580
}

export default App;
