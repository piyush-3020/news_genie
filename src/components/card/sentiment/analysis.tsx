import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from "chart.js";
import "./SentimentChart.css"; // Import CSS

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin for showing percentages on the half-doughnut chart
const percentagePlugin = {
    id: "percentagePlugin",
    afterDatasetDraw(chart: any) {
        const { ctx, data } = chart;
        const meta = chart.getDatasetMeta(0);
        const dataset = data.datasets[0];
        const total = dataset.data.reduce((acc: number, value: number) => acc + value, 0);

        meta.data.forEach((datapoint: any, index: number) => {
            const { x, y } = datapoint.tooltipPosition();
            const value = dataset.data[index];
            const percentage = ((value / total) * 100).toFixed(1) + "%";

            ctx.fillStyle = "#fff"; // Text color
            ctx.font = "bold 10px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(percentage, x, y); // Draw percentage at tooltip position
        });
    },
};

const SentimentChart: React.FC = () => {
    const data: ChartData<"doughnut"> = {
        labels: ["Positive", "Negative", "Neutral"], // Labels for legend
        datasets: [
            {
                label: "Sentiment Analysis",
                data: [60, 20, 20], // Sentiment percentages
                backgroundColor: ["rgb(1, 178, 96)", "rgb(230, 80, 91)", "rgb(246, 138, 4)"], // Colors for each sentiment
                borderColor: ["#fff", "#fff", "#fff"], // Borders around segments
                borderWidth: 2,
            },
        ],
    };

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true, // Disable the legend (hides labels above chart)
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || "";
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
        cutout: "50%", // Creates the hole for the donut chart
        rotation: -90, // Start angle for half-doughnut
        circumference: 180, // Display only half of the chart
    };

    return (
        <div className="chart-container">
            <p className="chart-title">News Analysis</p>
            <Doughnut
                data={data}
                options={options}
                plugins={[percentagePlugin]}
            />
        </div>
    );
};

export default SentimentChart;
