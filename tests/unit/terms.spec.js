import Terms from '@/pages/Terms.vue'
import { mount } from "@vue/test-utils";

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Terms)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('snapshot renders correctly', () => {
    const wrapper = mount(Terms)
    expect(wrapper.element).toMatchSnapshot()
  })
})
