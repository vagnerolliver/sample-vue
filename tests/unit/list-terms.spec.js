import ListTerms from '@/pages/ListTerms.vue'
import {mount, shallowMount } from "@vue/test-utils";

fdescribe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ListTerms)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('snapshot renders correctly', () => {
    const wrapper = mount(ListTerms)
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders props.msg when passed', () => {
    const title = 'Título da minha pagina!'
    const description = 'Minha descrição'

    const wrapper = shallowMount(ListTerms, {
      propsData: { title, description }
    })

    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(description)
  })

  test('has a created hook', () => {
    expect(typeof ListTerms.created).toBe('function')
  })
})
