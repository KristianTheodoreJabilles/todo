import { mount } from '@vue/test-utils';
import Search from '~/pages/search.vue';

describe('search.vue', () => {
  let wrapper

  beforeEach(() => {
    // mount creates a Wrapper that contains the mounted and rendered Vue component.
    wrapper = mount(Search, { })
  });
  
  // making sure that our wrapper is a vue instance
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // checking the component div element
  test('should have search results', () => {
    const div = wrapper.find('div')
    expect(div.exists()).toBeTruthy();
    expect(div.text('Search Results')).toBeTruthy();
  });
});