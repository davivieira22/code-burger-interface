import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Row} from './row'


import { ContainerAdmin } from "./style";
import api from "../../../services/Api";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get("orders");

      setOrders(data);
    };
    loadOrders();
  }, []);

  const createData = (order) => {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      product: order.products,
    };
  };
  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord));
    setRows(newRows);
  }, [orders]);

console.log(rows)

  return (
    <ContainerAdmin>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>pedido</TableCell>
            <TableCell >cliente</TableCell>
            <TableCell >data do pedido</TableCell>
            <TableCell >status</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ContainerAdmin>
  );
};
