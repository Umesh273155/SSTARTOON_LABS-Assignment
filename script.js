function plotGraph() {

var percentageVal1=document.getElementById("percentage1")      ;
var percentageVal2=document.getElementById("percentage2")      ;
var percentageVal3=document.getElementById("percentage3")      ;
var inputValue = document.getElementById("input-value").value;
var maxValue = document.getElementById("max-value").value;
 
 if (inputValue > maxValue) {
   alert("Input value cannot be greater than max value.");
   return;
 }
 
 var percentage =Math.round((inputValue / maxValue) * 100);
   if(inputValue.length>0 && maxValue.length>0){
 percentageVal1.innerText=percentage+"%";
 percentageVal2.innerText=percentage+"%";
 percentageVal3.innerText=percentage+"%";
   }
 // Vertical bar graph
 var bar = document.querySelector(".vertical-bar-graph .graph-bar");
 bar.style.height = percentage + "%";
 
 // Pie charts
// Pie chart
var slices = document.querySelectorAll(".pie-chart .pie-slice");
var angle = percentage / 100 * 360;
slices[0].style.transform = "rotate(" + angle + "deg)";
slices[1].style.transform = "rotate(" + angle + "deg)";
// Level 3: Gradient in Vertical Bar Graph

// Get the input and max value elements
var input = document.getElementById("input-value");
var max = document.getElementById("max-value");
// div class="gradient-graph">

// Get the graph element and its context
var canvas = document.getElementById("bar-graph");
var ctx = canvas.getContext("2d");

// Define the gradient
var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(1, "red");

// Draw the graph
function drawGraph() {
 // Get the input and max values
 var inputValue = parseFloat(input.value);
 var maxValue = parseFloat(max.value);
 
 // Check if input value is greater than max value
 if (inputValue > maxValue) {
   alert("Input value cannot be greater than Max value");
   return;
 }

 // Calculate the percentage and height of the input value
 var percentage = inputValue / maxValue * 100;
 var height = percentage / 100 * canvas.height;

 // Clear the canvas
 ctx.clearRect(0, 0, canvas.width, canvas.height);

 // Draw the background
 ctx.fillStyle = "#f5f5f5";
 ctx.fillRect(0, 0, canvas.width, canvas.height);

 // Draw the gradient bar
 ctx.fillStyle = gradient;
 ctx.fillRect(0, canvas.height - height, canvas.width, height);

 // Draw the border
 ctx.strokeStyle = "black";
 ctx.strokeRect(0, 0, canvas.width, canvas.height);

 // Draw the percentage label
 ctx.fillStyle = "black";
 ctx.font = "bold 20px Arial";
 ctx.textAlign = "center";
 ctx.textBaseline = "middle";
 ctx.fillText(percentage.toFixed(2) + "%", canvas.width / 2, canvas.height / 2);
}

// Add event listener for input and max value changes
input.addEventListener("input", drawGraph);
max.addEventListener("input", drawGraph);

// Draw the graph initially
drawGraph();
}