import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");
  const [time, settime] = useState("hour");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        settime("hour")
        return day;
      case "7d":
        settime("day")
        return week;
      case "1y":
        settime("month")
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    console.log(data);
    if (chartRef && chartRef.current && detail) {
      
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `Precio de ${detail.name}`,
              data: determineTimeFormat(),
              
              backgroundColor: 'rgb(241, 247, 254)',
              borderColor: 'rgb(147, 205, 250)',
              pointRadius: 0,
            },
          ],
        },
        options: {
          lineHeightAnnotation: {
            always: true,
            hover: true,
            lineWeight: 1.5,
          },
        
          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  unit: time
                  //ver 
              },
                distribution: "linear",
                
              },
            ],
          }
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">Último Precio:  {detail.current_price.toFixed(2)} USD</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            <span style={{color:'black'}}>Variacion 24hs: </span>{detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>

      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm"
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
