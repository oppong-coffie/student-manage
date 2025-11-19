import React from 'react'
import FinanceCard from '../../components/dashboard3/Finance-card.jsx'
import TransactionsTrend from '../../components/dashboard3/Transaction-trend.jsx'
import TopPerforming from '../../components/dashboard3/Top-performing.jsx'
import TransactionTrends from '../../components/dashboard3/Transaction-trends.jsx'
export const Financial = () => {
  return (
    <div>
        <FinanceCard />
        <TransactionsTrend />
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-5">
                <TopPerforming />
            </div>
            <div className="col-span-3">
                <TransactionTrends />
            </div>
        </div>
    </div>
  )
}

export default Financial