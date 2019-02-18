import { shallowMount } from '@vue/test-utils'
import ListTerms from '@/pages/ListTerms.vue'

describe('ListTerms.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Título da Página'
    const wrapper = shallowMount(ListTerms, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
