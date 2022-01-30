import axios from 'axios';
import mapResponse from '../map-response';

export default {

  ObtenerUsuarios: () => { 
    return mapResponse(axios.get('https://jsonplaceholder.typicode.com/users'));
  },
  ObtenerUnPost: () => { 
    return mapResponse(axios.post('https://jsonplaceholder.typicode.com/posts'));
  },


}