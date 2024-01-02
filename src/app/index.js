import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Main from "./main";
import Plan from "./plan"
import PageTrasitionWrapper from "../components/page-transition";
const App = () => {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<PageTrasitionWrapper><Main/></PageTrasitionWrapper>}></Route>
            <Route path="/plan" element={<PageTrasitionWrapper><Plan/></PageTrasitionWrapper>}></Route>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login  />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/post/:id" element={<Post/>} />
            <Route path="/modify-post/:id" element={<ModifyPost/> } /> */}
          </Routes>
        </Router>
      </>
    );
  };
  
  export default App;