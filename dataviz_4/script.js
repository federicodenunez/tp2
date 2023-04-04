d3.csv('astronautas.csv', d3.autoType).then(data => {
  createChart(data);
});

function createChart(data) {
  let rusia = data.filter(d => d.nacionalidad === "U.S.S.R/Rusia")
  let suma_rusia = Math.round(d3.sum(rusia, d => d.eva_mision_hs))

  let eeuu = data.filter(d => d.nacionalidad === "EE.UU.")
  let suma_eeuu = Math.round(d3.sum(eeuu, d => d.eva_mision_hs))

  let italia = data.filter(d => d.nacionalidad === "Italia")
  let suma_italia = Math.round(d3.sum(italia, d => d.eva_mision_hs))

  let francia = data.filter(d => d.nacionalidad === "Francia")
  let suma_francia = Math.round(d3.sum(francia, d => d.eva_mision_hs))

  let japon = data.filter(d => d.nacionalidad === "Japon")
  let suma_japon = Math.round(d3.sum(japon, d => d.eva_mision_hs))

  let uk = data.filter(d => d.nacionalidad === "Reino Unido")
  let suma_uk = Math.round(d3.sum(uk, d => d.eva_mision_hs))


  let chart = Plot.plot({
    height: 200,
    line: true,
    zero: true,
    marks: [
      Plot.dot(rusia, {
        // Jupiter
        //var data = document.querySelector("eva_mision_hs").data;
        x: "nacionalidad",
        r: d => suma_rusia,
        fill: "#a59186", //bcafb2 o a59186
        title: d => "Horas totales: " + suma_rusia
      }),
      Plot.dot(eeuu, {
        // Sol
        x: "nacionalidad",
        r: d => suma_eeuu,
        fill: "#FED811",
        title: d => "Horas totales: " + suma_eeuu
      }),
      Plot.dot(italia, {
        x: "nacionalidad",
        r: d => suma_italia,
        fill: "#f1c232",
        title: d => "Horas totales: " + suma_italia
      }),
      Plot.dot(francia, {
        x: "nacionalidad",
        r: d => suma_francia,
        fill: "#c7c7c7",
        title: d => "Horas totales: " + suma_francia
      }),
      Plot.dot(japon, {
        x: "nacionalidad",
        r: d => suma_japon,
        fill: "#66cc66",
        title: d => "Horas totales: " + suma_japon
      }),
      Plot.dot(uk, {
        x: "nacionalidad",
        r: d => suma_uk,
        fill: "#e06666",
        title: d => "Horas totales: " + suma_uk
      }),
    ],
    r: {
      range: [0, 45]
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
  d3.select("#chart4").append(() => chart);
}
