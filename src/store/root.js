import { observable, action } from 'mobx'

import apiRequest from '../api'
import Alerts from './alerts'

class Root {
  @observable isLoggedIn = false

  @observable cars = null

  @observable alerts = new Alerts()

  @observable token = null

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
  async login({ email, password }) {
    // login action here
    const {
      data: { token },
    } = await apiRequest('/jwt', {
      method: 'POST',
      body: {
        email,
        password,
      },
    })

    this.isLoggedIn = true
    this.token = token
  }

  @action
  logout() {
    // logout action here
    this.isLoggedIn = false
    this.alerts.alerts.push({
      message: 'Boli ste úspešne odhlásení.',
    })
  }

  async loadCars() {
    const {
      data: { data },
    } = await apiRequest('/cars')
    this.cars = data
  }

  async reserveCar(payload) {
    await apiRequest('/reservation', { method: 'POST', body: payload })
  }
}

export default Root
