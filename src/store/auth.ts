import AuthService from '@/services/authService';
import { AuthState, LoginInput } from '@/common/interface';

const AuthModule = {
  state: {
    isAuthenticated: localStorage.getItem('access-token') ? true : false,
    error: null,
    loading: false,
  },
  mutations: {
    loginContruction(state: AuthState) {
      state.loading = true;
    },
    loginFailed(state: AuthState, payload: any) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload.error;
    },
    loginSuccess(state: AuthState) {
      state.loading = false;
      state.isAuthenticated = true;
    },
    logout(state: AuthState) {
      state.isAuthenticated = false;
    },
  },
  actions: {
    loginContruction({ commit }: any, data: LoginInput): Promise<any> {
      commit('loginContruction');
      return AuthService.login(data)
        .then((res) => {
          localStorage.setItem('access-token', res.data.access_token);
          commit('loginSuccess');
          return Promise.resolve(res.data);
        })
        .catch((error) => {
          commit('loginFailed', error);
          return Promise.reject(error);
        });
    },
    logout({ commit }: any): boolean {
      commit('logout');
      AuthService.logout();
      return true;
    },
  },
};

export default AuthModule;
