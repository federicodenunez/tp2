d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let dataNA = data.filter( d => d.nacionalidad ===  "EE.UU." || d.country ===  "U.S.S.R/Rusia")
  createChart(dataNA)
});

function createChart(data){
  let chart = Plot.plot({
    height:500,
    width:400,
    marginLeft:60,
    marginBottom:50,
    line:true,
    color: {
      legend: true
    },
    facet: {
      data: data,
      y: "nacionalidad",
      marginRight: 140
    },
    marks: [
      Plot.areaY(data, {
        x: "anio_mision", 
        y2: "mision_hs", 
        z: "nacionalidad",
        fillOpacity: 0.1
      }),
      Plot.lineY(data, {
        x: "anio_mision", 
        y: "mision_hs",
        z: "nacionalidad",
        strokeWidth: 1
      })
    ],
    x:{
      domain:[d3.min(data, (d) => d.anio_mision)-1,d3.max(data, (d) => d.anio_mision)+1],
      ticks:11,
      tickRotate:-90,
    },
    y:{
      ticks:7,
      grid:true,
    },
  });
  d3.select("#chart").append(() => chart);
};
