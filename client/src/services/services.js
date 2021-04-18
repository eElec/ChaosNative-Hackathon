import Axios from 'axios';

const server = 'http://localhost:8080/api';

export const getMeetings = ()=>{
  return Axios({
    method: 'GET',
    url: `${server}/getMeetings`
  })
}