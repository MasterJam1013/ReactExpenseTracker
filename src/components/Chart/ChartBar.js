import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    //variable to get amount bar chart should be filled based on value -rounding to nearest int, multiuplies by 100, and converts to string
    let barFill= '0%';
    
    if (props.maxValue >0){
        barFill=Math.round((props.value /props.maxValue) * 100) + '%';
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
          {/*style wants JS value as an object -outputting dynamic value using double curly braces */}
        <div className="chart-bar__fill" style={{height: barFill}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
  );
};

export default ChartBar;
