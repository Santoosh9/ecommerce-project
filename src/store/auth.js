import axios, { AxiosError } from 'axios';
import jsCookie from 'js-cookie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//
import axiosInstance from '../utils/axios';

//
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

// Magic strings
export const TOKEN_NAME = 'seveti_token';

// Initial state of the store
const initialState = {
  user: undefined,
  token: undefined,
  activeProfile: undefined,
};

/**
 * Login function
 */
export const loginUser = createAsyncThunk('login', async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, {
      email: payload.email,
      password: payload.password,
    });

    console.log(data);

    //
    jsCookie.set(TOKEN_NAME, JSON.stringify(data.response));
    //
    return {
      success: true,
      message: 'Successfully logged in!',
      data,
    };
  } catch (error) {
    const errorMessage =
      error instanceof AxiosError
        ? error.response?.data?.message
        : 'Unable to login';

    return {
      success: false,
      message: errorMessage,
    };
  }
});

export const registerUser = createAsyncThunk('register', async (payload) => {
  console.log(payload);

  const params = new URLSearchParams(payload);
  try {
    const { data } = await axios.put(`${API_URL}/register`, null, { params });

    console.log(data);

    //
    jsCookie.set(TOKEN_NAME, data.accessToken);

    //
    return {
      success: true,
      message: 'Successfully register user!',
      data,
    };
  } catch (error) {
    console.log(error);
    const errorMessage =
      error instanceof AxiosError
        ? error.response?.data?.message
        : 'Unable to regsiter';

    return {
      success: false,
      message: errorMessage,
    };
  }
});

/**
 * Logout function
 */
export const logoutUser = createAsyncThunk('logout', async () => {
  jsCookie.remove(TOKEN_NAME);

  //
  return {
    success: true,
    message: 'Successfully logged out!',
  };
});

/**
 * Get current session function
 */
export const getCurrentSession = createAsyncThunk(
  'getCurrentSession',
  async () => {
    const accessToken = jsCookie.get(TOKEN_NAME);

    //
    if (accessToken) {
      return {
        success: true,
        message: 'Successfully fetched the current session!',
        data: { accessToken },
      };
    }

    // TODO::
    // If refresh token logic is implemented in the future, we can get new pair of token by making an API call using the refresh token

    //
    return {
      success: false,
      message: 'Unable to fetch current session details!',
    };
  }
);

export const getUserDetails = createAsyncThunk('getUserDetails', async () => {
  try {
    const { data } = await axiosInstance.get('/user/me');

    return {
      success: true,
      message: 'Successfully fetched user details',
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unable to fetch user details',
    };
  }
});

/**
 *
 */
export const changeActiveProfile = createAsyncThunk(
  'changeActiveProfile',
  async (profileId) => {
    const { data } = await axiosInstance.patch('/user/me/active-profile', {
      profileId,
    });

    try {
      return {
        success: true,
        message: 'Successfully changed active profile',
        data: data?.data?.profileId,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to change active profile',
      };
    }
  }
);


export const d = createAsyncThunk(
  'changeActiveProfile',
  async (profileId) => {
    const { data } = await axiosInstance.patch('/user/me/active-profile', {
      profileId,
    });

    try {
      return {
        success: true,
        message: 'Successfully changed active profile',
        data: data?.data?.profileId,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to change active profile',
      };
    }
  }
);


/**
 *
 */
export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    removeUser: (state) => {
      state.user = undefined;
    },
  },

  /**
   * All auth related reducers
   */
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const payloadAttributes = action.payload.data;
      state.token = payloadAttributes?.response.api_token;
      state.user = payloadAttributes?.response.name;
      state.activeProfile = payloadAttributes?.response.userid;
    });

    //
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = undefined;
      state.token = undefined;
    });

    //
    builder.addCase(getCurrentSession.fulfilled, (state, action) => {
      if (!state.token && action.payload.success && action.payload.data) {
        state.token = action.payload.data.accessToken;
      }
    });

    //
    builder.addCase(getCurrentSession.rejected, (state) => {
      state.token = undefined;
      state.user = undefined;
    });

    //
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      const payloadAttributes = action.payload.data;

      state.user = payloadAttributes;
      state.activeProfile = payloadAttributes?.activeProfile;
    });

    //
    builder.addCase(changeActiveProfile.fulfilled, (state, action) => {
      const newActiveProfile = state.user?.profiles?.find(
        (profile) => profile._id === action.payload.data
      );

      state.activeProfile = newActiveProfile;
    });
  },
});

/**
 * Action creators are generated for each case reducer function
 */
export const { setUser, setAuthToken, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
