import styled from "styled-components";


export const Container =styled.div`
background: #e5e5e5;
min-height: 100vh;


 `

 export const ProductsImg =styled.img`
 width:100%;
 
 `
 export const CategoriesMenu=styled.div`
 display:flex;
 justify-content:center;
 gap:50px;
 margin-top:20px;
 `
 export const CategoryButton=styled.button`
 cursor:pointer;
 background:none;
 border:none;
 border-bottom:${props =>(props.isActiveCategory &&'2px solid #a3b')};
 color:${props =>(props.isActiveCategory ? '#a3b':'#9a9a9d')};
 font-size:17px;
 line-height:20px;
 padding-bottom:5px;
 
 `
 export  const ProductsContainer=styled.div`
 display:grid;
 grid-template-columns:repeat(3,30%);
 gap:15px;
 padding:45px;
 

 
 `