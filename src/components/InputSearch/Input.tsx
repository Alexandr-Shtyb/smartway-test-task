import type { FC, Dispatch, SetStateAction } from "react";

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleOnChange: Dispatch<SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ value, handleOnChange, ...props }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.currentTarget.value);
  };

  return (
    <input
      {...props}
      className={styles.input}
      value={value}
      onChange={handleInput}
    />
  );
};

export default Input;
