import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import i18n from '@/i18n'

import Welcome from '@/components/Welcome.vue'

describe('welcome.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Welcome, {
      propsData: { msg },
      i18n
    })
    expect(wrapper.text()).to.include(msg)
  })
})
