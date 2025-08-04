import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}