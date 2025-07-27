import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { navn, telefon, adresse, postnummer, email } = req.body;

  try {
    // Opprett transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Gmail-konto som avsender
        pass: process.env.EMAIL_PASS // App-passordet fra Google
      }
    });

    // Send e-posten
    await transporter.sendMail({
      from: `"Elråd" <${process.env.EMAIL_USER}>`, // Avsender (SMTP-bruker)
      to: 'post@elraad.no', // ✅ Mottaker er alltid denne adressen
      replyTo: email, // Svar går til kundens e-post
      subject: 'Ny henvendelse fra kontaktskjema',
      html: `
        <h2>Ny henvendelse fra kontaktskjema</h2>
        <p><strong>Navn:</strong> ${navn}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Adresse:</strong> ${adresse}</p>
        <p><strong>Postnummer:</strong> ${postnummer}</p>
        <p><strong>E-post:</strong> ${email}</p>
      `
    });

    return res.status(200).json({ message: 'E-post sendt!' });
  } catch (error) {
    console.error('Feil ved sending av e-post:', error);
    return res.status(500).json({ message: 'Kunne ikke sende e-post' });
  }
}
