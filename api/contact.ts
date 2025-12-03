import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone_number, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Form Message",
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone_number}<br/>
        <strong>Subject:</strong> ${subject}<br/>
        <strong>Message:</strong><br/>
        ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Email failed to send" });
  }
}
