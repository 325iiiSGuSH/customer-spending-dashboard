import type { SpendingTrend, CategorySpending, Transaction, Goal, SpendingSummary } from "./types"

export const mockSpendingTrends: SpendingTrend[] = [
  { month: "Jan", totalSpent: 285000, transactionCount: 145, averageTransaction: 1965 },
  { month: "Feb", totalSpent: 312500, transactionCount: 168, averageTransaction: 1860 },
  { month: "Mar", totalSpent: 428900, transactionCount: 210, averageTransaction: 2042 },
  { month: "Apr", totalSpent: 515700, transactionCount: 244, averageTransaction: 2113 },
  { month: "May", totalSpent: 689300, transactionCount: 298, averageTransaction: 2313 },
  { month: "Jun", totalSpent: 948875, transactionCount: 356, averageTransaction: 2665 },
]

export const mockCategories: CategorySpending[] = [
  {
    name: "Luxury Dining",
    amount: 185000,
    percentage: 20,
    transactionCount: 62,
    color: "#F59E0B",
    icon: "🥩"
  },
  {
    name: "Designer Shopping",
    amount: 260000,
    percentage: 27,
    transactionCount: 88,
    color: "#EC4899",
    icon: "🛍️"
  },
  {
    name: "Travel & Flights",
    amount: 310000,
    percentage: 33,
    transactionCount: 41,
    color: "#3B82F6",
    icon: "✈️"
  },
  {
    name: "Nightlife",
    amount: 95000,
    percentage: 10,
    transactionCount: 74,
    color: "#8B5CF6",
    icon: "🍾"
  },
  {
    name: "Tech & Gadgets",
    amount: 98875,
    percentage: 10,
    transactionCount: 25,
    color: "#10B981",
    icon: "💻"
  }
]

export const mockTransactions: Transaction[] = [
  {
    id: "t1",
    date: "2025-06-02",
    merchant: "Louis Vuitton",
    category: "Designer Shopping",
    amount: 28450,
    description: "Luxury handbag purchase",
    paymentMethod: "Black Card"
  },
  {
    id: "t2",
    date: "2025-06-03",
    merchant: "Private Jet Charter",
    category: "Travel & Flights",
    amount: 185000,
    description: "Johannesburg to Dubai private flight",
    paymentMethod: "Wire Transfer"
  },
  {
    id: "t3",
    date: "2025-06-04",
    merchant: "The Test Kitchen",
    category: "Luxury Dining",
    amount: 12650,
    description: "Chef tasting experience",
    paymentMethod: "Card"
  },
  {
    id: "t4",
    date: "2025-06-06",
    merchant: "Apple Store",
    category: "Tech & Gadgets",
    amount: 42500,
    description: "MacBook Pro + accessories",
    paymentMethod: "Card"
  },
  {
    id: "t5",
    date: "2025-06-07",
    merchant: "Taboo Nightclub",
    category: "Nightlife",
    amount: 18400,
    description: "VIP table booking",
    paymentMethod: "Card"
  },
  {
    id: "t6",
    date: "2025-06-10",
    merchant: "Gucci",
    category: "Designer Shopping",
    amount: 32600,
    description: "Designer clothing purchase",
    paymentMethod: "Card"
  }
]

export const mockGoals: Goal[] = [
  {
    id: "g1",
    category: "Luxury Dining",
    monthlyBudget: 120000,
    currentSpent: 185000,
    percentageUsed: 154,
    daysRemaining: 8,
    status: "exceeded"
  },
  {
    id: "g2",
    category: "Designer Shopping",
    monthlyBudget: 200000,
    currentSpent: 260000,
    percentageUsed: 130,
    daysRemaining: 8,
    status: "exceeded"
  },
  {
    id: "g3",
    category: "Travel & Flights",
    monthlyBudget: 350000,
    currentSpent: 310000,
    percentageUsed: 89,
    daysRemaining: 8,
    status: "warning"
  }
]

export const mockSummary: SpendingSummary = {
  period: "June 2025",
  totalSpent: 948875.45,
  transactionCount: 356,
  averageTransaction: 2665,
  topCategory: "Travel & Flights"
}
