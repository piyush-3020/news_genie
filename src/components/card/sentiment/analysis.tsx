import React, { useState, useEffect } from "react";
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

// Define the prop type for the SentimentChart component
interface SentimentChartProps {
    description: string; // The news description passed as a prop
}

const SentimentChart: React.FC<SentimentChartProps> = ({ description }) => {
    const [sentimentScores, setSentimentScores] = useState([0, 0, 0]); // Default to [positive, negative, neutral]
    const towken = import.meta.env.VITE_ACCESS_CODE2;

    // Example function to fetch sentiment data
    const analyzeSentiment = async (text: string) => {
        const response = await fetch("https://api-inference.huggingface.co/models/Cloudy1225/stackoverflow-roberta-base-sentiment", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${towken}`, // Use your secure API key here
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: text }),
        });

        const result = await response.json();
        const scoresArray = ['positive', 'negative', 'neutral'].map(label =>
            result[0].find((item: any) => item.label === label)?.score * 100 || 0 // Default to 0 if missing
        );
        
        setSentimentScores(scoresArray); // Update state with sentiment scores
    };

    // Analyze sentiment whenever description prop changes
    useEffect(() => {
        if (description) {
            analyzeSentiment(description);
        }
    }, [description]); // Dependency array ensures effect runs when description changes

    // Chart data
    const data: ChartData<"doughnut"> = {
        labels: ["Positive", "Negative", "Neutral"],
        datasets: [
            {
                label: "Sentiment Analysis",
                data: sentimentScores, // Dynamic sentiment data
                backgroundColor: ["rgb(1, 178, 96)", "rgb(230, 80, 91)", "rgb(246, 138, 4)"],
                borderColor: ["#fff", "#fff", "#fff"],
                borderWidth: 2,
            },
        ],
    };

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
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
        cutout: "50%", 
        rotation: -90, 
        circumference: 180, 
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
