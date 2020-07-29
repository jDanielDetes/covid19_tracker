import React, { useState, useEffect } from "react";
import axios from "axios";

const API = `https://api.themoviedb.org/3/movie/popular?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US&page=1`;

export const initialState = {
  data: [],
};

const reducer = (state, action) => {
  console.log(action);
  return {
    ...state,
    data: [...state.data, "hi"],
  };
};

export default reducer;
