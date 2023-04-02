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
        fill: d => (d.anio_mision == "2010" || d.anio_mision == "2019" ? "white" : "red"),
        opacity: 0.3 
      }),
      Plot.text(Array.from(yearCounts, ([year, count]) => ({ year, count })), {
        x: "year",
        y: d => d.count + 1, // adjust text position to be above bars
        text: d => d.count,
        color: "white", 
        align: "center",
        baseline: "bottom",
        font: "bold 12 px sans-serif" // adjust font size
      }),
    ],
    insetTop: 17,
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
      padding: "3px",
      color: "white",
    },
    y: {
      label: "Astronautas en misión",
      labelOffset: 20,
      domain: [0, d3.max(Array.from(yearCounts, ([year, count]) => count))],
      noTicks: true // remove ticks from y axis
    },
  });
  
  d3.select("#chartf3").append(() => chart);
}





  
  