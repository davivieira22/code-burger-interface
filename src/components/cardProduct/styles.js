import styled from "styled-components";

export const Container = styled.div`

background-color:#ffffff;
box-shadow:0px  38px 68px rgba(57 ,57 ,57, 0,1);
border-radius:45px;
display:flex;
gap:15px;
padding: 18px;

div{
  width:80%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}

`;
export const ImageProducts = styled.img`
  width: 150px;
  border-radius:15px;
`;
export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
  margin-right: 90%;
  
`;
