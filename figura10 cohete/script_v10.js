// Import the plot.plot library
const plot = require('plot.plot');

// Define the data for the rocket bars
const xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const yValues = [0, 2, 2, 5, 5, 6, 6, 5, 5, 2];

// Create the plot and set its properties
const rocketPlot = plot()
  .setData({ x: xValues, y: yValues })
  .setType('bar')
  .setColor('blue')
  .setLineWidth(2)
  .setXLabel('Rocket Stage')
  .setYLabel('Altitude')
  .setYRange([0, 8])
  .setTitle('Rocket Altitude')
  .render();

// Display the plot in the console
console.log(rocketPlot);
