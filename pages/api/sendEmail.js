import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  // Vérifiez que la méthode de la requête est POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extraire les données du corps de la requête
  const { name,surname, email, message } = req.body;

  // Vérifier que tous les champs nécessaires sont fournis
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const client = SibApiV3Sdk.ApiClient.instance;

  // Configuration de l'API avec votre clé
  const apiKey = client.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY; // Assurez-vous d'avoir la clé API dans `.env.local`

  const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

  // Créez l'email à envoyer
  const emailData = {
    sender: { name: 'Mon Portfolio Kamil NACHAT', email: 'kamn4348@gmail.com' }, // Remplacez par votre email de l'expéditeur
    to: [{ email: 'kamil.nachat@outlook.fr', name: 'Kamil Nachat' }], // Adresse du destinataire
    subject: `Demande via site web de ${name} ${surname}`,
    textContent: `Nom/Prénom: ${name} ${surname}\nEmail: ${email}\nMessage: ${message}`,
    htmlContent: `
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Envoi de l'email avec Brevo
    await emailApi.sendTransacEmail(emailData);
    res.status(200).json({ success: 'Email envoyé avec succès!' });
  } catch (error) {
    console.error('Brevo Error:', error);
    res.status(500).json({ error: "Erreur lors de l'envoie." });
  }
}
