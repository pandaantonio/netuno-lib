import Axios from "axios";
const base = "https://nekos.life/api/v2/img/";

export default class GifAPI {
  constructor() {}

  async getHug() {
    return Axios.get(`${base}/hug`).then((res) => res.data.url);
  }

  async getKiss() {
    return Axios.get(`${base}/kiss`).then((res) => res.data.url);
  }

  async getPat() {
    return Axios.get(`${base}/pat`).then((res) => res.data.url);
  }

  async getSlap() {
    return Axios.get(`${base}/slap`).then((res) => res.data.url);
  }

  async getTickle() {
    return Axios.get(`${base}/tickle`).then((res) => res.data.url);
  }
}
