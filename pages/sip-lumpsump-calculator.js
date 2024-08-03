import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layouts/layout';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function FirstPost() {
  const [SIP, setSIP] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [years, setYears] = useState(0);
  const [stepDirection, setStepDirection] = useState('step_up');
  const [stepPercent, setStepPercent] = useState(0);
  const [chartData, setChartData] = useState({});

  const calculateInvestment = () => {
    let investmentData = [];
    let returnData = [];
    let currentSIP = SIP;
    let totalInvestment = 0;
    let totalReturn = 0;

    for (let i = 0; i < years; i++) {
      totalInvestment += currentSIP * 12;
      totalReturn = totalInvestment * (1 + expectedReturn / 100) ** (i + 1);
      investmentData.push(totalInvestment);
      returnData.push(totalReturn);

      if (stepDirection === 'step_up') {
        currentSIP += (currentSIP * stepPercent) / 100;
      } else {
        currentSIP -= (currentSIP * stepPercent) / 100;
      }
    }

    setChartData({
      labels: Array.from({ length: years }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Total Investment',
          data: investmentData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
        {
          label: 'Total Return',
          data: returnData,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true,
        },
      ],
    });
  };

  return (
    <Layout>
      <Head>
        <title>Lump Sum Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log('script loaded correctly, window.FB has been populated')
        }
      />
      <h1>Lump Sum Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateInvestment();
        }}
      >
        <div>
          <label>SIP Amount:</label>
          <input
            type="text"
            value={SIP}
            onChange={(e) => setSIP(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Expected Return (%):</label>
          <input
            type="text"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Years:</label>
          <input
            type="text"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Step Direction:</label>
          <select
            value={stepDirection}
            onChange={(e) => setStepDirection(e.target.value)}
          >
            <option value="step_up">Step Up</option>
            <option value="step_down">Step Down</option>
          </select>
        </div>
        <div>
          <label>Step Percentage (%):</label>
          <input
            type="text"
            value={stepPercent}
            onChange={(e) => setStepPercent(Number(e.target.value))}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {chartData.labels && (
        <Line data={chartData} />
      )}
      <h2>
        <Link href="/home">Back to home</Link>
      </h2>
    </Layout>
  );
}
