import { makeAutoObservable } from "mobx";
import { RepoStructure } from "types";

class FavouritesRepos {
  favouritesRepos: RepoStructure[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getFavouritesRepos() {
    return this.favouritesRepos;
  }

  addToFavourites(repo: RepoStructure) {
    this.favouritesRepos.push(repo);
  }
}

export default new FavouritesRepos();
