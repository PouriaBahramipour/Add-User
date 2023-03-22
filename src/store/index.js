import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addPerson: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({ reducer: { user: userSlice.reducer } });

export const userActions = userSlice.actions;

export default store;
