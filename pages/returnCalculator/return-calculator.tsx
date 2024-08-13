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
        <PercentageSlider
          step={500}
          minValue={500}
          maxValue={500000}
          formatOption={{ style: "currency", currency: "INR" }}
          label="Sip Amount"
          showTooltip={true}
          defaultValue={50}
          onChange={(value) => dispatch(setSipAmount(value))}
        />
        <PercentageSlider
          step={0.05}
          minValue={0}
          maxValue={50}
          formatOption={{ style: "percent" }}
          label="Expected Return in (%)"
          showTooltip={true}
          defaultValue={12}
          onChange={(value) => dispatch(setSipInterestRate(value))}
        />{" "}
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
      <div>Slider 1 Value: {sipAmountL}</div>
      <div>Slider 1 Value: {sipInterestPAl}</div>
      <div>Slider 1 Value: {sipDurationL}</div>
    </DefaultLayout>
  );
}
