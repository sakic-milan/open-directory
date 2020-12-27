import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase/firebase.config";
import { observer } from "mobx-react";
import InputField from "../../components/shared/InputField";

import useAdmin from "../../hooks/useAdmin";

const AdminDashboard = () => {
  const ctx = useAdmin();

  document.body.style.display = "";
  return (
    <div>
      Welcome to Admin Dashboard
      {/* redirect after logout */}
      <button onClick={() => ctx.logOut()}>Log out</button>
    </div>
  );
};

export default observer(AdminDashboard);
