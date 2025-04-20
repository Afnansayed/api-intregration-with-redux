import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the user type
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define the initial state type
interface UserState {
  users: User[];
}

// Initial state
const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Add a new user
    addUser: (state, action: PayloadAction<User>) => {
      console.log(action);
      state.users.push(action.payload);
    },

    // Remove a user by ID
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    // getAllUser:(state) => state.users;
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
