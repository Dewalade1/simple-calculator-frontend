import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #ffffff;
  cursor: pointer;
  font-size: 2rem;
  height: 100px;
  outline: none;
  width: 100px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.90);
  }
`;

export default Button;
