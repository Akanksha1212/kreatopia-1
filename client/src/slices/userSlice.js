import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    // number: 0, // just a test number
    authenticated: true, // change this to true to get access to PrivateRoute
    username: null,
    email: null,
    role: false,
  },
  reducers: {
    // increment: (state, action) => {
    //   state.number += action.payload
    //   console.log('Number from state:', state.number)
    // },
    // decrement: (state, action) => {
    //   state.number -= action.payload
    //   console.log('Number from state:', state.number)
    // },
    login: (state, action) => {
      console.log('Payload', action.payload)
      state.username = action.payload.user.username
      state.email = action.payload.user.email
      localStorage.setItem('token', state.token || localStorage.getItem('token'))
      state.authenticated = true
      console.log('User state after log in:', JSON.stringify(state))
    },
    logout: state => {
      state.token = null
      state.username = null
      state.email = null
      state.role = false
      localStorage.removeItem('token')
      state.authenticated = false
      console.log('User state after log out:', state)
    },
  },
});

export const { login, logout } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default slice.reducer;
