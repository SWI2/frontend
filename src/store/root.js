import { observable, action } from 'mobx'

import apiRequest from '../api'
import Alerts from './alerts'

class Root {
  @observable isLoggedIn = false

  @observable cars = null

  @observable alerts = new Alerts()

  @observable reservations = null

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
    const {
      data: { data },
    } = await apiRequest('/jwt', {
      method: 'POST',
      body: {
        email,
        password,
      },
    })
    this.isLoggedIn = true
    this.token = data.token
  }

  @action
  logout() {
    this.isLoggedIn = false
    this.alerts.push({
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

  async loadReservations() {
    if (!this.isLoggedIn) return

    const {
      data: { data },
    } = await apiRequest('/reservation', {
      headers: { Authorization: `Bearer ${this.token}` },
    })
    this.reservations = data
  }
}

export default Root
