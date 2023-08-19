import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UserData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {},
  },
});
export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
