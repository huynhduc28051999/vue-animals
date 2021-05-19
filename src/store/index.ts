import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import AnimalModule from './animal';
import AuthModule from './auth';

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store<any>({
  modules: {
    auth: AuthModule,
    animal: AnimalModule,
  },
  plugins: [createLogger()],
});
