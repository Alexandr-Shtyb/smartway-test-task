import type { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import { useThrottle } from "./useThrottle";
import { getRepos } from "api/repos/repos";
import { RepoStructure } from "types";

interface UseGetRepositoriesOutput {
  inputSearchValue: string;
  setInputSearchValue: Dispatch<SetStateAction<string>>;
  isReposFetching: boolean;
}

export const useFetchRepos = (
  dispatch: Dispatch<SetStateAction<RepoStructure[]>>,
): UseGetRepositoriesOutput => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [isReposFetching, setIsReposFetching] = useState(false);
  const throttledValue = useThrottle(inputSearchValue);

  const fetchRepos = async () => {
    try {
      setIsReposFetching(true);
      const data = await getRepos(inputSearchValue);

      dispatch(data.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsReposFetching(false);
    }
  };

  useEffect(() => {
    if (throttledValue) {
      fetchRepos();
    }
  }, [throttledValue]);

  return { inputSearchValue, setInputSearchValue, isReposFetching };
};
