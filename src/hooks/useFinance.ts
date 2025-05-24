import { useState, useEffect, useCallback } from "react";
import { Transaction, Category } from "../types";
import {
  getTransactions,
  saveTransaction,
  getCategories,
  saveCategory,
} from "../utils/storage";

// Custom event for local storage changes
const STORAGE_EVENT = "finance-storage-change";

export function useFinance() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // Load initial data
  useEffect(() => {
    setTransactions(getTransactions());
    setCategories(getCategories());
  }, []);

  // Listen for both local and cross-tab storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setTransactions(getTransactions());
      setCategories(getCategories());
    };

    // Listen for cross-tab changes
    window.addEventListener("storage", handleStorageChange);

    // Listen for local changes
    window.addEventListener(STORAGE_EVENT, handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(STORAGE_EVENT, handleStorageChange);
    };
  }, []);

  const triggerStorageUpdate = useCallback(() => {
    window.dispatchEvent(new Event(STORAGE_EVENT));
  }, []);

  const addTransaction = useCallback(
    (transaction: Omit<Transaction, "id">) => {
      const newTransaction: Transaction = {
        ...transaction,
        id: Date.now().toString(),
      };
      saveTransaction(newTransaction);
      setTransactions((prev) => [...prev, newTransaction]);
      triggerStorageUpdate();
    },
    [triggerStorageUpdate]
  );

  const addCategory = useCallback(
    (category: Omit<Category, "id">) => {
      const newCategory: Category = {
        ...category,
        id: Date.now().toString(),
      };
      saveCategory(newCategory);
      setCategories((prev) => [...prev, newCategory]);
      triggerStorageUpdate();
    },
    [triggerStorageUpdate]
  );

  return {
    transactions,
    categories,
    addTransaction,
    addCategory,
  };
}
