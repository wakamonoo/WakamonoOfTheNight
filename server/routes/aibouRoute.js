import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/aibou", async (req, res) => {
  try {
    const { messages } = req.body;
    const apikey = process.env.OPEN_ROUTER_API_KEY;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "z-ai/glm-4.5-air:free",
          messages: messages,
          max_tokens: 2048,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ error: `api errror: ${text}` });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("api error", err);
    res.status(500).json({ error: "internal error:", err });
  }
});

export default router;
