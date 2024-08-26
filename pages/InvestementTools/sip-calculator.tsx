import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/store";
import {
  setSipInterestRate,
  setSipAmount,
  setSipDuration
} from  "@/redux/reducers/returnCalculatorSlice";
import { calculateFutureValues } from "../../components/Utility/returnUtilities"; // Import the utility function

import style from "./../../styles/returnCalculator/returnCalculator.module.css";



import PercentageSlider from "@/components/Sliders/percentage-slider";
import DefaultLayout from "@/layouts/default";
import SIPChart from "@/components/charts/sipReturnChart";

export default function ReturnCalculatorPage() {
  const sipAmountL = useSelector((state: RootState) => state.returnCalculator.sipAmount);

  const sipInterestPAl = useSelector(
    (state: RootState) => state.returnCalculator.sipInterestPA
  );
  const sipDurationL = useSelector(
    (state: RootState) => state.returnCalculator.sipDuration
  );

  const dispatch = useDispatch();

  // Calculate future values and data points
  const { sipFutureValue, totalMaturityValue, dataPoints } =
    calculateFutureValues({
      sipAmount: sipAmountL,
      sipInterestRate: sipInterestPAl,
      sipDuration: sipDurationL,
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
              defaultValue={5000}
              formatOption={{ style: "currency", currency: "INR" }}
              label="SIP Amount"
              minValue={0}
              maxValue={100000}
              showTooltip={true}
              onChange={(value) => dispatch(setSipAmount(value))}
            />
          </div>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={1}
              minValue={0}
              maxValue={50}
              label="Years"
              showTooltip={true}
              defaultValue={20}
              onChange={(value) => dispatch(setSipDuration(value))}
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
              onChange={(value) => dispatch(setSipInterestRate(value))}
            />{" "}
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
        <p>SIP Future Value: ₹{sipFutureValue.toFixed(2)}</p>
        <p>Recurring Lump Sum Future Value: ₹</p>
        <p>Total Maturity Value: ₹{totalMaturityValue.toFixed(2)}</p>
      </div>
    </DefaultLayout>
  );
}
