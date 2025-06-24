import { create } from "zustand";
export const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));
export const UseAddClose = create((set) => ({
  AddRef: false,
  ince: () => set((state) => ({ AddRef: !state.AddRef })),
}));
