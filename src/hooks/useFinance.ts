import { useState, useEffect, useCallback } from "react";
import { Transaction, Category } from "../types";
import {
  getTransactions,
  saveTransaction,
  getCategories,
  saveCategory,
} from "../utils/storage";

const STORAGE_EVENT = "finance-storage-change";

export function useFinance() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setTransactions(getTransactions());
    setCategories(getCategories());
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setTransactions(getTransactions());
      setCategories(getCategories());
    };

    window.addEventListener("storage", handleStorageChange);

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
