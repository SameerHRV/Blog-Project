import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loding, setLoding] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // TODO: make it more easyer
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoding(false);
  }, [authStatus, navigate, authentication]);

  return loding ? <h1>Loading...</h1> : <>{children}</>;
};

export default ProtectedLayout;
