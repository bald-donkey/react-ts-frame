import axios from '../service/request'

// export const getProduct = () => fetch('/api/data/index.json').then(body => body.json())

export const getProduct = () => axios({
    url: '/api/data/index.json',
    method: 'get'
})

export const getLawPush = () => axios({
    url: '/auth/api/android/law_push/init',
    method: 'post',
    data: {
        json: { "robot_id": "4ae6c1df65f25f0ec71f2684859e78f5" }
    }
})