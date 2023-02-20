import styled from "styled-components";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const ButtonDelete = ({ onClick, text }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default ButtonDelete;

const ButtonStyled = styled.button`
  all: unset;
  border-radius: 3px;
  padding: 2px;
  background-color: grey;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: whitesmoke;
    color: darkgrey;
  }
`;
