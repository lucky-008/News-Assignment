This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




📝 1. Project Overview

The Live Hindustan Clone is a news web application built using Next.js (App Router) and TypeScript. It fetches live news data from an external News API and displays it in a structured, responsive, and SEO-friendly manner.

The objective of this project is to replicate the core functionality and UI/UX experience of hindustantimes.com/livehindustan or livehindustan.com.



🏗️ 2. Tech Stack
Technology	Purpose
Next.js 13/14+ (App Router)	Server-side rendering, routing, API handling
TypeScript	Type-safety and robust development
React	UI components
Tailwind CSS / CSS Modules	Styling
NewsAPI / custom news API	Fetching latest news
Clerk Authentication (optional)	User login & session management


📁 3. Folder Structure
/app
 ├── layout.tsx
 ├── page.tsx
 ├── news/
 │    ├── page.tsx
 │    ├── [category]/page.tsx
 │    └── [id]/page.tsx
/components
 │    ├── Navbar.tsx
 │    ├── Footer.tsx
 │    ├── NewsCard.tsx
 │    ├── Hero.tsx
 │    ├── Spinner.tsx
/lib
 │    ├── fetchNews.ts
/public
/styles
.env
next.config.js
tsconfig.json
package.json




🔐 4. Environment Variables
.env
NEWS_API_KEY=your_key_here
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxx
CLERK_SECRET_KEY=sk_xxx






🔄 5. How the App Works
✔ Step 1: User visits homepage

Layout loads (header, navbar, footer)

Home section displays:

Hero banner

Trending news

Latest headlines