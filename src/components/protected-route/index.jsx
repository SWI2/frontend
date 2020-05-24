import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { withGlobalStore } from '../../store'

const PrivateRoute = ({ store, children, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      store.isLoggedIn ? children : <Redirect to="/" />
    }
  />
)

export default withGlobalStore(PrivateRoute)
