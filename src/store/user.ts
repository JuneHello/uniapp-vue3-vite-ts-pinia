import { defineStore } from "pinia";

interface UserInfo {
  token: string;
  user_id: Number;
}
type State = {
  userInfo: UserInfo;
};

export default defineStore({
  id: "user",
  state: (): State => {
    return {
      userInfo: {
        token: "token",
        user_id: 111
      }
    };
  },
  getters: {
    logged: state => {
      const { token, user_id } = state.userInfo;
      return !!(token && user_id);
    },
    token: state => {
      return state.userInfo.token;
    },
    userId: state => {
      return state.userInfo.user_id;
    }
  },
  actions: {
    setUserInfo(userInfo: UserInfo) {
      Object.assign(this.userInfo, userInfo);
    }
  }
});
