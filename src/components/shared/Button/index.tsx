import React, { FC, ReactNode } from "react";
import ButtonUI from "@material-ui/core/Button";

import styles from "./styles.module.scss";

type ButtonProps = {
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  const { text, onClick, startIcon, endIcon, ...rest } = props;
  return (
    <div className={styles.button_wrapper}>
      <ButtonUI
        onClick={onClick}
        variant="contained"
        disableRipple
        endIcon={endIcon}
        startIcon={startIcon}
      >
        {text}
      </ButtonUI>
    </div>
  );
};

export default Button;
