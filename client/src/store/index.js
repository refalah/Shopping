import { configureStore, createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishList: [] },
  reducers: {
    createWishlist(state, action) {
      const newWishlist = action.payload;

      const formWishlist = state.wishList.find(
        (item) => item.id == newWishlist.id
      );
      console.log(newWishlist, "form");
      console.log(state, "testing");
      if (formWishlist) {
      } else {
        state.wishList.push(newWishlist);
      }
    },
    removeWishlist(state, action) {
      const id = action.payload;
      const formWishlist = state.wishList.find((item) => item.id == id);
      if (formWishlist) {
        state.wishList = state.wishList.filter((item) => item.id != id);
      }
    },
  },
});

export const actions = wishlistSlice.actions;
const store = configureStore({
  reducer: wishlistSlice.reducer,
});

export default store;
