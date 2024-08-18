interface DataPoint {
  x: number; // Represents years
  totalValue: number;
  investedAmount: number;
}

interface SipInvestmentData {
  sipAmount: number;
  sipInterestRate: number;
  sipDuration: number;
}

export const calculateFutureValues = ({
  sipAmount,
  sipInterestRate,
  sipDuration,
}: SipInvestmentData) => {
  const r = sipInterestRate / 100 / 12; // Monthly interest rate
  const n = sipDuration * 12; // Total number of months

  // Calculate the future value of the SIP contributions
  const sipFutureValue = sipAmount * (((1 + r) ** n - 1) / r) * (1 + r);

  // Total maturity value is the SIP future value
  const totalMaturityValue = sipFutureValue;

  // Generate data points for the chart
  const dataPoints: DataPoint[] = Array.from(
    { length: sipDuration * 4 },
    (_, i) => {
      const quarter = i + 1;
      const months = quarter * 3; // Number of months for the current quarter
      const investedAmount = sipAmount * months;
      const futureValue = sipAmount * (((1 + r) ** months - 1) / r) * (1 + r);
      const year = quarter / 4; // Convert quarters to years

      return { x: year, totalValue: futureValue, investedAmount }; // Years, maturity value, and invested amount
    }
  );

  return { sipFutureValue, totalMaturityValue, dataPoints };
};

interface LumpSumInvestmentData {
  lumpSumAmount: number;
  lumpSumInterestPA: number;
  lumpSumDuration: number;
}

export const calculateLumpSumFutureValues = ({
  lumpSumAmount,
  lumpSumInterestPA,
  lumpSumDuration,
}: LumpSumInvestmentData) => {
  const r = lumpSumInterestPA / 100; // Monthly interest rate as a decimal
  const n = lumpSumDuration; // Total number of months

  const lumpSumFutureValue = lumpSumAmount * (1 + r) ** n;

  // Total maturity value is the same as the lump sum future value at the end of the term
  const totalMaturityValue = lumpSumFutureValue;
  // Total maturity value is the lump sum future value

  const mr = lumpSumInterestPA / 100 / 12; // Monthly interest rate
  // Generate data points for the chart
  const dataPoints: DataPoint[] = Array.from(
    { length: lumpSumDuration * 12 },
    (_, i) => {
      const months = lumpSumDuration * 12; // Number of months for the current quarter
      const investedAmount = lumpSumAmount;
      const futureValue = lumpSumAmount * (1 + mr) ** i;
      return { x: months, totalValue: futureValue, investedAmount }; // Years, maturity value, and invested amount
    }
  );

  return { lumpSumFutureValue, totalMaturityValue, dataPoints };
};
