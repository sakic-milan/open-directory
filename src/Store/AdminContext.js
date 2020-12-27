import React, { createContext } from "react";
import { adminStore } from "../Store/AdminStore";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  return (
    <AdminContext.Provider value={adminStore}>{children}</AdminContext.Provider>
  );
}
