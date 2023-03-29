d3.csv('astronautas.csv', d3.autoType).then(data => {
  createChart(data);
});

function createChart(data) {
  let rusia = data.filter(d => d.nacionalidad === "U.S.S.R/Rusia")
  let suma_rusia = d3.sum(rusia, d => d.eva_mision_hs)

  let eeuu = data.filter(d => d.nacionalidad === "EE.UU.")
  let suma_eeuu = d3.sum(eeuu, d => d.eva_mision_hs)

  let italia = data.filter(d => d.nacionalidad === "Italia")
  let suma_italia = d3.sum(italia, d => d.eva_mision_hs)

  let francia = data.filter(d => d.nacionalidad === "Francia")
  let suma_francia = d3.sum(francia, d => d.eva_mision_hs)

  let japon = data.filter(d => d.nacionalidad === "Japon")
  let suma_japon = d3.sum(japon, d => d.eva_mision_hs)

  let uk = data.filter(d => d.nacionalidad === "Reino Unido")
  let suma_uk = d3.sum(uk, d => d.eva_mision_hs)


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
        title: d => "eva_mision_hs: " + suma_rusia
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
        title: d => "eva_mision_hs: " + suma_italia
      }),
      Plot.dot(francia, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#c7c7c7",
        title: d => "eva_mision_hs: " + suma_francia
      }),
      Plot.dot(japon, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#66cc66",
        title: d => "eva_mision_hs: " + suma_japon
      }),
      Plot.dot(uk, {
        x: "nacionalidad",
        r: d => d.eva_mision_hs,
        fill: "#e06666",
        title: d => "eva_mision_hs: " + suma_uk
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
    },
    x: {
      label: "",
    }

  });
  d3.select("#chart3").append(() => chart);
}

// Titulo: Horas de mision extra vehiculares por país

/* Para agregar una dimension mas
podemos usar los colores o el eje y 
y filtrar por el porcentaje de militares en los astronautas totales
para eso hacemos militares / militares + civiles (astronautas)
y esto define el color del planeta
];*/
// tmb en vez de colores podemos poner una foto el planeta para que sea mas evidente