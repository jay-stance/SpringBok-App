import React from 'react'
import AppText from '../../components/AppText/AppText';
import Cards from '../../components/Cards/Cards';
import Chart from 'react-apexcharts';

import "./Dashboard.css"

const chartOptions = {
  series: [{
      name: 'Vine Kitchen',
      data: [40,70,20,90,36,80,30,91,60]
  }, {
      name: 'Cresta',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legend: {
          position: 'top'
      },
      grid: {
          show: false
      }
  }
}

const donutChartOptions = {
  series: [44, 55, 41, 17, 15],
  labels: ['Vine Kitchen', 'Cresta', 'Cresta', 'Cresta', 'Cresta'],
  colors: ['#6ab04c', '#2980b9', '#6ab04c', '#2980b9', '#6ab04c'],
}


const Dashboard = () => {
  return (
      <div className="main">
        <div className='top'>
          <AppText name="Overview" header />
          <div className="cards">
            <Cards textStyle={{color: "#6fd3a1"}} title="Total Disbursement" amount="246,00" />
            <Cards textStyle={{color: "#ff8a8a"}} title="Total Disbursement" amount="246,00" />
            <Cards textStyle={{color: "#bfbdff"}} title="Total Disbursement" amount="246,00" />
            <Cards textStyle={{color: "#bfbdff"}} title="Total Disbursement" amount="246,00" />
          </div>
        </div>

        <div className="bottom">
          <AppText name="Resturant Sales" header />
          <div className="bottom_main">
            <div className="left">
              <Cards textStyle={{color: "#6fd3a1"}} title="Total Disbursement" amount="246,00" />
              <Cards textStyle={{color: "#ff8a8a"}} title="Total Disbursement" amount="246,00" />
              <Cards textStyle={{color: "#bfbdff"}} title="Total Disbursement" amount="246,00" />
              <Cards textStyle={{color: "#bfbdff"}} title="Total Disbursement" amount="246,00" />
              <Cards textStyle={{color: "#6fd3a1"}} title="Total Disbursement" amount="246,00" />
              <Cards textStyle={{color: "#ff8a8a"}} title="Total Disbursement" amount="246,00" />
            </div>
            <div className="right">
              <Chart
                options={donutChartOptions}
                series={donutChartOptions.series}
                type='donut'
                height='300px'
              />

              <Chart
                options={{
                    ...chartOptions.options,
                    theme: { mode: 'light'}
                }}
                series={chartOptions.series}
                type='bar'
                height='300px'
              />
            </div>

          </div>
        </div>
      </div>
    )
}

export default Dashboard;