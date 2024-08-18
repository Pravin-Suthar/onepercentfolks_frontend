import DefaultLayout from "@/layouts/default";
import { useEffect, useRef } from "react";
import { ColorType, createChart, IChartApi } from "lightweight-charts";
import style from "@/styles/tradersCorner/liveMarket.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getStockData } from "@/store/slices/traderCornerSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

export default function ChartTVRender() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null); // Correctly typed
  const candlestickSeriesRef = useRef<any>(null);
  const dispatch = useAppDispatch();

  const selectedStockDataL = useSelector(
    (state: RootState) => state.traderCorner.selectedStockData
  );

  useEffect(() => {
    if (!chartContainerRef.current) return;

    if (!chartRef.current) {
      const chartOptions = {
        layout: {
          textColor: "black",
          background: { type: ColorType.Solid, color: "white" },
        },
      };

      chartRef.current = createChart(chartContainerRef.current, chartOptions);

      candlestickSeriesRef.current = chartRef.current.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
    }

    if (selectedStockDataL.length > 0 && candlestickSeriesRef.current) {
      candlestickSeriesRef.current.setData(selectedStockDataL);
      chartRef.current?.timeScale().fitContent();
    }
  }, [selectedStockDataL]);

  const handleButtonClick = () => {
    console.log("Button clicked");
    dispatch(getStockData());
  };

  return (
    <DefaultLayout>
      <div className={style.main_container}>
        <div className={style.main_container_left}>
          <button onClick={handleButtonClick}>
            <h1>Live Market</h1>
          </button>
        </div>
        <div className={style.main_container_right}>
          <h1>
            TradingView Lightweight Charts™ Copyright (с) 2023 TradingView, Inc.
            https://www.tradingview.com/
          </h1>
          <div
            ref={chartContainerRef}
            style={{ height: "400px", width: "600px" }}
          ></div>
        </div>
      </div>
    </DefaultLayout>
  );
}
