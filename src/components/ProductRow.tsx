import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import { Product } from "../models/Product";

type Props = {
  product: Product;
};

const ProductRow: React.FC<Props> = (props: Props) => {
  const { product: row } = props;
  return (
    <TableRow key={row._id}>
      <TableCell component="th" scope="row">
        <a href="">{row.title}</a>
      </TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.rating}</TableCell>
      <TableCell align="right">{row.stockCount - row.soldCount}</TableCell>
      <TableCell align="right">
        <Button variant="contained" color="primary">
          Buy Now
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;