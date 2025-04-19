import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
    return res.data;
  }
);