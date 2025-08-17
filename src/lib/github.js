export async function getTodaysContributions() {
  const today = new Date().toISOString().split("T")[0];
  const repos = process.env.GITHUB_REPOS?.split(",") || [];
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;
  let contributions = [];

  for (const repo of repos) {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}/commits?author=${username}&per_page=100&page=${page}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!res.ok) break;

      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) break;

      data
        .filter((commit) => commit.commit.author.date.startsWith(today))
        .forEach((commit) => {
          contributions.push(
            `Committed "${commit.commit.message}" to ${repo} (${commit.html_url})`
          );
        });

      if (data.length < 100) hasMore = false; // no more pages
      else page++;
    }
  }

  return contributions;
}
