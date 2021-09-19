import { http } from "../boot/axios"
import responseService from './Response.service'

export default class Base {
  constructor (path = '') {
    this.path = path;
    this.http = http;
    this.responseService = responseService;
  }
}
