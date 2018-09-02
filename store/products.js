export const state = () => ({
  list: [
    {id: 1, name: 'Credit Cards'},
    {id: 2, name: 'Travel Insurance'},
    {id: 3, name: 'Car Insurance'},
    {id: 4, name: 'Home Loan'},
    {id: 5, name: 'Personal Loan'}
  ]
})

export const getters = {
  list (state) {
    return state.list;
  },
  detail: (state) => (id) => {
    return state.list.find(product => product.id == id)
  }
}