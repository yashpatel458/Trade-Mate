import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import StockChart from "../StockChart";
import predictStyle from "./predict.style";
import Dropdown from "../../global/components/DropDown/Dropdown";
import CustomButton from "../../global/components/CustomButton/CustomButton";
import { stocks } from "../../data/stocks";
import { Grid } from "@material-ui/core";
// import DatePicker from "react-datepicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import {
  fetchChartData,
  fetchBuySellData,
  fetchForecastData,
} from "./predictService";
import "react-datepicker/dist/react-datepicker.css";
import CustomLoader from "../../global/components/CustomLoader/CustomLoader";
import ForecastChart from "../ForecastChart";
import { margin } from "@mui/system";

export const Predict = (props) => {
  const data_ = [
    { timestamp: Date.parse("2016-01-04"), price: 100 },
    { timestamp: Date.parse("2016-01-05"), price: 110 },
    { timestamp: Date.parse("2016-01-06"), price: 120 },
    { timestamp: Date.parse("2016-01-07"), price: 130 },
    { timestamp: Date.parse("2016-01-08"), price: 140 },
    { timestamp: Date.parse("2016-01-09"), price: 150 },
    { timestamp: Date.parse("2016-01-10"), price: 160 },
    { timestamp: Date.parse("2016-01-11"), price: 100 },
    { timestamp: Date.parse("2016-01-12"), price: 110 },
    { timestamp: Date.parse("2016-01-13"), price: 120 },
    { timestamp: Date.parse("2016-01-14"), price: 130 },
    { timestamp: Date.parse("2016-01-15"), price: 140 },
    { timestamp: Date.parse("2016-01-16"), price: 150 },
    { timestamp: Date.parse("2016-01-17"), price: 160 },
    { timestamp: Date.parse("2016-02-11"), price: 100 },
    { timestamp: Date.parse("2016-02-12"), price: 110 },
    { timestamp: Date.parse("2016-02-13"), price: 120 },
    { timestamp: Date.parse("2016-02-14"), price: 130 },
    { timestamp: Date.parse("2016-02-15"), price: 140 },
    { timestamp: Date.parse("2016-02-16"), price: 150 },
    { timestamp: Date.parse("2016-02-17"), price: 160 },
    { timestamp: Date.parse("2016-03-11"), price: 100 },
    { timestamp: Date.parse("2016-03-12"), price: 110 },
    { timestamp: Date.parse("2016-03-13"), price: 120 },
    { timestamp: Date.parse("2016-03-14"), price: 130 },
    { timestamp: Date.parse("2016-03-15"), price: 140 },
    { timestamp: Date.parse("2016-03-16"), price: 150 },
    { timestamp: Date.parse("2016-03-17"), price: 160 },
    { timestamp: Date.parse("2016-04-11"), price: 100 },
    { timestamp: Date.parse("2016-04-12"), price: 110 },
    { timestamp: Date.parse("2016-04-13"), price: 120 },
    { timestamp: Date.parse("2016-04-14"), price: 130 },
    { timestamp: Date.parse("2016-04-15"), price: 140 },
    { timestamp: Date.parse("2016-04-16"), price: 150 },
    { timestamp: Date.parse("2016-04-17"), price: 160 },
    { timestamp: Date.parse("2016-05-11"), price: 100 },
    { timestamp: Date.parse("2016-05-12"), price: 110 },
    { timestamp: Date.parse("2016-05-13"), price: 120 },
    { timestamp: Date.parse("2016-05-14"), price: 130 },
    { timestamp: Date.parse("2016-05-15"), price: 140 },
    { timestamp: Date.parse("2016-05-16"), price: 150 },
    { timestamp: Date.parse("2016-05-17"), price: 160.0 },
  ];

  const [stockName, setStockName] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [data, setData_] = useState(data_);
  const [dataQLA, setDataQLA] = useState();
  const [value, setValue] = useState(null);
  const [indicationDataRA, setIndicationDataRA] = useState();
  const [indicationDataAA, setIndicationDataAA] = useState();
  const [indicationDataQLA, setIndicationDataQLA] = useState();
  const [accuracyRA, setAccuracyRA] = useState();
  const [accuracyAA, setAccuracyAA] = useState();
  const [accuracyQLA, setAccuracyQLA] = useState();
  const [arimaForecastData, setArimaForecastData] = useState();
  const [lstmForecastData, setLstmForecastData] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  const classes = predictStyle;
  const [isLoading, setIsLoading] = useState(false);

  const buySellIndicators = [
    { timestamp: Date.parse("2016-01-05"), action: "buy", price: 110 },
    { timestamp: Date.parse("2016-01-09"), action: "buy", price: 150 },
    { timestamp: Date.parse("2016-01-10"), action: "sell", price: 160 },
    { timestamp: Date.parse("2016-01-11"), action: "buy", price: 100 },
    { timestamp: Date.parse("2016-01-17"), action: "sell", price: 160 },
    { timestamp: Date.parse("2016-04-14"), action: "sell", price: 130 },
  ];
  // const newData=[{'timestamp': 1452018600.0, 'action': 'buy', 'price': 216.85000610351562}, {'timestamp': 1452623400.0, 'action': 'buy', 'price': 200.89999389648438}, {'timestamp': 1453228200.0, 'action': 'sell', 'price': 173.64999389648438}, {'timestamp': 1453919400.0, 'action': 'sell', 'price': 185.25}, {'timestamp': 1462386600.0, 'action': 'buy', 'price': 180.35000610351562}, {'timestamp': 1464892200.0, 'action': 'buy', 'price': 196.60000610351562}, {'timestamp': 1471977000.0, 'action': 'buy', 'price': 254.39999389648438}, {'timestamp': 1475001000.0, 'action': 'sell', 'price': 253.75}, {'timestamp': 1477938600.0, 'action': 'sell', 'price': 258.95001220703125}, {'timestamp': 1484764200.0, 'action': 'sell', 'price': 258.3999938964844}];

  const handleStockNameChange = (event) => {
    setStockName(event.target.value);
  };
  const handleDateChange = (date) => {
    const year = date.$y;
    let month = date.$M + 1;
    let day = date.$D;
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setSelectedDate(formattedDate);
  };
  const handlePredict = async () => {
    if (stockName != undefined && selectedDate != undefined) {
      setIsLoading(true);
      let allDataRes = await fetchChartData(
        stockName,
        selectedDate,
        "Rolling Agent"
      );
      let allDataQLA = await fetchChartData(
        stockName,
        "2018-01-01",
        "Q-learning Agent"
      );
      let buySellRA = await fetchBuySellData(
        stockName,
        selectedDate,
        "Rolling Agent"
      );
      let buySellAA = await fetchBuySellData(
        stockName,
        selectedDate,
        "Average Agent"
      );
      let buySellQLA = await fetchBuySellData(
        stockName,
        selectedDate,
        "Q-learning Agent"
      );

      setAccuracyRA(buySellRA.profitPercent);
      setAccuracyAA(buySellAA.profitPercent);
      setAccuracyQLA(buySellQLA.profitPercent);
      allDataQLA.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      buySellRA.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      buySellAA.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      buySellQLA.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      allDataRes.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      setData_(allDataRes.data);
      setDataQLA(allDataQLA.data);
      setIndicationDataRA(buySellRA.data);
      setIndicationDataAA(buySellAA.data);
      setIndicationDataQLA(buySellQLA.data);
      setIsLoading(false);

      let forecastRes = await fetchForecastData(stockName, selectedDate);
      forecastRes.arima.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      setArimaForecastData(forecastRes.arima.data);

      forecastRes.lstm.data.filter(
        (item) => (item.timestamp = Date.parse(item.timestamp))
      );
      setLstmForecastData(forecastRes.lstm.data);
    } else {
      setIsLoading(false);
      console.log("stockname OR selecteddate is undefined");
    }
  };
  return (
    <div id="predict" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Predict the future</h2>
        </div>
        <div>
          <Grid container mt={6} spacing={2} sx={classes.external}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Dropdown
                sx={classes.external}
                Label={"Stock Name"}
                formClasses={classes.form}
                value={stockName}
                onChangeHandle={handleStockNameChange}
                SelectClasses={classes.dropdown}
                attribute="name"
                items={stocks}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignSelf="center">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // label="Basic example"
                  value={selectedDate}
                  onChange={(newValue) => {
                    handleDateChange(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField sx={classes.datePicker} {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <a onClick={handlePredict} className="btn btn-custom">
            VISUALIZE
          </a>{" "}
        </div>

        <div className="row">
          {data !== undefined && indicationDataRA !== undefined ? (
            <StockChart
              data={data}
              buySellIndicators={indicationDataRA}
              title={"Rolling Agent"}
            />
          ) : null}
          {accuracyRA !== undefined ? (
            <h3>
              PROFIT/LOSS PERCENTAGE: <span>{accuracyRA.toFixed(2)}%</span>
            </h3>
          ) : null}
          <div
            style={{ marginBottom: "150px", border: "1px solid white" }}
          ></div>
          {data !== undefined && indicationDataAA !== undefined ? (
            <StockChart
              data={data}
              buySellIndicators={indicationDataAA}
              title={"Simple Moving Average Agent"}
            />
          ) : null}
          {accuracyAA !== undefined ? (
            <h3>
              PROFIT/LOSS PERCENTAGE: <span>{accuracyAA.toFixed(2)}%</span>
            </h3>
          ) : null}
          <div
            style={{ marginBottom: "150px", border: "1px solid white" }}
          ></div>
          {dataQLA !== undefined && indicationDataQLA !== undefined ? (
            <StockChart
              data={dataQLA}
              buySellIndicators={indicationDataQLA}
              title={"Q-Learning Agent"}
            />
          ) : null}
          {accuracyQLA !== undefined ? (
            <h3>
              PROFIT/LOSS PERCENTAGE: <span>{accuracyQLA.toFixed(2)}%</span>
            </h3>
          ) : null}
          <div
            style={{ marginBottom: "150px", border: "1px solid white" }}
          ></div>
          <CustomLoader open={isLoading} />
          {/* <StockChart data={data} buySellIndicators={indicationData} /> */}
        </div>
        <div className="row">
          {data !== undefined &&
          arimaForecastData !== undefined &&
          lstmForecastData != undefined ? (
            <ForecastChart
              data={data}
              arimaForecastData={arimaForecastData}
              lstmForecastData={lstmForecastData}
              title={"Forecasting"}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
