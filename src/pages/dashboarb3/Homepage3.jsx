import React from 'react'
import StatCards from "../../components/dashboard3/StatCards.jsx"
import AnalyticsCharts from "../../components/dashboard3/AnalyticsCharts.jsx"
import DashboardTables from "../../components/dashboard3/DashboardTables.jsx"


export const Home = () => {
  return (
    <div>
        <StatCards />
         <AnalyticsCharts />
         <DashboardTables />
    </div>
  )
}

export default Home