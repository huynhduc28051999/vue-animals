import AnimalService from '@/services/animalService';
import { AnimalState, LoginInput } from '@/common/interface';

const AnimalModule = {
  state: {
    error: null,
    loading: false,
    animals: {},
  },
  mutations: {
    animalContruction(state: AnimalState) {
      state.loading = true;
    },
    animalSuccess(state: AnimalState, payload: any) {
      state.loading = false;
      state.error = null;
      state.animals = payload;
    },
    animalFailed(state: AnimalState, payload: any) {
      state.loading = false;
      state.error = payload.error;
    },
  },
  actions: {
    getAnimals({ commit }: any, { page, limit }: any): Promise<any> {
      commit('animalContruction');
      return AnimalService.getAnimals({ page, limit })
        .then((res) => {
          commit('animalSuccess', res.data);
          return Promise.resolve(res.data);
        })
        .catch((error) => {
          commit('animalFailed', error);
          return Promise.reject(error);
        });
    },
  },
};

export default AnimalModule;
