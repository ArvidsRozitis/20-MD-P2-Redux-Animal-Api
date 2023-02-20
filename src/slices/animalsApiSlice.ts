import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Animal = {
  _id: string;
  name: string;
  species: string;
  imageUrl: string;
};

type AnimalPost = {
    name: string;
    species: string;
    imageUrl: string;
  };

export const animalsApiSlice = createApi({
  reducerPath: "animalsApiSlice",
  tagTypes: ["animals"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getAllAnimals: builder.query<Animal[], void>({
      query: () => `http://localhost:3004/animals`,
      providesTags: ["animals"],
    }),
    deleteAnimal: builder.mutation<Animal[], string>({
      query: (id) => ({
        url: `animals/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["animals"],
    }),
    addAnimal: builder.mutation<void, AnimalPost>({
      query: (animal) => ({
        url: "/animals/post",
        method: "POST",
        body: { animal },
      }),
      invalidatesTags: ["animals"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllAnimalsQuery,
  useDeleteAnimalMutation,
  useAddAnimalMutation,
} = animalsApiSlice;

export default animalsApiSlice.reducer;
