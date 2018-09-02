<template>
  <div class="container">
    <div>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo">
      <div class="list">
        <ul>
          <li v-for="(todo, index) in $store.state.todos" :key="index">
            <span>{{ todo.title }}</span>
            <span class="remove" @click="removeTodo(todo)">&times;</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addTodo (e) {
      this.$store.commit('ADD_TODO', e.target.value)
      e.target.value = ''
    },
    removeTodo(todo) {
      this.$store.commit('REMOVE_TODO', todo)
    }
  }
}
</script>

<style lang="scss">
$padding: 10px;

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 500px;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  .list {
    margin-top: 20px;

    ul {
      padding: 0;

      li {
        margin: $padding 0;
        list-style: none;
        background: #f1f1f1;
        padding: $padding 0px $padding 20px;

        .remove {
          float: right;
          cursor: pointer;
          background: #ededed;
          padding: $padding;
          margin-top: -$padding;
          font-weight: 600;
        }
      }
    }
  }
}
</style>