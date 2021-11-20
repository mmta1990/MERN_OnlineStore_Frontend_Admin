import React from 'react'
import OrdersList from './list'
import HttpService from '../../services/Http'
import IOrder from './IOrder'
import Content from '../partials/Content'
import { Pagination } from '@material-ui/lab'
import IPagination from '../contracts/IPagination'
import { useHistory, useLocation } from 'react-router-dom'
import Search from '../partials/Search'
import * as QueryStringManager from 'query-string'
interface QueryStringInterface {
  [key:string]:string | number
}
export default function Orders () {
  const httpService = React.useMemo(() => (new HttpService()), [])
  const location = useLocation()
  const history = useHistory()
  const [orders, setOrders] = React.useState<IOrder[]>([])
  const [pagination, setPagination] = React.useState<IPagination | null>(null)
  const queryStringData:QueryStringInterface = React.useMemo(() => ({}), [])
  React.useEffect(() => {
    const fetchOrders = () => {
      const queryString = QueryStringManager.stringify(queryStringData)
      httpService.get<{_metadata:IPagination, data:IOrder[]}>(`/api/v1/orders?${queryString}`)
        .then(response => {
          setOrders(response.data.data as IOrder[])
          setPagination(response.data._metadata as IPagination)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchOrders()
  }, [location])
  const handlePagination = (e:React.ChangeEvent<unknown>, value:number) => {
    queryStringData.page = value
    updateLocation()
  }
  const handleSearch = (keyword:string) => {
    queryStringData.keyword = keyword
    delete queryStringData.page
    updateLocation()
  }
  const updateLocation = () => {
    history.push({
      search: `?${QueryStringManager.stringify(queryStringData)}`
    })
  }
  return (
    <div>
      <Content title="لیست سفارش ها">
        <Search label="نام | ایمیل | شماره سفارش" onChange={handleSearch} />
        <OrdersList items={orders} />
        <Pagination count={pagination?.totalPages} onChange={handlePagination}/>
      </Content>
    </div>
  )
}
