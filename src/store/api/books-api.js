import axios from 'axios';

const loadBooks = () => axios.get('/')
  .then(res => res.data);


export default {
  loadBooks,
}