const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// In-memory message store (replace with DB for production)
let messages = [];

// Get all messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Admin sends a message to all users
app.post('/api/messages', (req, res) => {
  const { text, from } = req.body;
  if (!text || !from) {
    return res.status(400).json({ error: 'Text and from are required' });
  }
  const msg = { text, from, date: new Date().toISOString() };
  messages.push(msg);
  res.status(201).json(msg);
});

const server = app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down message API server...');
  server.close(() => {
    console.log('Server stopped.');
    process.exit(0);
  });
});

app.post('/api/messages', (req, res, next) => {
  console.log(`[${new Date().toISOString()}] Admin sent message:`, req.body.text);
  next();
});
