"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ChartCard1() {
    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Weekly Notifications</h2>

            <Bar
                data={{
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    datasets: [
                        {
                            label: "Notifications",
                            data: [12, 19, 7, 14, 10, 5],
                            backgroundColor: "rgba(59, 130, 246, 0.7)",
                        },
                    ],
                }}
            />
        </div>
    );
}
