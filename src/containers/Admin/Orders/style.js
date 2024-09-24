import styled from "styled-components";
import ReactSelect from "react-select";

export const  ContainerAdmin  = styled.div` 
background:#efefef;
min-height:100vh ;
padding: 20px;


`
export const ProductImg = styled.img`
width:60px;
border-radius:5px;

`
export const ReactSelectStyle = styled(ReactSelect)`
width:250px;

.css-13cymwt-control{ 
    cursor:pointer;
    font-weight:bold;
}
.css-1wy0on6{
    background-color:black;
    color:#ffff;
}

`
export const Menu = styled.div`
display:flex;
gap:50px;
justify-content:center;
margin:20px 0;

` 
export const LinkMenu = styled.a`
color: #323d5d;
font-size:20px;
cursor:pointer;
font-weight:${props => (props.isActiveStatus ? 'bold' :'400')};
border-bottom:${props => (props.isActiveStatus ? '3px solid #975ba6 ' :'none')};
font-size:${props => (props.isActiveStatus ? '22px' :'20px')};
padding-bottom: 5px;

`