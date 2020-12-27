import { useContext } from "react";
import { AdminContext } from "../Store/AdminContext";

const useAdmin = () => {
  const context = useContext(AdminContext);

  return context;
};

export default useAdmin;
