/* eslint-disable no-unused-vars */
import React from 'react'
import IComment from '../IComment'
import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@material-ui/core'
import CommentItem from './CommentItem'

interface CommentsListProps{
    items:IComment[]
}
export default function CommentsList ({ items }:CommentsListProps) {
  return (
    <TableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="center">کاربر</TableCell>
            <TableCell align="center"> عنوان </TableCell>
            <TableCell align="center">ایجاد شده در </TableCell>
            <TableCell align="center"> خریدار </TableCell>
            <TableCell align="center"> توصیه </TableCell>
            <TableCell align="center"> وضعیت </TableCell>
            <TableCell align="center"> عملیات </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item:IComment) => <CommentItem key={item.id} {...item} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
