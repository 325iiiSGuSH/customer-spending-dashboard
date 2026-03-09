import type { SpendingTrend, CategorySpending, Transaction, Goal, SpendingSummary } from "./types"

export const mockSpendingTrends: SpendingTrend[] = [
  { month: "Jan", totalSpent: 1200, transactionCount: 12, averageTransaction: 100 },
  { month: "Feb", totalSpent: 950, transactionCount: 10, averageTransaction: 95 },
  { month: "Mar", totalSpent: 1400, transactionCount: 14, averageTransaction: 100 },
  { month: "Apr", totalSpent: 1100, transactionCount: 11, averageTransaction: 100 },
  { month: "May", totalSpent: 1700, transactionCount: 17, averageTransaction: 100 },
  { month: "Jun", totalSpent: 1500, transactionCount: 15, averageTransaction: 100 },
]

export const mockCategories: CategorySpending[] = [
  {
    name: "Food",
    amount: 600,
    percentage: 38,
    transactionCount: 12,
    color: "#4CAF50",
    icon: "🍔"
  },
  {
    name: "Transport",
    amount: 300,
    percentage: 19,
    transactionCount: 6,
    color: "#2196F3",
    icon: "🚗"
  },
  {
    name: "Shopping",
    amount: 450,
    percentage: 28,
    transactionCount: 5,
    color: "#FF9800",
    icon: "🛍️"
  },
  {
    name: "Entertainment",
    amount: 200,
    percentage: 15,
    transactionCount: 3,
    color: "#9C27B0",
    icon: "🎬"
  }
]

export const mockTransactions: Transaction[] = [
  {
    id: "t1",
    date: "2025-06-01",
    merchant: "Woolworths",
    category: "Food",
    amount: 120,
    description: "Woolworths grocery purchase",
    paymentMethod: "Card"
  },
  {
    id: "t2",
    date: "2025-06-02",
    merchant: "Uber",
    category: "Transport",
    amount: 80,
    description: "Uber ride to work",
    paymentMethod: "Card"
  },
  {
    id: "t3",
    date: "2025-06-03",
    merchant: "Takealot",
    category: "Shopping",
    amount: 300,
    description: "Online order",
    paymentMethod: "Card"
  },
  {
    id: "t4",
    date: "2025-06-04",
    merchant: "Netflix",
    category: "Entertainment",
    amount: 150,
    description: "Monthly subscription",
    paymentMethod: "Card"
  }
]

export const mockGoals: Goal[] = [
  {
    id: "g1",
    category: "Food",
    monthlyBudget: 800,
    currentSpent: 600,
    percentageUsed: 75,
    daysRemaining: 10,
    status: "warning"
  },
  {
    id: "g2",
    category: "Transport",
    monthlyBudget: 500,
    currentSpent: 300,
    percentageUsed: 60,
    daysRemaining: 10,
    status: "on-track"
  }
]

export const mockSummary: SpendingSummary = {
  period: "June 2025",
  totalSpent: 2500,
  transactionCount: 24,
  averageTransaction: 104,
  topCategory: "Food"
}