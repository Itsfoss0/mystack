import axios from 'axios';

const API_URL = 'http://localhost:1339/devs';

const getDevs = async () => {
  try {
    const resp = await axios.get(API_URL);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return [];
  }
};

export default getDevs;
