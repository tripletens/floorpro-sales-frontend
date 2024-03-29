import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user : null,
    token : null,
}

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
      sessionStorage.setItem("user_data", action.payload)
      return state; // works well for web 
    },
    setToken:(state,action) => {
        state.token = action.payload
        sessionStorage.setItem("access_token", action.payload)
        return state;
    },
    logout: (state) => {
      sessionStorage.clear();
      return state;
    },
  },
})


// Action creators are generated for each case reducer function
export const { setToken, setUser,logout } = OrderSlice.actions

export default OrderSlice.reducer