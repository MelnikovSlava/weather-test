import Vuex from 'vuex';
import Vue from 'vue';
import { axiosInstance } from '../api/api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    cityList: [],
    currentCity: null,
    isLoading: false,
    error: null,
  },

  mutations: {
    fetchSuccess(state, data) {
      const index = state.cityList.findIndex(item => item.id === data.id);

      if (index === -1) {
        state.cityList.push({
          id: data.id,
          data,
        });
      }
    },

    deleteCity(state, id) {
      const index = state.cityList.findIndex(item => item.id === id);

      // set first element active
      if (state.currentCity === id) {
        this.commit('setActiveCity', state.cityList[0].id);
      }

      state.cityList.splice(index, 1);
    },

    setActiveCity(state, id) {
      state.currentCity = id;
    },

    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },

    setError(state, msg) {
      state.error = msg;
    },
  },

  actions: {
    fetchCityWeather({ commit, state }, city = '') {
      const objParams = { params: {} };

      if (typeof city === 'string') {
        objParams.params.q = city;
      } else {
        objParams.params = city;
      }

      const result = axiosInstance.get('/data/2.5/weather', objParams);

      commit('setLoading', true);

      result
        .then((response) => {
          if (response.status === 200) {
            commit('fetchSuccess', response.data);
            commit('setActiveCity', response.data.id);

            if (state.error !== null) {
              commit('setError', null);
            }
          }

          commit('setLoading', false);
        })
        .catch((error) => {
          commit('setError', error.toString());
          commit('setLoading', false);
        });

      return result;
    },
  },
});
