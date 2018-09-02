import { mount, createLocalVue } from '@vue/test-utils';
import Todo from '~/pages/todo.vue';
import Vuex from 'vuex'

// createLocalVue returns a Vue class for us to add components, mixins and install plugins.
const localVue = createLocalVue()
localVue.use(Vuex)

describe('index.vue', () => {
  let wrapper
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      ADD_TODO: jest.fn(),
      REMOVE_TODO: jest.fn()
    }

    store = new Vuex.Store({
      state: {
        todos: []
      },
      mutations
    })

    wrapper = mount(Todo, { 
      store, 
      localVue 
    });
  });
  
  // making sure that our wrapper is a vue instance test
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should have input', () => {
    const input = wrapper.find('input');
    expect(input.exists()).toBeTruthy();
  });

  it('commits "ADD_TODO" mutation on input keypress enter', () => {
    const inputValue = 'Cook Dinner';
    const input = wrapper.find('input');

    input.setValue(inputValue);
    input.trigger('keyup.enter');

    expect(mutations.ADD_TODO).toHaveBeenCalled()
    expect(mutations.ADD_TODO.mock.calls).toHaveLength(1)
    expect(mutations.ADD_TODO.mock.calls[0][1]).toEqual(inputValue)
  });

  it('commits "REMOVE_TODO" mutation on delete icon click', () => {
    const todo = {
      id: 1,
      title: 'Meeting with Matt'
    };

    wrapper.vm.$store.state.todos = [todo];

    const deleteIcon = wrapper.find('.remove');
    expect(deleteIcon.exists()).toBeTruthy();
    deleteIcon.trigger('click');
  
    expect(mutations.REMOVE_TODO).toHaveBeenCalled()
    expect(mutations.REMOVE_TODO.mock.calls).toHaveLength(1)
    expect(mutations.REMOVE_TODO.mock.calls[0][1]).toEqual(todo)
  });
});