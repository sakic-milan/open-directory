import ColumnGroup from "antd/lib/table/ColumnGroup";
import firebaseApp from "./firebase.config";

export const login = (email, password) => {
  console.log("login invoked");
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("SUCCESS");
      console.log("USER", JSON.stringify(user));
      return user;
    })
    .catch((error) => {
      return null;
      console.log("FAIL");
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};
