d3.csv('astronautas.csv', d3.autoType).then(data => {
  createChart(data);
});

function createChart(data) {
  let yearCounts = d3.rollup(data, 
    v => v.length, 
    d => d.anio_mision
  );
  
  let chart = Plot.plot({
    marks: [
      Plot.barY(Array.from(yearCounts, ([year, count]) => ({ year, count })), {
        x: "year",
        y: "count",
        reverse: true,
        width: 0.5,
        color: "white",
        //fill: d => (d.year == "2010" || d.year == "2019" ? "#6BFEFF" : "white"), // #DBECF3
        opacity: 0.9, 
      }),
      Plot.text(Array.from(yearCounts, ([year, count]) => ({ year, count })), {
        x: "year",
        y: d => d.count + 1, // adjust text position to be above bars
        text: d => d.count,
        color: "white", 
        align: "center",
        baseline: "bottom",
        font: "bold sans-serif", // adjust font size
        fontSize: 16,
      }),
    ],
    //insetTop: 17,
    x: {
      line: false, // hide x axis line
      sort: true,
      nice: true,
      label: "", 
      tickFormat: d3.format("d"),
      tickValues: d3.range(2010, 2020),
    },
    style: {
      background: "#000124",
      padding: "px",
      color: "white",
      
    },
    y: {
      label: "",
      labelOffset: -5,
      ticks: false, 
      domain: [0, 32],
    },
    
  });
  
  d3.select("#chart3").append(() => chart);
}






  
  