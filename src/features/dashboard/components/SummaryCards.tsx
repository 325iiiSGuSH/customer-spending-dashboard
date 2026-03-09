import React from "react";

interface SummaryItem {
  title: string;
  amount: number;
}

interface Props {
  data?: SummaryItem[] | null; // <- allow undefined or null
}

const SummaryCards: React.FC<Props> = ({ data }) => {
  // Provide a fallback empty array if data is null/undefined
  const summaryData = data || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-gray-500 text-sm mb-2">{item.title}</h3>
          <p className="text-2xl font-bold text-green-600">
            R{item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
      ))}

      {/* Show placeholder if no data */}
      {summaryData.length === 0 && (
        <p className="col-span-3 text-center text-gray-400">
          No summary data available
        </p>
      )}
    </div>
  );
};

export default SummaryCards;