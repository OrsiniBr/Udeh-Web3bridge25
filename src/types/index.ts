export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;
  category: string;
  notes?: string;
}

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
}

export interface FilterOptions {
  startDate?: string;
  endDate?: string;
  category?: string;
  type?: TransactionType;
  minAmount?: number;
  maxAmount?: number;
}
