import { configureStore } from "@reduxjs/toolkit";
import animalsReducer from "../slices/animalsSlice";
import { animalsApiSlice } from "../slices/animalsApiSlice";

const store = configureStore({
  reducer: {
    animals: animalsReducer,
    animalsApi: animalsApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalsApiSlice.middleware),
});

//typeScript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
