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
        opacity: 0.9, 
      }),
      Plot.text(Array.from(yearCounts, ([year, count]) => ({ year, count })), {
        x: "year",
        y: d => d.count + 1, // ajusta la posicion de los numeros
        text: d => d.count,
        color: "white", 
        align: "center",
        baseline: "bottom",
        font: "bold sans-serif", 
        fontSize: 16,
      }),
    ],
    
    x: {
      line: false, 
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






  
  