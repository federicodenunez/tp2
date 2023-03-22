d3.csv('astronautas.csv', d3.autoType).then(data => {
  let dataNA = data.filter( d => d.nacionalidad ===  "China" || d.nacionalidad ===  "Paises Bajos" || 
  d.nacionalidad ===  "Reino Unido" || d.nacionalidad ===  "Alemania" || d.nacionalidad ===  "Francia" || 
  d.nacionalidad ===  "Italia" || d.nacionalidad ===  "Japon" || d.nacionalidad ===  "EE.UU." || d.nacionalidad ===  "U.S.S.R/Rusia")
  
  createChart(dataNA)
  });

  function createChart(data){
    let chart = Plot.plot({
      color: {
        type: "diverging",
        pivot,
      },
      marks: [
        Plot.cell([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], {x: d => dataNA.mision_hs, fill: d => dataNA.mision_hs})
      ]
    })
    d3.select('#chart').append(() => chart)
  }

/*
La idea es: a la derecha los paises con mas mision_hs a la izquierda los que menos tienen.
El pivot es mision horas, si esta a la izquierda te muestra los que menos tienen pintandolo en azul
Si el pivot esta a la derecha te muestra los que mas tienen pintandolo todo en rojo
*/ 


