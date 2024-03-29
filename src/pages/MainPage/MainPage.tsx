import { useState, useEffect } from "react";
import AppContainer from "layout/AppContainer/AppContainer";
import Input from "components/InputSearch/Input";
import ListRepos from "components/ListRepos/ListRepos";
import Repo from "components/Repo/Repo";
import { useThrottle } from "hooks";
import { RepoStructure } from "types";
import ClipBoardButton from "components/ClipBoardButton/ClipBoardButton";
import { observer } from "mobx-react-lite";
import favouritesRepos from "store/favouritesRepos";
import Spinner from "components/Spinner/Spinner";
import { fetchRepos } from "helpers/fetchRepos";

import styles from "pages/MainPage/MainPage.module.css";

const MainPage = observer(() => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [repos, setRepos] = useState<RepoStructure[]>([]);
  const throttledValue = useThrottle(inputSearchValue);

  const isRepos = repos.length > 0;

  useEffect(() => {
    if (inputSearchValue) {
      setIsFetching(true);
      fetchRepos(inputSearchValue, setRepos, setIsFetching);
    }
  }, [throttledValue]);

  return (
    <AppContainer>
      <div>
        <div className={styles.wrapperInput}>
          <Input
            value={inputSearchValue}
            handleOnChange={setInputSearchValue}
          />

          <ClipBoardButton text={inputSearchValue} />
        </div>

        <div className={styles.wrapperRepos}>
          <div>
            <h2>Список репозиториев:</h2>
            {isFetching ? (
              <Spinner />
            ) : (
              <ListRepos>
                {isRepos &&
                  repos.map(repo => (
                    <Repo
                      key={repo.id}
                      id={repo.id}
                      html_url={repo.html_url}
                      name={repo.name}
                      stargazers_count={repo.stargazers_count}
                      forks_count={repo.forks_count}
                      owner={{ avatar_url: repo.owner.avatar_url }}
                    />
                  ))}
              </ListRepos>
            )}
          </div>

          <div>
            <h2>Список с избранными репозиториями:</h2>
            <ListRepos>
              {favouritesRepos.getFavouritesRepos().map(repo => (
                <Repo
                  key={repo.id}
                  id={repo.id}
                  html_url={repo.html_url}
                  name={repo.name}
                  stargazers_count={repo.stargazers_count}
                  forks_count={repo.forks_count}
                  owner={{ avatar_url: repo.owner.avatar_url }}
                />
              ))}
            </ListRepos>
          </div>
        </div>
      </div>
    </AppContainer>
  );
});

export default MainPage;
