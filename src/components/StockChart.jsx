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
          padding: "20px",
          shape: "circlepin",
          fillColor: indicator.action === "buy" ? "#28a745" : "#dc3545",
        })),
        onSeries: "Stock Price",
        shape: "squarepin",
        width: 24,
        height:23,
        color: Highcharts.getOptions().colors?.at(1), // same as onSeries
        fillColor: Highcharts.getOptions().colors?.at(2),
        // visible: showFlags,
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
        // {
        //     type: "week",
        //     count: 1,
        //     text: "1W",
        //   },
        // {
        //     type:"week",
        //     count: 1,
        //     text:"1W",
        // },
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

  const handleButtonClick = () => {
    if (displayedFlags < buySellIndicators.length - 1)
      setDisplayedFlags(displayedFlags + 1);
  };
  const handleDisplayallFlag = () => {
    if (displayedFlags < buySellIndicators.length - 1)
      setDisplayedFlags(buySellIndicators.length - 1);
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <a
          onClick={() => handleButtonClick()}
          className="btn predict-button"
        >
          Display Next
        </a>
        <a
          onClick={() => handleDisplayallFlag()}
          className="btn predict-button"
        >
          Display All
        </a>

      </div>
    </>
  );
}
