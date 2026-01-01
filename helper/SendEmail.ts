import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true,      
  maxConnections: 5,
  maxMessages: 100,
});


export const sendEmail = async (
    to: string,
    subject: string,
    html: string
  ) => {
    await transporter.sendMail({
      from: `"ProGrowing Forum" <no-reply@progrowing.com>`,
      to,
      subject,
      html,
    });
  };
  