import type { FC } from "react";
import { useState, useEffect } from "react";
import copy from "clipboard-copy";

import styles from "./ClipBoardButton.module.css";

type ClipBoardButtonProps = {
  text: string;
};

const ClipBoardButton: FC<ClipBoardButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copy(text);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <button className={styles.clipBoardButton} onClick={handleCopy}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
};

export default ClipBoardButton;
