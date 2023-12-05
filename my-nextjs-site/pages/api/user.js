//pages/api/posts/user.js//
server.get('/api/user', (req, res) => {
    // Handle the logic here
    res.json({ username: 'Alice' });
  });
  
  // Converted to a Next.js API route in pages/api/user.js
  export default function handler(req, res) {
    // Handle the logic here
    res.status(200).json({ username: 'Alice' });
  }
  