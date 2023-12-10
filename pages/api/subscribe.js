// pages/api/subscribe.js
import axios from 'axios';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email is required and should be valid.' });
  }

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
    return res.status(500).json({ error: 'Server is not configured for Mailchimp.' });
  }

  const dataCenter = MAILCHIMP_API_KEY.split('-')[1];
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  try {
    const response = await axios.post(
      url,
      {
        email_address: email,
        status: 'subscribed', // You might want to use 'pending' to send a confirmation email
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`
        }
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({ error: `There was an error subscribing to the newsletter. Send this info to the server admin: ${response.status}` });
    }

    return res.status(200).json({ message: 'Success! 🎉 You are now subscribed to the newsletter.' });
  } catch (error) {
    return res.status(500).json({ error: error.response?.data || 'There was an error subscribing to the newsletter.' });
  }
};
