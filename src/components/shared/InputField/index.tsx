import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.module.scss";

interface InputFieldProps {
  name: string;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: "input" | "textarea";
  placeholder?: string;
  inputValueType?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    name,
    value,
    handleChange,
    label,
    type = "input",
    placeholder = "",
    inputValueType,
    required = false,
  } = props;

  return (
    <div className={styles.input_field_wrapper}>
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        name={name}
        value={value}
        type={inputValueType}
        onChange={handleChange}
        fullWidth
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
