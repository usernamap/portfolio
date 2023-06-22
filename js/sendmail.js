document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let email = document.getElementById('user_email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  // Vérifier si l'adresse e-mail est bien formée
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('form-messages').innerHTML = `<p style="color: red; margin-left: 2em">L'adresse e-mail n'est pas valide.</p>`;
    return;
  }

  // Vérifier que les champs obligatoires sont remplis
  if (!email || !subject || !message) {
    document.getElementById('form-messages').innerHTML = `<p style="color: red; margin-left: 2em">Tous les champs sont obligatoires.</p>`;
    return;
  }

  let mail = {
    email: email,
    subject: subject,
    message: message
  }

  // Afficher l'indicateur de chargement
  document.getElementById('loading').style.display = 'block';

  fetch('https://portfolio.lucas-blanchard.com/sendmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mail),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erreur réseau lors de la requête.');
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById('form-messages').innerHTML = `<p style="color: green; margin-left: 2em">${data.message}</p>`;
  })
  .catch((error) => {
    console.error('Error:', error);
    document.getElementById('form-messages').innerHTML = `<p style="color: red; margin-left: 2em">Erreur lors de l'envoi du mail.</p>`;
  })
  .finally(() => {
    // Cacher l'indicateur de chargement
    document.getElementById('loading').style.display = 'none';
  });
});