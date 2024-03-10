const nodemailer = require("nodemailer");

const SendEmail = async (email, subject, text) => {

  console.log({ email, subject, text });

  // return 


  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: 'info@souravcodes.in',
        pass: 'Z2dJEa5Bwdd8'
      }
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });

    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error(error);
    console.error(`Error sending mail to error`, error);
    throw error;
  }
};

module.exports = SendEmail