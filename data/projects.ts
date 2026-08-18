export interface DocSection {
  id: string;
  title: string;
  page: number;
  children?: DocSection[];
}

export interface ReaderSection {
  id: string;
  heading: string;
  body: string;
}
export interface Diagram {
  src: string;
  caption: string;
  interactive?: boolean;
  afterSection?: string;
}
export interface Project {
  slug: string;
  order: number;
  name: string;
  tag: string;
  logo: string;
  pageCount: number;
  diagramCount?: number;
  positioning: string;
  bullets: string[];
  gap: string;
  excerpt: string;
  excerptAttribution?: string;
  diagrams: Diagram[];
  pdfPath: string;
  downloadName: string;
  readerSections: ReaderSection[];
  toc?: DocSection[];
}
export const projects: Project[] = [
  {
    slug: "streamdatax",
    order: 1,
    name: "StreamDataX",
    diagramCount: 11,
    tag: "Whitepaper \u00b7 Diagrams",
    logo: "/logos/streamdatax.jpg",
    pageCount: 25,
    positioning:
      "A decentralized data marketplace on Polygon, explained from the zero-knowledge privacy model down to the token's demand drivers.",
    bullets: [
      "Built through four versions against direct founder feedback",
      "Eleven custom diagrams translating architecture into pictures",
      "Full risk table naming what could break before an investor does",
    ],
    gap: "A data marketplace whitepaper has to convince three different readers at once: the investor checking if the token model holds up, the builder checking if the architecture is real, and the skeptic checking if zero-knowledge proofs are substance or buzzword. The document had to earn all three, not just the easiest one.",
    excerpt:
      "A Zero-Knowledge Proof lets one party prove a statement is true to another party \u2014 without revealing any underlying information beyond the fact that the statement is true. You can prove your credit score is above 700 without showing your bank statements.",
    diagrams: [
      {
        src: "/diagrams/sdx-value-flow.jpg",
        caption: "Data value flow — Web2 vs. StreamDataX",
        interactive: true,
        afterSection: "why-streamdatax",
      },
      {
        src: "/diagrams/sdx-zkp.jpg",
        caption: "Zero-knowledge proof interaction",
        interactive: true,
        afterSection: "data-flow",
      },
    ],
    pdfPath: "/pdfs/StreamDataX.pdf",
    downloadName: "StreamDataX Whitepaper",
    readerSections: [
      {
        id: "streamdatax-overview",
        heading: "StreamDataX",
        body: "STREAMDATAX PROTOCOL Own, Stream & Monetize Your Data A technical and economic overview of the StreamDataX decentralized data marketplace \u2014 a blockchain- native protocol enabling individuals and organizations to tokenize, stream, and trade data as sovereign digital assets on Polygon. \u26a0 Note: This document is an independent portfolio whitepaper authored by @Only_1_Jamzy. It does not constitute financial or investment advice, nor a binding offer of any kind. All protocol specifications are based on publicly available information and reasonable technical extrapolation. Readers should conduct independent due diligence. Table of Contents 01 Abstract 02 The Problem: A Data Economy Built Against You 03 Market Context & Competitive Landscape 04 The StreamDataX Solution 05 Technical Architecture 06 Privacy & Security Model 07 Token Economics \u2014 $SDXT 08 Marketplace Mechanics & Revenue Model 09 Risks, Challenges & How StreamDataX Addresses Them 10 Roadmap 11 Use Cases 12 Conclusion",
      },
      {
        id: "why-streamdatax",
        heading: "01. Abstract",
        body: "Every day, you generate thousands of data points. Your location, your purchases, your health metrics, your browsing habits. All of it flows \u2014 invisibly \u2014 into systems controlled by a handful of corporations that monetize it without your knowledge or consent. You don't get paid. You barely even get told. StreamDataX is built to change that equation. It is a decentralized data marketplace on the Polygon blockchain, where data is treated as a digital asset you own, not a resource you donate. Using off-chain storage (IPFS and Filecoin), Zero-Knowledge Proof privacy, smart contract enforcement, and ERC-1155 tokenization, StreamDataX gives individuals and organizations the infrastructure to sell, stream, and license their data on their own terms \u2014 with payments settling instantly in $SDXT, the protocol's native token. This whitepaper covers the technical architecture, token economics, marketplace mechanics, competitive positioning, and the honest challenges the protocol must navigate to succeed. \"You create the value. StreamDataX makes sure you capture it.\" \u2014 Yassir, Founder of StreamDataX",
      },
      {
        id: "the-problem-a-data-economy-built-against-you",
        heading: "02. The Problem: A Data Economy Built Against You",
        body: "The global data broker market alone is valued at over $300 billion and projected to reach $545 billion by 2031 (Source: Verified Market Research, 2023). The companies driving that number \u2014 Google, Meta, data brokers like Acxiom and Experian \u2014 built their entire businesses on data you produced for free. That's not a bug. It was the design. Figure 2-1. Web2 vs. StreamDataX: Where value flows and who captures it. 2.1 How the Lock-In Works The data monopoly stays in place through architecture. Three mechanisms keep it locked: \u2022 Terms of Service \u2014 Dense, unreadable legal agreements. One click and you've signed over your data rights indefinitely. \u2022 Centralized Servers \u2014 Your data lives on their infrastructure. You can't do anything economically useful with it. \u2022 No Marketplace \u2014 The deliberate absence of a neutral data marketplace keeps monetization power at the top. 2.2 The Numbers That Make This Real Metric Value Global data broker market (2023) $300B+ | Growing to $545B by 2031 Global digital economy (2028 est.) $16 trillion, ~17% of global GDP Personal data revenue to individuals $0 for the vast majority of users AI training data demand growth 10x increase projected by 2027 (McKinsey, 2023) Data generated globally per day 2.5 quintillion bytes \u2014 mostly uncaptured value",
      },
      {
        id: "market-context-competitive-landscape",
        heading: "03. Market Context & Competitive Landscape",
        body: "StreamDataX is not the first project to notice this problem. Understanding why earlier attempts succeeded or fell short is critical \u2014 because history in this space is instructive. 3.1 The Competitive Field Protocol Core Focus Strength Limitation Ocean Protocol Data tokenization + compute-to-data Strong enterprise partnerships Complex UX, limited retail adoption Streamr (DATA) Real-time P2P data streaming Proven streaming infrastructure Pivoted toward video; thin marketplace The Graph (GRT) Blockchain data indexing Dominant in on-chain data queries Doesn't address personal/private data DIMO Vehicle data monetization Strong niche product- market fit Narrow vertical, not general-purpose Fetch.ai AI + autonomous agents on data Strong AI-native positioning Complex for non-technical users StreamDataX Full-stack personal + enterprise marketplace ZK privacy + IPFS + AI predictor + staking Early stage, unproven at scale Figure 3-1. Competitive positioning map: Data Scope vs. User Accessibility. StreamDataX targets the mass adoption zone (top- right). 3.3 What StreamDataX Does Differently Ocean Protocol pioneered compute-to-data. StreamDataX takes a complementary but distinct approach: broader participant base (individuals, not just enterprises), an AI-driven predictor layer, and a tiered staking model that rewards validators for verifying data quality. The honest answer: StreamDataX has not yet proven this at scale. But its architecture makes different bets \u2014 and those bets are worth examining.",
      },
      {
        id: "the-streamdatax-solution",
        heading: "04. The StreamDataX Solution",
        body: 'StreamDataX builds the infrastructure layer that the data economy has been missing: a marketplace where data ownership is cryptographically enforced, payments are instant, and anyone \u2014 from a Singaporean farmer to a Lagos developer \u2014 can participate as a buyer or seller. The protocol answers five questions that previous attempts left unanswered: Question Answer Who owns the data? The generator \u2014 enforced by smart contracts, not terms of service. Where is it stored? Off-chain on IPFS/Filecoin. Only metadata and access records go on-chain. How is privacy protected? Zero-Knowledge Proofs \u2014 buyers verify data properties without seeing raw content. Who verifies quality? A tiered validator network. Staked $SDXT creates economic skin-in- the-game. How does value flow? Directly from buyer to seller in $SDXT, via smart contract. Minimizing intermediary cut. "NFTs made art ownable. DeFi made money programmable. StreamDataX tokenizes data." \u2014 The third leg of the Web3 ownership revolution.',
      },
      {
        id: "data-flow",
        heading: "05. Technical Architecture",
        body: "The architecture of StreamDataX is best understood as five distinct layers that work in sequence. A non- technical reader can follow the logic; a technical reader will find the implementation choices deliberate and defensible. Figure 5-1. StreamDataX Layered Architecture Stack. Five distinct protocol layers from storage through to the DataX blockchain. 5.1 Layer 1 \u2014 Storage: IPFS + Filecoin (Off-Chain) Raw datasets cannot be stored on a blockchain. A single genomic dataset can be hundreds of gigabytes. StreamDataX solves this the correct way: \u2022 Raw data lives on IPFS (InterPlanetary File System) \u2014 files addressed by their content hash, not location. Any modification produces a different hash, making tampering detectable. \u2022 Filecoin provides the economic incentive layer for IPFS \u2014 storage providers are paid to maintain data availability, replacing trust in a single cloud host with cryptographic proof of storage. \u2022 On-chain, only the metadata (content hash, ownership record, access permissions, licensing terms) is stored on the DataX blockchain. Think of it this way: the deed to your house is in a public registry. The house itself is not. StreamDataX stores the deed on-chain. Your data stays in your control off-chain. 5.2 Layer 2 \u2014 Streaming: Real-Time Data Feeds StreamDataX's streaming protocol handles continuous data through a publish-subscribe architecture: \u2022 Sellers (publishers) broadcast live data feeds \u2014 wearables, IoT devices, APIs, app telemetry. \u2022 Buyers (subscribers) pay recurring $SDXT fees. If the stream stops delivering, payment stops. \u2022 Usage is tracked on-chain via stream event logs \u2014 a tamper-proof record both parties can audit. Analogy: Think Spotify for data. Buyers subscribe and pay as long as they're streaming. Sellers earn continuously, not just on one-time sales. Figure 5-2. End-to-End Transaction Flow: Seller upload through smart contract validation to buyer access and instant $SDXT settlement. 5.3 Layer 3 \u2014 Smart Contracts: The Enforcement Engine Every transaction is governed by code, not legal agreements. Smart contracts auto-enforce: \u2022 Access duration \u2014 e.g., 30-day access window that auto-expires \u2022 Usage limits \u2014 read-only, no redistribution, single-use, etc. \u2022 Payment terms \u2014 instant settlement upon delivery confirmation \u2022 Dispute triggers \u2014 auto-pause if delivery metrics fall below threshold 'Smart contracts eliminate all disputes' is a misconception. Disputes over data quality still occur. \u26a0 StreamDataX addresses this through staked validators and on-chain arbitration (see Section 5.4). 5.4 Layer 4 \u2014 Data Validation: The Staked Validator Network Fake or low-quality datasets are one of the hardest unsolved problems in decentralized data markets. StreamDataX addresses this with a three-tier validator system backed by staked $SDXT: Figure 5-3. Validator Tier Pyramid: Three-tier staking structure with slashing mechanism for fraudulent approvals. Tier Stake Required Validation Rights Rewards Basic 1,000 $SDXT Flag suspicious listings; vote on simple disputes Base staking APY Advanced 10,000 $SDXT Verify dataset schemas and sample quality Enhanced APY + governance weight Premium 100,000 $SDXT Full audit rights; final arbitration on major disputes Highest APY + premium fee share Validators who approve fraudulent datasets lose a portion of their staked $SDXT (slashing). This creates economic skin-in-the-game: honest validation is the profitable choice. 5.5 Layer 5 \u2014 The DataX Blockchain StreamDataX is implementing its own purpose-built blockchain for data transaction records. It handles immutable metadata storage, ownership records, smart contract execution, and APIs/SDKs for developers. During early phases, the protocol operates on Polygon Mainnet. The DataX chain is a later- stage milestone contingent on proven demand. 5.6 AI Predictor Model Beyond raw data exchange, StreamDataX integrates an AI-driven predictor layer. Sellers can offer analyzed outputs: a farmer sells crop yield predictions, a financial analyst sells pattern-detected signals. This moves StreamDataX from a data storage platform toward a data intelligence marketplace.",
      },
      {
        id: "privacy-security-model",
        heading: "06. Privacy & Security Model",
        body: "Privacy in data marketplaces is where most projects fail. StreamDataX uses Zero-Knowledge Proofs as its core privacy primitive. 6.1 Zero-Knowledge Proofs \u2014 Plain English A Zero-Knowledge Proof (ZKP) lets one party prove a statement is true to another party \u2014 without revealing any underlying information beyond the fact that the statement is true. \"You can prove your credit score is above 700 without showing your bank statements.\" \u2014 That's the power of ZKPs applied to data. In StreamDataX's context, ZKPs allow a buyer to verify properties of a dataset \u2014 'this health dataset contains 10,000 records from adults aged 30-50' \u2014 without the seller exposing the actual records. Figure 6-1. ZKP Interaction Diagram: How cryptographic proofs verify data properties without exposing raw content. 6.2 Encryption Architecture Layer Implementation Data at rest (IPFS) AES-256 encryption. Only the owner holds the decryption key. Data in transit TLS 1.3 for all stream transmissions. Buyer access Time-scoped, encrypted access tokens \u2014 not raw keys. ZK proof generation zk-SNARKs (Groth16 protocol) applied to dataset content identifiers. Anonymization PII stripped at protocol level before any dataset reaches the marketplace. 6.3 Regulatory Considerations \u2022 GDPR (EU) \u2014 Data minimization enforced via smart contract licensing terms. Users retain revocation rights. \u2022 HIPAA (US Healthcare) \u2014 Health data streams include mandatory anonymization. Buyers receive de-identified aggregate outputs. \u2022 CCPA (California) \u2014 Usage restrictions set in data wallet settings, enforced at the smart contract layer. Regulatory compliance in data markets is evolving rapidly. Legal review in target markets will be required \u26a0 before enterprise-scale onboarding, particularly in healthcare and financial data.",
      },
      {
        id: "token-economics-sdxt",
        heading: "07. Token Economics \u2014 $SDXT",
        body: "$SDXT is the native utility, staking, and governance token of the StreamDataX protocol. Unlike speculative tokens, $SDXT derives its demand from real economic activity \u2014 every dataset transaction, every stream subscription, every validation act flows through $SDXT. 7.1 Token Utility \u2014 Why $SDXT Must Be Used Figure 7-1. $SDXT Token Utility Flow: Six demand drivers creating a circular, self-reinforcing token economy. Use Case Description Marketplace transactions All data purchases and stream subscriptions denominated in $SDXT. Dataset minting $SDXT required to tokenize a dataset as an ERC-1155 asset. Validator staking Network validators must stake $SDXT across three tiers. Governance voting Token holders vote on protocol parameters, fee structures, and treasury. Use Case Description Premium data access Certain high-value data categories require $SDXT staking. Protocol fees ~2% of each transaction collected in $SDXT, directed to treasury/stakers. 7.2 Token Distribution & Vesting Figure 7-2. $SDXT Token Distribution (pie) and Vesting Schedule (bars). Total supply: 2 billion tokens. Allocation Amount % Supply Vesting Schedule Presale \u2014 Public 80M 4% 15% at TGE + 12-month linear vest Presale \u2014 Private 80M 4% 10% at TGE + 18-month linear vest Team & Advisors 400M 20% 12-month cliff + 36-month linear vest Treasury & Development 640M 32% DAO multisig, milestone-gated Ecosystem & Community 600M 30% Staking rewards, grants, incentives Liquidity & Exchanges 200M 10% 2-year lock for price stability TOTAL 2,000M 100% \u2014 7.3 Controlled Float at Launch Only 60 million $SDXT \u2014 3% of total supply \u2014 enters circulation at TGE. This controlled initial float stabilizes early market dynamics and prevents the immediate sell pressure that has collapsed token value in comparable projects. 7.4 Protocol Revenue Model Revenue Stream Details Marketplace transaction fee ~2% on every data purchase, split between treasury and stakers. Stream subscription fee ~1% of ongoing subscription revenue routed to the protocol. Infrastructure usage fees Third-party dApps built on the DataX blockchain pay API/SDK usage fees.",
      },
      {
        id: "marketplace-mechanics-revenue-model",
        heading: "08. Marketplace Mechanics & Revenue Model",
        body: "The StreamDataX marketplace is permissionless \u2014 anyone can list, anyone can buy \u2014 and supports multiple pricing models. 8.1 Pricing Models Supported Model How It Works Fixed Price Seller sets a one-time $SDXT price. Buyer pays, contract executes, access granted. Subscription/Streaming Buyer pays recurring $SDXT per time period for continuous data feeds. Auction High-demand datasets listed for time-limited auctions, proceeds to seller. Tiered Access Same dataset at different price points \u2014 raw data vs. processed insights vs. full API. 8.2 How a Transaction Works \u2014 Step by Step Every transaction follows a deterministic, smart-contract-governed flow from upload to settlement: \u2022 Step 1: Seller uploads dataset to IPFS. A content hash (unique fingerprint) is generated. \u2022 Step 2: Seller mints the dataset as an ERC-1155 token on-chain. This registers ownership. \u2022 Step 3: Listing goes live on the marketplace with price, category, and ZK-verified metadata. \u2022 Step 4: Buyer browses, finds the listing, pays in $SDXT. \u2022 Step 5: Smart contract verifies payment, generates a time-scoped access token. \u2022 Step 6: Buyer uses the access token to decrypt and retrieve the dataset from IPFS. \u2022 Step 7: Protocol fee is deducted, remainder settles to seller's wallet. Instantly. 8.3 The Marketplace Flywheel Figure 8-1. StreamDataX Marketplace Flywheel: Network effects that compound as participation grows. 8.4 Discovery & Anti-Spam Open marketplaces attract spam. StreamDataX addresses this economically (requiring $SDXT to mint a listing makes spam costly) and technically (validators flag and remove fraudulent datasets, with staked collateral at risk).",
      },
      {
        id: "risks-challenges-how-streamdatax-addresses-them",
        heading: "09. Risks, Challenges & How StreamDataX Addresses Them",
        body: "A whitepaper that only presents upside is a marketing brochure. The following risks are real, material, and deserve honest treatment. Figure 9-1. Risk Assessment Matrix: Severity vs. Likelihood with mitigation overlays. Risk Why It Matters StreamDataX's Approach Two-sided marketplace cold start Neither buyers nor sellers join without the other. Ecosystem fund (600M $SDXT) provides seller incentives. AI company partnerships provide early buyer demand. Data quality and fraud Fake datasets destroy marketplace trust quickly. Tiered validator staking with slashing creates economic disincentive for fraud. Regulatory uncertainty Data laws vary by jurisdiction. A single enforcement action can ground operations. Privacy-by-design architecture (ZKPs, anonymization) and modular compliance layers. Competing against Big Tech Google and Meta can replicate any feature with more capital. Decentralization is the moat \u2014 no single entity can shut down the protocol. Token price volatility If $SDXT collapses, data becomes effectively free or prohibitively expensive. Protocol can support USDC-denominated pricing via future governance upgrade. DataX blockchain risk Building a custom blockchain is expensive and technically complex. Protocol launches on Polygon first. DataX chain is a later milestone \u2014 not a dependency.",
      },
      {
        id: "roadmap",
        heading: "10. Roadmap",
        body: "StreamDataX executes in five phases, each gated by verifiable milestones \u2014 not arbitrary timeline targets. Figure 10-1. StreamDataX Protocol Roadmap: Q3 2025 through Full Decentralization in 2027+. Q3\u2013Q4 2025 \u2014 Foundation & Presale \u2022 $SDXT presale launch (public + private rounds) \u2022 Community onboarding \u2014 Discord, Telegram, whitelist campaign \u2022 Cross-chain bridge development begins \u2022 First 500 early-adopter data sellers onboarded \u2022 Milestone: $250K+ presale raised (in progress per public reports) Q1 2026 \u2014 Testnet & Developer Access \u2022 Data Wallet beta on Polygon testnet \u2022 Streaming protocol testnet deployment \u2022 Developer SDK + API documentation released \u2022 Bug bounty program opens \u2022 First third-party smart contract audit published Q2 2026 \u2014 Mainnet Launch \u2022 Full mainnet launch on Polygon \u2022 Marketplace goes live \u2014 ERC-1155 minting enabled \u2022 $SDXT TGE and first exchange listings \u2022 Validator staking system activated \u2022 Milestone: 5,000 active data sellers, 100+ verified datasets Q3\u2013Q4 2026 \u2014 Enterprise & AI Partnerships \u2022 AI lab data licensing partnerships announced \u2022 Healthcare and agricultural data verticals onboarded \u2022 Premium marketplace tier with tiered pricing \u2022 DAO governance activation \u2014 first community votes \u2022 Regulatory compliance framework for EU/US markets 2027+ \u2014 Full Decentralization & DataX Chain \u2022 DataX blockchain mainnet (migration from Polygon) \u2022 Advanced AI predictor models integrated into marketplace \u2022 Cross-chain data bridge (Ethereum, Arbitrum, Solana) \u2022 Global data economy \u2014 target 100,000+ active participants \u2022 Full DAO governance with treasury managed by token holders",
      },
      {
        id: "use-cases",
        heading: "11. Use Cases",
        body: "These are not hypothetical scenarios \u2014 they represent real market demand that StreamDataX's architecture is specifically built to serve. Individual Data Owners A freelance developer earns $SDXT by streaming anonymized app usage data to a UX firm. A fitness enthusiast licenses biometric data to a nutrition study. A Lagos commuter sells mobility patterns to a city planning consortium. The protocol handles payments, access, and privacy enforcement automatically. AI & Machine Learning Companies AI labs need massive, diverse, high-quality training datasets. Today they rely on scraped, often unauthorized data \u2014 creating legal risk and quality problems. StreamDataX provides a legal, consented, on-chain source with clear provenance. Agriculture & Climate Data A farmer in Singapore sells crop yield sensor data to a climate research consortium in Europe. Satellite imagery owners license feeds to precision agriculture companies \u2014 a vertical StreamDataX has explicitly targeted. Healthcare & Biotech Anonymized patient cohort data is among the most valuable datasets globally. StreamDataX enables healthcare providers to monetize de-identified patient datasets for research, with HIPAA-compliant anonymization at the protocol level. IoT & Industrial Sensor Data Factories, smart buildings, and logistics networks generate continuous sensor data with real market value. StreamDataX's streaming protocol handles real-time, metered, verifiable data sales from physical infrastructure at scale.",
      },
      {
        id: "conclusion",
        heading: "12. Conclusion",
        body: 'The data economy is broken by design. Not by accident. Every architectural decision \u2014 from unreadable Terms of Service to centralized servers to the deliberate absence of a personal data marketplace \u2014 was made to extract maximum value from individuals while returning nothing. StreamDataX is building the alternative that wasn\'t supposed to exist. A decentralized marketplace where data ownership is cryptographically enforced. Where privacy is technically implemented, not just promised. Where smart contracts replace lawyers and payments settle in seconds. The technical challenges are real. The regulatory landscape is evolving. The cold-start challenge of a two- sided marketplace is hard. StreamDataX does not pretend otherwise. What it offers is a technically grounded architecture, a token model built around real utility, and a roadmap that prioritizes proven infrastructure over inflated timelines. "If your data is a goldmine \u2014 StreamDataX makes sure you hold the deed." \u2014 Own your data. Stream your data. Get paid for your data. Whitepaper v2.0 | References & Sources \u2022 Verified Market Research (2023). Data Broker Market Size & Forecast. verifiedmarketresearch.com \u2022 McKinsey Global Institute (2023). The state of AI in 2023. mckinsey.com \u2022 Coinpedia (Aug 2025). StreamDataX: Unlocking Data Ownership, Trust, and Value. coinpedia.org \u2022 Streamr Network (2024). DATA token and Streamr 1.0. streamr.network \u2022 Ocean Protocol Documentation (2024). Compute-to-Data Architecture. docs.oceanprotocol.com \u2022 IEEE Xplore (2024). Patient-Centric Blockchain Model using IPFS and ZKP. ieeexplore.ieee.org \u2022 MDPI Electronics (2024). Secure Processing and Distribution of Data via Private IPFS using zk- SNARKs. \u2022 Towson University StarTUp Accelerator (2024). Program Overview. towson.edu/startup',
      },
    ],
    toc: [
      { id: "abstract", title: "01. Abstract", page: 3 },
      {
        id: "the-problem",
        title: "02. The Problem: A Data Economy Built Against You",
        page: 3,
        children: [
          {
            id: "the-lock-in-mechanisms",
            title: "The Lock-In Mechanisms",
            page: 3,
          },
          {
            id: "key-data-economy-metrics",
            title: "Key Data Economy Metrics",
            page: 3,
          },
        ],
      },
      {
        id: "market-context",
        title: "03. Market Context & Competitive Landscape",
        page: 4,
        children: [
          {
            id: "the-competitive-field",
            title: "The Competitive Field",
            page: 4,
          },
          {
            id: "what-streamdatax-does-differently",
            title: "What StreamDataX Does Differently",
            page: 5,
          },
        ],
      },
      {
        id: "the-streamdatax-solution",
        title: "04. The StreamDataX Solution",
        page: 6,
      },
      {
        id: "technical-architecture",
        title: "05. Technical Architecture",
        page: 7,
        children: [
          {
            id: "layer-1-storage",
            title: "Layer 1 \u2014 Storage: IPFS + Filecoin",
            page: 7,
          },
          {
            id: "layer-2-streaming",
            title: "Layer 2 \u2014 Streaming: Real-Time Data Feeds",
            page: 8,
          },
          {
            id: "layer-3-smart-contracts",
            title: "Layer 3 \u2014 Smart Contracts",
            page: 8,
          },
          {
            id: "layer-4-data-validation",
            title: "Layer 4 \u2014 Data Validation",
            page: 9,
          },
          {
            id: "layer-5-datax-blockchain",
            title: "Layer 5 \u2014 The DataX Blockchain",
            page: 9,
          },
          { id: "ai-predictor-model", title: "AI Predictor Model", page: 10 },
        ],
      },
      {
        id: "privacy-security-model",
        title: "06. Privacy & Security Model",
        page: 11,
        children: [
          {
            id: "zero-knowledge-proofs",
            title: "Zero-Knowledge Proofs \u2014 Plain English",
            page: 11,
          },
          {
            id: "encryption-architecture",
            title: "Encryption Architecture",
            page: 12,
          },
          {
            id: "regulatory-considerations",
            title: "Regulatory Considerations",
            page: 12,
          },
        ],
      },
      {
        id: "token-economics",
        title: "07. Token Economics \u2014 $SDXT",
        page: 13,
        children: [
          {
            id: "token-utility",
            title: "Token Utility \u2014 Why $SDXT Must Be Used",
            page: 13,
          },
          { id: "token-distribution", title: "Token Distribution", page: 14 },
          {
            id: "controlled-float",
            title: "Controlled Float at Launch",
            page: 15,
          },
          {
            id: "protocol-revenue-model",
            title: "Protocol Revenue Model",
            page: 15,
          },
        ],
      },
      {
        id: "marketplace-mechanics",
        title: "08. Marketplace Mechanics & Revenue Model",
        page: 17,
        children: [
          { id: "pricing-models", title: "Pricing Models Supported", page: 17 },
          {
            id: "transaction-flow",
            title: "How a Transaction Works",
            page: 17,
          },
          {
            id: "marketplace-flywheel",
            title: "The Marketplace Flywheel",
            page: 18,
          },
          {
            id: "discovery-anti-spam",
            title: "Discovery & Anti-Spam",
            page: 18,
          },
        ],
      },
      {
        id: "risks-challenges",
        title: "09. Risks, Challenges & How StreamDataX Addresses Them",
        page: 18,
      },
      { id: "roadmap", title: "10. Roadmap", page: 20 },
      { id: "use-cases", title: "11. Use Cases", page: 21 },
      { id: "team-governance", title: "12. Team & Governance", page: 22 },
      { id: "conclusion", title: "13. Conclusion", page: 24 },
      { id: "references", title: "References & Sources", page: 25 },
    ],
  },
  {
    slug: "imo",
    order: 2,
    name: "IMO Protocol",
    diagramCount: 6,
    tag: "Whitepaper \u00b7 Diagrams",
    logo: "/logos/imo.png",
    pageCount: 27,
    positioning:
      "ZK credential verification for African education, built investor-ready from the problem statement through tokenomics.",
    bullets: [
      "Five root failures named before any solution is proposed",
      "Plain-language translations of ZK identity and decentralized storage",
      "Full tokenomics: distribution, emission schedule, treasury milestone gates",
    ],
    gap: "v1 had the mechanics but skipped what a seed investor checks first: no team section, no FDV scenarios, no answer to why hold this past the first pump. v2 closed every one of those gaps.",
    excerpt:
      "Your credentials are yours, minted as soulbound NFTs. Your identity is private, proven with Zero-Knowledge Proofs. Your records are permanent, stored with on-chain existence proofs.",
    excerptAttribution: "Founder, Imo Protocol",
    diagrams: [
      {
        src: "/diagrams/imo-architecture.jpg",
        caption:
          "Protocol stack — access, intelligence, identity, storage, trust layers",
        interactive: true,
        afterSection: "the-solution",
      },
      {
        src: "/diagrams/imo-emission.jpg",
        caption: "IMO token emission schedule — decaying halving model",
        interactive: true,
        afterSection: "token-economics",
      },
    ],
    pdfPath: "/pdfs/IMO.pdf",
    downloadName: "IMO Whitepaper",
    readerSections: [
      {
        id: "imo-overview",
        heading: "IMO Protocol",
        body: "IMO Verified Knowledge on Chain A Decentralised Education Protocol for Africa Token: IMO \u00b7 Network: Ethereum / 0G Labs \u00b7 Identity: ZK-SNARKs Whitepaper v2.0 \u00b7 May 2025 \u00b7 imo.africa Disclaimer This document is for informational purposes only. It does not constitute financial advice, investment advice, or a solicitation to purchase securities or tokens. The IMO token described in this whitepaper is a utility token designed to power the Imo platform ecosystem. Participation in any token offering carries risk. Readers should conduct their own research and consult qualified advisors before making any financial decisions. The Imo team makes no representations or warranties regarding the accuracy of projections or forward-looking statements contained in this document. Abstract Imo is a decentralised education protocol built on Ethereum and 0G Labs. It makes academic credentials verifiable, portable, and economically meaningful for students, educators, and institutions across Africa. The protocol combines on-chain credential issuance through soulbound NFTs, Zero-Knowledge Proof identity verification, decentralised file storage, and a culturally grounded AI layer with native support for Yoruba, Hausa, and Igbo. The platform is governed by the IMO token \u2014 an ERC-20 utility token that rewards verified learning, enables platform access, and powers community governance. Imo is designed to serve the 40+ million students currently enrolled in Nigerian educational institutions, and to extend reach to the millions more who learn informally through trade apprenticeships and community programmes \u2014 but currently hold no verifiable record of what they know. Core Thesis The African education system does not lack learners. It lacks infrastructure to make learning legible. Imo is that infrastructure \u2014 a trust layer for knowledge, built on blockchain, powered by AI, and owned by the community it serves.",
      },
      {
        id: "the-problem",
        heading: "1. The Problem",
        body: "1.1 The Invisible Graduate Every year, millions of students across Nigeria complete years of education, pass examinations, develop real skills, and leave with a paper certificate the world cannot verify. A graduate from the University of Ilorin cannot instantly prove their degree to an employer in London. A student who completed vocational training in Kano carries nothing portable or trusted. A community health worker who trained through an NGO programme holds nothing but a piece of paper anyone could forge. This is the invisible graduate problem. The knowledge is real. The effort is real. But the record is fragile, forgeable, and worthless the moment it leaves the issuing institution's filing cabinet. 1.2 Scale of the Crisis Metric Figure Source Students enrolled in Nigerian tertiary education Over 2 million NUC, 2023 Secondary school students in Nigeria Over 14 million UBEC, 2023 Certificate forgery \u2014 documented cases Widespread; estimated 30\u201340% of employers report suspicious credentials Employer surveys, NUC Students without reliable internet access Over 60% in rural areas NCC, 2023 Languages spoken in Nigeria Over 500 SIL Ethnologue EdTech platforms with Yoruba/Hausa/Igbo support Near zero Market research, 2024 1.3 Why Existing Solutions Fail Several attempts have been made to digitise educational records in Nigeria. They share a common failure: they replace one centralised system with another. A government database can be hacked, corrupted, or taken offline by a change in administration. A company-hosted credential platform can shut down, taking all student records with it. Platforms like Blockcerts and Awoke offer partial blockchain solutions but were not designed for the African context. They assume reliable internet, smartphone ownership, English literacy, and institutional infrastructure that does not exist across much of Nigeria. The fundamental problem is not technological. It is architectural. Any solution that depends on a single institution, company, or government to remain trustworthy is not a solution to the trust problem. It is a deferral of it. 1.4 The Five Root Failures \u2022 No cryptographic proof of credential authenticity. Paper certificates carry no unforgeable signature. \u2022 No decentralised storage. Student records depend on institutional servers that can fail, be seized, or be deleted. \u2022 No language accessibility. Educational platforms are English-only in a country where over 60% of the population primarily speaks an indigenous language. \u2022 No economic incentive for sustained learning. Students in low-income communities have no tangible reward for consistent educational engagement. \u2022 No privacy-preserving identity. Students cannot selectively prove credentials without exposing their full personal data.",
      },
      {
        id: "the-solution",
        heading: "2. The Solution \u2014 Imo Protocol",
        body: "2.1 What Imo Is Imo is a decentralised education protocol. Not an app. Not a product students depend on a company to maintain. It is an open protocol \u2014 a set of smart contracts, storage proofs, and AI services \u2014 that any institution, educator, or student can build on, interact with, and trust without needing to trust any single counterparty. At its core, Imo makes four promises: \u2022 Your credentials are yours. Minted as soulbound NFTs on Ethereum, they cannot be transferred, forged, or revoked by anyone other than the issuing institution under strict governance rules. \u2022 Your identity is private. Zero-Knowledge Proofs allow you to prove who you are and what you know without revealing personal data to any third party. \u2022 Your records are permanent. Files stored on 0G Labs carry on-chain existence proofs. They cannot be lost by institutional failure, government action, or company closure. \u2022 Your learning has value. Every verified learning milestone earns IMO tokens \u2014 a real economic reward for real intellectual work. 2.2 The Protocol Stack Layer Component What It Does Trust Layer Ethereum Smart Contracts Immutable credentials \u00b7 token rewards \u00b7 governance Identity Layer ZK-SNARKs via Circom Prove identity without revealing personal data Storage Layer 0G Labs Decentralised, verifiable document storage Intelligence Layer Multilingual LLM Yoruba \u00b7 Hausa \u00b7 Igbo \u00b7 English AI services Access Layer React PWA + USSD Web \u00b7 Mobile \u00b7 Feature-phone \u00b7 Offline Economy Layer IMO ERC-20 Token Rewards \u00b7 Governance \u00b7 Platform payments Figure 1 \u2014 Imo Protocol Architecture Stack 2.3 Plain Language: How ZK Identity Works Think of it like showing a bouncer your ID to prove you are over 18. They confirm the fact without reading your home address, your date of birth, or any other detail you did not choose to share. The bouncer learns one thing: you qualify. Imo's ZK- SNARK layer works the same way \u2014 an employer learns that your credential is real and that you are who you say you are. They learn nothing else. 2.4 Plain Language: How 0G Labs Storage Works Every file stored through Imo receives a cryptographic fingerprint \u2014 a unique hash recorded on-chain. If anyone alters the file in any way, the fingerprint changes, and the mismatch is immediately visible to anyone who checks. It is a tamper-evident seal on every document, backed by mathematics rather than institutional promises. 2.5 The Cultural Layer Most blockchain and AI education platforms are built in the Global North and adapted \u2014 poorly \u2014 for African markets. Imo is built in Africa, for Africa, from the ground up. The most visible expression of this is the language layer: Imo natively supports Yoruba, Hausa, and Igbo as first-class languages. Not as translation plugins. Not as optional add-ons. As core architectural decisions baked into the AI model, the interface design, and the user onboarding flow. A student in Kano receives the full Imo experience in Hausa. A student in Ibadan navigates the platform in Yoruba. A student in Enugu interacts with the AI chatbot in Igbo. This is not a feature. It is a statement of who this platform was built for.",
      },
      {
        id: "protocol-architecture",
        heading: "3. Protocol Architecture",
        body: "3.1 Smart Contract Layer ImoCredential.sol \u2014 Soulbound NFT Credentials The credential contract implements the ERC-721 standard with a permanent soulbound modification: the transfer function is disabled at the contract level. Certificates minted through this contract are bound to the recipient's wallet address for life. The contract stores the credential metadata hash, the 0G Labs content URI for the full certificate document, the issuing institution's verified on- chain address, and a revocation flag controlled by a multi-sig governance process. Verification is gasless. Any employer or institution can call the verify() function with a credential ID and receive a cryptographic confirmation of authenticity without paying gas. This is critical for adoption in markets where gas cost is a barrier. ImoToken.sol \u2014 ERC-20 Utility Token The IMO token is the economic engine of the protocol. It is minted according to a fixed reward schedule triggered by verified on-chain learning events. Reward events include course completion (verified by educator signature), assessment pass (verified by malpractice-clean assessment hash), credential issuance, and consistent learning streaks at 30, 60, and 90-day intervals. Tokens are burned when spent on platform services, creating deflationary pressure as adoption grows. ImoAccess.sol \u2014 Role-Based Access Control On-chain RBAC defines four roles: STUDENT, EDUCATOR, ADMIN, and PARENT. Each role carries precisely scoped permissions. STUDENT can read their own records and earn tokens. EDUCATOR can issue credentials to enrolled students. ADMIN can assign roles and manage institutional parameters. PARENT holds read- only access to their linked student's activity data. Role assignments require multi- signature approval and are publicly auditable on-chain. ImoGovernance.sol \u2014 DAO Protocol parameters \u2014 reward rates, fee structures, new feature approvals, institutional onboarding requirements \u2014 are controlled by a DAO governed by IMO token holders. Proposals require a minimum token threshold to submit. Voting is time-weighted: tokens must be held for at least 30 days to carry full voting weight, preventing governance attacks by short-term token accumulation. 3.2 Zero-Knowledge Identity Layer Standard blockchain identity requires users to link a real-world identity to a wallet address \u2014 a privacy violation that exposes students to tracking and discrimination. Imo uses ZK-SNARKs to allow students to prove identity without revealing it. The ZK circuit, built with Circom, takes three private inputs: a hash of the student's government-issued ID number, a hash of their date of birth, and a nonce. It produces a single public output: a proof stored on-chain alongside the student's wallet address. When an employer queries a credential, the verification confirms that this wallet is associated with a verified unique human identity \u2014 nothing more. The employer learns the credential is real. They learn nothing else. 3.3 Storage Layer \u2014 0G Labs 0G Labs provides programmable decentralised storage with on-chain data availability proofs. Every file stored through Imo \u2014 certificates, course materials, student portfolios, assessment recordings \u2014 is assigned a content hash recorded on-chain. Tampering is mathematically detectable. 0G Labs was chosen over IPFS for three specific reasons: guaranteed data availability without pinning services, programmable storage with smart contract integration, and lower storage costs for the high-volume document use case that education requires. 3.4 AI Layer Multilingual Intelligence The AI layer is built on a fine-tuned multilingual base model with additional training on Yoruba, Hausa, and Igbo language corpora sourced from the Masakhane research project, university linguistics departments, and community- contributed datasets. The model supports full interface translation, AI chatbot conversations, document summarisation, and assessment generation across all three languages. Document Intelligence \u2014 RAG Pipeline The Retrieval-Augmented Generation pipeline processes uploaded educational documents: PDFs, lecture notes, textbooks, and research papers. The pipeline extracts text, generates semantic vector embeddings, stores them in a vector database, and on query retrieves relevant chunks to pass to the LLM for synthesis. The output is a structured concept diagram, a summary, or a direct answer, depending on the student's query. Academic Integrity Monitor The malpractice detection system runs as a lightweight client-side model during assessments. It monitors clipboard events, tab visibility, screen sharing activity, and keystroke patterns for anomalies. All events are cryptographically signed and logged with timestamps. At assessment completion, the integrity log is hashed and submitted on-chain alongside the result \u2014 an immutable audit trail of assessment conditions.",
      },
      {
        id: "token-economics",
        heading: "4. Token Economics",
        body: "4.1 IMO Token Overview Parameter Value Token name IMO Token standard ERC-20 Total supply 1,000,000,000 IMO (1 billion, fixed) Network Ethereum mainnet (Polygon L2 in Phase 2) Decimals 18 Utility Platform access, learning rewards, governance voting Deflationary mechanism 50% burn on all platform service spend 4.2 Token Distribution Allocation % Amount (IMO) Vesting Schedule Community Rewards Pool 40% 400,000,000 IMO Released over 10 years per learning milestones Ecosystem Development 20% 200,000,000 IMO 4-year linear vest, 1-year cliff Team & Founders 15% 150,000,000 IMO 4-year linear vest, 1-year cliff Institutional Partners 10% 100,000,000 IMO 2-year linear vest, 6-month cliff Treasury Reserve 10% 100,000,000 IMO DAO-controlled, milestone-gated Public Sale 5% 50,000,000 IMO No vesting \u2014 liquid at listing Figure 2 \u2014 IMO Token Distribution (1B Fixed Supply) 4.3 Emission Schedule Period Annual Emission Scale Triggering Events Year 1\u20132 80,000,000 IMO / year Course completions \u00b7 credentials issued \u00b7 streak bonuses Year 3\u20134 40,000,000 IMO / year Same events, halved emission rate Year 5\u20136 20,000,000 IMO / year Same events, halved again Year 7\u201310 10,000,000 IMO / year Tail emissions for sustained ecosystem activity Figure 3 \u2014 IMO Emission Schedule: Decaying Halving Model 4.4 Why Hold IMO for 12+ Months? This is the question every serious investor will ask. The answer must be mechanical, not narrative. Short-term token holders face two structural disincentives. First, all platform service payments burn 50% of the tokens spent \u2014 meaning token scarcity increases as platform usage grows. Second, governance voting requires a 30-day minimum hold for full weight, which means tokens traded frequently carry reduced influence. The long-term hold thesis is built on three mechanics: \u2022 Staking yield tied to protocol revenue. Staked IMO tokens earn a proportional share of credential verification fees collected from employers and institutions. As more institutions join the network and issue credentials, the verification fee pool grows. Stakers benefit directly from protocol adoption \u2014 not from price speculation. \u2022 Milestone-gated treasury releases. Students who accumulate IMO rewards can lock tokens in the treasury staking pool for 12-month periods. Locked tokens receive a 1.25x multiplier on governance voting weight and a share of marketplace revenue. This creates a direct economic reason for students \u2014 the protocol's primary users \u2014 to hold rather than sell. \u2022 Network effect compounding. Every institution that joins Imo makes credentials from all other institutions more valuable, because employers learn one verification interface. Token holders who hold through the network's growth phase capture the value of that compounding directly. 4.5 Token Utility Earn \u2022 Complete a verified course \u2014 50 IMO \u2022 Pass a malpractice-clean assessment \u2014 20 IMO \u2022 Receive a credential issuance \u2014 100 IMO \u2022 30-day learning streak \u2014 75 IMO bonus \u2022 Refer an institution to the protocol \u2014 500 IMO Spend \u2022 Purchase premium course materials \u2014 IMO payment, 50% burned \u2022 Access AI chatbot premium features \u2014 IMO subscription, 50% burned \u2022 Pay for book purchases via platform marketplace \u2014 IMO or ETH \u2022 Submit governance proposals \u2014 1,000 IMO minimum, returned if proposal passes Stake \u2022 12-month lock \u2014 earn share of credential verification fee revenue \u2022 1.25x governance weight multiplier for locked tokens \u2022 Early unstake penalty: 10% of staked amount, redistributed to remaining stakers 4.6 Treasury Milestone Gates The 100,000,000 IMO treasury reserve is not a blank cheque. Releases are tied to verifiable on-chain and off-chain milestones. The following gate structure applies: Gate Condition Release Amount Gate 1 500 students onboarded to Landmark pilot with verified credentials on-chain 10,000,000 IMO Gate 2 First Ministry of Education MOU signed and publicly announced 15,000,000 IMO Gate 3 10,000 verified credentials issued across 3+ institutions 20,000,000 IMO Gate 4 IMO token mainnet deployment with smart contract audit passed 20,000,000 IMO Gate 5+ Remaining 35M governed by DAO vote after Gate 4 is reached 35,000,000 IMO Note \u26a0 Treasury milestone gates are enforced at the smart contract level. No single team member or multi-sig can release treasury funds outside of verified gate conditions. All gate verifications are published on-chain with supporting documentation. 4.7 Deflationary Mechanics Every IMO token spent on platform services is split: 50% goes to the protocol treasury and 50% is permanently burned. As platform adoption grows, the burn rate increases. Combined with the decaying emission schedule, this creates sustained deflationary pressure on token supply over time. The model is designed to ensure long-term token holders \u2014 students who accumulate rewards \u2014 benefit from growing platform adoption.",
      },
      {
        id: "product",
        heading: "5. Product",
        body: "5.1 Core Platform Features Feature Description Technology Soulbound credential NFTs Immutable on-chain certificates tied to student wallet ImoCredential.sol / ERC-721 ZK-proof identity Prove credentials without revealing personal data Circom / SnarkJS Decentralised storage All files stored on 0G Labs with on-chain proofs 0G Labs protocol Role-based access On-chain RBAC for Students, Educators, Admins, Parents ImoAccess.sol Indigenous language support Full platform in Yoruba, Hausa, and Igbo Fine-tuned LLM Document intelligence Upload any document, get AI- generated concept diagram RAG + LLM pipeline AI chatbot with voice Context-aware chatbot, voice overview of any document LLM + voice synthesis Malpractice detection Real-time monitoring during assessments Computer vision AI IMO token rewards Earn tokens for every verified learning milestone ImoToken.sol / ERC-20 Parent engagement Weekly SMS reports on student activity USSD gateway + ImoAccess.sol Book marketplace Buy and sell course materials via ETH or IMO Smart contract payments 5.2 User Journeys The Student \u2014 Amina, Kano Amina is 19, studying business administration at a polytechnic in Kano. Her first language is Hausa. She registers on Imo, creates a gasless wallet via ERC-4337 account abstraction, and completes identity verification using a ZK proof tied to her student ID. She uploads her course textbook as a PDF and immediately receives a concept diagram of the first chapter. She completes her semester and her institution issues her results on-chain. She earns 200 IMO tokens. When she graduates and applies for a job in Lagos, her employer verifies her credentials in ten seconds \u2014 without calling the university, without waiting for a transcript, and without Amina sharing anything beyond a credential ID. The Educator \u2014 Dr. Adeyemi, Ibadan Dr. Adeyemi teaches computer science at a federal university in Ibadan. He registers as an educator on Imo, passing the subject-matter assessment that verifies his teaching competence on-chain. He creates a course, uploads materials to 0G Labs, and sets an assessment. When 30 students complete the course, he reviews their integrity logs and issues credentials to students who passed with clean assessment records. Each issuance costs a small gas fee \u2014 subsidised by the protocol treasury for the first 10,000 credentials issued under the institutional onboarding programme. The Parent \u2014 Ngozi, Enugu Ngozi's daughter Adaeze is in secondary school in Enugu. Ngozi does not own a smartphone. She receives weekly SMS notifications via USSD gateway summarising Adaeze's learning activity, assessment scores, and earned tokens. When Adaeze's activity rating drops below 60%, Ngozi receives an immediate alert. She calls the school. The problem is identified early. This is the feedback loop Nigerian education has never had. The Institution \u2014 Landmark University, Omu-Aran Landmark University integrates the Imo protocol via the open API. Their existing student management system maps to Imo's on-chain identity layer. When a student graduates, the registry issues a credential NFT in addition to the paper certificate. The university pays a flat annual protocol fee in IMO tokens. Within two years, every Landmark graduate holds a verifiable, portable, globally accessible academic record. Forgery becomes impossible.",
      },
      {
        id: "go-to-market-strategy",
        heading: "6. Go-to-Market Strategy",
        body: "6.1 Beachhead \u2014 One Institution, One City Imo will not launch everywhere at once. The beachhead strategy targets one institution with a complete, proven implementation before expanding. The target is Landmark University, Omu-Aran, Kwara State \u2014 a private university with a forward-thinking administration, a strong STEM programme, and an existing relationship with the Imo founding team. A full pilot covering student enrollment, credential issuance, and parent engagement will run across one academic semester. 6.2 Expansion Phases Figure 4 \u2014 Go-to-Market Expansion Timeline Phase Timeline Target Goal Phase 0 \u2014 Build Now \u2013 Month 6 Core team \u00b7 STEM Festival Prototype \u00b7 competition entry \u00b7 initial funding Phase 1 \u2014 Pilot Month 7\u201312 Landmark University Full semester pilot \u00b7 500+ students on- chain Phase 2 \u2014 State Month 13\u201324 Kwara State institutions 10+ institutions \u00b7 50,000+ students Phase 3 \u2014 National Month 25\u201336 5 Nigerian states Ministry partnerships \u00b7 500,000+ students Phase 4 \u2014 Continental Month 37\u201348 Ghana \u00b7 Kenya \u00b7 Rwanda Pan-African expansion via protocol licensing 6.3 Distribution Channels \u2022 Direct institutional sales \u2014 university and polytechnic administrations \u2022 Ministry of Education partnerships \u2014 federal and state-level policy integration \u2022 NGO and donor-funded deployments \u2014 USAID, Gates Foundation, Tony Elumelu Foundation \u2022 Student-led adoption \u2014 IMO token rewards create organic peer-recruitment incentive \u2022 Developer ecosystem \u2014 open API and SDK for third-party EdTech integrations 6.4 Revenue Model Revenue Stream Model Pricing Institutional subscription Annual flat fee per institution Tiered by student enrollment size Credential issuance Per-credential fee (gas + protocol fee) Subsidised for first 10,000 per institution AI features Premium subscription in IMO tokens Monthly or annual, burnable Marketplace commission 5% of all transactions IMO or ETH, 50% burned Verification API Per-query pricing for employer verification Volume discounts available Protocol licensing White-label deployments for national ministries Custom enterprise pricing",
      },
      {
        id: "team",
        heading: "7. Team",
        body: "7.1 Founding Team Imo was conceived at Landmark University in Omu-Aran, Nigeria, by a team of builders, researchers, and educators who have experienced the failures of the African education system firsthand \u2014 as students, as graduates who struggled to have credentials recognised internationally, and as builders who have spent years working on blockchain and AI infrastructure. Every member of the team has a personal stake in seeing this protocol succeed. Role Background Verifiable Credentials Co-Founder & CEO [Name] \u2014 [University, Year]Previous: [Company / Project] [LinkedIn URL] \u00b7 [GitHub / Portfolio] Co-Founder & CTO [Name] \u2014 [University, Year]Solidity / ZK-SNARK expertise [LinkedIn URL] \u00b7 [GitHub / Portfolio] Head of AI / NLP [Name] \u2014 [University, Year]African language NLP background [LinkedIn URL] \u00b7 [Research Publications] Head of Partnerships [Name]Nigerian institutional relationships [LinkedIn URL] \u00b7 [Past Institutional Deals] Legal & Compliance [Name / Firm]Nigeria SEC, NDPA expertise [Bar number / Firm URL] 7.2 Advisors The protocol benefits from advisory relationships in the following domains. Specific advisor names and affiliations to be inserted prior to investor distribution: \u2022 Blockchain infrastructure \u2014 smart contract security, EVM architecture \u2022 African EdTech \u2014 institutional adoption strategy, ministry relationships \u2022 Token economics \u2014 mechanism design, vesting structure validation \u2022 African linguistics \u2014 Yoruba, Hausa, and Igbo language model supervision 7.3 Protocol Governance Transition Imo launches as a founder-led project with a clear path to full DAO governance across three phases: Phase Governance Model Timeline Foundation Core team holds admin keys with a 2-of-3 multi-sig. All decisions documented publicly. Year 1 Community DAO governance activated for non-critical parameters. Token holders vote on reward rates, new institutional partners, and fee structures. Year 2 Full Decentralisation All protocol parameters governed by DAO. Core team retains technical advisory role only. Protocol council elected annually. Year 3+",
      },
      {
        id: "competitive-landscape",
        heading: "8. Competitive Landscape",
        body: "8.1 Comparison The table below includes Imo's own current limitations. Presenting an honest competitive picture is more useful to investors than a clean sweep. Capability Imo Awoke Blockcert s Learning Economy Coursera On-chain credentials Yes Partial Yes Yes No ZK-proof identity Yes No No No No African language support Yes No No No No Decentralised storage Yes (0G) No Partial No No Token reward economy Yes No No Partial No AI document intelligence Yes No No No No Malpractice detection Yes No No No No Offline / USSD access Yes No No No No Global brand recognition No (early stage) No Partial No Yes Enterprise partnerships No (early stage) No Yes Partial Yes Built for Africa Yes Partial No No No 8.2 Where Incumbents Have the Advantage Honesty about current weaknesses is more persuasive than a clean sweep. Two things incumbents do better than Imo right now: \u2022 Coursera and established global platforms have years of brand trust with international employers. An Imo credential is unknown to employers outside Nigeria in Year 1. This changes as network adoption grows \u2014 but it is a real friction point in the early phases. \u2022 Blockcerts has existing enterprise partnerships with universities in Europe and North America. Their institutional sales pipeline is more mature. Imo's advantage is being architecturally designed for the African context from the start; Blockcerts retrofitting their stack for Nigeria would require rebuilding core assumptions. 8.3 Sustainable Moat \u2014 Structural Arguments The question every investor asks: why can't a well-resourced incumbent just copy this? Three structural mechanisms make replication genuinely difficult, not just temporarily slow: First, community token alignment with low-income users is an architectural decision, not a feature. Coursera's business model is built on premium subscriptions from users in high-income markets. Aligning their token economics with Nigerian students on 50 IMO per course completion would require a fundamental business model rewrite that conflicts with their existing investor obligations. Second, the Yoruba, Hausa, and Igbo training datasets represent years of academic linguistic work. A new entrant cannot replicate this with a translation API. The Masakhane datasets required community partnerships, academic review, and cultural calibration that money alone cannot accelerate. Third, institutional trust in Africa is relationship-driven, not product-driven. The reason Landmark University is the beachhead is that the founding team has an existing relationship there. A well-funded competitor cannot buy that relationship; they would need to build it from scratch over 12\u201318 months, by which time Imo has credentials issued, network effects established, and verified students the competitor's product has never reached.",
      },
      {
        id: "risks-and-mitigations",
        heading: "9. Risks and Mitigations",
        body: "Naming risks before an investor does is not weakness. It is the fastest way to demonstrate that the team understands the space well enough to have thought through the hard problems. Risk Why It Matters Specific Mitigation Smart contract vulnerability A single exploit could drain the community rewards pool or corrupt credential records \u2014 destroying user trust overnight. Formal audit before every mainnet deployment. Bug bounty programme. Multi-sig admin on all critical functions. Regulatory action on IMO token (Nigeria SEC) Nigeria's SEC has been unpredictable on crypto assets. An adverse ruling could restrict IMO trading or force a restructure. This is not a low-probability risk. Obtain formal legal opinion from qualified Nigerian counsel before token launch. Structure IMO as a pure utility token with no profit-sharing mechanism. Engage SEC proactively with whitepaper and legal memo prior to public sale. Low institutional adoption The protocol is worthless without institutions issuing credentials. If Landmark University delays or exits the pilot, the entire go-to-market collapses. Secure a signed MOU with Landmark before the pilot start date. Build two backup institutional relationships in parallel. Design the pilot so it delivers value to the institution regardless of full protocol deployment. Language model accuracy Mistranslation of assessment questions or credential content in indigenous languages would undermine the platform's core cultural value proposition. Human review layer for all assessment content. Community feedback loop with native speakers. Quarterly model audits by linguistics advisors. Internet connectivity barriers Over 60% of target users are in low-connectivity environments. A product that requires broadband is not a product for this market. Offline-first PWA with local data sync. USSD fallback for all critical functions. SMS notification system for parents. Gas cost barriers Ethereum mainnet gas costs are prohibitive for low- income users. A student who earns 50 IMO cannot spend 60 IMO in gas to claim it. Gasless wallets via ERC-4337 account abstraction. Gas subsidisation for credential issuance in Phase 1. Polygon L2 migration in Phase 2 reduces gas costs by approximately 95%. Team key person risk If the founding CTO exits before mainnet, the ZK- SNARK implementation is at risk. Full technical documentation maintained in real time. Knowledge distributed across at least two senior engineers. Succession protocol documented and agreed by co- founders.",
      },
      {
        id: "fundraising-use-of-funds",
        heading: "10. Fundraising & Use of Funds",
        body: "10.1 Seed Round Parameter Value Round type Pre-Seed / Seed Target raise $250,000 \u2013 $500,000 Token instrument SAFE with token warrant (pro-rata rights on public sale allocation) Target close July 2025 Use of proceeds 18 months of runway through testnet launch and Landmark pilot 10.2 FDV Scenario Analysis Figure 5 \u2014 IMO FDV Scenarios vs. Comparable Protocols at Seed Stage The conservative scenario ($10M FDV) assumes a $0.01 launch price with limited initial liquidity. The base case ($30M FDV) aligns with comparable African blockchain protocols at seed stage. The optimistic case ($80M FDV) reflects comparable Web3 education protocols that have demonstrated early institutional traction before public token launch. These are not price targets. They are scenario benchmarks to contextualise valuation expectations. Scenario FDV Relative Scale Context Conservative $10M FDV $0.01 launch price Limited initial liquidity \u00b7 early-stage traction only Base Case $30M FDV $0.03 launch price Comparable African blockchain protocols at seed stage Optimistic $80M FDV $0.08 launch price Web3 education protocols with demonstrated institutional traction 10.3 Use of Funds Figure 6 \u2014 Seed Round Allocation ($250K \u2013 $500K) Category % Scale What It Funds Engineering & Protocol Dev 45 % $112K \u2013 $225K Two senior Solidity engineers \u00b7 ZK- SNARK circuits \u00b7 smart contract audits Product & Design 20 % $50K \u2013 $100K React PWA \u00b7 USSD integration \u00b7 AI model fine-tuning Legal & Compliance 15 % $37K \u2013 $75K Nigeria SEC legal opinion \u00b7 token structure review \u00b7 NDPA compliance Community & Growth 12 % $30K \u2013 $60K Landmark University pilot \u00b7 student onboarding incentives \u00b7 developer SDK Operations & Infrastructure 8% $20K \u2013 $40K 0G Labs storage \u00b7 server infrastructure \u00b7 team operations",
      },
      {
        id: "roadmap-milestone-target-deliverable",
        heading: "11. Roadmap Milestone Target Deliverable",
        body: "STEM Festival submission May 2025 Competition prototype + written report + video demo Competition result June 2025 Award and public launch announcement Seed funding close July 2025 $250,000 \u2013 $500,000 pre-seed round Testnet launch August 2025 All four smart contracts on Sepolia, public testing open Landmark pilot start September 2025 500 students onboarded, first credentials issued on-chain Mobile app launch October 2025 iOS and Android PWA with offline mode IMO token generation December 2025 Token deployed, community rewards pool activated Mainnet launch January 2026 Production deployment on Ethereum mainnet State ministry MOU March 2026 First state-level Ministry of Education partnership Polygon L2 migration June 2026 Gas cost reduction, 10x transaction throughput Pan-African expansion 2027 Ghana, Kenya, Rwanda protocol deployments",
      },
      {
        id: "technical-specifications",
        heading: "12. Technical Specifications",
        body: "12.1 Smart Contract Specifications Contract Standard Key Functions Audit Status ImoCredential.sol ERC-721 (soulbound) mint(), verify(), revoke(), tokenURI() Pre-launch audit required ImoToken.sol ERC-20 mint(), burn(), rewardLearner(), stake(), unstake() Pre-launch audit required ImoAccess.sol Custom RBAC grantRole(), revokeRole(), hasRole(), checkPermission() Pre-launch audit required Contract Standard Key Functions Audit Status ImoGovernance.sol Custom DAO propose(), vote(), execute(), getProposal() Pre-launch audit required 12.2 Non-Functional Requirements Requirement Target Page load (3G mobile) Under 3 seconds Smart contract confirmation (Polygon L2) Under 2 seconds AI inference latency Under 5 seconds for document queries Platform uptime SLA 99.5% Concurrent users at launch 100,000+ Data encryption AES-256 at rest, TLS 1.3 in transit Backup frequency Daily automated, geographically distributed Recovery time objective Under 4 hours NDPA compliance Full \u2014 assessed quarterly Smart contract audit Before every mainnet deployment",
      },
      {
        id: "ethical-commitments-compliance",
        heading: "13. Ethical Commitments & Compliance",
        body: "\u2022 Student data sovereignty \u2014 students own their data. The protocol will never sell, license, or monetise student personal data under any circumstances. \u2022 Open protocol \u2014 all smart contracts are open source and publicly auditable from day one. \u2022 Language equity \u2014 Yoruba, Hausa, and Igbo are maintained as permanent first-class languages. Budget and engineering resources are committed to these languages at parity with English. \u2022 No advertising \u2014 the platform will never display advertising or allow commercial targeting based on student activity data. \u2022 NDPA compliance \u2014 full compliance with Nigeria's Data Protection Act 2023 is maintained and assessed quarterly by qualified legal counsel. \u2022 Community treasury transparency \u2014 all treasury transactions are published on-chain and in monthly public reports, regardless of governance phase.",
      },
      {
        id: "conclusion",
        heading: "14. Conclusion",
        body: "Africa does not have an education problem. Africa has an infrastructure problem. The knowledge is there. The students are there. The teachers are there. What is missing is the layer of trust that makes learning legible, portable, and valuable beyond the walls of any single institution. Imo is that layer. It is built on the most robust trust infrastructure available \u2014 Ethereum smart contracts, Zero-Knowledge cryptography, and decentralised storage \u2014 and delivered through a culturally grounded experience that speaks the languages, respects the context, and serves the people who have been excluded from every previous wave of educational technology. The IMO token creates economic alignment between the protocol's success and the success of every student who uses it. When a student earns tokens for learning, they become stakeholders in the protocol that rewarded them. When an institution issues credentials on-chain, they join a network that grows more valuable with every new institution that follows. Core Thesis Every student who learns something real deserves a record that is as real and as permanent as their knowledge. Imo makes that possible \u2014 for every student, in every language, on every device, connected or not, in Lagos or in the village. Knowledge verified. Value created. Ownership returned. Join us. Appendix A \u2014 Glossary Term Definition Soulbound NFT A non-fungible token whose transfer function is permanently disabled. It cannot be sold, traded, or moved to another wallet. ZK-SNARK Zero-Knowledge Succinct Non-Interactive Argument of Knowledge. A cryptographic proof that demonstrates knowledge of information without revealing the information itself. ERC-721 Ethereum token standard for non-fungible tokens (NFTs). ERC-20 Ethereum token standard for fungible tokens such as IMO. ERC-4337 Ethereum standard for account abstraction \u2014 enables wallets without seed phrases, reducing onboarding friction for non-technical users. 0G Labs A decentralised storage protocol with on-chain data availability proofs. RAG Retrieval-Augmented Generation. An AI technique that combines document retrieval with language model generation. RBAC Role-Based Access Control. A security model that restricts system access based on user roles. NDPA Nigeria Data Protection Act 2023. Nigeria's primary data privacy legislation. DAO Decentralised Autonomous Organisation. A governance structure where decisions are made by token holders via on- chain voting. Circom A programming language for writing zero-knowledge proof circuits. SnarkJS A JavaScript library for generating and verifying ZK-SNARK proofs. FDV Fully Diluted Valuation. The market capitalisation of a token assuming all tokens are in circulation. SAFE Simple Agreement for Future Equity. A standard early-stage investment instrument. Appendix B \u2014 References Source URL Accessed Ethereum Foundation ethereum.org May 2025 0G Labs Documentation 0g.ai/docs May 2025 Masakhane African NLP Project masakhane.io May 2025 Circom Documentation docs.circom.io May 2025 Nigeria Data Protection Act 2023 ndpc.gov.ng May 2025 National Universities Commission nuc.edu.ng May 2025 Universal Basic Education Commission ubec.gov.ng May 2025 SIL Ethnologue: Languages of Nigeria ethnologue.com May 2025 Blockcerts Open Standard blockcerts.org May 2025 EIP-4337: Account Abstraction eips.ethereum.org/EIPS/eip-4337 May 2025 NCC Digital Report 2023 ncc.gov.ng May 2025",
      },
    ],
    toc: [
      { id: "abstract", title: "Abstract & Core Thesis", page: 2 },
      {
        id: "the-problem",
        title: "01. The Problem",
        page: 3,
        children: [
          {
            id: "the-invisible-graduate",
            title: "The Invisible Graduate",
            page: 3,
          },
          { id: "scale-of-the-crisis", title: "Scale of the Crisis", page: 3 },
          {
            id: "why-existing-solutions-fail",
            title: "Why Existing Solutions Fail",
            page: 3,
          },
          {
            id: "the-five-root-failures",
            title: "The Five Root Failures",
            page: 4,
          },
        ],
      },
      {
        id: "the-solution-imo-protocol",
        title: "02. The Solution \u2014 Imo Protocol",
        page: 4,
        children: [
          { id: "what-imo-is", title: "What Imo Is", page: 4 },
          { id: "the-protocol-stack", title: "The Protocol Stack", page: 5 },
          {
            id: "plain-language-how-zk-identity-works",
            title: "Plain Language: How ZK Identity Works",
            page: 5,
          },
          {
            id: "plain-language-how-0g-labs-storage-works",
            title: "Plain Language: How 0G Labs Storage Works",
            page: 6,
          },
          { id: "the-cultural-layer", title: "The Cultural Layer", page: 6 },
        ],
      },
      {
        id: "protocol-architecture",
        title: "03. Protocol Architecture",
        page: 6,
        children: [
          {
            id: "smart-contract-layer",
            title: "Smart Contract Layer",
            page: 6,
          },
          {
            id: "zero-knowledge-identity-layer",
            title: "Zero-Knowledge Identity Layer",
            page: 7,
          },
          {
            id: "storage-layer-0g-labs",
            title: "Storage Layer \u2014 0G Labs",
            page: 7,
          },
          { id: "ai-layer", title: "AI Layer", page: 8 },
        ],
      },
      {
        id: "token-economics",
        title: "04. Token Economics",
        page: 8,
        children: [
          { id: "imo-token-overview", title: "IMO Token Overview", page: 8 },
          { id: "token-distribution", title: "Token Distribution", page: 9 },
          { id: "emission-schedule", title: "Emission Schedule", page: 10 },
          {
            id: "why-hold-imo",
            title: "Why Hold IMO for 12+ Months?",
            page: 10,
          },
          { id: "token-utility", title: "Token Utility", page: 11 },
          {
            id: "treasury-milestone-gates",
            title: "Treasury Milestone Gates",
            page: 12,
          },
          {
            id: "deflationary-mechanics",
            title: "Deflationary Mechanics",
            page: 12,
          },
        ],
      },
      {
        id: "product",
        title: "05. Product",
        page: 13,
        children: [
          {
            id: "core-platform-features",
            title: "Core Platform Features",
            page: 13,
          },
          { id: "user-journeys", title: "User Journeys", page: 13 },
        ],
      },
      {
        id: "go-to-market-strategy",
        title: "06. Go-to-Market Strategy",
        page: 14,
        children: [
          {
            id: "beachhead-one-institution-one-city",
            title: "Beachhead \u2014 One Institution, One City",
            page: 14,
          },
          { id: "expansion-phases", title: "Expansion Phases", page: 15 },
          {
            id: "distribution-channels",
            title: "Distribution Channels",
            page: 15,
          },
          { id: "revenue-model", title: "Revenue Model", page: 16 },
        ],
      },
      {
        id: "team",
        title: "07. Team",
        page: 16,
        children: [
          { id: "founding-team", title: "Founding Team", page: 16 },
          { id: "advisors", title: "Advisors", page: 17 },
          {
            id: "protocol-governance-transition",
            title: "Protocol Governance Transition",
            page: 17,
          },
        ],
      },
      {
        id: "competitive-landscape",
        title: "08. Competitive Landscape",
        page: 17,
        children: [
          { id: "comparison", title: "Comparison", page: 17 },
          {
            id: "where-incumbents-have-the-advantage",
            title: "Where Incumbents Have the Advantage",
            page: 18,
          },
          {
            id: "sustainable-moat-structural-arguments",
            title: "Sustainable Moat \u2014 Structural Arguments",
            page: 18,
          },
        ],
      },
      {
        id: "risks-and-mitigations",
        title: "09. Risks and Mitigations",
        page: 19,
      },
      {
        id: "fundraising-use-of-funds",
        title: "10. Fundraising & Use of Funds",
        page: 20,
        children: [
          { id: "seed-round", title: "Seed Round", page: 20 },
          {
            id: "fdv-scenario-analysis",
            title: "FDV Scenario Analysis",
            page: 21,
          },
          { id: "use-of-funds", title: "Use of Funds", page: 22 },
        ],
      },
      { id: "roadmap", title: "11. Roadmap", page: 23 },
      {
        id: "technical-specifications",
        title: "12. Technical Specifications",
        page: 23,
        children: [
          {
            id: "smart-contract-specifications",
            title: "Smart Contract Specifications",
            page: 23,
          },
          {
            id: "non-functional-requirements",
            title: "Non-Functional Requirements",
            page: 24,
          },
        ],
      },
      {
        id: "ethical-commitments-compliance",
        title: "13. Ethical Commitments & Compliance",
        page: 24,
      },
      { id: "conclusion", title: "14. Conclusion", page: 25 },
      { id: "appendix-a", title: "Appendix A \u2014 Glossary", page: 26 },
      { id: "appendix-b", title: "Appendix B \u2014 References", page: 27 },
    ],
  },
  {
    slug: "fairbounty",
    order: 3,
    name: "FairBounty",
    tag: "Protocol Docs",
    logo: "/logos/fairbounty.jpg",
    pageCount: 6,
    positioning:
      "Complete platform documentation for a Solana bounty board where on-chain reputation is the entire product.",
    bullets: [
      "FairScore and BXP mechanics, from first wallet connect to Tier 5",
      "Full onboarding walkthrough, wallet to first submission",
      "Five prize types explained, and when to pick which",
    ],
    gap: "The reputation system is the whole value proposition. If a new contributor doesn't understand how BXP compounds by tier before their first submission, the platform reads as just another bounty board.",
    excerpt:
      "Higher tiers don't just feel better, they compound. A Tier 5 Legend earns 3x the BXP from every action and carries 8x the voting influence of a Newcomer. That's the long game.",
    diagrams: [],
    pdfPath: "/pdfs/fairbounty.pdf",
    downloadName: "FairBounty Docs",
    readerSections: [
      {
        id: "fairbounty-overview",
        heading: "FairBounty",
        body: "FairBounty.fun Complete User & Platform Guide FairBounty.fun is a Solana-based bounty platform where your on-chain reputation determines what opportunities you can access. The goal of this document is simple: walk you through everything \u2014 from connecting your wallet to understanding why your tier level actually matters.",
      },
      {
        id: "what-is-fairbounty",
        heading: "1. What Is FairBounty?",
        body: "FairBounty is a bounty board built on Solana. Projects post tasks, contributors complete them, and rewards are distributed based on community review \u2014 not a single person's preference. But what separates it from other bounty platforms isn't just the mechanics. It's the reputation layer underneath everything. Your reputation on FairBounty isn't just a number. It's the key that unlocks better bounties, more voting power, and higher earning potential. The Core Problem It Solves Web3 bounty platforms have a trust problem: \u2022 Fake contributors game submissions \u2022 Quality work goes unrewarded \u2022 Projects can't tell who's actually skilled FairBounty's answer is a reputation system called FairScore \u2014 a score tied to your wallet that reflects your real contribution history. You can't fake it. You have to earn it.",
      },
      {
        id: "key-concepts-fairscore",
        heading: "2. Key Concepts FairScore",
        body: "FairScore is your on-chain reputation score. It's calculated automatically based on your connected Solana wallet's activity history. The moment you connect your wallet, FairScore fetches your score and assigns you a tier. You don't manually update it. The chain does the talking. BXP \u2014 Bounty Experience Points BXP is the platform's internal reputation currency. Think of it as XP in a game \u2014 except here, it directly affects your earnings multiplier and voting influence. Here's how you earn BXP: \u2022 Profile setup \u2014 100 BXP one-time welcome bonus \u2022 Refer a Friend \u2014 50 BXP for you AND your friend \u2022 Submit Work \u2014 25 BXP per bounty submission \u2022 Win a Bounty \u2014 100 BXP on top of the reward payout You're automatically assigned a 1.25x BXP multiplier at Tier 2 (Explorer) when you first connect a wallet with existing on-chain history. That means every BXP you earn is multiplied \u2014 even from day one.",
      },
      {
        id: "fairscore-tiers",
        heading: "3. FairScore Tiers",
        body: "There are five tiers on FairBounty. Your tier affects two critical things: how much BXP you earn per action, and how much weight your community votes carry. Tier Label BXP Multiplier Vote Weight Tier 1\ud83c\udf31 Newcomer 1x 1x Tier 2\ud83d\udd0d Explorer 1.25x 2x Tier 3\ud83d\udee0 Builder 1.5x 3x Tier 4\u2b50 Veteran 2x 5x Tier 5\ud83d\udc51 Legend 3x 8x Higher tiers don't just feel better \u2014 they compound. A Tier 5 Legend earns 3x the BXP from every action and carries 8x the voting influence of a Newcomer. That's the long game. Tier-Gated Access Some bounties require a minimum tier to participate. This isn't gatekeeping for the sake of it \u2014 it's how projects ensure their tasks reach contributors with a proven track record. The better your reputation, the more doors open.",
      },
      {
        id: "getting-started-step-1-connect-your-wallet",
        heading: "4. Getting Started Step 1 \u2014 Connect Your Wallet",
        body: "Go to fairbounty.fun and click Connect Wallet. The platform supports multiple Solana wallets: \u2022 Phantom (most common \u2014 detected automatically if installed) \u2022 Solflare \u2022 Backpack \u2022 Jupiter \u2022 Glow Tip: Use the same wallet you've been most active with on Solana. FairScore pulls your on-chain history to assign your starting tier \u2014 a wallet with more activity means a higher starting point. Step 2 \u2014 Set Up Your Profile After connecting, you'll be prompted to set up your profile. Complete this \u2014 it's not optional if you want the 100 BXP welcome bonus. Your profile has three tabs: \u2022 Basics \u2014 Display name, profile picture, email, bio, location, and current employer \u2022 Socials \u2014 Link your Twitter/X, GitHub, and other relevant accounts \u2022 Skills \u2014 Tag what you're good at so the right bounties find you Once your profile is complete, your BXP counter activates and you're ready to browse.",
      },
      {
        id: "how-bounties-work-finding-a-bounty",
        heading: "5. How Bounties Work Finding a Bounty",
        body: "Navigate to the Bounty Board from the main menu. Each bounty listing shows: \u2022 Task description \u2014 what you're being asked to do \u2022 Reward amount and type \u2014 what you'll earn if you win \u2022 Submission requirements \u2014 what format or deliverable is expected \u2022 Deadline \u2014 when submissions close \u2022 Minimum tier \u2014 whether you're eligible to enter You can bookmark bounties to come back to later. Types of Tasks Bounties cover a wide range of work: \u2022 Content \u2014 threads, articles, explainers, documentation \u2022 Creative \u2014 designs, memes, visuals \u2022 Technical \u2014 development tasks, testing, auditing \u2022 Community \u2014 engagement, moderation, onboarding Pick tasks that match your actual skillset. Quality beats quantity when community votes determine the winner. Submitting Your Work When you're ready, submit your work directly through the platform. Each submission earns you 25 BXP regardless of whether you win \u2014 so there's value in participating even if you don't take first place. Community Review This is where FairBounty gets interesting. Once the submission window closes, the community votes on the best entries. But not all votes are equal \u2014 higher-tier contributors carry more influence. A Tier 5 Legend's vote counts 8x more than a Tier 1 Newcomer's. From the top-voted submissions, the client (the project that posted the bounty) picks the final winner. This hybrid model \u2014 community ranking + client decision \u2014 means submissions are judged on both quality and relevance. Do good work. Make it easy for the client to choose you.",
      },
      {
        id: "prize-types",
        heading: "6. Prize Types",
        body: "FairBounty supports five types of prizes. Projects can choose which type fits their bounty: Prize Type Examples Best For Stablecoin USDC, USDT Predictable cash-equivalent rewards SOL Native Solana token Ecosystem-native payouts Memecoin BONK, WIF, POPCAT Community-driven, high upside NFT / cNFT NFTs, compressed NFTs Collectible or access-token prizes Collectible Card packs, physical items Unique or real-world rewards Always check the prize type before submitting. If you're earning for income, prioritize stablecoin or SOL bounties. If you're a collector or speculator, memecoin and NFT prizes may have more upside.",
      },
      {
        id: "posting-a-bounty",
        heading: "7. Posting a Bounty",
        body: "FairBounty isn't just for contributors. If you're a project or founder, you can post your own bounties. Navigate to Post Bounty and:",
      },
      {
        id: "create-your-task-write-a-clear-description-of-what-you-need",
        heading:
          "1. Create your task \u2014 write a clear description of what you need",
        body: "",
      },
      {
        id: "set-the-reward-choose-the-amount-and-prize-type",
        heading: "2. Set the reward \u2014 choose the amount and prize type",
        body: "",
      },
      {
        id: "define-submission-requirements-tell-contributors-exactly-what-to-deliver",
        heading:
          "3. Define submission requirements \u2014 tell contributors exactly what to deliver",
        body: "",
      },
      {
        id: "choose-your-selection-method-community-review-client-picks-or-both",
        heading:
          "4. Choose your selection method \u2014 community review, client picks, or both",
        body: "Write clear briefs. Vague bounties attract vague submissions. The more specific your requirements, the better quality work you'll receive from the community.",
      },
      {
        id: "building-reputation-over-time-the-long-game-on-fairbounty-is-straightforward",
        heading:
          "8. Building Reputation Over Time The long game on FairBounty is straightforward:",
        body: "\u2022 Submit quality work consistently \u2022 Earn BXP across multiple bounties \u2022 Participate in community reviews to earn review BXP and build relationships \u2022 Refer other contributors (50 BXP each, mutual) \u2022 Stay active to accumulate toward a potential $BOUNTY FairDrop As your BXP grows, your tier advances. As your tier advances, your BXP multiplier increases \u2014 which means every future action earns you more. This is the compounding effect that separates early, consistent contributors from everyone else who shows up late. Final Word FairBounty's thesis is simple: reputation should mean something. Not just as a badge, but as actual leverage \u2014 access to better opportunities, more influence in community decisions, and higher earnings over time. If you're a contributor serious about Web3, it pays to build your on-chain reputation on platforms like this early. The architecture rewards the people who show up first and stay consistent. Get started at fairbounty.fun \u2014 Built by @smsonx",
      },
    ],
    toc: [
      { id: "what-is-fairbounty", title: "01. What Is FairBounty?", page: 1 },
      { id: "key-concepts", title: "02. Key Concepts", page: 2 },
      { id: "fairscore-tiers", title: "03. FairScore Tiers", page: 2 },
      { id: "getting-started", title: "04. Getting Started", page: 3 },
      { id: "how-bounties-work", title: "05. How Bounties Work", page: 4 },
      { id: "prize-types", title: "06. Prize Types", page: 5 },
      { id: "posting-a-bounty", title: "07. Posting a Bounty", page: 5 },
      {
        id: "building-reputation-over-time",
        title: "08. Building Reputation Over Time",
        page: 5,
      },
    ],
  },
  {
    slug: "zodial",
    order: 4,
    name: "Zodial",
    tag: "Cross-Margin Guide",
    logo: "/logos/zodial.jpg",
    pageCount: 4,
    positioning:
      "Cross-margin mechanics and pairwise liquidation thresholds, explained for people already using Kamino and Marginfi.",
    bullets: [
      "One portfolio-wide health score instead of five isolated ones",
      "Real published liquidation thresholds walked through pair by pair",
      "The off-chain solver and on-chain certificate model that makes it possible",
    ],
    gap: "Founders needed a document that could walk existing isolated-margin users through why an unfamiliar cross-margin model is actually safer, without hand-waving the exact mechanics that make it true.",
    excerpt:
      "Take a simple two-position portfolio: $1,000 in staked SOL and $800 in TSLAx, each backing a separate borrow in an isolated market... Push it further, drop TSLAx all the way to $300, and the unified portfolio still holds. That's not a marginal improvement. That's the difference between getting liquidated on a dip and not.",
    diagrams: [],
    pdfPath: "/pdfs/zodial.pdf",
    downloadName: "Zodial Cross-Margin Guide",
    readerSections: [
      {
        id: "zodial-overview",
        heading: "Zodial",
        body: "Cross-Margin on Zodial",
      },
      {
        id: "a-guide-for-kamino-and-marginfi-users",
        heading: "A Guide for Kamino and Marginfi Users",
        body: "You've deposited into three different markets on Kamino before just to avoid a liquidation you knew was coming. Not because your portfolio was actually at risk, but because your collateral was locked in the wrong market to help. That's the problem Zodial is built to remove.",
      },
      {
        id: "one-portfolio-one-health-score",
        heading: "One Portfolio, One Health Score",
        body: "On Kamino and Marginfi, every position you open lives in its own isolated market. Your SOL collateral backing a SOL borrow can't help cover a separate TSLAx borrow sitting in a different market, even if that SOL collateral has plenty of room to spare. Each market asks its own narrow question: is this specific position healthy. Your actual financial position across the whole account is invisible to the protocol. Zodial asks a different question: is your portfolio healthy. All your deposits back all your borrows at once. One health score, not five.",
      },
      {
        id: "what-isolation-actually-costs-you",
        heading: "What Isolation Actually Costs You",
        body: "Take a simple two-position portfolio: $1,000 in staked SOL and $800 in TSLAx, each backing a separate borrow in an isolated market. If TSLAx drops to $600, the isolated model liquidates that position immediately, even though the SOL side of the portfolio hasn't moved and has plenty of unused capacity. The staked SOL collateral is sitting right there, healthy, and structurally forbidden from helping. Run the same scenario in a unified model and the portfolio stays covered, because the SOL headroom gets pulled in automatically. Push it further, drop TSLAx all the way to $300, and the unified portfolio still holds. That's not a marginal improvement. That's the difference between getting liquidated on a dip and not.",
      },
      {
        id: "not-all-pairs-get-the-same-leash",
        heading: "Not All Pairs Get the Same Leash",
        body: "Here's the part isolated protocols get wrong in the other direction too: they either ignore correlation entirely (Aave's flat collateral-weighted LTV) or only account for it in a handful of predefined pairings (Kamino's e-mode). Zodial prices every asset pair individually, based on how much that pair's relative price has actually moved against each other historically. The mechanism: for any collateral/borrow pair, Zodial tracks the maximum historical price divergence over a rolling window. That number becomes the Liquidation Threshold (LT) for the pair. Loan-to-Value is set at 98% of LT, and the liquidation penalty is 50% of LT. Correlated, stable pairs get a longer leash. Volatile or historically divergent pairs stay tight, because the math says they should. Here's what that looks like with real published thresholds: Asset Max LT What It Means USDC 97.0% Near-maximal borrowing power, minimal historical divergence risk SOL 91.1% High capital efficiency, standard crypto volatility priced in SPY 93.3% Broad index exposure, tight spread reflects low divergence XAUT 89.8% Gold-backed, conservative but still efficient NVDA 87.0% Single-stock volatility pulls the threshold down TSLA 86.5% Higher historical divergence, tighter LT accordingly Worth flagging: these are the published single-asset max LTs, the ceiling for that asset against its best-case counterparty. The actual pairwise LT for a specific combination, say NVDAx against USDC specifically versus NVDAx against SOL, may sit lower depending on the correlation between that exact pair. That pairwise figure isn't public yet. Treat anything pair specific in this doc as illustrative until confirmed.",
      },
      {
        id: "why-can-t-kamino-just-add-this",
        heading: "Why Can't Kamino Just Add This",
        body: "Fair question if you're coming from Kamino. The honest answer is structural, not a matter of Kamino not getting around to it yet. E-mode boosts LTVs for narrow, predefined asset groupings, it doesn't generalize to arbitrary portfolio compositions. Isolated markets are built around single-position health checks, there's no mechanism in that architecture to ask whether your entire collateral stack covers your entire debt stack. And even if you wanted to bolt that on, solving for the optimal capital flow across a large multi-asset portfolio is a computationally heavy optimization problem, the kind of thing that's genuinely infeasible to run on-chain given blockchain compute limits. Zodial's answer to that last problem is the actual unlock: an off-chain solver computes the optimal capital flow and generates a certificate proving the portfolio is covered, then the smart contract just verifies that certificate rather than redoing the math itself. That's the piece that makes portfolio-wide cross-margin possible at all.",
      },
      {
        id: "walking-through-a-mixed-position",
        heading: "Walking Through a Mixed Position",
        body: "Say you deposit $1,000 USDC and open a long NVDAx position through a loop, borrowing against your stablecoin collateral to gain leveraged exposure. The protocol doesn't just check whether this one NVDAx position is covered. It runs the capital flow calculation across your whole account, and the Playground reflects this directly, showing something like \"$X capital used, covered with LT 0.87 by $Y.\" That LT 0.87 is NVDA's pairwise threshold against whatever you're borrowing, and the $Y figure is the exact collateral value backing that specific borrow, with anything left over shown as unused headroom, not locked away. Now say NVDAx drops. Health degrades on that side of the portfolio, but before anything gets touched, the system checks whether headroom elsewhere, unused capacity on other deposits, can absorb the move. Only when the portfolio-wide health score actually crosses its threshold does liquidation logic activate at all. This is the same mechanic that saved the SOL/TSLAx example above, just running live on your position. (Note: exact figures above are illustrative, built to show the mechanic rather than reflect a live quote.) How Liquidation Actually Works Trigger What Happens Why Portfolio health score crosses 1.0 (not any single position's isolated threshold) The off-chain solver computes the minimum liquidation needed to restore health, not a blanket close- out The same maximum capital flow math that proves a portfolio is covered can also calculate the smallest corrective action, so liquidation is targeted, not total A specific pair is the one dragging health down That pair gets liquidated first, other healthy positions in the same portfolio are left alone Liquidation follows the same pairwise logic as borrowing power, it isolates the actual problem rather than penalizing the whole account Liquidation executes A penalty equal to 50% of that pair's LT is applied This is the same LT-derived formula used for borrowing power, kept consistent across the whole risk model Partial liquidation, in other words, isn't a special exception carved out for user protection. It falls directly out of the same certificate based math that makes cross-margin borrowing work in the first place. One mechanism, two uses. One More Layer: Closed Market Assets Tokenized stocks like NVDAx and TSLAx track real equities that don't trade 24/7. Zodial handles this by maintaining the peg through direct price alignment during market hours, and using the last official closing price when the underlying market is closed. To prevent someone from exploiting a stale close-of-market price, the LTV thresholds for these assets are built from historical stock data with a safety buffer already priced in. You're protected from the exact kind of after-hours price attack that a naive oracle setup would be vulnerable to.",
      },
      {
        id: "the-honest-caveat",
        heading: "The Honest Caveat",
        body: "Everything mechanical in this doc, the LT/LTV/penalty formulas, the isolated versus unified comparison, the off-chain proof system, the closed market handling, comes straight from what Zodial has published. The specific numbers used in the walkthroughs above are illustrative, built to demonstrate how the mechanic behaves, not live quotes. The one thing genuinely unconfirmed is the pairwise LT for individual collateral/borrow combinations beyond the single-asset max already public. That gets updated the moment the team confirms it.",
      },
    ],
    toc: [
      {
        id: "one-portfolio-one-health-score",
        title: "One Portfolio, One Health Score",
        page: 2,
      },
      {
        id: "what-isolation-actually-costs-you",
        title: "What Isolation Actually Costs You",
        page: 3,
      },
      {
        id: "not-all-pairs-get-the-same-leash",
        title: "Not All Pairs Get the Same Leash",
        page: 3,
      },
      {
        id: "why-cant-kamino-just-add-this",
        title: "Why Can't Kamino Just Add This",
        page: 2,
      },
      {
        id: "walking-through-a-mixed-position",
        title: "Walking Through a Mixed Position",
        page: 3,
      },
      {
        id: "how-liquidation-actually-works",
        title: "How Liquidation Actually Works",
        page: 3,
      },
      {
        id: "one-more-layer-closed-market-assets",
        title: "One More Layer: Closed Market Assets",
        page: 4,
      },
      { id: "the-honest-caveat", title: "The Honest Caveat", page: 4 },
    ],
  },
  {
    slug: "ewave",
    order: 5,
    name: "Ewave",
    tag: "Getting Started Guide",
    logo: "/logos/ewave.jpg",
    pageCount: 7,
    positioning:
      "Stablecoin-to-fiat onboarding across seven African markets, written for someone who has never touched crypto before.",
    bullets: [
      "Full glossary translating stablecoin, on-ramp, off-ramp into plain terms",
      "Step-by-step first-swap walkthrough with the failure mode called out",
      'FAQ covering every real "wait, what if" question',
    ],
    gap: "Most crypto onboarding guides assume the reader already speaks the language. Ewave's audience mostly doesn't. The guide had to build a full glossary, a safe step-by-step walkthrough, and an FAQ that anticipates real hesitations, for people moving real money for the first time.",
    excerpt:
      "Critical: Always send the exact amount shown, on the correct network. Sending on the wrong chain (e.g., ERC-20 USDT to a BSC address) results in a lost transfer. Blockchain transactions cannot be reversed, double-check before confirming.",
    diagrams: [],
    pdfPath: "/pdfs/ewave.pdf",
    downloadName: "Ewave Getting Started Guide",
    readerSections: [
      {
        id: "ewave-overview",
        heading: "ewave",
        body: "ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 GETTING STARTED GUIDE \u00b7 BETA \u00b7 v0.3 ewave Save. Spend. Move Money. Globally. Borderless finance for Africans, powered by stablecoins. Secure by design Global access Stablecoin powered Fast & low cost\ud83d\udee1 \ud83c\udf0d \ud83d\udca0 \u26a1 Getting Started Guide\ud83d\udcc4 7 min read\u23f1 7 African countries\ud83c\udf0d 10,000+ users\ud83d\udc65 // 01 \u2014 Overview What is ewave? ewave is a stablecoin payments platform built for Africa. Hold, send, receive, and convert digital dollars \u2014 and withdraw to your local bank account \u2014 in seconds. With over 10,000 users across the continent, ewave covers everything from personal remittances to freelancer payouts to business payments. The core product is both an off-ramp and on-ramp: convert stablecoins to local currency, or buy stablecoins with local currency. Beyond that, ewave adds bill payments, stablecoin savings with yield, payment links, and virtual and physical debit cards \u2014 all in one platform. ewave is currently in beta with zero transaction fees. The beta app is live at beta.useewave.com. // 02 \u2014 Features What you can do on ewave ewave covers eight core finance modules. Start with one and expand as your needs grow. Store & Send\ud83d\udcb8 Hold and transfer digital dollars instantly \u2014 borderless, with full control over your funds. Withdraw Locally\ud83c\udfe6 Convert stablecoins to local currency and withdraw to your bank account or mobile money. Pay Bills\ud83d\udca1 Pay airtime, internet, electricity, and cable TV directly in stablecoins. Save & Earn Yield\ud83d\udcc8 Save in stablecoins and earn yield. Protect your savings from local currency inflation. ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 Buy Stablecoins\ud83d\uded2 Top up your ewave wallet from your local bank account or mobile money at competitive rates. Payment Links\ud83d\udd17 Get paid with a shareable link \u2014 no wallet address needed. Virtual & Physical Cards\ud83d\udcb3 Spend stablecoins anywhere with linked debit cards at card-accepting merchants. WhatsApp Bot\ud83d\udcac Manage your wallet through WhatsApp commands. Coming soon. // 03 \u2014 Use Cases Who ewave is built for ewave is designed around four types of users moving value across Africa. 01 Freelancers Get paid globally in stablecoins and withdraw locally in seconds. No more waiting days for international wire transfers. 02 Creators & Influencers Earn in dollars, receive in stablecoins, cash out to your local bank. Zero currency conversion friction. 03 Remote Workers Receive your salary in stablecoins without bank delays. Your employer pays in crypto, you receive in cash. 04 Everyday Users Send money to family and friends across Africa securely, instantly, and without expensive transfer fees. // 04 \u2014 Supported Assets Supported assets, currencies & networks ewave supports three stablecoins across multiple blockchain networks, with local currency payouts across seven African markets. Asset Type Networks Payout Currencies USDT USD-pegged stablecoin Base \u00b7 BSC NGN \u00b7 KES \u00b7 GHS \u00b7 more USDC USD-pegged stablecoin Base \u00b7 BSC NGN \u00b7 KES \u00b7 GHS \u00b7 more CNGN Compliant Naira stablecoin Base \u00b7 BSC NGN ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 What is CNGN?\ud83d\udd17 CNGN (Compliant Nigerian Naira) is a regulated, naira-backed stablecoin \u2014 1 CNGN = \u20a61. It runs on Base and BSC. If you hold CNGN from a DeFi protocol or another wallet, ewave lets you swap it directly back to naira with a single click. // 05 \u2014 Coverage Supported countries ewave currently operates across seven African markets, with expansion underway. Nigeria\ud83c\uddf3\ud83c\uddec Kenya\ud83c\uddf0\ud83c\uddea Ghana\ud83c\uddec\ud83c\udded Rwanda\ud83c\uddf7\ud83c\uddfc South Africa\ud83c\uddff\ud83c\udde6 Cameroon\ud83c\udde8\ud83c\uddf2 Uganda\ud83c\uddfa\ud83c\uddec Expanding across Africa\ud83c\udf0d ewave is built for 54+ countries and continues to add new markets. Follow @Ewavefin on X or visit useewave.com for the latest coverage announcements. // 06 \u2014 Requirements Before you start Have these ready before initiating your first swap:",
      },
      {
        id: "a-crypto-wallet-with-usdt-usdc-or-cngn",
        heading: "1. A crypto wallet with USDT, USDC, or CNGN",
        body: "Your wallet must hold the asset on a supported network (Base or BSC). Compatible wallets include MetaMask, Trust Wallet, and any Base/BSC-compatible wallet.",
      },
      {
        id: "a-bank-account-in-a-supported-country",
        heading: "2. A bank account in a supported country",
        body: "Have your bank account number and bank name ready. ewave pays out in local currency \u2014 NGN, KES, GHS, etc. \u2014 depending on your market.",
      },
      {
        id: "a-stable-internet-connection",
        heading: "3. A stable internet connection",
        body: "Swaps are confirmed on-chain. A dropped connection mid-transaction can cause delays \u2014 ensure your connection is stable before starting. ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 // 07 \u2014 Step-by-step How to make your first swap The full process takes under a minute. Here is what it looks like:",
      },
      {
        id: "visit-beta-useewave-com",
        heading: "4. Visit beta.useewave.com",
        body: "Open the ewave app in your browser. No account signup required to see live rates and initiate a swap.",
      },
      {
        id: "enter-the-amount-you-want-to-convert",
        heading: "5. Enter the amount you want to convert",
        body: "Type in how much USDT, USDC, or CNGN you want to swap. The interface shows the exact local currency you will receive before you commit.",
      },
      {
        id: "select-your-bank",
        heading: "6. Select your bank",
        body: "Choose your bank from the dropdown and enter your account number. ewave supports banks across all seven operating countries.",
      },
      {
        id: "click-exchange-swiftly-and-send-your-crypto",
        heading: '7. Click "Exchange swiftly!" and send your crypto',
        body: "Review the summary \u2014 amount, rate, destination bank \u2014 then confirm. ewave generates a receiving wallet address. Send the exact amount on the correct network.",
      },
      {
        id: "receive-your-local-currency",
        heading: "8. Receive your local currency",
        body: "Once your on-chain transfer is confirmed, ewave sends the local currency to your bank. This typically completes within 10 seconds. Critical: \u26a0 Always send the exact amount shown, on the correct network. Sending on the wrong chain (e.g., ERC-20 USDT to a BSC address) results in a lost transfer. Blockchain transactions cannot be reversed \u2014 double-check before confirming. // 08 \u2014 Limits Transaction limits ewave supports a generous per-swap ceiling suitable for both casual use and larger off-ramp needs. $5,000 Maximum per transaction Swap up to $5,000 worth of stablecoins in a single exchange. For larger amounts, split across multiple swaps. Minimum shown on the live interface. Zero fees during beta\u2726 ewave currently runs with zero transaction fees on the beta platform. This may change at full launch \u2014 always check the live interface for current fee information before swapping. ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 // 09 \u2014 Security Security & trust ewave is built on bank-grade security infrastructure with full on-chain transparency and regulatory compliance across all operating markets. End-to-End Encryption\ud83d\udd12 256-bit encryption protects your assets and data at every step. On-Chain Transparency\ud83d\udd0d All transactions are publicly verifiable on the blockchain \u2014 no hidden fees or movements. Self-Custody\ud83d\udddd\ufe0f You hold your funds \u2014 not ewave. Your wallet, your keys, your control. Regulatory Compliance\ud83d\udccb Built with global and local financial regulations across all seven operating markets. Audited Smart Contracts\u2705 Independently verified for security and reliability by third-party auditors. Regulated Partners\ud83e\udd1d Works exclusively with licensed and compliant payment providers globally. // 10 \u2014 WhatsApp Bot WhatsApp bot ewave is building a WhatsApp AI agent that will let you send and receive stablecoins, check rates, and manage your wallet entirely through WhatsApp \u2014 no app download required. Coming Soon\ud83d\udea7 The WhatsApp bot is currently in development and not yet publicly available. When it launches, use simple commands like /send to transfer money and confirm transactions with a PIN. Visit useewave.com/ewave- whatsapp.html or follow @Ewavefin on X to get notified at launch. // 11 \u2014 FAQ ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 Frequently asked questions Q What stablecoins does ewave support? ewave supports USDT (Tether), USDC (USD Coin), and CNGN (Compliant Naira). USDT and USDC are dollar- pegged \u2014 1 token \u2248 $1. CNGN is naira-pegged \u2014 1 CNGN = \u20a61. Q Which blockchain networks does ewave support? ewave currently supports Base and BNB Smart Chain (BSC) for all three stablecoins. Always confirm the correct network on the swap interface before sending. Q Which countries does ewave operate in? Nigeria, Kenya, Ghana, Rwanda, South Africa, Cameroon, and Uganda. More African markets are being added \u2014 check useewave.com for the latest. Q What is the maximum I can swap at once? The current per-transaction maximum is $5,000. For larger amounts, split across multiple swaps. Q Does ewave charge fees? Zero transaction fees during the beta period. Fee structure at full launch may differ \u2014 always check the live interface before swapping. Q How long does a payout take? ewave targets a 10-second payout from the moment your on-chain transfer is confirmed. Actual timing may vary with network congestion or your bank's processing speed. Q Can I also buy stablecoins on ewave? Yes. ewave is both an on-ramp and off-ramp. Buy USDT or USDC from your local bank account or mobile money wallet at competitive rates. Q What is CNGN and why would I use it? CNGN is a regulated naira-backed stablecoin on Base and BSC. If you receive CNGN from a DeFi protocol, swap it directly to naira on ewave \u2014 no need to convert to USDT first. Q Is the WhatsApp bot available now? Not yet. It is currently in development. Visit useewave.com/ewave-whatsapp.html to register for launch notification. Q What if my bank does not receive the payout? Check your transaction history at beta.useewave.com/history. If the issue persists, contact ewave support via X (@Ewavefin) or WhatsApp at +234 705 281 2874. Q Is ewave self-custodial? Yes. ewave is built on a self-custody model \u2014 you hold your own funds and keys. ewave does not custody your assets on your behalf. // 12 \u2014 Glossary ewave \u2014 Getting Started Guide beta.useewave.com \u00b7 v0.3 Quick glossary New to crypto? Here are the key terms you will encounter on ewave. Stablecoin A cryptocurrency pegged to a fixed value \u2014 usually $1 or \u20a61. Does not swing wildly like Bitcoin. USDT, USDC, and CNGN are all stablecoins. USDT Tether. The most widely traded stablecoin globally. 1 USDT = $1. Available on Base, BSC, and many other chains. USDC USD Coin by Circle. Pegged 1:1 to the US dollar. Backed by real dollar reserves. Widely used for international payments. CNGN Compliant Nigerian Naira \u2014 a regulated, naira-backed stablecoin. 1 CNGN = \u20a61. Runs on Base and BSC. Off-ramp Converting crypto into local fiat currency and withdrawing to a bank account. ewave is primarily an off-ramp. On-ramp Buying crypto using local fiat currency. ewave also supports this \u2014 buy USDT or USDC from your bank account. Base A fast, low-fee blockchain built by Coinbase on Ethereum's infrastructure. One of the two networks ewave supports. BSC BNB Smart Chain \u2014 Binance's blockchain. Known for low fees and wide stablecoin support. Also supported by ewave. Self-custody A wallet model where you \u2014 not a company \u2014 hold your own private keys and control your funds. Payment link A shareable URL that lets anyone send you stablecoins without needing your wallet address. Yield Interest earned on your stablecoin balance. ewave's Save & Earn feature lets your digital dollars grow while stored. NGN Nigerian Naira \u2014 local fiat currency for Nigerian bank payouts. KES Kenyan Shilling \u2014 local fiat currency for Kenyan bank payouts. GHS Ghanaian Cedi \u2014 local fiat currency for Ghanaian bank payouts. Wallet address A long string of characters that works like a bank account number for crypto. Always send to the address ewave generates, on the correct network. Built in Africa. Built for the world. useewave.com \u00b7 beta.useewave.com \u00b7 @Ewavefin",
      },
    ],
    toc: [
      {
        id: "what-you-can-do-on-ewave",
        title: "What you can do on ewave",
        page: 1,
      },
      {
        id: "who-ewave-is-built-for",
        title: "Who ewave is built for",
        page: 2,
      },
      {
        id: "supported-assets-currencies-networks",
        title: "Supported assets, currencies & networks",
        page: 2,
      },
      { id: "supported-countries", title: "Supported countries", page: 3 },
      { id: "before-you-start", title: "Before you start", page: 3 },
      {
        id: "how-to-make-your-first-swap",
        title: "How to make your first swap",
        page: 4,
      },
      { id: "transaction-limits", title: "Transaction limits", page: 4 },
      { id: "security-trust", title: "Security & trust", page: 5 },
      { id: "whatsapp-bot", title: "WhatsApp bot", page: 5 },
      {
        id: "frequently-asked-questions",
        title: "Frequently asked questions",
        page: 6,
      },
      { id: "quick-glossary", title: "Quick glossary", page: 7 },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const totalProtocols = projects.length;
export const totalPagesWritten = projects.reduce((sum, p) => sum + p.pageCount, 0);
export const totalArchitectureDiagrams = projects.reduce(
  (sum, p) => sum + (p.diagramCount ?? p.diagrams.length),
  0
);
export const totalWhitepapers = projects.filter((p) => p.tag.includes("Whitepaper")).length;

