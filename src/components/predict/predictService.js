import axios from 'axios'
import React from 'react'

export const fetchChartData=async (stockName,startingDate,agentName_)=>{
    try{
        const res=await axios.post('http://192.168.50.33:5000/ai-trading/get-stock-data', {
            stockName: stockName,
            agentName:agentName_,
            startDate: startingDate
          });
          return res.data;
    }catch(e){
        console.error("ERROR in fetchChartData:",e)
    }
}
export const fetchBuySellData=async (stockName,startingDate,agentName_)=>{
    try{
        const res=await axios.post('http://192.168.50.33:5000/ai-trading/buy-sell-call', {
            stockName: stockName,
            agentName:agentName_,
            startDate: startingDate
          });
          return res.data;
    }catch(e){
        console.error("ERROR in fetchBuySellData:",e)
    }
}

export const fetchForecastData=async (stockName,startingDate,agentName_)=>{
    try{
        const res=await axios.post('http://192.168.50.33:5000/ai-trading/predict', {
            stockName: stockName,
            startDate: startingDate
          });
          return res.data;
    }catch(e){
        console.error("ERROR in fetchForecastData:",e)
    }
}
