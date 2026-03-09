import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { SpendingTrend } from "../types"

interface SpendingTrendsChartProps {
  data: SpendingTrend[]
}

const SpendingTrendsChart: React.FC<SpendingTrendsChartProps> = ({ data }) => {
  if (!data || data.length === 0) return <p>No trend data available</p>

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Monthly Spending Trends</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `R${value.toLocaleString()}`}
            width={60}
          />
          <Tooltip
            formatter={(value: number) => [`R${value.toLocaleString()}`, "Spent"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Line type="monotone" dataKey="totalSpent" stroke="#4ECDC4" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingTrendsChart