import styled from "styled-components";


export const Container =styled.div`
background:#ffffffff;
padding:15px;
border-radius: 20px;
box-shadow:0px 10px 40px rgba(0,0,0.03);
display:flex;
align-items:center;
flex-direction: column;
justify-content:space-between;
.Container-top{

    display:  grid;
    grid-template-areas:
    'title title'
    'itens itens-price'
    'tex value-tex'
    ; 
    font-size:18px;
font-weight:bold;
.title{
    grid-area:title;
    margin-top:10px;
    margin-bottom:20px;
}.itens{
    grid-area:itens;
    margin-right:-10px;
    color:green;
}
.itens-price{
    grid-area:itens-price;
    margin-right:-100px;
    color:green;
}
.tex{
    grid-area:tex;
    margin-top:20px;
    color:red;
}
.velue-tex{
    grid-area:velue-tex;
    margin-top:-22px ;
    margin-left:-50px;
    color:red;
}
}
.container-end{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:40px;
    margin-top:30px;
    font-size:24px;
    font-weight: bold;
    

}

`