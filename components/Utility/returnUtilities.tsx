interface DataPoint {
  x: number; // Represents years
  totalValue: number;
  investedAmount: number;
}

interface InvestmentData {
  sipAmount: number;
  lumpSumAmount: number;
  sipInterestRate: number;
  sipDuration: number;
  recurringLumpSumFrequency: number;
}

export const calculateFutureValues = ({
  sipAmount,
  lumpSumAmount,
  sipInterestRate,
  sipDuration,
  recurringLumpSumFrequency,
}: InvestmentData) => {
  const r = sipInterestRate / 100 / 12; // Monthly interest rate

  // Calculate the future value of the initial lump sum investment
  const lumpSumFutureValue = lumpSumAmount * (1 + r) ** (sipDuration * 12);

  // Calculate the future value of the SIP contributions
  const sipFutureValue = sipAmount * (((1 + r) ** (sipDuration * 12) - 1) / r) * (1 + r);

  // Calculate the future value of recurring lump sum investments
  const recurringLumpSumFutureValue = Array.from({ length: sipDuration * 12 }, (_, i) => {
    if (recurringLumpSumFrequency === 3 && (i + 1) % 3 === 0) { // Quarterly
      return lumpSumAmount * (1 + r) ** (sipDuration * 12 - i);
    } else if (recurringLumpSumFrequency === 6 && (i + 1) % 6 === 0) { // Every 6 months
      return lumpSumAmount * (1 + r) ** (sipDuration * 12 - i);
    } else if (recurringLumpSumFrequency === 12 && (i + 1) % 12 === 0) { // Yearly
      return lumpSumAmount * (1 + r) ** (sipDuration * 12 - i);
    }
    return 0;
  }).reduce((acc, val) => acc + val, 0);

  // Total maturity value is the sum of the initial lump sum, recurring lump sums, and SIP future values
  const totalMaturityValue = lumpSumFutureValue + sipFutureValue + recurringLumpSumFutureValue;

  // Generate data points for the chart
  const dataPoints: DataPoint[] = Array.from({ length: sipDuration * 4 }, (_, i) => {
    const quarter = i + 1;
    const n = quarter * 3; // Number of months for the current quarter
    const lumpSumPart = lumpSumAmount * (1 + r) ** n;
    const sipPart = sipAmount * (((1 + r) ** n - 1) / r) * (1 + r);
    const recurringLumpSumPart = Array.from({ length: n }, (_, j) => {
      if (recurringLumpSumFrequency === 3 && (j + 1) % 3 === 0) {
        return lumpSumAmount * (1 + r) ** (n - j);
      } else if (recurringLumpSumFrequency === 6 && (j + 1) % 6 === 0) {
        return lumpSumAmount * (1 + r) ** (n - j);
      } else if (recurringLumpSumFrequency === 12 && (j + 1) % 12 === 0) {
        return lumpSumAmount * (1 + r) ** (n - j);
      }
      return 0;
    }).reduce((acc, val) => acc + val, 0);

    const totalValue = lumpSumPart + sipPart + recurringLumpSumPart;
    const investedAmount = sipAmount * n + lumpSumAmount + (lumpSumAmount * Math.floor(n / recurringLumpSumFrequency)); // Total invested amount
    const year = quarter / 4; // Convert quarters to years
    return { x: year, totalValue, investedAmount }; // Years, maturity value, and invested amount
  });

  return { lumpSumFutureValue, sipFutureValue, recurringLumpSumFutureValue, totalMaturityValue, dataPoints };
};
