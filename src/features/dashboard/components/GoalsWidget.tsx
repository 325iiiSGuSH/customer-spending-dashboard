import React from "react"
import type { Goal } from "../types"

interface GoalsWidgetProps {
  goals: Goal[]
}

const GoalsWidget: React.FC<GoalsWidgetProps> = ({ goals }) => {
  if (!goals || goals.length === 0) return <p>No goals available</p>

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Spending Goals</h2>

      <div className="space-y-4">
        {goals.map((goal) => {
          // Determine progress bar color based on status
          let progressColor = "bg-green-500"
          if (goal.status === "warning") progressColor = "bg-yellow-400"
          if (goal.status === "over_budget") progressColor = "bg-red-500"

          return (
            <div key={goal.id}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{goal.category}</span>
                <span className="text-sm text-gray-600">
                  {goal.percentageUsed.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded h-4">
                <div
                  className={`${progressColor} h-4 rounded`}
                  style={{ width: `${goal.percentageUsed}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {goal.currentSpent.toLocaleString("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                })}{" "}
                of{" "}
                {goal.monthlyBudget.toLocaleString("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                })}{" "}
                | {goal.daysRemaining} days remaining
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GoalsWidget