import React from 'react'
import RTL from '../../theme/rtl'
import { Container, Grid } from '@material-ui/core'
import SideBar from '../partials/SideBar'
import RenderRoutes from '../../router/routes'
const Panel:React.FC = ():JSX.Element => {
  return (
    <RTL>
      <div className="app">
        <Container maxWidth={'xl'} >
          <Grid container spacing={3}>
            <Grid item lg={3} xl={2} >
              <SideBar/>
            </Grid>
            <Grid item lg={9} xl={10} >
              <RenderRoutes/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </RTL>
  )
}

export default Panel
