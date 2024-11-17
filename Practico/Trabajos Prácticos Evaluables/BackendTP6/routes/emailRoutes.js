const express = require('express');
const router = express.Router();
const transporter = require('../config/mailConfig');

router.post('/send-email', async (req, res) => {
  to = "brardamariano12@gmail.com"
  subject = "Correooo"
  text = "Hi, my name is jeff"

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject,
      text,
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

module.exports = router;