import React from "react";

interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
}

interface Props {
  transactions: Transaction[];
}

const TransactionsList: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mt-6">

      <h2 className="text-lg font-semibold mb-4">
        Recent Transactions
      </h2>

      <div className="space-y-3">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between border-b pb-2"
          >
            <div>
              <p className="font-medium">{t.merchant}</p>
              <p className="text-sm text-gray-500">{t.date}</p>
            </div>

            <p className="font-bold text-red-500">
              - R{t.amount}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TransactionsList;