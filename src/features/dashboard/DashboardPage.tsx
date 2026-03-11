import React, { useState } from "react"
import ProfileHeader from "./components/ProfileHeader"
import FiltersPanel from "./components/FiltersPanel"
import SpendingTrendsChart from "./components/SpendingTrendsChart"
import CategoryBreakdownChart from "./components/CategoryBreakdownChart"
import { useDashboardData } from "./hooks/useDashboardData"
import { Wallet, TrendingUp, Target, Utensils, Car } from "lucide-react";
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

      <div className={styles.summaryHeader}>
        {profile && (
          <p className={styles.welcomeMessage}>
            Welcome back, <strong>{profile.name}</strong>. Here's your financial overview.
          </p>
        )}
      </div>

      {summary && (
        <div className={styles.summarySection}>

          {/* TOTAL SPENT CARD */}
        <div className={styles.totalSpentCard}>

          <div className={styles.totalCardHeader}>
            <div className={styles.cardIcon}>
              <Wallet size={22}/>
            </div>

            <TrendingUp
              size={20}
              className={styles.trendIcon}
            />
          </div>

          <p className={styles.totalLabel}>TOTAL SPENT</p>

          <h2 className={styles.totalAmount}>
            {profile?.currency} {summary.totalSpent.toLocaleString()}
          </h2>

          {/* Bottom Row */}
          <div className={styles.cardBottomRow}>
            <div className={styles.totalFooter}>
              Valid thru {summary.period}
            </div>

            <div className={styles.cardBrand}>
              <span className={styles.circleRed}></span>
              <span className={styles.circleOrange}></span>
            </div>
          </div>

        </div>

          {/* GOALS */}

          <div className={styles.goalsPreview}>

            <div className={styles.goalsTitle}>
              <Target size={18} />
              Spending Goals
            </div>

            <div className={styles.goalsGrid}>

              {goals?.slice(0,2).map((goal,index)=>{

                const icon =
                  goal.category.toLowerCase().includes("food")
                    ? <Utensils size={18}/>
                    : <Car size={18}/>

                return (

                  <div key={goal.id} className={styles.goalCard}>

                    <div className={styles.goalTop}>

                      <div className={styles.goalIcon}>
                        {icon}
                      </div>

                      <div className={styles.goalInfo}>
                        <span className={styles.goalName}>
                          {goal.category}
                        </span>

                        <span className={styles.goalDays}>
                          10 days remaining
                        </span>
                      </div>

                      <span className={styles.goalPercent}>
                        {goal.percentageUsed}%
                      </span>

                    </div>

                    <div className={styles.goalProgressBar}>
                      <div
                        className={styles.goalProgressFill}
                        style={{width:`${goal.percentageUsed}%`}}
                      />
                    </div>

                    <div className={styles.goalAmounts}>
                      <span className={styles.goalSpent}>
                        R {goal.currentSpent.toLocaleString()}
                      </span>

                      <span>
                        of R {goal.monthlyBudget.toLocaleString()}
                      </span>
                    </div>

                  </div>

                )

              })}

            </div>

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
