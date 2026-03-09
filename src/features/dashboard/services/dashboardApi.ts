import { apiClient } from "../../../services/apiClient"
import type {
  CustomerProfile,
  SpendingSummary,
  CategorySpending,
  SpendingTrend,
  Transaction,
  Goal
} from "../types"

export const getCustomerProfile = async (
  customerId: string
): Promise<CustomerProfile> => {
  const res = await apiClient.get(`/api/customers/${customerId}/profile`)
  return res.data
}

export const getSpendingSummary = async (
  customerId: string
): Promise<SpendingSummary> => {
  const res = await apiClient.get(`/api/customers/${customerId}/spending/summary`)
  return res.data
}

export const getCategoryBreakdown = async (
  customerId: string
): Promise<CategorySpending[]> => {
  const res = await apiClient.get(`/api/customers/${customerId}/spending/categories`)
  return res.data.categories
}

export const getSpendingTrends = async (
  customerId: string
): Promise<SpendingTrend[]> => {
  const res = await apiClient.get(`/api/customers/${customerId}/spending/trends`)
  return res.data.trends
}

export const getTransactions = async (
  customerId: string
): Promise<Transaction[]> => {
  const res = await apiClient.get(`/api/customers/${customerId}/transactions`)
  return res.data.transactions
}

export const getGoals = async (
  customerId: string
): Promise<Goal[]> => {
  const res = await apiClient.get(`/api/customers/${customerId}/goals`)
  return res.data.goals
}