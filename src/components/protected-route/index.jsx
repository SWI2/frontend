import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { withGlobalStore } from '../../store'

const PrivateRoute = ({ store, children, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      // if (!store.isLoggedIn) {
      //   store.alerts.push({
      //     message: 'Pre prístup na túto stránku sa prosím prihláste.',
      //     severity: 'error',
      //   })
      // }

      store.isLoggedIn ? children : <Redirect to="/" />
    }
  />
)

export default withGlobalStore(PrivateRoute)
