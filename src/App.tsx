import React from "react";
import AdminAuth from "./pages/AdminAuth/";
import { AdminProvider } from "./Store/AdminContext";

function App() {
  return (
    <AdminProvider>
      <AdminAuth />
    </AdminProvider>
  );

  // <LayoutMain />
}

export default App;
