const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "messagealexismatamoros@gmail.com",
    pass: "bitb nzff lcxn qhmn",
  },
});

async function sendMessage() {
  try {
    const info = await transporter.sendMail({
      from: "messagealexismatamoros@gmail.com",
      to: "a.matamoros@goit.global, alexismatamoros1996777@gmail.com",
      subject: "Este es un correo de prueba",
      text: "Este es el texto del correo",
      html: "<h1>Esta es la plantilla</h1>",
    });
    console.log(info);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
