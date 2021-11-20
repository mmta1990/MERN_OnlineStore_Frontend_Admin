/* eslint-disable no-unused-vars */
import React from 'react'
import IPayment from '../IPayment'
import { TableRow, TableCell, Button } from '@material-ui/core'
import { toPersianCurrency } from '../../../services/Currency'
import { toPersianNumber } from '../../../services/Lang'
import Status from '../Status'
import PaymentStatus from '../PaymentStatus'
export default function PaymentItem (props:IPayment) {
  return (
    <TableRow>
      <TableCell align="center">
        { `${props.user.firstName} ${props.user.lastName}`}
      </TableCell>
      <TableCell align="center">
        { `${props.order.id}`}
      </TableCell>
      <TableCell align="center">{toPersianCurrency(props.amount)}</TableCell>
      <TableCell align="center">{props.method}</TableCell>
      <TableCell align="center">{toPersianNumber(props.createdAt as unknown as string)}</TableCell>
      <TableCell align="center">{toPersianNumber(props.updatedAt as unknown as string)}</TableCell>
      <TableCell align="center">{<Status status={props.status as PaymentStatus} />}</TableCell>
    </TableRow>
  )
}
