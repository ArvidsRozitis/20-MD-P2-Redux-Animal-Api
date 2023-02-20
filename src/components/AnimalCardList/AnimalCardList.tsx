import { useGetAllAnimalsQuery } from "../../slices/animalsApiSlice";
import styled from "styled-components";
import { AnimalCard } from "../AnimalCard/AnimalCard";
import { useState } from "react";



const AnimalCardList = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("");

  const { data } = useGetAllAnimalsQuery();
  console.log("data", data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  //if there is no animals
  if (!data.length) {
    return <h1> There is no animals in library</h1>;
  }

  // filter animals
  const filteredAnimals = data.filter((animal) => {
    if (selectedSpecies === "") {
      return animal;
    } else {
      return animal.species.toLowerCase().includes(selectedSpecies);
    }
  });

  //render
  return (
    <div>
      <LabelStyled>
        filter by species
        <input
          type="text"
          onChange={(e) => {
            setSelectedSpecies(e.currentTarget.value);
          }}
        />
      </LabelStyled>
      <DivListContainer>
        {filteredAnimals.map((animal) => (
          <AnimalCard
            key={Math.random()}
            _id={animal._id}
            name={animal.name}
            species={animal.species}
            imageUrl={animal.imageUrl}
          />
        ))}
      </DivListContainer>
    </div>
  );
};

export { AnimalCardList };

const DivListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
