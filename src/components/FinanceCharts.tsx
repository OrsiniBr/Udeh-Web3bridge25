import { Transaction, TransactionType } from '../types';
import { Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

interface FinanceChartsProps {
    transactions: Transaction[];
}

export function FinanceCharts({ transactions }: FinanceChartsProps) {
    const [selectedType, setSelectedType] = useState<TransactionType>('expense');

    // Group transactions by date and type for line chart
    const groupedData = transactions.reduce((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) {
            acc[date] = { income: 0, expense: 0 };
        }
        if (transaction.type === 'income') {
            acc[date].income += transaction.amount;
        } else {
            acc[date].expense += transaction.amount;
        }
        return acc;
    }, {} as Record<string, { income: number; expense: number }>);

    const dates = Object.keys(groupedData).sort();
    const incomeData = dates.map(date => groupedData[date].income);
    const expenseData = dates.map(date => groupedData[date].expense);

    // Group transactions by category for pie chart
    const transactionsByCategory = transactions.reduce((acc, transaction) => {
        const category = transaction.category;
        if (!acc[transaction.type][category]) {
            acc[transaction.type][category] = 0;
        }
        acc[transaction.type][category] += transaction.amount;
        return acc;
    }, { income: {}, expense: {} } as Record<'income' | 'expense', Record<string, number>>);

    const categories = Object.keys(transactionsByCategory[selectedType]);
    const categoryAmounts = categories.map(category => transactionsByCategory[selectedType][category]);

    // Generate random colors for pie chart
    const generateColors = (count: number) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const hue = (i * 360) / count;
            colors.push(`hsl(${hue}, 70%, 50%)`);
        }
        return colors;
    };

    const pieColors = generateColors(categories.length);

    const lineChartData = {
        labels: dates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.5)',
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: 'rgb(239, 68, 68)',
                backgroundColor: 'rgba(239, 68, 68, 0.5)',
            },
        ],
    };

    const pieChartData = {
        labels: categories,
        datasets: [
            {
                data: categoryAmounts,
                backgroundColor: pieColors,
                borderColor: pieColors.map(color => color.replace('0.5', '1')),
                borderWidth: 1,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Income vs Expenses Over Time',
            },
        },
    };

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
            legend: {
                position: 'right' as const,
            },
        },
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-full">
            <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <div className="h-[400px]">
                    <Line options={lineChartOptions} data={lineChartData} />
                </div>
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                        {selectedType === 'income' ? 'Income' : 'Expenses'} by Category
                    </h3>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setSelectedType('income')}
                            className={`px-4 py-2 rounded-md ${selectedType === 'income'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Income
                        </button>
                        <button
                            onClick={() => setSelectedType('expense')}
                            className={`px-4 py-2 rounded-md ${selectedType === 'expense'
                                ? 'bg-red-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Expenses
                        </button>
                    </div>
                </div>
                <div className="h-[400px]">
                    <Pie options={pieChartOptions} data={pieChartData} />
                </div>
            </div>
        </div>
    );
}