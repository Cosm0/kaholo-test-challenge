import { observable, computed, action, when, makeObservable, runInAction } from "mobx";
import apiService from "../services/ApiService";

export default class UserStore {
  private quantity = 50;
  private maxPage = 1000 / this.quantity;

  @observable page: number = 1;
  @observable preloadUsers: any[] = [];
  @observable nationality: string = "";
  @observable userList: any[] = [];
  @observable search: string = "";
  @observable isLoading: boolean = false;

  constructor() {
    makeObservable(this)
  }

  @computed get isDataLoaded() {
    return this.userList.length > 0;
  }

  @computed get users() {
    return this.userList.filter(item => {
      const name = `${item.name.first} ${item.name.last}`;
      const re = new RegExp(`^${this.search}.*`, "i");
      return re.test(name);
    });
  }

  @computed get catalogLimitReached() {
    return this.page <= this.maxPage;
  }

  @computed get isNotSearchMode() {
    return !(this.search.length > 0);
  }

  @action async getUsers() {
    when(
      () => this.catalogLimitReached,
      async () => {
        this.isLoading = true;
        const preloadUsers = await apiService.requestUsers(
          this.page,
          this.quantity,
          this.nationality
        );
        runInAction(() => {
          this.preloadUsers = preloadUsers;
        });
      }
    );
  }

  @action updateUserList() {
    when(
      () => this.preloadUsers.length > 0,
      () => {
        this.isLoading = false;
        this.userList = this.userList.concat(this.preloadUsers);
        this.preloadUsers = [];
      }
    );
  }

  @action nextPage() {
    if (this.catalogLimitReached) {
      this.page = this.page + 1;
    }
  }

  @action setNationality(selectedNationality: string) {
    this.nationality = selectedNationality;
  }

  @action resetUsers() {
    this.page = 1;
    this.userList = [];
  }
}
