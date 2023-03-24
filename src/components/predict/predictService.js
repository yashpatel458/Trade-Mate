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
