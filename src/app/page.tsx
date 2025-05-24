'use client';

import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import CategoryForm from '../components/CategoryForm';

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Personal Finance Tracker</h1>
                    <p className="mt-2 text-gray-600">Track your income and expenses with ease</p>
                </div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TransactionForm />
                        <CategoryForm />
                    </div>
                    <TransactionList />
                </div>
            </div>
        </main>
    );
} 