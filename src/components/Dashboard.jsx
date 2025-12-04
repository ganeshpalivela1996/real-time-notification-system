import React from 'react'
import ChartCard1 from './ChartCard1'
import ChartCard2 from './ChartCard2'

const Dashboard = () => {
    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartCard1 />
            <ChartCard2 />
        </div>
    )
}

export default Dashboard
