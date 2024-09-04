import styled from "styled-components";


export const Container =styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:row;
height:72px ;
background-color:#ffffff;
box-shadow:2px 3px 5px rgba(0,0,0.15);


 `

export const Containerleft =styled.div`
display:flex;
gap:30px;

`
export const PageLink =styled.a`
font-size:17px;
font-weight:bold;
cursor:pointer;
color:#555555;
text-decoration: none;
&&:hover{
    font-size:20px;
color:#9759a9;
}
&&:active{   
     font-size:20px;
    color:#9759a9;

}

`
export const ContainerRight=styled.div`
display:flex;
align-items: center;
gap:20px;

`
export const ContainerText=styled.div`
font-size:17px;
font-weight:bold;

`
export const Line =styled.div`
height: 40px;
border:0.5px solid #bababa;

`
