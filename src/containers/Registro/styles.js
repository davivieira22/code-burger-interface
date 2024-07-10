import styled from "styled-components";
import logoEsquerda from "../../assets/imgCadastro.png";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 150vh;
`;
export const LoginImg = styled.img`
  width: 60%;
  height: 125px;
  margin-bottom: 50px;
`;
export const ContainerLeft = styled.div`
  background: url(${logoEsquerda});
  width: 100vw;
  height: 100%;
  min-width: 50%;
  background-size: cover;
  background-position: center;
`;
export const ContainerRight = styled.form`
  width: 100vw;
  height:100%;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: #373737;

  h1 {
    margin-bottom: 8px;
    color: #ffff;
    font-weight: 500;
    font-size: 40px;
    line-height: 29px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-top:10px;

  label {
    color: #ffff;
    font-weight: 500;
    font-size: 18px;
    line-height: 15px;
    margin-bottom: 8px;
  }
  input {
    width: 50%;
    height: 38px;
    border: ${props=> props.errors ? '2px solid #cc1717' : 'none'};
    border-radius: 5px;
  }
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #ffff;
`;

export const ErrorsInput = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 5px;
`;
