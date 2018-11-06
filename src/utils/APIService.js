import axios from 'axios';

import { API_URL } from './url';

// axios.defaults.withCredentials = true;
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

  fetchArtwork(id) {
    const url = `${API_URL}/artworks/${id}`;
    return this.fetchUrl(url);
  }

  fetchArtworksByArtistId(id) {
    const url = `${API_URL}/artists/${id}/artworks`;
    return this.fetchUrl(url);
  }

  fetchExhibitions() {
    const url = `${API_URL}/exhibitions`;
    return this.fetchUrl(url);
  }

  fetchArtworksByExhibitionId(id) {
    const url = `${API_URL}/exhibitions/${id}/artworks`;
    return this.fetchUrl(url);
  }

  fetchCollections() {
    const url = `${API_URL}/collections`;
    return this.fetchUrl(url);
  }

  fetchUsers() {
    const url = `${API_URL}/users`;
    return this.fetchUrl(url);
  }

  createUser(signUpForm) {
    const url = `${API_URL}/users`;
    return axios.post(url, {
      name: signUpForm.name,
      username: signUpForm.username,
      password: signUpForm.password,
      address: signUpForm.address,
      email: signUpForm.email,
      interested: signUpForm.interested,
      phone: signUpForm.phone,
      age: signUpForm.age
    });
  }

  authUser(signInForm) {
    const url = `${API_URL}/auth`;
    return axios.post(url, {
      username: signInForm.username,
      password: signInForm.password
    });
  }

  logOutUser() {
    const url = `${API_URL}/logout`;
    return axios.get(url);
  }

  updateArtwork(id, editedArtwork) {
    const url = `${API_URL}/artworks/${id}`;
    return axios.put(url, editedArtwork);
  }

  deleteArtwork(id) {
    const url = `${API_URL}/artworks/${id}`;
    return axios.delete(url);
  }

  fetchUserById(id) {
    const url = `${API_URL}/users/${id}`;
    return this.fetchUrl(url);
  }
}
