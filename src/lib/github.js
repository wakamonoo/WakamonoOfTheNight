export async function getTodaysContributions() {
  const today = new Date().toISOString().split("T")[0];

  const repos = process.env.GITHUB_REPOS?.split(",") || [];
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;
  let contributions = [];

  for (const repo of repos) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}/commits?author=${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        console.warn(`Skipping ${repo}: ${res.status} ${res.statusText}`);
        continue;
      }

      const data = await res.json();

      if (!Array.isArray(data)) continue;

      data
        .filter((commit) => commit.commit.author.date.startsWith(today))
        .forEach((commit) => {
          contributions.push(
            `Committed ${commit.commit.message} to ${repo} ${commit.html_url}`
          );
        });
    } catch (err) {
      console.error(`Fetch ${repo} failed:`, err);
    }
  }

  return contributions;
}
