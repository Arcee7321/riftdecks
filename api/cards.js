export default async function handler(req, res) {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;

  if (!RIOT_API_KEY) {
    return res.status(500).json({ error: "Missing Riot API key" });
  }

  const REGION = "europe"; 
  const url = `https://${REGION}.api.riotgames.com/riftbound/content/v1/cards`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Riot-Token": RIOT_API_KEY
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch cards" });
    }

    const data = await response.json();

    // optional simple caching
    res.setHeader("Cache-Control", "public, max-age=3600");
    
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.toString() });
  }
}
