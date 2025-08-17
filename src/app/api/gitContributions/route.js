import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date().toISOString().split("T")[0];
  const REPOS = process.env.GITHUB_REPOS?.split(",") || [];
  const USERNAME = process.env.GITHUB_USERNAME;
  const TOKEN = process.env.GITHUB_TOKEN;
  let contributions = [];

  for (const repo of REPOS) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${USERNAME}/${repo}/commits?author=${USERNAME}`,
        {
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );

      if (!res.ok) continue;

      const data = await res.json();
      if (!Array.isArray(data)) continue;

      data
        .filter((c) => c.commit.author.date.startsWith(today))
        .forEach((c) => {
          contributions.push(
            `Committed "${c.commit.message}" to ${repo} (${c.html_url})`
          );
        });
    } catch (err) {
      console.error(`Error fetching ${repo} commits:`, err);
    }
  }

  return NextResponse.json({ contributions });
}
