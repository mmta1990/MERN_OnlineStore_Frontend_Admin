import React from 'react'
import { TableRow, TableCell, Button } from '@material-ui/core'
import IOrder from '../IOrder'
import { toPersianCurrency } from '../../../services/Currency'
import { toPersianNumber } from '../../../services/Lang'
import Status from '../Status'
import OrderStatus from '../OrderStatus'

import { Link } from 'react-router-dom'
export default function OrderItem ({
  id,
  user,
  totalPrice,
  finalPrice,
  orderLines,
  createdAt,
  updatedAt,
  status
}:Partial<IOrder>) {
  return (
    <TableRow>
      <TableCell align="center">
        {(user ? `${user.firstName} ${user.lastName}` : '')}
      </TableCell>
      <TableCell align="center">{toPersianCurrency(totalPrice as unknown as number)}</TableCell>
      <TableCell align="center">{toPersianNumber((orderLines ? orderLines.length : 0))}</TableCell>
      <TableCell align="center">{toPersianNumber(createdAt as unknown as string)}</TableCell>
      <TableCell align="center">{toPersianNumber(updatedAt as unknown as string)}</TableCell>
      <TableCell align="center">{<Status status={status as OrderStatus} />}</TableCell>

      <TableCell align="center">
        <Link to={`/orders/${id}`}>
          <Button variant="contained" color="secondary">جزئیات</Button>
        </Link>
      </TableCell>

    </TableRow>
  )
}
