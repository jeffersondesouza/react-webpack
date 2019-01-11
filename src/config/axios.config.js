import axios from 'axios';

const configure = () => axios.defaults.baseURL = API_BASE_URL;

export default configure();
