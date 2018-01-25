import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
      localStorage.setItem('panyadata', JSON.stringify(state.todos))
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
      localStorage.setItem('panyadata', JSON.stringify(state.todos))
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
      localStorage.setItem('panyadata', JSON.stringify(state.todos))
    },
    CHANGE_COMPLETE (state, {index, completed}) {
      state.todos[index].completed = completed
      localStorage.setItem('panyadata', JSON.stringify(state.todos))
    },
    DELETETE_COMPLETED (state) {
      for (var i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
      localStorage.setItem('panyadata', JSON.stringify(state.todos))
    },
    STORAGE_LOAD (state, storagetodata) {
      state.todos = storagetodata
    }
  },
  actions: {
    buildStorage ({state}) {
      localStorage.setItem('panyadata', JSON.stringify(state.todos))
    },
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    removeTodo ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    changeComplete ({commit}, obj) {
      commit('CHANGE_COMPLETE', obj)
    },
    deleteCompleted ({commit}) {
      commit('DELETETE_COMPLETED')
    },
    storageLoad ({commit}) {
      var storagetodata = localStorage.getItem('panyadata')
      if (storagetodata != null) {
        commit('STORAGE_LOAD', JSON.parse(storagetodata))
      }
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
