const Base_url = 'http://chst.vip:8081/data/index.json'
export const getProduct = () => fetch(Base_url).then(body => body.json())