import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`https://vercel.com/akshay-us-projects/course`}
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path={`https://vercel.com/akshay-us-projects/signup`} element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
