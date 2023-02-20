import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styled from "styled-components";
import Button from "../Button/Button";
import { setAllAninmals } from "../../slices/animalsSlice";
import { SelectSpecies } from "../SelectSpecies/SelectSpecies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddAnimalForm = () => {
  const dispatch = useAppDispatch();
  const animals = useAppSelector((store) => {
    return store.animals.animals;
  });

  //toasts
  const error = () => toast.error("Please fill all fields in form!");
  const succes = () => toast.success("You added an animal!");

  const [selectValue, setSelectValue] = useState("select species");
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
  });

  //submit handler
  const submitHandler = () => {
    if (
      selectValue === "" ||
      selectValue === "select species" ||
      formData.name === "" ||
      formData.imageUrl === ""
    ) {
      error();
    } else {
      const newAnimal = { ...formData, species: selectValue, id: uuidv4() };
      const updatedAnimals = [...animals, newAnimal];
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));

      console.log("submited");
      setFormData({
        name: "",
        imageUrl: "",
      });
      setSelectValue("select species");
      const storedAnimals = localStorage.getItem("animals");
      dispatch(setAllAninmals(storedAnimals ? JSON.parse(storedAnimals) : []));
      succes();
    }
  };
  return (
    <DivStyledFromContainer>
      name: {formData.name}
      <br />
      species: {selectValue}
      <br />
      imageUrl: {formData.imageUrl}
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <LabelStyled>
          Animal name
          <InputStyled
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.currentTarget.value });
            }}
          />
        </LabelStyled>
        <SelectSpecies
          selectValue={selectValue}
          onChange={(value: string) => {
            setSelectValue(value);
          }}
        />

        <LabelStyled>
          image url
          <InputStyled
            type="url"
            pattern="https?://.+"
            required
            value={formData.imageUrl}
            onChange={(e) => {
              setFormData({ ...formData, imageUrl: e.currentTarget.value });
            }}
          />
        </LabelStyled>
        <Button onClick={() => submitHandler()} text={"add new animal"} />
      </FormStyled>
      <ToastContainer />
    </DivStyledFromContainer>
  );
};

const FormStyled = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  background-color: #343333;
  color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
`;
const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DivStyledFromContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;
const InputStyled = styled.input`
  display: flex;
  width: 100%;
`;
