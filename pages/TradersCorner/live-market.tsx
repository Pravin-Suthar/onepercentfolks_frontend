import DefaultLayout from "@/layouts/default";
import { useEffect, useRef } from "react";
import { ColorType, createChart, IChartApi } from "lightweight-charts";
import style from "@/styles/tradersCorner/liveMarket.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getStockData } from "@/store/slices/traderCornerSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { tradingInstrumentData } from "@/config/tradingInstrumentData";
import {
  Listbox,
  ListboxItem,
  Chip,
  ScrollShadow,
  Avatar,
} from "@nextui-org/react";

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

  const handleButtonClick = (instrumentKey: string) => {
    console.log("Button clicked");
    dispatch(getStockData(instrumentKey));
  };

  return (
    <DefaultLayout>
      <div className={style.main_container}>
        <div className={style.main_container_left}>
          <h1>Live Market</h1>
          {/* <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100"> */}
          <Listbox
            topContent={"topContent"}
            classNames={{
              base: "max-w-xs",
              list: "max-h-[300px] overflow-scroll",
            }}
            items={tradingInstrumentData.instruments}
            label="Assigned to"
            selectionMode="single"
            variant="flat"
            onSelectionChange={(selectedItem) => {
              if (selectedItem) {
                // Convert Set to array and extract the first item
                /* */
                const selectedKey = Array.from(selectedItem)[0];
                handleButtonClick(selectedKey.toString());
              }
            }}
          >
            {(item) => (
              <ListboxItem key={item.id} textValue={item.name}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item.name}
                    className="flex-shrink-0"
                    size="sm"
                    src={item.name}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{item.name}</span>
                    <span className="text-tiny text-default-400">
                      {item.name}
                    </span>
                  </div>
                </div>
              </ListboxItem>
            )}
          </Listbox>
          {/* </div> */}
        </div>
        <div className={style.main_container_right}>
          <h1>
            TradingView Lightweight Charts™ Copyright (с) 2023 TradingView,
            Inc. https://www.tradingview.com/
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
