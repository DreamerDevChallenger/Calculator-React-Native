import { createSlice } from "@reduxjs/toolkit";
import { calculAction } from "../actions/calcul";

const calculSlice = createSlice({
  name: "calcul",
  initialState: "",
  reducers: {
    ...calculAction,
  },
});

const { actions, reducer } = calculSlice;

export const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  less,
  dot,
  multiply,
  divide,
  percent,
  remove,
  reset,
  result,
} = actions;

export default reducer;
