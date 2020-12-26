import React from "react";

interface Props {
  value: any;
  handleChange: any;
}

const InputField: React.FC<Props> = (props) => {
  const { value, handleChange } = props;

  return <input value={value} onChange={handleChange} />;
};

export default InputField;
