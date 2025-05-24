'use client';

import TransactionForm from "@/components/TransactionForm";
import CategoryForm from "@/components/CategoryForm";
import TransactionList from "@/components/TransactionList";
import { FinanceCharts } from "@/components/FinanceCharts";
import { useFinance } from "@/hooks/useFinance";

export default function Home() {
    const { transactions, categories, addTransaction, addCategory } = useFinance();

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Personal Finance Tracker
                    </h1>
                    <p className="text-lg text-gray-600">
                        Track your income and expenses with ease
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Add Transaction
                        </h2>
                        <TransactionForm
                            categories={categories}
                            onSubmit={addTransaction}
                        />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Add Category
                        </h2>
                        <CategoryForm onSubmit={addCategory} />
                    </div>
                </div>

                <div className="mb-8">
                    <FinanceCharts transactions={transactions} />
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Transactions
                    </h2>
                    <TransactionList transactions={transactions} />
                </div>
            </div>
        </main>
    );
} 