import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, caseNumber } = req.body;

  if (!email || !caseNumber) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const kontaktLink = `https://elraad.no/kontakt-oss?case=${caseNumber}`;

    await transporter.sendMail({
      from: `"Elråd.no" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Ditt saksnummer: ${caseNumber}`,
      html: `
        <h2>Takk for at du kontaktet Elråd!</h2>
        <p>Ditt saksnummer er: <strong>${caseNumber}</strong></p>
        <p>Trenger du å gi mer info? Klikk her: <a href="${kontaktLink}">${kontaktLink}</a></p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
