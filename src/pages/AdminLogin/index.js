import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase/firebase.config";
import { observer } from "mobx-react";
import InputField from "../../components/shared/InputField";

import useAdmin from "../../hooks/useAdmin";

const AdminLogin = () => {
  const ctx = useAdmin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <InputField
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          ctx.login(email, password);
        }}
      >
        Login
      </button>
    </>
  );
};

export default observer(AdminLogin);
