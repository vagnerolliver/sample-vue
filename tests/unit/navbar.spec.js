import {mount, shallowMount} from '@vue/test-utils'
import NavBar from '@/components/NavBar'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(NavBar, {
      stubs: ['router-link']
    })
  })

  // test('snapshot renders correctly', () => {
  //   const wrapper = shallowMount(NavBar)
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})
