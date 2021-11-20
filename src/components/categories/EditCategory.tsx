import React from 'react'
import CategoriesContent from './CategoriesContent'
import { CategoriesProvider } from './context'
export default function EditCategory () {
  return (
    <CategoriesProvider>
      <CategoriesContent/>
    </CategoriesProvider>
  )
}
