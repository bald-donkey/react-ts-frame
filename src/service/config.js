const devBaseURL = '';
const proBaseURL = '';

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
// console.log("---+++", process.env.NODE_ENV);

export const TIMEOUT = 10000; // 配置请求时长