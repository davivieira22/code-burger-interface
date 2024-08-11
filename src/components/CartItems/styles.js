import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow:0px 10px 40px rgba(0,0,0.03);
  padding: 10px;
  width: 60%;
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 13px;
  grid-gap: 10px 15px;
  border-bottom: 1px solid #b5b5b5;
  width: 100%;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-gap: 15px 15px;
  img {
    margin-bottom: 10px;
    border-radius: 10px;
    width: 110px;
  }
  p {
    font-size: 16px;
    color: black;
  }
  .quantity-container {
    display: flex;
    gap: 20px;
    button {
      height: 30px;
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;
    }
    p {
      margin-top: 8px;
    }
  }
`;
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;
