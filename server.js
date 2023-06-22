const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(cors({ origin: 'https://portfolio.lucas-blanchard.com' }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/sendmail', (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.APP_PASSWORD
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Message de ${email} : ${subject}`,
    text: message
  };
  
  

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send({message: 'Erreur lors de l\'envoi du mail', error: error});
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({message: 'Mail envoyé avec succès', info: info});
    }
  });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
