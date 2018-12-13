function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') == 'true';
}

function isAdmin() {
  return localStorage.getItem('loggedInAs') == 'admin';
}

function signIn(user) {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userId', user.id);
  localStorage.setItem('userName', user.username);
  localStorage.setItem('loggedInAs', user.role);
}

function signOut() {
  localStorage.clear();
  // localStorage.removeItem('isLoggedIn');
  // localStorage.removeItem('loggedInAs');
  // localStorage.removeItem('userName');
  // localStorage.removeItem('userId');
  // localStorage.removeItem('userInterested');
}

export default { isLoggedIn, isAdmin, signIn, signOut };
