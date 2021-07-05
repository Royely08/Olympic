canvas = document.getElementById('mycanvas');
ctx= canvas.getcontext("2d");

ctx.beginPath();
ctx.stokeStyle = "red";
ctx.linewidth = 2;
ctx.arc(150,143,430,200); 
ctx.stokeStyle();

ctx.beginPath();
ctx.stokeStyle = "blue";
ctx.linewidth = 2;
ctx.arc(250,210,40,0); 
ctx.stokeStyle();

ctx.beginPath();
ctx.stokeStyle = "pink";
ctx.linewidth = 2;
ctx.arc(350,277,40,0); 
ctx.stokeStyle();

console.log(ctx);
document.getElementById(ctx).innerHTML;
