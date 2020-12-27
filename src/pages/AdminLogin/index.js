import React, { useState, useEffect } from "react";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { observer } from "mobx-react";
import InputField from "../../components/shared/InputField";

import useAdmin from "../../hooks/useAdmin";

import styles from "./styles.module.scss";
import Button from "../../components/shared/Button";

const AdminLogin = () => {
  const ctx = useAdmin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    ctx.login(email, password);
  };

  return (
    <main className={styles.login_container}>
      <div className={styles.login_form_wrapper}>
        <div className={styles.login_logo}>Open Directory Login</div>
        <InputField
          name="email"
          label="Email"
          inputValueType="email"
          required
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name="password"
          label="Password"
          inputValueType="password"
          required
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text="Login"
          onClick={handleLogin}
          endIcon={<VpnKeyOutlinedIcon />}
        />
      </div>
    </main>
  );
};

export default observer(AdminLogin);
