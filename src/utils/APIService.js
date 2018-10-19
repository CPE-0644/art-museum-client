import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export class APIService {
  constructor() {}

  fetchUrl(url) {
    return axios.get(url).then(response => response.data);
  }

  fetchArtists() {
    const url = `${API_URL}/artists`;
    return this.fetchUrl(url);
  }

  fetchArtworks() {
    const url = `${API_URL}/artworks`;
    return this.fetchUrl(url);
  }

  fetchExhibitions() {
    const url = `${API_URL}/exhibitions`;
    return this.fetchUrl(url);
  }

  fetchArtworksByExhibitionId(id) {
    const url = `${API_URL}/exhibitions/${id}/shows`;
    return this.fetchUrl(url);
  }
}
