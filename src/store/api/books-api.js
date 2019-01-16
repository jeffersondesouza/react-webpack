import axios from 'axios';

const loadBooks = () => axios.get('/')
  .then(res => res.data.books);


export default {
  loadBooks,
}