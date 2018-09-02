export const state = () => ({
  todos: []
})

export const mutations = {
  ADD_TODO(state, title) {
    state.todos.push({
      id: (state.todos.length + 1),
      title
    })
  },
  REMOVE_TODO (state, todo) {
    var i = state.todos.indexOf(todo)
    state.todos.splice(i, 1)
  }
}