import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  height: 37px;
  background-color: #9758a6;
  border: none;
  border-radius: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffff;
  margin-top:20px;
  &:hover {
    opacity: 0.3;
  }
  &:active {
    opacity: 0.6;
    width:40%;
  }
`;