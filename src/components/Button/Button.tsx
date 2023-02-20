import styled from "styled-components";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  all: unset;
  border-radius: 3px;
  padding: 2px 8px;
  background-color: grey;
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
