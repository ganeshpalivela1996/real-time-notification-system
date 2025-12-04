"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export default function ChartCard2() {
    return (
        <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Monthly Activity Overview</h2>

            <Line
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            label: "Active Users",
                            data: [100, 150, 120, 180, 220, 200],
                            borderColor: "rgba(59,130,246,1)",
                            pointBackgroundColor: "rgba(59,130,246,1)",
                            borderWidth: 2,
                            tension: 0.3,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        legend: { display: false },
                    },
                    scales: {
                        x: { grid: { display: false } },
                        y: { grid: { color: "rgba(0,0,0,0.05)" } },
                    },
                }}
            />
        </div>
    );
}
