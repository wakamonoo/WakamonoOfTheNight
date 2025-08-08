// server.js (or index.js)

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const apikey = process.env.OPEN_ROUTER_API_KEY;

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apikey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-oss-20b',
        messages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
