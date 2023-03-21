d3.csv('astronautas.csv', d3.autoType).then(data => {
  createChart(data);
});

function createChart(data) {
  let chart = Plot.plot({
    height: 200,
    line: true,
    zero: true,
    marks: [
      Plot.dot(data.filter(d => d.nacionalidad === "U.S.S.R/Rusia"), {
        // Jupiter
        //var data = document.querySelector("eva_mision_hs").data;
        x: "nacionalidad",
        r: "eva_mision_hs",
        fill: "#a59186", //bcafb2 o a59186
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(data.filter(d => d.nacionalidad === "EE.UU."), {
        // Sol
        x: "nacionalidad",
        r: "eva_mision_hs",
        fill: "#FED811",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(data.filter(d => d.nacionalidad === "Italia"), {
        x: "nacionalidad",
        r: "eva_mision_hs",
        fill: "#666af0",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(data.filter(d => d.nacionalidad === "Francia"), {
        x: "nacionalidad",
        r: "eva_mision_hs",
        fill: "#666af0",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(data.filter(d => d.nacionalidad === "Japon"), {
        x: "nacionalidad",
        r: "eva_mision_hs",
        fill: "#666af0",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(data.filter(d => d.nacionalidad === "Reino Unido"), {
        x: "nacionalidad",
        r: "eva_mision_hs",
        fill: "#666af0",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
    ],
    marginLeft: -10,
    marginRight: -10,
    symbol: {
      legend: true,
    },
    style: {
      background: "#000124",
      padding: "0px",
      color: "white",
      marginBottom: 100, // no cambia nada
    },
    x: {
      label: "",
    }

  });
  d3.select("#chart").append(() => chart);
}

/*const colors = [
  '#c7c7c7', // Mercury
  '#f1c232', // Venus
  '#66cc66', // Earth
  '#e06666', // Mars
  '#8ea9e5', // Jupiter
  '#b4a7d6', // Saturn
  '#aab0d6', // Uranus
  '#b0c3d6' // Neptune
];*/