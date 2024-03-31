import type { FC, ReactNode } from "react";

import styles from "./ListRepos.module.css";

type ListReposProps = {
  children: ReactNode;
};

const ListRepos: FC<ListReposProps> = ({ children }) => {
  return <ul className={styles.listRepos}>{children}</ul>;
};

export default ListRepos;
