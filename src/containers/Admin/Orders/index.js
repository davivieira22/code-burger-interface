import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FormatDate } from "../../../utils/formatData";
import Paper from "@mui/material/Paper";
import { Row } from "./row";
import status from "./order-status";

import { ContainerAdmin, Menu, LinkMenu } from "./style";
import api from "../../../services/Api";

export const Orders = (Props) => {
  console.log(Props)
  const [orders, setOrders] = useState([]);
  const [filterredorders, setFilterRedOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get("orders");

      setOrders(data);
      setFilterRedOrders(data);
    };
    loadOrders();
  }, []);

  const createData = (order) => {
    return {
      name: order.user.name,
      orderId: order._id,
      date: FormatDate(order.createdAt),
      status: order.status,
      product: order.products,
    };
  };
  useEffect(() => {
    const newRows = filterredorders.map((ord) => createData(ord));
    setRows(newRows);
  }, [filterredorders]);

  useEffect(() => {
    if( activeStatus === 1){
      setFilterRedOrders(orders)
    } else{ 
      const statusIndex = status.findIndex(sts => sts.id === activeStatus);
      const newFilterRedOrder = orders.filter(
        order => order.status === status[statusIndex.value]
      )
      setFilterRedOrders(newFilterRedOrder);}
   

  },[orders]);

  const handleStatus = (status) => {
    if (status.id === 1) {
      setFilterRedOrders(orders);
    } else {
      const newOrder = orders.filter((order) => order.status === status.value);
      setFilterRedOrders(newOrder);
    }
    setActiveStatus(status.id);
  };

  return (
    <ContainerAdmin>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              onClick={() => handleStatus(status)}
              key={status.id}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>pedido</TableCell>
              <TableCell>cliente</TableCell>
              <TableCell>data do pedido</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerAdmin>
  );
};
