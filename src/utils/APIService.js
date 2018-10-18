import axios from 'axios';

const API_URL = 'http://localhost:3000/api/artists';

export class APIService {
  constructor() {}

  getArtists() {
    const url = `${API_URL}`;
    return axios.get(url).then(response => response.data);
  }
}
