import { Box } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import StockChart from "../StockChart";  
import predictStyle from "./predict.style"
import Dropdown from "../../global/components/DropDown/Dropdown";
import { stocks } from "../../data/stocks";
import { Grid } from "@material-ui/core";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Predict = (props) => {

  const [stockName,setStockName]=useState();
  const [selectedDate,setSelectedDate]=useState();
  const classes=predictStyle;
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
    { timestamp: Date.parse("2016-05-17"), price: 160 },
  ];
  const buySellIndicators = [
    { timestamp: Date.parse("2016-01-05"), action: "buy", price: 110 },
    { timestamp: Date.parse("2016-01-09"), action: "buy", price: 150 },
    { timestamp: Date.parse("2016-01-10"), action: "sell", price: 160 },
    { timestamp: Date.parse("2016-01-11"), action: "buy", price: 100 },
    { timestamp: Date.parse("2016-01-17"), action: "sell", price: 160 },
    { 'timestamp': Date.parse("2016-04-14"), 'action': "sell", 'price': 130 },
  ];
  // const newData=[{'timestamp': 1452018600.0, 'action': 'buy', 'price': 216.85000610351562}, {'timestamp': 1452623400.0, 'action': 'buy', 'price': 200.89999389648438}, {'timestamp': 1453228200.0, 'action': 'sell', 'price': 173.64999389648438}, {'timestamp': 1453919400.0, 'action': 'sell', 'price': 185.25}, {'timestamp': 1462386600.0, 'action': 'buy', 'price': 180.35000610351562}, {'timestamp': 1464892200.0, 'action': 'buy', 'price': 196.60000610351562}, {'timestamp': 1471977000.0, 'action': 'buy', 'price': 254.39999389648438}, {'timestamp': 1475001000.0, 'action': 'sell', 'price': 253.75}, {'timestamp': 1477938600.0, 'action': 'sell', 'price': 258.95001220703125}, {'timestamp': 1484764200.0, 'action': 'sell', 'price': 258.3999938964844}];

  const handleStockNameChange = (event) => {
    setStockName(event.target.value);
    console.log(event.target.value);
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  }
  return (
    <div id="predict" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Predict</h2>
        </div>
        <div>
        <Grid item xs={12} sm={4} md={3.5}>
        <Dropdown
            Label="Stock Name"
            formClasses={classes.form}
            value={stockName}
            onChangeHandle={handleStockNameChange}
            SelectClasses={classes.dropdown}
            attribute="name"
            items={stocks}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3.5}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-mm-dd" // customize date format if needed
        />
        </Grid>
        <p>selected date:{selectedDate&& selectedDate.toLocaleDateString()}</p>

          {/* <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stock Name
            </button> 
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {stocks.map(stock =>{
                <a className="dropdown-item" onClick={()=>setStockName(stock.name)}>{stock.name}</a>
              })}
            </div>
          </div> */}
        </div>

        <div className="row">
          <StockChart data={data_} buySellIndicators={buySellIndicators}/>
        </div>
      </div>
    </div>
  );
};
