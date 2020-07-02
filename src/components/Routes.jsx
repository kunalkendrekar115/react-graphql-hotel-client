import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import AddNewHotel from "./AddNewHotel"
import Hotels from "./Hotels"
import Header from "./common/Header"

function Routes() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/hotels/add-hotel">
          <AddNewHotel />
        </Route>

        <Route path="/hotels/hotels-list">
          <Hotels />
        </Route>

        <Route path="/">
          <Redirect to="/hotels/hotels-list" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
