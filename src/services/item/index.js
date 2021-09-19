import Base from '../Base.service'

export default class Item extends Base {
  constructor () {
    super('/item')
  }

  get = async (id) => {
    try {
      const response = await this.http.get(`${this.path}/${id}`)
      return response.data

    } catch (er) {
      throw this.responseService(er.response.config.method, er.response.status)
    }
  }

  post = async (product) => {
    try {
      const response = await this.http.post(`${this.path}`, product)
      return response.data

    } catch (er) {
      throw this.responseService(er.response.config.method, er.response.status)
    }
  }

  put = async (product) => {
    try {
      const response = await this.http.put(`${this.path}`, product)
      return response.data

    } catch (er) {
      throw this.responseService(er.response.config.method, er.response.status)
    }
  }

  delete = async (product_code) => {
    try {
      const response = await this.http.post(`${this.path}/${product_code}`)
      return response.data

    } catch (er) {
      throw this.responseService(er.response.config.method, er.response.status)
    }
  }
}
