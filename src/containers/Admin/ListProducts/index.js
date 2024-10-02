import React, { useEffect, useState } from "react";
import api from '../../../services/Api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import {formatCurrency} from '../../../utils/formatCurrency'
import {
  Container,Img,
  EditIcon
 
} from "./styles";

export const ListProducts = () => {

const[products,setProducts]=useState([])
 useEffect(()=>{

   const loadOrders = async ()=>{
    const{data}= await api.get('/products')

    setProducts(data)
  }
  loadOrders()
 },[])

 const isOffer = (offerStatus)=>{
  if(offerStatus){
    return < CheckCircleIcon style={{color:'#228b22'}}/>
  }
  return <CancelIcon style={{color:'#cc1717'}}/>
 }

  return (
    <Container>

   <TableContainer TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >Nome</TableCell>
            <TableCell >Preço</TableCell>
            <TableCell align="center" >Produto em oferta</TableCell>
            <TableCell align="center" >foto do Produto</TableCell>
            <TableCell >Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell >{formatCurrency(product.price)}</TableCell>
              <TableCell align="center" >{isOffer(product.offer)}</TableCell>
              <TableCell align="center" ><Img src={product.url}alt="foto-do-produto"/></TableCell>
              <TableCell ><EditIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  
    </Container>
  );
};
