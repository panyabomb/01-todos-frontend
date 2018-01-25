<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed</span>
      </b-radio-button>
    </b-field>
    <button class="button is-danger is-focused" @click="deleteCompleted()">Delete All completed item</button>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapActions } from 'vuex'
export default {
  computed: {
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    }
  },
  methods: {
    ...mapActions(['removeTodo', 'changeComplete', 'deleteCompleted'])
  }
}
</script>
