import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRelatedProducts = createAsyncThunk(
  "relatedProducts/fetch",
  async (productId: number) => {
    const res = await axios.get(
      // `${process.env.NEXT_PUBLIC_serverurl}/products/related/${productId}`
      `${process.env.NEXT_PUBLIC_serverurl}/products/${productId}/related`
      
    );
    console.log("API response:", res.data);  // 👈 ADD THIS
    return res.data.relatedProducts; // IMPORTANT
  }
);

const relatedProductSlice = createSlice({
  name: "relatedProducts",
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchRelatedProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

console.log("API URL:", process.env.NEXT_PUBLIC_serverurl);


export default relatedProductSlice.reducer;
