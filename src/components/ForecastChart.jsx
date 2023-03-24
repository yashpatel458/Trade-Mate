import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useState } from "react";

export default function ForecastChart(props) {
  const { data, arimaForecastData, lstmForecastData, title } = props;

  const chartOptions = {
    title: {
      text: title,
    },
    chart: {
      backgroundColor: "#000",
      style: {
        fontFamily: "Poppins",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: "15px",
      },
    },

    scrollbar: {
      enabled: true,
      style: {
        color: "#000",
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "YYYY-MM-DD",
            },
          },
        },
      ],
    },
    series: [
      {
        type: "line",
        name: "Stock Price",
        data: data.map((item) => [item.timestamp, item.price]),
        color: "#818589",
      },
      {
        type: "line",
        name: "Arima",
        data: arimaForecastData.map((item) => [item.timestamp, item.price]),
        color: "blue",
      },
      {
        type: "line",
        name: "Lstm",
        data: lstmForecastData.map((item) => [item.timestamp, item.price]),
        color: "green",
      },
    ],
    xAxis: {
      type: "datetime",
      title: {
        style: {
          color: "#5ca9fb",
        },
        text: "Date",
      },
      labels: {
        style: {
          color: "#ffffffdd",
        },
        formatter: function () {
          // format the datetime label to show only the date
          return Highcharts.dateFormat("%Y-%m-%d", this.value);
        },
        dateTimeLabelFormats: {
          day: "%Y-%m-%d",
        },
      },
      lineWidth: 0,
    },
    yAxis: {
      title: {
        text: "Price ",
        style: {
          color: "#34d797",
        },
      },
      labels: {
        style: {
          color: "#ffffffdd",
        },
      },
      gridLineWidth: 0,
      lineWidth: 0,
    },
    rangeSelector: {
      allButtonsEnabled: true,
      enabled: true,
      labelStyle: {
        color: "#FFF",
        fontWeight: "bold",
      },
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        {
          type: "month",
          count: 6,
          text: "6M",
        },
        {
          type: "all",
          text: "All",
        },
        // {
        //   type: "all",
        //   text: "BUY/SELL",
        // events: {
        //   click: function () {
        //     setShowFlags(true);
        //   },
        // },
        // },
      ],
      inputEnabled: true,
      selected: 3, // Default to showing all data
    },
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      {/* <div>
        <a onClick={() => handleButtonClick()} className="btn predict-button">
          Display Next
        </a>
        <a
          onClick={() => handleDisplayallFlag()}
          className="btn predict-button"
        >
          Display All
        </a>
      </div> */}
    </>
  );
}
