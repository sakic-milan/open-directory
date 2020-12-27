import React, { useEffect } from "react";
import { auth } from "../../Firebase/firebase.config";
import { observer } from "mobx-react";
import AdminDashboard from "../AdminDashboard";
import AdminLogin from "../AdminLogin";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../components/shared/Loading";

const AdminAuth: React.FC = () => {
  const ctx = useAdmin();

  useEffect(() => {
    ctx.setIsLoading(true);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        ctx.isAuth = true;
        ctx.setUser(user);
      } else {
        ctx.isAuth = false;
        ctx.setUser(null);
      }
    });
    ctx.setIsLoading(false);
    return unsubscribe;
  }, []);

  if (ctx.isLoading) {
    return <Loading />;
  }

  return (
    <>{!ctx.isAuth && !ctx.isLoading ? <AdminLogin /> : <AdminDashboard />}</>
  );
};

export default observer(AdminAuth);
