const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.freesmtpservers.com",
  port: 25,
  secure: false,
  auth: {
    user: "CompartimentoPirata@gmail.com",
    pass: "Banana@1234",
  },
});
//8c320572d806f26ddc47c9da978bac22aaa899ad0234a43b1733b41a40bd9a05

module.exports = transporter;