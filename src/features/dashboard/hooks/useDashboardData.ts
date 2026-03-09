import { useState, useEffect } from "react"
import type { Transaction, SpendingSummary, SpendingTrend, CategorySpending, Goal } from "../types"
import {
  mockTransactions,
  mockSummary,
  mockSpendingTrends,
  mockCategories,
  mockGoals
} from "../mockData"

interface UseDashboardDataProps {
  customerId: string
  filters?: {
    category?: string
    period?: string
    startDate?: string
    endDate?: string
  }
}

export const useDashboardData = ({ customerId, filters }: UseDashboardDataProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [summary, setSummary] = useState<SpendingSummary | null>(null)
  const [trends, setTrends] = useState<SpendingTrend[]>([])
  const [categories, setCategories] = useState<CategorySpending[]>([])
  const [goals, setGoals] = useState<Goal[]>([])
  const [profile, setProfile] = useState<any>(null) // add CustomerProfile type if you have it
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Function to fetch/refetch dashboard data
  const refetchData = (appliedFilters?: UseDashboardDataProps["filters"]) => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API delay
      setTimeout(() => {
        // Mock filtering logic (adjust as needed)
        let filteredTransactions = [...mockTransactions]
        if (appliedFilters?.category) {
          filteredTransactions = filteredTransactions.filter(
            (t) => t.category === appliedFilters.category
          )
        }

        setTransactions(filteredTransactions)
        setSummary(mockSummary)
        setTrends(mockSpendingTrends)
        setCategories(mockCategories)
        setGoals(mockGoals)
        setProfile({
          customerId,
          name: "Michael Peterson",
          email: "michael.peterson@gmail.com",
          joinDate: "2021-08-14",
          accountType: "Savings Account",
          totalSpent: 12875.45,
          currency: "ZAR"
        })

        setLoading(false)
      }, 500)
    } catch (err: any) {
      setError(err.message || "Failed to fetch data")
      setLoading(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    refetchData(filters)
  }, [customerId])

  return {
    profile,
    transactions,
    summary,
    trends,
    categories,
    goals,
    loading,
    error,
    refetchData
  }
}