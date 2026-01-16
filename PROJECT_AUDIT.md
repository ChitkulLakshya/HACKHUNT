# Project Audit Report

## The One-Liner
**HackHunt** is a centralized intelligence platform that aggregates and normalizes hackathon data from fragmented sources (MLH, Devpost, Kaggle) to provide developers with AI-powered discovery and unified search.

## The 'Technical Hook' (Crucial)
**Automated Headless Browser Ingestion Pipeline**
The most impressive logic is the data scraping engine, specifically the **Devpost Scraper**, which leverages Playwright (`chromium`) to handle dynamic DOM rendering and data extraction. It navigates a headless browser context to bypass client-side rendering limitations, extracting complex metadata (dates, prizes, images) and normalizing it into a unified schema for the platform.

**File:** `server/services/devpostService.ts`

## The True Stack (Evidence-Based)
*   **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Shadcn UI (`@radix-ui/*`), React Query (`@tanstack/react-query`), Lucide React.
*   **Backend**: Node.js, Express, TypeScript, Firebase Admin SDK (Firestore).
*   **Data & AI**: Playwright (Headless Browser), Cheerio, Groq SDK (Llama 3 Inference), Node-Cron.
*   **Utilities**: Zod (Validation), Date-fns, Dotenv.

## Architecture & Scale Indicators
*   **Database**: **Google Firestore** (NoSQL) is used for persistence, handling flexible schema for normalized hackathon data (`server/firebaseAdmin.ts`).
*   **Deployment**:
    *   **Backend**: Dockerized (presence of `Dockerfile` based on `mcr.microsoft.com/playwright`) likely for platforms like Render.
    *   **Frontend**: Vercel (inferred from `vercel.json`).
*   **Authentication**: currently reliant on Firebase Admin for backend security, but no user-facing auth implementation found in current code (roadmap item).
*   **Scalability**: The backend uses `node-cron` for scheduled data refreshment and splits scraping logic into isolated services (`services/mlhService.ts`, etc.) to allow independent scaling or failure handling.

## Product Features
1.  **AI-Powered Matchmaking**: Uses **Groq SDK (Llama 3)** to analyze user skills and location against hackathons, providing ranked recommendations with generated "match reasons" (`server/services/recommendationService.ts`).
2.  **Smart Intent Search**: A custom search engine that parses natural language queries (e.g., "paid online hackathons") to extract intent and apply complex filters (`server/routes/search.ts`).
3.  **Automated Aggregation**: Background workers autonomously scrape, normalize, and deduplicate hackathon listings from major platforms every 24 hours without manual intervention.
