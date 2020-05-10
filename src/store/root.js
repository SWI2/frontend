import { observable, action } from 'mobx'

import apiRequest from '../api'
import Alerts from './alerts'

class Root {
  @observable isLoggedIn = false

  @observable cars = null

  @observable alerts = new Alerts()

  constructor() {
    this.loadCars()
  }

  @action
  getNotifications() {
    const arrayToReturn = [...this.notifications]
    this.notifications = []
    return arrayToReturn
  }

  @action
  login() {
    // login action here
    this.isLoggedIn = true
  }

  @action
  logout() {
    // logout action here
    this.isLoggedIn = false
    this.alerts.alerts.push({
      message: 'Boli ste úspešne odhlásený',
    })
  }

  async loadCars() {
    const {
      data: { data },
    } = await apiRequest('/cars')
    this.cars = data
  }
}

export default Root
