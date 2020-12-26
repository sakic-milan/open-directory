import React, { useState } from "react";
import { observer } from "mobx-react";
import InputField from "../../components/shared/InputField";

import { AdminStoreImpl } from "../../Store/AdminStore";

interface AdminStoreProps {
  adminStore: AdminStoreImpl;
}

const AdminAuth: React.FC<AdminStoreProps> = ({ adminStore }) => {
  console.log("BAZA", JSON.stringify(adminStore));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <InputField
        value={email}
        handleChange={(e: any) => setEmail(e.target.value)}
      />
      <InputField
        value={password}
        handleChange={(e: any) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          console.log(email, password);
          adminStore.login();
        }}
      >
        Login
      </button>
    </>
  );
};

export default observer(AdminAuth);
