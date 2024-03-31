import type { FC, ReactNode } from "react";

import styles from "./AppContainer.module.css";

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AppContainer;
