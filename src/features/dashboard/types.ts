export interface CustomerProfile {
  customerId: string
  name: string
  email: string
  joinDate: string
  accountType: string
  totalSpent: number
  currency: string
}

export interface SpendingSummary {
  period: string
  totalSpent: number
  transactionCount: number
  averageTransaction: number
  topCategory: string
}

export interface CategorySpending {
  name: string
  amount: number
  percentage: number
  transactionCount: number
  color: string
  icon: string
}

export interface SpendingTrend {
  month: string
  totalSpent: number
  transactionCount: number
  averageTransaction: number
}


export interface Transaction {
  id: string
  date: string
  merchant: string
  category: string
  amount: number
  description: string
  paymentMethod: string
}

export interface Goal {
  id: string
  category: string
  monthlyBudget: number
  currentSpent: number
  percentageUsed: number
  daysRemaining: number
  status: string
}