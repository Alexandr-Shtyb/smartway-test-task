import type { Dispatch, SetStateAction } from "react";
import { getRepos } from "api/repos/repos";
import { RepoStructure } from "types";

export const fetchRepos = async (
  inputValue: string,
  dispatch: Dispatch<SetStateAction<RepoStructure[]>>,
  dispatchFetchStatus: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const data = await getRepos(inputValue);

    dispatch(data.data.items);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatchFetchStatus(false);
  }
};
