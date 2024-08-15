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
import { useTheme } from "next-themes";

interface SIPChartProps {
  data: any;
}

const SIPChart: React.FC<SIPChartProps> = ({ data }) => {
  const { theme } = useTheme();
  return (
    <div>
      <Line
        data={data}
        options={{
          scales: {
            x: {
              ticks: {
                color: theme === "dark" ? "#ffffff" : "#000000", // Dynamic label color based on theme
              },
            },
            y: {
              ticks: {
                color: theme === "dark" ? "#ffffff" : "#000000", // Dynamic label color based on theme
              },
              grid: {
                color: theme === "dark" ? "#43C19C" : "#e0e0e0", // Customize grid line color
              },
            },
          },
        }}
      />
    </div>
  );
};

export default SIPChart;
