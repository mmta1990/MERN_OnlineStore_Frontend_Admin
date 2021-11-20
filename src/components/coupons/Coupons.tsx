import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../partials/Content'
import { Button } from '@material-ui/core'
import HttpService from '../../services/Http'
import ICoupon from './ICoupon'
import CouponsList from './List'
export default function Coupons () {
  const httpService = React.useMemo(() => (new HttpService()), [])
  const [coupons, setCoupons] = React.useState<ICoupon[]>([])
  React.useEffect(() => {
    const fetchCoupons = () => {
      httpService.get<ICoupon[]>('/api/v1/coupons')
        .then(response => setCoupons(response.data))
        .catch(error => console.log(error))
    }
    fetchCoupons()
  }, [])
  return (
    <Content title="کدهای تخفیف">
      <Link to="/coupons/new">
        <Button variant="contained" color="primary">ایجاد کد تخفیف</Button>
      </Link>
      <CouponsList items={coupons}/>
    </Content>
  )
}
