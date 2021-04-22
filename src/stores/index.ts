import UserStore from "./user";

export default {
  userStore: new UserStore()
};

export interface Store {
  userStore: UserStore;
}
