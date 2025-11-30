# CS EdTech - Open Source Learning Hub

A modern, open-source platform for computer science education. This project aggregates high-quality resources like Harvard's CS50 and FreeCodeCamp into structured, interactive learning paths.

## Features

- **Open Access:** No sign-ups or paywalls.
- **Curated Paths:** Structured roadmaps for CS Fundamentals and Web Development.
- **Interactive Journey Maps:** Visual progress tracking (client-side).
- **Modern UI:** Dark mode, glassmorphism, and responsive design.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `src/app/page.tsx`: Landing page.
- `src/app/curriculum/page.tsx`: Main curriculum explorer.
- `src/components/JourneyMap.tsx`: Visualization component for learning paths.
- `src/data/curriculum.ts`: Data file containing course modules and links.
