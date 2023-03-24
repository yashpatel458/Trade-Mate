import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useState } from "react";

export default function StockChart(props) {
    const { data, buySellIndicators } = props;
  // const [showFlags, setShowFlags] = useState(false); //display flags when showFlags is true

  // Initialize state for controlling the displayed flags
  const [displayedFlags, setDisplayedFlags] = useState(0);

  // Filter the data based on the latest flag clicked
  const filteredData = data.filter(
    (item) => item.timestamp <= buySellIndicators[displayedFlags].timestamp
  );
  const filterIndicators = buySellIndicators.slice(0, displayedFlags + 1);

  const chartOptions = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "#000",
      style: {
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
    series: [
      {
        type: "line",
        name: "Stock Price",
        data: filteredData.map((item) => [item.timestamp, item.price]),
        color: "#21B6A8",
      },
      // {
      //   type: "line",
      //   name: "new stock Stock Price",
      //   data: data.map((item: any) => [item.timestamp, item.price + 20]),
      //   color: "blue",
      // },
      {
        type: "flags",
        // name: "Buy/Sell Indicators",
        data: filterIndicators.map((indicator) => ({
          x: indicator.timestamp,
          y: indicator.price,
          title: indicator.action.toUpperCase(),
          text: `$${indicator.price.toFixed(2)}`,
          margin: "2px",
          shape: "circlepin",
          fillColor: indicator.action === "buy" ? "#28a745" : "#dc3545",
        })),
        onSeries: "Stock Price",
        shape: "squarepin",
        width: 20,
        color: Highcharts.getOptions().colors?.at(1), // same as onSeries
        fillColor: Highcharts.getOptions().colors?.at(2),
        // visible: showFlags,
      },
    ],
    xAxis: {
      type: "datetime",
      title: {
        style: {
          color: "#FFF",
        },
        text: "Time",
      },
      labels: {
        style: {
          color: "#FFF",
        },
      },
    },
    yAxis: {
      title: {
        text: "Price ",
        style: {
          color: "#FFF",
        },
      },
      labels: {
        style: {
          color: "#FFF",
        },
      },
      gridLineWidth: 0,
    },
    rangeSelector: {
      allButtonsEnabled: true,
      enabled: true,
      labelStyle: {
        color: "#FFF",
        fontWeight: "bold",
      },
      buttons: [
        // {
        //   type: "day",
        //   count: 1,
        //   text: "1D",
        // },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        // {
        //   type: "week",
        //   count: 1,
        //   text: "1W",
        // },
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

  const handleButtonClick = () => {
    if (displayedFlags < buySellIndicators.length - 1)
      setDisplayedFlags(displayedFlags + 1);
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <button onClick={() => handleButtonClick()}>Display Next</button>
      </div>
    </>
  )
}
