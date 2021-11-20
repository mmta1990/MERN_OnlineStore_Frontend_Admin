import React from 'react'
import Content from '../partials/Content'
import Http from '../../services/Http'

import Table from '../utils/Table'
import SkeletonTable from '../utils/SkeletonTable'
import CategoryItem from '../contracts/CategoryItem'
export default function Categories () {
  const [categories, setCategories] = React.useState<CategoryItem[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const http = new Http()
  React.useEffect(() => {
    const loadCategories = () => {
      http.get<CategoryItem[]>('/api/v1/categories').then(response => {
        setCategories(response.data)
        setIsLoading(false)
      }).catch(error => {
        console.log(error.message)
      })
    }
    loadCategories()
  }, [])
  return (
    <Content title="لیست دسته بندی ها">
      {isLoading && <SkeletonTable/>}
      {!isLoading && <Table
        columns={['عنوان', 'اسلاگ']}
        data={categories}
        attributes={['title', 'slug']}
      />}
    </Content>
  )
}
