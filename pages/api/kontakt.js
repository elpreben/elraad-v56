import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { navn, telefon, adresse, postnummer, email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Elråd" <${process.env.EMAIL_USER}>`,
      to: 'post@elraad.no',
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
