import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Animal = {
  _id: string;
  name: string;
  species: string;
  imageUrl: string;
};

export const animalsApiSlice = createApi({
  reducerPath: "animalsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getAllAnimals: builder.query<Animal[], void>({
      query: () => `http://localhost:3004/animals`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAnimalsQuery } = animalsApiSlice;

export default animalsApiSlice.reducer;
