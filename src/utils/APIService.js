import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export class APIService {
  constructor() {}

  fetchArtists() {
    const url = `${API_URL}/artists`;
    return axios.get(url).then(response => response.data);
  }

  fetchArtworks() {
    const url = `${API_URL}/artworks`;
    return axios.get(url).then(response => response.data);
  }
}
