import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

interface SIPChartProps {
  sipAmount: number;
  sipInterestRate: number;
  sipDuration: number;
}

const SIPChart: React.FC<SIPChartProps> = ({
  sipAmount,
  sipInterestRate,
  sipDuration,
}) => {
  const r = sipInterestRate / 100 / 12; // Monthly interest rate
  const dataPoints = Array.from({ length: sipDuration * 12 }, (_, i) => {
    const n = i + 1;
    const maturityValue = sipAmount * (((1 + r) ** n - 1) / r) * (1 + r);
    const investedAmount = sipAmount * n; // Total amount invested up to this point
    const year = n / 12;
    return { x: year, maturityValue, investedAmount }; // Years, maturity value, and invested amount
  });

  

  const data = {
    labels: dataPoints.map((point) => point.x),
    datasets: [
      {
        label: "SIP Value Over Time",
        data: dataPoints.map((point) => point.maturityValue),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Invested Amount Over Time",
        data: dataPoints.map((point) => point.investedAmount),
        fill: false,
        borderColor: "rgba(192,75,75,1)",
        // borderDash: [5, 5], 
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default SIPChart;
