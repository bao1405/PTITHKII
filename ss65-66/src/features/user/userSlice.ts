import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: UserState = {
  id: '',
  userName: '',
  gender: '',
  dateBirth: '',
  address: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { id, userName, gender, dateBirth, address } = action.payload;
      state.id = id;
      state.userName = userName;
      state.gender = gender;
      state.dateBirth = dateBirth;
      state.address = address;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
