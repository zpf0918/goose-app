import axios from 'axios'

export default {
  getPeoplePromise ({ commit }) {
    return new Promise(function (resolve, reject) {
      axios.get('https://api.myjson.com/bins/dv01c')
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  async getPeopleAsync ({ commit }) {
    const response = await axios.get('https://api.myjson.com/bins/dv01c')
    return response.data
  }
}
