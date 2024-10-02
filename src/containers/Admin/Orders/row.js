import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import api from "../../../services/Api";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ProductImg,ReactSelectStyle } from "./style";
import PropTypes from "prop-types";
import status from "./order-status";


export const Row = ({ row,orders,setOrders }) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const setNewStatus = async (id, status) => {
    setIsLoading(true);
    try {
      await api.put(`orders/${id}`, { status });

      const newOrder= orders.map(order =>{
        return order._id === id ? {...order,status} : order
      })
      setOrders(newOrder)
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <TableRow TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <ReactSelectStyle
            options={status.filter(sts => sts.value !== 'todos')}
            menuPortalTarget={document.body}
            placeholder="status"
            defaultValue={
              status.find((option) => option.value === row.status) || null
            }
            isLoading={isLoading}
            onChange={(newStatus) => {
              setNewStatus(row.orderId, newStatus.value);
            }}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>quantidade</TableCell>
                    <TableCell>produto</TableCell>
                    <TableCell>categoria</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.product.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell align="right">
                        <ProductImg
                          src={productRow.url}
                          alt="foto do produto"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

Row.propTypes = {
  orders: PropTypes.array,
 setOrders:PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    protuct: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
