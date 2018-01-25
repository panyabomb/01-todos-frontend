<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ({{counting}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ({{countActive}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ({{countCompleted}})</span>
      </b-radio-button>
    </b-field>
    <button class="button is-danger is-focused" @click="deleteCompleted()">Delete All completed item</button>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['todos']),
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    },
    counting () {
      return this.todos.length
    },
    countActive () {
      return this.todos.filter((todo) => todo.completed === false).length
    },
    countCompleted () {
      return this.todos.filter((todo) => todo.completed === true).length
    }
  },
  methods: {
    ...mapActions(['removeTodo', 'changeComplete', 'deleteCompleted'])
  }
}
</script>
