import { useState } from 'react';
import { Category, TransactionType } from '../types';
import { useFinance } from '../hooks/useFinance';

export default function CategoryForm() {
    const { addCategory } = useFinance();
    const [formData, setFormData] = useState<Partial<Category>>({
        name: '',
        type: 'expense',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.type) return;

        addCategory({
            name: formData.name,
            type: formData.type as TransactionType,
        });

        setFormData({
            name: '',
            type: 'expense',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value as TransactionType })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
            </div>

            <div className="mt-4 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Category
                </button>
            </div>
        </form>
    );
} 