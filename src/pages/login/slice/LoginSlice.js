import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {
    toLoading: state => {
      state.isLoading = true;
    },
    refreshUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchUserById.pending, (state, action) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchUserById.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.home = action.payload;
  //     })
  //     .addCase(fetchUserById.rejected, (state, action) => {
  //       state.isLoading = false;
  //     });
  // },
});

// constant fetchUserById = createAsyncThunk(
//   'login/fetchUserById',
//   (userId, thunkAPI) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({id: userId, name: 'Hello RN'});
//       }, 2000);
//     });
//   },
// );
//
// export {fetchUserById};

export const {toLoading, refreshUser} = loginSlice.actions;

export default loginSlice.reducer;
