import PercentageSlider from "@/components/Sliders/percentage-slider";
import style from "./../../styles/returnCalculator/returnCalculator.module.css";
import DefaultLayout from "@/layouts/default";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  setSipInterestRate,
  setSipAmount,
  setSipDuration,
} from "../../store/slices/returnCalculatorSlice";
import SIPChart from "@/components/charts/sipReturnChart";

export default function ReturnCalculatorPage() {
  const sipAmountL = useSelector((state: RootState) => state.example.sipAmount);
  const sipInterestPAl = useSelector(
    (state: RootState) => state.example.sipInterestPA
  );

  const sipDurationL = useSelector(
    (state: RootState) => state.example.sipDuration
  );

  const dispatch = useDispatch();

  return (
    <DefaultLayout>
      <div className={style.main_container}>
        <div className={style.left_container}>
          <div className={style.left_container_slider_container}>
            <PercentageSlider
              step={500}
              minValue={500}
              maxValue={100000}
              formatOption={{ style: "currency", currency: "INR" }}
              label="Sip Amount"
              showTooltip={true}
              defaultValue={50}
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
              maxValue={30}
              label="Years"
              showTooltip={true}
              defaultValue={20}
              onChange={(value) => dispatch(setSipDuration(value))}
            />
          </div>
        </div>

        <div className={style.right_container}>
          {" "}
          <SIPChart
            sipAmount={sipAmountL}
            sipInterestRate={sipInterestPAl}
            sipDuration={sipDurationL}
          />
        </div>
      </div>
      <div>Slider 1 Value: {sipAmountL}</div>
      <div>Slider 1 Value: {sipInterestPAl}</div>
      <div>Slider 1 Value: {sipDurationL}</div>
    </DefaultLayout>
  );
}
