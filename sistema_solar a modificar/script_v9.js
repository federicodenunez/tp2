d3.csv('astronautas.csv', d3.autoType).then(data => {
  createChart(data);
});

function createChart(data) {
  let rusia = data.filter(d => d.nacionalidad === "U.S.S.R/Rusia")
  let eeuu = data.filter(d => d.nacionalidad === "EE.UU.")
  let suma_eeuu = d => sum(d.eva_mision_hs)

  let italia = data.filter(d => d.nacionalidad === "Italia")
  let francia = data.filter(d => d.nacionalidad === "Francia")
  let japon = data.filter(d => d.nacionalidad === "Japon")
  let uk = data.filter(d => d.nacionalidad === "Reino Unido")
  let chart = Plot.plot({
    height: 200,
    line: true,
    zero: true,
    marks: [
      Plot.dot(rusia, {
        // Jupiter
        //var data = document.querySelector("eva_mision_hs").data;
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#a59186", //bcafb2 o a59186
        //suma_eeuu
        title: d => "eva_mision_hs: " + suma_eeuu
      }),
      Plot.dot(eeuu, {
        // Sol
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#FED811",
        title: d => "eva_mision_hs: " + suma_eeuu
      }),
      Plot.dot(italia, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#f1c232",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(francia, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#c7c7c7",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(japon, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#66cc66",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
      Plot.dot(uk, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#e06666",
        title: d => "eva_mision_hs: " + d.eva_mision_hs
      }),
    ],
    r: {
      range: [0, 41]
    },
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

/* Para agregar una dimension mas
podemos usar los colores o el eje y 
y filtrar por el porcentaje de militares en los astronautas totales
para eso hacemos militares / militares + civiles (astronautas)
y esto define el color del planeta
];*/
// tmb en vez de colores podemos poner una foto el planeta para que sea mas evidente