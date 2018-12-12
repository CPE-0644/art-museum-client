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

  fetchExhibition(id) {
    const url = `${API_URL}/exhibitions/${id}`;
    return this.fetchUrl(url);
  }

  fetchExhibitionUsers(id) {
    const url = `${API_URL}/exhibitions/${id}/users`;
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

  fetchCollectionById(id) {
    const url = `${API_URL}/collections/${id}`;
    return this.fetchUrl(url);
  }

  fetchUsers() {
    const url = `${API_URL}/users`;
    return this.fetchUrl(url);
  }

  fetchUserById(id) {
    const url = `${API_URL}/users/${id}`;
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

  createArtwork(newArtwork) {
    const url = `${API_URL}/artworks`;
    return axios.post(url, newArtwork);
  }

  createSculpture(newSculpture) {
    const url = `${API_URL}/artworks/sculpture`;
    return axios.post(url, newSculpture);
  }

  createStatue(newStatue) {
    const url = `${API_URL}/artworks/statue`;
    return axios.post(url, newStatue);
  }

  createPainting(newPainting) {
    const url = `${API_URL}/artworks/painting`;
    return axios.post(url, newPainting);
  }

  createOtherType(newOtherArtwork) {
    const url = `${API_URL}/artworks/other`;
    return axios.post(url, newOtherArtwork);
  }

  createArtist(newArtist) {
    const url = `${API_URL}/artists`;
    return axios.post(url, newArtist);
  }

  createExhibition(newExhibition) {
    const url = `${API_URL}/exhibitions`;
    return axios.post(url, newExhibition);
  }

  postUserJoinExhibition(exhibitionId) {
    const url = `${API_URL}/exhibitions/${exhibitionId}/users`;
    const museum_goer_id = localStorage.getItem('userId');
    return axios.post(url, { museum_goer_id: museum_goer_id });
  }

  updateArtwork(id, editedArtwork) {
    const url = `${API_URL}/artworks/${id}`;
    return axios.put(url, editedArtwork);
  }

  updateExhibition(id, editExhibition) {
    const url = `${API_URL}/exhibitions/${id}`;
    return axios.put(url, editExhibition);
  }

  deleteArtwork(id) {
    const url = `${API_URL}/artworks/${id}`;
    return axios.delete(url);
  }

  deleteArtist(id) {
    const url = `${API_URL}/artists/${id}`;
    return axios.delete(url);
  }

  deleteExhibition(id) {
    const url = `${API_URL}/exhibitions/${id}`;
    return axios.delete(url);
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
}
