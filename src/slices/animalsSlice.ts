import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Animal = {
  id: string;
  name: string;
  species: string;
  imageUrl: string;
};

interface AnimalsSliceType {
  animals: Animal[];
  loading: boolean;
  species: string;
}

const initialState: AnimalsSliceType = {
  animals: [],
  loading: true,
  species: "",
};

const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    setAllAninmals: (state, action: PayloadAction<Animal[]>) => {
      state.animals = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export type { Animal };
export const { setAllAninmals, setLoading } = animalsSlice.actions;
// export const selectAnimals = (state: RootState) => state.animals.animals
export default animalsSlice.reducer;
