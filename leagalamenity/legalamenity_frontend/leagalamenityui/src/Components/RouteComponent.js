import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Login from "./Login";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Error from "./Error_Component/ErrorPage";
import Signup from "./container/SignupContainer";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}
export default Content;
