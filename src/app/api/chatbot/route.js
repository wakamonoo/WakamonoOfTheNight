import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { messages } = await request.json();

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
      const responseText = await response.text();
      return NextResponse.json(
        { error: `API error: ${responseText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
