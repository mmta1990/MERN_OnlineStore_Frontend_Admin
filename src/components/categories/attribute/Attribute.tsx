import React from 'react'
import { TextField, Switch, FormControlLabel, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AttributeItem from './AttributeItem'
import { useCategoriesState } from '../context'
const useStyles = makeStyles((theme:Theme) => createStyles({
  attributeItem: {
    margin: theme.spacing(0, 1)
  },
  box: {
    padding: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(0, 1),
    minWidth: 200
  }
}))

export default function Attribute ({ hash, title, slug, filterable, hasPrice }:AttributeItem) {
  const styles = useStyles()
  const { dispatch } = useCategoriesState()
  const updateFiled = (field:string, value:string | boolean) => {
    dispatch({
      type: 'UPDATE_ATTRIBUTE',
      payload: {
        attributeID: hash,
        data: {
          [field]: value
        }
      }
    })
  }
  return (
    <Box className={styles.box}>
      <TextField
        variant="outlined"
        label="عنوان فارسی"
        id="title"
        name="title"
        className={styles.attributeItem}
        defaultValue={title}
        onBlur={(event:React.FocusEvent<HTMLInputElement>) => updateFiled(event.currentTarget.name, event.currentTarget.value)}
      />
      <TextField
        variant="outlined"
        label="عنوان انگلیسی"
        id="slug"
        name="slug"
        className={styles.attributeItem}
        defaultValue={slug}
        onBlur={(event:React.FocusEvent<HTMLInputElement>) => updateFiled(event.currentTarget.name, event.currentTarget.value)}

      />
      <FormControlLabel label="استفاده برای فیلتر"
        control={<Switch
          color="primary"
          id="filterable"
          name="filterable"
          defaultChecked={filterable}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => updateFiled(event.currentTarget.name, event.currentTarget.checked)}

        />}
        className={styles.attributeItem}
      />
      <FormControlLabel label="استفاده برای قیمت" control={<Switch
        color="primary"
        id="hasPrice"
        name="hasPrice"
        onChange={(event:React.ChangeEvent<HTMLInputElement>) => updateFiled(event.currentTarget.name, event.currentTarget.checked)}
        defaultChecked={hasPrice}
      />}
      className={styles.attributeItem}
      />
    </Box>
  )
}
