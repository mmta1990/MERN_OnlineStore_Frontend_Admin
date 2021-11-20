/* eslint-disable no-unused-vars */
import React from 'react'
import ISetting from '../ISetting'
import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@material-ui/core'
import SettingItem from './SettingItem'
interface SettingsListProps{
    list:ISetting[]
}
export default function SettingsList ({ list }:SettingsListProps) {
  return (
    <TableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="center">عنوان</TableCell>
            <TableCell align="center"> کلید </TableCell>
            <TableCell align="center">مقدار</TableCell>
            <TableCell align="center"> نوع </TableCell>
            <TableCell align="center"> نسخه </TableCell>
            <TableCell align="center"> عملیات </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item:ISetting) => <SettingItem key={item.id} {...item} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
