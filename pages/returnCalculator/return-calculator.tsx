import PercentageSlider from "@/components/Sliders/percentage-slider";
import style from "./../../styles/returnCalculator/returnCalculator.module.css";
import DefaultLayout from "@/layouts/default";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  setSipInterestRate,
  setSipAmount,
  setSipDuration,
  setLumpSumAmount,
  setRecurringLumpSumFrequency,
} from "../../store/slices/returnCalculatorSlice";
import SIPChart from "@/components/charts/sipReturnChart";
import { calculateFutureValues } from "../../components/Utility/returnUtilities"; // Import the utility function

export default function ReturnCalculatorPage() {
  const sipAmountL = useSelector((state: RootState) => state.example.sipAmount);
  const lumpSumAmountL = useSelector((state: RootState) => state.example.lumpSumAmount);
  const sipInterestPAl = useSelector(
    (state: RootState) => state.example.sipInterestPA
  );
  const sipDurationL = useSelector(
    (state: RootState) => state.example.sipDuration
  );
  const recurringLumpSumFrequency = useSelector(
    (state: RootState) => state.example.recurringLumpSumFrequency
  );

  const dispatch = useDispatch();

  // Calculate future values and data points
  const { lumpSumFutureValue, sipFutureValue, recurringLumpSumFutureValue, totalMaturityValue, dataPoints } = calculateFutureValues({
    sipAmount: sipAmountL,
    lumpSumAmount: lumpSumAmountL,
    sipInterestRate: sipInterestPAl,
    sipDuration: sipDurationL,
    recurringLumpSumFrequency: recurringLumpSumFrequency
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
              step={10000}
              minValue={0}
              maxValue={1000000}
              formatOption={{ style: "currency", currency: "INR" }}
              label="Lump Sum Amount"
              showTooltip={true}
              defaultValue={100000}
              onChange={(value) => dispatch(setLumpSumAmount(value))}
            />
          </div>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={500}
              minValue={500}
              maxValue={100000}
              formatOption={{ style: "currency", currency: "INR" }}
              label="SIP Amount"
              showTooltip={true}
              defaultValue={5000}
              onChange={(value) => dispatch(setSipAmount(value))}
            />
          </div>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={0.1}
              minValue={0}
              maxValue={40}
              label="Expected Return in (%)"
              showTooltip={false}
              defaultValue={12}
              onChange={(value) => dispatch(setSipInterestRate(value))}
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
              onChange={(value) => dispatch(setSipDuration(value))}
            />
          </div>

          {/* Select for Recurring Lump Sum Frequency */}
          <div className={style.left_container_slider_container}>
            <label htmlFor="recurringFrequency">Recurring Lump Sum Frequency:</label>
            <select
              id="recurringFrequency"
              className={style.select}
              onChange={(e) =>
                dispatch(setRecurringLumpSumFrequency(Number(e.target.value)))
              }
            >
              <option value={3}>Quarterly</option>
              <option value={6}>Every 6 months</option>
              <option value={12}>Yearly</option>
            </select>
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
        <p>Lump Sum Future Value: ₹{lumpSumFutureValue.toFixed(2)}</p>
        <p>SIP Future Value: ₹{sipFutureValue.toFixed(2)}</p>
        <p>Recurring Lump Sum Future Value: ₹{recurringLumpSumFutureValue.toFixed(2)}</p>
        <p>Total Maturity Value: ₹{totalMaturityValue.toFixed(2)}</p>
      </div>
    </DefaultLayout>
  );
}