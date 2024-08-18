import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/store";
import { calculateLumpSumFutureValues } from "../../components/Utility/returnUtilities"; // Import the utility function
import style from "./../../styles/returnCalculator/returnCalculator.module.css";
import {
  setLumpSumAmount,
  setLumpSumDuration,
  setLumpSumInterestRate,
} from "../../store/slices/returnCalculatorSlice";

import PercentageSlider from "@/components/Sliders/percentage-slider";
import DefaultLayout from "@/layouts/default";
import SIPChart from "@/components/charts/sipReturnChart";

export default function ReturnCalculatorPage() {
  const lumpSumAmountL = useSelector(
    (state: RootState) => state.returnCalculator.lumpSumAmount
  );

  const lumpSumInterestPAL = useSelector(
    (state: RootState) => state.returnCalculator.lumpSumInterestPA
  );
  const lumpSumDurationL = useSelector(
    (state: RootState) => state.returnCalculator.lumpSumDuration
  );

  const dispatch = useDispatch();

  // Calculate future values and data points
  const { lumpSumFutureValue, totalMaturityValue, dataPoints } =
    calculateLumpSumFutureValues({
      lumpSumAmount: lumpSumAmountL,
      lumpSumInterestPA: lumpSumInterestPAL,
      lumpSumDuration: lumpSumDurationL,
    });

  const data = {
    labels: dataPoints.map((point) => point.x),
    datasets: [
      {
        label: "Total Value Over Time",
        data: dataPoints.map((point) => point.totalValue),
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Invested Amount Over Time",
        data: dataPoints.map((point) => point.investedAmount),
        borderColor: "rgba(192,75,75,1)",
      },
    ],
  };

  return (
    <DefaultLayout>
      <div className={style.main_container}>
        <div className={style.left_container}>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={500}
              minValue={0}
              maxValue={100000}
              formatOption={{ style: "currency", currency: "INR" }}
              label="Lump Sum Amount"
              showTooltip={true}
              defaultValue={5000}
              onChange={(value) => dispatch(setLumpSumAmount(value))}
            />
          </div>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={0.5}
              minValue={0}
              maxValue={40}
              label="Expected Return in (%)"
              showTooltip={false}
              defaultValue={12}
              onChange={(value) => dispatch(setLumpSumInterestRate(value))}
            />{" "}
          </div>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={1}
              minValue={0}
              maxValue={50}
              label="Years"
              showTooltip={true}
              defaultValue={20}
              onChange={(value) => dispatch(setLumpSumDuration(value))}
            />
          </div>
         
        </div>

        <div className={style.right_container}>
          <div className={style.chart_wrapper}>
            {" "}
            <SIPChart data={data} />
          </div>
        </div>
      </div>

      <div className={style.results_container}>
        <p>SIP Future Value: ₹{lumpSumFutureValue.toFixed(2)}</p>
        <p> lumpSumDuration: {lumpSumDurationL}</p>
        <p>Total Maturity Value: ₹{totalMaturityValue.toFixed(2)}</p>
      </div>
    </DefaultLayout>
  );
}
