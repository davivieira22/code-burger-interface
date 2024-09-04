import styled from "styled-components";
import {Link} from "react-router-dom"


export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: rgba(151, 88, 166, 1);
    color: #ffff;
    cursor: pointer;
  }
  .rec.rec-arrow:hover {
    border: 2px solid rgba(151, 88, 166, 1);
    background-color: #efefef;
    color: #9758ab;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`;
export const CategoryImg = styled.img`
  width: 50%;
  margin-left: 10%;
`;
export const ContaineItems = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgCategory = styled.img`
  width: 200px;
  border-radius: 10px;
`;
export const Button = styled(Link)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 16px;
  border: none;
  background-color: rgba(151, 88, 166, 1);
  color: #ffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  justify-content:center;
  align-items:center;

`;
