import { createSlice } from "@reduxjs/toolkit";
import { IResponse } from "@ip-address/features";
import type { PayloadAction } from "@reduxjs/toolkit";

type IRes = typeof IResponse;

type ResStatus = "pending" | "fulfilled" | "rejected";

export interface IGlobalState {
  bootstrap: ResStatus;
  loading: boolean;
  error: boolean;
  errorMessage: string | null;
  response: IRes | null;
  searchQuery: string | null;
}

const initialState: IGlobalState = {
  bootstrap: "pending",
  loading: false,
  error: false,
  errorMessage: null,
  response: null,
  searchQuery: null
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    set_loading_to_true: (state) => {
      state.loading = true;
      state.response = null;
    },
    set_loading_to_false: (state) => {
      state.loading = false;
    },
    set_response: (state, action: PayloadAction<IRes>) => {
      state.response = action.payload;
    },
    set_bootstrap: (state, action: PayloadAction<ResStatus>) => {
      state.bootstrap = action.payload;
    },
    reset_to_initial_state: (state) => {
      state = initialState; 
    },
    search: (state) => {
      state.loading = true; 
      state.response = null; 
      state.error = false; 
      state.bootstrap = "fulfilled";
    }, 
    set_error_res: (state, action: PayloadAction<string>) => {
      state.loading = false; 
      state.response = null; 
      state.error = true; 
      state.errorMessage = action.payload;
    }, 
    set_success_res: (state, action: PayloadAction<IRes>) => {
      state.loading = false; 
      state.error = false; 
      state.response = action.payload;
    }, 
    set_query: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  set_loading_to_true,
  set_loading_to_false,
  set_response,
  set_bootstrap,
  reset_to_initial_state, 
  search, 
  set_error_res, 
  set_success_res,
  set_query
} = globalSlice.actions;
export default globalSlice.reducer;
