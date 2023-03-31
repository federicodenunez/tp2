d3.csv('astronautas.csv', d3.autoType).then(data => {
    createChart(data);
  });
  
  // enojate lo q quieras lo hice igual 
  function createChart(data) {
    let yearCounts = d3.rollup(data, 
      v => v.length, 
      d => d.anio_mision
    );
    
    let chart = Plot.plot({
      marks: [
        Plot.barY(Array.from(yearCounts, ([year, count]) => ({ year, count })), {
          x: "year", // switched x and y
          y: "count",
          reverse: true
        }),
      ],
      x: {
        line: true,
        sort: true,
        nice: true,
        label: "", 
      },
      style: {
        background: "#000124",
        padding: "3px",
        color: "white",
      },
      y: {
        label: "Astronautas en misión",
        domain: [0, d3.max(Array.from(yearCounts, ([year, count]) => count))] // changed y domain to use the maximum count
      },
    });
    
    d3.select("#chart4").append(() => chart);
  }
  
  