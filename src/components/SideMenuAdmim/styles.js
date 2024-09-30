import styled from "styled-components";
import {Link} from "react-router-dom"


export const Container =styled.div`
background:#3c3c3c;
box-shadow:  0px 0px 14px rgba(0,0,0.15);
width:25%;
top:0;

left:0;
padding:20px;
hr{
    margin:50px 15px;
}


`
export const ItemContainer =styled.div`
height:60px;
display:flex;
align-items:center;
border-radius:5px;
background:${props => props.isActive ? '#565656':'none'};
margin:8px;
padding-left:5px;
.icon{
    color:#ffff;
    margin-right:30px;
}

`
 export const ListLinks = styled(Link)`
 font-style: normal;
 font-weight:bold ;
 font-size:18px;
 line-height:20px;
 color:#ffffff;
 border:none;
 text-decoration:none;
 &:hover{
    opacity: 0.3;
    font-size:20px;
 } 
 &:active{
    opacity: 0.2;
    font-size:20px;
 }

 



 `
