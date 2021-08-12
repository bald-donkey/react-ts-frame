import axios from '../service/request'

// export const getProduct = () => fetch('/api/data/index.json').then(body => body.json())

export const getProduct = () => axios({
  url: '/data/index.json',
  method: 'get'
})
