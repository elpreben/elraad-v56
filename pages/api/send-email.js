import nodemailer from "nodemailer";
import { redis } from "../../utils/upstashClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, description } = req.body;

  if (!email || !description) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Hent nytt saksnummer fra Upstash
    const caseNumber = await redis.incr("caseCounter");

    // Lagre saken i Redis
    const newCase = {
      id: caseNumber.toString(),
      email,
      description,
      status: "Ny",
    };
    await redis.rpush("cases", JSON.stringify(newCase));

    // Konfigurer Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML-mal for e-posten
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #333;">Elråd - Sak ${caseNumber}</h2>
        <p><strong>Saksnummer:</strong> ${caseNumber}</p>
        <p><strong>Kunde:</strong> ${email}</p>
        <p><strong>Beskrivelse:</strong></p>
        <p>${description}</p>
        <hr />
        <p>Vi tar kontakt med deg dersom mer informasjon er nødvendig.</p>
      </div>
    `;

    // Send e-post til kunden
    await transporter.sendMail({
      from: `"Elråd" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Bekreftelse - Sak ${caseNumber}`,
      html: htmlContent,
    });

    return res.status(200).json({
      message: "E-post sendt og sak lagret",
      caseNumber,
    });
  } catch (error) {
    console.error("Feil ved sending av e-post:", error);
    return res.status(500).json({ error: "Kunne ikke sende e-post" });
  }
}
