import axios from 'axios';

const API_URL = 'http://localhost:1339/api/v1/devs';

const getDevs = async () => {
  try {
    const resp = await axios.get(API_URL);
    console.log(resp.data.devs);
    return resp.data.devs;
  } catch (error) {
    return [];
  }
};

export default getDevs;
