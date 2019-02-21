import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar'


describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('snapshot renders correctly', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.element).toMatchSnapshot()
  })
})
