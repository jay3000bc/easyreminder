import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const Auth = {
  namespaced: true,

  state: {
      token: localStorage.getItem('token') || null,
      user: null,
      isLoading: ''
  },

  getters: {
      loggedIn(state) {
          if(state.token) {
              return true
          }
          else
          {
              return false
          }
      }
  },

  mutations: {
      SET_TOKEN(state,tokenValue) {
          state.token = tokenValue
          state.isLoading = false
      },
      SET_LOADING(state,loadingValue) {
        state.isLoading = loadingValue
      },
      REMOVE_LOADING(state,loadingValue) {
        state.isLoading = loadingValue
      },
      DESTROY_TOKEN(state) {
          state.token = null
      }
  },

actions: {
    login_GenerateToken(context, credentials) {
      return new Promise((resolve, reject) => {

            context.commit('SET_LOADING',true);
            axios.post(`${process.env.VUE_APP_APIURL}login`,{
                username: credentials.username,
                password: credentials.password
            })
            .then(response => {
                const access_token = response.data.access_token;
                localStorage.setItem('token',access_token);
                context.commit('SET_TOKEN',access_token);
                resolve(response);

                // console.log(response);   
            })
            .catch(error => {
                // console.log("Eror While Logging"+error);
                context.commit('REMOVE_LOADING',false);
                reject(error);

            })
   })
  },

   register(context, formdata) {
    return new Promise((resolve, reject) => {
      axios.post('/register',formdata)
        .then(response => {
            resolve(response)
            console.log(response);   
        })
        .catch(error => {
            reject(error);
        })
    })       
    },

   Signout(context) {
       return new Promise((resolve, reject) => {
          axios.get(`${process.env.VUE_APP_APIURL}logout`,{
                  headers: {
                      'Authorization' : `Bearer ${localStorage.getItem('token')}`
                  }
            })
            .then(response => {
                localStorage.removeItem('token')
                context.commit('DESTROY_TOKEN')
                resolve(response)
            })
            .catch(error => {
                localStorage.removeItem('token')
                context.commit('DESTROY_TOKEN')
                reject(error)
            })
       })
    }
  }
}

const store = new Vuex.Store({
  state: {
  },

  mutations: {

  },

  actions: {

  },

  modules: {
    authModule: Auth,
  }
});

export default store;
