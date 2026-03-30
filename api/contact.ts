import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone_number, subject, message } = req.body;

  // 1. Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing name, email, or message." });
  }

  // 2. Setup Transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 3. Send Email
    await transporter.sendMail({
      from: `"Saint Peter & Paul Web" <${process.env.EMAIL_USER}>`,
      to: "sppottawaweb@gmail.com", // Send to yourself
      replyTo: email, // This lets you click "Reply" to the sender
      subject: subject || `New Website Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #004a99;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Phone:</strong> ${phone_number || "Not provided"}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return res.status(500).json({ success: false, error: "Failed to send email." });
  }
}