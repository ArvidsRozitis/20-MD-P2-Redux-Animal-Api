import { useAddAnimalMutation } from "../../slices/animalsApiSlice";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { SelectSpecies } from "../SelectSpecies/SelectSpecies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddAnimalForm = () => {
  const [addAnimal, {isLoading, isError}] = useAddAnimalMutation();

  //toasts
  const error = () => toast.error("Please fill all fields in form!");
  const success = () => toast.success("You added an animal!");

  const [selectValue, setSelectValue] = useState("select species");
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    species: selectValue,
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
      addAnimal(formData).then(() => {
        console.log("submitted");
        setFormData({
          name: "",
          imageUrl: "",
          species: "",
        });
        setSelectValue("select species");
        success();
      });
    }
  };
  return (
    <DivStyledFromContainer>
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
