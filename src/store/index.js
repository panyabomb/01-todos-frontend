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
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_COMPLETE (state, {index, completed}) {
      state.todos[index].completed = completed
    },
    DELETETE_COMPLETED (state) {
      for (var i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
    }
  },
  actions: {
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
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
