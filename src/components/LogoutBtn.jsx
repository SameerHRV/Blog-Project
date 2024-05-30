import React from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Appwrite serive :: logout :: error", error);
      });
  };
  return <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full">Logout</button>;
};

export default LogoutBtn;
