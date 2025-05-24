# Personal Finance Tracker

A comprehensive application for tracking personal finances, enabling users to monitor and analyze their income and expenses with categorization and filtering options.

## Features

- 📝 Input Forms for recording income and expenses
- 🏷️ Custom categorization for income and expenses
- 🔍 Transaction management with sorting and filtering
- 📊 Visual data representation with charts
- 📤 CSV export functionality
- 💾 Persistent data storage using browser storage
- 📱 Responsive design for all device sizes

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Chart.js for data visualization
- Local Storage for data persistence

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── hooks/           # Custom React hooks
```

## Features in Detail

### Transaction Management
- Add income and expenses with amount, date, category, and notes
- View all transactions in a sortable and filterable list
- Filter by date range, category, and amount
- Export transactions to CSV

### Data Visualization
- Visual representation of income vs expenses
- Category-wise expense breakdown
- Monthly trends and analysis

### Data Persistence
- All data is stored in the browser's local storage
- Data persists across sessions
- Export/Import functionality for backup

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
