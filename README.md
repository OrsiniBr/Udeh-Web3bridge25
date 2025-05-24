# Personal Finance Tracker

A modern web application for tracking personal income and expenses with interactive charts and filtering capabilities.

## Live Demo

Check out the live demo: [Personal Finance Tracker](https://udeh-web3bridge25-mjik.vercel.app/)

## Features

- 📊 Interactive charts for visualizing income and expenses
- 💰 Track both income and expenses
- 📱 Responsive design for all devices
- 🔍 Advanced filtering options
- 📁 Export transactions to CSV
- 🏷️ Custom category management
- 📈 Real-time data visualization

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Chart.js
- React Chart.js 2

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/OrsiniBr/Udeh-Web3bridge25.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   └── page.tsx           # Main application page
├── components/
│   ├── CategoryForm.tsx   # Category management form
│   ├── FinanceCharts.tsx  # Interactive charts
│   ├── TransactionForm.tsx # Transaction input form
│   └── TransactionList.tsx # Transaction display and filtering
├── hooks/
│   └── useFinance.ts      # Custom hook for finance management
└── types/
    └── index.ts           # TypeScript type definitions
```

## Features in Detail

### Transaction Management
- Add income and expense transactions
- Categorize transactions
- Add notes to transactions
- Filter transactions by date, type, and amount

### Category Management
- Create custom categories
- Separate categories for income and expenses
- Easy category selection in transaction form

### Data Visualization
- Line chart showing income vs expenses over time
- Interactive pie chart for category distribution
- Toggle between income and expense views

### Data Export
- Export filtered transactions to CSV
- Download transaction history for record-keeping


