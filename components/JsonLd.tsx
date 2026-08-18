export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jamzy",
    alternateName: "Jamai Fowobaje",
    jobTitle: "Web3 Technical Writer",
    description:
      "Technical writer specializing in whitepapers and protocol documentation for Web3 teams.",
    url: "https://jamzy-writes.vercel.app",
    sameAs: [
      "https://x.com/Only_1_Jamzy",
      "https://t.me/Only_1_Jamzy",
      "https://www.linkedin.com/in/jamai-fowobaje-1814b331a",
      "https://github.com/jamzy-codes",
    ],
    knowsAbout: [
      "Web3",
      "Blockchain",
      "Technical Writing",
      "Whitepapers",
      "Protocol Documentation",
      "Zero-Knowledge Proofs",
      "Tokenomics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
