/* eslint-disable no-unused-vars */
import React from 'react'
import ISetting from '../ISetting'
import { TableRow, TableCell, Button } from '@material-ui/core'
import Scope from '../Scope'

export default function SettingItem (props:ISetting) {
  return (
    <TableRow>
      <TableCell align="center">{props.title}</TableCell>
      <TableCell align="center">{props.settingKey}</TableCell>
      <TableCell align="center">{props.settingValue}</TableCell>
      <TableCell align="center"><Scope value={props.scope} /></TableCell>
      <TableCell align="center">{props.version}</TableCell>
      <TableCell align="center"></TableCell>
    </TableRow>
  )
}
