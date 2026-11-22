import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import NoteList from '../NoteList.vue'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('NoteList', () => {
  it('zeigt Notizen vom Backend an', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () =>
          Promise.resolve([
            { id: 1, title: 'Einkaufen', content: 'Milch, Brot, Eier', createdAt: '2026-11-22T10:00:00' },
          ]),
      }),
    )

    const wrapper = mount(NoteList)
    await flushPromises()

    expect(wrapper.text()).toContain('Einkaufen')
  })
})
