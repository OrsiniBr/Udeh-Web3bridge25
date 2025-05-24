import { Transaction, Category } from "../types";

const STORAGE_KEYS = {
  TRANSACTIONS: "finance_tracker_transactions",
  CATEGORIES: "finance_tracker_categories",
};

export const getTransactions = (): Transaction[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
  return data ? JSON.parse(data) : [];
};

export const saveTransaction = (transaction: Transaction): void => {
  const transactions = getTransactions();
  transactions.push(transaction);
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
};

export const getCategories = (): Category[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
  return data ? JSON.parse(data) : [];
};

export const saveCategory = (category: Category): void => {
  const categories = getCategories();
  categories.push(category);
  localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
};

export const exportToCSV = (transactions: Transaction[]): string => {
  const headers = ["Date", "Type", "Category", "Amount", "Notes"];
  const rows = transactions.map((t) => [
    t.date,
    t.type,
    t.category,
    t.amount.toString(),
    t.notes || "",
  ]);

  return [headers, ...rows].map((row) => row.join(",")).join("\n");
};
