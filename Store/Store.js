import { create } from "zustand";

export const ShopDetail = create((set) => ({
  ShopDetailItem: [],
  AddRef: false,
  ItemClickShow: (item) =>
    set((state) => {
      const newdata = state.ShopDetailItem.filter(
        (shopitem) => shopitem._id !== item._id
      );

      return { ShopDetailItem: [...newdata, item], AddRef: true };
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
