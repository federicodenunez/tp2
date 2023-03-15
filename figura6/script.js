d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let dataNA = data //.filter( d => d.country ===  "EE.UU." || d.country ===  "U.S.S.R/Rusia")
  createChart(dataNA)
});

function createChart(data){
  let chart = Plot.plot({
    height:400,
    width:400,
    marginLeft:60,
    marginBottom:50,
    line:true,
    nice:true,
    marks: [
      Plot.areaX(data, { 
        x1:  d => d3.min( data.filter( dat => dat.anio_mision == d.anio_mision), (d) => d.mision_hs),
        x2: d => d3.max( data.filter( dat => dat.anio_mision == d.anio_mision), (d) => d.mision_hs), // si ponemos eva cambia bastante
        y:"anio_mision",
        //inverse: true,
        fill:"#0077b6",
      }) 
    ],
    y:{
      reverse:true,
      tickFormat: d3.format(".0f"), 
    },
    x:{
      domain:[0, d3.max(data, (d) => d.mision_hs)],
      ticks: 14,
      grid:true,
      label:"Min of mision hours, Max of mision hours"
    }
  });
  d3.select("#chart").append(() => chart);
};