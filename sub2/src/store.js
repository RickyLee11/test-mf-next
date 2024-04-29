import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set({ count: 0 }),
}))

export default useStore