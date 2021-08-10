const devBaseURL = '/api';
const proBaseURL = '/api';


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

// console.log("---+++", process.env.NODE_ENV);

export const TIMEOUT = 2000;