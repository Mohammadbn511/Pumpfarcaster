export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    name: "PumpFarcaster Frame",
    description: "Create a meme coin on Solana with one click.",
    image: "https://pumpfarcaster.vercel.app/coin.png"
  });
}
