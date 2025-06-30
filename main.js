const auth = firebase.auth();

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      alert("Login successful!");
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}

function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      alert("Signup successful!");
    })
    .catch(error => {
      alert("Signup failed: " + error.message);
    });
}
