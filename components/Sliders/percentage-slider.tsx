import React from "react";
import { Slider } from "@nextui-org/react";

interface PercentageSliderProps {
  step: number;
  minValue: number;
  maxValue: number;
  label: string;
  formatOption?: Intl.NumberFormatOptions;
  showTooltip: boolean;
  defaultValue: number;
  onChange: (value: number) => void; // New prop for handling change
}

export default function PercentageSlider({
  step,
  minValue,
  maxValue,
  label,
  formatOption,
  showTooltip,
  defaultValue,
  onChange,
}: PercentageSliderProps) {
  return (
    <Slider
      step={step}
      minValue={minValue}
      maxValue={maxValue}
      label={label}
      showTooltip={showTooltip}
      formatOptions={formatOption}
      tooltipValueFormatOptions={formatOption}
      defaultValue={defaultValue}
      onChange={(value) => {
        if (typeof value === "number") {
          onChange(value);
        }
      }} // Attach onChange handler
      className="max-w-md"
    />
  );
}
