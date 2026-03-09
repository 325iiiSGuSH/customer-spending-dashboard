import React, { useState, useEffect } from "react"

interface Category {
  name: string
  color: string
  icon: string
}

interface DateRangePreset {
  label: string
  value: string
}

interface FiltersPanelProps {
  categories: Category[]
  dateRangePresets: DateRangePreset[]
  onChange: (filters: { category: string; period: string; startDate?: string; endDate?: string }) => void
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({ categories, dateRangePresets, onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedPeriod, setSelectedPeriod] = useState<string>("30d")
  const [customStart, setCustomStart] = useState<string>("")
  const [customEnd, setCustomEnd] = useState<string>("")

  // Call onChange whenever filters update
  useEffect(() => {
    if (selectedPeriod === "custom" && customStart && customEnd) {
      onChange({ category: selectedCategory, period: selectedPeriod, startDate: customStart, endDate: customEnd })
    } else {
      onChange({ category: selectedCategory, period: selectedPeriod })
    }
  }, [selectedCategory, selectedPeriod, customStart, customEnd])

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-end gap-4 mb-6">
      
      {/* Category Filter */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Category</label>
        <select
          className="border rounded px-3 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date Range Filter */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Date Range</label>
        <select
          className="border rounded px-3 py-2"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          {dateRangePresets.map((preset) => (
            <option key={preset.value} value={preset.value}>
              {preset.label}
            </option>
          ))}
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Custom Date Inputs */}
      {selectedPeriod === "custom" && (
        <div className="flex gap-2">
          <input
            type="date"
            value={customStart}
            onChange={(e) => setCustomStart(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <input
            type="date"
            value={customEnd}
            onChange={(e) => setCustomEnd(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
      )}
    </div>
  )
}

export default FiltersPanel