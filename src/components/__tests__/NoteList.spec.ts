import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NoteList from '../NoteList.vue'

describe('NoteList', () => {
  it('zeigt Notizen an', () => {
    const wrapper = mount(NoteList)
    expect(wrapper.text()).toContain('Einkaufen')
  })
})
