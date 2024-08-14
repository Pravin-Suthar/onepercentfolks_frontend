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
  data: any;
}

const SIPChart: React.FC<SIPChartProps> = ({
  data,
}) => {

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default SIPChart;
