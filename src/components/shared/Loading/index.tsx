import { StylesProvider } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return <div className={styles.loader}>Loading...</div>;
};

export default Loading;
