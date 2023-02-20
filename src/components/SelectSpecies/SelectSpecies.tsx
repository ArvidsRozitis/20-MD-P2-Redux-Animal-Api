import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

type SelectProps = {
  onChange: (value: string) => void;
  selectValue: string;
};

export const SelectSpecies = ({ onChange, selectValue }: SelectProps) => {
  const animals = useAppSelector((store) => {
    return store.animals.animals;
  });

  //render add nev input
  if (
    !animals.find((e) => e.species === selectValue) &&
    selectValue !== "select species"
  ) {
    return (
      <LabelStyled>
        add species
        <input
          onChange={(e) => {
            onChange(e.currentTarget.value);
          }}
        />
      </LabelStyled>
    );
  }

  //render select
  return (
    <>
      <select
        value={selectValue}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      >
        <option value={"select species"} disabled>
          select species
        </option>
        {animals.map((animal) => (
          <option key={Math.random()} value={animal.species}>
            {animal.species}
          </option>
        ))}
        <option value={"+"}>add new species</option>
      </select>
    </>
  );
};

//style
const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
