import React from "react";
import LayoutMain from "./components/layout/LayoutMain/LayoutMain";
import AdminAuth from "./pages/AdminAuth/";
import { AdminStore } from "./Store/AdminStore";

function App() {
  return <AdminAuth adminStore={AdminStore} />;

  // <LayoutMain />
}

export default App;
