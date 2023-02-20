import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styled from "styled-components";
import ButtonDelete from "../Button/ButtonDelete";
import { useDeleteAnimalMutation } from "../../slices/animalsApiSlice";

type AnimalsProps = {
  _id: string;
  name: string;
  species: string;
  imageUrl: string;
};

export const AnimalCard = ({ _id, name, species, imageUrl }: AnimalsProps) => {
  const [deleteAnimal, { isSuccess }] = useDeleteAnimalMutation();

  //delete animal
  const deleteHandler = () => {
    deleteAnimal(_id);
  };

  //render
  return (
    <DivConatainerStyled>
      <ImageStyled src={imageUrl} alt="image" />
      <DivInfoWrapper>
        <h2>{name}</h2>
        <DivSpeciesWrapper>
          <p>spiecies</p>
          <h3>{species}</h3>
        </DivSpeciesWrapper>
        <DivBottomWrapper>
          <ButtonDelete onClick={() => deleteHandler()} text={"x"} />
        </DivBottomWrapper>
      </DivInfoWrapper>
    </DivConatainerStyled>
  );
};

//style
const DivConatainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 400px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid grey;
  background-color: #343333;
  color: whitesmoke;
  padding: 10px;
  transition: background-color 0.2s, border 0.2s;
  &:hover {
    background-color: #232323;
    border: 2px solid white;
  }
`;

const ImageStyled = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
`;

const DivInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const DivBottomWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

const DivSpeciesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
`;
