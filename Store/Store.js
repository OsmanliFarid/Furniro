import { create } from "zustand";

export const ShopDetail = create((set) => ({
  ShopDetailItem: [],
  AddRef: false,
  Count: 1,
  SetCounts: (item) =>
    set((state) => {
      return {
        Count: item,
      };
    }),
  ItemClickShow: (item) =>
    set((state) => {
      const newdata = state.ShopDetailItem.filter(
        (shopitem) => shopitem._id !== item._id
      );
      const newdata2 = { ...item, count: state.Count };

      return { ShopDetailItem: [...newdata, newdata2] };
    }),
  ItemClickDelete: (item) =>
    set((state) => {
      const newdata = state.ShopDetailItem.filter(
        (NewItem) => NewItem._id !== item._id
      );
      return {
        ShopDetailItem: [...newdata],
        AddRef: false,
      };
    }),
}));
