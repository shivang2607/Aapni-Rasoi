import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/dist/client/router";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [router, currentUser]);
  return <>{currentUser ? children : null}</>;
};

export default ProtectedRoute;
