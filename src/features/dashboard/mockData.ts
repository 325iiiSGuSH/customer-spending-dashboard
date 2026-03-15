import type { SpendingTrend, CategorySpending, Transaction, Goal, SpendingSummary } from "./types"

export const mockSpendingTrends: SpendingTrend[] = [
  { month: "Jan", totalSpent: 325400, transactionCount: 162, averageTransaction: 2008 },
  { month: "Feb", totalSpent: 402800, transactionCount: 195, averageTransaction: 2065 },
  { month: "Mar", totalSpent: 518900, transactionCount: 236, averageTransaction: 2198 },
  { month: "Apr", totalSpent: 637500, transactionCount: 284, averageTransaction: 2244 },
  { month: "May", totalSpent: 812300, transactionCount: 318, averageTransaction: 2554 },
  { month: "Jun", totalSpent: 1094850, transactionCount: 402, averageTransaction: 2723 },
]

export const mockCategories: CategorySpending[] = [
  {
    name: "Fine Dining",
    amount: 210500,
    percentage: 19,
    transactionCount: 78,
    color: "#F59E0B",
    icon: "🍷"
  },
  {
    name: "Luxury Fashion",
    amount: 305200,
    percentage: 28,
    transactionCount: 102,
    color: "#EC4899",
    icon: "🛍️"
  },
  {
    name: "International Travel",
    amount: 365000,
    percentage: 33,
    transactionCount: 46,
    color: "#3B82F6",
    icon: "✈️"
  },
  {
    name: "Entertainment & Clubs",
    amount: 120800,
    percentage: 11,
    transactionCount: 95,
    color: "#8B5CF6",
    icon: "🍾"
  },
  {
    name: "Electronics & Tech",
    amount: 93450,
    percentage: 9,
    transactionCount: 32,
    color: "#10B981",
    icon: "📱"
  }
]

export const mockTransactions: Transaction[] = [
  {
    id: "t1",
    date: "2025-06-02",
    merchant: "Rolex Boutique",
    category: "Luxury Fashion",
    amount: 145000,
    description: "Rolex Submariner purchase",
    paymentMethod: "Black Card"
  },
  {
    id: "t2",
    date: "2025-06-04",
    merchant: "Emirates First Class",
    category: "International Travel",
    amount: 98000,
    description: "First class flight Johannesburg → London",
    paymentMethod: "Card"
  },
  {
    id: "t3",
    date: "2025-06-05",
    merchant: "La Colombe Restaurant",
    category: "Fine Dining",
    amount: 18400,
    description: "Tasting menu & wine pairing",
    paymentMethod: "Card"
  },
  {
    id: "t4",
    date: "2025-06-07",
    merchant: "Samsung Store",
    category: "Electronics & Tech",
    amount: 28500,
    description: "Galaxy Fold + accessories",
    paymentMethod: "Card"
  },
  {
    id: "t5",
    date: "2025-06-09",
    merchant: "Saint Champagne Lounge",
    category: "Entertainment & Clubs",
    amount: 23500,
    description: "VIP lounge table",
    paymentMethod: "Card"
  },
  {
    id: "t6",
    date: "2025-06-11",
    merchant: "Prada",
    category: "Luxury Fashion",
    amount: 47200,
    description: "Designer jacket purchase",
    paymentMethod: "Card"
  }
]

export const mockGoals: Goal[] = [
  {
    id: "g1",
    category: "Fine Dining",
    monthlyBudget: 180000,
    currentSpent: 210500,
    percentageUsed: 117,
    daysRemaining: 10,
    status: "exceeded"
  },
  {
    id: "g2",
    category: "Luxury Fashion",
    monthlyBudget: 250000,
    currentSpent: 305200,
    percentageUsed: 122,
    daysRemaining: 10,
    status: "exceeded"
  },
  {
    id: "g3",
    category: "International Travel",
    monthlyBudget: 400000,
    currentSpent: 365000,
    percentageUsed: 91,
    daysRemaining: 10,
    status: "warning"
  }
]

export const mockSummary: SpendingSummary = {
  period: "June 2025",
  totalSpent: 1094850.30,
  transactionCount: 402,
  averageTransaction: 2723,
  topCategory: "International Travel"
}