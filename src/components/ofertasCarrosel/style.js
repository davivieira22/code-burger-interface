import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffffff;
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
export const OfferImg = styled.img`
  width: 30%%;
  margin-left: 10%;
`;
export const OfferItems = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-left: 30px;
  p{
    font-style:normal;
    font-weight:bold;
    font-size:22px;
    line-height:120%;
    color:#424242;
  }
`;
export const OfferImagem = styled.img`
  width: 80%;
  border-radius: 10px;
  margin-bottom:16px;
 
`;
export const OfferButton = styled.button`
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
`;
