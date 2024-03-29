import type { FC } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import favouritesRepos from "store/favouritesRepos";
import type { RepoStructure } from "types";

import styles from "./Repo.module.css";

const Repo: FC<RepoStructure> = observer(
  ({ id, html_url, name, stargazers_count, forks_count, owner }) => {
    const { avatar_url } = owner;

    const favouriteRepo = {
      id,
      html_url,
      name,
      stargazers_count,
      forks_count,
      owner,
    };

    const handleAddingFavouriteRepo = (repo: RepoStructure) => {
      favouritesRepos.addToFavourites(repo);
    };

    return (
      <div className={styles.repoWrapper}>
        <img className={styles.repoImg} src={avatar_url} alt="avatar" />

        <div className={styles.wrapperStarsAndForks}>
          <div>Stars: {stargazers_count}</div>
          <div>Forks: {forks_count}</div>
        </div>

        <Link
          className={styles.repoLink}
          to={html_url}
          target="_blank"
          onClick={() => handleAddingFavouriteRepo(favouriteRepo)}
        >
          {name}
        </Link>
      </div>
    );
  },
);

export default Repo;
