import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // Variable to transform datapoint object to number -will return an array of values for month
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // variable to get max value using spread operator to pull array elements and add as individual args
    const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* output chart bars dynamically mapping every data point to a chart bar -data point is an object which has a value property */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          // unique identifier label using key property for outputting list 
          key={dataPoint.label}
          //every data point has a value
          value={dataPoint.value}
          //cal total max value accross all months
          maxValue={totalMax}
          // months of the year label
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
