import React, { useState } from "react"
import ProfileHeader from "./components/ProfileHeader"
import FiltersPanel from "./components/FiltersPanel"
import SpendingTrendsChart from "./components/SpendingTrendsChart"
import CategoryBreakdownChart from "./components/CategoryBreakdownChart"
import { useDashboardData } from "./hooks/useDashboardData"

import CapitecLogo from "../../assets/capitec-logo.svg"
import styles from "./DashboardPage.module.css"

interface Filters {
  category: string
  period: string
  startDate?: string
  endDate?: string
}

const DashboardPage: React.FC = () => {

  const customerId = "customer123"

  const [filters, setFilters] = useState<Filters>({
    category: "",
    period: "30d",
  })

  const {
    profile,
    summary,
    categories,
    trends,
    transactions,
    goals,
    loading,
    error,
    refetchData,
  } = useDashboardData({ customerId, filters })

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters)
    refetchData?.(newFilters)
  }

  if (loading) {
    return (
      <div className={styles.centerMessage}>
        Loading dashboard...
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.errorMessage}>
        {error}
      </div>
    )
  }

  return (
    <div className={styles.dashboardPage}>

      {/* ================= HEADER ================= */}

      <header className={styles.header}>

        <div className={styles.headerLeft}>
          <img
            src={CapitecLogo}
            alt="Capitec Logo"
            className={styles.logo}
          />
        </div>

        <ProfileHeader profile={profile} />

      </header>


      {/* ================= SUMMARY ================= */}
          <div>
            {/* <h1 className={styles.title}>Dashboard</h1> */}

            {profile && (
              <p className={styles.welcomeMessage}>
                Welcome back, <strong>{profile.name}</strong>. Here's your financial overview.
              </p>
            )}
          </div>
      {summary && (
        <div className={styles.summarySection}>

          {/* Total Spent Card */}
          <div className={styles.totalSpentCard}>

            <div className={styles.totalCardHeader}>
              <div className={styles.cardIcon}>💳</div>
              <span className={styles.trendIcon}>↗</span>
            </div>

            <p className={styles.totalLabel}>TOTAL SPENT</p>

            <h2 className={styles.totalAmount}>
              {profile?.currency} {summary.totalSpent.toLocaleString()}
            </h2>

            <div className={styles.totalFooter}>
              Valid thru {summary.period}
            </div>

          </div>


          {/* Goals Preview */}
          <div className={styles.goalsPreview}>

            <h3 className={styles.goalsTitle}>Spending Goals</h3>

            {goals?.slice(0, 2).map((goal) => (

              <div key={goal.id} className={styles.goalItem}>

                <div className={styles.goalHeader}>
                  <span>{goal.category}</span>
                  <span>{goal.percentageUsed}%</span>
                </div>

                <div className={styles.goalProgressBar}>
                  <div
                    className={styles.goalProgressFill}
                    style={{ width: `${goal.percentageUsed}%` }}
                  />
                </div>

                <div className={styles.goalAmounts}>
                  <span>R{goal.currentSpent}</span>
                  <span>of R{goal.monthlyBudget}</span>
                </div>

              </div>

            ))}

          </div>

        </div>
      )}


      {/* ================= FILTERS ================= */}

      <div className={styles.card}>

        <div className={styles.filtersBar}>

          <FiltersPanel
            categories={[]}
            dateRangePresets={[
              { label: "Last 7 days", value: "7d" },
              { label: "Last 30 days", value: "30d" },
              { label: "Last 90 days", value: "90d" },
              { label: "Last year", value: "1y" },
            ]}
            onChange={handleFiltersChange}
          />

        </div>

      </div>


      {/* ================= CHARTS ================= */}

      <div className={styles.chartsGrid}>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Spending Trends</h2>
          <SpendingTrendsChart data={trends ?? []} />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Category Breakdown</h2>
          <CategoryBreakdownChart data={categories ?? []} />
        </div>

      </div>


      {/* ================= TRANSACTIONS ================= */}

      <div className={styles.card}>

        <h2 className={styles.cardTitle}>Transactions</h2>

        {transactions?.length ? (

          <div className={styles.tableContainer}>

            <table className={styles.table}>

              <thead>
                <tr>
                  <th>Merchant</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>

                {transactions.map((tx) => (

                  <tr key={tx.id}>

                    <td>{tx.merchant}</td>

                    <td>{tx.description}</td>

                    <td>{tx.category}</td>

                    <td>{tx.paymentMethod}</td>

                    <td>{tx.date}</td>

                    <td className={styles.transactionAmountDebit}>
                      R{tx.amount.toFixed(2)}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        ) : (
          <p>No transactions found.</p>
        )}

      </div>


      {/* ================= GOALS ================= */}

      <div className={styles.card}>

        <h2 className={styles.cardTitle}>Goals</h2>

        {goals?.length ? (

          <div className={styles.tableContainer}>

            <table className={styles.table}>

              <thead>
                <tr>
                  <th>Category</th>
                  <th>Budget</th>
                  <th>Spent</th>
                  <th>Usage</th>
                  <th>Days Left</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {goals.map((goal) => (

                  <tr key={goal.id}>

                    <td>{goal.category}</td>

                    <td>R{goal.monthlyBudget.toFixed(2)}</td>

                    <td>R{goal.currentSpent.toFixed(2)}</td>

                    <td>

                      <div className={styles.progressWrapper}>

                        <div className={styles.progressBar}>

                          <div
                            className={
                              goal.status === "warning"
                                ? styles.progressFillWarning
                                : styles.progressFill
                            }
                            style={{ width: `${goal.percentageUsed}%` }}
                          />

                        </div>

                        <span className={styles.progressText}>
                          {goal.percentageUsed}%
                        </span>

                      </div>

                    </td>

                    <td>{goal.daysRemaining} days</td>

                    <td
                      className={
                        goal.status === "warning"
                          ? styles.goalStatusWarning
                          : styles.goalStatusOnTrack
                      }
                    >
                      {goal.status}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        ) : (
          <p>No goals set yet.</p>
        )}

      </div>

    </div>
  )
}

export default DashboardPage
