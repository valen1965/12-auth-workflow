const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'katheryn.hermiston70@ethereal.email',
      pass: 'TzYDxWKcSNYm19jJ2m',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter.sendMail({
    from: '"UDEMY PROJECTS 😄" <learcoding@gmail.com>',
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
