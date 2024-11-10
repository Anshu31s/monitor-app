import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function MonitorChart() {
  const [getDatayear, setGetDatayear] = useState([]);
  
  const [getDatacommit, setGetDatacommit] = useState([]);


 
 
  return (
    <React.Fragment>
      <div className="container-fluid mb-3 mt-3">
        <h2>Areachart Github Style</h2>

        <Chart
          type="area"
          width={600}
          height={300}
          series={[
            { name: "Commits", data: [345, 27, 121, 676, 98, 321] },
            { name: "updates", data: [45, 327, 21, 176, 98, 321] },
          ]}
          options={{
            title: {
              text: "Areachart Github Style",
              style: { fontSize: '20' },
            },

            colors: ["#4b00f9"],
            stroke: { width: 3, curve: "smooth" },
            ///fill:{opacity:1, type:'solid'},

            xaxis: {
              title: {
                text: "Commit in Year",
                style: { fontSize: '20', color: "#614040" },
              },
              categories: getDatayear,
            },
            yaxis: {
              title: {
                text: "No of Commits",
                style: { fontSize: '20' },
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default MonitorChart;
