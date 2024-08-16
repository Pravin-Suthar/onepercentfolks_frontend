import DefaultLayout from "@/layouts/default";
import { useEffect, useRef } from "react";
import { ColorType, createChart, IChartApi } from "lightweight-charts";

export default function ChartTVRender() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null); // Correctly typed

  useEffect(() => {
    if (!chartContainerRef.current || chartRef.current) return;

    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: ColorType.Solid, color: "white" },
      },
    };

    chartRef.current = createChart(chartContainerRef.current, chartOptions);

    const candlestickSeries = chartRef.current.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candlestickSeries.setData([
      {
        time: "2018-12-22",
        open: 75.16,
        high: 82.84,
        low: 36.16,
        close: 45.72,
      },
      { time: "2018-12-23", open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
      {
        time: "2018-12-24",
        open: 60.71,
        high: 60.71,
        low: 53.39,
        close: 59.29,
      },
      { time: "2018-12-25", open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
      {
        time: "2018-12-26",
        open: 67.71,
        high: 105.85,
        low: 66.67,
        close: 91.04,
      },
      { time: "2018-12-27", open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
    ]);

    chartRef.current.timeScale().fitContent();
  }, []);

  return (
    <DefaultLayout>
      <h1>Pattern Detection</h1>
      <div
        ref={chartContainerRef}
        style={{ height: "400px", width: "600px" }}
      ></div>
      <h1>TradingView Lightweight Charts™
      Copyright (с) 2023 TradingView, Inc. https://www.tradingview.com/</h1>
    </DefaultLayout>
  );
}
