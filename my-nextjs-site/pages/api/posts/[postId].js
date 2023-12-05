//api/posts/[postId].js//
export default function handler(req, res) {
    if (req.method === 'GET') {
      // Handle GET request
      res.status(200).json({ message: 'This is a GET request' });
    } else if (req.method === 'POST') {
      // Handle POST request
      res.status(200).json({ message: 'This is a POST request' });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  