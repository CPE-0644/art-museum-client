import axios from 'axios';

// const API_URL = 'https://art-museum-api.herokuapp.com/api';
import { API_URL } from './url';

export class APIService {
  constructor() {}

  fetchUrl(url) {
    return axios.get(url).then(response => response.data);
  }

  fetchArtists() {
    const url = `${API_URL}/artists`;
    return this.fetchUrl(url);
  }

  fetchArtistByArtworkId(id) {
    const url = `${API_URL}/artworks/${id}/artist`;
    return this.fetchUrl(url);
  }

  fetchArtworks() {
    const url = `${API_URL}/artworks`;
    return this.fetchUrl(url);
  }

  fetchArtworksByExhibitionId(id) {
    const url = `${API_URL}/exhibitions/${id}/shows`;
    return this.fetchUrl(url);
  }

  fetchArtworksByArtistId(id) {
    const url = `${API_URL}/artists/${id}/arts`;
    return this.fetchUrl(url);
  }

  fetchExhibitions() {
    const url = `${API_URL}/exhibitions`;
    return this.fetchUrl(url);
  }

  fetchCollections() {
    const url = `${API_URL}/collections`;
    return this.fetchUrl(url);
  }
}
